function makeActiveByIndex( idx, visible ){
    if( idx.constructor != Array ) idx = [ idx ];
    for( var i = 0; i < idx.length; i++ ){
         var desc = new ActionDescriptor();
         var ref = new ActionReference();
         ref.putIndex(charIDToTypeID( 'Lyr ' ), idx[i]);
         desc.putReference( charIDToTypeID( 'null' ), ref );
         if( i > 0 ) {
              var idselectionModifier = stringIDToTypeID( 'selectionModifier' );
              var idselectionModifierType = stringIDToTypeID( 'selectionModifierType' );
              var idaddToSelection = stringIDToTypeID( 'addToSelection' );
              desc.putEnumerated( idselectionModifier, idselectionModifierType, idaddToSelection );
         }
         desc.putBoolean( charIDToTypeID( 'MkVs' ), visible );
         executeAction( charIDToTypeID( 'slct' ), desc, DialogModes.NO );
    }     
}