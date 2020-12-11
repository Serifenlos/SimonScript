function pasteLayerStyle() {
    var idPaFX = charIDToTypeID("PaFX");
    var desc240 = new ActionDescriptor();
    var idallowPasteFXOnLayerSet = stringIDToTypeID("allowPasteFXOnLayerSet");
    desc240.putBoolean(idallowPasteFXOnLayerSet, true);
    executeAction(idPaFX, desc240, DialogModes.NO);
}