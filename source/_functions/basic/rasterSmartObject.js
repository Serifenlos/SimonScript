function rasterSmartObject() {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        executeAction(sTID('rasterizeLayer'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}