function selection2mask(_mask_name) {
    var i = 1;
    while (layer_checkExistence(layer_getIDXbyString(_mask_name + " " + i)[0])) {
        i++
    }
    createGroup(_mask_name + " " + i, "passThrough", "none", 100, f);
    maskFromSelection();
}