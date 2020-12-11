function lock(){
    var idsetd = charIDToTypeID( "setd" );
        var desc319 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref253 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref253.putEnumerated( idLyr, idOrdn, idTrgt );
        desc319.putReference( idnull, ref253 );
        var idT = charIDToTypeID( "T   " );
            var desc320 = new ActionDescriptor();
            var idlayerLocking = stringIDToTypeID( "layerLocking" );
                var desc321 = new ActionDescriptor();
                var idprotectAll = stringIDToTypeID( "protectAll" );
                desc321.putBoolean( idprotectAll, true );
            var idlayerLocking = stringIDToTypeID( "layerLocking" );
            desc320.putObject( idlayerLocking, idlayerLocking, desc321 );
        var idLyr = charIDToTypeID( "Lyr " );
        desc319.putObject( idT, idLyr, desc320 );
    executeAction( idsetd, desc319, DialogModes.NO );
  }