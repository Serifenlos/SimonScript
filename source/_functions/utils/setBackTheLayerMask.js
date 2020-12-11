function setBackTheLayerMask(){
    /* =======================================================make mask */
    var idMk = charIDToTypeID( "Mk  " );
        var desc320 = new ActionDescriptor();
        var idNw = charIDToTypeID( "Nw  " );
        var idChnl = charIDToTypeID( "Chnl" );
        desc320.putClass( idNw, idChnl );
        var idAt = charIDToTypeID( "At  " );
            var ref282 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idChnl = charIDToTypeID( "Chnl" );
            var idMsk = charIDToTypeID( "Msk " );
            ref282.putEnumerated( idChnl, idChnl, idMsk );
        desc320.putReference( idAt, ref282 );
        var idUsng = charIDToTypeID( "Usng" );
        var idUsrM = charIDToTypeID( "UsrM" );
        var idRvlA = charIDToTypeID( "RvlA" );
        desc320.putEnumerated( idUsng, idUsrM, idRvlA );
    executeAction( idMk, desc320, DialogModes.NO );

    /* ======================================================= */
  var idslct = cTID( "slct" );
      var desc304 = new ActionDescriptor();
      var idnull = cTID( "null" );
          var ref268 = new ActionReference();
          var idChnl = cTID( "Chnl" );
          ref268.putName( idChnl, "mbTemp_alpha" );
      desc304.putReference( idnull, ref268 );
  executeAction( idslct, desc304, DialogModes.NO );

  /* ======================================================= */
  var idsetd = cTID( "setd" );
      var desc305 = new ActionDescriptor();
      var idnull = cTID( "null" );
          var ref269 = new ActionReference();
          var idChnl = cTID( "Chnl" );
          var idfsel = cTID( "fsel" );
          ref269.putProperty( idChnl, idfsel );
      desc305.putReference( idnull, ref269 );
      var idT = cTID( "T   " );
      var idOrdn = cTID( "Ordn" );
      var idAl = cTID( "Al  " );
      desc305.putEnumerated( idT, idOrdn, idAl );
  executeAction( idsetd, desc305, DialogModes.NO );

  /* ======================================================= */
  var idcopy = cTID( "copy" );
  executeAction( idcopy, undefined, DialogModes.NO );
  /* ======================================================= */
  selectLayerMask();
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
    desc.putReference( cTID( "null" ), ref );
    desc.putBoolean( cTID( "MkVs" ), true );
    executeAction( cTID( "slct" ), desc, DialogModes.NO );

    /* ======================================================= */
  var idPstI = charIDToTypeID( "PstI" );
      var desc326 = new ActionDescriptor();
      var idAntA = charIDToTypeID( "AntA" );
      var idAnnt = charIDToTypeID( "Annt" );
      var idAnno = charIDToTypeID( "Anno" );
      desc326.putEnumerated( idAntA, idAnnt, idAnno );
  executeAction( idPstI, desc326, DialogModes.NO );
    /* =======================================================select RGB */
      var desc291 = new ActionDescriptor();
          var ref255 = new ActionReference();
          ref255.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "RGB " ) );
      desc291.putReference( cTID( "null" ), ref255 );
      desc291.putBoolean( cTID( "MkVs" ), false );
  executeAction( cTID( "slct" ), desc291, DialogModes.NO );

  /* ======================================================= */
  var idsetd = charIDToTypeID( "setd" );
      var desc387 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref346 = new ActionReference();
          var idChnl = charIDToTypeID( "Chnl" );
          var idfsel = charIDToTypeID( "fsel" );
          ref346.putProperty( idChnl, idfsel );
      desc387.putReference( idnull, ref346 );
      var idT = charIDToTypeID( "T   " );
      var idOrdn = charIDToTypeID( "Ordn" );
      var idNone = charIDToTypeID( "None" );
      desc387.putEnumerated( idT, idOrdn, idNone );
  executeAction( idsetd, desc387, DialogModes.NO );
      /* ======================================================= */
        var desc = new ActionDescriptor();
            var ref = new ActionReference();
            ref.putName( charIDToTypeID( "Chnl" ), "mbTemp_alpha" );
        desc.putReference( charIDToTypeID( "null" ), ref );
    executeAction( charIDToTypeID( "Dlt " ), desc, DialogModes.NO );  
}