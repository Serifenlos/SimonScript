function selectLayer(_direction, _times) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    if (_direction != "down") {
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('forwardEnum'));
    } else {
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('backwardEnum'));
    }

    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    var i = 0;
    for (i = 1; i <= _times; i += 1) {
        executeAction(sTID('select'), d, DialogModes.NO);
    }
}