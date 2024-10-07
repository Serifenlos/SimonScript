/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] Schlussschuss2</name>
<about>Photoshop-Script to RZ | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


/*//// FUNCTIONS ////*/
/*=================================================================================*/
//@include "functions/basic.jsx";
//@include "functions/channel.jsx";
//@include "functions/dialog.jsx";
//@include "functions/view.jsx";
//@include "functions/layer.jsx";
//@include "functions/save.jsx";
//@include "functions/ready.jsx";
//@include "functions/utils.jsx";
//@include "functions/loopFiles.jsx";
//@include "functions/meta.jsx";




/*//// OPTIONS ////*/
/*=================================================================================*/
//@include "./assets/json2.js"
var jsonFilePath = "~/.ss_settings.json";
var jsonData = loadJSON(jsonFilePath);

// const ZielAufloesung = jsonValue("ZielAufloesung");
var saveFolder = jsonValue("RZ_saveFolder");
var Suffix_RZ = jsonValue("RZ_suffix");
var saveFormat = jsonValue("RZ_saveFormat");
var delPath = jsonValue("RZ_delPath");
var sharp_dialog = jsonValue("RZ_sharpDialog");
var RZ_qualityJPG = jsonValue("RZ_qualityJPG");
var RZ_alphaChannels = jsonValue("RZ_alphaChannels");
var RZ_withLayers = jsonValue("RZ_withLayers");

const debug = Boolean(jsonValue("Debug"));


/*=================================================================================*/
function sharp(_dialog) {
    var safeZoom = getZoomLevel();
    // vollbildmodus();
    if (app_panelsVisible()) togglePalettes();
    zoom100();

    try {
        executeAction(stringIDToTypeID("unsharpMask"), undefined, _dialog);
    } catch (e) { }

    // standardmodus();
    if (!app_panelsVisible()) togglePalettes();
    setZoom(safeZoom);
}
/*=================================================================================*/
function convertToProfil_menu() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("document"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    executeAction(s2t('convertToProfile'), d, DialogModes.ALL);
};

/*=================================================================================*/
function convertProfile_metaSoftproof() {
    editXMP_3();
    if (xmpMeta.doesPropertyExist(nsURI, "softproofProfil") && xmpMeta.doesPropertyExist(nsURI, "softproofIntent") && xmpMeta.doesPropertyExist(nsURI, "softproofTK")) {
        var proof_profil = xmpMeta.getProperty(nsURI, "softproofProfil");
        var proof_intent = xmpMeta.getProperty(nsURI, "softproofIntent");
        var proof_tk = Boolean(xmpMeta.getProperty(nsURI, "softproofTK"));

        if (proof_intent == "image") {
            var proof_intent = Intent.PERCEPTUAL
        } else if (proof_intent == "colorimetric") {
            var proof_intent = Intent.RELATIVECOLORIMETRIC
        } else if (proof_intent == "graphics") {
            var proof_intent = Intent.SATURATION
        } else if (proof_intent == "absColorimetric") {
            var proof_intent = Intent.ABSOLUTECOLORIMETRIC
        }

        doc.convertProfile(proof_profil, proof_intent, proof_tk, true);

    } else { //convert by Hand
        // var appleScript = new File('/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app');
        // if (appleScript.exists) {
        //     appleScript.execute(); //dauert zu lang, wird von der nächsten function überholt
        // }
        convertToProfil_menu();
    }

}

function replace_RGB_to_RZ() {
    var RGBname = GetFileNameOnly(doc.name);
    var RZname = RGBname.replace(/(__RGB.*)$/g, Suffix_RZ);
    return RZname;
}

/*=================================================================================*/
function dialog_missingSoftproof() {
    var dialog_missingSoftproof = dialog_createDialog("Schlussschuss", "Du hast den Softproof vergessen", "Egal -> weiter", "Oh nein -> stopp");
    return dialog_missingSoftproof.show() ? 0 : 1;
}

function dialog_saveWorkingfile() {
    var dialog_saveWorkingfile = dialog_createDialog("Schlussschuss", "vorher speichern?", "Ja", "Nein");
    return dialog_saveWorkingfile.show() ? 0 : 1;
}

