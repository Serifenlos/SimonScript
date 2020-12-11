function addPrevious(){
    theCurrentSelectionIDX = getSelectedLayersIdx();
    makeActiveByIndex(theCurrentSelectionIDX[theCurrentSelectionIDX.length-1], false);
    myselectPrevious();
    theCurrentSelectionIDX.push(getActiveLayerIndex());
    makeActiveByIndex(theCurrentSelectionIDX,false);
  }