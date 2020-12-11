function duplicateVectorMask(){

    var idslct = charIDToTypeID( "slct" );
        var desc43 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref48 = new ActionReference();
            var idPath = charIDToTypeID( "Path" );
            var idPath = charIDToTypeID( "Path" );
            var idvectorMask = stringIDToTypeID( "vectorMask" );
            ref48.putEnumerated( idPath, idPath, idvectorMask );
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref48.putEnumerated( idLyr, idOrdn, idTrgt );
        desc43.putReference( idnull, ref48 );
    executeAction( idslct, desc43, DialogModes.NO );

  var idMk = charIDToTypeID( "Mk  " );
      var desc18 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref17 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          ref17.putClass( idPath );
      desc18.putReference( idnull, ref17 );
      var idFrom = charIDToTypeID( "From" );
          var ref18 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idPath = charIDToTypeID( "Path" );
          var idvectorMask = stringIDToTypeID( "vectorMask" );
          ref18.putEnumerated( idPath, idPath, idvectorMask );
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref18.putEnumerated( idLyr, idOrdn, idTrgt );
      desc18.putReference( idFrom, ref18 );
  executeAction( idMk, desc18, DialogModes.NO );

  var idRnm = charIDToTypeID( "Rnm " );
        var desc49 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref54 = new ActionReference();
            var idPath = charIDToTypeID( "Path" );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref54.putEnumerated( idPath, idOrdn, idTrgt );
        desc49.putReference( idnull, ref54 );
        var idT = charIDToTypeID( "T   " );
        desc49.putString( idT, "mbTemp_path" );
    executeAction( idRnm, desc49, DialogModes.NO );

    var idDslc = charIDToTypeID( "Dslc" );
    var desc474 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref413 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        ref413.putClass( idPath );
    desc474.putReference( idnull, ref413 );
executeAction( idDslc, desc474, DialogModes.NO );
}