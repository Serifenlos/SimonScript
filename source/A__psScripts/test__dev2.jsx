


///////// HIER /////////// AUSGECHALTET WEGEN DEM NEUES MACBOOK - und noch kein UXP
// $.evalFile("/Users/simon/Library/Application\ Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx");
///////// HIER /////////


//include "/Users/simon/Arbeit/__temp/json2.js";

//@include "./assets/json2.js";

//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview_v2.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/selection.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/channel.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/neural_depthmap.jsx";









//Command Option Shift E
// function mergeVisible() {
//     var idmergeVisible = stringIDToTypeID("mergeVisible");
//     var desc4 = new ActionDescriptor();
//     var idduplicate = stringIDToTypeID("duplicate");
//     desc4.putBoolean(idduplicate, true);
//     executeAction(idmergeVisible, desc4, DialogModes.NO);
// }




// function mergeVisible(duplicate) {
//     var d = new ActionDescriptor();
//     d.putBoolean(s2t("duplicate"), duplicate);
//     executeAction(s2t("mergeVisible"), d, DialogModes.NO);
// }






// doc.suspendHistory("TiefenMaske Teil1", "tiefenmakse_part1(true)");

// mergeVisible(true);
// run(false);

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


// TODO in die functions
// Apfel + Alt + 2
// function select_luminance() {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     var r2 = new ActionReference();

//     r.putProperty(s2t("channel"), s2t("selection"));
//     d.putReference(s2t("null"), r);
//     r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
//     d.putReference(s2t("to"), r2);
//     executeAction(s2t("set"), d, DialogModes.NO);
// }

// function layer_delete() {
//     var d = new ActionDescriptor();
//     // var l = new ActionList();
//     var r = new ActionReference();

//     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//     d.putReference(s2t("null"), r);
//     // l.putInteger(20);
//     // d.putList(s2t("layerID"), l);
//     executeAction(s2t("delete"), d, DialogModes.NO);
// }







// alert("alert vom test_dev")
// nameLayer("layer__depthMask_map");
// select_luminance();

// layer_delete();
// gotoLayer("helper__depthMask_image");
// layer_delete();
// createGroup("Tiefe", "passThrough", "none", 100, f); 

// maskFromSelection();


// moveLayer("Tiefe", "Dodge & Burn △◊▽", "up"); 

// alert(doc.activeLayer.id);




// alert(layer_selectedID_get());











//*************************************
//*************************************
//*************************************




// outOfGamut outOfGamut
// radius red
// yellows yellow
// graininess green
// cyans cyan
// blues blue
// magenta magenta

function quick_farbbereich(_bereich, _farbe, _r, _g, _b) {
    selection_deselect();
    gotoFill();
    select_Farbbereich(_bereich);
    // createLayer(_farbe, "curves", "normal", "gray", 100, "xx", f,f);
    createColorLayer(_farbe, "multiply", "none", 0, "xx", _r, _g, _b);
    gotoFill();
}

// quick_farbbereich("radius", "red", 255, 0, 0)
// quick_farbbereich("yellows", "yellow", 255,255,0)
// quick_farbbereich("graininess", "green", 0,255,0)
// quick_farbbereich("cyans", "cyan", 0,255,255)
// quick_farbbereich("blues", "blue", 0,0,255)
// quick_farbbereich("magenta", "magenta", 255,0,255)






// channel_setSaturationXX('merged', 'lighten')

function channel_setSaturationXX(_source, _calculation) {

    var calc_1 = "difference";
    // var _calculation = "lighten";
    // var _calculation = "screen";

    // channel_select("RGB", false);
    kanalberechnung("red", f, "grain", f, _source, calc_1, "rg", "RGB");
    kanalberechnung("red", f, "blue", f, _source, calc_1, "rb", "RGB");
    kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
    // channel_delete("rg");
    // channel_delete("rb");

    // kanalberechnung("grain", f, "red", f, _source, calc_1, "gr", "RGB");
    kanalberechnung("grain", f, "blue", f, _source, calc_1, "gb", "RGB");
    kanalberechnung("rg", f, "gb", f, "this", _calculation, "G", "RGB");
    // channel_delete("gr");
    // channel_delete("gb");

    // kanalberechnung("blue", f, "red", f, _source, calc_1, "br", "RGB");
    // kanalberechnung("blue", f, "grain", f, _source, calc_1, "bg", "RGB");
    kanalberechnung("rb", f, "gb", f, "this", _calculation, "B", "RGB");
    // channel_delete("br");
    // channel_delete("bg");

    kanalberechnung("R", f, "G", f, "this", _calculation, "RG", "RGB");
    kanalberechnung("RG", f, "B", f, "this", _calculation, "saturation", "RGB");

    // kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
    // kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");

    // channel_delete("R");
    // channel_delete("G");
    // channel_delete("B");
    // channel_delete("RG");
}

