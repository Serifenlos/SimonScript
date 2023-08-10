// function layer_delete(_input) {
//     var d = new ActionDescriptor();
//     // var l = new ActionList();
//     var r = new ActionReference();

//     try {
//         if (typeof _input == "number") {
//             r.putIndex(s2t("layer"), _input);
//         } else {
//             if (typeof _input == "string") {
//                 if (layer_checkExistence(_input)) {
//                     r.putName(s2t('layer'), _input);
//                 } else {
//                     r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//                 }
//             } else {
//                 if (typeof _input === "undefined") {
//                     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//                 }
//             }
//         }
//     } catch (e) {
//         alert("nix zu löschen")
//     }
// }


// if (typeof _input == "number") {
//     // delete by Index
//     r.putIndex(s2t("layer"), _input);
// } else if (typeof _input == "string") {
//     if (layer_checkExistence(_input)) {
//         // delete by Layername
//         r.putName(s2t('layer'), _input);
//     } else {
//         // delete by Layername via Regex // first hit
//         r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
//     }
// } else if (typeof _input === "undefined") {
//     // delete activeLayer
//     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
// }

// d.putReference(s2t("null"), r);
// executeAction(s2t("delete"), d, DialogModes.NO);


function layer_delete(_input) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    try {
        if (typeof _input === "number") {
            // delete by Index
            r.putIndex(s2t("layer"), _input);
        } else if (typeof _input === "string") {
            if (layer_checkExistence(_input)) {
                // delete by Layername
                r.putName(s2t("layer"), _input);
            } else {
                // delete by Layername via Regex // first hit
                var idxArray = layer_getIDXbyString(_input);
                r.putIndex(s2t("layer"), idxArray[0]);
            }
        } else if (typeof _input === "undefined") {
            // delete activeLayer
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        }
        d.putReference(s2t("null"), r);
        executeAction(s2t("delete"), d, DialogModes.NO);
    } catch (error) {
        alert("nix zu löschen");
    }
}
