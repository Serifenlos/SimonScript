function fixMask(_idx, _width_faktor) {
    try {
        var r = new ActionReference();
        r.putIndex(sTID("layer"), _idx);
        var e = executeActionGet(r);
        var feather = e.getUnitDoubleValue(sTID('userMaskFeather'));
        var dens = e.getUnitDoubleValue(sTID('userMaskDensity'));
        if (feather > 0) {
            gotoLayer(_idx);
            gotoMask();
            setMaskFeatherTo(0);
            fixMaskFeather(feather * _width_faktor);
        }
        if (dens < 255) {
            gotoLayer(_idx);
            gotoMask();
            setMaskDensityTo(100);
            fixMaskDens((dens - 255) * -1);
        }
        return true;
    } catch(e) {return false;}
}