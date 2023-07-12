// TODO hier könnte man noch einen Selektor einbauen à la name, layerID oder idx
function layer_delete() {
    var d = new ActionDescriptor();
    // var l = new ActionList();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    // l.putInteger(20);
    // d.putList(s2t("layerID"), l);
    executeAction(s2t("delete"), d, DialogModes.NO);
}