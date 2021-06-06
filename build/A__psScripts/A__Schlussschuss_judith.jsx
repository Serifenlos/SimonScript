/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] Schlussschuss Judith</name>
<about>Photoshop-Script to RZ | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
/*=================================================================================*/
//@include "functions/basic.jsx";
//@include "functions/view.jsx";
//@include "functions/layer.jsx";
//@include "functions/save.jsx";
//@include "functions/ready.jsx";
//@include "functions/utils.jsx";
//@include "functions/loopFiles.jsx";
//@include "functions/meta.jsx";
//// Schlussschuss für Judith RGB+RZ ////
/*//// OPTIONS ////*/
/*=================================================================================*/
// var Rasterweite = 70;
// var minAufloesung = 300;
// var Suffix_RZ = "__RZ";
// var option_convert_8bit = true;
saveFoler__RGB="/Users/simon/Arbeit/Judith/WBM_GB2020/Links__RGB",saveFolder="/Users/simon/Arbeit/Judith/WBM_GB2020/Links__RZ";var Suffix_RZ="__RZ",saveFormat="jpg";// tif, jpg, psd
/*=================================================================================*/
function prefSave(){startDisplayDialogs=app.displayDialogs,startRulerUnits=app.preferences.rulerUnits}function prefSet(){app.displayDialogs=DialogModes.NO,app.preferences.rulerUnits=Units.PIXELS}function prefReset(){app.preferences.rulerUnits=startRulerUnits,app.displayDialogs=startDisplayDialogs}var checkSettings,doc=app.activeDocument;
/*=================================================================================*/
// RemoveAlphaChannels
function RemoveAlphaChannels(){if(0!=app.documents.length){for(var e=app.activeDocument.channels,t=[],o=0;o<e.length;o++){(a=e[o]).kind!=ChannelType.COMPONENT&&t.push(a)}for(;t.length;){var a;(a=t.pop()).remove()}}}
/*=================================================================================*/
// convertToProfiles
function convertToProfile(e,t,o,a,i){var r=function(e){return app.stringIDToTypeID(e)},s=new ActionDescriptor,n=new ActionReference;n.putEnumerated(r("document"),r("ordinal"),r("targetEnum")),s.putReference(r("null"),n),s.putString(r("to"),e),s.putEnumerated(r("intent"),r("intent"),r("colorimetric")),s.putBoolean(r("mapBlack"),t),s.putBoolean(r("dither"),o),s.putBoolean(r("rasterizePlaced"),a),s.putInteger(r("shadowMode"),i),executeAction(r("convertToProfile"),s,DialogModes.NO)}
/*=================================================================================*/
// Flatten the Image
function flattenImage(){doc.flatten()}
/*=================================================================================*/
//FUNCTION schärfen
function sharp(){
// var safeZoom = getZoomLevel();
// vollbildmodus();
// zoom100();
try{executeAction(stringIDToTypeID("unsharpMask"),void 0,DialogModes.NO)}catch(e){}
// standardmodus();
// setZoom(safeZoom);
}
/*=================================================================================*/
//FUNCTION convertProfil
function convertProfile_bySimon(){function e(){editXMP();if(xmpMeta.doesPropertyExist(customNamespace,"proof_profil")&&xmpMeta.doesPropertyExist(customNamespace,"proof_intent")&&xmpMeta.doesPropertyExist(customNamespace,"proof_tk")){var e=xmpMeta.getProperty(customNamespace,"proof_profil"),t=xmpMeta.getProperty(customNamespace,"proof_intent"),o=xmpMeta.getProperty(customNamespace,"proof_tk");return["positiv",e.value,t.value,o.value]}return["negativ"]}if("positiv"==e()[0]){//convert by Meta
var t=e()[1];if("image"==(o=e()[2]))var o=Intent.PERCEPTUAL;else if("colorimetric"==o)o=Intent.RELATIVECOLORIMETRIC;
// elseif (proof_intent == WEISNICHT)
//   {var proof_intent = Intent.SATURATION};                 // hier brauchst noch den Intent
// elseif (proof_intent == WEISAUCHNICHT)
//   {var proof_intent = Intent.ABSOLUTECOLORIMETRIC};   // hier brauchst noch den Intent
var a=e()[3];a="true"===String(a).toLowerCase();// was passiert wenn proof_tk false ist?
// convertProfile(destinationProfile,intent[, blackPointCompensation][, dither])
doc.convertProfile(t,o,a,!0)}else{//convert by Hand
var i=new File("/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app");i.exists&&i.execute()}}
/*=================================================================================*/
//FUNCTION check8bit
function convertBitDepth(e){var t=charIDToTypeID("CnvM"),o=new ActionDescriptor,a=charIDToTypeID("Dpth");o.putInteger(a,e),executeAction(t,o,DialogModes.NO)}function check8bit(){doc.bitsPerChannel!=BitsPerChannelType.EIGHT&&convertBitDepth(8)}
/*=================================================================================*/
//FUNCTION clearAllGuides
function clearAllGuides(){executeAction(sTID("clearAllGuides"),void 0,DialogModes.NO)}
/*=================================================================================*/function GetFileNameOnly(e){var t=e.lastIndexOf(".");return-1==t?e:e.substr(0,t)}function replace_RGB_to_RZ(){return GetFileNameOnly(doc.name).replace(/(__RGB.*)$/g,Suffix_RZ)}
/*=================================================================================*/function saveRZ_ding(e){(e=new Folder(e)).exists||e.create();var t=e+"/"+replace_RGB_to_RZ()+"."+saveFormat;if("tif"==saveFormat)(o=new TiffSaveOptions).alphaChannels=!0,o.byteOrder=ByteOrder.IBM,o.embedColorProfile=!0,o.imageCompression=TIFFEncoding.TIFFLZW,o.layers=!0,o.spotColors=!1,o.transparency=!0,o.annotations=!1;else if("jpg"==saveFormat){(o=new JPEGSaveOptions).embedColorProfile=!0,o.formatOptions=FormatOptions.STANDARDBASELINE,o.matte=MatteType.WHITE,o.quality=11}else if("psd"==saveFormat){var o;(o=new PhotoshopSaveOptions).alphaChannels=!1,o.annotations=!1,o.embedColorProfile=!0,o.layers=!0,o.spotColors=!1}doc.saveAs(new File(t),o,!1,Extension.LOWERCASE)}
/*=================================================================================*/function saveRGB_ding(e){
// Location + Name
var t=new Folder(e);t.exists||t.create();var o=t+"/"+GetFileNameOnly(doc.name)+"."+saveFormat;if("tif"==saveFormat)(a=new TiffSaveOptions).alphaChannels=!0,a.byteOrder=ByteOrder.IBM,a.embedColorProfile=!0,a.imageCompression=TIFFEncoding.TIFFLZW,a.layers=!0,a.spotColors=!1,a.transparency=!0,a.annotations=!1;else if("jpg"==saveFormat){(a=new JPEGSaveOptions).embedColorProfile=!0,a.formatOptions=FormatOptions.STANDARDBASELINE,a.matte=MatteType.WHITE,a.quality=11}else if("psd"==saveFormat){var a;(a=new PhotoshopSaveOptions).alphaChannels=!1,a.annotations=!1,a.embedColorProfile=!0,a.layers=!0,a.spotColors=!1}doc.saveAs(new File(o),a,!1,Extension.LOWERCASE)}
/*=================================================================================*/if(editXMP(),xmpMeta.doesPropertyExist(customNamespace,"proof_profil")&&xmpMeta.doesPropertyExist(customNamespace,"proof_intent")&&xmpMeta.doesPropertyExist(customNamespace,"proof_tk")&&(checkSettings="positiv"),"positiv"==checkSettings)run();else{var dialogSoftproof=new Window("dialog","Schlussschuss"),stxt=dialogSoftproof.add("group");stxt.add("statictext",void 0,"Du hast den Softproof vergessen");var dialogSoftproofButton=dialogSoftproof.add("group"),ok=dialogSoftproofButton.add("button",void 0,"Egal -> weiter"),cancel=dialogSoftproofButton.add("button",void 0,"Oh nein -> stopp");ok.onClick=function(){dialogSoftproof.close(),run()},cancel.onClick=function(){dialogSoftproof.close()},dialogSoftproof.show()}
/*=================================================================================*/function run(){if(0==doc.saved){var e=new Window("dialog","Schlussschuss");e.add("group").add("statictext",void 0,"vorher speichern?");var o=e.add("group"),a=o.add("button",void 0,"Ja"),i=o.add("button",void 0,"Nein");a.onClick=function(){e.close(),doc.save()},i.onClick=function(){e.close()},e.show()}try{doc.layerSets.getByName("Freisteller")&&(gotoLayer("Freisteller"),duplicateLayerMaskAsAlpha(),setMaskVisibility(!1),selectLayers("selectAllLayers"),mergeLayers(),setBackTheLayerMask(),setMaskVisibility(!1))}catch(e){flattenImage()}flattenImage(),RemoveAlphaChannels(),sharp(),check8bit(),clearAllGuides(),
// alert("stop1");
convertToProfile("sRGB IEC61966-2.1",!0,!1,!1,2),saveRGB_ding(saveFoler__RGB),
// undoSteps(1);
// alert("stop2");
convertProfile_bySimon(),delMeta();try{if(doc.artLayers.getByName("Freisteller")){setMaskVisibility(!0);var r=saveFolder+"/"+replace_RGB_to_RZ()+"-frei";saveFile_PSD(new File(r),t,f,f,t,f,f),setMaskVisibility(!1)}}catch(e){}flattenImage(),saveRZ_ding(saveFolder),app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)}
// convertToProfile("sRGB IEC61966-2.1", true, false, false, 2);
// saveRZ_ding(saveFoler__RGB);
// undoSteps(1);