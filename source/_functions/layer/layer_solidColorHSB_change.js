function layer_solidColorHSB_change(_h, _s, _b) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("contentLayer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);

    d3.putUnitDouble(s2t('hue'), s2t('angleUnit'), _h);
    d3.putDouble(s2t('saturation'), _s);
    d3.putDouble(s2t('brightness'), _b);
    d2.putObject(s2t('color'), s2t('HSBColorClass'), d3);

    d.putObject(s2t("to"), s2t("solidColorLayer"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}