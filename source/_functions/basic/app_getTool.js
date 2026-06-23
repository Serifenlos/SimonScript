function app_getTool(){  
    var ref = new ActionReference();   
    ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
    var cTool = typeIDToStringID(executeActionGet(ref).getEnumerationType(stringIDToTypeID('tool')));  
    return cTool;  
}