function select_sky(_sampleAllLayers) {
    var d = new ActionDescriptor();

    d.putBoolean(s2t("sampleAllLayers"), _sampleAllLayers);
    executeAction(s2t("selectSky"), d, DialogModes.NO);
}


// select_sky(false);