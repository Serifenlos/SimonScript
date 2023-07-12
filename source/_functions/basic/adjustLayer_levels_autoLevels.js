function adjustLayer_levels_autoLevels(_algorithmus, _autoNeutrals) {

    /* reset levels */
    adjustLayer_levels_edit(null);

    /* set autoLevels option */
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var l = new ActionList();
    var r = new ActionReference();
    var r2 = new ActionReference();

    r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    d3.putReference(s2t("channel"), r2);
    if (_algorithmus == "autoContrast") {
        d3.putBoolean(s2t("autoContrast"), true);
    }
    if (_algorithmus == "auto") {
        d3.putBoolean(s2t("auto"), true);
    }
    if (_algorithmus == "autoBlackWhite") {
        d3.putBoolean(s2t("autoBlackWhite"), true);
    }
    if (_algorithmus == "autoMachineLearning") {
        d3.putBoolean(s2t("autoMachineLearning"), true);
        d3.putBoolean(s2t("autoFaces"), true);
    }

    if (_autoNeutrals) {
        d3.putBoolean(s2t("autoNeutrals"), _autoNeutrals);
    }

    l.putObject(s2t("levelsAdjustment"), d3);
    d2.putList(s2t("adjustment"), l);
    d.putObject(s2t("to"), s2t("levels"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}