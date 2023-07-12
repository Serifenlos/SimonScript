/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Wandbild Moods Vorarbeit</name>
<about>ToD | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";




/**************/
/****************************/
/*******************************************/
/********************************************************/
/* RUN ********************************************************/
/********************************************************/
/*******************************************/
/****************************/
/**************/


// run__bw_renameLayer_old_allLayer()
// run_run_resizeRahmen();
// run_mood_Rahmendicke();
// app.activeDocument.save();

// runALL_mood_Rahmendicke();
// runALL_mood_Rahmendicke2();


// resizeRahmen("2x3_quer");
// alert("ding");





/********************************************/
/* 11F-BW RENAME LAYER "OLD" ****************/
/********************************************/
// bw_renameLayer_old();
function bw_renameLayer_old() {
    var name_old = doc.activeLayer.name;
    doc.activeLayer.name = name_old + " OLD";
};

function run__bw_renameLayer_old_allLayer() {
    doc.activeLayer.name = "MAIN";
    bw_renameLayer_old_allLayer(app.activeDocument.activeLayer);
    gotoLayer("MAIN");
    bw_renameLayer_old_allLayer2(app.activeDocument.activeLayer);
    gotoLayer("MAIN");
};

function bw_renameLayer_old_allLayer(_parent) {
    var theNumber = _parent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = _parent.layers[m];
        if (theLayer.typename == "LayerSet") {

            var name_old = theLayer.name;
            theLayer.name = name_old + " OLD";

        }
    };
};

function bw_renameLayer_old_allLayer2(_parent) {
    var theNumber = _parent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = _parent.layers[m];
        if (theLayer.typename == "LayerSet") {
            thisLayerIDX = theLayer.itemIndex;

            gotoLayer(thisLayerIDX)
            toogleOpenCloseSet();
            hide();
        }
    };
};


/********************************************/
/* 11F-BW ResizeRahmen **********************/
/********************************************/

function run_resizeRahmen(__format) {
    app.activeDocument.suspendHistory("resizeRahmen " + __format + " ", "resizeRahmen('" + __format + "');");
}


function resizeRahmen(_format) {
    gotoLayer("MAIN");
    layer__FX_visibility(false);

    gotoLayer(_format);
    gotoLayer(layer_getChildIDXbyName(app.activeDocument.activeLayer, "hilf"));

    var current = layer__getWidthHeight();
    var width_current = current[0];

    gotoLayer(_format + " OLD");
    var aim = layer__getWidthHeight();
    var width_aim = aim[0];
    var position_top_aim = aim[2];
    var position_left_aim = aim[3];

    scale_faktor = dreisatz(width_current, width_aim, 100);

    gotoLayer(_format);
    doc.activeLayer.resize(scale_faktor, scale_faktor);

    gotoLayer(layer_getChildIDXbyName(app.activeDocument.activeLayer, "hilf"));
    var next = layer__getWidthHeight();
    var position_top_next = next[2];
    var position_left_next = next[3];

    gotoLayer(_format);

    layer__transformXY(position_top_aim - position_top_next, position_left_aim - position_left_next);
    bw_log2(_format);
    bw_log2(scale_faktor);


    run_scaleLayerFX(_format, Number(scale_faktor.toFixed()))
    // run_scaleLayerFX(__format, ___FXscale)

    gotoLayer(_format);
    toogleOpenCloseSet();

    gotoLayer("MAIN");
    layer__FX_visibility(true);
}


function layer__getWidthHeight() {
    var layer = doc.activeLayer;

    var width = parseInt(layer.bounds[2] - layer.bounds[0]);
    var height = parseInt(layer.bounds[3] - layer.bounds[1]);
    var top = layer.bounds[0];
    var left = layer.bounds[1];

    return [width, height, top, left];
}

function dreisatz(_a, _b, _c) {
    return ((_b / _a) * _c);
}

