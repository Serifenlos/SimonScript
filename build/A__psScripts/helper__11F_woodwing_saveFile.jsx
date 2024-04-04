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
if(getMeta_3("isWoodwing"))var isWoodwing=Boolean(getMeta_3("isWoodwing"));if(getMeta_3("arbeitsdatei_RGB"))var arbeitsdatei_RGB=getMeta_3("arbeitsdatei_RGB");if(getMeta_3("woodwing_RGB"))var woodwing_RGB=getMeta_3("woodwing_RGB");if(getMeta_3("woodwing_file"))var woodwing_file=getMeta_3("woodwing_file");if(getMeta_3("woodwing_imageID"))var woodwing_imageID=getMeta_3("woodwing_imageID");if(getMeta_3("idDocName"))var idDocName=getMeta_3("idDocName");var doc=app.activeDocument;if(isWoodwing){
/* v2 */
function BridgeTalkMessage_openDocID(e,a){var t=new BridgeTalk;t.target="indesign",t.body=runID.toSource()+"('"+e+"','"+a+"');",t.onResult=function(e){},t.send(10)}
/* v3 */function BridgeTalkMessage_checkOutImage(e,a){var t=new BridgeTalk;t.target="indesign",t.body=runID_checkOutImage.toSource()+"('"+e+"','"+a+"');",t.onResult=function(e){},t.send(10)}
/* v3 */function BridgeTalkMessage_checkInImage(e,a){var t=new BridgeTalk;t.target="indesign",t.body=runID_checkInImage.toSource()+"('"+e+"','"+a+"');",t.onResult=function(e){},t.send(10)}function closeDoc(e){try{
/* _file.close(SaveOptions.DONOTSAVECHANGES); */
app.documents.getByName(decodeURI(e)).close(SaveOptions.DONOTSAVECHANGES)}catch(e){
// alert(e);
}}
/* v2 */
// BridgeTalkMessage_openDocID(idDocName, woodwing_file);
// closeDoc(woodwing_file);
// doc.suspendHistory("save Arbeitsdatei + Woodwing", "save_ArbeitWood_RGB()");
/* v3 */
BridgeTalkMessage_checkOutImage(idDocName,woodwing_imageID),doc.suspendHistory("save Arbeitsdatei + Woodwing","save_ArbeitWood_RGB()"),BridgeTalkMessage_checkInImage(idDocName,woodwing_imageID)}function runID(e,a){try{if(function(e){for(var a=!1,t=0;t<app.documents.length;t++)if(-1!==app.documents[t].name.indexOf(e)){a=!0,app.activeDocument=app.documents[t];break}return a}(e))app.activeDocument.links.itemByName(a).editOriginal();else alert("kein Focus auf der Datei?")}catch(e){
/* alert(e); */}return}
/* ################################################### */function runID_checkOutImage(e,a){try{if(function(e){for(var a=!1,t=0;t<app.documents.length;t++)if(-1!==app.documents[t].name.indexOf(e)){a=!0,app.activeDocument=app.documents[t];break}return a}(e)){var t=function(e,a){try{for(var t=-1,n=0;i<e.length;n++)if(e[n]===a){t=n;break}return t}catch(e){alert(e)}}(function(){var e=[];try{for(var a=app.activeDocument.managedImages,t=0;t<a.length;t++){var n=a[t].entMetaData.get("Core_ID");e.push(n)}return e}catch(e){alert(e)}}(),a);app.activeDocument.managedImages[t].checkOut()}else alert("kein Focus auf der Datei?")}catch(e){/* alert("runID_1: " + e) */}}
/* ################################################### */function runID_checkInImage(e,a){try{if(function(e){for(var a=!1,t=0;t<app.documents.length;t++)if(-1!==app.documents[t].name.indexOf(e)){a=!0,app.activeDocument=app.documents[t];break}return a}(e)){var t=function(){var e=[];try{for(var a=app.activeDocument.managedImages,t=0;t<a.length;t++){var n=a[t].entMetaData.get("Core_ID");e.push(n)}return e}catch(e){alert(e)}}(),n=function(e,a){try{for(var t=-1,n=0;i<e.length;n++)if(e[n]===a){t=n;break}return t}catch(e){alert(e)}}(t,a);app.activeDocument.managedImages[n].pageItem[0].placeObject(t[n]),app.activeDocument.managedImages[n].checkIn()}else alert("kein Focus auf der Datei?")}catch(e){/* alert("runID_1: " + e) */}}function save_ArbeitWood_RGB(){try{saveMultiformat(new File(woodwing_RGB),"jpg",t,12,f,f)}catch(e){alert(e)}try{saveMultiformat(new File(arbeitsdatei_RGB),"psd",f,null,t,t)}catch(e){alert(e)}}function isFileOpen(e){for(var a=!1,t=0;t<app.documents.length;t++)if(app.documents[t].name==e){a=!0;break}return a}