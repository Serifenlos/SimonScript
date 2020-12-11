function undoSteps(_steps) {
    for (var i = 0; i < _steps; i++) {
        executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
    };
};