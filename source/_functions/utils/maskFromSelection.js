function maskFromSelection() {
    if(!hasLayerMask()) {
       var m_Dsc01 = new ActionDescriptor();
       m_Dsc01.putClass( cTID( "Nw  " ), cTID( "Chnl" ) );
       var m_Ref01 = new ActionReference();
       m_Ref01.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
       m_Dsc01.putReference( cTID( "At  " ), m_Ref01 );
       m_Dsc01.putEnumerated( cTID( "Usng" ), cTID( "UsrM" ), cTID( "RvlS" ) );
       
       try {
          executeAction( cTID( "Mk  " ), m_Dsc01, DialogModes.NO );
       } catch(e) {
          activeDocument.selection.selectAll();
          maskFromSelection();
       }
    } else {
       if(confirm("Delete existing mask?", true, "Warning")) {
          activateLayerMask();
          deleteMask();
       }
    }
 }