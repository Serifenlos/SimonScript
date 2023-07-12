// Command Option Shift E
function layer_mergeVisible(_duplicate) {
    var d = new ActionDescriptor();
    d.putBoolean(s2t("duplicate"), _duplicate);
    executeAction(s2t("mergeVisible"), d, DialogModes.NO);
}