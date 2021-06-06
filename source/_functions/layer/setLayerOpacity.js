function setLayerOpacity(_opacity) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putUnitDouble(s2t("opacity"), s2t("percentUnit"), _opacity);
    d.putObject(s2t("to"), s2t("layer"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}