function layer__transformXY(horizontal, vertical) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner0"));
    d2.putUnitDouble(s2t("horizontal"), s2t("pixelsUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("pixelsUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    d.putBoolean(s2t("linked"), true);
    d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
    executeAction(s2t("transform"), d, DialogModes.NO);
}


// nicht gut: geht nicht auf die KindesKinder…
function layer_getChildIDXbyName(_parent, _layername) {
    var theNumber = _parent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = _parent.layers[m];
        if (theLayer.typename == "LayerSet" && theLayer.name == _layername) {
            thisLayerIDX = theLayer.itemIndex;
            return thisLayerIDX;
        }
    };
    // return;
};


// "show" "hide" "toggle"
function layer__FX_visibility(_state) {
    var d = new ActionDescriptor();
    var l = new ActionList();
    var r = new ActionReference();

    r.putClass(s2t("layerEffects"));
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    l.putReference(r);
    d.putList(s2t("null"), l);
    if (_state == true) {
        executeAction(s2t("show"), d, DialogModes.NO);
    } else if (_state == false) {
        executeAction(s2t("hide"), d, DialogModes.NO);
    } else if (_state == "toggle") {
        if (isLayerFXVisible()) {
            executeAction(s2t("hide"), d, DialogModes.NO);
        } else {
            executeAction(s2t("show"), d, DialogModes.NO);
        }
    }
}





function bw_log2(_log) {
    var filepath = "/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Bilderwelt_Moods_resize.log";
    var write_file = File(filepath);
    if (!write_file.exists) {
        write_file = new File(filepath);
    }

    var log_file = File(filepath);
    log_file.open('a', undefined, undefined);
    log_file.encoding = "UTF8";
    if (log_file !== '') {
        // log_file.writeln("-----------------------");
        log_file.writeln(_log);
        // log_file.writeln("");
        log_file.close();
    }
}



/********************************************/
/* 11F-BW ScaleLayerFX **********************/
/********************************************/

// run_scaleLayerFX("Quadrat", 20);

function run_scaleLayerFX(__format, ___FXscale) {
    app.activeDocument.suspendHistory("scaleLayerFX " + __format + ___FXscale + " ", "scaleLayerFX('" + __format + "'," + ___FXscale + ");");
    // app.activeDocument.suspendHistory("resizeRahmen " + __format + " ", "resizeRahmen('" + __format + "');");
}

function scaleLayerFX(_format, _FXscale) {
    var start_selectedLayers = layer_selectedIDX_get();
    gotoLayer(_format);
    layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, [], _FXscale);
    bw_log2("_FXscale: " + _FXscale);
    layer_selectedIDX_set(start_selectedLayers);
}


function layer_loopChilden__scaleLayerFX(theParent, allLayers, __FXscale) {
    if (!allLayers) {
        var allLayers = new Array
    } else {};
    var theNumber = theParent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = theParent.layers[m];
        // apply the function to layersets;
        if (theLayer.typename == "ArtLayer") {
            if (theLayer.name == "PP-Rahmen") {
                gotoLayer(theLayer.itemIndex);
                scaleEffectsEvent(__FXscale);
                gotoLayer(getParentIDXfor(getActiveLayerIndex()))
                toogleOpenCloseSet();
            }
            allLayers.push(theLayer)
        } else {
            allLayers = (layer_loopChilden__scaleLayerFX(theLayer, allLayers, __FXscale))
            // this line includes the layer groups;
            allLayers.push(theLayer);
        }
    };
    return allLayers
};
// layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, []);
// $.writeln(layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, []));


// scaleEffectsEvent(20);
function scaleEffectsEvent(scale) {
    var d = new ActionDescriptor();
    d.putUnitDouble(s2t("scale"), s2t("percentUnit"), scale);
    executeAction(s2t("scaleEffectsEvent"), d, DialogModes.NO);
}









/********************************************/
/* 11F-BW Korrektur Rahmendicke *************/
/********************************************/

// run__bw_KorrekturRahmendicke(2);
// transform_inhaltsbewahrend(100, 99)
bw_KorrekturRahmendicke(2);


function getChildren(theParent) {
    var childrenLength = theParent.layers.length;
    for (var i = 0; i < childrenLength; i++) {
        var theLayer = theParent.layers[i];

        if (theLayer.typename == "ArtLayer") {
            $.writeln("ArtLayer: " + i + " " + theLayer.name);

        } else {
            $.writeln("LayerSet: " + i + " " + theLayer.name);
            getChildren(theLayer);
        }
    }
    return;
};


