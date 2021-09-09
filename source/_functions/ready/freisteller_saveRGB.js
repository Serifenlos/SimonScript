function freisteller_saveRGB() {
    var startLayer, startVisibilityHelper, startMaskVisibility, docNameCopy;
    var startLayer = layer_selectedIDX_get();
    var startVisibilityHelper = null;
    gotoLayer("Freisteller");
    if (hasLayerMask()) {
        var startMaskVisibility = getMaskVisibility();
        setMaskVisibility(true);

        if (getLayerName(1) == "Freisteller helper") {  //TODO was wenn ich den helper dupliziert habe //hier brauchts einen anderen Checker
            var startVisibilityHelper = isVisibleIDX(1);
            makeVisByIndex(1, false);
        }
        var docNameCopy = app.activeDocument.path + "/" + GetFileNameOnly(app.activeDocument.name) + "-frei";
        // saveFile_PSD(new File(docNameCopy), t, f, f, t, f, f);
        savePSD_v2(new File(docNameCopy), t, t, t, f);

        setMaskVisibility(false);
        if (startVisibilityHelper != null) {
            makeVisByIndex(1, startVisibilityHelper);
        }

        // app.activeDocument.save();
        setMaskVisibility(startMaskVisibility);
    }
    layer_selectedIDX_set(startLayer);
}