function historyState_deleteSteps(_steps) {
    try {
        for (var i = 0; i < _steps; i++) {
            var d = new ActionDescriptor();
            var r = new ActionReference();

            r.putEnumerated(s2t("historyState"), s2t("ordinal"), s2t("last"));
            d.putReference(s2t("null"), r);
            executeAction(s2t("delete"), d, DialogModes.NO); 
        };
    } catch (e) { "Error undoSteps: " + e }
};