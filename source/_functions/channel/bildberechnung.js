function bildberechnung(_channel_name, _blendmode, _invert, _preserveTransparency) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putName(s2t("channel"), _channel_name);
    d2.putReference(s2t("to"), r);
    d2.putBoolean(s2t("invert"), _invert);
    d2.putEnumerated(s2t("calculation"), s2t("calculationType"), s2t(_blendmode));
    d2.putBoolean(s2t("preserveTransparency"), _preserveTransparency);
    d.putObject(s2t("with"), s2t("calculation"), d2);
    try {executeAction(s2t("applyImageEvent"), d, DialogModes.NO)}
    catch(e) {}
}