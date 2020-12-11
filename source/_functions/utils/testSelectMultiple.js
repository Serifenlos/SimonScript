function testSelectMultiple(arr){

    makeActiveByIndex([arr[0],arr[1]], false);
    var refQ = new ActionReference();
    refQ.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    var descQ = executeActionGet(refQ);
    if( descQ.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){
      alert("targetLayers");
    }
  alert("startSelMult");

    var desc = new ActionDescriptor();
        var ref = new ActionReference();
          ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        var list = new ActionList();
    /*     for(i=0;i<arr.length;i++){
               eval("var ref"+i+" = new ActionReference()");
               eval("ref"+i+".putIndex(charIDToTypeID( 'Lyr ' ), "+arr[i]+")");
               eval("list.putReference(ref"+i+")");
             }
       desc.putList(stringIDToTypeID( 'targetLayers' ), list); */
executeAction( charIDToTypeID( "setd" ), desc, DialogModes.NO );

  alert("endSelMult");
}