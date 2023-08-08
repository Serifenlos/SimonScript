function select_saturation(_kind, _calculation, _source, _get) {
    var startIDXs = layer_selectedIDX_get();
    cancel = false;

    selection_loop(function () { channel_setSaturation(_source, _calculation) });

    if (!cancel) {
        if (_get == "selection") {
            layer_selectedIDX_set(startIDXs);
            channel2selection("saturation");
            if (_kind == "unbunt") {
                select_invert();
            }
            channel_delete("saturation");
        } else {
            gotoLayer(startIDXs[startIDXs.length - 1])
            channel2mask("saturation", _kind);
            if (_kind == "unbunt") {
                gotoMask();
                invert();
                gotoFill();
            }
            channel_delete("saturation");
        }
    }
}