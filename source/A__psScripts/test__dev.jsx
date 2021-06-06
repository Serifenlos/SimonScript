$.evalFile("/Users/simon/Library/Application\ Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx");

//@include "../../build/A__psScripts/functions/basic.jsx";
//@include "../../build/A__psScripts/functions/pref.jsx";
//@include "../../build/A__psScripts/functions/utils.jsx";
//@include "../../build/A__psScripts/functions/LUT-dodge.jsx";
//@include "../../build/A__psScripts/functions/LUT-burn.jsx";
//@include "../../build/A__psScripts/functions/dialog.jsx";
//@include "../../build/A__psScripts/functions/ready.jsx";
//@include "../../build/A__psScripts/functions/view.jsx";
//@include "../../build/A__psScripts/functions/layer.jsx";
//@include "../../build/A__psScripts/functions/save.jsx";
//@include "../../build/A__psScripts/functions/loopFiles.jsx";
//@include "../../build/A__psScripts/functions/meta.jsx";





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




//// Gigapixel in Startchuss ?? puhh

function getforegroundColor() {
    var doc = activeDocument;
    var bR = foregroundColor.rgb.red;
    var bG = foregroundColor.rgb.green;
    var bB = foregroundColor.rgb.blue
    var myColor = Math.round(bR) + ' ' + Math.round(bG) + ' ' + Math.round(bB);
    return myColor;
}

function text2Clipboard(_text) {
    var d = new ActionDescriptor();
    d.putString(stringIDToTypeID("textData"), _text);
    executeAction(stringIDToTypeID("textToClipboard"), d, DialogModes.NO);
}

// text2Clipboard(getforegroundColor())

function runGigapixel() {
    alert("eins")
    executeAction(sTID('adc931a0-cfe2-11d5-98bf-00b0d0204936'), undefined, DialogModes.ALL);
    alert("zwei")
}

// runGigapixel()



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





