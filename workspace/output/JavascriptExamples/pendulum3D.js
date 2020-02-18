/* _inputParameters: an object with different values for the model parameters */
function pendulum3D(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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
  var zmin; // EjsS Model.Variables.Var Table.zmin
  var zmax; // EjsS Model.Variables.Var Table.zmax
  var t; // EjsS Model.Variables.Var Table.t
  var dt; // EjsS Model.Variables.Var Table.dt
  var size; // EjsS Model.Variables.Var Table.size
  var size2; // EjsS Model.Variables.Var Table.size2
  var stroke; // EjsS Model.Variables.Var Table.stroke
  var pi; // EjsS Model.Variables.Var Table.pi
  var npt; // EjsS Model.Variables.Var Table.npt

  var g; // EjsS Model.Variables.view.g
  var L; // EjsS Model.Variables.view.L
  var cta; // EjsS Model.Variables.view.cta
  var omega; // EjsS Model.Variables.view.omega
  var phi; // EjsS Model.Variables.view.phi
  var phidot; // EjsS Model.Variables.view.phidot
  var T; // EjsS Model.Variables.view.T
  var cst; // EjsS Model.Variables.view.cst
  var x; // EjsS Model.Variables.view.x
  var y; // EjsS Model.Variables.view.y
  var topz; // EjsS Model.Variables.view.topz
  var z; // EjsS Model.Variables.view.z
  var circular; // EjsS Model.Variables.view.circular

  var dirx; // EjsS Model.Variables.view2.dirx
  var diry; // EjsS Model.Variables.view2.diry
  var vx; // EjsS Model.Variables.view2.vx
  var vy; // EjsS Model.Variables.view2.vy
  var vz; // EjsS Model.Variables.view2.vz

  var Width; // EjsS Model.Variables.layout.Width
  var Height; // EjsS Model.Variables.layout.Height
  var Height1; // EjsS Model.Variables.layout.Height1
  var Height2; // EjsS Model.Variables.layout.Height2
  var Width1; // EjsS Model.Variables.layout.Width1
  var Width2; // EjsS Model.Variables.layout.Width2
  var Width3; // EjsS Model.Variables.layout.Width3
  var graph; // EjsS Model.Variables.layout.graph
  var world; // EjsS Model.Variables.layout.world
  var disabledworld; // EjsS Model.Variables.layout.disabledworld
  var disabled; // EjsS Model.Variables.layout.disabled
  var isAndroid; // EjsS Model.Variables.layout.isAndroid

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
      zmin : zmin,
      zmax : zmax,
      t : t,
      dt : dt,
      size : size,
      size2 : size2,
      stroke : stroke,
      pi : pi,
      npt : npt,
      g : g,
      L : L,
      cta : cta,
      omega : omega,
      phi : phi,
      phidot : phidot,
      T : T,
      cst : cst,
      x : x,
      y : y,
      topz : topz,
      z : z,
      circular : circular,
      dirx : dirx,
      diry : diry,
      vx : vx,
      vy : vy,
      vz : vz,
      Width : Width,
      Height : Height,
      Height1 : Height1,
      Height2 : Height2,
      Width1 : Width1,
      Width2 : Width2,
      Width3 : Width3,
      graph : graph,
      world : world,
      disabledworld : disabledworld,
      disabled : disabled,
      isAndroid : isAndroid
    };
  };

  function _serializePublic() { return _model.serializePublic(); }

  _model._userSerializePublic = function() {
    return {
      range : range,
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      zmin : zmin,
      zmax : zmax,
      t : t,
      dt : dt,
      size : size,
      size2 : size2,
      stroke : stroke,
      pi : pi,
      npt : npt,
      g : g,
      L : L,
      cta : cta,
      omega : omega,
      phi : phi,
      phidot : phidot,
      T : T,
      cst : cst,
      x : x,
      y : y,
      topz : topz,
      z : z,
      circular : circular,
      dirx : dirx,
      diry : diry,
      vx : vx,
      vy : vy,
      vz : vz,
      Width : Width,
      Height : Height,
      Height1 : Height1,
      Height2 : Height2,
      Width1 : Width1,
      Width2 : Width2,
      Width3 : Width3,
      graph : graph,
      world : world,
      disabledworld : disabledworld,
      disabled : disabled,
      isAndroid : isAndroid
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.range != "undefined") range = json.range;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.zmin != "undefined") zmin = json.zmin;
    if(typeof json.zmax != "undefined") zmax = json.zmax;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.size != "undefined") size = json.size;
    if(typeof json.size2 != "undefined") size2 = json.size2;
    if(typeof json.stroke != "undefined") stroke = json.stroke;
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.npt != "undefined") npt = json.npt;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.L != "undefined") L = json.L;
    if(typeof json.cta != "undefined") cta = json.cta;
    if(typeof json.omega != "undefined") omega = json.omega;
    if(typeof json.phi != "undefined") phi = json.phi;
    if(typeof json.phidot != "undefined") phidot = json.phidot;
    if(typeof json.T != "undefined") T = json.T;
    if(typeof json.cst != "undefined") cst = json.cst;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.topz != "undefined") topz = json.topz;
    if(typeof json.z != "undefined") z = json.z;
    if(typeof json.circular != "undefined") circular = json.circular;
    if(typeof json.dirx != "undefined") dirx = json.dirx;
    if(typeof json.diry != "undefined") diry = json.diry;
    if(typeof json.vx != "undefined") vx = json.vx;
    if(typeof json.vy != "undefined") vy = json.vy;
    if(typeof json.vz != "undefined") vz = json.vz;
    if(typeof json.Width != "undefined") Width = json.Width;
    if(typeof json.Height != "undefined") Height = json.Height;
    if(typeof json.Height1 != "undefined") Height1 = json.Height1;
    if(typeof json.Height2 != "undefined") Height2 = json.Height2;
    if(typeof json.Width1 != "undefined") Width1 = json.Width1;
    if(typeof json.Width2 != "undefined") Width2 = json.Width2;
    if(typeof json.Width3 != "undefined") Width3 = json.Width3;
    if(typeof json.graph != "undefined") graph = json.graph;
    if(typeof json.world != "undefined") world = json.world;
    if(typeof json.disabledworld != "undefined") disabledworld = json.disabledworld;
    if(typeof json.disabled != "undefined") disabled = json.disabled;
    if(typeof json.isAndroid != "undefined") isAndroid = json.isAndroid;
  };

  _model._readParametersPublic = function(json) {
    if(typeof json.range != "undefined") range = json.range;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.zmin != "undefined") zmin = json.zmin;
    if(typeof json.zmax != "undefined") zmax = json.zmax;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.size != "undefined") size = json.size;
    if(typeof json.size2 != "undefined") size2 = json.size2;
    if(typeof json.stroke != "undefined") stroke = json.stroke;
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.npt != "undefined") npt = json.npt;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.L != "undefined") L = json.L;
    if(typeof json.cta != "undefined") cta = json.cta;
    if(typeof json.omega != "undefined") omega = json.omega;
    if(typeof json.phi != "undefined") phi = json.phi;
    if(typeof json.phidot != "undefined") phidot = json.phidot;
    if(typeof json.T != "undefined") T = json.T;
    if(typeof json.cst != "undefined") cst = json.cst;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.y != "undefined") y = json.y;
    if(typeof json.topz != "undefined") topz = json.topz;
    if(typeof json.z != "undefined") z = json.z;
    if(typeof json.circular != "undefined") circular = json.circular;
    if(typeof json.dirx != "undefined") dirx = json.dirx;
    if(typeof json.diry != "undefined") diry = json.diry;
    if(typeof json.vx != "undefined") vx = json.vx;
    if(typeof json.vy != "undefined") vy = json.vy;
    if(typeof json.vz != "undefined") vz = json.vz;
    if(typeof json.Width != "undefined") Width = json.Width;
    if(typeof json.Height != "undefined") Height = json.Height;
    if(typeof json.Height1 != "undefined") Height1 = json.Height1;
    if(typeof json.Height2 != "undefined") Height2 = json.Height2;
    if(typeof json.Width1 != "undefined") Width1 = json.Width1;
    if(typeof json.Width2 != "undefined") Width2 = json.Width2;
    if(typeof json.Width3 != "undefined") Width3 = json.Width3;
    if(typeof json.graph != "undefined") graph = json.graph;
    if(typeof json.world != "undefined") world = json.world;
    if(typeof json.disabledworld != "undefined") disabledworld = json.disabledworld;
    if(typeof json.disabled != "undefined") disabled = json.disabled;
    if(typeof json.isAndroid != "undefined") isAndroid = json.isAndroid;
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
    __pagesEnabled["Evol Page"] = true;
    __pagesEnabled["FixRel Page"] = true;
  });

  _model.addToReset(function() {
    range = 50; // EjsS Model.Variables.Var Table.range
    xmin = -range/2; // EjsS Model.Variables.Var Table.xmin
    xmax = range/2; // EjsS Model.Variables.Var Table.xmax
    ymin = -range/2; // EjsS Model.Variables.Var Table.ymin
    ymax = range/2; // EjsS Model.Variables.Var Table.ymax
    zmin = -range/2; // EjsS Model.Variables.Var Table.zmin
    zmax = range/2; // EjsS Model.Variables.Var Table.zmax
    t = 0.0; // EjsS Model.Variables.Var Table.t
    dt = 0.05; // EjsS Model.Variables.Var Table.dt
    size = range/40; // EjsS Model.Variables.Var Table.size
    size2 = size/2; // EjsS Model.Variables.Var Table.size2
    stroke = 2; // EjsS Model.Variables.Var Table.stroke
    pi = Math.PI; // EjsS Model.Variables.Var Table.pi
    npt = 300; // EjsS Model.Variables.Var Table.npt
  });

  _model.addToReset(function() {
    g = 10; // EjsS Model.Variables.view.g
    L = xmax*1.5; // EjsS Model.Variables.view.L
    cta = pi/6; // EjsS Model.Variables.view.cta
    omega = 0; // EjsS Model.Variables.view.omega
    phi = 0; // EjsS Model.Variables.view.phi
    phidot = Math.sqrt(g/L/Math.cos(cta)); // EjsS Model.Variables.view.phidot
    T = 2*pi/phidot; // EjsS Model.Variables.view.T
    cst = Math.sin(cta)*Math.sin(cta)*phidot; // EjsS Model.Variables.view.cst
    x = L*Math.sin(cta)*Math.cos(phi); // EjsS Model.Variables.view.x
    y = L*Math.sin(cta)*Math.sin(phi); // EjsS Model.Variables.view.y
    topz = zmax; // EjsS Model.Variables.view.topz
    z = topz-L*Math.cos(cta); // EjsS Model.Variables.view.z
    circular = true; // EjsS Model.Variables.view.circular
  });

  _model.addToReset(function() {
    dirx = [1,0,0]; // EjsS Model.Variables.view2.dirx
    diry = [0,1,0]; // EjsS Model.Variables.view2.diry
  });

  _model.addToReset(function() {
    Width = (_isEPub)?"400":"100%"; // EjsS Model.Variables.layout.Width
    Height = (_isEPub)?"500":"100%"; // EjsS Model.Variables.layout.Height
    Height1 = "80%"; // EjsS Model.Variables.layout.Height1
    Height2 = "20%"; // EjsS Model.Variables.layout.Height2
    Width1 = "100%"; // EjsS Model.Variables.layout.Width1
    Width2 = "0%"; // EjsS Model.Variables.layout.Width2
    Width3 = "0%"; // EjsS Model.Variables.layout.Width3
    graph = true; // EjsS Model.Variables.layout.graph
    world = true; // EjsS Model.Variables.layout.world
    disabledworld = false; // EjsS Model.Variables.layout.disabledworld
    disabled = false; // EjsS Model.Variables.layout.disabled
    isAndroid = checkAndroid(); // EjsS Model.Variables.layout.isAndroid
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
    _model.setStepsPerDisplay(1);
  });

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

  //code reference: http://davidwalsh.name/detect-android  // > CustomCode.checkAndroid:1
  function checkAndroid () {  // > CustomCode.checkAndroid:2
    var ua = navigator.userAgent.toLowerCase();  // > CustomCode.checkAndroid:3
    return ua.indexOf("android") > -1; //&& ua.indexOf("mobile");  // > CustomCode.checkAndroid:4
  }  // > CustomCode.checkAndroid:5

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["FixRel Page"]) return;
    x=L*Math.sin(cta)*Math.cos(phi);  // > FixedRelations.FixRel Page:1
    y=L*Math.sin(cta)*Math.sin(phi);  // > FixedRelations.FixRel Page:2
    z=topz-L*Math.cos(cta);  // > FixedRelations.FixRel Page:3
    vx=-L*omega*Math.cos(cta)*Math.cos(phi)-L*Math.sin(cta)*phidot*Math.sin(phi);  // > FixedRelations.FixRel Page:4
    vy=-L*omega*Math.cos(cta)*Math.sin(phi)+L*Math.sin(cta)*phidot*Math.cos(phi);  // > FixedRelations.FixRel Page:5
    vz=-L*omega*Math.sin(cta);  // > FixedRelations.FixRel Page:6
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
    if (_odeName=="Evol Page") return _ODEi_evolution1;
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
    var __ignoreErrors=false;
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf._getOdeVars = function (){ return["cta","omega","phi","t"]};

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
      for(k in userEvents1){__eventSolver.addEvent(userEvents1[k]);}
      __eventSolver.setEstimateFirstStep(false);
      __eventSolver.setEnableExceptions(false);
      __eventSolver.setTolerances(0.001,0.001);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=cta) __mustReinitialize = true;
        __state[__cIn++] = cta;
        if (__state[__cIn]!=omega) __mustReinitialize = true;
        __state[__cIn++] = omega;
        if (__state[__cIn]!=phi) __mustReinitialize = true;
        __state[__cIn++] = phi;
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
      __eventSolver.setTolerances(0.001,0.001);
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
        cta = __state[__cOut++];
        omega = __state[__cOut++];
        phi = __state[__cOut++];
        t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    __odeSelf.getState = function() { return __state; };

    __odeSelf.getRate = function(_aState,_aRate) {
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var cta = _aState[__cOut++];
        var omega = _aState[__cOut++];
        var phi = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = omega; // Rate for ODE: Evol Page:cta
        _aRate[__cRate++] = -g*Math.sin(cta)/L+cst*cst/(Math.sin(cta)*Math.sin(cta)*Math.tan(cta)); // Rate for ODE: Evol Page:omega
        _aRate[__cRate++] = phidot=cst/(Math.sin(cta)*Math.sin(cta)); // Rate for ODE: Evol Page:phi
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
        var cta = _aState[__cOut++];
        var omega = _aState[__cOut++];
        var phi = _aState[__cOut++];
        var t = _aState[__cOut++];
      return eval(userCondition);
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        cta = __state[__cOut++];
        omega = __state[__cOut++];
        phi = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = cta;
        __state[__cIn++] = omega;
        __state[__cIn++] = phi;
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

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_cta(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_omega(__time) {
    var __index = 0 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_phi(__time) {
    var __index = 0 + 1 + 1;
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
    _view = new pendulum3D_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.fullscreen.linkProperty("Height",  function() { return Height; }, function(_v) { Height = _v; } ); // HtmlView Page linking property 'Height' for element 'fullscreen'
          _view.fullscreen.linkProperty("Width",  function() { return Width; }, function(_v) { Width = _v; } ); // HtmlView Page linking property 'Width' for element 'fullscreen'
          _view.displayPanel.linkProperty("Width",  function() { return Width1; }, function(_v) { Width1 = _v; } ); // HtmlView Page linking property 'Width' for element 'displayPanel'
          _view.drawingPanel3D.linkProperty("MaximumZ",  function() { return zmax; }, function(_v) { zmax = _v; } ); // HtmlView Page linking property 'MaximumZ' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MaximumY",  function() { return ymax; }, function(_v) { ymax = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MaximumX",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MinimumX",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MinimumY",  function() { return ymin; }, function(_v) { ymin = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("MinimumZ",  function() { return zmin; }, function(_v) { zmin = _v; } ); // HtmlView Page linking property 'MinimumZ' for element 'drawingPanel3D'
          _view.drawingPanel3D.linkProperty("LineWidth",  function() { return stroke; }, function(_v) { stroke = _v; } ); // HtmlView Page linking property 'LineWidth' for element 'drawingPanel3D'
          _view.text3D.setAction("OnDrag", function(_data,_info) {
  L=Math.sqrt(x*x+y*y+(z-topz)*(z-topz));

}); // HtmlView Page setting action 'OnDrag' for element 'text3D'
          _view.text3D.linkProperty("SizeX",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'SizeX' for element 'text3D'
          _view.text3D.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'text3D'
          _view.text3D.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'text3D'
          _view.text3D.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Z' for element 'text3D'
          _view.text3D.linkProperty("SizeZ",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'SizeZ' for element 'text3D'
          _view.text3D.linkProperty("SizeY",  function() { return size; }, function(_v) { size = _v; } ); // HtmlView Page linking property 'SizeY' for element 'text3D'
          _view.Diagonalsegment3D.linkProperty("SizeX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'SizeX' for element 'Diagonalsegment3D'
          _view.Diagonalsegment3D.linkProperty("Z",  function() { return topz; }, function(_v) { topz = _v; } ); // HtmlView Page linking property 'Z' for element 'Diagonalsegment3D'
          _view.Diagonalsegment3D.linkProperty("SizeZ",  function() { return z-topz; } ); // HtmlView Page linking property 'SizeZ' for element 'Diagonalsegment3D'
          _view.Diagonalsegment3D.linkProperty("SizeY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'SizeY' for element 'Diagonalsegment3D'
          _view.Diagonalsegment3D.linkProperty("LineWidth",  function() { return stroke*3; } ); // HtmlView Page linking property 'LineWidth' for element 'Diagonalsegment3D'
          _view.Vertsegment3D.linkProperty("Z",  function() { return topz; }, function(_v) { topz = _v; } ); // HtmlView Page linking property 'Z' for element 'Vertsegment3D'
          _view.Vertsegment3D.linkProperty("SizeZ",  function() { return z-topz; } ); // HtmlView Page linking property 'SizeZ' for element 'Vertsegment3D'
          _view.Vertsegment3D.linkProperty("LineWidth",  function() { return stroke; }, function(_v) { stroke = _v; } ); // HtmlView Page linking property 'LineWidth' for element 'Vertsegment3D'
          _view.Hortsegment3D.linkProperty("SizeX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'SizeX' for element 'Hortsegment3D'
          _view.Hortsegment3D.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Z' for element 'Hortsegment3D'
          _view.Hortsegment3D.linkProperty("SizeY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'SizeY' for element 'Hortsegment3D'
          _view.Hortsegment3D.linkProperty("LineWidth",  function() { return stroke; }, function(_v) { stroke = _v; } ); // HtmlView Page linking property 'LineWidth' for element 'Hortsegment3D'
          _view.sphere3D.linkProperty("Radius",  function() { return size*2; } ); // HtmlView Page linking property 'Radius' for element 'sphere3D'
          _view.sphere3D.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'sphere3D'
          _view.sphere3D.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'sphere3D'
          _view.sphere3D.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Z' for element 'sphere3D'
          _view.sphere3D.setAction("OnDrag", function(_data,_info) {
  L=Math.sqrt(x*x+y*y+(z-topz)*(z-topz));

}); // HtmlView Page setting action 'OnDrag' for element 'sphere3D'
          _view.trail3D.linkProperty("Active",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Active' for element 'trail3D'
          _view.trail3D.linkProperty("InputZ",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'InputZ' for element 'trail3D'
          _view.trail3D.linkProperty("Connected",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Connected' for element 'trail3D'
          _view.trail3D.linkProperty("InputX",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail3D'
          _view.trail3D.linkProperty("InputY",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'InputY' for element 'trail3D'
          _view.trail3D.linkProperty("LineWidth",  function() { return stroke*2; } ); // HtmlView Page linking property 'LineWidth' for element 'trail3D'
          _view.arrow3D.linkProperty("SizeX",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'arrow3D'
          _view.arrow3D.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'arrow3D'
          _view.arrow3D.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'arrow3D'
          _view.arrow3D.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Z' for element 'arrow3D'
          _view.arrow3D.linkProperty("SizeZ",  function() { return vz; }, function(_v) { vz = _v; } ); // HtmlView Page linking property 'SizeZ' for element 'arrow3D'
          _view.arrow3D.linkProperty("SizeY",  function() { return vy; }, function(_v) { vy = _v; } ); // HtmlView Page linking property 'SizeY' for element 'arrow3D'
          _view.arrow3D.linkProperty("LineWidth",  function() { return stroke; }, function(_v) { stroke = _v; } ); // HtmlView Page linking property 'LineWidth' for element 'arrow3D'
          _view.arrow3D2.linkProperty("SizeX",  function() { return vx; }, function(_v) { vx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'arrow3D2'
          _view.arrow3D2.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'arrow3D2'
          _view.arrow3D2.linkProperty("Y",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Y' for element 'arrow3D2'
          _view.arrow3D2.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Z' for element 'arrow3D2'
          _view.arrow3D2.linkProperty("Visibility",  function() { return !circular; } ); // HtmlView Page linking property 'Visibility' for element 'arrow3D2'
          _view.arrow3D2.linkProperty("SizeY",  function() { return vy; }, function(_v) { vy = _v; } ); // HtmlView Page linking property 'SizeY' for element 'arrow3D2'
          _view.arrow3D3.linkProperty("X",  function() { return x+vx; } ); // HtmlView Page linking property 'X' for element 'arrow3D3'
          _view.arrow3D3.linkProperty("Y",  function() { return y+vy; } ); // HtmlView Page linking property 'Y' for element 'arrow3D3'
          _view.arrow3D3.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Z' for element 'arrow3D3'
          _view.arrow3D3.linkProperty("SizeZ",  function() { return vz; }, function(_v) { vz = _v; } ); // HtmlView Page linking property 'SizeZ' for element 'arrow3D3'
          _view.arrow3D3.linkProperty("Visibility",  function() { return !circular; } ); // HtmlView Page linking property 'Visibility' for element 'arrow3D3'
          _view.plane3D.linkProperty("DirectionA",  function() { return dirx; }, function(_v) { dirx = _v; } ); // HtmlView Page linking property 'DirectionA' for element 'plane3D'
          _view.plane3D.linkProperty("DirectionB",  function() { return diry; }, function(_v) { diry = _v; } ); // HtmlView Page linking property 'DirectionB' for element 'plane3D'
          _view.plane3D.linkProperty("SizeX",  function() { return xmax*2; } ); // HtmlView Page linking property 'SizeX' for element 'plane3D'
          _view.plane3D.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Z' for element 'plane3D'
          _view.plane3D.linkProperty("SizeY",  function() { return ymax*2; } ); // HtmlView Page linking property 'SizeY' for element 'plane3D'
          _view.controlPanel.linkProperty("Height",  function() { return Height2; }, function(_v) { Height2 = _v; } ); // HtmlView Page linking property 'Height' for element 'controlPanel'
          _view.controlPanel.linkProperty("Width",  function() { return Width1; }, function(_v) { Width1 = _v; } ); // HtmlView Page linking property 'Width' for element 'controlPanel'
          _view.slider2.linkProperty("Width",  function() { return (_isEPub)?"0":""; } ); // HtmlView Page linking property 'Width' for element 'slider2'
          _view.slider2.linkProperty("Maximum",  function() { return pi/10*9; } ); // HtmlView Page linking property 'Maximum' for element 'slider2'
          _view.slider2.linkProperty("Minimum",  function() { return -pi/10*9; } ); // HtmlView Page linking property 'Minimum' for element 'slider2'
          _view.slider2.linkProperty("Value",  function() { return cta; }, function(_v) { cta = _v; } ); // HtmlView Page linking property 'Value' for element 'slider2'
          _view.slider2.linkProperty("Step",  function() { return pi/10; } ); // HtmlView Page linking property 'Step' for element 'slider2'
          _view.field2.linkProperty("Value",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'Value' for element 'field2'
          _view.label22.linkProperty("Width",  function() { return (_isEPub)?"0":""; } ); // HtmlView Page linking property 'Width' for element 'label22'
          _view.circularcheckBox.linkProperty("Checked",  function() { return circular; }, function(_v) { circular = _v; } ); // HtmlView Page linking property 'Checked' for element 'circularcheckBox'
          _view.circularcheckBox.setAction("OnChange", function(_data,_info) {
  if(circular){
    phidot=Math.sqrt(g/L/Math.cos(cta));
    cst=Math.sin(cta)*Math.sin(cta)*phidot;
    omega=0;
  }

}); // HtmlView Page setting action 'OnChange' for element 'circularcheckBox'
          _view.Tphilabel.linkProperty("Width",  function() { return (!circular)?"":"0"; } ); // HtmlView Page linking property 'Width' for element 'Tphilabel'
          _view.Tphilabel.linkProperty("Visibility",  function() { return !circular; } ); // HtmlView Page linking property 'Visibility' for element 'Tphilabel'
          _view.Tphislider.linkProperty("Width",  function() { return (!circular)?"":"0"; } ); // HtmlView Page linking property 'Width' for element 'Tphislider'
          _view.Tphislider.linkProperty("Value",  function() { return T; }, function(_v) { T = _v; } ); // HtmlView Page linking property 'Value' for element 'Tphislider'
          _view.Tphislider.setAction("OnChange", function(_data,_info) {
  phidot=2*pi/T;
  cst=Math.sin(cta)*Math.sin(cta)*phidot;

}); // HtmlView Page setting action 'OnChange' for element 'Tphislider'
          _view.Tphislider.linkProperty("Visibility",  function() { return !circular; } ); // HtmlView Page linking property 'Visibility' for element 'Tphislider'
          _view.Tphislider.linkProperty("Disabled",  function() { return circular; }, function(_v) { circular = _v; } ); // HtmlView Page linking property 'Disabled' for element 'Tphislider'
          _view.field.linkProperty("Value",  function() { return T; }, function(_v) { T = _v; } ); // HtmlView Page linking property 'Value' for element 'field'
          _view.field.setAction("OnChange", function(_data,_info) {
  phidot=2*pi/T;
  cst=Math.sin(cta)*Math.sin(cta)*phidot;

}); // HtmlView Page setting action 'OnChange' for element 'field'
          _view.field.linkProperty("Visibility",  function() { return !circular; } ); // HtmlView Page linking property 'Visibility' for element 'field'
          _view.label.linkProperty("Width",  function() { return (!circular)?"":"0"; } ); // HtmlView Page linking property 'Width' for element 'label'
          _view.label.linkProperty("Visibility",  function() { return !circular; } ); // HtmlView Page linking property 'Visibility' for element 'label'
          _view.x2.linkProperty("Value",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'Value' for element 'x2'
          _view.x3.linkProperty("Value",  function() { return y; }, function(_v) { y = _v; } ); // HtmlView Page linking property 'Value' for element 'x3'
          _view.x.linkProperty("Value",  function() { return z; }, function(_v) { z = _v; } ); // HtmlView Page linking property 'Value' for element 'x'
          _view.playPauseButton.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPauseButton'
          _view.playPauseButton.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'playPauseButton'
          _view.playPauseButton.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPauseButton'
          _view.stepButton2.setAction("OnClick", function(_data,_info) {
  _step();

}); // HtmlView Page setting action 'OnClick' for element 'stepButton2'
          _view.resetButton.setAction("OnRelease", _reset); // HtmlView Page setting action 'OnRelease' for element 'resetButton'
          _view.FullScreen2Button.setAction("OffClick", function(_data,_info) {
  toggleFullScreen();

}); // HtmlView Page setting action 'OffClick' for element 'FullScreen2Button'
          _view.FullScreen2Button.linkProperty("Visibility",  function() { return isAndroid; }, function(_v) { isAndroid = _v; } ); // HtmlView Page linking property 'Visibility' for element 'FullScreen2Button'
          _view.FullScreen2Button.linkProperty("Disabled",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Disabled' for element 'FullScreen2Button'
          _view.FullScreen2Button.setAction("OnClick", function(_data,_info) {
  toggleFullScreen();

}); // HtmlView Page setting action 'OnClick' for element 'FullScreen2Button'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(20);
  _model.setStepsPerDisplay(1);
  _selectView(-1); // this includes _model.reset()
  return _model;
}
function pendulum3D_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = pendulum3D_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);

  _view._addDescriptionPage('Intro Page','./pendulum3D_Intro_1.html');

  return _view;
} // end of main function

function pendulum3D_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"fullscreen", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'fullscreen'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"displayPanel", _view.fullscreen) // EJsS HtmlView.HtmlView Page: declaration of element 'displayPanel'
      .setProperty("Height","Height1") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'displayPanel'
      ;

    _view._addElement(EJSS_DRAWING3D.drawingPanel,"drawingPanel3D", _view.displayPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel3D'
      .setProperty("Draggable","ALTITUDE") // EJsS HtmlView.HtmlView Page: setting property 'Draggable' for element 'drawingPanel3D'
      .setProperty("CameraZ",50) // EJsS HtmlView.HtmlView Page: setting property 'CameraZ' for element 'drawingPanel3D'
      .setProperty("CameraY",125) // EJsS HtmlView.HtmlView Page: setting property 'CameraY' for element 'drawingPanel3D'
      .setProperty("CameraX",0) // EJsS HtmlView.HtmlView Page: setting property 'CameraX' for element 'drawingPanel3D'
      .setProperty("CameraAltitude",0) // EJsS HtmlView.HtmlView Page: setting property 'CameraAltitude' for element 'drawingPanel3D'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel3D'
      .setProperty("CameraFocusZ",0) // EJsS HtmlView.HtmlView Page: setting property 'CameraFocusZ' for element 'drawingPanel3D'
      .setProperty("CameraFocusY",0) // EJsS HtmlView.HtmlView Page: setting property 'CameraFocusY' for element 'drawingPanel3D'
      .setProperty("CameraFocusX",0) // EJsS HtmlView.HtmlView Page: setting property 'CameraFocusX' for element 'drawingPanel3D'
      .setProperty("CameraAzimuth",0) // EJsS HtmlView.HtmlView Page: setting property 'CameraAzimuth' for element 'drawingPanel3D'
      .setProperty("DecorationType","CENTERED_AXES") // EJsS HtmlView.HtmlView Page: setting property 'DecorationType' for element 'drawingPanel3D'
      ;

    _view._addElement(EJSS_DRAWING3D.text,"text3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'text3D'
      .setProperty("MovesGroup",true) // EJsS HtmlView.HtmlView Page: setting property 'MovesGroup' for element 'text3D'
      .setProperty("Background","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'text3D'
      .setProperty("FontColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'FontColor' for element 'text3D'
      .setProperty("Text","O") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'text3D'
      .setProperty("Font","normal bold 33px ") // EJsS HtmlView.HtmlView Page: setting property 'Font' for element 'text3D'
      .setProperty("EnabledSize","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledSize' for element 'text3D'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'text3D'
      ;

    _view._addElement(EJSS_DRAWING3D.segment,"Diagonalsegment3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'Diagonalsegment3D'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Diagonalsegment3D'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Diagonalsegment3D'
      ;

    _view._addElement(EJSS_DRAWING3D.segment,"Vertsegment3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'Vertsegment3D'
      .setProperty("Transparency",100) // EJsS HtmlView.HtmlView Page: setting property 'Transparency' for element 'Vertsegment3D'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'Vertsegment3D'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Vertsegment3D'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Vertsegment3D'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'Vertsegment3D'
      ;

    _view._addElement(EJSS_DRAWING3D.segment,"Hortsegment3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'Hortsegment3D'
      .setProperty("Transparency",100) // EJsS HtmlView.HtmlView Page: setting property 'Transparency' for element 'Hortsegment3D'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Hortsegment3D'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Hortsegment3D'
      .setProperty("SizeZ",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'Hortsegment3D'
      ;

    _view._addElement(EJSS_DRAWING3D.sphere,"sphere3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'sphere3D'
      .setProperty("EnabledPosition","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'sphere3D'
      ;

    _view._addElement(EJSS_DRAWING3D.trail,"trail3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'trail3D'
      .setProperty("LineColor","Cyan") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail3D'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"arrow3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow3D'
      .setProperty("LineColor","red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrow3D'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"arrow3D2", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow3D2'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'arrow3D2'
      .setProperty("LineColor","red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrow3D2'
      .setProperty("SizeZ",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'arrow3D2'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"arrow3D3", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow3D3'
      .setProperty("FillColor","red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'arrow3D3'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'arrow3D3'
      .setProperty("LineColor","red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrow3D3'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'arrow3D3'
      ;

    _view._addElement(EJSS_DRAWING3D.plane,"plane3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'plane3D'
      .setProperty("Transparency",200) // EJsS HtmlView.HtmlView Page: setting property 'Transparency' for element 'plane3D'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'plane3D'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'plane3D'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.fullscreen) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label3", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'label3'
      .setProperty("Background","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'label3'
      .setProperty("Tooltip","angle ") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'label3'
      .setProperty("Foreground","White") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'label3'
      .setProperty("Text"," ϑ = ") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label3'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"slider2", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'slider2'
      .setProperty("Background","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'slider2'
      .setProperty("Tooltip","displacement") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'slider2'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field2", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'field2'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field2'
      .setProperty("Format","00.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label22", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'label22'
      .setProperty("Background","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'label22'
      .setProperty("Tooltip","radians") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'label22'
      .setProperty("Foreground","White") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'label22'
      .setProperty("Text"," rad ") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label22'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"circularcheckBox", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'circularcheckBox'
      .setProperty("Text","circular loop") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'circularcheckBox'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"Tphilabel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Tphilabel'
      .setProperty("Tooltip","period") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'Tphilabel'
      .setProperty("Text"," T = ") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Tphilabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"Tphislider", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Tphislider'
      .setProperty("Minimum",0.5) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'Tphislider'
      .setProperty("Maximum",20.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'Tphislider'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'Tphislider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'field'
      .setProperty("Width",40) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'label'
      .setProperty("Tooltip","seconds") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'label'
      .setProperty("Text"," s ") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"x4", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'x4'
      .setProperty("Background","Red") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'x4'
      .setProperty("Text","x =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'x4'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"x2", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'x2'
      .setProperty("ShowText",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowText' for element 'x2'
      .setProperty("Minimum",-20) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'x2'
      .setProperty("Maximum",20) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'x2'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'x2'
      .setProperty("Background","Red") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'x2'
      .setProperty("Tooltip","position x") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'x2'
      .setProperty("Disabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Disabled' for element 'x2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"y", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'y'
      .setProperty("Background","Green") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'y'
      .setProperty("Text","y =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'y'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"x3", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'x3'
      .setProperty("ShowText",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowText' for element 'x3'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'x3'
      .setProperty("Background","Green") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'x3'
      .setProperty("Tooltip","position y") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'x3'
      .setProperty("Disabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Disabled' for element 'x3'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"y2", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'y2'
      .setProperty("Background","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'y2'
      .setProperty("Foreground","White") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'y2'
      .setProperty("Text","z =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'y2'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"x", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'x'
      .setProperty("ShowText",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowText' for element 'x'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'x'
      .setProperty("Background","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'x'
      .setProperty("Tooltip","position z") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'x'
      .setProperty("Foreground","White") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'x'
      .setProperty("Disabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Disabled' for element 'x'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPauseButton", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'playPauseButton'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPauseButton'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPauseButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepButton2", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'stepButton2'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'stepButton2'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"FullScreen2Button", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'FullScreen2Button'
      .setProperty("Tooltip","Fullscreen ") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'FullScreen2Button'
      .setProperty("ImageOnUrl","./full_screen.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'FullScreen2Button'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/close.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'FullScreen2Button'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"feedback", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'feedback'
      .setProperty("Html","<a href=\"http://weelookang.blogspot.sg?m=1\"         target=\"_blank\">Feedback Google+</a>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'feedback'
      ;

  };

  return _view;
}



      var _model;
      var _scorm;
      window.addEventListener('load',
        function () { 
          _model =  new pendulum3D("_topFrame","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_examples/bin/javascript/lib/","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_6.0/workspace/source/JavascriptExamples/");
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
