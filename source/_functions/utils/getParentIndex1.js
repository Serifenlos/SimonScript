function getParentIndex1(idx){
    ref = new ActionReference();
    ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
    var desc = executeActionGet(ref);
    if(desc.hasKey(stringIDToTypeID("targetEnum"))){
      alert("parentIDX");
    }
}