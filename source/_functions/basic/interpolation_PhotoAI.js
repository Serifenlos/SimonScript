function interpolation_PhotoAI(_horizontalPPI, _minAufloesung, _width) {
    var scale = (_minAufloesung / _horizontalPPI).toFixed(2).replace('.', ',');
    text2Clipboard(scale);
   /*  var width = pt2mm(_width) * 10; */
    /* text2Clipboard(_width); */
    
    executeAction(sTID('a40009fc-f5fc-4a09-86ec-5a0ed56c5668'), undefined, DialogModes.ALL);
    setDpi(_minAufloesung);
}