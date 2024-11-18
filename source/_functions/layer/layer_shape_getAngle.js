function layer_shape_getAngle(_input) {
//TODO ich würde gerne hier einen Weg finden diekte mit der input-Ebene zu sprechen, ohne sie vorerst zu aktivieren

 	if (layer_getLayerType(_input) == 4) {
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

		// Ankerpunkte extrahieren und anzeigen
		// for (var i = 0; i < anchorPoints.length; i++) {
		// 	$.writeln("Anchor Point " + (i + 1) + ": X = " + anchorPoints[i].x + ", Y = " + anchorPoints[i].y);
		// }
		// return anchorPoints;

		// Bestimmung über zwei Punkte (obenlinks + obenrechts)
		var deltaX = anchorPoints[1].x - anchorPoints[0].x;
		var deltaY = anchorPoints[1].y - anchorPoints[0].y;

		var steigung = deltaY / deltaX;

		// Berechnung des Winkels in Radiant
		var angleRadians = Math.atan(steigung);

		// Umwandlung in Grad
		var angleDegrees = angleRadians * (180 / Math.PI);

		layer_selectedIDX_set(selectedLayers);
		// Ausgabe des Wertes
		return angleDegrees;
	} else {
		return false;
	}
}