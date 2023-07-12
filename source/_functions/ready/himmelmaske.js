function himmelmaske(_kind, _get) {

    // _kind = 'Himmel' || 'nicht Himmel'
    // _get = 'Selection' || 'Folder'


    var startIDXs = layer_selectedIDX_get();
    cancel = false;

    selection_loop(function () { select_sky(false) });


    if (!cancel) {
        if (_get == "Selection") {
            layer_selectedIDX_set(startIDXs);
            if (_kind == "nicht Himmel") {
                select_invert();
            }
        } else {
            gotoLayer(startIDXs[startIDXs.length - 1])
            selection2mask(_kind);
            if (_kind == "nicht Himmel") {
                gotoMask();
                invert();
                gotoFill();
            }
        }
    }

    // himmelmaske_loop();

    // createGroup("Himmel", "passThrough", "none", 100, f);
    // maskFromSelection();


    // if (startIDXs.length > 0) {
    //     moveLayer("Himmel", startIDXs[startIDXs.length - 1], "up");
    // } else if (layer_checkExistence(layer_getIDXbyString("Dodge & Burn △◊▽")[0])) {
    //     moveLayer("Himmel", "Dodge & Burn △◊▽", "up");
    // } /*else if (layer_checkExistence(layer_getIDXbyString("Einstellungen")[0])) {
    //     moveLayer("Motiv", "Einstellungen", "down");
    // }*/
    // gotoLayer("Himmel");
}


