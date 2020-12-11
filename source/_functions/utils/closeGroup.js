function closeGroup(layerSet) {
    var mb_Locked = isLocked();
    var mb_visible = isVisible();

    var m_Name = layerSet.name;
    var m_Opacity = layerSet.opacity;
    var m_BlendMode = layerSet.blendMode;
    var m_LinkedLayers = layerSet.linkedLayers;
    var currINDEX = getActiveLayerIndex();
    var currINDEX1 = getActiveLayerIndex();
    if (!hasBackground()) {
        currINDEX1 = currINDEX1 - 1
    };
    var mb_color = getColor();
    try {
        var m_bHasMask = hasLayerMask();
    } catch (err) {}
    try {
        var mb_HasVMask = hasVectorMask();
    } catch (err) {}



    var mb_color = getColor();
    var mb_hasFx = false;

    try {
        copyLayerStyle();
        mb_hasFx = true;
    } catch (err) {};
    if (mb_Locked == true) {
        unlock()
    };
    if (mb_visible == false) {
        makeVisible()
    };
    if (m_bHasMask) {
        try {
            deselectPath()
        } catch (err) {};

        var mb_MaskEnabled = isLayerMaskEnabled();
        duplicateLayerMaskAsAlpha();
        try {
            var mb_MaskDens = getMaskDensity();
            var mb_MaskFeather = getMaskFeather();
        } catch (err) {}
        var mb_MaskLinked = isLayerMaskLinked();
    }
    if (mb_HasVMask) {
        var mb_VDens = getVectorMaskDensity();
        var mb_VFeather = getVectorMaskFeather();
        duplicateVectorMask();
    }

    if (layerSet.layers.length <= 1) {
        addTempLayerSetIn(currINDEX1);
        makeActiveByIndex(currINDEX + 2, false);
        ungroup();
        groupSelected(m_Name);
        makeActiveByIndex(currINDEX + 2, false);
        deleteTempLayerSetbyIdx(currSetIDX + 1);
    } else {
        makeActiveByIndex(currSetIDX, false);
        ungroup();
        groupSelected(m_Name);
    }

    var m_Closed = activeDocument.activeLayer;
    m_Closed.opacity = m_Opacity;
    m_Closed.blendMode = m_BlendMode;

    for (x in m_LinkedLayers) {
        if (m_LinkedLayers[x].typename == "LayerSet") {
            activeDocument.activeLayer.link(m_LinkedLayers[x]);
        }
    }

    if (mb_hasFx) pasteLayerStyle();
    if (m_bHasMask) {
        setBackTheLayerMask();
        try {
            setMaskDensityTo(Math.round((mb_MaskDens * 100) / 255));
            setMaskFeatherTo(mb_MaskFeather);
        } catch (err) {}

        setMaskLinked(mb_MaskLinked);
        setMaskEnabled(mb_MaskEnabled);
    };


    if (mb_HasVMask) {
        recreateVectorMask();
        setVectorMaskDensityTo(Math.round((mb_VDens * 100) / 255));
        setVectorMaskFeatherTo(mb_VFeather);
    };
    setColorTo(mb_color);
    if (mb_Locked == true) {
        lock()
    };
    if (mb_visible == false) {
        hide()
    };
    return m_Closed;
}