function getLayerName(idx){
    var m_Ref01 = new ActionReference();
        m_Ref01.putIndex( cTID( "Lyr " ), idx);
     var m_Dsc01= executeActionGet( m_Ref01 );
     return m_Dsc01.getString(charIDToTypeID( 'Nm  ' ));
  }