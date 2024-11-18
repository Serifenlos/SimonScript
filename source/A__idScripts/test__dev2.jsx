/** Variablen  **************************************************************/
//@include "./assets/json2.js"
var jsonFilePath = "~/.ss_settings.json";
var jsonData = loadJSON(jsonFilePath);

// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(filePath) {
    var file = new File(filePath);
    var content;

    if (file.exists) {
        file.open("r");
        content = file.read();
        file.close();

        // Parse JSON-Inhalt
        try {
            return JSON.parse(content);
        } catch (e) {
            alert("Fehler beim Parsen der JSON-Datei:\n" + e);
            return null;
        }
    } else {
        alert("Die JSON-Datei konnte nicht gefunden werden.");
        return null;
    }
}

// Funktion zum Finden eines Wertes in einem Array von Objekten
function jsonValue(key) {
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i][key] !== undefined) {
            return jsonData[i][key];
        }
    }
    return null;
}

/** Optionen  **************************************************************/
const debug = Boolean(jsonValue("Debug"));


/***************************************************************************/


// const { func } = require("prop-types");


function checkOut(index) {
    app.activeDocument.managedImages[index].checkOut()
}

function checkIn(index) {
    // app.activeDocument.managedImages[index].create();
    app.activeDocument.managedImages[index].pageItem[0].placeObject("65297");
    // app.activeDocument.selection[0].graphics[0].itemLink.update();
    // app.activeDocument.managedImages[index].pageItem[0].replaceEnterpriseImage("65297");
    // app.activeDocument.managedImages[index].pageItem[0].elvisPlace("65297");
    app.activeDocument.managedImages[index].checkIn();
}

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

function testDossier() {
    var idDoc = app.activeDocument;
    var idDocName = decodeURI(idDoc.name);
    var idDocDossier = idDoc.entWorkflow.defaultDossier;

    $.writeln(idDocName);
    $.writeln(idDoc.entWorkflow.defaultDossier);
    $.writeln(idDocName);

    if (idDocDossier) {
        $.writeln("idDocDossier: yes")
    } else {
        $.writeln("idDocDossier: no")
    }


    var idDocName_only = GetFileNameOnly(decodeURI(idDocName));
    $.writeln(idDocName_only);
    var idDocName_only = idDocName_only.replace(/^(.+)((-|_)\d{3})$/g, "$1");
    $.writeln(idDocName_only);

    function GetFileNameOnly(_fileName) {
        var myString = "";
        var myResult = _fileName.lastIndexOf(".");
        if (myResult == -1) {
            myString = _fileName;
        } else {
            myString = _fileName.substr(0, myResult);
        }
        return myString
    }
}

//////////////////////////////////////////////////////////////////////////////

// getDimension_1();

function getDimension_1() {
    if (app.selection[0] instanceof Image && app.selection[0].parent.graphics.length > 0) {
        var selection = app.selection[0].parent;
    } else {
        var selection = app.selection[0];
    }

    var doc = app.activeDocument;

    // Aktuelle Einheiten speichern
    var startHorizontalUnits = doc.viewPreferences.horizontalMeasurementUnits;
    var startVerticalUnits = doc.viewPreferences.verticalMeasurementUnits;

    // Einheiten auf Millimeter setzen
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.millimeters;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;

    // // Werte auslesen...
    // var bounds = doc.selection[0].geometricBounds;



    $.writeln("geometricBounds: " + selection.geometricBounds);
    $.writeln("rotationAngle: " + selection.rotationAngle);
    $.writeln("absoluteRotationAngle: " + selection.absoluteRotationAngle);
    $.writeln("---");
    $.writeln("geometricBounds_child: " + selection.allPageItems[0].geometricBounds);
    $.writeln("rotationAngle_child: " + selection.allPageItems[0].rotationAngle);
    $.writeln("absoluteRotationAngle_child: " + selection.allPageItems[0].absoluteRotationAngle);
    $.writeln("---");

    var bounds_outer = selection.geometricBounds;
    var mmBounds_outer = [];
    for (var i = 0; i < bounds_outer.length; i++) {
        mmBounds_outer.push(bounds_outer[i].toFixed(3))
        // mmBounds_outer.push(bounds_outer[i])
    }
    $.writeln(mmBounds_outer);

    var bounds_inner = selection.allPageItems[0].geometricBounds;
    var mmBounds_inner = [];
    for (var i = 0; i < bounds_inner.length; i++) {
        mmBounds_inner.push(bounds_inner[i].toFixed(3))
        // mmBounds_inner.push(bounds_inner[i])
    }
    $.writeln(mmBounds_inner);


    var width_outer = mmBounds_outer[3] - mmBounds_outer[1];
    var height_outer = mmBounds_outer[2] - mmBounds_outer[0];
    $.writeln("outer: " + width_outer + "x" + height_outer);

    var width_inner = mmBounds_inner[3] - mmBounds_inner[1];
    var height_inner = mmBounds_inner[2] - mmBounds_inner[0];
    $.writeln("inner: " + width_inner + "x" + height_inner);

    if (width_outer > width_inner) {
        $.writeln("breite anbauen: " + (width_outer - width_inner));
    }
    if (height_outer > height_inner) {
        $.writeln("höhe anbauen: " + (height_outer - height_inner));
    }



    // Einheiten zurücksetzen
    doc.viewPreferences.horizontalMeasurementUnits = startHorizontalUnits;
    doc.viewPreferences.verticalMeasurementUnits = startVerticalUnits;

}

