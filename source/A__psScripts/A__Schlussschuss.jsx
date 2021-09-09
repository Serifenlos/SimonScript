/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] Schlussschuss</name>
<about>Photoshop-Script to RZ | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/



/*//// OPTIONS ////*/
/*=================================================================================*/
// var Rasterweite = 70;
// var minAufloesung = 300;
// var Suffix_RZ = "__RZ";
// var option_convert_8bit = true;

saveFolder = "/Users/simon/Arbeit/_RZ";
var Suffix_RZ = "__RZ";
var saveFormat = "jpg" // tif, jpg, psd

/*=================================================================================*/
//@include "functions/basic.jsx";
//@include "functions/view.jsx";
//@include "functions/layer.jsx";
//@include "functions/save.jsx";
//@include "functions/ready.jsx";
//@include "functions/utils.jsx";
//@include "functions/loopFiles.jsx";
//@include "functions/meta.jsx";


function prefSave() {
    startDisplayDialogs = app.displayDialogs;
    startRulerUnits = app.preferences.rulerUnits;
}

function prefSet() {
    app.displayDialogs = DialogModes.NO;
    app.preferences.rulerUnits = Units.PIXELS;
}

function prefReset() {
    app.preferences.rulerUnits = startRulerUnits;
    app.displayDialogs = startDisplayDialogs;
}


var doc = app.activeDocument;

/*=================================================================================*/
// RemoveAlphaChannels
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



/*=================================================================================*/
// Flatten the Image
function flattenImage() {
    doc.flatten();
}


/*=================================================================================*/
//FUNCTION schärfen
function sharp() {
    var safeZoom = getZoomLevel();
    vollbildmodus();
    zoom100();

    try {
        executeAction(stringIDToTypeID("unsharpMask"), undefined, DialogModes.ALL);
    } catch (e) {}

    standardmodus();
    setZoom(safeZoom);
}



/*=================================================================================*/
//FUNCTION convertProfil
function convertProfile_bySimon() {
    function getMeta() {
        editXMP();
        var checkMeta = "";

        if (xmpMeta.doesPropertyExist(customNamespace, "proof_profil") && xmpMeta.doesPropertyExist(customNamespace, "proof_intent") && xmpMeta.doesPropertyExist(customNamespace, "proof_tk")) {
            var proof_profil = xmpMeta.getProperty(customNamespace, "proof_profil");
            var proof_intent = xmpMeta.getProperty(customNamespace, "proof_intent");
            var proof_tk = xmpMeta.getProperty(customNamespace, "proof_tk");
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
        };
        // elseif (proof_intent == WEISNICHT)
        //   {var proof_intent = Intent.SATURATION};                 // hier brauchst noch den Intent
        // elseif (proof_intent == WEISAUCHNICHT)
        //   {var proof_intent = Intent.ABSOLUTECOLORIMETRIC};   // hier brauchst noch den Intent

        var proof_tk = getMeta()[3];
        var proof_tk = String(proof_tk).toLowerCase() === 'true'; // was passiert wenn proof_tk false ist?

        // convertProfile(destinationProfile,intent[, blackPointCompensation][, dither])
        doc.convertProfile(proof_profil, proof_intent, proof_tk, true);

    } else { //convert by Hand
        var appleScript = new File('/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app');
        if (appleScript.exists) {
            appleScript.execute(); //dauert zu lang, wird von der nächsten function überholt
        }
    }
}

/*=================================================================================*/
//FUNCTION check8bit
function convertBitDepth(bitdepth) {
    var id1 = charIDToTypeID("CnvM");
    var desc1 = new ActionDescriptor();
    var id2 = charIDToTypeID("Dpth");
    desc1.putInteger(id2, bitdepth);
    executeAction(id1, desc1, DialogModes.NO);
}

function check8bit() {
    if (doc.bitsPerChannel != BitsPerChannelType.EIGHT) {
        convertBitDepth(8);
    }
}


