function setVectorMaskFeatherTo(feath){
    var idsetd = charIDToTypeID( "setd" );
      var desc21 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref11 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref11.putEnumerated( idLyr, idOrdn, idTrgt );
      desc21.putReference( idnull, ref11 );
      var idT = charIDToTypeID( "T   " );
          var desc22 = new ActionDescriptor();
          var iduserMaskDensity = stringIDToTypeID( "vectorMaskFeather" );
          var idPrc = charIDToTypeID( "#Prc" );
          desc22.putUnitDouble( iduserMaskDensity, idPrc, feath );
      var idLyr = charIDToTypeID( "Lyr " );
      desc21.putObject( idT, idLyr, desc22 );
  executeAction( idsetd, desc21, DialogModes.NO );
}