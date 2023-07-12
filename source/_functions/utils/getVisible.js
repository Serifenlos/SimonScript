// function getVisible() {
//     var ref = new ActionReference();
//     ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
//     var vis = executeActionGet(ref).getInteger(stringIDToTypeID('visible'));
//     return vis;
// }

// get Visibility by IDX, name or activeLayer
function getVisible(_input) {
    try {
        var r = new ActionReference();
        if (typeof _input == "number") {
            r.putIndex(s2t("layer"), _input);
        } else if (typeof _input == "string") {
            if (layer_checkExistence(_input)) {
                r.putName(s2t('layer'), _input);
            } else {
                r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
            }
        } else if (typeof _input === 'undefined') {
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        }
        var vis = executeActionGet(r).getInteger(s2t('visible'));
        return vis;
    } catch (e) {}
}