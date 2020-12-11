function deleteTempLayerSetbyIdx(idxx){
    /* ======================================================= */
    var idDlt = charIDToTypeID( "Dlt " );
        var desc = new ActionDescriptor();
            var ref = new ActionReference();
            ref.putIndex(charIDToTypeID( 'Lyr ' ), idxx);
            /* ref.putIdentifier(charIDToTypeID( 'Lyr ' ), idxx); */
            desc.putReference( charIDToTypeID( 'null' ), ref );
    executeAction( idDlt, desc, DialogModes.NO );
  }