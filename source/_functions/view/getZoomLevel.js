function getZoomLevel(){
    var ref = new ActionReference();
    ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('zoom'));
    ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
    var desc = executeActionGet(ref);
    return Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(2);
};