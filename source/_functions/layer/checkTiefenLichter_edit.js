function checkTiefenLichter_edit(_real, __value) {
    blendif_check_steps = [];
    blendif_check_value = [];
    layer_blendif_edit(_real, layer_getIDXbyString("Tiefen_check")[0], 0, __value);
    layer_blendif_edit(_real, layer_getIDXbyString("Lichter_check")[0], -1 * (__value), 0);

    if (_real) {
        // sort to get the lowest value //to name the groupe
        blendif_check_steps.sort(function(a, b) {
            return a - b
        });
        layer_renameByIDX(layer_getIDXbyString("check ")[0], "check " + blendif_check_steps[0]);
    } else {
        if (__value >= 0) {
            // sort to get the highest value //for the protocol
            blendif_check_value.sort(function(a, b) {
                return b - a
            });
        } else {
            // sort to get the lowest value
            blendif_check_value.sort(function(a, b) {
                return a - b
            });
        }
    }
    return blendif_check_value[0];
}

// function getLayerNameByIndex( idx ) { 
//     var ref = new ActionReference(); 
//     ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'Nm  ' )); 
//     ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
//     return executeActionGet(ref).getString(charIDToTypeID( 'Nm  ' ));; 
// }

