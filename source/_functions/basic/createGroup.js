function createGroup(_name, _mode, _color, _opacity, _groupSelection) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putClass(sTID('layerSection'));
        d.putReference(sTID('null'), r);
        if (_groupSelection) {
            var r2 = new ActionReference();
            r2.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
            d.putReference(sTID('from'), r2);
        }
        var d2 = new ActionDescriptor();
        d2.putString(sTID('name'), _name);
        d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d2.putEnumerated(sTID('color'), sTID('color'), sTID(_color));
        d2.putEnumerated(sTID('mode'), sTID('blendMode'), sTID(_mode));
        d.putObject(sTID('using'), sTID('layerSection'), d2);
        d.putInteger(sTID('layerSectionStart'), 351);
        d.putInteger(sTID('layerSectionEnd'), 352);
        d.putString(sTID('name'), "Gruppe 3");
        executeAction(sTID('make'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}