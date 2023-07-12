function checkTiefenLichter_create(__value) {
    var startLayer = getLayerName(getActiveLayerIndex());
    createGroup("check " + __value + "", "passThrough", "none", 100, f);
    createColorLayer("Tiefen_check", "normal", "none", 100, "none", 0, 0, 255);
    blendif("current", 0, 0, 0 + __value, 0 + __value);
    createColorLayer("Lichter_check", "normal", "none", 100, "none", 255, 0, 0);
    blendif("current", 255 - __value, 255 - __value, 255, 255)
    gotoLayer("check " + __value + "");
    toogleOpenCloseSet();
    // hide();
    if (layer_checkExistence("nachher")) {
        moveLayer("check " + __value + "", "nachher", "up");
        gotoLayer("check " + __value + "");
        moveLayer3("down", 1);
    } else {
        // move to TOP
        var i = hasBackground() ? 0 : 1;
        while (layer_checkExistence(i)) {
            i++;
        };
        moveLayer("check " + __value + "", parseInt(i - 1), "up");
    }
    gotoLayer(startLayer);
}
