function fixMaskLoop(__width_faktor) {
    var startLayer = getActiveLayerIndex();
    var i = 1;
    while (fixMask(i,__width_faktor)) {
        i++;
    };
    gotoLayer(startLayer);
}