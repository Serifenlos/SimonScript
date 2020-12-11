function setColorTo(col){
    var idsetd = charIDToTypeID( "setd" );
      var desc33 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref17 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref17.putEnumerated( idLyr, idOrdn, idTrgt );
      desc33.putReference( idnull, ref17 );
      var idT = charIDToTypeID( "T   " );
          var desc34 = new ActionDescriptor();
          var idClr = charIDToTypeID( "Clr " );
          var idClr = charIDToTypeID( "Clr " );
          var idNone = charIDToTypeID( col );
          desc34.putEnumerated( idClr, idClr, idNone );
      var idLyr = charIDToTypeID( "Lyr " );
      desc33.putObject( idT, idLyr, desc34 );
  executeAction( idsetd, desc33, DialogModes.NO );
}