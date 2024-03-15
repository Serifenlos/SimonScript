### channel2mask

<button class="btn" data-clipboard-text="channel2mask(_channel_name, _mask_name);"></button>
{: .btn_p }

??? "channel2mask(_channel_name, _mask_name);"
    ``` js linenums="1"
    function channel2mask(_channel_name, _mask_name) {
        var i = 1;
        while (layer_checkExistence(layer_getIDXbyString(_mask_name + " " + i)[0])) {
            i++
        }
        createGroup(_mask_name + " " + i, "passThrough", "none", 100, f);
    
        createMask();
    
        channel_select(_channel_name, false)
        select_all();
        copy();
        channel_select("mask", true);
        paste_into();
        channel_select("RGB", false);
        selection_deselect();
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel2mask.js)

### channel2selection

<button class="btn" data-clipboard-text="channel2selection(_channel_name);"></button>
{: .btn_p }

??? "channel2selection(_channel_name);"
    ``` js linenums="1"
    function channel2selection(_channel_name) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
    
        r.putProperty(s2t("channel"), s2t("selection"));
        d.putReference(s2t("null"), r);
        r2.putName(s2t("channel"), _channel_name);
        d.putReference(s2t("to"), r2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel2selection.js)

### channel_delete

<button class="btn" data-clipboard-text="channel_delete(_name);"></button>
{: .btn_p }