function repareRahmendicke(_format, _ist_PX, _soll_CM) {
    // zwischen 1 und unendlich; bewirkt einen leicht dickeren Rahmen als die Berechung
    var irrationaleSichtbarkeit = 1;
    var irreFaktor = 1 / irrationaleSichtbarkeit;


    var start_selectedLayers = layer_selectedIDX_get();
    gotoLayer("MAIN");
    layer__FX_visibility(false);

    gotoLayer(_format);
    var hilf_PP_width_before = hilf_getDimension2(app.activeDocument.activeLayer, "hilf_PP_rechts", [])[0][0];

    gotoLayer(_format);
    var hilf_SF_width_before = hilf_getDimension2(app.activeDocument.activeLayer, "hilf_SF_rechts", [])[0][0];


    var ist_CM_PP = dreisatz(_ist_PX, _soll_CM, hilf_PP_width_before); //ist_CM von hilf_Ecke
    var faktor_PP = ist_CM_PP / 4.6; //Rahmen + PP = 1.6+3.0 = 4.6
    var faktor_PP = Math.pow(faktor_PP, irreFaktor);
    var hilf_PP_width_after = (hilf_PP_width_before / faktor_PP).toFixed();

    var ist_CM_SF = dreisatz(_ist_PX, _soll_CM, hilf_SF_width_before); //ist_CM von hilf_Ecke
    var faktor_SF = ist_CM_SF / 2.4; //Rahmen + SF = 1.4+1.0 = 2.4
    var faktor_SF = Math.pow(faktor_SF, irreFaktor);
    var hilf_SF_width_after = (hilf_SF_width_before / faktor_SF).toFixed();

    gotoLayer(_format);
    var motiv_dimension = hilf_getDimension2(app.activeDocument.activeLayer, "Motiv", [])[0];
    var motiv_width = motiv_dimension[0];
    var motiv_height = motiv_dimension[1];


    gotoLayer(_format);
    goto_Children2(app.activeDocument.activeLayer, "PP-Rahmen", faktor_PP, hilf_PP_width_after, motiv_width, motiv_height);

    gotoLayer(_format);
    goto_Children2(app.activeDocument.activeLayer, "SF-Rahmen", faktor_SF, hilf_SF_width_after, motiv_width, motiv_height);




    gotoLayer("MAIN");
    layer__FX_visibility(true);
    layer_selectedIDX_set(start_selectedLayers);

    return " ";
}



// const formate_array = [
//     "Panorama",
//     "4x3_hoch",
//     "4x3_quer",
//     "2x3_hoch",
//     "2x3_quer",
//     "DinA_hoch",
//     "DinA_quer",
//     "Quadrat"
// ]

// const mood_verhältnis = [
//     ["mood01", 2511, 150],
//     ["mood02", 2100, 50],
//     ["mood03", 1400, 150],
//     ["mood04", 520, 50],
//     ["mood05", 850, 80],
//     ["mood06", 5000, 300],
//     ["mood07", 750, 80],
//     ["mood08", 1200, 100],
//     ["mood09", 790, 50],
//     ["mood10", 950, 50],
//     ["mood11", 1555, 185],
//     ["mood12", 670, 80],
//     ["mood13", 1780, 60]
// ]



function run_mood_Rahmendicke() {
    var mood_Doc_Nr = Number(GetFileNameOnly(app.activeDocument.name).replace(/mood/g, ""));
    var mood_Verhältnis_Nr = mood_Doc_Nr - 1

    var ist = mood_verhältnis[mood_Verhältnis_Nr][1];
    var soll = mood_verhältnis[mood_Verhältnis_Nr][2];

    motivFX(false);
    for (var i = 0; i < formate_array.length; i++) {

        repareRahmendicke(formate_array[i], ist, soll);
    }
    motivFX(true);
    gotoLayer("MAIN");
}





// motivFX(false);

