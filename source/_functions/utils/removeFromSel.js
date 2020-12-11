function removeFromSel(idx){
    var desc419 = new ActionDescriptor();
        var ref161 = new ActionReference();
        ref161.putIndex( charIDToTypeID( "Lyr " ), idx );
    desc419.putReference( charIDToTypeID( "null" ), ref161 );
    desc419.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "removeFromSelection" ) );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc419.putBoolean( idMkVs, false );
executeAction( charIDToTypeID( "slct" ), desc419, DialogModes.NO );
}