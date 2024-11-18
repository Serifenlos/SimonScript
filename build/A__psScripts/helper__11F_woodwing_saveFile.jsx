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
//@include "./functions/utils.jsx";
//@include "./functions/layer.jsx";
//@include "./functions/ready.jsx";
//@include "./assets/json2.js"
var jsonFilePath="~/.ss_settings.json",jsonData=loadJSON(jsonFilePath);const RZ_qualityJPG=jsonValue("RZ_qualityJPG");//TODO kommt noch nicht in PS an
if(getMeta_3("isWoodwing"))var isWoodwing=Boolean(getMeta_3("isWoodwing"));if(getMeta_3("arbeitsdatei_RGB"))var arbeitsdatei_RGB=getMeta_3("arbeitsdatei_RGB");if(getMeta_3("woodwing_RGB"))var woodwing_RGB=getMeta_3("woodwing_RGB");if(getMeta_3("woodwing_file"))var woodwing_file=getMeta_3("woodwing_file");if(getMeta_3("woodwing_imageID"))var woodwing_imageID=getMeta_3("woodwing_imageID");if(getMeta_3("idDocName"))var idDocName=getMeta_3("idDocName");var doc=app.activeDocument,startLayer=layer_selectedIDX_get(),start_closedSets=[];if(isWoodwing){
/* v2 */
// BridgeTalkMessage_openDocID(idDocName, woodwing_file);
// closeDoc(woodwing_file);
// doc.suspendHistory("save Arbeitsdatei + Woodwing", "save_ArbeitWood_RGB()");
/* v3 */
BridgeTalkMessage_checkOutImage(idDocName,woodwing_imageID);
// doc.suspendHistory("save Arbeitsdatei + Woodwing", "save_ArbeitWood_RGB()");
try{if(app.activeDocument.layerSets.getByName("Freisteller")&&hasLayerMask("Freisteller")){
// app.activeDocument.suspendHistory("getClosedSets", "var start_closedSets = getClosedSets()");
// undoSteps(1);
// historyState_deleteSteps(1);
start_closedSets=getClosedSets();var startMaskVisibility=getMaskVisibility_bySelector("Freisteller");
// var startMaskVisibility_helper = getMaskVisibility_bySelector("Freisteller helper")
if(getMeta_3("woodwing_RGB"))woodwing_RGB=getMeta_3("woodwing_RGB");if(getMeta_3("woodwing_file"))woodwing_file=getMeta_3("woodwing_file");replaceMeta_3_suffix("woodwing_file","jpg","psd"),replaceMeta_3_suffix("woodwing_RGB","jpg","psd"),app.activeDocument.suspendHistory("Freisteller: 2 Ebenen","freisteller_reduce2layers()"),saveMultiformat(new File(woodwing_RGB),"psd",t,null,f,t),undoSteps(1),replaceMeta_3_suffix("woodwing_file","jpg","psd"),replaceMeta_3_suffix("woodwing_RGB","jpg","psd"),
// saveMultiformat(new File(arbeitsdatei_RGB), "psd", f, null, t, t);
setMaskVisibility_bySelector(startMaskVisibility,"Freisteller")}}catch(e){try{saveMultiformat(new File(woodwing_RGB),"jpg",t,RZ_qualityJPG,f,f)}catch(a){alert("ERROR beim Speichern der Woodwingdatei: \n"+a)}}for(var i=0;i<start_closedSets.length;i++)
// if (isSetOpened2(start_closedSets[i])) {
app.activeDocument.suspendHistory("toogleOpenCloseSet_byIDX","toogleOpenCloseSet_byIDX_inner(start_closedSets[i])");
// }
/* v2 */
// function BridgeTalkMessage_openDocID(_idDocName, _woodwing_file) {
//     var bt = new BridgeTalk();
//     bt.target = 'indesign';
//     bt.body = runID.toSource() + "('" + _idDocName + "','" + _woodwing_file + "');";
//     bt.onResult = function (resObj) { }
//     bt.send(10);
// }
/* v3 */
function BridgeTalkMessage_checkOutImage(e,t){var a=new BridgeTalk;a.target="indesign",a.body=runID_checkOutImage.toSource()+"('"+e+"','"+t+"');",a.onResult=function(e){},a.send(10)}
/* v3 */function BridgeTalkMessage_checkInImage(e,t){var a=new BridgeTalk;a.target="indesign",a.body=runID_checkInImage.toSource()+"('"+e+"','"+t+"');",a.onResult=function(e){},a.send(10)}function closeDoc(e){try{
/* _file.close(SaveOptions.DONOTSAVECHANGES); */
app.documents.getByName(decodeURI(e)).close(SaveOptions.DONOTSAVECHANGES)}catch(e){
// alert(e);
}}layer_selectedIDX_set(startLayer),saveMultiformat(new File(arbeitsdatei_RGB),"psd",f,null,t,t),BridgeTalkMessage_checkInImage(idDocName,woodwing_imageID)}function runID(e,t){try{if(function(e){for(var t=!1,a=0;a<app.documents.length;a++)if(-1!==app.documents[a].name.indexOf(e)){t=!0,app.activeDocument=app.documents[a];break}return t}(e))app.activeDocument.links.itemByName(t).editOriginal();else alert("kein Focus auf der Datei?")}catch(e){
/* alert(e); */}return}
/* ################################################### */function runID_checkOutImage(e,t){try{if(function(e){for(var t=!1,a=0;a<app.documents.length;a++)if(-1!==app.documents[a].name.indexOf(e)){t=!0,app.activeDocument=app.documents[a];break}return t}(e)){var a=function(){var e=[];try{for(var t=app.activeDocument.managedImages,a=0;a<t.length;a++){var i=t[a].entMetaData.get("Core_ID");e.push(i)}return e}catch(e){alert(e)}}(),n=function(e,t){try{for(var a=-1,n=0;i<e.length;n++)if(e[n]===t){a=n;break}return a}catch(e){alert(e)}}(a,t);app.activeDocument.managedImages[n].checkOut()}else alert("kein Focus auf der Datei?")}catch(e){/* alert("runID_1: " + e) */}}
/* ################################################### */function runID_checkInImage(e,t){try{if(function(e){for(var t=!1,a=0;a<app.documents.length;a++)if(-1!==app.documents[a].name.indexOf(e)){t=!0,app.activeDocument=app.documents[a];break}return t}(e)){var a=function(){var e=[];try{for(var t=app.activeDocument.managedImages,a=0;a<t.length;a++){var i=t[a].entMetaData.get("Core_ID");e.push(i)}return e}catch(e){alert(e)}}(),n=function(e,t){try{for(var a=-1,n=0;i<e.length;n++)if(e[n]===t){a=n;break}return a}catch(e){alert(e)}}(a,t);app.activeDocument.managedImages[n].pageItem[0].placeObject(a[n]),app.activeDocument.managedImages[n].checkIn()}else alert("kein Focus auf der Datei?")}catch(e){/* alert("runID_1: " + e) */}}function save_ArbeitWood_RGB(){try{saveMultiformat(new File(woodwing_RGB),"jpg",t,RZ_qualityJPG,f,f)}catch(e){alert(e)}try{saveMultiformat(new File(arbeitsdatei_RGB),"psd",f,null,t,t)}catch(e){alert(e)}}function isFileOpen(e){for(var t=!1,a=0;a<app.documents.length;a++)if(app.documents[a].name==e){t=!0;break}return t}