??? "channel_delete(_name);"
    ``` js linenums="1"
    function channel_delete(_name) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putName(s2t("channel"), _name);
        d.putReference(s2t("null"), r);
        try{executeAction(s2t("delete"), d, DialogModes.NO)}
        catch(e){}
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_delete.js)

### channel_name

<button class="btn" data-clipboard-text="channel_name(_name);"></button>
{: .btn_p }

??? "channel_name(_name);"
    ``` js linenums="1"
    function channel_name(_name) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(s2t("null"), r);
        d2.putString(s2t("name"), _name);
        d.putObject(s2t("to"), s2t("channel"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_name.js)

### channel_select

<button class="btn" data-clipboard-text="channel_select(_name, _makeVisible);"></button>
{: .btn_p }

??? "channel_select(_name, _makeVisible);"
    ``` js linenums="1"
    function channel_select(_name, _makeVisible) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        if (_name) {
            if (_name == "red" || _name == "grain" || _name == "blue" || _name == "RGB" || _name == "mask" || _name == "cyan" || _name == "magenta" || _name == "yellow" || _name == "black" || _name == "CMYK" || _name == "lightness" || _name == "a" || _name == "b" || _name == "lab") {
                r.putEnumerated(s2t("channel"), s2t("channel"), s2t(_name));
            } else {
                r.putName(s2t("channel"), _name);
            }
    
            d.putReference(s2t("null"), r);
            d.putBoolean(s2t("makeVisible"), _makeVisible);
            executeAction(s2t("select"), d, DialogModes.NO);
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_select.js)

### channel_setSaturation

<button class="btn" data-clipboard-text="channel_setSaturation(_source, _calculation);"></button>
{: .btn_p }

??? "channel_setSaturation(_source, _calculation);"
    ``` js linenums="1"
    function channel_setSaturation(_source, _calculation) {
    
        var calc_1 = "difference";
        // var _calculation = "lighten";
        // var _calculation = "screen";
    
        // channel_select("RGB", false);
        kanalberechnung("red", f, "grain", f, _source, calc_1, "rg", "RGB");
    
        kanalberechnung("red", f, "blue", f, _source, calc_1, "rb", "RGB");
        kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
        channel_delete("rg");
        channel_delete("rb");
    
        kanalberechnung("grain", f, "red", f, _source, calc_1, "gr", "RGB");
        kanalberechnung("grain", f, "blue", f, _source, calc_1, "gb", "RGB");
        kanalberechnung("gr", f, "gb", f, "this", _calculation, "G", "RGB");
        channel_delete("gr");
        channel_delete("gb");
    
        kanalberechnung("blue", f, "red", f, _source, calc_1, "br", "RGB");
        kanalberechnung("blue", f, "grain", f, _source, calc_1, "bg", "RGB");
        kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
        channel_delete("br");
        channel_delete("bg");
    
        kanalberechnung("R", f, "G", f, "this", _calculation, "RG", "RGB");
        kanalberechnung("RG", f, "B", f, "this", _calculation, "saturation", "RGB");
    
        // kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
        // kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");
    
        channel_delete("R");
        channel_delete("G");
        channel_delete("B");
        channel_delete("RG");
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_setSaturation.js)

### kanalberechnung

<button class="btn" data-clipboard-text="kanalberechnung(_c1, _c1_invert, _c2, _c2_invert, _layer, _calculation, _name, _select);"></button>
{: .btn_p }

??? "kanalberechnung(_c1, _c1_invert, _c2, _c2_invert, _layer, _calculation, _name, _select);"
    ``` js linenums="1"
    function kanalberechnung(_c1, _c1_invert, _c2, _c2_invert, _layer, _calculation, _name, _select) {
    
        // kanalberechnung("red", f, "grain", f, "merged", "difference", "1", "RGB");
        // kanalberechnung("red", f, "grain", f, "Original", "difference", "2", "RGB");
        // kanalberechnung("1", "2", "this", "lighten", "R", "RGB");
        
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var d5 = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
        var r4 = new ActionReference();
    
    
        d.putClass(s2t("new"), s2t("channel"));
        if (_c1 == "red" || _c1 == "grain" || _c1 == "blue" || _c1 == "gray") {
            r.putEnumerated(s2t("channel"), s2t("channel"), s2t(_c1));
        } else {
            r.putName(s2t("channel"), _c1);
        }
    
        if (_layer == "merged") {
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
        } else if (_layer != "this") {
            r.putName(s2t("layer"), _layer);
        }
        d2.putReference(s2t("to"), r);
        d2.putBoolean(s2t("invert"), _c1_invert);
        d2.putEnumerated(s2t("calculation"), s2t("calculationType"), s2t(_calculation));
    
        if (_c2 == "red" || _c2 == "grain" || _c2 == "blue" || _c2 == "gray") {
            r2.putEnumerated(s2t("channel"), s2t("channel"), s2t(_c2));
        } else {
            r2.putName(s2t("channel"), _c2);
        }
    
    
        if (_layer == "merged") {
            r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
        } else if (_layer != "this") {
            r2.putName(s2t("layer"), _layer);
        }
        d2.putReference(s2t("source2"), r2);
        d2.putBoolean(s2t("invertSource2"), _c2_invert);
        d.putObject(s2t("using"), s2t("calculation"), d2);
        executeAction(s2t("make"), d, DialogModes.NO);
    
        channel_name(_name);
        channel_select(_select, false);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/kanalberechnung.js)

### channel2image

<button class="btn" data-clipboard-text="channel2image(_channel_name, _layer_name);"></button>
{: .btn_p }

??? "channel2image(_channel_name, _layer_name);"
    ``` js linenums="1"
    function channel2image(_channel_name, _layer_name) {
        layer_create(_layer_name + " (" + _channel_name + ")", 100, false, "normal");
        bildberechnung(_channel_name, "normal", f, f);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel2image.js)

???+ a
    ```js
    doc.suspendHistory("channel2image", "channel2image("Alpha 1", "channel2image")");
    ```

    ??? b
        * _channel_name `string`
        * _layer_name `string`

### bildberechnung

<button class="btn" data-clipboard-text="bildberechnung(_channel_name, _blendmode, _invert, _preserveTransparency);"></button>
{: .btn_p }

??? "bildberechnung(_channel_name, _blendmode, _invert, _preserveTransparency);"
    ``` js linenums="1"
    function bildberechnung(_channel_name, _blendmode, _invert, _preserveTransparency) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putName(s2t("channel"), _channel_name);
        d2.putReference(s2t("to"), r);
        d2.putBoolean(s2t("invert"), _invert);
        d2.putEnumerated(s2t("calculation"), s2t("calculationType"), s2t(_blendmode));
        d2.putBoolean(s2t("preserveTransparency"), _preserveTransparency);
        d.putObject(s2t("with"), s2t("calculation"), d2);
        try {executeAction(s2t("applyImageEvent"), d, DialogModes.NO)}
        catch(e) {}
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/bildberechnung.js)

???+ a
    ```js
    bildberechnung("Alpha 1", "normal", f, f);
    ```

    ??? b
        * _channel_name `string`
        * _blendmode `string`
        * _invert `boolean`
        * _preserveTransparency `boolean`

### channel_setSaturation_singleColors

<button class="btn" data-clipboard-text="channel_setSaturation_singleColors(_source, _calculation);"></button>
{: .btn_p }

??? "channel_setSaturation_singleColors(_source, _calculation);"
    ``` js linenums="1"
    function channel_setSaturation_singleColors(_source, _calculation) {
        var calc_1 = "subtract";
    
        // channel_select("RGB", false);
        kanalberechnung("red", t, "grain", t, _source, calc_1, "rg", "RGB");
        kanalberechnung("red", t, "blue", t, _source, calc_1, "rb", "RGB");
        kanalberechnung("grain", t, "red", t, _source, calc_1, "gr", "RGB");
        kanalberechnung("grain", t, "blue", t, _source, calc_1, "gb", "RGB");
        kanalberechnung("blue", t, "red", t, _source, calc_1, "br", "RGB");
        kanalberechnung("blue", t, "grain", t, _source, calc_1, "bg", "RGB");
    
        kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
        kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
        kanalberechnung("gb", f, "gr", f, "this", _calculation, "G", "RGB");
    
        kanalberechnung("gb", f, "gr", f, "this", calc_1, "C", "RGB");
        kanalberechnung("br", f, "bg", f, "this", calc_1, "M", "RGB");
        kanalberechnung("rg", f, "rb", f, "this", calc_1, "Y", "RGB");
    
        // kanalberechnung("R", f, "Y", f, "this", _calculation, "RY", "RGB");
        // kanalberechnung("Y", f, "G", f, "this", _calculation, "YG", "RGB");
        // kanalberechnung("G", f, "C", f, "this", _calculation, "GC", "RGB");
        // kanalberechnung("C", f, "B", f, "this", _calculation, "CB", "RGB");
        // kanalberechnung("B", f, "M", f, "this", _calculation, "BM", "RGB");
        // kanalberechnung("R", f, "M", f, "this", _calculation, "RM", "RGB");
    
        kanalberechnung("R", f, "Y", f, "this", _calculation, "RY_temp", "RGB");
        kanalberechnung("RY_temp", f, "RY_temp", f, "this", "colorDodge", "RY", "RGB");
        channel_delete("RY_temp");
    
        kanalberechnung("Y", f, "G", f, "this", _calculation, "YG_temp", "RGB");
        kanalberechnung("YG_temp", f, "YG_temp", f, "this", "colorDodge", "YG", "RGB");
        channel_delete("YG_temp");
    
        kanalberechnung("G", f, "C", f, "this", _calculation, "GC_temp", "RGB");
        kanalberechnung("GC_temp", f, "GC_temp", f, "this", "colorDodge", "GC", "RGB");
        channel_delete("GC_temp");
    
        kanalberechnung("C", f, "B", f, "this", _calculation, "CB_temp", "RGB");
        kanalberechnung("CB_temp", f, "CB_temp", f, "this", "colorDodge", "CB", "RGB");
        channel_delete("CB_temp");
    
        kanalberechnung("B", f, "M", f, "this", _calculation, "BM_temp", "RGB");
        kanalberechnung("BM_temp", f, "BM_temp", f, "this", "colorDodge", "BM", "RGB");
        channel_delete("BM_temp");
    
        kanalberechnung("R", f, "M", f, "this", _calculation, "RM_temp", "RGB");
        kanalberechnung("RM_temp", f, "RM_temp", f, "this", "colorDodge", "RM", "RGB");
        channel_delete("RM_temp");
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_setSaturation_singleColors.js)

### mask_farbmaske_viaSaturation

<button class="btn" data-clipboard-text="mask_farbmaske_viaSaturation(_folder, _toleranz);"></button>
{: .btn_p }

??? "mask_farbmaske_viaSaturation(_folder, _toleranz);"
    ``` js linenums="1"
    function mask_farbmaske_viaSaturation(_folder, _toleranz) {
        createGroup(_folder, "passThrough", "none", 100, f);
        // move to TOP
        with (activeDocument) activeLayer.move(layers[0], ElementPlacement.PLACEBEFORE)
    
        createLayer("Farbe maskieren", "hueSaturation", "difference", "none", 100, "none", f, f);
        createLayer("invert + gradation", "curves", "normal", "none", 100, "none", f, f);
        adjustLayer_curves_set(0, 255, 255, 0);
    
        createLayer("Maske Preview", "colorLookup", "normal", "none", 100, "none", f, f);
        LUT_maske_preview();
    
        gotoLayer("Farbe maskieren");
    
    
        // get Farben
        var color1 = app_getColor("hsb", "vordergrund");
        var color2 = app_getColor("hsb", "hintergrund");
    
    
        // validiere Farben
        if ((color1[1] == 0 || color1[2] == 0) && (color2[1] != 0 && color2[2] != 0)) {
            var color1 = color2;
        } else {
            if (color1[1] == 0 || color1[2] == 0) {
                var color1 = [0, 100, 100];
            }
        }
    
        if (color2[1] == 0 || color2[2] == 0) {
            var color2 = color1;
        }
    
        // sortiere Farben
        var colors = [color1, color2];
        colors.sort(function (a, b) {
            return a[0] - b[0];
        });
        var color1 = colors[0];
        var color2 = colors[1];
    
    
        adjustLayer_sat_set(1, adjustHue(color1[0], -_toleranz), color1[0], color2[0], adjustHue(color2[0], _toleranz), f, f, 100);
    
        app_simulateKeyPress_alt3();
        // app.bringToFront();
        // adjustLayer_sat_eyedropper();
        
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/mask_farbmaske_viaSaturation.js)

### mask_setSaturation_singleColors

<button class="btn" data-clipboard-text="mask_setSaturation_singleColors(__foldername);"></button>
{: .btn_p }

??? "mask_setSaturation_singleColors(__foldername);"
    ``` js linenums="1"
    function mask_setSaturation_singleColors(__foldername) {
    
        function quick_farbfelder(_channel_name, _r, _g, _b) {
            selection_deselect();
            gotoFill();
            channel2selection(_channel_name);
            createColorLayer(_channel_name, "multiply", "none", 100, "xx", _r, _g, _b);
            gotoFill();
        }
    
        channel_setSaturation_singleColors('merged', 'darken');
    
        createGroup(__foldername, "passThrough", "none", 100, f);
        createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
        quick_farbfelder("RM", 255, 0, 127);
        quick_farbfelder("M", 255, 0, 255);
        quick_farbfelder("BM", 127, 0, 255);
        quick_farbfelder("B", 0, 0, 255);
        quick_farbfelder("CB", 0, 127, 255);
        quick_farbfelder("C", 0, 255, 255);
        quick_farbfelder("GC", 0, 255, 127);
        quick_farbfelder("G", 0, 255, 0);
        quick_farbfelder("YG", 127, 255, 0);
        quick_farbfelder("Y", 255, 255, 0);
        quick_farbfelder("RY", 255, 127, 0);
        quick_farbfelder("R", 255, 0, 0);
    
        createLayer("Maske Preview", "colorLookup", "normal", "none", 100, "none", f, f);
        LUT_maske_preview();
        createLayer("Maske Gradation", "curves", "normal", "none", 100, "none", f, f); 
    
    
        channel_delete("rg");
        channel_delete("rb");
        channel_delete("gr");
        channel_delete("gb");
        channel_delete("br");
        channel_delete("bg");
    
        channel_delete("R");
        channel_delete("G");
        channel_delete("B");
        channel_delete("C");
        channel_delete("M");
        channel_delete("Y");
    
        channel_delete("RY");
        channel_delete("YG");
        channel_delete("GC");
        channel_delete("CB");
        channel_delete("BM");
        channel_delete("RM");
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/mask_setSaturation_singleColors.js)

### mask_setSaturation_singleColors_create

<button class="btn" data-clipboard-text="mask_setSaturation_singleColors_create(_foldername, _version);"></button>
{: .btn_p }

??? "mask_setSaturation_singleColors_create(_foldername, _version);"
    ``` js linenums="1"
    function mask_setSaturation_singleColors_create(_foldername, _version) {
        if (!layer_checkExistence(_foldername)) {
            // var startLayer = layer_selectedIDX_get();
            setMeta_2("startID", layer_selectedID_get());
            // time_start();
            if (_version == "v1") {
                selection_loop(function () { mask_setSaturation_singleColors(_foldername) });
            } else if (_version == "v3") {
                selection_loop(function () { mask_farbmaske_viaSaturation(_foldername, 30) });
            } else if (_version == "v2") {
                selection_loop(function () { channel_setSaturation_singleColors_v2('helper_mergeVisibleLayer', _foldername) }); //'merged'
            }
            // time_stop(start);
    
            if (_version != "v3") {
                gotoLayer(_foldername);
                // toogleOpenCloseSet();
                // hide(_foldername);
    
                with (activeDocument) activeLayer.move(layers[0], ElementPlacement.PLACEBEFORE)
                // if (layer_checkExistence("nachher")) {
                //     moveLayer(_foldername, "nachher", "up");
                //     gotoLayer(_foldername);
                //     moveLayer3("down", 1);
                // } else {
                //     // move to TOP
                //     var i = hasBackground() ? 0 : 1;
                //     while (layer_checkExistence(i)) {
                //         i++;
                //     };
                //     moveLayer(_foldername, parseInt(i - 1), "up");
                // }
    
                // layer_selectedIDX_set(startLayer);
                // layer_selectedID_set(getMeta_2("startID"));
                gotoLayer("Maske Gradation");
            // } else {
                // setTimeout(alert("nix"), 1000);
                // setTimeout(adjustLayer_sat_eyedropper, 1000);
                // app.setTimeout = (adjustLayer_sat_eyedropper(), 2000);
                // app.setTimeout = (alert("nix"), 3000);
                // gotoLayer("Farbe maskieren");
                // adjustLayer_sat_eyedropper();
            }
        } else {
            makeVisible("Maske Preview");
            select_luminance();
            layer_delete(_foldername);
            layer_selectedID_set(getMeta_2("startID"));
            delMeta_2("startID");
        }
    }
    
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/mask_setSaturation_singleColors_create.js)

### channel_setSaturation_singleColors_v2

<button class="btn" data-clipboard-text="channel_setSaturation_singleColors_v2(_source, __foldername);"></button>
{: .btn_p }

??? "channel_setSaturation_singleColors_v2(_source, __foldername);"
    ``` js linenums="1"
    function channel_setSaturation_singleColors_v2(_source, __foldername) {
    
        // 21.714 secs
    //********************************* */
    // 11.133 secs
    
    // 255	255
    // 229	247
    // 203	236
    // 178	223
    // 153	204
    // 126	182
    // 101	156
    // 77	127
    // 51	90
    // 26	49
    
        if (!layer_checkExistence(_source)) {
            if (layer_count() > 1) {
                layer_mergeVisible(true);
            } else {
                selectLayers("selectAllLayers");
                layer_copyLayers();
            }
            
            nameLayer(_source);
            // move to TOP
            with (activeDocument) activeLayer.move(layers[0], ElementPlacement.PLACEBEFORE)
            // var i = hasBackground() ? 0 : 1;
            // while (layer_checkExistence(i)) {
            //     i++;
            // };
            // moveLayer(_source, parseInt(i - 1), "up");
        }
    
        // RG = GRi
        // GR = RGi
        // RB = BRi
        // BR = RBi
        // GB = BGi
        // BG = GBi
    
        // var _source = 'merged';
    
    
        kanalberechnung("red", f, "grain", f, _source, "subtract", "RG", "RGB");
        kanalberechnung("red", f, "blue", f, _source, "subtract", "RB", "RGB");
        kanalberechnung("grain", f, "red", f, _source, "subtract", "GR", "RGB");
        kanalberechnung("grain", f, "blue", f, _source, "subtract", "GB", "RGB");
        kanalberechnung("blue", f, "red", f, _source, "subtract", "BR", "RGB");
        kanalberechnung("blue", f, "grain", f, _source, "subtract", "BG", "RGB");
    
        kanalberechnung("GR", f, "BR", f, _source, "darken", "0", "RGB");
        check_enger("GB", "BG", "0");
    
        kanalberechnung("BR", f, "BG", f, _source, "darken", "60", "RGB");
        check_enger("RG", "GR", "60");
    
        kanalberechnung("RG", f, "BG", f, _source, "darken", "120", "RGB");
        check_enger("RB", "BR", "120");
    
        kanalberechnung("RG", f, "RB", f, _source, "darken", "180", "RGB");
        check_enger("GB", "BG", "180");
    
        kanalberechnung("RB", f, "GB", f, _source, "darken", "240", "RGB");
        check_enger("RG", "GR", "240");
    
        kanalberechnung("GR", f, "GB", f, _source, "darken", "300", "RGB");
        check_enger("BR", "RB", "300");
    
        channel_delete("RG");
        channel_delete("RB");
        channel_delete("GR");
        channel_delete("GB");
        channel_delete("BR");
        channel_delete("BG");
        //************************************************************
    
        
        adjustLayer_sat(_source, -15);
        
        kanalberechnung("red", f, "grain", f, _source + " temp", "subtract", "RG", "RGB");
        kanalberechnung("red", f, "blue", f, _source + " temp", "subtract", "RB", "RGB");
        kanalberechnung("grain", f, "red", f, _source + " temp", "subtract", "GR", "RGB");
        kanalberechnung("grain", f, "blue", f, _source + " temp", "subtract", "GB", "RGB");
        kanalberechnung("blue", f, "red", f, _source + " temp", "subtract", "BR", "RGB");
        kanalberechnung("blue", f, "grain", f, _source + " temp", "subtract", "BG", "RGB");
    
    
        kanalberechnung("GR", f, "BR", f, _source + " temp", "darken", "15", "RGB");
        check_enger("GB", "BG", "15");
    
        kanalberechnung("BR", f, "BG", f, _source + " temp", "darken", "75", "RGB");
        check_enger("RG", "GR", "75");
    
        kanalberechnung("RG", f, "BG", f, _source + " temp", "darken", "135", "RGB");
        check_enger("RB", "BR", "135");
    
        kanalberechnung("RG", f, "RB", f, _source + " temp", "darken", "195", "RGB");
        check_enger("GB", "BG", "195");
    
        kanalberechnung("RB", f, "GB", f, _source + " temp", "darken", "255", "RGB");
        check_enger("RG", "GR", "255");
    
        kanalberechnung("GR", f, "GB", f, _source + " temp", "darken", "315", "RGB");
        check_enger("BR", "RB", "315");
        
        layer_delete(_source + " temp")
        
        channel_delete("RG");
        channel_delete("RB");
        channel_delete("GR");
        channel_delete("GB");
        channel_delete("BR");
        channel_delete("BG");
        //************************************************************
    
    
        
        adjustLayer_sat(_source, -30);
        
        kanalberechnung("red", f, "grain", f, _source + " temp", "subtract", "RG", "RGB");
        kanalberechnung("red", f, "blue", f, _source + " temp", "subtract", "RB", "RGB");
        kanalberechnung("grain", f, "red", f, _source + " temp", "subtract", "GR", "RGB");
        kanalberechnung("grain", f, "blue", f, _source + " temp", "subtract", "GB", "RGB");
        kanalberechnung("blue", f, "red", f, _source + " temp", "subtract", "BR", "RGB");
        kanalberechnung("blue", f, "grain", f, _source + " temp", "subtract", "BG", "RGB");
    
    
        kanalberechnung("GR", f, "BR", f, _source + " temp", "darken", "30", "RGB");
        check_enger("GB", "BG", "30");
    
        kanalberechnung("BR", f, "BG", f, _source + " temp", "darken", "90", "RGB");
        check_enger("RG", "GR", "90");
    
        kanalberechnung("RG", f, "BG", f, _source + " temp", "darken", "150", "RGB");
        check_enger("RB", "BR", "150");
    
        kanalberechnung("RG", f, "RB", f, _source + " temp", "darken", "210", "RGB");
        check_enger("GB", "BG", "210");
    
        kanalberechnung("RB", f, "GB", f, _source + " temp", "darken", "270", "RGB");
        check_enger("RG", "GR", "270");
    
        kanalberechnung("GR", f, "GB", f, _source + " temp", "darken", "330", "RGB");
        check_enger("BR", "RB", "330");
    
        layer_delete(_source + " temp")
    
        channel_delete("RG");
        channel_delete("RB");
        channel_delete("GR");
        channel_delete("GB");
        channel_delete("BR");
        channel_delete("BG");
        //************************************************************
    
    
        adjustLayer_sat(_source, -45);
    
        kanalberechnung("red", f, "grain", f, _source + " temp", "subtract", "RG", "RGB");
        kanalberechnung("red", f, "blue", f, _source + " temp", "subtract", "RB", "RGB");
        kanalberechnung("grain", f, "red", f, _source + " temp", "subtract", "GR", "RGB");
        kanalberechnung("grain", f, "blue", f, _source + " temp", "subtract", "GB", "RGB");
        kanalberechnung("blue", f, "red", f, _source + " temp", "subtract", "BR", "RGB");
        kanalberechnung("blue", f, "grain", f, _source + " temp", "subtract", "BG", "RGB");
    
    
        kanalberechnung("GR", f, "BR", f, _source + " temp", "darken", "45", "RGB");
        check_enger("GB", "BG", "45");
    
        kanalberechnung("BR", f, "BG", f, _source + " temp", "darken", "105", "RGB");
        check_enger("RG", "GR", "105");
    
        kanalberechnung("RG", f, "BG", f, _source + " temp", "darken", "165", "RGB");
        check_enger("RB", "BR", "165");
    
        kanalberechnung("RG", f, "RB", f, _source + " temp", "darken", "225", "RGB");
        check_enger("GB", "BG", "225");
    
        kanalberechnung("RB", f, "GB", f, _source + " temp", "darken", "285", "RGB");
        check_enger("RG", "GR", "285");
    
        kanalberechnung("GR", f, "GB", f, _source + " temp", "darken", "345", "RGB");
        check_enger("BR", "RB", "345");
    
        layer_delete(_source + " temp")
        layer_delete("helper_mergeVisibleLayer");
    
        channel_delete("RG");
        channel_delete("RB");
        channel_delete("GR");
        channel_delete("GB");
        channel_delete("BR");
        channel_delete("BG");
    
    
    
    
        createGroup(__foldername, "passThrough", "none", 100, f);
        createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
        quick_farbfelder("345", 255, 0, 63);
        quick_farbfelder("330", 255, 0, 127);
        quick_farbfelder("315", 255, 0, 191);
        quick_farbfelder("300", 255, 0, 255);
        quick_farbfelder("285", 191, 0, 255);
        quick_farbfelder("270", 127, 0, 255);
        quick_farbfelder("255", 63, 0, 255);
        quick_farbfelder("240", 0, 0, 255);
        quick_farbfelder("225", 0, 63, 255);
        quick_farbfelder("210", 0, 127, 255);
        quick_farbfelder("195", 0, 191, 255);
        quick_farbfelder("180", 0, 255, 255);
        quick_farbfelder("165", 0, 255, 191);
        quick_farbfelder("150", 0, 255, 127);
        quick_farbfelder("135", 0, 255, 63);
        quick_farbfelder("120", 0, 255, 0);
        quick_farbfelder("105", 63, 255, 0);
        quick_farbfelder("90", 127, 255, 0);
        quick_farbfelder("75", 191, 255, 0);
        quick_farbfelder("60", 255, 255, 0);
        quick_farbfelder("45", 255, 191, 0);
        quick_farbfelder("30", 255, 127, 0);
        quick_farbfelder("15", 255, 63, 0);
        quick_farbfelder("0", 255, 0, 0);
    
        channel_delete("345");
        channel_delete("330");
        channel_delete("315");
        channel_delete("300");
        channel_delete("285");
        channel_delete("270");
        channel_delete("255");
        channel_delete("240");
        channel_delete("225");
        channel_delete("210");
        channel_delete("195");
        channel_delete("180");
        channel_delete("165");
        channel_delete("150");
        channel_delete("135");
        channel_delete("120");
        channel_delete("105");
        channel_delete("90");
        channel_delete("75");
        channel_delete("60");
        channel_delete("45");
        channel_delete("30");
        channel_delete("15");
        channel_delete("0");
    
        channel_delete("RG");
        channel_delete("RB");
        channel_delete("GR");
        channel_delete("GB");
        channel_delete("BR");
        channel_delete("BG");
    
        createLayer("Maske Preview", "colorLookup", "normal", "none", 100, "none", f, f);
        LUT_maske_preview();
        createLayer("Maske Gradation", "curves", "normal", "none", 100, "none", f, f);
    
    
    
        function quick_farbfelder(_channel_name, _r, _g, _b) {
            selection_deselect();
            gotoFill();
            channel2selection(_channel_name);
            createColorLayer(_channel_name, "multiply", "none", 100, "xx", _r, _g, _b);
            gotoFill();
        }
    
        function check_enger(_channel1, _channel2, _basis) {
            kanalberechnung(_channel1, f, _basis, f, "merged", "subtract", _basis + "-", "RGB");
            kanalberechnung(_channel2, f, _basis, f, "merged", "subtract", "-" + _basis, "RGB");
            channel_delete(_basis);
            kanalberechnung(_basis + "-", f, "-" + _basis, f, "merged", "darken", _basis, "RGB");
            channel_delete(_basis + "-");
            channel_delete("-" + _basis);
        }
    
    
    
        function adjustLayer_sat(__source, _hue) {
            var startID = layer_selectedID_get();
            layer_duplicateLayer(__source, __source + " temp");
            layer_sat_set(false, _hue, 0, 0);
            with (activeDocument) activeLayer.move(layers[0], ElementPlacement.PLACEBEFORE)
            layer_selectedID_set(startID);
        }
    
    
        // =======================================================
        
        function layer_sat_set(colorize, hue, saturation, lightness) {
            var d = new ActionDescriptor();
            var d2 = new ActionDescriptor();
            var l = new ActionList();
    
            d.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
            d.putBoolean(s2t("colorize"), colorize);
            d2.putInteger(s2t("hue"), hue);
            d2.putInteger(s2t("saturation"), saturation);
            d2.putInteger(s2t("lightness"), lightness);
            l.putObject(s2t("hueSatAdjustmentV2"), d2);
            d.putList(s2t("adjustment"), l);
            executeAction(s2t("hueSaturation"), d, DialogModes.NO);
        }
    
    
    
        function layer_duplicateLayer(_input, _name) {
            var d = new ActionDescriptor();
            var r = new ActionReference();
    
            if (typeof _input === "number") {
                // get by Index
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input === "string") {
                if (layer_checkExistence(_input)) {
                    // get by Layername
                    r.putName(s2t("layer"), _input);
                } else {
                    // get by Layername via Regex // first hit
                    var idxArray = layer_getIDXbyString(_input);
                    r.putIndex(s2t("layer"), idxArray[0]);
                }
            } else {
                // get activeLayer
                r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            }
            d.putReference(s2t("null"), r);
            d.putString(s2t("name"), _name);
            executeAction(s2t("duplicate"), d, DialogModes.NO);
        }
    
    
        function layer_count() {
            function getNumberLayers() {
                var ref = new ActionReference();
                ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("NmbL"))
                ref.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
                return executeActionGet(ref).getInteger(charIDToTypeID("NmbL"));
            }
    
            function getLayerType(idx) {
                var ref = new ActionReference();
                ref.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("layerSection"));
                ref.putIndex(charIDToTypeID("Lyr "), idx);
                return typeIDToStringID(executeActionGet(ref).getEnumerationValue(stringIDToTypeID('layerSection')));
            };
            var cnt = getNumberLayers();
            var res = cnt;
            if (activeDocument.layers[activeDocument.layers.length - 1].isBackgroundLayer) {
                var i = 0;
                //comment out line below to exclude background from count
                res++;
            } else {
                var i = 1;
            };
            for (i; i < cnt; i++) {
                var temp = getLayerType(i);
                if (temp == "layerSectionEnd") res--;
                //if(temp == '"layerSectionStart") res--;//uncomment to count just artLayers
            };
            return res;
        };
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_setSaturation_singleColors_v2.js)

!!! warning hide "not documented functions"
