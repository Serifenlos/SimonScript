function layer_renameByIDX(_idx, _name) {
    if (_idx == 0) return;
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putIndex(s2t('layer'), _idx);
    d.putReference(s2t('null'), r);
    var d2 = new ActionDescriptor();
    d2.putString(s2t('name'), _name);
    d.putObject(s2t('to'), s2t('layer'), d2);
    executeAction(s2t('set'), d, DialogModes.NO);
}