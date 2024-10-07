function setMaskVisibility_bySelector(_set, _input) {
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
        if (typeof _input == "number") {
            r.putIndex(s2t("layer"), _input);                  // by Index
        }
        if (typeof _input == "string") {
            if (layer_checkExistence(_input)) {
                r.putName(s2t('layer'), _input);            // by Layername
            } else {
                r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);  // by Layername via Regex - first hits
            }
        }
        if (typeof _input === "undefined") {
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));  // by activeLayer
        }
        d.putReference(s2t("null"), r);
        d2.putBoolean(s2t("userMaskEnabled"), _setX);
        d.putObject(s2t("to"), s2t("layer"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    } catch (e) { alert(e) }
}