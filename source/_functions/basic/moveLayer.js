function moveLayer(_objectLayer, _aimLayer, _direction) {
    gotoLayer(_objectLayer);
    var ref_1 = app.activeDocument.activeLayer;
    gotoLayer(_aimLayer);
    var ref_2 = app.activeDocument.activeLayer;
    if (_direction == "up") {
        var direction = ElementPlacement.PLACEBEFORE
    } else if (_direction == "down") {
        var direction = ElementPlacement.PLACEAFTER
    };
    ref_1.move(ref_2, direction);
}