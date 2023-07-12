/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] test__dev</name>
<about>test_dev | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


$.evalFile("/Users/simon/Library/Application\ Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx");

// include "../../build/A__psScripts/functions/basic.jsx";
// include "../../build/A__psScripts/functions/pref.jsx";
// include "../../build/A__psScripts/functions/utils.jsx";
// include "../../build/A__psScripts/functions/LUT-dodge.jsx";
// include "../../build/A__psScripts/functions/LUT-burn.jsx";
// include "../../build/A__psScripts/functions/dialog.jsx";
// include "../../build/A__psScripts/functions/ready.jsx";
// include "../../build/A__psScripts/functions/view.jsx";
// include "../../build/A__psScripts/functions/layer.jsx";
// include "../../build/A__psScripts/functions/save.jsx";
// include "../../build/A__psScripts/functions/loopFiles.jsx";
// include "../../build/A__psScripts/functions/meta.jsx";

//include "/Users/simon/Arbeit/__temp/json2.js";


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



// curves
// selectiveColor
// hueSaturation
// colorBalance
// brightnessEvent
// vibrance



// alert(getSelectedLayersIdx())
// alert(getSibilings())
// alert(getSibilings1())
// alert(isVisibleIDX(6))
// alert(getActiveLayerIndex())
// alert(getLayerName(5))
// makeVisByIndex(7,true)


// analyse();

function analyse() {
    time_start()


    time_stop(start)
}







/* TODO
_direction für 
ElementPlacement.INSIDE
ElementPlacement.PLACEATBEGINNING
ElementPlacement.PLACEATEND
*/
function moveLayer2(_objectLayer, _aimLayer, _direction) {
    gotoLayer(_objectLayer);
    var ref_1 = app.activeDocument.activeLayer;
    gotoLayer(_aimLayer);
    var ref_2 = app.activeDocument.activeLayer;
    if (_direction == "before" || _direction == "up") {
        var direction = ElementPlacement.PLACEBEFORE
    } else if (_direction == "after" || _direction == "down") {
        var direction = ElementPlacement.PLACEAFTER
    } else if (_direction == "top" || _direction == "beginning") {
        var direction = ElementPlacement.PLACEATBEGINNING
    } else if (_direction == "bottom" || _direction == "end") {
        var direction = ElementPlacement.PLACEATEND
    }
    ref_1.move(ref_2, direction);
}


// funktioniert nicht
// moveLayer2("Ebene 1", "Ebene 3", "top")









// resize();


////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399

function getSmartFilterArray(_layerIdx) {
    try {
        var ref = new ActionReference();
        ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("smartObject"));
        ref.putIndex(sTID("layer"), _layerIdx);
        // ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("smartObject"));
        // ref.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        var smartObjectDesc = executeActionGet(ref).getObjectValue(stringIDToTypeID("smartObject"));
        var filtersList = smartObjectDesc.getList(stringIDToTypeID("filterFX"));
        filterArray = [];

        for (var filterIdx = 0; filterIdx < filtersList.count; filterIdx++) {
            var smartFilter = filtersList.getObjectValue(filterIdx);
            var filter = smartFilter.getObjectValue(stringIDToTypeID("filter"));
            var filterTyp = typeIDToStringID(smartFilter.getObjectType(stringIDToTypeID("filter")));
            filterArray_inner = [];
            filterArray_inner.push(_layerIdx, filterIdx, filterTyp);

            for (var j = 0; j < filter.count; j++) {
                getSmartFilterValues(filter, j)

                try {
                    if (filter.getObjectValue(filter.getKey(j))) {
                        var filter2 = typeIDToStringID(filter.getKey(j));
                        var filter2 = filter.getObjectValue(stringIDToTypeID(filter2));

                        for (var k = 0; k < filter2.count; k++) {
                            getSmartFilterValues(filter2, k)
                        }
                    }
                } catch (e) {}
            }
            filterArray.push(filterArray_inner);
            // alert("YES " + _layerIDX);
            // alert(filterArray_inner[2])

        }
        return true;
    } catch (e) {
        // alert("no SmartObjekt " + _layerIDX);
        return false;
    }
}