// repareRahmendicke("Panorama", 2511, 150);
// repareRahmendicke("4x3_hoch", 2511, 150);
// repareRahmendicke("4x3_quer", 2511, 125);
// repareRahmendicke("2x3_hoch", 2511, 125);
// repareRahmendicke("2x3_quer", 2511, 125);
// repareRahmendicke("DinA_hoch", 2511, 125);
// repareRahmendicke("DinA_quer", 2511, 125);
// repareRahmendicke("Quadrat", 2511, 125);

// motivFX(true);










function motivFX(_state) {
    var array_Motiv = layer_getIDXbyString("Motiv");
    for (var motiv_i = 0; motiv_i < array_Motiv.length; motiv_i++) {
        gotoLayer(array_Motiv[motiv_i]);
        layer__FX_visibility(_state);
        gotoLayer(getParentIDXfor(getActiveLayerIndex()))
        toogleOpenCloseSet();
    }
}


function hilf_getDimension2(theParent, _LayerName, width_hilf_array) {
    if (!width_hilf_array) {
        var width_hilf_array = [];
    } else {};
    var childrenLength = theParent.layers.length;
    for (var i = 0; i < childrenLength; i++) {
        var theLayer = theParent.layers[i];
        if (theLayer.typename == "ArtLayer" && theLayer.name == _LayerName) {
            gotoLayer(theLayer.itemIndex);
            width_hilf_array.push(layer__getWidthHeight());
        } else if (theLayer.typename == "LayerSet" && theLayer.name == _LayerName) {
            gotoLayer(theLayer.itemIndex);
            width_hilf_array.push(layer__getWidthHeight());
            hilf_getDimension2(theLayer, _LayerName, width_hilf_array);
        } else if (theLayer.typename == "ArtLayer") {
            width_hilf_array.push();
        } else {
            width_hilf_array.push();
            hilf_getDimension2(theLayer, _LayerName, width_hilf_array);
        }
    }
    return width_hilf_array;
};



function goto_Children2(theParent, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height) {
    var childrenLength = theParent.layers.length;
    for (var i = 0; i < childrenLength; i++) {
        var theLayer = theParent.layers[i];

        if (theLayer.typename == "ArtLayer") {
            if (theLayer.name == _LayerName) {
                gotoLayer(theLayer.itemIndex);
                try {
                    layer__FX_visibility(false);
                } catch (e) {}

                run__bw_KorrekturRahmendicke(___faktor);

                var rahmen_width_ist = layer__getWidthHeight()[0];
                var rahmen_height_ist = layer__getWidthHeight()[1];

                var transform_rahmen_width = (_motiv_width + (_width_hilf_after * 2)) * 100 / rahmen_width_ist;
                var transform_rahmen_height = (_motiv_height + (_width_hilf_after * 2)) * 100 / rahmen_height_ist;

                bw_transform_ContentAwareScale2(0, 0, transform_rahmen_width, transform_rahmen_height, true, 100);

                try {
                    layer__FX_visibility(true);
                } catch (e) {}
                gotoLayer(getParentIDXfor(getActiveLayerIndex()));
                toogleOpenCloseSet();
            }



        } else {
            goto_Children2(theLayer, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height);
        }

    }
    return;
}







function run__bw_KorrekturRahmendicke(_factor) {
    doc.suspendHistory('Rahmendicke ' + _factor + '', 'bw_KorrekturRahmendicke(' + _factor + ');')
}
// doc.suspendHistory('Rahmendicke 1.3', 'bw_KorrekturRahmendicke(1.3);')

function bw_KorrekturRahmendicke(_factor) {
    var transform_ContentAwareScale_factor = 100 * _factor;
    var transform_free_factor = 100 / _factor;
    // bw_transform_ContentAwareScale(0, 0, transform_ContentAwareScale_factor, transform_ContentAwareScale_factor, true, true, true, 100);
    bw_transform_ContentAwareScale2(0, 0, transform_ContentAwareScale_factor, transform_ContentAwareScale_factor, true, 100);
    bw_transform_free(0, 0, transform_free_factor, transform_free_factor, true);
}

function transform_inhaltsbewahrend(_width, _height) {
    bw_transform_ContentAwareScale(0, 0, _width, _height, true, true, true, 100);
}


