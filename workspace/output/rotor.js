/* _inputParameters: an object with different values for the model parameters */
function rotor(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var z; // EjsS Model.Variables.Variables Table.z
  var z_0; // EjsS Model.Variables.Variables Table.z_0
  var g; // EjsS Model.Variables.Variables Table.g
  var v_0; // EjsS Model.Variables.Variables Table.v_0
  var t; // EjsS Model.Variables.Variables Table.t
  var dt; // EjsS Model.Variables.Variables Table.dt
  var theta; // EjsS Model.Variables.Variables Table.theta
  var theta_0; // EjsS Model.Variables.Variables Table.theta_0
  var w; // EjsS Model.Variables.Variables Table.w
  var vo; // EjsS Model.Variables.Variables Table.vo

  var width; // EjsS Model.Variables.UI Parameters.width
  var length; // EjsS Model.Variables.UI Parameters.length
  var width2; // EjsS Model.Variables.UI Parameters.width2

  var P; // EjsS Model.Variables.PID Control.P
  var I; // EjsS Model.Variables.PID Control.I
  var D; // EjsS Model.Variables.PID Control.D
  var V; // EjsS Model.Variables.PID Control.V
  var V_in; // EjsS Model.Variables.PID Control.V_in

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
      z : z,
      z_0 : z_0,
      g : g,
      v_0 : v_0,
      t : t,
      dt : dt,
      theta : theta,
      theta_0 : theta_0,
      w : w,
      vo : vo,
      width : width,
      length : length,
      width2 : width2,
      P : P,
      I : I,
      D : D,
      V : V,
      V_in : V_in
    };
  };

  function _serializePublic() { return _model.serializePublic(); }

  _model._userSerializePublic = function() {
    return {
      z : z,
      z_0 : z_0,
      g : g,
      v_0 : v_0,
      t : t,
      dt : dt,
      theta : theta,
      theta_0 : theta_0,
      w : w,
      vo : vo,
      width : width,
      length : length,
      width2 : width2,
      P : P,
      I : I,
      D : D,
      V : V,
      V_in : V_in
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.z != "undefined") z = json.z;
    if(typeof json.z_0 != "undefined") z_0 = json.z_0;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.v_0 != "undefined") v_0 = json.v_0;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.theta_0 != "undefined") theta_0 = json.theta_0;
    if(typeof json.w != "undefined") w = json.w;
    if(typeof json.vo != "undefined") vo = json.vo;
    if(typeof json.width != "undefined") width = json.width;
    if(typeof json.length != "undefined") length = json.length;
    if(typeof json.width2 != "undefined") width2 = json.width2;
    if(typeof json.P != "undefined") P = json.P;
    if(typeof json.I != "undefined") I = json.I;
    if(typeof json.D != "undefined") D = json.D;
    if(typeof json.V != "undefined") V = json.V;
    if(typeof json.V_in != "undefined") V_in = json.V_in;
  };

  _model._readParametersPublic = function(json) {
    if(typeof json.z != "undefined") z = json.z;
    if(typeof json.z_0 != "undefined") z_0 = json.z_0;
    if(typeof json.g != "undefined") g = json.g;
    if(typeof json.v_0 != "undefined") v_0 = json.v_0;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.theta_0 != "undefined") theta_0 = json.theta_0;
    if(typeof json.w != "undefined") w = json.w;
    if(typeof json.vo != "undefined") vo = json.vo;
    if(typeof json.width != "undefined") width = json.width;
    if(typeof json.length != "undefined") length = json.length;
    if(typeof json.width2 != "undefined") width2 = json.width2;
    if(typeof json.P != "undefined") P = json.P;
    if(typeof json.I != "undefined") I = json.I;
    if(typeof json.D != "undefined") D = json.D;
    if(typeof json.V != "undefined") V = json.V;
    if(typeof json.V_in != "undefined") V_in = json.V_in;
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
    __pagesEnabled["startCode"] = true;
    __pagesEnabled["Movimiento rotor"] = true;
    __pagesEnabled["Rotor"] = true;
  });

  _model.addToReset(function() {
    z = 0; // EjsS Model.Variables.Variables Table.z
    z_0 = 0; // EjsS Model.Variables.Variables Table.z_0
    g = -9.81; // EjsS Model.Variables.Variables Table.g
    v_0 = 0; // EjsS Model.Variables.Variables Table.v_0
    t = 0; // EjsS Model.Variables.Variables Table.t
    dt = 0.05; // EjsS Model.Variables.Variables Table.dt
    theta = 0; // EjsS Model.Variables.Variables Table.theta
    theta_0 = 0; // EjsS Model.Variables.Variables Table.theta_0
    w = 25; // EjsS Model.Variables.Variables Table.w
    vo = 0; // EjsS Model.Variables.Variables Table.vo
  });

  _model.addToReset(function() {
    width = 800; // EjsS Model.Variables.UI Parameters.width
    length = 400; // EjsS Model.Variables.UI Parameters.length
    width2 = 400; // EjsS Model.Variables.UI Parameters.width2
  });

  _model.addToReset(function() {
    P = 20; // EjsS Model.Variables.PID Control.P
    I = 21; // EjsS Model.Variables.PID Control.I
    D = 22; // EjsS Model.Variables.PID Control.D
    V = 25; // EjsS Model.Variables.PID Control.V
    V_in = 0; // EjsS Model.Variables.PID Control.V_in
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
    _model.setAutoplay(true);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["startCode"]) return;
    _view.zPlot.setProperty("Display","");  // > Initialization.startCode:1
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Movimiento rotor"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["Rotor"]) return;
    V=(P+I+D)/6; //Funcion prueba  // > FixedRelations.Rotor:1
    V_in=V; //Funcion prueba. Al quitar se activa el slider  // > FixedRelations.Rotor:2
    w=V*1.5; //Funcion prueba. Al quitar se activa el slider  // > FixedRelations.Rotor:3
    z=0; //Test  // > FixedRelations.Rotor:4
    //RELACIONES  // > FixedRelations.Rotor:5
    theta=theta_0+w*t;  // > FixedRelations.Rotor:6
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
    if (_odeName=="Movimiento rotor") return _ODEi_evolution1;
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
    var __solverClass = EJSS_ODE_SOLVERS.cashKarp45;
    var __state=[];
    var __ignoreErrors=false;
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf._getOdeVars = function (){ return["z","t"]};

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
      __eventSolver.setTolerances(0.00001,0.00001);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=z) __mustReinitialize = true;
        __state[__cIn++] = z;
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
        z = __state[__cOut++];
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
        var z = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = vo+g*t; // Rate for ODE: Movimiento rotor:z
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
        var z = _aState[__cOut++];
        var t = _aState[__cOut++];
      return eval(userCondition);
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        z = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = z;
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

  function _historic_z(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "Simulacion", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new rotor_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.esfera3D.linkProperty("Z",  function() { return z; }, function(_v) { z = _v; } ); // Simulacion linking property 'Z' for element 'esfera3D'
          _view.helice.linkProperty("Z",  function() { return z+0.6; } ); // Simulacion linking property 'Z' for element 'helice'
          _view.rotacion_helice.linkProperty("Angle",  function() { return theta; }, function(_v) { theta = _v; } ); // Simulacion linking property 'Angle' for element 'rotacion_helice'
          _view.z_line.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // Simulacion linking property 'InputX' for element 'z_line'
          _view.z_line.linkProperty("InputY",  function() { return z; }, function(_v) { z = _v; } ); // Simulacion linking property 'InputY' for element 'z_line'
          _view.z_line2.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // Simulacion linking property 'InputX' for element 'z_line2'
          _view.z_line2.linkProperty("InputY",  function() { return w; }, function(_v) { w = _v; } ); // Simulacion linking property 'InputY' for element 'z_line2'
          _view.playPauseButton.setAction("OffClick", _pause); // Simulacion setting action 'OffClick' for element 'playPauseButton'
          _view.playPauseButton.linkProperty("State",  function() { return _isPaused; } ); // Simulacion linking property 'State' for element 'playPauseButton'
          _view.playPauseButton.setAction("OnClick", _play); // Simulacion setting action 'OnClick' for element 'playPauseButton'
          _view.stepButton.setAction("OnClick", function(_data,_info) {
  _step();

}); // Simulacion setting action 'OnClick' for element 'stepButton'
          _view.resetButton.setAction("OnClick", function(_data,_info) {
  _reset();

}); // Simulacion setting action 'OnClick' for element 'resetButton'
          _view.graphChange.setAction("OffClick", function(_data,_info) {
  _view.zPlot.setProperty("Display","none");
  _view.wPlot.setProperty("Display","");

}); // Simulacion setting action 'OffClick' for element 'graphChange'
          _view.graphChange.setAction("OnClick", function(_data,_info) {
  _view.zPlot.setProperty("Display","");
  _view.wPlot.setProperty("Display","none");

}); // Simulacion setting action 'OnClick' for element 'graphChange'
          _view.voltage_slider.linkProperty("Value",  function() { return V_in; }, function(_v) { V_in = _v; } ); // Simulacion linking property 'Value' for element 'voltage_slider'
          _view.P_value.linkProperty("Value",  function() { return P; }, function(_v) { P = _v; } ); // Simulacion linking property 'Value' for element 'P_value'
          _view.P_value.setAction("OnChange", _play); // Simulacion setting action 'OnChange' for element 'P_value'
          _view.I_value.linkProperty("Value",  function() { return I; }, function(_v) { I = _v; } ); // Simulacion linking property 'Value' for element 'I_value'
          _view.I_value.setAction("OnChange", _play); // Simulacion setting action 'OnChange' for element 'I_value'
          _view.D_value.linkProperty("Value",  function() { return D; }, function(_v) { D = _v; } ); // Simulacion linking property 'Value' for element 'D_value'
          _view.D_value.setAction("OnChange", _play); // Simulacion setting action 'OnChange' for element 'D_value'
          _view.w_ang_slider.linkProperty("Value",  function() { return w; }, function(_v) { w = _v; } ); // Simulacion linking property 'Value' for element 'w_ang_slider'
          _view.w_ang_slider.setAction("OnChange", _play); // Simulacion setting action 'OnChange' for element 'w_ang_slider'
          _view.t.linkProperty("Value",  function() { return t; }, function(_v) { t = _v; } ); // Simulacion linking property 'Value' for element 't'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(true);
  _model.setFPS(20);
  _model.setStepsPerDisplay(1);
  _selectView(-1); // this includes _model.reset()
  return _model;
}
function rotor_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = rotor_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function rotor_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"mainWindow", _view._topFrame) // EJsS HtmlView.Simulacion: declaration of element 'mainWindow'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"title", _view.mainWindow) // EJsS HtmlView.Simulacion: declaration of element 'title'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"title2", _view.title) // EJsS HtmlView.Simulacion: declaration of element 'title2'
      .setProperty("Text","<h1>Simulación</h1>") // EJsS HtmlView.Simulacion: setting property 'Text' for element 'title2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"mainPanel", _view.mainWindow) // EJsS HtmlView.Simulacion: declaration of element 'mainPanel'
      .setProperty("CSS",{"display":"block",  "margin-left":"0cm",  "margin-right":"0cm",  "margin-top":"0cm",  "margin-bottom":"0cm"}) // EJsS HtmlView.Simulacion: setting property 'CSS' for element 'mainPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"simulation3D", _view.mainPanel) // EJsS HtmlView.Simulacion: declaration of element 'simulation3D'
      .setProperty("Height",300) // EJsS HtmlView.Simulacion: setting property 'Height' for element 'simulation3D'
      .setProperty("Width",350) // EJsS HtmlView.Simulacion: setting property 'Width' for element 'simulation3D'
      .setProperty("CSS",{"display":"inline-block",    "margin":"2px",    "vertical-align": "top"}) // EJsS HtmlView.Simulacion: setting property 'CSS' for element 'simulation3D'
      ;

    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view.simulation3D) // EJsS HtmlView.Simulacion: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_DRAWING3D.drawingPanel,"drawingPanel3D", _view.wrappedPanel) // EJsS HtmlView.Simulacion: declaration of element 'drawingPanel3D'
      .setProperty("Height",300) // EJsS HtmlView.Simulacion: setting property 'Height' for element 'drawingPanel3D'
      .setProperty("Width",300) // EJsS HtmlView.Simulacion: setting property 'Width' for element 'drawingPanel3D'
      .setProperty("Draggable","ANY") // EJsS HtmlView.Simulacion: setting property 'Draggable' for element 'drawingPanel3D'
      .setProperty("SizeX",50) // EJsS HtmlView.Simulacion: setting property 'SizeX' for element 'drawingPanel3D'
      .setProperty("Enabled",true) // EJsS HtmlView.Simulacion: setting property 'Enabled' for element 'drawingPanel3D'
      .setProperty("SizeZ",50) // EJsS HtmlView.Simulacion: setting property 'SizeZ' for element 'drawingPanel3D'
      .setProperty("SizeY",50) // EJsS HtmlView.Simulacion: setting property 'SizeY' for element 'drawingPanel3D'
      ;

    _view._addElement(EJSS_DRAWING3D.sphere,"esfera3D", _view.drawingPanel3D) // EJsS HtmlView.Simulacion: declaration of element 'esfera3D'
      .setProperty("Radius",0.5) // EJsS HtmlView.Simulacion: setting property 'Radius' for element 'esfera3D'
      .setProperty("FillColor","Magenta") // EJsS HtmlView.Simulacion: setting property 'FillColor' for element 'esfera3D'
      ;

    _view._addElement(EJSS_DRAWING3D.cylinder,"right_anchor", _view.drawingPanel3D) // EJsS HtmlView.Simulacion: declaration of element 'right_anchor'
      .setProperty("FillColor","Brown") // EJsS HtmlView.Simulacion: setting property 'FillColor' for element 'right_anchor'
      .setProperty("SizeX",0.5) // EJsS HtmlView.Simulacion: setting property 'SizeX' for element 'right_anchor'
      .setProperty("Y",-1) // EJsS HtmlView.Simulacion: setting property 'Y' for element 'right_anchor'
      .setProperty("SizeZ",2) // EJsS HtmlView.Simulacion: setting property 'SizeZ' for element 'right_anchor'
      .setProperty("SizeY",0.5) // EJsS HtmlView.Simulacion: setting property 'SizeY' for element 'right_anchor'
      ;

    _view._addElement(EJSS_DRAWING3D.cylinder,"left_anchor", _view.drawingPanel3D) // EJsS HtmlView.Simulacion: declaration of element 'left_anchor'
      .setProperty("FillColor","Brown") // EJsS HtmlView.Simulacion: setting property 'FillColor' for element 'left_anchor'
      .setProperty("SizeX",0.5) // EJsS HtmlView.Simulacion: setting property 'SizeX' for element 'left_anchor'
      .setProperty("Y",1) // EJsS HtmlView.Simulacion: setting property 'Y' for element 'left_anchor'
      .setProperty("SizeZ",2) // EJsS HtmlView.Simulacion: setting property 'SizeZ' for element 'left_anchor'
      .setProperty("SizeY",0.5) // EJsS HtmlView.Simulacion: setting property 'SizeY' for element 'left_anchor'
      ;

    _view._addElement(EJSS_DRAWING3D.box,"helice", _view.drawingPanel3D) // EJsS HtmlView.Simulacion: declaration of element 'helice'
      .setProperty("FillColor","White") // EJsS HtmlView.Simulacion: setting property 'FillColor' for element 'helice'
      .setProperty("SizeX",1) // EJsS HtmlView.Simulacion: setting property 'SizeX' for element 'helice'
      .setProperty("X",0) // EJsS HtmlView.Simulacion: setting property 'X' for element 'helice'
      .setProperty("Y",0) // EJsS HtmlView.Simulacion: setting property 'Y' for element 'helice'
      .setProperty("SizeZ",0.15) // EJsS HtmlView.Simulacion: setting property 'SizeZ' for element 'helice'
      .setProperty("SizeY",0.25) // EJsS HtmlView.Simulacion: setting property 'SizeY' for element 'helice'
      ;

    _view._addElement(EJSS_DRAWING3D.rotationZ,"rotacion_helice", _view.helice) // EJsS HtmlView.Simulacion: declaration of element 'rotacion_helice'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"graph", _view.mainPanel) // EJsS HtmlView.Simulacion: declaration of element 'graph'
      .setProperty("Height",300) // EJsS HtmlView.Simulacion: setting property 'Height' for element 'graph'
      .setProperty("Width",350) // EJsS HtmlView.Simulacion: setting property 'Width' for element 'graph'
      .setProperty("CSS",{"display":"inline-block",    "margin":"2px",    "vertical-align": "top"}) // EJsS HtmlView.Simulacion: setting property 'CSS' for element 'graph'
      .setProperty("Background","Cyan") // EJsS HtmlView.Simulacion: setting property 'Background' for element 'graph'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"zPlot", _view.graph) // EJsS HtmlView.Simulacion: declaration of element 'zPlot'
      .setProperty("Height","100%") // EJsS HtmlView.Simulacion: setting property 'Height' for element 'zPlot'
      .setProperty("Width","100%") // EJsS HtmlView.Simulacion: setting property 'Width' for element 'zPlot'
      .setProperty("TitleY","Altura (m)") // EJsS HtmlView.Simulacion: setting property 'TitleY' for element 'zPlot'
      .setProperty("AutoScaleY",true) // EJsS HtmlView.Simulacion: setting property 'AutoScaleY' for element 'zPlot'
      .setProperty("TitleX","Tiempo (s)") // EJsS HtmlView.Simulacion: setting property 'TitleX' for element 'zPlot'
      .setProperty("AutoScaleX",true) // EJsS HtmlView.Simulacion: setting property 'AutoScaleX' for element 'zPlot'
      .setProperty("Title","Altura rotor") // EJsS HtmlView.Simulacion: setting property 'Title' for element 'zPlot'
      .setProperty("TitleFont","normal normal 18px ") // EJsS HtmlView.Simulacion: setting property 'TitleFont' for element 'zPlot'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"z_line", _view.zPlot) // EJsS HtmlView.Simulacion: declaration of element 'z_line'
      .setProperty("NoRepeat",true) // EJsS HtmlView.Simulacion: setting property 'NoRepeat' for element 'z_line'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"wPlot", _view.graph) // EJsS HtmlView.Simulacion: declaration of element 'wPlot'
      .setProperty("Height","100%") // EJsS HtmlView.Simulacion: setting property 'Height' for element 'wPlot'
      .setProperty("Width","100%") // EJsS HtmlView.Simulacion: setting property 'Width' for element 'wPlot'
      .setProperty("TitleY","Velocidad angular (rad/s)") // EJsS HtmlView.Simulacion: setting property 'TitleY' for element 'wPlot'
      .setProperty("AutoScaleY",true) // EJsS HtmlView.Simulacion: setting property 'AutoScaleY' for element 'wPlot'
      .setProperty("TitleX","Tiempo (s)") // EJsS HtmlView.Simulacion: setting property 'TitleX' for element 'wPlot'
      .setProperty("AutoScaleX",true) // EJsS HtmlView.Simulacion: setting property 'AutoScaleX' for element 'wPlot'
      .setProperty("Title","Velocidad angular") // EJsS HtmlView.Simulacion: setting property 'Title' for element 'wPlot'
      .setProperty("TitleFont","normal normal 18px ") // EJsS HtmlView.Simulacion: setting property 'TitleFont' for element 'wPlot'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"z_line2", _view.wPlot) // EJsS HtmlView.Simulacion: declaration of element 'z_line2'
      .setProperty("NoRepeat",true) // EJsS HtmlView.Simulacion: setting property 'NoRepeat' for element 'z_line2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.mainPanel) // EJsS HtmlView.Simulacion: declaration of element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"bottomLeftPanel", _view.controlPanel) // EJsS HtmlView.Simulacion: declaration of element 'bottomLeftPanel'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPauseButton", _view.bottomLeftPanel) // EJsS HtmlView.Simulacion: declaration of element 'playPauseButton'
      .setProperty("Tooltip","Play/Pause") // EJsS HtmlView.Simulacion: setting property 'Tooltip' for element 'playPauseButton'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.Simulacion: setting property 'ImageOnUrl' for element 'playPauseButton'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.Simulacion: setting property 'ImageOffUrl' for element 'playPauseButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepButton", _view.bottomLeftPanel) // EJsS HtmlView.Simulacion: declaration of element 'stepButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.Simulacion: setting property 'ImageUrl' for element 'stepButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.bottomLeftPanel) // EJsS HtmlView.Simulacion: declaration of element 'resetButton'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.Simulacion: setting property 'ImageUrl' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"graphChange", _view.bottomLeftPanel) // EJsS HtmlView.Simulacion: declaration of element 'graphChange'
      .setProperty("TextOn","Altura") // EJsS HtmlView.Simulacion: setting property 'TextOn' for element 'graphChange'
      .setProperty("State",true) // EJsS HtmlView.Simulacion: setting property 'State' for element 'graphChange'
      .setProperty("TextOff","Velocidad Angular") // EJsS HtmlView.Simulacion: setting property 'TextOff' for element 'graphChange'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"values", _view.mainWindow) // EJsS HtmlView.Simulacion: declaration of element 'values'
      .setProperty("Height","") // EJsS HtmlView.Simulacion: setting property 'Height' for element 'values'
      .setProperty("Width",700) // EJsS HtmlView.Simulacion: setting property 'Width' for element 'values'
      .setProperty("CSS",{"display":"inline-block",    "margin":"5px",    "vertical-align": "center"}) // EJsS HtmlView.Simulacion: setting property 'CSS' for element 'values'
      .setProperty("Background","LightGray") // EJsS HtmlView.Simulacion: setting property 'Background' for element 'values'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"voltage_text", _view.values) // EJsS HtmlView.Simulacion: declaration of element 'voltage_text'
      .setProperty("Text","Voltaje: ") // EJsS HtmlView.Simulacion: setting property 'Text' for element 'voltage_text'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"voltage_slider", _view.values) // EJsS HtmlView.Simulacion: declaration of element 'voltage_slider'
      .setProperty("Minimum",0) // EJsS HtmlView.Simulacion: setting property 'Minimum' for element 'voltage_slider'
      .setProperty("Maximum",50) // EJsS HtmlView.Simulacion: setting property 'Maximum' for element 'voltage_slider'
      .setProperty("ShowText",true) // EJsS HtmlView.Simulacion: setting property 'ShowText' for element 'voltage_slider'
      .setProperty("Format","0.0") // EJsS HtmlView.Simulacion: setting property 'Format' for element 'voltage_slider'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"PID_Control", _view.values) // EJsS HtmlView.Simulacion: declaration of element 'PID_Control'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"P_text", _view.PID_Control) // EJsS HtmlView.Simulacion: declaration of element 'P_text'
      .setProperty("Text","P: ") // EJsS HtmlView.Simulacion: setting property 'Text' for element 'P_text'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"P_value", _view.PID_Control) // EJsS HtmlView.Simulacion: declaration of element 'P_value'
      .setProperty("Width",50) // EJsS HtmlView.Simulacion: setting property 'Width' for element 'P_value'
      .setProperty("Tooltip","Valor del parámetro P") // EJsS HtmlView.Simulacion: setting property 'Tooltip' for element 'P_value'
      .setProperty("Editable",true) // EJsS HtmlView.Simulacion: setting property 'Editable' for element 'P_value'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"I_text", _view.PID_Control) // EJsS HtmlView.Simulacion: declaration of element 'I_text'
      .setProperty("Text","I: ") // EJsS HtmlView.Simulacion: setting property 'Text' for element 'I_text'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"I_value", _view.PID_Control) // EJsS HtmlView.Simulacion: declaration of element 'I_value'
      .setProperty("Width",50) // EJsS HtmlView.Simulacion: setting property 'Width' for element 'I_value'
      .setProperty("Tooltip","Valor del parámetro I") // EJsS HtmlView.Simulacion: setting property 'Tooltip' for element 'I_value'
      .setProperty("Editable",true) // EJsS HtmlView.Simulacion: setting property 'Editable' for element 'I_value'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"D_text", _view.PID_Control) // EJsS HtmlView.Simulacion: declaration of element 'D_text'
      .setProperty("Text","D: ") // EJsS HtmlView.Simulacion: setting property 'Text' for element 'D_text'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"D_value", _view.PID_Control) // EJsS HtmlView.Simulacion: declaration of element 'D_value'
      .setProperty("Width",50) // EJsS HtmlView.Simulacion: setting property 'Width' for element 'D_value'
      .setProperty("Tooltip","Valor del parámetro D") // EJsS HtmlView.Simulacion: setting property 'Tooltip' for element 'D_value'
      .setProperty("Editable",true) // EJsS HtmlView.Simulacion: setting property 'Editable' for element 'D_value'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"w_ang", _view.values) // EJsS HtmlView.Simulacion: declaration of element 'w_ang'
      .setProperty("Text","Velocidad angular: ") // EJsS HtmlView.Simulacion: setting property 'Text' for element 'w_ang'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"w_ang_slider", _view.values) // EJsS HtmlView.Simulacion: declaration of element 'w_ang_slider'
      .setProperty("Minimum",0) // EJsS HtmlView.Simulacion: setting property 'Minimum' for element 'w_ang_slider'
      .setProperty("Maximum",100) // EJsS HtmlView.Simulacion: setting property 'Maximum' for element 'w_ang_slider'
      .setProperty("ShowText",true) // EJsS HtmlView.Simulacion: setting property 'ShowText' for element 'w_ang_slider'
      .setProperty("Format","0.0") // EJsS HtmlView.Simulacion: setting property 'Format' for element 'w_ang_slider'
      .setProperty("Disabled",false) // EJsS HtmlView.Simulacion: setting property 'Disabled' for element 'w_ang_slider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"t", _view.values) // EJsS HtmlView.Simulacion: declaration of element 't'
      .setProperty("Editable",false) // EJsS HtmlView.Simulacion: setting property 'Editable' for element 't'
      ;

  };

  return _view;
}



      var _model;
      var _scorm;
      window.addEventListener('load',
        function () { 
          _model =  new rotor("_topFrame","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_6.0/bin/javascript/lib/","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_6.0/workspace/source/");
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
