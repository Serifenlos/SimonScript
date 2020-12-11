function deselectPath(){
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putClass( cTID( "Path" ) );
    desc.putReference( cTID( "null" ), ref );
executeAction( cTID( "Dslc" ), desc, DialogModes.NO );
}