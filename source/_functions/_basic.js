doc = app.activeDocument;

function cTID(s) {return app.charIDToTypeID(s)};
function sTID(s) {return app.stringIDToTypeID(s)};

/* saving/restoring preferences */
function prefSave() {
    startDisplayDialogs = app.displayDialogs;
    startRulerUnits = app.preferences.rulerUnits;
}
function prefSet() {
    app.displayDialogs = DialogModes.NO;
    app.preferences.rulerUnits = Units.CM;
}
function prefReset (){
    app.preferences.rulerunits = startRulerUnits;
    if (startDisplayDialogs == DialogModes.ERROR) {
        startDisplayDialogs = DialogModes.NO;
    }
    app.displayDialogs = startDisplayDialogs;
};

function createLayer(_type, _mode, _name, _color, _autoLevel) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putClass(sTID("adjustmentLayer"));
    d.putReference(sTID("null"), r);
    var d2 = new ActionDescriptor();
    d2.putString(sTID("name"), _name);
    d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
    d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
    if(_type == "levels" && _autoLevel) {
        var d3 = new ActionDescriptor();
        d3.putEnumerated(sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault'));
        var l = new ActionList();
        var d4 = new ActionDescriptor();
        var r2 = new ActionReference();
        r2.putEnumerated(sTID('channel'),sTID('channel'),sTID('composite'));
        d4.putReference(sTID('channel'),r2);
        d4.putBoolean(sTID('auto'),true);
        l.putObject(sTID('levelsAdjustment'),d4);
        d3.putList(sTID('adjustment'),l);
        d2.putObject(sTID("type"), sTID(_type), d3);
    }
    else {
        d2.putClass(sTID("type"), sTID(_type));
    }
    d.putObject(sTID("using"), sTID("adjustmentLayer"), d2);
    executeAction(sTID("make"), d,DialogModes.NO);
}

function createColorLayer(_mode, _name, _color, _red, _green, _blue) {
    var desc92 = new ActionDescriptor();
    var ref38 = new ActionReference();
    ref38.putClass(sTID("contentLayer"));
    desc92.putReference(sTID("null"), ref38);
    var desc93 = new ActionDescriptor();
    desc93.putString(sTID("name"), _name);
    desc93.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
    desc93.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
    var desc94 = new ActionDescriptor();
    var desc95 = new ActionDescriptor();
    desc95.putDouble(sTID("red"), _red);
    desc95.putDouble(sTID("green"), _green);
    desc95.putDouble(sTID("blue"), _blue);
    desc94.putObject(sTID("color"), sTID("RGBColor"), desc95);
    desc93.putObject(sTID("type"), sTID("solidColorLayer"), desc94);
    desc92.putObject(sTID("using"), sTID("contentLayer"), desc93);
    executeAction(sTID("make"), desc92, DialogModes.NO);
}


function deleteMask(){
    try{
        var desc17 = new ActionDescriptor();
        var ref13 = new ActionReference();
        ref13.putEnumerated( sTID('channel'), sTID('channel'), sTID('mask') );
        desc17.putReference( sTID('null'), ref13 );
        executeAction( sTID('delete'), desc17, DialogModes.NO );
    }
    catch(e){}
}


function noProfile() {
    // if image has no profile -> assign a Profile
    if (doc.colorProfileType == ColorProfile.NONE)  {
        try{
            var desc3 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated( sTID("document"), sTID("ordinal"), sTID("targetEnum") );
            desc3.putReference( sTID("null"), ref1 );
            desc3.putBoolean( sTID("manage"), true );
            executeAction( sTID("assignProfile"), desc3, DialogModes.ALL );
        }
        catch(e) {}  
    }
}


function createGroup(_foldername) {
    var desc35 = new ActionDescriptor();
    var ref28 = new ActionReference();
    ref28.putClass(sTID("layerSection"));
    desc35.putReference(cTID("null"), ref28);
    var desc36 = new ActionDescriptor();
    desc36.putString(cTID("Nm  "), _foldername);
    desc35.putObject(cTID("Usng"), sTID("layerSection"), desc36);
    executeAction(cTID("Mk  "), desc35, DialogModes.NO);
};


function smartObject() {
    executeAction(stringIDToTypeID("newPlacedLayer"),undefined,DialogModes.NO);
}

function nameLayer(_name) {
    doc.activeLayer.name = _name
}

function selectLayerUp() {
    var desc150 = new ActionDescriptor();
        var ref118 = new ActionReference();
        ref118.putEnumerated( sTID('layer'), sTID('ordinal'), sTID('forwardEnum') );
    desc150.putReference( sTID('null'), ref118 );
    desc150.putBoolean( sTID('makeVisible'), false );
        var list65 = new ActionList();
        list65.putInteger( 108 );
    desc150.putList( sTID('layerID'), list65 );
    executeAction( sTID('select'), desc150, DialogModes.NO );
}