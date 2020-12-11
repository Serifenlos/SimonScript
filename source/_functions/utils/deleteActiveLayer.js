function deleteActiveLayer(){
    var idDlt = charIDToTypeID( "Dlt " );
        var desc752 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref529 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref529.putEnumerated( idLyr, idOrdn, idTrgt );
        desc752.putReference( idnull, ref529 );
    executeAction( idDlt, desc752, DialogModes.NO );
 }