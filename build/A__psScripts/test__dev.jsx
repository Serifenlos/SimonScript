//@include "../../build/A__psScripts/functions/basic.jsx";
//@include "../../build/A__psScripts/functions/pref.jsx";
//@include "../../build/A__psScripts/functions/utils.jsx";
//@include "../../build/A__psScripts/functions/LUT-dodge.jsx";
//@include "../../build/A__psScripts/functions/LUT-burn.jsx";
//@include "../../build/A__psScripts/functions/dialog.jsx";
//@include "../../build/A__psScripts/functions/ready.jsx";
//@include "../../build/A__psScripts/functions/view.jsx";
//@include "../../build/A__psScripts/functions/layer.jsx";
//@include "../../build/A__psScripts/functions/save.jsx";
//@include "../../build/A__psScripts/functions/loopFiles.jsx";
//@include "../../build/A__psScripts/functions/meta.jsx";
//@include "/Users/simon/Arbeit/__temp/json2.js";
// curves
// selectiveColor
// hueSaturation
// colorBalance
// brightnessEvent
// vibrance
// alert(getSelectedLayersIdx())
// alert(getSibilings())
// alert(getSibilings1())
// alert(isVisibleIDX(6))
// alert(getActiveLayerIndex())
// alert(getLayerName(5))
// makeVisByIndex(7,true)
// analyse();
function analyse(){time_start(),time_stop(start)}
/* TODO
_direction für 
ElementPlacement.INSIDE
ElementPlacement.PLACEATBEGINNING
ElementPlacement.PLACEATEND
*/function moveLayer2(e,t,r){gotoLayer(e);var s=app.activeDocument.activeLayer;gotoLayer(t);var a=app.activeDocument.activeLayer;if("before"==r||"up"==r)var i=ElementPlacement.PLACEBEFORE;else if("after"==r||"down"==r)i=ElementPlacement.PLACEAFTER;else if("top"==r||"beginning"==r)i=ElementPlacement.PLACEATBEGINNING;else if("bottom"==r||"end"==r)i=ElementPlacement.PLACEATEND;s.move(a,i)}
// funktioniert nicht
// moveLayer2("Ebene 1", "Ebene 3", "top")
// resize();
////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399
function getSmartFilterArray(e){try{var t=new ActionReference;t.putProperty(stringIDToTypeID("property"),stringIDToTypeID("smartObject")),t.putIndex(sTID("layer"),e);
// ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("smartObject"));
// ref.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
var r=executeActionGet(t).getObjectValue(stringIDToTypeID("smartObject")).getList(stringIDToTypeID("filterFX"));filterArray=[];for(var s=0;s<r.count;s++){var a=r.getObjectValue(s),i=a.getObjectValue(stringIDToTypeID("filter")),n=typeIDToStringID(a.getObjectType(stringIDToTypeID("filter")));filterArray_inner=[],filterArray_inner.push(e,s,n);for(var c=0;c<i.count;c++){getSmartFilterValues(i,c);try{if(i.getObjectValue(i.getKey(c)))for(var o=typeIDToStringID(i.getKey(c)),l=(o=i.getObjectValue(stringIDToTypeID(o)),0);l<o.count;l++)getSmartFilterValues(o,l)}catch(e){}}filterArray.push(filterArray_inner)}return!0}catch(e){
// alert("no SmartObjekt " + _layerIDX);
return!1}}function getSmartFilterValues(e,t){var r=filterArray_inner,s=e.getKey(t);if(t2s(s))a=t2s(s);else var a=s;switch(e.getType(e.getKey(t))){case DescValueType.BOOLEANTYPE:var i=e.getBoolean(e.getKey(t));r.push(a,i);break;case DescValueType.CLASSTYPE:i=e.getClass(e.getKey(t));r.push(a,i);break;case DescValueType.DOUBLETYPE:i=e.getDouble(e.getKey(t));r.push(a,i);break;case DescValueType.ENUMERATEDTYPE:var n=typeIDToStringID(e.getEnumerationType(e.getKey(t)));i=typeIDToStringID(e.getEnumerationValue(e.getKey(t)));r.push(a,n,i);break;case DescValueType.INTEGERTYPE:i=e.getInteger(e.getKey(t));r.push(a,i);break;case DescValueType.LISTTYPE:i=e.getList(e.getKey(t));r.push(a,i);break;case DescValueType.OBJECTTYPE:var c=typeIDToStringID(e.getObjectType(e.getKey(t)));i=e.getObjectValue(e.getKey(t));r.push(a,c,i);break;case DescValueType.REFERENCETYPE:i=e.getReference(e.getKey(t));r.push(a,i);break;case DescValueType.STRINGTYPE:i=e.getString(e.getKey(t));r.push(a,i);break;case DescValueType.UNITDOUBLE:var o=typeIDToStringID(e.getUnitDoubleType(e.getKey(t)));i=e.getUnitDoubleValue(e.getKey(t));r.push(a,o,i)}}function adjust_filter_TiefenLichter(e,t,r,s,a,i,n,c,o,l,y,u,g,p,d,f,h,L,b,D,_,I,T,A,w,m){var v=new ActionDescriptor,k=new ActionDescriptor,x=new ActionDescriptor,F=new ActionDescriptor,E=new ActionDescriptor,M=new ActionReference;M.putIndex(s2t("filterFX"),t),M.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),x.putReference(s2t("null"),M),v.putUnitDouble(s2t(r),s2t(s),a),v.putUnitDouble(s2t(i),s2t(n),c),v.putInteger(s2t(o),Math.round(l*e)),E.putObject(s2t("shadowMode"),s2t("adaptCorrectTones"),v),k.putUnitDouble(s2t(y),s2t(u),g),k.putUnitDouble(s2t(p),s2t(d),f),k.putInteger(s2t(h),Math.round(L*e)),E.putObject(s2t("highlightMode"),s2t("adaptCorrectTones"),k),E.putDouble(s2t(b),D),E.putDouble(s2t(_),I),E.putInteger(s2t(T),A),E.putInteger(s2t(w),m),F.putObject(s2t("filter"),s2t("adaptCorrect"),E),x.putObject(s2t("filterFX"),s2t("filterFX"),F),executeAction(s2t("set"),x,DialogModes.NO)}function resize(){prefSave(),prefSet(DialogModes.NO,Units.PIXELS);try{try{gotoLayer("Original")}catch(e){alert("keine Ebene ‘Original‘ gefunden")}"LayerKind.SMARTOBJECT"!=doc.activeLayer.kind&&alert("Ebene ‘Original‘ ist kein SmartObjekt");var e=app.activeDocument.width;SmartObject_edit();var t=app.activeDocument.width,r=t/e;$.writeln("width_faktor: "+r),app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),doc.resizeImage(t,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0),getSmartFilterArray();for(var s=0;s<filterArray.length;s++){if("adaptCorrect"==filterArray[s][1])try{adjust_filter_TiefenLichter(r,filterArray[s][0]+1,filterArray[s][5],filterArray[s][6],filterArray[s][7],filterArray[s][8],filterArray[s][9],filterArray[s][10],filterArray[s][11],filterArray[s][12],filterArray[s][16],filterArray[s][17],filterArray[s][18],filterArray[s][19],filterArray[s][20],filterArray[s][21],filterArray[s][22],filterArray[s][23],filterArray[s][24],filterArray[s][25],filterArray[s][26],filterArray[s][27],filterArray[s][28],filterArray[s][29],filterArray[s][30],filterArray[s][31])}catch(e){}$.writeln(filterArray[s].length),$.writeln(filterArray[s][1]),$.writeln(filterArray[s]),
// $.writeln("shadow " + filterArray[i][12] + "(" + filterArray[i][12] * 2 + ")" + " -- highlight " + filterArray[i][23] + "(" + filterArray[i][23] * 2 + ")")
$.writeln("-----")}fixMaskLoop(r),fitScreen()}catch(e){}prefReset()}
// loop_getSmartFilterArray();
function loop_getSmartFilterArray(){var e=getActiveLayerIndex(),t=1;for(filterArray_outer=[];checkLayerExistence(t);){try{getSmartFilterArray(t)&&filterArray_outer.push(filterArray)}catch(e){}t++}for(var r=0;r<filterArray_outer.length;r++)for(var s=0;s<filterArray_outer[r].length;s++)$.writeln("layerIdx "+filterArray_outer[r][s][0]),$.writeln("filterIdx "+filterArray_outer[r][s][1]),$.writeln("filterTyp "+filterArray_outer[r][s][2]),$.writeln("filterArray "+filterArray_outer[r][s]),$.writeln("-----");gotoLayer(e)}
// alert(checkLayerExistence(28))
function checkLayerExistence(e){try{var t=new ActionReference;t.putProperty(s2t("property"),s2t("itemIndex")),t.putIndex(s2t("layer"),e);executeActionGet(t).getInteger(s2t("itemIndex"));return!0}catch(e){return!1}}
// filterArray_inner.push(idx, filterID);
function getActiveLayerIndex(){var e=new ActionReference;return e.putProperty(charIDToTypeID("Prpr"),charIDToTypeID("ItmI")),e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),hasBackground()?executeActionGet(e).getInteger(charIDToTypeID("ItmI"))-1:executeActionGet(e).getInteger(charIDToTypeID("ItmI"))}function getMaskDensity(){var e=new ActionReference;return r.putIndex(sTID("layer"),_idx),executeActionGet(e).getUnitDoubleValue(sTID("userMaskDensity"))}
// alert(isFilterFXVisible())
function isFilterFXVisible(){var e=new ActionReference;
// return m_Dsc01.getBoolean(cTID('lfxv'));
return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getBoolean(stringIDToTypeID("filterFX"))}
// getSmartFilterArray();
// for (var i = 0; i < filterArray.length; i++) {
//     // if (filterArray[i][1] == "adaptCorrect") {
//     //     try {
//     //         adjust_filter_TiefenLichter(2, filterArray[i][0] + 1, filterArray[i][5], filterArray[i][6], filterArray[i][7], filterArray[i][8], filterArray[i][9], filterArray[i][10], filterArray[i][11], filterArray[i][12], filterArray[i][16], filterArray[i][17], filterArray[i][18], filterArray[i][19], filterArray[i][20], filterArray[i][21], filterArray[i][22], filterArray[i][23], filterArray[i][24], filterArray[i][25], filterArray[i][26], filterArray[i][27], filterArray[i][28], filterArray[i][29], filterArray[i][30], filterArray[i][31]);
//     //     } catch (e) {}  
//     // }
//     $.writeln(filterArray[i].length)
//     $.writeln(filterArray[i])
//     $.writeln("shadow " + filterArray[i][12] + "(" +filterArray[i][12]*2 + ")" + " -- highlight " + filterArray[i][23] + "(" +filterArray[i][23]*2 + ")")
//     $.writeln("-----")
// }
// 5,09770603228547 * 19,7 = 100,424808836023759
// fixMaskLoop(5.09770603228547)
function fixMaskLoop(e){for(var t=getActiveLayerIndex(),r=1;fixMask(r,e);)r++;$.writeln(t),gotoLayer(t)}function fixMask(e,t){try{var r=new ActionReference;r.putIndex(sTID("layer"),e);var s=executeActionGet(r),a=s.getUnitDoubleValue(sTID("userMaskFeather")),i=s.getUnitDoubleValue(sTID("userMaskDensity"));return $.writeln("i,f,d: "+e+", "+a+", "+i),a>0&&(gotoLayer(e),gotoMask(),setMaskFeatherTo(0),$.writeln("feather, faktor, gleich"+a+", "+t+", "+a*t),fixMaskFeather(a*t)),i<255&&(gotoLayer(e),gotoMask(),setMaskDensityTo(100),$.writeln("dens "+i),$.writeln("dens2 "+-1*(i-255)),fixMaskDens(-1*(i-255))),!0}catch(s){return!1}}function fixMaskFeather(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("radius"),s2t("pixelsUnit"),e),executeAction(s2t("gaussianBlur"),t,DialogModes.NO)}function fixMaskDens(e){var t=new ActionDescriptor,r=new ActionDescriptor,s=new ActionList,a=new ActionList,i=new ActionReference;t.putEnumerated(s2t("presetKind"),s2t("presetKindType"),s2t("presetKindCustom")),i.putEnumerated(s2t("channel"),s2t("ordinal"),s2t("targetEnum")),r.putReference(s2t("channel"),i),a.putInteger(e),a.putInteger(255),r.putList(s2t("output"),a),s.putObject(s2t("levelsAdjustment"),r),t.putList(s2t("adjustment"),s),executeAction(s2t("levels"),t,DialogModes.NO)}
//// mögliche Helfer aus util
// getActiveLayerIndex();
// hasLayerMask();
// getMaskDensity();
// getMaskFeather();
// isLayerMaskEnabled();
// setMaskDensityTo(dens);
// setMaskFeatherTo(feath);
// hasVectorMask();
// getVectorMaskDensity();
// getVectorMaskFeather();
// isVectorMaskEnabled(); //auskommentiert
// setVectorMaskDensityTo(dens);
// setVectorMaskFeatherTo(feath);
// isLayerSet(idx);
// isSetOpened2( grIDX );
// doc.save();
// doc.close(SaveOptions.SAVECHANGES);
// gotoLayer("Druck");
// gotoLayer("Textil")
// nameLayer("Textil-Ebene");
// gotoLayer("Textil")
// setMaskFeatherTo(1.6)
// gotoLayer("Hilfsebene Farbe - DOCMA")
// createGroup("HG", "passThrough", "none", 100, t);
// toogleOpenCloseSet();
// gotoLayer("Druck");
// $.writeln(getActiveLayerIndex());
// gotoLayer(3);
// nameLayer("Textil-Ebene");
// gotoLayer("Textil");
// setMaskFeatherTo(1.6);
// gotoLayer("Hilfsebene Farbe - DOCMA");
// createGroup("HG", "passThrough", "none", 100, t);
// toogleOpenCloseSet();
// gotoLayer("Druck");
// app.activeDocument.save();
// app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
// thanks for prozess all subfolders
// https://community.adobe.com/t5/photoshop/copy-several-jpg-in-several-psd/m-p/10992549#M315938
// run();
// loopOpenDocs();
// saveAllDocs();
//// Loop through opened docs
function loopOpenDocs(){for(var e=app.activeDocument,r=0;r<app.documents.length;r++){app.activeDocument=app.documents[r];app.activeDocument;
// var doc_file = new File(app.documents[i].fullName);
// app.open(doc_file);
try{
// var startLayer = getActiveLayerIndex();
selectLayers("selectNoLayers"),selectLayer("IKAUZ_weiss",t),selectLayer("11F-Logo_beidseitig-vorne_schwarz",t),selectLayer("11F-Logo_beidseitig-vorne_weiss",t),selectLayer("11F-Logo_beidseitig-hinten_schwarz",t),selectLayer("11F-Logo_beidseitig-hinten_weiss",t),selectLayer("11F-Logo_weiss",t),selectLayer("11F-Logo_schwarz",t),selectLayer("11-Kasten_weiss",t),selectLayer("11-Kasten_orange",t),selectLayer("Fussball-ist-bunt_weiss",t),selectLayer("Fussball-ist-bunt_schwarz",t),hide(),selectLayers("selectNoLayers");try{selectLayer2("IKAUZ_weiss",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11F-Logo_beidseitig-vorne_schwarz",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11F-Logo_beidseitig-vorne_weiss",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11F-Logo_beidseitig-hinten_schwarz",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11F-Logo_beidseitig-hinten_weiss",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11F-Logo_weiss",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11F-Logo_schwarz",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11-Kasten_weiss",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("11-Kasten_orange",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("Fussball-ist-bunt_weiss",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2("Fussball-ist-bunt_schwarz",t),makeVisible(),hide(),selectLayers("selectNoLayers")}catch(e){}try{gotoLayer("11-Kasten_weiss"),makeVisible()}catch(e){}try{gotoLayer("11F-Logo_beidseitig-hinten_weiss"),makeVisible()}catch(e){}
// gotoLayer(startLayer);
}catch(e){}
// prefSave();
// prefSet(DialogModes.NO, Units.PIXELS);
// doc.close(SaveOptions.SAVECHANGES);
// prefReset();
}app.activeDocument=e}function parken(){gotoLayer("Abwedeln/Nachbelichten"),deleteActiveLayer(),
// oben links ausrichten
layer_transform("topleft",-1*doc.activeLayer.bounds[0],-1*doc.activeLayer.bounds[1],f,f,f,t),gotoLayer("Abwedeln/Nachbelichten"),deleteActiveLayer(),gotoLayer("11-Kasten_weiss"),toogleVisibility(),gotoLayer("11-Kasten_orange"),toogleVisibility(),gotoLayer("Fussball-ist-bunt_weiss"),toogleVisibility(),gotoLayer("Fussball-ist-bunt_schwarz"),toogleVisibility(),gotoLayer("11-Kasten_weiss"),hide(),gotoLayer("11-Kasten_orange"),hide(),gotoLayer("Fussball-ist-bunt_weiss"),makeVisible(),gotoLayer("Fussball-ist-bunt_schwarz"),makeVisible(),makeVisible(),gotoLayer("Vorlage"),hide(),selectLayer("11F-Logo_schwarz",f),
/////////
selectLayers("selectNoLayers"),selectLayer("IKAUZ_weiss",t),selectLayer("11F-Logo_beidseitig-vorne_schwarz",t),selectLayer("11F-Logo_beidseitig-vorne_weiss",t),selectLayer("11F-Logo_beidseitig-hinten_schwarz",t),selectLayer("11F-Logo_beidseitig-hinten_weiss",t),selectLayer("11F-Logo_weiss",t),selectLayer("11F-Logo_schwarz",t),selectLayer("11-Kasten_weiss",t),selectLayer("11-Kasten_orange",t),selectLayer("Fussball-ist-bunt_weiss",t),selectLayer("Fussball-ist-bunt_schwarz",t),hide(),selectLayers("selectNoLayers"),selectLayer("11F-Logo_beidseitig-vorne_schwarz",t),selectLayer("11F-Logo_beidseitig-vorne_weiss",t),selectLayer("11F-Logo_beidseitig-hinten_schwarz",t),selectLayer("11F-Logo_beidseitig-hinten_weiss",t),makeVisible(),selectLayer("11F-Logo_beidseitig-vorne_schwarz",t),selectLayer("11F-Logo_beidseitig-vorne_weiss",t),selectLayer("11F-Logo_beidseitig-hinten_schwarz",t),selectLayer("11F-Logo_beidseitig-hinten_weiss",t),selectLayer("IKAUZ_weiss",t),selectLayer("11F-Logo_weiss",t),selectLayer("11F-Logo_schwarz",t),selectLayer("11-Kasten_weiss",t),selectLayer("11-Kasten_orange",t),selectLayer("Fussball-ist-bunt_weiss",t),selectLayer("Fussball-ist-bunt_schwarz",t),
//// HG umfärben
gotoLayer("HG"),makeVisible(),gotoLayer("Hilfsebene Farbe - DOCMA"),makeVisible(),fillColor(255,255,255),gotoLayer("HG"),
// hide();
toogleOpenCloseSet(),gotoLayer("Textil-Ebene")}function fillColor(e,t,r){var s=function(e){return app.stringIDToTypeID(e)},a=new ActionDescriptor,i=new ActionDescriptor,n=new ActionDescriptor,c=new ActionReference;c.putEnumerated(s("contentLayer"),s("ordinal"),s("targetEnum")),a.putReference(s("null"),c),n.putDouble(s("red"),e),n.putDouble(s("grain"),t),n.putDouble(s("blue"),r),i.putObject(s("color"),s("RGBColor"),n),a.putObject(s("to"),s("solidColorLayer"),i),executeAction(s("set"),a,DialogModes.NO)}function selectLayer2(e,t){var r=new ActionDescriptor,s=new ActionReference;if("remove"!=t&&t)a="addToSelection";else var a="removeFromSelection";s.putName(s2t("layer"),e),r.putReference(s2t("null"),s),r.putEnumerated(s2t("selectionModifier"),s2t("selectionModifierType"),s2t(a)),r.putBoolean(s2t("makeVisible"),!1),executeAction(s2t("select"),r,DialogModes.NO)}function gaussianBlur(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("radius"),s2t("pixelsUnit"),e),executeAction(s2t("gaussianBlur"),t,DialogModes.NO)}
////////////////////////////////
// exportTextil();
function exportTextil(){_saveFolder="~/Arbeit/_RZ/TextilOnDemand+";var e=new Folder(_saveFolder);e.exists||e.create();var r=[],s=Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");if(null!=s)for(var a in(r=function e(t,r){for(var s=Folder(t).getFiles(),a=0;a<s.length;a++){var i=s[a];i instanceof File||(r.push(Folder(i)),e(i.toString(),r))}return r}(s,r)).unshift(s),r)
// if (files.length < 1) continue;
for(var i in files=[],files=r[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i),files){var n="";if(s!=r[a])n=r[a].name;var c=files[i],o=new File(c);app.open(o);var l=app.activeDocument;
// include "functions/basic.jsx";
// include "functions/utils.jsx";
// include "functions/meta.jsx";
// include "functions/save.jsx";
// include "functions/loopFiles.jsx";
prefSave(),prefSet(DialogModes.NO,Units.PIXELS);var y=GetFileNameOnly(l.name).replace(/(_Packshot)/g,"").replace(/(_Main_0)/g,"");y=(n=n.replace(/%20/g,""))+"__"+y;selectLayers("selectNoLayers"),selectLayer("IKAUZ_weiss",t),selectLayer("11F-Logo_beidseitig-vorne_schwarz",t),selectLayer("11F-Logo_beidseitig-vorne_weiss",t),selectLayer("11F-Logo_beidseitig-hinten_schwarz",t),selectLayer("11F-Logo_beidseitig-hinten_weiss",t),selectLayer("11F-Logo_weiss",t),selectLayer("11F-Logo_schwarz",t),selectLayer("11-Kasten_weiss",t),selectLayer("11-Kasten_orange",t),selectLayer("Fussball-ist-bunt_weiss",t),selectLayer("Fussball-ist-bunt_schwarz",t),hide(),selectLayers("selectNoLayers");try{selectLayer2(u="IKAUZ_weiss",t),makeVisible(),
// alert(saveFolder)
// alert(layer)
// alert(fileName)
// var savePath = saveFolder + "/" + _layer + "__" + _fileName + ".tif";
saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11F-Logo_beidseitig-vorne_schwarz",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11F-Logo_beidseitig-vorne_weiss",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11F-Logo_beidseitig-hinten_schwarz",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11F-Logo_beidseitig-hinten_weiss",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11F-Logo_weiss",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11F-Logo_schwarz",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11-Kasten_weiss",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="11-Kasten_orange",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(u="Fussball-ist-bunt_weiss",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}try{var u;selectLayer2(u="Fussball-ist-bunt_schwarz",t),makeVisible(),saveTextil(e,u,y),hide(),selectLayers("selectNoLayers")}catch(e){}l.close(SaveOptions.DONOTSAVECHANGES)}}function saveTextil(e,t,r){var s=e+"/"+t+"__"+r+".tif",a=(File(s),new TiffSaveOptions);a.alphaChannels=!0,a.byteOrder=ByteOrder.IBM,a.embedColorProfile=!0,a.imageCompression=TIFFEncoding.TIFFLZW,a.layers=!1,a.spotColors=!1,a.transparency=!0,a.annotations=!1,doc.saveAs(new File(s),a,!1,Extension.LOWERCASE)}
//// Freisteller Gruppe
// doc.suspendHistory('Freisteller-Gruppe erstellt', 'createGroup_Freisteller()')
function hasLayerMask(){var e=!1;try{var t=new ActionReference,r=app.charIDToTypeID("UsrM");t.putProperty(app.charIDToTypeID("Prpr"),r),t.putEnumerated(app.charIDToTypeID("Lyr "),app.charIDToTypeID("Ordn"),app.charIDToTypeID("Trgt")),executeActionGet(t).hasKey(r)&&(e=!0)}catch(t){e=!1}return e}
// alert(hasLayerMask())
// try{activateLayerMask2();}
// catch(e){alert("is schon")}
// function getMaskVisibility() {
//     var r = new ActionReference();
//     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//     return executeActionGet(r).getBoolean(s2t("userMaskEnabled"));
// }
// function setMaskVisibility(_set) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var r = new ActionReference();
//     if (_set == false || _set == "hide") {
//         var _setX = false
//     } else if (_set == true || _set == "show") {
//         var _setX = true
//     } else if (_set == "toggle" || _set == "X") {
//         if (getMaskVisibility()) {
//             var _setX = false
//         } else {
//             var _setX = true
//         }
//     }
//     try {
//         r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//         d.putReference(s2t("null"), r);
//         d2.putBoolean(s2t("userMaskEnabled"), _setX);
//         d.putObject(s2t("to"), s2t("layer"), d2);
//         executeAction(s2t("set"), d, DialogModes.NO);
//     } catch (e) {}
// }
// freisteller_button();
// function freisteller_button() {
//     try {
//         if (app.activeDocument.layerSets.getByName("Freisteller")) {
//             var startLayer = getActiveLayerIndex();
//             gotoLayer("Freisteller");
//             if (hasLayerMask()) {
//                 var startMaskVisibility = getMaskVisibility();
//                 setMaskVisibility(true);
//                 var docNameCopy = doc.path + "/" + GetFileNameOnly(doc.name) + "-frei";
//                 saveFile_PSD(new File(docNameCopy), t, f, f, t, f, f);
//                 setMaskVisibility(startMaskVisibility);
//             }
//             gotoLayer(startLayer);
//             doc.save();
//         }
//     } catch (e) {
//         doc.suspendHistory('Freisteller-Gruppe erstellt', 'createGroup_Freisteller()');
//     }
// }
// createGroup_Freisteller2()   
function createGroup_Freisteller2(){var e=getActiveLayerIndex();selectLayers("selectAllLayers"),createGroup("Freisteller","passThrough","none",100,t);try{if(isSelectionActive())try{maskFromSelection()}catch(e){}}catch(e){}toogleOpenCloseSet(),gotoLayer(e)}
// var set = doc.layerSets.getByName("Freisteller")
// createColorLayer("helper Freisteller", "normal", "none", 100, "none", 128, 128, 128);
// var newLayerSetRef = doc.activeLayer;
// alert(getActiveLayerIndex())
// newLayerSetRef.move(set, ElementPlacement.PLACEAFTER);
// alert(getActiveLayerIndex())
// app.activeDocument.artLayers.typename
// var layerRef = app.activeDocument.artLayers.getByName("helper Freisteller");
// alert(layerRef.name)
// $.writeln(layerRef.xmpMetadata)
// makeVisByIndex(1, false);
// alert(isVisibleIDX(1));
// addToSelection("nachher");
// addToSelection("vorher");   
// mergeLayers();
////////////////////////////////////////////////////////////////////////////////////
//// Reset active/selected Layers after Work                                    ////
//// evtl für Freisteller etc                                                   ////
//// besser als getActiveLayerIndex() ??                                        ////
//// weil dieser bei unseleceted Layers den Wert der höchesten Ebene zurückgibt ////
// if (app.documents.length > 0) {
//     var start_selectedLayers = layer_selectedIDX_get()
//     // blabla
//     gotoLayer(5);
//     if (start_selectedLayers.length === 0) {
//         alert("null")
//     } else {
//         alert("nicht null")
//     }
//     alert("selectedLayers " + start_selectedLayers);
//     // blabla
//     layer_selectedIDX_set(start_selectedLayers);
// }
// function layer_selectedIDX_get() {
//     var selectedLayers = [];
//     var ref = new ActionReference();
//     ref.putEnumerated(stringIDToTypeID('document'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'));
//     var desc = executeActionGet(ref);
//     if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
//         desc = desc.getList(stringIDToTypeID('targetLayers'));
//         for (var i = 0, c = desc.count; i < c; i++) {
//             hasBackground() ? selectedLayers.push(desc.getReference(i).getIndex()) : selectedLayers.push(desc.getReference(i).getIndex() + 1);
//         }
//     }
//     return selectedLayers;
// };
// function layer_selectedIDX_set(_array) {
//     try {
//         selectLayers("selectNoLayers");
//         if (_array.length > 0) {
//             for (var j = 0; j < _array.length; j++) {
//                 selectLayerBySelector(_array[j], t);
//             }
//         }
//     } catch (e) {
//         selectLayers("selectNoLayers");
//     }
// }
// function getActiveLayerIndex() {
//     var r = new ActionReference();
//     r.putProperty(c2t("Prpr"), c2t("ItmI"));
//     r.putEnumerated(c2t("Lyr "), c2t("Ordn"), c2t("Trgt"));
//     return hasBackground() ? executeActionGet(r).getInteger(c2t("ItmI")) - 1 : executeActionGet(r).getInteger(c2t("ItmI"));
// };
function setMeta_nativeSoftProof(){var e=new ActionReference,t=new ActionDescriptor;e.putEnumerated(stringIDToTypeID("application"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum")),t.putReference(stringIDToTypeID("target"),e);var r=_executeAction(stringIDToTypeID("proofSetup"),t,DialogModes.NO),s=_executeAction(stringIDToTypeID("proofSetup"),t,DialogModes.NO).getString(stringIDToTypeID("profile"));typeIDToStringID(r.getEnumerationValue(stringIDToTypeID("intent"))),r.getBoolean(stringIDToTypeID("mapBlack"));alert(s)}
// setMeta_nativeSoftProof();
////////////////////////////////////
// get BlendIf //////////////////
////////////////////////////////////
function blendif_2(e,t,r,s,a){var i=new ActionDescriptor,n=new ActionReference;isNaN(e)?n.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")):n.putIndex(s2t("layer"),e),i.putReference(sTID("null"),n);var c=new ActionDescriptor,o=new ActionList,l=new ActionDescriptor,y=new ActionReference;y.putEnumerated(sTID("channel"),sTID("channel"),sTID("gray")),l.putReference(sTID("channel"),y),l.putInteger(sTID("srcBlackMin"),0),l.putInteger(sTID("srcBlackMax"),0),l.putInteger(sTID("srcWhiteMin"),255),l.putInteger(sTID("srcWhiteMax"),255),l.putInteger(sTID("destBlackMin"),t),l.putInteger(sTID("destBlackMax"),r),l.putInteger(sTID("destWhiteMin"),s),l.putInteger(sTID("desaturate"),a),o.putObject(sTID("blendRange"),l),c.putList(sTID("blendRange"),o),i.putObject(sTID("to"),sTID("layer"),c),executeAction(sTID("set"),i,DialogModes.NO)}
// blendif_2(0, 0, 215, 240);
// test_blendif_get()
function test_blendif_get(){gotoLayer("Gradation neutral");
//@include "/Applications/B-Programme/Grafik/xtools22/xlib/Styles.js"
var e={},t=activeDocument,r=t.activeLayer,s=Styles.getLayerStyleDescriptor(t,r,!0).getObjectValue(stringIDToTypeID("blendOptions")).getList(stringIDToTypeID("blendRange")).getObjectValue(0);
// alert(Styles.getLayerStyleDescriptor(doc, layer, true))
// alert("2 " + desc)
// alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')))
e.channel=typeIDToStringID(s.getReference(stringIDToTypeID("channel")).getEnumeratedValue()),e.srcBlackMin=s.getInteger(stringIDToTypeID("srcBlackMin")),// 'This Layer' in dialog
e.srcBlackMax=s.getInteger(stringIDToTypeID("srcBlackMax")),e.srcWhiteMin=s.getInteger(stringIDToTypeID("srcWhiteMin")),e.srcWhiteMax=s.getInteger(stringIDToTypeID("srcWhiteMax")),e.destBlackMin=s.getInteger(stringIDToTypeID("destBlackMin")),// 'Underlaying Layer' in dialog
e.destBlackMax=s.getInteger(stringIDToTypeID("destBlackMax")),e.destWhiteMin=s.getInteger(stringIDToTypeID("destWhiteMin")),e.destWhiteMax=s.getInteger(stringIDToTypeID("desaturate")),
// alert(blendIf.destWhiteMin)
$.writeln(e.destBlackMin),$.writeln(e.destBlackMax),$.writeln(e.destWhiteMin),$.writeln(e.destWhiteMax),alert(e.destBlackMin+","+e.destBlackMax+","+e.destWhiteMin+","+e.destWhiteMax)}function test2(e){try{
// var d1 = new ActionDescriptor();
var t=new ActionReference;
// var d1 = new ActionDescriptor();
// var d2 = new ActionDescriptor();
// var d3 = new ActionDescriptor();
// AR points to the Active Layer
t.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),
// r.putIndex(sTID("layer"), _idx);
d1=executeActionGet(t),d1.putReference(sTID("null"),t),d2=d1.getObjectValue(s2t("blendOptions")),
// d2 = d1.getList(s2t("blendRange"))
// // d1.putObject(sTID('blendOptions'), sTID('blendOptions'), 99);
// if(d1.hasKey(stringIDToTypeID('blendOptions'))) {
//     alert("ja")
// } else {
//     alert("nenin")
// }
// d2 = d1.getObjectValue(s2t('blendOptions'))
// d3 = d2.getList(s2t("blendRange"))
alert("2 "+d2)}catch(e){alert(e)}
// return;
}
// alert(layer_getIDXbyString("Tiefen_check"))
// alert(layer_blendif_get(19)[0]+","+layer_blendif_get(19)[1]+","+layer_blendif_get(19)[2]+","+layer_blendif_get(19)[3])
// alert(layer_blendif_get(layer_getIDXbyString("Tiefen_check")[0])[0])
function layer_blendif_get(_idx){try{var r=new ActionReference,d=new ActionDescriptor,array=[];if(r.putProperty(s2t("property"),s2t("json")),isNaN(_idx)?r.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")):r.putIndex(s2t("layer"),_idx),d.putReference(s2t("null"),r),eval("var json="+executeAction(s2t("get"),d,DialogModes.NO).getString(s2t("json"))),json.layers[0].layers[0].layers[0].blendOptions){
// $.writeln(json.layers[0].layers[0].layers[0].blendOptions.blendRange.toSource())
var data=json.layers[0].layers[0].layers[0].blendOptions.blendRange.toSource(),data=data.replace(/^\[\(/g,"").replace(/\)\]$/g,""),data=data.replace(/([a-zA-Z]+)/g,'"$1"'),data=data.replace(/\"\"gray\"\"/g,'"gray"'),data=JSON.parse(data);for(var i in data)"destBlackMin"!=i&&"destBlackMax"!=i&&"destWhiteMin"!=i&&"desaturate"!=i||
// $.writeln(i + " = " + data[i])
array.push(data[i]);return array}}catch(e){alert(e)}}
// alert(getActiveLayerIndex())
// blendif_2(f, layer_blendif_get(3)[0], layer_blendif_get(3)[1], layer_blendif_get(3)[2]-5, layer_blendif_get(3)[3]-5)
// toogleVisibility2("check ")
// alert(getVisible2("check "))
// hide Layer/Groupe by IDX, name, or activeLayer
function hide2(e){var t=new ActionDescriptor,r=new ActionList,s=new ActionReference;"number"==typeof e?s.putIndex(s2t("layer"),e):"string"==typeof e?layer_checkExistence2(e)?s.putName(s2t("layer"),e):s.putIndex(s2t("layer"),layer_getIDXbyString(e)[0]):"boolean"==typeof e&&s.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),
// r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
r.putReference(s),t.putList(c2t("null"),r),executeAction(s2t("hide"),t,DialogModes.NO)}function toogleVisibility2(e){var t=new ActionDescriptor,r=new ActionList,s=new ActionReference;getVisible2(e)?("number"==typeof e?s.putIndex(s2t("layer"),e):"string"==typeof e?layer_checkExistence2(e)?s.putName(s2t("layer"),e):s.putIndex(s2t("layer"),layer_getIDXbyString(e)[0]):"boolean"==typeof e&&s.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(s),t.putList(c2t("null"),r),executeAction(s2t("hide"),t,DialogModes.NO)):("number"==typeof e?s.putIndex(s2t("layer"),e):"string"==typeof e?layer_checkExistence2(e)?s.putName(s2t("layer"),e):s.putIndex(s2t("layer"),layer_getIDXbyString(e)[0]):"boolean"==typeof e&&s.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(s),t.putList(c2t("null"),r),executeAction(s2t("show"),t,DialogModes.NO))}function getVisible2(e){var t=new ActionReference;return"number"==typeof e?t.putIndex(s2t("layer"),e):"string"==typeof e?layer_checkExistence2(e)?t.putName(s2t("layer"),e):t.putIndex(s2t("layer"),layer_getIDXbyString(e)[0]):"boolean"==typeof e&&t.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),executeActionGet(t).getInteger(s2t("visible"))}
// create_check_blendif(11)
// blendif_edit_button(10)
function create_check_blendif(e){createGroup("check "+e,"passThrough","none",100,f),createColorLayer("Tiefen_check","normal","none",100,"none",0,0,255),blendif_2("current",0,0,0+e,0+e),createColorLayer("Lichter_check","normal","none",100,"none",255,0,0),blendif_2("current",255-e,255-e,255,255),gotoLayer("check "+e),toogleOpenCloseSet(),hide(),layer_checkExistence2("nachher")&&(moveLayer("check "+e,"nachher","up"),gotoLayer("check "+e),moveLayer3("down",1))}function create_check_blendif_button(e){try{if(layer_checkExistenceByRegex("check "))toogleVisibility2("check ");else try{doc.suspendHistory("Create checkFolder","create_check_blendif("+e+")")}catch(e){alert("Error1:"+e)}}catch(e){alert("Error2:"+e)}}
// blendif_2(layer_getIDXbyString("Tiefen_check")[0], layer_blendif_get(layer_getIDXbyString("Tiefen_check")[0])[0], layer_blendif_get(layer_getIDXbyString("Tiefen_check")[0])[1], layer_blendif_get(layer_getIDXbyString("Tiefen_check")[0])[2] - 25, layer_blendif_get(layer_getIDXbyString("Tiefen_check")[0])[3] - 25)
// blendif_edit(true, layer_getIDXbyString("Tiefen_check")[0], 0, 20);
function blendif_edit(e,t,r,s){var a=layer_blendif_get(t)[2]+s,i=layer_blendif_get(t)[0]+r,n=0;if(a<0){for(n=1;a+n<0;)n++;a=a+n}var c=0;if(i>255){for(c=1;i-c>255;)c++;i=i-c}
// alert("tiefen->" + __shadows + " lichter->" + __lights)
e&&(blendif_2(t,i,i,a,a),blendif_check_steps.push(0+a),blendif_check_steps.push(255-i)),blendif_check_value.push(s+n),blendif_check_value.push(-1*(r-c))}function blendif_edit_both(e,t){return blendif_check_steps=[],blendif_check_value=[],
// blendif_check_steps.push(blendif_edit(layer_getIDXbyString("Tiefen_check")[0], 0, __value));
// blendif_check_steps.push(blendif_edit(layer_getIDXbyString("Lichter_check")[0], -1 * (__value), 0));
blendif_edit(e,layer_getIDXbyString("Tiefen_check")[0],0,t),blendif_edit(e,layer_getIDXbyString("Lichter_check")[0],-1*t,0),
// blendif_check_value.sort(function(a, b){return b - a});  // sort to get the highest value //for the protocol
// alert(blendif_check_value)
e?(
// sort to get the lowest value //to name the groupe
blendif_check_steps.sort((function(e,t){return e-t})),layer_renameByIDX(layer_getIDXbyString("check ")[0],"check "+blendif_check_steps[0])):t>=0?
// sort to get the highest value //for the protocol
blendif_check_value.sort((function(e,t){return t-e})):
// sort to get the lowest value
blendif_check_value.sort((function(e,t){return e-t})),blendif_check_value[0]}function blendif_edit_button(e){try{if(layer_checkExistenceByRegex("check"))try{
// doc.suspendHistory('TiefenLichter Check ' + blendif_edit_both(_value) + ' ', 'blendif_edit_both(' + _value + ');')
// doc.suspendHistory("TiefenLichter Check " + blendif_edit_both_fake(_value) + " ", "blendif_edit_both(" + _value + ");")
doc.suspendHistory("TiefenLichter Check "+blendif_edit_both(!1,e)+" ","blendif_edit_both(true, "+e+");")}catch(e){alert("Error1:"+e)}}catch(e){alert("Error2:"+e)}}
// alert(layer_checkExistence2("check"))
function layer_checkExistence2(e){try{var t=new ActionReference;t.putProperty(s2t("property"),s2t("itemIndex")),"number"==typeof e?t.putIndex(s2t("layer"),e):"string"==typeof e&&t.putName(s2t("layer"),e);executeActionGet(t).getInteger(s2t("itemIndex"));return!0}catch(e){return!1}}
// alert(layer_checkExistenceByRegex("check"))
function layer_checkExistenceByRegex(e){return 0!==layer_getIDXbyString(e).length}function layer_renameByIDX(e,t){if(0!=e){var r=new ActionDescriptor,s=new ActionReference;s.putIndex(s2t("layer"),e),r.putReference(s2t("null"),s);var a=new ActionDescriptor;a.putString(s2t("name"),t),r.putObject(s2t("to"),s2t("layer"),a),executeAction(s2t("set"),r,DialogModes.NO)}}function layer_getIDXbyName(e){var t=new ActionReference;return t.putProperty(s2t("property"),s2t("itemIndex")),
// r.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
t.putName(s2t("layer"),e),hasBackground()?executeActionGet(t).getInteger(s2t("itemIndex"))-1:executeActionGet(t).getInteger(s2t("itemIndex"))}$.evalFile("/Users/simon/Library/Application Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx"),create_check_blendif_button(10);