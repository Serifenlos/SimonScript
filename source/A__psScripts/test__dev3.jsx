//@include "./assets/json2.js";

//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview_v2.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/selection.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/channel.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/neural_depthmap.jsx";

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


/***************************************************************************/




var ruleUnit_gigapixel_temp = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;


$.writeln(app.activeDocument.width)

app.preferences.rulerUnits = ruleUnit_gigapixel_temp;

try {
    // var check = getMeta_3("idDocName");
    var check = undefined;
} catch (error) {
    alert(e)
}

if(check) {
    $.writeln(check)
} else {
    $.writeln("ding")
}

