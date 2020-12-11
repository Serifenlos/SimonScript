function assignProfile(_profile) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('document'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    d.putString(sTID('profile'), _profile);
    executeAction(sTID('assignProfile'), d, DialogModes.NO);
}