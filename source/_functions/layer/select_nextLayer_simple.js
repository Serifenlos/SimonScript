function select_nextLayer_simple(_direction, _makeVisible) {
    // _makeVisible = true -> klappt zugeklappte Ordner auf und wartet dort rein -> default false
    
    var d = new ActionDescriptor();
    var r = new ActionReference();

    var __direction;
    if (_direction == 'up' || _direction == 'above') {
        __direction = s2t("forwardEnum");
    } else if (_direction == 'down' || _direction == 'below') {
        __direction = s2t("backwardEnum");
    }

    r.putEnumerated(s2t("layer"), s2t("ordinal"), __direction);
    d.putReference(s2t("null"), r);
    _makeVisible = (_makeVisible == undefined) ? _makeVisible = false : _makeVisible;
    d.putBoolean(s2t("makeVisible"), _makeVisible);
    executeAction(s2t("select"), d, DialogModes.NO);
}