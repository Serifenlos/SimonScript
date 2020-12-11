### getActiveLayerIndex
***number*** ==Layer/Group?==
<!-- ```js
getActiveLayerIndex()
``` -->

??? "getActiveLayerIndex()"
    ``` js linenums="1"
    function getActiveLayerIndex() {
        var ref = new ActionReference();
        ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" ));
        ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
        return hasBackground() ? executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-1 : executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ));
    };
    ```


### closeGroup
***action*** 
<!-- ```js
closeGroup(layerSet)
``` -->

??? "closeGroup(layerSet)"
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
***action*** ungroup selected group
```function
ungroup()
```

### addLayer
***action*** add new LayerSet/empty group
```function
addLayer()
```

### isVisible
***boolean*** return state of Visibility of Layer/Group
```function
isVisible()
```

### isVisibleIDX 
```function
isVisibleIDX(idx)
```

### makeVisible
***action*** show Layer/Group
```function
makeVisible()
```

### hide
***action*** hide Layer/Group
```function
hide()
```

### hasLayerMask
***boolean*** return if Layer/Group has a mask
```function
hasLayerMask()
```

### deselectPath
***action*** deselect all Paths
```function
deselectPath()
```

### duplicateLayerMaskAsAlpha
***action*** create a Alpha-Channel based on LayerMask and name it **mbTemp_alpha** ==uniquify the name? on multiple use all the channels have the same name==
```function
duplicateLayerMaskAsAlpha()
```

### setBackTheLayerMask
***action*** create a LayerMask based on the Alpha-Channel named **mbTemp_alpha**
```function
setBackTheLayerMask()
```

### getMaskDensity
***number 0-255*** returns Density of Layer/Group-Mask in 0-255 ==warum 0-255 ?== ==TODO nimm das für deinen Helper==
```function
getMaskDensity()
```

### getMaskFeather
***number px*** return Feather of Layer/Group-Mask in px ==TODO nimm das für deinen Helper==
```function
getMaskFeather()
```

### isLayerMaskEnabled
***boolean*** is Layer/Group-Mask active? ==ToDo wirft einen Fehler wenn es keine Maske gibt==
```function
isLayerMaskEnabled()
```

### isLayerMaskLinked
***boolean*** is Layer/Group-Mask linked?  ==ToDo wirft einen Fehler wenn es keine Maske gibt==
```function
isLayerMaskLinked()
```

### setMaskDensityTo
***action*** set density in percent
```function
setMaskDensityTo(dens)
```

### setMaskFeatherTo
***action*** set feather in pixel
```function
setMaskFeatherTo(feath)
```

### setMaskEnabled
==Was macht die Funktion, ausser Errors zu produzieren==
```function
setMaskEnabled(foo)
```

### setMaskLinked
==Was macht die Funktion, ausser Errors zu produzieren==
```function
setMaskLinked(foo)
```

### isLayerFXVisible
***boolean*** 
```function
isLayerFXVisible()
```

### copyLayerStyle
***action*** 
```function
copyLayerStyle()
```

### pasteLayerStyle
***action*** 
```function
pasteLayerStyle()
```

### hasVectorMask
***boolean*** 
```function
hasVectorMask()
```

### getVectorMaskDensity
***number (0-255)*** 
```function
getVectorMaskDensity()
```

### getVectorMaskFeather
***number (Pixel)*** 
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
***action*** set density in percent
```function
setVectorMaskDensityTo(dens)
```

### setVectorMaskFeatherTo
***action*** set feather in pixel
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
***boolean*** check if the Layer/Group is totally locked
```function
isLocked()
```

### unlock
***action*** unlock even specific locking methods
```function
unlock()
```

### lock
***action*** totally lock Layer/Group
```function
lock
```

### getColor
***string*** get Color of the Layer/Group 
```function
getColor()
```

### setColorTo
***action*** color the Layer/Group in the panel 
```function
setColorTo(col)
```

* col `None` <code>Rd  </code> <code>Orng</code> <code>Ylw </code> <code>Grn </code> <code>Bl  </code> <code>Vlt </code> <code>Gry </code>


### activateLayerMask
***action*** 
```function
activateLayerMask()
```

### deleteMask
***action*** works only when the LayerMask is selected
```function
deleteMask(makeSelection)
```

### selectLayerMask
***action*** 
```function
selectLayerMask()
```

### loadSelectionOfMask
***action*** 
```function
loadSelectionOfMask()
```

### maskFromSelection
***action*** 
```function
maskFromSelection()
```

### duplicateVectorMask
***action*** duplicate VektorMask and name it "mbTemp_path"
```function
duplicateVectorMask()
```

### recreateVectorMask
***action*** get path called "mbTemp_path", create VektorMask on Layer/Group and delete "mbTemp_path"
```function
recreateVectorMask()
```

### groupSelected
***action*** group active Layer/Group and name it
```function
groupSelected(name)
```

### addToSelection
***action*** add Layer/Group to active Selection
```function
addToSelection(layerName)
```

### TemporaryAlpha
***action*** create selection into Alpha-Channel and activate it
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








