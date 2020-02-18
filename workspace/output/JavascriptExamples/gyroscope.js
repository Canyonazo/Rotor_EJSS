/* _inputParameters: an object with different values for the model parameters */
function gyroscope(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var pi; // EjsS Model.Variables.Var Table.pi
  var space; // EjsS Model.Variables.Var Table.space
  var maxX; // EjsS Model.Variables.Var Table.maxX
  var minX; // EjsS Model.Variables.Var Table.minX
  var maxY; // EjsS Model.Variables.Var Table.maxY
  var minY; // EjsS Model.Variables.Var Table.minY
  var maxZ; // EjsS Model.Variables.Var Table.maxZ
  var minZ; // EjsS Model.Variables.Var Table.minZ
  var height; // EjsS Model.Variables.Var Table.height
  var bodyDiameter; // EjsS Model.Variables.Var Table.bodyDiameter
  var bodyHeight; // EjsS Model.Variables.Var Table.bodyHeight
  var thetaDegr; // EjsS Model.Variables.Var Table.thetaDegr
  var theta; // EjsS Model.Variables.Var Table.theta
  var sinTheta; // EjsS Model.Variables.Var Table.sinTheta
  var thetaAv; // EjsS Model.Variables.Var Table.thetaAv
  var pointDist; // EjsS Model.Variables.Var Table.pointDist
  var gammaDegr; // EjsS Model.Variables.Var Table.gammaDegr
  var gammaRad; // EjsS Model.Variables.Var Table.gammaRad
  var sinBeta; // EjsS Model.Variables.Var Table.sinBeta
  var cosBeta; // EjsS Model.Variables.Var Table.cosBeta
  var fric; // EjsS Model.Variables.Var Table.fric
  var length; // EjsS Model.Variables.Var Table.length
  var lengthZ; // EjsS Model.Variables.Var Table.lengthZ
  var lengthXY; // EjsS Model.Variables.Var Table.lengthXY
  var angMom; // EjsS Model.Variables.Var Table.angMom
  var angMomZ; // EjsS Model.Variables.Var Table.angMomZ
  var angMomXY; // EjsS Model.Variables.Var Table.angMomXY
  var omegaZeroT; // EjsS Model.Variables.Var Table.omegaZeroT
  var speed0; // EjsS Model.Variables.Var Table.speed0
  var speed; // EjsS Model.Variables.Var Table.speed
  var deltaSpeed; // EjsS Model.Variables.Var Table.deltaSpeed
  var OmegaT; // EjsS Model.Variables.Var Table.OmegaT
  var deltaZeroT; // EjsS Model.Variables.Var Table.deltaZeroT
  var deltaT; // EjsS Model.Variables.Var Table.deltaT
  var deltaTav; // EjsS Model.Variables.Var Table.deltaTav
  var ratioOm; // EjsS Model.Variables.Var Table.ratioOm
  var alphaRad; // EjsS Model.Variables.Var Table.alphaRad
  var deltaAlpha; // EjsS Model.Variables.Var Table.deltaAlpha
  var lengthX; // EjsS Model.Variables.Var Table.lengthX
  var lengthY; // EjsS Model.Variables.Var Table.lengthY
  var centerZ; // EjsS Model.Variables.Var Table.centerZ
  var centerXY; // EjsS Model.Variables.Var Table.centerXY
  var centerX; // EjsS Model.Variables.Var Table.centerX
  var centerY; // EjsS Model.Variables.Var Table.centerY
  var angMomX; // EjsS Model.Variables.Var Table.angMomX
  var angMomY; // EjsS Model.Variables.Var Table.angMomY
  var pointX; // EjsS Model.Variables.Var Table.pointX
  var pointY; // EjsS Model.Variables.Var Table.pointY
  var pointZ; // EjsS Model.Variables.Var Table.pointZ
  var axisX; // EjsS Model.Variables.Var Table.axisX
  var axisY; // EjsS Model.Variables.Var Table.axisY
  var axisZ; // EjsS Model.Variables.Var Table.axisZ
  var gyroAxes; // EjsS Model.Variables.Var Table.gyroAxes

  var delay; // EjsS Model.Variables.Var Table 2.delay
  var zoom; // EjsS Model.Variables.Var Table 2.zoom
  var alpha; // EjsS Model.Variables.Var Table 2.alpha
  var beta; // EjsS Model.Variables.Var Table 2.beta
  var stepEnabled; // EjsS Model.Variables.Var Table 2.stepEnabled
  var showExamples; // EjsS Model.Variables.Var Table 2.showExamples
  var showTrace; // EjsS Model.Variables.Var Table 2.showTrace
  var showTemp; // EjsS Model.Variables.Var Table 2.showTemp
  var redTrace; // EjsS Model.Variables.Var Table 2.redTrace
  var axisTrace; // EjsS Model.Variables.Var Table 2.axisTrace
  var friction; // EjsS Model.Variables.Var Table 2.friction
  var regular; // EjsS Model.Variables.Var Table 2.regular
  var wavy; // EjsS Model.Variables.Var Table 2.wavy
  var loopy; // EjsS Model.Variables.Var Table 2.loopy
  var sign; // EjsS Model.Variables.Var Table 2.sign
  var darkBgrnd; // EjsS Model.Variables.Var Table 2.darkBgrnd
  var colorBack; // EjsS Model.Variables.Var Table 2.colorBack
  var colorBox; // EjsS Model.Variables.Var Table 2.colorBox
  var colorTrace; // EjsS Model.Variables.Var Table 2.colorTrace
  var colorLoop; // EjsS Model.Variables.Var Table 2.colorLoop
  var colorOmega; // EjsS Model.Variables.Var Table 2.colorOmega
  var colorAxis; // EjsS Model.Variables.Var Table 2.colorAxis
  var colorCone; // EjsS Model.Variables.Var Table 2.colorCone
  var colorNet; // EjsS Model.Variables.Var Table 2.colorNet
  var colorArrow; // EjsS Model.Variables.Var Table 2.colorArrow
  var colorArrowFill; // EjsS Model.Variables.Var Table 2.colorArrowFill

  var font; // EjsS Model.Variables.lookang.font
  var npt; // EjsS Model.Variables.lookang.npt
  var xx; // EjsS Model.Variables.lookang.xx
  var yy; // EjsS Model.Variables.lookang.yy
  var zz; // EjsS Model.Variables.lookang.zz
  var x2; // EjsS Model.Variables.lookang.x2
  var y2; // EjsS Model.Variables.lookang.y2
  var z2; // EjsS Model.Variables.lookang.z2
  var cosPhi; // EjsS Model.Variables.lookang.cosPhi
  var sinPhi; // EjsS Model.Variables.lookang.sinPhi
  var x1; // EjsS Model.Variables.lookang.x1
  var y1; // EjsS Model.Variables.lookang.y1
  var z1; // EjsS Model.Variables.lookang.z1
  var omega0; // EjsS Model.Variables.lookang.omega0
  var cos3; // EjsS Model.Variables.lookang.cos3
  var sin3; // EjsS Model.Variables.lookang.sin3
  var Phi; // EjsS Model.Variables.lookang.Phi

  _model.getOdes = function() { return []; };

  _model.removeEvents = function(){
  };

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      pi : pi,
      space : space,
      maxX : maxX,
      minX : minX,
      maxY : maxY,
      minY : minY,
      maxZ : maxZ,
      minZ : minZ,
      height : height,
      bodyDiameter : bodyDiameter,
      bodyHeight : bodyHeight,
      thetaDegr : thetaDegr,
      theta : theta,
      sinTheta : sinTheta,
      thetaAv : thetaAv,
      pointDist : pointDist,
      gammaDegr : gammaDegr,
      gammaRad : gammaRad,
      sinBeta : sinBeta,
      cosBeta : cosBeta,
      fric : fric,
      length : length,
      lengthZ : lengthZ,
      lengthXY : lengthXY,
      angMom : angMom,
      angMomZ : angMomZ,
      angMomXY : angMomXY,
      omegaZeroT : omegaZeroT,
      speed0 : speed0,
      speed : speed,
      deltaSpeed : deltaSpeed,
      OmegaT : OmegaT,
      deltaZeroT : deltaZeroT,
      deltaT : deltaT,
      deltaTav : deltaTav,
      ratioOm : ratioOm,
      alphaRad : alphaRad,
      deltaAlpha : deltaAlpha,
      lengthX : lengthX,
      lengthY : lengthY,
      centerZ : centerZ,
      centerXY : centerXY,
      centerX : centerX,
      centerY : centerY,
      angMomX : angMomX,
      angMomY : angMomY,
      pointX : pointX,
      pointY : pointY,
      pointZ : pointZ,
      axisX : axisX,
      axisY : axisY,
      axisZ : axisZ,
      gyroAxes : gyroAxes,
      delay : delay,
      zoom : zoom,
      alpha : alpha,
      beta : beta,
      stepEnabled : stepEnabled,
      showExamples : showExamples,
      showTrace : showTrace,
      showTemp : showTemp,
      redTrace : redTrace,
      axisTrace : axisTrace,
      friction : friction,
      regular : regular,
      wavy : wavy,
      loopy : loopy,
      sign : sign,
      darkBgrnd : darkBgrnd,
      colorBack : colorBack,
      colorBox : colorBox,
      colorTrace : colorTrace,
      colorLoop : colorLoop,
      colorOmega : colorOmega,
      colorAxis : colorAxis,
      colorCone : colorCone,
      colorNet : colorNet,
      colorArrow : colorArrow,
      colorArrowFill : colorArrowFill,
      font : font,
      npt : npt,
      xx : xx,
      yy : yy,
      zz : zz,
      x2 : x2,
      y2 : y2,
      z2 : z2,
      cosPhi : cosPhi,
      sinPhi : sinPhi,
      x1 : x1,
      y1 : y1,
      z1 : z1,
      omega0 : omega0,
      cos3 : cos3,
      sin3 : sin3,
      Phi : Phi
    };
  };

  function _serializePublic() { return _model.serializePublic(); }

  _model._userSerializePublic = function() {
    return {
      pi : pi,
      space : space,
      maxX : maxX,
      minX : minX,
      maxY : maxY,
      minY : minY,
      maxZ : maxZ,
      minZ : minZ,
      height : height,
      bodyDiameter : bodyDiameter,
      bodyHeight : bodyHeight,
      thetaDegr : thetaDegr,
      theta : theta,
      sinTheta : sinTheta,
      thetaAv : thetaAv,
      pointDist : pointDist,
      gammaDegr : gammaDegr,
      gammaRad : gammaRad,
      sinBeta : sinBeta,
      cosBeta : cosBeta,
      fric : fric,
      length : length,
      lengthZ : lengthZ,
      lengthXY : lengthXY,
      angMom : angMom,
      angMomZ : angMomZ,
      angMomXY : angMomXY,
      omegaZeroT : omegaZeroT,
      speed0 : speed0,
      speed : speed,
      deltaSpeed : deltaSpeed,
      OmegaT : OmegaT,
      deltaZeroT : deltaZeroT,
      deltaT : deltaT,
      deltaTav : deltaTav,
      ratioOm : ratioOm,
      alphaRad : alphaRad,
      deltaAlpha : deltaAlpha,
      lengthX : lengthX,
      lengthY : lengthY,
      centerZ : centerZ,
      centerXY : centerXY,
      centerX : centerX,
      centerY : centerY,
      angMomX : angMomX,
      angMomY : angMomY,
      pointX : pointX,
      pointY : pointY,
      pointZ : pointZ,
      axisX : axisX,
      axisY : axisY,
      axisZ : axisZ,
      gyroAxes : gyroAxes,
      delay : delay,
      zoom : zoom,
      alpha : alpha,
      beta : beta,
      stepEnabled : stepEnabled,
      showExamples : showExamples,
      showTrace : showTrace,
      showTemp : showTemp,
      redTrace : redTrace,
      axisTrace : axisTrace,
      friction : friction,
      regular : regular,
      wavy : wavy,
      loopy : loopy,
      sign : sign,
      darkBgrnd : darkBgrnd,
      colorBack : colorBack,
      colorBox : colorBox,
      colorTrace : colorTrace,
      colorLoop : colorLoop,
      colorOmega : colorOmega,
      colorAxis : colorAxis,
      colorCone : colorCone,
      colorNet : colorNet,
      colorArrow : colorArrow,
      colorArrowFill : colorArrowFill,
      font : font,
      npt : npt,
      xx : xx,
      yy : yy,
      zz : zz,
      x2 : x2,
      y2 : y2,
      z2 : z2,
      cosPhi : cosPhi,
      sinPhi : sinPhi,
      x1 : x1,
      y1 : y1,
      z1 : z1,
      omega0 : omega0,
      cos3 : cos3,
      sin3 : sin3,
      Phi : Phi
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.space != "undefined") space = json.space;
    if(typeof json.maxX != "undefined") maxX = json.maxX;
    if(typeof json.minX != "undefined") minX = json.minX;
    if(typeof json.maxY != "undefined") maxY = json.maxY;
    if(typeof json.minY != "undefined") minY = json.minY;
    if(typeof json.maxZ != "undefined") maxZ = json.maxZ;
    if(typeof json.minZ != "undefined") minZ = json.minZ;
    if(typeof json.height != "undefined") height = json.height;
    if(typeof json.bodyDiameter != "undefined") bodyDiameter = json.bodyDiameter;
    if(typeof json.bodyHeight != "undefined") bodyHeight = json.bodyHeight;
    if(typeof json.thetaDegr != "undefined") thetaDegr = json.thetaDegr;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.sinTheta != "undefined") sinTheta = json.sinTheta;
    if(typeof json.thetaAv != "undefined") thetaAv = json.thetaAv;
    if(typeof json.pointDist != "undefined") pointDist = json.pointDist;
    if(typeof json.gammaDegr != "undefined") gammaDegr = json.gammaDegr;
    if(typeof json.gammaRad != "undefined") gammaRad = json.gammaRad;
    if(typeof json.sinBeta != "undefined") sinBeta = json.sinBeta;
    if(typeof json.cosBeta != "undefined") cosBeta = json.cosBeta;
    if(typeof json.fric != "undefined") fric = json.fric;
    if(typeof json.length != "undefined") length = json.length;
    if(typeof json.lengthZ != "undefined") lengthZ = json.lengthZ;
    if(typeof json.lengthXY != "undefined") lengthXY = json.lengthXY;
    if(typeof json.angMom != "undefined") angMom = json.angMom;
    if(typeof json.angMomZ != "undefined") angMomZ = json.angMomZ;
    if(typeof json.angMomXY != "undefined") angMomXY = json.angMomXY;
    if(typeof json.omegaZeroT != "undefined") omegaZeroT = json.omegaZeroT;
    if(typeof json.speed0 != "undefined") speed0 = json.speed0;
    if(typeof json.speed != "undefined") speed = json.speed;
    if(typeof json.deltaSpeed != "undefined") deltaSpeed = json.deltaSpeed;
    if(typeof json.OmegaT != "undefined") OmegaT = json.OmegaT;
    if(typeof json.deltaZeroT != "undefined") deltaZeroT = json.deltaZeroT;
    if(typeof json.deltaT != "undefined") deltaT = json.deltaT;
    if(typeof json.deltaTav != "undefined") deltaTav = json.deltaTav;
    if(typeof json.ratioOm != "undefined") ratioOm = json.ratioOm;
    if(typeof json.alphaRad != "undefined") alphaRad = json.alphaRad;
    if(typeof json.deltaAlpha != "undefined") deltaAlpha = json.deltaAlpha;
    if(typeof json.lengthX != "undefined") lengthX = json.lengthX;
    if(typeof json.lengthY != "undefined") lengthY = json.lengthY;
    if(typeof json.centerZ != "undefined") centerZ = json.centerZ;
    if(typeof json.centerXY != "undefined") centerXY = json.centerXY;
    if(typeof json.centerX != "undefined") centerX = json.centerX;
    if(typeof json.centerY != "undefined") centerY = json.centerY;
    if(typeof json.angMomX != "undefined") angMomX = json.angMomX;
    if(typeof json.angMomY != "undefined") angMomY = json.angMomY;
    if(typeof json.pointX != "undefined") pointX = json.pointX;
    if(typeof json.pointY != "undefined") pointY = json.pointY;
    if(typeof json.pointZ != "undefined") pointZ = json.pointZ;
    if(typeof json.axisX != "undefined") axisX = json.axisX;
    if(typeof json.axisY != "undefined") axisY = json.axisY;
    if(typeof json.axisZ != "undefined") axisZ = json.axisZ;
    if(typeof json.gyroAxes != "undefined") gyroAxes = json.gyroAxes;
    if(typeof json.delay != "undefined") delay = json.delay;
    if(typeof json.zoom != "undefined") zoom = json.zoom;
    if(typeof json.alpha != "undefined") alpha = json.alpha;
    if(typeof json.beta != "undefined") beta = json.beta;
    if(typeof json.stepEnabled != "undefined") stepEnabled = json.stepEnabled;
    if(typeof json.showExamples != "undefined") showExamples = json.showExamples;
    if(typeof json.showTrace != "undefined") showTrace = json.showTrace;
    if(typeof json.showTemp != "undefined") showTemp = json.showTemp;
    if(typeof json.redTrace != "undefined") redTrace = json.redTrace;
    if(typeof json.axisTrace != "undefined") axisTrace = json.axisTrace;
    if(typeof json.friction != "undefined") friction = json.friction;
    if(typeof json.regular != "undefined") regular = json.regular;
    if(typeof json.wavy != "undefined") wavy = json.wavy;
    if(typeof json.loopy != "undefined") loopy = json.loopy;
    if(typeof json.sign != "undefined") sign = json.sign;
    if(typeof json.darkBgrnd != "undefined") darkBgrnd = json.darkBgrnd;
    if(typeof json.colorBack != "undefined") colorBack = json.colorBack;
    if(typeof json.colorBox != "undefined") colorBox = json.colorBox;
    if(typeof json.colorTrace != "undefined") colorTrace = json.colorTrace;
    if(typeof json.colorLoop != "undefined") colorLoop = json.colorLoop;
    if(typeof json.colorOmega != "undefined") colorOmega = json.colorOmega;
    if(typeof json.colorAxis != "undefined") colorAxis = json.colorAxis;
    if(typeof json.colorCone != "undefined") colorCone = json.colorCone;
    if(typeof json.colorNet != "undefined") colorNet = json.colorNet;
    if(typeof json.colorArrow != "undefined") colorArrow = json.colorArrow;
    if(typeof json.colorArrowFill != "undefined") colorArrowFill = json.colorArrowFill;
    if(typeof json.font != "undefined") font = json.font;
    if(typeof json.npt != "undefined") npt = json.npt;
    if(typeof json.xx != "undefined") xx = json.xx;
    if(typeof json.yy != "undefined") yy = json.yy;
    if(typeof json.zz != "undefined") zz = json.zz;
    if(typeof json.x2 != "undefined") x2 = json.x2;
    if(typeof json.y2 != "undefined") y2 = json.y2;
    if(typeof json.z2 != "undefined") z2 = json.z2;
    if(typeof json.cosPhi != "undefined") cosPhi = json.cosPhi;
    if(typeof json.sinPhi != "undefined") sinPhi = json.sinPhi;
    if(typeof json.x1 != "undefined") x1 = json.x1;
    if(typeof json.y1 != "undefined") y1 = json.y1;
    if(typeof json.z1 != "undefined") z1 = json.z1;
    if(typeof json.omega0 != "undefined") omega0 = json.omega0;
    if(typeof json.cos3 != "undefined") cos3 = json.cos3;
    if(typeof json.sin3 != "undefined") sin3 = json.sin3;
    if(typeof json.Phi != "undefined") Phi = json.Phi;
  };

  _model._readParametersPublic = function(json) {
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.space != "undefined") space = json.space;
    if(typeof json.maxX != "undefined") maxX = json.maxX;
    if(typeof json.minX != "undefined") minX = json.minX;
    if(typeof json.maxY != "undefined") maxY = json.maxY;
    if(typeof json.minY != "undefined") minY = json.minY;
    if(typeof json.maxZ != "undefined") maxZ = json.maxZ;
    if(typeof json.minZ != "undefined") minZ = json.minZ;
    if(typeof json.height != "undefined") height = json.height;
    if(typeof json.bodyDiameter != "undefined") bodyDiameter = json.bodyDiameter;
    if(typeof json.bodyHeight != "undefined") bodyHeight = json.bodyHeight;
    if(typeof json.thetaDegr != "undefined") thetaDegr = json.thetaDegr;
    if(typeof json.theta != "undefined") theta = json.theta;
    if(typeof json.sinTheta != "undefined") sinTheta = json.sinTheta;
    if(typeof json.thetaAv != "undefined") thetaAv = json.thetaAv;
    if(typeof json.pointDist != "undefined") pointDist = json.pointDist;
    if(typeof json.gammaDegr != "undefined") gammaDegr = json.gammaDegr;
    if(typeof json.gammaRad != "undefined") gammaRad = json.gammaRad;
    if(typeof json.sinBeta != "undefined") sinBeta = json.sinBeta;
    if(typeof json.cosBeta != "undefined") cosBeta = json.cosBeta;
    if(typeof json.fric != "undefined") fric = json.fric;
    if(typeof json.length != "undefined") length = json.length;
    if(typeof json.lengthZ != "undefined") lengthZ = json.lengthZ;
    if(typeof json.lengthXY != "undefined") lengthXY = json.lengthXY;
    if(typeof json.angMom != "undefined") angMom = json.angMom;
    if(typeof json.angMomZ != "undefined") angMomZ = json.angMomZ;
    if(typeof json.angMomXY != "undefined") angMomXY = json.angMomXY;
    if(typeof json.omegaZeroT != "undefined") omegaZeroT = json.omegaZeroT;
    if(typeof json.speed0 != "undefined") speed0 = json.speed0;
    if(typeof json.speed != "undefined") speed = json.speed;
    if(typeof json.deltaSpeed != "undefined") deltaSpeed = json.deltaSpeed;
    if(typeof json.OmegaT != "undefined") OmegaT = json.OmegaT;
    if(typeof json.deltaZeroT != "undefined") deltaZeroT = json.deltaZeroT;
    if(typeof json.deltaT != "undefined") deltaT = json.deltaT;
    if(typeof json.deltaTav != "undefined") deltaTav = json.deltaTav;
    if(typeof json.ratioOm != "undefined") ratioOm = json.ratioOm;
    if(typeof json.alphaRad != "undefined") alphaRad = json.alphaRad;
    if(typeof json.deltaAlpha != "undefined") deltaAlpha = json.deltaAlpha;
    if(typeof json.lengthX != "undefined") lengthX = json.lengthX;
    if(typeof json.lengthY != "undefined") lengthY = json.lengthY;
    if(typeof json.centerZ != "undefined") centerZ = json.centerZ;
    if(typeof json.centerXY != "undefined") centerXY = json.centerXY;
    if(typeof json.centerX != "undefined") centerX = json.centerX;
    if(typeof json.centerY != "undefined") centerY = json.centerY;
    if(typeof json.angMomX != "undefined") angMomX = json.angMomX;
    if(typeof json.angMomY != "undefined") angMomY = json.angMomY;
    if(typeof json.pointX != "undefined") pointX = json.pointX;
    if(typeof json.pointY != "undefined") pointY = json.pointY;
    if(typeof json.pointZ != "undefined") pointZ = json.pointZ;
    if(typeof json.axisX != "undefined") axisX = json.axisX;
    if(typeof json.axisY != "undefined") axisY = json.axisY;
    if(typeof json.axisZ != "undefined") axisZ = json.axisZ;
    if(typeof json.gyroAxes != "undefined") gyroAxes = json.gyroAxes;
    if(typeof json.delay != "undefined") delay = json.delay;
    if(typeof json.zoom != "undefined") zoom = json.zoom;
    if(typeof json.alpha != "undefined") alpha = json.alpha;
    if(typeof json.beta != "undefined") beta = json.beta;
    if(typeof json.stepEnabled != "undefined") stepEnabled = json.stepEnabled;
    if(typeof json.showExamples != "undefined") showExamples = json.showExamples;
    if(typeof json.showTrace != "undefined") showTrace = json.showTrace;
    if(typeof json.showTemp != "undefined") showTemp = json.showTemp;
    if(typeof json.redTrace != "undefined") redTrace = json.redTrace;
    if(typeof json.axisTrace != "undefined") axisTrace = json.axisTrace;
    if(typeof json.friction != "undefined") friction = json.friction;
    if(typeof json.regular != "undefined") regular = json.regular;
    if(typeof json.wavy != "undefined") wavy = json.wavy;
    if(typeof json.loopy != "undefined") loopy = json.loopy;
    if(typeof json.sign != "undefined") sign = json.sign;
    if(typeof json.darkBgrnd != "undefined") darkBgrnd = json.darkBgrnd;
    if(typeof json.colorBack != "undefined") colorBack = json.colorBack;
    if(typeof json.colorBox != "undefined") colorBox = json.colorBox;
    if(typeof json.colorTrace != "undefined") colorTrace = json.colorTrace;
    if(typeof json.colorLoop != "undefined") colorLoop = json.colorLoop;
    if(typeof json.colorOmega != "undefined") colorOmega = json.colorOmega;
    if(typeof json.colorAxis != "undefined") colorAxis = json.colorAxis;
    if(typeof json.colorCone != "undefined") colorCone = json.colorCone;
    if(typeof json.colorNet != "undefined") colorNet = json.colorNet;
    if(typeof json.colorArrow != "undefined") colorArrow = json.colorArrow;
    if(typeof json.colorArrowFill != "undefined") colorArrowFill = json.colorArrowFill;
    if(typeof json.font != "undefined") font = json.font;
    if(typeof json.npt != "undefined") npt = json.npt;
    if(typeof json.xx != "undefined") xx = json.xx;
    if(typeof json.yy != "undefined") yy = json.yy;
    if(typeof json.zz != "undefined") zz = json.zz;
    if(typeof json.x2 != "undefined") x2 = json.x2;
    if(typeof json.y2 != "undefined") y2 = json.y2;
    if(typeof json.z2 != "undefined") z2 = json.z2;
    if(typeof json.cosPhi != "undefined") cosPhi = json.cosPhi;
    if(typeof json.sinPhi != "undefined") sinPhi = json.sinPhi;
    if(typeof json.x1 != "undefined") x1 = json.x1;
    if(typeof json.y1 != "undefined") y1 = json.y1;
    if(typeof json.z1 != "undefined") z1 = json.z1;
    if(typeof json.omega0 != "undefined") omega0 = json.omega0;
    if(typeof json.cos3 != "undefined") cos3 = json.cos3;
    if(typeof json.sin3 != "undefined") sin3 = json.sin3;
    if(typeof json.Phi != "undefined") Phi = json.Phi;
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
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["undefined"] = true;
    __pagesEnabled["Evol Page"] = true;
    __pagesEnabled["FixRel Page"] = true;
  });

  _model.addToReset(function() {
    pi = Math.PI; // EjsS Model.Variables.Var Table.pi
    space = 1.3; // EjsS Model.Variables.Var Table.space
    maxX = space; // EjsS Model.Variables.Var Table.maxX
    minX = -space; // EjsS Model.Variables.Var Table.minX
    maxY = space; // EjsS Model.Variables.Var Table.maxY
    minY = -space; // EjsS Model.Variables.Var Table.minY
    maxZ = 2*space; // EjsS Model.Variables.Var Table.maxZ
    minZ = 0; // EjsS Model.Variables.Var Table.minZ
    height = 1.0; // EjsS Model.Variables.Var Table.height
    bodyDiameter = 1; // EjsS Model.Variables.Var Table.bodyDiameter
    bodyHeight = 0.4; // EjsS Model.Variables.Var Table.bodyHeight
    thetaDegr = 45; // EjsS Model.Variables.Var Table.thetaDegr
    theta = thetaDegr*pi/180; // EjsS Model.Variables.Var Table.theta
    pointDist = 1; // EjsS Model.Variables.Var Table.pointDist
    gammaDegr = 15; // EjsS Model.Variables.Var Table.gammaDegr
    gammaRad = gammaDegr*pi/180; // EjsS Model.Variables.Var Table.gammaRad
    fric = 0.5; // EjsS Model.Variables.Var Table.fric
    length = 2.0; // EjsS Model.Variables.Var Table.length
    lengthZ = length*Math.cos(theta); // EjsS Model.Variables.Var Table.lengthZ
    lengthXY = length*Math.sin(theta); // EjsS Model.Variables.Var Table.lengthXY
    angMom = length; // EjsS Model.Variables.Var Table.angMom
    angMomZ = angMom*Math.cos(theta); // EjsS Model.Variables.Var Table.angMomZ
    angMomXY = angMom*Math.sin(theta); // EjsS Model.Variables.Var Table.angMomXY
    omegaZeroT = 0; // EjsS Model.Variables.Var Table.omegaZeroT
    speed0 = 8; // EjsS Model.Variables.Var Table.speed0
    speed = speed0; // EjsS Model.Variables.Var Table.speed
    deltaSpeed = -0.0001; // EjsS Model.Variables.Var Table.deltaSpeed
    OmegaT = 0; // EjsS Model.Variables.Var Table.OmegaT
    deltaAlpha = -0.001; // EjsS Model.Variables.Var Table.deltaAlpha
    lengthX = 0.0; // EjsS Model.Variables.Var Table.lengthX
    lengthY = -lengthXY; // EjsS Model.Variables.Var Table.lengthY
    centerZ = height*Math.cos(theta); // EjsS Model.Variables.Var Table.centerZ
    centerXY = height*Math.sin(theta); // EjsS Model.Variables.Var Table.centerXY
    centerX = 0; // EjsS Model.Variables.Var Table.centerX
    centerY = -centerXY; // EjsS Model.Variables.Var Table.centerY
    angMomX = 0.0; // EjsS Model.Variables.Var Table.angMomX
    angMomY = -angMomXY; // EjsS Model.Variables.Var Table.angMomY
    pointX = 0.0; // EjsS Model.Variables.Var Table.pointX
    pointY = 0.0; // EjsS Model.Variables.Var Table.pointY
    pointZ = 0.0; // EjsS Model.Variables.Var Table.pointZ
    axisX = 0.0; // EjsS Model.Variables.Var Table.axisX
    axisY = 0.0; // EjsS Model.Variables.Var Table.axisY
    axisZ = 0.0; // EjsS Model.Variables.Var Table.axisZ
    gyroAxes = new Array(9); // EjsS Model.Variables.Var Table.gyroAxes
    (function () {
      var _i0;
      for (_i0=0; _i0<9; _i0+=1) {  // EjsS Model.Variables.Var Table.gyroAxes
        gyroAxes[_i0] = 0.0;  // EjsS Model.Variables.Var Table.gyroAxes
      }
    }());
  });

  _model.addToReset(function() {
    delay = 15; // EjsS Model.Variables.Var Table 2.delay
    zoom = 1; // EjsS Model.Variables.Var Table 2.zoom
    alpha = 0.4; // EjsS Model.Variables.Var Table 2.alpha
    beta = 0.54; // EjsS Model.Variables.Var Table 2.beta
    stepEnabled = true; // EjsS Model.Variables.Var Table 2.stepEnabled
    showExamples = false; // EjsS Model.Variables.Var Table 2.showExamples
    showTemp = false; // EjsS Model.Variables.Var Table 2.showTemp
    friction = true; // EjsS Model.Variables.Var Table 2.friction
    regular = false; // EjsS Model.Variables.Var Table 2.regular
    wavy = false; // EjsS Model.Variables.Var Table 2.wavy
    loopy = false; // EjsS Model.Variables.Var Table 2.loopy
    sign = 1; // EjsS Model.Variables.Var Table 2.sign
    darkBgrnd = true; // EjsS Model.Variables.Var Table 2.darkBgrnd
    colorBack = "rgb(0,0,0)"; // EjsS Model.Variables.Var Table 2.colorBack
    colorBox = "rgb(255,255,255)"; // EjsS Model.Variables.Var Table 2.colorBox
    colorTrace = "rgb(255,0,255)"; // EjsS Model.Variables.Var Table 2.colorTrace
    colorLoop = "rgb(255,255,0)"; // EjsS Model.Variables.Var Table 2.colorLoop
    colorOmega = "rgb(255,255,0)"; // EjsS Model.Variables.Var Table 2.colorOmega
    colorAxis = "rgb(255,0,0)"; // EjsS Model.Variables.Var Table 2.colorAxis
    colorCone = "rgb(128,128,128)"; // EjsS Model.Variables.Var Table 2.colorCone
    colorNet = "rgb(64,64,64)"; // EjsS Model.Variables.Var Table 2.colorNet
    colorArrow = "rgb(0,255,255)"; // EjsS Model.Variables.Var Table 2.colorArrow
    colorArrowFill = "rgb(255,255,255)"; // EjsS Model.Variables.Var Table 2.colorArrowFill
  });

  _model.addToReset(function() {
    font = "normal normal 2vw "; // EjsS Model.Variables.lookang.font
    npt = 500; // EjsS Model.Variables.lookang.npt
    xx = 0; // EjsS Model.Variables.lookang.xx
    yy = 0; // EjsS Model.Variables.lookang.yy
    zz = 0; // EjsS Model.Variables.lookang.zz
    x2 = 0; // EjsS Model.Variables.lookang.x2
    y2 = 0; // EjsS Model.Variables.lookang.y2
    z2 = 0; // EjsS Model.Variables.lookang.z2
    cosPhi = 0; // EjsS Model.Variables.lookang.cosPhi
    sinPhi = 0; // EjsS Model.Variables.lookang.sinPhi
    x1 = 0; // EjsS Model.Variables.lookang.x1
    y1 = 0; // EjsS Model.Variables.lookang.y1
    z1 = 0; // EjsS Model.Variables.lookang.z1
    omega0 = 0; // EjsS Model.Variables.lookang.omega0
    cos3 = 0; // EjsS Model.Variables.lookang.cos3
    sin3 = 0; // EjsS Model.Variables.lookang.sin3
    Phi = 0; // EjsS Model.Variables.lookang.Phi
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  function actionColors () {  // > CustomCode.actionColors:1
  if (darkBgrnd) {  // > CustomCode.actionColors:2
      colorBack = "rgb(0,0,0)";  // > CustomCode.actionColors:3
      colorBox = "rgb(255,255,255)";  // > CustomCode.actionColors:4
      colorTrace = "rgb(255,0,255)"; //java.awt.Color.magenta;  // > CustomCode.actionColors:5
      colorLoop = "rgb(255,255,0)"; // java.awt.Color.yellow;  // > CustomCode.actionColors:6
      colorOmega = "rgb(255,255,0)"; // java.awt.Color.yellow;  // > CustomCode.actionColors:7
      colorAxis = "rgb(255,0,0)"; // java.awt.Color.red;  // > CustomCode.actionColors:8
      colorCone = "rgb(128,128,128)"; // java.awt.Color.gray;  // > CustomCode.actionColors:9
      colorNet = "rgb(64,64,64)"; // java.awt.Color.lightGray;  // > CustomCode.actionColors:10
      colorArrow = "rgb(0,255,255)"; // java.awt.Color.cyan;  // > CustomCode.actionColors:11
      colorArrowFill = "rgb(255,255,255)"; // java.awt.Color.white;  // > CustomCode.actionColors:12
  }  // > CustomCode.actionColors:13
  else {  // > CustomCode.actionColors:14
      colorBack = "rgb(255,255,255)"; // java.awt.Color.white;  // > CustomCode.actionColors:15
      colorBox = "rgb(0,0,0)"; // java.awt.Color.black;  // > CustomCode.actionColors:16
      colorTrace = "rgb(255,0,255)"; //java.awt.Color.magenta;  // > CustomCode.actionColors:17
      colorLoop = "rgb(0,0,255)"; // java.awt.Color.blue;  // > CustomCode.actionColors:18
      colorOmega = "rgb(255,0,0)"; // java.awt.Color.red;  // > CustomCode.actionColors:19
      colorAxis = "rgb(0,0,255)"; // java.awt.Color.blue;  // > CustomCode.actionColors:20
      colorCone = "rgb(64,64,64)"; // java.awt.Color.lightGray;  // > CustomCode.actionColors:21
      colorNet = "rgb(128,128,128)"; // java.awt.Color.gray;  // > CustomCode.actionColors:22
      colorArrow = "rgb(0,0,0)"; // java.awt.Color.black;  // > CustomCode.actionColors:23
      colorArrowFill = "rgb(0,0,0)"; // java.awt.Color.yellow;  // > CustomCode.actionColors:24
  }  // > CustomCode.actionColors:25
  }  // > CustomCode.actionColors:26

  function calcAxes () {  // > CustomCode.calcAxes:1
  /*  // > CustomCode.calcAxes:2
  If initially the gyroscope is supported (say, we are holding the other end of its axis by hand)  // > CustomCode.calcAxes:3
  and at t = 0 is released, the total angular momentum at t = 0 is directed along its axis.   // > CustomCode.calcAxes:4
  However, the approximate theory tells us, that the axis should precess under the torque  // > CustomCode.calcAxes:5
  of the force of gravity. This means that the angular momentum will have a component   // > CustomCode.calcAxes:6
  directed vertically along the axis of precession. We can represent the total angular momentum  // > CustomCode.calcAxes:7
  as the vector sum of this vertical component and the other component which deviates thru alpha   // > CustomCode.calcAxes:8
  from the gyro axis downward. If we imagine for a while that the gravity vanished, the gyro would   // > CustomCode.calcAxes:9
  perform free (inertial) rotation about this second component of the angular momentum, which  // > CustomCode.calcAxes:10
  remains constant in the absence of friction. This rotation of the gyro is just a free precession  // > CustomCode.calcAxes:11
  in which the gyro axis moves along the cone whose angle is just the deviation of the second   // > CustomCode.calcAxes:12
  component of the angular momentum from the gyro axis. This motion of the gyro axis is  called   // > CustomCode.calcAxes:13
  nutation, and in the presence of gravity is superimposed on the forced precession of the axis.   // > CustomCode.calcAxes:14
  Hence, for the initial conditions described above, the motion of the gyro axis can be represented   // > CustomCode.calcAxes:15
  by rolling (without sliding) of a cone of nutation over the cone with angle equal to initial angle   // > CustomCode.calcAxes:16
  theta between the axis and the vertical. The axis of the rolling cone makes an angle   // > CustomCode.calcAxes:17
  theta + alpha = thetaAv with the vertical line.  // > CustomCode.calcAxes:18
  */  // > CustomCode.calcAxes:19
  var cosTh = Math.cos(theta), sinTh =  Math.sin(theta);  // > CustomCode.calcAxes:20
  var  cosThAv = Math.cos(thetaAv), sinThAv =  Math.sin(thetaAv);  // > CustomCode.calcAxes:21
  var  cos1 = Math.cos(OmegaT), sin1 = Math.sin(OmegaT);  // > CustomCode.calcAxes:22
  var  cos2 = Math.cos(omegaZeroT), sin2 = Math.sin(omegaZeroT);  // > CustomCode.calcAxes:23
  //here omegaZeroT is the angle of nutation!  // > CustomCode.calcAxes:24
  //precession of the angular momentum second component (deviated from the axis):  // > CustomCode.calcAxes:25
  angMomZ = angMom*cosThAv;  // > CustomCode.calcAxes:26
  angMomXY = angMom*sinThAv;  // > CustomCode.calcAxes:27
  angMomX = angMomXY*sin1;  // > CustomCode.calcAxes:28
  angMomY = -angMomXY*cos1;  // > CustomCode.calcAxes:29
  //we take a unit vector which makes angle alphaRad with axis of nutation:   // > CustomCode.calcAxes:30
  //(this unit vector shows initial direction of the body axis)  // > CustomCode.calcAxes:31
    x2 = -Math.sin(alphaRad);  // > CustomCode.calcAxes:32
    z2 = Math.cos(alphaRad);   // > CustomCode.calcAxes:33
  //in the course of time this vector (showing the body axis) rotates and its current projections are:  // > CustomCode.calcAxes:34
    xx = (cos1*sin2 + sin1*cos2*cosThAv)*x2 + sin1*sinThAv*z2;  // > CustomCode.calcAxes:35
    yy = (sin1*sin2 - cos1*cos2*cosThAv )*x2 - cos1*sinThAv*z2;  // > CustomCode.calcAxes:36
    zz = -cos2*sinThAv*x2 + cosThAv*z2;  // > CustomCode.calcAxes:37
  //current direction of this unit vector (in the lab frame) is given by angles Theta and Phi:  // > CustomCode.calcAxes:38
  var  cosTheta = zz;  // > CustomCode.calcAxes:39
  sinTheta = Math.sin(Math.acos(cosTheta)); //sine of instantaneous theta angle  // > CustomCode.calcAxes:40
    cosPhi, sinPhi;  // > CustomCode.calcAxes:41
  if (sinTheta != 0) {  // > CustomCode.calcAxes:42
      cosPhi = -yy/sinTheta;  // > CustomCode.calcAxes:43
      sinPhi =  xx/sinTheta;  // > CustomCode.calcAxes:44
  }  // > CustomCode.calcAxes:45
  else {  // > CustomCode.calcAxes:46
      cosPhi = cos1;  // > CustomCode.calcAxes:47
      sinPhi = sin1;  // > CustomCode.calcAxes:48
  }  // > CustomCode.calcAxes:49
  Phi = Math.atan2(sinPhi,cosPhi); //lookang trying to get Phi  // > CustomCode.calcAxes:50
  //current axes of the gyro body:  // > CustomCode.calcAxes:51
  gyroAxes[0] = cosPhi*sin2 + sinPhi*cos2*cosTheta;  // > CustomCode.calcAxes:52
  gyroAxes[1] = sinPhi*sin2 - cosPhi*cos2*cosTheta;  // > CustomCode.calcAxes:53
  gyroAxes[2] = -cos2*sinTheta;  // > CustomCode.calcAxes:54
  gyroAxes[3] = cosPhi*cos2 - sinPhi*sin2*cosTheta;  // > CustomCode.calcAxes:55
  gyroAxes[4] = sinPhi*cos2 + cosPhi*sin2*cosTheta;  // > CustomCode.calcAxes:56
  gyroAxes[5] = sin2*sinTheta;  // > CustomCode.calcAxes:57
  gyroAxes[6] = sinPhi*sinTheta;  // > CustomCode.calcAxes:58
  gyroAxes[7] = -cosPhi*sinTheta;  // > CustomCode.calcAxes:59
  gyroAxes[8] = cosTheta;   // > CustomCode.calcAxes:60
  //current position of axis end and center of the body  // > CustomCode.calcAxes:61
  centerX = height*xx;  // > CustomCode.calcAxes:62
  centerY = height*yy;  // > CustomCode.calcAxes:63
  centerZ = height*zz;  // > CustomCode.calcAxes:64
  lengthX = length*xx;  // > CustomCode.calcAxes:65
  lengthY = length*yy;  // > CustomCode.calcAxes:66
  lengthZ = length*zz;  // > CustomCode.calcAxes:67
  //tracing point position relative to the body:  // > CustomCode.calcAxes:68
   x1 = -pointDist*Math.sin(gammaRad);  // > CustomCode.calcAxes:69
   z1 = pointDist*Math.cos(gammaRad);   // > CustomCode.calcAxes:70
  //axial rotation is height*height times faster than nutation:   // > CustomCode.calcAxes:71
    omega0 = 2.4113*height*height*omegaZeroT;  // > CustomCode.calcAxes:72
    cos3 = Math.cos(omega0), sin3 = Math.sin(omega0);  // > CustomCode.calcAxes:73
  pointX = centerX + (cosPhi*sin3 + sinPhi*cos3*cosTheta)*x1 + sinPhi*sinTheta*z1;  // > CustomCode.calcAxes:74
  pointY = centerY + (sinPhi*sin3 - cosPhi*cos3*cosTheta)*x1 - cosPhi*sinTheta*z1;  // > CustomCode.calcAxes:75
  pointZ = centerZ  - cos3*sinTheta*x1 + cosTheta*z1;  // > CustomCode.calcAxes:76
  }  // > CustomCode.calcAxes:77

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    _setDelay(delay); // what is this?  // > Initialization.Init Page:1
    omegaZeroT = 0;  // > Initialization.Init Page:2
    OmegaT = 0;  // > Initialization.Init Page:3
    deltaTav = pi/30/speed*height; //average precession speed is proportional to the disc distance  // > Initialization.Init Page:4
    deltaZeroT = speed*3/180/height/height; //nutation speed is inersely prop to distance squared  // > Initialization.Init Page:5
    ratioOm = deltaTav/deltaZeroT;  // > Initialization.Init Page:6
    theta = thetaDegr*pi/180;  // > Initialization.Init Page:7
    if (regular == true) alphaRad = 0;  // > Initialization.Init Page:8
    else {alphaRad = Math.asin(ratioOm*Math.sin(theta));}  // > Initialization.Init Page:9
    if (wavy == true) {  // > Initialization.Init Page:10
    alphaRad = 0.5*alphaRad;  // > Initialization.Init Page:11
    }  // > Initialization.Init Page:12
    if (loopy == true) {  // > Initialization.Init Page:13
    alphaRad = 1.8*alphaRad;  // > Initialization.Init Page:14
    }  // > Initialization.Init Page:15
    thetaAv = theta + alphaRad;  // > Initialization.Init Page:16
    gammaRad = gammaDegr*pi/180;  // > Initialization.Init Page:17
    var cosGamma = Math.cos(gammaRad);  // > Initialization.Init Page:18
    pointDist = -height*cosGamma + Math.sqrt( length*length + height*height*(-1 + cosGamma*cosGamma));  // > Initialization.Init Page:19
    actionColors (); // assign colors  // > Initialization.Init Page:20
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["undefined"]) return;
    if (showTrace==undefined)showTrace=false;  // > Initialization.undefined:1
    //redTrace  // > Initialization.undefined:2
    if (redTrace==undefined)redTrace=false;  // > Initialization.undefined:3
    if (axisTrace==undefined)axisTrace=false;  // > Initialization.undefined:4
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    if (theta > 00001) deltaT = deltaTav*(sinTheta/Math.sin(theta));   // > Evolution.Evol Page:1
    else deltaT = deltaTav;  // > Evolution.Evol Page:2
    //current precession speed is proportional to sine of instantaneous theta angle  // > Evolution.Evol Page:3
    OmegaT = OmegaT + deltaT;  // > Evolution.Evol Page:4
    omegaZeroT = omegaZeroT + deltaZeroT;  // > Evolution.Evol Page:5
    if (friction == true) {  // > Evolution.Evol Page:6
        if (speed > 4) {  // > Evolution.Evol Page:7
            speed = speed*(1 + fric*deltaSpeed); //reduction of speed  // > Evolution.Evol Page:8
            deltaZeroT = speed/60/height/height;  // > Evolution.Evol Page:9
            deltaTav = pi/30/speed*height;   // > Evolution.Evol Page:10
            alphaRad = alphaRad*(1 + fric*deltaAlpha); //reduction of nutation angle  // > Evolution.Evol Page:11
            var delta = 0.05*fric*deltaAlpha*Math.sin(theta);  // > Evolution.Evol Page:12
            if (theta < pi && theta > 0.0001) {theta = theta - delta; thetaAv = thetaAv - delta;}  // > Evolution.Evol Page:13
            //increment of precession angle  // > Evolution.Evol Page:14
            thetaDegr = theta*180/pi;}  // > Evolution.Evol Page:15
        else {_pause(); alert("Attention!"+"\nThe simulation stopped because the rotation speed is too low. \nYou should increase it to resume the simulation.");   // > Evolution.Evol Page:16
        }   // > Evolution.Evol Page:17
    }  // > Evolution.Evol Page:18
    if (regular == true) thetaAv = theta;  // > Evolution.Evol Page:19
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["FixRel Page"]) return;
    calcAxes();  // > FixedRelations.FixRel Page:1
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

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
    _view = new gyroscope_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.comboBox.linkProperty("Options",  function() { return ["Axis show","Axis hide","Momentum show","Momentum hide","Trace show","Trace hide","","Rotation in the vertical position (no precession)","Regular precession in the absence of friction","Forced precession with nutation (released axis)","Forced precession and nutation with friction","Precession in horizontal plane (with nutation)","Precession with nutation (init. velocity -- forward)","Precession with nutation (init. velocity -- backward)","","Real 3D","Isometric","Front View","Top View","Side View"]; } ); // HtmlView Page linking property 'Options' for element 'comboBox'
          _view.comboBox.setAction("OnChange", function(_data,_info) {
  var opts = _view.comboBox.getProperty("SelectedOptions");  // array of options
      var option = (opts.length > 0)? opts[0]:""; // selected option 
  if ( option=="user_defined"){
    }
    else if (option=="Momentum show"){
      redTrace=true;
      }
      else if (option=="Momentum hide"){
      redTrace=false;
      }
    //
    else if (option=="Trace show"){
      showTrace=true;
      }
      else if (option=="Trace hide"){
      showTrace=false;
      }
      else if (option=="Axis show"){
      axisTrace=true;
      }
      else if (option=="Axis hide"){
      axisTrace=false;
      }
   //example1
  else if ( option=="Rotation in the vertical position (no precession)"){
      zoom = 1.0;
     speed = 5.0;
     height = 1.1;
     thetaDegr = 0.0; //tilt angle
     gammaDegr = 40.0;
     friction = true;
     fric=0.5; // lookang set manually better
     regular = true;
     wavy = false;
     loopy = false;
     showTrace = true;
    // clearTrace();
   _initialize(); // may need to set back
     
    }
    //example 2
    else if ( option=="Regular precession in the absence of friction"){
   zoom = 1.0;
     speed = 6.0;
     height = 1.0;
     thetaDegr = 50.0;
     gammaDegr = 15.0;
     friction = false;
     fric=0; // lookang set manually better
     showTrace = true;
     //clearTrace();
     regular = true;
     wavy = false;
     loopy = false;
    // clearTrace();
      _initialize(); // may need to set back
   }
   //example 3
    else if ( option=="Forced precession with nutation (released axis)"){
   zoom = 1.0;
     speed = 6.0;
     height = 0.9;
     thetaDegr = 50.0;
     gammaDegr = 15.0;
     friction = false;
     fric=0; // lookang set manually better
     regular = false;
     wavy = false;
     loopy = false;
     showTrace = false;
    // clearTrace();
      _initialize(); // may need to set back
   }
   //example 4
   else if ( option=="Forced precession and nutation with friction"){
   zoom = 1.0;
     speed = 6.0;
     height = 0.9;
     thetaDegr = 50.0;
     gammaDegr = 20.0;
     friction = true;
     fric=0.5; // lookang set manually better
     regular = false;
     wavy = false;
     loopy = false;
     showTrace = false;
   //  clearTrace();
      _initialize(); // may need to set back
   }
   //example 5 Precession in horizontal plane (with nutation)
   else if ( option=="Precession in horizontal plane (with nutation)"){
   zoom = 0.8;
     speed = 6.0;
     height = 0.9;
     thetaDegr = 90.0;
     gammaDegr = 15.0;
     friction = true;
     fric=0.5; // lookang set manually better
     regular = false;
     wavy = false;
     loopy = false;
     showTrace = false;
    //clearTrace();
      _initialize(); // may need to set back
   }
   //example 6 Precession with nutation (init. velocity -- forward)
   else if ( option=="Precession with nutation (init. velocity -- forward)"){
   zoom = 1.0;
     speed = 6.0;
     height = 0.9;
     thetaDegr = 50.0;
     gammaDegr = 15.0;
     friction = false;
     fric=0; // lookang set manually better
     regular = false;
     wavy = true;
     loopy = false;
     showTrace = false;
    //clearTrace();
      _initialize(); // may need to set back
   }
   //example 7 Precession with nutation (init. velocity -- backward)
   else if ( option=="Precession with nutation (init. velocity -- backward)"){
    zoom = 1.0;
     speed = 6.0;
     height = 0.9;
     thetaDegr = 50.0;
     gammaDegr = 15.0;
     friction = false;
     regular = false;
     loopy = true;
     wavy = false;
     showTrace = false;
    //clearTrace();
      _initialize(); // may need to set back
   }
   
  //"PERSPECTIVE_OFF"
  else if ( option=="Isometric"){
  _view.drawingPanel3D.setProperty("Projection","PERSPECTIVE_OFF");
  }
  //"PERSPECTIVE_ON"
  else if ( option=="Real 3D"){
  _view.drawingPanel3D.setProperty("Projection","PERSPECTIVE_ON");
  }
  else if ( option=="Front View"){
  _view.drawingPanel3D.setProperty("Projection","PERSPECTIVE_ON");
  _view.drawingPanel3D.setCamLocX(3.66);
  _view.drawingPanel3D.setCamLocY(0);
  _view.drawingPanel3D.setCamLocZ(0);
  _view.drawingPanel3D.setCamTilt(0); //-90
  _view.drawingPanel3D.setCamAltitude(0);
  _view.drawingPanel3D.setCamAzimuth(0);
  }
  else if ( option=="Side View"){
  _view.drawingPanel3D.setProperty("Projection","PERSPECTIVE_OFF");
  _view.drawingPanel3D.setCamLocX(3.66);
  _view.drawingPanel3D.setCamLocY(0);
  _view.drawingPanel3D.setCamLocZ(0);
  _view.drawingPanel3D.setCamTilt(0);
  _view.drawingPanel3D.setCamAltitude(0);
  _view.drawingPanel3D.setCamAzimuth(90);
  }
  else if ( option=="Top View"){
  _view.drawingPanel3D.setProperty("Projection","PERSPECTIVE_OFF");
  //_view.drawingPanel3D.setProperty("Projection","PERSPECTIVE_OFF");
  _view.drawingPanel3D.setCamLocX(3.66);
  _view.drawingPanel3D.setCamLocY(0);
  _view.drawingPanel3D.setCamLocZ(0);
  _view.drawingPanel3D.setCamTilt(0);
  _view.drawingPanel3D.setCamAltitude(90);
  _view.drawingPanel3D.setCamAzimuth(0);
  }
  //"PLANAR_XY","PLANAR_XZ","PLANAR_YZ"
  else if ( option=="PLANAR_XY"){
  _view.drawingPanel3D.setProperty("Projection","PERSPECTIVE_OFF");
  //_view.drawingPanel3D.serProperty("CameraY","5");
  //_view._reset();
  }
  else if ( option=="PLANAR_XZ"){
  _view.drawingPanel3D.setProperty("Projection","PLANAR_XZ");
  //_view._reset();
  }
  else if ( option=="PLANAR_YZ"){
  _view.drawingPanel3D.setProperty("Projection","PLANAR_YZ");
  //_view._reset();
  }

}); // HtmlView Page setting action 'OnChange' for element 'comboBox'
          _view.comboBox.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'comboBox'
          _view.height3.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'height3'
          _view.height.linkProperty("Value",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Value' for element 'height'
          _view.height.setAction("OnChange", function(_data,_info) {
  if (height > 1.25) height = 1.25;
  else if (height < 0.5) height = 0.5;
  //_clearTrace();

}); // HtmlView Page setting action 'OnChange' for element 'height'
          _view.height.linkProperty("Disabled",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Disabled' for element 'height'
          _view.height.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'height'
          _view.height2.linkProperty("Value",  function() { return height; }, function(_v) { height = _v; } ); // HtmlView Page linking property 'Value' for element 'height2'
          _view.height2.setAction("OnChange", function(_data,_info) {
  if (height > 1.25) height = 1.25;
  else if (height < 0.5) height = 0.5;
  //_clearTrace();

}); // HtmlView Page setting action 'OnChange' for element 'height2'
          _view.height2.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'height2'
          _view.theta4.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'theta4'
          _view.theta3.setAction("OnRelease", function(_data,_info) {
  if (_isPaused) {
    showTrace = showTemp;
  //clearTrace();
  }

}); // HtmlView Page setting action 'OnRelease' for element 'theta3'
          _view.theta3.linkProperty("Value",  function() { return thetaDegr; }, function(_v) { thetaDegr = _v; } ); // HtmlView Page linking property 'Value' for element 'theta3'
          _view.theta3.setAction("OnChange", function(_data,_info) {
  _initialize();
  //theta=thetaDegr/180*pi ; //lookang added to work slider
  if (_isPaused) {
  showTemp = showTrace;  
  showTrace = false;
  }

}); // HtmlView Page setting action 'OnChange' for element 'theta3'
          _view.theta3.linkProperty("Disabled",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Disabled' for element 'theta3'
          _view.theta3.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'theta3'
          _view.theta2.linkProperty("Value",  function() { return thetaDegr; }, function(_v) { thetaDegr = _v; } ); // HtmlView Page linking property 'Value' for element 'theta2'
          _view.theta2.setAction("OnChange", function(_data,_info) {
  _initialize();
  //theta=thetaDegr/180*pi ; //lookang added to work slider
  if (_isPaused) {
  showTemp = showTrace;  
  showTrace = false;
  }

}); // HtmlView Page setting action 'OnChange' for element 'theta2'
          _view.theta2.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'theta2'
          _view.speed.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'speed'
          _view.speed2.linkProperty("Value",  function() { return speed; }, function(_v) { speed = _v; } ); // HtmlView Page linking property 'Value' for element 'speed2'
          _view.speed2.setAction("OnChange", function(_data,_info) {
  if (speed < 4.0) speed = 4.0;
  else if (speed > 20) speed = 20;
  //clearTrace();

}); // HtmlView Page setting action 'OnChange' for element 'speed2'
          _view.speed2.linkProperty("Disabled",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Disabled' for element 'speed2'
          _view.speed2.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'speed2'
          _view.speed3.linkProperty("Value",  function() { return speed; }, function(_v) { speed = _v; } ); // HtmlView Page linking property 'Value' for element 'speed3'
          _view.speed3.setAction("OnChange", function(_data,_info) {
  if (speed < 4.0) speed = 4.0;
  else if (speed > 20) speed = 20;
  //clearTrace();

}); // HtmlView Page setting action 'OnChange' for element 'speed3'
          _view.speed3.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'speed3'
          _view.friction2.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'friction2'
          _view.checkBox.linkProperty("Checked",  function() { return friction; }, function(_v) { friction = _v; } ); // HtmlView Page linking property 'Checked' for element 'checkBox'
          _view.friction3.linkProperty("Value",  function() { return fric; }, function(_v) { fric = _v; } ); // HtmlView Page linking property 'Value' for element 'friction3'
          _view.friction3.setAction("OnChange", function(_data,_info) {
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'friction3'
          _view.friction3.linkProperty("Disabled",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Disabled' for element 'friction3'
          _view.friction3.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'friction3'
          _view.friction4.linkProperty("Value",  function() { return fric; }, function(_v) { fric = _v; } ); // HtmlView Page linking property 'Value' for element 'friction4'
          _view.friction4.setAction("OnChange", function(_data,_info) {
  _initialize();

}); // HtmlView Page setting action 'OnChange' for element 'friction4'
          _view.friction4.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'friction4'
          _view.runPauseButton.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'runPauseButton'
          _view.runPauseButton.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'runPauseButton'
          _view.runPauseButton.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'runPauseButton'
          _view.runPauseButton.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'runPauseButton'
          _view.resetButton.setAction("OnClick", _reset); // HtmlView Page setting action 'OnClick' for element 'resetButton'
          _view.resetButton.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'resetButton'
          _view.plane3D.linkProperty("DirectionA",  function() { return [gyroAxes[0],gyroAxes[1],gyroAxes[2]]; } ); // HtmlView Page linking property 'DirectionA' for element 'plane3D'
          _view.plane3D.linkProperty("DirectionB",  function() { return [gyroAxes[3],gyroAxes[4],gyroAxes[5]]; } ); // HtmlView Page linking property 'DirectionB' for element 'plane3D'
          _view.plane3D.linkProperty("X",  function() { return centerX; }, function(_v) { centerX = _v; } ); // HtmlView Page linking property 'X' for element 'plane3D'
          _view.plane3D.linkProperty("Y",  function() { return centerY; }, function(_v) { centerY = _v; } ); // HtmlView Page linking property 'Y' for element 'plane3D'
          _view.plane3D.linkProperty("Z",  function() { return centerZ; }, function(_v) { centerZ = _v; } ); // HtmlView Page linking property 'Z' for element 'plane3D'
          _view.cylinder3D.linkProperty("Transformation",  function() { return [gyroAxes]; } ); // HtmlView Page linking property 'Transformation' for element 'cylinder3D'
          _view.cylinder3D.linkProperty("X",  function() { return centerX; }, function(_v) { centerX = _v; } ); // HtmlView Page linking property 'X' for element 'cylinder3D'
          _view.cylinder3D.linkProperty("Y",  function() { return centerY; }, function(_v) { centerY = _v; } ); // HtmlView Page linking property 'Y' for element 'cylinder3D'
          _view.cylinder3D.linkProperty("Z",  function() { return centerZ; }, function(_v) { centerZ = _v; } ); // HtmlView Page linking property 'Z' for element 'cylinder3D'
          _view.ellipsoid3D.linkProperty("Transformation",  function() { return [gyroAxes]; } ); // HtmlView Page linking property 'Transformation' for element 'ellipsoid3D'
          _view.ellipsoid3D.linkProperty("X",  function() { return centerX; }, function(_v) { centerX = _v; } ); // HtmlView Page linking property 'X' for element 'ellipsoid3D'
          _view.ellipsoid3D.linkProperty("Y",  function() { return centerY; }, function(_v) { centerY = _v; } ); // HtmlView Page linking property 'Y' for element 'ellipsoid3D'
          _view.ellipsoid3D.linkProperty("Z",  function() { return centerZ; }, function(_v) { centerZ = _v; } ); // HtmlView Page linking property 'Z' for element 'ellipsoid3D'
          _view.cylinder3D2length.linkProperty("Transformation",  function() { return [gyroAxes]; } ); // HtmlView Page linking property 'Transformation' for element 'cylinder3D2length'
          _view.cylinder3D2length.linkProperty("X",  function() { return lengthX/2; } ); // HtmlView Page linking property 'X' for element 'cylinder3D2length'
          _view.cylinder3D2length.linkProperty("Y",  function() { return lengthY/2; } ); // HtmlView Page linking property 'Y' for element 'cylinder3D2length'
          _view.cylinder3D2length.linkProperty("Z",  function() { return lengthZ/2; } ); // HtmlView Page linking property 'Z' for element 'cylinder3D2length'
          _view.arrow3DAxis.linkProperty("SizeX",  function() { return lengthX; }, function(_v) { lengthX = _v; } ); // HtmlView Page linking property 'SizeX' for element 'arrow3DAxis'
          _view.arrow3DAxis.linkProperty("SizeZ",  function() { return lengthZ; }, function(_v) { lengthZ = _v; } ); // HtmlView Page linking property 'SizeZ' for element 'arrow3DAxis'
          _view.arrow3DAxis.linkProperty("SizeY",  function() { return lengthY; }, function(_v) { lengthY = _v; } ); // HtmlView Page linking property 'SizeY' for element 'arrow3DAxis'
          _view.arrow3Dvertical.linkProperty("LineColor",  function() { return colorNet; }, function(_v) { colorNet = _v; } ); // HtmlView Page linking property 'LineColor' for element 'arrow3Dvertical'
          _view.arrow3Dvertical.linkProperty("SizeZ",  function() { return maxZ; }, function(_v) { maxZ = _v; } ); // HtmlView Page linking property 'SizeZ' for element 'arrow3Dvertical'
          _view.arrow3DAngMomentum.linkProperty("SizeX",  function() { return angMomX; }, function(_v) { angMomX = _v; } ); // HtmlView Page linking property 'SizeX' for element 'arrow3DAngMomentum'
          _view.arrow3DAngMomentum.linkProperty("SizeZ",  function() { return angMomZ; }, function(_v) { angMomZ = _v; } ); // HtmlView Page linking property 'SizeZ' for element 'arrow3DAngMomentum'
          _view.arrow3DAngMomentum.linkProperty("Visibility",  function() { return redTrace; }, function(_v) { redTrace = _v; } ); // HtmlView Page linking property 'Visibility' for element 'arrow3DAngMomentum'
          _view.arrow3DAngMomentum.linkProperty("SizeY",  function() { return angMomY; }, function(_v) { angMomY = _v; } ); // HtmlView Page linking property 'SizeY' for element 'arrow3DAngMomentum'
          _view.arrow3DArrowPointTraceforvisualization.linkProperty("SizeX",  function() { return pointX - centerX; } ); // HtmlView Page linking property 'SizeX' for element 'arrow3DArrowPointTraceforvisualization'
          _view.arrow3DArrowPointTraceforvisualization.linkProperty("X",  function() { return centerX; }, function(_v) { centerX = _v; } ); // HtmlView Page linking property 'X' for element 'arrow3DArrowPointTraceforvisualization'
          _view.arrow3DArrowPointTraceforvisualization.linkProperty("Y",  function() { return centerY; }, function(_v) { centerY = _v; } ); // HtmlView Page linking property 'Y' for element 'arrow3DArrowPointTraceforvisualization'
          _view.arrow3DArrowPointTraceforvisualization.linkProperty("Z",  function() { return centerZ; }, function(_v) { centerZ = _v; } ); // HtmlView Page linking property 'Z' for element 'arrow3DArrowPointTraceforvisualization'
          _view.arrow3DArrowPointTraceforvisualization.linkProperty("SizeZ",  function() { return pointZ - centerZ; } ); // HtmlView Page linking property 'SizeZ' for element 'arrow3DArrowPointTraceforvisualization'
          _view.arrow3DArrowPointTraceforvisualization.linkProperty("Visibility",  function() { return showTrace; }, function(_v) { showTrace = _v; } ); // HtmlView Page linking property 'Visibility' for element 'arrow3DArrowPointTraceforvisualization'
          _view.arrow3DArrowPointTraceforvisualization.linkProperty("SizeY",  function() { return pointY - centerY; } ); // HtmlView Page linking property 'SizeY' for element 'arrow3DArrowPointTraceforvisualization'
          _view.trail3Dtracevisualization.linkProperty("Maximum",  function() { return npt; }, function(_v) { npt = _v; } ); // HtmlView Page linking property 'Maximum' for element 'trail3Dtracevisualization'
          _view.trail3Dtracevisualization.linkProperty("InputZ",  function() { return pointZ; }, function(_v) { pointZ = _v; } ); // HtmlView Page linking property 'InputZ' for element 'trail3Dtracevisualization'
          _view.trail3Dtracevisualization.linkProperty("Connected",  function() { return showTrace; }, function(_v) { showTrace = _v; } ); // HtmlView Page linking property 'Connected' for element 'trail3Dtracevisualization'
          _view.trail3Dtracevisualization.linkProperty("InputX",  function() { return pointX; }, function(_v) { pointX = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail3Dtracevisualization'
          _view.trail3Dtracevisualization.linkProperty("Visibility",  function() { return showTrace; }, function(_v) { showTrace = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trail3Dtracevisualization'
          _view.trail3Dtracevisualization.linkProperty("InputY",  function() { return pointY; }, function(_v) { pointY = _v; } ); // HtmlView Page linking property 'InputY' for element 'trail3Dtracevisualization'
          _view.trail3DAxis.linkProperty("Maximum",  function() { return npt; }, function(_v) { npt = _v; } ); // HtmlView Page linking property 'Maximum' for element 'trail3DAxis'
          _view.trail3DAxis.linkProperty("InputZ",  function() { return lengthZ; }, function(_v) { lengthZ = _v; } ); // HtmlView Page linking property 'InputZ' for element 'trail3DAxis'
          _view.trail3DAxis.linkProperty("Connected",  function() { return axisTrace; }, function(_v) { axisTrace = _v; } ); // HtmlView Page linking property 'Connected' for element 'trail3DAxis'
          _view.trail3DAxis.linkProperty("InputX",  function() { return lengthX; }, function(_v) { lengthX = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail3DAxis'
          _view.trail3DAxis.linkProperty("Visibility",  function() { return axisTrace; }, function(_v) { axisTrace = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trail3DAxis'
          _view.trail3DAxis.linkProperty("InputY",  function() { return lengthY; }, function(_v) { lengthY = _v; } ); // HtmlView Page linking property 'InputY' for element 'trail3DAxis'
          _view.trail3DAngMom.linkProperty("Maximum",  function() { return npt; }, function(_v) { npt = _v; } ); // HtmlView Page linking property 'Maximum' for element 'trail3DAngMom'
          _view.trail3DAngMom.linkProperty("InputZ",  function() { return angMomZ; }, function(_v) { angMomZ = _v; } ); // HtmlView Page linking property 'InputZ' for element 'trail3DAngMom'
          _view.trail3DAngMom.linkProperty("Connected",  function() { return redTrace; }, function(_v) { redTrace = _v; } ); // HtmlView Page linking property 'Connected' for element 'trail3DAngMom'
          _view.trail3DAngMom.linkProperty("InputX",  function() { return angMomX; }, function(_v) { angMomX = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail3DAngMom'
          _view.trail3DAngMom.linkProperty("Visibility",  function() { return redTrace; }, function(_v) { redTrace = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trail3DAngMom'
          _view.trail3DAngMom.linkProperty("InputY",  function() { return angMomY; }, function(_v) { angMomY = _v; } ); // HtmlView Page linking property 'InputY' for element 'trail3DAngMom'
          _view.gyroAxesX2.linkProperty("SizeX",  function() { return gyroAxes[0]; } ); // HtmlView Page linking property 'SizeX' for element 'gyroAxesX2'
          _view.gyroAxesX2.linkProperty("SizeZ",  function() { return gyroAxes[2]; } ); // HtmlView Page linking property 'SizeZ' for element 'gyroAxesX2'
          _view.gyroAxesX2.linkProperty("SizeY",  function() { return gyroAxes[1]; } ); // HtmlView Page linking property 'SizeY' for element 'gyroAxesX2'
          _view.gyroAxesY2.linkProperty("SizeX",  function() { return gyroAxes[3]; } ); // HtmlView Page linking property 'SizeX' for element 'gyroAxesY2'
          _view.gyroAxesY2.linkProperty("SizeZ",  function() { return gyroAxes[5]; } ); // HtmlView Page linking property 'SizeZ' for element 'gyroAxesY2'
          _view.gyroAxesY2.linkProperty("SizeY",  function() { return gyroAxes[4]; } ); // HtmlView Page linking property 'SizeY' for element 'gyroAxesY2'
          _view.gyroAxesZ2.linkProperty("SizeX",  function() { return gyroAxes[6]; } ); // HtmlView Page linking property 'SizeX' for element 'gyroAxesZ2'
          _view.gyroAxesZ2.linkProperty("SizeZ",  function() { return gyroAxes[8]; } ); // HtmlView Page linking property 'SizeZ' for element 'gyroAxesZ2'
          _view.gyroAxesZ2.linkProperty("SizeY",  function() { return gyroAxes[7]; } ); // HtmlView Page linking property 'SizeY' for element 'gyroAxesZ2'
          _view.gyroAxes.linkProperty("X",  function() { return centerX; }, function(_v) { centerX = _v; } ); // HtmlView Page linking property 'X' for element 'gyroAxes'
          _view.gyroAxes.linkProperty("Y",  function() { return centerY; }, function(_v) { centerY = _v; } ); // HtmlView Page linking property 'Y' for element 'gyroAxes'
          _view.gyroAxes.linkProperty("Z",  function() { return centerZ; }, function(_v) { centerZ = _v; } ); // HtmlView Page linking property 'Z' for element 'gyroAxes'
          _view.gyroAxesX.linkProperty("SizeX",  function() { return gyroAxes[0]; } ); // HtmlView Page linking property 'SizeX' for element 'gyroAxesX'
          _view.gyroAxesX.linkProperty("SizeZ",  function() { return gyroAxes[2]; } ); // HtmlView Page linking property 'SizeZ' for element 'gyroAxesX'
          _view.gyroAxesX.linkProperty("SizeY",  function() { return gyroAxes[1]; } ); // HtmlView Page linking property 'SizeY' for element 'gyroAxesX'
          _view.gyroAxesY.linkProperty("SizeX",  function() { return gyroAxes[3]; } ); // HtmlView Page linking property 'SizeX' for element 'gyroAxesY'
          _view.gyroAxesY.linkProperty("SizeZ",  function() { return gyroAxes[5]; } ); // HtmlView Page linking property 'SizeZ' for element 'gyroAxesY'
          _view.gyroAxesY.linkProperty("SizeY",  function() { return gyroAxes[4]; } ); // HtmlView Page linking property 'SizeY' for element 'gyroAxesY'
          _view.gyroAxesZ.linkProperty("SizeX",  function() { return gyroAxes[6]; } ); // HtmlView Page linking property 'SizeX' for element 'gyroAxesZ'
          _view.gyroAxesZ.linkProperty("SizeZ",  function() { return gyroAxes[8]; } ); // HtmlView Page linking property 'SizeZ' for element 'gyroAxesZ'
          _view.gyroAxesZ.linkProperty("SizeY",  function() { return gyroAxes[7]; } ); // HtmlView Page linking property 'SizeY' for element 'gyroAxesZ'
          _view.field.linkProperty("Value",  function() { return theta; }, function(_v) { theta = _v; } ); // HtmlView Page linking property 'Value' for element 'field'
          _view.field22.linkProperty("Value",  function() { return gammaRad; }, function(_v) { gammaRad = _v; } ); // HtmlView Page linking property 'Value' for element 'field22'
          _view.field2.linkProperty("Value",  function() { return Phi; }, function(_v) { Phi = _v; } ); // HtmlView Page linking property 'Value' for element 'field2'
          _view.field23.linkProperty("Value",  function() { return OmegaT; }, function(_v) { OmegaT = _v; } ); // HtmlView Page linking property 'Value' for element 'field23'
          _view.field232.linkProperty("Value",  function() { return omegaZeroT; }, function(_v) { omegaZeroT = _v; } ); // HtmlView Page linking property 'Value' for element 'field232'
          _view.field432.linkProperty("Value",  function() { return _view.drawingPanel3D.getProperty("CameraTilt"); } ); // HtmlView Page linking property 'Value' for element 'field432'
          _view.field432.setAction("OnChange", function(_data,_info) {
  _view.drawingPanel3D.setCamTilt(_view.field432.getValue());

}); // HtmlView Page setting action 'OnChange' for element 'field432'
          _view.field422.linkProperty("Value",  function() { return _view.drawingPanel3D.getProperty("CameraAltitude"); } ); // HtmlView Page linking property 'Value' for element 'field422'
          _view.field422.setAction("OnChange", function(_data,_info) {
  _view.drawingPanel3D.setCamAltitude(_view.field422.getValue());

}); // HtmlView Page setting action 'OnChange' for element 'field422'
          _view.field442.linkProperty("Value",  function() { return _view.drawingPanel3D.getProperty("CameraAzimuth"); } ); // HtmlView Page linking property 'Value' for element 'field442'
          _view.field442.setAction("OnChange", function(_data,_info) {
  _view.drawingPanel3D.setCamAzimuth(_view.field442.getValue());

}); // HtmlView Page setting action 'OnChange' for element 'field442'
          _view.field423.linkProperty("Value",  function() { return _view.drawingPanel3D.getProperty("CameraX"); } ); // HtmlView Page linking property 'Value' for element 'field423'
          _view.field423.setAction("OnChange", function(_data,_info) {
  _view.drawingPanel3D.setCamLocX(_view.field42.getValue());

}); // HtmlView Page setting action 'OnChange' for element 'field423'
          _view.field433.linkProperty("Value",  function() { return _view.drawingPanel3D.getProperty("CameraY"); } ); // HtmlView Page linking property 'Value' for element 'field433'
          _view.field433.setAction("OnChange", function(_data,_info) {
  _view.drawingPanel3D.setCamLocY(_view.field43.getValue());

}); // HtmlView Page setting action 'OnChange' for element 'field433'
          _view.field443.linkProperty("Value",  function() { return _view.drawingPanel3D.getProperty("CameraZ"); } ); // HtmlView Page linking property 'Value' for element 'field443'
          _view.field443.setAction("OnChange", function(_data,_info) {
  _view.drawingPanel3D.setCamLocZ(_view.field44.getValue());

}); // HtmlView Page setting action 'OnChange' for element 'field443'
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
function gyroscope_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = gyroscope_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);

  _view._addDescriptionPage('Intro Page','./gyroscope_Intro_1.html');

  return _view;
} // end of main function

function gyroscope_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"singleDrawing3DPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'singleDrawing3DPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.singleDrawing3DPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'controlPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'controlPanel'
      .setProperty("BorderStyle","solid") // EJsS HtmlView.HtmlView Page: setting property 'BorderStyle' for element 'controlPanel'
      .setProperty("BorderColor","Gray") // EJsS HtmlView.HtmlView Page: setting property 'BorderColor' for element 'controlPanel'
      .setProperty("BorderWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'BorderWidth' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"firstRowPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'firstRowPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'firstRowPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"executionPanel", _view.firstRowPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'executionPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'executionPanel'
      .setProperty("Display","inline-block") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'executionPanel'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox", _view.executionPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"height4", _view.executionPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'height4'
      .setProperty("Background","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'height4'
      .setProperty("Display","inline-block") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'height4'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"height3", _view.height4) // EJsS HtmlView.HtmlView Page: declaration of element 'height3'
      .setProperty("Tooltip","Position of the disc") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'height3'
      .setProperty("Foreground","White") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'height3'
      .setProperty("Text","H=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'height3'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"height", _view.height4) // EJsS HtmlView.HtmlView Page: declaration of element 'height'
      .setProperty("Minimum",0.5) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'height'
      .setProperty("Maximum",1.3) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'height'
      .setProperty("Tooltip","Position of the disc") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'height'
      .setProperty("Step",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'height'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"height2", _view.height4) // EJsS HtmlView.HtmlView Page: declaration of element 'height2'
      .setProperty("Width","7vw") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'height2'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'height2'
      .setProperty("Tooltip","Position of the disc") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'height2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"theta", _view.executionPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'theta'
      .setProperty("Background","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'theta'
      .setProperty("Display","inline-block") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'theta'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"theta4", _view.theta) // EJsS HtmlView.HtmlView Page: declaration of element 'theta4'
      .setProperty("Tooltip","Tilt of the axis in degrees") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'theta4'
      .setProperty("Text","θ=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'theta4'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"theta3", _view.theta) // EJsS HtmlView.HtmlView Page: declaration of element 'theta3'
      .setProperty("Minimum",0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'theta3'
      .setProperty("Maximum",120) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'theta3'
      .setProperty("Tooltip","Tilt of the axis in degrees") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'theta3'
      .setProperty("Step",1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'theta3'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"theta2", _view.theta) // EJsS HtmlView.HtmlView Page: declaration of element 'theta2'
      .setProperty("Width","7vw") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'theta2'
      .setProperty("Format","00.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'theta2'
      .setProperty("Tooltip","Tilt of the axis in degrees") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'theta2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"speedforrotation", _view.executionPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'speedforrotation'
      .setProperty("Background","Orange") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'speedforrotation'
      .setProperty("Display","inline-block") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'speedforrotation'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"speed", _view.speedforrotation) // EJsS HtmlView.HtmlView Page: declaration of element 'speed'
      .setProperty("Tooltip","Angular velocity") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'speed'
      .setProperty("Text","ω=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'speed'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"speed2", _view.speedforrotation) // EJsS HtmlView.HtmlView Page: declaration of element 'speed2'
      .setProperty("Minimum",4) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'speed2'
      .setProperty("Maximum",20) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'speed2'
      .setProperty("Tooltip","Angular velocity") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'speed2'
      .setProperty("Step",1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'speed2'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"speed3", _view.speedforrotation) // EJsS HtmlView.HtmlView Page: declaration of element 'speed3'
      .setProperty("Width","7vw") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'speed3'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'speed3'
      .setProperty("Tooltip","Angular velocity") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'speed3'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"friction", _view.executionPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'friction'
      .setProperty("Background","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'friction'
      .setProperty("Display","inline-block") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'friction'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"friction2", _view.friction) // EJsS HtmlView.HtmlView Page: declaration of element 'friction2'
      .setProperty("Tooltip","Intensity of friction") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'friction2'
      .setProperty("Foreground","White") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'friction2'
      .setProperty("Text","f=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'friction2'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"checkBox", _view.friction) // EJsS HtmlView.HtmlView Page: declaration of element 'checkBox'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"friction3", _view.friction) // EJsS HtmlView.HtmlView Page: declaration of element 'friction3'
      .setProperty("Minimum",0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'friction3'
      .setProperty("Maximum",2) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'friction3'
      .setProperty("Tooltip","Intensity of friction") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'friction3'
      .setProperty("Step",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'friction3'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"friction4", _view.friction) // EJsS HtmlView.HtmlView Page: declaration of element 'friction4'
      .setProperty("Width","7vw") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'friction4'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'friction4'
      .setProperty("Tooltip","Intensity of friction") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'friction4'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"runPauseButton", _view.executionPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'runPauseButton'
      .setProperty("TextOn","►") // EJsS HtmlView.HtmlView Page: setting property 'TextOn' for element 'runPauseButton'
      .setProperty("Tooltip","Play/Pause") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'runPauseButton'
      .setProperty("TextOff","||") // EJsS HtmlView.HtmlView Page: setting property 'TextOff' for element 'runPauseButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.executionPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("Tooltip","Reset") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetButton'
      .setProperty("Text","↻") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view.singleDrawing3DPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      .setProperty("CSS",{ "display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'wrappedPanel'
      ;

    _view._addElement(EJSS_DRAWING3D.drawingPanel,"drawingPanel3D", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel3D'
      .setProperty("Height",window.innerHeight*0.80) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel3D'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel3D'
      .setProperty("CameraZ",0.5) // EJsS HtmlView.HtmlView Page: setting property 'CameraZ' for element 'drawingPanel3D'
      .setProperty("Background","White") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'drawingPanel3D'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel3D'
      .setProperty("DecorationType","NONE") // EJsS HtmlView.HtmlView Page: setting property 'DecorationType' for element 'drawingPanel3D'
      .setProperty("CameraFocusZ",0.5) // EJsS HtmlView.HtmlView Page: setting property 'CameraFocusZ' for element 'drawingPanel3D'
      ;

    _view._addElement(EJSS_DRAWING3D.cylinder,"cylinder3D2base", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'cylinder3D2base'
      .setProperty("SizeX",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'cylinder3D2base'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'cylinder3D2base'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'cylinder3D2base'
      .setProperty("Z",-0.5) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'cylinder3D2base'
      .setProperty("SizeZ",0.1) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'cylinder3D2base'
      .setProperty("SizeY",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'cylinder3D2base'
      ;

    _view._addElement(EJSS_DRAWING3D.cylinder,"cylinder3D2supportstem", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'cylinder3D2supportstem'
      .setProperty("BottomRadius",0.3) // EJsS HtmlView.HtmlView Page: setting property 'BottomRadius' for element 'cylinder3D2supportstem'
      .setProperty("TopRadius",0.3) // EJsS HtmlView.HtmlView Page: setting property 'TopRadius' for element 'cylinder3D2supportstem'
      .setProperty("SizeX",0.3) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'cylinder3D2supportstem'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'cylinder3D2supportstem'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'cylinder3D2supportstem'
      .setProperty("Z",-0.25) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'cylinder3D2supportstem'
      .setProperty("SizeZ",-0.5) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'cylinder3D2supportstem'
      .setProperty("SizeY",0.3) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'cylinder3D2supportstem'
      ;

    _view._addElement(EJSS_DRAWING3D.plane,"plane3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'plane3D'
      .setProperty("Transparency",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Transparency' for element 'plane3D'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'plane3D'
      .setProperty("SizeX",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'plane3D'
      .setProperty("LineColor","Yellow") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'plane3D'
      .setProperty("SizeZ",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'plane3D'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'plane3D'
      .setProperty("SizeY",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'plane3D'
      .setProperty("DrawLines",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'plane3D'
      ;

    _view._addElement(EJSS_DRAWING3D.cylinder,"cylinder3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'cylinder3D'
      .setProperty("SizeX",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'cylinder3D'
      .setProperty("SizeZ",0.3) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'cylinder3D'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'cylinder3D'
      .setProperty("SizeY",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'cylinder3D'
      .setProperty("DrawLines",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'cylinder3D'
      .setProperty("DrawFill",false) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'cylinder3D'
      .setProperty("Resolution",18) // EJsS HtmlView.HtmlView Page: setting property 'Resolution' for element 'cylinder3D'
      ;

    _view._addElement(EJSS_DRAWING3D.ellipsoid,"ellipsoid3D", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'ellipsoid3D'
      .setProperty("FillColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'ellipsoid3D'
      .setProperty("Transparency",0.01) // EJsS HtmlView.HtmlView Page: setting property 'Transparency' for element 'ellipsoid3D'
      .setProperty("DrawFill",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'ellipsoid3D'
      .setProperty("SizeX",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ellipsoid3D'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'ellipsoid3D'
      .setProperty("SizeZ",0.3) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'ellipsoid3D'
      .setProperty("SizeY",1) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ellipsoid3D'
      .setProperty("DrawLines",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawLines' for element 'ellipsoid3D'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'ellipsoid3D'
      ;

    _view._addElement(EJSS_DRAWING3D.cylinder,"cylinder3D2length", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'cylinder3D2length'
      .setProperty("BottomRadius",0.1) // EJsS HtmlView.HtmlView Page: setting property 'BottomRadius' for element 'cylinder3D2length'
      .setProperty("FillColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'cylinder3D2length'
      .setProperty("TopRadius",0.1) // EJsS HtmlView.HtmlView Page: setting property 'TopRadius' for element 'cylinder3D2length'
      .setProperty("SizeX",0.3) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'cylinder3D2length'
      .setProperty("SizeZ",2) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'cylinder3D2length'
      .setProperty("SizeY",0.3) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'cylinder3D2length'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"arrow3DAxis", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow3DAxis'
      .setProperty("FillColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'arrow3DAxis'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'arrow3DAxis'
      .setProperty("LineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrow3DAxis'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'arrow3DAxis'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'arrow3DAxis'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'arrow3DAxis'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"arrow3Dvertical", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow3Dvertical'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'arrow3Dvertical'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'arrow3Dvertical'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'arrow3Dvertical'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'arrow3Dvertical'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'arrow3Dvertical'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'arrow3Dvertical'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'arrow3Dvertical'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"arrow3DAngMomentum", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow3DAngMomentum'
      .setProperty("FillColor","Orange") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'arrow3DAngMomentum'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'arrow3DAngMomentum'
      .setProperty("LineColor","Orange") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrow3DAngMomentum'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'arrow3DAngMomentum'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'arrow3DAngMomentum'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'arrow3DAngMomentum'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"arrow3DArrowPointTraceforvisualization", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'arrow3DArrowPointTraceforvisualization'
      .setProperty("FillColor","Cyan") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'arrow3DArrowPointTraceforvisualization'
      .setProperty("LineColor","Cyan") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'arrow3DArrowPointTraceforvisualization'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'arrow3DArrowPointTraceforvisualization'
      ;

    _view._addElement(EJSS_DRAWING3D.trail,"trail3Dtracevisualization", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'trail3Dtracevisualization'
      .setProperty("LineColor","Cyan") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail3Dtracevisualization'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'trail3Dtracevisualization'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'trail3Dtracevisualization'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'trail3Dtracevisualization'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail3Dtracevisualization'
      ;

    _view._addElement(EJSS_DRAWING3D.trail,"trail3DAxis", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'trail3DAxis'
      .setProperty("LineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail3DAxis'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'trail3DAxis'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'trail3DAxis'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'trail3DAxis'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail3DAxis'
      ;

    _view._addElement(EJSS_DRAWING3D.trail,"trail3DAngMom", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'trail3DAngMom'
      .setProperty("LineColor","Orange") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail3DAngMom'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'trail3DAngMom'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'trail3DAngMom'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'trail3DAngMom'
      .setProperty("LineWidth",3) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail3DAngMom'
      ;

    _view._addElement(EJSS_DRAWING3D.group,"gyroAxes2", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxes2'
      .setProperty("SizeX",0.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'gyroAxes2'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'gyroAxes2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'gyroAxes2'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'gyroAxes2'
      .setProperty("SizeZ",0.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'gyroAxes2'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'gyroAxes2'
      .setProperty("SizeY",0.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'gyroAxes2'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"gyroAxesX2", _view.gyroAxes2) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxesX2'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'gyroAxesX2'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gyroAxesX2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'gyroAxesX2'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'gyroAxesX2'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"gyroAxesY2", _view.gyroAxes2) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxesY2'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'gyroAxesY2'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gyroAxesY2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'gyroAxesY2'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'gyroAxesY2'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"gyroAxesZ2", _view.gyroAxes2) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxesZ2'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'gyroAxesZ2'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gyroAxesZ2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'gyroAxesZ2'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'gyroAxesZ2'
      ;

    _view._addElement(EJSS_DRAWING3D.group,"gyroAxes", _view.drawingPanel3D) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxes'
      .setProperty("SizeX",0.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'gyroAxes'
      .setProperty("SizeZ",0.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeZ' for element 'gyroAxes'
      .setProperty("SizeY",0.2) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'gyroAxes'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"gyroAxesX", _view.gyroAxes) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxesX'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'gyroAxesX'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gyroAxesX'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'gyroAxesX'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'gyroAxesX'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"gyroAxesY", _view.gyroAxes) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxesY'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'gyroAxesY'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gyroAxesY'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'gyroAxesY'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'gyroAxesY'
      ;

    _view._addElement(EJSS_DRAWING3D.arrow,"gyroAxesZ", _view.gyroAxes) // EJsS HtmlView.HtmlView Page: declaration of element 'gyroAxesZ'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'gyroAxesZ'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'gyroAxesZ'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'gyroAxesZ'
      .setProperty("Z",0) // EJsS HtmlView.HtmlView Page: setting property 'Z' for element 'gyroAxesZ'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"debug", _view.singleDrawing3DPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'debug'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'debug'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'label'
      .setProperty("Text","theta=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'field'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label2", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'label2'
      .setProperty("Text","gammaRad=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label2'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field22", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'field22'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label222", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'label222'
      .setProperty("Text","Phi=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label222'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field2", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'field2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label2222", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'label2222'
      .setProperty("Text","OmegaT=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label2222'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field23", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'field23'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label22222", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'label22222'
      .setProperty("Text","omegaZeroT=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label22222'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field232", _view.debug) // EJsS HtmlView.HtmlView Page: declaration of element 'field232'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"debug2", _view.singleDrawing3DPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'debug2'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'debug2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"a23", _view.debug2) // EJsS HtmlView.HtmlView Page: declaration of element 'a23'
      .setProperty("Text","CameraTilt=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'a23'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field432", _view.debug2) // EJsS HtmlView.HtmlView Page: declaration of element 'field432'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field432'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field432'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"a3", _view.debug2) // EJsS HtmlView.HtmlView Page: declaration of element 'a3'
      .setProperty("Text","CameraAltitude") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'a3'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field422", _view.debug2) // EJsS HtmlView.HtmlView Page: declaration of element 'field422'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field422'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field422'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"a222", _view.debug2) // EJsS HtmlView.HtmlView Page: declaration of element 'a222'
      .setProperty("Text","CameraAzimuth=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'a222'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field442", _view.debug2) // EJsS HtmlView.HtmlView Page: declaration of element 'field442'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field442'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field442'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"debug3", _view.singleDrawing3DPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'debug3'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'debug3'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"a4", _view.debug3) // EJsS HtmlView.HtmlView Page: declaration of element 'a4'
      .setProperty("Text","CameraX=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'a4'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field423", _view.debug3) // EJsS HtmlView.HtmlView Page: declaration of element 'field423'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field423'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field423'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"a24", _view.debug3) // EJsS HtmlView.HtmlView Page: declaration of element 'a24'
      .setProperty("Text","CameraY=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'a24'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field433", _view.debug3) // EJsS HtmlView.HtmlView Page: declaration of element 'field433'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field433'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field433'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"a223", _view.debug3) // EJsS HtmlView.HtmlView Page: declaration of element 'a223'
      .setProperty("Text","CameraZ=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'a223'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"field443", _view.debug3) // EJsS HtmlView.HtmlView Page: declaration of element 'field443'
      .setProperty("Width",30) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'field443'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'field443'
      ;

  };

  return _view;
}



      var _model;
      var _scorm;
      window.addEventListener('load',
        function () { 
          _model =  new gyroscope("_topFrame","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_examples/bin/javascript/lib/","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_6.0/workspace/source/JavascriptExamples/");
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
