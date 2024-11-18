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

    if (debug) {
        alert('imageDimension' +
            String.fromCharCode(13) + '[0] top_distance: ' + _imageDimension[0] +
            String.fromCharCode(13) + '[1] right_distance: ' + _imageDimension[1] +
            String.fromCharCode(13) + '[2] bottom_distance: ' + _imageDimension[2] +
            String.fromCharCode(13) + '[3] left_distance: ' + _imageDimension[3] +
            String.fromCharCode(13) + '[4] outer_width: ' + _imageDimension[4] +
            String.fromCharCode(13) + '[5] outer_height: ' + _imageDimension[5] +
            String.fromCharCode(13) + '[6] inner_width: ' + _imageDimension[6] +
            String.fromCharCode(13) + '[7] inner_height: ' + _imageDimension[7] +

            String.fromCharCode(13) + '[8] outerTL: ' + _imageDimension[8] +
            String.fromCharCode(13) + '[9] outerTR: ' + _imageDimension[9] +
            String.fromCharCode(13) + '[10] outerBR: ' + _imageDimension[10] +
            String.fromCharCode(13) + '[11] outerBL: ' + _imageDimension[11] +
            String.fromCharCode(13) + '[12] outerTL: ' + _imageDimension[12] +
            String.fromCharCode(13) + '[13] outerTR: ' + _imageDimension[13] +
            String.fromCharCode(13) + '[14] outerBR: ' + _imageDimension[14] +
            String.fromCharCode(13) + '[15] outerBL: ' + _imageDimension[15] +

            String.fromCharCode(13) + '[16] innerTL: ' + _imageDimension[16] +
            String.fromCharCode(13) + '[17] innerTR: ' + _imageDimension[17] +
            String.fromCharCode(13) + '[18] innerBR: ' + _imageDimension[18] +
            String.fromCharCode(13) + '[19] innerBL: ' + _imageDimension[19] +
            String.fromCharCode(13) + '[20] innerTL: ' + _imageDimension[20] +
            String.fromCharCode(13) + '[21] innerTR: ' + _imageDimension[21] +
            String.fromCharCode(13) + '[22] innerBR: ' + _imageDimension[22] +
            String.fromCharCode(13) + '[23] innerBL: ' + _imageDimension[23] +

            String.fromCharCode(13) + '[24] orientation: ' + _imageDimension[24] +

            String.fromCharCode(13) + '[25] distance_topL: ' + _imageDimension[25] +
            String.fromCharCode(13) + '[26] distance_topR: ' + _imageDimension[26] +
            String.fromCharCode(13) + '[27] distance_rightT:' + _imageDimension[27] +
            String.fromCharCode(13) + '[28] distance_rightB:' + _imageDimension[28] +
            String.fromCharCode(13) + '[29] distance_bottomR:' + _imageDimension[29] +
            String.fromCharCode(13) + '[30] distance_bottomL:' + _imageDimension[30] +
            String.fromCharCode(13) + '[31] distance_leftB:' + _imageDimension[31] +
            String.fromCharCode(13) + '[32] distance_leftT:' + _imageDimension[32] +
            String.fromCharCode(13) + '[33] _image.rotationAngle:' + _imageDimension[33] +

            String.fromCharCode(13) + '[34] Druckbogen TL x-Achse: ' + _imageDimension[34] +
            String.fromCharCode(13) + '[35] Druckbogen TL y-Achse:' + _imageDimension[35] +
            String.fromCharCode(13) + '[36] Druckbogen BR x-Achse - Höhe:' + _imageDimension[36] +
            String.fromCharCode(13) + '[37] Druckbogen BR y-Achse - Breite:' + _imageDimension[37] +
            String.fromCharCode(13) + '[38] spreadMoveX:' + _imageDimension[38] +
            String.fromCharCode(13) + '[39] spreadMoveY:' + _imageDimension[39] +
            
            String.fromCharCode(13) + '[40] Breite des Druckbogens:' + _imageDimension[40] +
            String.fromCharCode(13) + '[41] Höhe des Druckbogens:' + _imageDimension[41] +
            String.fromCharCode(13) + '[42] pageMoveX:' + _imageDimension[42] +
            String.fromCharCode(13) + '[43] pageMoveY:' + _imageDimension[43]

        );
    };






    function changePathDetails2(keyOriginType, keyActionMode) {
        var d = new ActionDescriptor();

        d.putInteger(s2t("keyOriginType"), keyOriginType);
        d.putInteger(s2t("keyActionMode"), keyActionMode);
        executeAction(s2t("changePathDetails"), d, DialogModes.NO);
    }



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

    nameLayer("Original");


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

    try {
        if (typeof _imageDimension !== 'undefined') {
            startRulerUnits = app.preferences.rulerUnits;
            app.preferences.rulerUnits = Units.POINTS;
            createGroup("Layout", "passThrough", "none", 100, f);
            layer_shape_create("rectangle", 0, 0, _imageDimension[5] / doc.height.value * 100, _imageDimension[4] / doc.width.value * 100, false, [255, 255, 255], true, [0, 255, 255], 2, "strokeStyleAlignOutside");

            var angle = calculateAngle(_imageDimension[16], _imageDimension[20], _imageDimension[17], _imageDimension[21]) * -1;
            var moveX = (_imageDimension[32] * -1) + _imageDimension[3];
            var moveY = (_imageDimension[25] * -1) + _imageDimension[0];

            if (_imageDimension[24] == 6) var angle = angle + 90;
            if (_imageDimension[24] == 8) var angle = angle - 90;
            if (_imageDimension[33] != 0) var angle = angle - _imageDimension[33];
            // if (debug) {
            //     alert('move' +
            //         String.fromCharCode(13) + 'moveX: ' + moveX +
            //         String.fromCharCode(13) + 'moveY: ' + moveY +
            //         String.fromCharCode(13) + 'angle: ' + angle
            //     );
            // };
            layer_transform("topleft", 0, 0, undefined, undefined, undefined, t, "distanceUnit", angle);
            layer_transform("midcenter", moveX, moveY, undefined, undefined, undefined, t, "distanceUnit", 0);
            // changePathDetails2(3, 1);
            // nameLayer("Beschnitt [" + angle.toFixed(2).replace('.', ',') + "°]")
            // alert("0: " + (angle * 100));
            // Math.round(angle * 100) / 100
            // alert("1: " + (Math.round(angle)));
            // alert("2: " + (Math.round(angle * 100)));
            // alert("3: " + ((Math.round(angle * 100)) / 100));
            var angle_round = (((Math.round(angle * 100)) / 100));
            try { var angle_round = angle_round.replace('.', ',') } catch (e) { }
            nameLayer("Beschnitt [" + angle_round + "°]");

            layer_shape_create("rectangle", 0, 0, _imageDimension[41] / doc.height.value * 100, _imageDimension[40] / doc.width.value * 100, false, [255, 255, 255], true, [255, 0, 255], 2, "strokeStyleAlignOutside");
            layer_transform("topleft", 0, 0, undefined, undefined, undefined, t, "distanceUnit", angle);

            // layer_transform("midcenter",
            //     _imageDimension[37] / -2,
            //     _imageDimension[36] / -2,
            //     undefined, undefined, undefined, t, "distanceUnit", 0);
            // layer_transform("midcenter",
            //     _imageDimension[39] * -1,
            //     _imageDimension[38] * -1,
            //     undefined, undefined, undefined, t, "distanceUnit", 0);
            // layer_transform("midcenter",
            //     (_imageDimension[37] / 2) + _imageDimension[42],
            //     (_imageDimension[36] / 2) + _imageDimension[43],
            //     undefined, undefined, undefined, t, "distanceUnit", 0);

            layer_transform("midcenter",
                (_imageDimension[37] / -2) + (_imageDimension[39] * -1) + ((_imageDimension[37] / 2) + _imageDimension[42]),
                (_imageDimension[36] / -2) + (_imageDimension[38] * -1) + ((_imageDimension[36] / 2) + _imageDimension[43]),
                undefined, undefined, undefined, t, "distanceUnit", 0);


            nameLayer("Ansicht [" + angle_round + "°]");

            toogleOpenCloseSet();
            moveLayer("Layout", "Einstellungen", "up");
            app.preferences.rulerUnits = startRulerUnits;
        }

    } catch (error) {

    }

    // 50,-364.897637793748

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

    function calculateAngle(x1, y1, x2, y2) {
        // Berechne die Differenzen der Koordinaten
        var deltaY = y2 - y1;
        var deltaX = x2 - x1;

        // Berechne den Winkel in Radiant
        var angleInRadians = Math.atan2(deltaY, deltaX);

        // Umrechnung von Radiant in Grad
        var angleInDegrees = angleInRadians * (180 / Math.PI);

        // Gib den Winkel in Grad zurück
        return angleInDegrees;
    }
}