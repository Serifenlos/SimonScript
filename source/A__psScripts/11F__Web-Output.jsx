/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Web-Output</name>
<about>Web-Output | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

/*{{TIMESTAMP}}*/

//@include "functions/basic.jsx";
//@include "functions/utils.jsx";
//@include "functions/meta.jsx";
//@include "functions/save.jsx";
//@include "functions/loopFiles.jsx";
//@include "functions/layer.jsx";
//@include "functions/ready.jsx";


/* OPTIONS ******************************************/
saveFolder = "~/Desktop/Bilder FERTIG";
saveFolder_WEB = "~/Desktop/Bilder WEB";

suffix_FERTIG = "";
suffix_WEB = "";
maximalMegaPixel = 8;
/****************************************************/


function info() {
    alert("Web-Output für 11Freunde\n - Auswahl des Überordner (alle Unterordner werden auch verarbeitet)\n - auf dem Schreibtisch werden ein Ordner erstellt 'Bilder FERTIG'\n - dot werden die fertig bearbeiteten Bilder in der ursprünglichen Größe abgelegt\n\n Bedingungen\n - die originale Bildquelle liegt im Smart-Objekt mit dem Namen 'Original'\n - dem Dateinamen wird zur besseren Sortierbarkeit der Name des urspünglichen InDesign-Dokumentes vorangestellt"
        // - wenn die Original-Bilder in Original-Größe im SmartObject liegen, wird das Script die Größe zurück rechnen\n
        // - wenn kein SmartObject mit dem Namen Original
    )
}

/** Variablen  **************************************************************/
//@include "./assets/json2.js"
var jsonFilePath = "~/.ss_settings.json";
var jsonData = loadJSON(jsonFilePath);

// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(filePath) {
    var file = new File(filePath);
    var content;

    if (file.exists) {
        file.open("r");
        content = file.read();
        file.close();

        // Parse JSON-Inhalt
        try {
            return JSON.parse(content);
        } catch (e) {
            alert("Fehler beim Parsen der JSON-Datei:\n" + e);
            return null;
        }
    } else {
        alert("Die JSON-Datei konnte nicht gefunden werden.");
        return null;
    }
}

// Funktion zum Finden eines Wertes in einem Array von Objekten
function jsonValue(key) {
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i][key] !== undefined) {
            return jsonData[i][key];
        }
    }
    return null;
}

/** Optionen  **************************************************************/
const debug = Boolean(jsonValue("Debug"));


// thanks for prozess all subfolders
// https://community.adobe.com/t5/photoshop/copy-several-jpg-in-several-psd/m-p/10992549#M315938

run();

