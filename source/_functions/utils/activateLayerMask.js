function activateLayerMask() {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
    m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
    
    try {
       executeAction( cTID( "slct" ), m_Dsc01, DialogModes.NO );
    } catch(e) {
       var m_TmpAlpha = new TemporaryAlpha();
       
       maskFromSelection();
       activateLayerMask();
       
       m_TmpAlpha.consume();
    }
 }