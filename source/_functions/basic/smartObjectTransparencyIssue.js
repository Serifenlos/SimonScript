function smartObjectTransparencyIssue() {
    var temp = doc.activeLayer.name;
    gotoLayer("Original");

    
    tempRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;
    

    if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
        if (doc.width < doc.height) {
            var transformLayerScale = (doc.width + 2) * 100 / doc.width;
        } else {
            var transformLayerScale = (doc.height + 2) * 100 / doc.height;
        }
        alert(transformLayerScale);
        transformLayer("center", transformLayerScale);
    }

    gotoLayer("vorher Ebene");
    if (doc.width < doc.height) {
        var transformLayerScale = (doc.width + 2) * 100 / doc.width;
    } else {
        var transformLayerScale = (doc.height + 2) * 100 / doc.height;
    }
    transformLayer("center", transformLayerScale);
    app.preferences.rulerunits = tempRulerUnits;
    

    gotoLayer(temp);
    var temp = "";
}