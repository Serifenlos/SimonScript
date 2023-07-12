function channel_setSaturation(_source, _calculation) {

    var calc_1 = "difference";
    // var _calculation = "lighten";
    // var _calculation = "screen";

    // channel_select("RGB", false);
    kanalberechnung("red", f, "grain", f, _source, calc_1, "1", "RGB");

    kanalberechnung("red", f, "blue", f, _source, calc_1, "2", "RGB");
    kanalberechnung("1", f, "2", f, "this", _calculation, "R", "RGB");
    channel_delete("1");
    channel_delete("2");

    kanalberechnung("grain", f, "red", f, _source, calc_1, "1", "RGB");
    kanalberechnung("grain", f, "blue", f, _source, calc_1, "2", "RGB");
    kanalberechnung("1", f, "2", f, "this", _calculation, "G", "RGB");
    channel_delete("1");
    channel_delete("2");

    kanalberechnung("blue", f, "red", f, _source, calc_1, "1", "RGB");
    kanalberechnung("blue", f, "grain", f, _source, calc_1, "2", "RGB");
    kanalberechnung("1", f, "2", f, "this", _calculation, "B", "RGB");
    channel_delete("1");
    channel_delete("2");

    kanalberechnung("R", f, "G", f, "this", _calculation, "RG", "RGB");
    kanalberechnung("RG", f, "B", f, "this", _calculation, "saturation", "RGB");

    // kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
    // kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");

    channel_delete("R");
    channel_delete("G");
    channel_delete("B");
    channel_delete("RG");
}