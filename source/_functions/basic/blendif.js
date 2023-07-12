// function blendif(_blackMin, _blackMax, _whiteMin, _whiteMax) {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
//     d.putReference(sTID('null'), r);
//     var d2 = new ActionDescriptor();
//     var l = new ActionList();
//     var d3 = new ActionDescriptor();
//     var r2 = new ActionReference();
//     r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('gray'));
//     d3.putReference(sTID('channel'), r2);
//     d3.putInteger(sTID('srcBlackMin'), 0);
//     d3.putInteger(sTID('srcBlackMax'), 0);
//     d3.putInteger(sTID('srcWhiteMin'), 255);
//     d3.putInteger(sTID('srcWhiteMax'), 255);
//     d3.putInteger(sTID('destBlackMin'), _blackMin);
//     d3.putInteger(sTID('destBlackMax'), _blackMax);
//     d3.putInteger(sTID('destWhiteMin'), _whiteMin);
//     d3.putInteger(sTID('desaturate'), _whiteMax);
//     l.putObject(sTID('blendRange'), d3);
//     d2.putList(sTID('blendRange'), l);
//     var d4 = new ActionDescriptor();
//     d4.putUnitDouble(sTID('scale'), sTID('percentUnit'), 100.000000);
//     d2.putObject(sTID('layerEffects'), sTID('layerEffects'), d4);
//     d.putObject(sTID('to'), sTID('layer'), d2);
//     executeAction(sTID('set'), d, DialogModes.NO);
// }

function blendif(_idx, _blackMin, _blackMax, _whiteMin, _whiteMax) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    if (!isNaN(_idx)) {
        r.putIndex(s2t("layer"), _idx)
    } else {
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'))
    }
    d.putReference(sTID('null'), r);

    var d2 = new ActionDescriptor();
    var l = new ActionList();
    var d3 = new ActionDescriptor();
    var r2 = new ActionReference();
    r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('gray'));
    d3.putReference(sTID('channel'), r2);
    d3.putInteger(sTID('srcBlackMin'), 0);
    d3.putInteger(sTID('srcBlackMax'), 0);
    d3.putInteger(sTID('srcWhiteMin'), 255);
    d3.putInteger(sTID('srcWhiteMax'), 255);
    d3.putInteger(sTID('destBlackMin'), _blackMin);
    d3.putInteger(sTID('destBlackMax'), _blackMax);
    d3.putInteger(sTID('destWhiteMin'), _whiteMin);
    d3.putInteger(sTID('desaturate'), _whiteMax);
    l.putObject(sTID('blendRange'), d3);
    d2.putList(sTID('blendRange'), l);
    d.putObject(sTID('to'), sTID('layer'), d2);
    executeAction(sTID('set'), d, DialogModes.NO);
}