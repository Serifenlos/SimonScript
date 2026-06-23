function app_setTool(_tool) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    r.putClass( app.stringIDToTypeID(_tool) );
    d.putReference( app.charIDToTypeID('null'), r );
    executeAction( app.charIDToTypeID('slct'), d, DialogModes.NO );
}