function channel_name(_name) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putString(s2t("name"), _name);
    d.putObject(s2t("to"), s2t("channel"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}