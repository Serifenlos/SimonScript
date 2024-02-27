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
var jsonFilePath="~/ss_var.json",jsonData=loadJSON(jsonFilePath);
// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(e){var i,a=new File(e);if(!a.exists)return alert("Die JSON-Datei konnte nicht gefunden werden."),null;a.open("r"),i=a.read(),a.close();
// Parse JSON-Inhalt
try{return JSON.parse(i)}catch(e){return alert("Fehler beim Parsen der JSON-Datei:\n"+e),null}}
/** Optionen  **************************************************************/const ZielAufloesung=jsonData.ZielAufloesung,minAufloesung=jsonData.minAufloesung,suffixRGB=jsonData.suffixRGB;var mainFolder=jsonData.mainFolder,subFolder=jsonData.subFolder,woodwing_mainFolder=jsonData.woodwing_mainFolder,check_trailingSlash=/\/$/;if(// Prüft, ob der String mit "/" endet
check_trailingSlash.test(mainFolder)||(mainFolder+="/"),!app.selection.length>0)alert("Wähle das zubearbeitende Bild aus");else
// $.writeln("idDocName: " + idDocName)
for(var idDoc=app.activeDocument,idDocName=GetFileNameOnly(decodeURI(idDoc.name)),i=0;i<app.selection.length;i++){
// var image, imageFile_frei_string, imageFile, imagePath;
// var selection = app.selection[i];
// try {
//     if (imageLink.wwoi) {
//         var isWoodwing = true;
//         var woodwing_imageID = imageLink.wwoi;
//     }
// } catch (e) {
//     var isWoodwing = false;
// }
// // ist der interne Rahmen vom Bild gewählt
// if (selection instanceof Image && selection.parent.graphics.length > 0) {
//     var image = selection.parent.graphics[0].itemLink;
// }
// // ist der äussere Rahmen vom Bild gewählt
// else if ((selection instanceof Rectangle || selection instanceof Oval || selection instanceof Polygon) && selection.graphics.length > 0) {
//     // if (!selection instanceof TextFrame && selection.graphics.length > 0) {
//     var image = selection.graphics[0].itemLink;
//     var imageName = image.name;
//     $.writeln("imageName: " + imageName);
// }
// else {
//     // um alle anderen im Original-Programm zu öffnen braucht man den Link der Selection und dann wird einfach… Aber ich weiß nicht woher den Link bekommen.
//     // link.editOriginal();
// }
if(app.selection[i]instanceof Image&&app.selection[i].parent.graphics.length>0)var selection=app.selection[i].parent;else selection=app.selection[i];var image=selection.images[0],imageLink=selection.graphics[0].itemLink;try{if(imageLink.wwoi)var isWoodwing=!0,woodwing_imageID=imageLink.wwoi}catch(e){isWoodwing=!1}if(void 0!==imageLink){if(isWoodwing)imagePath=imageLink.elvisFilePath;else var imagePath=imageLink.filePath;var imageFile=new File(imagePath),imageName=decodeURI(imageLink.name),imageName_init=GetFileNameOnly(imageName),docFolder=new Folder(mainFolder+subFolder);
// var frei = "-frei";
// var checkName = new RegExp(frei);
// if (checkName.test(imageFile)) {
//     var string_imageFile_frei = imageFile.toString().replace(frei, "");
//     var imageFile_frei = new File(string_imageFile_frei);
//     if (imageFile_frei.exists) {
//         var imageFile = string_imageFile_frei;
//     }
// }
try{isWoodwing&&imageLink.editOriginal(),BridgeTalkMessage_openDoc(docFolder,idDocName,imageFile,imageName,imageName_init,suffixRGB,isWoodwing,woodwing_mainFolder,woodwing_imageID)}catch(e){alert(e)}}else alert("evtl. kein Bild\n Shift + Ente\nOriginal bearbeiten")}
/*// FUNCTIONS //*/
/*=================================================================================*/function GetFileNameOnly(e){var i=e.lastIndexOf(".");return-1==i?e:e.substr(0,i)}function BridgeTalkMessage_openDoc(e,i,a,n,o,t,l,r,s){
/*     $.writeln("_docFolder:" + _docFolder);
    $.writeln("_idDocName:" + _idDocName);
    $.writeln("_imageName_init:" + _imageName_init);
    $.writeln("_suffixRGB:" + _suffixRGB);
    $.writeln("_isWoodwing:" + _isWoodwing);
    $.writeln("_woodwing_mainFolder:" + _woodwing_mainFolder);
    $.writeln("_woodwing_imageID:" + _woodwing_imageID);
    $.writeln("_imageName:" + _imageName); */
var d=new BridgeTalk;d.target="photoshop",d.body=runPS.toSource()+"('"+e+"','"+i+"','"+a+"','"+n+"','"+o+"','"+t+"','"+l+"','"+r+"','"+s+"');",d.send(5)}function runPS(e,i,a,n,o,t,l,r,s){app.bringToFront();l="true"===l;
/*  var imageName_init = GetFileNameOnly(decodeURI(_imageName)); */
/*     alert("_docFolder:" + _docFolder);
        alert("_idDocName:" + _idDocName);
        alert("_imageName_init:" + _imageName_init);
        alert("_suffixRGB:" + _suffixRGB);
        alert("_isWoodwing:" + _isWoodwing);
        alert("_woodwing_mainFolder:" + _woodwing_mainFolder);
        alert("_woodwing_imageID:" + _woodwing_imageID); */var d=new Folder(e+"/"+i),g=decodeURI(d+"/"+o+t+".psd");l?(function(e){for(var i=!1,a=0;a<app.documents.length;a++)app.documents[a].name==e&&(i=!0);return i}(n)&&app.documents.getByName(n).close(SaveOptions.DONOTSAVECHANGES),app.open(new File(g))):app.open(new File(a))}