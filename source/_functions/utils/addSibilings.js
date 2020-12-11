function addSibilings(){
    theSelIDX1 = getSelectedLayersIdx();
    theSibilings  = getSibilings1();
    var MBAll = theSelIDX1.concat(theSibilings);
    makeActiveByIndex(MBAll, false);
  }