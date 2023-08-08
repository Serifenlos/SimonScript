function layer_create(_name, _opacity, _fillWhite, _blendMode) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    //create Layer with multiply blendMode for the option to fill it
    r.putClass(s2t("layer"));
    d.putReference(s2t("null"), r);
    d2.putString(s2t("name"), _name);
    d2.putUnitDouble(s2t("opacity"), s2t("percentUnit"), _opacity);
    d2.putEnumerated(s2t("mode"), s2t("blendMode"), s2t("multiply"));
    d2.putBoolean(s2t("fillNeutral"), _fillWhite);
    d.putObject(s2t("using"), s2t("layer"), d2);
    executeAction(s2t("make"), d, DialogModes.NO);

    //reset the blendMode
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var r2 = new ActionReference();
    r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d3.putReference(s2t("null"), r2);
    d4.putEnumerated(s2t("mode"), s2t("blendMode"), s2t(_blendMode));
    d3.putObject(s2t("to"), s2t("layer"), d4);
    executeAction(s2t("set"), d3, DialogModes.NO);
}