function mask_setSaturation_singleColors_create(_foldername, _version) {
    if (!layer_checkExistence(_foldername)) {
        // var startLayer = layer_selectedIDX_get();
        setMeta_2("startID", layer_selectedID_get());
        // time_start();
        if (_version == "v1") {
            selection_loop(function () { mask_setSaturation_singleColors(_foldername) });
        } else if (_version == "v3") {
            selection_loop(function () { mask_farbmaske_viaSaturation(_foldername, 30) });
        } else if (_version == "v2") {
            selection_loop(function () { channel_setSaturation_singleColors_v2('helper_mergeVisibleLayer', _foldername) }); //'merged'
        }
        // time_stop(start);

        if (_version != "v3") {
            gotoLayer(_foldername);
            // toogleOpenCloseSet();
            // hide(_foldername);

            with (activeDocument) activeLayer.move(layers[0], ElementPlacement.PLACEBEFORE)
            // if (layer_checkExistence("nachher")) {
            //     moveLayer(_foldername, "nachher", "up");
            //     gotoLayer(_foldername);
            //     moveLayer3("down", 1);
            // } else {
            //     // move to TOP
            //     var i = hasBackground() ? 0 : 1;
            //     while (layer_checkExistence(i)) {
            //         i++;
            //     };
            //     moveLayer(_foldername, parseInt(i - 1), "up");
            // }

            // layer_selectedIDX_set(startLayer);
            // layer_selectedID_set(getMeta_2("startID"));
            gotoLayer("Maske Gradation");
        // } else {
            // setTimeout(alert("nix"), 1000);
            // setTimeout(adjustLayer_sat_eyedropper, 1000);
            // app.setTimeout = (adjustLayer_sat_eyedropper(), 2000);
            // app.setTimeout = (alert("nix"), 3000);
            // gotoLayer("Farbe maskieren");
            // adjustLayer_sat_eyedropper();
        }
    } else {
        makeVisible("Maske Preview");
        select_luminance();
        layer_delete(_foldername);
        layer_selectedID_set(getMeta_2("startID"));
        delMeta_2("startID");
    }
}

