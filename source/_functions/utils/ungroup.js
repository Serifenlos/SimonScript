function ungroup() {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ) );
    m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
    
    try {
       executeAction( sTID( "ungroupLayersEvent" ), m_Dsc01, DialogModes.NO );
    } catch(e) {}
 }