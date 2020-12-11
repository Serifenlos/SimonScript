function selectAllLayers() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    executeAction(sTID('selectAllLayers'), d, DialogModes.NO);
}