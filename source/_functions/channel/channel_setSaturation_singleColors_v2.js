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


function channel_setSaturation_singleColors_v2(_source, __foldername) {

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