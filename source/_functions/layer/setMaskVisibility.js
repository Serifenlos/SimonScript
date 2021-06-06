function setMaskVisibility(_set) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    if (_set == false || _set == "hide") {
        var _setX = false
    } else if (_set == true || _set == "show") {
        var _setX = true
    } else if (_set == "toggle" || _set == "X") {
        if (getMaskVisibility()) {
            var _setX = false
        } else {
            var _setX = true
        }
    }

    try {
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(s2t("null"), r);
        d2.putBoolean(s2t("userMaskEnabled"), _setX);
        d.putObject(s2t("to"), s2t("layer"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    } catch (e) {}
}

// setMaskVisibility(true)
// setMaskVisibility(false)
// setMaskVisibility("toggle");