function isVectorMaskEnabled() {
    var m_Ref01 = new ActionReference();
 
    m_Ref01.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ));
    var m_Dsc01= executeActionGet( m_Ref01 );
    if(m_Dsc01.hasKey( 967 )){
       alert("VE");
    }
    return m_Dsc01.getBoolean( 967 );
 }