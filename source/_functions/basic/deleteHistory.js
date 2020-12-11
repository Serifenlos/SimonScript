function deleteHistory() {
    var desc20 = new ActionDescriptor();
    var ref23 = new ActionReference();
    ref23.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
    desc20.putReference(charIDToTypeID('null'), ref23);
    executeAction(charIDToTypeID('Dlt '), desc20, DialogModes.NO);
};