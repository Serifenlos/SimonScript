function layer_selectedID_set(_array) {
    selectLayers("selectNoLayers");

    try {var _array = arrayCorrect(_array)}
    catch(e) {}

    try {
        if (_array.length > 0) {
            for (var j = 0; j < _array.length; j++) {
                selectLayerByID(_array[j], t);
            }
        }
    } catch (e) {
        alert("error layer_selectedID_set: " + e)
    }
}