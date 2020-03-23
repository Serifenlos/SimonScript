function cTID(s) {return app.charIDToTypeID(s);};
function sTID(s) {return app.stringIDToTypeID(s);};

function createLayer(type, name, color) {
    var desc144 = new ActionDescriptor();
    var ref48 = new ActionReference();
    ref48.putClass(sTID('adjustmentLayer'));
    desc144.putReference(sTID('null'), ref48);
    var desc145 = new ActionDescriptor();
    desc145.putString(sTID('name'), name);
    desc145.putEnumerated(sTID('color'), sTID('color'), sTID(color));
    desc145.putClass(sTID('type'), sTID(type));
    desc144.putObject(sTID('using'), sTID('adjustmentLayer'), desc145);
    executeAction(sTID('make'), desc144,DialogModes.NO);
}



// @codekit-prepend "../../_functions/_basic.js";