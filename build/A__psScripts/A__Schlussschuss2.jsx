/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] Schlussschuss2</name>
<about>Photoshop-Script to RZ | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
/*//// FUNCTIONS ////*/
/*=================================================================================*/
//@include "functions/basic.jsx";
//@include "functions/channel.jsx";
//@include "functions/dialog.jsx";
//@include "functions/view.jsx";
//@include "functions/layer.jsx";
//@include "functions/save.jsx";
//@include "functions/ready.jsx";
//@include "functions/utils.jsx";
//@include "functions/loopFiles.jsx";
//@include "functions/meta.jsx";
/*//// OPTIONS ////*/
/*=================================================================================*/
//@include "./assets/json2.js"
var jsonFilePath="~/ss_var.json",jsonData=loadJSON(jsonFilePath),saveFolder=jsonData.RZ_saveFolder,Suffix_RZ=jsonData.RZ_suffix,saveFormat=jsonData.RZ_saveFormat,delPath=jsonData.RZ_delPath,sharp_dialog=jsonData.RZ_sharpDialog,RZ_qualityJPG=jsonData.RZ_qualityJPG,RZ_alphaChannels=jsonData.RZ_alphaChannels,RZ_withLayers=jsonData.RZ_withLayers,ssDebug=!1;
/*=================================================================================*/
function sharp(e){var t=getZoomLevel();
// vollbildmodus();
app_panelsVisible()&&togglePalettes(),zoom100();try{executeAction(stringIDToTypeID("unsharpMask"),void 0,e)}catch(e){}
// standardmodus();
app_panelsVisible()||togglePalettes(),setZoom(t)}
/*=================================================================================*/function convertToProfil_menu(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(s2t("document"),s2t("ordinal"),s2t("targetEnum")),e.putReference(s2t("null"),t),executeAction(s2t("convertToProfile"),e,DialogModes.ALL)}
/*=================================================================================*/
function convertProfile_metaSoftproof(){if(editXMP_3(),xmpMeta.doesPropertyExist(nsURI,"softproofProfil")&&xmpMeta.doesPropertyExist(nsURI,"softproofIntent")&&xmpMeta.doesPropertyExist(nsURI,"softproofTK")){var e=xmpMeta.getProperty(nsURI,"softproofProfil"),t=xmpMeta.getProperty(nsURI,"softproofIntent"),a=Boolean(xmpMeta.getProperty(nsURI,"softproofTK"));if("image"==t)t=Intent.PERCEPTUAL;else if("colorimetric"==t)t=Intent.RELATIVECOLORIMETRIC;else if("graphics"==t)t=Intent.SATURATION;else if("absColorimetric"==t)t=Intent.ABSOLUTECOLORIMETRIC;
// convertProfile(destinationProfile,intent[, blackPointCompensation][, dither])
doc.convertProfile(e,t,a,!0)}else//convert by Hand
// var appleScript = new File('/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app');
// if (appleScript.exists) {
//     appleScript.execute(); //dauert zu lang, wird von der nächsten function überholt
// }
convertToProfil_menu()}function replace_RGB_to_RZ(){return GetFileNameOnly(doc.name).replace(/(__RGB.*)$/g,Suffix_RZ)}
/*=================================================================================*/function dialog_missingSoftproof(){return dialog_createDialog("Schlussschuss","Du hast den Softproof vergessen","Egal -> weiter","Oh nein -> stopp").show()?0:1}function dialog_saveWorkingfile(){return dialog_createDialog("Schlussschuss","vorher speichern?","Ja","Nein").show()?0:1}
/*=================================================================================*/function checkBeforeRun(){if(editXMP_3(),xmpMeta.doesPropertyExist(nsURI,"softproofProfil")&&xmpMeta.doesPropertyExist(nsURI,"softproofIntent")&&xmpMeta.doesPropertyExist(nsURI,"softproofTK"))run(saveFolder);else{if(!dialog_missingSoftproof())return;run(saveFolder)}}
/*=================================================================================*/
function run(e){var a=app.activeDocument;0==a.saved&&dialog_saveWorkingfile()&&a.save();var o=!1;if(getMeta_3("isWoodwing"))o=Boolean(getMeta_3("isWoodwing"));if(getMeta_3("arbeitsdatei_RGB"))getMeta_3("arbeitsdatei_RGB");if(getMeta_3("woodwing_RGB"))var r=getMeta_3("woodwing_RGB");if(getMeta_3("woodwing_file"))var n=getMeta_3("woodwing_file");if(getMeta_3("woodwing_imageID"))getMeta_3("woodwing_imageID");if(getMeta_3("idDocName"))var s=getMeta_3("idDocName");
/*     $.writeln(isWoodwing);
        $.writeln(arbeitsdatei_RGB);
        $.writeln(woodwing_RGB);
        $.writeln(woodwing_file);
        $.writeln(woodwing_imageID);
        $.writeln(idDocName); */try{BridgeTalkMessage_openDocID(s,n,ssDebug);// v2
}catch(e){ssDebug&&alert("bt: "+e)}try{closeDoc(n);// v2
}catch(e){ssDebug&&alert("closeDoc+: "+e)}
// v3
// BridgeTalkMessage_checkOutImage(idDocName, woodwing_imageID);
// $.setTimeout = function (func, time) {
//     $.sleep(time);
//     func();
// };
// $.setTimeout(function () { $.writeln("Zeitschinden") }, 3000);
if(o)
// if (woodwing_RGB.exists) {
var i=r;
// } else {
//     alert("Abbruch! Die Woodwing-Zieldatei existiert nicht \n" + woodwing_RGB);
//     return;
// }
else{var c=new Folder(e);c.exists||c.create();i=c+"/"+replace_RGB_to_RZ()+"."+saveFormat}try{a.layerSets.getByName("Freisteller")&&(gotoLayer("Freisteller"),fixMask(getActiveLayerIndex(),1),duplicateLayerMaskAsAlpha(),setMaskVisibility(!1),selectLayers("selectAllLayers"),mergeLayers(),setBackTheLayerMask(),setMaskVisibility(!1))}catch(e){flattenImage()}RemoveAlphaChannels(),convertProfile_metaSoftproof(),sharp(sharp_dialog?DialogModes.ALL:DialogModes.NO),a.bitsPerChannel!=BitsPerChannelType.EIGHT&&setBitDepth(8),clearAllGuides(),delMeta_3(["softproofProfil","softproofIntent","softproofTK","softproofGroup"]),delPath&&activeDocument.pathItems.removeAll();try{if(a.artLayers.getByName("Freisteller")){setMaskVisibility(!0);var l=c+"/"+replace_RGB_to_RZ()+"-frei";savePSD_v2(new File(l),t,t,t,f),setMaskVisibility(!1)}}catch(e){$.writeln("2: "+e)}try{flattenImage(),saveMultiformat(new File(i),saveFormat,!1,RZ_qualityJPG,RZ_alphaChannels,RZ_withLayers)}catch(e){ssDebug&&alert("save: "+e)}closeDoc(n)}function closeDoc(e){try{app.documents.getByName(decodeURI(e)).close(SaveOptions.DONOTSAVECHANGES)}catch(t){ssDebug&&alert("closeDoc: "+e+" :--: "+t)}}function BridgeTalkMessage_openDocID(e,t,a){var o=new BridgeTalk;o.target="indesign",o.body=runID.toSource()+"('"+e+"','"+t+"','"+a+"');",o.onResult=function(e){},o.send(10)}function runID(e,t,a){try{if(function(e){for(var t=!1,a=0;a<app.documents.length;a++)if(-1!==app.documents[a].name.indexOf(e)){t=!0,app.activeDocument=app.documents[a];break}return t}(e))app.activeDocument.links.itemByName(t).editOriginal();else alert("kein Focus auf der Datei?")}catch(e){
/* if (_ssDebug) { alert("runID: " + e); } */}return" "}
/* v3 */function BridgeTalkMessage_checkOutImage(e,t){var a=new BridgeTalk;a.target="indesign",a.body=runID_checkOutImage.toSource()+"('"+e+"','"+t+"');",a.onResult=function(e){},a.send(10)}
/* v3 */function BridgeTalkMessage_checkInImage(e,t){var a=new BridgeTalk;a.target="indesign",a.body=runID_checkInImage.toSource()+"('"+e+"','"+t+"');",a.onResult=function(e){},a.send(10)}
/* ################################################### */function runID_checkOutImage(e,t){try{if(function(e){for(var t=!1,a=0;a<app.documents.length;a++)if(-1!==app.documents[a].name.indexOf(e)){t=!0,app.activeDocument=app.documents[a];break}return t}(e)){var a=function(e,t){try{for(var a=-1,o=0;i<e.length;o++)if(e[o]===t){a=o;break}return a}catch(e){alert(e)}}(function(){var e=[];try{for(var t=app.activeDocument.managedImages,a=0;a<t.length;a++){var o=t[a].entMetaData.get("Core_ID");e.push(o)}return e}catch(e){alert(e)}}(),t);app.activeDocument.managedImages[a].checkOut()}else alert("kein Focus auf der Datei?")}catch(e){alert("runID_checkOutImage: "+e)}}
/* ################################################### */function runID_checkInImage(e,t){try{if(function(e){for(var t=!1,a=0;a<app.documents.length;a++)if(-1!==app.documents[a].name.indexOf(e)){t=!0,app.activeDocument=app.documents[a];break}return t}(e)){var a=function(){var e=[];try{for(var t=app.activeDocument.managedImages,a=0;a<t.length;a++){var o=t[a].entMetaData.get("Core_ID");e.push(o)}return e}catch(e){alert(e)}}(),o=function(e,t){try{for(var a=-1,o=0;i<e.length;o++)if(e[o]===t){a=o;break}return a}catch(e){alert(e)}}(a,t);app.activeDocument.managedImages[o].pageItem[0].placeObject(a[o]),app.activeDocument.managedImages[o].checkIn()}else alert("kein Focus auf der Datei?")}catch(e){alert("runID_1: "+e)}}checkBeforeRun();