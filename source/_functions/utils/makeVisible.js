function makeVisible(){
    var idShw = charIDToTypeID( "Shw " );
        var desc808 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var list11 = new ActionList();
                var ref647 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref647.putEnumerated( idLyr, idOrdn, idTrgt );
            list11.putReference( ref647 );
        desc808.putList( idnull, list11 );
    executeAction( idShw, desc808, DialogModes.NO );
}