//////////////////////////////////////////////////////////////////////////////

function naive_getDims(/*PageItem*/obj, /*bool*/visible)
// return the [width,height] of <obj>
// according to its (geometric|visible)Bounds
{
    var boundsProperty = ((visible) ? 'visible' : 'geometric') + 'Bounds';
    var b = obj[boundsProperty];
    // width=right-left , height = bottom-top
    return [b[3] - b[1], b[2] - b[0]];
}

// sample code
// var pItem = app.selection[0]; // get the selected object
// $.writeln("---\n");
// $.writeln('Geometric Dims: ' + naive_getDims(pItem));
// $.writeln('Visible Dims: ' + naive_getDims(pItem, true));


//////////////////////////////////////////////////////////////////////////////

function improved_getDims(/*PageItem*/obj, /*bool*/visible)
// return the [width,height] of <obj>
// according to its (geometric|visible)Bounds
{
    var boundsProperty = ((visible) ? 'visible' : 'geometric') + 'Bounds';

    // store rotation/shear angles
    var ra = obj.rotationAngle;
    var sa = obj.shearAngle;

    // apply 'zero' angles (temporarily)
    obj.rotationAngle = 0;
    obj.shearAngle = 0;

    // now, get the bounds
    var b = obj[boundsProperty];

    // restore rotation/shear angles
    obj.rotationAngle = ra;
    obj.shearAngle = sa;

    return [b[3] - b[1], b[2] - b[0]];
}

// $.writeln("---\n");
// $.writeln('Geometric Dims: ' + improved_getDims(pItem));
// $.writeln('Visible Dims: ' + improved_getDims(pItem, true));


//////////////////////////////////////////////////////////////////////////////

function adjusted_getDims(/*PageItem*/obj, /*bool*/visible)
// return the [width,height] of <obj>
// according to its (geometric|visible)Bounds
{
    var boundsProperty = ((visible) ? 'visible' : 'geometric') + 'Bounds';

    // store rotation/shear angles
    var ra = obj.rotationAngle;
    var sa = obj.shearAngle;
    $.writeln("ra: " + ra)
    $.writeln("sa: " + sa)

    // apply 'zero' angles (temporarily)
    obj.rotationAngle = 0;
    obj.shearAngle = 0;

    // now, get the bounds
    var b = obj[boundsProperty];

    // restore rotation/shear angles
    obj.rotationAngle = ra;
    obj.shearAngle = sa;

    // calculate the width and the height
    var w = b[3] - b[1];
    var h = (b[2] - b[0]) / Math.cos(sa * Math.PI / 180);
    return [w, h];
}

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


function nextTest() {

    var doc = app.activeDocument;
    // Aktuelle Einheiten speichern
    var startHorizontalUnits = doc.viewPreferences.horizontalMeasurementUnits;
    var startVerticalUnits = doc.viewPreferences.verticalMeasurementUnits;

    // Einheiten auf Millimeter setzen
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.millimeters;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;


    // app.transformPreferences.whenScaling = WhenScalingOptions.applyToContent;
    // var mySpread = app.activeDocument.spreads[0];
    var myObj = app.selection[0];
    // $.writeln(myObj.transformValuesOf(CoordinateSpaces.pasteboardCoordinates)[0].matrixValues)
    $.writeln("---\n");
    $.writeln(myObj.resolve(AnchorPoint.TOP_LEFT_ANCHOR, CoordinateSpaces.spreadCoordinates)[0])
    $.writeln(myObj.resolve(AnchorPoint.TOP_LEFT_ANCHOR, CoordinateSpaces.parentCoordinates, true)[0])
    $.writeln(myObj.resolve(AnchorPoint.TOP_LEFT_ANCHOR, CoordinateSpaces.INNER_COORDINATES));
    $.writeln(myObj.resolve([AnchorPoint.TOP_LEFT_ANCHOR, BoundingBoxLimits.OUTER_STROKE_BOUNDS, CoordinateSpaces.INNER_COORDINATES], CoordinateSpaces.INNER_COORDINATES));


    // Rescale mySpread by (200%,50%)
    // mySpread.transform(CoordinateSpaces.pasteboardCoordinates, [0, 0], [1, 0, 0, 1, 0, 0]);
    // alert(mySpread.transformValuesOf(CoordinateSpaces.pasteboardCoordinates)[0].matrixValues);
    // => 2, 0, 0, 0.5, 0, 0

    // 134.9375, 89.9583333333333

    doc.viewPreferences.horizontalMeasurementUnits = startHorizontalUnits;
    doc.viewPreferences.verticalMeasurementUnits = startVerticalUnits;

}

//////////////////////////////////////////////////////////////////////////////

// $.writeln(WidthAndHeight(myObj));


