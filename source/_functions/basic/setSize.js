function setSize(_side, _size, _inputUnit) {
    var d = new ActionDescriptor();
    if (_inputUnit == "mm") {
        _size = mm2pt(_size);
    }
    d.putUnitDouble(sTID(_side), sTID('distanceUnit'), _size);
    executeAction(sTID('imageSize'), d, DialogModes.NO);
}