function getSmartFilterValues(theDesc, theNumber) {
    var array = filterArray_inner;
    var x = theDesc.getKey(theNumber);
    if (!t2s(x)) {
        var key = x
    } else {
        var key = t2s(x)
    }
    switch (theDesc.getType(theDesc.getKey(theNumber))) {
        case DescValueType.BOOLEANTYPE:
            var value = theDesc.getBoolean(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.CLASSTYPE:
            var value = theDesc.getClass(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.DOUBLETYPE:
            var value = theDesc.getDouble(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.ENUMERATEDTYPE:
            var enumType = typeIDToStringID(theDesc.getEnumerationType(theDesc.getKey(theNumber)));
            var value = typeIDToStringID(theDesc.getEnumerationValue(theDesc.getKey(theNumber)));
            array.push(key, enumType, value);
            break;
        case DescValueType.INTEGERTYPE:
            var value = theDesc.getInteger(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.LISTTYPE:
            var value = theDesc.getList(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.OBJECTTYPE:
            var classID = typeIDToStringID(theDesc.getObjectType(theDesc.getKey(theNumber)));
            var value = theDesc.getObjectValue(theDesc.getKey(theNumber));
            array.push(key, classID, value);
            break;
        case DescValueType.REFERENCETYPE:
            var value = theDesc.getReference(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.STRINGTYPE:
            var value = theDesc.getString(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.UNITDOUBLE:
            var unitID = typeIDToStringID(theDesc.getUnitDoubleType(theDesc.getKey(theNumber)));
            var value = theDesc.getUnitDoubleValue(theDesc.getKey(theNumber));
            array.push(key, unitID, value);
            break;
        default:
            break;
    };
};


function adjust_filter_TiefenLichter(_faktor, _filterID, _s_key_amount, _s_unit_amount, _s_value_amount, _s_key_width, _s_unit_width, _s_value_width, _s_key_radius, _s_value_radius, _h_key_amount, _h_unit_amount, _h_value_amount, _h_key_width, _h_unit_width, _h_value_width, _h_key_radius, _h_value_radius, blackClip_key, blackClip_value, whiteClip_key, whiteClip_value, center_key, center_value, colorCorrection_key, colorCorrection_value) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d3.putReference(s2t("null"), r);
    d.putUnitDouble(s2t(_s_key_amount), s2t(_s_unit_amount), _s_value_amount);
    d.putUnitDouble(s2t(_s_key_width), s2t(_s_unit_width), _s_value_width);
    d.putInteger(s2t(_s_key_radius), Math.round(_s_value_radius * _faktor));
    d5.putObject(s2t("shadowMode"), s2t("adaptCorrectTones"), d);
    d2.putUnitDouble(s2t(_h_key_amount), s2t(_h_unit_amount), _h_value_amount);
    d2.putUnitDouble(s2t(_h_key_width), s2t(_h_unit_width), _h_value_width);
    d2.putInteger(s2t(_h_key_radius), Math.round(_h_value_radius * _faktor));
    d5.putObject(s2t("highlightMode"), s2t("adaptCorrectTones"), d2);
    d5.putDouble(s2t(blackClip_key), blackClip_value);
    d5.putDouble(s2t(whiteClip_key), whiteClip_value);
    d5.putInteger(s2t(center_key), center_value);
    d5.putInteger(s2t(colorCorrection_key), colorCorrection_value);
    d4.putObject(s2t("filter"), s2t("adaptCorrect"), d5);
    d3.putObject(s2t("filterFX"), s2t("filterFX"), d4);
    executeAction(s2t("set"), d3, DialogModes.NO);
}



function resize() {
    prefSave();
    prefSet(DialogModes.NO, Units.PIXELS);

    try {
        try {
            gotoLayer("Original")
        } catch (e) {
            alert("keine Ebene ‘Original‘ gefunden")
        }

        if (doc.activeLayer.kind != "LayerKind.SMARTOBJECT") {
            alert("Ebene ‘Original‘ ist kein SmartObjekt");
        }


        var width_old = app.activeDocument.width;
        SmartObject_edit();
        var width_new = app.activeDocument.width;
        var width_faktor = width_new / width_old;
        $.writeln("width_faktor: " + width_faktor);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc.resizeImage(width_new, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);

        getSmartFilterArray();
        for (var i = 0; i < filterArray.length; i++) {
            if (filterArray[i][1] == "adaptCorrect") {
                try {
                    adjust_filter_TiefenLichter(width_faktor, filterArray[i][0] + 1, filterArray[i][5], filterArray[i][6], filterArray[i][7], filterArray[i][8], filterArray[i][9], filterArray[i][10], filterArray[i][11], filterArray[i][12], filterArray[i][16], filterArray[i][17], filterArray[i][18], filterArray[i][19], filterArray[i][20], filterArray[i][21], filterArray[i][22], filterArray[i][23], filterArray[i][24], filterArray[i][25], filterArray[i][26], filterArray[i][27], filterArray[i][28], filterArray[i][29], filterArray[i][30], filterArray[i][31]);
                } catch (e) {}
            }
            $.writeln(filterArray[i].length)
            $.writeln(filterArray[i][1])
            $.writeln(filterArray[i])
            // $.writeln("shadow " + filterArray[i][12] + "(" + filterArray[i][12] * 2 + ")" + " -- highlight " + filterArray[i][23] + "(" + filterArray[i][23] * 2 + ")")
            $.writeln("-----")
        }
        fixMaskLoop(width_faktor);
        fitScreen();


    } catch (e) {}

    prefReset();
};







// loop_getSmartFilterArray();

function loop_getSmartFilterArray() {
    var startLayer = getActiveLayerIndex();
    var i = 1;
    filterArray_outer = [];
    while (checkLayerExistence(i)) {
        try {
            if (getSmartFilterArray(i)) {
                filterArray_outer.push(filterArray);
            }
        } catch (e) {}
        i++;
    };

    for (var k = 0; k < filterArray_outer.length; k++) {
        for (var l = 0; l < filterArray_outer[k].length; l++) {

            $.writeln("layerIdx " + filterArray_outer[k][l][0])
            $.writeln("filterIdx " + filterArray_outer[k][l][1])
            $.writeln("filterTyp " + filterArray_outer[k][l][2])
            $.writeln("filterArray " + filterArray_outer[k][l])

            $.writeln("-----")
        }
    }
    gotoLayer(startLayer);
}

// alert(checkLayerExistence(28))

function checkLayerExistence(_idx) {
    try {
        var r = new ActionReference();
        r.putProperty(s2t("property"), s2t("itemIndex"));
        r.putIndex(s2t("layer"), _idx);
        var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
        return true;
    } catch (e) {
        return false;
    }
}

// filterArray_inner.push(idx, filterID);

function getActiveLayerIndex() {
    var ref = new ActionReference();
    ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("ItmI"));
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    return hasBackground() ? executeActionGet(ref).getInteger(charIDToTypeID("ItmI")) - 1 : executeActionGet(ref).getInteger(charIDToTypeID("ItmI"));
};




function getMaskDensity() {
    var m_Ref01 = new ActionReference();
    r.putIndex(sTID("layer"), _idx);
    // m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
    var m_Dsc01 = executeActionGet(m_Ref01);
    return m_Dsc01.getUnitDoubleValue(sTID('userMaskDensity'));
}



// alert(isFilterFXVisible())

function isFilterFXVisible() {
    var r = new ActionReference();
    r.putEnumerated(sTID("layer"), cTID("Ordn"), cTID("Trgt"));
    var d = executeActionGet(r);
    // return m_Dsc01.getBoolean(cTID('lfxv'));
    return d.getBoolean(stringIDToTypeID("filterFX"));
}


// getSmartFilterArray();
// for (var i = 0; i < filterArray.length; i++) {
//     // if (filterArray[i][1] == "adaptCorrect") {
//     //     try {
//     //         adjust_filter_TiefenLichter(2, filterArray[i][0] + 1, filterArray[i][5], filterArray[i][6], filterArray[i][7], filterArray[i][8], filterArray[i][9], filterArray[i][10], filterArray[i][11], filterArray[i][12], filterArray[i][16], filterArray[i][17], filterArray[i][18], filterArray[i][19], filterArray[i][20], filterArray[i][21], filterArray[i][22], filterArray[i][23], filterArray[i][24], filterArray[i][25], filterArray[i][26], filterArray[i][27], filterArray[i][28], filterArray[i][29], filterArray[i][30], filterArray[i][31]);
//     //     } catch (e) {}  
//     // }
//     $.writeln(filterArray[i].length)
//     $.writeln(filterArray[i])
//     $.writeln("shadow " + filterArray[i][12] + "(" +filterArray[i][12]*2 + ")" + " -- highlight " + filterArray[i][23] + "(" +filterArray[i][23]*2 + ")")
//     $.writeln("-----")
// }

// 5,09770603228547 * 19,7 = 100,424808836023759

// fixMaskLoop(5.09770603228547)

function fixMaskLoop(__width_faktor) {
    var startLayer = getActiveLayerIndex();
    var i = 1;
    while (fixMask(i, __width_faktor)) {
        i++;
    };
    $.writeln(startLayer);
    gotoLayer(startLayer);
}

function fixMask(_idx, _width_faktor) {
    try {
        var r = new ActionReference();
        r.putIndex(sTID("layer"), _idx);
        var e = executeActionGet(r);
        var feather = e.getUnitDoubleValue(sTID('userMaskFeather'));
        var dens = e.getUnitDoubleValue(sTID('userMaskDensity'));
        $.writeln("i,f,d: " + _idx + ", " + feather + ", " + dens);
        if (feather > 0) {
            gotoLayer(_idx);
            gotoMask();
            setMaskFeatherTo(0);
            $.writeln("feather, faktor, gleich" + feather + ", " + _width_faktor + ", " + (feather * _width_faktor));
            fixMaskFeather(feather * _width_faktor);
        }
        if (dens < 255) {
            gotoLayer(_idx);
            gotoMask();
            setMaskDensityTo(100);
            $.writeln("dens " + dens);
            $.writeln("dens2 " + ((dens - 255) * -1));
            fixMaskDens((dens - 255) * -1);
        }
        return true;
    } catch (e) {
        return false;
    }
}

function fixMaskFeather(_feather) {
    var d = new ActionDescriptor();
    d.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _feather);
    executeAction(s2t("gaussianBlur"), d, DialogModes.NO);
}

function fixMaskDens(_dens) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var l = new ActionList();
    var l2 = new ActionList();
    var r = new ActionReference();

    d.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    r.putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
    d2.putReference(s2t("channel"), r);
    l2.putInteger(_dens);
    l2.putInteger(255);
    d2.putList(s2t("output"), l2);
    l.putObject(s2t("levelsAdjustment"), d2);
    d.putList(s2t("adjustment"), l);
    executeAction(s2t("levels"), d, DialogModes.NO);
}


//// mögliche Helfer aus util

// getActiveLayerIndex();

// hasLayerMask();
// getMaskDensity();
// getMaskFeather();
// isLayerMaskEnabled();
// setMaskDensityTo(dens);
// setMaskFeatherTo(feath);

// hasVectorMask();
// getVectorMaskDensity();
// getVectorMaskFeather();
// isVectorMaskEnabled(); //auskommentiert
// setVectorMaskDensityTo(dens);
// setVectorMaskFeatherTo(feath);

// isLayerSet(idx);
// isSetOpened2( grIDX );






// doc.save();
// doc.close(SaveOptions.SAVECHANGES);

// gotoLayer("Druck");
// gotoLayer("Textil")
// nameLayer("Textil-Ebene");
// gotoLayer("Textil")
// setMaskFeatherTo(1.6)
// gotoLayer("Hilfsebene Farbe - DOCMA")
// createGroup("HG", "passThrough", "none", 100, t);
// toogleOpenCloseSet();
// gotoLayer("Druck");
// $.writeln(getActiveLayerIndex());
// gotoLayer(3);
// nameLayer("Textil-Ebene");
// gotoLayer("Textil");
// setMaskFeatherTo(1.6);
// gotoLayer("Hilfsebene Farbe - DOCMA");
// createGroup("HG", "passThrough", "none", 100, t);
// toogleOpenCloseSet();
// gotoLayer("Druck");
// app.activeDocument.save();
// app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

// thanks for prozess all subfolders
// https://community.adobe.com/t5/photoshop/copy-several-jpg-in-several-psd/m-p/10992549#M315938

// run();






// loopOpenDocs();
// saveAllDocs();

//// Loop through opened docs
function loopOpenDocs() {
    var firstDoc = app.activeDocument;
    for (var i = 0; i < app.documents.length; i++) {
        app.activeDocument = app.documents[i];
        var doc = app.activeDocument;
        // var doc_file = new File(app.documents[i].fullName);
        // app.open(doc_file);

        try {

            // var startLayer = getActiveLayerIndex();


            selectLayers("selectNoLayers");
            selectLayer("IKAUZ_weiss", t)
            selectLayer("11F-Logo_beidseitig-vorne_schwarz", t)
            selectLayer("11F-Logo_beidseitig-vorne_weiss", t)
            selectLayer("11F-Logo_beidseitig-hinten_schwarz", t)
            selectLayer("11F-Logo_beidseitig-hinten_weiss", t)
            selectLayer("11F-Logo_weiss", t)
            selectLayer("11F-Logo_schwarz", t)
            selectLayer("11-Kasten_weiss", t)
            selectLayer("11-Kasten_orange", t)
            selectLayer("Fussball-ist-bunt_weiss", t)
            selectLayer("Fussball-ist-bunt_schwarz", t)
            hide();
            selectLayers("selectNoLayers");

            try {
                selectLayer2("IKAUZ_weiss", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11F-Logo_beidseitig-vorne_schwarz", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11F-Logo_beidseitig-vorne_weiss", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11F-Logo_beidseitig-hinten_schwarz", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11F-Logo_beidseitig-hinten_weiss", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11F-Logo_weiss", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11F-Logo_schwarz", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11-Kasten_weiss", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("11-Kasten_orange", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("Fussball-ist-bunt_weiss", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                selectLayer2("Fussball-ist-bunt_schwarz", t);
                makeVisible();

                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                gotoLayer("11-Kasten_weiss");
                makeVisible();
            } catch (e) {}

            try {
                gotoLayer("11F-Logo_beidseitig-hinten_weiss");
                makeVisible();
            } catch (e) {}




            // gotoLayer(startLayer);
        } catch (e) {}

        // prefSave();
        // prefSet(DialogModes.NO, Units.PIXELS);
        // doc.close(SaveOptions.SAVECHANGES);
        // prefReset();

    };
    app.activeDocument = firstDoc;
}

function parken() {

    gotoLayer("Abwedeln/Nachbelichten");
    deleteActiveLayer();

    // oben links ausrichten
    layer_transform("topleft", (doc.activeLayer.bounds[0] * -1), (doc.activeLayer.bounds[1] * -1), f, f, f, t);
    gotoLayer("Abwedeln/Nachbelichten");
    deleteActiveLayer();


    gotoLayer("11-Kasten_weiss")
    toogleVisibility();
    gotoLayer("11-Kasten_orange")
    toogleVisibility();
    gotoLayer("Fussball-ist-bunt_weiss")
    toogleVisibility();
    gotoLayer("Fussball-ist-bunt_schwarz")
    toogleVisibility();

    gotoLayer("11-Kasten_weiss")
    hide();
    gotoLayer("11-Kasten_orange")
    hide();
    gotoLayer("Fussball-ist-bunt_weiss")
    makeVisible();
    gotoLayer("Fussball-ist-bunt_schwarz")
    makeVisible();





    makeVisible();

    gotoLayer("Vorlage");
    hide();

    selectLayer("11F-Logo_schwarz", f);





    /////////

    selectLayers("selectNoLayers");
    selectLayer("IKAUZ_weiss", t)
    selectLayer("11F-Logo_beidseitig-vorne_schwarz", t)
    selectLayer("11F-Logo_beidseitig-vorne_weiss", t)
    selectLayer("11F-Logo_beidseitig-hinten_schwarz", t)
    selectLayer("11F-Logo_beidseitig-hinten_weiss", t)
    selectLayer("11F-Logo_weiss", t)
    selectLayer("11F-Logo_schwarz", t)
    selectLayer("11-Kasten_weiss", t)
    selectLayer("11-Kasten_orange", t)
    selectLayer("Fussball-ist-bunt_weiss", t)
    selectLayer("Fussball-ist-bunt_schwarz", t)
    hide();

    selectLayers("selectNoLayers");
    selectLayer("11F-Logo_beidseitig-vorne_schwarz", t)
    selectLayer("11F-Logo_beidseitig-vorne_weiss", t)
    selectLayer("11F-Logo_beidseitig-hinten_schwarz", t)
    selectLayer("11F-Logo_beidseitig-hinten_weiss", t)

    makeVisible();


    selectLayer("11F-Logo_beidseitig-vorne_schwarz", t)
    selectLayer("11F-Logo_beidseitig-vorne_weiss", t)
    selectLayer("11F-Logo_beidseitig-hinten_schwarz", t)
    selectLayer("11F-Logo_beidseitig-hinten_weiss", t)
    selectLayer("IKAUZ_weiss", t)
    selectLayer("11F-Logo_weiss", t)
    selectLayer("11F-Logo_schwarz", t)
    selectLayer("11-Kasten_weiss", t)
    selectLayer("11-Kasten_orange", t)
    selectLayer("Fussball-ist-bunt_weiss", t)
    selectLayer("Fussball-ist-bunt_schwarz", t)


    //// HG umfärben
    gotoLayer("HG");
    makeVisible();
    gotoLayer("Hilfsebene Farbe - DOCMA");
    makeVisible();
    fillColor(255, 255, 255);
    gotoLayer("HG");
    // hide();
    toogleOpenCloseSet();
    gotoLayer("Textil-Ebene");

}




function fillColor(red, grain, blue) {
    var s2t = function(s) {
        return app.stringIDToTypeID(s);
    };

    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("contentLayer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putDouble(s2t("red"), red);
    d3.putDouble(s2t("grain"), grain);
    d3.putDouble(s2t("blue"), blue);
    d2.putObject(s2t("color"), s2t("RGBColor"), d3);
    d.putObject(s2t("to"), s2t("solidColorLayer"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}


function selectLayer2(_layer, _add) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    if (_add == "remove" || !_add) {
        var addX = "removeFromSelection"
    } else {
        var addX = "addToSelection"
    }
    r.putName(s2t("layer"), _layer);
    d.putReference(s2t("null"), r);
    d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
    d.putBoolean(s2t("makeVisible"), false);
    executeAction(s2t("select"), d, DialogModes.NO);

}



function gaussianBlur(radius) {
    var d = new ActionDescriptor();
    d.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), radius);
    executeAction(s2t("gaussianBlur"), d, DialogModes.NO);
}




////////////////////////////////

// exportTextil();

function exportTextil() {
    _saveFolder = "~/Arbeit/_RZ/TextilOnDemand+";
    var saveFolder = new Folder(_saveFolder);
    if (!saveFolder.exists) saveFolder.create();

    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        // if (files.length < 1) continue;

        for (var b in files) {
            var FolderName = "";
            if (topLevel != folders[a]) {
                var FolderName = folders[a].name;
            }

            var thisFile = files[b];
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            // include "functions/basic.jsx";
            // include "functions/utils.jsx";
            // include "functions/meta.jsx";
            // include "functions/save.jsx";
            // include "functions/loopFiles.jsx";


            prefSave();
            prefSet(DialogModes.NO, Units.PIXELS);


            var _replace = "";
            var docName = GetFileNameOnly(doc.name);
            var fileName = docName.replace(/(_Packshot)/g, _replace).replace(/(_Main_0)/g, _replace);
            var FolderName = FolderName.replace(/%20/g, _replace);
            var fileName = FolderName + "__" + fileName;




            selectLayers("selectNoLayers");
            selectLayer("IKAUZ_weiss", t);
            selectLayer("11F-Logo_beidseitig-vorne_schwarz", t)
            selectLayer("11F-Logo_beidseitig-vorne_weiss", t)
            selectLayer("11F-Logo_beidseitig-hinten_schwarz", t)
            selectLayer("11F-Logo_beidseitig-hinten_weiss", t)
            selectLayer("11F-Logo_weiss", t)
            selectLayer("11F-Logo_schwarz", t)
            selectLayer("11-Kasten_weiss", t)
            selectLayer("11-Kasten_orange", t)
            selectLayer("Fussball-ist-bunt_weiss", t)
            selectLayer("Fussball-ist-bunt_schwarz", t)
            hide();
            selectLayers("selectNoLayers");

            try {
                var layer = "IKAUZ_weiss";
                selectLayer2(layer, t);
                makeVisible();
                // alert(saveFolder)
                // alert(layer)
                // alert(fileName)
                // var savePath = saveFolder + "/" + _layer + "__" + _fileName + ".tif";
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11F-Logo_beidseitig-vorne_schwarz"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11F-Logo_beidseitig-vorne_weiss"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11F-Logo_beidseitig-hinten_schwarz"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11F-Logo_beidseitig-hinten_weiss"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11F-Logo_weiss"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11F-Logo_schwarz"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11-Kasten_weiss"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "11-Kasten_orange"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "Fussball-ist-bunt_weiss"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}

            try {
                var layer = "Fussball-ist-bunt_schwarz"
                selectLayer2(layer, t);
                makeVisible();
                saveTextil(saveFolder, layer, fileName);
                hide();
                selectLayers("selectNoLayers");
            } catch (e) {}


            doc.close(SaveOptions.DONOTSAVECHANGES);
        }
    }

    function FindAllFolders(srcFolderStr, destArray) {
        var fileFolderArray = Folder(srcFolderStr).getFiles();
        for (var i = 0; i < fileFolderArray.length; i++) {
            var fileFoldObj = fileFolderArray[i];
            if (fileFoldObj instanceof File) {} else {
                destArray.push(Folder(fileFoldObj));
                FindAllFolders(fileFoldObj.toString(), destArray);
            }
        }
        return destArray;
    };
};



function saveTextil(__saveFolder, _layer, _fileName) {
    var savePath = __saveFolder + "/" + _layer + "__" + _fileName + ".tif";
    var saveFile = File(savePath);

    var saveOptions = new TiffSaveOptions();
    saveOptions.alphaChannels = true;
    saveOptions.byteOrder = ByteOrder.IBM;
    saveOptions.embedColorProfile = true;
    saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
    saveOptions.layers = false;
    saveOptions.spotColors = false;
    saveOptions.transparency = true;
    saveOptions.annotations = false;

    doc.saveAs(new File(savePath), saveOptions, false, Extension.LOWERCASE);
    return;
}






//// Freisteller Gruppe

// doc.suspendHistory('Freisteller-Gruppe erstellt', 'createGroup_Freisteller()')


function hasLayerMask() {
    var hasLayerMask = false;
    try {
        var ref = new ActionReference();
        var keyUserMaskEnabled = app.charIDToTypeID('UsrM');
        ref.putProperty(app.charIDToTypeID('Prpr'), keyUserMaskEnabled);
        ref.putEnumerated(app.charIDToTypeID('Lyr '), app.charIDToTypeID('Ordn'), app.charIDToTypeID('Trgt'));
        var desc = executeActionGet(ref);
        if (desc.hasKey(keyUserMaskEnabled)) {
            hasLayerMask = true;
        }
    } catch (e) {
        hasLayerMask = false;
    }
    return hasLayerMask;
}

// alert(hasLayerMask())

// try{activateLayerMask2();}
// catch(e){alert("is schon")}




// function getMaskVisibility() {
//     var r = new ActionReference();
//     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//     return executeActionGet(r).getBoolean(s2t("userMaskEnabled"));
// }




// function setMaskVisibility(_set) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var r = new ActionReference();

//     if (_set == false || _set == "hide") {
//         var _setX = false
//     } else if (_set == true || _set == "show") {
//         var _setX = true
//     } else if (_set == "toggle" || _set == "X") {
//         if (getMaskVisibility()) {
//             var _setX = false
//         } else {
//             var _setX = true
//         }
//     }

//     try {
//         r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//         d.putReference(s2t("null"), r);
//         d2.putBoolean(s2t("userMaskEnabled"), _setX);
//         d.putObject(s2t("to"), s2t("layer"), d2);
//         executeAction(s2t("set"), d, DialogModes.NO);
//     } catch (e) {}
// }



// freisteller_button();

// function freisteller_button() {
//     try {
//         if (app.activeDocument.layerSets.getByName("Freisteller")) {
//             var startLayer = getActiveLayerIndex();
//             gotoLayer("Freisteller");
//             if (hasLayerMask()) {
//                 var startMaskVisibility = getMaskVisibility();
//                 setMaskVisibility(true);
//                 var docNameCopy = doc.path + "/" + GetFileNameOnly(doc.name) + "-frei";
//                 saveFile_PSD(new File(docNameCopy), t, f, f, t, f, f);
//                 setMaskVisibility(startMaskVisibility);
//             }
//             gotoLayer(startLayer);
//             doc.save();
//         }
//     } catch (e) {
//         doc.suspendHistory('Freisteller-Gruppe erstellt', 'createGroup_Freisteller()');
//     }
// }
// createGroup_Freisteller2()   

function createGroup_Freisteller2() {
    var startLayer = getActiveLayerIndex();
    selectLayers('selectAllLayers');
    createGroup("Freisteller", "passThrough", "none", 100, t);
    try {
        if (isSelectionActive()) {
            try {
                maskFromSelection()
            } catch (e) {}
        }
    } catch (e) {}
    toogleOpenCloseSet();
    gotoLayer(startLayer);
}



// var set = doc.layerSets.getByName("Freisteller")
// createColorLayer("helper Freisteller", "normal", "none", 100, "none", 128, 128, 128);
// var newLayerSetRef = doc.activeLayer;
// alert(getActiveLayerIndex())
// newLayerSetRef.move(set, ElementPlacement.PLACEAFTER);
// alert(getActiveLayerIndex())



// app.activeDocument.artLayers.typename

// var layerRef = app.activeDocument.artLayers.getByName("helper Freisteller");
// alert(layerRef.name)
// $.writeln(layerRef.xmpMetadata)

// makeVisByIndex(1, false);

// alert(isVisibleIDX(1));

// addToSelection("nachher");
// addToSelection("vorher");   
// mergeLayers();



////////////////////////////////////////////////////////////////////////////////////
//// Reset active/selected Layers after Work                                    ////
//// evtl für Freisteller etc                                                   ////
//// besser als getActiveLayerIndex() ??                                        ////
//// weil dieser bei unseleceted Layers den Wert der höchesten Ebene zurückgibt ////


// if (app.documents.length > 0) {
//     var start_selectedLayers = layer_selectedIDX_get()

//     // blabla
//     gotoLayer(5);
//     if (start_selectedLayers.length === 0) {
//         alert("null")
//     } else {
//         alert("nicht null")
//     }
//     alert("selectedLayers " + start_selectedLayers);
//     // blabla

//     layer_selectedIDX_set(start_selectedLayers);
// }


// function layer_selectedIDX_get() {
//     var selectedLayers = [];
//     var ref = new ActionReference();
//     ref.putEnumerated(stringIDToTypeID('document'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'));
//     var desc = executeActionGet(ref);
//     if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
//         desc = desc.getList(stringIDToTypeID('targetLayers'));
//         for (var i = 0, c = desc.count; i < c; i++) {
//             hasBackground() ? selectedLayers.push(desc.getReference(i).getIndex()) : selectedLayers.push(desc.getReference(i).getIndex() + 1);
//         }
//     }
//     return selectedLayers;
// };

// function layer_selectedIDX_set(_array) {
//     try {
//         selectLayers("selectNoLayers");
//         if (_array.length > 0) {
//             for (var j = 0; j < _array.length; j++) {
//                 selectLayerBySelector(_array[j], t);
//             }
//         }
//     } catch (e) {
//         selectLayers("selectNoLayers");
//     }
// }



// function getActiveLayerIndex() {
//     var r = new ActionReference();
//     r.putProperty(c2t("Prpr"), c2t("ItmI"));
//     r.putEnumerated(c2t("Lyr "), c2t("Ordn"), c2t("Trgt"));
//     return hasBackground() ? executeActionGet(r).getInteger(c2t("ItmI")) - 1 : executeActionGet(r).getInteger(c2t("ItmI"));
// };






////////////////////////////////////
// get BlendIf //////////////////
////////////////////////////////////



// function blendif_2(_idx, _blackMin, _blackMax, _whiteMin, _whiteMax) {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     if (!isNaN(_idx)) {
//         r.putIndex(s2t("layer"), _idx)
//     } else {
//         r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'))
//     }
//     d.putReference(sTID('null'), r);

//     var d2 = new ActionDescriptor();
//     var l = new ActionList();
//     var d3 = new ActionDescriptor();
//     var r2 = new ActionReference();
//     r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('gray'));
//     d3.putReference(sTID('channel'), r2);
//     d3.putInteger(sTID('srcBlackMin'), 0);
//     d3.putInteger(sTID('srcBlackMax'), 0);
//     d3.putInteger(sTID('srcWhiteMin'), 255);
//     d3.putInteger(sTID('srcWhiteMax'), 255);
//     d3.putInteger(sTID('destBlackMin'), _blackMin);
//     d3.putInteger(sTID('destBlackMax'), _blackMax);
//     d3.putInteger(sTID('destWhiteMin'), _whiteMin);
//     d3.putInteger(sTID('desaturate'), _whiteMax);
//     l.putObject(sTID('blendRange'), d3);
//     d2.putList(sTID('blendRange'), l);
//     d.putObject(sTID('to'), sTID('layer'), d2);
//     executeAction(sTID('set'), d, DialogModes.NO);
// }



// blendif_2(0, 0, 215, 240);

// test_blendif_get()

function nurGucken() {
    var colors_layer = [];
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    var desc = executeActionGet(r)

    var adjList = desc.getList(s2t('adjustment'));
    var adjDesc = adjList.getObjectValue(0);
    var colorDesc = adjDesc.getObjectValue(s2t('color'));

    colors_layer.push(Math.round(colorDesc.getDouble(s2t('red'))));
    colors_layer.push(Math.round(colorDesc.getDouble(s2t('green'))));
    colors_layer.push(Math.round(colorDesc.getDouble(s2t('blue'))));
    return colors_layer;
}

function test_blendit_get2() {

    var blendIf = [];
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    var desc = executeActionGet(r)
    alert(desc.getObjectValue(stringIDToTypeID('blendOptions')))

    // var adjList = desc.getList(s2t('adjustment'));
    // var adjDesc = adjList.getObjectValue(0);
    // var colorDesc = adjDesc.getObjectValue(s2t('color'));

    // colors_layer.push(Math.round(colorDesc.getDouble(s2t('red'))));
    // colors_layer.push(Math.round(colorDesc.getDouble(s2t('green'))));
    // colors_layer.push(Math.round(colorDesc.getDouble(s2t('blue'))));
    return blendIf;

}

// alert(loopParentsIDXfor(getActiveLayerIndex()).length)
// test_blendit_get2()
// test_blendif_get()
// alert(layer_blendif_get(getActiveLayerIndex()))

// function test_blendif_get() {
//     // gotoLayer("Gradation neutral")
//     //@include "/Applications/B-Programme/Grafik/xtools22/xlib/Styles.js"

//     var blendIf = {};
//     var doc = app.activeDocument;
//     var layer = doc.activeLayer;
//     var desc = Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0);
//     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0))
//     // alert("2 " + desc)
//     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')))

//     blendIf.channel = typeIDToStringID(desc.getReference(stringIDToTypeID('channel')).getEnumeratedValue());
//     blendIf.srcBlackMin = desc.getInteger(stringIDToTypeID('srcBlackMin')); // 'This Layer' in dialog
//     blendIf.srcBlackMax = desc.getInteger(stringIDToTypeID('srcBlackMax'));
//     blendIf.srcWhiteMin = desc.getInteger(stringIDToTypeID('srcWhiteMin'));
//     blendIf.srcWhiteMax = desc.getInteger(stringIDToTypeID('srcWhiteMax'));
//     blendIf.destBlackMin = desc.getInteger(stringIDToTypeID('destBlackMin')); // 'Underlaying Layer' in dialog
//     blendIf.destBlackMax = desc.getInteger(stringIDToTypeID('destBlackMax'));
//     blendIf.destWhiteMin = desc.getInteger(stringIDToTypeID('destWhiteMin'));
//     blendIf.destWhiteMax = desc.getInteger(stringIDToTypeID('desaturate'));

//     // alert(blendIf.destWhiteMin)
//     $.writeln(blendIf.destBlackMin)
//     $.writeln(blendIf.destBlackMax)
//     $.writeln(blendIf.destWhiteMin)
//     $.writeln(blendIf.destWhiteMax)
//     alert(blendIf.destBlackMin + "," + blendIf.destBlackMax + "," + blendIf.destWhiteMin + "," + blendIf.destWhiteMax)
// }



// function test2(_idx) {
//     try {
//         // var d1 = new ActionDescriptor();
//         var r = new ActionReference();
//         // var d1 = new ActionDescriptor();
//         // var d2 = new ActionDescriptor();
//         // var d3 = new ActionDescriptor();
//         // AR points to the Active Layer
//         r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));

//         // r.putIndex(sTID("layer"), _idx);
//         d1 = executeActionGet(r);
//         d1.putReference(sTID('null'), r);
//         d2 = d1.getObjectValue(s2t("blendOptions"))
//         // d2 = d1.getList(s2t("blendRange"))
//         // // d1.putObject(sTID('blendOptions'), sTID('blendOptions'), 99);
//         // if(d1.hasKey(stringIDToTypeID('blendOptions'))) {
//         //     alert("ja")
//         // } else {
//         //     alert("nenin")
//         // }
//         // d2 = d1.getObjectValue(s2t('blendOptions'))
//         // d3 = d2.getList(s2t("blendRange"))


//         alert("2 " + d2)





//     } catch (e) {
//         alert(e)
//     }


//     // return;
// }

// alert(layer_getIDXbyString("Tiefen_check"))
// alert(layer_blendif_get(19)[0]+","+layer_blendif_get(19)[1]+","+layer_blendif_get(19)[2]+","+layer_blendif_get(19)[3])
// alert(layer_blendif_get(layer_getIDXbyString("Tiefen_check")[0])[0])

// function layer_blendif_get(_idx) {
//     try {
//         var r = new ActionReference();
//         var d = new ActionDescriptor();
//         var array = [];

//         r.putProperty(s2t("property"), s2t("json"));
//         if (!isNaN(_idx)) {
//             r.putIndex(s2t("layer"), _idx)
//         } else {
//             r.putEnumerated(s2t('layer'), s2t('ordinal'), s2t('targetEnum'))
//         }
//         d.putReference(s2t("null"), r);
//         eval("var json=" + executeAction(s2t("get"), d, DialogModes.NO).getString(s2t("json")));

//         //TODO oh my god - wie bekomme ich die Anzahl der Parents in den Call ??
//         var parents = loopParentsIDXfor(_idx).length;
//         if (parents == 0) {
//             var call = json.layers[0]
//         } else if (parents == 1) {
//             var call = json.layers[0].layers[0]
//         } else if (parents == 2) {
//             var call = json.layers[0].layers[0].layers[0]
//         } else if (parents == 3) {
//             var call = json.layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 4) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 5) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 6) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 7) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 8) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 9) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 10) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         }

//         if (call.blendOptions.blendRange) {
//             // $.writeln(json.layers[0].layers[0].layers[0].blendOptions.blendRange.toSource());
//             // $.writeln(call.blendOptions.blendRange.toSource())
//             var data = call.blendOptions.blendRange.toSource();
//             var data = data.replace(/^\[\(/g, "").replace(/\)\]$/g, ""); // umschliesende Klammern wegnehmen [(…)]
//             var data = data.replace(/([a-zA-Z]+)/g, "\"$1\"") // key goes string
//             var data = data.replace(/\"\"gray\"\"/g, "\"gray\"") // doppelte Anführungszeichen bei gray
//             // $.writeln(data)

//             var data = JSON.parse(data)

//             for (var i in data) {

//                 if (i == "destBlackMin" || i == "destBlackMax" || i == "destWhiteMin" || i == "desaturate") {
//                     array.push(data[i]);
//                 }
//             }
//             return array

//         } else {
//             // $.writeln("no blendOptions found");
//         }
//     } catch (e) {
//         alert(e)
//     }
// }

// alert(getActiveLayerIndex())


// blendif_2(f, layer_blendif_get(3)[0], layer_blendif_get(3)[1], layer_blendif_get(3)[2]-5, layer_blendif_get(3)[3]-5)

// toogleVisibility2("check ")
// alert(getVisible2("check "))


// hide Layer/Groupe by IDX, name, or activeLayer
// function hide2(_input) {
//     try {
//         var d = new ActionDescriptor();
//         var l = new ActionList();
//         var r = new ActionReference();
//         if (typeof _input == "number") {
//             // hide by Index
//             r.putIndex(s2t("layer"), _input);
//         } else if (typeof _input == "string") {
//             if (layer_checkExistence2(_input)) {
//                 // hide by Layername
//                 r.putName(s2t('layer'), _input);
//             } else {
//                 // hide by Layername via Regex // first hit
//                 r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//             }
//             // } else if (typeof _input == "boolean" || typeof _input == 'undefined') {
//         } else if (typeof _input === "undefined") {
//             // hide activeLayer
//             r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//         }
//         l.putReference(r);
//         d.putList(c2t("null"), l);
//         executeAction(s2t("hide"), d, DialogModes.NO)
//     } catch (e) {}
// }


// function toogleVisibility2(_input) {
//     try {
//         var d = new ActionDescriptor();
//         var l = new ActionList();
//         var r = new ActionReference();

//         if (getVisible2(_input)) {
//             if (typeof _input == "number") {
//                 r.putIndex(s2t("layer"), _input);
//             } else if (typeof _input == "string") {
//                 if (layer_checkExistence2(_input)) {
//                     r.putName(s2t('layer'), _input);
//                 } else {
//                     r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//                 }
//             } else if (typeof _input == 'undefined') {
//                 r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//             }
//             l.putReference(r);
//             d.putList(c2t("null"), l);
//             executeAction(s2t("hide"), d, DialogModes.NO);
//         } else {
//             if (typeof _input == "number") {
//                 r.putIndex(s2t("layer"), _input);
//             } else if (typeof _input == "string") {
//                 if (layer_checkExistence2(_input)) {
//                     r.putName(s2t('layer'), _input);
//                 } else {
//                     r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//                 }
//             } else if (typeof _input == 'undefined') {
//                 r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//             }
//             l.putReference(r);
//             d.putList(c2t("null"), l);
//             executeAction(s2t("show"), d, DialogModes.NO);
//         }
//     } catch (e) {}
// }

// function getVisible2(_input) {
//     try {
//         var r = new ActionReference();
//         if (typeof _input == "number") {
//             r.putIndex(s2t("layer"), _input);
//         } else if (typeof _input == "string") {
//             if (layer_checkExistence2(_input)) {
//                 r.putName(s2t('layer'), _input);
//             } else {
//                 r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//             }
//         } else if (typeof _input == 'undefined') {
//             r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//         }
//         var vis = executeActionGet(r).getInteger(s2t('visible'));
//         return vis;
//     } catch (e) {}
// }






// checkTiefenLichter_create(11)
// checkTiefenLichter_edit_button(10)
// checkTiefenLichter_create_button(10)
// DodgeBurn_highlow(true)

// // create_check_blendif
// function checkTiefenLichter_create() {} 

// // create_check_blendif_button
// function checkTiefenLichter_create_button() {}

// // blendif_edit_both
// function checkTiefenLichter_edit() {}

// // blendif_edit
// function layer_blendif_edit() {}

// // blendif_edit_button
// function checkTiefenLichter_edit_button() {}

// function checkTiefenLichter_create(__value) {
//     createGroup("check " + __value + "", "passThrough", "none", 100, f);
//     createColorLayer("Tiefen_check", "normal", "none", 100, "none", 0, 0, 255);
//     blendif("current", 0, 0, 0 + __value, 0 + __value);
//     createColorLayer("Lichter_check", "normal", "none", 100, "none", 255, 0, 0);
//     blendif("current", 255 - __value, 255 - __value, 255, 255)
//     gotoLayer("check " + __value + "");
//     toogleOpenCloseSet();
//     hide();
//     if (layer_checkExistence("nachher")) {
//         moveLayer("check " + __value + "", "nachher", "up");
//         gotoLayer("check " + __value + "");
//         moveLayer3("down", 1);
//     } else {
//         // TODO move to TOP
//     }
// }

// function checkTiefenLichter_create_button(_value) {
//     try {
//         if (!layer_checkExistenceByRegex("check ")) {
//             try {
//                 doc.suspendHistory("Create checkFolder", "checkTiefenLichter_create(" + _value + ")")
//             } catch (e) {
//                 alert("Error1:" + e)
//             };
//         } else {
//             toogleVisibility("check ")
//         }
//     } catch (e) {
//         alert("Error2:" + e)
//     }
// }


// function layer_blendif_edit(__real, _idx, _lights, _shadows) {
//     var __shadows = layer_blendif_get(_idx)[2] + _shadows;
//     var __lights = layer_blendif_get(_idx)[0] + _lights;

//     var i = 0;
//     if (__shadows < 0) {
//         var i = 1;
//         while (__shadows + i < 0) {
//             i++;
//         }
//         var __shadows = __shadows + i;
//     }

//     var j = 0;
//     if (__lights > 255) {
//         var j = 1;
//         while (__lights - j > 255) {
//             j++;
//         }
//         var __lights = __lights - j;
//     }
//     // alert("tiefen->" + __shadows + " lichter->" + __lights)
//     if (__real) {
//         blendif(
//             _idx,
//             __lights,
//             __lights,
//             __shadows,
//             __shadows
//         )
//         blendif_check_steps.push(0 + __shadows);
//         blendif_check_steps.push(255 - __lights);
//     }

//     blendif_check_value.push(_shadows + i);
//     blendif_check_value.push(-1 * (_lights - j));
//     return;
// }


// function checkTiefenLichter_edit(_real, __value) {
//     blendif_check_steps = [];
//     blendif_check_value = [];
//     layer_blendif_edit(_real, layer_getIDXbyString("Tiefen_check")[0], 0, __value);
//     layer_blendif_edit(_real, layer_getIDXbyString("Lichter_check")[0], -1 * (__value), 0);

//     if (_real) {
//         // sort to get the lowest value //to name the groupe
//         blendif_check_steps.sort(function(a, b) {
//             return a - b
//         });
//         layer_renameByIDX(layer_getIDXbyString("check ")[0], "check " + blendif_check_steps[0]);
//     } else {
//         if (__value >= 0) {
//             // sort to get the highest value //for the protocol
//             blendif_check_value.sort(function(a, b) {
//                 return b - a
//             });
//         } else {
//             // sort to get the lowest value
//             blendif_check_value.sort(function(a, b) {
//                 return a - b
//             });
//         }
//     }
//     return blendif_check_value[0];
// }


// function checkTiefenLichter_edit_button(_value) {
//     try {
//         if (layer_checkExistenceByRegex("check")) {
//             try {
//                 doc.suspendHistory("TiefenLichter Check " + checkTiefenLichter_edit(false, _value) + " ", "checkTiefenLichter_edit(true, " + _value + ");")
//             } catch (e) {
//                 alert("Error1:" + e)
//             };
//         }
//     } catch (e) {
//         alert("Error2:" + e)
//     }
// }




// function layer_checkExistence2(_input) {
//     try {
//         var r = new ActionReference();
//         r.putProperty(s2t("property"), s2t("itemIndex"));
//         if (typeof _input == "number") {
//             r.putIndex(s2t("layer"), _input);
//         } else if (typeof _input == "string") {
//             r.putName(s2t('layer'), _input);
//         }
//         var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
//         return true;
//     } catch (e) {
//         return false;
//     }
// }



// alert(layer_checkExistenceByRegex("check"))
// function layer_checkExistenceByRegex(_input) {
//     if (layer_getIDXbyString(_input).length !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function layer_renameByIDX(_idx, _name) {
//     if (_idx == 0) return;
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     r.putIndex(s2t('layer'), _idx);
//     d.putReference(s2t('null'), r);
//     var d2 = new ActionDescriptor();
//     d2.putString(s2t('name'), _name);
//     d.putObject(s2t('to'), s2t('layer'), d2);
//     executeAction(s2t('set'), d, DialogModes.NO);
// }


// function layer_getIDXbyName(_name) {
//     var r = new ActionReference();
//     r.putProperty(s2t("property"), s2t("itemIndex"));
//     // r.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
//     r.putName(s2t('layer'), _name);
//     return hasBackground() ? executeActionGet(r).getInteger(s2t("itemIndex")) - 1 : executeActionGet(r).getInteger(s2t("itemIndex"));
// };

// alert(app.activeDocument.historyStates.getByName("Ebenensichtbarkeit"))
// doc.activeHistoryState = 




///////////////////////////////////////////////
// correct quick and fix the mapping Verzerrung
// correctVerzerrung()
function correctVerzerrung() {
    try {
        var name_original = app.activeDocument.name.replace("__RGB.psd", "")
    } catch (e) {
        alert("Error2: " + e)
    }
    var folders = [];
    // var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    var topLevel = new Folder("/Users/simon/Arbeit/11Freunde/TextilOnDemand/DNG/Shooting\ Sortierung")
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        // files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        files = folders[a].getFiles(/.+\.(tif|psd|jpg)$/i);
        if (files.length < 1) continue;

        for (var b in files) {
            var thisFile = files[b];
            var doc_file = new File(thisFile);
            // var docFileName_decode = decodeURI(doc_file.name);
            // alert(doc_file)
            // app.open(doc_file);
            // var doc = app.activeDocument;
            var doc_filename = GetFileNameOnly(decodeURI(doc_file.name));
            // 

            try {
                if (doc_filename.match(/__map/g)) {
                    map_doc_filename = doc_filename.replace("__map", "")
                    // alert(map_doc_filename)
                    // alert(name_original)
                    if (name_original == map_doc_filename) {
                        var doc_file_plus = doc_file.name.replace("__map", "__map+");
                        var doc_path = doc_file.path;
                        // alert(doc_file.path)
                        // alert(doc_file_plus)
                        var map_plus = new File(doc_path + "/" + doc_file_plus);
                        if (map_plus.exists) {
                            app.open(map_plus);
                        } else {
                            app.open(doc_file);
                        }
                        // alert(doc_file)
                        // alert(map_doc_filename)
                        // app.open(doc_file);
                        anordung_2vertical();
                        anordnung_zoom(-1);
                        return;
                    }


                }

                /* PUT CODE HERE */

            } catch (e) {
                alert("Error: " + e)
            }
        }
    }
    alert("fertig")

    function FindAllFolders(srcFolderStr, destArray) {
        var fileFolderArray = Folder(srcFolderStr).getFiles();
        for (var i = 0; i < fileFolderArray.length; i++) {
            var fileFoldObj = fileFolderArray[i];
            if (fileFoldObj instanceof File) {} else {
                destArray.push(Folder(fileFoldObj));
                FindAllFolders(fileFoldObj.toString(), destArray);
            }
        }
        return destArray;
    };
};





// alert("ding")
// togglePalettes()

// if(app_panelsVisible()) {
//     togglePalettes()
// }
// if(app_panelsVisible()) togglePalettes();

// alert(panels_visible() ? "Panels are visible" : "Panels are hidden")

// function app_panelsVisible() {
//     try {
//         var r = new ActionReference();
//         r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("panelList"));
//         r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));

//         var list = executeActionGet(r).getList(stringIDToTypeID("panelList"));

//         var viz = false;

//         for (var i = 0; i < list.count; i++) {
//             var obj = list.getObjectValue(i);

//             var id = obj.getString(stringIDToTypeID("ID"));

//             // skip some panels if shift+tab was pressed

//             if (id == "panelid.static.toolbar") continue; // skip tool panel
//             if (id == "panelid.static.options") continue; // skip options panel
//             if (id == "panelid.static.blrb") continue; // what is panelid.static.blrb ??


//             if (obj.getBoolean(stringIDToTypeID("visible"))) {
//                 viz = true;
//                 break;
//             }
//         }

//         return viz;
//     } catch (e) {
//         throw (e);
//     }
// }

function app_panelsVisible2() {
    try {
        var r = new ActionReference();
        r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("panelList"));
        r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));

        var list = executeActionGet(r).getList(stringIDToTypeID("panelList"));

        var viz = false;

        for (var i = 0; i < list.count; i++) {
            var obj = list.getObjectValue(i);

            var id = obj.getString(stringIDToTypeID("ID"));

            // skip some panels if shift+tab was pressed

            // if (id == "panelid.static.toolbar") continue; // skip tool panel
            // if (id == "panelid.static.options") continue; // skip options panel
            if (id == "panelid.static.info") {
                // alert(obj.getBoolean(stringIDToTypeID("visible")))
                obj.visible = false;
            }


            // if (obj.getBoolean(stringIDToTypeID("visible"))) {
            //     viz = true;
            //     break;
            // }
        }

        // return viz;
    } catch (e) {
        throw (e);
    }
}
// app_panelsVisible2()

