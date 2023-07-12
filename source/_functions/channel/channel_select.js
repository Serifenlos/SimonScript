function channel_select(_name, _makeVisible) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    if (_name) {
        if (_name == "red" || _name == "grain" || _name == "blue" || _name == "RGB" || _name == "mask" || _name == "cyan" || _name == "magenta" || _name == "yellow" || _name == "black" || _name == "CMYK" || _name == "lightness" || _name == "a" || _name == "b" || _name == "lab") {
            r.putEnumerated(s2t("channel"), s2t("channel"), s2t(_name));
        } else {
            r.putName(s2t("channel"), _name);
        }

        d.putReference(s2t("null"), r);
        d.putBoolean(s2t("makeVisible"), _makeVisible);
        executeAction(s2t("select"), d, DialogModes.NO);
    }
}