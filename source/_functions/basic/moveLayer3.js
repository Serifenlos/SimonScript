function moveLayer3(_direction, _steps) {
    if (_direction == "up") {
        _direction = "next"
    }
    if (_direction == "down") {
        _direction = "previous"
    }
    if (_direction == "top") {
        _direction = "front"
    }
    if (_direction == "bottom") {
        _direction = "back"
    }
    for (var i = 0; i < _steps; i++) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        r2.putEnumerated(sTID('layer'), sTID('ordinal'), sTID(_direction));
        d.putReference(sTID('to'), r2);
        executeAction(sTID('move'), d, DialogModes.NO);
    };
}