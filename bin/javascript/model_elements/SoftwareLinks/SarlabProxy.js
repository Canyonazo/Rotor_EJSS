function SarlabProxy (ip, basepath, port, experience) {
	this.ip = ip; 
	this.basepath = basepath; 
	this.port = port; 
	this.credentials = null;
	this.contentType = 'text/xml';
	this.connected = false;
	this.experience = experience;

	this.get = function(url, callback) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() { 
			if(xmlHttp.readyState === xmlHttp.DONE && xmlHttp.status === 200) {
				callback(xmlHttp.responseText);
			}
		};
		xmlHttp.open('GET', url, true);
		xmlHttp.send(null);
	};

	this.post = function(url, payload, callback) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() { 
			if(xmlHttp.readyState === xmlHttp.DONE && xmlHttp.status === 200) {
				callback(xmlHttp.responseText);
			}
		};
		xmlHttp.open('POST', url, true);
		xmlHttp.withCredentials = true;
		xmlHttp.setRequestHeader('Content-Type', this.contentType);
		xmlHttp.send(payload);
	}
}

SarlabProxy.prototype.getCredentialString = function () {
		if(this.credentials != null) {
			if(this.credentials['key'] !== undefined) {
				return '&key=' + this.credentials.key;
			} else if(this.credentials['username'] !== undefined && this.credentials['password'] !== undefined) {
				return '&username=' + this.credentials.username + '&password=' + this.credentials.password;
			}
		}
		return '';
};

SarlabProxy.prototype.setSarlabInfo = function(host, basepath, port, experience) {
	this.ip = host;
	this.basepath = basepath;
	this.port = port;
	this.experience = experience;
};

SarlabProxy.prototype.setSarlabCredentials = function(credentials) {
	if(credentials['key'] !== undefined) {
		this.credentials = {
			'key': credentials.key
		};
        this.withCredentials = true;
	} else if(credentials['username'] !== undefined && credentials['password'] !== undefined) {
		this.credentials = {
			'username': credentials.username,
			'password': credentials.password
		};
        this.withCredentials = true;
        /*this.headers = this.headers.push({ // If we finally decide to do authentication with Sarlab via HTTP basic auth
            'Authorization': 'Basic ' + btoa(this.credentials.username + ':' + this.credentials.password)
        });*/
	}
};

SarlabProxy.prototype.getUrl = function(url) {
    return this.getProxyPath() + '?url=' + url + this.getCredentialString();
};

SarlabProxy.prototype.getProxyPath = function() {
	return this.getBaseUrl() + '/proxy';
};

SarlabProxy.prototype.getBaseUrl = function() {
	if(this.port !== 80) {
		return 'http://' + this.ip + ':' + this.port + '/' + this.basepath;
	}
	return 'http://' + this.ip + '/' + this.basepath;
};

SarlabProxy.prototype.getUrlById = function(id, suffix) {
	var finalURL = this.getFinalUrlById(id, suffix);
	var result = this.getProxyPath();
	if(finalURL !== undefined) {
		result += '?url=' + finalURL + this.getCredentialString();
	}
	return result;
};

SarlabProxy.prototype.getHtmlProxies = function() {
	var result = undefined;
	try {
		// info["ListConnectionProxyWebsocket"]["ConnectionProxyWebsocket"];
		result = this.info["ListConnectionProxyHTML"]["ConnectionProxyHTML"];
	} catch(error) {
		console.log('error: ' + error);
	}
	return result;
};

SarlabProxy.prototype.getFinalUrlById = function(id, suffix) {
	var proxies = this.getHtmlProxies();
	var result = undefined;
	var n = 0; 
	if(proxies != undefined) { n = proxies.length; }
	for (var i = 0; i < n; i++) {
		if(proxies[i].Description === id) {
			var url = proxies[i].IPInternal + ':' + proxies[i].PortInternal;
			if(!url.startsWith('http')) {
				url = 'http://' + url;
			}
			if(suffix !== undefined) {
				if(!suffix.startsWith('/')) {
					url += '/';
				}
				url += suffix;
			}
			result = url;
		}
	}
	return result;
};

SarlabProxy.prototype.connectExperience = function(experience, callback) {
	var url = this.getBaseUrl() + '/webresources/service?idExp=' + experience;
	this.get(url, function(response) {
		this.info = JSON.parse(response);
		this.connected = true;
		if(callback !== undefined) {
			callback(this.info);
		}
	}.bind(this));
};

