function getActiveLayerIndex() {
    var ref = new ActionReference();
    ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" ));
    ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
    return hasBackground() ? executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-1 : executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ));
};