// channel_setSaturation_2('merged', 'lighten')
// channel_setSaturation_2('merged', 'multiply')
function channel_setSaturation_2(_source, _calculation) {

    var calc_1 = "subtract";
    // var _calculation = "lighten";
    // var _calculation = "screen";

    // channel_select("RGB", false);
    kanalberechnung("red", t, "grain", t, _source, calc_1, "rg", "RGB");
    kanalberechnung("red", t, "blue", t, _source, calc_1, "rb", "RGB");
    kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
    // channel_delete("rg");
    // channel_delete("rb");

    kanalberechnung("grain", t, "red", t, _source, calc_1, "gr", "RGB");
    kanalberechnung("grain", t, "blue", t, _source, calc_1, "gb", "RGB");
    kanalberechnung("gr", f, "gb", f, "this", _calculation, "G", "RGB");
    // channel_delete("gr");
    // channel_delete("gb");

    kanalberechnung("blue", t, "red", t, _source, calc_1, "br", "RGB");
    kanalberechnung("blue", t, "grain", t, _source, calc_1, "bg", "RGB");
    kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
    // channel_delete("br");
    // channel_delete("bg");

    kanalberechnung("R", f, "G", f, "this", _calculation, "RG", "RGB");
    kanalberechnung("RG", f, "B", f, "this", _calculation, "saturation", "RGB");

    // kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
    // kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");

    // channel_delete("R");
    // channel_delete("G");
    // channel_delete("B");
    // channel_delete("RG");
}


// channel_setSaturation_3('merged', 'darken');

// function channel_setSaturation_singleColors(_source, _calculation) {
//     var calc_1 = "subtract";

//     // channel_select("RGB", false);
//     kanalberechnung("red", t, "grain", t, _source, calc_1, "rg", "RGB");
//     kanalberechnung("red", t, "blue", t, _source, calc_1, "rb", "RGB");
//     kanalberechnung("grain", t, "red", t, _source, calc_1, "gr", "RGB");
//     kanalberechnung("grain", t, "blue", t, _source, calc_1, "gb", "RGB");
//     kanalberechnung("blue", t, "red", t, _source, calc_1, "br", "RGB");
//     kanalberechnung("blue", t, "grain", t, _source, calc_1, "bg", "RGB");

//     kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
//     kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
//     kanalberechnung("gb", f, "gr", f, "this", _calculation, "G", "RGB");

//     kanalberechnung("gb", f, "gr", f, "this", calc_1, "C", "RGB");
//     kanalberechnung("br", f, "bg", f, "this", calc_1, "M", "RGB");
//     kanalberechnung("rg", f, "rb", f, "this", calc_1, "Y", "RGB");

//     kanalberechnung("R", f, "Y", f, "this", _calculation, "RY", "RGB");
//     kanalberechnung("Y", f, "G", f, "this", _calculation, "YG", "RGB");
//     kanalberechnung("G", f, "C", f, "this", _calculation, "GC", "RGB");
//     kanalberechnung("C", f, "B", f, "this", _calculation, "CB", "RGB");
//     kanalberechnung("B", f, "M", f, "this", _calculation, "BM", "RGB");
// }






// function mask_setSaturation_singleColors(__foldername) {

//     function quick_farbfelder(_channel_name, _r, _g, _b) {
//         selection_deselect();
//         gotoFill();
//         channel2selection(_channel_name);
//         createColorLayer(_channel_name, "multiply", "none", 100, "xx", _r, _g, _b);
//         gotoFill();
//     }

