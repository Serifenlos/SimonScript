function gotoLayer(_input) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    if (typeof _input == "number") {
        r.putIndex(charIDToTypeID('Lyr '), _input);
    } else if (typeof _input == "string") {
        r.putName(sTID('layer'), _input);
    }

    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    executeAction(sTID('select'), d, DialogModes.NO);
}