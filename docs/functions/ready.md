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
        DodgeBurn_highlow(true);
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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/startschuss.js)

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
        blendif(0, 0, 0, 255);
        /* createLayer("Dodge ▼", "colorLookup", "normal", "gray", 100, "black", f, f); */
        /* createLayer("Dodge █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f); */
        createLayer("Dodge ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif(0, 0, 0, 255);
        selectParent();
        createGroup("Dodge & Burn △▽", "passThrough", "gray", 100, t);
        /* createLayer("Burn ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
        /* createLayer("Burn ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
        createLayer("Burn △", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_burn();
        blendif(0, 255, 255, 255);
        createGroup("Lichter", "passThrough", "gray", 100, t);
        /* createLayer("Dodge ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
        /* createLayer("Dodge ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
        createLayer("Dodge △", "colorLookup", "normal", "gray", 100, "black", f, f);
        LUT_dodge();
        blendif(0, 255, 255, 255);
        selectParent();
        selectParent();
        if (_collapseAll) {
            toogleOpenCloseSet();
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/DodgeBurn_highlow.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/dodge.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/burn.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/dodgeburn.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_button.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_createGroup.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/ready/freisteller_saveRGB.js)

!!! warning show "not documented functions"
    - freisteller_allHG
