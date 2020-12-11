function myselectPrevious() {
    nbL =  getLayersNb();
    currINDEX = getActiveLayerIndex();
    lastSetIdx = 0;
    lastLayer = 1;
    if(hasBackground()){lastLayer = 0};
    if(currINDEX == nbL)
    {
      nextIndex = lastLayer;
    }else{ nextIndex = currINDEX + 1}
    b = getLayersNb();
    for(aa=0;aa<b;aa++)
    {
      if(isEndOfSet(nextIndex)){
        parentIDX  = getStartIDXfor( nextIndex );
        if(!isSetOpened2(parentIDX)){
          nextIndex = parentIDX;
        }else{nextIndex ++};
      }else{break}
    }
    try{makeActiveByIndex(nextIndex,false)}catch(err){};
    if(getActiveLayerIndex() == getLayersNb()){
      nextIndex ++;
      try{makeActiveByIndex(nextIndex,false)}catch(err){};
    }
  }