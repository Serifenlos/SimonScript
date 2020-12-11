function rulersVisibility() {
    var r = new ActionReference();
    r.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("rulersVisibility"));
    r.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    return executeActionGet(r).getBoolean(stringIDToTypeID("rulersVisibility"));
}