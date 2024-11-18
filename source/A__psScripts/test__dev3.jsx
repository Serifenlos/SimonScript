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


function make(red, grain, blue, unitValueQuadVersion, top, left, bottom, right, topRight, topLeft, bottomLeft, bottomRight, strokeStyleVersion, strokeEnabled, fillEnabled, strokeStyleLineWidth, strokeStyleLineDashOffset, strokeStyleMiterLimit, strokeStyleScaleLock, strokeStyleStrokeAdjust, strokeStyleOpacity, redFloat, greenFloat, blueFloat, strokeStyleResolution, layerID) {
	var s2t = function (s) {
		return app.stringIDToTypeID(s);
	};

	var descriptor = new ActionDescriptor();
	var descriptor2 = new ActionDescriptor();
	var descriptor3 = new ActionDescriptor();
	var descriptor4 = new ActionDescriptor();
	var descriptor5 = new ActionDescriptor();
	var descriptor6 = new ActionDescriptor();
	var descriptor7 = new ActionDescriptor();
	var descriptor8 = new ActionDescriptor();
	var list = new ActionList();
	var reference = new ActionReference();

	reference.putClass(s2t("contentLayer"));
	descriptor7.putReference(s2t("null"), reference);
	descriptor2.putDouble(s2t("red"), red);
	descriptor2.putDouble(s2t("grain"), grain);
	descriptor2.putDouble(s2t("blue"), blue);
	descriptor.putObject(s2t("color"), s2t("RGBColor"), descriptor2);
	descriptor8.putObject(s2t("type"), s2t("solidColorLayer"), descriptor);
	descriptor3.putInteger(s2t("unitValueQuadVersion"), unitValueQuadVersion);
	descriptor3.putUnitDouble(s2t("top"), s2t("pixelsUnit"), top);
	descriptor3.putUnitDouble(s2t("left"), s2t("pixelsUnit"), left);
	descriptor3.putUnitDouble(s2t("bottom"), s2t("pixelsUnit"), bottom);
	descriptor3.putUnitDouble(s2t("right"), s2t("pixelsUnit"), right);
	descriptor3.putUnitDouble(s2t("topRight"), s2t("pixelsUnit"), topRight);
	descriptor3.putUnitDouble(s2t("topLeft"), s2t("pixelsUnit"), topLeft);
	descriptor3.putUnitDouble(s2t("bottomLeft"), s2t("pixelsUnit"), bottomLeft);
	descriptor3.putUnitDouble(s2t("bottomRight"), s2t("pixelsUnit"), bottomRight);
	descriptor8.putObject(s2t("shape"), s2t("rectangle"), descriptor3);
	descriptor4.putInteger(s2t("strokeStyleVersion"), strokeStyleVersion);
	descriptor4.putBoolean(s2t("strokeEnabled"), strokeEnabled);
	descriptor4.putBoolean(s2t("fillEnabled"), fillEnabled);
	descriptor4.putUnitDouble(s2t("strokeStyleLineWidth"), s2t("pixelsUnit"), strokeStyleLineWidth);
	descriptor4.putUnitDouble(s2t("strokeStyleLineDashOffset"), s2t("pointsUnit"), strokeStyleLineDashOffset);
	descriptor4.putDouble(s2t("strokeStyleMiterLimit"), strokeStyleMiterLimit);
	descriptor4.putEnumerated(s2t("strokeStyleLineCapType"), s2t("strokeStyleLineCapType"), s2t("strokeStyleButtCap"));
	descriptor4.putEnumerated(s2t("strokeStyleLineJoinType"), s2t("strokeStyleLineJoinType"), s2t("strokeStyleMiterJoin"));
	descriptor4.putEnumerated(s2t("strokeStyleLineAlignment"), s2t("strokeStyleLineAlignment"), s2t("strokeStyleAlignCenter"));
	descriptor4.putBoolean(s2t("strokeStyleScaleLock"), strokeStyleScaleLock);
	descriptor4.putBoolean(s2t("strokeStyleStrokeAdjust"), strokeStyleStrokeAdjust);
	descriptor4.putList(s2t("strokeStyleLineDashSet"), list);
	descriptor4.putEnumerated(s2t("strokeStyleBlendMode"), s2t("blendMode"), s2t("normal"));
	descriptor4.putUnitDouble(s2t("strokeStyleOpacity"), s2t("percentUnit"), strokeStyleOpacity);
	descriptor6.putDouble(s2t("redFloat"), redFloat);
	descriptor6.putDouble(s2t("greenFloat"), greenFloat);
	descriptor6.putDouble(s2t("blueFloat"), blueFloat);
	descriptor5.putObject(s2t("color"), s2t("RGBColor"), descriptor6);
	descriptor4.putObject(s2t("strokeStyleContent"), s2t("solidColorLayer"), descriptor5);
	descriptor4.putDouble(s2t("strokeStyleResolution"), strokeStyleResolution);
	descriptor8.putObject(s2t("strokeStyle"), s2t("strokeStyle"), descriptor4);
	descriptor7.putObject(s2t("using"), s2t("contentLayer"), descriptor8);
	descriptor7.putInteger(s2t("layerID"), layerID);
	executeAction(s2t("make"), descriptor7, DialogModes.NO);
}



