/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[ss] open Image in PS</name>
<about>open Image or Freisteller in PS  | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>SimonScript</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
/* TODO 
    - öffne andere Links (Text) in den Original-Programmen

*/
/** Variablen  **************************************************************/
//@include "./assets/json2.js"
var jsonFilePath="~/.ss_settings.json",jsonData=loadJSON(jsonFilePath);
// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(e){var i,n=new File(e);if(!n.exists)return alert("Die JSON-Datei konnte nicht gefunden werden."),null;n.open("r"),i=n.read(),n.close();
// Parse JSON-Inhalt
try{return JSON.parse(i)}catch(e){return alert("Fehler beim Parsen der JSON-Datei:\n"+e),null}}
// Funktion zum Finden eines Wertes in einem Array von Objekten
function jsonValue(e){for(var i=0;i<jsonData.length;i++)if(void 0!==jsonData[i][e])return jsonData[i][e];return null}
/** Optionen  **************************************************************/const debug=Boolean(jsonValue("Debug")),ZielAufloesung=jsonValue("ZielAufloesung"),minAufloesung=jsonValue("minAufloesung"),suffixRGB=jsonValue("suffixRGB");var mainFolder=jsonValue("mainFolder"),subFolder=jsonValue("subFolder");const woodwing_mainFolder=jsonValue("woodwing_mainFolder");var check_trailingSlash=/\/$/;// Prüft, ob der String mit "/" endet
if(check_trailingSlash.test(mainFolder)||(mainFolder+="/"),!app.selection.length>0)alert("Wähle das zubearbeitende Bild aus");else for(var idDoc=app.activeDocument,idDocName=GetFileNameOnly(decodeURI(idDoc.name)),i=0;i<app.selection.length;i++){
// Weiche: interne oder äussere Rahmen des Bildes gewählt
if(app.selection[i]instanceof Image&&app.selection[i].parent.graphics.length>0)var selection=app.selection[i].parent;else selection=app.selection[i];var image=selection.images[0],imageLink=selection.graphics[0].itemLink;try{if(imageLink.wwoi){var isWoodwing=!0,woodwing_imageID=imageLink.wwoi;idDocName=idDocName.replace(/^(.+)((-|_)\d{3})$/gm,"$1")}}catch(e){isWoodwing=!1}if(void 0!==imageLink){if(isWoodwing)imagePath=imageLink.elvisFilePath;else var imagePath=imageLink.filePath;var imageFile=new File(imagePath),imageName=decodeURI(imageLink.name),imageName_init=GetFileNameOnly(imageName),docFolder=new Folder(mainFolder+subFolder);
// var frei = "-frei";
// var checkName = new RegExp(frei);
// if (checkName.test(imageFile)) {
//     var string_imageFile_frei = imageFile.toString().replace(frei, "");
//     var imageFile_frei = new File(string_imageFile_frei);
//     if (imageFile_frei.exists) {
//         var imageFile = string_imageFile_frei;
//     }
// }
try{isWoodwing&&imageLink.editOriginal(),BridgeTalkMessage_openDoc(image,docFolder,idDocName,imageFile,imageName,imageName_init,suffixRGB,isWoodwing,woodwing_mainFolder,woodwing_imageID)}catch(e){alert(e)}}else alert("evtl. kein Bild\n Shift + Ente\nOriginal bearbeiten")}
/*// FUNCTIONS //*/
/*=================================================================================*/function GetFileNameOnly(e){var i=e.lastIndexOf(".");return-1==i?e:e.substr(0,i)}function set_docDisplaySetting(){var e=app.activeWindow.viewDisplaySetting.toString(),i=app.displayPerformancePreferences.ignoreLocalSettings;if("HIGH_QUALITY"!=e&&i)try{app.displayPerformancePreferences.ignoreLocalSettings=!1}catch(e){alert("Error: set_docDisplaySetting() \n"+e)}}function set_img2hq(e){set_docDisplaySetting(),"HIGH_QUALITY"!=e.localDisplaySetting.toString()&&(e.localDisplaySetting=DisplaySettingOptions.HIGH_QUALITY)}function BridgeTalkMessage_openDoc(e,i,n,a,o,t,l,r,s,g){
/*     $.writeln("_docFolder:" + _docFolder);
    $.writeln("_idDocName:" + _idDocName);
    $.writeln("_imageName_init:" + _imageName_init);
    $.writeln("_suffixRGB:" + _suffixRGB);
    $.writeln("_isWoodwing:" + _isWoodwing);
    $.writeln("_woodwing_mainFolder:" + _woodwing_mainFolder);
    $.writeln("_woodwing_imageID:" + _woodwing_imageID);
    $.writeln("_imageName:" + _imageName); */
var c=new BridgeTalk;c.target="photoshop",c.body=runPS.toSource()+"('"+i+"','"+n+"','"+a+"','"+o+"','"+t+"','"+l+"','"+r+"','"+s+"','"+g+"');",c.onResult=function(i){set_img2hq(e)},c.send(5)}function runPS(e,i,n,a,o,t,l,r,s){app.bringToFront();l="true"===l;
/*  var imageName_init = GetFileNameOnly(decodeURI(_imageName)); */
/*     alert("_docFolder:" + _docFolder);
        alert("_idDocName:" + _idDocName);
        alert("_imageName_init:" + _imageName_init);
        alert("_suffixRGB:" + _suffixRGB);
        alert("_isWoodwing:" + _isWoodwing);
        alert("_woodwing_mainFolder:" + _woodwing_mainFolder);
        alert("_woodwing_imageID:" + _woodwing_imageID); */var g=new Folder(e+"/"+i),c=new File(decodeURI(g+"/"+o+t+".psd"));
/* var imageFile_RGB = new File(imageFile_RGB); */
c.exists&&(
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* HIER BIN ICH STEHEN GEBLIEBEN: WENN RGB NICHT EXISTIERT: ABBRUCH */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
l?(function(e){for(var i=!1,n=0;n<app.documents.length;n++)if(app.documents[n].name==e){i=!0;break}return i}(a)&&app.documents.getByName(a).close(SaveOptions.DONOTSAVECHANGES),app.open(c)):app.open(new File(n)))}