function SmartOject_placeItem(_item) {
    var d = new ActionDescriptor();
    d.putPath(cTID('null'), new File(_item));
    executeAction(sTID('placedLayerReplaceContents'), d, DialogModes.NO);
};