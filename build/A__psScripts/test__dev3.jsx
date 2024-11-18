//@include "./assets/json2.js";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview_v2.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/selection.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/channel.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/neural_depthmap.jsx";
/** Variablen  **************************************************************/
//@include "./assets/json2.js"
var jsonFilePath="~/.ss_settings.json",jsonData=loadJSON(jsonFilePath);
// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(t){var e,n=new File(t);if(!n.exists)return alert("Die JSON-Datei konnte nicht gefunden werden."),null;n.open("r"),e=n.read(),n.close();
// Parse JSON-Inhalt
try{return JSON.parse(e)}catch(t){return alert("Fehler beim Parsen der JSON-Datei:\n"+t),null}}
// Funktion zum Finden eines Wertes in einem Array von Objekten
function jsonValue(t){for(var e=0;e<jsonData.length;e++)if(void 0!==jsonData[e][t])return jsonData[e][t];return null}
/** Optionen  **************************************************************/const debug=Boolean(jsonValue("Debug"));
// /***************************************************************************/
// var ruleUnit_gigapixel_temp = app.preferences.rulerUnits;
// app.preferences.rulerUnits = Units.PIXELS;
// $.writeln(app.activeDocument.width)
// app.preferences.rulerUnits = ruleUnit_gigapixel_temp;
// try {
//     // var check = getMeta_3("idDocName");
//     var check = undefined;
// } catch (error) {
//     alert(e)
// }
// if(check) {
//     $.writeln(check)
// } else {
//     $.writeln("ding")
// }
//Rectangle Tool
// make(255, 255, 255, 1, 161.129555, 715.505848, 906.942259, 1886.407077, 0, 0, 0, 0, 2, false, true, 1, 0, 100, false, false, 100, 0.029538, 0.055804, -0.011992, 355.599991, 45);
function make(t,e,n,o,i,r,s,a,l,u,p,c,D,b,y,d,g,f,m,h,S,U,L,A,k,v){var w=function(t){return app.stringIDToTypeID(t)},C=new ActionDescriptor,O=new ActionDescriptor,x=new ActionDescriptor,j=new ActionDescriptor,R=new ActionDescriptor,E=new ActionDescriptor,T=new ActionDescriptor,B=new ActionDescriptor,M=new ActionList,I=new ActionReference;I.putClass(w("contentLayer")),T.putReference(w("null"),I),O.putDouble(w("red"),t),O.putDouble(w("grain"),e),O.putDouble(w("blue"),n),C.putObject(w("color"),w("RGBColor"),O),B.putObject(w("type"),w("solidColorLayer"),C),x.putInteger(w("unitValueQuadVersion"),o),x.putUnitDouble(w("top"),w("pixelsUnit"),i),x.putUnitDouble(w("left"),w("pixelsUnit"),r),x.putUnitDouble(w("bottom"),w("pixelsUnit"),s),x.putUnitDouble(w("right"),w("pixelsUnit"),a),x.putUnitDouble(w("topRight"),w("pixelsUnit"),l),x.putUnitDouble(w("topLeft"),w("pixelsUnit"),u),x.putUnitDouble(w("bottomLeft"),w("pixelsUnit"),p),x.putUnitDouble(w("bottomRight"),w("pixelsUnit"),c),B.putObject(w("shape"),w("rectangle"),x),j.putInteger(w("strokeStyleVersion"),D),j.putBoolean(w("strokeEnabled"),b),j.putBoolean(w("fillEnabled"),y),j.putUnitDouble(w("strokeStyleLineWidth"),w("pixelsUnit"),d),j.putUnitDouble(w("strokeStyleLineDashOffset"),w("pointsUnit"),g),j.putDouble(w("strokeStyleMiterLimit"),f),j.putEnumerated(w("strokeStyleLineCapType"),w("strokeStyleLineCapType"),w("strokeStyleButtCap")),j.putEnumerated(w("strokeStyleLineJoinType"),w("strokeStyleLineJoinType"),w("strokeStyleMiterJoin")),j.putEnumerated(w("strokeStyleLineAlignment"),w("strokeStyleLineAlignment"),w("strokeStyleAlignCenter")),j.putBoolean(w("strokeStyleScaleLock"),m),j.putBoolean(w("strokeStyleStrokeAdjust"),h),j.putList(w("strokeStyleLineDashSet"),M),j.putEnumerated(w("strokeStyleBlendMode"),w("blendMode"),w("normal")),j.putUnitDouble(w("strokeStyleOpacity"),w("percentUnit"),S),E.putDouble(w("redFloat"),U),E.putDouble(w("greenFloat"),L),E.putDouble(w("blueFloat"),A),R.putObject(w("color"),w("RGBColor"),E),j.putObject(w("strokeStyleContent"),w("solidColorLayer"),R),j.putDouble(w("strokeStyleResolution"),k),B.putObject(w("strokeStyle"),w("strokeStyle"),j),T.putObject(w("using"),w("contentLayer"),B),T.putInteger(w("layerID"),v),executeAction(w("make"),T,DialogModes.NO)}
// =======================================================
// make(127, 111, 111, 1, 10, 30, 50, 100);
var rectangleTop=7.8901213091,rectangleLeft=2.8753896499,rectangleBottom=83.6977036271,rectangleRight=88.4559117911;
// form_create("rectangle", rectangleTop, rectangleLeft, rectangleBottom, rectangleRight);
// _form "rectangle" , "ellipse"
function form_create(t,e,n,o,i){var r=new ActionDescriptor,s=new ActionDescriptor,a=new ActionDescriptor,l=new ActionDescriptor,u=new ActionDescriptor,p=new ActionReference;p.putClass(s2t("contentLayer")),r.putReference(s2t("null"),p),l.putDouble(s2t("red"),255),l.putDouble(s2t("grain"),255),l.putDouble(s2t("blue"),255),a.putObject(s2t("color"),s2t("RGBColor"),l),s.putObject(s2t("type"),s2t("solidColorLayer"),a),u.putUnitDouble(s2t("top"),s2t("percentUnit"),e),u.putUnitDouble(s2t("left"),s2t("percentUnit"),n),u.putUnitDouble(s2t("bottom"),s2t("percentUnit"),o),u.putUnitDouble(s2t("right"),s2t("percentUnit"),i),s.putObject(s2t("shape"),s2t(t),u),r.putObject(s2t("using"),s2t("contentLayer"),s),executeAction(s2t("make"),r,DialogModes.NO)}
// =======================================================
// rotateEventEnum(-30);
// function rotateEventEnum(angle) {
// 	var descriptor = new ActionDescriptor();
// 	var reference = new ActionReference();
// 	reference.putEnumerated( s2t( "layer" ), s2t( "ordinal" ), s2t( "targetEnum" ));
// 	descriptor.putReference( s2t( "null" ), reference );
// 	descriptor.putUnitDouble( s2t( "angle" ), s2t( "angleUnit" ), angle );
// 	executeAction( s2t( "rotateEventEnum" ), descriptor, DialogModes.NO );
// }
// // create path
// var d = new ActionDescriptor();
// var r = new ActionReference();
// r.putProperty(stringIDToTypeID("path"), stringIDToTypeID("workPath"));
// d.putReference(stringIDToTypeID("null"), r);
// var d1 = new ActionDescriptor();
// d1.putUnitDouble(stringIDToTypeID("top"), stringIDToTypeID("pixelsUnit"),    200);
// d1.putUnitDouble(stringIDToTypeID("left"), stringIDToTypeID("pixelsUnit"),   400);
// d1.putUnitDouble(stringIDToTypeID("bottom"), stringIDToTypeID("pixelsUnit"), 500);
// d1.putUnitDouble(stringIDToTypeID("right"), stringIDToTypeID("pixelsUnit"),  700);
// d.putObject(stringIDToTypeID("to"), stringIDToTypeID("rectangle"), d1);
// executeAction(stringIDToTypeID("set"), d, DialogModes.NO);
// // create fill layer
// var d = new ActionDescriptor();
// var r = new ActionReference();
// r.putClass(stringIDToTypeID("contentLayer"));
// d.putReference(stringIDToTypeID("null"), r);
// var d1 = new ActionDescriptor();
// var d2 = new ActionDescriptor();
// var d3 = new ActionDescriptor();
// d3.putDouble(stringIDToTypeID("red"),   100);
// d3.putDouble(stringIDToTypeID("green"), 150);
// d3.putDouble(stringIDToTypeID("blue"),  200);
// d2.putObject(stringIDToTypeID("color"), stringIDToTypeID("RGBColor"), d3);
// d1.putObject(stringIDToTypeID("type"), stringIDToTypeID("solidColorLayer"), d2);
// d.putObject(stringIDToTypeID("using"), stringIDToTypeID("contentLayer"), d1);
// executeAction(stringIDToTypeID("make"), d, DialogModes.NO);
// =======================================================
// changePathDetails(3, 355.599991, 0);
function changePathDetails(t,e,n){var o=function(t){return app.stringIDToTypeID(t)},i=new ActionDescriptor;i.putInteger(o("keyOriginType"),t),i.putDouble(o("keyOriginResolution"),e),i.putInteger(o("keyActionMode"),n),executeAction(o("changePathDetails"),i,DialogModes.NO)}
// =======================================================
// changePathDetails2(3, 1);
function changePathDetails2(t,e){var n=new ActionDescriptor;n.putInteger(s2t("keyOriginType"),t),n.putInteger(s2t("keyActionMode"),e),executeAction(s2t("changePathDetails"),n,DialogModes.NO)}s2t=stringIDToTypeID,(ref=new ActionReference).putProperty(s2t("property"),s2t("layerKind")),ref.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum"));var activeLayerType=executeActionGet(ref).getInteger(s2t("layerKind"));
// alert (activeLayerType)
// =======================================================
// transform(45.520361, 27.560856, true);
function transform(t,e){var n=new ActionDescriptor,o=new ActionDescriptor,i=new ActionReference;i.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),n.putReference(s2t("null"),i),n.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSCorner0")),o.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),t),o.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),e),n.putObject(s2t("offset"),s2t("offset"),o),
// d.putBoolean(s2t("linked"), linked);
n.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),n,DialogModes.NO)}
// =======================================================
// transform(0, 0, 11, true);
function transform(t,e,n){var o=new ActionDescriptor,i=new ActionDescriptor,r=new ActionReference;r.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),o.putReference(s2t("null"),r),o.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSCorner0")),i.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),t),i.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),e),o.putObject(s2t("offset"),s2t("offset"),i),o.putUnitDouble(s2t("angle"),s2t("angleUnit"),n),o.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),o,DialogModes.NO)}function calculateAngle(t,e,n,o){
// Berechne die Differenzen der Koordinaten
var i=o-e,r=n-t;
// Gib den Winkel in Grad zurück
return Math.atan2(i,r)*(180/Math.PI)}
// Koordinaten für P1 und P2
var x1=-45.5223191802766,y1=-27.555118111,x2=457.124593396448,y2=-71.5310247177696,angleXX=-1*calculateAngle(x1,y1,x2,y2);
// console.log("Steigungswinkel: " + angle + " Grad");
// alert("Steigungswinkel: " + angle + " Grad");
// gotoLayer("Rechteck 1");
// var r = app.preferences.rulerUnits;
// app.preferences.rulerUnits = Units.POINTS;
// // layer_transform2("topleft", 45.520361, 27.560856, 100, 100, "%_canvas", t, "distanceUnit", angleXX);
// layer_transform("topleft", 45.5223191802766, 27.555118111, 100, 100, "%_canvas", t, "distanceUnit", angleXX);
// app.preferences.rulerUnits = r;
function layer_transform2(t,e,n,o,i,r,s,a,l){var u=new ActionDescriptor,p=new ActionDescriptor,c=new ActionReference;
// alert("point " + _point + "\nmoveX " + _moveX + "\nmoveY " + _moveY + "\ntransformX " + _transformX + "\ntransformY " + _transformY + "\nunit " + _unit + "\nlinked " + _linked)
// die Positionierung ist leider buggy, oder??
if("topleft"==t)var D="QCSCorner0";else if("topcenter"==t)D="QCSSide0";else if("topright"==t)D="QCSCorner1";else if("midleft"==t)D="QCSSide3";else if("midcenter"==t)D="QCSAverage";else if("midright"==t)D="QCSSide1";else if("bottomleft"==t)D="QCSCorner3";else if("bottomcenter"==t)D="QCSSide2";else if("bottomright"==t)D="QCSCorner2";else D="QCSCorner0";if(a=a||"pixelsUnit",l=l||0,c.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),u.putReference(s2t("null"),c),u.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t(D)),p.putUnitDouble(s2t("horizontal"),s2t(a),e),p.putUnitDouble(s2t("vertical"),s2t(a),n),u.putObject(s2t("offset"),s2t("offset"),p),u.putUnitDouble(s2t("angle"),s2t("angleUnit"),-1*l),"%_canvas"==r){var b=app.activeDocument.activeLayer.bounds[2]-app.activeDocument.activeLayer.bounds[0],y=app.activeDocument.activeLayer.bounds[3]-app.activeDocument.activeLayer.bounds[1],d=parseFloat(app.activeDocument.width/b*o),g=parseFloat(app.activeDocument.height/y*i);
// alert(doc_layer_width + " " + doc_layer_height)
o&&u.putUnitDouble(s2t("width"),s2t("percentUnit"),d),i&&u.putUnitDouble(s2t("height"),s2t("percentUnit"),g)}else if("%_layer"==r){b=app.activeDocument.activeLayer.bounds[2]-app.activeDocument.activeLayer.bounds[0],y=app.activeDocument.activeLayer.bounds[3]-app.activeDocument.activeLayer.bounds[1],d=parseFloat(b/app.activeDocument.width*o*10),g=parseFloat(y/app.activeDocument.height*i*10);
// alert(doc_layer_width + " " + doc_layer_height);
o&&u.putUnitDouble(s2t("width"),s2t("percentUnit"),d),i&&u.putUnitDouble(s2t("height"),s2t("percentUnit"),g)}else if("px"==r){d=parseFloat(o/app.activeDocument.width*100),g=parseFloat(i/app.activeDocument.height*100);
// alert(doc_layer_width + " " + doc_layer_height)
o&&u.putUnitDouble(s2t("width"),s2t("percentUnit"),d),i&&u.putUnitDouble(s2t("height"),s2t("percentUnit"),g)}(o||i)&&s&&u.putBoolean(s2t("linked"),s),u.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),u,DialogModes.NO)}
/////////////////////////
// get Angle Shape
/////////////////////////
function getAngleofShape(){var e=layer_shape_getAngle("Beschnitt");$.writeln(e),selectLayers("selectAllLayers"),layer_transform("midcenter",0,0,void 0,void 0,void 0,t,"distanceUnit",-1*e),gotoLayer_bySelector("Beschnitt"),vectorMask2seletion(),crop_bySelection()}
// getAngleofShape();
/////////////////////////
// get Shape Dimension
/////////////////////////
function setBeschnitt(){startRulerUnits=app.preferences.rulerUnits,app.preferences.rulerUnits=Units.POINTS;
// $.writeln(layer_shape_getDimension("Beschnitt").topLeft.x);
// $.writeln(layer_shape_getDimension("Ansicht"));
var t,e,n,o,i,r,s,a,l,u,p,c,D,b,y,d,g,f,m,h,S,U=function(t,e){$.writeln("shapeDimension_beschnitt: "+t.topLeft.x);
// Bestimme die linke obere Ecke der Schnittmenge (maximales X und Y)
var n=Math.max(t.topLeft.x,e.topLeft.x),o=Math.max(t.topLeft.y,e.topLeft.y),i=Math.min(t.bottomRight.x,e.bottomRight.x),r=Math.min(t.bottomRight.y,e.bottomRight.y);
// Überprüfe, ob es eine tatsächliche Überlappung gibt
return n<i&&o<r?{topLeft:[n,o],bottomRight:[i,r],width:i-n,height:r-o}:null}
// Definiere die Koordinaten der beiden Rechtecke
// var rechteck1 = {
//     topLeft: [2.49991879915311, 3.01926095953795e-15],
//     bottomRight: [517.050147610598, 346.434202511378]
// };
// var rechteck2 = {
//     topLeft: [-92.9300393783724, 10.0016236913904],
//     bottomRight: [507.050472418418, 910.147755916525]
// };
// Berechne die Schnittmenge
// var schnittmenge = berechneSchnittmenge(rechteck1, rechteck2);
(L("Beschnitt"),L("Ansicht"));function L(t){
// Überprüfen, ob der Layer vom richtigen Typ ist
if(4===layer_getLayerType(t)){var e=layer_selectedIDX_get();gotoLayer_bySelector(t);var n=new ActionReference;n.putEnumerated(s2t("path"),s2t("ordinal"),s2t("targetEnum"));
// Iteriere über die Pfad-Komponenten, um die Punkte zu extrahieren
for(var o=executeActionGet(n).getObjectValue(s2t("pathContents")).getList(s2t("pathComponents")),i=[],r=0
// Pfaddaten erhalten
;r<o.count;r++)for(var s=o.getObjectValue(r).getList(s2t("subpathListKey")),a=0;a<s.count;a++)
// Extrahiere die Ankerpunkte
for(var l=s.getObjectValue(a).getList(s2t("points")),u=0;u<l.count;u++){var p=l.getObjectValue(u).getObjectValue(s2t("anchor")),c=p.getUnitDoubleValue(s2t("horizontal")),D=p.getUnitDoubleValue(s2t("vertical"));i.push({x:c,y:D})}
// Berechnung der minimalen und maximalen X- und Y-Koordinaten in ES3
for(var b=1/0,y=-1/0,d=1/0,g=-1/0,f=0;f<i.length;f++)i[f].x<b&&(b=i[f].x),i[f].x>y&&(y=i[f].x),i[f].y<d&&(d=i[f].y),i[f].y>g&&(g=i[f].y);
// Setze die Auswahl zurück und gebe die Koordinaten als topLeft und bottomRight zurück
return layer_selectedIDX_set(e),{topLeft:{x:b,y:d},bottomRight:{x:y,y:g}}}return!1}U?($.writeln("Schnittmenge gefunden:"),$.writeln("Oben links: X = "+U.topLeft[0]+", Y = "+U.topLeft[1]),$.writeln("Unten rechts: X = "+U.bottomRight[0]+", Y = "+U.bottomRight[1]),$.writeln("Breite: "+U.width),$.writeln("Höhe: "+U.height),t="rectangle",e=U.topLeft[1],n=U.topLeft[0],o=U.bottomRight[1],i=U.bottomRight[0],r=!1,s=[255,255,255],a=!0,l=[255,0,0],u=2,p="strokeStyleAlignOutside",c=new ActionDescriptor,D=new ActionDescriptor,b=new ActionDescriptor,y=new ActionDescriptor,d=new ActionDescriptor,g=new ActionDescriptor,f=new ActionDescriptor,m=new ActionDescriptor,h=new ActionList,(S=new ActionReference).putClass(s2t("contentLayer")),c.putReference(s2t("null"),S),y.putDouble(s2t("red"),s[0]),y.putDouble(s2t("grain"),s[1]),y.putDouble(s2t("blue"),s[2]),b.putObject(s2t("color"),s2t("RGBColor"),y),D.putObject(s2t("type"),s2t("solidColorLayer"),b),d.putInteger(s2t("unitValueQuadVersion"),1),d.putUnitDouble(s2t("top"),s2t("pointsUnit"),e),d.putUnitDouble(s2t("left"),s2t("pointsUnit"),n),d.putUnitDouble(s2t("bottom"),s2t("pointsUnit"),o),d.putUnitDouble(s2t("right"),s2t("pointsUnit"),i),D.putObject(s2t("shape"),s2t(t),d),g.putInteger(s2t("strokeStyleVersion"),2),g.putBoolean(s2t("strokeEnabled"),a),g.putBoolean(s2t("fillEnabled"),r),g.putUnitDouble(s2t("strokeStyleLineWidth"),s2t("pixelsUnit"),u),g.putUnitDouble(s2t("strokeStyleLineDashOffset"),s2t("pointsUnit"),0),g.putDouble(s2t("strokeStyleMiterLimit"),100),g.putEnumerated(s2t("strokeStyleLineCapType"),s2t("strokeStyleLineCapType"),s2t("strokeStyleButtCap")),g.putEnumerated(s2t("strokeStyleLineJoinType"),s2t("strokeStyleLineJoinType"),s2t("strokeStyleMiterJoin")),g.putEnumerated(s2t("strokeStyleLineAlignment"),s2t("strokeStyleLineAlignment"),s2t(p)),g.putBoolean(s2t("strokeStyleScaleLock"),!1),g.putBoolean(s2t("strokeStyleStrokeAdjust"),!1),g.putList(s2t("strokeStyleLineDashSet"),h),g.putEnumerated(s2t("strokeStyleBlendMode"),s2t("blendMode"),s2t("normal")),g.putUnitDouble(s2t("strokeStyleOpacity"),s2t("percentUnit"),100),m.putDouble(s2t("red"),l[0]),m.putDouble(s2t("grain"),l[1]),m.putDouble(s2t("blue"),l[2]),f.putObject(s2t("color"),s2t("RGBColor"),m),g.putObject(s2t("strokeStyleContent"),s2t("solidColorLayer"),f),D.putObject(s2t("strokeStyle"),s2t("strokeStyle"),g),c.putObject(s2t("using"),s2t("contentLayer"),D),executeAction(s2t("make"),c,DialogModes.NO)):$.writeln("Keine Schnittmenge vorhanden."),app.preferences.rulerUnits=startRulerUnits}
/////////////////////////
// Retouch4me
/////////////////////////
// pluginRun("Retouch4me Skin Mask.plugin", false, false);
// function pluginRun(name2, isFirstParty, Ijsx) {
// 	var descriptor = new ActionDescriptor();
// 	try {
// 		descriptor.putString(s2t("name"), name2);
// 		descriptor.putBoolean(s2t("isFirstParty"), isFirstParty);
// 		// descriptor.putBoolean(c2t("Ijsx"), Ijsx);
// 		executeAction(s2t("pluginRun"), descriptor, DialogModes.NO);
// 	} catch (error) {
// 		alert("error: " + error)
// 	}
// }
// Retouch4me DogdeBurn
// executeAction(sTID('a6e5704a-9dk2-02kl-bd6b-d0d7e8b09374'), undefined, DialogModes.ALL);
// Retouch4me SkinMask
// executeAction(sTID('a6e0kl2a-95ce-32d3-bd6b-93ma23632k91'), undefined, DialogModes.ALL);
select_haut(!0,"nicht Haut","Folder");
// function select_haut(_merge, _kind, _get) {
// 	// _merge = true || false
// 	// _kind = 'Haut' || 'nicht Haut'
// 	// _get = 'Selection' || 'Folder'
// 	var startIDXs = layer_selectedIDX_get();
// 	cancel = false;
// 	if (_merge) {
// 		layer_mergeVisible(_merge);
// 	} else {
// 		if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT" || doc.activeLayer.kind == "LayerKind.NORMAL") {
// 			layer_copyLayers(); //Ebenen kopieren (Apfel J)
// 			if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
// 				rasterSmartObject();
// 			}
// 			if (layer_selectedIDX_get().length > 1) {
// 				layer_mergeLayers(); //auf eine Ebene reduzieren (Apfel E)
// 			}
// 		} else {
// 			alert("Abruch\n Eine Haut-Makse von dieser Ebene kann nicht erstellt werden.");
// 			return;
// 		}
// 	}
// 	nameLayer("helper__hautMask_image");
// 	// move to TOP
// 	var i = hasBackground() ? 0 : 1;
// 	while (layer_checkExistence(i)) {
// 		i++;
// 	};
// 	moveLayer("helper__hautMask_image", parseInt(i - 1), "up");
// 	gotoLayer("helper__hautMask_image");
// 	// }
// 	selection_loop(function () {
// 		executeAction(sTID('a6e0kl2a-95ce-32d3-bd6b-93ma23632k91'), undefined, DialogModes.ALL);
// 	});
// 	select_layer();
// 	gotoLayer("helper__hautMask_image");
// 	layer_delete();
// 	if (!cancel) {
// 		if (_get == "Selection") {
// 			layer_selectedIDX_set(startIDXs);
// 			if (_kind == "nicht Haut") {
// 				select_invert();
// 			}
// 		} else {
// 			gotoLayer(startIDXs[startIDXs.length - 1])
// 			selection2mask(_kind);
// 			if (_kind == "nicht Haut") {
// 				gotoMask();
// 				invert();
// 				gotoFill();
// 			}
// 		}
// 	}
// }