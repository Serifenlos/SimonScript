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
var jsonFilePath="~/ss_var.json",jsonData=loadJSON(jsonFilePath);
// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(e){var t,o=new File(e);if(!o.exists)return alert("Die JSON-Datei konnte nicht gefunden werden."),null;o.open("r"),t=o.read(),o.close();
// Parse JSON-Inhalt
try{return JSON.parse(t)}catch(e){return alert("Fehler beim Parsen der JSON-Datei:\n"+e),null}}saveFolder=jsonData.saveFolder;var Suffix_RZ=jsonData.RZ_suffix,saveFormat=jsonData.RZ_saveFormat,delPath=jsonData.RZ_delPath,sharp_dialog=jsonData.RZ_sharpDialog;function prefSave(){startDisplayDialogs=app.displayDialogs,startRulerUnits=app.preferences.rulerUnits}function prefSet(){app.displayDialogs=DialogModes.NO,app.preferences.rulerUnits=Units.PIXELS}function prefReset(){app.preferences.rulerUnits=startRulerUnits,app.displayDialogs=startDisplayDialogs}var checkSettings,doc=app.activeDocument;
/*=================================================================================*/
// RemoveAlphaChannels
function RemoveAlphaChannels(){if(0!=app.documents.length){for(var e=app.activeDocument.channels,t=[],o=0;o<e.length;o++){(a=e[o]).kind!=ChannelType.COMPONENT&&t.push(a)}for(;t.length;){var a;(a=t.pop()).remove()}}}
/*=================================================================================*/
// Flatten the Image
function flattenImage(){doc.flatten()}
/*=================================================================================*/
//FUNCTION schärfen
function sharp(e){var t=getZoomLevel();
// vollbildmodus();
app_panelsVisible()&&togglePalettes(),zoom100();try{executeAction(stringIDToTypeID("unsharpMask"),void 0,e)}catch(e){}
// standardmodus();
app_panelsVisible()||togglePalettes(),setZoom(t)}
/*=================================================================================*/
//FUNCTION convertProfil
function convertProfile_bySimon(){function e(){editXMP_3();if(xmpMeta.doesPropertyExist(ns_ss,"softproofProfil")&&xmpMeta.doesPropertyExist(ns_ss,"softproofIntent")&&xmpMeta.doesPropertyExist(ns_ss,"softproofTK")){var e=xmpMeta.getProperty(ns_ss,"softproofProfil"),t=xmpMeta.getProperty(ns_ss,"softproofIntent"),o=xmpMeta.getProperty(ns_ss,"softproofTK");return["positiv",e.value,t.value,o.value]}return["negativ"]}if("positiv"==e()[0]){//convert by Meta
var t=e()[1];if("image"==(o=e()[2]))var o=Intent.PERCEPTUAL;else if("colorimetric"==o)o=Intent.RELATIVECOLORIMETRIC;else if("graphics"==o)o=Intent.SATURATION;else if("absColorimetric"==o)o=Intent.ABSOLUTECOLORIMETRIC;var a=e()[3];a="true"===String(a).toLowerCase();// was passiert wenn proof_tk false ist?
// convertProfile(destinationProfile,intent[, blackPointCompensation][, dither])
doc.convertProfile(t,o,a,!0)}else{//convert by Hand
var s=new File("/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app");s.exists&&s.execute()}}
/*=================================================================================*/
//FUNCTION check8bit
function convertBitDepth(e){var t=charIDToTypeID("CnvM"),o=new ActionDescriptor,a=charIDToTypeID("Dpth");o.putInteger(a,e),executeAction(t,o,DialogModes.NO)}function check8bit(){doc.bitsPerChannel!=BitsPerChannelType.EIGHT&&convertBitDepth(8)}
/*=================================================================================*/
//FUNCTION clearAllGuides
function clearAllGuides(){executeAction(sTID("clearAllGuides"),void 0,DialogModes.NO)}
/*=================================================================================*/function GetFileNameOnly(e){var t=e.lastIndexOf(".");return-1==t?e:e.substr(0,t)}function replace_RGB_to_RZ(){return GetFileNameOnly(doc.name).replace(/(__RGB.*)$/g,Suffix_RZ)}
/*=================================================================================*/function saveRZ_ding(e){
// Location + Name
writeln(e),(e=new Folder(e)).exists||e.create();var t=e+"/"+replace_RGB_to_RZ()+"."+saveFormat;if(writeln(t),"tif"==saveFormat)(o=new TiffSaveOptions).alphaChannels=!0,o.byteOrder=ByteOrder.IBM,o.embedColorProfile=!0,o.imageCompression=TIFFEncoding.TIFFLZW,o.layers=!0,o.spotColors=!1,o.transparency=!0,o.annotations=!1;else if("jpg"==saveFormat){(o=new JPEGSaveOptions).embedColorProfile=!0,o.formatOptions=FormatOptions.STANDARDBASELINE,o.matte=MatteType.WHITE,o.quality=11}else if("psd"==saveFormat){var o;(o=new PhotoshopSaveOptions).alphaChannels=!1,o.annotations=!1,o.embedColorProfile=!0,o.layers=!0,o.spotColors=!1}doc.saveAs(new File(t),o,!1,Extension.LOWERCASE)}
/*=================================================================================*/if(editXMP_3(),xmpMeta.doesPropertyExist(ns_ss,"softproofProfil")&&xmpMeta.doesPropertyExist(ns_ss,"softproofIntent")&&xmpMeta.doesPropertyExist(ns_ss,"softproofTK")&&(checkSettings="positiv"),"positiv"==checkSettings)run();else{var dialogSoftproof=new Window("dialog","Schlussschuss"),stxt=dialogSoftproof.add("group");stxt.add("statictext",void 0,"Du hast den Softproof vergessen");var dialogSoftproofButton=dialogSoftproof.add("group"),ok=dialogSoftproofButton.add("button",void 0,"Egal -> weiter"),cancel=dialogSoftproofButton.add("button",void 0,"Oh nein -> stopp");ok.onClick=function(){dialogSoftproof.close(),run()},cancel.onClick=function(){dialogSoftproof.close()},dialogSoftproof.show()}
/*=================================================================================*/function run(){var e=app.activeDocument;if(0==e.saved){var o=new Window("dialog","Schlussschuss");o.add("group").add("statictext",void 0,"vorher speichern?");var a=o.add("group"),s=a.add("button",void 0,"Ja"),r=a.add("button",void 0,"Nein");s.onClick=function(){o.close(),e.save()},r.onClick=function(){o.close()},o.show()}try{e.layerSets.getByName("Freisteller")&&(gotoLayer("Freisteller"),fixMask(getActiveLayerIndex(),1),duplicateLayerMaskAsAlpha(),setMaskVisibility(!1),selectLayers("selectAllLayers"),mergeLayers(),setBackTheLayerMask(),setMaskVisibility(!1))}catch(e){flattenImage()}try{RemoveAlphaChannels(),convertProfile_bySimon(),sharp(sharp_dialog?DialogModes.ALL:DialogModes.NO),check8bit(),clearAllGuides(),delMeta_3("softproofProfil"),delMeta_3("softproofIntent"),delMeta_3("softproofTK"),delMeta_3("softprooGroup"),delPath&&activeDocument.pathItems.removeAll()}catch(e){$.writeln("1: "+e)}try{if(e.artLayers.getByName("Freisteller")){setMaskVisibility(!0);var i=saveFolder+"/"+replace_RGB_to_RZ()+"-frei";savePSD_v2(new File(i),t,t,t,f),setMaskVisibility(!1)}}catch(e){$.writeln("2: "+e)}try{flattenImage(),saveRZ_ding(saveFolder)}catch(e){$.writeln("3: "+e)}}function writeln(e){try{return $.writeln(e+": "+e)}catch(e){}}