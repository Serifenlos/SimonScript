function setBitDepth(_bitdepth) {
    var id1 = charIDToTypeID("CnvM");
    var desc1 = new ActionDescriptor();
    var id2 = charIDToTypeID("Dpth");
    desc1.putInteger(id2, _bitdepth);
    executeAction(id1, desc1, DialogModes.NO);
}