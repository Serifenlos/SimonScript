// function hide() {
//     var idHd = charIDToTypeID("Hd  ");
//     var desc809 = new ActionDescriptor();
//     var idnull = charIDToTypeID("null");
//     var list12 = new ActionList();
//     var ref648 = new ActionReference();
//     var idLyr = charIDToTypeID("Lyr ");
//     var idOrdn = charIDToTypeID("Ordn");
//     var idTrgt = charIDToTypeID("Trgt");
//     ref648.putEnumerated(idLyr, idOrdn, idTrgt);
//     list12.putReference(ref648);
//     desc809.putList(idnull, list12);
//     executeAction(idHd, desc809, DialogModes.NO);
// }

// function hide() {
//     var d = new ActionDescriptor();
//     var l = new ActionList();
//     var rl = new ActionReference();
//     rl.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//     l.putReference(rl);
//     d.putList(c2t("null"), l);
//     executeAction(s2t("hide"), d, DialogModes.NO);
// }

function hide(_input) {
    try {
        var d = new ActionDescriptor();
        var l = new ActionList();
        var r = new ActionReference();
        if (typeof _input == "number") {
            // hide by Index
            r.putIndex(s2t("layer"), _input);
        } else if (typeof _input == "string") {
            if (layer_checkExistence(_input)) {
                // hide by Layername
                r.putName(s2t('layer'), _input);
            } else {
                // hide by Layername via Regex // first hit
                r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
            }
            // } else if (typeof _input == "boolean" || typeof _input == 'undefined') {
        } else if (typeof _input === "undefined") {
            // hide activeLayer
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        }
        l.putReference(r);
        d.putList(c2t("null"), l);
        executeAction(s2t("hide"), d, DialogModes.NO)
    } catch (e) {}
}