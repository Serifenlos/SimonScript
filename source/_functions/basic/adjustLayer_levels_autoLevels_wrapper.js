function adjustLayer_levels_autoLevels_wrapper(__algorithmus, __autoNeutrals) {
    var startLayer = layer_selectedIDX_get();

    if (doc.activeLayer.kind == "LayerKind.LEVELS") {
        // alert("ding")
        makeVisible();

    } else if (layer_checkExistence("AutoTonwert")) {
        gotoLayer("AutoTonwert");
        makeVisible();

    }
    else {
        alert("keine TonWert-Ebene ausgewählt bzw vorbereitet")
    }

    adjustLayer_levels_autoLevels(__algorithmus, __autoNeutrals)
    layer_selectedIDX_set(startLayer);
}