function freisteller_button() {
    try {
        if (app.activeDocument.layerSets.getByName("Freisteller")) {
            try {
                var docPath = app.activeDocument.path;
                app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
                app.activeDocument.save();
            } catch (e) {
                alert(e)
            };
        }
    } catch (e) {
        app.activeDocument.suspendHistory('Freisteller-Gruppe', 'freisteller_createGroup()');
        try {
            var docPath = app.activeDocument.path;
            app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
            app.activeDocument.save();
        } catch (e) {};
    }
}