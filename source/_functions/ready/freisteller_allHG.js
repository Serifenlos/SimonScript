function freisteller_allHG() {
    var firstDoc = app.activeDocument;
    var color = app.foregroundColor;
    var h = color.hsb.hue;
    var s = color.hsb.saturation;
    var b = color.hsb.brightness;
    for (var i = 0; i < app.documents.length; i++) {
        app.activeDocument = app.documents[i];
        var doc = app.activeDocument;
        try {
            if (app.activeDocument.layers.getByName("Freisteller helper")) {
                try {
                    var currentLayer = layer_selectedIDX_get();
                    gotoLayer("Freisteller helper");

                    if (layer_getSolidFillColor()[0] == app_getForegroundColor()[0]) {
                        if (layer_getSolidFillColor()[1] == app_getForegroundColor()[1]) {
                            if (layer_getSolidFillColor()[2] == app_getForegroundColor()[2]) {
                                if (isVisible()) {
                                    hide();
                                } else {
                                    makeVisible();
                                }
                            }
                        }
                    } else {
                        layer_solidColorHSB_change(h, s, b);
                    }
                    layer_selectedIDX_set(currentLayer);
                } catch (e) {};
            }
        } catch (e) {}
    };
    app.activeDocument = firstDoc;
}

