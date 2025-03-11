# READY.jsx

### Startschuss

<button class="btn" data-clipboard-text="startschuss();"></button>
{: .btn_p }

??? "startschuss();"
    ``` js linenums="1"
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
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/startschuss.js)

### Dodge & Burn with Blendif

<button class="btn" data-clipboard-text="DodgeBurn_highlow(_collapseAll);"></button>
{: .btn_p }

??? "DodgeBurn_highlow(_collapseAll);"
    ``` js linenums="1"
    function DodgeBurn_highlow(_collapseAll) {
        createGroup("Tiefen", "passThrough", "gray", 100, f);
        /* createLayer("Burn ▼", "colorLookup", "normal", "gray", 100, "black", f, f); */
        /* createLayer("Burn █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f); */
        createLayer("Burn ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        blendif("current", 0, 0, 0, 255);
        /* createLayer("Dodge ▼", "colorLookup", "normal", "gray", 100, "black", f, f); */
        /* createLayer("Dodge █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f); */
        createLayer("Dodge ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif("current", 0, 0, 0, 255);
        selectParent();
        createGroup("Dodge & Burn △▽", "passThrough", "gray", 100, t);
        /* createLayer("Burn ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
        /* createLayer("Burn ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
        createLayer("Burn △", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        blendif("current", 0, 255, 255, 255);
        createGroup("Lichter", "passThrough", "gray", 100, t);
        /* createLayer("Dodge ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
        /* createLayer("Dodge ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
        createLayer("Dodge △", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif("current", 0, 255, 255, 255);
        selectParent();
        selectParent();
        if (_collapseAll) {
            toogleOpenCloseSet();
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/DodgeBurn_highlow.js)

### Dodge

<button class="btn" data-clipboard-text="dodge();"></button>
{: .btn_p }

??? "dodge();"
    ``` js linenums="1"
    function dodge() {
        createLayer("Dodge", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/dodge.js)

### Burn

<button class="btn" data-clipboard-text="burn();"></button>
{: .btn_p }

??? "burn();"
    ``` js linenums="1"
    function burn() {
        createLayer("Burn", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/burn.js)

### Dodge & Burn

<button class="btn" data-clipboard-text="dodgeburn();"></button>
{: .btn_p }

??? "dodgeburn();"
    ``` js linenums="1"
    function dodgeburn() {
        createGroup("Dodge & Burn", "passThrough", "gray", 100, f);
        createLayer("Burn", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        createLayer("Dodge", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/dodgeburn.js)

### freisteller_button

<button class="btn" data-clipboard-text="freisteller_button();"></button>
{: .btn_p }

??? "freisteller_button();"
    ``` js linenums="1"
    function freisteller_button() {
        var startLayer = layer_selectedIDX_get();
        start_closedSets = [];
        var isWoodwing = false;
        var ssDebug = false;
        if (getMeta_3("isWoodwing")) var isWoodwing = Boolean(getMeta_3("isWoodwing"));
        
        try {
            if (app.activeDocument.layerSets.getByName("Freisteller")) {
                try {
                    if (!isWoodwing) {
                        /* var docPath = app.activeDocument.path; */
                        app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
                        app.activeDocument.save();
                    } else {
                        alert("ist schon als Freisteller angelegt");
                    }
                } catch (e) {
                    alert(e)
                };
            }
        } catch (e) {
            app.activeDocument.suspendHistory('Freisteller-Gruppe', 'freisteller_createGroup()');
            try {
                if (!isWoodwing) {
                    /* var docPath = app.activeDocument.path; */
                    app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
                    app.activeDocument.save();
                } else {
    
                    app.activeDocument.suspendHistory("getClosedSets", "var start_closedSets = getClosedSets()");
                    // undoSteps(1);
                    // historyState_deleteSteps(1);
    
                    if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
                    if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
    
                    // if (getMeta_3("arbeitsdatei_RGB")) var arbeitsdatei_RGB = getMeta_3("arbeitsdatei_RGB");
                    // if (getMeta_3("woodwing_imageID")) var woodwing_imageID = getMeta_3("woodwing_imageID");
                    if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");
    
                    BridgeTalkMessage_openDocID(idDocName, woodwing_file, ssDebug);
    
                    replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
                    replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");
                    app.activeDocument.suspendHistory('Freisteller: 2 Ebenen', 'freisteller_reduce2layers()');
                    saveMultiformat(new File(woodwing_RGB), "psd", t, null, f, t);
                    undoSteps(1);
                    replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
                    replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");
    
                    
                }
            } catch (e) {};
        }
        app.activeDocument.suspendHistory("toogleOpenCloseSet_byArray_loop", "toogleOpenCloseSet_byArray_loop(start_closedSets)");
        layer_selectedIDX_set(startLayer);
    }
    
    function toogleOpenCloseSet_byArray_loop(_array) {
        for (var i = 0; i < _array.length; i++) {
            try {
                gotoLayer(_array[i]);
                myALayerIDX = getActiveLayerIndex();
                myGroupP = app.activeDocument.activeLayer;
                if (!isLayerSet(myALayerIDX)) {
                    myGroupP = app.activeDocument.activeLayer.parent;
                    try {
                        app.activeDocument.activeLayer = myGroupP
                    } catch (err) {
                        return
                    };
                    if (getNbOfChilds() > 1) {
                        if (myGroupP.typename != "Document") {
                            if (isSetOpened1(myGroupP)) {
                                closeGroup(myGroupP)
                            } else {
                                openGroup1(myGroupP)
                            };
                        }
                    }
                } else {
                    if (getNbOfChilds() > 1) {
                        if (isSetOpened1(myGroupP)) {
                            closeGroup(myGroupP)
                        } else {
                            openGroup1(myGroupP)
                        };
                    }
                }
            } catch (e) { alert("toogleOpenCloseSet_byArray_loop: " + e) }
        }
    }
    
    
    function closeDoc(_file) {
        try {
            app.documents.getByName(decodeURI(_file)).close(SaveOptions.DONOTSAVECHANGES);
        }
        catch (e) { if (ssDebug) { alert("closeDoc: " + _file + " :--: " + e) } }
    }
    
    
    function BridgeTalkMessage_openDocID(_idDocName, _woodwing_file, _ssDebug) {
        var bt = new BridgeTalk();
        bt.target = 'indesign';
        bt.body = runID.toSource() + "('" + _idDocName + "','" + _woodwing_file + "','" + _ssDebug + "');";
        bt.onResult = function (resObj) { }
        bt.send(10);
    }
    
    function runID(_idDocName, _woodwing_file, _ssDebug) {
        try {
            if (focusOpenedFile(_idDocName)) {
                var woodwing_file = app.activeDocument.links.itemByName(_woodwing_file);
                woodwing_file.editOriginal();
            } else {
                alert("kein Focus auf der Datei?");
            }
        } catch (e) {
            /* if (_ssDebug) { alert("runID: " + e); } */
        }
    
        return " ";
    
    
        function focusOpenedFile(_fileName) {
            var fileIsOpen = false;
            for (var j = 0; j < app.documents.length; j++) {
                if (app.documents[j].name.indexOf(_fileName) !== -1) {
                    fileIsOpen = true;
                    app.activeDocument = app.documents[j];
                    break;
                }
            }
            return fileIsOpen;
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_button.js)

### freisteller_createGroup

<button class="btn" data-clipboard-text="freisteller_createGroup();"></button>
{: .btn_p }

??? "freisteller_createGroup();"
    ``` js linenums="1"
    function freisteller_createGroup() {
        var startLayer, set, newLayerSetRef;
        var startLayer = layer_selectedIDX_get();
        selectLayers('selectAllLayers');
        createGroup("Freisteller", "passThrough", "none", 100, t);
        try {
            if (isSelectionActive()) {
                maskFromSelection()
            }
        } catch (e) {}
        toogleOpenCloseSet();
        var set = app.activeDocument.layerSets.getByName("Freisteller")
        createColorLayer("Freisteller helper", "normal", "none", 100, "none", 128, 128, 128);
        hide();
        var newLayerSetRef = app.activeDocument.activeLayer;
        newLayerSetRef.move(set, ElementPlacement.PLACEAFTER);
        layer_selectedIDX_set(startLayer);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_createGroup.js)

### freisteller_saveRGB

<button class="btn" data-clipboard-text="freisteller_saveRGB();"></button>
{: .btn_p }

??? "freisteller_saveRGB();"
    ``` js linenums="1"
    function freisteller_saveRGB() {
        var startLayer, startVisibilityHelper, startMaskVisibility, docNameCopy;
        var startLayer = layer_selectedIDX_get();
        var startVisibilityHelper = null;
        gotoLayer("Freisteller");
        if (hasLayerMask()) {
            var startMaskVisibility = getMaskVisibility();
            setMaskVisibility(true);
    
            if (getLayerName(1) == "Freisteller helper") {  //TODO was wenn ich den helper dupliziert habe //hier brauchts einen anderen Checker
                var startVisibilityHelper = isVisibleIDX(1);
                makeVisByIndex(1, false);
            }
            var docNameCopy = app.activeDocument.path + "/" + GetFileNameOnly(app.activeDocument.name) + "-frei";
            // saveFile_PSD(new File(docNameCopy), t, f, f, t, f, f);
            savePSD_v2(new File(docNameCopy), t, t, t, f);
    
            setMaskVisibility(false);
            if (startVisibilityHelper != null) {
                makeVisByIndex(1, startVisibilityHelper);
            }
    
            // app.activeDocument.save();
            setMaskVisibility(startMaskVisibility);
        }
        layer_selectedIDX_set(startLayer);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_saveRGB.js)

### motivmaske

<button class="btn" data-clipboard-text="motivmaske(_kind, _get);"></button>
{: .btn_p }

??? "motivmaske(_kind, _get);"
    ``` js linenums="1"
    function motivmaske(_kind, _get) {
    
        // _kind = 'Motiv' || 'nicht Motiv'
        // _get = 'Selection' || 'Folder'
        var startIDXs = layer_selectedIDX_get();
        cancel = false;
    
        selection_loop(function () { select_motiv() });
    
        if (!cancel) {
            if (_get == "Selection") {
                layer_selectedIDX_set(startIDXs);
                if (_kind == "nicht Motiv") {
                    select_invert();
                }
            } else {
                gotoLayer(startIDXs[startIDXs.length - 1])
                selection2mask(_kind);
                if (_kind == "nicht Motiv") {
                    gotoMask();
                    invert();
                    gotoFill();
                }
            }
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/motivmaske.js)

### himmelmaske

<button class="btn" data-clipboard-text="himmelmaske(_kind, _get);"></button>
{: .btn_p }

??? "himmelmaske(_kind, _get);"
    ``` js linenums="1"
    function himmelmaske(_kind, _get) {
    
        // _kind = 'Himmel' || 'nicht Himmel'
        // _get = 'Selection' || 'Folder'
    
    
        var startIDXs = layer_selectedIDX_get();
        cancel = false;
    
        selection_loop(function () { select_sky(false) });
    
    
        if (!cancel) {
            if (_get == "Selection") {
                layer_selectedIDX_set(startIDXs);
                if (_kind == "nicht Himmel") {
                    select_invert();
                }
            } else {
                gotoLayer(startIDXs[startIDXs.length - 1])
                selection2mask(_kind);
                if (_kind == "nicht Himmel") {
                    gotoMask();
                    invert();
                    gotoFill();
                }
            }
        }
    }
    
    
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/himmelmaske.js)

