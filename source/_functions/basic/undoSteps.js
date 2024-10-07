function undoSteps(_steps) {
    try {
        for (var i = 0; i < _steps; i++) {
            try {
                executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
            } catch (e) {
                // by Michael L. Hale
                // For the menu item 'Step Backward' ( the same as alt-ctrl-z ) use this
                var d = new ActionDescriptor();
                var r = new ActionReference();
                r.putEnumerated(charIDToTypeID("HstS"), charIDToTypeID("Ordn"), charIDToTypeID("Prvs"));
                d.putReference(charIDToTypeID("null"), r);
                executeAction(charIDToTypeID("slct"), d, DialogModes.NO);
            }
        };
    } catch (e) { "Error undoSteps: " + e }
};