// =======================================================
// make(127, 111, 111, 1, 10, 30, 50, 100);

var rectangleTop = 7.8901213091;
var rectangleLeft = 2.8753896499;
var rectangleBottom = 83.6977036271;
var rectangleRight = 88.4559117911;

// form_create("rectangle", rectangleTop, rectangleLeft, rectangleBottom, rectangleRight);
// _form "rectangle" , "ellipse"


function form_create(_form, _top, _left, _bottom, _right) {
	var d = new ActionDescriptor();
	var d2 = new ActionDescriptor();
	var d3 = new ActionDescriptor();
	var d4 = new ActionDescriptor();
	var d5 = new ActionDescriptor();
	var r = new ActionReference();

	r.putClass(s2t("contentLayer"));
	d.putReference(s2t("null"), r);
	d4.putDouble(s2t("red"), 255);
	d4.putDouble(s2t("grain"), 255);
	d4.putDouble(s2t("blue"), 255);
	d3.putObject(s2t("color"), s2t("RGBColor"), d4);
	d2.putObject(s2t("type"), s2t("solidColorLayer"), d3);
	d5.putUnitDouble(s2t("top"), s2t("percentUnit"), _top);
	d5.putUnitDouble(s2t("left"), s2t("percentUnit"), _left);
	d5.putUnitDouble(s2t("bottom"), s2t("percentUnit"), _bottom);
	d5.putUnitDouble(s2t("right"), s2t("percentUnit"), _right);

	d2.putObject(s2t("shape"), s2t(_form), d5);
	d.putObject(s2t("using"), s2t("contentLayer"), d2);
	executeAction(s2t("make"), d, DialogModes.NO);
}





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
function changePathDetails(keyOriginType, keyOriginResolution, keyActionMode) {
	var s2t = function (s) {
		return app.stringIDToTypeID(s);
	};

	var descriptor = new ActionDescriptor();

	descriptor.putInteger(s2t("keyOriginType"), keyOriginType);
	descriptor.putDouble(s2t("keyOriginResolution"), keyOriginResolution);
	descriptor.putInteger(s2t("keyActionMode"), keyActionMode);
	executeAction(s2t("changePathDetails"), descriptor, DialogModes.NO);
}

// =======================================================
// changePathDetails2(3, 1);
function changePathDetails2(keyOriginType, keyActionMode) {
	var d = new ActionDescriptor();

	d.putInteger(s2t("keyOriginType"), keyOriginType);
	d.putInteger(s2t("keyActionMode"), keyActionMode);
	executeAction(s2t("changePathDetails"), d, DialogModes.NO);
}

s2t = stringIDToTypeID;
(ref = new ActionReference()).putProperty(s2t("property"), s2t("layerKind"))
ref.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"))
var activeLayerType = executeActionGet(ref).getInteger(s2t("layerKind"))

// alert (activeLayerType)



// =======================================================
// transform(45.520361, 27.560856, true);

