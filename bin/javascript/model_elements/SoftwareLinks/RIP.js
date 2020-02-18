/**
 * JSON-RPC Client
 * author: Jesús Chacón <jcsombria@gmail.com>
 *
 * Copyright (C) 2013 Jesús Chacón
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


var JsonRpcBuilder = {
	request: function(method, params, id) {
		if(params && !(params instanceof Array)) {
		  throw new InvalidParamsException();
	  }
		var request = {
		  jsonrpc: '2.0',
		  method: method,
		};
		if(params !== undefined) {
		  request.params = params;
		}
		if(id !== undefined) {
		  request.id = id;
    }
		return request;
	},

	response: function(result, id) {
		return {
			jsonrpc: '2.0',
			result: result,
			id: id
		}
	},

	responseWithError: function(error, id) {
		return {
			jsonrpc: '2.0',
			error: error,
			id: id
		};
	},

	error: function(code, message, data) {
		return {
			code: code, 
			message: message, 
			data: data
		};
	},

	parseResponse: function(responseString) {
		var response = null;
		try {
			response = JSON.parse(responseString);
		} catch(error) {
			console.log(error);
		}
		return (response != null) ? response.result : null;
	}
} 
 
function wrapper(host, port) {
  var transport = new HttpTransport(host, port);
  this.jsonrpcClient = new JsonRpcClient(transport);
  return this;
}

wrapper.prototype = {
  methods: {
  	connect: 'connect', // Open a new connection
  	disconnect: 'disconnect', // Close the connection
  	get: 'get', // Get some variables from the server
  	set: 'set', // Set some variables in the server
    eval: 'eval', // Send code to evaluate
    open: 'open', // Open a Simulink Model
    step: 'step', // Advance a simulation step
  },

  post: function(method, params) {
    this.jsonrpcClient.invokeLater(method, params);
  },
  
  sync: function(callback) {
    this.jsonrpcClient.sendBatch(function(response) {
      if(callback != undefined) {
        callback(response);
      }
    });
  },

  connect: function(callback) {
    this.jsonrpcClient.invoke(this.methods.connect, [], callback);
  },

  disconnect: function(callback) {
    this.jsonrpcClient.invoke(this.methods.disconnect, [], callback);
  },

  get: function(vars, callback) {
  	this.jsonrpcClient.invoke(this.methods.get, [vars], callback);
  },
  
  set: function(vars, values, callback) {
//  	if(arguments.length != 2 || !(vars instanceof Array) 
//  	|| !(values instanceof Array) || vars.length != values.length) 
//  		throw new Error('Invalid arguments');
    this.jsonrpcClient.invoke(this.methods.set, [vars, values], callback);
  },

  eval: function(code, callback) {
    this.jsonrpcClient.invoke(this.methods.eval, [code], callback);
  },

  open: function(model, callback) {
  	return this.jsonrpcClient.invoke(this.methods.open, [model[0]], callback);
  },

  step: function(vars, callback) {
  	return this.jsonrpcClient.invoke(this.methods.step, [1.0], callback);
  }

}
 
function JsonRpcClient(transport) {
	this.setTransport(transport);
}

JsonRpcClient.prototype = {
	batch: [],
	id: 0,

//	methodDescription: function(methods) {
//		if(!(conf instanceof Array)) return null;
//		this.methods = methods;
//	},

	setTransport: function(transport) {
		if(transport !== undefined) 
			this.transport = transport;	
	},

	invoke: function(method, params, callback) {	// Espera respuesta por parte del servidor
		if(this.transport === undefined || this.transport.send === undefined)
			throw new Error('Undefined Transport Method');
		this.id ++;
		var request = JsonRpcBuilder.request(method, params, this.id.toString());
		this.transport.send(JSON.stringify(request), function(response) {
		  var parsed = JSON.parse(response); 
		    if(callback != undefined) {
  		  callback(parsed.result);
		  }
		});
	}, 

	notify: function(method, params, callback) {	//NO espera respuesta por parte del servidor
		var request = JsonRpcBuilder.request(method, params);
		this.transport.send(JSON.stringify(request), function(response) {
		  var parsed = JSON.parse(response); 
		  if(callback != undefined) {
  		    callback(parsed.result);
		  }
		});
	},

	invokeLater: function(method, params) {
  	this.id++;
		var request = JsonRpcBuilder.request(method, params, this.id.toString());
		this.batch.push(request);
	},

	notifyLater: function(method, params) {
		var request = JsonRpcBuilder.request(method, params);
		this.batch.push(request);
	},

	sendBatch: function(callback) {
		if(this.transport === undefined || this.transport.send === undefined)
			throw new Error('Error: Undefined Transport Method');
		this.transport.send(JSON.stringify(this.batch), function(response) {
	    if(callback != undefined) {
        callback(JSON.parse(response));
	    }
		});
    this.batch = [];
	},
}

/**
 * Interface Transport {
 * 	send(request, callback)
 * }
 */

function HttpTransport(host, port) { // implements Transport
	this.configure(host, port);
}

