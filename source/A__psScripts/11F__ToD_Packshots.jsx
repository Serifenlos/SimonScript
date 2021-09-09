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







saveFolder = "/Users/simon/Arbeit/_RZ/ToD_zip";
var saveFolder = new Folder(saveFolder);
if (!saveFolder.exists) saveFolder.create();
var saveFormat = "tif" // tif, jpg, psd


function saveToD(_savePath) {
    if (saveFormat == "tif") {
        var saveOptions = new TiffSaveOptions();
        saveOptions.alphaChannels = false;
        saveOptions.byteOrder = ByteOrder.IBM;
        saveOptions.embedColorProfile = true;
        saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        // saveOptions.imageCompression = TIFFEncoding.TIFFZIP;
        saveOptions.layers = false;
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

    doc.saveAs(new File(_savePath), saveOptions, true, Extension.LOWERCASE);
}






function runToD(_set) {
    selectLayer2(_set, t);
    makeVisible();
    var doc = app.activeDocument;
    var oldName = GetFileNameOnly(doc.name);
    var newName = oldName.replace(/(_Main_0.*)$/g, "");

    var docNameCopy = saveFolder + "/" + _set + "__" + newName;
    saveToD(docNameCopy)

    hide();
    selectLayers("selectNoLayers");
    return;
}

function runToD_blanko() {
    var doc = app.activeDocument;
    var oldName = GetFileNameOnly(doc.name);
    var newName = oldName.replace(/(_Main_0.*)$/g, "");
    var docNameCopy = saveFolder + "/_blanko__" + newName;
    saveToD(docNameCopy);
    return;
}




loopOpenDocs()

//// Loop through opened docs
function loopOpenDocs() {
    
    var firstDoc = app.activeDocument;
    var thisDoc = "";
    for (var i = 0; i < app.documents.length; i++) {
        app.activeDocument = app.documents[i];
        var thisDoc = app.activeDocument;
        // var doc_file = new File(app.documents[i].fullName);
        // app.open(doc_file);

        try {
            selectLayers("selectNoLayers");
            selectLayerBySelector("IKAUZ_weiss", t);
            selectLayerBySelector("11F-Logo_beidseitig-vorne_schwarz", t);
            selectLayerBySelector("11F-Logo_beidseitig-vorne_weiss", t);
            selectLayerBySelector("11F-Logo_beidseitig-hinten_schwarz", t);
            selectLayerBySelector("11F-Logo_beidseitig-hinten_weiss", t);
            selectLayerBySelector("11F-Logo_weiss", t);
            selectLayerBySelector("11F-Logo_schwarz", t);
            selectLayerBySelector("11-Kasten_weiss", t);
            selectLayerBySelector("11-Kasten_orange", t);
            selectLayerBySelector("Fussball-ist-bunt_weiss", t);
            selectLayerBySelector("Fussball-ist-bunt_schwarz", t);
            selectLayerBySelector("Nöhler", t);
            selectLayerBySelector("BrigadeHS_vorne", t);
            selectLayerBySelector("Auswärtsfans_schwarz", t);
            selectLayerBySelector("Auswärtsfans_weiss", t);
            selectLayerBySelector("Brehme_schwarz", t);
            selectLayerBySelector("Brehme_weiss", t);
            selectLayerBySelector("11F-innen_doppelpunkt_schwarz", t);
            selectLayerBySelector("11F-innen_doppelpunkt_weiss", t);
            selectLayerBySelector("11F-Logo-hinten_schwarz", t);
            selectLayerBySelector("11F-Logo-hinten_weiss", t);
            selectLayerBySelector("BrigadeHS-hinten_schwarz", t);
            selectLayerBySelector("BrigadeHS-hinten_weiss", t);
            hide();
            selectLayers("selectNoLayers");
                    
            try {runToD_blanko()} catch(e){}
            // try {runToD("IKAUZ_weiss")} catch(e){}
            // try {runToD("11F-Logo_beidseitig-vorne_schwarz")} catch(e){}
            // try {runToD("11F-Logo_beidseitig-vorne_weiss")} catch(e){}
            // try {runToD("11F-Logo_beidseitig-hinten_schwarz")} catch(e){}
            // try {runToD("11F-Logo_beidseitig-hinten_weiss")} catch(e){}
            // try {runToD("11F-Logo_weiss")} catch(e){}
            // try {runToD("11F-Logo_schwarz")} catch(e){}
            // try {runToD("11-Kasten_weiss")} catch(e){}
            // try {runToD("11-Kasten_orange")} catch(e){}
            // try {runToD("Fussball-ist-bunt_weiss")} catch(e){}
            // try {runToD("Fussball-ist-bunt_schwarz")} catch(e){}

            try {runToD("Nöhler")} catch(e){}
            try {runToD("BrigadeHS_vorne")} catch(e){}
            try {runToD("Auswärtsfans_schwarz")} catch(e){}
            try {runToD("Auswärtsfans_weiss")} catch(e){}
            try {runToD("Brehme_schwarz")} catch(e){}
            try {runToD("Brehme_weiss")} catch(e){}
            try {runToD("11F-innen_doppelpunkt_schwarz")} catch(e){}
            try {runToD("11F-innen_doppelpunkt_weiss")} catch(e){}
            try {runToD("11F-innen_schwarz")} catch(e){}
            try {runToD("11F-innen_weiss")} catch(e){}
            try {runToD("11F-Logo-hinten_schwarz")} catch(e){}
            try {runToD("111F-Logo-hinten_weiss")} catch(e){}
            try {runToD("BrigadeHS-hinten_schwarz")} catch(e){}
            try {runToD("BrigadeHS-hinten_weiss")} catch(e){}






            // gotoLayer(startLayer);
        } catch (e) {}
        emptyProtocoll();
        // doc.close(SaveOptions.DONOTSAVECHANGES);

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

function updateLink() {
    executeAction(s2t("placedLayerUpdateAllModified"), undefined, DialogModes.NO);
}

function topleft() {
    var r = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;
    layer_transform("topleft", (doc.activeLayer.bounds[0] * -1), (doc.activeLayer.bounds[1] * -1), f, f, f, t);
    app.preferences.rulerUnits = r;
}