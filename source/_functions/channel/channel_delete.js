function channel_delete(_name) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    r.putName(s2t("channel"), _name);
    d.putReference(s2t("null"), r);
    executeAction(s2t("delete"), d, DialogModes.NO);
}