function WidthAndHeight(myRectangle) { // Returns an array [width,height]

    var myRectangleTopLeft = myRectangle.resolve(AnchorPoint.TOP_LEFT_ANCHOR, CoordinateSpaces.pasteboardCoordinates, true);
    var myRectangleTopRight = myRectangle.resolve(AnchorPoint.TOP_RIGHT_ANCHOR, CoordinateSpaces.pasteboardCoordinates, true);
    var myRectangleBottomRight = myRectangle.resolve(AnchorPoint.BOTTOM_RIGHT_ANCHOR, CoordinateSpaces.pasteboardCoordinates, true);
    var myRectangleBottomLeft = myRectangle.resolve(AnchorPoint.BOTTOM_LEFT_ANCHOR, CoordinateSpaces.pasteboardCoordinates, true);

    $.writeln("---\n");
    $.writeln(myRectangleTopLeft)
    $.writeln(myRectangleTopRight)
    $.writeln(myRectangleBottomRight)
    $.writeln(myRectangleBottomLeft)

    $.writeln("---\n");

    var d1x = (myRectangleTopRight[0][0] - myRectangleTopLeft[0][0]);
    var d1y = (myRectangleTopRight[0][1] - myRectangleTopLeft[0][1]);

    var myWidth = hypotenuse(d1x, d1y);

    var d2x = (myRectangleTopLeft[0][0] - myRectangleBottomLeft[0][0]);
    var d2y = (myRectangleTopLeft[0][1] - myRectangleBottomLeft[0][1]);

    var myHeight = hypotenuse(d2x, d2y);


    var myHorizontalUnits = unitsEnumToString(app.documents[0].viewPreferences.horizontalMeasurementUnits);
    var myVerticalUnits = unitsEnumToString(app.documents[0].viewPreferences.verticalMeasurementUnits);

    myWidth = new UnitValue(myWidth, "points");
    myHeight = new UnitValue(myHeight, "points");

    myWidth = myWidth.as(myHorizontalUnits);
    myHeight = myHeight.as(myVerticalUnits);

    return [myWidth, myHeight];

    function hypotenuse(d1, d2) {
        return Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
    }

    function unitsEnumToString(myUnitsEnum) {
        switch (myUnitsEnum) {
            case 2054188905:
                return "points";
            case 2054187363:
                return "picas";
            case 2053729891:
                return "inches";
            case 2053729892:
                return "inches decimal";
            case 2053991795:
                return "millimeters";
            case 2053336435:
                return "centimeters";
            case 2053335395:
                return "ciceros";
            default:
                alert("Cannot convert to the current ruler units. Sorry.");
                exit();

        }
    }
}




//////////////////////////////////////////////////////////////////////////////


function shortestDistance_2(x1, y1, x2, y2, x3, y3) {
    var px = x2 - x1;
    var py = y2 - y1;
    var something = px * px + py * py;
    var u = ((x3 - x1) * px + (y3 - y1) * py) / something;
    if (u > 1) {
        u = 1;
    } else if (u < 0) {
        u = 0;
    }
    var x = x1 + u * px;
    var y = y1 + u * py;
    var dx = x - x3;
    var dy = y - y3;
    return Math.sqrt(dx * dx + dy * dy);
}

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

