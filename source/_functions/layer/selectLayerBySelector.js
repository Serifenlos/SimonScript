function selectLayerBySelector(_selector, _add) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();

        if (_add == "remove" || !_add) {var addX = "removeFromSelection"} else {var addX = "addToSelection"}
        if (isNaN(_selector)) {r.putName(s2t("layer"), _selector)}
        else {r.putIndex(s2t("layer"), _selector)}
        d.putReference(s2t("null"), r);
        d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
        d.putBoolean(s2t("makeVisible"), false);
        executeAction(s2t("select"), d, DialogModes.NO);
    } catch (e) {}
}
