/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] resize</name>
<about>resize Original | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "functions/basic.jsx";
//@include "functions/utils.jsx";
//@include "functions/layer.jsx";
// prefSave();
// prefSet(DialogModes.NO, Units.PIXELS);
// try {
//     try {gotoLayer("Original")}
//     catch(e) {alert("keine Ebene ‘Original‘ gefunden")}
//     if (doc.activeLayer.kind != "LayerKind.SMARTOBJECT") {
//         alert("Ebene ‘Original‘ ist kein SmartObjekt");
//     }
//     SmartObject_edit();
//     var width = app.activeDocument.width;
//     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//     doc.resizeImage(width, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
// }
// catch(e) {}
// prefReset();
function resize(){prefSave(),prefSet(DialogModes.NO,Units.PIXELS);try{try{gotoLayer("Original")}catch(e){alert("keine Ebene ‘Original‘ gefunden")}"LayerKind.SMARTOBJECT"!=doc.activeLayer.kind&&alert("Ebene ‘Original‘ ist kein SmartObjekt");var e=app.activeDocument.width;SmartObject_edit();var t=app.activeDocument.width,r=t/e;app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),doc.resizeImage(t,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0),
// fixMaskLoop(width_faktor);
function(){try{for(var e=1;layer_checkExistence(e);)fixMask(e,1),e++}catch(e){alert("error "+e)}}();for(
// getSmartFilterArray();
var a=1;layer_checkExistence(a);){
// fixMask(i, 1);
gotoLayer(a);try{var i=getSmartFilterArray()}catch(e){i=[]}for(var n=0;n<i.length;n++)if("adaptCorrect"==i[n][1])try{adjust_filter_TiefenLichter(r,i[n][0]+1,i[n][5],i[n][6],i[n][7],i[n][8],i[n][9],i[n][10],i[n][11],i[n][12],i[n][16],i[n][17],i[n][18],i[n][19],i[n][20],i[n][21],i[n][22],i[n][23],i[n][24],i[n][25],i[n][26],i[n][27],i[n][28],i[n][29],i[n][30],i[n][31])}catch(e){}a++}fitScreen()}catch(e){}prefReset()}
//// FIX SMART FILTER
////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399
function getSmartFilterArray(){var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("smartObject")),e.putEnumerated(stringIDToTypeID("layer"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));var t=executeActionGet(e).getObjectValue(stringIDToTypeID("smartObject")).getList(stringIDToTypeID("filterFX"));filterArray=[];for(var r=0;r<t.count;r++){var a=t.getObjectValue(r),i=a.getObjectValue(stringIDToTypeID("filter")),n=typeIDToStringID(a.getObjectType(stringIDToTypeID("filter")));filterArray_inner=[],filterArray_inner.push(r,n);for(var s=0;s<i.count;s++){getSmartFilterValues(i,s);try{if(i.getObjectValue(i.getKey(s)))for(var c=typeIDToStringID(i.getKey(s)),o=(c=i.getObjectValue(stringIDToTypeID(c)),0);o<c.count;o++)getSmartFilterValues(c,o)}catch(e){}}filterArray.push(filterArray_inner)}}function getSmartFilterValues(e,t){var r=filterArray_inner,a=e.getKey(t);if(t2s(a))i=t2s(a);else var i=a;switch(e.getType(e.getKey(t))){case DescValueType.BOOLEANTYPE:var n=e.getBoolean(e.getKey(t));r.push(i,n);break;case DescValueType.CLASSTYPE:n=e.getClass(e.getKey(t));r.push(i,n);break;case DescValueType.DOUBLETYPE:n=e.getDouble(e.getKey(t));r.push(i,n);break;case DescValueType.ENUMERATEDTYPE:var s=typeIDToStringID(e.getEnumerationType(e.getKey(t)));n=typeIDToStringID(e.getEnumerationValue(e.getKey(t)));r.push(i,s,n);break;case DescValueType.INTEGERTYPE:n=e.getInteger(e.getKey(t));r.push(i,n);break;case DescValueType.LISTTYPE:n=e.getList(e.getKey(t));r.push(i,n);break;case DescValueType.OBJECTTYPE:var c=typeIDToStringID(e.getObjectType(e.getKey(t)));n=e.getObjectValue(e.getKey(t));r.push(i,c,n);break;case DescValueType.REFERENCETYPE:n=e.getReference(e.getKey(t));r.push(i,n);break;case DescValueType.STRINGTYPE:n=e.getString(e.getKey(t));r.push(i,n);break;case DescValueType.UNITDOUBLE:var o=typeIDToStringID(e.getUnitDoubleType(e.getKey(t)));n=e.getUnitDoubleValue(e.getKey(t));r.push(i,o,n)}}function adjust_filter_TiefenLichter(e,t,r,a,i,n,s,c,o,u,p,g,l,y,D,T,I,f,E,b,h,O,d,S,v,A){var V=new ActionDescriptor,m=new ActionDescriptor,j=new ActionDescriptor,K=new ActionDescriptor,k=new ActionDescriptor,L=new ActionReference;L.putIndex(s2t("filterFX"),t),L.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),j.putReference(s2t("null"),L),V.putUnitDouble(s2t(r),s2t(a),i),V.putUnitDouble(s2t(n),s2t(s),c),V.putInteger(s2t(o),Math.round(u*e)),k.putObject(s2t("shadowMode"),s2t("adaptCorrectTones"),V),m.putUnitDouble(s2t(p),s2t(g),l),m.putUnitDouble(s2t(y),s2t(D),T),m.putInteger(s2t(I),Math.round(f*e)),k.putObject(s2t("highlightMode"),s2t("adaptCorrectTones"),m),k.putDouble(s2t(E),b),k.putDouble(s2t(h),O),k.putInteger(s2t(d),S),k.putInteger(s2t(v),A),K.putObject(s2t("filter"),s2t("adaptCorrect"),k),j.putObject(s2t("filterFX"),s2t("filterFX"),K),executeAction(s2t("set"),j,DialogModes.NO)}resize(),fitScreen();