### DodgeBurn_highmidlow

<button class="btn" data-clipboard-text="DodgeBurn_highmidlow(_collapseAll);"></button>
{: .btn_p }

??? "DodgeBurn_highmidlow(_collapseAll);"
    ``` js linenums="1"
    function DodgeBurn_highmidlow(_collapseAll) {
        createGroup("Tiefen", "passThrough", "gray", 100, f);
        createLayer("Burn ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        blendif("current", 0, 0, 0, 255);
        createLayer("Dodge ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif("current", 0, 0, 0, 255);
        selectParent();
        createGroup("Dodge & Burn △◊▽", "passThrough", "gray", 100, t);
        
        createLayer("Burn ⬨", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        blendif("current", 20, 202, 109, 240);
        createGroup("Mitten", "passThrough", "gray", 100, t);
        createLayer("Dodge ⬨", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif("current", 20, 202, 109, 240);
        selectParent();
        selectParent();
        
        createLayer("Burn △", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        blendif("current", 0, 255, 255, 255);
        createGroup("Lichter", "passThrough", "gray", 100, t);
        createLayer("Dodge △", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif("current", 0, 255, 255, 255);
        selectParent();
        selectParent();
        
        if (_collapseAll) {
            toogleOpenCloseSet();
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/DodgeBurn_highmidlow.js)

### dodgeburn_mid

<button class="btn" data-clipboard-text="dodgeburn_mid();"></button>
{: .btn_p }

??? "dodgeburn_mid();"
    ``` js linenums="1"
    function dodgeburn_mid() {
        createGroup("Dodge & Burn ⬨", "passThrough", "gray", 100, f);
        createLayer("Burn ⬨", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        blendif("current", 20, 202, 109, 240);
        createLayer("Dodge ⬨", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif("current", 20, 202, 109, 240);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/dodgeburn_mid.js)

### dodgeburn_toggle

<button class="btn" data-clipboard-text="dodgeburn_toggle();"></button>
{: .btn_p }

??? "dodgeburn_toggle();"
    ``` js linenums="1"
    function dodgeburn_toggle() {
        try {
            var thisLayer = doc.activeLayer;
            var thisLayerIDX = getActiveLayerIndex();
    
            if (thisLayer.kind == LayerKind.COLORLOOKUP) {
                if (/burn/i.test(thisLayer.name)) {
                    selectLayer("up", 1);
                    if (!/dodge/i.test(doc.activeLayer.name)) {
                        gotoLayer(thisLayerIDX);
                        selectLayer("down", 1);
                        if (!/dodge/i.test(doc.activeLayer.name)) {
                            gotoLayer(thisLayerIDX);
                        }
                    }
    
                } else if (/dodge/i.test(thisLayer.name)) {
                    selectLayer("down", 1);
                    if (!/burn/i.test(doc.activeLayer.name)) {
                        gotoLayer(thisLayerIDX);
                        selectLayer("up", 1);
                        if (!/burn/i.test(doc.activeLayer.name)) {
                            gotoLayer(thisLayerIDX);
                        }
                    }
                }
            }
    
        } catch (e) {}
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/dodgeburn_toggle.js)

### freisteller_allHG

<button class="btn" data-clipboard-text="freisteller_allHG();"></button>
{: .btn_p }

??? "freisteller_allHG();"
    ``` js linenums="1"
    function freisteller_allHG() {
        var firstDoc = app.activeDocument;
        var color = app.foregroundColor;
        var h = color.hsb.hue;
        var s = color.hsb.saturation;
        var b = color.hsb.brightness;
        for (var i = 0; i < app.documents.length; i++) {
            app.activeDocument = app.documents[i];
            var doc = app.activeDocument;
            try {
                if (app.activeDocument.layers.getByName("Freisteller helper")) {
                    try {
                        var currentLayer = layer_selectedIDX_get();
                        gotoLayer("Freisteller helper");
    
                        if (layer_getSolidFillColor()[0] == app_getForegroundColor()[0]) {
                            if (layer_getSolidFillColor()[1] == app_getForegroundColor()[1]) {
                                if (layer_getSolidFillColor()[2] == app_getForegroundColor()[2]) {
                                    if (isVisible()) {
                                        hide();
                                    } else {
                                        makeVisible();
                                    }
                                }
                            }
                        } else {
                            layer_solidColorHSB_change(h, s, b);
                        }
                        layer_selectedIDX_set(currentLayer);
                    } catch (e) {};
                }
            } catch (e) {}
        };
        app.activeDocument = firstDoc;
    }
    
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_allHG.js)

### tiefenmaske

<button class="btn" data-clipboard-text="tiefenmaske(_merge);"></button>
{: .btn_p }

??? "tiefenmaske(_merge);"
    ``` js linenums="1"
    function tiefenmaske(_merge, _kind, _get) {
        // _merge = true || false
        // _kind = 'Tiefe' || 'nicht Tiefe'
        // _get = 'Selection' || 'Folder'
    
        var startIDXs = layer_selectedIDX_get();
        cancel = false;
    
        if (_merge) {
            layer_mergeVisible(_merge);
        } else {
    
            if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT" || doc.activeLayer.kind == "LayerKind.NORMAL") {
    
                layer_copyLayers(); //Ebenen kopieren (Apfel J)
                if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
                    rasterSmartObject();
                }
                if (layer_selectedIDX_get().length > 1) {
                    layer_mergeLayers(); //auf eine Ebene reduzieren (Apfel E)
                }
            } else {
                alert("Abruch\n Eine Tiefenmakse von dieser Ebene kann nciht erstellt werden.");
                return;
            }
        }
    
        nameLayer("helper__depthMask_image");
    
        // move to TOP
        var i = hasBackground() ? 0 : 1;
        while (layer_checkExistence(i)) {
            i++;
        };
        moveLayer("helper__depthMask_image", parseInt(i - 1), "up");
        gotoLayer("helper__depthMask_image");
        // }
    
        selection_loop(function () {
            neural_depthmap2();
            // neural_depthmap();
        });
    
        nameLayer("layer__depthMask_map");
        select_luminance();
    
        layer_delete();
        gotoLayer("helper__depthMask_image");
        layer_delete();
    
    
        if (!cancel) {
            if (_get == "Selection") {
                layer_selectedIDX_set(startIDXs);
                if (_kind == "nicht Tiefe") {
                    select_invert();
                }
            } else {
                gotoLayer(startIDXs[startIDXs.length - 1])
                selection2mask(_kind);
                if (_kind == "nicht Tiefe") {
                    gotoMask();
                    invert();
                    gotoFill();
                }
            }
        }
    }
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/tiefenmaske.js)

### tiefenmaske_part1

<button class="btn" data-clipboard-text="tiefenmakse_part1(_merge);"></button>
{: .btn_p }

??? "tiefenmakse_part1(_merge);"
    ``` js linenums="1"
    function tiefenmakse_part1(_merge) {
        var startIDXs = layer_selectedIDX_get();
    
    
        if (_merge || layer_selectedIDX_get().length > 1) {
            if (_merge) {
                layer_mergeVisible(_merge);
            } else {
                layer_copyLayers(); //Ebenen kopieren (Apfel J)
                layer_mergeLayers(); //auf eine Ebene reduzieren (Apfel E)
            }
    
            nameLayer("helper__depthMask_image");
    
            // move to TOP
            var i = hasBackground() ? 0 : 1;
            while (layer_checkExistence(i)) {
                i++;
            };
            moveLayer("helper__depthMask_image", parseInt(i - 1), "up");
            gotoLayer("helper__depthMask_image");
    
        } else {
            if (layer_checkExistence(layer_getIDXbyString("Original")[0])) {
                // alert("Ori existiert")
                gotoLayer("Original");
            } else {
                gotoLayer(layer_selectedIDX_get()[layer_selectedIDX_get().length - 1])
            }
    
            while (doc.activeLayer.kind != LayerKind.NORMAL) {
                gotoLayer(getActiveLayerIndex() - 1)
            };
    
            if (doc.activeLayer.kind != LayerKind.SmartObject) {
                executeAction(sTID('copyToLayer'), undefined, DialogModes.NO);
                nameLayer("helper__depthMask_image");
            }
        }
    }
    
    
    
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/tiefenmaske_part1.js)

