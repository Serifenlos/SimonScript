/* function to find out if the number of layers in the document */
function getLayersNb() {
    var ref = new ActionReference();
    ref.putProperty( charIDToTypeID( 'Prpr' ), stringIDToTypeID('numberOfLayers') );
    ref.putEnumerated( charIDToTypeID( "Dcmn" ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
    var desc = executeActionGet(ref);
    var numberOfLayers = desc.getInteger(stringIDToTypeID('numberOfLayers'));
    return numberOfLayers;
}