function selectLayers(_all_or_nothing) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    executeAction(sTID(_all_or_nothing), d, DialogModes.NO);
}