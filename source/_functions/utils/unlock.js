function unlock(){
    var idsetd = charIDToTypeID( "setd" );
      var desc316 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref252 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref252.putEnumerated( idLyr, idOrdn, idTrgt );
      desc316.putReference( idnull, ref252 );
      var idT = charIDToTypeID( "T   " );
          var desc317 = new ActionDescriptor();
          var idlayerLocking = stringIDToTypeID( "layerLocking" );
              var desc318 = new ActionDescriptor();
              var idprotectNone = stringIDToTypeID( "protectNone" );
              desc318.putBoolean( idprotectNone, true );
          var idlayerLocking = stringIDToTypeID( "layerLocking" );
          desc317.putObject( idlayerLocking, idlayerLocking, desc318 );
      var idLyr = charIDToTypeID( "Lyr " );
      desc316.putObject( idT, idLyr, desc317 );
  executeAction( idsetd, desc316, DialogModes.NO );
}