function openGroup1byIDX(idx) {
    if (isLayerSet(idx)) {
        getNamesPlusIDsOfLayerSet();
    }
    makeActiveByIndex(idx, false);
}