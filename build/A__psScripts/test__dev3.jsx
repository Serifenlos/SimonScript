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
var jsonFilePath="~/.ss_settings.json",jsonData=loadJSON(jsonFilePath);
// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(e){var n,r=new File(e);if(!r.exists)return alert("Die JSON-Datei konnte nicht gefunden werden."),null;r.open("r"),n=r.read(),r.close();
// Parse JSON-Inhalt
try{return JSON.parse(n)}catch(e){return alert("Fehler beim Parsen der JSON-Datei:\n"+e),null}}
// Funktion zum Finden eines Wertes in einem Array von Objekten
function jsonValue(e){for(var n=0;n<jsonData.length;n++)if(void 0!==jsonData[n][e])return jsonData[n][e];return null}
/** Optionen  **************************************************************/const debug=Boolean(jsonValue("Debug"));
/***************************************************************************/var ruleUnit_gigapixel_temp=app.preferences.rulerUnits;app.preferences.rulerUnits=Units.PIXELS,$.writeln(app.activeDocument.width),app.preferences.rulerUnits=ruleUnit_gigapixel_temp;try{
// var check = getMeta_3("idDocName");
var check=void 0}catch(n){alert(e)}check?$.writeln(check):$.writeln("ding");