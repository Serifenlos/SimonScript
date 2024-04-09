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
function testDossier(){var e=app.activeDocument,t=decodeURI(e.name),n=e.entWorkflow.defaultDossier;$.writeln(t),$.writeln(e.entWorkflow.defaultDossier),$.writeln(t),n?$.writeln("idDocDossier: yes"):$.writeln("idDocDossier: no");var r=function(e){var t="",n=e.lastIndexOf(".");t=-1==n?e:e.substr(0,n);return t}(decodeURI(t));$.writeln(r);r=r.replace(/^(.+)((-|_)\d{3})$/g,"$1");$.writeln(r)}
//////////////////////////////////////////////////////////////////////////////
function getDimension_1(){if(app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var e=app.selection[0].parent;else e=app.selection[0];var t=app.activeDocument,n=t.viewPreferences.horizontalMeasurementUnits,r=t.viewPreferences.verticalMeasurementUnits;
// Aktuelle Einheiten speichern
// Einheiten auf Millimeter setzen
t.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.millimeters,t.viewPreferences.verticalMeasurementUnits=MeasurementUnits.millimeters,
// // Werte auslesen...
// var bounds = doc.selection[0].geometricBounds;
$.writeln("geometricBounds: "+e.geometricBounds),$.writeln("rotationAngle: "+e.rotationAngle),$.writeln("absoluteRotationAngle: "+e.absoluteRotationAngle),$.writeln("---"),$.writeln("geometricBounds_child: "+e.allPageItems[0].geometricBounds),$.writeln("rotationAngle_child: "+e.allPageItems[0].rotationAngle),$.writeln("absoluteRotationAngle_child: "+e.allPageItems[0].absoluteRotationAngle),$.writeln("---");for(var i=e.geometricBounds,a=[],s=0;s<i.length;s++)a.push(i[s].toFixed(3));
// mmBounds_outer.push(bounds_outer[i])
$.writeln(a);var o=e.allPageItems[0].geometricBounds,l=[];for(s=0;s<o.length;s++)l.push(o[s].toFixed(3));
// mmBounds_inner.push(bounds_inner[i])
$.writeln(l);var c=a[3]-a[1],u=a[2]-a[0];$.writeln("outer: "+c+"x"+u);var m=l[3]-l[1],p=l[2]-l[0];$.writeln("inner: "+m+"x"+p),c>m&&$.writeln("breite anbauen: "+(c-m)),u>p&&$.writeln("höhe anbauen: "+(u-p)),
// Einheiten zurücksetzen
t.viewPreferences.horizontalMeasurementUnits=n,t.viewPreferences.verticalMeasurementUnits=r}
//////////////////////////////////////////////////////////////////////////////
function naive_getDims(/*PageItem*/e,/*bool*/t){var n=e[(t?"visible":"geometric")+"Bounds"];
// width=right-left , height = bottom-top
return[n[3]-n[1],n[2]-n[0]]}
// sample code
getDimension_1();var pItem=app.selection[0];// get the selected object
//////////////////////////////////////////////////////////////////////////////
function improved_getDims(/*PageItem*/e,/*bool*/t){var n=(t?"visible":"geometric")+"Bounds",r=e.rotationAngle,i=e.shearAngle;
// store rotation/shear angles
// apply 'zero' angles (temporarily)
e.rotationAngle=0,e.shearAngle=0;
// now, get the bounds
var a=e[n];
// restore rotation/shear angles
return e.rotationAngle=r,e.shearAngle=i,[a[3]-a[1],a[2]-a[0]]}
//////////////////////////////////////////////////////////////////////////////
function adjusted_getDims(/*PageItem*/e,/*bool*/t){var n=(t?"visible":"geometric")+"Bounds",r=e.rotationAngle,i=e.shearAngle;
// store rotation/shear angles
$.writeln("ra: "+r),$.writeln("sa: "+i),
// apply 'zero' angles (temporarily)
e.rotationAngle=0,e.shearAngle=0;
// now, get the bounds
var a=e[n];
// restore rotation/shear angles
return e.rotationAngle=r,e.shearAngle=i,[a[3]-a[1],(a[2]-a[0])/Math.cos(i*Math.PI/180)]}$.writeln("---\n"),$.writeln("Geometric Dims: "+naive_getDims(pItem)),$.writeln("Visible Dims: "+naive_getDims(pItem,!0)),$.writeln("---\n"),$.writeln("Geometric Dims: "+improved_getDims(pItem)),$.writeln("Visible Dims: "+improved_getDims(pItem,!0)),$.writeln("---\n"),$.writeln("Geometric Dims: "+adjusted_getDims(pItem)),$.writeln("Visible Dims: "+adjusted_getDims(pItem,!0));
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
var doc=app.activeDocument,startHorizontalUnits=doc.viewPreferences.horizontalMeasurementUnits,startVerticalUnits=doc.viewPreferences.verticalMeasurementUnits;
// Aktuelle Einheiten speichern
// Einheiten auf Millimeter setzen
doc.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.millimeters,doc.viewPreferences.verticalMeasurementUnits=MeasurementUnits.millimeters;
// app.transformPreferences.whenScaling = WhenScalingOptions.applyToContent;
// var mySpread = app.activeDocument.spreads[0];
var myObj=app.selection[0];
// $.writeln(myObj.transformValuesOf(CoordinateSpaces.pasteboardCoordinates)[0].matrixValues)
//////////////////////////////////////////////////////////////////////////////
// $.writeln(WidthAndHeight(myObj));
function WidthAndHeight(e){// Returns an array [width,height]
var t=e.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0),n=e.resolve(AnchorPoint.TOP_RIGHT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0),r=e.resolve(AnchorPoint.BOTTOM_RIGHT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0),i=e.resolve(AnchorPoint.BOTTOM_LEFT_ANCHOR,CoordinateSpaces.pasteboardCoordinates,!0);$.writeln("---\n"),$.writeln(t),$.writeln(n),$.writeln(r),$.writeln(i),$.writeln("---\n");var a=c(n[0][0]-t[0][0],n[0][1]-t[0][1]),s=c(t[0][0]-i[0][0],t[0][1]-i[0][1]),o=u(app.documents[0].viewPreferences.horizontalMeasurementUnits),l=u(app.documents[0].viewPreferences.verticalMeasurementUnits);return a=new UnitValue(a,"points"),s=new UnitValue(s,"points"),[a=a.as(o),s=s.as(l)];function c(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}function u(e){switch(e){case 2054188905:return"points";case 2054187363:return"picas";case 2053729891:return"inches";case 2053729892:return"inches decimal";case 2053991795:return"millimeters";case 2053336435:return"centimeters";case 2053335395:return"ciceros";default:alert("Cannot convert to the current ruler units. Sorry."),exit()}}}
//////////////////////////////////////////////////////////////////////////////
function shortestDistance_2(e,t,n,r,i,a){var s=n-e,o=r-t,l=((i-e)*s+(a-t)*o)/(s*s+o*o);l>1?l=1:l<0&&(l=0);var c=e+l*s-i,u=t+l*o-a;return Math.sqrt(c*c+u*u)}
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
//////////////////////////////////////////////////////////////////////////////
function shortestDistance(){var e=app.activeDocument;const t=CoordinateSpaces,n=AnchorPoint;
// Aktuelle Einheiten speichern
var r=e.viewPreferences.horizontalMeasurementUnits,i=e.viewPreferences.verticalMeasurementUnits;if(
// Einheiten auf Millimeter setzen
e.viewPreferences.horizontalMeasurementUnits=MeasurementUnits.millimeters,e.viewPreferences.verticalMeasurementUnits=MeasurementUnits.millimeters,app.selection[0]instanceof Image&&app.selection[0].parent.graphics.length>0)var a=app.selection[0].parent;else a=app.selection[0];selection_inner=a.allPageItems[0];var s=a.resolve(n.TOP_LEFT_ANCHOR,t.pageCoordinates,!0)[0],o=a.resolve(n.TOP_RIGHT_ANCHOR,t.pageCoordinates,!0)[0],l=a.resolve(n.BOTTOM_RIGHT_ANCHOR,t.pageCoordinates,!0)[0],c=a.resolve(n.BOTTOM_LEFT_ANCHOR,t.pageCoordinates,!0)[0],u=selection_inner.resolve(n.TOP_LEFT_ANCHOR,t.pageCoordinates,!0)[0],m=selection_inner.resolve(n.TOP_RIGHT_ANCHOR,t.pageCoordinates,!0)[0],p=selection_inner.resolve(n.BOTTOM_RIGHT_ANCHOR,t.pageCoordinates,!0)[0],v=selection_inner.resolve(n.BOTTOM_LEFT_ANCHOR,t.pageCoordinates,!0)[0];function w(e){var t=e.toFixed(3);// Auf drei Dezimalstellen runden
// Führende Nullen entfernen
return t=t.replace(/\.?0+$/,"")}$.writeln("outer---"),$.writeln(w(T(s[0]))+", "+w(T(s[1]))),$.writeln(w(T(o[0]))+", "+w(T(o[1]))),$.writeln(w(T(l[0]))+", "+w(T(l[1]))),$.writeln(w(T(c[0]))+", "+w(T(c[1]))),$.writeln("inner---"),$.writeln(w(T(u[0]))+", "+w(T(u[1]))),$.writeln(w(T(m[0]))+", "+w(T(m[1]))),$.writeln(w(T(p[0]))+", "+w(T(p[1]))),$.writeln(w(T(v[0]))+", "+w(T(v[1]))),$.writeln("---\n");var d=O(s[0],s[1],u[0],u[1],m[0],m[1]),h=O(o[0],o[1],m[0],m[1],p[0],p[1]),g=O(l[0],l[1],p[0],p[1],v[0],v[1]),_=O(c[0],c[1],v[0],v[1],u[0],u[1]);function O(e,t,n,r,i,a){var s=a-r,o=n-i;return(s*e+o*t+(i*r-n*a))/Math.sqrt(s*s+o*o)}
// var d1x = (outer_TL[0] - outer_TR[0]);
// var d1y = (outer_TL[1] - outer_TR[1]);
// var d2x = (myRectangleTopLeft[0][0] - myRectangleBottomLeft[0][0]);
// var d2y = (myRectangleTopLeft[0][1] - myRectangleBottomLeft[0][1]);
// var myWidth = hypotenuse(d1x, d1y);
// var outer_width = hypotenuse2((outer_TL[0] - outer_TR[0]), (outer_TL[1] - outer_TR[1]));
$.writeln("distance_top: "+w(T(d))),$.writeln("distance_right: "+w(T(h))),$.writeln("distance_bottom: "+w(T(g))),$.writeln("distance_left: "+w(T(_)));var f=C(s,o),A=C(s,c),M=C(u,m),P=C(u,v);function C(e,t){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(Math.pow(n,2)+Math.pow(r,2))}function T(e){var t=function(e){switch(e){case 2054188905:return"points";case 2054187363:return"picas";case 2053729891:return"inches";case 2053729892:return"inches decimal";case 2053991795:return"millimeters";case 2053336435:return"centimeters";case 2053335395:return"ciceros";default:alert("Cannot convert to the current ruler units. Sorry."),exit()}}
// Einheiten zurücksetzen
(app.documents[0].viewPreferences.horizontalMeasurementUnits);return new UnitValue(e,"points").as(t)}$.writeln("outer_width: "+w(T(f))),$.writeln("outer_height: "+w(T(A))),$.writeln("inner_width: "+w(T(M))),$.writeln("inner_height: "+w(T(P))),e.viewPreferences.horizontalMeasurementUnits=r,e.viewPreferences.verticalMeasurementUnits=i}function shortestDistanceToLine(e,t,n,r){var i=r[1]-n[1],a=n[0]-r[0],s=r[0]*n[1]-n[0]*r[1];return Math.abs(i*e+a*t+s)/Math.sqrt(i*i+a*a)}function distanceToLine_old(e,t,n,r){var i=r[1]-n[1],a=n[0]-r[0];return(i*e+a*t+(r[0]*n[1]-n[0]*r[1]))/Math.sqrt(i*i+a*a)}$.writeln("---\n"),$.writeln(myObj.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.spreadCoordinates)[0]),$.writeln(myObj.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.parentCoordinates,!0)[0]),$.writeln(myObj.resolve(AnchorPoint.TOP_LEFT_ANCHOR,CoordinateSpaces.INNER_COORDINATES)),$.writeln(myObj.resolve([AnchorPoint.TOP_LEFT_ANCHOR,BoundingBoxLimits.OUTER_STROKE_BOUNDS,CoordinateSpaces.INNER_COORDINATES],CoordinateSpaces.INNER_COORDINATES)),
// Rescale mySpread by (200%,50%)
// mySpread.transform(CoordinateSpaces.pasteboardCoordinates, [0, 0], [1, 0, 0, 1, 0, 0]);
// alert(mySpread.transformValuesOf(CoordinateSpaces.pasteboardCoordinates)[0].matrixValues);
// => 2, 0, 0, 0.5, 0, 0
// 134.9375, 89.9583333333333
doc.viewPreferences.horizontalMeasurementUnits=startHorizontalUnits,doc.viewPreferences.verticalMeasurementUnits=startVerticalUnits,shortestDistance();