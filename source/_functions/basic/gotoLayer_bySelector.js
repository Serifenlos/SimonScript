function gotoLayer_bySelector(_input) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    try {

        if (typeof _input == "number") {
            r.putIndex(s2t("layer"), _input);
        } else if (typeof _input == "string") {
            if (layer_checkExistence(_input)) {
                r.putName(s2t('layer'), _input);
            } else {
                r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
            }
        }

        d.putReference(sTID('null'), r);
        d.putBoolean(sTID('makeVisible'), false);
        executeAction(sTID('select'), d, DialogModes.NO);
    } catch (e) {
        if (debug) alert("ERROR - gotoLayer_bySelector: \n" + e)
    }
}