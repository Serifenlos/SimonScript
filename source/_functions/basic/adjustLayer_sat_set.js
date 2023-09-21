function adjustLayer_sat_set(_range, _beginRamp, _beginSustain, _endSustain, _endRamp, _hue, _saturation, _lightness) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var l = new ActionList();
    var r = new ActionReference();

    var _hue = _hue ? _hue : 0;
    var _saturation = _saturation ? _saturation : 0;
    var _lightness = _lightness ? _lightness : 0;

    r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    d3.putInteger(s2t("localRange"), _range); // red=1 || yellow=2 …
    d3.putInteger(s2t("beginRamp"), _beginRamp);
    d3.putInteger(s2t("beginSustain"), _beginSustain);
    d3.putInteger(s2t("endSustain"), _endSustain);
    d3.putInteger(s2t("endRamp"), _endRamp);
    d3.putInteger(s2t("hue"), _hue);
    d3.putInteger(s2t("saturation"), _saturation);
    d3.putInteger(s2t("lightness"), _lightness);
    l.putObject(s2t("hueSatAdjustmentV2"), d3);
    d2.putList(s2t("adjustment"), l);
    d.putObject(s2t("to"), s2t("hueSaturation"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}