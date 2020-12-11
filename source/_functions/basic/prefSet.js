function prefSet(_dialog, _units) {
    if (!_dialog) {
        alert("check prefSet");
        _dialog = DialogModes.NO;
    }
    if (!_units) {
        alert("check prefSet");
        _units = Units.MM;
    }
    app.displayDialogs = _dialog;
    app.preferences.rulerUnits = _units;
}