// panelid.static.toolbar
// panelid.static.options
// panelid.static.actions
// panelid.static.gradients
// panelid.static.styles
// panelid.static.swatches
// panelid.static.patterns
// panelid.static.histogram
// panelid.static.info
// panelid.static.paths
// panelid.static.customshapes
// panelid.static.toolpresets
// panelid.static.picker
// panelid.static.channels
// panelid.static.layers
// panelid.static.comps
// panelid.static.animation
// panelid.static.clonesource
// panelid.static.measurement
// panelid.static.history
// panelid.static.navigator
// panelid.static.patchmatchfillpreview
// panelid.static.textcharacter
// panelid.static.textparagraph
// panelid.static.textcharstyle
// panelid.static.textparastyle
// panelid.static.textglyphspanel
// panelid.static.annotation
// panelid.static.3d
// panelid.static.create
// panelid.static.properties
// panelid.dynamic.uxp/0a4bb5cd/uxp.benz.webSharpPro.ext
// panelid.dynamic.uxp/4ce4c1cb/vanilla
// panelid.dynamic.uxp/e3f22fe6/vanilla
// panelid.dynamic.uxp/com.adobe.cclibrariespanel/ccLibrariesPanel
// panelid.dynamic.uxp/com.adobe.ccx.comments-webview/ccx-comments-uxp-webview
// panelid.dynamic.uxp/com.adobe.ccx.sharesheet/invite
// panelid.dynamic.uxp/com.adobe.ccx.timeline/ccxTimeline
// panelid.dynamic.uxp/com.adobe.pluginspanel/pluginsPanel
// panelid.static.brushstyler
// panelid.static.brushpresets
// panelid.static.smartbrush
// panelid.dynamic.swf.csxs.com.adobe.DesignLibraries.angular
// panelid.dynamic.swf.csxs.com.farbe2.test.panel
// panelid.dynamic.swf.csxs.com.wallstrom.ToolkitColorWheels.extension1
// panelid.dynamic.swf.csxs.com.wallstrom.ToolkitLuminosity.extension1
// panelid.dynamic.swf.csxs.MagicPickerCC2014
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitN1.extension1
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitN3.extension1
// panelid.dynamic.swf.csxs.com.my.test.panel
// panelid.dynamic.swf.csxs.com.softproof.panel
// panelid.dynamic.swf.csxs.KLR
// panelid.dynamic.swf.csxs.com.ding.ext
// panelid.dynamic.swf.csxs.com.panel_test_1
// panelid.dynamic.swf.csxs.com.lumenzia.ext
// panelid.dynamic.swf.csxs.com.cs-extensions.ThemeSwitcher
// panelid.dynamic.swf.csxs.net.sytes.chuwa.workspaceswitcher
// panelid.dynamic.swf.csxs.net.sytes.chuwa.propertyExplorer
// panelid.dynamic.swf.csxs.com.example.helloworld.panel
// panelid.dynamic.swf.csxs.com.svenstork.photoshop.InteractiveLuminosityMasks
// panelid.dynamic.swf.csxs.com.svenstork.photoshop.InteractiveBlenderPanel
// panelid.dynamic.swf.csxs.com.lumenziabasics.ext
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitN2.extension1
// panelid.dynamic.swf.csxs.Freistellen.extension
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitWorkflow.extension1
// panelid.dynamic.swf.csxs.MixColorsCC2014
// panelid.dynamic.swf.csxs.MagicTintsCC2014
// panelid.dynamic.swf.csxs.MagicSquireCC2014
// panelid.static.blrb










