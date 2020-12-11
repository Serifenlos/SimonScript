function smartObject() {
    try {
        executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}