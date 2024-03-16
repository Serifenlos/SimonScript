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
var jsonFilePath = "~/ss_var.json";
var jsonData = loadJSON(jsonFilePath);


var saveFolder = jsonData.RZ_saveFolder;
var Suffix_RZ = jsonData.RZ_suffix;
var saveFormat = jsonData.RZ_saveFormat;
var delPath = jsonData.RZ_delPath;
var sharp_dialog = jsonData.RZ_sharpDialog;
var RZ_qualityJPG = jsonData.RZ_qualityJPG;
var RZ_alphaChannels = jsonData.RZ_alphaChannels;
var RZ_withLayers = jsonData.RZ_withLayers;




/*=================================================================================*/
//FUNCTION schärfen
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
//FUNCTION convertProfil
function convertProfile_bySimon() {
    function getMeta() {
        editXMP_3();
        var checkMeta = "";

        if (xmpMeta.doesPropertyExist(nsURI, "softproofProfil") && xmpMeta.doesPropertyExist(nsURI, "softproofIntent") && xmpMeta.doesPropertyExist(nsURI, "softproofTK")) {
            var proof_profil = xmpMeta.getProperty(nsURI, "softproofProfil");
            var proof_intent = xmpMeta.getProperty(nsURI, "softproofIntent");
            var proof_tk = xmpMeta.getProperty(nsURI, "softproofTK");

            var checkMeta = "positiv";
            return [checkMeta, proof_profil.value, proof_intent.value, proof_tk.value];
        } else {
            var checkMeta = "negativ";
            return [checkMeta];
        }
    }


    if (getMeta()[0] == "positiv") { //convert by Meta
        var proof_profil = getMeta()[1];
        var proof_intent = getMeta()[2];

        if (proof_intent == "image") {
            var proof_intent = Intent.PERCEPTUAL
        } else if (proof_intent == "colorimetric") {
            var proof_intent = Intent.RELATIVECOLORIMETRIC
        } else if (proof_intent == "graphics") {
            var proof_intent = Intent.SATURATION
        } else if (proof_intent == "absColorimetric") {
            var proof_intent = Intent.ABSOLUTECOLORIMETRIC
        }

        var proof_tk = Boolean(getMeta()[3]);

        // convertProfile(destinationProfile,intent[, blackPointCompensation][, dither])
        doc.convertProfile(proof_profil, proof_intent, proof_tk, true);

    } else { //convert by Hand
        var appleScript = new File('/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app');
        if (appleScript.exists) {
            appleScript.execute(); //dauert zu lang, wird von der nächsten function überholt
        }
    }
}

function replace_RGB_to_RZ() {
    var RGBname = GetFileNameOnly(doc.name);
    var RZname = RGBname.replace(/(__RGB.*)$/g, Suffix_RZ);
    return RZname;
}

/*=================================================================================*/
editXMP_3();

if (xmpMeta.doesPropertyExist(nsURI, "softproofProfil") && xmpMeta.doesPropertyExist(nsURI, "softproofIntent") && xmpMeta.doesPropertyExist(nsURI, "softproofTK")) {
    run(saveFolder);
} else {
    var dialogSoftproof = new Window("dialog", "Schlussschuss");
    var stxt = dialogSoftproof.add("group");
    stxt.add("statictext", undefined, "Du hast den Softproof vergessen");

    var dialogSoftproofButton = dialogSoftproof.add("group");
    var ok = dialogSoftproofButton.add("button", undefined, "Egal -> weiter");
    var cancel = dialogSoftproofButton.add("button", undefined, "Oh nein -> stopp");

    ok.onClick = function () {
        dialogSoftproof.close();
        run(saveFolder);
    }
    cancel.onClick = function () {
        dialogSoftproof.close();
        return;
    }
    dialogSoftproof.show();
}


/*=================================================================================*/
function run(_saveFolder) {
    var doc = app.activeDocument;

    if (doc.saved == false) {
        var dialogSave = new Window("dialog", "Schlussschuss");
        var stxt = dialogSave.add("group");
        stxt.add("statictext", undefined, "vorher speichern?");

        var dialogSaveButton = dialogSave.add("group");
        var ok = dialogSaveButton.add("button", undefined, "Ja");
        var cancel = dialogSaveButton.add("button", undefined, "Nein");

        ok.onClick = function () {
            dialogSave.close();
            doc.save();
        }
        cancel.onClick = function () {
            dialogSave.close();
            return;
        }
        dialogSave.show();
    }


    if (getMeta_3("isWoodwing")) var isWoodwing = getMeta_3("isWoodwing");
    if (getMeta_3("arbeitsdatei_RGB")) var arbeitsdatei_RGB = getMeta_3("arbeitsdatei_RGB");
    if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
    if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
    if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");

    try {
        var isWoodwing = (String(isWoodwing).toLowerCase() === 'true');
    } catch (e) { alert(e) }



    var saveFolder = new Folder(_saveFolder);
    if (!saveFolder.exists) saveFolder.create();
    var savePath = saveFolder + "/" + replace_RGB_to_RZ() + "." + saveFormat;
    writeln("savePath: " + savePath)

    if (isWoodwing) {
        var savePath = woodwing_RGB;
    }


    try {
        if (doc.layerSets.getByName("Freisteller")) {
            gotoLayer("Freisteller");
            fixMask(getActiveLayerIndex(), 1);
            duplicateLayerMaskAsAlpha();
            setMaskVisibility(false);
            selectLayers("selectAllLayers");
            mergeLayers();
            setBackTheLayerMask();
            setMaskVisibility(false);
        }
    } catch (e) {
        flattenImage();
    }

    RemoveAlphaChannels();
    convertProfile_bySimon();
    if (sharp_dialog) { sharp(DialogModes.ALL) }
    else { sharp(DialogModes.NO) }

    if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) {
        setBitDepth(8);
    }
    clearAllGuides();
    delMeta_3("softproofProfil");
    delMeta_3("softproofIntent");
    delMeta_3("softproofTK");
    delMeta_3("softproofGroup");

    if (delPath) { activeDocument.pathItems.removeAll() }


    try {
        if (doc.artLayers.getByName("Freisteller")) {
            setMaskVisibility(true);
            var docNameCopy = saveFolder + "/" + replace_RGB_to_RZ() + "-frei";
            savePSD_v2(new File(docNameCopy), t, t, t, f);
            setMaskVisibility(false);
        }
    } catch (e) { $.writeln("2: " + e) }


    flattenImage();
    // saveRZ_ding(saveFolder);
    saveMultiformat(new File(savePath), saveFormat, true, RZ_qualityJPG, RZ_alphaChannels, RZ_withLayers)
}


function writeln(_ding) {
    try {
        return $.writeln('' + _ding + ': ' + _ding)
    } catch (e) { }
}

