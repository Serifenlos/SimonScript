function hasVectorMask() {
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
    var m_Dsc01= executeActionGet( m_Ref01 );
    return m_Dsc01.getBoolean(sTID('hasVectorMask'));
 }