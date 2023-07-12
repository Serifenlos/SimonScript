function select_all() {
    var descriptor = new ActionDescriptor();
    var reference = new ActionReference();

    reference.putProperty(s2t("channel"), s2t("selection"));
    descriptor.putReference(s2t("null"), reference);
    descriptor.putEnumerated(s2t("to"), s2t("ordinal"), s2t("allEnum"));
    executeAction(s2t("set"), descriptor, DialogModes.NO);
}

// Apfel a