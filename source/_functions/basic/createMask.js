function createMask() {
    var descriptor = new ActionDescriptor();
    var reference = new ActionReference();

    descriptor.putClass(s2t("new"), s2t("channel"));
    reference.putEnumerated(s2t("channel"), s2t("channel"), s2t("mask"));
    descriptor.putReference(s2t("at"), reference);
    descriptor.putEnumerated(s2t("using"), c2t("UsrM"), s2t("revealAll"));
    executeAction(s2t("make"), descriptor, DialogModes.NO);
}