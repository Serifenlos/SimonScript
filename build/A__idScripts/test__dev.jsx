/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[ss] Startschuss 2 ID</name>
<about>um die Bildbearbeitung vorzubereiten | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>SimonScript</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


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
const ZielAufloesung = jsonValue("ZielAufloesung");
const minAufloesung = jsonValue("minAufloesung");
const suffixRGB = jsonValue("suffixRGB");

var mainFolder = jsonValue("mainFolder");
var subFolder = jsonValue("subFolder");
const ww_mainFolder = jsonValue("woodwing_mainFolder");


var check_trailingSlash = /\/$/; // Prüft, ob der String mit "/" endet
if (!check_trailingSlash.test(mainFolder)) {
    mainFolder += "/"; // Fügt "/" am Ende hinzu, wenn es nicht vorhanden ist
}




var IDdocName = "dev__Startschuss2.indd";

function focusOpenedFile(_fileName) {
    var fileIsOpen = false;
    for (var j = 0; j < app.documents.length; j++) {
        if (app.documents[j].name == _fileName) {
            // fileIsOpen = true;
            // var filePath = File(app.documents[j].fullName.fullName);
            // app.open(filePath, true);
            app.activeDocument = app.documents[j];
            break;
        }
    }
    return;
}

try {
    focusOpenedFile(IDdocName)
    
} catch(e) {
    alert("Die Datei ist nicht offen: " + IDdocName + "\n" + e)
}


try {
    var link = app.activeDocument.links.itemByName("ohneProfil.psd");
    link.editOriginal();
} catch (e) {alert(e)}