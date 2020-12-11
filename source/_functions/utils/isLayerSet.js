function isLayerSet( idx ) {
    var propName = stringIDToTypeID( 'layerSection' );
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID( "Prpr" ) , propName);
    ref.putIndex( charIDToTypeID ( "Lyr " ), idx );
    var desc =  executeActionGet( ref );
    var type = desc.getEnumerationValue( propName );
    var res = typeIDToStringID( type ); 
    return res == 'layerSectionStart' ? true:false;
}