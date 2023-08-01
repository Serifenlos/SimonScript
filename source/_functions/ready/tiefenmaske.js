function tiefenmaske(_merge, _kind, _get) {
    // _merge = true || false
    // _kind = 'Tiefe' || 'nicht Tiefe'
    // _get = 'Selection' || 'Folder'

    var startIDXs = layer_selectedIDX_get();
    cancel = false;

    if (_merge) {
        layer_mergeVisible(_merge);
    } else {

        if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT" || doc.activeLayer.kind == "LayerKind.NORMAL") {

            layer_copyLayers(); //Ebenen kopieren (Apfel J)
            if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
                rasterSmartObject();
            }
            if (layer_selectedIDX_get().length > 1) {
                layer_mergeLayers(); //auf eine Ebene reduzieren (Apfel E)
            }
        } else {
            alert("Abruch\n Eine Tiefenmakse von dieser Ebene kann nciht erstellt werden.");
            return;
        }
    }

    nameLayer("helper__depthMask_image");

    // move to TOP
    var i = hasBackground() ? 0 : 1;
    while (layer_checkExistence(i)) {
        i++;
    };
    moveLayer("helper__depthMask_image", parseInt(i - 1), "up");
    gotoLayer("helper__depthMask_image");
    // }

    selection_loop(function () {
        neural_depthmap2();
        // neural_depthmap();
    });

    nameLayer("layer__depthMask_map");
    select_luminance();

    layer_delete();
    gotoLayer("helper__depthMask_image");
    layer_delete();


    if (!cancel) {
        if (_get == "Selection") {
            layer_selectedIDX_set(startIDXs);
            if (_kind == "nicht Tiefe") {
                select_invert();
            }
        } else {
            gotoLayer(startIDXs[startIDXs.length - 1])
            selection2mask(_kind);
            if (_kind == "nicht Tiefe") {
                gotoMask();
                invert();
                gotoFill();
            }
        }
    }
}
