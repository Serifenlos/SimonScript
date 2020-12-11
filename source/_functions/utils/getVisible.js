function getVisible(){
    var ref = new ActionReference();
     ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
     var vis = executeActionGet(ref).getInteger(stringIDToTypeID('visible'));
     return vis;
  }