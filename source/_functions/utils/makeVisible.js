// function makeVisible() {
//     var idShw = charIDToTypeID("Shw ");
//     var desc808 = new ActionDescriptor();
//     var idnull = charIDToTypeID("null");
//     var list11 = new ActionList();
//     var ref647 = new ActionReference();
//     var idLyr = charIDToTypeID("Lyr ");
//     var idOrdn = charIDToTypeID("Ordn");
//     var idTrgt = charIDToTypeID("Trgt");
//     ref647.putEnumerated(idLyr, idOrdn, idTrgt);
//     list11.putReference(ref647);
//     desc808.putList(idnull, list11);
//     executeAction(idShw, desc808, DialogModes.NO);
// }


function makeVisible(_input) {
    try {
        var d = new ActionDescriptor();
        var l = new ActionList();
        var r = new ActionReference();
        if (typeof _input == "number") {
            // show by Index
            r.putIndex(s2t("layer"), _input);
        } else if (typeof _input == "string") {
            if (layer_checkExistence(_input)) {
                // show by Layername
                r.putName(s2t('layer'), _input);
            } else {
                // show by Layername via Regex // first hit
                r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
            }
            // } else if (typeof _input == "boolean" || typeof _input == 'undefined') {
        } else if (typeof _input === "undefined") {
            // show activeLayer
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        }
        l.putReference(r);
        d.putList(c2t("null"), l);
        executeAction(s2t("show"), d, DialogModes.NO)
    } catch (e) {}
}