// alert(doc.activeLayer.kind)

// doc.suspendHistory("autoLevel: autoContrast +autoNeutrals", "adjustLayer_levels_autoLevels('autoContrast', f)");
// doc.suspendHistory("autoLevel: autoContrast +autoNeutrals", "adjustLayer_levels_autoLevels_wrapper('autoContrast', t)");


// function adjustLayer_levels_autoLevels_wrapper(__algorithmus, __autoNeutrals) {
//     var startLayer = layer_selectedIDX_get();

//     if (doc.activeLayer.kind == "LayerKind.LEVELS") {
//         // alert("ding")
//         makeVisible();

//     } else if (layer_checkExistence("AutoTonwert")) {
//         gotoLayer("AutoTonwert");
//         makeVisible();

//     }
//     else {
//         alert("keine TonWert-Ebene ausgewählt bzw vorbereitet")
//     }

//     adjustLayer_levels_autoLevels(__algorithmus, __autoNeutrals)
//     layer_selectedIDX_set(startLayer);
// }


// createGroup("rahmenlos", "passThrough", "none", 100, f);
// hide();
// createLayer("AutoTonwert", "levels", "normal", "gray", 80, "black", f,f); 
// toogleOpenCloseSet();



// var theLayers = collectLayers(app.activeDocument.activeLayer, []);
// alert(theLayers.join("\n"));
////// function collect all layers //////
function layer_findChild2(theParent, allLayers) {
    if (!allLayers) {
        var allLayers = new Array
    } else {};
    var theNumber = theParent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = theParent.layers[m];
        // theLayer.name = theParent.name + "_" + m;
        // apply the function to layersets;
        if (theLayer.typename == "ArtLayer") {
            // allLayers.push(theLayer)
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "rahmenlos") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "RL");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Passepartout_Nussbaum") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "PP-nussbaum");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Passepartout_Naturholz") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "PP-natur");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Passepartout_Weiß") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "PP-weiss");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Passepartout_Schwarz") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "PP-schwarz");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Schattenfuge_Nussbaum") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "SF-nussbaum");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Schattenfuge_Naturholz") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "SF-natur");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Schattenfuge_Weiß") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "SF-weiss");
            // allLayers.push(theLayer);
        } else if (theLayer.typename == "LayerSet" && theLayer.name == "Schattenfuge_Schwarz") {
            // allLayers = (layer_findChild2(theLayer, allLayers))
            thisLayerIDX = theLayer.itemIndex;
            putLayerNameByIndex_simon(thisLayerIDX, "SF-schwarz");
            // allLayers.push(theLayer);
        } else {
            allLayers = (layer_findChild2(theLayer, allLayers))
            // this line includes the layer groups;
            allLayers.push(theLayer);
        }
    };
    return allLayers
};




