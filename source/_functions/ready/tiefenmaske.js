function tiefenmaske(_merge) {
    var startIDXs = layer_selectedIDX_get();


    if (_merge || layer_selectedIDX_get().length > 1) {
        if (_merge) {
            layer_mergeVisible(_merge);
        } else {
            layer_copyLayers(); //Ebenen kopieren (Apfel J)
            layer_mergeLayers(); //auf eine Ebene reduzieren (Apfel E)
        }

        nameLayer("helper__depthMask_image");

        // move to TOP
        var i = hasBackground() ? 0 : 1;
        while (layer_checkExistence(i)) {
            i++;
        };
        moveLayer("helper__depthMask_image", parseInt(i - 1), "up");
        gotoLayer("helper__depthMask_image");

    } else {
        if (layer_checkExistence(layer_getIDXbyString("Original")[0])) {
            // alert("Ori existiert")
            gotoLayer("Original");
        } else {
            gotoLayer(layer_selectedIDX_get()[layer_selectedIDX_get().length - 1])
        }

        while (doc.activeLayer.kind != LayerKind.NORMAL) {
            gotoLayer(getActiveLayerIndex() - 1)
        };

        if (doc.activeLayer.kind != LayerKind.SmartObject) {
            executeAction(sTID('copyToLayer'), undefined, DialogModes.NO);
            nameLayer("helper__depthMask_image");
        }
    }

    neural_depthmap();

    nameLayer("layer__depthMask_map");
    select_luminance();

    layer_delete();
    gotoLayer("helper__depthMask_image");
    layer_delete();
    createGroup("Tiefe", "passThrough", "none", 100, f);

    maskFromSelection();

    // if (layer_checkExistence(layer_getIDXbyString("Dodge & Burn △◊▽")[0])) {
    //     moveLayer("Tiefe", "Dodge & Burn △◊▽", "up");
    // }



    if (startIDXs.length > 0) {
        moveLayer("Tiefe", startIDXs[startIDXs.length - 1], "up");
        // alert("length");
        // return;
    } else if (layer_checkExistence(layer_getIDXbyString("Dodge & Burn △◊▽")[0])) {
        moveLayer("Tiefe", "Dodge & Burn △◊▽", "up");
        // alert("Dodge");
        // return;
    } else if (layer_checkExistence(layer_getIDXbyString("Einstellungen")[0])) {
        moveLayer("Tiefe", "Einstellungen", "down");
        // alert("Einstellungen");
    }




    gotoLayer("Tiefe");
}