SarlabProxy.prototype.isConnected = function () {
	return this.connected;
};

SarlabProxy.prototype.getHttpProxy = function(id, suffix) {
	var url = this.getUrlById(id, suffix);
	var transport = new Transport(url, this.credentials);
	transport.configurePostRequest();
	return transport;
};

SarlabProxy.prototype.getWebSocketProxy = function(command, IP, port, idExp, expTime, user, password, jarPath) {
	return new SarlabWebSocket(command, IP, port, idExp, expTime, user, password, jarPath);
};

//--------------------------------------------------------------------------------------------------

function Transport(url, credentials) {
	this.url = url;
	this.credentials = credentials;
	this.asynchronous = true;

	this.send = function(payload, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open(this.method, this.url, this.asynchronous);
		for(var header in this.headers) {
			xhr.setRequestHeader(header, this.headers[header]);
		}
		if(this.withCredentials) {
			xhr.withCredentials = true;
		}
		if(this.asynchronous) {
			xhr.onreadystatechange = function() {
				if(xhr.readyState === xhr.DONE && xhr.status === 200) {
					try {
						var response = xhr.responseXML;
						callback(response);
					} catch(error) {
						console.log(error);
					}
				} 
			}
		}
		xhr.send(payload);
	};

	this.configureGetRequest = function() {
		this.method = 'GET';
	};

	this.configurePostRequest = function() {
		this.method = 'POST';
		this.headers = {
			'Accept': 'text/xml',
			'Content-Type': 'text/xml' //use text/plain instead to avoid OPTIONS preflight request
		};
	};

    this.sse = function(url) {
        var source;
        // Register to the SSE:
        if(typeof(EventSource) !== "undefined") {
        	console.log(url);
            source = new EventSource(this.getUrl(url)); // TODO: url would point to the vi at the moment
        } else {
            // Poly fil (TODO)
        }
        return source;
    };
}

//--------------------------------------------------------------------------------------------------

function SarlabWebSocket(command, IP, port, idExp, expTime, user, password, jarPath) {
	var ws = new WebSocket("ws://127.0.0.1:8887");
	this.ws = ws;

	ws.onopen = function() {
		ws.send("Message to send \r\n");
		var obj = '{'
			+ '"command":"' + command + '",'
			+ '"ip_server":"' + IP + '",'
			+ '"port_server":"' + port + '",'
			+ '"id_exp":"' + idExp + '",'
			+ '"expiration_time":"' + expTime + '",'
			+ '"user":"' + user + '",'
			+ '"password":"' + password + '"';
		if (command === 'execjar') {
			obj += ',' + '"jar_file":"' + jarPath + '"';
		}
		obj += '}';
		ws.send(obj);
		console.log("Connected to Sarlab experience: " + idExp);
	};

	ws.onmessage = function (evt) {
		console.log("Message from Sarlab server: " + evt.data);
	};

	ws.onerror = function() {
		console.log('This: ' + this);
		if (ws.readyState === 1 || ws.readyState === 2) {
			this.ws.send("exit");
		}
		alert("You need to download, install and/or run the Sarlab service.");
		var a = document.createElement("a");
		a.download = "installsarlabservice_win64.exe";
		a.href = "http://sarlab2.uhu.es/downloads/installsarlabservice_win64.exe";
		a.target = "_blank";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	ws.onclose = function() {
		console.log("Connection has been closed.");
	};

	window.onbeforeunload = function() {
		ws.send('{"command":"reset"}');
		ws.send('{"command":"exit"}');
	};
}

SarlabWebSocket.prototype.connectExperience = function(command, IP, port, idExp, expTime, user, password, jarPath) {
	var obj = '{'
		+ '"command":"' + command + '",'
		+ '"ip_server":"' + IP + '",'
		+ '"port_server":"' + port + '",'
		+ '"id_exp":"' + idExp + '",'
		+ '"expiration_time":"' + expTime + '",'
		+ '"user":"' + user + '",'
		+ '"password":"' + password + '"';
	if (command === 'execjar') {
		obj += ',' + '"jar_file":"' + jarPath + '"';
	}
	obj += '}';
	this.ws.send(obj);
};

SarlabWebSocket.prototype.stopExperience = function() {
	this.ws.send('{"command":"exit"}');
};


SarlabWebSocket.prototype.resetExperience = function() {
	this.ws.send('{"command":"reset"}');
};
