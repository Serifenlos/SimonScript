### getActiveLayerIndex
```js
getActiveLayerIndex()
```

??? function
    ``` js linenums="1"
    function getActiveLayerIndex() {
        var ref = new ActionReference();
        ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" ));
        ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
        return hasBackground() ? executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-1 : executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ));
    };
    ```


### closeGroup
```function
closeGroup(layerSet)
```

??? function
    ``` js linenums="1"
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
            /* is try for ccs3 */
            var m_bHasMask = hasLayerMask();
        } catch (err) {}
        try {
            /* is try for ccs3 */
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

            /* throw("err"); */
            var mb_MaskEnabled = isLayerMaskEnabled();
            duplicateLayerMaskAsAlpha();
            try {
                /* for cs3 */
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
    ```

### ungroup
```function
ungroup()
```

### addLayer
```function
addLayer()
```

### isVisible
```function
isVisible()
```

### isVisibleIDX
```function
isVisibleIDX(idx)
```

### makeVisible
```function
makeVisible()
```

### hide
```function
hide()
```

### hasLayerMask
```function
hasLayerMask()
```

### deselectPath
```function
deselectPath()
```

### duplicateLayerMaskAsAlpha
```function
duplicateLayerMaskAsAlpha()
```

### setBackTheLayerMask
```function
setBackTheLayerMask()
```

### getMaskDensity
```function
getMaskDensity()
```

### getMaskFeather
```function
getMaskFeather()
```

### isLayerMaskEnabled
```function
isLayerMaskEnabled()
```

### isLayerMaskLinked
```function
isLayerMaskLinked()
```

### setMaskDensityTo
```function
setMaskDensityTo(dens)
```

### setMaskFeatherTo
```function
setMaskFeatherTo(feath)
```

### setMaskEnabled
```function
setMaskEnabled(foo)
```

### setMaskLinked
```function
setMaskLinked(foo)
```

### isLayerFXVisible
```function
isLayerFXVisible()
```

### copyLayerStyle
```function
copyLayerStyle()
```

### pasteLayerStyle
```function
pasteLayerStyle()
```

### hasVectorMask
```function
hasVectorMask()
```

### getVectorMaskDensity
```function
getVectorMaskDensity()
```

### getVectorMaskFeather
```function
getVectorMaskFeather)
```

### isVectorMaskEnabled
==auskommentiert==
```function
isVectorMaskEnabled()
```

### isVectorMaskLinked
==auskommentiert==
```function
isVectorMaskLinked()
```

### setVectorMaskDensityTo
```function
setVectorMaskDensityTo(dens)
```


### setVectorMaskDensityTo
```function
setVectorMaskDensityTo(dens)
```

### setVectorMaskFeatherTo
```function
setVectorMaskFeatherTo(feath)
```

### setVectorMaskEnabled
==auskommentiert==
```function
setVectorMaskEnabled(foo)
```

### setVectorMaskLinked
==auskommentiert==
```function
setVectorMaskLinked(foo)
```

### isLocked
```function
isLocked()
```

### unlock
```function
unlock()
```

### lock
```function
lock
```

### getColor
```function
getColor()
```

### setColorTo
```function
setColorTo(col)
```

### activateLayerMask
```function
activateLayerMask()
```

### deleteMask
```function
deleteMask(makeSelection)
```

### selectLayerMask
```function
selectLayerMask()
```

### loadSelectionOfMask
```function
loadSelectionOfMask()
```

### maskFromSelection
```function
maskFromSelection()
```

### duplicateVectorMask
```function
duplicateVectorMask()
```

### recreateVectorMask
```function
recreateVectorMask()
```

### groupSelected
```function
groupSelected(name)
```

### addToSelection
```function
addToSelection(layerName)
```

### TemporaryAlpha
```function
TemporaryAlpha()
```

### makeActiveByIndex
```function
makeActiveByIndex( idx, visible )
```

### deleteActiveLayer
```function
deleteActiveLayer()
```

### isLayerSet
```function
isLayerSet( idx )
```

### openGroup1
```function
openGroup1(theGroup)
```

### openGroup1byIDX
```function
openGroup1byIDX(idx)
```

### getNamesPlusIDsOfLayerSet
==geht das? die Formatierung ist kommisch==
```function
getNamesPlusIDsOfLayerSet()
```

### getLayersNb
```function
getLayersNb()
```

### toogleOpenCloseSet
```function
toogleOpenCloseSet()
```

### getFristLayerSetChildVisible
```function
getFristLayerSetChildVisible()
```

### getLastChildIdx
```function
getLastChildIdx()
```

### getNbOfChilds
```function
getNbOfChilds()
```

### sSetOpened1
```function
sSetOpened1( group )
```

### isSetOpened2
```function
isSetOpened2( grIDX )
```

### addTempLayerSetIn
==idxx ?==
```function
addTempLayerSetIn(idxx)
```

### deleteTempLayerSetbyIdx
```function
deleteTempLayerSetbyIdx(idxx)
```

### myselectNext
```function
myselectNext()
```

### addNext
```function
addNext()
```

### isEndOfSet
```function
isEndOfSet(idx)
```

### getStartIDXfor
```function
getStartIDXfor( idx )
```

### myselectPrevious
```function
myselectPrevious()
```

### addPrevious
```function
addPrevious()
```

### myselectNextFor
```function
myselectNextFor(times)
```

### getVisible
```function
getVisible()
```

### getVisibleforIDX
```function
getVisibleforIDX(idx)
```

### toogleVisibility
```function
toogleVisibility()
```

### showOnlyThis
```function
showOnlyThis()
```

### removeFromSel
```function
removeFromSel(idx)
```

### makeVisByIndex
```function
makeVisByIndex(idx, visible)
```

### getSelectedLayersIdx
```function
getSelectedLayersIdx()
```

### selectParent
```function
selectParent()
```

### getParentIDXfor
```function
getParentIDXfor(idx)
```

### loopParentsIDXfor
```function
loopParentsIDXfor(idx)
```

### hasBackground
```function
hasBackground()
```

### getLayerName
```function
getLayerName(idx)
```

### getSibilings
```function
getSibilings()
```

### getSibilings1
```function
getSibilings1()
```

### addSibilings
```function
addSibilings()
```

### selectOnlySibilings
```function
selectOnlySibilings()
```

### getParentIndex1
```function
getParentIndex1(idx)
```

### eliminateDuplicates
```function
eliminateDuplicates(arr)
```

### eliminateTheSame
```function
eliminateTheSame(arr1, arr2)
```

### testSelectMultiple
```function
testSelectMultiple(arr)
```
```js
testSelectMultiple([1,3,5,7]);
```








