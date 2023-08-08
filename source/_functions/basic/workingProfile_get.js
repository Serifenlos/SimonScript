function workingProfile_get(_modus) {
    // _modus = RGB || CMYK || Gray || Spot

    var r = new ActionReference();
    r.putProperty(s2t("property"), s2t("colorSettings"));
    r.putEnumerated(s2t("application"), s2t("ordinal"), s2t("targetEnum"));

    return executeActionGet(r).getObjectValue(s2t("colorSettings")).getString(s2t("working" + _modus + ""));
};