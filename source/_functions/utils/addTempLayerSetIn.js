function addTempLayerSetIn(idxx){
    /* ======================================================= */
    var idMk = charIDToTypeID( "Mk  " );
        var desc58 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref63 = new ActionReference();
            var idlayerSection = stringIDToTypeID( "layerSection" );
            ref63.putClass( idlayerSection );
        desc58.putReference( idnull, ref63 );
    executeAction( idMk, desc58, DialogModes.NO );
    /* =======================================================rename */
    var idsetd = charIDToTypeID( "setd" );
        var desc202 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref209 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref209.putEnumerated( idLyr, idOrdn, idTrgt );
        desc202.putReference( idnull, ref209 );
        var idT = charIDToTypeID( "T   " );
            var desc203 = new ActionDescriptor();
            var idNm = charIDToTypeID( "Nm  " );
            desc203.putString( idNm, "mb-dummy tempTestLayerSetOpen_Closed" );
        var idLyr = charIDToTypeID( "Lyr " );
        desc202.putObject( idT, idLyr, desc203 );
    executeAction( idsetd, desc202, DialogModes.NO );
    /* =======================================================move */
    var idmove = charIDToTypeID( "move" );
        var desc59 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref64 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref64.putEnumerated( idLyr, idOrdn, idTrgt );
        desc59.putReference( idnull, ref64 );
        var idT = charIDToTypeID( "T   " );
            var ref65 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            ref65.putIndex( idLyr, idxx );
        desc59.putReference( idT, ref65 );
        var idAdjs = charIDToTypeID( "Adjs" );
        desc59.putBoolean( idAdjs, false );
        var idVrsn = charIDToTypeID( "Vrsn" );
        desc59.putInteger( idVrsn, 5 );
    executeAction( idmove, desc59, DialogModes.NO );
}