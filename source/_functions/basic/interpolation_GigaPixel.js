function interpolation_GigaPixel(_horizontalPPI, _scaleFactor, _minAufloesung) {
    // var scale = (_minAufloesung / _horizontalPPI).toFixed(2).replace('.', ',');
    // text2Clipboard(scale);

    var ruleUnit_gigapixel_temp = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;

    var image_width = parseInt(app.activeDocument.width);
    var scale2 = Math.ceil(_scaleFactor * image_width);
    text2Clipboard(scale2);

    app.preferences.rulerUnits = ruleUnit_gigapixel_temp;

    // executeAction(sTID('913d412a-534a-5224-a25d-213434343434'), undefined, DialogModes.ALL);
    executeAction(sTID('1E822513-BC4D-4CF2-B1FE-80505B509928'), undefined, DialogModes.ALL);
    setDpi(_minAufloesung);
}