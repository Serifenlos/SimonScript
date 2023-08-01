function select_Farbbereich(_bereich) {
    var d = new ActionDescriptor();

    d.putEnumerated(s2t("colors"), s2t("colors"), s2t(_bereich));
    d.putInteger(s2t("colorModel"), 0);
    executeAction(s2t("colorRange"), d, DialogModes.NO);
}