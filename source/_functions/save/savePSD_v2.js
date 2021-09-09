function savePSD_v2(_saveFile, _copy, _maximizeCompatibility, _lowerCase, _layers) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    d2.putBoolean(s2t("maximizeCompatibility"), _maximizeCompatibility);
    d.putObject(s2t("as"), s2t("photoshop35Format"), d2);
    d.putPath(s2t("in"), _saveFile);
    d.putBoolean(s2t("copy"), _copy);
    d.putBoolean(s2t("lowerCase"), _lowerCase);
    d.putBoolean(s2t("layers"), _layers);
    d.putEnumerated(s2t("saveStage"), s2t("saveStageType"), s2t("saveSucceeded"));
    executeAction(s2t("save"), d, DialogModes.NO);
}