/*=================================================================================*/
function checkBeforeRun() {
    editXMP_3();

    if (xmpMeta.doesPropertyExist(nsURI, "softproofProfil") && xmpMeta.doesPropertyExist(nsURI, "softproofIntent") && xmpMeta.doesPropertyExist(nsURI, "softproofTK")) {
        run(saveFolder);
    } else {

        if (dialog_missingSoftproof()) {
            run(saveFolder);
        } else {
            return;
        }
    }
}


checkBeforeRun();
/*=================================================================================*/
function run(_saveFolder) {
    var doc = app.activeDocument;

    if (doc.saved == false) {
        if (dialog_saveWorkingfile()) {
            doc.save();
        }
    }



    var isWoodwing = false;
    if (getMeta_3("isWoodwing")) var isWoodwing = Boolean(getMeta_3("isWoodwing"));
    if (getMeta_3("arbeitsdatei_RGB")) var arbeitsdatei_RGB = getMeta_3("arbeitsdatei_RGB");
    if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
    if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
    if (getMeta_3("woodwing_imageID")) var woodwing_imageID = getMeta_3("woodwing_imageID");
    if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");

    /*     $.writeln(isWoodwing);
        $.writeln(arbeitsdatei_RGB);
        $.writeln(woodwing_RGB);
        $.writeln(woodwing_file);
        $.writeln(woodwing_imageID);
        $.writeln(idDocName); */



    if (isWoodwing) {
        try {
            BridgeTalkMessage_openDocID(idDocName, woodwing_file, debug);          // v2
        } catch (e) { if (debug) { alert("bt: " + e) } }
        try {
            closeDoc(woodwing_file);                                        // v2
        } catch (e) { if (debug) { alert("closeDoc+: " + e) } }

        // v3
        // BridgeTalkMessage_checkOutImage(idDocName, woodwing_imageID);
        // $.setTimeout = function (func, time) {
        //     $.sleep(time);
        //     func();
        // };
        // $.setTimeout(function () { $.writeln("Zeitschinden") }, 3000);
        var savePath = woodwing_RGB;

    } else {
        var saveFolder = new Folder(_saveFolder);
        if (!saveFolder.exists) saveFolder.create();
        var savePath = saveFolder + "/" + replace_RGB_to_RZ() + "." + saveFormat;
    }


    try {
        if (doc.layerSets.getByName("Freisteller")) {
            if (isWoodwing) {
                app.activeDocument.suspendHistory('Freisteller: 2 Ebenen', 'freisteller_reduce2layers()');

            } else {
                gotoLayer("Freisteller");
                fixMask(getActiveLayerIndex(), 1);
                duplicateLayerMaskAsAlpha();
                setMaskVisibility(false);
                selectLayers("selectAllLayers");
                mergeLayers();
                setBackTheLayerMask();
                setMaskVisibility(false);
            }
        }
    } catch (e) {
        flattenImage();
    }

    RemoveAlphaChannels();
    convertProfile_metaSoftproof();
    if (sharp_dialog) { sharp(DialogModes.ALL) }
    else { sharp(DialogModes.NO) }

    if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) {
        setBitDepth(8);
    }
    clearAllGuides();
    delMeta_3(["softproofProfil", "softproofIntent", "softproofTK", "softproofGroup"]);

    if (delPath) { activeDocument.pathItems.removeAll() }



    try{
        if (isWoodwing && doc.artLayers.getByName("frei")){
            saveMultiformat(new File(savePath), "psd", false, null, RZ_alphaChannels, true);
            return;
        }
    }
    catch(e) {}


    try {
        if (doc.artLayers.getByName("Freisteller")) {
            setMaskVisibility(true);
            var docNameCopy = saveFolder + "/" + replace_RGB_to_RZ() + "-frei";
            savePSD_v2(new File(docNameCopy), t, t, t, f);
            setMaskVisibility(false);
        }
    } catch (e) {}

    try {
        flattenImage();
        saveMultiformat(new File(savePath), saveFormat, false, RZ_qualityJPG, RZ_alphaChannels, RZ_withLayers);

        // BridgeTalkMessage_checkInImage(idDocName, woodwing_imageID);             // v3
    } catch (e) { if (debug) { alert("save: " + e) } }
    // closeDoc(woodwing_file);
}




