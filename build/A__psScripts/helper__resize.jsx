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
function resize(){prefSave(),prefSet(DialogModes.NO,Units.PIXELS);try{try{gotoLayer("Original")}catch(e){alert("keine Ebene ‘Original‘ gefunden")}"LayerKind.SMARTOBJECT"!=doc.activeLayer.kind&&alert("Ebene ‘Original‘ ist kein SmartObjekt");var e=app.activeDocument.width;SmartObject_edit();var t=app.activeDocument.width,r=t/e;app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),doc.resizeImage(t,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0),getSmartFilterArray();for(var a=0;a<filterArray.length;a++)if("adaptCorrect"==filterArray[a][1])try{adjust_filter_TiefenLichter(r,filterArray[a][0]+1,filterArray[a][5],filterArray[a][6],filterArray[a][7],filterArray[a][8],filterArray[a][9],filterArray[a][10],filterArray[a][11],filterArray[a][12],filterArray[a][16],filterArray[a][17],filterArray[a][18],filterArray[a][19],filterArray[a][20],filterArray[a][21],filterArray[a][22],filterArray[a][23],filterArray[a][24],filterArray[a][25],filterArray[a][26],filterArray[a][27],filterArray[a][28],filterArray[a][29],filterArray[a][30],filterArray[a][31])}catch(e){}fixMaskLoop(r),fitScreen()}catch(e){}prefReset()}
//// FIX SMART FILTER
////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399
function getSmartFilterArray(){var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("smartObject")),e.putEnumerated(stringIDToTypeID("layer"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));var t=executeActionGet(e).getObjectValue(stringIDToTypeID("smartObject")).getList(stringIDToTypeID("filterFX"));filterArray=[];for(var r=0;r<t.count;r++){var a=t.getObjectValue(r),i=a.getObjectValue(stringIDToTypeID("filter")),s=typeIDToStringID(a.getObjectType(stringIDToTypeID("filter")));filterArray_inner=[],filterArray_inner.push(r,s);for(var n=0;n<i.count;n++){getSmartFilterValues(i,n);try{if(i.getObjectValue(i.getKey(n)))for(var l=typeIDToStringID(i.getKey(n)),y=(l=i.getObjectValue(stringIDToTypeID(l)),0);y<l.count;y++)getSmartFilterValues(l,y)}catch(e){}}filterArray.push(filterArray_inner)}}function getSmartFilterValues(e,t){var r=filterArray_inner,a=e.getKey(t);if(t2s(a))i=t2s(a);else var i=a;switch(e.getType(e.getKey(t))){case DescValueType.BOOLEANTYPE:var s=e.getBoolean(e.getKey(t));r.push(i,s);break;case DescValueType.CLASSTYPE:s=e.getClass(e.getKey(t));r.push(i,s);break;case DescValueType.DOUBLETYPE:s=e.getDouble(e.getKey(t));r.push(i,s);break;case DescValueType.ENUMERATEDTYPE:var n=typeIDToStringID(e.getEnumerationType(e.getKey(t)));s=typeIDToStringID(e.getEnumerationValue(e.getKey(t)));r.push(i,n,s);break;case DescValueType.INTEGERTYPE:s=e.getInteger(e.getKey(t));r.push(i,s);break;case DescValueType.LISTTYPE:s=e.getList(e.getKey(t));r.push(i,s);break;case DescValueType.OBJECTTYPE:var l=typeIDToStringID(e.getObjectType(e.getKey(t)));s=e.getObjectValue(e.getKey(t));r.push(i,l,s);break;case DescValueType.REFERENCETYPE:s=e.getReference(e.getKey(t));r.push(i,s);break;case DescValueType.STRINGTYPE:s=e.getString(e.getKey(t));r.push(i,s);break;case DescValueType.UNITDOUBLE:var y=typeIDToStringID(e.getUnitDoubleType(e.getKey(t)));s=e.getUnitDoubleValue(e.getKey(t));r.push(i,y,s)}}function adjust_filter_TiefenLichter(e,t,r,a,i,s,n,l,y,c,o,p,u,g,f,D,T,A,I,E,b,O,d,h,S,v){var V=new ActionDescriptor,m=new ActionDescriptor,j=new ActionDescriptor,K=new ActionDescriptor,L=new ActionDescriptor,k=new ActionReference;k.putIndex(s2t("filterFX"),t),k.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),j.putReference(s2t("null"),k),V.putUnitDouble(s2t(r),s2t(a),i),V.putUnitDouble(s2t(s),s2t(n),l),V.putInteger(s2t(y),Math.round(c*e)),L.putObject(s2t("shadowMode"),s2t("adaptCorrectTones"),V),m.putUnitDouble(s2t(o),s2t(p),u),m.putUnitDouble(s2t(g),s2t(f),D),m.putInteger(s2t(T),Math.round(A*e)),L.putObject(s2t("highlightMode"),s2t("adaptCorrectTones"),m),L.putDouble(s2t(I),E),L.putDouble(s2t(b),O),L.putInteger(s2t(d),h),L.putInteger(s2t(S),v),K.putObject(s2t("filter"),s2t("adaptCorrect"),L),j.putObject(s2t("filterFX"),s2t("filterFX"),K),executeAction(s2t("set"),j,DialogModes.NO)}resize(),fitScreen();