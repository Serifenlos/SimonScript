function isSetOpened1( group ){

    app.activeDocument.activeLayer = group;
    mb_Locked = isLocked();
    mb_visible = isVisible();
    if(mb_Locked == true){unlock()};
  
    xx = true;
    currSetIDX = getActiveLayerIndex();
    currSetIDX1 = getActiveLayerIndex();
    if(!hasBackground()){currSetIDX1 = currSetIDX1-1};
    addTempLayerSetIn(currSetIDX1);
    var fIdx = getActiveLayerIndex();
    makeActiveByIndex(currSetIDX+2, false);
    if(fIdx == getActiveLayerIndex())
    {
      xx = false;
    }
    deleteTempLayerSetbyIdx(currSetIDX+1);
    if(mb_Locked == true){lock()};
    if(mb_visible == false){hide()};
    return xx;
  }