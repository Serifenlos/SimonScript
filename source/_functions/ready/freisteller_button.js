function freisteller_button() {
    try {
        if (app.activeDocument.layerSets.getByName("Freisteller")) {
            doc.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
        }
    } catch (e) {
        doc.suspendHistory('Freisteller-Gruppe', 'freisteller_createGroup()');
    }
}