//     channel_setSaturation_singleColors('merged', 'darken');

//     createGroup(__foldername, "passThrough", "none", 100, f);
//     createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
//     quick_farbfelder("M", 255, 0, 255);
//     quick_farbfelder("BM", 127, 0, 255);
//     quick_farbfelder("B", 0, 0, 255);
//     quick_farbfelder("CB", 0, 127, 255);
//     quick_farbfelder("C", 0, 255, 255);
//     quick_farbfelder("GC", 0, 255, 127);
//     quick_farbfelder("G", 0, 255, 0);
//     quick_farbfelder("YG", 127, 255, 0);
//     quick_farbfelder("Y", 255, 255, 0);
//     quick_farbfelder("RY", 255, 127, 0);
//     quick_farbfelder("R", 255, 0, 0);


//     channel_delete("rg");
//     channel_delete("rb");
//     channel_delete("gr");
//     channel_delete("gb");
//     channel_delete("br");
//     channel_delete("bg");

//     channel_delete("R");
//     channel_delete("G");
//     channel_delete("B");
//     channel_delete("C");
//     channel_delete("M");
//     channel_delete("Y");

//     channel_delete("RY");
//     channel_delete("YG");
//     channel_delete("GC");
//     channel_delete("CB");
//     channel_delete("BM");
// }

// doc.suspendHistory("mask_buntFarben", "mask_buntFarben()");
// doc.suspendHistory("[helper] Buntfarben", "mask_setSaturation_singleColors_create('[helper] Buntfarben')");

// quick_farbbereich("radius", "red", 255, 0, 0)
// quick_farbbereich("yellows", "yellow", 255,255,0)
// quick_farbbereich("graininess", "green", 0,255,0)
// quick_farbbereich("cyans", "cyan", 0,255,255)
// quick_farbbereich("blues", "blue", 0,0,255)
// quick_farbbereich("magenta", "magenta", 255,0,255)



// function mask_setSaturation_singleColors_create(_foldername) {
//     if (!layer_checkExistence(_foldername)) {
//         var startLayer = layer_selectedIDX_get();
//         mask_setSaturation_singleColors(_foldername);
//         gotoLayer(_foldername);
//         toogleOpenCloseSet();
//         hide(_foldername);
//         if (layer_checkExistence("nachher")) {
//             moveLayer(_foldername, "nachher", "up");
//             gotoLayer(_foldername);
//             moveLayer3("down", 1);
//         } else {
//             // move to TOP
//             var i = hasBackground() ? 0 : 1;
//             while (layer_checkExistence(i)) {
//                 i++;
//             };
//             moveLayer(_foldername, parseInt(i - 1), "up");
//         }
//         layer_selectedIDX_set(startLayer);
//     } else {
//         layer_delete(_foldername);
//     }
// }




// function editXMP_2(_namespace, _prefix) {
//     if (ExternalObject.AdobeXMPScript == undefined) {
//         ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
//     }
//     xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
//     customNamespace2 = _namespace ? customNamespace2 : "http://ns.simonadrian.de/1.0";
//     customPrefix2 = _prefix ? customPrefix2 : "simonscript:";
//     XMPMeta.registerNamespace(customNamespace2, customPrefix2);
// }

// function setMeta_2(_key, _value) {
//     editXMP_2();

//     // deleteProperty
//     if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
//         xmpMeta.deleteProperty(customNamespace2, _key);
//     }

//     // setProperty
//     xmpMeta.setProperty(customNamespace2, _key, _value);

//     // Fix the xmpMeta
//     app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
// }

// function getMeta_2(_key) {
//     editXMP_2();

//     if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
//         var value = xmpMeta.getProperty(customNamespace2, _key);
//     }

//     if (typeof value !== 'undefined') {
//         return value;
//     }
// }

// function delMeta_2(_key) {
//     editXMP_2();

//     // deleteProperty
//     if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
//         xmpMeta.deleteProperty(customNamespace2, _key);
//     }

//     // Fix the xmpMeta
//     app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
// }


