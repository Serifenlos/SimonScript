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
var jsonFilePath="~/ss_var.json",jsonData=loadJSON(jsonFilePath),saveFolder=jsonData.RZ_saveFolder,Suffix_RZ=jsonData.RZ_suffix,saveFormat=jsonData.RZ_saveFormat,delPath=jsonData.RZ_delPath,sharp_dialog=jsonData.RZ_sharpDialog,RZ_qualityJPG=jsonData.RZ_qualityJPG,RZ_alphaChannels=jsonData.RZ_alphaChannels,RZ_withLayers=jsonData.RZ_withLayers;
/*=================================================================================*/
//FUNCTION schärfen
function sharp(e){var t=getZoomLevel();
// vollbildmodus();
app_panelsVisible()&&togglePalettes(),zoom100();try{executeAction(stringIDToTypeID("unsharpMask"),void 0,e)}catch(e){}
// standardmodus();
app_panelsVisible()||togglePalettes(),setZoom(t)}
/*=================================================================================*/
//FUNCTION convertProfil
function convertProfile_bySimon(){function e(){editXMP_3();if(xmpMeta.doesPropertyExist(nsURI,"softproofProfil")&&xmpMeta.doesPropertyExist(nsURI,"softproofIntent")&&xmpMeta.doesPropertyExist(nsURI,"softproofTK")){var e=xmpMeta.getProperty(nsURI,"softproofProfil"),t=xmpMeta.getProperty(nsURI,"softproofIntent"),o=xmpMeta.getProperty(nsURI,"softproofTK");return["positiv",e.value,t.value,o.value]}return["negativ"]}if("positiv"==e()[0]){//convert by Meta
var t=e()[1];if("image"==(o=e()[2]))var o=Intent.PERCEPTUAL;else if("colorimetric"==o)o=Intent.RELATIVECOLORIMETRIC;else if("graphics"==o)o=Intent.SATURATION;else if("absColorimetric"==o)o=Intent.ABSOLUTECOLORIMETRIC;var a=Boolean(e()[3]);
// convertProfile(destinationProfile,intent[, blackPointCompensation][, dither])
doc.convertProfile(t,o,a,!0)}else{//convert by Hand
var i=new File("/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/assets/appelscript_f6.app");i.exists&&i.execute()}}function replace_RGB_to_RZ(){return GetFileNameOnly(doc.name).replace(/(__RGB.*)$/g,Suffix_RZ)}
/*=================================================================================*/if(editXMP_3(),xmpMeta.doesPropertyExist(nsURI,"softproofProfil")&&xmpMeta.doesPropertyExist(nsURI,"softproofIntent")&&xmpMeta.doesPropertyExist(nsURI,"softproofTK"))run(saveFolder);else{var dialogSoftproof=new Window("dialog","Schlussschuss"),stxt=dialogSoftproof.add("group");stxt.add("statictext",void 0,"Du hast den Softproof vergessen");var dialogSoftproofButton=dialogSoftproof.add("group"),ok=dialogSoftproofButton.add("button",void 0,"Egal -> weiter"),cancel=dialogSoftproofButton.add("button",void 0,"Oh nein -> stopp");ok.onClick=function(){dialogSoftproof.close(),run(saveFolder)},cancel.onClick=function(){dialogSoftproof.close()},dialogSoftproof.show()}
/*=================================================================================*/function run(e){var o=app.activeDocument;if(0==o.saved){var a=new Window("dialog","Schlussschuss");a.add("group").add("statictext",void 0,"vorher speichern?");var i=a.add("group"),s=i.add("button",void 0,"Ja"),r=i.add("button",void 0,"Nein");s.onClick=function(){a.close(),o.save()},r.onClick=function(){a.close()},a.show()}if(getMeta_3("isWoodwing"))var n=getMeta_3("isWoodwing");if(getMeta_3("arbeitsdatei_RGB"))getMeta_3("arbeitsdatei_RGB");if(getMeta_3("woodwing_RGB"))var l=getMeta_3("woodwing_RGB");if(getMeta_3("woodwing_file"))getMeta_3("woodwing_file");if(getMeta_3("idDocName"))getMeta_3("idDocName");try{n="true"===String(n).toLowerCase()}catch(e){alert(e)}var p=new Folder(e);if(p.exists||p.create(),writeln("savePath: "+(d=p+"/"+replace_RGB_to_RZ()+"."+saveFormat)),n)var d=l;try{o.layerSets.getByName("Freisteller")&&(gotoLayer("Freisteller"),fixMask(getActiveLayerIndex(),1),duplicateLayerMaskAsAlpha(),setMaskVisibility(!1),selectLayers("selectAllLayers"),mergeLayers(),setBackTheLayerMask(),setMaskVisibility(!1))}catch(e){flattenImage()}RemoveAlphaChannels(),convertProfile_bySimon(),sharp(sharp_dialog?DialogModes.ALL:DialogModes.NO),o.bitsPerChannel!=BitsPerChannelType.EIGHT&&setBitDepth(8),clearAllGuides(),delMeta_3("softproofProfil"),delMeta_3("softproofIntent"),delMeta_3("softproofTK"),delMeta_3("softproofGroup"),delPath&&activeDocument.pathItems.removeAll();try{if(o.artLayers.getByName("Freisteller")){setMaskVisibility(!0);var c=p+"/"+replace_RGB_to_RZ()+"-frei";savePSD_v2(new File(c),t,t,t,f),setMaskVisibility(!1)}}catch(e){$.writeln("2: "+e)}flattenImage(),
// saveRZ_ding(saveFolder);
saveMultiformat(new File(d),saveFormat,!0,RZ_qualityJPG,RZ_alphaChannels,RZ_withLayers)}function writeln(e){try{return $.writeln(e+": "+e)}catch(e){}}