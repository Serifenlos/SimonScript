function adjustLayer_curves_set(horizontal, vertical, horizontal2, vertical2) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var l = new ActionList();
    var l2 = new ActionList();
    var r = new ActionReference();
    var r2 = new ActionReference();

    r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    d3.putReference(s2t("channel"), r2);
    d4.putDouble(s2t("horizontal"), horizontal);
    d4.putDouble(s2t("vertical"), vertical);
    l2.putObject(s2t("paint"), d4);
    d5.putDouble(s2t("horizontal"), horizontal2);
    d5.putDouble(s2t("vertical"), vertical2);
    l2.putObject(s2t("paint"), d5);
    d3.putList(s2t("curve"), l2);
    l.putObject(s2t("curvesAdjustment"), d3);
    d2.putList(s2t("adjustment"), l);
    d.putObject(s2t("to"), s2t("curves"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}