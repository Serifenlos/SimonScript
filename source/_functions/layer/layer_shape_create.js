function layer_shape_create(_form, _top, _left, _bottom, _right, _fillEnabled, _fillRGB, _strokeEnabled, _strokeRGB, _strokeWidth, _strokeAlignment) {

    //_form = "rectangle", "ellipse"
    //_strokeAlignment = "strokeStyleAlignCenter",", "strokeStyleAlignOutside" 

    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var d6 = new ActionDescriptor();
    var d7 = new ActionDescriptor();
    var d8 = new ActionDescriptor();
    var l = new ActionList();
    var r = new ActionReference();

    r.putClass(s2t("contentLayer"));
    d.putReference(s2t("null"), r);
    d4.putDouble(s2t("red"), _fillRGB[0]);
    d4.putDouble(s2t("grain"), _fillRGB[1]);
    d4.putDouble(s2t("blue"), _fillRGB[2]);
    d3.putObject(s2t("color"), s2t("RGBColor"), d4);
    d2.putObject(s2t("type"), s2t("solidColorLayer"), d3);
    d5.putInteger(s2t("unitValueQuadVersion"), 1);
    d5.putUnitDouble(s2t("top"), s2t("percentUnit"), _top);
    d5.putUnitDouble(s2t("left"), s2t("percentUnit"), _left);
    d5.putUnitDouble(s2t("bottom"), s2t("percentUnit"), _bottom);
    d5.putUnitDouble(s2t("right"), s2t("percentUnit"), _right);
    d2.putObject(s2t("shape"), s2t(_form), d5);
    d6.putInteger(s2t("strokeStyleVersion"), 2);
    d6.putBoolean(s2t("strokeEnabled"), _strokeEnabled);
    d6.putBoolean(s2t("fillEnabled"), _fillEnabled);
    d6.putUnitDouble(s2t("strokeStyleLineWidth"), s2t("pixelsUnit"), _strokeWidth);
    d6.putUnitDouble(s2t("strokeStyleLineDashOffset"), s2t("pointsUnit"), 0);
    d6.putDouble(s2t("strokeStyleMiterLimit"), 100);
    d6.putEnumerated(s2t("strokeStyleLineCapType"), s2t("strokeStyleLineCapType"), s2t("strokeStyleButtCap"));
    d6.putEnumerated(s2t("strokeStyleLineJoinType"), s2t("strokeStyleLineJoinType"), s2t("strokeStyleMiterJoin"));
    d6.putEnumerated(s2t("strokeStyleLineAlignment"), s2t("strokeStyleLineAlignment"), s2t(_strokeAlignment));
    d6.putBoolean(s2t("strokeStyleScaleLock"), false);
    d6.putBoolean(s2t("strokeStyleStrokeAdjust"), false);
    d6.putList(s2t("strokeStyleLineDashSet"), l);
    d6.putEnumerated(s2t("strokeStyleBlendMode"), s2t("blendMode"), s2t("normal"));
    d6.putUnitDouble(s2t("strokeStyleOpacity"), s2t("percentUnit"), 100);
    d8.putDouble(s2t("red"), _strokeRGB[0]);
    d8.putDouble(s2t("grain"), _strokeRGB[1]);
    d8.putDouble(s2t("blue"), _strokeRGB[2]);
    d7.putObject(s2t("color"), s2t("RGBColor"), d8);
    d6.putObject(s2t("strokeStyleContent"), s2t("solidColorLayer"), d7);
    d2.putObject(s2t("strokeStyle"), s2t("strokeStyle"), d6);
    d.putObject(s2t("using"), s2t("contentLayer"), d2);
    executeAction(s2t("make"), d, DialogModes.NO);
}