/*=================================================================================*/
//FUNCTION clearAllGuides
function clearAllGuides() {
    executeAction(sTID('clearAllGuides'), undefined, DialogModes.NO);
}



/*=================================================================================*/
function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    return myString;
}

function replace_RGB_to_RZ() {
    var RGBname = GetFileNameOnly(doc.name);
    var RZname = RGBname.replace(/(__RGB.*)$/g, Suffix_RZ);
    return RZname;
}


/*=================================================================================*/
function saveRZ_ding(saveFolder) {
    // Location + Name
    var saveFolder = new Folder(saveFolder);
    if (!saveFolder.exists) saveFolder.create();
    var savePath = saveFolder + "/" + replace_RGB_to_RZ() + "." + saveFormat;

    if (saveFormat == "tif") {
        var saveOptions = new TiffSaveOptions();
        saveOptions.alphaChannels = true;
        saveOptions.byteOrder = ByteOrder.IBM;
        saveOptions.embedColorProfile = true;
        saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        saveOptions.layers = true;
        saveOptions.spotColors = false;
        saveOptions.transparency = true;
        saveOptions.annotations = false;

    } else if (saveFormat == "jpg") {
        var saveOptions = new JPEGSaveOptions();
        saveOptions.embedColorProfile = true;
        saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        saveOptions.matte = MatteType.WHITE;
        saveOptions.quality = 11;

    } else if (saveFormat == "psd") {
        var saveOptions = new PhotoshopSaveOptions();
        saveOptions.alphaChannels = false;
        saveOptions.annotations = false;
        saveOptions.embedColorProfile = true;
        saveOptions.layers = true;
        saveOptions.spotColors = false;
    }

    doc.saveAs(new File(savePath), saveOptions, false, Extension.LOWERCASE);
}



/*=================================================================================*/
var checkSettings;
editXMP();
if (xmpMeta.doesPropertyExist(customNamespace, "proof_profil") && xmpMeta.doesPropertyExist(customNamespace, "proof_intent") && xmpMeta.doesPropertyExist(customNamespace, "proof_tk")) {
    checkSettings = "positiv";
}
if (checkSettings == "positiv") {
    run();
} else {
    var dialogSoftproof = new Window("dialog", "Schlussschuss");
    var stxt = dialogSoftproof.add("group");
    stxt.add("statictext", undefined, "Du hast den Softproof vergessen");

    var dialogSoftproofButton = dialogSoftproof.add("group");
    var ok = dialogSoftproofButton.add("button", undefined, "Egal -> weiter");
    var cancel = dialogSoftproofButton.add("button", undefined, "Oh nein -> stopp");

    ok.onClick = function() {
        dialogSoftproof.close();
        run();
    }
    cancel.onClick = function() {
        dialogSoftproof.close();
        return;
    }
    dialogSoftproof.show();
}






/*=================================================================================*/
function run() {
    var doc = app.activeDocument;

    if (doc.saved == false) {
        var dialogSave = new Window("dialog", "Schlussschuss");
        var stxt = dialogSave.add("group");
        stxt.add("statictext", undefined, "vorher speichern?");

        var dialogSaveButton = dialogSave.add("group");
        var ok = dialogSaveButton.add("button", undefined, "Ja");
        var cancel = dialogSaveButton.add("button", undefined, "Nein");

        ok.onClick = function() {
            dialogSave.close();
            doc.save();
        }
        cancel.onClick = function() {
            dialogSave.close();
            return;
        }
        dialogSave.show();
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
    sharp();
    check8bit();
    clearAllGuides();
    delMeta();
    try {
        if (doc.artLayers.getByName("Freisteller")) {
            setMaskVisibility(true);
            var docNameCopy = saveFolder + "/" + replace_RGB_to_RZ() + "-frei";
            savePSD_v2(new File(docNameCopy), t, t, t, f);
            setMaskVisibility(false);
        }
    } catch (e) {}
    flattenImage();
    saveRZ_ding(saveFolder);
}