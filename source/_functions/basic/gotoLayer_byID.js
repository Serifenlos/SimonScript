function gotoLayer_byID(_id) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    r.putIdentifier(s2t('layer'), _id);
    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    executeAction(sTID('select'), d, DialogModes.NO);
}