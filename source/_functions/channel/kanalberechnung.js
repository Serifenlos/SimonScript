function kanalberechnung(_c1, _c1_invert, _c2, _c2_invert, _layer, _calculation, _name, _select) {

    // kanalberechnung("red", f, "grain", f, "merged", "difference", "1", "RGB");
    // kanalberechnung("red", f, "grain", f, "Original", "difference", "2", "RGB");
    // kanalberechnung("1", "2", "this", "lighten", "R", "RGB");
    
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    var r4 = new ActionReference();


    d.putClass(s2t("new"), s2t("channel"));
    if (_c1 == "red" || _c1 == "grain" || _c1 == "blue" || _c1 == "gray") {
        r.putEnumerated(s2t("channel"), s2t("channel"), s2t(_c1));
    } else {
        r.putName(s2t("channel"), _c1);
    }

    if (_layer == "merged") {
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    } else if (_layer != "this") {
        r.putName(s2t("layer"), _layer);
    }
    d2.putReference(s2t("to"), r);
    d2.putBoolean(s2t("invert"), _c1_invert);
    d2.putEnumerated(s2t("calculation"), s2t("calculationType"), s2t(_calculation));

    if (_c2 == "red" || _c2 == "grain" || _c2 == "blue" || _c2 == "gray") {
        r2.putEnumerated(s2t("channel"), s2t("channel"), s2t(_c2));
    } else {
        r2.putName(s2t("channel"), _c2);
    }


    if (_layer == "merged") {
        r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    } else if (_layer != "this") {
        r2.putName(s2t("layer"), _layer);
    }
    d2.putReference(s2t("source2"), r2);
    d2.putBoolean(s2t("invertSource2"), _c2_invert);
    d.putObject(s2t("using"), s2t("calculation"), d2);
    executeAction(s2t("make"), d, DialogModes.NO);

    channel_name(_name);
    channel_select(_select, false);
}