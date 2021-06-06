/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] Schlussschuss</name>
<about>Photoshop-Script to RZ | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
/*//// OPTIONS ////*/
/*=================================================================================*/
// var Rasterweite = 70;
// var minAufloesung = 300;
// var Suffix_RZ = "__RZ";
// var option_convert_8bit = true;
saveFolder="/Users/simon/Arbeit/_RZ";var Suffix_RZ="__RZ",saveFormat="jpg";// tif, jpg, psd
/*=================================================================================*/
//@include "functions/basic.jsx";
//@include "functions/view.jsx";
//@include "functions/layer.jsx";
//@include "functions/save.jsx";
//@include "functions/ready.jsx";
//@include "functions/utils.jsx";
//@include "functions/loopFiles.jsx";
//@include "functions/meta.jsx";
function prefSave(){startDisplayDialogs=app.displayDialogs,startRulerUnits=app.preferences.rulerUnits}function prefSet(){app.displayDialogs=DialogModes.NO,app.preferences.rulerUnits=Units.PIXELS}function prefReset(){app.preferences.rulerUnits=startRulerUnits,app.displayDialogs=startDisplayDialogs}var checkSettings,doc=app.activeDocument;
/*=================================================================================*/
// RemoveAlphaChannels
function RemoveAlphaChannels(){if(0!=app.documents.length){for(var e=app.activeDocument.channels,t=[],o=0;o<e.length;o++){(a=e[o]).kind!=ChannelType.COMPONENT&&t.push(a)}for(;t.length;){var a;(a=t.pop()).remove()}}}
/*=================================================================================*/
// Flatten the Image
function flattenImage(){doc.flatten()}
/*=================================================================================*/
//FUNCTION schärfen
function sharp(){var e=getZoomLevel();vollbildmodus(),zoom100();try{executeAction(stringIDToTypeID("unsharpMask"),void 0,DialogModes.ALL)}catch(e){}standardmodus(),setZoom(e)}
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
var s=new File("/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app");s.exists&&s.execute()}}
/*=================================================================================*/
//FUNCTION check8bit
function convertBitDepth(e){var t=charIDToTypeID("CnvM"),o=new ActionDescriptor,a=charIDToTypeID("Dpth");o.putInteger(a,e),executeAction(t,o,DialogModes.NO)}function check8bit(){doc.bitsPerChannel!=BitsPerChannelType.EIGHT&&convertBitDepth(8)}
/*=================================================================================*/
//FUNCTION clearAllGuides
function clearAllGuides(){executeAction(sTID("clearAllGuides"),void 0,DialogModes.NO)}
/*=================================================================================*/function GetFileNameOnly(e){var t=e.lastIndexOf(".");return-1==t?e:e.substr(0,t)}function replace_RGB_to_RZ(){return GetFileNameOnly(doc.name).replace(/(__RGB.*)$/g,Suffix_RZ)}
/*=================================================================================*/function saveRZ_ding(e){(e=new Folder(e)).exists||e.create();var t=e+"/"+replace_RGB_to_RZ()+"."+saveFormat;if("tif"==saveFormat)(o=new TiffSaveOptions).alphaChannels=!0,o.byteOrder=ByteOrder.IBM,o.embedColorProfile=!0,o.imageCompression=TIFFEncoding.TIFFLZW,o.layers=!0,o.spotColors=!1,o.transparency=!0,o.annotations=!1;else if("jpg"==saveFormat){(o=new JPEGSaveOptions).embedColorProfile=!0,o.formatOptions=FormatOptions.STANDARDBASELINE,o.matte=MatteType.WHITE,o.quality=11}else if("psd"==saveFormat){var o;(o=new PhotoshopSaveOptions).alphaChannels=!1,o.annotations=!1,o.embedColorProfile=!0,o.layers=!0,o.spotColors=!1}doc.saveAs(new File(t),o,!1,Extension.LOWERCASE)}
/*=================================================================================*/if(editXMP(),xmpMeta.doesPropertyExist(customNamespace,"proof_profil")&&xmpMeta.doesPropertyExist(customNamespace,"proof_intent")&&xmpMeta.doesPropertyExist(customNamespace,"proof_tk")&&(checkSettings="positiv"),"positiv"==checkSettings)run();else{var dialogSoftproof=new Window("dialog","Schlussschuss"),stxt=dialogSoftproof.add("group");stxt.add("statictext",void 0,"Du hast den Softproof vergessen");var dialogSoftproofButton=dialogSoftproof.add("group"),ok=dialogSoftproofButton.add("button",void 0,"Egal -> weiter"),cancel=dialogSoftproofButton.add("button",void 0,"Oh nein -> stopp");ok.onClick=function(){dialogSoftproof.close(),run()},cancel.onClick=function(){dialogSoftproof.close()},dialogSoftproof.show()}
/*=================================================================================*/function run(){if(0==doc.saved){var e=new Window("dialog","Schlussschuss");e.add("group").add("statictext",void 0,"vorher speichern?");var o=e.add("group"),a=o.add("button",void 0,"Ja"),s=o.add("button",void 0,"Nein");a.onClick=function(){e.close(),doc.save()},s.onClick=function(){e.close()},e.show()}try{doc.layerSets.getByName("Freisteller")&&(gotoLayer("Freisteller"),duplicateLayerMaskAsAlpha(),setMaskVisibility(!1),selectLayers("selectAllLayers"),mergeLayers(),setBackTheLayerMask(),setMaskVisibility(!1))}catch(e){flattenImage()}RemoveAlphaChannels(),convertProfile_bySimon(),sharp(),check8bit(),clearAllGuides(),delMeta();try{if(doc.artLayers.getByName("Freisteller")){setMaskVisibility(!0);var i=saveFolder+"/"+replace_RGB_to_RZ()+"-frei";saveFile_PSD(new File(i),t,f,f,t,f,f),setMaskVisibility(!1)}}catch(e){}flattenImage(),saveRZ_ding(saveFolder)}