function getDimension() {
    var doc = app.activeDocument;
    const cs = CoordinateSpaces, ap = AnchorPoint;

    // Aktuelle Einheiten speichern
    var startHorizontalUnits = doc.viewPreferences.horizontalMeasurementUnits;
    var startVerticalUnits = doc.viewPreferences.verticalMeasurementUnits;
    // Einheiten auf Millimeter setzen
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.millimeters;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;


    if (app.selection[0] instanceof Image && app.selection[0].parent.graphics.length > 0) {
        var selection = app.selection[0].parent;
    } else {
        var selection = app.selection[0];
    }

    selection_inner = selection.allPageItems[0];

    var outer_TL = selection.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0];
    var outer_TR = selection.resolve(ap.TOP_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var outer_BR = selection.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var outer_BL = selection.resolve(ap.BOTTOM_LEFT_ANCHOR, cs.pageCoordinates, true)[0];

    var inner_TL = selection_inner.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0];
    var inner_TR = selection_inner.resolve(ap.TOP_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var inner_BR = selection_inner.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var inner_BL = selection_inner.resolve(ap.BOTTOM_LEFT_ANCHOR, cs.pageCoordinates, true)[0];


    $.writeln("outer---");
    $.writeln(rund(pt2mm(outer_TL[0])) + ", " + rund(pt2mm(outer_TL[1])));
    $.writeln(rund(pt2mm(outer_TR[0])) + ", " + rund(pt2mm(outer_TR[1])));
    $.writeln(rund(pt2mm(outer_BR[0])) + ", " + rund(pt2mm(outer_BR[1])));
    $.writeln(rund(pt2mm(outer_BL[0])) + ", " + rund(pt2mm(outer_BL[1])));
    $.writeln("inner---");
    $.writeln(rund(pt2mm(inner_TL[0])) + ", " + rund(pt2mm(inner_TL[1])));
    $.writeln(rund(pt2mm(inner_TR[0])) + ", " + rund(pt2mm(inner_TR[1])));
    $.writeln(rund(pt2mm(inner_BR[0])) + ", " + rund(pt2mm(inner_BR[1])));
    $.writeln(rund(pt2mm(inner_BL[0])) + ", " + rund(pt2mm(inner_BL[1])));
    $.writeln("---\n");

    function rund(num) {
        var formatted = num.toFixed(3); // Auf drei Dezimalstellen runden
        formatted = formatted.replace(/\.?0+$/, ""); // Führende Nullen entfernen
        return formatted;
    }

    var distance_topL = distanceMath(outer_TL[0], outer_TL[1], inner_TL[0], inner_TL[1], inner_TR[0], inner_TR[1]);
    var distance_topR = distanceMath(outer_TR[0], outer_TR[1], inner_TL[0], inner_TL[1], inner_TR[0], inner_TR[1]);
    var distance_rightT = distanceMath(outer_TR[0], outer_TR[1], inner_TR[0], inner_TR[1], inner_BR[0], inner_BR[1]);
    var distance_rightB = distanceMath(outer_BR[0], outer_BR[1], inner_TR[0], inner_TR[1], inner_BR[0], inner_BR[1]);
    var distance_bottomR = distanceMath(outer_BR[0], outer_BR[1], inner_BR[0], inner_BR[1], inner_BL[0], inner_BL[1]);
    var distance_bottomL = distanceMath(outer_BL[0], outer_BL[1], inner_BR[0], inner_BR[1], inner_BL[0], inner_BL[1]);
    var distance_leftB = distanceMath(outer_BL[0], outer_BL[1], inner_BL[0], inner_BL[1], inner_TL[0], inner_TL[1]);
    var distance_leftT = distanceMath(outer_TL[0], outer_TL[1], inner_BL[0], inner_BL[1], inner_TL[0], inner_TL[1]);

    // $.writeln("distance_topL: " + rund(pt2mm(distance_topL)));
    // $.writeln("distance_topR: " + rund(pt2mm(distance_topR)));
    // $.writeln("distance_rightT: " + rund(pt2mm(distance_rightT)));
    // $.writeln("distance_rightB: " + rund(pt2mm(distance_rightB)));
    // $.writeln("distance_bottomR: " + rund(pt2mm(distance_bottomR)));
    // $.writeln("distance_bottomL: " + pt2mm(distance_bottomL));
    // $.writeln("distance_leftB: " + rund(pt2mm(distance_leftB)));
    // $.writeln("distance_leftT: " + rund(pt2mm(distance_leftT)));

    function getDistance(_zahl1, _zahl2) {
        // Vergleiche die beiden Zahlen und finde die größere
        var distance = Math.max(_zahl1, _zahl2);
        if (distance <= 0) {
            distance = 0;
        }
        return distance;
    }


    var top_distance = getDistance(distance_topL, distance_topR);
    var right_distance = getDistance(distance_rightT, distance_rightB);
    var bottom_distance = getDistance(distance_bottomR, distance_bottomL);
    var left_distance = getDistance(distance_leftB, distance_leftT);

    var enlargeCanvas_mm = [];
    enlargeCanvas_mm.push(rund(pt2mm(top_distance)));
    enlargeCanvas_mm.push(rund(pt2mm(right_distance)));
    enlargeCanvas_mm.push(rund(pt2mm(bottom_distance)));
    enlargeCanvas_mm.push(rund(pt2mm(left_distance)));

    var enlargeCanvas_pt = [];
    enlargeCanvas_pt.push((top_distance));
    enlargeCanvas_pt.push((right_distance));
    enlargeCanvas_pt.push((bottom_distance));
    enlargeCanvas_pt.push((left_distance));

    $.writeln("enlargeCanvas_mm: " + enlargeCanvas_mm);
    $.writeln("enlargeCanvas_pt: " + enlargeCanvas_pt);


    // enlargeCanvas: 14.14, 0, 0, 3.426

    function distanceMath(p1x, p1y, p2x, p2y, p3x, p3y) {
        var A = p3y - p2y;
        var B = p2x - p3x;
        var C = p3x * p2y - p2x * p3y;
        return (A * p1x + B * p1y + C) / Math.sqrt(A * A + B * B);
    }

    // var d1x = (outer_TL[0] - outer_TR[0]);
    // var d1y = (outer_TL[1] - outer_TR[1]);
    // var d2x = (myRectangleTopLeft[0][0] - myRectangleBottomLeft[0][0]);
    // var d2y = (myRectangleTopLeft[0][1] - myRectangleBottomLeft[0][1]);

    // var myWidth = hypotenuse(d1x, d1y);
    // var outer_width = hypotenuse2((outer_TL[0] - outer_TR[0]), (outer_TL[1] - outer_TR[1]));
    var outer_width = hypotenuse2(outer_TL, outer_TR);
    var outer_height = hypotenuse2(outer_TL, outer_BL);
    var inner_width = hypotenuse2(inner_TL, inner_TR);
    var inner_height = hypotenuse2(inner_TL, inner_BL);
    // $.writeln("outer_width_mm: " + rund(pt2mm(outer_width)));
    // $.writeln("outer_height_mm: " + rund(pt2mm(outer_height)));
    // $.writeln("inner_width_mm: " + rund(pt2mm(inner_width)));
    // $.writeln("inner_height_mm: " + rund(pt2mm(inner_height)));
    $.writeln("outer_width_pt: " + outer_width);
    $.writeln("outer_height_pt: " + outer_height);
    $.writeln("inner_width_pt: " + inner_width);
    $.writeln("inner_height_pt: " + inner_height);


    function hypotenuse2(_p1, _p2) {
        var x = _p1[0] - _p2[0];
        var y = _p1[1] - _p2[1];
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }


    function pt2mm(_input) {
        var myHorizontalUnits = unitsEnumToString(app.documents[0].viewPreferences.horizontalMeasurementUnits);
        return new UnitValue(_input, "points").as(myHorizontalUnits)
    }


    function unitsEnumToString(myUnitsEnum) {
        switch (myUnitsEnum) {
            case 2054188905:
                return "points";
            case 2054187363:
                return "picas";
            case 2053729891:
                return "inches";
            case 2053729892:
                return "inches decimal";
            case 2053991795:
                return "millimeters";
            case 2053336435:
                return "centimeters";
            case 2053335395:
                return "ciceros";
            default:
                alert("Cannot convert to the current ruler units. Sorry.");
                exit();

        }
    }

    // Einheiten zurücksetzen
    doc.viewPreferences.horizontalMeasurementUnits = startHorizontalUnits;
    doc.viewPreferences.verticalMeasurementUnits = startVerticalUnits;
}


