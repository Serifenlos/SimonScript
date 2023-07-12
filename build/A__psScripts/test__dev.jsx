/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] test__dev</name>
<about>test_dev | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
// include "../../build/A__psScripts/functions/basic.jsx";
// include "../../build/A__psScripts/functions/pref.jsx";
// include "../../build/A__psScripts/functions/utils.jsx";
// include "../../build/A__psScripts/functions/LUT-dodge.jsx";
// include "../../build/A__psScripts/functions/LUT-burn.jsx";
// include "../../build/A__psScripts/functions/dialog.jsx";
// include "../../build/A__psScripts/functions/ready.jsx";
// include "../../build/A__psScripts/functions/view.jsx";
// include "../../build/A__psScripts/functions/layer.jsx";
// include "../../build/A__psScripts/functions/save.jsx";
// include "../../build/A__psScripts/functions/loopFiles.jsx";
// include "../../build/A__psScripts/functions/meta.jsx";
//include "/Users/simon/Arbeit/__temp/json2.js";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
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
*/function moveLayer2(e,t,r){gotoLayer(e);var i=app.activeDocument.activeLayer;gotoLayer(t);var a=app.activeDocument.activeLayer;if("before"==r||"up"==r)var n=ElementPlacement.PLACEBEFORE;else if("after"==r||"down"==r)n=ElementPlacement.PLACEAFTER;else if("top"==r||"beginning"==r)n=ElementPlacement.PLACEATBEGINNING;else if("bottom"==r||"end"==r)n=ElementPlacement.PLACEATEND;i.move(a,n)}
// funktioniert nicht
// moveLayer2("Ebene 1", "Ebene 3", "top")
// resize();
////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399
function getSmartFilterArray(e){try{var t=new ActionReference;t.putProperty(stringIDToTypeID("property"),stringIDToTypeID("smartObject")),t.putIndex(sTID("layer"),e);
// ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("smartObject"));
// ref.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
var r=executeActionGet(t).getObjectValue(stringIDToTypeID("smartObject")).getList(stringIDToTypeID("filterFX"));filterArray=[];for(var i=0;i<r.count;i++){var a=r.getObjectValue(i),n=a.getObjectValue(stringIDToTypeID("filter")),o=typeIDToStringID(a.getObjectType(stringIDToTypeID("filter")));filterArray_inner=[],filterArray_inner.push(e,i,o);for(var s=0;s<n.count;s++){getSmartFilterValues(n,s);try{if(n.getObjectValue(n.getKey(s)))for(var l=typeIDToStringID(n.getKey(s)),c=(l=n.getObjectValue(stringIDToTypeID(l)),0);c<l.count;c++)getSmartFilterValues(l,c)}catch(e){}}filterArray.push(filterArray_inner)}return!0}catch(e){
// alert("no SmartObjekt " + _layerIDX);
return!1}}function getSmartFilterValues(e,t){var r=filterArray_inner,i=e.getKey(t);if(t2s(i))a=t2s(i);else var a=i;switch(e.getType(e.getKey(t))){case DescValueType.BOOLEANTYPE:var n=e.getBoolean(e.getKey(t));r.push(a,n);break;case DescValueType.CLASSTYPE:n=e.getClass(e.getKey(t));r.push(a,n);break;case DescValueType.DOUBLETYPE:n=e.getDouble(e.getKey(t));r.push(a,n);break;case DescValueType.ENUMERATEDTYPE:var o=typeIDToStringID(e.getEnumerationType(e.getKey(t)));n=typeIDToStringID(e.getEnumerationValue(e.getKey(t)));r.push(a,o,n);break;case DescValueType.INTEGERTYPE:n=e.getInteger(e.getKey(t));r.push(a,n);break;case DescValueType.LISTTYPE:n=e.getList(e.getKey(t));r.push(a,n);break;case DescValueType.OBJECTTYPE:var s=typeIDToStringID(e.getObjectType(e.getKey(t)));n=e.getObjectValue(e.getKey(t));r.push(a,s,n);break;case DescValueType.REFERENCETYPE:n=e.getReference(e.getKey(t));r.push(a,n);break;case DescValueType.STRINGTYPE:n=e.getString(e.getKey(t));r.push(a,n);break;case DescValueType.UNITDOUBLE:var l=typeIDToStringID(e.getUnitDoubleType(e.getKey(t)));n=e.getUnitDoubleValue(e.getKey(t));r.push(a,l,n)}}function adjust_filter_TiefenLichter(e,t,r,i,a,n,o,s,l,c,u,p,y,g,d,m,w,h,f,v,L,_,D,b,I,A){var T=new ActionDescriptor,x=new ActionDescriptor,F=new ActionDescriptor,N=new ActionDescriptor,S=new ActionDescriptor,k=new ActionReference;k.putIndex(s2t("filterFX"),t),k.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),F.putReference(s2t("null"),k),T.putUnitDouble(s2t(r),s2t(i),a),T.putUnitDouble(s2t(n),s2t(o),s),T.putInteger(s2t(l),Math.round(c*e)),S.putObject(s2t("shadowMode"),s2t("adaptCorrectTones"),T),x.putUnitDouble(s2t(u),s2t(p),y),x.putUnitDouble(s2t(g),s2t(d),m),x.putInteger(s2t(w),Math.round(h*e)),S.putObject(s2t("highlightMode"),s2t("adaptCorrectTones"),x),S.putDouble(s2t(f),v),S.putDouble(s2t(L),_),S.putInteger(s2t(D),b),S.putInteger(s2t(I),A),N.putObject(s2t("filter"),s2t("adaptCorrect"),S),F.putObject(s2t("filterFX"),s2t("filterFX"),N),executeAction(s2t("set"),F,DialogModes.NO)}function resize(){prefSave(),prefSet(DialogModes.NO,Units.PIXELS);try{try{gotoLayer("Original")}catch(e){alert("keine Ebene ‘Original‘ gefunden")}"LayerKind.SMARTOBJECT"!=doc.activeLayer.kind&&alert("Ebene ‘Original‘ ist kein SmartObjekt");var e=app.activeDocument.width;SmartObject_edit();var t=app.activeDocument.width,r=t/e;$.writeln("width_faktor: "+r),app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),doc.resizeImage(t,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0),getSmartFilterArray();for(var i=0;i<filterArray.length;i++){if("adaptCorrect"==filterArray[i][1])try{adjust_filter_TiefenLichter(r,filterArray[i][0]+1,filterArray[i][5],filterArray[i][6],filterArray[i][7],filterArray[i][8],filterArray[i][9],filterArray[i][10],filterArray[i][11],filterArray[i][12],filterArray[i][16],filterArray[i][17],filterArray[i][18],filterArray[i][19],filterArray[i][20],filterArray[i][21],filterArray[i][22],filterArray[i][23],filterArray[i][24],filterArray[i][25],filterArray[i][26],filterArray[i][27],filterArray[i][28],filterArray[i][29],filterArray[i][30],filterArray[i][31])}catch(e){}$.writeln(filterArray[i].length),$.writeln(filterArray[i][1]),$.writeln(filterArray[i]),
// $.writeln("shadow " + filterArray[i][12] + "(" + filterArray[i][12] * 2 + ")" + " -- highlight " + filterArray[i][23] + "(" + filterArray[i][23] * 2 + ")")
$.writeln("-----")}fixMaskLoop(r),fitScreen()}catch(e){}prefReset()}
// loop_getSmartFilterArray();
function loop_getSmartFilterArray(){var e=getActiveLayerIndex(),t=1;for(filterArray_outer=[];checkLayerExistence(t);){try{getSmartFilterArray(t)&&filterArray_outer.push(filterArray)}catch(e){}t++}for(var r=0;r<filterArray_outer.length;r++)for(var i=0;i<filterArray_outer[r].length;i++)$.writeln("layerIdx "+filterArray_outer[r][i][0]),$.writeln("filterIdx "+filterArray_outer[r][i][1]),$.writeln("filterTyp "+filterArray_outer[r][i][2]),$.writeln("filterArray "+filterArray_outer[r][i]),$.writeln("-----");gotoLayer(e)}
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
function fixMaskLoop(e){for(var t=getActiveLayerIndex(),r=1;fixMask(r,e);)r++;$.writeln(t),gotoLayer(t)}function fixMask(e,t){try{var r=new ActionReference;r.putIndex(sTID("layer"),e);var i=executeActionGet(r),a=i.getUnitDoubleValue(sTID("userMaskFeather")),n=i.getUnitDoubleValue(sTID("userMaskDensity"));return $.writeln("i,f,d: "+e+", "+a+", "+n),a>0&&(gotoLayer(e),gotoMask(),setMaskFeatherTo(0),$.writeln("feather, faktor, gleich"+a+", "+t+", "+a*t),fixMaskFeather(a*t)),n<255&&(gotoLayer(e),gotoMask(),setMaskDensityTo(100),$.writeln("dens "+n),$.writeln("dens2 "+-1*(n-255)),fixMaskDens(-1*(n-255))),!0}catch(i){return!1}}function fixMaskFeather(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("radius"),s2t("pixelsUnit"),e),executeAction(s2t("gaussianBlur"),t,DialogModes.NO)}function fixMaskDens(e){var t=new ActionDescriptor,r=new ActionDescriptor,i=new ActionList,a=new ActionList,n=new ActionReference;t.putEnumerated(s2t("presetKind"),s2t("presetKindType"),s2t("presetKindCustom")),n.putEnumerated(s2t("channel"),s2t("ordinal"),s2t("targetEnum")),r.putReference(s2t("channel"),n),a.putInteger(e),a.putInteger(255),r.putList(s2t("output"),a),i.putObject(s2t("levelsAdjustment"),r),t.putList(s2t("adjustment"),i),executeAction(s2t("levels"),t,DialogModes.NO)}
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
toogleOpenCloseSet(),gotoLayer("Textil-Ebene")}function fillColor(e,t,r){var i=function(e){return app.stringIDToTypeID(e)},a=new ActionDescriptor,n=new ActionDescriptor,o=new ActionDescriptor,s=new ActionReference;s.putEnumerated(i("contentLayer"),i("ordinal"),i("targetEnum")),a.putReference(i("null"),s),o.putDouble(i("red"),e),o.putDouble(i("grain"),t),o.putDouble(i("blue"),r),n.putObject(i("color"),i("RGBColor"),o),a.putObject(i("to"),i("solidColorLayer"),n),executeAction(i("set"),a,DialogModes.NO)}function selectLayer2(e,t){var r=new ActionDescriptor,i=new ActionReference;if("remove"!=t&&t)a="addToSelection";else var a="removeFromSelection";i.putName(s2t("layer"),e),r.putReference(s2t("null"),i),r.putEnumerated(s2t("selectionModifier"),s2t("selectionModifierType"),s2t(a)),r.putBoolean(s2t("makeVisible"),!1),executeAction(s2t("select"),r,DialogModes.NO)}function gaussianBlur(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("radius"),s2t("pixelsUnit"),e),executeAction(s2t("gaussianBlur"),t,DialogModes.NO)}
////////////////////////////////
// exportTextil();
function exportTextil(){_saveFolder="~/Arbeit/_RZ/TextilOnDemand+";var e=new Folder(_saveFolder);e.exists||e.create();var r=[],i=Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");if(null!=i)for(var a in r=function e(t,r){for(var i=Folder(t).getFiles(),a=0;a<i.length;a++){var n=i[a];n instanceof File||(r.push(Folder(n)),e(n.toString(),r))}return r}(i,r),r.unshift(i),r)
// if (files.length < 1) continue;
for(var n in files=[],files=r[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i),files){var o="";if(i!=r[a])o=r[a].name;var s=files[n],l=new File(s);app.open(l);var c=app.activeDocument;
// include "functions/basic.jsx";
// include "functions/utils.jsx";
// include "functions/meta.jsx";
// include "functions/save.jsx";
// include "functions/loopFiles.jsx";
prefSave(),prefSet(DialogModes.NO,Units.PIXELS);var u=GetFileNameOnly(c.name).replace(/(_Packshot)/g,"").replace(/(_Main_0)/g,"");u=(o=o.replace(/%20/g,""))+"__"+u;selectLayers("selectNoLayers"),selectLayer("IKAUZ_weiss",t),selectLayer("11F-Logo_beidseitig-vorne_schwarz",t),selectLayer("11F-Logo_beidseitig-vorne_weiss",t),selectLayer("11F-Logo_beidseitig-hinten_schwarz",t),selectLayer("11F-Logo_beidseitig-hinten_weiss",t),selectLayer("11F-Logo_weiss",t),selectLayer("11F-Logo_schwarz",t),selectLayer("11-Kasten_weiss",t),selectLayer("11-Kasten_orange",t),selectLayer("Fussball-ist-bunt_weiss",t),selectLayer("Fussball-ist-bunt_schwarz",t),hide(),selectLayers("selectNoLayers");try{selectLayer2(p="IKAUZ_weiss",t),makeVisible(),
// alert(saveFolder)
// alert(layer)
// alert(fileName)
// var savePath = saveFolder + "/" + _layer + "__" + _fileName + ".tif";
saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11F-Logo_beidseitig-vorne_schwarz",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11F-Logo_beidseitig-vorne_weiss",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11F-Logo_beidseitig-hinten_schwarz",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11F-Logo_beidseitig-hinten_weiss",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11F-Logo_weiss",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11F-Logo_schwarz",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11-Kasten_weiss",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="11-Kasten_orange",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{selectLayer2(p="Fussball-ist-bunt_weiss",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}try{var p;selectLayer2(p="Fussball-ist-bunt_schwarz",t),makeVisible(),saveTextil(e,p,u),hide(),selectLayers("selectNoLayers")}catch(e){}c.close(SaveOptions.DONOTSAVECHANGES)}}function saveTextil(e,t,r){var i=e+"/"+t+"__"+r+".tif",a=(File(i),new TiffSaveOptions);a.alphaChannels=!0,a.byteOrder=ByteOrder.IBM,a.embedColorProfile=!0,a.imageCompression=TIFFEncoding.TIFFLZW,a.layers=!1,a.spotColors=!1,a.transparency=!0,a.annotations=!1,doc.saveAs(new File(i),a,!1,Extension.LOWERCASE)}
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
////////////////////////////////////
// get BlendIf //////////////////
////////////////////////////////////
// function blendif_2(_idx, _blackMin, _blackMax, _whiteMin, _whiteMax) {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     if (!isNaN(_idx)) {
//         r.putIndex(s2t("layer"), _idx)
//     } else {
//         r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'))
//     }
//     d.putReference(sTID('null'), r);
//     var d2 = new ActionDescriptor();
//     var l = new ActionList();
//     var d3 = new ActionDescriptor();
//     var r2 = new ActionReference();
//     r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('gray'));
//     d3.putReference(sTID('channel'), r2);
//     d3.putInteger(sTID('srcBlackMin'), 0);
//     d3.putInteger(sTID('srcBlackMax'), 0);
//     d3.putInteger(sTID('srcWhiteMin'), 255);
//     d3.putInteger(sTID('srcWhiteMax'), 255);
//     d3.putInteger(sTID('destBlackMin'), _blackMin);
//     d3.putInteger(sTID('destBlackMax'), _blackMax);
//     d3.putInteger(sTID('destWhiteMin'), _whiteMin);
//     d3.putInteger(sTID('desaturate'), _whiteMax);
//     l.putObject(sTID('blendRange'), d3);
//     d2.putList(sTID('blendRange'), l);
//     d.putObject(sTID('to'), sTID('layer'), d2);
//     executeAction(sTID('set'), d, DialogModes.NO);
// }
// blendif_2(0, 0, 215, 240);
// test_blendif_get()
function nurGucken(){var e=[],t=new ActionReference;t.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum"));var r=executeActionGet(t).getList(s2t("adjustment")).getObjectValue(0).getObjectValue(s2t("color"));return e.push(Math.round(r.getDouble(s2t("red")))),e.push(Math.round(r.getDouble(s2t("green")))),e.push(Math.round(r.getDouble(s2t("blue")))),e}function test_blendit_get2(){var e=new ActionReference;e.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum"));var t=executeActionGet(e);
// var adjList = desc.getList(s2t('adjustment'));
// var adjDesc = adjList.getObjectValue(0);
// var colorDesc = adjDesc.getObjectValue(s2t('color'));
// colors_layer.push(Math.round(colorDesc.getDouble(s2t('red'))));
// colors_layer.push(Math.round(colorDesc.getDouble(s2t('green'))));
// colors_layer.push(Math.round(colorDesc.getDouble(s2t('blue'))));
return alert(t.getObjectValue(stringIDToTypeID("blendOptions"))),[]}
// alert(loopParentsIDXfor(getActiveLayerIndex()).length)
// test_blendit_get2()
// test_blendif_get()
// alert(layer_blendif_get(getActiveLayerIndex()))
// function test_blendif_get() {
//     // gotoLayer("Gradation neutral")
//     //@include "/Applications/B-Programme/Grafik/xtools22/xlib/Styles.js"
//     var blendIf = {};
//     var doc = app.activeDocument;
//     var layer = doc.activeLayer;
//     var desc = Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0);
//     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0))
//     // alert("2 " + desc)
//     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')))
//     blendIf.channel = typeIDToStringID(desc.getReference(stringIDToTypeID('channel')).getEnumeratedValue());
//     blendIf.srcBlackMin = desc.getInteger(stringIDToTypeID('srcBlackMin')); // 'This Layer' in dialog
//     blendIf.srcBlackMax = desc.getInteger(stringIDToTypeID('srcBlackMax'));
//     blendIf.srcWhiteMin = desc.getInteger(stringIDToTypeID('srcWhiteMin'));
//     blendIf.srcWhiteMax = desc.getInteger(stringIDToTypeID('srcWhiteMax'));
//     blendIf.destBlackMin = desc.getInteger(stringIDToTypeID('destBlackMin')); // 'Underlaying Layer' in dialog
//     blendIf.destBlackMax = desc.getInteger(stringIDToTypeID('destBlackMax'));
//     blendIf.destWhiteMin = desc.getInteger(stringIDToTypeID('destWhiteMin'));
//     blendIf.destWhiteMax = desc.getInteger(stringIDToTypeID('desaturate'));
//     // alert(blendIf.destWhiteMin)
//     $.writeln(blendIf.destBlackMin)
//     $.writeln(blendIf.destBlackMax)
//     $.writeln(blendIf.destWhiteMin)
//     $.writeln(blendIf.destWhiteMax)
//     alert(blendIf.destBlackMin + "," + blendIf.destBlackMax + "," + blendIf.destWhiteMin + "," + blendIf.destWhiteMax)
// }
// function test2(_idx) {
//     try {
//         // var d1 = new ActionDescriptor();
//         var r = new ActionReference();
//         // var d1 = new ActionDescriptor();
//         // var d2 = new ActionDescriptor();
//         // var d3 = new ActionDescriptor();
//         // AR points to the Active Layer
//         r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//         // r.putIndex(sTID("layer"), _idx);
//         d1 = executeActionGet(r);
//         d1.putReference(sTID('null'), r);
//         d2 = d1.getObjectValue(s2t("blendOptions"))
//         // d2 = d1.getList(s2t("blendRange"))
//         // // d1.putObject(sTID('blendOptions'), sTID('blendOptions'), 99);
//         // if(d1.hasKey(stringIDToTypeID('blendOptions'))) {
//         //     alert("ja")
//         // } else {
//         //     alert("nenin")
//         // }
//         // d2 = d1.getObjectValue(s2t('blendOptions'))
//         // d3 = d2.getList(s2t("blendRange"))
//         alert("2 " + d2)
//     } catch (e) {
//         alert(e)
//     }
//     // return;
// }
// alert(layer_getIDXbyString("Tiefen_check"))
// alert(layer_blendif_get(19)[0]+","+layer_blendif_get(19)[1]+","+layer_blendif_get(19)[2]+","+layer_blendif_get(19)[3])
// alert(layer_blendif_get(layer_getIDXbyString("Tiefen_check")[0])[0])
// function layer_blendif_get(_idx) {
//     try {
//         var r = new ActionReference();
//         var d = new ActionDescriptor();
//         var array = [];
//         r.putProperty(s2t("property"), s2t("json"));
//         if (!isNaN(_idx)) {
//             r.putIndex(s2t("layer"), _idx)
//         } else {
//             r.putEnumerated(s2t('layer'), s2t('ordinal'), s2t('targetEnum'))
//         }
//         d.putReference(s2t("null"), r);
//         eval("var json=" + executeAction(s2t("get"), d, DialogModes.NO).getString(s2t("json")));
//         //TODO oh my god - wie bekomme ich die Anzahl der Parents in den Call ??
//         var parents = loopParentsIDXfor(_idx).length;
//         if (parents == 0) {
//             var call = json.layers[0]
//         } else if (parents == 1) {
//             var call = json.layers[0].layers[0]
//         } else if (parents == 2) {
//             var call = json.layers[0].layers[0].layers[0]
//         } else if (parents == 3) {
//             var call = json.layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 4) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 5) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 6) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 7) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 8) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 9) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         } else if (parents == 10) {
//             var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
//         }
//         if (call.blendOptions.blendRange) {
//             // $.writeln(json.layers[0].layers[0].layers[0].blendOptions.blendRange.toSource());
//             // $.writeln(call.blendOptions.blendRange.toSource())
//             var data = call.blendOptions.blendRange.toSource();
//             var data = data.replace(/^\[\(/g, "").replace(/\)\]$/g, ""); // umschliesende Klammern wegnehmen [(…)]
//             var data = data.replace(/([a-zA-Z]+)/g, "\"$1\"") // key goes string
//             var data = data.replace(/\"\"gray\"\"/g, "\"gray\"") // doppelte Anführungszeichen bei gray
//             // $.writeln(data)
//             var data = JSON.parse(data)
//             for (var i in data) {
//                 if (i == "destBlackMin" || i == "destBlackMax" || i == "destWhiteMin" || i == "desaturate") {
//                     array.push(data[i]);
//                 }
//             }
//             return array
//         } else {
//             // $.writeln("no blendOptions found");
//         }
//     } catch (e) {
//         alert(e)
//     }
// }
// alert(getActiveLayerIndex())
// blendif_2(f, layer_blendif_get(3)[0], layer_blendif_get(3)[1], layer_blendif_get(3)[2]-5, layer_blendif_get(3)[3]-5)
// toogleVisibility2("check ")
// alert(getVisible2("check "))
// hide Layer/Groupe by IDX, name, or activeLayer
// function hide2(_input) {
//     try {
//         var d = new ActionDescriptor();
//         var l = new ActionList();
//         var r = new ActionReference();
//         if (typeof _input == "number") {
//             // hide by Index
//             r.putIndex(s2t("layer"), _input);
//         } else if (typeof _input == "string") {
//             if (layer_checkExistence2(_input)) {
//                 // hide by Layername
//                 r.putName(s2t('layer'), _input);
//             } else {
//                 // hide by Layername via Regex // first hit
//                 r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//             }
//             // } else if (typeof _input == "boolean" || typeof _input == 'undefined') {
//         } else if (typeof _input === "undefined") {
//             // hide activeLayer
//             r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//         }
//         l.putReference(r);
//         d.putList(c2t("null"), l);
//         executeAction(s2t("hide"), d, DialogModes.NO)
//     } catch (e) {}
// }
// function toogleVisibility2(_input) {
//     try {
//         var d = new ActionDescriptor();
//         var l = new ActionList();
//         var r = new ActionReference();
//         if (getVisible2(_input)) {
//             if (typeof _input == "number") {
//                 r.putIndex(s2t("layer"), _input);
//             } else if (typeof _input == "string") {
//                 if (layer_checkExistence2(_input)) {
//                     r.putName(s2t('layer'), _input);
//                 } else {
//                     r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//                 }
//             } else if (typeof _input == 'undefined') {
//                 r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//             }
//             l.putReference(r);
//             d.putList(c2t("null"), l);
//             executeAction(s2t("hide"), d, DialogModes.NO);
//         } else {
//             if (typeof _input == "number") {
//                 r.putIndex(s2t("layer"), _input);
//             } else if (typeof _input == "string") {
//                 if (layer_checkExistence2(_input)) {
//                     r.putName(s2t('layer'), _input);
//                 } else {
//                     r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//                 }
//             } else if (typeof _input == 'undefined') {
//                 r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//             }
//             l.putReference(r);
//             d.putList(c2t("null"), l);
//             executeAction(s2t("show"), d, DialogModes.NO);
//         }
//     } catch (e) {}
// }
// function getVisible2(_input) {
//     try {
//         var r = new ActionReference();
//         if (typeof _input == "number") {
//             r.putIndex(s2t("layer"), _input);
//         } else if (typeof _input == "string") {
//             if (layer_checkExistence2(_input)) {
//                 r.putName(s2t('layer'), _input);
//             } else {
//                 r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//             }
//         } else if (typeof _input == 'undefined') {
//             r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//         }
//         var vis = executeActionGet(r).getInteger(s2t('visible'));
//         return vis;
//     } catch (e) {}
// }
// checkTiefenLichter_create(11)
// checkTiefenLichter_edit_button(10)
// checkTiefenLichter_create_button(10)
// DodgeBurn_highlow(true)
// // create_check_blendif
// function checkTiefenLichter_create() {} 
// // create_check_blendif_button
// function checkTiefenLichter_create_button() {}
// // blendif_edit_both
// function checkTiefenLichter_edit() {}
// // blendif_edit
// function layer_blendif_edit() {}
// // blendif_edit_button
// function checkTiefenLichter_edit_button() {}
// function checkTiefenLichter_create(__value) {
//     createGroup("check " + __value + "", "passThrough", "none", 100, f);
//     createColorLayer("Tiefen_check", "normal", "none", 100, "none", 0, 0, 255);
//     blendif("current", 0, 0, 0 + __value, 0 + __value);
//     createColorLayer("Lichter_check", "normal", "none", 100, "none", 255, 0, 0);
//     blendif("current", 255 - __value, 255 - __value, 255, 255)
//     gotoLayer("check " + __value + "");
//     toogleOpenCloseSet();
//     hide();
//     if (layer_checkExistence("nachher")) {
//         moveLayer("check " + __value + "", "nachher", "up");
//         gotoLayer("check " + __value + "");
//         moveLayer3("down", 1);
//     } else {
//         // TODO move to TOP
//     }
// }
// function checkTiefenLichter_create_button(_value) {
//     try {
//         if (!layer_checkExistenceByRegex("check ")) {
//             try {
//                 doc.suspendHistory("Create checkFolder", "checkTiefenLichter_create(" + _value + ")")
//             } catch (e) {
//                 alert("Error1:" + e)
//             };
//         } else {
//             toogleVisibility("check ")
//         }
//     } catch (e) {
//         alert("Error2:" + e)
//     }
// }
// function layer_blendif_edit(__real, _idx, _lights, _shadows) {
//     var __shadows = layer_blendif_get(_idx)[2] + _shadows;
//     var __lights = layer_blendif_get(_idx)[0] + _lights;
//     var i = 0;
//     if (__shadows < 0) {
//         var i = 1;
//         while (__shadows + i < 0) {
//             i++;
//         }
//         var __shadows = __shadows + i;
//     }
//     var j = 0;
//     if (__lights > 255) {
//         var j = 1;
//         while (__lights - j > 255) {
//             j++;
//         }
//         var __lights = __lights - j;
//     }
//     // alert("tiefen->" + __shadows + " lichter->" + __lights)
//     if (__real) {
//         blendif(
//             _idx,
//             __lights,
//             __lights,
//             __shadows,
//             __shadows
//         )
//         blendif_check_steps.push(0 + __shadows);
//         blendif_check_steps.push(255 - __lights);
//     }
//     blendif_check_value.push(_shadows + i);
//     blendif_check_value.push(-1 * (_lights - j));
//     return;
// }
// function checkTiefenLichter_edit(_real, __value) {
//     blendif_check_steps = [];
//     blendif_check_value = [];
//     layer_blendif_edit(_real, layer_getIDXbyString("Tiefen_check")[0], 0, __value);
//     layer_blendif_edit(_real, layer_getIDXbyString("Lichter_check")[0], -1 * (__value), 0);
//     if (_real) {
//         // sort to get the lowest value //to name the groupe
//         blendif_check_steps.sort(function(a, b) {
//             return a - b
//         });
//         layer_renameByIDX(layer_getIDXbyString("check ")[0], "check " + blendif_check_steps[0]);
//     } else {
//         if (__value >= 0) {
//             // sort to get the highest value //for the protocol
//             blendif_check_value.sort(function(a, b) {
//                 return b - a
//             });
//         } else {
//             // sort to get the lowest value
//             blendif_check_value.sort(function(a, b) {
//                 return a - b
//             });
//         }
//     }
//     return blendif_check_value[0];
// }
// function checkTiefenLichter_edit_button(_value) {
//     try {
//         if (layer_checkExistenceByRegex("check")) {
//             try {
//                 doc.suspendHistory("TiefenLichter Check " + checkTiefenLichter_edit(false, _value) + " ", "checkTiefenLichter_edit(true, " + _value + ");")
//             } catch (e) {
//                 alert("Error1:" + e)
//             };
//         }
//     } catch (e) {
//         alert("Error2:" + e)
//     }
// }
// function layer_checkExistence2(_input) {
//     try {
//         var r = new ActionReference();
//         r.putProperty(s2t("property"), s2t("itemIndex"));
//         if (typeof _input == "number") {
//             r.putIndex(s2t("layer"), _input);
//         } else if (typeof _input == "string") {
//             r.putName(s2t('layer'), _input);
//         }
//         var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
//         return true;
//     } catch (e) {
//         return false;
//     }
// }
// alert(layer_checkExistenceByRegex("check"))
// function layer_checkExistenceByRegex(_input) {
//     if (layer_getIDXbyString(_input).length !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function layer_renameByIDX(_idx, _name) {
//     if (_idx == 0) return;
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     r.putIndex(s2t('layer'), _idx);
//     d.putReference(s2t('null'), r);
//     var d2 = new ActionDescriptor();
//     d2.putString(s2t('name'), _name);
//     d.putObject(s2t('to'), s2t('layer'), d2);
//     executeAction(s2t('set'), d, DialogModes.NO);
// }
// function layer_getIDXbyName(_name) {
//     var r = new ActionReference();
//     r.putProperty(s2t("property"), s2t("itemIndex"));
//     // r.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
//     r.putName(s2t('layer'), _name);
//     return hasBackground() ? executeActionGet(r).getInteger(s2t("itemIndex")) - 1 : executeActionGet(r).getInteger(s2t("itemIndex"));
// };
// alert(app.activeDocument.historyStates.getByName("Ebenensichtbarkeit"))
// doc.activeHistoryState = 
///////////////////////////////////////////////
// correct quick and fix the mapping Verzerrung
// correctVerzerrung()
function correctVerzerrung(){try{var e=app.activeDocument.name.replace("__RGB.psd","")}catch(e){alert("Error2: "+e)}var t=[],r=new Folder("/Users/simon/Arbeit/11Freunde/TextilOnDemand/DNG/Shooting Sortierung");
// var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
if(null!=r){for(var i in t=function e(t,r){for(var i=Folder(t).getFiles(),a=0;a<i.length;a++){var n=i[a];n instanceof File||(r.push(Folder(n)),e(n.toString(),r))}return r}(r,t),t.unshift(r),t)if(files=[],
// files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
files=t[i].getFiles(/.+\.(tif|psd|jpg)$/i),!(files.length<1))for(var a in files){var n=files[a],o=new File(n),s=GetFileNameOnly(decodeURI(o.name));
try{if(s.match(/__map/g)&&(map_doc_filename=s.replace("__map",""),e==map_doc_filename)){var l=o.name.replace("__map","__map+"),c=o.path,u=new File(c+"/"+l);return u.exists?app.open(u):app.open(o),
// alert(doc_file)
// alert(map_doc_filename)
// app.open(doc_file);
anordung_2vertical(),void anordnung_zoom(-1)}
/* PUT CODE HERE */}catch(e){alert("Error: "+e)}}alert("fertig")}}
// alert("ding")
// togglePalettes()
// if(app_panelsVisible()) {
//     togglePalettes()
// }
// if(app_panelsVisible()) togglePalettes();
// alert(panels_visible() ? "Panels are visible" : "Panels are hidden")
// function app_panelsVisible() {
//     try {
//         var r = new ActionReference();
//         r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("panelList"));
//         r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
//         var list = executeActionGet(r).getList(stringIDToTypeID("panelList"));
//         var viz = false;
//         for (var i = 0; i < list.count; i++) {
//             var obj = list.getObjectValue(i);
//             var id = obj.getString(stringIDToTypeID("ID"));
//             // skip some panels if shift+tab was pressed
//             if (id == "panelid.static.toolbar") continue; // skip tool panel
//             if (id == "panelid.static.options") continue; // skip options panel
//             if (id == "panelid.static.blrb") continue; // what is panelid.static.blrb ??
//             if (obj.getBoolean(stringIDToTypeID("visible"))) {
//                 viz = true;
//                 break;
//             }
//         }
//         return viz;
//     } catch (e) {
//         throw (e);
//     }
// }
function app_panelsVisible2(){try{var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("panelList")),e.putEnumerated(stringIDToTypeID("application"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));for(var t=executeActionGet(e).getList(stringIDToTypeID("panelList")),r=0;r<t.count;r++){var i=t.getObjectValue(r);
// skip some panels if shift+tab was pressed
// if (id == "panelid.static.toolbar") continue; // skip tool panel
// if (id == "panelid.static.options") continue; // skip options panel
"panelid.static.info"==i.getString(stringIDToTypeID("ID"))&&(
// alert(obj.getBoolean(stringIDToTypeID("visible")))
i.visible=!1);
// if (obj.getBoolean(stringIDToTypeID("visible"))) {
//     viz = true;
//     break;
// }
}
// return viz;
}catch(e){throw e}}
// app_panelsVisible2()
// panelid.static.toolbar
// panelid.static.options
// panelid.static.actions
// panelid.static.gradients
// panelid.static.styles
// panelid.static.swatches
// panelid.static.patterns
// panelid.static.histogram
// panelid.static.info
// panelid.static.paths
// panelid.static.customshapes
// panelid.static.toolpresets
// panelid.static.picker
// panelid.static.channels
// panelid.static.layers
// panelid.static.comps
// panelid.static.animation
// panelid.static.clonesource
// panelid.static.measurement
// panelid.static.history
// panelid.static.navigator
// panelid.static.patchmatchfillpreview
// panelid.static.textcharacter
// panelid.static.textparagraph
// panelid.static.textcharstyle
// panelid.static.textparastyle
// panelid.static.textglyphspanel
// panelid.static.annotation
// panelid.static.3d
// panelid.static.create
// panelid.static.properties
// panelid.dynamic.uxp/0a4bb5cd/uxp.benz.webSharpPro.ext
// panelid.dynamic.uxp/4ce4c1cb/vanilla
// panelid.dynamic.uxp/e3f22fe6/vanilla
// panelid.dynamic.uxp/com.adobe.cclibrariespanel/ccLibrariesPanel
// panelid.dynamic.uxp/com.adobe.ccx.comments-webview/ccx-comments-uxp-webview
// panelid.dynamic.uxp/com.adobe.ccx.sharesheet/invite
// panelid.dynamic.uxp/com.adobe.ccx.timeline/ccxTimeline
// panelid.dynamic.uxp/com.adobe.pluginspanel/pluginsPanel
// panelid.static.brushstyler
// panelid.static.brushpresets
// panelid.static.smartbrush
// panelid.dynamic.swf.csxs.com.adobe.DesignLibraries.angular
// panelid.dynamic.swf.csxs.com.farbe2.test.panel
// panelid.dynamic.swf.csxs.com.wallstrom.ToolkitColorWheels.extension1
// panelid.dynamic.swf.csxs.com.wallstrom.ToolkitLuminosity.extension1
// panelid.dynamic.swf.csxs.MagicPickerCC2014
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitN1.extension1
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitN3.extension1
// panelid.dynamic.swf.csxs.com.my.test.panel
// panelid.dynamic.swf.csxs.com.softproof.panel
// panelid.dynamic.swf.csxs.KLR
// panelid.dynamic.swf.csxs.com.ding.ext
// panelid.dynamic.swf.csxs.com.panel_test_1
// panelid.dynamic.swf.csxs.com.lumenzia.ext
// panelid.dynamic.swf.csxs.com.cs-extensions.ThemeSwitcher
// panelid.dynamic.swf.csxs.net.sytes.chuwa.workspaceswitcher
// panelid.dynamic.swf.csxs.net.sytes.chuwa.propertyExplorer
// panelid.dynamic.swf.csxs.com.example.helloworld.panel
// panelid.dynamic.swf.csxs.com.svenstork.photoshop.InteractiveLuminosityMasks
// panelid.dynamic.swf.csxs.com.svenstork.photoshop.InteractiveBlenderPanel
// panelid.dynamic.swf.csxs.com.lumenziabasics.ext
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitN2.extension1
// panelid.dynamic.swf.csxs.Freistellen.extension
// panelid.dynamic.swf.csxs.com.wallstrom.RetouchingToolkitWorkflow.extension1
// panelid.dynamic.swf.csxs.MixColorsCC2014
// panelid.dynamic.swf.csxs.MagicTintsCC2014
// panelid.dynamic.swf.csxs.MagicSquireCC2014
// panelid.static.blrb
// alert(doc.activeLayer.kind)
// doc.suspendHistory("autoLevel: autoContrast +autoNeutrals", "adjustLayer_levels_autoLevels('autoContrast', f)");
// doc.suspendHistory("autoLevel: autoContrast +autoNeutrals", "adjustLayer_levels_autoLevels_wrapper('autoContrast', t)");
// function adjustLayer_levels_autoLevels_wrapper(__algorithmus, __autoNeutrals) {
//     var startLayer = layer_selectedIDX_get();
//     if (doc.activeLayer.kind == "LayerKind.LEVELS") {
//         // alert("ding")
//         makeVisible();
//     } else if (layer_checkExistence("AutoTonwert")) {
//         gotoLayer("AutoTonwert");
//         makeVisible();
//     }
//     else {
//         alert("keine TonWert-Ebene ausgewählt bzw vorbereitet")
//     }
//     adjustLayer_levels_autoLevels(__algorithmus, __autoNeutrals)
//     layer_selectedIDX_set(startLayer);
// }
// createGroup("rahmenlos", "passThrough", "none", 100, f);
// hide();
// createLayer("AutoTonwert", "levels", "normal", "gray", 80, "black", f,f); 
// toogleOpenCloseSet();
// var theLayers = collectLayers(app.activeDocument.activeLayer, []);
// alert(theLayers.join("\n"));
////// function collect all layers //////
function layer_findChild2(e,t){if(!t)t=new Array;for(var r=e.layers.length-1;r>=0;r--){var i=e.layers[r];
// theLayer.name = theParent.name + "_" + m;
// apply the function to layersets;
"ArtLayer"==i.typename||("LayerSet"==i.typename&&"rahmenlos"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"RL")):"LayerSet"==i.typename&&"Passepartout_Nussbaum"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"PP-nussbaum")):"LayerSet"==i.typename&&"Passepartout_Naturholz"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"PP-natur")):"LayerSet"==i.typename&&"Passepartout_Weiß"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"PP-weiss")):"LayerSet"==i.typename&&"Passepartout_Schwarz"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"PP-schwarz")):"LayerSet"==i.typename&&"Schattenfuge_Nussbaum"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"SF-nussbaum")):"LayerSet"==i.typename&&"Schattenfuge_Naturholz"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"SF-natur")):"LayerSet"==i.typename&&"Schattenfuge_Weiß"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"SF-weiss")):"LayerSet"==i.typename&&"Schattenfuge_Schwarz"==i.name?(
// allLayers = (layer_findChild2(theLayer, allLayers))
thisLayerIDX=i.itemIndex,putLayerNameByIndex_simon(thisLayerIDX,"SF-schwarz")):
// this line includes the layer groups;
(t=layer_findChild2(i,t)).push(i))}return t}
/* RENAME Layers -- ganz gut */
// loopOpenDocs();
function loopOpenDocs(){for(var e=app.activeDocument,t=0;t<app.documents.length;t++){app.activeDocument=app.documents[t];app.activeDocument;try{
/* PUT CODE HERE */
layer_findChild2(app.activeDocument.activeLayer,[]);
// alert("hier")
}catch(e){alert(e)}}app.activeDocument=e}function layer_findChild(e){for(var t=e.layers.length-1;t>=0;t--){var r=e.layers[t];"LayerSet"==r.typename&&"rahmenlos"==r.name&&(thisLayerIDX=r.itemIndex,$.writeln(thisLayerIDX),putLayerNameByIndex_simon(thisLayerIDX,"RL"))}}function putLayerNameByIndex_simon(e,t){if(0!=e){var r=new ActionDescriptor,i=new ActionReference;i.putIndex(charIDToTypeID("Lyr "),e),r.putReference(charIDToTypeID("null"),i),r.putBoolean(charIDToTypeID("MkVs"),!1);var a=new ActionDescriptor;a.putString(charIDToTypeID("Nm  "),t),r.putObject(charIDToTypeID("T   "),charIDToTypeID("Lyr "),a),executeAction(charIDToTypeID("slct"),r,DialogModes.NO),executeAction(charIDToTypeID("setd"),r,DialogModes.NO)}}
//Modal für Ebenen-Umbenennung
// main();
function main(){if(documents.length){var selLayers=getSelectedLayersIdx(),selIdxNames=[];for(var s in selLayers)selIdxNames.push([[Number(selLayers[s])],[getLayerNameByIndex(Number(selLayers[s]))]]);selectAllLayers();var allLayers=getSelectedLayersIdx(),allIdxNames=[];for(var n in allLayers)allIdxNames.push([[Number(allLayers[n])],[getLayerNameByIndex(Number(allLayers[n]))]]);try{var win=new Window("dialog","Layer Name Editor");g=win.graphics;var myBrush=g.newBrush(g.BrushType.SOLID_COLOR,[.99,.99,.99,1]);g.backgroundColor=myBrush,win.orientation="column",win.p1=win.add("panel",void 0,void 0,{borderStyle:"black"}),win.p1.preferredSize=[380,100],win.g1=win.p1.add("group"),win.g1.orientation="row",win.title=win.g1.add("statictext",void 0,"Layer Name Editor"),win.title.alignment="fill";var g=win.title.graphics;g.font=ScriptUI.newFont("Georgia","BOLDITALIC",22),win.g5=win.p1.add("group"),win.g5.orientation="row",win.g5.alignment="fill",win.g5.spacing=10,win.g5.rb1=win.g5.add("radiobutton",void 0,"Use Selected Layers"),win.g5.rb2=win.g5.add("radiobutton",void 0,"Use All Layers"),win.g5.rb1.value=!0,win.g10=win.p1.add("group"),win.g10.orientation="row",win.g10.alignment="fill",win.g10.rb1=win.g10.add("radiobutton",void 0,"Prefix"),win.g10.rb2=win.g10.add("radiobutton",void 0,"Suffix"),win.g10.rb3=win.g10.add("radiobutton",void 0,"Remove"),win.g10.rb4=win.g10.add("radiobutton",void 0,"Insert"),win.g10.rb5=win.g10.add("radiobutton",void 0,"Replace"),win.g10.rb5.value=!0,win.g15=win.p1.add("group"),win.g15.orientation="row",win.g15.alignment="fill",win.g15.cb1=win.g15.add("checkbox",void 0,"Create Snapshot"),win.stack=win.add("group"),win.stack.spacing=10,win.stack.orientation="stack",win.stack.alignment="left",win.p2=win.stack.add("panel",void 0,void 0,{borderStyle:"black"}),//Prefix
win.p2.preferredSize=[380,100],win.p2.visible=!1,win.g200=win.p2.add("group"),win.g200.orientation="row",win.g200.alignment="fill",win.g200.st1=win.g200.add("statictext",void 0,"Prefix"),win.g200.st1.preferredSize=[75,20],win.g200.et1=win.g200.add("edittext"),win.g200.et1.preferredSize=[200,20],win.p3=win.stack.add("panel",void 0,void 0,{borderStyle:"black"}),//Suffix
win.p3.preferredSize=[380,100],win.p3.visible=!1,win.g300=win.p3.add("group"),win.g300.orientation="row",win.g300.alignment="fill",win.g300.st1=win.g300.add("statictext",void 0,"Suffix"),win.g300.st1.preferredSize=[75,20],win.g300.et1=win.g300.add("edittext"),win.g300.et1.preferredSize=[200,20],win.p4=win.stack.add("panel",void 0,void 0,{borderStyle:"black"}),//Remove
win.p4.preferredSize=[380,100],win.p4.visible=!1,win.g400=win.p4.add("group"),win.g400.orientation="row",win.g400.alignment="fill",win.g400.rb1=win.g400.add("radiobutton",void 0,"First(n) chars"),win.g400.rb2=win.g400.add("radiobutton",void 0,"Last(n) chars"),win.g400.rb3=win.g400.add("radiobutton",void 0,"Range From(n)"),win.g400.rb1.value=!0,win.g410=win.p4.add("group"),win.g410.orientation="row",win.g410.alignment="fill",win.g410.et1=win.g410.add("edittext"),win.g410.et1.preferredSize=[50,20],win.g410.et1.onChanging=function(){this.text.match(/[^\-\.\d]/)&&(this.text=this.text.replace(/[^\-\.\d]/g,""))},win.g410.st1=win.g410.add("statictext",void 0,"Number of Chars."),win.g410.et2=win.g410.add("edittext"),win.g410.et2.preferredSize=[50,20],win.g410.et2.onChanging=function(){this.text.match(/[^\-\.\d]/)&&(this.text=this.text.replace(/[^\-\.\d]/g,""))},win.g410.et2.visible=!1,win.g410.st1.visible=!1,win.g400.rb1.onClick=function(){win.g410.et2.visible=!1,win.g410.st1.visible=!1},win.g400.rb2.onClick=function(){win.g410.et2.visible=!1,win.g410.st1.visible=!1},win.g400.rb3.onClick=function(){win.g410.et2.visible=!0,win.g410.st1.visible=!0},win.p5=win.stack.add("panel",void 0,void 0,{borderStyle:"black"}),//Insert
win.p5.preferredSize=[380,100],win.p5.visible=!1,win.g500=win.p5.add("group"),win.g500.orientation="row",win.g500.alignment="fill",win.g500.st1=win.g500.add("statictext",void 0,"Insert"),win.g500.st1.preferredSize=[75,20],win.g500.et1=win.g500.add("edittext"),win.g500.et1.preferredSize=[200,20],win.g510=win.p5.add("group"),win.g510.orientation="row",win.g510.alignment="fill",win.g510.st1=win.g510.add("statictext",void 0,"At position"),win.g510.st1.preferredSize=[75,20],win.g510.et1=win.g510.add("edittext"),win.g510.et1.preferredSize=[50,20],win.g510.et1.onChanging=function(){this.text.match(/[^\-\.\d]/)&&(this.text=this.text.replace(/[^\-\.\d]/g,""))},win.p6=win.stack.add("panel",void 0,void 0,{borderStyle:"black"}),//Replace
win.p6.preferredSize=[380,100],win.g600=win.p6.add("group"),win.g600.orientation="row",win.g600.alignment="fill",win.g600.st1=win.g600.add("statictext",void 0,"Replace"),win.g600.st1.preferredSize=[75,20],win.g600.et1=win.g600.add("edittext"),win.g600.et1.preferredSize=[200,20],win.g610=win.p6.add("group"),win.g610.orientation="row",win.g610.alignment="fill",win.g610.st1=win.g610.add("statictext",void 0,"With"),win.g610.st1.preferredSize=[75,20],win.g610.et1=win.g610.add("edittext"),win.g610.et1.preferredSize=[200,20],win.g620=win.p6.add("group"),win.g620.orientation="row",win.g620.alignment="fill",win.g620.cb1=win.g620.add("checkbox",void 0,"Global"),win.g620.cb2=win.g620.add("checkbox",void 0,"Case Insensitive"),win.g620.cb2.value=!0,win.g10.rb1.onClick=function(){win.g10.rb1.value&&(win.p2.visible=!0,win.p3.visible=!1,win.p4.visible=!1,win.p5.visible=!1,win.p6.visible=!1)},win.g10.rb2.onClick=function(){win.g10.rb2.value&&(win.p2.visible=!1,win.p3.visible=!0,win.p4.visible=!1,win.p5.visible=!1,win.p6.visible=!1)},win.g10.rb3.onClick=function(){win.g10.rb3.value&&(win.p2.visible=!1,win.p3.visible=!1,win.p4.visible=!0,win.p5.visible=!1,win.p6.visible=!1)},win.g10.rb4.onClick=function(){win.g10.rb4.value&&(win.p2.visible=!1,win.p3.visible=!1,win.p4.visible=!1,win.p5.visible=!0,win.p6.visible=!1)},win.g10.rb5.onClick=function(){win.g10.rb5.value&&(win.p2.visible=!1,win.p3.visible=!1,win.p4.visible=!1,win.p5.visible=!1,win.p6.visible=!0)},win.g1000=win.add("group"),win.g1000.orientation="row",win.g1000.alignment="center",win.g1000.bu1=win.g1000.add("button",void 0,"Process"),win.g1000.bu1.preferredSize=[150,30],win.g1000.bu2=win.g1000.add("button",void 0,"Cancel"),win.g1000.bu2.preferredSize=[150,30],snapshotFlag=!1,win.g1000.bu1.onClick=function(){if(win.g15.cb1.value&&!snapshotFlag&&(snapshotFlag=!0,snapShot()),win.g10.rb1.value){//Prefix
if(""==win.g200.et1.text)return void alert("No Prefix has been entered!");if(win.close(0),win.g5.rb1.value)var lList=selIdxNames;else var lList=allIdxNames;for(var z in lList)putLayerNameByIndex(Number(lList[z][0]),win.g200.et1.text.toString()+lList[z][1].toString())}if(win.g10.rb2.value){//suffix
if(""==win.g300.et1.text)return void alert("No Suffix has been entered!");if(win.close(0),win.g5.rb1.value)var lList=selIdxNames;else var lList=allIdxNames;for(var z in lList)putLayerNameByIndex(Number(lList[z][0]),lList[z][1].toString()+win.g300.et1.text.toString())}if(win.g10.rb3.value){//Remove
if(win.g400.rb1.value){if(""==win.g410.et1.text)return void alert("No number has been entered!");if(Number(win.g410.et1.text)<1)return void alert("You can't remove zero characters!");if(win.close(0),win.g5.rb1.value)var lList=selIdxNames;else var lList=allIdxNames;for(var z in lList){var n=Number(win.g410.et1.text),rex="/^(.{"+n+"})(.+)/";putLayerNameByIndex(Number(lList[z][0]),lList[z][1].toString().match(eval(rex))[2])}}if(win.g400.rb2.value){if(""==win.g410.et1.text)return void alert("No number has been entered!");if(Number(win.g410.et1.text)<1)return void alert("You can't remove zero characters!");if(win.close(0),win.g5.rb1.value)var lList=selIdxNames;else var lList=allIdxNames;for(var z in lList){var n=Number(win.g410.et1.text),rex="/(.+)(.{"+n+"}$)/";putLayerNameByIndex(Number(lList[z][0]),lList[z][1].toString().match(eval(rex))[1])}}if(win.g400.rb3.value){if(""==win.g410.et1.text||""==win.g410.et2.text)return void alert("No number has been entered!");if(Number(win.g410.et1.text)<1||Number(win.g410.et2.text)<1)return void alert("You can't remove zero characters!");if(win.close(0),win.g5.rb1.value)var lList=selIdxNames;else var lList=allIdxNames;for(var z in lList){var n=Number(win.g410.et1.text),r=Number(win.g410.et2.text),rex="/^(.{"+n+"})(.{"+r+"})(.+)/",parts=lList[z][1].toString().match(eval(rex)),newName=parts[1]+parts[3];putLayerNameByIndex(Number(lList[z][0]),newName)}}}if(win.g10.rb4.value){//Insert
if(""==win.g500.et1.text)return void alert("You have not entered a string!");if(""==win.g510.et1.text)return void alert("You must enter a start number!");if(win.close(0),win.g5.rb1.value)var lList=selIdxNames;else var lList=allIdxNames;for(var z in lList){var n=Number(win.g510.et1.text);n<1&&(n=1);var rex="/^(.{"+n+"})(.+)/",parts=lList[z][1].toString().match(eval(rex)),newName=parts[1]+win.g500.et1.text.toString()+parts[2];putLayerNameByIndex(Number(lList[z][0]),newName)}}if(win.g10.rb5.value){//Replace
if(""==win.g600.et1.text)return void alert("No replace value has been entered!");if(win.close(0),win.g620.cb1.value&&!win.g620.cb2.value)var changeFrom=new RegExp(win.g600.et1.text.toString(),"g");if(!win.g620.cb1.value&&win.g620.cb2.value)var changeFrom=new RegExp(win.g600.et1.text.toString(),"i");if(win.g620.cb1.value&&win.g620.cb2.value)var changeFrom=new RegExp(win.g600.et1.text.toString(),"gi");if(!win.g620.cb1.value&&!win.g620.cb2.value)var changeFrom=new RegExp(win.g600.et1.text.toString());if(win.g5.rb1.value)var lList=selIdxNames;else var lList=allIdxNames;for(var z in lList)changeFrom.test(lList[z][1].toString())&&putLayerNameByIndex(Number(lList[z][0]),lList[z][1].toString().replace(changeFrom,win.g610.et1.text.toString()))}}}catch(e){alert(e+" - "+e.line)}win.center(),win.show()}}function selectLayerByIndex(e,t){t=null==t?t=!1:t;var r=new ActionReference;r.putIndex(charIDToTypeID("Lyr "),e);var i=new ActionDescriptor;i.putReference(charIDToTypeID("null"),r),t&&i.putEnumerated(stringIDToTypeID("selectionModifier"),stringIDToTypeID("selectionModifierType"),stringIDToTypeID("addToSelection")),i.putBoolean(charIDToTypeID("MkVs"),!1);try{executeAction(charIDToTypeID("slct"),i,DialogModes.NO)}catch(e){}}function getLayerNameByIndex(e){var t=new ActionReference;return t.putProperty(charIDToTypeID("Prpr"),charIDToTypeID("Nm  ")),t.putIndex(charIDToTypeID("Lyr "),e),executeActionGet(t).getString(charIDToTypeID("Nm  "))}function selectAllLayers(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),e.putReference(charIDToTypeID("null"),t),executeAction(stringIDToTypeID("selectAllLayers"),e,DialogModes.NO)}function getSelectedLayersIdx(){var e=new Array;(a=new ActionReference).putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));var t=executeActionGet(a);if(t.hasKey(stringIDToTypeID("targetLayers")))for(var r=(t=t.getList(stringIDToTypeID("targetLayers"))).count,i=(e=new Array,0);i<r;i++)try{activeDocument.backgroundLayer,e.push(t.getReference(i).getIndex())}catch(r){e.push(t.getReference(i).getIndex()+1)}else{var a;(a=new ActionReference).putProperty(charIDToTypeID("Prpr"),charIDToTypeID("ItmI")),a.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));try{activeDocument.backgroundLayer,e.push(executeActionGet(a).getInteger(charIDToTypeID("ItmI"))-1)}catch(t){e.push(executeActionGet(a).getInteger(charIDToTypeID("ItmI")))}var n=app.activeDocument.activeLayer.visible;1==n&&(app.activeDocument.activeLayer.visible=!1);var o=new ActionDescriptor,s=new ActionList,l=new ActionReference;l.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),s.putReference(l),o.putList(charIDToTypeID("null"),s),executeAction(charIDToTypeID("Shw "),o,DialogModes.NO),0==app.activeDocument.activeLayer.visible&&e.shift(),app.activeDocument.activeLayer.visible=n}return e}function snapShot(){var e=new ActionDescriptor,t=new ActionReference;t.putClass(charIDToTypeID("SnpS")),e.putReference(charIDToTypeID("null"),t);var r=new ActionReference;r.putProperty(charIDToTypeID("HstS"),charIDToTypeID("CrnH")),e.putReference(charIDToTypeID("From"),r),e.putEnumerated(charIDToTypeID("Usng"),charIDToTypeID("HstS"),charIDToTypeID("FllD")),executeAction(charIDToTypeID("Mk  "),e,DialogModes.NO)}function putLayerNameByIndex(e,t){if(0!=e){var r=new ActionDescriptor,i=new ActionReference;i.putIndex(charIDToTypeID("Lyr "),e),r.putReference(charIDToTypeID("null"),i),r.putBoolean(charIDToTypeID("MkVs"),!1);var a=new ActionDescriptor;a.putString(charIDToTypeID("Nm  "),t),r.putObject(charIDToTypeID("T   "),charIDToTypeID("Lyr "),a),executeAction(charIDToTypeID("slct"),r,DialogModes.NO),executeAction(charIDToTypeID("setd"),r,DialogModes.NO)}}
/** **/
/* 11F-BW Rahmendicke */
/** **/
/********************************************/
/* 11F-BW RENAME LAYER "OLD" ****************/
/********************************************/
// bw_renameLayer_old();
function bw_renameLayer_old(){var e=doc.activeLayer.name;doc.activeLayer.name=e+" OLD"}function run__bw_renameLayer_old_allLayer(){doc.activeLayer.name="MAIN",bw_renameLayer_old_allLayer(app.activeDocument.activeLayer),gotoLayer("MAIN"),bw_renameLayer_old_allLayer2(app.activeDocument.activeLayer),gotoLayer("MAIN")}function bw_renameLayer_old_allLayer(e){for(var t=e.layers.length-1;t>=0;t--){var r=e.layers[t];if("LayerSet"==r.typename){var i=r.name;r.name=i+" OLD"}}}function bw_renameLayer_old_allLayer2(e){for(var t=e.layers.length-1;t>=0;t--){var r=e.layers[t];"LayerSet"==r.typename&&(thisLayerIDX=r.itemIndex,gotoLayer(thisLayerIDX),toogleOpenCloseSet(),hide())}}
/********************************************/
/* 11F-BW ResizeRahmen **********************/
/********************************************/
function run_resizeRahmen(e){app.activeDocument.suspendHistory("resizeRahmen "+e+" ","resizeRahmen('"+e+"');")}function resizeRahmen(e){gotoLayer("MAIN"),layer__FX_visibility(!1),gotoLayer(e),gotoLayer(layer_getChildIDXbyName(app.activeDocument.activeLayer,"hilf"));var t=layer__getWidthHeight()[0];gotoLayer(e+" OLD");var r=layer__getWidthHeight(),i=r[0],a=r[2],n=r[3];scale_faktor=dreisatz(t,i,100),gotoLayer(e),doc.activeLayer.resize(scale_faktor,scale_faktor),gotoLayer(layer_getChildIDXbyName(app.activeDocument.activeLayer,"hilf"));var o=layer__getWidthHeight(),s=o[2],l=o[3];gotoLayer(e),layer__transformXY(a-s,n-l),bw_log2(e),bw_log2(scale_faktor),run_scaleLayerFX(e,Number(scale_faktor.toFixed())),
// run_scaleLayerFX(__format, ___FXscale)
gotoLayer(e),toogleOpenCloseSet(),gotoLayer("MAIN"),layer__FX_visibility(!0)}function layer__getWidthHeight(){var e=doc.activeLayer;return[parseInt(e.bounds[2]-e.bounds[0]),parseInt(e.bounds[3]-e.bounds[1]),e.bounds[0],e.bounds[1]]}function dreisatz(e,t,r){return t/e*r}function layer__transformXY(e,t){var r=new ActionDescriptor,i=new ActionDescriptor,a=new ActionReference;a.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(s2t("null"),a),r.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSCorner0")),i.putUnitDouble(s2t("horizontal"),s2t("pixelsUnit"),e),i.putUnitDouble(s2t("vertical"),s2t("pixelsUnit"),t),r.putObject(s2t("offset"),s2t("offset"),i),r.putBoolean(s2t("linked"),!0),r.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),r,DialogModes.NO)}
// nicht gut: geht nicht auf die KindesKinder…
function layer_getChildIDXbyName(e,t){for(var r=e.layers.length-1;r>=0;r--){var i=e.layers[r];if("LayerSet"==i.typename&&i.name==t)return thisLayerIDX=i.itemIndex,thisLayerIDX}}
// "show" "hide" "toggle"
function layer__FX_visibility(e){var t=new ActionDescriptor,r=new ActionList,i=new ActionReference;i.putClass(s2t("layerEffects")),i.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(i),t.putList(s2t("null"),r),1==e?executeAction(s2t("show"),t,DialogModes.NO):0==e?executeAction(s2t("hide"),t,DialogModes.NO):"toggle"==e&&(isLayerFXVisible()?executeAction(s2t("hide"),t,DialogModes.NO):executeAction(s2t("show"),t,DialogModes.NO))}function bw_log2(e){var t="/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Bilderwelt_Moods_resize.log",r=File(t);r.exists||(r=new File(t));var i=File(t);i.open("a",void 0,void 0),i.encoding="UTF8",""!==i&&(
// log_file.writeln("-----------------------");
i.writeln(e),
// log_file.writeln("");
i.close())}
/********************************************/
/* 11F-BW ScaleLayerFX **********************/
/********************************************/
// run_scaleLayerFX("Quadrat", 20);
function run_scaleLayerFX(e,t){app.activeDocument.suspendHistory("scaleLayerFX "+e+t+" ","scaleLayerFX('"+e+"',"+t+");");
// app.activeDocument.suspendHistory("resizeRahmen " + __format + " ", "resizeRahmen('" + __format + "');");
}function scaleLayerFX(e,t){var r=layer_selectedIDX_get();gotoLayer(e),layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer,[],t),bw_log2("_FXscale: "+t),layer_selectedIDX_set(r)}function layer_loopChilden__scaleLayerFX(e,t,r){if(!t)t=new Array;for(var i=e.layers.length-1;i>=0;i--){var a=e.layers[i];
// apply the function to layersets;
"ArtLayer"==a.typename?("PP-Rahmen"==a.name&&(gotoLayer(a.itemIndex),scaleEffectsEvent(r),gotoLayer(getParentIDXfor(getActiveLayerIndex())),toogleOpenCloseSet()),t.push(a)):
// this line includes the layer groups;
(t=layer_loopChilden__scaleLayerFX(a,t,r)).push(a)}return t}
// layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, []);
// $.writeln(layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, []));
// scaleEffectsEvent(20);
function scaleEffectsEvent(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("scale"),s2t("percentUnit"),e),executeAction(s2t("scaleEffectsEvent"),t,DialogModes.NO)}
/********************************************/
/* 11F-BW Korrektur Rahmendicke *************/
/********************************************/
// run__bw_KorrekturRahmendicke(2);
// transform_inhaltsbewahrend(100, 99)
function getChildren(e){for(var t=e.layers.length,r=0;r<t;r++){var i=e.layers[r];"ArtLayer"==i.typename?$.writeln("ArtLayer: "+r+" "+i.name):($.writeln("LayerSet: "+r+" "+i.name),getChildren(i))}}function repareRahmendicke(e,t,r){
// zwischen 1 und unendlich; bewirkt einen leicht dickeren Rahmen als die Berechung
var i=layer_selectedIDX_get();gotoLayer("MAIN"),layer__FX_visibility(!1),gotoLayer(e);var a=hilf_getDimension2(app.activeDocument.activeLayer,"hilf_PP_rechts",[])[0][0];gotoLayer(e);var n=hilf_getDimension2(app.activeDocument.activeLayer,"hilf_SF_rechts",[])[0][0],o=dreisatz(t,r,a)/4.6,s=(a/(o=Math.pow(o,1))).toFixed(),l=dreisatz(t,r,n)/2.4,c=(n/(l=Math.pow(l,1))).toFixed();gotoLayer(e);var u=hilf_getDimension2(app.activeDocument.activeLayer,"Motiv",[])[0],p=u[0],y=u[1];return gotoLayer(e),goto_Children2(app.activeDocument.activeLayer,"PP-Rahmen",o,s,p,y),gotoLayer(e),goto_Children2(app.activeDocument.activeLayer,"SF-Rahmen",l,c,p,y),gotoLayer("MAIN"),layer__FX_visibility(!0),layer_selectedIDX_set(i)," "}
// const formate_array = [
//     "Panorama",
//     "4x3_hoch",
//     "4x3_quer",
//     "2x3_hoch",
//     "2x3_quer",
//     "DinA_hoch",
//     "DinA_quer",
//     "Quadrat"
// ]
// const mood_verhältnis = [
//     ["mood01", 2511, 150],
//     ["mood02", 2100, 50],
//     ["mood03", 1400, 150],
//     ["mood04", 520, 50],
//     ["mood05", 850, 80],
//     ["mood06", 5000, 300],
//     ["mood07", 750, 80],
//     ["mood08", 1200, 100],
//     ["mood09", 790, 50],
//     ["mood10", 950, 50],
//     ["mood11", 1555, 185],
//     ["mood12", 670, 80],
//     ["mood13", 1780, 60]
// ]
function run_mood_Rahmendicke(){var e=Number(GetFileNameOnly(app.activeDocument.name).replace(/mood/g,""))-1,t=mood_verhältnis[e][1],r=mood_verhältnis[e][2];motivFX(!1);for(var i=0;i<formate_array.length;i++)repareRahmendicke(formate_array[i],t,r);motivFX(!0),gotoLayer("MAIN")}
// motivFX(false);
// repareRahmendicke("Panorama", 2511, 150);
// repareRahmendicke("4x3_hoch", 2511, 150);
// repareRahmendicke("4x3_quer", 2511, 125);
// repareRahmendicke("2x3_hoch", 2511, 125);
// repareRahmendicke("2x3_quer", 2511, 125);
// repareRahmendicke("DinA_hoch", 2511, 125);
// repareRahmendicke("DinA_quer", 2511, 125);
// repareRahmendicke("Quadrat", 2511, 125);
// motivFX(true);
function motivFX(e){for(var t=layer_getIDXbyString("Motiv"),r=0;r<t.length;r++)gotoLayer(t[r]),layer__FX_visibility(e),gotoLayer(getParentIDXfor(getActiveLayerIndex())),toogleOpenCloseSet()}function hilf_getDimension2(e,t,r){if(!r)r=[];for(var i=e.layers.length,a=0;a<i;a++){var n=e.layers[a];"ArtLayer"==n.typename&&n.name==t?(gotoLayer(n.itemIndex),r.push(layer__getWidthHeight())):"LayerSet"==n.typename&&n.name==t?(gotoLayer(n.itemIndex),r.push(layer__getWidthHeight()),hilf_getDimension2(n,t,r)):"ArtLayer"==n.typename?r.push():(r.push(),hilf_getDimension2(n,t,r))}return r}
// function goto_Children2(theParent, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height) {
//     var childrenLength = theParent.layers.length;
//     for (var i = 0; i < childrenLength; i++) {
//         var theLayer = theParent.layers[i];
//         if (theLayer.typename == "ArtLayer") {
//             if (theLayer.name == _LayerName) {
//                 gotoLayer(theLayer.itemIndex);
//                 try {
//                     layer__FX_visibility(false);
//                 } catch (e) {}
//                 run__bw_KorrekturRahmendicke(___faktor);
//                 var rahmen_width_ist = layer__getWidthHeight()[0];
//                 var rahmen_height_ist = layer__getWidthHeight()[1];
//                 var transform_rahmen_width = (_motiv_width + (_width_hilf_after * 2)) * 100 / rahmen_width_ist;
//                 var transform_rahmen_height = (_motiv_height + (_width_hilf_after * 2)) * 100 / rahmen_height_ist;
//                 bw_transform_ContentAwareScale2(0, 0, transform_rahmen_width, transform_rahmen_height, true, 100);
//                 try {
//                     layer__FX_visibility(true);
//                 } catch (e) {}
//                 gotoLayer(getParentIDXfor(getActiveLayerIndex()));
//                 toogleOpenCloseSet();
//             }
//         } else {
//             goto_Children2(theLayer, _LayerName, ___faktor, _width_hilf_after, _motiv_width, _motiv_height);
//         }
//     }
//     return;
// }
function run__bw_KorrekturRahmendicke(e){doc.suspendHistory("Rahmendicke "+e,"bw_KorrekturRahmendicke("+e+");")}
// doc.suspendHistory('Rahmendicke 1.3', 'bw_KorrekturRahmendicke(1.3);')
function bw_KorrekturRahmendicke(e){var t=100*e,r=100/e;
// bw_transform_ContentAwareScale(0, 0, transform_ContentAwareScale_factor, transform_ContentAwareScale_factor, true, true, true, 100);
bw_transform_ContentAwareScale2(0,0,t,t,!0,100),bw_transform_free(0,0,r,r,!0)}function transform_inhaltsbewahrend(e,t){bw_transform_ContentAwareScale(0,0,e,t,!0,!0,!0,100)}function bw_transform_ContentAwareScale(e,t,r,i,a,n,o,s){var l=new ActionDescriptor,c=new ActionDescriptor,u=new ActionReference;u.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),l.putReference(s2t("null"),u),
// d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
l.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),c.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),e),c.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),t),l.putObject(s2t("offset"),s2t("offset"),c),l.putUnitDouble(s2t("width"),s2t("percentUnit"),r),l.putUnitDouble(s2t("height"),s2t("percentUnit"),i),l.putBoolean(s2t("linked"),a),l.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),l.putBoolean(s2t("contentAware"),o),l.putDouble(s2t("amount"),s),executeAction(s2t("transform"),l,DialogModes.NO)}function bw_transform_free(e,t,r,i,a){var n=new ActionDescriptor,o=new ActionDescriptor,s=new ActionReference;s.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),n.putReference(s2t("null"),s),
// d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
n.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),o.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),e),o.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),t),n.putObject(s2t("offset"),s2t("offset"),o),n.putUnitDouble(s2t("width"),s2t("percentUnit"),r),n.putUnitDouble(s2t("height"),s2t("percentUnit"),i),n.putBoolean(s2t("linked"),a),n.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),n,DialogModes.NO)}function bw_transform_ContentAwareScale2(e,t,r,i,a,n){var o=new ActionDescriptor,s=new ActionDescriptor,l=new ActionReference;l.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),o.putReference(s2t("null"),l),o.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),s.putUnitDouble(s2t("horizontal"),s2t("pixelsUnit"),e),s.putUnitDouble(s2t("vertical"),s2t("pixelsUnit"),t),o.putObject(s2t("offset"),s2t("offset"),s),o.putUnitDouble(s2t("width"),s2t("percentUnit"),r),o.putUnitDouble(s2t("height"),s2t("percentUnit"),i),o.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),o.putBoolean(s2t("contentAware"),a),o.putDouble(s2t("amount"),n),executeAction(s2t("transform"),o,DialogModes.NO)}
/** **/function run_run_resizeRahmen(){bw_log2("--------\n"+app.activeDocument.name),run_resizeRahmen("Panorama"),run_resizeRahmen("4x3_hoch"),run_resizeRahmen("4x3_quer"),run_resizeRahmen("2x3_hoch"),run_resizeRahmen("2x3_quer"),run_resizeRahmen("DinA_hoch"),run_resizeRahmen("DinA_quer"),run_resizeRahmen("Quadrat")}$.evalFile("/Users/simon/Library/Application Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx");const formate_array=["Panorama","4x3_hoch","4x3_quer","2x3_hoch","2x3_quer","DinA_hoch","DinA_quer","Quadrat"],mood_verhältnis=[["mood01",2511,130],["mood02",2100,65],["mood03",1400,130],["mood04",520,50],["mood05",850,50],["mood06",5e3,170],["mood07",750,55],["mood08",1200,90],["mood09",790,45],["mood10",950,40],["mood11",1555,150],["mood12",670,57],["mood13",1780,63]];
// run__bw_renameLayer_old_allLayer()
// run_run_resizeRahmen();
// run_mood_Rahmendicke();
// app.activeDocument.save();
// runALL_mood_Rahmendicke();
function runALL_mood_Rahmendicke(){for(var e=app.activeDocument,t=0;t<app.documents.length;t++){app.activeDocument=app.documents[t];var r=app.activeDocument;try{run_mood_Rahmendicke(),r.save()}catch(e){}}app.activeDocument=e}
// runALL_mood_Rahmendicke2();
function runALL_mood_Rahmendicke2(){const e=["mood01.psd","mood02.psd","mood03.psd"];for(var t=0;t<e.length;t++){var r=new File("/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Moods++++++++ (dick)/check/"+e[t]);app.open(r),run_mood_Rahmendicke(),app.activeDocument.save()}}
/**************/
/* NEXT TEST */
/**************/
// alert("ding");
// =======================================================
// ready_selectMotiv();
function ready_selectMotiv(){var e=layer_selectedIDX_get();try{selectMotiv(!1)}catch(e){layer_checkExistence2("Original")&&(gotoLayer("Original"),selectMotiv(!1))}layer_selectedIDX_set(e)}function layer_checkExistence2(e){try{var t=new ActionReference;t.putProperty(s2t("property"),s2t("itemIndex")),isNaN(e)?t.putName(s2t("layer"),e):t.putIndex(s2t("layer"),e);
// r.putIndex(s2t("layer"), _idx);
executeActionGet(t).getInteger(s2t("itemIndex"));return!0}catch(e){return!1}}function selectMotiv(e){var t=new ActionDescriptor;return t.putBoolean(s2t("sampleAllLayers"),e),executeAction(s2t("autoCutout"),t,DialogModes.NO),!0}
/**************/
/* NEXT TEST */
/**************/
// adjustLayer_levels_autoLevels_wrapper('autoContrast', f);
function adjustLayer_levels_autoLevels_wrapper2(e,t){var r=layer_selectedIDX_get();"LayerKind.LEVELS"==doc.activeLayer.kind?
// alert("ding")
makeVisible():layer_checkExistence("AutoTonwert")?(gotoLayer("AutoTonwert"),makeVisible()):alert("keine TonWert-Ebene ausgewählt bzw vorbereitet"),adjustLayer_levels_autoLevels2(e,t),layer_selectedIDX_set(r)}function adjustLayer_levels_autoLevels2(e,t){
/* reset levels */
adjustLayer_levels_edit(null);
/* set autoLevels option */
var r=new ActionDescriptor,i=new ActionDescriptor,a=new ActionDescriptor,n=new ActionList,o=new ActionReference,s=new ActionReference;o.putEnumerated(s2t("adjustmentLayer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(s2t("null"),o),s.putEnumerated(s2t("channel"),s2t("channel"),s2t("composite")),a.putReference(s2t("channel"),s),"autoContrast"==e&&a.putBoolean(s2t("autoContrast"),!0),"auto"==e&&a.putBoolean(s2t("auto"),!0),"autoBlackWhite"==e&&a.putBoolean(s2t("autoBlackWhite"),!0),"autoMachineLearning"==e&&(a.putBoolean(s2t("autoMachineLearning"),!0),a.putBoolean(s2t("autoFaces"),!0)),t&&a.putBoolean(s2t("autoNeutrals"),t),n.putObject(s2t("levelsAdjustment"),a),i.putList(s2t("adjustment"),n),r.putObject(s2t("to"),s2t("levels"),i),executeAction(s2t("set"),r,DialogModes.ALL)}
/**************/
/* NEXT TEST */
/**************/
// alert("dong");
// loopRahmendicke("2x3_quer", 2);
// layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, [], _FXscale);
const rahmen_faktors=[
// 0.3,
// 0.4,
// 0.6,
// 0.8,
1],formate_array2=[
// "Panorama",
// "4x3_hoch",
// "4x3_quer",
// "2x3_hoch",
"2x3_quer"],inputFile="/Users/simon/Arbeit/11Freunde/Merch/NEUE_Bilderrahmen_2019/Rahmen_Master__WandbildMoods++++export2.psb",outputFolder_main=new Folder("/Users/simon/Arbeit/11Freunde/Merch/NEUE_Bilderrahmen_2019/_export4");
// check_pano(3, 102, 1000, 400);
function check_pano(e,t,r,i){try{layer__FX_visibility(!1)}catch(e){}
// var _width_hilf_after = hilf_getDimension2(app.activeDocument.activeLayer, "hilf_PP_rechts", [])[0][0];
var a=100/e,n=100*e;bw_transform_ContentAwareScale2(0,0,a,a,!0,100),bw_transform_free(0,0,n,n,!0);var o=layer__getWidthHeight()[0],s=layer__getWidthHeight()[1];bw_transform_ContentAwareScale2(0,0,100*(r+2*t)/o,100*(i+2*t)/s,!0,100);try{layer__FX_visibility(!0)}catch(e){}}
/**************/
/****************************/
/*******************************************/
/********************************************************/
/* FUNCTIONS ********************************************************/
/********************************************************/
/*******************************************/
/****************************/
/**************/function run_loopRahmendicke(){time_start(),app.open(new File(inputFile));for(var e=0;e<rahmen_faktors.length;e++){for(var t=0;t<formate_array2.length;t++)$.writeln(formate_array2[t]+" // "+rahmen_faktors[e]),gotoLayer("cut__"+formate_array2[t]),loadSelectionOfMask(),BW_crop(),BW_deselectSelection(),loopRahmendicke(formate_array2[t],rahmen_faktors[e]),resetImage();resetImage()}resetImage(),time_stop(start)}function loopRahmendicke(e,t){var r=layer_selectedIDX_get();gotoLayer("MAIN"),layer__FX_visibility(!1),gotoLayer(e),makeVisible();var i=hilf_getDimension2(app.activeDocument.activeLayer,"hilf_PP_rechts",[])[0][0];gotoLayer(e);var a=i*t,n=hilf_getDimension2(app.activeDocument.activeLayer,"hilf_SF_rechts",[])[0][0]*t;gotoLayer(e);var o=hilf_getDimension2(app.activeDocument.activeLayer,"Motiv",[])[0],s=o[0],l=o[1];
// $.writeln("_faktor: " + _faktor);
// $.writeln("hilf_PP_width_after: " + hilf_PP_width_after);
// $.writeln("motiv_width: " + motiv_width);
// $.writeln("motiv_height: " + motiv_height);
// $.writeln("_format: " + _format);
return gotoLayer(e),goto_Children2(app.activeDocument.activeLayer,"PP-Rahmen",t,a,s,l,e),gotoLayer(e),goto_Children2(app.activeDocument.activeLayer,"SF-Rahmen",t,n,s,l,e),gotoLayer(e),hide(),gotoLayer("MAIN"),layer__FX_visibility(!1),layer_selectedIDX_set(r)," "}function hilf_getDimension2(e,t,r){if(!r)r=[];for(var i=e.layers.length,a=0;a<i;a++){var n=e.layers[a];"ArtLayer"==n.typename&&n.name==t?(gotoLayer(n.itemIndex),r.push(layer__getWidthHeight())):"LayerSet"==n.typename&&n.name==t?(gotoLayer(n.itemIndex),r.push(layer__getWidthHeight()),hilf_getDimension2(n,t,r)):"ArtLayer"==n.typename?r.push():(r.push(),hilf_getDimension2(n,t,r))}return r}
// "show" "hide" "toggle"
function layer__FX_visibility(e){var t=new ActionDescriptor,r=new ActionList,i=new ActionReference;i.putClass(s2t("layerEffects")),i.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(i),t.putList(s2t("null"),r),1==e?executeAction(s2t("show"),t,DialogModes.NO):0==e?executeAction(s2t("hide"),t,DialogModes.NO):"toggle"==e&&(isLayerFXVisible()?executeAction(s2t("hide"),t,DialogModes.NO):executeAction(s2t("show"),t,DialogModes.NO))}function goto_Children2(e,t,r,i,a,n,o){for(var s=e.layers.length,l=0;l<s;l++){var c=e.layers[l];if("ArtLayer"==c.typename){if(c.name==t){gotoLayer(c.itemIndex),makeVisible(),BW_deselectPath();try{layer__FX_visibility(!1)}catch(e){}run__bw_KorrekturRahmendicke(r);var u=layer__getWidthHeight()[0],p=layer__getWidthHeight()[1];bw_transform_ContentAwareScale2(0,0,100*(a+2*i)/u,100*(n+2*i)/p,!0,100);try{layer__FX_visibility(!0)}catch(e){}var y=c.parent.name,g=new Folder(outputFolder_main+"/"+o);
// SaveForWeb("PN24", outputFolder, __format + "__" + ParentName + "__" + ___faktor * 100, f, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
g.exists||g.create();var d=g+"/"+o+"__"+y+"__"+100*r;
// savePSD_v2(new File(file_RGB), t, t, t, f);
$.writeln(o+"__"+y+"__"+100*r),saveOptions=new TiffSaveOptions,saveOptions.embedColorProfile=!0,saveOptions.alphaChannels=!1,saveOptions.layers=!1,saveOptions.byteOrder=ByteOrder.IBM,saveOptions.annotations=!1,saveOptions.transparency=!0,saveOptions.imageCompression=TIFFEncoding.TIFFLZW,
// saveOptions.imageCompression = TIFFEncoding.TIFFZIP;
clearAllGuides(),app.activeDocument.saveAs(new File(d),saveOptions,!0),hide(),gotoLayer(getParentIDXfor(getActiveLayerIndex())),toogleOpenCloseSet()}}else goto_Children2(c,t,r,i,a,n,o)}}function layer__getWidthHeight(){var e=app.activeDocument.activeLayer;return[parseInt(e.bounds[2]-e.bounds[0]),parseInt(e.bounds[3]-e.bounds[1]),e.bounds[0],e.bounds[1]]}function run__bw_KorrekturRahmendicke(e){app.activeDocument.suspendHistory("Rahmendicke "+e,"bw_KorrekturRahmendicke("+e+");")}function bw_KorrekturRahmendicke(e){var t=100/e,r=100*e;bw_transform_ContentAwareScale2(0,0,t,t,!0,100),bw_transform_free(0,0,r,r,!0)}function bw_transform_free(e,t,r,i,a){var n=new ActionDescriptor,o=new ActionDescriptor,s=new ActionReference;s.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),n.putReference(s2t("null"),s),
// d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
n.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),o.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),e),o.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),t),n.putObject(s2t("offset"),s2t("offset"),o),n.putUnitDouble(s2t("width"),s2t("percentUnit"),r),n.putUnitDouble(s2t("height"),s2t("percentUnit"),i),n.putBoolean(s2t("linked"),a),n.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),n,DialogModes.NO)}function bw_transform_ContentAwareScale2(e,t,r,i,a,n){var o=new ActionDescriptor,s=new ActionDescriptor,l=new ActionReference;l.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),o.putReference(s2t("null"),l),o.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),s.putUnitDouble(s2t("horizontal"),s2t("pixelsUnit"),e),s.putUnitDouble(s2t("vertical"),s2t("pixelsUnit"),t),o.putObject(s2t("offset"),s2t("offset"),s),o.putUnitDouble(s2t("width"),s2t("percentUnit"),r),o.putUnitDouble(s2t("height"),s2t("percentUnit"),i),o.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),o.putBoolean(s2t("contentAware"),a),o.putDouble(s2t("amount"),n),executeAction(s2t("transform"),o,DialogModes.NO)}function clearAllGuides(){executeAction(sTID("clearAllGuides"),void 0,DialogModes.NO)}
// =======================================================
function BW_deselectPath(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(s2t("path"),s2t("ordinal"),s2t("targetEnum")),e.putReference(s2t("null"),t),executeAction(s2t("deselect"),e,DialogModes.NO)}
// =======================================================
function BW_crop(){var e=new ActionDescriptor;e.putBoolean(s2t("delete"),!0),executeAction(s2t("crop"),e,DialogModes.NO)}
// =======================================================
function BW_deselectSelection(){var e=new ActionDescriptor,t=new ActionReference;t.putProperty(s2t("channel"),s2t("selection")),e.putReference(s2t("null"),t),e.putEnumerated(s2t("to"),s2t("ordinal"),s2t("none")),executeAction(s2t("set"),e,DialogModes.NO)}outputFolder_main.exists||outputFolder_main.create(),run_loopRahmendicke();