function run() {
    info();
    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        if (files.length < 1) continue;

        for (var b in files) {

            var prefix = "";
            var idDocName = getMeta_3("idDocName");
            if (idDocName) {
                var prefix = idDocName + "__";
            } else if (topLevel != folders[a]) {
                var prefix = folders[a].name + "__";
            }

            var thisFile = files[b];
            var doc_file = new File(thisFile);
            app.open(doc_file);

            //@include "functions/basic.jsx";
            //@include "functions/utils.jsx";
            //@include "functions/meta.jsx";
            //@include "functions/save.jsx";
            //@include "functions/loopFiles.jsx";
            //@include "functions/layer.jsx";
            //@include "functions/ready.jsx";


            prefSave();
            prefSet(DialogModes.NO, Units.PIXELS);

            try {
                gotoLayer("Original");
                var width_old = app.activeDocument.width;
                SmartObject_edit();
                var width_new = app.activeDocument.width;
                var width_faktor = width_new / width_old;
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

                doc.resizeImage(width_new, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
                fixMaskLoop(width_faktor);
            } catch (e) { }



            var fa_layer = 1;
            while (layer_checkExistence(fa_layer)) {
                try {
                    var filterArray = getSmartFilterArray_byIDX(fa_layer);
                    for (var fa = 0; fa < filterArray.length; fa++) {
                        gotoLayer(fa_layer)
                        // if (filterArray[fa][1] == "adaptCorrect") {
                        //     adjust_filter_TiefenLichter(width_faktor, filterArray[fa][0] + 1, filterArray[fa][5], filterArray[fa][6], filterArray[fa][7], filterArray[fa][8], filterArray[fa][9], filterArray[fa][10], filterArray[fa][11], filterArray[fa][12], filterArray[fa][16], filterArray[fa][17], filterArray[fa][18], filterArray[fa][19], filterArray[fa][20], filterArray[fa][21], filterArray[fa][22], filterArray[fa][23], filterArray[fa][24], filterArray[fa][25], filterArray[fa][26], filterArray[fa][27], filterArray[fa][28], filterArray[fa][29], filterArray[fa][30], filterArray[fa][31]);
                        if (filterArray[fa][1] == "adaptCorrect") {
                            adjust_filter_TiefenLichter2(width_faktor, filterArray[fa][0] + 1, filterArray[fa][7], filterArray[fa][10], filterArray[fa][12], filterArray[fa][18], filterArray[fa][21], filterArray[fa][23], filterArray[fa][25], filterArray[fa][27], filterArray[fa][29], filterArray[fa][31]);
                        } else if (filterArray[fa][1] == "unsharpMask") {
                            adjust_filter_UnsharpMask(width_faktor, filterArray[fa][0] + 1, filterArray[fa][4], filterArray[fa][7], filterArray[fa][9]);
                        } else if (filterArray[fa][1] == "gaussianBlur") {
                            adjust_filter_gaussianBlur(width_faktor, filterArray[fa][0] + 1, filterArray[fa][4]);
                        } else if (filterArray[fa][1] == "highPass") {
                            adjust_filter_highPass(width_faktor, filterArray[fa][0] + 1, filterArray[fa][4]);
                        } else if (filterArray[fa][1] == "median") {
                            adjust_filter_helligkeit_interpolieren(width_faktor, filterArray[fa][0] + 1, filterArray[fa][4]);
                        } else if (filterArray[fa][1] == "dustAndScratches") {
                            adjust_filter_staubKratzer(width_faktor, filterArray[fa][0] + 1, filterArray[fa][3], filterArray[fa][5]);
                        } else if (filterArray[fa][1] == "motionBlur") {
                            adjust_filter_motionBlur(width_faktor, filterArray[fa][0] + 1, filterArray[fa][3], filterArray[fa][6]);
                        }
                    }
                } catch (e) {
                    var filterArray = [];
                };
                fa_layer++;
            }


            function setSaveName(_saveFolder, _prefix, _saveFormat, _suffix) {
                var saveFolder = new Folder(_saveFolder);
                if (!saveFolder.exists) saveFolder.create();

                var saveName = string_to_slug(replace__RGB_RZ(_suffix));
                var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
                var saveFile = File(savePath);

                while (saveFile.exists) {
                    var saveName = saveName + "+";
                    var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
                    var saveFile = File(savePath);
                }
                return decodeURIComponent(_prefix) + saveName;
            }

            function string_to_slug(str) {
                str = str.replace(/^\s+|\s+$/g, ''); // trim
                // str = str.toLowerCase();
              
                // remove accents, swap ñ for n, etc
                var from = "ÄäĀāĂăĄąÀàÁáÂâÇçËëÈèÉéÊêĒēĜĝĠġÏïÎîĨĩÍíÑñŃńÑñÖöÒòÓóÔôõßŠšŜŝŚśÜüÛûŮůŸÿŶŷ·/_,:;'";
                var to   = "AaAaAaAaAaAaAaCcEeEeEeEeEeGgGgIiIiIiIiNnNnNnOoOoOoOoosSsSsSsUuUuUuYyYy-------";
                for (var i=0, l=from.length ; i<l ; i++) {
                    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
                }
            
                str = str.replace(/[^a-z0-9 -]/ig, '') // remove invalid chars
                    .replace(/[^\w\-]+/ig, '') // Remove all non-word chars
                    .replace(/\s+/g, '-') // collapse whitespace and replace by -
                    .replace(/-+/g, '-') // collapse dashes
                    ;
            
                return str;
            }

            function helperScale(_setMegaPixel) {
                if (getScale(_setMegaPixel) <= 1) {
                    return getScale(_setMegaPixel) * 100;
                } else {
                    return 100;
                }
            }

            function layer_getVisible_bySelector(_input) {
                var r = new ActionReference();

                if (typeof _input == "number") {
                    // by Index
                    r.putIndex(charIDToTypeID('Lyr '), _input);
                }

                if (typeof _input == "string") {
                    if (layer_checkExistence(_input)) {
                        // by Layername
                        r.putName(s2t('layer'), _input);
                    } else {
                        // by Layername via Regex // first hit
                        r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                    }
                }

                var vis = executeActionGet(r).getInteger(stringIDToTypeID('visible'));
                return vis;
            }



            try { clearAllGuides() } catch (e) { }
            try {
                delMeta_3(["softproofProfil", "softproofIntent", "softproofTK", "softproofGroup"]);
                delMeta_3(["isWoodwing", "arbeitsdatei_RGB", "woodwing_RGB", "woodwing_file", "woodwing_imageID"]);
            } catch (e) {
                if (debug) alert("ERROR delete metaTags: \n" + e);
            }

            try {
                keywordsArray = doc.info.keywords;
                keywordsArray.push(getMeta_3("idDocName"));
                keywordsArray.push(getMeta_3("studioAusgabe"));
                keywordsArray.push(getMeta_3("studioPublikation"));
                doc.info.keywords = keywordsArray;
            } catch (e) {
                if (debug) alert("ERROR set keyword: \n" + e);
            }


            try { if (getBitDepth(!8)) { setBitDepth(8) } } catch (e) { }


            try {
                if (doc.layers.getByName("Freisteller helper")) {
                    hide("Freisteller helper");
                }
            } catch (e) { }


            try {
                // if (doc.layers.getByName("Layout")) {
                    hide("Layout");
                // }
            } catch (e) { }


            // try {
            //     SaveForWeb("JPEG", saveFolder_WEB, setSaveName(saveFolder_WEB, prefix, "jpg", suffix_WEB), helperScale(maximalMegaPixel), f, t, t, t, 255, 255, 255, "Meta_all", 66, t, f, 0);
            // } catch (e) { };

            



            try {
                if (doc.layerSets.getByName("Freisteller")) {
                    app.activeDocument.suspendHistory('Freisteller: 2 Ebenen', 'freisteller_reduce2layers()');
                    doc.convertProfile("image P3", Intent.RELATIVECOLORIMETRIC, true, false);

                    var visibility_frei = layer_getVisible_bySelector("frei");
                    var visibility_hg = layer_getVisible_bySelector(0);

                    hide("frei");
                    makeVisible(0);
                    SaveForWeb("JPEG", saveFolder, setSaveName(saveFolder, prefix, "jpg", suffix_FERTIG), false, f, f, t, t, 255, 255, 255, "Meta_all", 66, t, t, 0);


                    /*** Export der Freisteller ***/

                    makeVisible("frei");
                    hide(0);
                    // SaveForWeb("PN24", saveFolder, setSaveName(saveFolder, prefix, "png", suffix_FERTIG), false, f, f, t, t, 255, 255, 255, "Meta_all", 66, t, f, 0);

                    if (visibility_frei) {
                        makeVisible("frei");
                        hide(0);
                    } else {
                        hide("frei");
                        makeVisible(0);
                    }
                    var savePath_FERTIG = saveFolder + "/" + setSaveName(saveFolder, prefix, "psd", suffix_FERTIG);
                    saveMultiformat(new File(savePath_FERTIG), "psd", false, 10, false, true);

                }
            } catch (e) {
                try { doc.flatten() } catch (e) { };
                doc.convertProfile("image P3", Intent.RELATIVECOLORIMETRIC, true, false);
                // setDpi(72);
                var savePath_FERTIG = saveFolder + "/" + setSaveName(saveFolder, prefix, "jpg", suffix_FERTIG);
                saveMultiformat(new File(savePath_FERTIG), "jpg", false, 10, false, false);
            }

            prefReset();
            doc.close(SaveOptions.DONOTSAVECHANGES);

        }
    }

    function FindAllFolders(srcFolderStr, destArray) {
        var fileFolderArray = Folder(srcFolderStr).getFiles();
        for (var i = 0; i < fileFolderArray.length; i++) {
            var fileFoldObj = fileFolderArray[i];
            if (fileFoldObj instanceof File) { } else {
                destArray.push(Folder(fileFoldObj));
                FindAllFolders(fileFoldObj.toString(), destArray);
            }
        }
        return destArray;
    };
};








