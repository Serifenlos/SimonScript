function groupSelected(name) {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putClass( sTID( "layerSection" ) );
    m_Dsc01.putReference(  cTID( "null" ), m_Ref01 );
    var m_Ref02 = new ActionReference();
    m_Ref02.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ) );
    m_Dsc01.putReference( cTID( "From" ), m_Ref02 );
    var m_Dsc02 = new ActionDescriptor();
    m_Dsc02.putString( cTID( "Nm  " ), name);
    m_Dsc01.putObject( cTID( "Usng" ), sTID( "layerSection" ), m_Dsc02 );
    executeAction( cTID( "Mk  " ), m_Dsc01, DialogModes.NO );
    
    return activeDocument.activeLayer;
 }