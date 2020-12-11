function setDocResolution(dpi){
    var desc = new ActionDescriptor();
    desc.putUnitDouble( charIDToTypeID( "Rslt" ), charIDToTypeID( "#Rsl" ), dpi );
    executeAction( charIDToTypeID( "ImgS" ), desc, DialogModes.NO );
}