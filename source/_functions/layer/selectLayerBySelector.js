function selectLayerBySelector(_selector, _add) {  //TODO select by IDX
    try {
        var d = new ActionDescriptor();
        // var list = new ActionList();
        var r = new ActionReference();

        if (_add == "remove" || !_add) {var addX = "removeFromSelection"} else {var addX = "addToSelection"}
        r.putName(s2t("layer"), _selector);
        d.putReference(s2t("null"), r);
        d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
        d.putBoolean(s2t("makeVisible"), false);
        // list.putInteger( 65 );
        // list.putInteger( 66 );
        // d.putList( s2t( "layerID" ), list );
        executeAction(s2t("select"), d, DialogModes.NO);
    } catch (e) {}
}