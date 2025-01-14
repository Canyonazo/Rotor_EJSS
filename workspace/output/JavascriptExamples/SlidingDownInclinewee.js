/* _inputParameters: an object with different values for the model parameters */
function SlidingDownInclinewee(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
  var _model = EJSS_CORE.createAnimationLMS();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

var _stringProperties = {};
  var _tools = {
    showInputDialog : EJSS_INTERFACE.BoxPanel.showInputDialog,
    showOkDialog : EJSS_INTERFACE.BoxPanel.showOkDialog,
    showOkCancelDialog : EJSS_INTERFACE.BoxPanel.showOkCancelDialog,
    downloadText: EJSS_TOOLS.File.downloadText,
    uploadText: function(action) { EJSS_TOOLS.File.uploadText(_model,action); } 
  };

var accelerometer = EJSS_HARDWARE.accelerometer();
  function _play()  { _isPaused = false; _isPlaying = true;  _model.play();  }
  function _pause() { _isPaused = true;  _isPlaying = false; _model.pause(); }
  function _step()  { _pause();  _model.step(); }
  function _reset() { _model.reset();  _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); }
  _model._play  = _play;
  _model._pause = _pause;
  _model._step  = _step;
  _model._reset = _reset;
  function _update() { _model.update(); }
  function _initialize() { _model.initialize(); }
  function _setFPS(_fps) { _model.setFPS(_fps); }
  function _setDelay(_delay) { _model.setDelay(_delay); }
  function _setStepsPerDisplay(_spd) { _model.setStepsPerDisplay(_spd); }
  function _setUpdateView(_updateView) { _model.setUpdateView(_updateView); }
  function _setAutoplay(_auto) { _model.setAutoplay(_auto); }
  function _println(_message) { console.log(_message); }

  function _breakAfterThisPage() { _model.setShouldBreak(true); }

  function _resetSolvers() { if (_model.resetSolvers) _model.resetSolvers(); }

  function _saveText(name,type,content) { if (_model.saveText) _model.saveText(name,type,content); }

  function _saveState(name) { if (_model.saveState) _model.saveState(name); }

  function _saveImage(name,panelname) { if (_model.saveImage) _model.saveImage(name,panelname); }

  function _readState(url,type) { if (_model.readState) _model.readState(url,type); }

  function _readText(url,type,varname) { if (_model.readText) _model.readText(url,type,varname); }

  function _getStringProperty(propertyName) {
    var _value = _stringProperties[propertyName];
    if (_value===undefined) return propertyName;
    else return _value;
  }
  var __pagesEnabled = [];
  function _setPageEnabled(pageName,enabled) { __pagesEnabled[pageName] = enabled; }

  var range; // EjsS Model.Variables.Var Table.range
  var xmin; // EjsS Model.Variables.Var Table.xmin
  var xmax; // EjsS Model.Variables.Var Table.xmax
  var ymin; // EjsS Model.Variables.Var Table.ymin
  var ymax; // EjsS Model.Variables.Var Table.ymax

  var width; // EjsS Model.Variables.Display Vars.width
  var height; // EjsS Model.Variables.Display Vars.height
  var size; // EjsS Model.Variables.Display Vars.size
  var tableH; // EjsS Model.Variables.Display Vars.tableH
  var tableW; // EjsS Model.Variables.Display Vars.tableW
  var boxW; // EjsS Model.Variables.Display Vars.boxW
  var boxH; // EjsS Model.Variables.Display Vars.boxH
  var thickness; // EjsS Model.Variables.Display Vars.thickness
  var x0; // EjsS Model.Variables.Display Vars.x0
  var v0; // EjsS Model.Variables.Display Vars.v0
  var xHot; // EjsS Model.Variables.Display Vars.xHot
  var pi; // EjsS Model.Variables.Display Vars.pi

  var showForceBody; // EjsS Model.Variables.Constants.showForceBody
  var arrowScale; // EjsS Model.Variables.Constants.arrowScale
  var m; // EjsS Model.Variables.Constants.m
  var g; // EjsS Model.Variables.Constants.g
  var phi; // EjsS Model.Variables.Constants.phi
  var theta; // EjsS Model.Variables.Constants.theta
  var thetaLeft; // EjsS Model.Variables.Constants.thetaLeft
  var thetaRight; // EjsS Model.Variables.Constants.thetaRight
  var tilt; // EjsS Model.Variables.Constants.tilt
  var tiltdeg; // EjsS Model.Variables.Constants.tiltdeg
  var normal; // EjsS Model.Variables.Constants.normal
  var friction; // EjsS Model.Variables.Constants.friction
  var muStatic; // EjsS Model.Variables.Constants.muStatic
  var gxForce; // EjsS Model.Variables.Constants.gxForce
  var gyForce; // EjsS Model.Variables.Constants.gyForce
  var gForce; // EjsS Model.Variables.Constants.gForce
  var muKinetic; // EjsS Model.Variables.Constants.muKinetic
  var onBumper; // EjsS Model.Variables.Constants.onBumper
  var direction; // EjsS Model.Variables.Constants.direction
  var tmax; // EjsS Model.Variables.Constants.tmax
  var display; // EjsS Model.Variables.Constants.display

  var x; // EjsS Model.Variables.Acceration Vars.x
  var vx; // EjsS Model.Variables.Acceration Vars.vx
  var accX; // EjsS Model.Variables.Acceration Vars.accX
  var accY; // EjsS Model.Variables.Acceration Vars.accY
  var accZ; // EjsS Model.Variables.Acceration Vars.accZ
  var t; // EjsS Model.Variables.Acceration Vars.t
  var dt; // EjsS Model.Variables.Acceration Vars.dt
  var devicePresent; // EjsS Model.Variables.Acceration Vars.devicePresent
  var msg; // EjsS Model.Variables.Acceration Vars.msg
  var demo; // EjsS Model.Variables.Acceration Vars.demo

  var iOS; // EjsS Model.Variables.layout.iOS
  var iPad; // EjsS Model.Variables.layout.iPad
  var iPhone; // EjsS Model.Variables.layout.iPhone
  var Android; // EjsS Model.Variables.layout.Android

  var _privateOdesList;
  var _ODEi_evolution1;
  var userEvents1=[];

  _model.getOdes = function() { return [_ODEi_evolution1]; };

  _model.removeEvents = function(){
    userEvents1=[];
  };

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      range : range,
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      width : width,
      height : height,
      size : size,
      tableH : tableH,
      tableW : tableW,
      boxW : boxW,
      boxH : boxH,
      thickness : thickness,
      x0 : x0,
      v0 : v0,
      xHot : xHot,
      pi : pi,
      showForceBody : showForceBody,
      arrowScale : arrowScale,
      m : m,
      g : g,
      phi : phi,
      theta : theta,
      thetaLeft : thetaLeft,
      thetaRight : thetaRight,
      tilt : tilt,
      tiltdeg : tiltdeg,
      normal : normal,
      friction : friction,
      muStatic : muStatic,
      gxForce : gxForce,
      gyForce : gyForce,
      gForce : gForce,
      muKinetic : muKinetic,
      onBumper : onBumper,
      direction : direction,
      tmax : tmax,
      display : display,
      x : x,
      vx : vx,
      accX : accX,
      accY : accY,
      accZ : accZ,
      t : t,
      dt : dt,
      devicePresent : devicePresent,
      msg : msg,
      demo : demo,
      iOS : iOS,
      iPad : iPad,
      iPhone : iPhone,
      Android : Android
    };
  };

  function _serializePublic() { return _model.serializePublic(); }

  _model._userSerializePublic = function() {
    return {
      gxForce : gxForce,
      gyForce : gyForce,
      gForce : gForce,
      iOS : iOS,
      iPad : iPad,
      iPhone : iPhone,
      Android : Android
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.range != "undefined") range = json.range;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.width != "undefined") width = json.width;
    if(typeof json.height != "undefined") height = json.height;
    if(typeof json.size != "undefined") size = json.size;
    if(typeof json.tableH != "undefined") tableH = json.tableH;
    if(typeof json.tableW != "undefined") tableW = json.tableW;
    if(typeof json.boxW != "undefined") boxW = json.boxW;
    if(typeof json.boxH != "undefined") boxH = json.boxH;
    if(typeof json.thickness != "undefined") thickness = json.thickness;
    if(typeof json.x0 != "undefined") x0 = json.x0;
    if(typeof json.v0 != "undefined") v0 = json.v0;
    if(typeof json.xHot != "undefined") xHot = json.xHot;
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.showForceBody != "undefined") showForceBody = json.showForceBody;
    if(typeof json.arrowScale != "undefined") arrowScale = json.arrowScale;
    if(typeof json.m != "undefined") m = json.m;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.phi != "undefined") phi = json.phi;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.thetaLeft != "undefined") thetaLeft = json.thetaLeft;
    if(typeof json.thetaRight != "undefined") thetaRight = json.thetaRight;
    if(typeof json.tilt != "undefined") tilt = json.tilt;
    if(typeof json.tiltdeg != "undefined") tiltdeg = json.tiltdeg;
    if(typeof json.normal != "undefined") normal = json.normal;
    if(typeof json.friction != "undefined") friction = json.friction;
    if(typeof json.muStatic != "undefined") muStatic = json.muStatic;
    if(typeof json.gxForce != "undefined") gxForce = json.gxForce;
    if(typeof json.gyForce != "undefined") gyForce = json.gyForce;
    if(typeof json.gForce != "undefined") gForce = json.gForce;
    if(typeof json.muKinetic != "undefined") muKinetic = json.muKinetic;
    if(typeof json.onBumper != "undefined") onBumper = json.onBumper;
    if(typeof json.direction != "undefined") direction = json.direction;
    if(typeof json.tmax != "undefined") tmax = json.tmax;
    if(typeof json.display != "undefined") display = json.display;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.vx != "undefined") vx = json.vx;
    if(typeof json.accX != "undefined") accX = json.accX;
    if(typeof json.accY != "undefined") accY = json.accY;
    if(typeof json.accZ != "undefined") accZ = json.accZ;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.devicePresent != "undefined") devicePresent = json.devicePresent;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.demo != "undefined") demo = json.demo;
    if(typeof json.iOS != "undefined") iOS = json.iOS;
    if(typeof json.iPad != "undefined") iPad = json.iPad;
    if(typeof json.iPhone != "undefined") iPhone = json.iPhone;
    if(typeof json.Android != "undefined") Android = json.Android;
  };

  _model._readParametersPublic = function(json) {
    if(typeof json.gxForce != "undefined") gxForce = json.gxForce;
    if(typeof json.gyForce != "undefined") gyForce = json.gyForce;
    if(typeof json.gForce != "undefined") gForce = json.gForce;
    if(typeof json.iOS != "undefined") iOS = json.iOS;
    if(typeof json.iPad != "undefined") iPad = json.iPad;
    if(typeof json.iPhone != "undefined") iPhone = json.iPhone;
    if(typeof json.Android != "undefined") Android = json.Android;
  };

  function _unserializePublic(json) { return _model.unserializePublic(json); }

  _model._userUnserializePublic = function(json) {
    _model._readParametersPublic(json);
   _resetSolvers();
   _model.update();
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    _model._readParameters(json);
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["undefined"] = true;
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["svg"] = true;
    __pagesEnabled["axes"] = true;
    __pagesEnabled["Set Accel"] = true;
    __pagesEnabled["Sliding"] = true;
    __pagesEnabled["rightBumper"] = true;
    __pagesEnabled["leftBumper"] = true;
    __pagesEnabled["zeroVelocity"] = true;
    __pagesEnabled["Compute FB Diagram"] = true;
    __pagesEnabled["prevent going out"] = true;
    __pagesEnabled["axes"] = true;
    __pagesEnabled["lookang"] = true;
  });

  _model.addToReset(function() {
    range = 10; // EjsS Model.Variables.Var Table.range
    xmin = -10; // EjsS Model.Variables.Var Table.xmin
    xmax = 0; // EjsS Model.Variables.Var Table.xmax
    ymin = -1; // EjsS Model.Variables.Var Table.ymin
    ymax = 6; // EjsS Model.Variables.Var Table.ymax
  });

  _model.addToReset(function() {
    width = "100%"; // EjsS Model.Variables.Display Vars.width
    height = +_view._format(window.innerHeight*0.9,"0"); // EjsS Model.Variables.Display Vars.height
    size = 10; // EjsS Model.Variables.Display Vars.size
    tableH = size/8.0; // EjsS Model.Variables.Display Vars.tableH
    tableW = size; // EjsS Model.Variables.Display Vars.tableW
    boxW = 1; // EjsS Model.Variables.Display Vars.boxW
    boxH = 4; // EjsS Model.Variables.Display Vars.boxH
    thickness = 0.5; // EjsS Model.Variables.Display Vars.thickness
    x0 = 5; // EjsS Model.Variables.Display Vars.x0
    v0 = 0; // EjsS Model.Variables.Display Vars.v0
    xHot = x0; // EjsS Model.Variables.Display Vars.xHot
    pi = Math.PI; // EjsS Model.Variables.Display Vars.pi
  });

  _model.addToReset(function() {
    showForceBody = true; // EjsS Model.Variables.Constants.showForceBody
    arrowScale = 5; // EjsS Model.Variables.Constants.arrowScale
    m = 1; // EjsS Model.Variables.Constants.m
    g = 9.8; // EjsS Model.Variables.Constants.g
    phi = 0; // EjsS Model.Variables.Constants.phi
    theta = 0; // EjsS Model.Variables.Constants.theta
    thetaLeft = theta; // EjsS Model.Variables.Constants.thetaLeft
    thetaRight = theta; // EjsS Model.Variables.Constants.thetaRight
    tilt = 0.0; // EjsS Model.Variables.Constants.tilt
    tiltdeg = 0; // EjsS Model.Variables.Constants.tiltdeg
    normal = g*Math.cos(theta); // EjsS Model.Variables.Constants.normal
    friction = g*Math.sin(theta); // EjsS Model.Variables.Constants.friction
    muStatic = 0.6; // EjsS Model.Variables.Constants.muStatic
    gxForce = -m*g*Math.sin(theta+phi); // EjsS Model.Variables.Constants.gxForce
    gyForce = -m*g*Math.cos(theta+phi); // EjsS Model.Variables.Constants.gyForce
    gForce = Math.sqrt(gxForce*gxForce+gyForce*gyForce); // EjsS Model.Variables.Constants.gForce
    muKinetic = 0.5; // EjsS Model.Variables.Constants.muKinetic
    onBumper = false; // EjsS Model.Variables.Constants.onBumper
    direction = 0; // EjsS Model.Variables.Constants.direction
    tmax = 4*60; // EjsS Model.Variables.Constants.tmax
  });

  _model.addToReset(function() {
    accX = 0; // EjsS Model.Variables.Acceration Vars.accX
    accY = -g; // EjsS Model.Variables.Acceration Vars.accY
    accZ = 0; // EjsS Model.Variables.Acceration Vars.accZ
    t = 0; // EjsS Model.Variables.Acceration Vars.t
    dt = 0.1; // EjsS Model.Variables.Acceration Vars.dt
    devicePresent = false; // EjsS Model.Variables.Acceration Vars.devicePresent
    msg = "message"; // EjsS Model.Variables.Acceration Vars.msg
    demo = "none"; // EjsS Model.Variables.Acceration Vars.demo
  });

  _model.addToReset(function() {
    iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // EjsS Model.Variables.layout.iOS
    iPad = /iPad/.test(navigator.userAgent) && !window.MSStream; // EjsS Model.Variables.layout.iPad
    iPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // EjsS Model.Variables.layout.iPhone
    Android = /Android|android/i.test(navigator.userAgent); // EjsS Model.Variables.layout.Android
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _privateOdesList=[];
    _ODEi_evolution1 = _ODE_evolution1();
    _privateOdesList.push(_ODEi_evolution1);
  });

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(2);
  });

  //  Sets the sliding flag based on coefficient of friction  // > CustomCode.Set Sliding:1
  function setSliding (vx) {  // > CustomCode.Set Sliding:2
    if(vx!==0) { // sliding if vx!=0  // > CustomCode.Set Sliding:3
      direction=(vx>0)?1:-1;  // sliding left or right depending on vx  // > CustomCode.Set Sliding:4
    } else {  // vx==0   // > CustomCode.Set Sliding:5
      tilt=theta+phi;  // > CustomCode.Set Sliding:6
      var f = muStatic*Math.abs(g*Math.cos(tilt)); // maximum static friction  // > CustomCode.Set Sliding:7
      var parallel = g *Math.sin(tilt); //gravitaitonal component along incline  // > CustomCode.Set Sliding:8
      if(tilt==0 || Math.abs(parallel)<=f) { // not sliding if parallel component is < f  // > CustomCode.Set Sliding:9
        direction=0;  // > CustomCode.Set Sliding:10
      } else {  // > CustomCode.Set Sliding:11
        direction= (tilt>0)?1:-1;  // > CustomCode.Set Sliding:12
      }  // > CustomCode.Set Sliding:13
    }  // > CustomCode.Set Sliding:14
    _resetSolvers();  // > CustomCode.Set Sliding:15
  }  // > CustomCode.Set Sliding:16

  function changeOrientation() {  // > CustomCode.ChangeOrientation:1
  var iOSapp = (typeof device != 'undefined' && device.platform == "iOS");  // > CustomCode.ChangeOrientation:2
  var iOSapp2 = (typeof device != 'undefined' && device.platform == "iOS");  // > CustomCode.ChangeOrientation:3
  var Androidapp = (typeof device != 'undefined' && device.platform == "Android");  // > CustomCode.ChangeOrientation:4
  var iOS =/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.ChangeOrientation:5
  var iPad =/iPad/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.ChangeOrientation:6
  var iPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.ChangeOrientation:7
  var Android= /Android|android/i.test(navigator.userAgent);  // > CustomCode.ChangeOrientation:8
  switch (window.orientation) {  // > CustomCode.ChangeOrientation:9
              case 0:  // > CustomCode.ChangeOrientation:10
              case 180:  // > CustomCode.ChangeOrientation:11
                     this.screenOrientation = 'portrait';  // > CustomCode.ChangeOrientation:12
                    // > CustomCode.ChangeOrientation:13
                    if (iOSapp){ // does not seems to work  // > CustomCode.ChangeOrientation:14
                 //   return Math.max(window.screen.width,window.screen.height)*0.9;  // > CustomCode.ChangeOrientation:15
                return window.screen.height*0.9;      // > CustomCode.ChangeOrientation:16
                   // return window.screen.height;  // > CustomCode.ChangeOrientation:17
                  //  return window.innerHeight;  // > CustomCode.ChangeOrientation:18
                // return document.documentElement.clientHeight;  // > CustomCode.ChangeOrientation:19
                 }  // > CustomCode.ChangeOrientation:20
                 else if (iOSapp2&&iOS){ // App debugging  // > CustomCode.ChangeOrientation:21
                 //   return Math.max(window.screen.width,window.screen.height)*0.9;  // > CustomCode.ChangeOrientation:22
                return window.screen.height*0.9;      // > CustomCode.ChangeOrientation:23
                   // return window.screen.height;  // > CustomCode.ChangeOrientation:24
                  //  return window.innerHeight;  // > CustomCode.ChangeOrientation:25
                // return document.documentElement.clientHeight;  // > CustomCode.ChangeOrientation:26
                 }  // > CustomCode.ChangeOrientation:27
                   // > CustomCode.ChangeOrientation:28
                else if (iPad&&iOSapp==false){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:29
              //   return Math.max(window.screen.width,window.screen.height);  // > CustomCode.ChangeOrientation:30
            //     return window.innerHeight;  // > CustomCode.ChangeOrientation:31
            return window.screen.height*0.9;  // > CustomCode.ChangeOrientation:32
                 }  // > CustomCode.ChangeOrientation:33
                 else if (iPhone&&iOSapp==false){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:34
          //return window.innerHeight;  // > CustomCode.ChangeOrientation:35
          return window.screen.height*0.9;  // > CustomCode.ChangeOrientation:36
                   }  // > CustomCode.ChangeOrientation:37
                   else if (iPad&&iOSapp==true){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:38
              //   return Math.max(window.screen.width,window.screen.height);  // > CustomCode.ChangeOrientation:39
                 return window.screen.height;  // > CustomCode.ChangeOrientation:40
                 }  // > CustomCode.ChangeOrientation:41
                 else if (iPhone&&iOSapp==true){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:42
              return window.screen.height;  // > CustomCode.ChangeOrientation:43
                   }  // > CustomCode.ChangeOrientation:44
                     // > CustomCode.ChangeOrientation:45
   /*                  // > CustomCode.ChangeOrientation:46
                   else if (iPad&&!parent.cordova){ //browser   // > CustomCode.ChangeOrientation:47
                  //  return Math.max(window.screen.width,window.screen.height)*0.8;  // > CustomCode.ChangeOrientation:48
                 return document.documentElement.clientHeight;  // > CustomCode.ChangeOrientation:49
                 }  // > CustomCode.ChangeOrientation:50
                 else if (iPhone&&!parent.cordova){ //browser   // > CustomCode.ChangeOrientation:51
                  // return Math.max(window.screen.width,window.screen.height)*0.7;  // > CustomCode.ChangeOrientation:52
                   return document.documentElement.clientHeight;  // > CustomCode.ChangeOrientation:53
                   }  // > CustomCode.ChangeOrientation:54
                     // > CustomCode.ChangeOrientation:55
   */                  // > CustomCode.ChangeOrientation:56
                   else if (Android&&parent.cordova){  // > CustomCode.ChangeOrientation:57
                    // return Math.max(window.innerWidth,window.innerHeight)*0.9;  // > CustomCode.ChangeOrientation:58
                     return window.innerHeight;  // > CustomCode.ChangeOrientation:59
                     }  // > CustomCode.ChangeOrientation:60
                 else{  // > CustomCode.ChangeOrientation:61
                  // return Math.max(window.innerWidth,window.innerHeight)*0.9;  // > CustomCode.ChangeOrientation:62
                  return window.innerHeight;  // > CustomCode.ChangeOrientation:63
                   }  // > CustomCode.ChangeOrientation:64
                  break;  // > CustomCode.ChangeOrientation:65
              case 90:  // > CustomCode.ChangeOrientation:66
              case -90:  // > CustomCode.ChangeOrientation:67
                  this.screenOrientation = 'landscape';  // > CustomCode.ChangeOrientation:68
  /*                  // > CustomCode.ChangeOrientation:69
                  if (iPad&&!parent.cordova){ //browser  // > CustomCode.ChangeOrientation:70
                 //  return Math.min(window.screen.width,window.screen.height)*0.8;  // > CustomCode.ChangeOrientation:71
                 //alert("ipad");  // > CustomCode.ChangeOrientation:72
                return document.documentElement.clientHeight;  // > CustomCode.ChangeOrientation:73
                 }  // > CustomCode.ChangeOrientation:74
                  else if (iPhone&&!parent.cordova){ //browser  // > CustomCode.ChangeOrientation:75
                //   return Math.min(window.screen.width,window.screen.height)*0.7;  // > CustomCode.ChangeOrientation:76
                  return document.documentElement.clientHeight;  // > CustomCode.ChangeOrientation:77
                   }  // > CustomCode.ChangeOrientation:78
   */                if (iOSapp){ // App  // > CustomCode.ChangeOrientation:79
             return window.screen.height*0.9;    // > CustomCode.ChangeOrientation:80
                 // return window.screen.height;  // > CustomCode.ChangeOrientation:81
                  //  return window.innerHeight;  // > CustomCode.ChangeOrientation:82
               //  return document.documentElement.clientHeight;  // > CustomCode.ChangeOrientation:83
                 }  // > CustomCode.ChangeOrientation:84
                   // > CustomCode.ChangeOrientation:85
                else if (iPad&&iOSapp==false){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:86
              //   return Math.max(window.screen.width,window.screen.height);  // > CustomCode.ChangeOrientation:87
             //    return window.innerHeight;  // > CustomCode.ChangeOrientation:88
             return window.screen.width*0.9;  // > CustomCode.ChangeOrientation:89
                 }  // > CustomCode.ChangeOrientation:90
                 else if (iPhone&&iOSapp==false){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:91
      //    return window.innerHeight;  // > CustomCode.ChangeOrientation:92
      return window.screen.width*0.8;  // > CustomCode.ChangeOrientation:93
                   }  // > CustomCode.ChangeOrientation:94
                   else if (iPad&&iOSapp==true){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:95
              //   return Math.max(window.screen.width,window.screen.height);  // > CustomCode.ChangeOrientation:96
                 return window.screen.height;  // > CustomCode.ChangeOrientation:97
                 }  // > CustomCode.ChangeOrientation:98
                 else if (iPhone&&iOSapp==true){ // browser currently also for iOS APP  // > CustomCode.ChangeOrientation:99
              return window.screen.height;  // > CustomCode.ChangeOrientation:100
                   }  // > CustomCode.ChangeOrientation:101
                  else if (Android&&parent.cordova){ // in Android App form  // > CustomCode.ChangeOrientation:102
                   // return Math.min(window.innerWidth,window.innerHeight)*0.9;  // > CustomCode.ChangeOrientation:103
                    return window.innerHeight;  // > CustomCode.ChangeOrientation:104
                  //  alert("in Android App form");  // > CustomCode.ChangeOrientation:105
                    }  // > CustomCode.ChangeOrientation:106
                    else { // browser Android and PC  // > CustomCode.ChangeOrientation:107
                   // return Math.min(window.innerWidth,window.innerHeight)*0.9;  // > CustomCode.ChangeOrientation:108
                   // alert("browser Android and PC");  // > CustomCode.ChangeOrientation:109
                   return window.innerHeight;  // > CustomCode.ChangeOrientation:110
                    }  // > CustomCode.ChangeOrientation:111
                    // > CustomCode.ChangeOrientation:112
                  break;  // > CustomCode.ChangeOrientation:113
                // > CustomCode.ChangeOrientation:114
                // > CustomCode.ChangeOrientation:115
              default:  // > CustomCode.ChangeOrientation:116
                  this.screenOrientation = 'unknown';  // > CustomCode.ChangeOrientation:117
           //       return (iPad)?""+(window.screen.width+window.screen.height)*0.4:((iPhone)?""+window.screen.width:_view._format(window.innerHeight*0.9,"0"));  // > CustomCode.ChangeOrientation:118
         return window.innerHeight;  // > CustomCode.ChangeOrientation:119
         }  // > CustomCode.ChangeOrientation:120
      }  // > CustomCode.ChangeOrientation:121

  //https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode  // > CustomCode.fullscreen:1
  // does not work for iOS   // > CustomCode.fullscreen:2
  /*jslint browser:true */  // > CustomCode.fullscreen:3
  function toggleFullScreen() {  // > CustomCode.fullscreen:4
    if (!document.fullscreenElement &&    // alternative standard method  // > CustomCode.fullscreen:5
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods  // > CustomCode.fullscreen:6
      if (document.documentElement.requestFullscreen) {  // > CustomCode.fullscreen:7
        document.documentElement.requestFullscreen();  // > CustomCode.fullscreen:8
      } else if (document.documentElement.msRequestFullscreen) {  // > CustomCode.fullscreen:9
        document.documentElement.msRequestFullscreen();  // > CustomCode.fullscreen:10
      } else if (document.documentElement.mozRequestFullScreen) {  // > CustomCode.fullscreen:11
        document.documentElement.mozRequestFullScreen();  // > CustomCode.fullscreen:12
      } else if (document.documentElement.webkitRequestFullscreen) {  // > CustomCode.fullscreen:13
        document.documentElement.webkitRequestFullscreen();  // > CustomCode.fullscreen:14
      }  // > CustomCode.fullscreen:15
    } else {  // > CustomCode.fullscreen:16
      if (document.exitFullscreen) {  // > CustomCode.fullscreen:17
        document.exitFullscreen();  // > CustomCode.fullscreen:18
      } else if (document.msExitFullscreen) {  // > CustomCode.fullscreen:19
        document.msExitFullscreen();  // > CustomCode.fullscreen:20
      } else if (document.mozCancelFullScreen) {  // > CustomCode.fullscreen:21
        document.mozCancelFullScreen();  // > CustomCode.fullscreen:22
      } else if (document.webkitExitFullscreen) {  // > CustomCode.fullscreen:23
        document.webkitExitFullscreen();  // > CustomCode.fullscreen:24
      }  // > CustomCode.fullscreen:25
    }  // > CustomCode.fullscreen:26
  }  // > CustomCode.fullscreen:27

  _model.addToInitialization(function() {
    if (!__pagesEnabled["undefined"]) return;
    if (x ==undefined){  // > Initialization.undefined:1
     x=x0;   // > Initialization.undefined:2
      }  // > Initialization.undefined:3
    if (vx ==undefined){  // > Initialization.undefined:4
    vx=v0;  // > Initialization.undefined:5
      }  // > Initialization.undefined:6
    if (t ==undefined){  // > Initialization.undefined:7
    t=0;  // > Initialization.undefined:8
      }  // > Initialization.undefined:9
      if (display==undefined){  // > Initialization.undefined:10
        display = "none";  // > Initialization.undefined:11
     //   alert(display);  // > Initialization.undefined:12
    //    accelerometer.start();  // > Initialization.undefined:13
    //accelerometer.setAverageInterval(0.1);  // > Initialization.undefined:14
        }  // > Initialization.undefined:15
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    devicePresent=accelerometer.isPresent();  // > Initialization.Init Page:1
    //alert(devicePresent);  // > Initialization.Init Page:2
    if (!devicePresent) {  // > Initialization.Init Page:3
      alert("Accelerometer is not present." );  // > Initialization.Init Page:4
      msg="Accelerometer is not present. Use slider to simulate tilt."  // > Initialization.Init Page:5
      accX=0;  // > Initialization.Init Page:6
      accY=-g;  // > Initialization.Init Page:7
    }else if (devicePresent){  // > Initialization.Init Page:8
      msg="Use Run button to start and to access accelerometer.";  // > Initialization.Init Page:9
          accelerometer.start();  // > Initialization.Init Page:10
    accelerometer.setAverageInterval(0.1);  // > Initialization.Init Page:11
    _play(); // using this instead of the default on evolution page  // > Initialization.Init Page:12
    }  // > Initialization.Init Page:13
    //display=demo?"block":"none";  // > Initialization.Init Page:14
    onBumper=false;  // > Initialization.Init Page:15
    vx=0;  // > Initialization.Init Page:16
    //alert("2="+display);  // > Initialization.Init Page:17
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["svg"]) return;
    var container = document.createElement('div');  // > Initialization.svg:1
    var svggradient = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>'+  // > Initialization.svg:2
      '  <radialGradient id="mygrandient" cx="50%" cy="50%" r="90%" fx="90%" fy="10%">'+  // > Initialization.svg:3
      '    <stop offset="0%" style="stop-color:rgb(0,255,255); stop-opacity:1" />'+  // > Initialization.svg:4
      '    <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />'+  // > Initialization.svg:5
      '  </radialGradient>'+  // > Initialization.svg:6
      '</defs></svg>';  // > Initialization.svg:7
    container.innerHTML = svggradient;  // > Initialization.svg:8
    document.body.appendChild(container);  // > Initialization.svg:9
    //"url(#mygrandient)"  // > Initialization.svg:10
    var container = document.createElement('div');  // > Initialization.svg:11
    var svggradient = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>'+  // > Initialization.svg:12
      '  <radialGradient id="mygrandient1" cx="50%" cy="50%" r="80%" fx="30%" fy="30%">'+  // > Initialization.svg:13
      '    <stop offset="0%" style="stop-color:rgb(0,0,0); stop-opacity:0.5" />'+  // > Initialization.svg:14
      '    <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:1" />'+  // > Initialization.svg:15
      '  </radialGradient>'+  // > Initialization.svg:16
      '</defs></svg>';  // > Initialization.svg:17
    container.innerHTML = svggradient;  // > Initialization.svg:18
    document.body.appendChild(container);  // > Initialization.svg:19
    //"url(#mygrandient1)"  // > Initialization.svg:20
    var container = document.createElement('div');  // > Initialization.svg:21
    var svggradient = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>'+  // > Initialization.svg:22
      '  <radialGradient id="mygrandient2" cx="50%" cy="50%" r="70%" fx="90%" fy="50%">'+  // > Initialization.svg:23
      '    <stop offset="0%" style="stop-color:rgb(0,255,0); stop-opacity:1" />'+  // > Initialization.svg:24
      '    <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:1" />'+  // > Initialization.svg:25
      '  </radialGradient>'+  // > Initialization.svg:26
      '</defs></svg>';  // > Initialization.svg:27
    container.innerHTML = svggradient;  // > Initialization.svg:28
    document.body.appendChild(container);  // > Initialization.svg:29
    //"url(#mygrandient2)"  // > Initialization.svg:30
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["axes"]) return;
    _view.plottingPanel.getAxisX().setPosition([0,0.1]);  // > Initialization.axes:1
    _view.plottingPanel.getTitleX().setPosition([0.95,0.2]);  // > Initialization.axes:2
    _view.plottingPanel.getAxisY().setPosition([0,0]);  // > Initialization.axes:3
    _view.plottingPanel.getTitleY().setPosition([0.9,0.9]);  // > Initialization.axes:4
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Set Accel"]) return;
    //alert("2="+devicePresent);  // > Evolution.Set Accel:1
    if (devicePresent||display==="block") {  // > Evolution.Set Accel:2
        // > Evolution.Set Accel:3
      var viewData = accelerometer.getViewData();  // > Evolution.Set Accel:4
      accX = viewData.x;  // > Evolution.Set Accel:5
      accY = viewData.y;  // > Evolution.Set Accel:6
      accZ = viewData.z;  // > Evolution.Set Accel:7
      //Assume device is not present if all componets are zero  // > Evolution.Set Accel:8
      //devicePresent=viewData.x||viewData.y||viewData.z;  // > Evolution.Set Accel:9
    if (devicePresent) {  // > Evolution.Set Accel:10
      accelerometer.start();  // > Evolution.Set Accel:11
    accelerometer.setAverageInterval(0.1);  // > Evolution.Set Accel:12
    //alert("3="+devicePresent);  // > Evolution.Set Accel:13
      }  // > Evolution.Set Accel:14
    msg=devicePresent?"":"Accelerometer not present. Use slider to simulate tilt.";  // > Evolution.Set Accel:15
    }  // > Evolution.Set Accel:16
    //if(devicePresent && display!=="block"){ //accelerometer on  // > Evolution.Set Accel:17
    if(devicePresent && display=="none"){ //accelerometer on  // > Evolution.Set Accel:18
      thetaRight=thetaLeft=theta=0;  // > Evolution.Set Accel:19
    //  phi=Math.atan2(accX,-accY); //wolfgang  // > Evolution.Set Accel:20
        phi=Math.atan2(accX,-accY);  // > Evolution.Set Accel:21
    }else if (!devicePresent){ //accelerometer off  // > Evolution.Set Accel:22
      phi=0;  // > Evolution.Set Accel:23
     // accX=0;  // > Evolution.Set Accel:24
     // accY=-g;  // > Evolution.Set Accel:25
      accX=-g*Math.sin(theta);  // > Evolution.Set Accel:26
      accY=-g*Math.cos(theta);  // > Evolution.Set Accel:27
    //  display="block"  // > Evolution.Set Accel:28
     // alert("3="+display);  // > Evolution.Set Accel:29
    }  // > Evolution.Set Accel:30
    direction=(vx>0)?1:-1; // sliding left or right  // > Evolution.Set Accel:31
    if(vx==0)direction=0;  // not sliding  // > Evolution.Set Accel:32
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Sliding"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["Compute FB Diagram"]) return;
    x=Math.max(x,+boxW/2+thickness); // left bumper  // > FixedRelations.Compute FB Diagram:1
    x=Math.min(x,tableW-boxW/2-thickness); // right bumper  // > FixedRelations.Compute FB Diagram:2
    xHot=x-tableW;  // > FixedRelations.Compute FB Diagram:3
    if(!devicePresent || display=="block"){  // in demo mode  // > FixedRelations.Compute FB Diagram:4
      phi=0;  // > FixedRelations.Compute FB Diagram:5
     // accX=0;  // > FixedRelations.Compute FB Diagram:6
     // accY=-g;  // > FixedRelations.Compute FB Diagram:7
       accX=-g*Math.sin(tilt);  // > FixedRelations.Compute FB Diagram:8
      accY=-g*Math.cos(tilt);  // > FixedRelations.Compute FB Diagram:9
     display="block"; // why need this?  // > FixedRelations.Compute FB Diagram:10
    }  // > FixedRelations.Compute FB Diagram:11
    //tilt=theta+phi; wolfgang  // > FixedRelations.Compute FB Diagram:12
    tilt=theta+phi;  // > FixedRelations.Compute FB Diagram:13
    if(tilt<0 && x>5) onBumper=false;  // > FixedRelations.Compute FB Diagram:14
    if(tilt>0 && x<5) onBumper=false;  // > FixedRelations.Compute FB Diagram:15
    tiltdeg=tilt*180/pi;  // > FixedRelations.Compute FB Diagram:16
    gxForce=m*accX;  // > FixedRelations.Compute FB Diagram:17
    gyForce=m*accY;  // > FixedRelations.Compute FB Diagram:18
    gForce = Math.sqrt(gxForce*gxForce+gyForce*gyForce);  // > FixedRelations.Compute FB Diagram:19
    var normal = Math.abs(g*Math.cos(tilt));  // > FixedRelations.Compute FB Diagram:20
    var f = (direction===0)?muStatic*normal:muKinetic*normal;  // > FixedRelations.Compute FB Diagram:21
    var parallel = g *Math.sin(tilt); //gravitaitonal component along incline  // > FixedRelations.Compute FB Diagram:22
    if(vx>0){            // friction is toward -x  // > FixedRelations.Compute FB Diagram:23
      friction = -normal*muKinetic;  // > FixedRelations.Compute FB Diagram:24
    }else if(vx<0){     // friction is toward +x   // > FixedRelations.Compute FB Diagram:25
      friction = normal*muKinetic;  // > FixedRelations.Compute FB Diagram:26
    }else if(onBumper || direction ===0){  // > FixedRelations.Compute FB Diagram:27
      friction=-parallel;// friction balances gravity component  // > FixedRelations.Compute FB Diagram:28
    }else{  // > FixedRelations.Compute FB Diagram:29
      friction=(tilt>0)?-normal*muKinetic:normal*muKinetic;  // > FixedRelations.Compute FB Diagram:30
    }  // > FixedRelations.Compute FB Diagram:31
    //_println("vx= "+vx);  // > FixedRelations.Compute FB Diagram:32
    if(t>=tmax){  // > FixedRelations.Compute FB Diagram:33
      _pause();  // > FixedRelations.Compute FB Diagram:34
      t=0;  // > FixedRelations.Compute FB Diagram:35
      msg="Max Time.  Use Run button to restart and to access accelerometer."  // > FixedRelations.Compute FB Diagram:36
    }  // > FixedRelations.Compute FB Diagram:37
  });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["prevent going out"]) return;
    if (tableW-x-boxW/2-thickness<=0){  // > FixedRelations.prevent going out:1
      x= tableW-boxW/2-thickness; //set to rest of face right  // > FixedRelations.prevent going out:2
     // onBumper=true;  // > FixedRelations.prevent going out:3
    //direction=0;  // > FixedRelations.prevent going out:4
    //vx=0;  // > FixedRelations.prevent going out:5
      }  // > FixedRelations.prevent going out:6
     if ( x-boxW/2-thickness<=0){  // > FixedRelations.prevent going out:7
       x=boxW/2+thickness; //left  // > FixedRelations.prevent going out:8
       }  // > FixedRelations.prevent going out:9
  });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["axes"]) return;
    if (_model.isPlaying()===true) { //NEED this for conflict with initialize page values  // > FixedRelations.axes:1
    //_view.plottingPanel.getGrid().setFixedTickY()=(M*y+m*y2)/(M+m);  // > FixedRelations.axes:2
    //_view.plottingPanel.setFixedTickY()=2;  // > FixedRelations.axes:3
    _view.plottingPanel.getAxisX().setAbsoluteY(_view.plottingPanel.getGrid().getFixedTickY());  // > FixedRelations.axes:4
    _view.plottingPanel.getAxisY().setAbsoluteX(_view.plottingPanel.getGrid().getFixedTickX());  // > FixedRelations.axes:5
    //var getRealWorldYMin = _view.plottingPanel.getRealWorldYMin();  // > FixedRelations.axes:6
    //var getRealWorldYMax = _view.plottingPanel.getRealWorldYMax();  // > FixedRelations.axes:7
    //_view.plottingPanel.getAxisX().setPosition([0,_view.plottingPanel.getRealWorldYMin()/(_view.plottingPanel.getRealWorldYMax()-_view.plottingPanel.getRealWorldYMin())]);  // > FixedRelations.axes:8
    //_view.plottingPanel.getTitleX().setPosition([0.95,-_view.plottingPanel.getRealWorldYMin()/(_view.plottingPanel.getRealWorldYMax()-_view.plottingPanel.getRealWorldYMin())]);  // > FixedRelations.axes:9
    }  // > FixedRelations.axes:10
  });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["lookang"]) return;
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  function _initializeSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].initializeSolver();
  }

  function _automaticResetSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].automaticResetSolver();
  }

  _model.resetSolvers = function() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].resetSolver();
  };

  _getODE = function (_odeName) {
    if (_odeName=="Sliding") return _ODEi_evolution1;
    return null;
  }

  function _getEventSolver(_odeName) {
    var ode = _getODE(_odeName);
    if (ode===null) return null;
    return ode.getEventSolver();
  }

  function _setSolverClass(_odeName, _engine) {
    var ode = _getODE(_odeName);
    if (ode===null) return;
    if (!_engine.setODE) {
      var classname = _engine.toLowerCase();
      if      (classname.indexOf("boga")>=0)   _engine = EJSS_ODE_SOLVERS.bogackiShampine23;
      else if (classname.indexOf("cash")>=0)   _engine = EJSS_ODE_SOLVERS.cashKarp45;
      else if (classname.indexOf("dopri5")>=0) _engine = EJSS_ODE_SOLVERS.dopri5;
      else if (classname.indexOf("dopri8")>=0) _engine = EJSS_ODE_SOLVERS.dopri853;
      else if (classname.indexOf("richa")>=0)  _engine = EJSS_ODE_SOLVERS.eulerRichardson;
      else if (classname.indexOf("euler")>=0)  _engine = EJSS_ODE_SOLVERS.euler;
      else if (classname.indexOf("fehlberg87")>=0) _engine = EJSS_ODE_SOLVERS.fehlberg87;
      else if (classname.indexOf("fehlberg8")>=0)  _engine = EJSS_ODE_SOLVERS.fehlberg8;
      else if (classname.indexOf("radau")>=0)   _engine = EJSS_ODE_SOLVERS.radau5;
      else if (classname.indexOf("runge")>=0)  _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("rk4")>=0)    _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("verlet")>=0) _engine = EJSS_ODE_SOLVERS.velocityVerlet;
    }
    if (_engine) ode.setSolverClass(_engine);
  }

  function _ODE_evolution1() {
    var __odeSelf = {};
    var __eventSolver;
    var __solverClass = EJSS_ODE_SOLVERS.rungeKutta4;
    var __state=[];
    var _ODE_evolution1_Event1;
    var _ODE_evolution1_Event2;
    var _ODE_evolution1_Event3;
    var __ignoreErrors=false;
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf._getOdeVars = function (){ return["x","vx","t"]};

    __odeSelf.setSolverClass = function(__aSolverClass) {
      __solverClass = __aSolverClass;
      __instantiateSolver();
    };

    function __instantiateSolver() {
      __state=[];
      __pushState();
      __eventSolver = EJSS_ODE_SOLVERS.interpolatorEventSolver(__solverClass(),__odeSelf);
      __mustInitialize = true;
    }

    __odeSelf.setEnabled = function(_enabled) { __isEnabled = _enabled; };

    __odeSelf.getIndependentVariableValue = function() { return __eventSolver.getIndependentVariableValue(); };

    __odeSelf.getInternalStepSize = function() { return __eventSolver.getInternalStepSize(); };

    __odeSelf.isAccelerationIndependentOfVelocity = function() { return false; };

    __odeSelf.initializeSolver = function() {
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); return; }
      __pushState();
      __eventSolver.initialize(dt);
      __eventSolver.setBestInterpolation(false);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.removeAllEvents();
      if (__pagesEnabled["rightBumper"]) __eventSolver.addEvent(_ODE_evolution1_Event1());
      if (__pagesEnabled["leftBumper"]) __eventSolver.addEvent(_ODE_evolution1_Event2());
      if (__pagesEnabled["zeroVelocity"]) __eventSolver.addEvent(_ODE_evolution1_Event3());
      for(k in userEvents1){__eventSolver.addEvent(userEvents1[k]);}
      __eventSolver.setEstimateFirstStep(false);
      __eventSolver.setEnableExceptions(false);
      __eventSolver.setTolerances(0.00001,0.00001);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=x) __mustReinitialize = true;
        __state[__cIn++] = x;
        if (__state[__cIn]!=vx) __mustReinitialize = true;
        __state[__cIn++] = vx;
        if (__state[__cIn]!=t) __mustReinitialize = true;
        __state[__cIn++] = t;
    }

    function __arraysChanged () {
      return false;
    }

    __odeSelf.getEventSolver = function() {
      return __eventSolver;
    };

    __odeSelf.resetSolver = function() {
      __mustUserReinitialize = true;
    };

    __odeSelf.automaticResetSolver = function() {
      __mustReinitialize = true;
    };

    function __errorAction () {
      if (__ignoreErrors) return;
      console.log (__eventSolver.getErrorMessage());
      _pause();
      // Make sure the solver is reinitialized;
      __mustReinitialize = true;
    }

    __odeSelf.step = function() { return __privateStep(false); };

    __odeSelf.solverStep = function() { return __privateStep(true); };

    function __privateStep(__takeMaximumStep) {
      if (!__isEnabled) return 0;
      if (dt===0) return 0;
      if (__mustInitialize) __odeSelf.initializeSolver();
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); }
      __eventSolver.setStepSize(dt);
      __eventSolver.setInternalStepSize(dt);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.setTolerances(0.00001,0.00001);
      __pushState();
      if (__mustUserReinitialize) { 
        __eventSolver.userReinitialize();
        __mustUserReinitialize = false;
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      else if (__mustReinitialize) { 
        __eventSolver.reinitialize();
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      var __stepTaken = __takeMaximumStep ? __eventSolver.maxStep() : __eventSolver.step();
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    __odeSelf.getState = function() { return __state; };

    __odeSelf.getRate = function(_aState,_aRate) {
      _aRate[_aRate.length-1] = 0.0; // In case the prelim code returns
      var __index=-1; // so that it can be used in preliminary code
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        var acc =0; // assume block is not sliding  // > Preliminary code for ODE.Sliding:1
        if(!onBumper) { // check if not on bumper  // > Preliminary code for ODE.Sliding:2
          var n=Math.abs(g*Math.cos(theta+phi)); // normal force  // > Preliminary code for ODE.Sliding:3
          var f=(direction===0)?muStatic*n:muKinetic*n;  // friction  // > Preliminary code for ODE.Sliding:4
          var gp=Math.abs(g*Math.sin(theta+phi));// g parallel to surface  // > Preliminary code for ODE.Sliding:5
          if(direction==1){ // friction is in - x direction  // > Preliminary code for ODE.Sliding:6
            acc=(theta+phi>0)?gp-f:-f-gp;  // > Preliminary code for ODE.Sliding:7
          }else if(direction==-1){ // friction is in + x direction  // > Preliminary code for ODE.Sliding:8
            acc=(theta+phi>0)?gp+f:f-gp;  // > Preliminary code for ODE.Sliding:9
          }else if(gp>f) { //slide if gravity greater than friction  // > Preliminary code for ODE.Sliding:10
            acc=(theta+phi>0)?gp-f:f-gp;  // > Preliminary code for ODE.Sliding:11
          };  // > Preliminary code for ODE.Sliding:12
        }  // > Preliminary code for ODE.Sliding:13
        //_println("n="+n+"  gp="+gp +"  f="+f);  // > Preliminary code for ODE.Sliding:14
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = vx; // Rate for ODE: Sliding:x
        _aRate[__cRate++] = acc; // Rate for ODE: Sliding:vx
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    __odeSelf._addEvent = function(userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent){
    var User_Event = function (userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent) {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return eventType; };

      _eventSelf.getRootFindingMethod = function() { return eventMethod; };

      _eventSelf.getMaxIterations = function() { return maxIter; };

      _eventSelf.getTolerance = function() { return eventTolerance; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
      return eval(userCondition);
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        if (undefined != functions) eval(functions.toString());
        eval(userAction);
        return endAtEvent;
      }

      return _eventSelf;
    }; // End of event

   userEvents1.push(User_Event(userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent));
   }

    _ODE_evolution1_Event1 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.CROSSING_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
        return tableW-x-boxW/2-thickness;  // > Event zero-condition for page Sliding:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        onBumper=true;  // > Event action for page Sliding:1
        direction=0;  // > Event action for page Sliding:2
        vx=0;  // > Event action for page Sliding:3
        //_pause();  // > Event action for page Sliding:4
        return true;
      }

      return _eventSelf;
    }; // End of event

    _ODE_evolution1_Event2 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.CROSSING_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
        return x-boxW/2-thickness;  // > Event zero-condition for page Sliding:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        onBumper=true;  // > Event action for page Sliding:1
        direction=0;  // > Event action for page Sliding:2
        vx=0;  // > Event action for page Sliding:3
        //_pause();  // > Event action for page Sliding:4
        return true;
      }

      return _eventSelf;
    }; // End of event

    _ODE_evolution1_Event3 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.CROSSING_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return 1.0e-5; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var vx = _aState[__cOut++];
        var t = _aState[__cOut++];
        return vx;  // > Event zero-condition for page Sliding:1
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        vx = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = vx;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        direction=0;  // > Event action for page Sliding:1
        vx=0;  // vx is exactly zero  // > Event action for page Sliding:2
        setSliding (0);  // > Event action for page Sliding:3
        return true;
      }

      return _eventSelf;
    }; // End of event

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_x(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_vx(__time) {
    var __index = 0 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new SlidingDownInclinewee_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.plottingPanel.linkProperty("Height",  function() { return changeOrientation(); }, function(_v) { changeOrientation() = _v; } ); // HtmlView Page linking property 'Height' for element 'plottingPanel'
          _view.plottingPanel.setAction("OnDoubleClick", function(_data,_info) {
  if (_model.isPlaying())_pause();
  else if (_model.isPaused())_play();

}); // HtmlView Page setting action 'OnDoubleClick' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("TLMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'TLMessage' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumY",  function() { return ymax; }, function(_v) { ymax = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumX",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MinimumX",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MinimumY",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("BLMessage",  function() { return "accX ="+accX.toFixed(2)+"\naccY ="+accY.toFixed(2)+"\naccZ ="+accZ.toFixed(2); } ); // HtmlView Page linking property 'BLMessage' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("BRMessage",  function() { return "time ="+t.toFixed(2)+ " s"; } ); // HtmlView Page linking property 'BRMessage' for element 'plottingPanel'
          _view.leftCorner.linkProperty("Transformation",  function() { return -thetaLeft; } ); // HtmlView Page linking property 'Transformation' for element 'leftCorner'
          _view.leftCorner.linkProperty("Y",  function() { return tableH; }, function(_v) { tableH = _v; } ); // HtmlView Page linking property 'Y' for element 'leftCorner'
          _view.tableGroup.linkProperty("Transformation",  function() { return -thetaRight; } ); // HtmlView Page linking property 'Transformation' for element 'tableGroup'
          _view.tableGroup.linkProperty("X",  function() { return tableW; }, function(_v) { tableW = _v; } ); // HtmlView Page linking property 'X' for element 'tableGroup'
          _view.hotSpot.linkProperty("X",  function() { return xHot; }, function(_v) { xHot = _v; } ); // HtmlView Page linking property 'X' for element 'hotSpot'
          _view.hotSpot.setAction("OnDrag", function(_data,_info) {
  xHot=Math.max(xHot, 1-tableW);
  xHot=Math.min(xHot, -boxW/2-thickness);
  x=xHot+tableW;

}); // HtmlView Page setting action 'OnDrag' for element 'hotSpot'
          _view.leftLeg.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'leftLeg'
          _view.leftLeg.linkProperty("X",  function() { return 2-tableW; } ); // HtmlView Page linking property 'X' for element 'leftLeg'
          _view.leftStop.linkProperty("SizeX",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'SizeX' for element 'leftStop'
          _view.leftStop.linkProperty("X",  function() { return -tableW; } ); // HtmlView Page linking property 'X' for element 'leftStop'
          _view.leftStop.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'leftStop'
          _view.rightStop.linkProperty("SizeX",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'SizeX' for element 'rightStop'
          _view.rightStop.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'rightStop'
          _view.rightLeg.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'rightLeg'
          _view.tableTop2.linkProperty("SizeX",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'SizeX' for element 'tableTop2'
          _view.tableTop2.linkProperty("X",  function() { return size/2-tableW; } ); // HtmlView Page linking property 'X' for element 'tableTop2'
          _view.tableTop2.linkProperty("SizeY",  function() { return thickness*40; } ); // HtmlView Page linking property 'SizeY' for element 'tableTop2'
          _view.tableTop.linkProperty("SizeX",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'SizeX' for element 'tableTop'
          _view.tableTop.linkProperty("X",  function() { return size/2-tableW; } ); // HtmlView Page linking property 'X' for element 'tableTop'
          _view.tableTop.linkProperty("SizeY",  function() { return thickness*40; } ); // HtmlView Page linking property 'SizeY' for element 'tableTop'
          _view.box2.linkProperty("SizeX",  function() { return boxW; }, function(_v) { boxW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'box2'
          _view.box2.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'box2'
          _view.box2.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'box2'
          _view.box.linkProperty("SizeX",  function() { return boxW; }, function(_v) { boxW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'box'
          _view.box.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'box'
          _view.box.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'box'
          _view.dragx2.linkProperty("X",  function() { return -tableW; } ); // HtmlView Page linking property 'X' for element 'dragx2'
          _view.dragx2.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'dragx2'
          _view.dragx.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'dragx'
          _view.dragx.setAction("OnDrag", function(_data,_info) {
  x=Math.max(x,+boxW/2+thickness); // left bumper
  x=Math.min(x,tableW-boxW/2-thickness); // right bumper
  x=Math.round(x);
  x=Math.min(9,x);
  x=Math.max(1,x);
  x0=x;
  t=0;

}); // HtmlView Page setting action 'OnDrag' for element 'dragx'
          _view.dragv.linkProperty("X",  function() { return -tableW+x; } ); // HtmlView Page linking property 'X' for element 'dragv'
          _view.dragv.linkProperty("Y",  function() { return boxH/2+3; } ); // HtmlView Page linking property 'Y' for element 'dragv'
          _view.v.linkProperty("SizeX",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'v'
          _view.dragv2.linkProperty("X",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'X' for element 'dragv2'
          _view.dragv2.setAction("OnDrag", function(_data,_info) {
  vx=Math.min(vx,8);
  vx=Math.max(vx,-8);
  vx=Math.round(vx);
  setSliding (vx);
  v0=vx;
  t=0;

}); // HtmlView Page setting action 'OnDrag' for element 'dragv2'
          _view.group.linkProperty("X",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'X' for element 'group'
          _view.text.linkProperty("Text",  function() { return "vx ="+vx.toFixed(1) + " m/s"; } ); // HtmlView Page linking property 'Text' for element 'text'
          _view.gArrow.linkProperty("Transformation",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Transformation' for element 'gArrow'
          _view.gArrow.linkProperty("SizeX",  function() { return accX/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'gArrow'
          _view.gArrow.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'gArrow'
          _view.gArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'gArrow'
          _view.gArrow.linkProperty("SizeY",  function() { return accY/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'gArrow'
          _view.nArrow.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'nArrow'
          _view.nArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'nArrow'
          _view.nArrow.linkProperty("SizeY",  function() { return normal/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'nArrow'
          _view.fArrow.linkProperty("SizeX",  function() { return friction/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'fArrow'
          _view.fArrow.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'fArrow'
          _view.fArrow.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'fArrow'
          _view.hotSpot2.linkProperty("X",  function() { return xHot; }, function(_v) { xHot = _v; } ); // HtmlView Page linking property 'X' for element 'hotSpot2'
          _view.hotSpot2.setAction("OnDrag", function(_data,_info) {
  xHot=Math.max(xHot, 1-tableW);
  xHot=Math.min(xHot, -boxW/2-thickness);
  x=xHot+tableW;

}); // HtmlView Page setting action 'OnDrag' for element 'hotSpot2'
          _view.leftLeg2.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'leftLeg2'
          _view.leftLeg2.linkProperty("X",  function() { return 2-tableW; } ); // HtmlView Page linking property 'X' for element 'leftLeg2'
          _view.leftStop2.linkProperty("SizeX",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'SizeX' for element 'leftStop2'
          _view.leftStop2.linkProperty("X",  function() { return -tableW; } ); // HtmlView Page linking property 'X' for element 'leftStop2'
          _view.leftStop2.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'leftStop2'
          _view.rightStop2.linkProperty("SizeX",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'SizeX' for element 'rightStop2'
          _view.rightStop2.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'rightStop2'
          _view.rightLeg2.linkProperty("SizeX",  function() { return thickness/2; } ); // HtmlView Page linking property 'SizeX' for element 'rightLeg2'
          _view.tableTop22.linkProperty("SizeX",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'SizeX' for element 'tableTop22'
          _view.tableTop22.linkProperty("X",  function() { return size/2-tableW; } ); // HtmlView Page linking property 'X' for element 'tableTop22'
          _view.tableTop22.linkProperty("SizeY",  function() { return thickness*40; } ); // HtmlView Page linking property 'SizeY' for element 'tableTop22'
          _view.tableTop3.linkProperty("SizeX",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'SizeX' for element 'tableTop3'
          _view.tableTop3.linkProperty("X",  function() { return size/2-tableW; } ); // HtmlView Page linking property 'X' for element 'tableTop3'
          _view.tableTop3.linkProperty("SizeY",  function() { return thickness*40; } ); // HtmlView Page linking property 'SizeY' for element 'tableTop3'
          _view.box22.linkProperty("SizeX",  function() { return boxW; }, function(_v) { boxW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'box22'
          _view.box22.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'box22'
          _view.box22.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'box22'
          _view.box3.linkProperty("SizeX",  function() { return boxW; }, function(_v) { boxW = _v; } ); // HtmlView Page linking property 'SizeX' for element 'box3'
          _view.box3.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'box3'
          _view.box3.linkProperty("SizeY",  function() { return boxH; }, function(_v) { boxH = _v; } ); // HtmlView Page linking property 'SizeY' for element 'box3'
          _view.dragx22.linkProperty("X",  function() { return -tableW; } ); // HtmlView Page linking property 'X' for element 'dragx22'
          _view.dragx22.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'dragx22'
          _view.dragx3.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'dragx3'
          _view.dragx3.setAction("OnDrag", function(_data,_info) {
  x=Math.max(x,+boxW/2+thickness); // left bumper
  x=Math.min(x,tableW-boxW/2-thickness); // right bumper
  x=Math.round(x);
  x=Math.min(9,x);
  x=Math.max(1,x);
  x0=x;
  t=0;

}); // HtmlView Page setting action 'OnDrag' for element 'dragx3'
          _view.dragv3.linkProperty("X",  function() { return -tableW+x; } ); // HtmlView Page linking property 'X' for element 'dragv3'
          _view.dragv3.linkProperty("Y",  function() { return boxH+0.5; } ); // HtmlView Page linking property 'Y' for element 'dragv3'
          _view.v2.linkProperty("SizeX",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'v2'
          _view.dragv22.linkProperty("X",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'X' for element 'dragv22'
          _view.dragv22.setAction("OnDrag", function(_data,_info) {
  vx=Math.min(vx,8);
  vx=Math.max(vx,-8);
  vx=Math.round(vx);
  setSliding (vx);
  v0=vx;
  t=0;

}); // HtmlView Page setting action 'OnDrag' for element 'dragv22'
          _view.group2.linkProperty("X",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'X' for element 'group2'
          _view.text3.linkProperty("Text",  function() { return "vx ="+vx.toFixed(1) + " m/s"; } ); // HtmlView Page linking property 'Text' for element 'text3'
          _view.angle.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'angle'
          _view.angle.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'angle'
          _view.angkeA32.linkProperty("PointsY",  function() { return [0,1, -Math.cos(tilt/16),-Math.cos(tilt/8), -Math.cos(tilt*3/16),-Math.cos(tilt/4), -Math.cos(tilt*5/16),-Math.cos(tilt*3/8), -Math.cos(tilt*7/16),-Math.cos(tilt/2), -Math.cos(tilt*9/16),-Math.cos(tilt*5/8), -Math.cos(tilt*11/16),-Math.cos(tilt*3/4), -Math.cos(tilt*13/16),-Math.cos(tilt*7/8), -Math.cos(tilt*15/16),-Math.cos(tilt)]; } ); // HtmlView Page linking property 'PointsY' for element 'angkeA32'
          _view.angkeA32.linkProperty("PointsX",  function() { return [0,0, -Math.sin(tilt/16),-Math.sin(tilt/8), -Math.sin(tilt*3/16),-Math.sin(tilt/4), -Math.sin(tilt*5/16),-Math.sin(tilt*3/8), -Math.sin(tilt*7/16),-Math.sin(tilt/2), -Math.sin(tilt*9/16),-Math.sin(tilt*5/8), -Math.sin(tilt*11/16),-Math.sin(tilt*3/4), -Math.sin(tilt*13/16),-Math.sin(tilt*7/8), -Math.sin(tilt*15/16),-Math.sin(tilt)]; } ); // HtmlView Page linking property 'PointsX' for element 'angkeA32'
          _view.group22.linkProperty("X",  function() { return x-tableW+gxForce/arrowScale; } ); // HtmlView Page linking property 'X' for element 'group22'
          _view.group22.linkProperty("Y",  function() { return boxH/2+gyForce/arrowScale; } ); // HtmlView Page linking property 'Y' for element 'group22'
          _view.gText.linkProperty("Text",  function() { return "Fg ="+gForce.toFixed(2) + " N"; } ); // HtmlView Page linking property 'Text' for element 'gText'
          _view.gText.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'gText'
          _view.gArrow2.linkProperty("SizeX",  function() { return accX/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'gArrow2'
          _view.gArrow2.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'gArrow2'
          _view.gArrow2.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'gArrow2'
          _view.gArrow2.linkProperty("SizeY",  function() { return accY/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'gArrow2'
          _view.group4.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'group4'
          _view.group4.linkProperty("Y",  function() { return boxH/2+normal/arrowScale; } ); // HtmlView Page linking property 'Y' for element 'group4'
          _view.nText.linkProperty("Text",  function() { return "Fn = "+normal.toFixed(2) + " N"; } ); // HtmlView Page linking property 'Text' for element 'nText'
          _view.nText.linkProperty("Visibility",  function() { return showForceBody && Math.abs(normal)>0.2; } ); // HtmlView Page linking property 'Visibility' for element 'nText'
          _view.nArrow2.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'nArrow2'
          _view.nArrow2.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'nArrow2'
          _view.nArrow2.linkProperty("SizeY",  function() { return normal/arrowScale; } ); // HtmlView Page linking property 'SizeY' for element 'nArrow2'
          _view.group222.linkProperty("X",  function() { return x-tableW+friction/arrowScale; } ); // HtmlView Page linking property 'X' for element 'group222'
          _view.group222.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'group222'
          _view.f.linkProperty("Text",  function() { return "Ff ="+friction.toFixed(2) + " N"; } ); // HtmlView Page linking property 'Text' for element 'f'
          _view.f.linkProperty("Visibility",  function() { return showForceBody; }, function(_v) { showForceBody = _v; } ); // HtmlView Page linking property 'Visibility' for element 'f'
          _view.fArrow2.linkProperty("SizeX",  function() { return friction/arrowScale; } ); // HtmlView Page linking property 'SizeX' for element 'fArrow2'
          _view.fArrow2.linkProperty("X",  function() { return x-tableW; } ); // HtmlView Page linking property 'X' for element 'fArrow2'
          _view.fArrow2.linkProperty("Y",  function() { return boxH/2; } ); // HtmlView Page linking property 'Y' for element 'fArrow2'
          _view.group7.linkProperty("X",  function() { return x-tableW-Math.sin(tilt/2); } ); // HtmlView Page linking property 'X' for element 'group7'
          _view.group7.linkProperty("Y",  function() { return boxH/2-Math.cos(tilt/2); } ); // HtmlView Page linking property 'Y' for element 'group7'
          _view.angle3.linkProperty("Text",  function() { return "∠ϑ ="+_view._format(tiltdeg,"0")+ "° "; } ); // HtmlView Page linking property 'Text' for element 'angle3'
          _view.mus.linkProperty("X",  function() { return muStatic; }, function(_v) { muStatic = _v; } ); // HtmlView Page linking property 'X' for element 'mus'
          _view.mus.setAction("OnDrag", function(_data,_info) {
  msg="";
  muStatic=Math.round(muStatic*10)/10;
  if(muStatic>5) msg="Warning: Static friction coefficient must be <5.";
  muStatic=Math.min(muStatic,5);
  if(muStatic<0) {
    msg="Error: Static friction coefficient must be >0.";
  //muStatic=Math.max(muStatic,0);
  muStatic=0;
  }
  if(muKinetic>muStatic) msg="Error: Kinetic friction must be < static friction.";
  muKinetic=Math.min(muStatic,muKinetic);

}); // HtmlView Page setting action 'OnDrag' for element 'mus'
          _view.group3.linkProperty("X",  function() { return muStatic; }, function(_v) { muStatic = _v; } ); // HtmlView Page linking property 'X' for element 'group3'
          _view.text2.linkProperty("Text",  function() { return "μstatic ="+muStatic.toFixed(1); } ); // HtmlView Page linking property 'Text' for element 'text2'
          _view.mus2.linkProperty("X",  function() { return muKinetic; }, function(_v) { muKinetic = _v; } ); // HtmlView Page linking property 'X' for element 'mus2'
          _view.mus2.setAction("OnDrag", function(_data,_info) {
  msg="";
  muKinetic=Math.round(muKinetic*10)/10;
  if(muKinetic>5) msg="Warning: Kinetic friction coefficient must be <5.";
  muKinetic=Math.min(muKinetic,5);
  if(muKinetic<0) {
    msg="Error: Kinetic friction coefficient must be >0.";
  //muKinetic=Math.max(muKinetic,0);
  muKinetic=0;
  }
  if(muKinetic>muStatic) msg="Error: Kinetic friction must be < static friction.";
  muStatic=Math.max(muStatic,muKinetic);

}); // HtmlView Page setting action 'OnDrag' for element 'mus2'
          _view.group32.linkProperty("X",  function() { return muKinetic; }, function(_v) { muKinetic = _v; } ); // HtmlView Page linking property 'X' for element 'group32'
          _view.text22.linkProperty("Text",  function() { return "μkinetic ="+muKinetic.toFixed(1); } ); // HtmlView Page linking property 'Text' for element 'text22'
          _view.dragtheta.linkProperty("Visibility",  function() { return display=="block"; } ); // HtmlView Page linking property 'Visibility' for element 'dragtheta'
          _view.theta.linkProperty("X",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'X' for element 'theta'
          _view.theta.setAction("OnDrag", function(_data,_info) {
  if (theta>pi/2) theta=pi/2;
  if (theta<-pi/2) theta=-pi/2;
  if (Math.abs(theta)<0.1)theta=0;
  if(theta>0){
    thetaRight=theta;
    thetaLeft=0; 
  }else{
    thetaRight=0;
    thetaLeft=theta;  
  }
  setSliding (vx);
  if(_model.isPaused()) msg="Run simulation to observe sliding.";

}); // HtmlView Page setting action 'OnDrag' for element 'theta'
          _view.group322.linkProperty("X",  function() { return muKinetic; }, function(_v) { muKinetic = _v; } ); // HtmlView Page linking property 'X' for element 'group322'
          _view.text222.linkProperty("Text",  function() { return "ϑ ="+(180*tilt/Math.PI).toFixed(0)+" °"; } ); // HtmlView Page linking property 'Text' for element 'text222'
          _view.demoCheck.linkProperty("Checked",  function() { return display=="block"; } ); // HtmlView Page linking property 'Checked' for element 'demoCheck'
          _view.demoCheck.setAction("OnCheckOff", function(_data,_info) {
  display="none";

}); // HtmlView Page setting action 'OnCheckOff' for element 'demoCheck'
          _view.demoCheck.setAction("OnCheckOn", function(_data,_info) {
  display="block";

}); // HtmlView Page setting action 'OnCheckOn' for element 'demoCheck'
          _view.runButton.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'runButton'
          _view.runButton.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'runButton'
          _view.runButton.setAction("OnClick", function(_data,_info) {
  accelerometer.start();
  accelerometer.setAverageInterval(0.1);
  _play();

}); // HtmlView Page setting action 'OnClick' for element 'runButton'
          _view.resetButton.setAction("OnClick", function(_data,_info) {
  _reset();

}); // HtmlView Page setting action 'OnClick' for element 'resetButton'
          _view.boxW_2.linkProperty("Value",  function() { return boxW/2; } ); // HtmlView Page linking property 'Value' for element 'boxW_2'
          _view.boxW_22.linkProperty("Value",  function() { return thickness; }, function(_v) { thickness = _v; } ); // HtmlView Page linking property 'Value' for element 'boxW_22'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(20);
  _model.setStepsPerDisplay(2);
  _selectView(-1); // this includes _model.reset()
  return _model;
}
function SlidingDownInclinewee_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = SlidingDownInclinewee_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);

  _view._addDescriptionPage('Block On An Incline','./SlidingDownIncline/SlidingDownIncline.xhtml');

  return _view;
} // end of main function

function SlidingDownInclinewee_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"centerPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'centerPanel'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'centerPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'centerPanel'
      .setProperty("CSS",{   "position" : "absolute",   "top" : "0%",    "margin-left":"0px",    "left":"0%" }) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'centerPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"plottingPanel", _view.centerPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plottingPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'plottingPanel'
      .setProperty("Gutters",[0,0,0,0]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'plottingPanel'
      .setProperty("YScalePrecision",0) // EJsS HtmlView.HtmlView Page: setting property 'YScalePrecision' for element 'plottingPanel'
      .setProperty("XFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'XFixedTick' for element 'plottingPanel'
      .setProperty("YFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'YFixedTick' for element 'plottingPanel'
      .setProperty("XTickStep",1) // EJsS HtmlView.HtmlView Page: setting property 'XTickStep' for element 'plottingPanel'
      .setProperty("YTickStep",1) // EJsS HtmlView.HtmlView Page: setting property 'YTickStep' for element 'plottingPanel'
      .setProperty("XAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'XAutoTicks' for element 'plottingPanel'
      .setProperty("GraphicsMode","SVG") // EJsS HtmlView.HtmlView Page: setting property 'GraphicsMode' for element 'plottingPanel'
      .setProperty("Background","url(#mygrandient)") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'plottingPanel'
      .setProperty("Title","Tilt your mobile device") // EJsS HtmlView.HtmlView Page: setting property 'Title' for element 'plottingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'plottingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'plottingPanel'
      .setProperty("YAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'YAutoTicks' for element 'plottingPanel'
      .setProperty("TitleY","y") // EJsS HtmlView.HtmlView Page: setting property 'TitleY' for element 'plottingPanel'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'plottingPanel'
      .setProperty("TitleX","x") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'plottingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'plottingPanel'
      .setProperty("XScalePrecision",0) // EJsS HtmlView.HtmlView Page: setting property 'XScalePrecision' for element 'plottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"leftCorner", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'leftCorner'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'leftCorner'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'leftCorner'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"tableGroup", _view.leftCorner) // EJsS HtmlView.HtmlView Page: declaration of element 'tableGroup'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"hotSpot", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'hotSpot'
      .setProperty("SizeX",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'hotSpot'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'hotSpot'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'hotSpot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'hotSpot'
      .setProperty("SizeY",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'hotSpot'
      .setProperty("DrawLines",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'hotSpot'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'hotSpot'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'hotSpot'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftLeg", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'leftLeg'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftLeg'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'leftLeg'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftLeg'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftLeg'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftLeg'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftStop", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'leftStop'
      .setProperty("FillColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftStop'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'leftStop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftStop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftStop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightStop", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'rightStop'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightStop'
      .setProperty("RelativePosition","SOUTH_EAST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'rightStop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightStop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightStop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightLeg", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'rightLeg'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightLeg'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'rightLeg'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightLeg'
      .setProperty("X",-2) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'rightLeg'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightLeg'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightLeg'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"tableTop2", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'tableTop2'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'tableTop2'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'tableTop2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'tableTop2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'tableTop2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"tableTop", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'tableTop'
      .setProperty("FillColor","url(#mygrandient1)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'tableTop'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'tableTop'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'tableTop'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'tableTop'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"box2", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'box2'
      .setProperty("FillColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'box2'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'box2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'box2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"box", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'box'
      .setProperty("FillColor","url(#mygrandient2)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'box'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'box'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'box'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"dragx2", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'dragx2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"dragx", _view.dragx2) // EJsS HtmlView.HtmlView Page: declaration of element 'dragx'
      .setProperty("Sensitivity",100) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'dragx'
      .setProperty("SizeX",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'dragx'
      .setProperty("ShapeType","WHEEL") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'dragx'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'dragx'
      .setProperty("SizeY",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'dragx'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'dragx'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'dragx'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'dragx'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"dragv", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'dragv'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"v", _view.dragv) // EJsS HtmlView.HtmlView Page: declaration of element 'v'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'v'
      .setProperty("LineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'v'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'v'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'v'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'v'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'v'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"dragv2", _view.dragv) // EJsS HtmlView.HtmlView Page: declaration of element 'dragv2'
      .setProperty("Sensitivity",100) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'dragv2'
      .setProperty("SizeX",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'dragv2'
      .setProperty("ShapeType","WHEEL") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'dragv2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'dragv2'
      .setProperty("SizeY",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'dragv2'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'dragv2'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'dragv2'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'dragv2'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group", _view.dragv) // EJsS HtmlView.HtmlView Page: declaration of element 'group'
      .setProperty("Y",0.5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'group'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"text", _view.group) // EJsS HtmlView.HtmlView Page: declaration of element 'text'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'text'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'text'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"gArrow", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'gArrow'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gArrow'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'gArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'gArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'gArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"nArrow", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'nArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'nArrow'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'nArrow'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'nArrow'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'nArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'nArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'nArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"fArrow", _view.tableGroup) // EJsS HtmlView.HtmlView Page: declaration of element 'fArrow'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'fArrow'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fArrow'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'fArrow'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'fArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'fArrow'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'fArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"tableGroup2", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'tableGroup2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"hotSpot2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'hotSpot2'
      .setProperty("SizeX",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'hotSpot2'
      .setProperty("RelativePosition","CENTERED") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'hotSpot2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'hotSpot2'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'hotSpot2'
      .setProperty("SizeY",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'hotSpot2'
      .setProperty("DrawLines",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'hotSpot2'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'hotSpot2'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'hotSpot2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftLeg2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'leftLeg2'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftLeg2'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'leftLeg2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftLeg2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftLeg2'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'leftLeg2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"leftStop2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'leftStop2'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'leftStop2'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'leftStop2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'leftStop2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'leftStop2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightStop2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'rightStop2'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightStop2'
      .setProperty("RelativePosition","SOUTH_EAST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'rightStop2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightStop2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightStop2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"rightLeg2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'rightLeg2'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'rightLeg2'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'rightLeg2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'rightLeg2'
      .setProperty("X",-2) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'rightLeg2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'rightLeg2'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'rightLeg2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"tableTop22", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'tableTop22'
      .setProperty("FillColor","LightGray") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'tableTop22'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'tableTop22'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'tableTop22'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'tableTop22'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"tableTop3", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'tableTop3'
      .setProperty("FillColor","url(#mygrandient1)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'tableTop3'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'tableTop3'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'tableTop3'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'tableTop3'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"box22", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'box22'
      .setProperty("FillColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'box22'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'box22'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'box22'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"box3", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'box3'
      .setProperty("FillColor","url(#mygrandient2)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'box3'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'box3'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'box3'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"dragx22", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'dragx22'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"dragx3", _view.dragx22) // EJsS HtmlView.HtmlView Page: declaration of element 'dragx3'
      .setProperty("Sensitivity",100) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'dragx3'
      .setProperty("SizeX",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'dragx3'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'dragx3'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'dragx3'
      .setProperty("SizeY",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'dragx3'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'dragx3'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'dragx3'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'dragx3'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"dragv3", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'dragv3'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"v2", _view.dragv3) // EJsS HtmlView.HtmlView Page: declaration of element 'v2'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'v2'
      .setProperty("LineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'v2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'v2'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'v2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'v2'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'v2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"dragv22", _view.dragv3) // EJsS HtmlView.HtmlView Page: declaration of element 'dragv22'
      .setProperty("Sensitivity",100) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'dragv22'
      .setProperty("SizeX",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'dragv22'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'dragv22'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'dragv22'
      .setProperty("SizeY",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'dragv22'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'dragv22'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'dragv22'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'dragv22'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group2", _view.dragv3) // EJsS HtmlView.HtmlView Page: declaration of element 'group2'
      .setProperty("Y",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'group2'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"text3", _view.group2) // EJsS HtmlView.HtmlView Page: declaration of element 'text3'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'text3'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'text3'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"angle", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'angle'
      ;

    _view._addElement(EJSS_DRAWING2D.polygon,"angkeA32", _view.angle) // EJsS HtmlView.HtmlView Page: declaration of element 'angkeA32'
      .setProperty("FillColor","Cyan") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'angkeA32'
      .setProperty("SizeX",20) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'angkeA32'
      .setProperty("SizeY",20) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'angkeA32'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'angkeA32'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group22", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'group22'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"gText", _view.group22) // EJsS HtmlView.HtmlView Page: declaration of element 'gText'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'gText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'gText'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'gText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"gArrow2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'gArrow2'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gArrow2'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'gArrow2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'gArrow2'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'gArrow2'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group4", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'group4'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"nText", _view.group4) // EJsS HtmlView.HtmlView Page: declaration of element 'nText'
      .setProperty("FillColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'nText'
      .setProperty("RelativePosition","SOUTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'nText'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'nText'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'nText'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"nArrow2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'nArrow2'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'nArrow2'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'nArrow2'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'nArrow2'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'nArrow2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'nArrow2'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'nArrow2'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group222", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'group222'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"f", _view.group222) // EJsS HtmlView.HtmlView Page: declaration of element 'f'
      .setProperty("RelativePosition","NORTH") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'f'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'f'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'f'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"fArrow2", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'fArrow2'
      .setProperty("Transformation",0) // EJsS HtmlView.HtmlView Page: setting property 'Transformation' for element 'fArrow2'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'fArrow2'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'fArrow2'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'fArrow2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'fArrow2'
      .setProperty("Offset","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'Offset' for element 'fArrow2'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group7", _view.tableGroup2) // EJsS HtmlView.HtmlView Page: declaration of element 'group7'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"angle3", _view.group7) // EJsS HtmlView.HtmlView Page: declaration of element 'angle3'
      .setProperty("FillColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'angle3'
      .setProperty("RelativePosition","WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'angle3'
      .setProperty("LineColor","Cyan") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'angle3'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'angle3'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"dragmus", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dragmus'
      .setProperty("X",-5) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'dragmus'
      .setProperty("Y",-0.3) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'dragmus'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"mus", _view.dragmus) // EJsS HtmlView.HtmlView Page: declaration of element 'mus'
      .setProperty("SizeX",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'mus'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'mus'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'mus'
      .setProperty("SizeY",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'mus'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'mus'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'mus'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'mus'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group3", _view.dragmus) // EJsS HtmlView.HtmlView Page: declaration of element 'group3'
      .setProperty("Y",0.2) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'group3'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"text2", _view.group3) // EJsS HtmlView.HtmlView Page: declaration of element 'text2'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'text2'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'text2'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"dragmuk", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dragmuk'
      .setProperty("X",-5) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'dragmuk'
      .setProperty("Y",-0.7) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'dragmuk'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"mus2", _view.dragmuk) // EJsS HtmlView.HtmlView Page: declaration of element 'mus2'
      .setProperty("SizeX",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'mus2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'mus2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'mus2'
      .setProperty("SizeY",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'mus2'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'mus2'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'mus2'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'mus2'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group32", _view.dragmuk) // EJsS HtmlView.HtmlView Page: declaration of element 'group32'
      .setProperty("Y",0.2) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'group32'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"text22", _view.group32) // EJsS HtmlView.HtmlView Page: declaration of element 'text22'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'text22'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'text22'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"dragtheta", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dragtheta'
      .setProperty("X",-5) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'dragtheta'
      .setProperty("Y",5) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'dragtheta'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"theta", _view.dragtheta) // EJsS HtmlView.HtmlView Page: declaration of element 'theta'
      .setProperty("SizeX",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'theta'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'theta'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'theta'
      .setProperty("SizeY",15) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'theta'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'theta'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'theta'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'theta'
      ;

    _view._addElement(EJSS_DRAWING2D.group,"group322", _view.dragtheta) // EJsS HtmlView.HtmlView Page: declaration of element 'group322'
      .setProperty("Y",0.2) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'group322'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"text222", _view.group322) // EJsS HtmlView.HtmlView Page: declaration of element 'text222'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'text222'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'text222'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"topPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'topPanel'
      .setProperty("CSS",{   "position" : "absolute",   "top" : "20px",    "margin-right":"10px",    "right":"10px" }) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'topPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"muPanel", _view.topPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'muPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'muPanel'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"demoCheck", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'demoCheck'
      .setProperty("Text","No sensor") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'demoCheck'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"runButton", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'runButton'
      .setProperty("Tooltip","Starts and pauses the simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'runButton'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'runButton'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'runButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.muPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("Tooltip","Resets simulation to the orginal state") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"debug", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'debug'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"boxW_2", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'boxW_2'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'boxW_2'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"boxW_22", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'boxW_22'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'boxW_22'
      ;

  };

  return _view;
}



      var _model;
      var _scorm;
      window.addEventListener('load',
        function () { 
          _model =  new SlidingDownInclinewee("_topFrame","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_examples/bin/javascript/lib/","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_6.0/workspace/source/JavascriptExamples/");
          if (typeof _isApp !== "undefined" && _isApp) _model.setRunAlways(true);
          TextResizeDetector.TARGET_ELEMENT_ID = '_topFrame';
          TextResizeDetector.USER_INIT_FUNC = function () {
            var iBase = TextResizeDetector.addEventListener(function(e,args) {
              _model._fontResized(args[0].iBase,args[0].iSize,args[0].iDelta);
              },null);
            _model._fontResized(iBase);
          };
          _model.onload();
        }, false);
