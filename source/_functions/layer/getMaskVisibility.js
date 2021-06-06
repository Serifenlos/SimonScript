function getMaskVisibility() {
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    return executeActionGet(r).getBoolean(s2t("userMaskEnabled"));
}