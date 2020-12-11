function setZoom(_zoom) {
    try {
        if (!_zoom) _zoom = 100;
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("zoom"));
        r.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        d.putReference(stringIDToTypeID("null"), r);
        var d1 = new ActionDescriptor();
        d1.putDouble(stringIDToTypeID("zoom"), _zoom / 100);
        d.putObject(stringIDToTypeID("to"), stringIDToTypeID("zoom"), d1);
        executeAction(stringIDToTypeID("set"), d, DialogModes.NO);
    } catch(e) {throw(e);}
}