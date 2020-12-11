function prefReset() {
    app.preferences.rulerunits = startRulerUnits;
    if (startDisplayDialogs == DialogModes.ERROR) {
        startDisplayDialogs = DialogModes.NO;
    }
    app.displayDialogs = startDisplayDialogs;
};