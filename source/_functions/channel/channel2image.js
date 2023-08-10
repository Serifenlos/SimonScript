function channel2image(_channel_name, _layer_name) {
    layer_create(_layer_name + " (" + _channel_name + ")", 100, false, "normal");
    bildberechnung(_channel_name, "normal", f, f);
}