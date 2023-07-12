// function layer_checkExistence(_idx) {
//     try {
//         var r = new ActionReference();
//         r.putProperty(s2t("property"), s2t("itemIndex"));
//         r.putIndex(s2t("layer"), _idx);
//         var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
//         return true;
//     } catch (e) {
//         return false;
//     }
// }

// check by IDX or name
function layer_checkExistence(_input) {
    try {
        var r = new ActionReference();
        r.putProperty(s2t("property"), s2t("itemIndex"));
        if (typeof _input == "number") {
            r.putIndex(s2t("layer"), _input);
        } else if (typeof _input == "string") {
            r.putName(s2t('layer'), _input);
        }
        var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
        return true;
    } catch (e) {
        return false;
    }
}