function shortestDistanceToLine(x, y, p2, p3) {
    var A = p3[1] - p2[1];
    var B = p2[0] - p3[0];
    var C = p3[0] * p2[1] - p2[0] * p3[1];

    return Math.abs(A * x + B * y + C) / Math.sqrt(A * A + B * B);
}

function distanceToLine_old(x, y, p2, p3) {
    var A = p3[1] - p2[1];
    var B = p2[0] - p3[0];
    var C = p3[0] * p2[1] - p2[0] * p3[1];

    var distance = A * x + B * y + C;
    return distance / Math.sqrt(A * A + B * B);
}



////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// var scale = 1/(77.07867983815595/100);
// $.writeln("scale: " + scale)

// setBounds();

function setBounds() {
    var doc = app.activeDocument;
    const cs = CoordinateSpaces, ap = AnchorPoint;

    // Aktuelle Einheiten speichern
    var startHorizontalUnits = doc.viewPreferences.horizontalMeasurementUnits;
    var startVerticalUnits = doc.viewPreferences.verticalMeasurementUnits;
    // Einheiten auf Millimeter setzen
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.millimeters;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;


    if (app.selection[0] instanceof Image && app.selection[0].parent.graphics.length > 0) {
        var selection = app.selection[0].parent;
    } else {
        var selection = app.selection[0];
    }

    selection_inner = selection.allPageItems[0];

    function mm2pt(mm) {
        return mm * 2.83464566929;
    }

    var outer_TL = selection.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0];
    var outer_TR = selection.resolve(ap.TOP_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var outer_BR = selection.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var outer_BL = selection.resolve(ap.BOTTOM_LEFT_ANCHOR, cs.pageCoordinates, true)[0];

    var inner_TL = selection_inner.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0];
    var inner_TR = selection_inner.resolve(ap.TOP_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var inner_BR = selection_inner.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0];
    var inner_BL = selection_inner.resolve(ap.BOTTOM_LEFT_ANCHOR, cs.pageCoordinates, true)[0];




    // selection.images[0].horizontalScale = 100;
    // selection.images[0].verticalScale = 100;
    // selection_inner.move([-1, 0]);



    var hScale = selection.images[0].horizontalScale;
    var hScaleFactor = 1 / (hScale / 100);
    $.writeln("hScaleFactor: " + hScaleFactor);

    // selection_inner.transform(cs.pageCoordinates, [0, 0], [hScaleFactor, 0, 0, hScaleFactor, mm2pt(-1), mm2pt(-2)]);
    selection_inner.transform(cs.pasteboardCoordinates, ap.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, mm2pt(-50), mm2pt(-10)], undefined, true);


    var inner_TL2 = selection_inner.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, false)[0];

    $.writeln("outer---");
    $.writeln(rund(pt2mm(outer_TL[0])) + ", " + rund(pt2mm(outer_TL[1])));
    $.writeln(rund(pt2mm(outer_TR[0])) + ", " + rund(pt2mm(outer_TR[1])));
    $.writeln(rund(pt2mm(outer_BR[0])) + ", " + rund(pt2mm(outer_BR[1])));
    $.writeln(rund(pt2mm(outer_BL[0])) + ", " + rund(pt2mm(outer_BL[1])));
    $.writeln("inner---");
    $.writeln(rund(pt2mm(inner_TL[0])) + ", " + rund(pt2mm(inner_TL[1])));
    $.writeln(rund(pt2mm(inner_TL2[0])) + ", " + rund(pt2mm(inner_TL2[1])));
    $.writeln(rund(pt2mm(inner_TR[0])) + ", " + rund(pt2mm(inner_TR[1])));
    $.writeln(rund(pt2mm(inner_BR[0])) + ", " + rund(pt2mm(inner_BR[1])));
    $.writeln(rund(pt2mm(inner_BL[0])) + ", " + rund(pt2mm(inner_BL[1])));
    $.writeln("---\n");
    function rund(num) {
        var formatted = num.toFixed(3); // Auf drei Dezimalstellen runden
        formatted = formatted.replace(/\.?0+$/, ""); // Führende Nullen entfernen
        return formatted;
    }
    function pt2mm(_input) {
        var myHorizontalUnits = unitsEnumToString(app.documents[0].viewPreferences.horizontalMeasurementUnits);
        return new UnitValue(_input, "points").as(myHorizontalUnits)
    }
    function unitsEnumToString(myUnitsEnum) {
        switch (myUnitsEnum) {
            case 2054188905:
                return "points";
            case 2054187363:
                return "picas";
            case 2053729891:
                return "inches";
            case 2053729892:
                return "inches decimal";
            case 2053991795:
                return "millimeters";
            case 2053336435:
                return "centimeters";
            case 2053335395:
                return "ciceros";
            default:
                alert("Cannot convert to the current ruler units. Sorry.");
                exit();

        }
    }
    // Einheiten zurücksetzen
    doc.viewPreferences.horizontalMeasurementUnits = startHorizontalUnits;
    doc.viewPreferences.verticalMeasurementUnits = startVerticalUnits;
}