HttpTransport.prototype = {
	host: 'localhost',
	port: 2055,

	/**
   * A configuration object with the host and port of the server:
	 * {
   *   host: 'url', 
   *   port: portNumber
	 *   transport: Transport method
   * }
	 */
	configure: function(conf) {
		try{
			if(conf.host) this.host = conf.host;
			if(conf.port) this.port = conf.port;
		} catch(error) {
			console.log(error);
		}
	},

	configure: function(host, port) {
		this.host = host;
		this.port = port;
	},

	send: function(request, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', this.getURL(), true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if(xhr.response != undefined) {
            if(callback != undefined) {
              callback(xhr.response);
            }
          }
        } else {
//          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) { 
      console.log(e);
    };
		xhr.send(request);
	},

	getURL: function() {
		return 'http://'+this.host+':'+this.port;
	}
}

/**
 * LocalTransport
 */
function LocalTransport() { // implements Transport
}

LocalTransport.prototype = {
	server: null,

	configure: function(server) {
		this.server = server;
	},

	send: function(request) {
		var response;
		try {
			var req = JSON.parse(request);
			if(this.server != null) {
				response = this.server.parse(request);
			}
		} catch(error) {}
		if(response !== undefined && response.result !== undefined) return response.result;
		return null;
	}
}

function buildXHR(cors) {
	if(cors) {
		return (typeof XDomainRequest != "undefined") ? new XDomainRequest() : new XMLHttpRequest();
	} else {
		return (typeof XMLHttpRequest != "undefined") ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	}
}; 
 
function JsonRpcClient(transport) {
	this.setTransport(transport);
}

JsonRpcClient.prototype = {
	batch: [],
	id: 0,

//	methodDescription: function(methods) {
//		if(!(conf instanceof Array)) return null;
//		this.methods = methods;
//	},

	setTransport: function(transport) {
		if(transport !== undefined) 
			this.transport = transport;	
	},

	invoke: function(method, params, callback) {	// Espera respuesta por parte del servidor
		if(this.transport === undefined || this.transport.send === undefined)
			throw new Error('Undefined Transport Method');
		this.id ++;
		var request = JsonRpcBuilder.request(method, params, this.id.toString());
		this.transport.send(JSON.stringify(request), function(response) {
		  var parsed = JSON.parse(response); 
		  if(callback != undefined) {
  		  callback(parsed.result);
		  }
		});
	}, 

	notify: function(method, params, callback) {	//NO espera respuesta por parte del servidor
		var request = JsonRpcBuilder.request(method, params);
		this.transport.send(JSON.stringify(request), function(response) {
		  var parsed = JSON.parse(response); 
		  if(callback != undefined) {
  		  callback(parsed.result);
		  }
		});
	},

	invokeLater: function(method, params) {
  	this.id++;
		var request = JsonRpcBuilder.request(method, params, this.id.toString());
		this.batch.push(request);
	},

	notifyLater: function(method, params) {
		var request = JsonRpcBuilder.request(method, params);
		this.batch.push(request);
	},

	sendBatch: function(callback) {
		if(this.transport === undefined || this.transport.send === undefined)
			throw new Error('Error: Undefined Transport Method');
		this.transport.send(JSON.stringify(this.batch), function(response) {
	    if(callback != undefined) {
        callback(JSON.parse(response));
	    }
		});
    this.batch = [];
	},
}

/**
 * Interface Transport {
 * 	send(request, callback)
 * }
 */

function HttpTransport(host, port) { // implements Transport
	this.configure(host, port);
}

HttpTransport.prototype = {
	host: 'localhost',
	port: 2055,

	/**
   * A configuration object with the host and port of the server:
	 * {
   *   host: 'url', 
   *   port: portNumber
	 *   transport: Transport method
   * }
	 */
	configure: function(conf) {
		try{
			if(conf.host) this.host = conf.host;
			if(conf.port) this.port = conf.port;
		} catch(error) {
			console.log(error);
		}
	},

	configure: function(host, port) {
		this.host = host;
		this.port = port;
	},

	send: function(request, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', this.getURL(), true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if(xhr.response != undefined) {
            if(callback != undefined) {
              callback(xhr.response);
            }
          }
        } else {
//          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) { 
      console.log(e);
    };
		xhr.send(request);
	},

	getURL: function() {
		return 'http://'+this.host+':'+this.port;
	}
}

/**
 * LocalTransport
 */
function LocalTransport() { // implements Transport
}

LocalTransport.prototype = {
	server: null,

	configure: function(server) {
		this.server = server;
	},

	send: function(request) {
		var response;
		try {
			var req = JSON.parse(request);
			if(this.server != null) {
				response = this.server.parse(request);
			}
		} catch(error) {}
		if(response !== undefined && response.result !== undefined) return response.result;
		return null;
	}
}

function buildXHR(cors) {
	if(cors) {
		return (typeof XDomainRequest != "undefined") ? new XDomainRequest() : new XMLHttpRequest();
	} else {
		return (typeof XMLHttpRequest != "undefined") ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	}
};
