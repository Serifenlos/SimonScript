function freisteller_createGroup() {
    var startLayer, set, newLayerSetRef;
    var startLayer = getActiveLayerIndex();
    selectLayers('selectAllLayers');
    createGroup("Freisteller", "passThrough", "none", 100, t);
    try {
        if (isSelectionActive()) {              // TODO wenn Original eine Maske hat, mitnehmen
            maskFromSelection()
        }
    } catch (e) {}
    toogleOpenCloseSet();
    var set = doc.layerSets.getByName("Freisteller")
    createColorLayer("Freisteller helper", "normal", "none", 100, "none", 128, 128, 128);
    hide();
    var newLayerSetRef = doc.activeLayer;
    newLayerSetRef.move(set, ElementPlacement.PLACEAFTER);
    gotoLayer(startLayer);
}