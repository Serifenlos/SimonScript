function myselectNext() {
    currINDEX = getActiveLayerIndex();
    lastSetIdx = 0;
    lastLayer = 0;
    testIDX = 1;
    if(hasBackground()){lastLayer = -1;testIDX = 0};
    if(isLayerSet(currINDEX))
      {
        if(getNbOfChilds() > 1)
        {
          if(!isSetOpened2(currINDEX))
          {
            lastSetIdx = getLastChildIdx();
            currINDEX = lastSetIdx;
          }
        }else{currINDEX = currINDEX-1}
      }
    nextIndex = currINDEX - 1;
    if(nextIndex <= lastLayer){nextIndex = getLayersNb()};
  /*  if(getLayerName(nextIndex).match(/^<\/Layer group/)){ */
    var find = new RegExp("^<\/Layer group");
    if(getLayerName(nextIndex).match(find)) {
      bb=nextIndex-1;
      for(bb; bb>0; bb--) {
  /*      if(getLayerName(bb).match(/^<\/Layer group/)){ */
        var find = new RegExp("^<\/Layer group");
        if(getLayerName(bb).match(find)){
          nextIndex --;
        }else{break}
      }
    }
    try{makeActiveByIndex(nextIndex,false)}catch(err){};
    if(currINDEX != testIDX)
    {
      if(getActiveLayerIndex() == getLayersNb()){
        try{makeActiveByIndex(nextIndex-1,false)}catch(err){};
      }
    }
  }