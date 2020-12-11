function setSize(_side, _size) {
    var d = new ActionDescriptor();
    d.putUnitDouble(sTID(_side), sTID('distanceUnit'), mm2pt(_size));
    executeAction(sTID('imageSize'), d, DialogModes.NO);
}