/* RENAME Layers -- ganz gut */
// loopOpenDocs();

function loopOpenDocs() {
    var firstDoc = app.activeDocument;
    for (var i = 0; i < app.documents.length; i++) {
        app.activeDocument = app.documents[i];
        var doc = app.activeDocument;

        try {
            /* PUT CODE HERE */
            layer_findChild2(app.activeDocument.activeLayer, []);
            // alert("hier")

        } catch (e) {
            alert(e)
        }
    };
    app.activeDocument = firstDoc;
}



function layer_findChild(_parent) {
    var theNumber = _parent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = _parent.layers[m];
        if (theLayer.typename == "LayerSet" && theLayer.name == "rahmenlos") {
            thisLayerIDX = theLayer.itemIndex;
            $.writeln(thisLayerIDX);
            putLayerNameByIndex_simon(thisLayerIDX, "RL");

        }
    };
    return;
};


function putLayerNameByIndex_simon(idx, name) {
    if (idx == 0) return;
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIndex(charIDToTypeID('Lyr '), idx);
    desc.putReference(charIDToTypeID('null'), ref);
    desc.putBoolean(charIDToTypeID("MkVs"), false);
    var nameDesc = new ActionDescriptor();
    nameDesc.putString(charIDToTypeID('Nm  '), name);
    desc.putObject(charIDToTypeID('T   '), charIDToTypeID('Lyr '), nameDesc);
    executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
    executeAction(charIDToTypeID('setd'), desc, DialogModes.NO);
};



