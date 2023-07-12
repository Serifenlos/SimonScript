function select_motiv() {
    var d = new ActionDescriptor();

    d.putBoolean(s2t("sampleAllLayers"), true);
    executeAction(s2t("autoCutout"), d, DialogModes.NO);
}