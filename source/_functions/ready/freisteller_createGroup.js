function freisteller_createGroup() {
    var startLayer, set, newLayerSetRef;
    var startLayer = layer_selectedIDX_get();
    selectLayers('selectAllLayers');
    createGroup("Freisteller", "passThrough", "none", 100, t);
    try {
        if (isSelectionActive()) {
            maskFromSelection()
        }
    } catch (e) {}
    toogleOpenCloseSet();
    var set = app.activeDocument.layerSets.getByName("Freisteller")
    createColorLayer("Freisteller helper", "normal", "none", 100, "none", 128, 128, 128);
    hide();
    var newLayerSetRef = app.activeDocument.activeLayer;
    newLayerSetRef.move(set, ElementPlacement.PLACEAFTER);
    layer_selectedIDX_set(startLayer);
}