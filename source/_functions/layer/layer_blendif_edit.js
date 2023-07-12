function layer_blendif_edit(__real, _idx, _lights, _shadows) {
    var __shadows = layer_blendif_get(_idx)[2] + _shadows;
    var __lights = layer_blendif_get(_idx)[0] + _lights;

    var i = 0;
    if (__shadows < 0) {
        var i = 1;
        while (__shadows + i < 0) {
            i++;
        }
        var __shadows = __shadows + i;
    }

    var j = 0;
    if (__lights > 255) {
        var j = 1;
        while (__lights - j > 255) {
            j++;
        }
        var __lights = __lights - j;
    }
    // alert("tiefen->" + __shadows + " lichter->" + __lights)
    if (__real) {
        blendif(
            _idx,
            __lights,
            __lights,
            __shadows,
            __shadows
        )
        blendif_check_steps.push(0 + __shadows);
        blendif_check_steps.push(255 - __lights);
    }

    blendif_check_value.push(_shadows + i);
    blendif_check_value.push(-1 * (_lights - j));
    return;
}