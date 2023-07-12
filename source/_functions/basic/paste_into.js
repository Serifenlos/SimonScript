// Apfel v
function paste_into() {
    var descriptor = new ActionDescriptor();

    descriptor.putEnumerated(c2t("AntA"), s2t("antiAliasType"), s2t("antiAliasNone"));
    executeAction(s2t("pasteInto"), descriptor, DialogModes.NO);
}