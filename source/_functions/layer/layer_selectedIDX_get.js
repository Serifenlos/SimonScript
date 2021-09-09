function layer_selectedIDX_get() {
    var selectedLayers = [];
    var ref = new ActionReference();
    ref.putEnumerated(stringIDToTypeID('document'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'));
    var desc = executeActionGet(ref);
    if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
        desc = desc.getList(stringIDToTypeID('targetLayers'));
        for (var i = 0, c = desc.count; i < c; i++) {
            hasBackground() ? selectedLayers.push(desc.getReference(i).getIndex()) : selectedLayers.push(desc.getReference(i).getIndex() + 1);
        }
    }
    return selectedLayers;
};