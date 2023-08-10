function mask_setSaturation_singleColors_create(_foldername) {
    if (!layer_checkExistence(_foldername)) {
        // var startLayer = layer_selectedIDX_get();
        setMeta_2("startID", layer_selectedID_get());
        selection_loop(function() {mask_setSaturation_singleColors(_foldername)});
        gotoLayer(_foldername);
        // toogleOpenCloseSet();
        // hide(_foldername);
        if (layer_checkExistence("nachher")) {
            moveLayer(_foldername, "nachher", "up");
            gotoLayer(_foldername);
            moveLayer3("down", 1);
        } else {
            // move to TOP
            var i = hasBackground() ? 0 : 1;
            while (layer_checkExistence(i)) {
                i++;
            };
            moveLayer(_foldername, parseInt(i - 1), "up");
        }
        // layer_selectedIDX_set(startLayer);
        layer_selectedID_set(getMeta_2("startID"));
    } else {
        select_luminance();
        layer_delete(_foldername);
        layer_selectedID_set(getMeta_2("startID"));
        delMeta_2("startID");
    }
}