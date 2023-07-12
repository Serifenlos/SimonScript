function channel2mask(_channel_name, _mask_name) {
    var i = 1;
    while (layer_checkExistence(layer_getIDXbyString(_mask_name + " " + i)[0])) {
        i++
    }
    createGroup(_mask_name + " " + i, "passThrough", "none", 100, f);

    createMask();

    channel_select(_channel_name, false)
    select_all();
    copy();
    channel_select("mask", true);
    paste_into();
    channel_select("RGB", false);
    selection_deselect();
}