function run() {
    setMeta_2("startID", layer_selectedID_get());

    createLayer("AutoTonwert", "levels", "normal", "gray", 80, "black", f, f);
    layer_selectedID_set(getMeta_2("startID"));
    delMeta_2("startID");
}


function RemoveAlphaChannels() {
    if (app.documents.length == 0) {
        return;
    }

    var doc = app.activeDocument;

    var channels = doc.channels;
    var alphas = [];
    for (var i = 0; i < channels.length; i++) {
        var channel = channels[i];
        if (channel.kind == ChannelType.COMPONENT) {
            continue;
        }
        alphas.push(channel);
    }
    while (alphas.length) {
        var channel = alphas.pop();
        channel.remove();
    }
};


// run()

// doc.suspendHistory("channel2image", "channel2image('(RG 60 sub) (GR 60 sub) darken', 'channel2image')"); 

// check('merged', 'darken', 'subtract');
// check('merged', 'lighten', 'difference');
// check2('merged', 'lighten', 'subtract');


// gotoLayer(0)
// check3('merged');
// gotoLayer(0)
// check4('merged');
// gotoLayer(0)
// check5('merged');
// gotoLayer(0)
// check6('merged');

// Ebenen kopieren (Apfel J)
function layer_copyLayers_v2() {
    executeAction(sTID('copyToLayer'), undefined, DialogModes.NO);
}

// layer_copyLayers()

// =======================================================
// layer_duplicateLayer(false, "dong");

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


// alert(layer_count())



//*************************************
//*************************************
//*************************************

// namederfunktion()

function namederfunktion() {

    // =======================================================
    const workingProfile_get_init = workingProfile_get("Gray");
    const docProfile = doc.colorProfileName;
    alert(workingProfile_get_init);
    alert(docProfile);

    gamma_L = [
        "eciRGB v2",
        "eciRGB v2 ICCv4"
    ]

    gamma_18 = [
        "sRGB IEC61966-2.1",
        "ProPhoto RGB",
        "Display P3",
        "image P3",
        "Apple RGB",
        "ColorMatch RGB"

    ]

    gamma_22 = [
        "Adobe RGB (1998)",
        "BestRGB",
        "Beta RGB",
        "DonRGB4.icm",
        "MaxRGB",
        "Russell RGB"

    ]



    if (array_contains(gamma_18, docProfile)) {
        alert("Gamma 1.8");
        if (workingProfile_get_init != "Gray Gamma 1.8") {
            alert("change it");
            workingProfile_set("Gray", "Gray Gamma 1.8");
            alert("gechanged: " + workingProfile_get("Gray"));
        }
    } else {
        if (array_contains(gamma_22, docProfile)) {
            alert("Gamma 2.2");
            if (workingProfile_get_init != "Gray Gamma 2.2") {
                alert("change it");
                workingProfile_set("Gray", "Gray Gamma 2.2");
                alert("gechanged: " + workingProfile_get("Gray"));
            }
        } else {
            if (array_contains(gamma_L, docProfile)) {
                alert("Gamma L");
                workingProfile_set("Gray", "Gray-elle-V4-labl.icc");
                alert("gechanged: " + workingProfile_get("Gray"));
            } else {
                alert("Vorsicht\nDie Helligkeitsverteilung könnte fehlerhaft sein.\nfehlende Info zum Gamma von '" + docProfile + "'")
            }
        }
    }

    if (workingProfile_get_init != workingProfile_get("Gray")) {
        workingProfile_set("Gray", workingProfile_get_init);
    }

}


//*************************************
//*************************************
//*************************************


// mask_farbmaske_viaSaturation("[helper] Farbmaske", 30)

function mask_farbmaske_viaSaturation(_folder, _toleranz) {
    if (!layer_checkExistence(_folder)) {
        createGroup(_folder, "passThrough", "none", 100, f);
        // move to TOP
        with (activeDocument) activeLayer.move(layers[0], ElementPlacement.PLACEBEFORE)

        createLayer("Farbe auswählen", "hueSaturation", "difference", "none", 100, "none", f, f);
        createLayer("invert + gradation", "curves", "normal", "none", 100, "none", f, f);
        adjustLayer_curves_set(0, 255, 255, 0);

        createLayer("Maske Preview", "colorLookup", "normal", "none", 100, "none", f, f);
        LUT_maske_preview();

        gotoLayer("Farbe auswählen");


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
    }
}


