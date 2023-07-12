/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Wandbild Moods Vorarbeit</name>
<about>ToD | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
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
/**************/
/****************************/
/*******************************************/
/********************************************************/
/* RUN ********************************************************/
/********************************************************/
/*******************************************/
/****************************/
/**************/
// run__bw_renameLayer_old_allLayer()
// run_run_resizeRahmen();
// run_mood_Rahmendicke();
// app.activeDocument.save();
// runALL_mood_Rahmendicke();
// runALL_mood_Rahmendicke2();
// resizeRahmen("2x3_quer");
// alert("ding");
/********************************************/
/* 11F-BW RENAME LAYER "OLD" ****************/
/********************************************/
// bw_renameLayer_old();
function bw_renameLayer_old(){var e=doc.activeLayer.name;doc.activeLayer.name=e+" OLD"}function run__bw_renameLayer_old_allLayer(){doc.activeLayer.name="MAIN",bw_renameLayer_old_allLayer(app.activeDocument.activeLayer),gotoLayer("MAIN"),bw_renameLayer_old_allLayer2(app.activeDocument.activeLayer),gotoLayer("MAIN")}function bw_renameLayer_old_allLayer(e){for(var t=e.layers.length-1;t>=0;t--){var r=e.layers[t];if("LayerSet"==r.typename){var a=r.name;r.name=a+" OLD"}}}function bw_renameLayer_old_allLayer2(e){for(var t=e.layers.length-1;t>=0;t--){var r=e.layers[t];"LayerSet"==r.typename&&(thisLayerIDX=r.itemIndex,gotoLayer(thisLayerIDX),toogleOpenCloseSet(),hide())}}
/********************************************/
/* 11F-BW ResizeRahmen **********************/
/********************************************/
function run_resizeRahmen(e){app.activeDocument.suspendHistory("resizeRahmen "+e+" ","resizeRahmen('"+e+"');")}function resizeRahmen(e){gotoLayer("MAIN"),layer__FX_visibility(!1),gotoLayer(e),gotoLayer(layer_getChildIDXbyName(app.activeDocument.activeLayer,"hilf"));var t=layer__getWidthHeight()[0];gotoLayer(e+" OLD");var r=layer__getWidthHeight(),a=r[0],n=r[2],o=r[3];scale_faktor=dreisatz(t,a,100),gotoLayer(e),doc.activeLayer.resize(scale_faktor,scale_faktor),gotoLayer(layer_getChildIDXbyName(app.activeDocument.activeLayer,"hilf"));var i=layer__getWidthHeight(),s=i[2],c=i[3];gotoLayer(e),layer__transformXY(n-s,o-c),bw_log2(e),bw_log2(scale_faktor),run_scaleLayerFX(e,Number(scale_faktor.toFixed())),
// run_scaleLayerFX(__format, ___FXscale)
gotoLayer(e),toogleOpenCloseSet(),gotoLayer("MAIN"),layer__FX_visibility(!0)}function layer__getWidthHeight(){var e=doc.activeLayer;return[parseInt(e.bounds[2]-e.bounds[0]),parseInt(e.bounds[3]-e.bounds[1]),e.bounds[0],e.bounds[1]]}function dreisatz(e,t,r){return t/e*r}function layer__transformXY(e,t){var r=new ActionDescriptor,a=new ActionDescriptor,n=new ActionReference;n.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(s2t("null"),n),r.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSCorner0")),a.putUnitDouble(s2t("horizontal"),s2t("pixelsUnit"),e),a.putUnitDouble(s2t("vertical"),s2t("pixelsUnit"),t),r.putObject(s2t("offset"),s2t("offset"),a),r.putBoolean(s2t("linked"),!0),r.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),r,DialogModes.NO)}
// nicht gut: geht nicht auf die KindesKinder…
function layer_getChildIDXbyName(e,t){for(var r=e.layers.length-1;r>=0;r--){var a=e.layers[r];if("LayerSet"==a.typename&&a.name==t)return thisLayerIDX=a.itemIndex,thisLayerIDX}}
// "show" "hide" "toggle"
function layer__FX_visibility(e){var t=new ActionDescriptor,r=new ActionList,a=new ActionReference;a.putClass(s2t("layerEffects")),a.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),r.putReference(a),t.putList(s2t("null"),r),1==e?executeAction(s2t("show"),t,DialogModes.NO):0==e?executeAction(s2t("hide"),t,DialogModes.NO):"toggle"==e&&(isLayerFXVisible()?executeAction(s2t("hide"),t,DialogModes.NO):executeAction(s2t("show"),t,DialogModes.NO))}function bw_log2(e){var t="/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Bilderwelt_Moods_resize.log",r=File(t);r.exists||(r=new File(t));var a=File(t);a.open("a",void 0,void 0),a.encoding="UTF8",""!==a&&(
// log_file.writeln("-----------------------");
a.writeln(e),
// log_file.writeln("");
a.close())}
/********************************************/
/* 11F-BW ScaleLayerFX **********************/
/********************************************/
// run_scaleLayerFX("Quadrat", 20);
function run_scaleLayerFX(e,t){app.activeDocument.suspendHistory("scaleLayerFX "+e+t+" ","scaleLayerFX('"+e+"',"+t+");");
// app.activeDocument.suspendHistory("resizeRahmen " + __format + " ", "resizeRahmen('" + __format + "');");
}function scaleLayerFX(e,t){var r=layer_selectedIDX_get();gotoLayer(e),layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer,[],t),bw_log2("_FXscale: "+t),layer_selectedIDX_set(r)}function layer_loopChilden__scaleLayerFX(e,t,r){if(!t)t=new Array;for(var a=e.layers.length-1;a>=0;a--){var n=e.layers[a];
// apply the function to layersets;
"ArtLayer"==n.typename?("PP-Rahmen"==n.name&&(gotoLayer(n.itemIndex),scaleEffectsEvent(r),gotoLayer(getParentIDXfor(getActiveLayerIndex())),toogleOpenCloseSet()),t.push(n)):
// this line includes the layer groups;
(t=layer_loopChilden__scaleLayerFX(n,t,r)).push(n)}return t}
// layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, []);
// $.writeln(layer_loopChilden__scaleLayerFX(app.activeDocument.activeLayer, []));
// scaleEffectsEvent(20);
function scaleEffectsEvent(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("scale"),s2t("percentUnit"),e),executeAction(s2t("scaleEffectsEvent"),t,DialogModes.NO)}
/********************************************/
/* 11F-BW Korrektur Rahmendicke *************/
/********************************************/
// run__bw_KorrekturRahmendicke(2);
// transform_inhaltsbewahrend(100, 99)
function getChildren(e){for(var t=e.layers.length,r=0;r<t;r++){var a=e.layers[r];"ArtLayer"==a.typename?$.writeln("ArtLayer: "+r+" "+a.name):($.writeln("LayerSet: "+r+" "+a.name),getChildren(a))}}function repareRahmendicke(e,t,r){
// zwischen 1 und unendlich; bewirkt einen leicht dickeren Rahmen als die Berechung
var a=layer_selectedIDX_get();gotoLayer("MAIN"),layer__FX_visibility(!1),gotoLayer(e);var n=hilf_getDimension2(app.activeDocument.activeLayer,"hilf_PP_rechts",[])[0][0];gotoLayer(e);var o=hilf_getDimension2(app.activeDocument.activeLayer,"hilf_SF_rechts",[])[0][0],i=dreisatz(t,r,n)/4.6,s=(n/(i=Math.pow(i,1))).toFixed(),c=dreisatz(t,r,o)/2.4,l=(o/(c=Math.pow(c,1))).toFixed();gotoLayer(e);var u=hilf_getDimension2(app.activeDocument.activeLayer,"Motiv",[])[0],m=u[0],_=u[1];return gotoLayer(e),goto_Children2(app.activeDocument.activeLayer,"PP-Rahmen",i,s,m,_),gotoLayer(e),goto_Children2(app.activeDocument.activeLayer,"SF-Rahmen",c,l,m,_),gotoLayer("MAIN"),layer__FX_visibility(!0),layer_selectedIDX_set(a)," "}
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
function run_mood_Rahmendicke(){var e=Number(GetFileNameOnly(app.activeDocument.name).replace(/mood/g,""))-1,t=mood_verhältnis[e][1],r=mood_verhältnis[e][2];motivFX(!1);for(var a=0;a<formate_array.length;a++)repareRahmendicke(formate_array[a],t,r);motivFX(!0),gotoLayer("MAIN")}
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
function motivFX(e){for(var t=layer_getIDXbyString("Motiv"),r=0;r<t.length;r++)gotoLayer(t[r]),layer__FX_visibility(e),gotoLayer(getParentIDXfor(getActiveLayerIndex())),toogleOpenCloseSet()}function hilf_getDimension2(e,t,r){if(!r)r=[];for(var a=e.layers.length,n=0;n<a;n++){var o=e.layers[n];"ArtLayer"==o.typename&&o.name==t?(gotoLayer(o.itemIndex),r.push(layer__getWidthHeight())):"LayerSet"==o.typename&&o.name==t?(gotoLayer(o.itemIndex),r.push(layer__getWidthHeight()),hilf_getDimension2(o,t,r)):"ArtLayer"==o.typename?r.push():(r.push(),hilf_getDimension2(o,t,r))}return r}function goto_Children2(e,t,r,a,n,o){for(var i=e.layers.length,s=0;s<i;s++){var c=e.layers[s];if("ArtLayer"==c.typename){if(c.name==t){gotoLayer(c.itemIndex);try{layer__FX_visibility(!1)}catch(e){}run__bw_KorrekturRahmendicke(r),bw_transform_ContentAwareScale2(0,0,100*(n+2*a)/layer__getWidthHeight()[0],100*(o+2*a)/layer__getWidthHeight()[1],!0,100);try{layer__FX_visibility(!0)}catch(e){}gotoLayer(getParentIDXfor(getActiveLayerIndex())),toogleOpenCloseSet()}}else goto_Children2(c,t,r,a,n,o)}}function run__bw_KorrekturRahmendicke(e){doc.suspendHistory("Rahmendicke "+e,"bw_KorrekturRahmendicke("+e+");")}
// doc.suspendHistory('Rahmendicke 1.3', 'bw_KorrekturRahmendicke(1.3);')
function bw_KorrekturRahmendicke(e){var t=100*e,r=100/e;
// bw_transform_ContentAwareScale(0, 0, transform_ContentAwareScale_factor, transform_ContentAwareScale_factor, true, true, true, 100);
bw_transform_ContentAwareScale2(0,0,t,t,!0,100),bw_transform_free(0,0,r,r,!0)}function transform_inhaltsbewahrend(e,t){bw_transform_ContentAwareScale(0,0,e,t,!0,!0,!0,100)}function bw_transform_ContentAwareScale(e,t,r,a,n,o,i,s){var c=new ActionDescriptor,l=new ActionDescriptor,u=new ActionReference;u.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),c.putReference(s2t("null"),u),
// d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
c.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),l.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),e),l.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),t),c.putObject(s2t("offset"),s2t("offset"),l),c.putUnitDouble(s2t("width"),s2t("percentUnit"),r),c.putUnitDouble(s2t("height"),s2t("percentUnit"),a),c.putBoolean(s2t("linked"),n),c.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),c.putBoolean(s2t("contentAware"),i),c.putDouble(s2t("amount"),s),executeAction(s2t("transform"),c,DialogModes.NO)}function bw_transform_free(e,t,r,a,n){var o=new ActionDescriptor,i=new ActionDescriptor,s=new ActionReference;s.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),o.putReference(s2t("null"),s),
// d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
o.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),i.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),e),i.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),t),o.putObject(s2t("offset"),s2t("offset"),i),o.putUnitDouble(s2t("width"),s2t("percentUnit"),r),o.putUnitDouble(s2t("height"),s2t("percentUnit"),a),o.putBoolean(s2t("linked"),n),o.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),o,DialogModes.NO)}function bw_transform_ContentAwareScale2(e,t,r,a,n,o){var i=new ActionDescriptor,s=new ActionDescriptor,c=new ActionReference;c.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),i.putReference(s2t("null"),c),i.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),s.putUnitDouble(s2t("horizontal"),s2t("pixelsUnit"),e),s.putUnitDouble(s2t("vertical"),s2t("pixelsUnit"),t),i.putObject(s2t("offset"),s2t("offset"),s),i.putUnitDouble(s2t("width"),s2t("percentUnit"),r),i.putUnitDouble(s2t("height"),s2t("percentUnit"),a),i.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),i.putBoolean(s2t("contentAware"),n),i.putDouble(s2t("amount"),o),executeAction(s2t("transform"),i,DialogModes.NO)}
/** **/function run_run_resizeRahmen(){bw_log2("--------\n"+app.activeDocument.name),run_resizeRahmen("Panorama"),run_resizeRahmen("4x3_hoch"),run_resizeRahmen("4x3_quer"),run_resizeRahmen("2x3_hoch"),run_resizeRahmen("2x3_quer"),run_resizeRahmen("DinA_hoch"),run_resizeRahmen("DinA_quer"),run_resizeRahmen("Quadrat")}bw_KorrekturRahmendicke(2);const formate_array=["Panorama","4x3_hoch","4x3_quer","2x3_hoch","2x3_quer","DinA_hoch","DinA_quer","Quadrat"],mood_verhältnis=[["mood01",2511,130],["mood02",2100,65],["mood03",1400,130],["mood04",520,50],["mood05",850,50],["mood06",5e3,170],["mood07",750,55],["mood08",1200,90],["mood09",790,45],["mood10",950,40],["mood11",1555,150],["mood12",670,57],["mood13",1780,63]];function runALL_mood_Rahmendicke(){for(var e=app.activeDocument,t=0;t<app.documents.length;t++){app.activeDocument=app.documents[t];var r=app.activeDocument;try{run_mood_Rahmendicke(),r.save()}catch(e){}}app.activeDocument=e}function runALL_mood_Rahmendicke2(){const e=["mood01.psd","mood02.psd","mood03.psd"];for(var t=0;t<e.length;t++){var r=new File("/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Moods++++++++ (dick)/check/"+e[t]);app.open(r),run_mood_Rahmendicke(),app.activeDocument.save()}}