function set_doc_position(x, y) {
    try {
        var r = new ActionReference();
        r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("viewInfo"));
        r.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        var bounds = executeActionGet(r).getObjectValue(stringIDToTypeID("viewInfo")).getObjectValue(stringIDToTypeID("activeView")).getObjectValue(stringIDToTypeID("globalBounds"));
        var b = new Array();
        b[0] = bounds.getUnitDoubleValue(stringIDToTypeID("left"));
        b[1] = bounds.getUnitDoubleValue(stringIDToTypeID("top"));
        b[2] = bounds.getUnitDoubleValue(stringIDToTypeID("right"));
        b[3] = bounds.getUnitDoubleValue(stringIDToTypeID("bottom"));

        var dx = -1.5;
        var dy = -1.5;

        x = (b[2] - b[0]) / 2 - x - dx;
        y = (b[3] - b[1]) / 2 - y - dy;

        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("center"));
        r.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        d.putReference(stringIDToTypeID("null"), r);

        var d1 = new ActionDescriptor();

        d1.putUnitDouble(stringIDToTypeID("horizontal"), stringIDToTypeID("distanceUnit"), x);
        d1.putUnitDouble(stringIDToTypeID("vertical"), stringIDToTypeID("distanceUnit"), y);

        d.putObject(stringIDToTypeID("to"), stringIDToTypeID("center"), d1);
        executeAction(stringIDToTypeID("set"), d, DialogModes.NO);
    } catch(e) {throw(e);};
}