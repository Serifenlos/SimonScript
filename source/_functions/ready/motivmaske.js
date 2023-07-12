function motivmaske(_kind, _get) {

    // _kind = 'Motiv' || 'nicht Motiv'
    // _get = 'Selection' || 'Folder'
    var startIDXs = layer_selectedIDX_get();
    cancel = false;

    selection_loop(function () { select_motiv() });

    if (!cancel) {
        if (_get == "Selection") {
            layer_selectedIDX_set(startIDXs);
            if (_kind == "nicht Motiv") {
                select_invert();
            }
        } else {
            gotoLayer(startIDXs[startIDXs.length - 1])
            selection2mask(_kind);
            if (_kind == "nicht Motiv") {
                gotoMask();
                invert();
                gotoFill();
            }
        }
    }
}