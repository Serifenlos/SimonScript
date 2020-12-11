function setMaskEnabled(foo){
    var idsetd = charIDToTypeID( "setd" );
        var desc27 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref14 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref14.putEnumerated( idLyr, idOrdn, idTrgt );
        desc27.putReference( idnull, ref14 );
        var idT = charIDToTypeID( "T   " );
            var desc28 = new ActionDescriptor();
            var idUsrM = charIDToTypeID( "UsrM" );
            desc28.putBoolean( idUsrM, foo );
        var idLyr = charIDToTypeID( "Lyr " );
        desc27.putObject( idT, idLyr, desc28 );
    executeAction( idsetd, desc27, DialogModes.NO );
  }