//// FIX SMART FILTER

////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399

function getSmartFilterArray_byIDX(_idx) {
    filterArray_collect = [];
    try {
        var ref = new ActionReference();
        ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("smartObject"));
        // ref.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        ref.putIndex(sTID("layer"), _idx);
        var smartObjectDesc = executeActionGet(ref).getObjectValue(stringIDToTypeID("smartObject"));
        var filtersList = smartObjectDesc.getList(stringIDToTypeID("filterFX"));
        filterArray = [];

        for (var idx = 0; idx < filtersList.count; idx++) {
            var smartFilter = filtersList.getObjectValue(idx);
            var filter = smartFilter.getObjectValue(stringIDToTypeID("filter"));
            var filterID = typeIDToStringID(smartFilter.getObjectType(stringIDToTypeID("filter")));
            filterArray_inner = [];
            filterArray_inner.push(idx, filterID);

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
                } catch (e) { }
            }
            filterArray_collect.push(filterArray_inner);
        }
    } catch (e) { }
    return filterArray_collect;
}

function getSmartFilterValues(theDesc, theNumber) {
    try {
        var array = filterArray_inner;
        var x = theDesc.getKey(theNumber);
        if (!t2s(x)) { var key = x }
        else { var key = t2s(x) }

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
    } catch (e) { }
};


