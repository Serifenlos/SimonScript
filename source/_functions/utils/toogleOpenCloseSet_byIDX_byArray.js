function toogleOpenCloseSet_byIDX_byArray(_array) {
    for (var i = 0; i < _array.length; i++) {
        toogleOpenCloseSet_byIDX(_array[i]);
        // app.activeDocument.suspendHistory("toogleOpenCloseSet_byIDX", "toogleOpenCloseSet_byIDX(_array[i])");
    }
}