### tiefenmaske_part2

<button class="btn" data-clipboard-text="tiefenmakse_part2(_merge);"></button>
{: .btn_p }

??? "tiefenmakse_part2(_merge);"
    ``` js linenums="1"
    function tiefenmakse_part2(_merge) {
        nameLayer("layer__depthMask_map");
        select_luminance();
    
        layer_delete();
        gotoLayer("helper__depthMask_image");
        layer_delete();
        createGroup("Tiefe", "passThrough", "none", 100, f);
    
        maskFromSelection();
    
        if (layer_checkExistence(layer_getIDXbyString("Dodge & Burn △◊▽")[0])) {
            moveLayer("Tiefe", "Dodge & Burn △◊▽", "up");
        }
        
        gotoLayer("Tiefe");
        
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/tiefenmaske_part2.js)

### freisteller_deFrei

<button class="btn" data-clipboard-text="freisteller_deFrei();"></button>
{: .btn_p }

??? "freisteller_deFrei();"
    ``` js linenums="1"
    function freisteller_deFrei() {
    
        try {
            if (app.activeDocument.layerSets.getByName("Freisteller")) {
                var startLayerID = layer_selectedID_get();
    
                try {
                    var ssDebug = false;
                    var isWoodwing = false;
                    if (getMeta_3("isWoodwing")) var isWoodwing = Boolean(getMeta_3("isWoodwing"));
    
                    // DELETE the layers
                    try {
                        gotoLayer("Freisteller");
                        ungroup();
                        gotoLayer("Freisteller helper");
                        deleteActiveLayer();
                    } catch (e) { }
    
                    if (!isWoodwing) {
                        // DELETE the file
                        var docPath = new Folder(doc.path);
                        var docNameOnly = GetFileNameOnly(doc.name);
                        var docFileExtension_re = /(?:\.([^.]+))?$/;
                        var docFileExtension = docFileExtension_re.exec(doc.name)[1];
                        var docFile_frei = new File(docPath + "/" + docNameOnly + "-frei." + docFileExtension);
                        if (docFile_frei.exists) {
                            docFile_frei.remove();
                        }
                    } else {
                        if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
                        if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
                        if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");
                        BridgeTalkMessage_openDocID(idDocName, woodwing_file, ssDebug);
                        replaceMeta_3_suffix("woodwing_file", "psd", "jpg");
                        replaceMeta_3_suffix("woodwing_RGB", "psd", "jpg");
    
                        saveMultiformat(new File(woodwing_RGB), "jpg", t, RZ_qualityJPG, f, f);
                    }
    
                }
                catch (e) { alert(e) }
    
                layer_selectedID_set(startLayerID);
            }
        }
        catch (e) {
            alert("Abbruch!\nkeine Ebene names 'Freisteller' gefunden\n" + e);
            return false;
        }
    }
    
    
    
    function BridgeTalkMessage_openDocID(_idDocName, _woodwing_file, _ssDebug) {
        var bt = new BridgeTalk();
        bt.target = 'indesign';
        bt.body = runID.toSource() + "('" + _idDocName + "','" + _woodwing_file + "','" + _ssDebug + "');";
        bt.onResult = function (resObj) { }
        bt.send(10);
    }
    
    function runID(_idDocName, _woodwing_file, _ssDebug) {
        try {
            if (focusOpenedFile(_idDocName)) {
                var woodwing_file = app.activeDocument.links.itemByName(_woodwing_file);
                woodwing_file.editOriginal();
            } else {
                alert("kein Focus auf der Datei?");
            }
        } catch (e) {
            /* if (_ssDebug) { alert("runID: " + e); } */
        }
    
        return " ";
    
    
        function focusOpenedFile(_fileName) {
            var fileIsOpen = false;
            for (var j = 0; j < app.documents.length; j++) {
                if (app.documents[j].name.indexOf(_fileName) !== -1) {
                    fileIsOpen = true;
                    app.activeDocument = app.documents[j];
                    break;
                }
            }
            return fileIsOpen;
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_deFrei.js)

### freisteller_reduce2layers

<button class="btn" data-clipboard-text="freisteller_reduce2layers();"></button>
{: .btn_p }

??? "freisteller_reduce2layers();"
    ``` js linenums="1"
    function freisteller_reduce2layers() {
        try {
            if (doc.layers.getByName("Freisteller helper")) {
                hide("Freisteller helper");
            }
        } catch (e) { }
        try {
            selectLayers("selectAllLayers");
            selectLayerBySelector("Freisteller", "remove");
            layer_mergeLayers();
    
            var checkTransparency_layer = checkTransparency_inner(); 
            if(checkTransparency_layer) {
                moveLayer3("down", 1);
                var id_layer = layer_selectedID_get();
            } else {
                layer_makeBackground();
            }
            
            dublicate("frei");
            copypaste_LayerFX("Freisteller", "frei");
    
            if(checkTransparency_layer) {
                createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
                moveLayer3("back", 1);
                for (var j = 0; j < id_layer.length; j++) {
                    selectLayerByID(id_layer[j], "add");
                }
                layer_mergeLayers();
                layer_makeBackground();
            }
    
            gotoLayer("Freisteller");
            fixMask(getActiveLayerIndex(), 1);
            var startMaskVisibility = getMaskVisibility();
            loadSelectionOfMask();
            gotoLayer("frei");
            try {
                if (isSelectionActive()) {
                    maskFromSelection();
                }
            } catch (e) { }
            layer_delete("Freisteller");
    
            if (startMaskVisibility) {
                makeVisible("frei");
                hide(0);
                gotoLayer("frei");
            } else {
                makeVisible(0);
                hide("frei");
                gotoLayer(0);
            }
        } catch (e) {
            alert("Error freisteller_reduce2layers: \n" + e);
        }
    };
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_reduce2layers.js)