function closeDoc(_file) {
    try {
        app.documents.getByName(decodeURI(_file)).close(SaveOptions.DONOTSAVECHANGES);
    }
    catch (e) { if (debug) { alert("closeDoc: " + _file + " :--: " + e) } }
}



function BridgeTalkMessage_openDocID(_idDocName, _woodwing_file, _debug) {
    var bt = new BridgeTalk();
    bt.target = 'indesign';
    bt.body = runID.toSource() + "('" + _idDocName + "','" + _woodwing_file + "','" + _debug + "');";
    bt.onResult = function (resObj) { }
    bt.send(10);
}

function runID(_idDocName, _woodwing_file, _debug) {
    try {
        if (focusOpenedFile(_idDocName)) {
            var woodwing_file = app.activeDocument.links.itemByName(_woodwing_file);
            woodwing_file.editOriginal();
        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) {
        /* if (_debug) { alert("runID: " + e); } */
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


/* v3 */
function BridgeTalkMessage_checkOutImage(_idDocName, _woodwing_imageID) {
    var bt = new BridgeTalk();
    bt.target = 'indesign';
    bt.body = runID_checkOutImage.toSource() + "('" + _idDocName + "','" + _woodwing_imageID + "');";
    bt.onResult = function (resObj) { }
    bt.send(10);
}

/* v3 */
function BridgeTalkMessage_checkInImage(_idDocName, _woodwing_imageID) {
    var bt = new BridgeTalk();
    bt.target = 'indesign';
    bt.body = runID_checkInImage.toSource() + "('" + _idDocName + "','" + _woodwing_imageID + "');";
    bt.onResult = function (resObj) { }
    bt.send(10);
}


/* ################################################### */
function runID_checkOutImage(_idDocName, _woodwing_imageID) {
    try {
        if (focusOpenedFile(_idDocName)) {
            var managedImages_array = get_managedImages_array();
            var managedImage_index = get_managedImage_index(managedImages_array, _woodwing_imageID);

            app.activeDocument.managedImages[managedImage_index].checkOut();

        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) { alert("runID_checkOutImage: " + e) }

    function get_managedImages_array() {
        var managedImages_array = [];
        try {
            var managedImages = app.activeDocument.managedImages;
            for (var i = 0; i < managedImages.length; i++) {
                var managedImage = managedImages[i];
                var metaData_ID = managedImage.entMetaData.get("Core_ID");
                managedImages_array.push(metaData_ID);
            }
            return managedImages_array;

        } catch (e) { alert(e) }
    }

    function get_managedImage_index(_managedImages_array, _woodwing_imageID) {
        try {
            var managedImage_index = -1;
            for (var j = 0; i < _managedImages_array.length; j++) {
                if (_managedImages_array[j] === _woodwing_imageID) {
                    managedImage_index = j;
                    break;
                }
            }
            return managedImage_index;


        } catch (e) { alert(e) }
    }


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

/* ################################################### */
function runID_checkInImage(_idDocName, _woodwing_imageID) {
    try {
        if (focusOpenedFile(_idDocName)) {
            var managedImages_array = get_managedImages_array();
            var managedImage_index = get_managedImage_index(managedImages_array, _woodwing_imageID);

            app.activeDocument.managedImages[managedImage_index].pageItem[0].placeObject(managedImages_array[managedImage_index]);
            app.activeDocument.managedImages[managedImage_index].checkIn();

        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) { alert("runID_1: " + e) }

    function get_managedImages_array() {
        var managedImages_array = [];
        try {
            var managedImages = app.activeDocument.managedImages;
            for (var i = 0; i < managedImages.length; i++) {
                var managedImage = managedImages[i];
                var metaData_ID = managedImage.entMetaData.get("Core_ID");
                managedImages_array.push(metaData_ID);
            }
            return managedImages_array;

        } catch (e) { alert(e) }
    }

    function get_managedImage_index(_managedImages_array, _woodwing_imageID) {
        try {
            var managedImage_index = -1;
            for (var j = 0; i < _managedImages_array.length; j++) {
                if (_managedImages_array[j] === _woodwing_imageID) {
                    managedImage_index = j;
                    break;
                }
            }
            return managedImage_index;


        } catch (e) { alert(e) }
    }


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

