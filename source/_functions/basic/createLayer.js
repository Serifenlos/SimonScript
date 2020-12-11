function createLayer(_name, _type, _mode, _color, _opacity, _mask, _clip, _autoLevel) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putClass(sTID("adjustmentLayer"));
        d.putReference(sTID("null"), r);
        var d2 = new ActionDescriptor();
        d2.putString(sTID("name"), _name);
        d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
        d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
        d2.putBoolean(sTID('group'), _clip);
        if (_type == "levels" && _autoLevel) {
            var d3 = new ActionDescriptor();
            d3.putEnumerated(sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault'));
            var l = new ActionList();
            var d4 = new ActionDescriptor();
            var r2 = new ActionReference();
            r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('composite'));
            d4.putReference(sTID('channel'), r2);
            d4.putBoolean(sTID('auto'), true);
            l.putObject(sTID('levelsAdjustment'), d4);
            d3.putList(sTID('adjustment'), l);
            d2.putObject(sTID("type"), sTID(_type), d3);
        } else {
            d2.putClass(sTID("type"), sTID(_type));
        }
        d.putObject(sTID("using"), sTID("adjustmentLayer"), d2);
        executeAction(sTID("make"), d, DialogModes.NO);

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