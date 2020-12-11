function setZoomLevel(zoom) {
    if(zoom < 1 ) zoom = 1;
    var ref = new ActionReference();
    ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('unitsPrefs'));
    ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
    var getScrRes = executeActionGet(ref).getObjectValue(stringIDToTypeID('unitsPrefs')).getUnitDoubleValue(stringIDToTypeID('newDocPresetScreenResolution'))/72;
    var docRes = activeDocument.resolution;

    app.activeDocument.suspendHistory('zoomHelper', 'zoomHelper()');
    function zoomHelper() {
        setDocResolution(getScrRes/(zoom/100))
        runMenuItem(stringIDToTypeID( 'printSize' ));
        setDocResolution(docRes);
    }
    executeAction( charIDToTypeID('undo'), undefined, DialogModes.NO );
};