function transformLayer(_position, _scale) {
    var d = new ActionDescriptor();

    if (_position == "center" || _position == "c") {
        var _positionTranslate = "QCSAverage";}
    if (_position == "topleft" || _position == "tl" || _position == "↖") {
        var _positionTranslate = "QCSCorner0";}
    if (_position == "top" || _position == "t" || _position == "↑") {
        var _positionTranslate = "QCSSide0";}
    if (_position == "topright" || _position == "tr" || _position == "↗") {
        var _positionTranslate = "QCSCorner1";}
    if (_position == "right" || _position == "r" || _position == "→") {
        var _positionTranslate = "QCSSide1";}
    if (_position == "bottomright" || _position == "br" || _position == "↘") {
        var _positionTranslate = "QCSCorner2";}
    if (_position == "bottom" || _position == "b" || _position == "↓") {
        var _positionTranslate = "QCSSide2";}
    if (_position == "bottomleft" || _position == "bl" || _position == "↙") {
        var _positionTranslate = "QCSCorner3";}
    if (_position == "left" || _position == "l" || _position == "←") {
        var _positionTranslate = "QCSSide3";}

    d.putEnumerated(sTID('freeTransformCenterState'), sTID('quadCenterState'), sTID(_positionTranslate));
    var d2 = new ActionDescriptor();
    d2.putUnitDouble(sTID('horizontal'), sTID('pixelsUnit'), 0);
    d2.putUnitDouble(sTID('vertical'), sTID('pixelsUnit'), 0);
    d.putObject(sTID('offset'), sTID('offset'), d2);
    d.putUnitDouble(sTID('width'), sTID('percentUnit'), _scale);
    d.putUnitDouble(sTID('height'), sTID('percentUnit'), _scale);
    executeAction(sTID('transform'), d, DialogModes.NO);
}