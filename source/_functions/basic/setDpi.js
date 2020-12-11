function setDpi(_dpi) {
    var d = new ActionDescriptor();
    d.putUnitDouble(sTID('resolution'), sTID('densityUnit'), _dpi);
    executeAction(sTID('imageSize'), d, DialogModes.NO);
}