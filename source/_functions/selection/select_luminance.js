function select_luminance() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();

    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
    d.putReference(s2t("to"), r2);
    executeAction(s2t("set"), d, DialogModes.NO);
}