// repositionImage(28.34645669, 141.73228346);

function repositionImage(_top, _left) {
    const cs = CoordinateSpaces, ap = AnchorPoint;

    if (app.selection[0] instanceof Image && app.selection[0].parent.graphics.length > 0) {
        var selection = app.selection[0].parent;
    } else {
        var selection = app.selection[0];
    }

    selection_inner = selection.allPageItems[0];

    var hScale = selection.images[0].horizontalScale;
    var hScaleFactor = 1 / (hScale / 100);
    $.writeln("hScaleFactor: " + hScaleFactor);

    // selection_inner.transform(cs.pageCoordinates, [0, 0], [hScaleFactor, 0, 0, hScaleFactor, mm2pt(-1), mm2pt(-2)]);
    selection_inner.transform(cs.pasteboardCoordinates, ap.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, -1 * _left, -1 * _top], undefined, true);
}



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

function repositionImage_2(_top, _left) {
    const cs = CoordinateSpaces, ap = AnchorPoint;

    if (app.selection[0] instanceof Image && app.selection[0].parent.graphics.length > 0) {
        var selection = app.selection[0].parent;
    } else {
        var selection = app.selection[0];
    }

    selection_inner = selection.allPageItems[0];

    var hScale = selection.images[0].horizontalScale;
    var hScaleFactor = 1 / (hScale / 100);
    // $.writeln("hScaleFactor: " + hScaleFactor);

    // selection_inner.transform(cs.pageCoordinates, [0, 0], [hScaleFactor, 0, 0, hScaleFactor, mm2pt(-1), mm2pt(-2)]);
    // selection_inner.transform(cs.pasteboardCoordinates, ap.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, -1 * _left, -1 * _top], undefined, true);

    // selection_inner.transform(cs.pasteboardCoordinates, ap.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, -1 * _left, -1 * _top], undefined, true);
    selection_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, -1 * _left, -1 * _top], undefined, true);
}


// repositionImage_3(26.66015748, 0)

function repositionImage_3(_top, _left) {
    const cs = CoordinateSpaces, ap = AnchorPoint;

    if (app.selection[0] instanceof Image && app.selection[0].parent.graphics.length > 0) {
        var selection = app.selection[0].parent;
    } else {
        var selection = app.selection[0];
    }

    selection_inner = selection.allPageItems[0];

    selection.images[0].horizontalScale = 100;
    selection.images[0].verticalScale = 100;

    // selection_inner.transform(CoordinateSpaces.pageCoordinates, AnchorPoint.TOP_LEFT_ANCHOR, [1.63414638353613, 0, 0, 1.63414638353613, 0, 0], undefined, true);
    // selection_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.TOP_LEFT_ANCHOR, [1.26219515, 0, 0, 1.26219515, 0, 0], undefined, true);
    selection_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.CENTER_ANCHOR, [1, 0, 0, 1, -1 * _left, -1 * _top], undefined, true);
}




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

function automatisch() {


    var hScaleFactor = 1.0991264408356;
    var _top = 299.54783134;
    var _left = 52.07432852;
    var _inner_width = 1066.11938032;
    var _top_factor = _top * hScaleFactor;
    var _left_factor = _left * hScaleFactor;

    try {

        if (app.selection[0] instanceof Image && app.selection[0].parent.graphics.length > 0) {
            var selection = app.selection[0].parent;
        } else {
            var selection = app.selection[0];
        }

    } catch (e) {
        alert(e)
    }

    var image = selection.images[0];
    var imageLink = selection.graphics[0].itemLink;

    var imageRGB = imageLink.parent.parent;
    var imageRGB_inner = imageRGB.allPageItems[0];

    var zoomScaleFactor = (_left + _inner_width) / _inner_width;


    // imageRGB_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, 0, 0], undefined, true);
    // imageRGB_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.CENTER_ANCHOR, [1, 0, 0, 1, -1 * _left, -1 * _top], undefined, true);


    imageRGB_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.CENTER_ANCHOR, [1, 0, 0, 1, -1 * _left_factor, -1 * _top_factor], undefined, true);
    imageRGB_inner.transform(CoordinateSpaces.INNER_COORDINATES, AnchorPoint.TOP_LEFT_ANCHOR, [hScaleFactor, 0, 0, hScaleFactor, 0, 0], undefined, true);

    // alert("ding")

}




// $.writeln("Dimension \n" + 
//     "width: " + main()[0]  + "\n" +
//     "height: " + main()[1]
// );

function main() {
    var doc = app.activeDocument;
    var page = doc.pages[0];
    var bounds = page.bounds;
    $.writeln("Bounds \n" +
        "0: " + bounds[0] + "\n" +
        "1: " + bounds[1] + "\n" +
        "2: " + bounds[2] + "\n" +
        "3: " + bounds[3] + "\n"
    )
    var width = RoundWithDecimal(bounds[3] - bounds[1], 3);
    var height = RoundWithDecimal(bounds[2] - bounds[0], 3);
    var dimension = [];
    dimension.push(width);
    dimension.push(height);

    var bounds = [];

    bounds.push(bounds[0]);
    bounds.push(bounds[1]);
    bounds.push(bounds[2]);
    bounds.push(bounds[3]);


    return dimension;
}

