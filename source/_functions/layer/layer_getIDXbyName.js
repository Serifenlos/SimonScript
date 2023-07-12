function layer_getIDXbyName(_name) {
    var r = new ActionReference();
    r.putProperty(s2t("property"), s2t("itemIndex"));
    r.putName(s2t('layer'), _name);
    return hasBackground() ? executeActionGet(r).getInteger(s2t("itemIndex")) - 1 : executeActionGet(r).getInteger(s2t("itemIndex"));
};