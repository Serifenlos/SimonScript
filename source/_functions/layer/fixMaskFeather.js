function fixMaskFeather(_feather) {
    var d = new ActionDescriptor();
    d.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _feather);
    executeAction(s2t("gaussianBlur"), d, DialogModes.NO);
}