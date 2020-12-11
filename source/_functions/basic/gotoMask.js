function gotoMask() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('channel'), sTID('channel'), sTID('mask'));
    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    executeAction(sTID('select'), d, DialogModes.NO);
}