// function adjustHue(hue, amount) {
//     return (hue + amount + 360) % 360;
// }



// function adjustLayer_sat_set(_range, _beginRamp, _beginSustain, _endSustain, _endRamp, _hue, _saturation, _lightness) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var d3 = new ActionDescriptor();
//     var l = new ActionList();
//     var r = new ActionReference();

//     var _hue = _hue ? _hue : 0;
//     var _saturation = _saturation ? _saturation : 0;
//     var _lightness = _lightness ? _lightness : 0;

//     r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
//     d.putReference(s2t("null"), r);
//     d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
//     d3.putInteger(s2t("localRange"), _range); // red=1 || yellow=2 …
//     d3.putInteger(s2t("beginRamp"), _beginRamp);
//     d3.putInteger(s2t("beginSustain"), _beginSustain);
//     d3.putInteger(s2t("endSustain"), _endSustain);
//     d3.putInteger(s2t("endRamp"), _endRamp);
//     d3.putInteger(s2t("hue"), _hue);
//     d3.putInteger(s2t("saturation"), _saturation);
//     d3.putInteger(s2t("lightness"), _lightness);
//     l.putObject(s2t("hueSatAdjustmentV2"), d3);
//     d2.putList(s2t("adjustment"), l);
//     d.putObject(s2t("to"), s2t("hueSaturation"), d2);
//     executeAction(s2t("set"), d, DialogModes.NO);
// }

// function adjustLayer_curves_set(horizontal, vertical, horizontal2, vertical2) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var d3 = new ActionDescriptor();
//     var d4 = new ActionDescriptor();
//     var d5 = new ActionDescriptor();
//     var l = new ActionList();
//     var l2 = new ActionList();
//     var r = new ActionReference();
//     var r2 = new ActionReference();

//     r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
//     d.putReference(s2t("null"), r);
//     d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
//     r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
//     d3.putReference(s2t("channel"), r2);
//     d4.putDouble(s2t("horizontal"), horizontal);
//     d4.putDouble(s2t("vertical"), vertical);
//     l2.putObject(s2t("paint"), d4);
//     d5.putDouble(s2t("horizontal"), horizontal2);
//     d5.putDouble(s2t("vertical"), vertical2);
//     l2.putObject(s2t("paint"), d5);
//     d3.putList(s2t("curve"), l2);
//     l.putObject(s2t("curvesAdjustment"), d3);
//     d2.putList(s2t("adjustment"), l);
//     d.putObject(s2t("to"), s2t("curves"), d2);
//     executeAction(s2t("set"), d, DialogModes.NO);
// }


// function app_getColor(_model, _fokus) {
//     var colors = [];

//     if (_fokus == "vordergrund" || _fokus == "foreground") {
//         var color = app.foregroundColor;
//     } else {
//         var color = app.backgroundColor;
//     }

//     if (_model == "rgb") {
//         var model = color.rgb;
//         colors.push(Math.round(model.red));
//         colors.push(Math.round(model.green));
//         colors.push(Math.round(model.blue));
//     } else {
//         if (_model == "hsb" || _model == "hsl") {
//             var model = color.hsb;
//             colors.push(Math.round(model.hue));
//             colors.push(Math.round(model.saturation));
//             colors.push(Math.round(model.brightness));
//         }
//     }

//     return colors;
// }







// "screen"
// "colorDodge"
// "difference"
// "lighten"
// "darken"
// "subtract"
// "add"














function adjustLayer_sat_get() {
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    var vis = executeActionGet(ref).getInteger(stringIDToTypeID('visible'));
    return vis;
}




function writeln(_ding) {
    try {
        return $.writeln('' + _ding + ': ' + _ding)
    } catch (e) { }
}


//gigapixel
// executeAction(sTID('913d412a-534a-5224-a25d-213434343434'), undefined, DialogModes.ALL);

//photoAI
// executeAction(sTID('a40009fc-f5fc-4a09-86ec-5a0ed56c5668'), undefined, DialogModes.ALL);












