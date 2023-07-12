function selection_deselect() {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    d.putEnumerated(s2t("to"), s2t("ordinal"), s2t("none"));
    executeAction(s2t("set"), d, DialogModes.NO);
}