function transform(horizontal, vertical) {
	var d = new ActionDescriptor();
	var d2 = new ActionDescriptor();
	var r = new ActionReference();

	r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
	d.putReference(s2t("null"), r);
	d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner0"));
	d2.putUnitDouble(s2t("horizontal"), s2t("distanceUnit"), horizontal);
	d2.putUnitDouble(s2t("vertical"), s2t("distanceUnit"), vertical);
	d.putObject(s2t("offset"), s2t("offset"), d2);
	// d.putBoolean(s2t("linked"), linked);
	d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
	executeAction(s2t("transform"), d, DialogModes.NO);
}


// =======================================================
// transform(0, 0, 11, true);

function transform(horizontal, vertical, angle) {
	var d = new ActionDescriptor();
	var d2 = new ActionDescriptor();
	var r = new ActionReference();

	r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
	d.putReference(s2t("null"), r);
	d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner0"));
	d2.putUnitDouble(s2t("horizontal"), s2t("distanceUnit"), horizontal);
	d2.putUnitDouble(s2t("vertical"), s2t("distanceUnit"), vertical);
	d.putObject(s2t("offset"), s2t("offset"), d2);
	d.putUnitDouble(s2t("angle"), s2t("angleUnit"), angle);
	d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
	executeAction(s2t("transform"), d, DialogModes.NO);
}


function calculateAngle(x1, y1, x2, y2) {
	// Berechne die Differenzen der Koordinaten
	var deltaY = y2 - y1;
	var deltaX = x2 - x1;

	// Berechne den Winkel in Radiant
	var angleInRadians = Math.atan2(deltaY, deltaX);

	// Umrechnung von Radiant in Grad
	var angleInDegrees = angleInRadians * (180 / Math.PI);

	// Gib den Winkel in Grad zurück
	return angleInDegrees;
}

// Koordinaten für P1 und P2
var x1 = -45.5223191802766;
var y1 = -27.555118111;
var x2 = 457.124593396448;
var y2 = -71.5310247177696;

// Berechne den Winkel
var angleXX = calculateAngle(x1, y1, x2, y2) * -1;
// console.log("Steigungswinkel: " + angle + " Grad");
// alert("Steigungswinkel: " + angle + " Grad");


// gotoLayer("Rechteck 1");
// var r = app.preferences.rulerUnits;
// app.preferences.rulerUnits = Units.POINTS;
// // layer_transform2("topleft", 45.520361, 27.560856, 100, 100, "%_canvas", t, "distanceUnit", angleXX);
// layer_transform("topleft", 45.5223191802766, 27.555118111, 100, 100, "%_canvas", t, "distanceUnit", angleXX);
// app.preferences.rulerUnits = r;


