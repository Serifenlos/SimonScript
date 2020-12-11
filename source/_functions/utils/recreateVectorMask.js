function recreateVectorMask(){
    /* ======================================================= */
      var idslct = charIDToTypeID( "slct" );
          var desc110 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref119 = new ActionReference();
              var idPath = charIDToTypeID( "Path" );
              ref119.putName( idPath, "mbTemp_path" );
          desc110.putReference( idnull, ref119 );
      executeAction( idslct, desc110, DialogModes.NO );
  
      /* ======================================================= */
      var idMk = charIDToTypeID( "Mk  " );
          var desc111 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref120 = new ActionReference();
              var idPath = charIDToTypeID( "Path" );
              ref120.putClass( idPath );
          desc111.putReference( idnull, ref120 );
          var idAt = charIDToTypeID( "At  " );
              var ref121 = new ActionReference();
              var idPath = charIDToTypeID( "Path" );
              var idPath = charIDToTypeID( "Path" );
              var idvectorMask = stringIDToTypeID( "vectorMask" );
              ref121.putEnumerated( idPath, idPath, idvectorMask );
          desc111.putReference( idAt, ref121 );
          var idUsng = charIDToTypeID( "Usng" );
              var ref122 = new ActionReference();
              var idPath = charIDToTypeID( "Path" );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref122.putEnumerated( idPath, idOrdn, idTrgt );
          desc111.putReference( idUsng, ref122 );
      executeAction( idMk, desc111, DialogModes.NO );
      /* ======================================================= */
          var desc = new ActionDescriptor();
              var ref = new ActionReference();
              ref.putName( charIDToTypeID( "Path" ), "mbTemp_path" );
          desc.putReference( charIDToTypeID( "null" ), ref );
      executeAction( charIDToTypeID( "Dlt " ), desc, DialogModes.NO );  
  }