//Modal für Ebenen-Umbenennung
// main();
function main() {
    if (!documents.length) return;
    var selLayers = getSelectedLayersIdx();
    var selIdxNames = [];
    for (var s in selLayers) {
        selIdxNames.push([
            [Number(selLayers[s])],
            [getLayerNameByIndex(Number(selLayers[s]))]
        ]);
    }
    selectAllLayers();
    var allLayers = getSelectedLayersIdx();
    var allIdxNames = [];
    for (var n in allLayers) {
        allIdxNames.push([
            [Number(allLayers[n])],
            [getLayerNameByIndex(Number(allLayers[n]))]
        ]);
    }
    try {
        var win = new Window('dialog', 'Layer Name Editor');
        g = win.graphics;
        var myBrush = g.newBrush(g.BrushType.SOLID_COLOR, [0.99, 0.99, 0.99, 1]);
        g.backgroundColor = myBrush;
        win.orientation = 'column';
        win.p1 = win.add("panel", undefined, undefined, {
            borderStyle: "black"
        });
        win.p1.preferredSize = [380, 100];
        win.g1 = win.p1.add('group');
        win.g1.orientation = "row";
        win.title = win.g1.add('statictext', undefined, 'Layer Name Editor');
        win.title.alignment = "fill";
        var g = win.title.graphics;
        g.font = ScriptUI.newFont("Georgia", "BOLDITALIC", 22);
        win.g5 = win.p1.add('group');
        win.g5.orientation = "row";
        win.g5.alignment = 'fill';
        win.g5.spacing = 10;
        win.g5.rb1 = win.g5.add('radiobutton', undefined, 'Use Selected Layers');
        win.g5.rb2 = win.g5.add('radiobutton', undefined, 'Use All Layers');
        win.g5.rb1.value = true;
        win.g10 = win.p1.add('group');
        win.g10.orientation = "row";
        win.g10.alignment = 'fill';
        win.g10.rb1 = win.g10.add('radiobutton', undefined, 'Prefix');
        win.g10.rb2 = win.g10.add('radiobutton', undefined, 'Suffix');
        win.g10.rb3 = win.g10.add('radiobutton', undefined, 'Remove');
        win.g10.rb4 = win.g10.add('radiobutton', undefined, 'Insert');
        win.g10.rb5 = win.g10.add('radiobutton', undefined, 'Replace');
        win.g10.rb5.value = true;
        win.g15 = win.p1.add('group');
        win.g15.orientation = "row";
        win.g15.alignment = 'fill';
        win.g15.cb1 = win.g15.add('checkbox', undefined, 'Create Snapshot');

        win.stack = win.add('group');
        win.stack.spacing = 10;
        win.stack.orientation = 'stack';
        win.stack.alignment = "left";

        win.p2 = win.stack.add("panel", undefined, undefined, {
            borderStyle: "black"
        }); //Prefix
        win.p2.preferredSize = [380, 100];
        win.p2.visible = false;
        win.g200 = win.p2.add('group');
        win.g200.orientation = "row";
        win.g200.alignment = 'fill';
        win.g200.st1 = win.g200.add('statictext', undefined, 'Prefix');
        win.g200.st1.preferredSize = [75, 20];
        win.g200.et1 = win.g200.add('edittext');
        win.g200.et1.preferredSize = [200, 20];

        win.p3 = win.stack.add("panel", undefined, undefined, {
            borderStyle: "black"
        }); //Suffix
        win.p3.preferredSize = [380, 100];
        win.p3.visible = false;
        win.g300 = win.p3.add('group');
        win.g300.orientation = "row";
        win.g300.alignment = 'fill';
        win.g300.st1 = win.g300.add('statictext', undefined, 'Suffix');
        win.g300.st1.preferredSize = [75, 20];
        win.g300.et1 = win.g300.add('edittext');
        win.g300.et1.preferredSize = [200, 20];

        win.p4 = win.stack.add("panel", undefined, undefined, {
            borderStyle: "black"
        }); //Remove
        win.p4.preferredSize = [380, 100];
        win.p4.visible = false;
        win.g400 = win.p4.add('group');
        win.g400.orientation = "row";
        win.g400.alignment = 'fill';
        win.g400.rb1 = win.g400.add('radiobutton', undefined, 'First(n) chars');
        win.g400.rb2 = win.g400.add('radiobutton', undefined, 'Last(n) chars');
        win.g400.rb3 = win.g400.add('radiobutton', undefined, 'Range From(n)');
        win.g400.rb1.value = true;
        win.g410 = win.p4.add('group');
        win.g410.orientation = "row";
        win.g410.alignment = 'fill';
        win.g410.et1 = win.g410.add('edittext');
        win.g410.et1.preferredSize = [50, 20];
        win.g410.et1.onChanging = function() {
            if (this.text.match(/[^\-\.\d]/)) {
                this.text = this.text.replace(/[^\-\.\d]/g, '');
            }
        };
        win.g410.st1 = win.g410.add('statictext', undefined, 'Number of Chars.');
        win.g410.et2 = win.g410.add('edittext');
        win.g410.et2.preferredSize = [50, 20];
        win.g410.et2.onChanging = function() {
            if (this.text.match(/[^\-\.\d]/)) {
                this.text = this.text.replace(/[^\-\.\d]/g, '');
            }
        };
        win.g410.et2.visible = false;
        win.g410.st1.visible = false;
        win.g400.rb1.onClick = function() {
            win.g410.et2.visible = false;
            win.g410.st1.visible = false;
        }
        win.g400.rb2.onClick = function() {
            win.g410.et2.visible = false;
            win.g410.st1.visible = false;
        }
        win.g400.rb3.onClick = function() {
            win.g410.et2.visible = true;
            win.g410.st1.visible = true;
        }

        win.p5 = win.stack.add("panel", undefined, undefined, {
            borderStyle: "black"
        }); //Insert
        win.p5.preferredSize = [380, 100];
        win.p5.visible = false;
        win.g500 = win.p5.add('group');
        win.g500.orientation = "row";
        win.g500.alignment = 'fill';
        win.g500.st1 = win.g500.add('statictext', undefined, 'Insert');
        win.g500.st1.preferredSize = [75, 20];
        win.g500.et1 = win.g500.add('edittext');
        win.g500.et1.preferredSize = [200, 20];
        win.g510 = win.p5.add('group');
        win.g510.orientation = "row";
        win.g510.alignment = 'fill';
        win.g510.st1 = win.g510.add('statictext', undefined, 'At position');
        win.g510.st1.preferredSize = [75, 20];
        win.g510.et1 = win.g510.add('edittext');
        win.g510.et1.preferredSize = [50, 20];
        win.g510.et1.onChanging = function() {
            if (this.text.match(/[^\-\.\d]/)) {
                this.text = this.text.replace(/[^\-\.\d]/g, '');
            }
        };

        win.p6 = win.stack.add("panel", undefined, undefined, {
            borderStyle: "black"
        }); //Replace
        win.p6.preferredSize = [380, 100];
        win.g600 = win.p6.add('group');
        win.g600.orientation = "row";
        win.g600.alignment = 'fill';
        win.g600.st1 = win.g600.add('statictext', undefined, 'Replace');
        win.g600.st1.preferredSize = [75, 20];
        win.g600.et1 = win.g600.add('edittext');
        win.g600.et1.preferredSize = [200, 20];
        win.g610 = win.p6.add('group');
        win.g610.orientation = "row";
        win.g610.alignment = 'fill';
        win.g610.st1 = win.g610.add('statictext', undefined, 'With');
        win.g610.st1.preferredSize = [75, 20];
        win.g610.et1 = win.g610.add('edittext');
        win.g610.et1.preferredSize = [200, 20];
        win.g620 = win.p6.add('group');
        win.g620.orientation = "row";
        win.g620.alignment = 'fill';
        win.g620.cb1 = win.g620.add('checkbox', undefined, 'Global');
        win.g620.cb2 = win.g620.add('checkbox', undefined, 'Case Insensitive');
        win.g620.cb2.value = true;

        win.g10.rb1.onClick = function() {
            if (win.g10.rb1.value) {
                win.p2.visible = true;
                win.p3.visible = false;
                win.p4.visible = false;
                win.p5.visible = false;
                win.p6.visible = false;
            }
        }
        win.g10.rb2.onClick = function() {
            if (win.g10.rb2.value) {
                win.p2.visible = false;
                win.p3.visible = true;
                win.p4.visible = false;
                win.p5.visible = false;
                win.p6.visible = false;
            }
        }
        win.g10.rb3.onClick = function() {
            if (win.g10.rb3.value) {
                win.p2.visible = false;
                win.p3.visible = false;
                win.p4.visible = true;
                win.p5.visible = false;
                win.p6.visible = false;
            }
        }
        win.g10.rb4.onClick = function() {
            if (win.g10.rb4.value) {
                win.p2.visible = false;
                win.p3.visible = false;
                win.p4.visible = false;
                win.p5.visible = true;
                win.p6.visible = false;
            }
        }
        win.g10.rb5.onClick = function() {
            if (win.g10.rb5.value) {
                win.p2.visible = false;
                win.p3.visible = false;
                win.p4.visible = false;
                win.p5.visible = false;
                win.p6.visible = true;
            }
        }

        win.g1000 = win.add('group');
        win.g1000.orientation = "row";
        win.g1000.alignment = 'center';
        win.g1000.bu1 = win.g1000.add('button', undefined, 'Process');
        win.g1000.bu1.preferredSize = [150, 30];
        win.g1000.bu2 = win.g1000.add('button', undefined, 'Cancel');
        win.g1000.bu2.preferredSize = [150, 30];
        snapshotFlag = false;
        win.g1000.bu1.onClick = function() {
            if (win.g15.cb1.value && !snapshotFlag) {
                snapshotFlag = true;
                snapShot();
            }
            if (win.g10.rb1.value) { //Prefix
                if (win.g200.et1.text == '') {
                    alert("No Prefix has been entered!");
                    return;
                }
                win.close(0);
                if (win.g5.rb1.value) {
                    var lList = selIdxNames;
                } else {
                    var lList = allIdxNames;
                };
                for (var z in lList) {
                    putLayerNameByIndex(Number(lList[z][0]), win.g200.et1.text.toString() + lList[z][1].toString());
                }
            }
            if (win.g10.rb2.value) { //suffix
                if (win.g300.et1.text == '') {
                    alert("No Suffix has been entered!");
                    return;
                }
                win.close(0);
                if (win.g5.rb1.value) {
                    var lList = selIdxNames;
                } else {
                    var lList = allIdxNames;
                };
                for (var z in lList) {
                    putLayerNameByIndex(Number(lList[z][0]), lList[z][1].toString() + win.g300.et1.text.toString());
                }
            }
            if (win.g10.rb3.value) { //Remove
                if (win.g400.rb1.value) {
                    if (win.g410.et1.text == '') {
                        alert("No number has been entered!");
                        return;
                    }
                    if (Number(win.g410.et1.text) < 1) {
                        alert("You can't remove zero characters!");
                        return;
                    }
                    win.close(0);
                    if (win.g5.rb1.value) {
                        var lList = selIdxNames;
                    } else {
                        var lList = allIdxNames;
                    };
                    for (var z in lList) {
                        var n = Number(win.g410.et1.text);
                        var rex = "/^(.{" + n + "})(.+)/";
                        putLayerNameByIndex(Number(lList[z][0]), lList[z][1].toString().match(eval(rex))[2]);
                    }
                }
                if (win.g400.rb2.value) {
                    if (win.g410.et1.text == '') {
                        alert("No number has been entered!");
                        return;
                    }
                    if (Number(win.g410.et1.text) < 1) {
                        alert("You can't remove zero characters!");
                        return;
                    }
                    win.close(0);
                    if (win.g5.rb1.value) {
                        var lList = selIdxNames;
                    } else {
                        var lList = allIdxNames;
                    };
                    for (var z in lList) {
                        var n = Number(win.g410.et1.text);
                        var rex = "/(.+)(.{" + n + "}$)/";
                        putLayerNameByIndex(Number(lList[z][0]), lList[z][1].toString().match(eval(rex))[1]);
                    }
                }
                if (win.g400.rb3.value) {
                    if (win.g410.et1.text == '' || win.g410.et2.text == '') {
                        alert("No number has been entered!");
                        return;
                    }
                    if (Number(win.g410.et1.text) < 1 || Number(win.g410.et2.text) < 1) {
                        alert("You can't remove zero characters!");
                        return;
                    }
                    win.close(0);
                    if (win.g5.rb1.value) {
                        var lList = selIdxNames;
                    } else {
                        var lList = allIdxNames;
                    };
                    for (var z in lList) {
                        var n = Number(win.g410.et1.text);
                        var r = Number(win.g410.et2.text);
                        var rex = "/^(.{" + n + "})(.{" + r + "})(.+)/";
                        var parts = lList[z][1].toString().match(eval(rex));
                        var newName = parts[1] + parts[3];
                        putLayerNameByIndex(Number(lList[z][0]), newName);
                    }
                }
            }
            if (win.g10.rb4.value) { //Insert
                if (win.g500.et1.text == '') {
                    alert("You have not entered a string!");
                    return;
                }
                if (win.g510.et1.text == '') {
                    alert("You must enter a start number!");
                    return;
                }
                win.close(0);
                if (win.g5.rb1.value) {
                    var lList = selIdxNames;
                } else {
                    var lList = allIdxNames;
                };
                for (var z in lList) {
                    var n = Number(win.g510.et1.text);
                    if (n < 1) n = 1;
                    var rex = "/^(.{" + n + "})(.+)/";
                    var parts = lList[z][1].toString().match(eval(rex));
                    var newName = parts[1] + win.g500.et1.text.toString() + parts[2];
                    putLayerNameByIndex(Number(lList[z][0]), newName);
                }
            }
            if (win.g10.rb5.value) { //Replace
                if (win.g600.et1.text == '') {
                    alert("No replace value has been entered!");
                    return;
                }
                win.close(0);
                if (win.g620.cb1.value && !win.g620.cb2.value) var changeFrom = new RegExp(win.g600.et1.text.toString(), "g");
                if (!win.g620.cb1.value && win.g620.cb2.value) var changeFrom = new RegExp(win.g600.et1.text.toString(), "i");
                if (win.g620.cb1.value && win.g620.cb2.value) var changeFrom = new RegExp(win.g600.et1.text.toString(), "gi");
                if (!win.g620.cb1.value && !win.g620.cb2.value) var changeFrom = new RegExp(win.g600.et1.text.toString());
                if (win.g5.rb1.value) {
                    var lList = selIdxNames;
                } else {
                    var lList = allIdxNames;
                };
                for (var z in lList) {
                    if (changeFrom.test(lList[z][1].toString())) {
                        putLayerNameByIndex(Number(lList[z][0]), lList[z][1].toString().replace(changeFrom, win.g610.et1.text.toString()));
                    }
                }
            }
        }
    } catch (e) {
        alert(e + " - " + e.line);
    }
    win.center();
    win.show();
};

