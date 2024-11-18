/** Variablen  **************************************************************/
//@include "./assets/json2.js"
var jsonFilePath="~/.ss_settings.json",jsonData=loadJSON(jsonFilePath);
// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(e){var n,t=new File(e);if(!t.exists)return alert("Die JSON-Datei konnte nicht gefunden werden."),null;t.open("r"),n=t.read(),t.close();
// Parse JSON-Inhalt
try{return JSON.parse(n)}catch(e){return alert("Fehler beim Parsen der JSON-Datei:\n"+e),null}}
// Funktion zum Finden eines Wertes in einem Array von Objekten
function jsonValue(e){for(var n=0;n<jsonData.length;n++)if(void 0!==jsonData[n][e])return jsonData[n][e];return null}
/** Optionen  **************************************************************/const debug=Boolean(jsonValue("Debug"));
/***************************************************************************/
// const { func } = require("prop-types");
function checkOut(e){app.activeDocument.managedImages[e].checkOut()}function checkIn(e){
// app.activeDocument.managedImages[index].create();
app.activeDocument.managedImages[e].pageItem[0].placeObject("65297"),
// app.activeDocument.selection[0].graphics[0].itemLink.update();
// app.activeDocument.managedImages[index].pageItem[0].replaceEnterpriseImage("65297");
// app.activeDocument.managedImages[index].pageItem[0].elvisPlace("65297");
app.activeDocument.managedImages[e].checkIn()}
// checkOut(1);
// checkIn(1);
//////////////////////////////////////////////////////////////////////////////
// var image = app.selection[0].images[0];
// var imageLink = app.selection[0].graphics[0].itemLink;
// var imagePath = imageLink.elvisFilePath
// var imageFile = new File(imagePath);
// alert("all done")
//////////////////////////////////////////////////////////////////////////////
// testDossier();
function testDossier(){var e=app.activeDocument,n=decodeURI(e.name),t=e.entWorkflow.defaultDossier;$.writeln(n),$.writeln(e.entWorkflow.defaultDossier),$.writeln(n),t?$.writeln("idDocDossier: yes"):$.writeln("idDocDossier: no");var r=function(e){var n="",t=e.lastIndexOf(".");n=-1==t?e:e.substr(0,t);return n}(decodeURI(n));$.writeln(r);r=r.replace(/^(.+)((-|_)\d{3})$/g,"$1");$.writeln(r)}
//////////////////////////////////////////////////////////////////////////////
// getDimension_1();
function getDimension_1(){if(app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var e=app.selection[0].parent;else e=app.selection[0];var n=app.activeDocument,t=n.viewPreferences.horizontalMeasurementUnits,r=n.viewPreferences.verticalMeasurementUnits;
// Aktuelle Einheiten speichern
// Einheiten auf Millimeter setzen
n.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.millimeters,n.viewPreferences.verticalMeasurementUnits=MeasurementUnits.millimeters,
// // Werte auslesen...
// var bounds = doc.selection[0].geometricBounds;
$.writeln("geometricBounds: "+e.geometricBounds),$.writeln("rotationAngle: "+e.rotationAngle),$.writeln("absoluteRotationAngle: "+e.absoluteRotationAngle),$.writeln("---"),$.writeln("geometricBounds_child: "+e.allPageItems[0].geometricBounds),$.writeln("rotationAngle_child: "+e.allPageItems[0].rotationAngle),$.writeln("absoluteRotationAngle_child: "+e.allPageItems[0].absoluteRotationAngle),$.writeln("---");for(var i=e.geometricBounds,a=[],o=0;o<i.length;o++)a.push(i[o].toFixed(3));
// mmBounds_outer.push(bounds_outer[i])
$.writeln(a);var s=e.allPageItems[0].geometricBounds,c=[];for(o=0;o<s.length;o++)c.push(s[o].toFixed(3));
// mmBounds_inner.push(bounds_inner[i])
$.writeln(c);var l=a[3]-a[1],p=a[2]-a[0];$.writeln("outer: "+l+"x"+p);var u=c[3]-c[1],v=c[2]-c[0];$.writeln("inner: "+u+"x"+v),l>u&&$.writeln("breite anbauen: "+(l-u)),p>v&&$.writeln("höhe anbauen: "+(p-v)),
// Einheiten zurücksetzen
n.viewPreferences.horizontalMeasurementUnits=t,n.viewPreferences.verticalMeasurementUnits=r}
//////////////////////////////////////////////////////////////////////////////
function naive_getDims(/*PageItem*/e,/*bool*/n){var t=e[(n?"visible":"geometric")+"Bounds"];
// width=right-left , height = bottom-top
return[t[3]-t[1],t[2]-t[0]]}
// sample code
// var pItem = app.selection[0]; // get the selected object
// $.writeln("---\n");
// $.writeln('Geometric Dims: ' + naive_getDims(pItem));
// $.writeln('Visible Dims: ' + naive_getDims(pItem, true));
//////////////////////////////////////////////////////////////////////////////
function improved_getDims(/*PageItem*/e,/*bool*/n){var t=(n?"visible":"geometric")+"Bounds",r=e.rotationAngle,i=e.shearAngle;
// store rotation/shear angles
// apply 'zero' angles (temporarily)
e.rotationAngle=0,e.shearAngle=0;
// now, get the bounds
var a=e[t];
// restore rotation/shear angles
return e.rotationAngle=r,e.shearAngle=i,[a[3]-a[1],a[2]-a[0]]}
// $.writeln("---\n");
// $.writeln('Geometric Dims: ' + improved_getDims(pItem));
// $.writeln('Visible Dims: ' + improved_getDims(pItem, true));
//////////////////////////////////////////////////////////////////////////////
function adjusted_getDims(/*PageItem*/e,/*bool*/n){var t=(n?"visible":"geometric")+"Bounds",r=e.rotationAngle,i=e.shearAngle;
// store rotation/shear angles
$.writeln("ra: "+r),$.writeln("sa: "+i),
// apply 'zero' angles (temporarily)
e.rotationAngle=0,e.shearAngle=0;
// now, get the bounds
var a=e[t];
// restore rotation/shear angles
return e.rotationAngle=r,e.shearAngle=i,[a[3]-a[1],(a[2]-a[0])/Math.cos(i*Math.PI/180)]}
// $.writeln("---\n");
// $.writeln('Geometric Dims: ' + adjusted_getDims(pItem));
// $.writeln('Visible Dims: ' + adjusted_getDims(pItem, true));
//////////////////////////////////////////////////////////////////////////////
// // import { Vec2 } from '../_assets/node_modules/@leodeslf/vec.js';
// //@include "../_assets/node_modules/@leodeslf/vec.js//index.js";
// // /Users/adrians/Arbeit/GitHub/SimonScript/source/_assets/node_modules/@leodeslf/vec.js/index.min.js
// var position = new Vec2(1, 1.8);
// var target = new Vec2(1, 10);
// var distance = position.distance(target);
// $.writeln(distance);
// const CS = CoordinateSpaces,
//     CS_PARENT = CS.parentCoordinates;
// var mySpread = app.activeDocument.spreads[0];
// var mx = mySpread.transformValuesOf(CS_PARENT)[0];
// alert(mx.matrixValues);
function nextTest(){var e=app.activeDocument,n=e.viewPreferences.horizontalMeasurementUnits,t=e.viewPreferences.verticalMeasurementUnits;
// Aktuelle Einheiten speichern
// Einheiten auf Millimeter setzen
e.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.millimeters,e.viewPreferences.verticalMeasurementUnits=MeasurementUnits.millimeters;
// app.transformPreferences.whenScaling = WhenScalingOptions.applyToContent;
// var mySpread = app.activeDocument.spreads[0];
var r=app.selection[0];
// $.writeln(myObj.transformValuesOf(CoordinateSpaces.pasteboardCoordinates)[0].matrixValues)
$.writeln("---\n"),$.writeln(r.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.spreadCoordinates)[0]),$.writeln(r.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.parentCoordinates,!0)[0]),$.writeln(r.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.INNER_COORDINATES)),$.writeln(r.resolve([AnchorPoint.TOP_LEFT_ANCHOR,BoundingBoxLimits.OUTER_STROKE_BOUNDS,CoordinateSpaces.INNER_COORDINATES],CoordinateSpaces.INNER_COORDINATES)),
// Rescale mySpread by (200%,50%)
// mySpread.transform(CoordinateSpaces.pasteboardCoordinates, [0, 0], [1, 0, 0, 1, 0, 0]);
// alert(mySpread.transformValuesOf(CoordinateSpaces.pasteboardCoordinates)[0].matrixValues);
// => 2, 0, 0, 0.5, 0, 0
// 134.9375, 89.9583333333333
e.viewPreferences.horizontalMeasurementUnits=n,e.viewPreferences.verticalMeasurementUnits=t}
//////////////////////////////////////////////////////////////////////////////
// $.writeln(WidthAndHeight(myObj));
function WidthAndHeight(e){// Returns an array [width,height]
var n=e.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0),t=e.resolve(AnchorPoint.TOP_RIGHT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0),r=e.resolve(AnchorPoint.BOTTOM_RIGHT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0),i=e.resolve(AnchorPoint.BOTTOM_LEFT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0);$.writeln("---\n"),$.writeln(n),$.writeln(t),$.writeln(r),$.writeln(i),$.writeln("---\n");var a=l(t[0][0]-n[0][0],t[0][1]-n[0][1]),o=l(n[0][0]-i[0][0],n[0][1]-i[0][1]),s=p(app.documents[0].viewPreferences.horizontalMeasurementUnits),c=p(app.documents[0].viewPreferences.verticalMeasurementUnits);return a=new UnitValue(a,"points"),o=new UnitValue(o,"points"),[a=a.as(s),o=o.as(c)];function l(e,n){return Math.sqrt(Math.pow(e,2)+Math.pow(n,2))}function p(e){switch(e){case 2054188905:return"points";case 2054187363:return"picas";case 2053729891:return"inches";case 2053729892:return"inches decimal";case 2053991795:return"millimeters";case 2053336435:return"centimeters";case 2053335395:return"ciceros";default:alert("Cannot convert to the current ruler units. Sorry."),exit()}}}
//////////////////////////////////////////////////////////////////////////////
function shortestDistance_2(e,n,t,r,i,a){var o=t-e,s=r-n,c=((i-e)*o+(a-n)*s)/(o*o+s*s);c>1?c=1:c<0&&(c=0);var l=e+c*o-i,p=n+c*s-a;return Math.sqrt(l*l+p*p)}
// var x1 = 1, y1 = 2; // P1
// var x2 = 3, y2 = 4; // P2
// var x3 = 5, y3 = 6; // P3
// var x1 = 431.811023622047, y1 = -165.944881889; // P1 ,
// var x2 = 462.869008308809, y2 = -203.468882759475; // P2
// var x3 = -10.0902325317535, y3 = -147.071907733083; // P3
// $.writeln(shortestDistance_try(x1, y1, x2, y2, x3, y3));
// 595.276 , 841.89 p1
// -10.0902325317535, 273,873 p2
// 462.869008308809, -203.468882759475 p3
// 0, 0, 25.4522336244627, 6.4523673524931e-16, 476.31, 342.992125983488, 476.31, 317.539892359025
// 0, 0, 25.45223362, 0, 476.31, 342.99212598, 476.31, 317.53989236
//////////////////////////////////////////////////////////////////////////////
// getDimension();
function getDimension(){var e=app.activeDocument;const n=CoordinateSpaces,t=AnchorPoint;
// Aktuelle Einheiten speichern
var r=e.viewPreferences.horizontalMeasurementUnits,i=e.viewPreferences.verticalMeasurementUnits;if(
// Einheiten auf Millimeter setzen
e.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.millimeters,e.viewPreferences.verticalMeasurementUnits=MeasurementUnits.millimeters,app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var a=app.selection[0].parent;else a=app.selection[0];selection_inner=a.allPageItems[0];var o=a.resolve(t.TOP_LEFT_ANCHOR,n.pageCoordinates,!0)[0],s=a.resolve(t.TOP_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],c=a.resolve(t.BOTTOM_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],l=a.resolve(t.BOTTOM_LEFT_ANCHOR,n.pageCoordinates,!0)[0],p=selection_inner.resolve(t.TOP_LEFT_ANCHOR,n.pageCoordinates,!0)[0],u=selection_inner.resolve(t.TOP_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],v=selection_inner.resolve(t.BOTTOM_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],d=selection_inner.resolve(t.BOTTOM_LEFT_ANCHOR,n.pageCoordinates,!0)[0];function m(e){var n=e.toFixed(3);// Auf drei Dezimalstellen runden
// Führende Nullen entfernen
return n=n.replace(/\.?0+$/,"")}$.writeln("outer---"),$.writeln(m(F(o[0]))+", "+m(F(o[1]))),$.writeln(m(F(s[0]))+", "+m(F(s[1]))),$.writeln(m(F(c[0]))+", "+m(F(c[1]))),$.writeln(m(F(l[0]))+", "+m(F(l[1]))),$.writeln("inner---"),$.writeln(m(F(p[0]))+", "+m(F(p[1]))),$.writeln(m(F(u[0]))+", "+m(F(u[1]))),$.writeln(m(F(v[0]))+", "+m(F(v[1]))),$.writeln(m(F(d[0]))+", "+m(F(d[1]))),$.writeln("---\n");var g=I(o[0],o[1],p[0],p[1],u[0],u[1]),h=I(s[0],s[1],p[0],p[1],u[0],u[1]),_=I(s[0],s[1],u[0],u[1],v[0],v[1]),w=I(c[0],c[1],u[0],u[1],v[0],v[1]),O=I(c[0],c[1],v[0],v[1],d[0],d[1]),f=I(l[0],l[1],v[0],v[1],d[0],d[1]),C=I(l[0],l[1],d[0],d[1],p[0],p[1]),T=I(o[0],o[1],d[0],d[1],p[0],p[1]);
// $.writeln("distance_topL: " + rund(pt2mm(distance_topL)));
// $.writeln("distance_topR: " + rund(pt2mm(distance_topR)));
// $.writeln("distance_rightT: " + rund(pt2mm(distance_rightT)));
// $.writeln("distance_rightB: " + rund(pt2mm(distance_rightB)));
// $.writeln("distance_bottomR: " + rund(pt2mm(distance_bottomR)));
// $.writeln("distance_bottomL: " + pt2mm(distance_bottomL));
// $.writeln("distance_leftB: " + rund(pt2mm(distance_leftB)));
// $.writeln("distance_leftT: " + rund(pt2mm(distance_leftT)));
function P(e,n){
// Vergleiche die beiden Zahlen und finde die größere
var t=Math.max(e,n);return t<=0&&(t=0),t}var R=P(g,h),A=P(_,w),M=P(O,f),N=P(C,T),D=[];D.push(m(F(R))),D.push(m(F(A))),D.push(m(F(M))),D.push(m(F(N)));var H=[];
// enlargeCanvas: 14.14, 0, 0, 3.426
function I(e,n,t,r,i,a){var o=a-r,s=t-i;return(o*e+s*n+(i*r-t*a))/Math.sqrt(o*o+s*s)}
// var d1x = (outer_TL[0] - outer_TR[0]);
// var d1y = (outer_TL[1] - outer_TR[1]);
// var d2x = (myRectangleTopLeft[0][0] - myRectangleBottomLeft[0][0]);
// var d2y = (myRectangleTopLeft[0][1] - myRectangleBottomLeft[0][1]);
// var myWidth = hypotenuse(d1x, d1y);
// var outer_width = hypotenuse2((outer_TL[0] - outer_TR[0]), (outer_TL[1] - outer_TR[1]));
H.push(R),H.push(A),H.push(M),H.push(N),$.writeln("enlargeCanvas_mm: "+D),$.writeln("enlargeCanvas_pt: "+H);var U=L(o,s),b=L(o,l),E=L(p,u),S=L(p,d);function L(e,n){var t=e[0]-n[0],r=e[1]-n[1];return Math.sqrt(Math.pow(t,2)+Math.pow(r,2))}function F(e){var n=function(e){switch(e){case 2054188905:return"points";case 2054187363:return"picas";case 2053729891:return"inches";case 2053729892:return"inches decimal";case 2053991795:return"millimeters";case 2053336435:return"centimeters";case 2053335395:return"ciceros";default:alert("Cannot convert to the current ruler units. Sorry."),exit()}}
// Einheiten zurücksetzen
(app.documents[0].viewPreferences.horizontalMeasurementUnits);return new UnitValue(e,"points").as(n)}
// $.writeln("outer_width_mm: " + rund(pt2mm(outer_width)));
// $.writeln("outer_height_mm: " + rund(pt2mm(outer_height)));
// $.writeln("inner_width_mm: " + rund(pt2mm(inner_width)));
// $.writeln("inner_height_mm: " + rund(pt2mm(inner_height)));
$.writeln("outer_width_pt: "+U),$.writeln("outer_height_pt: "+b),$.writeln("inner_width_pt: "+E),$.writeln("inner_height_pt: "+S),e.viewPreferences.horizontalMeasurementUnits=r,e.viewPreferences.verticalMeasurementUnits=i}function shortestDistanceToLine(e,n,t,r){var i=r[1]-t[1],a=t[0]-r[0],o=r[0]*t[1]-t[0]*r[1];return Math.abs(i*e+a*n+o)/Math.sqrt(i*i+a*a)}function distanceToLine_old(e,n,t,r){var i=r[1]-t[1],a=t[0]-r[0];return(i*e+a*n+(r[0]*t[1]-t[0]*r[1]))/Math.sqrt(i*i+a*a)}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// var scale = 1/(77.07867983815595/100);
// $.writeln("scale: " + scale)
// setBounds();
function setBounds(){var e=app.activeDocument;const n=CoordinateSpaces,t=AnchorPoint;
// Aktuelle Einheiten speichern
var r=e.viewPreferences.horizontalMeasurementUnits,i=e.viewPreferences.verticalMeasurementUnits;if(
// Einheiten auf Millimeter setzen
e.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.millimeters,e.viewPreferences.verticalMeasurementUnits=MeasurementUnits.millimeters,app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var a=app.selection[0].parent;else a=app.selection[0];function o(e){return 2.83464566929*e}selection_inner=a.allPageItems[0];var s=a.resolve(t.TOP_LEFT_ANCHOR,n.pageCoordinates,!0)[0],c=a.resolve(t.TOP_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],l=a.resolve(t.BOTTOM_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],p=a.resolve(t.BOTTOM_LEFT_ANCHOR,n.pageCoordinates,!0)[0],u=selection_inner.resolve(t.TOP_LEFT_ANCHOR,n.pageCoordinates,!0)[0],v=selection_inner.resolve(t.TOP_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],d=selection_inner.resolve(t.BOTTOM_RIGHT_ANCHOR,n.pageCoordinates,!0)[0],m=selection_inner.resolve(t.BOTTOM_LEFT_ANCHOR,n.pageCoordinates,!0)[0],g=1/(a.images[0].horizontalScale/100);$.writeln("hScaleFactor: "+g),
// selection_inner.transform(cs.pageCoordinates, [0, 0], [hScaleFactor, 0, 0, hScaleFactor, mm2pt(-1), mm2pt(-2)]);
selection_inner.transform(n.pasteboardCoordinates,t.TOP_LEFT_ANCHOR,[g,0,0,g,o(-50),o(-10)],void 0,!0);var h=selection_inner.resolve(t.TOP_LEFT_ANCHOR,n.pageCoordinates,!1)[0];function _(e){var n=e.toFixed(3);// Auf drei Dezimalstellen runden
// Führende Nullen entfernen
return n=n.replace(/\.?0+$/,"")}function w(e){var n=function(e){switch(e){case 2054188905:return"points";case 2054187363:return"picas";case 2053729891:return"inches";case 2053729892:return"inches decimal";case 2053991795:return"millimeters";case 2053336435:return"centimeters";case 2053335395:return"ciceros";default:alert("Cannot convert to the current ruler units. Sorry."),exit()}}
// Einheiten zurücksetzen
(app.documents[0].viewPreferences.horizontalMeasurementUnits);return new UnitValue(e,"points").as(n)}$.writeln("outer---"),$.writeln(_(w(s[0]))+", "+_(w(s[1]))),$.writeln(_(w(c[0]))+", "+_(w(c[1]))),$.writeln(_(w(l[0]))+", "+_(w(l[1]))),$.writeln(_(w(p[0]))+", "+_(w(p[1]))),$.writeln("inner---"),$.writeln(_(w(u[0]))+", "+_(w(u[1]))),$.writeln(_(w(h[0]))+", "+_(w(h[1]))),$.writeln(_(w(v[0]))+", "+_(w(v[1]))),$.writeln(_(w(d[0]))+", "+_(w(d[1]))),$.writeln(_(w(m[0]))+", "+_(w(m[1]))),$.writeln("---\n"),e.viewPreferences.horizontalMeasurementUnits=r,e.viewPreferences.verticalMeasurementUnits=i}
// repositionImage(28.34645669, 141.73228346);
function repositionImage(e,n){const t=CoordinateSpaces,r=AnchorPoint;if(app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var i=app.selection[0].parent;else i=app.selection[0];selection_inner=i.allPageItems[0];var a=1/(i.images[0].horizontalScale/100);$.writeln("hScaleFactor: "+a),
// selection_inner.transform(cs.pageCoordinates, [0, 0], [hScaleFactor, 0, 0, hScaleFactor, mm2pt(-1), mm2pt(-2)]);
selection_inner.transform(t.pasteboardCoordinates,r.TOP_LEFT_ANCHOR,[a,0,0,a,-1*n,-1*e],void 0,!0)}
// top: 28.34645669
// left: 0
// bottom: 0
// right: 141.73228346
// _hScale: 89
// __hScale: 26.9677650429799
// ppi: 300
// hScaleFactor: 3.70813079395437
// top: 52.65464567
// left: 0
// repositionImage_2(0, 44.18667787)
function repositionImage_2(e,n){CoordinateSpaces,AnchorPoint;if(app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var t=app.selection[0].parent;else t=app.selection[0];selection_inner=t.allPageItems[0];var r=1/(t.images[0].horizontalScale/100);
// $.writeln("hScaleFactor: " + hScaleFactor);
// selection_inner.transform(cs.pageCoordinates, [0, 0], [hScaleFactor, 0, 0, hScaleFactor, mm2pt(-1), mm2pt(-2)]);
// selection_inner.transform(cs.pasteboardCoordinates, ap.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, -1 * _left, -1 * _top], undefined, true);
// selection_inner.transform(cs.pasteboardCoordinates, ap.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, -1 * _left, -1 * _top], undefined, true);
selection_inner.transform(CoordinateSpaces.INNER_COORDINATES,AnchorPoint.TOP_LEFT_ANCHOR,[r,0,0,r,-1*n,-1*e],void 0,!0)}
// repositionImage_3(26.66015748, 0)
function repositionImage_3(e,n){CoordinateSpaces,AnchorPoint;if(app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var t=app.selection[0].parent;else t=app.selection[0];selection_inner=t.allPageItems[0],t.images[0].horizontalScale=100,t.images[0].verticalScale=100,
// selection_inner.transform(CoordinateSpaces.pageCoordinates, AnchorPoint.TOP_LEFT_ANCHOR, [1.63414638353613, 0, 0, 1.63414638353613, 0, 0], undefined, true);
// selection_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.TOP_LEFT_ANCHOR, [1.26219515, 0, 0, 1.26219515, 0, 0], undefined, true);
selection_inner.transform(CoordinateSpaces.INNER_COORDINATES,AnchorPoint.CENTER_ANCHOR,[1,0,0,1,-1*n,-1*e],void 0,!0)}
////////////////////////////////////////////////////////////
///////////// Objektebenenoptionen 
////////////////////////////////////////////////////////////
// $.writeln("updateLinkOption: " + app.selection[0].graphics[0].graphicLayerOptions.updateLinkOption);
// // app.selection[0].graphics[0].graphicLayerOptions.updateLinkOption =  UpdateLinkOptions.KEEP_OVERRIDES;
// app.selection[0].graphics[0].graphicLayerOptions.updateLinkOption =  UpdateLinkOptions.APPLICATION_SETTINGS;
// $.writeln("updateLinkOption: " + app.selection[0].graphics[0].graphicLayerOptions.updateLinkOption);
// if (app.selection[0].graphics[0].hasOwnProperty('graphicLayerOptions') ) {
// var layersOptions = [];
// if (app.selection[0].graphics[0].graphicLayerOptions.graphicLayers.length > 0) {
//     const layers = app.selection[0].graphics[0].graphicLayerOptions.graphicLayers;
//     for (var n = 0; n < layers.length; n++) {
//         var layer = layers[n];
//         layersOptions.push({
//             'name': layer.name,
//             'id': layer.id,
//             'originalVisibility': layer.originalVisibility,
//             'currentVisibility': layer.currentVisibility
//         });
//     }
//     // Auslesen der Werte aus dem Array
//     for (var i = 0; i < layersOptions.length; i++) {
//         var layerOption = layersOptions[i];
//         $.writeln("name: " + layerOption.name);
//         $.writeln("id: " + layerOption.id);
//         $.writeln("originalVisibility: " + layerOption.originalVisibility);
//         $.writeln("currentVisibilityy: " + layerOption.currentVisibility);
//     }
// } else {
//     if (debug) {
//         alert("Bild ohne Ebenen - kein VisibilityCheck")
//     }
// }
// var ding = app.selection[0].graphics[0].graphicLayerOptions.graphicLayers[0].currentVisibility;
// var dong = app.selection[0].allPageItems[0].graphicLayerOptions.graphicLayers.length;
// $.writeln("graphicLayerOptions: " + ding)
// $.writeln("graphicLayerOptions: " + dong)
// $.writeln(app.selection[0].graphics[0].graphicLayerOptions.graphicLayers[0].id);
// // $.writeln(app.selection[0].graphics[0].profile)
// var myDoc = app.activeDocument;
// var myLink = app.selection[0].graphics[0];
// var avaiLangs = new Array("DE", "GB");
// //var avaiLangs = app.activeDocument.layers.everyItem().name;  
// var newLang = (avaiLangs.join(', '), "FR");
// if (myLink.getElements()[0].constructor.name == "Image") {
// }
// if (myLink.parent.hasOwnProperty('graphicLayerOptions')) {
//     // myLink.parent.graphicLayerOptions.updateLinkOption = UpdateLinkOptions.KEEP_OVERRIDES;
//     // checkLayers(myLink, newLang);
// }
// function checkLayers(oneLink, newLang) {
//     for (var n = 0; n < avaiLangs.length; n++) {
//         var myObjectLayers = oneLink.parent.graphicLayerOptions.graphicLayers;
//         if (myObjectLayers.itemByName(avaiLangs[n]).isValid) {
//             myObjectLayers.itemByName(avaiLangs[n]).currentVisibility = false;
//         }
//     }
//     if (myObjectLayers.itemByName(newLang).isValid) {
//         myObjectLayers.itemByName(newLang).currentVisibility = true;
//     }
// }
////////////////////////////////////////////////////////////
///////////// get Exif-orientation
////////////////////////////////////////////////////////////
// metaDataOfLinks.jsx  
//DESCRIPTION: Ermittelt Metadaten von verknüpften Bildern und erstellt eine Übersicht auf dem Schreibtisch.  
// Martin Fischer 10/2008  
// var myLinkXmpArray = ["author", "copyrightInfoURL", "copyrightNotice", "copyrightStatus ", "creationDate", "creator", "description", "documentTitle", "format", "jobName", "keywords", "modificationDate", "serverURL"];
// var myIPTCArray = ["CiAdrCity", "CiAdrCtry", "CiAdrExtadr", "CiAdrPcode", "CiAdrRegion", "CiEmailWork", "CiTelWork", "City", "CiUrlWork", "CopyrightNotice", "Country", "CountryCode", "Creator", "CreatorContactInfo", "CreatorJobtitle", "DateCreated", "Description", "DescriptionWriter", "Headline", "Instructions", "IntellectualGenre", "JobID", "Keywords", "Location", "Provider", "Province-State", "RightsUsageTerms", "Scene", "Source", "SubjectCode", "Title"];
// var myPSArray = ["photoshop:AuthorsPosition", "photoshop:CaptionWriter", "photoshop:Category", "photoshop:City", "photoshop:Country", "photoshop:Credit", "photoshop:DateCreated", "photoshop:Headline", "photoshop:Instructions", "photoshop:Source", "photoshop:State", "photoshop:SupplementalCategories", "photoshop:TransmissionReference", "photoshop:Urgency"];//var myPSArray = ["photoshop:AuthorsPosition", "CaptionWriter", "Category", "City", "Country", "Credit", "DateCreated", "Headline", "Instructions", "Source", "State", "SupplementalCategories", "TransmissionReference", "Urgency"];  
// var myTiffArray = ["tiff:ImageWidth", "tiff:ImageLength", "tiff:BitsPerSample", "tiff:Compression", "tiff:PhotometricInterpretation", "tiff:Orientation", "tiff:SamplesPerPixel", "tiff:PlanarConfiguration", "tiff:YCbCrSubSampling", "tiff:YCbCrPositioning", "tiff:XResolution", "tiff:YResolution", "tiff:ResolutionUnit", "tiff:TransferFunction", "tiff:WhitePoint", "tiff:PrimaryChromaticities", "tiff:YCbCrCoefficients", "tiff:ReferenceBlackWhite", "tiff:DateTime", "tiff:ImageDescription", "tiff:MakeProperName", "tiff:Model", "tiff:Software", "tiff:Artist", "tiff:Copyright"];
// var myExifArray = ["exif:ExifVersion", "exif:FlashpixVersion", "exif:ColorSpace", "exif:ComponentsConfiguration", "exif:CompressedBitsPerPixel", "exif:PixelXDimension", "exif:PixelYDimension", "exif:UserComment", "exif:RelatedSoundFile", "exif:DateTimeOriginal", "exif:DateTimeDigitized", "exif:ExposureTime", "exif:FNumber", "exif:ExposureProgram", "exif:SpectralSensitivity", "exif:ISOSpeedRatings", "exif:OECF", "exif:ShutterSpeedValue", "exif:ApertureValue", "exif:BrightnessValue", "exif:ExposureBiasValue", "exif:MaxApertureValue", "exif:SubjectDistance", "exif:MeteringMode", "exif:LightSource", "exif:Flash", "exif:FocalLength", "exif:SubjectArea", "exif:FlashEnergy", "exif:SpatialFrequencyResponse", "exif:FocalPlaneXResolution", "exif:FocalPlaneYResolution", "exif:FocalPlaneResolutionUnit", "exif:SubjectLocation", "exif:ExposureIndex", "exif:SensingMethod", "exif:FileSource", "exif:SceneType", "exif:CFAPattern", "exif:CustomRendered", "exif:ExposureMode", "exif:WhiteBalance", "exif:DigitalZoomRatio", "exif:FocalLengthIn35mmFilm", "exif:SceneCaptureType", "exif:GainControl", "exif:Contrast", "exif:Saturation", "exif:Sharpness", "exif:DeviceSettingDescription", "exif:SubjectDistanceRange", "exif:ImageUniqueID", "exif:GPSVersionID", "exif:GPSLatitude", "exif:GPSLongitude", "exif:GPSAltitudeRef", "exif:GPSAltitude", "exif:GPSTimeStamp", "exif:DateTimeOriginal,", "exif:DateTimeDigitized.", "exif:GPSTimeStamp", "exif:GPSSatellites", "exif:GPSStatus", "exif:GPSMeasureMode", "exif:GPSDOP", "exif:GPSSpeedRef", "exif:GPSSpeed", "exif:GPSTrackRef", "exif:GPSTrack", "exif:GPSImgDirectionRef", "exif:GPSImgDirection", "exif:GPSMapDatum", "exif:GPSDestLatitude", "exif:GPSDestLongitude", "exif:GPSDestBearingRef", "exif:GPSDestBearing", "exif:GPSDestDistanceRef", "exif:GPSDestDistance", "exif:GPSProcessingMethod", "exif:GPSAreaInformation"];
// var myCameraRawArray = ["crs:AutoBrightness", "crs:AutoContrast", "crs:AutoExposure", "crs:AutoShadows", "crs:BlueHue", "crs:BlueSaturation", "crs:Brightness", "crs:CameraProfile", "crs:ChromaticAberrationB", "crs:ChromaticAberrationR", "crs:ColorNoiseReduction", "crs:Contrast", "crs:CropTop", "crs:CropLeft", "crs:CropBottom", "crs:CropRight", "crs:CropAngle", "crs:CropWidth", "crs:CropHeight", "crs:CropUnits", "crs:Exposure", "crs:GreenHue", "crs:GreenSaturation", "crs:HasCrop", "crs:HasSettings", "crs:LuminanceSmoothing", "crs:RawFileName", "crs:RedHue", "crs:RedSaturation", "crs:Saturation", "crs:Shadows", "crs:ShadowTint", "crs:Sharpness", "crs:Temperature", "crs:Tint", "crs:ToneCurve", "crs:ToneCurveName", "crs:Version", "crs:VignetteAmount", "crs:VignetteMidpoint", "crs:WhiteBalance"];
// var myInfo = new Array;
// var myDoc = app.activeDocument;
// var myLinks = app.documents[0].links;
// for (i = 0; i < myLinks.length; i++)
//     getMetaData(myLinks[i]);
// writeData('Metadaten zu ' + myDoc.name + '\r-----------\r\r' + myInfo.join('\r\r'), File('~/Desktop/Metadaten_' + myDoc.name.replace(/.indd$/, '') + '.txt'));
// // ===============================================================  
// //                                              Funktionen  
// // ===============================================================  
// function getMetaData(aLink) {
//     var myLinkXmp = aLink.linkXmp.properties.toSource().replace(/^\(\{/, '').replace(/\)\}$/, '').replace(/parent.+$/, '').replace(/:/g, ':\t').split(', ');
//     var myString = aLink.name;
//     myString += loopLinkXmp(aLink, myLinkXmpArray);
//     myString += loopArray(aLink, "http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/", "Iptc4xmpCore:CreatorContactInfo/Iptc4xmpCore:", myIPTCArray);
//     myString += loopArray(aLink, "http://ns.adobe.com/photoshop/1.0/", "", myPSArray);
//     myString += loopArray(aLink, "http://ns.adobe.com/tiff/1.0/", "", myTiffArray);
//     myString += loopArray(aLink, "http://ns.adobe.com/exif/1.0/", "", myExifArray);
//     myString += loopArray(aLink, "http://ns.adobe.com/camera-raw-settings/1.0/", "", myCameraRawArray);
//     myInfo.push(myString.replace(/, $/, ''));
// }
// function loopArray(aLink, s1, s2, anArray) {
//     var temp = '\r\t--- ' + s1 + ' ---\r\t';
//     for (var a = 0; a < anArray.length; a++) {
//         try {
//             var theEvalString = 'aLink.linkXmp.getProperty(\"' + s1 + '\", \"' + s2 + anArray[a] + '\")';
//             var myCode = eval(theEvalString);
//             if (myCode != '')
//                 temp += '[' + anArray[a] + ']\t' + myCode + '\r\t';
//         } catch (e) { //temp +=e + '\r'  
//         }
//     }
//     return temp;
// }
// function loopLinkXmp(aLink, anArray) {
//     var temp = '\r\t--- LinkMetadata ---\r\t';
//     for (var a = 0; a < anArray.length; a++) {
//         try {
//             var theEvalString = 'aLink.linkXmp.' + anArray[a];
//             var myCode = eval(theEvalString);
//             if (myCode != '')
//                 temp += '[' + anArray[a] + ']\t' + myCode + '\r\t';
//         } catch (e) { //temp +=e + '\r'  
//         }
//     }
//     return temp;
// }
// function writeData(aData, theFile) {
//     theFile.open('w', 'Text', 'R*ch');
//     theFile.encoding = 'UTF-8';
//     theFile.write(aData);
//     theFile.close();
// } 
////////////////////////////////////////////////////////////
///////////// get Orientierung Image
////////////////////////////////////////////////////////////
// function loadXMPLibrary() {
//     if (!ExternalObject.AdobeXMPScript) {
//         try { ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript'); }
//         catch (e) { alert('Unable to load the AdobeXMPScript library!'); return false; }
//     }
//     return true;
// }
// function unloadXMPLibrary() {
//     if (ExternalObject.AdobeXMPScript) {
//         try { ExternalObject.AdobeXMPScript.unload(); ExternalObject.AdobeXMPScript = undefined; }
//         catch (e) { alert('Unable to unload the AdobeXMPScript library!'); }
//     }
// }
// if (loadXMPLibrary() && app.selection.length == 1 && app.selection[0].contentType == ContentType.GRAPHIC_TYPE) {
//     var myFile = File(app.selection[0].graphics[0].itemLink.filePath);
//     xmpFile = new XMPFile(myFile.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_READ);
//     var myXmp = xmpFile.getXMP();
//     xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
//     unloadXMPLibrary();
// }
// if (myXmp) {
//     var xmp_orientation = myXmp.getProperty(XMPConst.NS_TIFF, "Orientation");
//     $.writeln(xmp_orientation)
//     $.writeln(typeof xmp_orientation);
// }
////////////////////////////////////////////////////////////
///////////// get autoRotete und Replace - Korrektur
////////////////////////////////////////////////////////////
// automatisch()
function automatisch(){var e=1.0991264408356;try{if(app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var n=app.selection[0].parent;else n=app.selection[0]}catch(e){alert(e)}n.images[0];var t=n.graphics[0].itemLink.parent.parent.allPageItems[0];
// imageRGB_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, 0, 0], undefined, true);
// imageRGB_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.CENTER_ANCHOR, [1, 0, 0, 1, -1 * _left, -1 * _top], undefined, true);
t.transform(CoordinateSpaces.INNER_COORDINATES,AnchorPoint.CENTER_ANCHOR,[1,0,0,1,-57.23627136509138,-329.24094172075684],void 0,!0),t.transform(CoordinateSpaces.INNER_COORDINATES,AnchorPoint.TOP_LEFT_ANCHOR,[e,0,0,e,0,0],void 0,!0)}
// $.writeln("Dimension \n" + 
//     "width: " + main()[0]  + "\n" +
//     "height: " + main()[1]
// );
function main(){var e=app.activeDocument.pages[0].bounds;$.writeln("Bounds \n0: "+e[0]+"\n1: "+e[1]+"\n2: "+e[2]+"\n3: "+e[3]+"\n");var n=RoundWithDecimal(e[3]-e[1],3),t=RoundWithDecimal(e[2]-e[0],3),r=[];return r.push(n),r.push(t),(e=[]).push(e[0]),e.push(e[1]),e.push(e[2]),e.push(e[3]),r}function RoundWithDecimal(e,n){var t=Math.pow(10,n);return Math.round(e*t)/t}
// Aktuelle Einheiten speichern
var startHorizontalUnits=app.activeDocument.viewPreferences.horizontalMeasurementUnits,startVerticalUnits=app.activeDocument.viewPreferences.verticalMeasurementUnits;
// Einheiten auf Millimeter setzen
// app.activeDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.millimeters;
// app.activeDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;
app.activeDocument.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.points,app.activeDocument.viewPreferences.verticalMeasurementUnits=MeasurementUnits.points,
// set the ruler to "page", again so our math works out.
oldOrigin=app.activeDocument.viewPreferences.rulerOrigin,// save old ruler origin
// Spread Origin is necessary for some reason, otherwise I can't figure out how to refer to dimensions on both pages
// app.activeDocument.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
app.activeDocument.viewPreferences.rulerOrigin=RulerOrigin.SPINE_ORIGIN;
// app.activeDocument.layoutWindows[0].activePage.parent.pages
const cs=CoordinateSpaces,ap=AnchorPoint;var selection=app.selection[0],image_inner=selection.allPageItems[0];
/**
 * Example of getting bounds of a spread.
 * @author m1b
 * @discussion https://community.adobe.com/t5/indesign-discussions/how-do-you-call-the-actively-selected-spread-length-width-in-a-document-or-page-bounds/m-p/13940663
 */
!function(){var e=getExpandedBounds(app.activeDocument.layoutWindows[0].activePage.parent.pages.everyItem().bounds);
// spreadBounds = spread.pages.everyItem().bounds;
$.writeln("Bounds of active spread:\n"+e)}();
// const cs = CoordinateSpaces, ap = AnchorPoint;
var activePage=app.activeDocument.layoutWindows[0].activePage,topLeft=activePage.resolve(ap.TOP_LEFT_ANCHOR,cs.spreadCoordinates,!1)[0],bottomRight=activePage.resolve(ap.BOTTOM_RIGHT_ANCHOR,cs.spreadCoordinates,!1)[0];
// Koordinaten der aktiven Seite relativ zum Druckbogen (spreadCoordinates) ermitteln
// Ausgabe der Koordinaten
$.writeln("Aktive Seite: "+activePage.name),$.writeln("Oben links (spreadCoordinates): ["+topLeft[0]+", "+topLeft[1]+"]"),$.writeln("Unten rechts (spreadCoordinates): ["+bottomRight[0]+", "+bottomRight[1]+"]"),$.writeln("spreadMoveX page: "+image_inner.resolve(ap.TOP_LEFT_ANCHOR,cs.pageCoordinates,!0)[0][0]),$.writeln("spreadMoveY page: "+image_inner.resolve(ap.TOP_LEFT_ANCHOR,cs.pageCoordinates,!0)[0][1]),$.writeln("spreadMoveX spread: "+image_inner.resolve(ap.TOP_LEFT_ANCHOR,cs.spreadCoordinates,!0)[0][0]),$.writeln("spreadMoveY spread: "+image_inner.resolve(ap.TOP_LEFT_ANCHOR,cs.spreadCoordinates,!0)[0][1]);
// Get the active spread
var activeSpread=app.activeDocument.layoutWindows[0].activeSpread;
// $.writeln("spreadMoveX page: " + app.activeDocument.layoutWindows[0].activePage.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0][0]);
// $.writeln("spreadMoveX page: " + app.activeDocument.layoutWindows[0].activePage.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0][0]);
// $.writeln("spreadMoveX page: " + app.activeDocument.layoutWindows[0].activePage.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0][1]);
// app.activeDocument.layoutWindows[0].activePage.parent.pages.anyItem().resolve(AnchorPoint.TOP_LEFT_ANCHOR, CoordinateSpaces.pageCoordinates, true)[0]
// $.writeln(image_inner.transformValuesOf(cs.SPREAD_COORDINATES)[0])
// $.writeln(image_inner.transformValuesOf(CoordinateSpaces.SPREAD_COORDINATES)[0].matrixValues)
// 8.43175874726769,0,-3.20592491380523e-16,8.43175874726769,-7.04867079534995,9.80128334049368e-9
// Einheiten zurücksetzen
// save old ruler origin
function berechneDruckbogenGroesse(){const e=CoordinateSpaces,n=AnchorPoint;
// Koordinaten der Seiten innerhalb des Spread-Koordinatensystems sammeln
for(var t=app.activeDocument.layoutWindows[0].activeSpread,r=t.pages.length,i=[],a=0;a<r;a++){var o=t.pages[a],s=o.resolve(n.TOP_LEFT_ANCHOR,e.spreadCoordinates,!1)[0][0],c=o.resolve(n.TOP_LEFT_ANCHOR,e.spreadCoordinates,!1)[0][1],l=o.resolve(n.BOTTOM_RIGHT_ANCHOR,e.spreadCoordinates,!1)[0][0],p=o.resolve(n.BOTTOM_RIGHT_ANCHOR,e.spreadCoordinates,!1)[0][1];i.push({topLeft:[s,c],bottomRight:[l,p]})}
// Initialisierung für Min/Max Berechnung
var u=1/0,v=-1/0,d=1/0,m=-1/0;
// Berechnung der minimalen und maximalen Koordinaten
for(a=0;a<i.length;a++){var g=i[a];g.topLeft[0]<u&&(u=g.topLeft[0]),g.bottomRight[0]>v&&(v=g.bottomRight[0]),g.topLeft[1]<d&&(d=g.topLeft[1]),g.bottomRight[1]>m&&(m=g.bottomRight[1])}
// Höhe und Breite berechnen
return[v-u,m-d]}
// Funktion aufrufen und Ergebnis ausgeben
// var druckbogenGroesse = berechneDruckbogenGroesse();
// $.writeln("Höhe des Druckbogens: " + druckbogenGroesse[0]);
// $.writeln("Breite des Druckbogens: " + druckbogenGroesse[1]);
function berechneDruckbogenGroesse(e){const n=CoordinateSpaces,t=AnchorPoint;var r=e.parentPage;if(null==r)return $.writeln("Das Bild befindet sich nicht auf einer Seite."),null;
// Koordinaten der Seiten innerhalb des Spread-Koordinatensystems sammeln
for(var i=r.parent,a=i.pages.length,o=[],s=0;s<a;s++){var c=i.pages[s],l=c.resolve(t.TOP_LEFT_ANCHOR,n.spreadCoordinates,!1)[0][0],p=c.resolve(t.TOP_LEFT_ANCHOR,n.spreadCoordinates,!1)[0][1],u=c.resolve(t.BOTTOM_RIGHT_ANCHOR,n.spreadCoordinates,!1)[0][0],v=c.resolve(t.BOTTOM_RIGHT_ANCHOR,n.spreadCoordinates,!1)[0][1];o.push({topLeft:[l,p],bottomRight:[u,v]})}
// Initialisierung für Min/Max Berechnung
var d=1/0,m=-1/0,g=1/0,h=-1/0;
// Berechnung der minimalen und maximalen Koordinaten
for(s=0;s<o.length;s++){var _=o[s];_.topLeft[0]<d&&(d=_.topLeft[0]),_.bottomRight[0]>m&&(m=_.bottomRight[0]),_.topLeft[1]<g&&(g=_.topLeft[1]),_.bottomRight[1]>h&&(h=_.bottomRight[1])}
// Höhe und Breite des Druckbogens berechnen
return[m-d,h-g,d,g]}
// Funktion aufrufen und Ergebnisse ausgeben
app.activeDocument.viewPreferences.horizontalMeasurementUnits=startHorizontalUnits,app.activeDocument.viewPreferences.verticalMeasurementUnits=startVerticalUnits,oldOrigin=app.activeDocument.viewPreferences.rulerOrigin;var druckbogenDaten=berechneDruckbogenGroesse(selection);
/**
 * Returns the overall bounds, when
 * given an array of bounds ordered
 * as Indesign bounds [TLBR].
 * @author m1b
 * @version 2023-07-17
 * @param {Array<Array<Number>>} arr - an array of bounds arrays.
 * @returns {Array<Number>} - the expanded bounds [TLBR].
 */
function getExpandedBounds(e){for(
// https://community.adobe.com/t5/indesign-discussions/how-do-you-call-the-actively-selected-spread-length-width-in-a-document-or-page-bounds/m-p/13940663
var n=[1/0,1/0,-1/0,-1/0],t=0;t<e.length;t++)for(var r=0;r<e[0].length;r++)n[r]=r<2?Math.min(n[r],e[t][r]):Math.max(n[r],e[t][r]);return n}null!=druckbogenDaten&&($.writeln("xx: "+druckbogenDaten),$.writeln("Breite des Druckbogens: "+druckbogenDaten[0]),$.writeln("Höhe des Druckbogens: "+druckbogenDaten[1]),$.writeln("Verschiebung X-Achse: "+druckbogenDaten[2]),$.writeln("Verschiebung Y-Achse: "+druckbogenDaten[3]));