//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
// BEGIN Startschuss2 for Woodwing
//////////////////////////////////


// OPTIMIZED
// TYPICAL
// HIGH_QUALITY
// DEFAULT_VALUE



/////////////////////////////
/////////////////////////////
/////////////////////////////
//// Einordnen in SimonScript 
function isFileOpen(_fileName) {
    var fileIsOpen = false;
    for (var i = 0; i < app.documents.length; i++) {
        // if (app.documents[i].name == _fileName) {
        if (app.documents[j].name.indexOf(_fileName) !== -1) {
            fileIsOpen = true;
            break;
        }
    }
    return fileIsOpen;
}

// if (isFileOpen("_OA_0086__RZ__RGB.psd")) {
//     alert("Die Datei ist geöffnet.");
// } else {
//     alert("Die Datei ist nicht geöffnet.");
// }
/////////////////////////////
/////////////////////////////
/////////////////////////////







//*************************************************************
//******************* Freisteller in Woodwing *****************
//*************************************************************


// if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
// if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");



// replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
// replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");
// app.activeDocument.suspendHistory('Freisteller: 2 Ebenen', 'freisteller_reduce2layers()');
// saveMultiformat(new File("/Users/adrians/Arbeit/__temp/imago1043022766h__RGB+.psd"), "psd", t, null, f, t);
// undoSteps(1);


/* 
    Schreibe einen Loop um die Ordner zu checken ob sie offen sind und speichere es im Array

    $.writeln(isSetOpened1(app.activeDocument.activeLayer))

    isSetOpened2( grIDX );
    $.writeln(isSetOpened2(getActiveLayerIndex()))
*/




// function getClosedSets() {
//     var closedSets_array = [];
//     var i = 1;
//     while (layer_checkExistence(i)) {
//         if (isLayerSet(i)) {
//             if (!isSetOpened2(i)) {
//                 $.writeln(i);
//                 closedSets_array.push(i);
//             }
//         }
//         i++;
//     }
//     return closedSets_array;
// }


// toogleOpenCloseSet_byIDX_byArray(getClosedSets());


// // $.writeln(layer_selectedIDX_get());
// var start_closedSets = [5,25];
// // app.activeDocument.suspendHistory("toogleOpenCloseSet_byIDX_byArray", "toogleOpenCloseSet_byIDX_byArray(start_closedSets)");
// // $.writeln(app.activeDocument.suspendHistory("ding", "isSetOpened2(25)"))
// // undoSteps(1);
// // historyState_deleteSteps(1);
// var start_closedSetsx = isSetOpened2(25);
// undoSteps(4);
// historyState_deleteSteps(4);
// $.writeln(start_closedSetsx);





// =======================================================

// function historyState_delete() {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();

//     r.putEnumerated(s2t("historyState"), s2t("ordinal"), s2t("last"));
//     d.putReference(s2t("null"), r);
//     executeAction(s2t("delete"), d, DialogModes.NO);
// }





// BEGIN deFreisteller QUICK
// deFrei();

