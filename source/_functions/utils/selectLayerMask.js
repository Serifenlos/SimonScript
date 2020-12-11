function selectLayerMask() {
    var m_Dsc01 = new ActionDescriptor();
    var m_Ref01 = new ActionReference();
 
    m_Ref01.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
    m_Dsc01.putReference(cTID("null"), m_Ref01);
    m_Dsc01.putBoolean(cTID("MkVs"), false );
 
    try {
       executeAction(cTID("slct"), m_Dsc01, DialogModes.NO );
    } catch(e) {}
 }