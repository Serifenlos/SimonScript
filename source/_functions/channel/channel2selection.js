function channel2selection(_channel_name) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();

    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    r2.putName(s2t("channel"), _channel_name);
    d.putReference(s2t("to"), r2);
    executeAction(s2t("set"), d, DialogModes.NO);
}