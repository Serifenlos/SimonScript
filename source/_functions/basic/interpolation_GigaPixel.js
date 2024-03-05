function interpolation_GigaPixel(_horizontalPPI, _minAufloesung,) {
    var scale = (_minAufloesung / _horizontalPPI).toFixed(2).replace('.', ',');
    text2Clipboard(scale);
    executeAction(sTID('913d412a-534a-5224-a25d-213434343434'), undefined, DialogModes.ALL);
    setDpi(_minAufloesung);
}