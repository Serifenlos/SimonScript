function layer_checkExistence(_idx) {
    try {
        var r = new ActionReference();
        r.putProperty(s2t("property"), s2t("itemIndex"));
        r.putIndex(s2t("layer"), _idx);
        var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
        return true;
    } catch (e) {
        return false;
    }
}