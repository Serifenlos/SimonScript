function createColorLayer(_name, _mode, _color, _opacity, _mask, _red, _green, _blue) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putClass(sTID("contentLayer"));
        d.putReference(sTID("null"), r);
        var d2 = new ActionDescriptor();
        d2.putString(sTID("name"), _name);
        d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
        d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
        var d3 = new ActionDescriptor();
        var d4 = new ActionDescriptor();
        d4.putDouble(sTID("red"), _red);
        d4.putDouble(sTID("green"), _green);
        d4.putDouble(sTID("blue"), _blue);
        d3.putObject(sTID("color"), sTID("RGBColor"), d4);
        d2.putObject(sTID("type"), sTID("solidColorLayer"), d3);
        d.putObject(sTID("using"), sTID("contentLayer"), d2);
        executeAction(sTID("make"), d, DialogModes.NO);
        gotoMask();

        if (_mask == "invert") {
            executeAction(sTID('invert'), undefined, DialogModes.NO);
            return;
        } else if (_mask == "none") {
            deleteMask();
            return;
        } else if (_mask == "black" || _mask == "white" || _mask == "gray") {
            fill(_mask, "normal", 100);
            return;
        }

    } catch (err) {
        logger(arguments.callee.name);
    }
}