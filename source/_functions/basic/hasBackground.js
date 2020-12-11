function hasBackground() {
    var ref = new ActionReference();
    ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Bckg"));
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Back"));
    var desc = executeActionGet(ref);
    var res = desc.getBoolean(charIDToTypeID("Bckg"));
    return res;
};