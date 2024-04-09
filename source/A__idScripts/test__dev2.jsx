

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

getDimension_1();

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
var pItem = app.selection[0]; // get the selected object
$.writeln("---\n");
$.writeln('Geometric Dims: ' + naive_getDims(pItem));
$.writeln('Visible Dims: ' + naive_getDims(pItem, true));


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

$.writeln("---\n");
$.writeln('Geometric Dims: ' + improved_getDims(pItem));
$.writeln('Visible Dims: ' + improved_getDims(pItem, true));


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

$.writeln("---\n");
$.writeln('Geometric Dims: ' + adjusted_getDims(pItem));
$.writeln('Visible Dims: ' + adjusted_getDims(pItem, true));


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




//////////////////////////////////////////////////////////////////////////////

shortestDistance();

function shortestDistance() {
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

    var distance_top = distanceMath(outer_TL[0], outer_TL[1], inner_TL[0], inner_TL[1], inner_TR[0], inner_TR[1]);
    var distance_right = distanceMath(outer_TR[0], outer_TR[1], inner_TR[0], inner_TR[1], inner_BR[0], inner_BR[1]);
    var distance_bottom = distanceMath(outer_BR[0], outer_BR[1], inner_BR[0], inner_BR[1], inner_BL[0], inner_BL[1]);
    var distance_left = distanceMath(outer_BL[0], outer_BL[1], inner_BL[0], inner_BL[1], inner_TL[0], inner_TL[1]);

    $.writeln("distance_top: " + rund(pt2mm(distance_top)));
    $.writeln("distance_right: " + rund(pt2mm(distance_right)));
    $.writeln("distance_bottom: " + rund(pt2mm(distance_bottom)));
    $.writeln("distance_left: " + rund(pt2mm(distance_left)));


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
    $.writeln("outer_width: " + rund(pt2mm(outer_width)));
    $.writeln("outer_height: " + rund(pt2mm(outer_height)));
    $.writeln("inner_width: " + rund(pt2mm(inner_width)));
    $.writeln("inner_height: " + rund(pt2mm(inner_height)));
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