function selectLayerByIndex(index, add) {
    add = (add == undefined) ? add = false : add;
    var ref = new ActionReference();
    ref.putIndex(charIDToTypeID("Lyr "), index);
    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), ref);
    if (add) desc.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));
    desc.putBoolean(charIDToTypeID("MkVs"), false);
    try {
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
    } catch (e) {}
};

function getLayerNameByIndex(idx) {
    var ref = new ActionReference();
    ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Nm  "));
    ref.putIndex(charIDToTypeID("Lyr "), idx);
    return executeActionGet(ref).getString(charIDToTypeID("Nm  "));
};

function selectAllLayers() {
    var desc29 = new ActionDescriptor();
    var ref23 = new ActionReference();
    ref23.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc29.putReference(charIDToTypeID('null'), ref23);
    executeAction(stringIDToTypeID('selectAllLayers'), desc29, DialogModes.NO);
};

function getSelectedLayersIdx() {
    var selectedLayers = new Array;
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var desc = executeActionGet(ref);
    if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
        desc = desc.getList(stringIDToTypeID('targetLayers'));
        var c = desc.count
        var selectedLayers = new Array();
        for (var i = 0; i < c; i++) {
            try {
                activeDocument.backgroundLayer;
                selectedLayers.push(desc.getReference(i).getIndex());
            } catch (e) {
                selectedLayers.push(desc.getReference(i).getIndex() + 1);
            }
        }
    } else {
        var ref = new ActionReference();
        ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("ItmI"));
        ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        try {
            activeDocument.backgroundLayer;
            selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI")) - 1);
        } catch (e) {
            selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI")));
        }
        var vis = app.activeDocument.activeLayer.visible;
        if (vis == true) app.activeDocument.activeLayer.visible = false;
        var desc9 = new ActionDescriptor();
        var list9 = new ActionList();
        var ref9 = new ActionReference();
        ref9.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
        list9.putReference(ref9);
        desc9.putList(charIDToTypeID('null'), list9);
        executeAction(charIDToTypeID('Shw '), desc9, DialogModes.NO);
        if (app.activeDocument.activeLayer.visible == false) selectedLayers.shift();
        app.activeDocument.activeLayer.visible = vis;
    }
    return selectedLayers;
};

function snapShot() {
    var desc9 = new ActionDescriptor();
    var ref5 = new ActionReference();
    ref5.putClass(charIDToTypeID('SnpS'));
    desc9.putReference(charIDToTypeID('null'), ref5);
    var ref6 = new ActionReference();
    ref6.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
    desc9.putReference(charIDToTypeID('From'), ref6);
    desc9.putEnumerated(charIDToTypeID('Usng'), charIDToTypeID('HstS'), charIDToTypeID('FllD'));
    executeAction(charIDToTypeID('Mk  '), desc9, DialogModes.NO);
};

function putLayerNameByIndex(idx, name) {
    if (idx == 0) return;
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIndex(charIDToTypeID('Lyr '), idx);
    desc.putReference(charIDToTypeID('null'), ref);
    desc.putBoolean(charIDToTypeID("MkVs"), false);
    var nameDesc = new ActionDescriptor();
    nameDesc.putString(charIDToTypeID('Nm  '), name);
    desc.putObject(charIDToTypeID('T   '), charIDToTypeID('Lyr '), nameDesc);
    executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
    executeAction(charIDToTypeID('setd'), desc, DialogModes.NO);
};





/** **/
/* 11F-BW Rahmendicke */
/** **/



/********************************************/
/* 11F-BW RENAME LAYER "OLD" ****************/
/********************************************/
// bw_renameLayer_old();
function bw_renameLayer_old() {
    var name_old = doc.activeLayer.name;
    doc.activeLayer.name = name_old + " OLD";
}


function run__bw_renameLayer_old_allLayer() {
    doc.activeLayer.name = "MAIN";
    bw_renameLayer_old_allLayer(app.activeDocument.activeLayer);
    gotoLayer("MAIN");
    bw_renameLayer_old_allLayer2(app.activeDocument.activeLayer);
    gotoLayer("MAIN");
}


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



// function goto_Children2(theParent, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height) {
//     var childrenLength = theParent.layers.length;
//     for (var i = 0; i < childrenLength; i++) {
//         var theLayer = theParent.layers[i];

//         if (theLayer.typename == "ArtLayer") {
//             if (theLayer.name == _LayerName) {
//                 gotoLayer(theLayer.itemIndex);
//                 try {
//                     layer__FX_visibility(false);
//                 } catch (e) {}

//                 run__bw_KorrekturRahmendicke(___faktor);

//                 var rahmen_width_ist = layer__getWidthHeight()[0];
//                 var rahmen_height_ist = layer__getWidthHeight()[1];

//                 var transform_rahmen_width = (_motiv_width + (_width_hilf_after * 2)) * 100 / rahmen_width_ist;
//                 var transform_rahmen_height = (_motiv_height + (_width_hilf_after * 2)) * 100 / rahmen_height_ist;

//                 bw_transform_ContentAwareScale2(0, 0, transform_rahmen_width, transform_rahmen_height, true, 100);

//                 try {
//                     layer__FX_visibility(true);
//                 } catch (e) {}
//                 gotoLayer(getParentIDXfor(getActiveLayerIndex()));
//                 toogleOpenCloseSet();
//             }



//         } else {
//             goto_Children2(theLayer, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height);
//         }

//     }
//     return;
// }







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



// run__bw_renameLayer_old_allLayer()
// run_run_resizeRahmen();
// run_mood_Rahmendicke();
// app.activeDocument.save();

