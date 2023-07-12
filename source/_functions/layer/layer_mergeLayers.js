// auf eine Ebene reduzieren (Apfel E)
function layer_mergeLayers() {
    var d = new ActionDescriptor();
    executeAction(s2t("mergeLayersNew"), d, DialogModes.NO);
}