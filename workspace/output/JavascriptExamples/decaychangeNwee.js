/* _inputParameters: an object with different values for the model parameters */
function decaychangeNwee(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
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

  var inputdropmenu; // EjsS Model.Variables.coordinate.inputdropmenu
  var print; // EjsS Model.Variables.coordinate.print
  var fontb; // EjsS Model.Variables.coordinate.fontb
  var font; // EjsS Model.Variables.coordinate.font
  var range; // EjsS Model.Variables.coordinate.range
  var xmin; // EjsS Model.Variables.coordinate.xmin
  var xmax; // EjsS Model.Variables.coordinate.xmax
  var ymin; // EjsS Model.Variables.coordinate.ymin
  var ymax; // EjsS Model.Variables.coordinate.ymax
  var t; // EjsS Model.Variables.coordinate.t
  var dt; // EjsS Model.Variables.coordinate.dt
  var size; // EjsS Model.Variables.coordinate.size
  var label; // EjsS Model.Variables.coordinate.label
  var selectedhalflife; // EjsS Model.Variables.coordinate.selectedhalflife
  var selected; // EjsS Model.Variables.coordinate.selected
  var text; // EjsS Model.Variables.coordinate.text

  var nmax; // EjsS Model.Variables.basic.nmax
  var n; // EjsS Model.Variables.basic.n
  var ni; // EjsS Model.Variables.basic.ni
  var n2; // EjsS Model.Variables.basic.n2
  var data; // EjsS Model.Variables.basic.data
  var p; // EjsS Model.Variables.basic.p
  var count; // EjsS Model.Variables.basic.count
  var counts; // EjsS Model.Variables.basic.counts
  var dcount; // EjsS Model.Variables.basic.dcount
  var dcounts; // EjsS Model.Variables.basic.dcounts
  var T; // EjsS Model.Variables.basic.T
  var ratio; // EjsS Model.Variables.basic.ratio
  var lambda; // EjsS Model.Variables.basic.lambda
  var halflife; // EjsS Model.Variables.basic.halflife
  var halflifeN; // EjsS Model.Variables.basic.halflifeN
  var halflifeticksx; // EjsS Model.Variables.basic.halflifeticksx
  var halflifeticksy; // EjsS Model.Variables.basic.halflifeticksy
  var activity; // EjsS Model.Variables.basic.activity
  var activityx; // EjsS Model.Variables.basic.activityx
  var activityy; // EjsS Model.Variables.basic.activityy
  var loopcount; // EjsS Model.Variables.basic.loopcount

  var selectedmodel; // EjsS Model.Variables.functionY.selectedmodel
  var xmodel; // EjsS Model.Variables.functionY.xmodel
  var showmodel; // EjsS Model.Variables.functionY.showmodel
  var functionY; // EjsS Model.Variables.functionY.functionY
  var solutionY; // EjsS Model.Variables.functionY.solutionY

  var selectedview; // EjsS Model.Variables.layout.selectedview
  var isAndroid; // EjsS Model.Variables.layout.isAndroid
  var Width; // EjsS Model.Variables.layout.Width
  var Height; // EjsS Model.Variables.layout.Height
  var Width1; // EjsS Model.Variables.layout.Width1
  var Width2; // EjsS Model.Variables.layout.Width2
  var Width3; // EjsS Model.Variables.layout.Width3
  var world; // EjsS Model.Variables.layout.world
  var graph; // EjsS Model.Variables.layout.graph
  var graph3; // EjsS Model.Variables.layout.graph3
  var disabledworld; // EjsS Model.Variables.layout.disabledworld
  var disabled; // EjsS Model.Variables.layout.disabled
  var disabled3; // EjsS Model.Variables.layout.disabled3

  var dx; // EjsS Model.Variables.view.dx
  var dy; // EjsS Model.Variables.view.dy
  var px; // EjsS Model.Variables.view.px
  var py; // EjsS Model.Variables.view.py
  var clr; // EjsS Model.Variables.view.clr
  var gray; // EjsS Model.Variables.view.gray
  var red; // EjsS Model.Variables.view.red
  var iy; // EjsS Model.Variables.view.iy

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
      inputdropmenu : inputdropmenu,
      print : print,
      fontb : fontb,
      font : font,
      range : range,
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      t : t,
      dt : dt,
      size : size,
      label : label,
      selectedhalflife : selectedhalflife,
      selected : selected,
      text : text,
      nmax : nmax,
      n : n,
      ni : ni,
      n2 : n2,
      data : data,
      p : p,
      count : count,
      counts : counts,
      dcount : dcount,
      dcounts : dcounts,
      T : T,
      ratio : ratio,
      lambda : lambda,
      halflife : halflife,
      halflifeN : halflifeN,
      halflifeticksx : halflifeticksx,
      halflifeticksy : halflifeticksy,
      activity : activity,
      activityx : activityx,
      activityy : activityy,
      loopcount : loopcount,
      selectedmodel : selectedmodel,
      xmodel : xmodel,
      showmodel : showmodel,
      functionY : functionY,
      solutionY : solutionY,
      selectedview : selectedview,
      isAndroid : isAndroid,
      Width : Width,
      Height : Height,
      Width1 : Width1,
      Width2 : Width2,
      Width3 : Width3,
      world : world,
      graph : graph,
      graph3 : graph3,
      disabledworld : disabledworld,
      disabled : disabled,
      disabled3 : disabled3,
      dx : dx,
      dy : dy,
      px : px,
      py : py,
      clr : clr,
      gray : gray,
      red : red,
      iy : iy
    };
  };

  function _serializePublic() { return _model.serializePublic(); }

  _model._userSerializePublic = function() {
    return {
      inputdropmenu : inputdropmenu,
      print : print,
      fontb : fontb,
      font : font,
      range : range,
      xmin : xmin,
      xmax : xmax,
      ymin : ymin,
      ymax : ymax,
      t : t,
      dt : dt,
      size : size,
      label : label,
      selectedhalflife : selectedhalflife,
      selected : selected,
      text : text,
      nmax : nmax,
      n : n,
      ni : ni,
      n2 : n2,
      data : data,
      p : p,
      count : count,
      counts : counts,
      dcount : dcount,
      dcounts : dcounts,
      T : T,
      ratio : ratio,
      lambda : lambda,
      halflife : halflife,
      halflifeN : halflifeN,
      halflifeticksx : halflifeticksx,
      halflifeticksy : halflifeticksy,
      activity : activity,
      activityx : activityx,
      activityy : activityy,
      loopcount : loopcount,
      selectedmodel : selectedmodel,
      xmodel : xmodel,
      showmodel : showmodel,
      functionY : functionY,
      solutionY : solutionY,
      selectedview : selectedview,
      isAndroid : isAndroid,
      Width : Width,
      Height : Height,
      Width1 : Width1,
      Width2 : Width2,
      Width3 : Width3,
      world : world,
      graph : graph,
      graph3 : graph3,
      disabledworld : disabledworld,
      disabled : disabled,
      disabled3 : disabled3,
      dx : dx,
      dy : dy,
      px : px,
      py : py,
      clr : clr,
      gray : gray,
      red : red,
      iy : iy
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.inputdropmenu != "undefined") inputdropmenu = json.inputdropmenu;
    if(typeof json.print != "undefined") print = json.print;
    if(typeof json.fontb != "undefined") fontb = json.fontb;
    if(typeof json.font != "undefined") font = json.font;
    if(typeof json.range != "undefined") range = json.range;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.size != "undefined") size = json.size;
    if(typeof json.label != "undefined") label = json.label;
    if(typeof json.selectedhalflife != "undefined") selectedhalflife = json.selectedhalflife;
    if(typeof json.selected != "undefined") selected = json.selected;
    if(typeof json.text != "undefined") text = json.text;
    if(typeof json.nmax != "undefined") nmax = json.nmax;
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.ni != "undefined") ni = json.ni;
    if(typeof json.n2 != "undefined") n2 = json.n2;
    if(typeof json.data != "undefined") data = json.data;
    if(typeof json.p != "undefined") p = json.p;
    if(typeof json.count != "undefined") count = json.count;
    if(typeof json.counts != "undefined") counts = json.counts;
    if(typeof json.dcount != "undefined") dcount = json.dcount;
    if(typeof json.dcounts != "undefined") dcounts = json.dcounts;
    if(typeof json.T != "undefined") T = json.T;
    if(typeof json.ratio != "undefined") ratio = json.ratio;
    if(typeof json.lambda != "undefined") lambda = json.lambda;
    if(typeof json.halflife != "undefined") halflife = json.halflife;
    if(typeof json.halflifeN != "undefined") halflifeN = json.halflifeN;
    if(typeof json.halflifeticksx != "undefined") halflifeticksx = json.halflifeticksx;
    if(typeof json.halflifeticksy != "undefined") halflifeticksy = json.halflifeticksy;
    if(typeof json.activity != "undefined") activity = json.activity;
    if(typeof json.activityx != "undefined") activityx = json.activityx;
    if(typeof json.activityy != "undefined") activityy = json.activityy;
    if(typeof json.loopcount != "undefined") loopcount = json.loopcount;
    if(typeof json.selectedmodel != "undefined") selectedmodel = json.selectedmodel;
    if(typeof json.xmodel != "undefined") xmodel = json.xmodel;
    if(typeof json.showmodel != "undefined") showmodel = json.showmodel;
    if(typeof json.functionY != "undefined") functionY = json.functionY;
    if(typeof json.solutionY != "undefined") solutionY = json.solutionY;
    if(typeof json.selectedview != "undefined") selectedview = json.selectedview;
    if(typeof json.isAndroid != "undefined") isAndroid = json.isAndroid;
    if(typeof json.Width != "undefined") Width = json.Width;
    if(typeof json.Height != "undefined") Height = json.Height;
    if(typeof json.Width1 != "undefined") Width1 = json.Width1;
    if(typeof json.Width2 != "undefined") Width2 = json.Width2;
    if(typeof json.Width3 != "undefined") Width3 = json.Width3;
    if(typeof json.world != "undefined") world = json.world;
    if(typeof json.graph != "undefined") graph = json.graph;
    if(typeof json.graph3 != "undefined") graph3 = json.graph3;
    if(typeof json.disabledworld != "undefined") disabledworld = json.disabledworld;
    if(typeof json.disabled != "undefined") disabled = json.disabled;
    if(typeof json.disabled3 != "undefined") disabled3 = json.disabled3;
    if(typeof json.dx != "undefined") dx = json.dx;
    if(typeof json.dy != "undefined") dy = json.dy;
    if(typeof json.px != "undefined") px = json.px;
    if(typeof json.py != "undefined") py = json.py;
    if(typeof json.clr != "undefined") clr = json.clr;
    if(typeof json.gray != "undefined") gray = json.gray;
    if(typeof json.red != "undefined") red = json.red;
    if(typeof json.iy != "undefined") iy = json.iy;
  };

  _model._readParametersPublic = function(json) {
    if(typeof json.inputdropmenu != "undefined") inputdropmenu = json.inputdropmenu;
    if(typeof json.print != "undefined") print = json.print;
    if(typeof json.fontb != "undefined") fontb = json.fontb;
    if(typeof json.font != "undefined") font = json.font;
    if(typeof json.range != "undefined") range = json.range;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.ymin != "undefined") ymin = json.ymin;
    if(typeof json.ymax != "undefined") ymax = json.ymax;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.size != "undefined") size = json.size;
    if(typeof json.label != "undefined") label = json.label;
    if(typeof json.selectedhalflife != "undefined") selectedhalflife = json.selectedhalflife;
    if(typeof json.selected != "undefined") selected = json.selected;
    if(typeof json.text != "undefined") text = json.text;
    if(typeof json.nmax != "undefined") nmax = json.nmax;
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.ni != "undefined") ni = json.ni;
    if(typeof json.n2 != "undefined") n2 = json.n2;
    if(typeof json.data != "undefined") data = json.data;
    if(typeof json.p != "undefined") p = json.p;
    if(typeof json.count != "undefined") count = json.count;
    if(typeof json.counts != "undefined") counts = json.counts;
    if(typeof json.dcount != "undefined") dcount = json.dcount;
    if(typeof json.dcounts != "undefined") dcounts = json.dcounts;
    if(typeof json.T != "undefined") T = json.T;
    if(typeof json.ratio != "undefined") ratio = json.ratio;
    if(typeof json.lambda != "undefined") lambda = json.lambda;
    if(typeof json.halflife != "undefined") halflife = json.halflife;
    if(typeof json.halflifeN != "undefined") halflifeN = json.halflifeN;
    if(typeof json.halflifeticksx != "undefined") halflifeticksx = json.halflifeticksx;
    if(typeof json.halflifeticksy != "undefined") halflifeticksy = json.halflifeticksy;
    if(typeof json.activity != "undefined") activity = json.activity;
    if(typeof json.activityx != "undefined") activityx = json.activityx;
    if(typeof json.activityy != "undefined") activityy = json.activityy;
    if(typeof json.loopcount != "undefined") loopcount = json.loopcount;
    if(typeof json.selectedmodel != "undefined") selectedmodel = json.selectedmodel;
    if(typeof json.xmodel != "undefined") xmodel = json.xmodel;
    if(typeof json.showmodel != "undefined") showmodel = json.showmodel;
    if(typeof json.functionY != "undefined") functionY = json.functionY;
    if(typeof json.solutionY != "undefined") solutionY = json.solutionY;
    if(typeof json.selectedview != "undefined") selectedview = json.selectedview;
    if(typeof json.isAndroid != "undefined") isAndroid = json.isAndroid;
    if(typeof json.Width != "undefined") Width = json.Width;
    if(typeof json.Height != "undefined") Height = json.Height;
    if(typeof json.Width1 != "undefined") Width1 = json.Width1;
    if(typeof json.Width2 != "undefined") Width2 = json.Width2;
    if(typeof json.Width3 != "undefined") Width3 = json.Width3;
    if(typeof json.world != "undefined") world = json.world;
    if(typeof json.graph != "undefined") graph = json.graph;
    if(typeof json.graph3 != "undefined") graph3 = json.graph3;
    if(typeof json.disabledworld != "undefined") disabledworld = json.disabledworld;
    if(typeof json.disabled != "undefined") disabled = json.disabled;
    if(typeof json.disabled3 != "undefined") disabled3 = json.disabled3;
    if(typeof json.dx != "undefined") dx = json.dx;
    if(typeof json.dy != "undefined") dy = json.dy;
    if(typeof json.px != "undefined") px = json.px;
    if(typeof json.py != "undefined") py = json.py;
    if(typeof json.clr != "undefined") clr = json.clr;
    if(typeof json.gray != "undefined") gray = json.gray;
    if(typeof json.red != "undefined") red = json.red;
    if(typeof json.iy != "undefined") iy = json.iy;
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
    __pagesEnabled["axes"] = true;
    __pagesEnabled["svg"] = true;
    __pagesEnabled["Evol Page 2"] = true;
    __pagesEnabled["Cons Page"] = false;
    __pagesEnabled["FixRel Page"] = true;
    __pagesEnabled["axes"] = true;
  });

  _model.addToReset(function() {
    inputdropmenu = true; // EjsS Model.Variables.coordinate.inputdropmenu
    print = false; // EjsS Model.Variables.coordinate.print
    fontb = "normal bold 2vw "; // EjsS Model.Variables.coordinate.fontb
    font = "normal normal 2vw "; // EjsS Model.Variables.coordinate.font
    range = 200; // EjsS Model.Variables.coordinate.range
    xmin = -range/2; // EjsS Model.Variables.coordinate.xmin
    xmax = range/2; // EjsS Model.Variables.coordinate.xmax
    ymin = -range/2; // EjsS Model.Variables.coordinate.ymin
    ymax = range/2; // EjsS Model.Variables.coordinate.ymax
    t = 0.0; // EjsS Model.Variables.coordinate.t
    dt = 0.1; // EjsS Model.Variables.coordinate.dt
    size = range/40; // EjsS Model.Variables.coordinate.size
    label = "play"; // EjsS Model.Variables.coordinate.label
    selectedhalflife = new Array(1); // EjsS Model.Variables.coordinate.selectedhalflife
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.coordinate.selectedhalflife
        selectedhalflife[_i0] = "T½ =1.0";  // EjsS Model.Variables.coordinate.selectedhalflife
      }
    }());
    selected = new Array(1); // EjsS Model.Variables.coordinate.selected
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.coordinate.selected
        selected[_i0] = "N₀ =100";  // EjsS Model.Variables.coordinate.selected
      }
    }());
    text = "Select slider and Click Play"; // EjsS Model.Variables.coordinate.text
  });

  _model.addToReset(function() {
    nmax = 200; // EjsS Model.Variables.basic.nmax
    n = nmax; // EjsS Model.Variables.basic.n
    ni = 10; // EjsS Model.Variables.basic.ni
    n2 = n*n; // EjsS Model.Variables.basic.n2
    data = new Array(n); // EjsS Model.Variables.basic.data
    (function () {
      var _i0,_i1;
      for (_i0=0; _i0<n; _i0+=1) {  // EjsS Model.Variables.basic.data
        data[_i0] = [];
        for (_i1=0; _i1<n; _i1+=1) {  // EjsS Model.Variables.basic.data
          data[_i0][_i1] = 0;  // EjsS Model.Variables.basic.data
        }
      }
    }());
    count = n*n; // EjsS Model.Variables.basic.count
    counts = count; // EjsS Model.Variables.basic.counts
    dcount = 0; // EjsS Model.Variables.basic.dcount
    dcounts = 10; // EjsS Model.Variables.basic.dcounts
    T = 5; // EjsS Model.Variables.basic.T
    ratio = 0.0; // EjsS Model.Variables.basic.ratio
    halflife = Math.LN2/lambda; // EjsS Model.Variables.basic.halflife
    halflifeN = 12; // EjsS Model.Variables.basic.halflifeN
    halflifeticksx = new Array(halflifeN); // EjsS Model.Variables.basic.halflifeticksx
    (function () {
      var _i0;
      for (_i0=0; _i0<halflifeN; _i0+=1) {  // EjsS Model.Variables.basic.halflifeticksx
        halflifeticksx[_i0] = 0;  // EjsS Model.Variables.basic.halflifeticksx
      }
    }());
    halflifeticksy = new Array(halflifeN); // EjsS Model.Variables.basic.halflifeticksy
    (function () {
      var _i0;
      for (_i0=0; _i0<halflifeN; _i0+=1) {  // EjsS Model.Variables.basic.halflifeticksy
        halflifeticksy[_i0] = 0;  // EjsS Model.Variables.basic.halflifeticksy
      }
    }());
    activity = 200; // EjsS Model.Variables.basic.activity
    activityx = new Array(activity); // EjsS Model.Variables.basic.activityx
    (function () {
      var _i0;
      for (_i0=0; _i0<activity; _i0+=1) {  // EjsS Model.Variables.basic.activityx
        activityx[_i0] = 0;  // EjsS Model.Variables.basic.activityx
      }
    }());
    activityy = new Array(activity); // EjsS Model.Variables.basic.activityy
    (function () {
      var _i0;
      for (_i0=0; _i0<activity; _i0+=1) {  // EjsS Model.Variables.basic.activityy
        activityy[_i0] = 0;  // EjsS Model.Variables.basic.activityy
      }
    }());
    loopcount = 0; // EjsS Model.Variables.basic.loopcount
  });

  _model.addToReset(function() {
    selectedmodel = new Array(1); // EjsS Model.Variables.functionY.selectedmodel
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.functionY.selectedmodel
        selectedmodel[_i0] = "0";  // EjsS Model.Variables.functionY.selectedmodel
      }
    }());
    showmodel = false; // EjsS Model.Variables.functionY.showmodel
    functionY = "0"; // EjsS Model.Variables.functionY.functionY
  });

  _model.addToReset(function() {
    selectedview = new Array(1); // EjsS Model.Variables.layout.selectedview
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.layout.selectedview
        selectedview[_i0] = "both";  // EjsS Model.Variables.layout.selectedview
      }
    }());
    isAndroid = checkAndroid(); // EjsS Model.Variables.layout.isAndroid
    Width = (_isEPub)?"400":"100%"; // EjsS Model.Variables.layout.Width
    Height = (_isEPub)?"500":"100%"; // EjsS Model.Variables.layout.Height
    world = true; // EjsS Model.Variables.layout.world
    graph = true; // EjsS Model.Variables.layout.graph
    graph3 = false; // EjsS Model.Variables.layout.graph3
    disabledworld = false; // EjsS Model.Variables.layout.disabledworld
    disabled = false; // EjsS Model.Variables.layout.disabled
    disabled3 = true; // EjsS Model.Variables.layout.disabled3
  });

  _model.addToReset(function() {
    dx = (xmax-xmin)/n; // EjsS Model.Variables.view.dx
    dy = (ymax-ymin)/n; // EjsS Model.Variables.view.dy
    px = new Array(n2); // EjsS Model.Variables.view.px
    (function () {
      var _i0;
      for (_i0=0; _i0<n2; _i0+=1) {  // EjsS Model.Variables.view.px
        px[_i0] = 0;  // EjsS Model.Variables.view.px
      }
    }());
    py = new Array(n2); // EjsS Model.Variables.view.py
    (function () {
      var _i0;
      for (_i0=0; _i0<n2; _i0+=1) {  // EjsS Model.Variables.view.py
        py[_i0] = 0;  // EjsS Model.Variables.view.py
      }
    }());
    clr = new Array(n2); // EjsS Model.Variables.view.clr
    (function () {
      var _i0;
      for (_i0=0; _i0<n2; _i0+=1) {  // EjsS Model.Variables.view.clr
        clr[_i0] = "rgb(255,0,0)";  // EjsS Model.Variables.view.clr
      }
    }());
    gray = "rgb(255,0,0)"; // EjsS Model.Variables.view.gray
    red = "rgb(128,128,128)"; // EjsS Model.Variables.view.red
    iy = 0; // EjsS Model.Variables.view.iy
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

  function rgb(r, g, b){  // > CustomCode.rgb:1
    return "rgb("+r+","+g+","+b+")";  // > CustomCode.rgb:2
  }  // > CustomCode.rgb:3

  function changeOrientation() {  // > CustomCode.changeOrientation:1
  // check platform for Apps  // > CustomCode.changeOrientation:2
  var iOSapp =  (typeof parent.device != 'undefined' && parent.device.platform == "iOS");  // > CustomCode.changeOrientation:3
  var Androidapp = (typeof parent.device != 'undefined' && parent.device.platform == "Android");  // > CustomCode.changeOrientation:4
  // check platform for web browsers  // > CustomCode.changeOrientation:5
  var iOS =/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.changeOrientation:6
  var iPad =/iPad/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.changeOrientation:7
  var iPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.changeOrientation:8
  var Android= /Android|android/i.test(navigator.userAgent);  // > CustomCode.changeOrientation:9
  switch (window.orientation) {  // > CustomCode.changeOrientation:10
    case 0:  // > CustomCode.changeOrientation:11
    case 180:  // > CustomCode.changeOrientation:12
      this.screenOrientation = 'portrait';  // > CustomCode.changeOrientation:13
      if (iOSapp){ // does not seems to work  // > CustomCode.changeOrientation:14
        //   return Math.max(window.screen.width,window.screen.height)*0.9;  // > CustomCode.changeOrientation:15
        return window.screen.height*0.7;  //0.1 for app and 0.1 for nonfullscreenapp    // > CustomCode.changeOrientation:16
        // return window.screen.height;  // > CustomCode.changeOrientation:17
        //  return window.innerHeight;  // > CustomCode.changeOrientation:18
        // return document.documentElement.clientHeight;  // > CustomCode.changeOrientation:19
      }  // > CustomCode.changeOrientation:20
        // > CustomCode.changeOrientation:21
      else {  // > CustomCode.changeOrientation:22
        // return Math.max(window.innerWidth,window.innerHeight)*0.9;  // > CustomCode.changeOrientation:23
        return window.innerHeight*0.8;  // > CustomCode.changeOrientation:24
      }  // > CustomCode.changeOrientation:25
      break;  // > CustomCode.changeOrientation:26
    case 90:  // > CustomCode.changeOrientation:27
    case -90:  // > CustomCode.changeOrientation:28
      this.screenOrientation = 'landscape';  // > CustomCode.changeOrientation:29
      if (iOSapp){ // App  // > CustomCode.changeOrientation:30
        return window.screen.width*0.7;    // > CustomCode.changeOrientation:31
        // return window.screen.height;  // > CustomCode.changeOrientation:32
        //  return window.innerHeight;  // > CustomCode.changeOrientation:33
        //  return document.documentElement.clientHeight;  // > CustomCode.changeOrientation:34
      }  // > CustomCode.changeOrientation:35
        // > CustomCode.changeOrientation:36
      else { // browser Android and PC  // > CustomCode.changeOrientation:37
        // return Math.min(window.innerWidth,window.innerHeight)*0.9;  // > CustomCode.changeOrientation:38
        // alert("browser Android and PC");  // > CustomCode.changeOrientation:39
        return window.innerHeight*0.8;  // > CustomCode.changeOrientation:40
      }  // > CustomCode.changeOrientation:41
      break;  // > CustomCode.changeOrientation:42
    default:  // > CustomCode.changeOrientation:43
      this.screenOrientation = 'unknown';  // > CustomCode.changeOrientation:44
      //       return (iPad)?""+(window.screen.width+window.screen.height)*0.4:((iPhone)?""+window.screen.width:_view._format(window.innerHeight*0.9,"0"));  // > CustomCode.changeOrientation:45
      return window.innerHeight*0.85;  // > CustomCode.changeOrientation:46
  }  // > CustomCode.changeOrientation:47
  }  // > CustomCode.changeOrientation:48

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
  //code reference: http://davidwalsh.name/detect-android  // > CustomCode.fullscreen:28
  function checkAndroid () {  // > CustomCode.fullscreen:29
    var ua = navigator.userAgent.toLowerCase();  // > CustomCode.fullscreen:30
    return ua.indexOf("android") > -1; //&& ua.indexOf("mobile");  // > CustomCode.fullscreen:31
  }  // > CustomCode.fullscreen:32
  function getScreenHeight(){  // > CustomCode.fullscreen:33
    if (_isMobile)  // > CustomCode.fullscreen:34
    {  // > CustomCode.fullscreen:35
      //  // > CustomCode.fullscreen:36
    }  // > CustomCode.fullscreen:37
  }  // > CustomCode.fullscreen:38

  _model.addToInitialization(function() {
    if (!__pagesEnabled["undefined"]) return;
    if (world==undefined){   // > Initialization.undefined:1
      world=true;  // > Initialization.undefined:2
      }  // > Initialization.undefined:3
      if (Width1==undefined){   // > Initialization.undefined:4
      Width1="100%";  // > Initialization.undefined:5
      }  // > Initialization.undefined:6
      if (Width2==undefined){   // > Initialization.undefined:7
      Width2="0%";  // > Initialization.undefined:8
      }  // > Initialization.undefined:9
      if (Width3==undefined){   // > Initialization.undefined:10
      Width3="0%";  // > Initialization.undefined:11
      }  // > Initialization.undefined:12
        // > Initialization.undefined:13
      if (p==undefined){  // > Initialization.undefined:14
        p = 0.034657;  // > Initialization.undefined:15
        lambda= p/dt;  // > Initialization.undefined:16
          // > Initialization.undefined:17
        }  // > Initialization.undefined:18
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    n = ni; //added to initialise to be able to choose n  // > Initialization.Init Page:1
    n2=n*n;  // > Initialization.Init Page:2
    count=n2;  // > Initialization.Init Page:3
    counts = count; //lookang  // > Initialization.Init Page:4
    dx=(xmax-xmin)/n;  // > Initialization.Init Page:5
    dy=(ymax-ymin)/n;  // > Initialization.Init Page:6
    for(var i=0;i<n2;i++){  // > Initialization.Init Page:7
     px[i]=xmin+(i%n) *dx;  // > Initialization.Init Page:8
    // iy=i/n;  // > Initialization.Init Page:9
    iy = parseInt(i/n)  // > Initialization.Init Page:10
    py[i]=ymin+ iy *dy;  // > Initialization.Init Page:11
     clr[i]=gray;  // > Initialization.Init Page:12
    }  // > Initialization.Init Page:13
    for(var i=0;i<n;i++){  // > Initialization.Init Page:14
     for(var j=0;j<n;j++) {  // > Initialization.Init Page:15
      data[i][j]=0;  // > Initialization.Init Page:16
     }  // > Initialization.Init Page:17
    }  // > Initialization.Init Page:18
    //count=n*n;  // > Initialization.Init Page:19
    ratio=1.;  // > Initialization.Init Page:20
    t=0;  // > Initialization.Init Page:21
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["axes"]) return;
    _view.plottingPanel.getAxisX().setPosition([0,0]);  // > Initialization.axes:1
    _view.plottingPanel.getAxisY().setPosition([0,0]);  // > Initialization.axes:2
    _view.plottingPanel2.getAxisX().setPosition([0,0.083]);  // > Initialization.axes:3
    _view.plottingPanel2.getAxisY().setPosition([0.083,0]);  // > Initialization.axes:4
    _view.plottingPanel2.getTitleY().setPosition([0.07,0.5]);  // > Initialization.axes:5
    _view.plottingPanel2.getTitleX().setPosition([0.5,0.07]);  // > Initialization.axes:6
    _view.plottingPaneldcount.getAxisX().setPosition([0,0.09]);  // > Initialization.axes:7
    _view.plottingPaneldcount.getAxisY().setPosition([0.1,0]);  // > Initialization.axes:8
    _view.plottingPaneldcount.getTitleY().setPosition([0.1,0.5]);  // > Initialization.axes:9
    _view.plottingPaneldcount.getTitleX().setPosition([0.5,0.07]);  // > Initialization.axes:10
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["svg"]) return;
    var container = document.createElement('div');  // > Initialization.svg:1
    var svggradient = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>'+  // > Initialization.svg:2
      '  <radialGradient id="mygrandientglint" cx="50%" cy="50%" r="90%" fx="90%" fy="10%">'+  // > Initialization.svg:3
      '    <stop offset="0%" style="stop-color:rgb(255,255,255); stop-opacity:0.5" />'+  // > Initialization.svg:4
      '    <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.5" />'+  // > Initialization.svg:5
      '  </radialGradient>'+  // > Initialization.svg:6
      '</defs></svg>';  // > Initialization.svg:7
    container.innerHTML = svggradient;  // > Initialization.svg:8
    document.body.appendChild(container);  // > Initialization.svg:9
    //"url(#mygrandientglint)"  // > Initialization.svg:10
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page 2"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["Cons Page"]) return;
    //if(_isPlaying()===true) {  // > FixedRelations.Cons Page:1
        // > FixedRelations.Cons Page:2
      if(_model.isPlaying()===true) {  // > FixedRelations.Cons Page:3
       // if(t>0) {  // > FixedRelations.Cons Page:4
        for(var i=0;i<n;i++) {  // > FixedRelations.Cons Page:5
          for(var j=0;j<n;j++) {  // > FixedRelations.Cons Page:6
            if(data[i][j]===0) {  // > FixedRelations.Cons Page:7
              if(Math.random()<p) {  // > FixedRelations.Cons Page:8
                data[i][j]=1;  // > FixedRelations.Cons Page:9
                count=count-1;  // > FixedRelations.Cons Page:10
                clr[i+j*n]=red;  // > FixedRelations.Cons Page:11
              }  // > FixedRelations.Cons Page:12
            }  // > FixedRelations.Cons Page:13
          }  // > FixedRelations.Cons Page:14
        }  // > FixedRelations.Cons Page:15
        if(count<1)_pause();  // > FixedRelations.Cons Page:16
        ratio=count*1.0/n2;  // > FixedRelations.Cons Page:17
      }  // > FixedRelations.Cons Page:18
  });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["FixRel Page"]) return;
    lambda = p/dt;  // > FixedRelations.FixRel Page:1
    halflife = Math.LN2/lambda;  // > FixedRelations.FixRel Page:2
    halflifecount = Math.floor(t/halflife);  // > FixedRelations.FixRel Page:3
    for(var i=0;i<halflifeN;i++){  // > FixedRelations.FixRel Page:4
     halflifeticksx[i] = halflife*(i+1);  // > FixedRelations.FixRel Page:5
     halflifeticksy[i] = n2 * Math.pow(0.5,(i+1));  // > FixedRelations.FixRel Page:6
       }  // > FixedRelations.FixRel Page:7
         // > FixedRelations.FixRel Page:8
       if (count==0){  // > FixedRelations.FixRel Page:9
         _pause();  // > FixedRelations.FixRel Page:10
         text="paused"; //moved from prelim  // > FixedRelations.FixRel Page:11
           // > FixedRelations.FixRel Page:12
         }  // > FixedRelations.FixRel Page:13
  });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["axes"]) return;
    if (_model.isPlaying()===true) { //NEED this for conflict with initialize page values  // > FixedRelations.axes:1
    //_view.plottingPanel.getGrid().setFixedTickY()=(M*y+m*y2)/(M+m);  // > FixedRelations.axes:2
    //_view.plottingPanel.setFixedTickY()=2;  // > FixedRelations.axes:3
    _view.plottingPanel2.getAxisX().setAbsoluteY(_view.plottingPanel2.getGrid().getFixedTickY());  // > FixedRelations.axes:4
    _view.plottingPanel2.getAxisY().setAbsoluteX(_view.plottingPanel2.getGrid().getFixedTickX());  // > FixedRelations.axes:5
    }  // > FixedRelations.axes:6
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
    if (_odeName=="Evol Page 2") return _ODEi_evolution1;
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
    var __solverClass = EJSS_ODE_SOLVERS.euler;
    var __state=[];
    var __ignoreErrors=false;
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf._getOdeVars = function (){ return["t"]};

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
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        // if(_model.isPlaying()===true) {  // > Preliminary code for ODE.Evol Page 2:1
           dcount = 0; // activity reset to zero  // > Preliminary code for ODE.Evol Page 2:2
           if(t>0) {  // > Preliminary code for ODE.Evol Page 2:3
            for(var i=0;i<n;i++) {  // > Preliminary code for ODE.Evol Page 2:4
              for(var j=0;j<n;j++) {  // > Preliminary code for ODE.Evol Page 2:5
                if(data[i][j]===0) {  // > Preliminary code for ODE.Evol Page 2:6
                  if(Math.random()<p) {  // > Preliminary code for ODE.Evol Page 2:7
                    data[i][j]=1;  // > Preliminary code for ODE.Evol Page 2:8
                    count=count-1;  // > Preliminary code for ODE.Evol Page 2:9
                    dcount = dcount+1; // activity  // > Preliminary code for ODE.Evol Page 2:10
                    _view.audio.play();  // > Preliminary code for ODE.Evol Page 2:11
                    clr[i+j*n]=red;  // > Preliminary code for ODE.Evol Page 2:12
                    // > Preliminary code for ODE.Evol Page 2:13
                    // > Preliminary code for ODE.Evol Page 2:14
                  }  // > Preliminary code for ODE.Evol Page 2:15
                }  // > Preliminary code for ODE.Evol Page 2:16
              }  // > Preliminary code for ODE.Evol Page 2:17
            }  // > Preliminary code for ODE.Evol Page 2:18
            loopcount = loopcount+1;  // > Preliminary code for ODE.Evol Page 2:19
           activityx[loopcount] = t;  // > Preliminary code for ODE.Evol Page 2:20
           activityy[loopcount] = dcount;  // > Preliminary code for ODE.Evol Page 2:21
             // > Preliminary code for ODE.Evol Page 2:22
            // > Preliminary code for ODE.Evol Page 2:23
           if(count<1)_pause();  // > Preliminary code for ODE.Evol Page 2:24
          //  text="paused"; // does not work properly moved to fixed  // > Preliminary code for ODE.Evol Page 2:25
          //  alert(text);  // > Preliminary code for ODE.Evol Page 2:26
            ratio=count*1.0/n2;  // > Preliminary code for ODE.Evol Page 2:27
         }  // > Preliminary code for ODE.Evol Page 2:28
      // Compute the rate
        var __cRate=0;
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
        var t = _aState[__cOut++];
      return eval(userCondition);
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
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
    _view = new decaychangeNwee_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.fullscreen.linkProperty("Height",  function() { return Height; }, function(_v) { Height = _v; } ); // HtmlView Page linking property 'Height' for element 'fullscreen'
          _view.fullscreen.linkProperty("Width",  function() { return Width; }, function(_v) { Width = _v; } ); // HtmlView Page linking property 'Width' for element 'fullscreen'
          _view.plottingPanel.linkProperty("Width",  function() { return Width1; }, function(_v) { Width1 = _v; } ); // HtmlView Page linking property 'Width' for element 'plottingPanel'
          _view.plottingPanel.setAction("OnDoubleClick", function(_data,_info) {
  toggleFullScreen();

}); // HtmlView Page setting action 'OnDoubleClick' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("TRMessage",  function() { return print?"":"Two State Nuclear Decay Model"; } ); // HtmlView Page linking property 'TRMessage' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("XTickStep",  function() { return dx; }, function(_v) { dx = _v; } ); // HtmlView Page linking property 'XTickStep' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("YTickStep",  function() { return dy; }, function(_v) { dy = _v; } ); // HtmlView Page linking property 'YTickStep' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("TLMessage",  function() { return print?"":text; } ); // HtmlView Page linking property 'TLMessage' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumY",  function() { return ymax+20; } ); // HtmlView Page linking property 'MaximumY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MaximumX",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'MaximumX' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MinimumX",  function() { return xmin; }, function(_v) { xmin = _v; } ); // HtmlView Page linking property 'MinimumX' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("MinimumY",  function() { return ymin-10; } ); // HtmlView Page linking property 'MinimumY' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("Visibility",  function() { return world; }, function(_v) { world = _v; } ); // HtmlView Page linking property 'Visibility' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("BRMessage",  function() { return print?"":"N₀="+_view._format(counts,"0")+" , N₁="+_view._format(count,"0")+" , N₂="+_view._format(counts-count,"0")+"\n probability = "+p.toFixed(3)+" , T½ ="+halflife.toFixed(1)+ "s"+ ", t = "+t.toFixed(1) + "s"; } ); // HtmlView Page linking property 'BRMessage' for element 'plottingPanel'
          _view.shapeSet.linkProperty("NumberOfElements",  function() { return n2; }, function(_v) { n2 = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'shapeSet'
          _view.shapeSet.linkProperty("FillColor",  function() { return clr; }, function(_v) { clr = _v; } ); // HtmlView Page linking property 'FillColor' for element 'shapeSet'
          _view.shapeSet.linkProperty("SizeX",  function() { return dx; }, function(_v) { dx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'shapeSet'
          _view.shapeSet.linkProperty("X",  function() { return px; }, function(_v) { px = _v; } ); // HtmlView Page linking property 'X' for element 'shapeSet'
          _view.shapeSet.linkProperty("Y",  function() { return py; }, function(_v) { py = _v; } ); // HtmlView Page linking property 'Y' for element 'shapeSet'
          _view.shapeSet.linkProperty("SizeY",  function() { return dy; }, function(_v) { dy = _v; } ); // HtmlView Page linking property 'SizeY' for element 'shapeSet'
          _view.shapeSetglint.linkProperty("NumberOfElements",  function() { return n2; }, function(_v) { n2 = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'shapeSetglint'
          _view.shapeSetglint.linkProperty("SizeX",  function() { return dx; }, function(_v) { dx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'shapeSetglint'
          _view.shapeSetglint.linkProperty("X",  function() { return px; }, function(_v) { px = _v; } ); // HtmlView Page linking property 'X' for element 'shapeSetglint'
          _view.shapeSetglint.linkProperty("Y",  function() { return py; }, function(_v) { py = _v; } ); // HtmlView Page linking property 'Y' for element 'shapeSetglint'
          _view.shapeSetglint.linkProperty("SizeY",  function() { return dy; }, function(_v) { dy = _v; } ); // HtmlView Page linking property 'SizeY' for element 'shapeSetglint'
          _view.plottingPanel2.linkProperty("Width",  function() { return Width2; }, function(_v) { Width2 = _v; } ); // HtmlView Page linking property 'Width' for element 'plottingPanel2'
          _view.plottingPanel2.setAction("OnDoubleClick", function(_data,_info) {
  toggleFullScreen();

}); // HtmlView Page setting action 'OnDoubleClick' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("XAutoStepMin",  function() { return halflife; }, function(_v) { halflife = _v; } ); // HtmlView Page linking property 'XAutoStepMin' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("TRMessage",  function() { return print?"":"λ = "+_view._format(lambda,"0.000"); } ); // HtmlView Page linking property 'TRMessage' for element 'plottingPanel2'
          _view.plottingPanel2.setAction("OnRelease", function(_data,_info) {
  _view.plottingPanel2.getAxisX().setAbsoluteY(_view.plottingPanel2.getGrid().getFixedTickY());
  _view.plottingPanel2.getTitleX().setAbsoluteY(_view.plottingPanel2.getGrid().getFixedTickY());
  _view.plottingPanel2.getAxisY().setAbsoluteX(_view.plottingPanel2.getGrid().getFixedTickX());
  _view.plottingPanel2.getTitleY().setAbsoluteX(_view.plottingPanel2.getGrid().getFixedTickX());
  //_view.plottingPanel2.setProperty("MinimumY",-5);
  //_view.plottingPanel2.setProperty("MinimumX",-1);

}); // HtmlView Page setting action 'OnRelease' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("XTickStep",  function() { return halflife; }, function(_v) { halflife = _v; } ); // HtmlView Page linking property 'XTickStep' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("YTickStep",  function() { return ni; }, function(_v) { ni = _v; } ); // HtmlView Page linking property 'YTickStep' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("TLMessage",  function() { return print?"":"Number of Radioactive atoms versus time"; } ); // HtmlView Page linking property 'TLMessage' for element 'plottingPanel2'
          _view.plottingPanel2.setAction("OnDrag", function(_data,_info) {
  _view.plottingPanel2.getAxisX().setAbsoluteY(_view.plottingPanel2.getGrid().getFixedTickY());
  _view.plottingPanel2.getTitleX().setAbsoluteY(_view.plottingPanel2.getGrid().getFixedTickY());
  _view.plottingPanel2.getAxisY().setAbsoluteX(_view.plottingPanel2.getGrid().getFixedTickX());
  _view.plottingPanel2.getTitleY().setAbsoluteX(_view.plottingPanel2.getGrid().getFixedTickX());
  //_view.plottingPanel2.setProperty("MinimumY",-5);
  //_view.plottingPanel2.setProperty("MinimumX",-1);

}); // HtmlView Page setting action 'OnDrag' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("TitleY",  function() { return "Number of radioactive atoms, N₁ = "+_view._format(count,"0")+" , original number N₀ = "+_view._format(counts,"0"); } ); // HtmlView Page linking property 'TitleY' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("TitleX",  function() { return print?"time(s)":"time = "+_view._format(t,"0.00")+" (s)"; } ); // HtmlView Page linking property 'TitleX' for element 'plottingPanel2'
          _view.plottingPanel2.setAction("OnZoom", function(_data,_info) {
  _view.plottingPanel2.getAxisX().setAbsoluteY(_view.plottingPanel2.getGrid().getFixedTickY());
  _view.plottingPanel2.getTitleX().setAbsoluteY(_view.plottingPanel2.getGrid().getFixedTickY());
  _view.plottingPanel2.getAxisY().setAbsoluteX(_view.plottingPanel2.getGrid().getFixedTickX());
  _view.plottingPanel2.getTitleY().setAbsoluteX(_view.plottingPanel2.getGrid().getFixedTickX());
  //_view.plottingPanel2.setProperty("MinimumY",-5);
  //_view.plottingPanel2.setProperty("MinimumX",-1);
  //_view.plottingPanel.setProperty("MaximumY",0.65);

}); // HtmlView Page setting action 'OnZoom' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("Visibility",  function() { return graph; }, function(_v) { graph = _v; } ); // HtmlView Page linking property 'Visibility' for element 'plottingPanel2'
          _view.plottingPanel2.linkProperty("BRMessage",  function() { return print?"":"t = "+_view._format(t,"0.00")+" s, Half-lives: " + halflifecount.toFixed(0); } ); // HtmlView Page linking property 'BRMessage' for element 'plottingPanel2'
          _view.analyticCurve.linkProperty("FunctionY",  function() { return functionY; }, function(_v) { functionY = _v; } ); // HtmlView Page linking property 'FunctionY' for element 'analyticCurve'
          _view.analyticCurve.linkProperty("Maximum",  function() { return Math.max(t,halflife*10); } ); // HtmlView Page linking property 'Maximum' for element 'analyticCurve'
          _view.trail.linkProperty("LineColor",  function() { return gray; }, function(_v) { gray = _v; } ); // HtmlView Page linking property 'LineColor' for element 'trail'
          _view.trail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail'
          _view.trail.linkProperty("InputY",  function() { return ratio*counts; } ); // HtmlView Page linking property 'InputY' for element 'trail'
          _view.trail2.linkProperty("LineColor",  function() { return red; }, function(_v) { red = _v; } ); // HtmlView Page linking property 'LineColor' for element 'trail2'
          _view.trail2.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'trail2'
          _view.trail2.linkProperty("InputY",  function() { return counts-count; } ); // HtmlView Page linking property 'InputY' for element 'trail2'
          _view.segmentSet.linkProperty("NumberOfElements",  function() { return halflifecount; } ); // HtmlView Page linking property 'NumberOfElements' for element 'segmentSet'
          _view.segmentSet.linkProperty("X",  function() { return halflifeticksx; }, function(_v) { halflifeticksx = _v; } ); // HtmlView Page linking property 'X' for element 'segmentSet'
          _view.segmentSet.linkProperty("Visibility",  function() { return t>halflife; } ); // HtmlView Page linking property 'Visibility' for element 'segmentSet'
          _view.segmentSet.linkProperty("SizeY",  function() { return halflifeticksy; }, function(_v) { halflifeticksy = _v; } ); // HtmlView Page linking property 'SizeY' for element 'segmentSet'
          _view.segmentSet2.linkProperty("NumberOfElements",  function() { return halflifecount; } ); // HtmlView Page linking property 'NumberOfElements' for element 'segmentSet2'
          _view.segmentSet2.linkProperty("SizeX",  function() { return halflifeticksx; }, function(_v) { halflifeticksx = _v; } ); // HtmlView Page linking property 'SizeX' for element 'segmentSet2'
          _view.segmentSet2.linkProperty("Y",  function() { return halflifeticksy; }, function(_v) { halflifeticksy = _v; } ); // HtmlView Page linking property 'Y' for element 'segmentSet2'
          _view.segmentSet2.linkProperty("Visibility",  function() { return t>halflife; } ); // HtmlView Page linking property 'Visibility' for element 'segmentSet2'
          _view.plottingPaneldcount.linkProperty("Width",  function() { return Width3; }, function(_v) { Width3 = _v; } ); // HtmlView Page linking property 'Width' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.setAction("OnDoubleClick", function(_data,_info) {
  toggleFullScreen();

}); // HtmlView Page setting action 'OnDoubleClick' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("XAutoStepMin",  function() { return halflife; }, function(_v) { halflife = _v; } ); // HtmlView Page linking property 'XAutoStepMin' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("TRMessage",  function() { return print?"":" dN = "+_view._format(dcount,"0"); } ); // HtmlView Page linking property 'TRMessage' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("XTickStep",  function() { return halflife; }, function(_v) { halflife = _v; } ); // HtmlView Page linking property 'XTickStep' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("MaximumY",  function() { return Math.max(dcounts,dcount); } ); // HtmlView Page linking property 'MaximumY' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("TitleY",  function() { return "Rate of decay of radioactive atoms, dN = "+_view._format(dcount,"0"); } ); // HtmlView Page linking property 'TitleY' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("TitleX",  function() { return print?"time(s)":"time = "+_view._format(t,"0.00")+" (s)"; } ); // HtmlView Page linking property 'TitleX' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("Visibility",  function() { return graph3; }, function(_v) { graph3 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'plottingPaneldcount'
          _view.plottingPaneldcount.linkProperty("BRMessage",  function() { return print?"":" t = "+_view._format(t,"0.00")+ "s "; } ); // HtmlView Page linking property 'BRMessage' for element 'plottingPaneldcount'
          _view.dNTrail2.linkProperty("Connected",  function() { return dcount>0; } ); // HtmlView Page linking property 'Connected' for element 'dNTrail2'
          _view.dNTrail2.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'dNTrail2'
          _view.dNTrail2.linkProperty("InputY",  function() { return dcount; }, function(_v) { dcount = _v; } ); // HtmlView Page linking property 'InputY' for element 'dNTrail2'
          _view.trace.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'trace'
          _view.trace.linkProperty("InputY",  function() { return dcount; }, function(_v) { dcount = _v; } ); // HtmlView Page linking property 'InputY' for element 'trace'
          _view.activitydots.linkProperty("NumberOfElements",  function() { return activity; }, function(_v) { activity = _v; } ); // HtmlView Page linking property 'NumberOfElements' for element 'activitydots'
          _view.activitydots.linkProperty("X",  function() { return activityx; }, function(_v) { activityx = _v; } ); // HtmlView Page linking property 'X' for element 'activitydots'
          _view.activitydots.linkProperty("Y",  function() { return activityy; }, function(_v) { activityy = _v; } ); // HtmlView Page linking property 'Y' for element 'activitydots'
          _view.analyticCurve2.linkProperty("FunctionY",  function() { return functionY; }, function(_v) { functionY = _v; } ); // HtmlView Page linking property 'FunctionY' for element 'analyticCurve2'
          _view.analyticCurve2.linkProperty("Maximum",  function() { return Math.max(t,halflife*10); } ); // HtmlView Page linking property 'Maximum' for element 'analyticCurve2'
          _view.panel2.linkProperty("Display",  function() { return print?"none":"inline-flex"; } ); // HtmlView Page linking property 'Display' for element 'panel2'
          _view.comboBox.linkProperty("Options",  function() { return ["N₀ =100","N₀ =4","N₀ =9","N₀ =16","N₀ =25","N₀ =36","N₀ =49","N₀ =64","N₀ =81","N₀ =100","N₀ =121","N₀ =144","N₀ =169","N₀ =225","N₀ =289","N₀ =324","N₀ =361","N₀ =400","N₀ =1600","","print"]; } ); // HtmlView Page linking property 'Options' for element 'comboBox'
          _view.comboBox.setAction("OnChange", function(_data,_info) {
  var opts = _view.comboBox.getProperty("SelectedOptions");  // array of options
      var option = (opts.length > 0)? opts[0]:""; // selected option 
  if ( option=="user_defined"){
    
    }
  //print
  else if ( option == "print"){
    print = true;
    }
  //print
  else if ( option=="N₀ =4"){
    ni=2;
    _initialize();
    }
    else if ( option=="N₀ =9"){
    ni=3;
    _initialize();
    }
    else if ( option=="N₀ =16"){
    ni=4;
    _initialize();
    }
    else if ( option=="N₀ =25"){
    ni=5;
    _initialize();
    }
    else if ( option=="N₀ =36"){
    ni=6;
    _initialize();
    }
    else if ( option=="N₀ =49"){
    ni=7;
    _initialize();
    }
    else if ( option=="N₀ =64"){
    ni=8;
    _initialize();
    }
    else if ( option=="N₀ =81"){
    ni=9;
    _initialize();
    }
    else if ( option=="N₀ =100"){
    ni=10;
    _initialize();
    }
    else if ( option=="N₀ =121"){
    ni=11;
    _initialize();
    }
    else if ( option=="N₀ =144"){
    ni=12;
    _initialize();
    }
    else if ( option=="N₀ =169"){
    ni=13;
    _initialize();
    }
    else if ( option=="N₀ =196"){
    ni=14;
    _initialize();
    }
    else if ( option=="N₀ =225"){
    ni=15;
    _initialize();
    }
    else if ( option=="N₀ =256"){
    ni=16;
    _initialize();
    }
    else if ( option=="N₀ =289"){
    ni=17;
    _initialize();
    }
    else if ( option=="N₀ =324"){
    ni=18;
    _initialize();
    }
    else if ( option=="N₀ =361"){
    ni=19;
    _initialize();
    }
    else if ( option=="N₀ =400"){
    ni=20;
    _initialize();
    }
     else if ( option=="N₀ =1600"){
    ni=40;
    _initialize();
    }
  _view.plottingPanel2.setWorldYMin(n2*-0.1);
  _view.plottingPanel2.setWorldYMax(n2*1.1);

}); // HtmlView Page setting action 'OnChange' for element 'comboBox'
          _view.comboBox.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'comboBox'
          _view.worldgraph2.linkProperty("Options",  function() { return ["","T½ =0.1","T½ =0.5","T½ =1.0","T½ =2.0","T½ =3.0","","probability p₁ =1/6","probability p₁ =2/6","probability p₁ =3/6","probability p₁ =4/6","probability p₁ =5/6","probability p₁ =6/6","","both","world","graph only","show model","hide model","world and rate graph","rate graph","","print"]; } ); // HtmlView Page linking property 'Options' for element 'worldgraph2'
          _view.worldgraph2.setAction("OnChange", function(_data,_info) {
  var opts = _view.worldgraph2.getProperty("SelectedOptions");  // array of options
      var option = (opts.length > 0)? opts[0]:""; // selected option 
  if ( option=="world"){
    world=true;
  Width1 = "100%";
  Width2 = "0%";
  Width3 = "0%";
    }
  //print
  else if ( option == "print"){
    print = true;
    }
  //print
    else if ( option=="graph only"){
    world=false;
    graph=true;
  Width1 = "0%";
  Width2 = "100%";
  Width3 = "0%";
    }
   
  else if ( option=="both"){
  world=true;
  graph=true;
  Width1 = "50%";
  Width2 = "50%";
  Width3 = "0%";
  }
  else if ( option=="rate graph"){
    world=false;
    graph3=true;
  Width1 = "0%";
  Width2 = "0%";
  Width3 = "100%";
    }
   
  else if ( option=="world and rate graph"){
  world=true;
  graph3=true;
  Width1 = "50%";
  Width2 = "0%";
  Width3 = "50%";
  }
  if ( option=="user_defined"){
    
    }
  else if ( option=="T½ =0.1"){
    halflife=0.1;
    lambda = Math.LN2/halflife;
  p = lambda*dt;
    }
    else if ( option=="T½ =0.5"){
    halflife=0.5;
    lambda = Math.LN2/halflife;
  p = lambda*dt;
    }
     else if ( option=="T½ =1.0"){
    halflife=1.0;
    lambda = Math.LN2/halflife;
  p = lambda*dt;
    }
     else if ( option=="T½ =2.0"){
    halflife=2.0;
    lambda = Math.LN2/halflife;
  p = lambda*dt;
    }
     else if ( option=="T½ =3.0"){
    halflife=3.0;
    lambda = Math.LN2/halflife;
  p = lambda*dt;
    }
    
    else if ( option=="T₂ ½ =0.1"){
    halflife2=0.1;
    lambda2 = Math.LN2/halflife2;
  p2 = lambda2*dt;
    }
     else if ( option=="T₂ ½ =0.5"){
    halflife2=0.5;
    lambda2 = Math.LN2/halflife2;
  p2 = lambda2*dt;
    }
     else if ( option=="T₂ ½ =1.0"){
    halflife2=1.0;
    lambda2 = Math.LN2/halflife2;
  p2 = lambda2*dt;
    }
     else if ( option=="T₂ ½ =2.0"){
    halflife2=2.0;
    lambda2 = Math.LN2/halflife2;
  p2 = lambda2*dt;
    }
     else if ( option=="T₂ ½ =3.0"){
    halflife2=3.0;
    lambda2 = Math.LN2/halflife2;
  p2 = lambda2*dt;
    }
   
  else if ( option=="probability p₁ =1/6"){
  p = 1/6;
  }
  else if ( option=="probability p₁ =2/6"){
  p = 2/6;
  }
  else if ( option=="probability p₁ =3/6"){
  p = 3/6;
  }
  else if ( option=="probability p₁ =4/6"){
  p = 4/6;
  }
  else if ( option=="probability p₁ =5/6"){
  p = 5/6;
  }
  else if ( option=="probability p₁ =6/6"){
  p = 6/6;
  }
  else if ( option=="probability p₂ =1/6"){
  p2 = 1/6;
  }
  else if ( option=="probability p₂ =2/6"){
  p = 2/6;
  }
  else if ( option=="probability p₂ =3/6"){
  p2 = 3/6;
  }
  else if ( option=="probability p₂ =4/6"){
  p2 = 4/6;
  }
  else if ( option=="probability p₂ =5/6"){
  p2 = 5/6;
  }
  else if ( option=="probability p₂ =6/6"){
  p2 = 6/6;
  }
  else if ( option=="show model"){
  showmodel=true;
  }
  else if ( option=="hide model"){
  showmodel=false;
  }
  lambda = p/dt;
  halflife = Math.LN2/lambda;
  _view.plottingPanel2.setWorldXMax(1.1*(Math.max(t,halflife*10)));
  _view.plottingPanel2.setWorldXMin(-0.1*(Math.max(t,halflife*10)));

}); // HtmlView Page setting action 'OnChange' for element 'worldgraph2'
          _view.worldgraph2.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'worldgraph2'
          _view.playpauseButton2.setAction("OffClick", function(_data,_info) {
  _pause();
  text = "paused";

}); // HtmlView Page setting action 'OffClick' for element 'playpauseButton2'
          _view.playpauseButton2.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'playpauseButton2'
          _view.playpauseButton2.setAction("OnClick", function(_data,_info) {
  _play();
  text = "playing";

}); // HtmlView Page setting action 'OnClick' for element 'playpauseButton2'
          _view.playpauseButton2.linkProperty("Font",  function() { return fontb; }, function(_v) { fontb = _v; } ); // HtmlView Page linking property 'Font' for element 'playpauseButton2'
          _view.stepButton.setAction("OnRelease", function(_data,_info) {
  _step();

}); // HtmlView Page setting action 'OnRelease' for element 'stepButton'
          _view.stepButton.linkProperty("Disabled",  function() { return _isPlaying; } ); // HtmlView Page linking property 'Disabled' for element 'stepButton'
          _view.stepButton.linkProperty("Font",  function() { return fontb; }, function(_v) { fontb = _v; } ); // HtmlView Page linking property 'Font' for element 'stepButton'
          _view.resetButton.setAction("OnRelease", _reset); // HtmlView Page setting action 'OnRelease' for element 'resetButton'
          _view.resetButton.linkProperty("Font",  function() { return fontb; }, function(_v) { fontb = _v; } ); // HtmlView Page linking property 'Font' for element 'resetButton'
          _view.model.linkProperty("Visibility",  function() { return showmodel; }, function(_v) { showmodel = _v; } ); // HtmlView Page linking property 'Visibility' for element 'model'
          _view.model.setAction("OnClick", function(_data,_info) {
  if (inputdropmenu == true) {inputdropmenu = false;}
  else if (inputdropmenu == false) {inputdropmenu = true;}

}); // HtmlView Page setting action 'OnClick' for element 'model'
          _view.model.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'model'
          _view.models.linkProperty("Options",  function() { return ["-100*t+100","1600*cos(t)","0","1600*exp(-0.693/1.0*t)","1600*exp(-log(2)/0.693*t)","0.034657*100*exp(-log(2)/1.00*t)","show me N₁","show me N₂","show me dN"]; } ); // HtmlView Page linking property 'Options' for element 'models'
          _view.models.setAction("OnChange", function(_data,_info) {
  showmodel=true;
  functionY=selectedmodel+"";
  xmodel=_view.fField.evaluate({ t : t, x : xmodel }); 
  if (selectedmodel[0]==="show me N₁"){
  functionY= ""+_view._format(counts,"0")+"*exp(-log(2)/"+_view._format(halflife,"0.00")+"*t)";  
    }
    if (selectedmodel[0]==="show me N₂"){
  functionY= +_view._format(counts,"0")+"-"+_view._format(counts,"0")+"*exp(-log(2)/"+_view._format(halflife,"0.00")+"*t)";  
    }
  if (selectedmodel[0]==="show me dN"){
  functionY= ""+_view._format(p,"0.000000")+"*"+_view._format(counts,"0")+"*exp(-log(2)/"+_view._format(halflife,"0.00")+"*t)";  
    }

}); // HtmlView Page setting action 'OnChange' for element 'models'
          _view.models.linkProperty("Visibility",  function() { return showmodel; }, function(_v) { showmodel = _v; } ); // HtmlView Page linking property 'Visibility' for element 'models'
          _view.models.linkProperty("SelectedOptions",  function() { return selectedmodel; }, function(_v) { selectedmodel = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'models'
          _view.models.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'models'
          _view.models.linkProperty("Display",  function() { return inputdropmenu?"inline-block":"none"; } ); // HtmlView Page linking property 'Display' for element 'models'
          _view.fField.linkProperty("Value",  function() { return functionY; }, function(_v) { functionY = _v; } ); // HtmlView Page linking property 'Value' for element 'fField'
          _view.fField.linkProperty("Visibility",  function() { return showmodel; }, function(_v) { showmodel = _v; } ); // HtmlView Page linking property 'Visibility' for element 'fField'
          _view.fField.linkProperty("Font",  function() { return font; }, function(_v) { font = _v; } ); // HtmlView Page linking property 'Font' for element 'fField'
          _view.fField.linkProperty("Display",  function() { return !inputdropmenu?"inline-block":"none"; } ); // HtmlView Page linking property 'Display' for element 'fField'
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
function decaychangeNwee_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = decaychangeNwee_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);

  _view._addDescriptionPage('Intro Page','./decaychangeNwee_Intro_1.html');

  return _view;
} // end of main function

function decaychangeNwee_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"fullscreen", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'fullscreen'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"panel", _view.fullscreen) // EJsS HtmlView.HtmlView Page: declaration of element 'panel'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'panel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'panel'
      .setProperty("CSS",{   "position" : "absolute",   "top" : "0px",    "margin-left":"0px",    "left":"0%" }) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'panel'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"plottingPanel", _view.panel) // EJsS HtmlView.HtmlView Page: declaration of element 'plottingPanel'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'plottingPanel'
      .setProperty("Gutters",[0,0,0,0]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'plottingPanel'
      .setProperty("XFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'XFixedTick' for element 'plottingPanel'
      .setProperty("YFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'YFixedTick' for element 'plottingPanel'
      .setProperty("XAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'XAutoTicks' for element 'plottingPanel'
      .setProperty("GridXShow",false) // EJsS HtmlView.HtmlView Page: setting property 'GridXShow' for element 'plottingPanel'
      .setProperty("Background","Black") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'plottingPanel'
      .setProperty("Title","radioactive nuclei decay") // EJsS HtmlView.HtmlView Page: setting property 'Title' for element 'plottingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'plottingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'plottingPanel'
      .setProperty("YAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'YAutoTicks' for element 'plottingPanel'
      .setProperty("GridYShow",false) // EJsS HtmlView.HtmlView Page: setting property 'GridYShow' for element 'plottingPanel'
      .setProperty("AutoScaleY",true) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'plottingPanel'
      .setProperty("AutoScaleX",true) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'plottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"shapeSet", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'shapeSet'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'shapeSet'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'shapeSet'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'shapeSet'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"shapeSetglint", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'shapeSetglint'
      .setProperty("FillColor","url(#mygrandientglint)") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'shapeSetglint'
      .setProperty("RelativePosition","SOUTH_WEST") // EJsS HtmlView.HtmlView Page: setting property 'RelativePosition' for element 'shapeSetglint'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'shapeSetglint'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'shapeSetglint'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"plottingPanel2", _view.panel) // EJsS HtmlView.HtmlView Page: declaration of element 'plottingPanel2'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'plottingPanel2'
      .setProperty("Gutters",[0,0,0,0]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'plottingPanel2'
      .setProperty("ShowAreaRectangle",false) // EJsS HtmlView.HtmlView Page: setting property 'ShowAreaRectangle' for element 'plottingPanel2'
      .setProperty("EnabledZooming",true) // EJsS HtmlView.HtmlView Page: setting property 'EnabledZooming' for element 'plottingPanel2'
      .setProperty("YScalePrecision",0) // EJsS HtmlView.HtmlView Page: setting property 'YScalePrecision' for element 'plottingPanel2'
      .setProperty("XFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'XFixedTick' for element 'plottingPanel2'
      .setProperty("AxisYFont","normal normal 1vw") // EJsS HtmlView.HtmlView Page: setting property 'AxisYFont' for element 'plottingPanel2'
      .setProperty("YFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'YFixedTick' for element 'plottingPanel2'
      .setProperty("AllowScalingDragging",true) // EJsS HtmlView.HtmlView Page: setting property 'AllowScalingDragging' for element 'plottingPanel2'
      .setProperty("XAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'XAutoTicks' for element 'plottingPanel2'
      .setProperty("GridXLineColor","Cyan") // EJsS HtmlView.HtmlView Page: setting property 'GridXLineColor' for element 'plottingPanel2'
      .setProperty("TitleYFont","normal normal 1.5vw") // EJsS HtmlView.HtmlView Page: setting property 'TitleYFont' for element 'plottingPanel2'
      .setProperty("TitleXFont","normal normal 1.5vw") // EJsS HtmlView.HtmlView Page: setting property 'TitleXFont' for element 'plottingPanel2'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'plottingPanel2'
      .setProperty("MaximumY",110) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'plottingPanel2'
      .setProperty("MaximumX",10) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'plottingPanel2'
      .setProperty("EnabledDragging","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledDragging' for element 'plottingPanel2'
      .setProperty("YAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'YAutoTicks' for element 'plottingPanel2'
      .setProperty("MinimumX",-2) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'plottingPanel2'
      .setProperty("MinimumY",-10) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'plottingPanel2'
      .setProperty("AxisXFont","normal normal 1vw") // EJsS HtmlView.HtmlView Page: setting property 'AxisXFont' for element 'plottingPanel2'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'plottingPanel2'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'plottingPanel2'
      .setProperty("XScalePrecision",0) // EJsS HtmlView.HtmlView Page: setting property 'XScalePrecision' for element 'plottingPanel2'
      ;

    _view._addElement(EJSS_DRAWING2D.analyticCurve,"analyticCurve", _view.plottingPanel2) // EJsS HtmlView.HtmlView Page: declaration of element 'analyticCurve'
      .setProperty("FunctionX","t") // EJsS HtmlView.HtmlView Page: setting property 'FunctionX' for element 'analyticCurve'
      .setProperty("Minimum",0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'analyticCurve'
      .setProperty("Variable","t") // EJsS HtmlView.HtmlView Page: setting property 'Variable' for element 'analyticCurve'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'analyticCurve'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'analyticCurve'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail", _view.plottingPanel2) // EJsS HtmlView.HtmlView Page: declaration of element 'trail'
      .setProperty("NoRepeat",true) // EJsS HtmlView.HtmlView Page: setting property 'NoRepeat' for element 'trail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail2", _view.plottingPanel2) // EJsS HtmlView.HtmlView Page: declaration of element 'trail2'
      .setProperty("NoRepeat",true) // EJsS HtmlView.HtmlView Page: setting property 'NoRepeat' for element 'trail2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail2'
      ;

    _view._addElement(EJSS_DRAWING2D.segmentSet,"segmentSet", _view.plottingPanel2) // EJsS HtmlView.HtmlView Page: declaration of element 'segmentSet'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'segmentSet'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'segmentSet'
      .setProperty("Attributes",{ "stroke-dasharray":"8 8 8 8" }) // EJsS HtmlView.HtmlView Page: setting property 'Attributes' for element 'segmentSet'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'segmentSet'
      .setProperty("LineWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'segmentSet'
      ;

    _view._addElement(EJSS_DRAWING2D.segmentSet,"segmentSet2", _view.plottingPanel2) // EJsS HtmlView.HtmlView Page: declaration of element 'segmentSet2'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'segmentSet2'
      .setProperty("Attributes",{ "stroke-dasharray":"8 8 8 8" }) // EJsS HtmlView.HtmlView Page: setting property 'Attributes' for element 'segmentSet2'
      .setProperty("X",0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'segmentSet2'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'segmentSet2'
      .setProperty("LineWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'segmentSet2'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"plottingPaneldcount", _view.panel) // EJsS HtmlView.HtmlView Page: declaration of element 'plottingPaneldcount'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'plottingPaneldcount'
      .setProperty("Gutters",[0,0,0,0]) // EJsS HtmlView.HtmlView Page: setting property 'Gutters' for element 'plottingPaneldcount'
      .setProperty("EnabledZooming",true) // EJsS HtmlView.HtmlView Page: setting property 'EnabledZooming' for element 'plottingPaneldcount'
      .setProperty("YScalePrecision",0) // EJsS HtmlView.HtmlView Page: setting property 'YScalePrecision' for element 'plottingPaneldcount'
      .setProperty("XFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'XFixedTick' for element 'plottingPaneldcount'
      .setProperty("AxisYFont","normal normal 1vw") // EJsS HtmlView.HtmlView Page: setting property 'AxisYFont' for element 'plottingPaneldcount'
      .setProperty("YFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'YFixedTick' for element 'plottingPaneldcount'
      .setProperty("XAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'XAutoTicks' for element 'plottingPaneldcount'
      .setProperty("GridXLineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'GridXLineColor' for element 'plottingPaneldcount'
      .setProperty("TitleYFont","normal normal 1.5vw") // EJsS HtmlView.HtmlView Page: setting property 'TitleYFont' for element 'plottingPaneldcount'
      .setProperty("TitleXFont","normal normal 1.5vw") // EJsS HtmlView.HtmlView Page: setting property 'TitleXFont' for element 'plottingPaneldcount'
      .setProperty("Title","Rate of decay of Radioactive atoms versus time") // EJsS HtmlView.HtmlView Page: setting property 'Title' for element 'plottingPaneldcount'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'plottingPaneldcount'
      .setProperty("YTicks",11) // EJsS HtmlView.HtmlView Page: setting property 'YTicks' for element 'plottingPaneldcount'
      .setProperty("MaximumX",20) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'plottingPaneldcount'
      .setProperty("EnabledDragging","ENABLED_ANY") // EJsS HtmlView.HtmlView Page: setting property 'EnabledDragging' for element 'plottingPaneldcount'
      .setProperty("YAutoTicks",false) // EJsS HtmlView.HtmlView Page: setting property 'YAutoTicks' for element 'plottingPaneldcount'
      .setProperty("MinimumX",0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'plottingPaneldcount'
      .setProperty("MinimumY",-1) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'plottingPaneldcount'
      .setProperty("AxisXFont","normal normal 1vw") // EJsS HtmlView.HtmlView Page: setting property 'AxisXFont' for element 'plottingPaneldcount'
      .setProperty("AutoScaleY",true) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'plottingPaneldcount'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'plottingPaneldcount'
      .setProperty("GuttersColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'GuttersColor' for element 'plottingPaneldcount'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"dNTrail2", _view.plottingPaneldcount) // EJsS HtmlView.HtmlView Page: declaration of element 'dNTrail2'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'dNTrail2'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'dNTrail2'
      .setProperty("NoRepeat",true) // EJsS HtmlView.HtmlView Page: setting property 'NoRepeat' for element 'dNTrail2'
      ;

    _view._addElement(EJSS_DRAWING2D.trace,"trace", _view.plottingPaneldcount) // EJsS HtmlView.HtmlView Page: declaration of element 'trace'
      .setProperty("Connected",false) // EJsS HtmlView.HtmlView Page: setting property 'Connected' for element 'trace'
      .setProperty("MarkFillColor","Orange") // EJsS HtmlView.HtmlView Page: setting property 'MarkFillColor' for element 'trace'
      .setProperty("MarkLineColor","Magenta") // EJsS HtmlView.HtmlView Page: setting property 'MarkLineColor' for element 'trace'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'trace'
      .setProperty("NoRepeat",true) // EJsS HtmlView.HtmlView Page: setting property 'NoRepeat' for element 'trace'
      .setProperty("MarkType","AREA") // EJsS HtmlView.HtmlView Page: setting property 'MarkType' for element 'trace'
      ;

    _view._addElement(EJSS_DRAWING2D.shapeSet,"activitydots", _view.plottingPaneldcount) // EJsS HtmlView.HtmlView Page: declaration of element 'activitydots'
      .setProperty("SizeX",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'activitydots'
      .setProperty("ShapeType","ELLIPSE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'activitydots'
      .setProperty("SizeY",5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'activitydots'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'activitydots'
      ;

    _view._addElement(EJSS_DRAWING2D.analyticCurve,"analyticCurve2", _view.plottingPaneldcount) // EJsS HtmlView.HtmlView Page: declaration of element 'analyticCurve2'
      .setProperty("FunctionX","t") // EJsS HtmlView.HtmlView Page: setting property 'FunctionX' for element 'analyticCurve2'
      .setProperty("Minimum",0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'analyticCurve2'
      .setProperty("Variable","t") // EJsS HtmlView.HtmlView Page: setting property 'Variable' for element 'analyticCurve2'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'analyticCurve2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'analyticCurve2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"panel2", _view.fullscreen) // EJsS HtmlView.HtmlView Page: declaration of element 'panel2'
      .setProperty("Height","6vh") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'panel2'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'panel2'
      .setProperty("CSS",{   "position" : "absolute",   "top" : "3%",    "margin-left":"0px",    "left":"0%" }) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'panel2'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox'
      .setProperty("Tooltip","select user_defined and drag the mass") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'comboBox'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"worldgraph2", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'worldgraph2'
      .setProperty("Tooltip","select user_defined and drag the mass") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'worldgraph2'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playpauseButton2", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'playpauseButton2'
      .setProperty("TextOn","►") // EJsS HtmlView.HtmlView Page: setting property 'TextOn' for element 'playpauseButton2'
      .setProperty("TextOff","❚❚") // EJsS HtmlView.HtmlView Page: setting property 'TextOff' for element 'playpauseButton2'
      .setProperty("Tooltip","Play/Pause") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playpauseButton2'
      ;

    _view._addElement(EJSS_INTERFACE.button,"stepButton", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'stepButton'
      .setProperty("Tooltip","Step") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'stepButton'
      .setProperty("Text","❚►") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'stepButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("Tooltip","Reset") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetButton'
      .setProperty("Text","↻") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"model", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'model'
      .setProperty("Background","Green") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'model'
      .setProperty("Tooltip","key in expression like 2*sin(1*t)") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'model'
      .setProperty("Text","your model, N or dN ?=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'model'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"models", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'models'
      .setProperty("Background","Green") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'models'
      .setProperty("Tooltip","select suggested models") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'models'
      ;

    _view._addElement(EJSS_INTERFACE.functionField,"fField", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'fField'
      .setProperty("Width","20vw") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'fField'
      .setProperty("Tooltip","model input field") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'fField'
      ;

    _view._addElement(EJSS_INTERFACE.audio,"audio", _view.panel2) // EJsS HtmlView.HtmlView Page: declaration of element 'audio'
      .setProperty("AudioUrl","./decaychange/1click_0,5s.mp3") // EJsS HtmlView.HtmlView Page: setting property 'AudioUrl' for element 'audio'
      ;

  };

  return _view;
}



      var _model;
      var _scorm;
      window.addEventListener('load',
        function () { 
          _model =  new decaychangeNwee("_topFrame","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_examples/bin/javascript/lib/","file:/F:/Angel%20del%20Pino/Documents/MEGA/Uni/Fisica/TFG/JavaScript_EJS_6.0/workspace/source/JavascriptExamples/");
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
