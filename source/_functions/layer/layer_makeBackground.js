function layer_makeBackground() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();

    r.putClass(s2t("backgroundLayer"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("using"), r2);
    executeAction(s2t("make"), d, DialogModes.NO);
}