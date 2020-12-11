function addLayer() {
    var m_ActiveLayer          =    activeDocument.activeLayer;
    var m_NewLayer             =    activeDocument.layerSets.add();
    m_NewLayer.move(m_ActiveLayer, ElementPlacement.PLACEBEFORE);
    
    return m_NewLayer;
 }