function deFrei() {
    //@include "./assets/json2.js"
    var jsonFilePath = "~/.ss_settings.json";
    var jsonData = loadJSON(jsonFilePath);
    const RZ_qualityJPG = jsonValue("RZ_qualityJPG"); //TODO kommt noch nicht in PS an

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


// =======================================================
// canvasSize(true, 5.6664);
function canvasSize(relative, height) {
    var d = new ActionDescriptor();

    d.putBoolean(s2t("relative"), relative);
    d.putUnitDouble(s2t("height"), s2t("distanceUnit"), height);
    d.putEnumerated(s2t("vertical"), s2t("verticalLocation"), s2t("bottomEnum"));
    executeAction(s2t("canvasSize"), d, DialogModes.NO);
}

// $.writeln("mm2pt: " + mm2pt(20));
// $.writeln("cm2pt: " + cm2pt(2));

var enlargeCanvas_mm = [0, 0, 2.967, 0] //mm
var enlargeCanvas_pt = [0, 0, 8.40951201110995, 0] //pt

var outer_width_mm = 152.333;
var outer_height_mm = 89.958;
var inner_width_mm = 168.032;
var inner_height_mm = 112.021;

var outer_width_pt = 431.811023622047;
var outer_height_pt = 255;
var inner_width_pt = 476.31;
var inner_height_pt = 317.539892359025;


// setSize_pt("width", inner_width_pt);

// function setSize_pt(_side, _size) {
//     var d = new ActionDescriptor();
//     d.putUnitDouble(sTID(_side), sTID('distanceUnit'), _size);
//     executeAction(sTID('imageSize'), d, DialogModes.NO);
// }

// resizeCanvas(enlargeCanvas_mm[3], enlargeCanvas_mm[0], Units.MM, AnchorPosition.BOTTOMRIGHT)
// resizeCanvas(enlargeCanvas_pt[3], enlargeCanvas_pt[0], Units.POINTS, AnchorPosition.BOTTOMRIGHT);
// resizeCanvas(enlargeCanvas_pt[1], enlargeCanvas_pt[2], Units.POINTS, AnchorPosition.TOPLEFT);

function resizeCanvas(_width, _height, _unit, _position) {
    // doc.resizeCanvas(10, undefined, AnchorPosition.BOTTOMRIGHT)

    startRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = _unit;

    var docWidth = doc.width.value;
    var docHeight = doc.height.value;

    var canvasWidth = docWidth + _width;
    var canvasHeight = docHeight + _height;
    $.writeln("docWidth: " + docWidth);
    $.writeln("docHeight: " + docHeight);
    $.writeln("canvasWidth: " + canvasWidth);
    $.writeln("canvasHeight: " + canvasHeight);

    doc.resizeCanvas(canvasWidth, canvasHeight, _position);

    app.preferences.rulerUnits = startRulerUnits;
}




// BOTTOMCENTER
// BOTTOMLEFT
// BOTTOMRIGHT
// MIDDLECENTER
// MIDDLELEFT
// MIDDLERIGHT
// TOPCENTER
// TOPLEFT
// TOPRIGHT







//*************************************************************
//******************* 3D *****************
//*************************************************************

// gotoLayer(0);
// nameLayer("Schatten");
// selectLayers("selectAllLayers");
// selectLayerBySelector("Schatten", "remove");
// mergeLayers();
// nameLayer("frei");

// saveMultiformat(new File("/Users/adrians/Arbeit/11Freunde/271/rück/jpeg_check/3D/check.psd"), "psd", true, null, false, true);
// alert("ding");
// resetImage();





// =======================================================
// var idselect = stringIDToTypeID("select");
// var desc3 = new ActionDescriptor();
// var idnull = stringIDToTypeID("null");
// var ref1 = new ActionReference();
// var idrotateTool = stringIDToTypeID("rotateTool");
// ref1.putClass(idrotateTool);
// desc3.putReference(idnull, ref1);
// var iddontRecord = stringIDToTypeID("dontRecord");
// desc3.putBoolean(iddontRecord, true);
// var idforceNotify = stringIDToTypeID("forceNotify");
// desc3.putBoolean(idforceNotify, true);
// executeAction(idselect, desc3, DialogModes.NO);


function RemoveAlphaChannels() {
    if (app.documents.length == 0) {
        return;
    }
    var doc = app.activeDocument;

    var channels = doc.channels;
    var alphas = [];
    for (var i = 0; i < channels.length; i++) {
        var channel = channels[i];
        if (channel.kind == ChannelType.COMPONENT) {
            continue;
        }
        alphas.push(channel);
    }
    while (alphas.length) {
        var channel = alphas.pop();
        channel.remove();
    }
};

function channel_checkExistenceByName(_name) {
    var channels = doc.channels;
    var check = false;
    for (var i = 0; i < channels.length; i++) {
        var channel = channels[i];
        if (channel.name == _name && channel.kind == ChannelType.MASKEDAREA) {
            var check = true;
            break;
        }
    }
    return check;
}

// $.writeln("1: " + channel_checkExistenceByName("rg"))
// $.writeln("2: " + channel_checkExistenceByName("rgdff"))

function channel_deleteX(_name) {
    while (channel_checkExistenceByName(_name)) {
        channel_delete(_name);
    }
}
// channel_deleteX("rg")

alert("ding");