function setMaskLinked(foo){
    var idsetd = charIDToTypeID( "setd" );
      var desc31 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref16 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref16.putEnumerated( idLyr, idOrdn, idTrgt );
      desc31.putReference( idnull, ref16 );
      var idT = charIDToTypeID( "T   " );
          var desc32 = new ActionDescriptor();
          var idUsrs = charIDToTypeID( "Usrs" );
          desc32.putBoolean( idUsrs, foo );
      var idLyr = charIDToTypeID( "Lyr " );
      desc31.putObject( idT, idLyr, desc32 );
  executeAction( idsetd, desc31, DialogModes.NO );
}