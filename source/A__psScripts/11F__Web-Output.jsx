/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Web-Output</name>
<about>Web-Output | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "functions/basic.jsx";
//@include "functions/utils.jsx";
//@include "functions/meta.jsx";
//@include "functions/save.jsx";
//@include "functions/loopFiles.jsx";


/* OPTIONS ******************************************/
saveFolder = "~/Desktop/Bilder FERTIG";
saveFolder_WEB = "~/Desktop/Bilder WEB";

suffix_RZ = "__FERTIG";
suffix_WEB = "__WEB";
maximalMegaPixel = 8;
/****************************************************/


function info() {
    alert("Web-Output für 11Freunde\n - Auswahl des Überordner (alle Unterordner werden auch verarbeitet)\n - auf dem Schreibtisch werden zwei Ordner erstellt 'Bilder FERTIG' und 'Bilder WEB'\n - in 'Bilder FERTIG' werden die fertig bearbeiteten Bilder in der ursprünglichen Größe abgelegt\n - in 'Bilder WEB' liegen die bearbeiteten Bilder in maximal " + maximalMegaPixel + " MegaPixel, um die Datenmenge zum Webseiten-Upload zu reduzieren\n\n Bedingungen\n - die originale Bildquelle liegt im Smart-Objekt mit dem Namen 'Original'\n - dem Dateinamen wird zur besseren Sortierbarkeit der Name seines Ordners vorangestellt"
        // - wenn die Original-Bilder in Original-Größe im SmartObject liegen, wird das Script die Größe zurück rechnen\n
        // - wenn kein SmartObject mit dem Namen Original
    )
}


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
            if (topLevel != folders[a]) {
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

                // getSmartFilterArray();
                // for (var i = 0; i < filterArray.length; i++) {
                //     if (filterArray[i][1] == "adaptCorrect") {
                //         try {
                //             adjust_filter_TiefenLichter(width_faktor, filterArray[i][0] + 1, filterArray[i][5], filterArray[i][6], filterArray[i][7], filterArray[i][8], filterArray[i][9], filterArray[i][10], filterArray[i][11], filterArray[i][12], filterArray[i][16], filterArray[i][17], filterArray[i][18], filterArray[i][19], filterArray[i][20], filterArray[i][21], filterArray[i][22], filterArray[i][23], filterArray[i][24], filterArray[i][25], filterArray[i][26], filterArray[i][27], filterArray[i][28], filterArray[i][29], filterArray[i][30], filterArray[i][31]);
                //         } catch (e) {}
                //     }
                // }
                
                // fixMaskLoop(width_faktor);
            } catch(e){}

            function setSaveName(_saveFolder, _prefix, _saveFormat) {
                var saveFolder = new Folder(_saveFolder);
                if (!saveFolder.exists) saveFolder.create();

                var saveName = replace__RGB_RZ(suffix_WEB);
                var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
                var saveFile = File(savePath);

                while (saveFile.exists) {
                    var saveName = saveName + "+";
                    var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
                    var saveFile = File(savePath);
                }
                return decodeURIComponent(_prefix) + saveName;
            }

            function helperScale(_setMegaPixel) {
                if (getScale(_setMegaPixel) <= 1) {
                    return getScale(_setMegaPixel) * 100;
                } else {
                    return 100;
                }
            }
            try {clearAllGuides()} catch(e){}
            try {delMeta()} catch(e){}
            try {if (getBitDepth(!8)) {setBitDepth(8)}} catch(e){}


            /* TODO png und gif fehlt noch in SaveForWeb() */
            SaveForWeb("JPEG", saveFolder_WEB, setSaveName(saveFolder_WEB, prefix, "jpg"), helperScale(maximalMegaPixel), f, t, t, t, 255, 255, 255, "Meta_ck", 66, t, f, 0);
            prefReset();
            /* TODO bin nicht ganz mit saveRZ() einverstanden, ist für die globale Anwednung einwenig beschränkt. Versuche in save.jsx alles zu vereinen, irgendwann */
            var docName = GetFileNameOnly(doc.name);
            if (docName.match(/_frei/g) || docName.match(/-frei/g) || checkTransparency()) {
                try {selectAllLayers()} catch(e){};
                try {mergeLayers()} catch(e){};
                try {nameLayer("Freisteller")} catch(e){};
                doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
                setDpi(72);
                saveRZ(saveFolder, prefix, "tif", suffix_RZ);
            } else {
                try {doc.flatten()} catch(e){};
                doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
                setDpi(72);
                saveRZ(saveFolder, prefix, "jpg", suffix_RZ);
            }
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




//// FIX SMART FILTER

////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399

function getSmartFilterArray() {
    var ref = new ActionReference();
    ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("smartObject"));
    ref.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
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
            } catch(e){}
        }
        filterArray.push(filterArray_inner);
    }
}

function getSmartFilterValues(theDesc, theNumber) {
    var array = filterArray_inner;
    var x = theDesc.getKey(theNumber);
    if (!t2s(x)) {var key = x}
    else {var key = t2s(x)}

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




//// FIX MASK

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
    } catch(e){
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