function select_outOfGamut(_kind, _get) {
    // _get = 'Selection' || 'Folder'

    var startIDXs = layer_selectedIDX_get();
    cancel = false;

    const getMet_softproof_profile = getMeta_softproof()[0];
    const workingProfile_get1 = workingProfile_get("CMYK");

    if (typeof getMet_softproof_profile !== 'undefined') {
        if (workingProfile_get1 != getMet_softproof_profile) {
            workingProfile_set("CMYK", getMet_softproof_profile);
        }

        gotoFill();
        selection_loop(function () {
            select_Farbbereich("outOfGamut")
        });

        if (workingProfile_get1 != getMet_softproof_profile) {
            workingProfile_set("CMYK", workingProfile_get1);
        }

        if (!cancel) {
            if (_get == "Selection") {
                layer_selectedIDX_set(startIDXs);
            } else {
                gotoLayer(startIDXs[startIDXs.length - 1])
                selection2mask(_kind);
            }
        }

    } else {
        alert("kein Softproof eingestellt")
    }
}