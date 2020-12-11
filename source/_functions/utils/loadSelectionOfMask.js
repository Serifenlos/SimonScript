function loadSelectionOfMask() {
    selectLayerMask();
    
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putProperty( cTID( "Chnl" ), cTID( "fsel" ) );
    m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
    var m_Ref02 = new ActionReference();
    m_Ref02.putEnumerated( cTID( "Chnl" ), cTID( "Ordn" ), cTID( "Trgt" ) );
    m_Dsc01.putReference( cTID( "T   " ), m_Ref02 );
    
    try {
       executeAction( cTID( "setd" ), m_Dsc01, DialogModes.NO );
    } catch(e) {}
 }