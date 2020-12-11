function selectLayerUp() {
    var desc150 = new ActionDescriptor();
    var ref118 = new ActionReference();
    ref118.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('forwardEnum'));
    desc150.putReference(sTID('null'), ref118);
    desc150.putBoolean(sTID('makeVisible'), false);
    var list65 = new ActionList();
    list65.putInteger(108);
    desc150.putList(sTID('layerID'), list65);
    executeAction(sTID('select'), desc150, DialogModes.NO);
}