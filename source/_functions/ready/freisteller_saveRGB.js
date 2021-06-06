function freisteller_saveRGB() {
    var startLayer, startVisibilityHelper, startMaskVisibility, docNameCopy;
    var startLayer = getActiveLayerIndex();
    var startVisibilityHelper = null;
    gotoLayer("Freisteller");
    if (hasLayerMask()) {
        var startMaskVisibility = getMaskVisibility();
        setMaskVisibility(true);

        if (getLayerName(1) == "Freisteller helper") {
            var startVisibilityHelper = isVisibleIDX(1);
            makeVisByIndex(1, false);
        }
        var docNameCopy = doc.path + "/" + GetFileNameOnly(doc.name) + "-frei";
        saveFile_PSD(new File(docNameCopy), t, f, f, t, f, f);

        setMaskVisibility(false);
        if (startVisibilityHelper != null) {
            makeVisByIndex(1, startVisibilityHelper);
        }

        doc.save();
        setMaskVisibility(startMaskVisibility);
    }
    gotoLayer(startLayer);
}