function layer_transform2(_point, _moveX, _moveY, _transformX, _transformY, _unit, _linked, _moveUnit, _angle) {
	var d = new ActionDescriptor();
	var d2 = new ActionDescriptor();
	var r = new ActionReference();

	// alert("point " + _point + "\nmoveX " + _moveX + "\nmoveY " + _moveY + "\ntransformX " + _transformX + "\ntransformY " + _transformY + "\nunit " + _unit + "\nlinked " + _linked)


	// die Positionierung ist leider buggy, oder??
	if (_point == "topleft") { var _pointX = "QCSCorner0" }
	else if (_point == "topcenter") { var _pointX = "QCSSide0" }
	else if (_point == "topright") { var _pointX = "QCSCorner1" }
	else if (_point == "midleft") { var _pointX = "QCSSide3" }
	else if (_point == "midcenter") { var _pointX = "QCSAverage" }
	else if (_point == "midright") { var _pointX = "QCSSide1" }
	else if (_point == "bottomleft") { var _pointX = "QCSCorner3" }
	else if (_point == "bottomcenter") { var _pointX = "QCSSide2" }
	else if (_point == "bottomright") { var _pointX = "QCSCorner2" }
	else { var _pointX = "QCSCorner0" }

	_moveUnit = _moveUnit ? _moveUnit : "pixelsUnit";
	_angle = _angle ? _angle : 0;

	r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
	d.putReference(s2t("null"), r);
	d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t(_pointX));
	d2.putUnitDouble(s2t("horizontal"), s2t(_moveUnit), _moveX);
	d2.putUnitDouble(s2t("vertical"), s2t(_moveUnit), _moveY);
	d.putObject(s2t("offset"), s2t("offset"), d2);
	d.putUnitDouble(s2t("angle"), s2t("angleUnit"), _angle * -1);

	if (_unit == "%_canvas") {
		var layer_width = app.activeDocument.activeLayer.bounds[2] - app.activeDocument.activeLayer.bounds[0];
		var layer_height = app.activeDocument.activeLayer.bounds[3] - app.activeDocument.activeLayer.bounds[1];
		var doc_layer_width = parseFloat(app.activeDocument.width / layer_width * _transformX);
		var doc_layer_height = parseFloat(app.activeDocument.height / layer_height * _transformY);
		// alert(doc_layer_width + " " + doc_layer_height)
		if (_transformX) { d.putUnitDouble(s2t("width"), s2t("percentUnit"), doc_layer_width) }
		if (_transformY) { d.putUnitDouble(s2t("height"), s2t("percentUnit"), doc_layer_height) }

	} else if (_unit == "%_layer") {
		var layer_width = app.activeDocument.activeLayer.bounds[2] - app.activeDocument.activeLayer.bounds[0];
		var layer_height = app.activeDocument.activeLayer.bounds[3] - app.activeDocument.activeLayer.bounds[1];
		var doc_layer_width = parseFloat(layer_width / app.activeDocument.width * _transformX * 10);
		var doc_layer_height = parseFloat(layer_height / app.activeDocument.height * _transformY * 10);
		// alert(doc_layer_width + " " + doc_layer_height);
		if (_transformX) { d.putUnitDouble(s2t("width"), s2t("percentUnit"), doc_layer_width) }
		if (_transformY) { d.putUnitDouble(s2t("height"), s2t("percentUnit"), doc_layer_height) }

	} else if (_unit == "px") {
		var doc_layer_width = parseFloat(_transformX / app.activeDocument.width * 100);
		var doc_layer_height = parseFloat(_transformY / app.activeDocument.height * 100);
		// alert(doc_layer_width + " " + doc_layer_height)
		if (_transformX) { d.putUnitDouble(s2t("width"), s2t("percentUnit"), doc_layer_width) }
		if (_transformY) { d.putUnitDouble(s2t("height"), s2t("percentUnit"), doc_layer_height) }
	}

	if ((_transformX || _transformY) && (_linked)) { d.putBoolean(s2t("linked"), _linked); }

	d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
	executeAction(s2t("transform"), d, DialogModes.NO);
}






/////////////////////////
// get Angle Shape
/////////////////////////
function getAngleofShape() {
	var angle = layer_shape_getAngle("Beschnitt");
	$.writeln(angle);

	selectLayers("selectAllLayers");
	layer_transform("midcenter", 0, 0, undefined, undefined, undefined, t, "distanceUnit", angle * -1);

	gotoLayer_bySelector("Beschnitt")
	vectorMask2seletion();


	crop_bySelection();
}
// getAngleofShape();


