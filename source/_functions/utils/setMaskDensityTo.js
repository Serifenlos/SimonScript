function setMaskDensityTo(_dens){
//     var idsetd = charIDToTypeID( "setd" );
//       var desc21 = new ActionDescriptor();
//       var idnull = charIDToTypeID( "null" );
//           var ref11 = new ActionReference();
//           var idLyr = charIDToTypeID( "Lyr " );
//           var idOrdn = charIDToTypeID( "Ordn" );
//           var idTrgt = charIDToTypeID( "Trgt" );
//           ref11.putEnumerated( idLyr, idOrdn, idTrgt );
//       desc21.putReference( idnull, ref11 );
//       var idT = charIDToTypeID( "T   " );
//           var desc22 = new ActionDescriptor();
//           var iduserMaskDensity = stringIDToTypeID( "userMaskDensity" );
//           var idPrc = charIDToTypeID( "#Prc" );
//           desc22.putUnitDouble( iduserMaskDensity, idPrc, dens );
//       var idLyr = charIDToTypeID( "Lyr " );
//       desc21.putObject( idT, idLyr, desc22 );
//   executeAction( idsetd, desc21, DialogModes.NO );

    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(c2t("null"), r);
    d2.putUnitDouble(s2t("userMaskDensity"), s2t("percentUnit"), _dens);
    d.putObject(s2t("to"), s2t("layer"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}