// function adjust_filter_TiefenLichter(_faktor, _filterID, _s_key_amount, _s_unit_amount, _s_value_amount, _s_key_width, _s_unit_width, _s_value_width, _s_key_radius, _s_value_radius, _h_key_amount, _h_unit_amount, _h_value_amount, _h_key_width, _h_unit_width, _h_value_width, _h_key_radius, _h_value_radius, blackClip_key, blackClip_value, whiteClip_key, whiteClip_value, center_key, center_value, colorCorrection_key, colorCorrection_value) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var d3 = new ActionDescriptor();
//     var d4 = new ActionDescriptor();
//     var d5 = new ActionDescriptor();
//     var r = new ActionReference();

//     r.putIndex(s2t("filterFX"), _filterID);
//     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//     d3.putReference(s2t("null"), r);
//     d.putUnitDouble(s2t(_s_key_amount), s2t(_s_unit_amount), _s_value_amount);
//     d.putUnitDouble(s2t(_s_key_width), s2t(_s_unit_width), _s_value_width);
//     d.putInteger(s2t(_s_key_radius), Math.round(_s_value_radius * _faktor));
//     d5.putObject(s2t("shadowMode"), s2t("adaptCorrectTones"), d);
//     d2.putUnitDouble(s2t(_h_key_amount), s2t(_h_unit_amount), _h_value_amount);
//     d2.putUnitDouble(s2t(_h_key_width), s2t(_h_unit_width), _h_value_width);
//     d2.putInteger(s2t(_h_key_radius), Math.round(_h_value_radius * _faktor));
//     d5.putObject(s2t("highlightMode"), s2t("adaptCorrectTones"), d2);
//     d5.putDouble(s2t(blackClip_key), blackClip_value);
//     d5.putDouble(s2t(whiteClip_key), whiteClip_value);
//     d5.putInteger(s2t(center_key), center_value);
//     d5.putInteger(s2t(colorCorrection_key), colorCorrection_value);
//     d4.putObject(s2t("filter"), s2t("adaptCorrect"), d5);
//     d3.putObject(s2t("filterFX"), s2t("filterFX"), d4);
//     executeAction(s2t("set"), d3, DialogModes.NO);
// }

function adjust_filter_TiefenLichter2(_faktor, _filterID, _s_value_amount, _s_value_width, _s_value_radius, _h_value_amount, _h_value_width, _h_value_radius, _blackClip_value, _whiteClip_value, _center_value, _colorCorrection_value) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d4.putUnitDouble(s2t("amount"), s2t("percentUnit"), _s_value_amount);
    d4.putUnitDouble(s2t("width"), s2t("percentUnit"), _s_value_width);
    d4.putInteger(s2t("radius"), Math.round(_s_value_radius * _faktor));
    d3.putObject(s2t("shadowMode"), s2t("adaptCorrectTones"), d4);
    d5.putUnitDouble(s2t("amount"), s2t("percentUnit"), _h_value_amount);
    d5.putUnitDouble(s2t("width"), s2t("percentUnit"), _h_value_width);
    d5.putInteger(s2t("radius"), Math.round(_h_value_radius * _faktor));
    d3.putObject(s2t("highlightMode"), s2t("adaptCorrectTones"), d5);
    d3.putDouble(s2t("blackClip"), _blackClip_value);
    d3.putDouble(s2t("whiteClip"), _whiteClip_value);
    d3.putInteger(s2t("center"), _center_value);
    d3.putInteger(s2t("colorCorrection"), _colorCorrection_value);
    d2.putObject(s2t("filter"), s2t("adaptCorrect"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

function adjust_filter_UnsharpMask(_faktor, _filterID, _staerke, _radius, _schwellenwert) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putUnitDouble(s2t("amount"), s2t("percentUnit"), _staerke);
    d3.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _radius * _faktor);
    d3.putInteger(s2t("threshold"), _schwellenwert);
    d2.putObject(s2t("filter"), s2t("unsharpMask"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

function adjust_filter_gaussianBlur(_faktor, _filterID, _radius) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _radius * _faktor);
    d2.putObject(s2t("filter"), s2t("gaussianBlur"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

function adjust_filter_highPass(_faktor, _filterID, _radius) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _radius * _faktor);
    d2.putObject(s2t("filter"), s2t("highPass"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

function adjust_filter_helligkeit_interpolieren(_faktor, _filterID, _radius) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _radius * _faktor);
    d2.putObject(s2t("filter"), s2t("median"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

function adjust_filter_staubKratzer(_faktor, _filterID, _radius, _schwellenwert) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putInteger(s2t("radius"), _radius * _faktor);
    d3.putInteger(s2t("threshold"), _schwellenwert);
    d2.putObject(s2t("filter"), s2t("dustAndScratches"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

function adjust_filter_motionBlur(_faktor, _filterID, _angle, _distance) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putInteger(s2t("angle"), _angle);
    d3.putUnitDouble(s2t("distance"), s2t("pixelsUnit"), _distance * _faktor);
    d2.putObject(s2t("filter"), s2t("motionBlur"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}