function RoundWithDecimal(number, decimals) {
    var multiplier = Math.pow(10, decimals);
    return Math.round(number * multiplier) / multiplier;
}


// Aktuelle Einheiten speichern
var startHorizontalUnits = app.activeDocument.viewPreferences.horizontalMeasurementUnits;
var startVerticalUnits = app.activeDocument.viewPreferences.verticalMeasurementUnits;
// Einheiten auf Millimeter setzen
// app.activeDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.millimeters;
// app.activeDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;
app.activeDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
app.activeDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;

// set the ruler to "page", again so our math works out.
oldOrigin = app.activeDocument.viewPreferences.rulerOrigin // save old ruler origin

// Spread Origin is necessary for some reason, otherwise I can't figure out how to refer to dimensions on both pages
// app.activeDocument.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
app.activeDocument.viewPreferences.rulerOrigin = RulerOrigin.SPINE_ORIGIN;


// app.activeDocument.layoutWindows[0].activePage.parent.pages
const cs = CoordinateSpaces, ap = AnchorPoint;
var selection = app.selection[0];
var image_inner = selection.allPageItems[0];


/**
 * Example of getting bounds of a spread.
 * @author m1b
 * @discussion https://community.adobe.com/t5/indesign-discussions/how-do-you-call-the-actively-selected-spread-length-width-in-a-document-or-page-bounds/m-p/13940663
 */
(function () {

    var doc = app.activeDocument,
        page = doc.layoutWindows[0].activePage,
        spread = page.parent,
        spreadBounds = getExpandedBounds(spread.pages.everyItem().bounds);
    // spreadBounds = spread.pages.everyItem().bounds;

    $.writeln('Bounds of active spread:\n' + spreadBounds);

})();

// const cs = CoordinateSpaces, ap = AnchorPoint;
var activePage = app.activeDocument.layoutWindows[0].activePage;

// Koordinaten der aktiven Seite relativ zum Druckbogen (spreadCoordinates) ermitteln
var topLeft = activePage.resolve(ap.TOP_LEFT_ANCHOR, cs.spreadCoordinates, false)[0];
var bottomRight = activePage.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.spreadCoordinates, false)[0];

// Ausgabe der Koordinaten
$.writeln("Aktive Seite: " + activePage.name);
$.writeln("Oben links (spreadCoordinates): [" + topLeft[0] + ", " + topLeft[1] + "]");
$.writeln("Unten rechts (spreadCoordinates): [" + bottomRight[0] + ", " + bottomRight[1] + "]");



$.writeln("spreadMoveX page: " + image_inner.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0][0]);
$.writeln("spreadMoveY page: " + image_inner.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0][1]);

$.writeln("spreadMoveX spread: " + image_inner.resolve(ap.TOP_LEFT_ANCHOR, cs.spreadCoordinates, true)[0][0]);
$.writeln("spreadMoveY spread: " + image_inner.resolve(ap.TOP_LEFT_ANCHOR, cs.spreadCoordinates, true)[0][1]);



// Get the active spread
var activeSpread = app.activeDocument.layoutWindows[0].activeSpread;




// $.writeln("spreadMoveX page: " + app.activeDocument.layoutWindows[0].activePage.resolve(ap.TOP_LEFT_ANCHOR, cs.pageCoordinates, true)[0][0]);
// $.writeln("spreadMoveX page: " + app.activeDocument.layoutWindows[0].activePage.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0][0]);
// $.writeln("spreadMoveX page: " + app.activeDocument.layoutWindows[0].activePage.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.pageCoordinates, true)[0][1]);

// app.activeDocument.layoutWindows[0].activePage.parent.pages.anyItem().resolve(AnchorPoint.TOP_LEFT_ANCHOR, CoordinateSpaces.pageCoordinates, true)[0]
// $.writeln(image_inner.transformValuesOf(cs.SPREAD_COORDINATES)[0])
// $.writeln(image_inner.transformValuesOf(CoordinateSpaces.SPREAD_COORDINATES)[0].matrixValues)
// 8.43175874726769,0,-3.20592491380523e-16,8.43175874726769,-7.04867079534995,9.80128334049368e-9
// Einheiten zurücksetzen
app.activeDocument.viewPreferences.horizontalMeasurementUnits = startHorizontalUnits;
app.activeDocument.viewPreferences.verticalMeasurementUnits = startVerticalUnits;
oldOrigin = app.activeDocument.viewPreferences.rulerOrigin // save old ruler origin


