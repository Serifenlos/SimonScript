function layer_selectedID_get() {
    var selectedLayers = [];
    var ref = new ActionReference();
    ref.putEnumerated(stringIDToTypeID('document'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'));
    var desc = executeActionGet(ref);
    if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
        desc = desc.getList(stringIDToTypeID('targetLayers'));
        for (var i = 0, c = desc.count; i < c; i++) {
            ref2 = new ActionReference();
            hasBackground() ? ref2.putIndex(s2t('layer'), desc.getReference(i).getIndex()) : ref2.putIndex(s2t('layer'), desc.getReference(i).getIndex() + 1);
            desc2 = executeActionGet(ref2);
            selectedLayers.push(desc2.getInteger(stringIDToTypeID("layerID")));
        }
    }
    return selectedLayers;
};