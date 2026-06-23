/** Variablen  **************************************************************/
//@include "./assets/json2.js"
// var jsonFilePath = "~/.ss_settings.json";
// var jsonData = loadJSON(jsonFilePath);

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
// const debug = Boolean(jsonValue("Debug"));


/***************************************************************************/



// alert("ding");



// app.selection[0].graphics[0].itemLink

// '/Users/adrians/Library/Application Support/WoodWingStudio.noindex/InDesign/698361'


// '~/Library/Application Support/WoodWingStudio.noindex/InDesign/698361'

// assetsID2clipboard();

function assetsID2clipboard() {
    if (!app.selection.length > 0) {
        alert("Wähle das zubearbeitende Bild aus");
        return;
    }
    
    for (var i = 0; i < app.selection.length; i++) {
        var selection, image, imageLink, isWoodwing, woodwing_imageID, assetsID, hScale, hPPI, imagePath, imageFile, imageName_only, docFolder;

        if (app.selection[i] instanceof Image && app.selection[i].parent.graphics.length > 0) {
            var selection = app.selection[i].parent;
        } else {
            var selection = app.selection[i];
        }

        var image = selection.images[0];
        var imageLink = selection.graphics[0].itemLink;

        var elvisId = imageLink.elvisId;
        var elvisUrl = imageLink.elvisUrl;

        var imagePath = imageLink.elvisFilePath;

        var imageFile = new File(imagePath);
        var imageName = decodeURI(imageLink.name);
        var imageName_only = GetFileNameOnly(decodeURI(imageLink.name));

        // alert(imageName + ":\n" + elvisId + "\n\n" + elvisUrl + "\n\n" + imageFile + "\n\n" + imageName_only + "\n\n" + imageLink.elvisFilePath);
        alert(imageName + ":\n" + elvisId);

        string2Clipboard(elvisId);

    }
}



// check Clipboard-Fixes in IDv20 
//https://developer.adobe.com/indesign/uxp/changelog/
//https://developer.adobe.com/indesign/uxp/reference/uxp-api/reference-js/global-members/data-transfers/clipboard#writedata


function string2Clipboard(_string) {

    // Temporären Textrahmen erzeugen
    var tempFrame = app.activeDocument.textFrames.add();
    tempFrame.geometricBounds = [0, 0, 20, 100]; // nötig, damit er überhaupt existiert
    tempFrame.contents = _string;

    // Wichtig: TEXT auswählen, nicht den Rahmen
    var story = tempFrame.parentStory;
    app.select(story.texts[0]);   // das macht die Wunderwaffe

    // Jetzt kopieren
    app.copy();

    // Temporären Rahmen entfernen
    tempFrame.remove();
}


function GetFileNameOnly(_fileName) {
    var myString = "";
    var myResult = _fileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = _fileName;
    } else {
        myString = _fileName.substr(0, myResult);
    }
    return myString
}

elvisId_fake = "blalala";
// alert("This is alert message\n𝐇𝐞𝐥𝐥𝐨 𝐭𝐞𝐱𝐭 𝐬𝐭𝐫𝐢𝐧𝐠 𝐦𝐲 𝐨𝐥𝐝 𝐟𝐫𝐢𝐞𝐧𝐝.");
var confirm_true = confirm("Assets ID in die Zwischenablage\n" + elvisId_fake);
// prompt("Enter your name: ","Adobe");


if(confirm_true) {
    string2Clipboard(elvisId_fake);
}