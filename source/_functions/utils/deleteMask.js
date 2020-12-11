function deleteMask(makeSelection) {
    if(makeSelection) {
       loadSelectionOfMask();
    }
    
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated( cTID( "Chnl" ), cTID( "Ordn" ), cTID( "Trgt" ) );
    m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
    
    try {
       executeAction( cTID( "Dlt " ), m_Dsc01, DialogModes.NO );
    } catch(e) {}
 }