function addNext(){
    theCurrentSelectionIDX = getSelectedLayersIdx();
    makeActiveByIndex(theCurrentSelectionIDX[0], false);
    myselectNext();
    theCurrentSelectionIDX.push(getActiveLayerIndex());
    makeActiveByIndex(theCurrentSelectionIDX,false);
  }