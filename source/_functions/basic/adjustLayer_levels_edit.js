function adjustLayer_levels_edit(_setRGB_dark, _setRGB_light, _maxRGB_dark, _maxRGB_light, _gammaRGB,  _setRED_dark, _setRGB_light, _maxRED_dark, _maxRED_light, _gammaRED, _setGREEN_dark, _setGREEN_light, _maxGREEN_dark, _maxGREEN_light, _gammaGREEN, _setBLUE_dark, _setBLUE_light, _maxBLUE_dark, _maxBLUE_light, _gammaBLUE) {

    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var d6 = new ActionDescriptor();
    var l = new ActionList();
    var l2 = new ActionList();
    var l3 = new ActionList();
    var l4 = new ActionList();
    var l5 = new ActionList();
    var l6 = new ActionList();
    var l7 = new ActionList();
    var l8 = new ActionList();
    var l9 = new ActionList();
    var r = new ActionReference();
    var r2 = new ActionReference();
    var r3 = new ActionReference();
    var r4 = new ActionReference();
    var r5 = new ActionReference();

    if(_setRGB_dark == null) {_setRGB_dark = 0}
    if(_setRGB_light == null) {_setRGB_light = 255}
    if(_maxRGB_dark == null) {_maxRGB_dark = 0}
    if(_maxRGB_light == null) {_maxRGB_light = 255}
    if(_gammaRGB == null) {_gammaRGB = 1}

    if(_setRED_dark == null) {_setRED_dark = 0}
    if(_setRGB_light == null) {_setRGB_light = 255}
    if(_maxRED_dark == null) {_maxRED_dark = 0}
    if(_maxRED_light == null) {_maxRED_light = 255}
    if(_gammaRED == null) {_gammaRED = 1}

    if(_setGREEN_dark == null) {_setGREEN_dark = 0}
    if(_setGREEN_light == null) {_setGREEN_light = 255}
    if(_maxGREEN_dark == null) {_maxGREEN_dark = 0}
    if(_maxGREEN_light == null) {_maxGREEN_light = 255}
    if(_gammaGREEN == null) {_gammaGREEN = 1}

    if(_setBLUE_dark == null) {_setBLUE_dark = 0}
    if(_setBLUE_light == null) {_setBLUE_light = 255}
    if(_maxBLUE_dark == null) {_maxBLUE_dark = 0}
    if(_maxBLUE_light == null) {_maxBLUE_light = 255}
    if(_gammaBLUE == null) {_gammaBLUE = 1}


    r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindDefault"));
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    d3.putReference(s2t("channel"), r2);
    l2.putInteger(_setRGB_dark);
    l2.putInteger(_setRGB_light);
    d3.putList(s2t("input"), l2);
    d3.putDouble(s2t("gamma"), _gammaRGB);
    l3.putInteger(_maxRGB_dark);
    l3.putInteger(_maxRGB_light);
    d3.putList(s2t("output"), l3);
    l.putObject(s2t("levelsAdjustment"), d3);
    r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("red"));
    d4.putReference(s2t("channel"), r3);
    l4.putInteger(_setRED_dark);
    l4.putInteger(_setRGB_light);
    d4.putList(s2t("input"), l4);
    d4.putDouble(s2t("gamma"), _gammaRED);
    l5.putInteger(_maxRED_dark);
    l5.putInteger(_maxRED_light);
    d4.putList(s2t("output"), l5);
    l.putObject(s2t("levelsAdjustment"), d4);
    r4.putEnumerated(s2t("channel"), s2t("channel"), s2t("grain"));
    d5.putReference(s2t("channel"), r4);
    l6.putInteger(_setGREEN_dark);
    l6.putInteger(_setGREEN_light);
    d5.putList(s2t("input"), l6);
    d5.putDouble(s2t("gamma"), _gammaGREEN);
    l7.putInteger(_maxGREEN_dark);
    l7.putInteger(_maxGREEN_light);
    d5.putList(s2t("output"), l7);
    l.putObject(s2t("levelsAdjustment"), d5);
    r5.putEnumerated(s2t("channel"), s2t("channel"), s2t("blue"));
    d6.putReference(s2t("channel"), r5);
    l8.putInteger(_setBLUE_dark);
    l8.putInteger(_setBLUE_light);
    d6.putList(s2t("input"), l8);
    d6.putDouble(s2t("gamma"), _gammaBLUE);
    l9.putInteger(_maxBLUE_dark);
    l9.putInteger(_maxBLUE_light);
    d6.putList(s2t("output"), l9);
    l.putObject(s2t("levelsAdjustment"), d6);
    d2.putList(s2t("adjustment"), l);
    d.putObject(s2t("to"), s2t("levels"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}