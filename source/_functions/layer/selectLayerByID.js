function selectLayerByID(_id, _add) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();

        if (_add == "remove" || !_add) {
            var addX = "removeFromSelection"
        } else {
            var addX = "addToSelection"
        }
        r.putIdentifier(s2t("layer"), _id)
        d.putReference(s2t("null"), r);
        d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
        d.putBoolean(s2t("makeVisible"), false);
        executeAction(s2t("select"), d, DialogModes.NO);
    } catch (e) {
        // alert("error selectLayerByID: " + e)
    }
}