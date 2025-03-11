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

        var checkTransparency_layer = checkTransparency_inner(); 
        if(checkTransparency_layer) {
            moveLayer3("down", 1);
            var id_layer = layer_selectedID_get();
        } else {
            layer_makeBackground();
        }
        
        dublicate("frei");
        copypaste_LayerFX("Freisteller", "frei");

        if(checkTransparency_layer) {
            createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
            moveLayer3("back", 1);
            for (var j = 0; j < id_layer.length; j++) {
                selectLayerByID(id_layer[j], "add");
            }
            layer_mergeLayers();
            layer_makeBackground();
        }

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