function bw_transform_ContentAwareScale(horizontal, vertical, width, height, linked, copy, contentAware, amount) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    // d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSAverage"));
    d2.putUnitDouble(s2t("horizontal"), s2t("distanceUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("distanceUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    d.putUnitDouble(s2t("width"), s2t("percentUnit"), width);
    d.putUnitDouble(s2t("height"), s2t("percentUnit"), height);
    d.putBoolean(s2t("linked"), linked);
    d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
    d.putBoolean(s2t("contentAware"), contentAware);
    d.putDouble(s2t("amount"), amount);
    executeAction(s2t("transform"), d, DialogModes.NO);
}

function bw_transform_free(horizontal, vertical, width, height, linked) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    // d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSAverage"));
    d2.putUnitDouble(s2t("horizontal"), s2t("distanceUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("distanceUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    d.putUnitDouble(s2t("width"), s2t("percentUnit"), width);
    d.putUnitDouble(s2t("height"), s2t("percentUnit"), height);
    d.putBoolean(s2t("linked"), linked);
    d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
    executeAction(s2t("transform"), d, DialogModes.NO);
}



function bw_transform_ContentAwareScale2(horizontal, vertical, width, height, contentAware, amount) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSAverage"));
    d2.putUnitDouble(s2t("horizontal"), s2t("pixelsUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("pixelsUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    d.putUnitDouble(s2t("width"), s2t("percentUnit"), width);
    d.putUnitDouble(s2t("height"), s2t("percentUnit"), height);
    d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
    d.putBoolean(s2t("contentAware"), contentAware);
    d.putDouble(s2t("amount"), amount);
    executeAction(s2t("transform"), d, DialogModes.NO);
}
/** **/




function run_run_resizeRahmen() {
    bw_log2("--------\n" + app.activeDocument.name);
    run_resizeRahmen('Panorama');
    run_resizeRahmen('4x3_hoch');
    run_resizeRahmen('4x3_quer');
    run_resizeRahmen('2x3_hoch');
    run_resizeRahmen('2x3_quer');
    run_resizeRahmen('DinA_hoch');
    run_resizeRahmen('DinA_quer');
    run_resizeRahmen('Quadrat');
}


const formate_array = [
    "Panorama",
    "4x3_hoch",
    "4x3_quer",
    "2x3_hoch",
    "2x3_quer",
    "DinA_hoch",
    "DinA_quer",
    "Quadrat"
]

const mood_verhältnis = [
    ["mood01", 2511, 130],
    ["mood02", 2100, 65],
    ["mood03", 1400, 130],
    ["mood04", 520, 50],
    ["mood05", 850, 50],
    ["mood06", 5000, 170],
    ["mood07", 750, 55],
    ["mood08", 1200, 90],
    ["mood09", 790, 45],
    ["mood10", 950, 40],
    ["mood11", 1555, 150],
    ["mood12", 670, 57],
    ["mood13", 1780, 63]
]





function runALL_mood_Rahmendicke() {
    var firstDoc = app.activeDocument;
    for (var aeiou = 0; aeiou < app.documents.length; aeiou++) {
        app.activeDocument = app.documents[aeiou];
        var doc = app.activeDocument;

        try {
            run_mood_Rahmendicke();
            doc.save();


        } catch (e) {}
    };
    app.activeDocument = firstDoc;
}






function runALL_mood_Rahmendicke2() {
    const moodsfiles = [
    'mood01.psd',
    'mood02.psd',
    'mood03.psd',
    // 'mood04.psd',
    // 'mood05.psd',
    // 'mood06.psb',
    // 'mood07.psd',
    // 'mood08.psd',
    // 'mood09.psd',
    // 'mood10.psd',
    // 'mood11.psd',
    // 'mood12.psd',
    // 'mood13.psd'
]
const moodsFolder = "/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Moods++++++++\ (dick)/check/";

    for (var mood = 0; mood < moodsfiles.length; mood++) {
        var moodFile = new File(moodsFolder + moodsfiles[mood])
        app.open(moodFile);
        run_mood_Rahmendicke();
        app.activeDocument.save();
        // app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}


