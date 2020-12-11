function dublicate(_name) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    d.putString(sTID('name'), _name);
    d.putInteger(sTID('version'), 5);
    executeAction(sTID('duplicate'), d, DialogModes.NO);
}