function getMaskVisibility_bySelector(e){var t=new ActionReference;return"number"==typeof e?
// by Index
t.putIndex(s2t("layer"),e):"string"==typeof e?layer_checkExistence(e)?
// by Layername
t.putName(s2t("layer"),e):
// by Layername via Regex // first hit
t.putIndex(s2t("layer"),layer_getIDXbyString(e)[0]):void 0===e&&
// by activeLayer
t.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),executeActionGet(t).getBoolean(s2t("userMaskEnabled"))}