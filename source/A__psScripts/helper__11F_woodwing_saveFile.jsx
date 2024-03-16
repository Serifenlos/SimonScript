/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] 11F-woodwing saveFile</name>
<about>save RGB.psd + copy.jpg | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "./functions/basic.jsx";
//@include "./functions/meta.jsx";
//@include "./functions/save.jsx";



if (getMeta_3("isWoodwing")) var isWoodwing = getMeta_3("isWoodwing");
if (getMeta_3("arbeitsdatei_RGB")) var arbeitsdatei_RGB = getMeta_3("arbeitsdatei_RGB");
if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");



// alert("isWoodwing: " + getMeta_2("isWoodwing") + "\narbeitsdatei_RGB: " + getMeta_2("arbeitsdatei_RGB") + "\nwoodwing_RGB: " + getMeta_2("woodwing_RGB") + "\nwoodwing_file: " + getMeta_2("woodwing_file") + "\nidDocName: " + getMeta_2("idDocName"));

try {
    var isWoodwing = (String(isWoodwing).toLowerCase() === 'true');
    var doc = app.activeDocument;

} catch (e) { alert(e) }

// closeDoc(woodwing_file);

// alert(woodwing_file)
if (isWoodwing) {

    BridgeTalkMessage_openDocID(idDocName, woodwing_file);

    // ICH BRAUCHE EINEN NOTIFYER : WIE GEHTS ?
    // DER SOLL AUFS DOC ACHTEN - WENNS GEÖFFNET IST, WIEDER SCHIESSEN UND DEN NOTIFYER LÖSCHEN
    // app.setTimeout = (alert("nix"), 3000);
    // app.documents.getByName(woodwing_file).close(SaveOptions.DONOTSAVECHANGES);

    // alert("woodwing_file: " + woodwing_file);
    // alert("woodwing_RGB: " + woodwing_RGB);
    // if (!isFileOpen(woodwing_file)) {
    //     app.open(new File(woodwing_RGB));
    // }
    closeDoc(woodwing_file);
    


    doc.suspendHistory("save Arbeitsdatei + Woodwing", "save_ArbeitWood_RGB()");

    // closeDoc(woodwing_file);
    // app.documents.getByName("Falke_PP-3815.jpg").close(SaveOptions.DONOTSAVECHANGES);


    // saveFile_PSD(new File(arbeitsdatei_RGB), f, t, f, t, t, f);
    // saveJPG(2, 3, new File(woodwing_RGB), t, t, t);

    // // doc.suspendHistory("save Arbeitsdatei + Woodwing", "save_ArbeitWood_RGB()");
    // if(isFileOpen(woodwing_file)) {
    //     app.documents.getByName(woodwing_file).close(SaveOptions.DONOTSAVECHANGES);
    // } else {
    //     alert("nicht offen?");
    // }


    function BridgeTalkMessage_openDocID(_idDocName, _woodwing_file) {
        var bt = new BridgeTalk();
        bt.target = 'indesign';
        bt.body = runID.toSource() + "('" + _idDocName + "','" + _woodwing_file + "');";
        bt.onResult = function (resObj) { }
        bt.send(10);
    }



    function closeDoc(_file) {
        try { _file.close(SaveOptions.DONOTSAVECHANGES) }
        catch (e) {
            // alert(e);
        }
    }
}






function runID(_idDocName, _woodwing_file) {

    try {
        if (focusOpenedFile(_idDocName)) {
            var woodwing_file = app.activeDocument.links.itemByName(_woodwing_file);
            woodwing_file.editOriginal();
        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) {
        alert(e);
    }

    return;


    function focusOpenedFile(_fileName) {
        var fileIsOpen = false;
        for (var j = 0; j < app.documents.length; j++) {
            if (app.documents[j].name == _fileName) {
                fileIsOpen = true;
                /* var filePath = File(app.documents[j].fullName.fullName);
                app.open(filePath, true); */
                app.activeDocument = app.documents[j];
                break;
            }
        }
        return fileIsOpen;
    }
}





function save_ArbeitWood_RGB() {
    try {
        /* saveJPG(2, 3, new File(woodwing_RGB), t, t, t); */
        saveJPG_v2(new File(woodwing_RGB), 12, t)
    } catch (e) { "Error 2: " + alert(e) }

    try {
        saveFile_PSD(new File(arbeitsdatei_RGB), f, t, f, t, t, f);
    } catch (e) { "Error 2: " + alert(e) }

}


/* function saveJPG(_quality, _scans, _file, _asCopy, _lowerCase, _embedProfiles) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();

    d2.putInteger(s2t("extendedQuality"), _quality);
    d2.putInteger(s2t("scans"), _scans);
    d2.putEnumerated(s2t("matteColor"), s2t("matteColor"), s2t("none"));
    d.putObject(s2t("as"), s2t("JPEG"), d2);
    d.putPath(s2t("in"), _file);
    d.putBoolean(s2t("copy"), _asCopy);
    d.putBoolean(s2t("lowerCase"), _lowerCase);
    d.putBoolean(s2t("embedProfiles"), _embedProfiles);
    d.putEnumerated(s2t("saveStage"), s2t("saveStageType"), s2t("saveBegin"));
    executeAction(s2t("save"), d, DialogModes.NO);
} */


function saveJPG_v2(_file, _quality, _asCopy) {
    saveOptions = new JPEGSaveOptions();
    saveOptions.quality = _quality;
    saveOptions.embedColorProfile = true;
    saveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
    saveOptions.matte = MatteType.WHITE;
    saveFile_v2(_file, saveOptions, _asCopy);
}

function saveFile_v2(_file, _saveOptions, _asCopy) {
    doc.saveAs(_file, _saveOptions, _asCopy, Extension.LOWERCASE);
}

function isFileOpen(_fileName) {
    var fileIsOpen = false;
    for (var j = 0; j < app.documents.length; j++) {
        if (app.documents[j].name == _fileName) {
            fileIsOpen = true;
            break;
        }
    }
    return fileIsOpen;
}