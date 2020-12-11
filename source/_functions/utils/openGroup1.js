function openGroup1(theGroup) {
   
    currSetIDX= getActiveLayerIndex();
    if(isLayerSet( currSetIDX ))
    {
     getNamesPlusIDsOfLayerSet();
   }
   makeActiveByIndex(currSetIDX, false);
 }