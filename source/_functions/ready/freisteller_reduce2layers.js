function freisteller_reduce2layers() {
    try {
        if (doc.layers.getByName("Freisteller helper")) {
            hide("Freisteller helper");
        }
    } catch (e) { }
    try {
        selectLayers("selectAllLayers");
        selectLayerBySelector("Freisteller", "remove");
        layer_mergeLayers();
        layer_makeBackground();
        dublicate("frei");
        gotoLayer("Freisteller");
        fixMask(getActiveLayerIndex(), 1);
        var startMaskVisibility = getMaskVisibility();
        loadSelectionOfMask();
        gotoLayer("frei");
        try {
            if (isSelectionActive()) {
                maskFromSelection();
            }
        } catch (e) { }
        layer_delete("Freisteller");

        if (startMaskVisibility) {
            makeVisible("frei");
            hide(0);
            gotoLayer("frei");
        } else {
            makeVisible(0);
            hide("frei");
            gotoLayer(0);
        }
    } catch (e) {
        alert("Error freisteller_reduce2layers: \n" + e);
    }
};