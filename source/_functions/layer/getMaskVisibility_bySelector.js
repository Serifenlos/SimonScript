function getMaskVisibility_bySelector(_input) {
    var r = new ActionReference();

    if (typeof _input == "number") {
        // by Index
        r.putIndex(s2t("layer"), _input);
    }

    if (typeof _input == "string") {
        //     // by Layername
        //     r.putName(s2t('layer'), _input);
        // } else {
        //     // by Layername via Regex // first hit
        //     r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
        
        if (layer_checkExistence(_input)) {
            // by Layername
            r.putName(s2t('layer'), _input);
        } else {
            // by Layername via Regex // first hit
            r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
        }
    }

    if (typeof _input === "undefined") {
        // by activeLayer
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    }

    return executeActionGet(r).getBoolean(s2t("userMaskEnabled"));
}



