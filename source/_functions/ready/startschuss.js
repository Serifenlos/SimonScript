function startschuss() {
    if (debug) {
        time_start()
    };

    indexcolor2rgb();
    noProfile();
    gray2rgb();
    cmyk2rgb();
    sRGB2eciRGB();
    if (getBitDepth() != 8) {
        dialog_bitdepth();
    }

    if (typeof myPsDoc !== 'undefined') {
        setSize("width", myPsDoc.width.value * hScale / 10);
    }

    /* Wozu braucht ich das nochmal? */
    /* Layer Weiss + Group vorher mit moveLayer3("bottom", 1);  ?? */
    /* moveLayer("Weiss", "HG", "down"); moveLayer("vorher", "Weiss", "down"); */
    if (hasBackground() && getActiveLayerIndex() != 0) {
        var temp = doc.activeLayer.name;
        gotoLayer(0);
        nameLayer("HG");
        gotoLayer(temp);
        var temp = "";
    }

    nameLayer("Original");
    smartObject();
    createGroup("vorher", "passThrough", "none", 100, t);
    dublicate("nachher");
    gotoLayer("vorher");
    selectLayer("down", 1);
    nameLayer("vorher Ebene");
    rasterSmartObject();
    toogleOpenCloseSet();
    selectLayer("up", 1);
    
    createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
    moveLayer("Weiss", "Original", "down");

    createGroup("Einstellungen", "passThrough", "none", 100, f);
    createLayer("AutoTonwert", "levels", "normal", "gray", 100, "none", f, t);
    toogleVisibility();
    createLayer("Gradation neutral", "curves", "normal", "gray", 100, "none", f, f);
    DodgeBurn_highmidlow(true);
    selectLayer("up", 1);
    createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100, "", f, f);
    createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100, "", f, f);
    createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100, "", f, f);
    createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100, "", f, f);
    createLayer("Gradation Kontrast", "curves", "normal", "orange", 100, "", f, f);
    createLayer("Dynamik", "vibrance", "normal", "red", 100, "", f, f);
    gotoLayer("Gradation neutral");

    if (debug) {
        time_stop(start)
    };
}