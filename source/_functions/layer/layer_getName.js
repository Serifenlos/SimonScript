function layer_getName(_idx) {
    try {
        var ref = new ActionReference();
        ref.putIndex(charIDToTypeID("Lyr "), _idx);
        var layerDesc = executeActionGet(ref);
        var theName = layerDesc.getString(stringIDToTypeID("name"));
        return theName;
    } catch (e) {
        return e;
    }
}