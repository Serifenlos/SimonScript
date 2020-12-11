function duplicateLayerMaskAsAlpha(){

    selectLayerMask();
    /* ======================================= mask visible */
      var desc = new ActionDescriptor();
      var ref = new ActionReference();
      ref.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
      desc.putReference( cTID( "null" ), ref );
      desc.putBoolean( cTID( "MkVs" ), true );
      executeAction( cTID( "slct" ), desc, DialogModes.NO );
  
      /* =======================================================select All */
      var idsetd = charIDToTypeID( "setd" );
          var desc565 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref478 = new ActionReference();
              var idChnl = charIDToTypeID( "Chnl" );
              var idfsel = charIDToTypeID( "fsel" );
              ref478.putProperty( idChnl, idfsel );
          desc565.putReference( idnull, ref478 );
          var idT = charIDToTypeID( "T   " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idAl = charIDToTypeID( "Al  " );
          desc565.putEnumerated( idT, idOrdn, idAl );
      executeAction( idsetd, desc565, DialogModes.NO );
  
      /* ======================================================= copy */
      var idcopy = charIDToTypeID( "copy" );
      executeAction( idcopy, undefined, DialogModes.NO );
      /* ======================================================= make alpha */
      var idMk = charIDToTypeID( "Mk  " );
          var desc567 = new ActionDescriptor();
          var idNw = charIDToTypeID( "Nw  " );
              var desc568 = new ActionDescriptor();
              var idClrI = charIDToTypeID( "ClrI" );
              var idMskI = charIDToTypeID( "MskI" );
              var idMskA = charIDToTypeID( "MskA" );
              desc568.putEnumerated( idClrI, idMskI, idMskA );
              var idClr = charIDToTypeID( "Clr " );
                  var desc569 = new ActionDescriptor();
                  var idRd = charIDToTypeID( "Rd  " );
                  desc569.putDouble( idRd, 255.000000 );
                  var idGrn = charIDToTypeID( "Grn " );
                  desc569.putDouble( idGrn, 0.000000 );
                  var idBl = charIDToTypeID( "Bl  " );
                  desc569.putDouble( idBl, 0.000000 );
              var idRGBC = charIDToTypeID( "RGBC" );
              desc568.putObject( idClr, idRGBC, desc569 );
              var idOpct = charIDToTypeID( "Opct" );
              desc568.putInteger( idOpct, 50 );
          var idChnl = charIDToTypeID( "Chnl" );
          desc567.putObject( idNw, idChnl, desc568 );
      executeAction( idMk, desc567, DialogModes.NO );
  
      /* =======================================================select All */
      var idsetd = charIDToTypeID( "setd" );
          var desc570 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref480 = new ActionReference();
              var idChnl = charIDToTypeID( "Chnl" );
              var idfsel = charIDToTypeID( "fsel" );
              ref480.putProperty( idChnl, idfsel );
          desc570.putReference( idnull, ref480 );
          var idT = charIDToTypeID( "T   " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idAl = charIDToTypeID( "Al  " );
          desc570.putEnumerated( idT, idOrdn, idAl );
      executeAction( idsetd, desc570, DialogModes.NO );
  
      /* =======================================================paste */
      var idpast = charIDToTypeID( "past" );
          var desc571 = new ActionDescriptor();
          var idAntA = charIDToTypeID( "AntA" );
          var idAnnt = charIDToTypeID( "Annt" );
          var idAnno = charIDToTypeID( "Anno" );
          desc571.putEnumerated( idAntA, idAnnt, idAnno );
      executeAction( idpast, desc571, DialogModes.NO );
  
      /* =======================================================deselect */
      var idsetd = charIDToTypeID( "setd" );
          var desc572 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref481 = new ActionReference();
              var idChnl = charIDToTypeID( "Chnl" );
              var idfsel = charIDToTypeID( "fsel" );
              ref481.putProperty( idChnl, idfsel );
          desc572.putReference( idnull, ref481 );
          var idT = charIDToTypeID( "T   " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idNone = charIDToTypeID( "None" );
          desc572.putEnumerated( idT, idOrdn, idNone );
      executeAction( idsetd, desc572, DialogModes.NO );
  
      /* =======================================================rename */
        var desc = new ActionDescriptor();
            var ref = new ActionReference();
            ref.putEnumerated( cTID( "Chnl" ), cTID( "Ordn" ), cTID( "Trgt" ) );
        desc.putReference( cTID( "null" ), ref );
            var desc2 = new ActionDescriptor();
            desc2.putString( cTID( "Nm  " ), "mbTemp_alpha" );
        desc.putObject( cTID( "T   " ), cTID( "Chnl" ), desc2 );
    executeAction( cTID( "setd" ), desc, DialogModes.NO );
    /* =======================================================select RGB */
        var desc291 = new ActionDescriptor();
            var ref255 = new ActionReference();
            ref255.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "RGB " ) );
        desc291.putReference( cTID( "null" ), ref255 );
        desc291.putBoolean( cTID( "MkVs" ), false );
    executeAction( cTID( "slct" ), desc291, DialogModes.NO );
  }