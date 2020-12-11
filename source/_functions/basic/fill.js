function fill(_content, _mode, _opacity, _h, _s, _b) {
    try {
        var d = new ActionDescriptor();
        d.putEnumerated(sTID('using'), sTID('fillContents'), sTID(_content));

        if (_content == "color") {
            var d2 = new ActionDescriptor();
            d2.putUnitDouble(sTID('hue'), sTID('angleUnit'), _h);
            d2.putDouble(sTID('saturation'), _s);
            d2.putDouble(sTID('brightness'), _b);
            d.putObject(sTID('color'), sTID('HSBColorClass'), d2);
        }

        d.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d.putEnumerated(sTID('mode'), sTID('blendMode'), sTID(_mode));
        executeAction(sTID('fill'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}