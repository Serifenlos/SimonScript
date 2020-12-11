function checkTransparency_inner() {
    prefSave();
    transp = true;

    var s2t = function (s) {return app.stringIDToTypeID(s);};

    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    var r3 = new ActionReference();

    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    d2.putReference(s2t("to"), r2);
    r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    r3.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    d2.putReference(s2t("source2"), r3);
    d.putObject(s2t("to"), s2t("calculation"), d2);

    try {
        executeAction(s2t("set"), d, DialogModes.NO);
        activeDocument.selection.invert();
        try {
            activeDocument.selection.bounds;
        } catch (e) {
            transp = false;
        }

    } catch (e) {
        transp = false;
    }
    prefReset();
    activeDocument.selection.deselect();

    return transp;

}