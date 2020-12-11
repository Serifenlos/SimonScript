function getColor(){
    var m_Ref01 = new ActionReference();
   m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
   var m_Dsc01= executeActionGet( m_Ref01 );
   a = m_Dsc01.getEnumerationValue(cTID("Clr "));
   return typeIDToCharID( a ); 
}