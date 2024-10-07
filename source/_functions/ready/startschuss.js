function startschuss(_imageDimension, layersOptions_grouped) {
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
    // if (debug) { alert("debug is on") };


    try {
        if (typeof layersOptions_grouped != "undefined" && layersOptions_grouped != null && layersOptions_grouped.length != null && layersOptions_grouped.length > 0 && layersOptions_grouped[0][0]) {

            for (var i = 0; i < layersOptions_grouped.length; i++) {
                var layerOptions = layersOptions_grouped[i];


                if (!hasBackground()) {
                    var layerID = layerOptions[1] += 1;
                } else {
                    var layerID = layerOptions[1];
                }
                var layerName = layerOptions[0];
                var layerNameID = getLayerName(layerID);
                var layerOriginalVisibility = layerOptions[2];
                var layerCurrentVisibility = layerOptions[3];

                if (layerOriginalVisibility != layerCurrentVisibility && layerName == layerNameID) {
                    if (layerCurrentVisibility) {
                        makeVisible(layerID);
                    } else {
                        hide(layerID);
                    }
                }
                
            }
        }
    } catch (e) {
        if (debug) { alert("Error startschuss layerOptions: " + e); }
    }

    try {
        if (typeof myPsDoc !== 'undefined') {
            /* alert("oldWay: " + myPsDoc.width.value * hScale / 100); */
            /* setSize("width", myPsDoc.width.value * hScale / 100, "mm"); */

            /* alert("newWay: " + _imageDimension[6]); */
            setSize("width", _imageDimension[6], "points");
        }
    } catch (e) {
        if (debug) { alert("error startschuss setSize: " + e); }
    }

    try {
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
    } catch (e) {
        if (debug) { alert("error startschuss hasBackground: " + e) }
    }
    try {
        nameLayer("Original");
    } catch (e) {
        if (debung) { alert("error startschuss nameLayer: " + e) }
    }

    try {
        if (typeof _imageDimension !== 'undefined') {
            if (_imageDimension[0] !== 0 || _imageDimension[1] !== 0 || _imageDimension[2] !== 0 || _imageDimension[3] !== 0) {

                if (_imageDimension[3] !== 0 || _imageDimension[0] !== 0) {
                    resizeCanvas(_imageDimension[3], _imageDimension[0], Units.POINTS, AnchorPosition.BOTTOMRIGHT);
                }
                if (_imageDimension[1] !== 0 || _imageDimension[2] !== 0) {
                    resizeCanvas(_imageDimension[1], _imageDimension[2], Units.POINTS, AnchorPosition.TOPLEFT);
                }

                createColorLayer("Anbau", "normal", "none", 100, "none", 128, 128, 128);
                moveLayer3("down", 1);
                selectLayers('selectAllLayers');
            }
        }
    } catch (e) {
        if (debug) alert(alert("error startschuss _imageDimension: " + e))
    }
    selectLayers("selectAllLayers");
    smartObject();
    nameLayer("Original")

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

    function resizeCanvas(_width, _height, _unit, _position) {

        startRulerUnits = app.preferences.rulerUnits;
        app.preferences.rulerUnits = _unit;

        var docWidth = doc.width.value;
        var docHeight = doc.height.value;

        var canvasWidth = docWidth + _width;
        var canvasHeight = docHeight + _height;


        doc.resizeCanvas(canvasWidth, canvasHeight, _position);

        app.preferences.rulerUnits = startRulerUnits;
    }
}