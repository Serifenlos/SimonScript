function getVisibleforIDX(idx){
    var ref = new ActionReference();
     ref.putIndex( charIDToTypeID('Lyr '), idx );
     var vis = executeActionGet(ref).getInteger(stringIDToTypeID('visible'));
     return vis;
  }