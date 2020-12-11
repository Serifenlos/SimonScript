function deleteMask() {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('channel'), sTID('channel'), sTID('mask'));
        d.putReference(sTID('null'), r);
        executeAction(sTID('delete'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}