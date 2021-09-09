function layer_selectedIDX_set(_array) {
    try {
        selectLayers("selectNoLayers");
        if (_array.length > 0) {
            for (var j = 0; j < _array.length; j++) {
                selectLayerBySelector(_array[j], t);
            }
        }
    } catch (e) {
        selectLayers("selectNoLayers");
    }
}