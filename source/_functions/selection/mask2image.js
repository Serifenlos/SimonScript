function mask2image(_name) {
    if (layer_selectedIDX_get().length === 1 && hasLayerMask()) {
        var name_sorce = layer_getName(getActiveLayerIndex());
        gotoMask();
        loadSelectionOfMask();
        select_invert();
        layer_create(_name + " (" + name_sorce + ")", 100, true, "normal");
        fill("black", "normal", 100);
        selection_deselect();
    } else {
        alert("Abbruch!\nwähle genau eine Ebene mit Maske aus");
    }
}