/////////////////////////
// get Shape Dimension
/////////////////////////
function setBeschnitt() {
	startRulerUnits = app.preferences.rulerUnits;
	app.preferences.rulerUnits = Units.POINTS;
	// $.writeln(layer_shape_getDimension("Beschnitt").topLeft.x);
	// $.writeln(layer_shape_getDimension("Ansicht"));

	var shapeDimension_beschnitt = layer_shape_getDimension("Beschnitt");
	var shapeDimension_ansicht = layer_shape_getDimension("Ansicht");

	var schnittmenge = berechneSchnittmenge(shapeDimension_beschnitt, shapeDimension_ansicht);


	function layer_shape_getDimension(_input) {
		// Überprüfen, ob der Layer vom richtigen Typ ist
		if (layer_getLayerType(_input) === 4) {
			var selectedLayers = layer_selectedIDX_get();
			gotoLayer_bySelector(_input);

			var r = new ActionReference();
			r.putEnumerated(s2t("path"), s2t("ordinal"), s2t("targetEnum"));
			var d = executeActionGet(r);

			// Pfaddaten erhalten
			var pathContents = d.getObjectValue(s2t("pathContents"));
			var pathComponents = pathContents.getList(s2t("pathComponents"));

			var anchorPoints = [];

			// Iteriere über die Pfad-Komponenten, um die Punkte zu extrahieren
			for (var i = 0; i < pathComponents.count; i++) {
				var component = pathComponents.getObjectValue(i);
				var subpathList = component.getList(s2t("subpathListKey"));

				for (var j = 0; j < subpathList.count; j++) {
					var subpath = subpathList.getObjectValue(j);
					var points = subpath.getList(s2t("points"));

					// Extrahiere die Ankerpunkte
					for (var k = 0; k < points.count; k++) {
						var point = points.getObjectValue(k);
						var anchor = point.getObjectValue(s2t("anchor"));

						// X- und Y-Koordinaten der Ankerpunkte
						var x = anchor.getUnitDoubleValue(s2t("horizontal"));
						var y = anchor.getUnitDoubleValue(s2t("vertical"));

						anchorPoints.push({ x: x, y: y });
					}
				}
			}

			// Berechnung der minimalen und maximalen X- und Y-Koordinaten in ES3
			var minX = Infinity, maxX = -Infinity;
			var minY = Infinity, maxY = -Infinity;

			for (var n = 0; n < anchorPoints.length; n++) {
				if (anchorPoints[n].x < minX) minX = anchorPoints[n].x;
				if (anchorPoints[n].x > maxX) maxX = anchorPoints[n].x;
				if (anchorPoints[n].y < minY) minY = anchorPoints[n].y;
				if (anchorPoints[n].y > maxY) maxY = anchorPoints[n].y;
			}

			// Setze die Auswahl zurück und gebe die Koordinaten als topLeft und bottomRight zurück
			layer_selectedIDX_set(selectedLayers);

			return {
				topLeft: { x: minX, y: minY },
				bottomRight: { x: maxX, y: maxY }
			};
		} else {
			return false;
		}
	}




	function berechneSchnittmenge(beschnitt, ansicht) {
		$.writeln("shapeDimension_beschnitt: " + beschnitt.topLeft.x)
		// Bestimme die linke obere Ecke der Schnittmenge (maximales X und Y)
		var schnittObenLinksX = Math.max(beschnitt.topLeft.x, ansicht.topLeft.x);
		var schnittObenLinksY = Math.max(beschnitt.topLeft.y, ansicht.topLeft.y);

		// Bestimme die rechte untere Ecke der Schnittmenge (minimales X und Y)
		var schnittUntenRechtsX = Math.min(beschnitt.bottomRight.x, ansicht.bottomRight.x);
		var schnittUntenRechtsY = Math.min(beschnitt.bottomRight.y, ansicht.bottomRight.y);

		// Überprüfe, ob es eine tatsächliche Überlappung gibt
		if (schnittObenLinksX < schnittUntenRechtsX && schnittObenLinksY < schnittUntenRechtsY) {
			return {
				topLeft: [schnittObenLinksX, schnittObenLinksY],
				bottomRight: [schnittUntenRechtsX, schnittUntenRechtsY],
				width: schnittUntenRechtsX - schnittObenLinksX,
				height: schnittUntenRechtsY - schnittObenLinksY
			};
		} else {
			return null; // Keine Überlappung
		}
	}

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

	if (schnittmenge) {
		$.writeln("Schnittmenge gefunden:");
		$.writeln("Oben links: X = " + schnittmenge.topLeft[0] + ", Y = " + schnittmenge.topLeft[1]);
		$.writeln("Unten rechts: X = " + schnittmenge.bottomRight[0] + ", Y = " + schnittmenge.bottomRight[1]);
		$.writeln("Breite: " + schnittmenge.width);
		$.writeln("Höhe: " + schnittmenge.height);

		layer_shape_create2("rectangle", schnittmenge.topLeft[1], schnittmenge.topLeft[0], schnittmenge.bottomRight[1], schnittmenge.bottomRight[0], false, [255, 255, 255], true, [255, 0, 0], 2, "strokeStyleAlignOutside");
	} else {
		$.writeln("Keine Schnittmenge vorhanden.");
	}
	app.preferences.rulerUnits = startRulerUnits;



	function layer_shape_create2(_form, _top, _left, _bottom, _right, _fillEnabled, _fillRGB, _strokeEnabled, _strokeRGB, _strokeWidth, _strokeAlignment) {

		//_form = "rectangle", "ellipse"
		//_strokeAlignment = "strokeStyleAlignCenter",", "strokeStyleAlignOutside" 

		var d = new ActionDescriptor();
		var d2 = new ActionDescriptor();
		var d3 = new ActionDescriptor();
		var d4 = new ActionDescriptor();
		var d5 = new ActionDescriptor();
		var d6 = new ActionDescriptor();
		var d7 = new ActionDescriptor();
		var d8 = new ActionDescriptor();
		var l = new ActionList();
		var r = new ActionReference();

		r.putClass(s2t("contentLayer"));
		d.putReference(s2t("null"), r);
		d4.putDouble(s2t("red"), _fillRGB[0]);
		d4.putDouble(s2t("grain"), _fillRGB[1]);
		d4.putDouble(s2t("blue"), _fillRGB[2]);
		d3.putObject(s2t("color"), s2t("RGBColor"), d4);
		d2.putObject(s2t("type"), s2t("solidColorLayer"), d3);
		d5.putInteger(s2t("unitValueQuadVersion"), 1);
		d5.putUnitDouble(s2t("top"), s2t("pointsUnit"), _top);
		d5.putUnitDouble(s2t("left"), s2t("pointsUnit"), _left);
		d5.putUnitDouble(s2t("bottom"), s2t("pointsUnit"), _bottom);
		d5.putUnitDouble(s2t("right"), s2t("pointsUnit"), _right);
		d2.putObject(s2t("shape"), s2t(_form), d5);
		d6.putInteger(s2t("strokeStyleVersion"), 2);
		d6.putBoolean(s2t("strokeEnabled"), _strokeEnabled);
		d6.putBoolean(s2t("fillEnabled"), _fillEnabled);
		d6.putUnitDouble(s2t("strokeStyleLineWidth"), s2t("pixelsUnit"), _strokeWidth);
		d6.putUnitDouble(s2t("strokeStyleLineDashOffset"), s2t("pointsUnit"), 0);
		d6.putDouble(s2t("strokeStyleMiterLimit"), 100);
		d6.putEnumerated(s2t("strokeStyleLineCapType"), s2t("strokeStyleLineCapType"), s2t("strokeStyleButtCap"));
		d6.putEnumerated(s2t("strokeStyleLineJoinType"), s2t("strokeStyleLineJoinType"), s2t("strokeStyleMiterJoin"));
		d6.putEnumerated(s2t("strokeStyleLineAlignment"), s2t("strokeStyleLineAlignment"), s2t(_strokeAlignment));
		d6.putBoolean(s2t("strokeStyleScaleLock"), false);
		d6.putBoolean(s2t("strokeStyleStrokeAdjust"), false);
		d6.putList(s2t("strokeStyleLineDashSet"), l);
		d6.putEnumerated(s2t("strokeStyleBlendMode"), s2t("blendMode"), s2t("normal"));
		d6.putUnitDouble(s2t("strokeStyleOpacity"), s2t("percentUnit"), 100);
		d8.putDouble(s2t("red"), _strokeRGB[0]);
		d8.putDouble(s2t("grain"), _strokeRGB[1]);
		d8.putDouble(s2t("blue"), _strokeRGB[2]);
		d7.putObject(s2t("color"), s2t("RGBColor"), d8);
		d6.putObject(s2t("strokeStyleContent"), s2t("solidColorLayer"), d7);
		d2.putObject(s2t("strokeStyle"), s2t("strokeStyle"), d6);
		d.putObject(s2t("using"), s2t("contentLayer"), d2);
		executeAction(s2t("make"), d, DialogModes.NO);
	}
}




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

select_haut(true, 'nicht Haut', 'Folder')

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
