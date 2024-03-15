# READY.jsx

### Startschuss

<button class="btn" data-clipboard-text="startschuss();"></button>
{: .btn_p }

??? "startschuss();"
    ``` js linenums="1"
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
        try {
            if (app.activeDocument.layerSets.getByName("Freisteller")) {
                try {
                    var docPath = app.activeDocument.path;
                    app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
                    app.activeDocument.save();
                } catch (e) {
                    alert(e)
                };
            }
        } catch (e) {
            app.activeDocument.suspendHistory('Freisteller-Gruppe', 'freisteller_createGroup()');
            try {
                var docPath = app.activeDocument.path;
                app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
                app.activeDocument.save();
            } catch (e) {};
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

!!! warning hide "not documented functions"