// runALL_mood_Rahmendicke();

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




// runALL_mood_Rahmendicke2();

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



/**************/
/* NEXT TEST */
/**************/

// alert("ding");
// =======================================================

// ready_selectMotiv();

function ready_selectMotiv() {

    var startLayers = layer_selectedIDX_get();





    try {
        selectMotiv(false);
    } catch (e) {
        if (layer_checkExistence2("Original")) {
            gotoLayer("Original");
            selectMotiv(false);
        } else {
            // Loop Layers until selectMotiv is true
        }

    }


    layer_selectedIDX_set(startLayers);


}




function layer_checkExistence2(_selector) {
    try {
        var r = new ActionReference();
        r.putProperty(s2t("property"), s2t("itemIndex"));
        if (isNaN(_selector)) {
            r.putName(s2t("layer"), _selector)
        } else {
            r.putIndex(s2t("layer"), _selector)
        }
        // r.putIndex(s2t("layer"), _idx);
        var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
        return true;
    } catch (e) {
        return false;
    }
}


function selectMotiv(sampleAllLayers) {
    var d = new ActionDescriptor();
    d.putBoolean(s2t("sampleAllLayers"), sampleAllLayers);
    executeAction(s2t("autoCutout"), d, DialogModes.NO);
    return true;
}



/**************/
/* NEXT TEST */
/**************/

// adjustLayer_levels_autoLevels_wrapper('autoContrast', f);

function adjustLayer_levels_autoLevels_wrapper2(__algorithmus, __autoNeutrals) {
    var startLayer = layer_selectedIDX_get();

    if (doc.activeLayer.kind == "LayerKind.LEVELS") {
        // alert("ding")
        makeVisible();

    } else if (layer_checkExistence("AutoTonwert")) {
        gotoLayer("AutoTonwert");
        makeVisible();

    } else {
        alert("keine TonWert-Ebene ausgewählt bzw vorbereitet")
    }

    adjustLayer_levels_autoLevels2(__algorithmus, __autoNeutrals)
    layer_selectedIDX_set(startLayer);
}


function adjustLayer_levels_autoLevels2(_algorithmus, _autoNeutrals) {
    /* reset levels */
    adjustLayer_levels_edit(null);


    /* set autoLevels option */
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var l = new ActionList();
    var r = new ActionReference();
    var r2 = new ActionReference();

    r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    d3.putReference(s2t("channel"), r2);
    if (_algorithmus == "autoContrast") {
        d3.putBoolean(s2t("autoContrast"), true);
    }
    if (_algorithmus == "auto") {
        d3.putBoolean(s2t("auto"), true);
    }
    if (_algorithmus == "autoBlackWhite") {
        d3.putBoolean(s2t("autoBlackWhite"), true);
    }
    if (_algorithmus == "autoMachineLearning") {
        d3.putBoolean(s2t("autoMachineLearning"), true);
        d3.putBoolean(s2t("autoFaces"), true);
    }

    if (_autoNeutrals) {
        d3.putBoolean(s2t("autoNeutrals"), _autoNeutrals);
    }

    l.putObject(s2t("levelsAdjustment"), d3);
    d2.putList(s2t("adjustment"), l);
    d.putObject(s2t("to"), s2t("levels"), d2);
    executeAction(s2t("set"), d, DialogModes.ALL);
}



/**************/
/* NEXT TEST */
/**************/




// alert("dong");
// loopRahmendicke("2x3_quer", 2);
// layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, [], _FXscale);


const rahmen_faktors = [
    // 0.3,
    // 0.4,
    // 0.6,
    // 0.8,
    1.0,
    // 1.2,
    // 1.4,
    // 1.6,
    // 1.8,
    // 2.0,
    // 2.2
]



const formate_array2 = [
    // "Panorama",
    // "4x3_hoch",
    // "4x3_quer",
    // "2x3_hoch",
    "2x3_quer",
    // "DinA_hoch",
    // "DinA_quer",
    // "Quadrat"
]

const inputFile = "/Users/simon/Arbeit/11Freunde/Merch/NEUE_Bilderrahmen_2019/Rahmen_Master__WandbildMoods++++export2.psb";
// const inputFile = "/Users/simon/Arbeit/11Freunde/Merch/NEUE_Bilderrahmen_2019/Rahmen_Master__WandbildMoods++++exportTemp.psb";
// const inputFile = "/Users/simon/Arbeit/11Freunde/Merch/NEUE_Bilderrahmen_2019/Rahmen_Master__WandbildMoods++++test.psb";
const outputFolder_main = new Folder("/Users/simon/Arbeit/11Freunde/Merch/NEUE_Bilderrahmen_2019/_export4");
if (!outputFolder_main.exists) {
    outputFolder_main.create()
};

run_loopRahmendicke();
// check_pano(3, 102, 1000, 400);



function check_pano(_faktor, _width_hilf_after, _motiv_width, _motiv_height) {
    try {
        layer__FX_visibility(false);
    } catch (e) {}

    // var _width_hilf_after = hilf_getDimension2(app.activeDocument.activeLayer, "hilf_PP_rechts", [])[0][0];


    var transform_ContentAwareScale_factor = 100 / _faktor;
    var transform_free_factor = 100 * _faktor;
    bw_transform_ContentAwareScale2(0, 0, transform_ContentAwareScale_factor, transform_ContentAwareScale_factor, true, 100);
    bw_transform_free(0, 0, transform_free_factor, transform_free_factor, true);


    var rahmen_width_ist = layer__getWidthHeight()[0];
    var rahmen_height_ist = layer__getWidthHeight()[1];

    var transform_rahmen_width = (_motiv_width + (_width_hilf_after * 2)) * 100 / rahmen_width_ist;
    var transform_rahmen_height = (_motiv_height + (_width_hilf_after * 2)) * 100 / rahmen_height_ist;

    bw_transform_ContentAwareScale2(0, 0, transform_rahmen_width, transform_rahmen_height, true, 100);

    try {
        layer__FX_visibility(true);
    } catch (e) {}

}



/**************/
/****************************/
/*******************************************/
/********************************************************/
/* FUNCTIONS ********************************************************/
/********************************************************/
/*******************************************/
/****************************/
/**************/


function run_loopRahmendicke() {
    time_start()
    app.open(new File(inputFile));
    for (var faktor = 0; faktor < rahmen_faktors.length; faktor++) {

        for (var format = 0; format < formate_array2.length; format++) {
            $.writeln(formate_array2[format] + " // " + rahmen_faktors[faktor]);

            gotoLayer("cut__" + formate_array2[format]);
            loadSelectionOfMask();
            BW_crop();
            BW_deselectSelection();

            loopRahmendicke(formate_array2[format], rahmen_faktors[faktor]);

            resetImage();
        };
        resetImage();
    };
    resetImage();
    time_stop(start);
};








function loopRahmendicke(_format, _faktor) {

    var start_selectedLayers = layer_selectedIDX_get();
    gotoLayer("MAIN");
    layer__FX_visibility(false);

    gotoLayer(_format);
    makeVisible();
    var hilf_PP_width_before = hilf_getDimension2(app.activeDocument.activeLayer, "hilf_PP_rechts", [])[0][0];

    gotoLayer(_format);
    var hilf_SF_width_before = hilf_getDimension2(app.activeDocument.activeLayer, "hilf_SF_rechts", [])[0][0];

    var hilf_PP_width_after = hilf_PP_width_before * _faktor;
    var hilf_SF_width_after = hilf_SF_width_before * _faktor;

    gotoLayer(_format);
    var motiv_dimension = hilf_getDimension2(app.activeDocument.activeLayer, "Motiv", [])[0];
    var motiv_width = motiv_dimension[0];
    var motiv_height = motiv_dimension[1];

    // $.writeln("_faktor: " + _faktor);
    // $.writeln("hilf_PP_width_after: " + hilf_PP_width_after);
    // $.writeln("motiv_width: " + motiv_width);
    // $.writeln("motiv_height: " + motiv_height);
    // $.writeln("_format: " + _format);


    gotoLayer(_format);
    goto_Children2(app.activeDocument.activeLayer, "PP-Rahmen", _faktor, hilf_PP_width_after, motiv_width, motiv_height, _format);

    gotoLayer(_format);
    goto_Children2(app.activeDocument.activeLayer, "SF-Rahmen", _faktor, hilf_SF_width_after, motiv_width, motiv_height, _format);

    gotoLayer(_format);
    hide();

    gotoLayer("MAIN");
    layer__FX_visibility(false);
    layer_selectedIDX_set(start_selectedLayers);

    return " ";
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



function goto_Children2(theParent, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height, __format) {
    var childrenLength = theParent.layers.length;
    for (var i = 0; i < childrenLength; i++) {
        var theLayer = theParent.layers[i];

        if (theLayer.typename == "ArtLayer") {
            if (theLayer.name == _LayerName) {
                gotoLayer(theLayer.itemIndex);
                makeVisible();
                BW_deselectPath();
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

                var ParentName = theLayer.parent.name;
                // SaveForWeb("PN24", outputFolder, __format + "__" + ParentName + "__" + ___faktor * 100, f, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);


                var outputFolder_format = new Folder(outputFolder_main + "/" + __format);
                if (!outputFolder_format.exists) {
                    outputFolder_format.create()
                };


                var file = outputFolder_format + "/" + __format + "__" + ParentName + "__" + ___faktor * 100;
                // savePSD_v2(new File(file_RGB), t, t, t, f);

                $.writeln(__format + "__" + ParentName + "__" + ___faktor * 100);



                saveOptions = new TiffSaveOptions();
                saveOptions.embedColorProfile = true;
                saveOptions.alphaChannels = false;
                saveOptions.layers = false;
                saveOptions.byteOrder = ByteOrder.IBM;
                saveOptions.annotations = false;
                saveOptions.transparency = true;
                saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
                // saveOptions.imageCompression = TIFFEncoding.TIFFZIP;

                clearAllGuides();
                app.activeDocument.saveAs(new File(file), saveOptions, true);


                hide();
                gotoLayer(getParentIDXfor(getActiveLayerIndex()));
                toogleOpenCloseSet();

            }



        } else {
            goto_Children2(theLayer, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height, __format);
        }

    }
    return;
}


function layer__getWidthHeight() {
    var layer = app.activeDocument.activeLayer;

    var width = parseInt(layer.bounds[2] - layer.bounds[0]);
    var height = parseInt(layer.bounds[3] - layer.bounds[1]);
    var top = layer.bounds[0];
    var left = layer.bounds[1];

    return [width, height, top, left];
}


function run__bw_KorrekturRahmendicke(_factor) {
    app.activeDocument.suspendHistory('Rahmendicke ' + _factor + '', 'bw_KorrekturRahmendicke(' + _factor + ');')
}


function bw_KorrekturRahmendicke(_factor) {
    var transform_ContentAwareScale_factor = 100 / _factor;
    var transform_free_factor = 100 * _factor;
    bw_transform_ContentAwareScale2(0, 0, transform_ContentAwareScale_factor, transform_ContentAwareScale_factor, true, 100);
    bw_transform_free(0, 0, transform_free_factor, transform_free_factor, true);
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

function clearAllGuides() {
    executeAction(sTID('clearAllGuides'), undefined, DialogModes.NO);
}

// =======================================================
function BW_deselectPath() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("path"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    executeAction(s2t("deselect"), d, DialogModes.NO);
}

// =======================================================
function BW_crop() {
    var d = new ActionDescriptor();
    d.putBoolean(s2t("delete"), true);
    executeAction(s2t("crop"), d, DialogModes.NO);
}

// =======================================================
function BW_deselectSelection() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    d.putEnumerated(s2t("to"), s2t("ordinal"), s2t("none"));
    executeAction(s2t("set"), d, DialogModes.NO);
}