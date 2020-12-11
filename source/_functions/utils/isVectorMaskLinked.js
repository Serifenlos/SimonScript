function isVectorMaskLinked() {
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
    var m_Dsc01= executeActionGet( m_Ref01 );
   if(m_Dsc01.hasKey( 968 )){
       alert("VE");
    }
    return m_Dsc01.getBoolean( 968 );
 }