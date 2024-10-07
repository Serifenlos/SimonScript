function hasBackground() {
    // var ref = new ActionReference();
    // ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Bckg"));
    // ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Back"));
    // var desc = executeActionGet(ref);
    // var res = desc.getBoolean(charIDToTypeID("Bckg"));
    // return res;

    var res = undefined;
    try {
        var ref = new ActionReference();
        ref.putProperty(cTID("Prpr"), cTID("Nm  "));
        ref.putIndex(cTID("Lyr "), 0);
        executeActionGet(ref).getString(cTID("Nm  "));
        res = true;
    } catch (e) { res = false }
    return res;
};