function berechneDruckbogenGroesse() {
    const cs = CoordinateSpaces, ap = AnchorPoint;
    var activeSpread = app.activeDocument.layoutWindows[0].activeSpread;
    var pageCount = activeSpread.pages.length;
    var pageCoordinates = [];

    // Koordinaten der Seiten innerhalb des Spread-Koordinatensystems sammeln
    for (var i = 0; i < pageCount; i++) {
        var page = activeSpread.pages[i];
        var topLeftX = page.resolve(ap.TOP_LEFT_ANCHOR, cs.spreadCoordinates, false)[0][0];
        var topLeftY = page.resolve(ap.TOP_LEFT_ANCHOR, cs.spreadCoordinates, false)[0][1];
        var bottomRightX = page.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.spreadCoordinates, false)[0][0];
        var bottomRightY = page.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.spreadCoordinates, false)[0][1];

        pageCoordinates.push({
            topLeft: [topLeftX, topLeftY],
            bottomRight: [bottomRightX, bottomRightY]
        });
    }

    // Initialisierung für Min/Max Berechnung
    var minX = Infinity, maxX = -Infinity;
    var minY = Infinity, maxY = -Infinity;

    // Berechnung der minimalen und maximalen Koordinaten
    for (var i = 0; i < pageCoordinates.length; i++) {
        var coord = pageCoordinates[i];
        if (coord.topLeft[0] < minX) minX = coord.topLeft[0];
        if (coord.bottomRight[0] > maxX) maxX = coord.bottomRight[0];
        if (coord.topLeft[1] < minY) minY = coord.topLeft[1];
        if (coord.bottomRight[1] > maxY) maxY = coord.bottomRight[1];
    }

    // Höhe und Breite berechnen
    var druckbogenHoehe = maxX - minX;
    var druckbogenBreite = maxY - minY;

    return [druckbogenHoehe, druckbogenBreite];
}

// Funktion aufrufen und Ergebnis ausgeben
// var druckbogenGroesse = berechneDruckbogenGroesse();
// $.writeln("Höhe des Druckbogens: " + druckbogenGroesse[0]);
// $.writeln("Breite des Druckbogens: " + druckbogenGroesse[1]);


function berechneDruckbogenGroesse(_image) {
    const cs = CoordinateSpaces, ap = AnchorPoint;
    var containingPage = _image.parentPage;

    if (containingPage == null) {
        $.writeln("Das Bild befindet sich nicht auf einer Seite.");
        return null;
    }

    var activeSpread = containingPage.parent;
    var pageCount = activeSpread.pages.length;
    var pageCoordinates = [];

    // Koordinaten der Seiten innerhalb des Spread-Koordinatensystems sammeln
    for (var i = 0; i < pageCount; i++) {
        var page = activeSpread.pages[i];
        var topLeftX = page.resolve(ap.TOP_LEFT_ANCHOR, cs.spreadCoordinates, false)[0][0];
        var topLeftY = page.resolve(ap.TOP_LEFT_ANCHOR, cs.spreadCoordinates, false)[0][1];
        var bottomRightX = page.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.spreadCoordinates, false)[0][0];
        var bottomRightY = page.resolve(ap.BOTTOM_RIGHT_ANCHOR, cs.spreadCoordinates, false)[0][1];

        pageCoordinates.push({
            topLeft: [topLeftX, topLeftY],
            bottomRight: [bottomRightX, bottomRightY]
        });
    }

    // Initialisierung für Min/Max Berechnung
    var minX = Infinity, maxX = -Infinity;
    var minY = Infinity, maxY = -Infinity;

    // Berechnung der minimalen und maximalen Koordinaten
    for (var i = 0; i < pageCoordinates.length; i++) {
        var coord = pageCoordinates[i];
        if (coord.topLeft[0] < minX) minX = coord.topLeft[0];
        if (coord.bottomRight[0] > maxX) maxX = coord.bottomRight[0];
        if (coord.topLeft[1] < minY) minY = coord.topLeft[1];
        if (coord.bottomRight[1] > maxY) maxY = coord.bottomRight[1];
    }

    // Höhe und Breite des Druckbogens berechnen
    var druckbogenBreite = maxX - minX;
    var druckbogenHoehe = maxY - minY;

    // Verschiebung des Druckbogens relativ zum Ursprung des spreadCoordinates-Systems
    var pageMoveX = minX;
    var pageMoveY = minY;


    return [druckbogenBreite, druckbogenHoehe, pageMoveX, pageMoveY]
}

// Funktion aufrufen und Ergebnisse ausgeben
var druckbogenDaten = berechneDruckbogenGroesse(selection);
if (druckbogenDaten != null) {
    $.writeln("xx: " + druckbogenDaten)
    $.writeln("Breite des Druckbogens: " + druckbogenDaten[0]);
    $.writeln("Höhe des Druckbogens: " + druckbogenDaten[1]);
    $.writeln("Verschiebung X-Achse: " + druckbogenDaten[2]);
    $.writeln("Verschiebung Y-Achse: " + druckbogenDaten[3]);
}



/**
 * Returns the overall bounds, when
 * given an array of bounds ordered
 * as Indesign bounds [TLBR].
 * @author m1b
 * @version 2023-07-17
 * @param {Array<Array<Number>>} arr - an array of bounds arrays.
 * @returns {Array<Number>} - the expanded bounds [TLBR].
 */
function getExpandedBounds(arr) {
    // https://community.adobe.com/t5/indesign-discussions/how-do-you-call-the-actively-selected-spread-length-width-in-a-document-or-page-bounds/m-p/13940663
    var bounds = [Infinity, Infinity, -Infinity, -Infinity];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            if (j < 2)
                bounds[j] = Math.min(bounds[j], arr[i][j])
            else
                bounds[j] = Math.max(bounds[j], arr[i][j])
        }
    }
    return bounds;
};
