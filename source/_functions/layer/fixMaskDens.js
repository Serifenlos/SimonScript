function fixMaskDens(_dens) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var l = new ActionList();
    var l2 = new ActionList();
    var r = new ActionReference();

    d.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    r.putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
    d2.putReference(s2t("channel"), r);
    l2.putInteger(_dens);
    l2.putInteger(255);
    d2.putList(s2t("output"), l2);
    l.putObject(s2t("levelsAdjustment"), d2);
    d.putList(s2t("adjustment"), l);
    executeAction(s2t("levels"), d, DialogModes.NO);
}