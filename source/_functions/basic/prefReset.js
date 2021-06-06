function prefReset() {
    app.preferences.rulerUnits = startRulerUnits;
    if (startDisplayDialogs == DialogModes.ERROR) {
        startDisplayDialogs = DialogModes.NO;
    }
    app.displayDialogs = startDisplayDialogs;
};