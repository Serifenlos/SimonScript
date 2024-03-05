function interpolation_PhotoAI(_horizontalPPI, _minAufloesung,) {
    var scale = (_minAufloesung / _horizontalPPI).toFixed(2).replace('.', ',');
    text2Clipboard(scale);
    executeAction(sTID('a40009fc-f5fc-4a09-86ec-5a0ed56c5668'), undefined, DialogModes.ALL);
}