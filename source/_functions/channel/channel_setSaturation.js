function channel_setSaturation(_source, _calculation) {

    var calc_1 = "difference";
    // var _calculation = "lighten";
    // var _calculation = "screen";

    // channel_select("RGB", false);
    kanalberechnung("red", f, "grain", f, _source, calc_1, "rg", "RGB");

    kanalberechnung("red", f, "blue", f, _source, calc_1, "rb", "RGB");
    kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
    channel_delete("rg");
    channel_delete("rb");

    kanalberechnung("grain", f, "red", f, _source, calc_1, "gr", "RGB");
    kanalberechnung("grain", f, "blue", f, _source, calc_1, "gb", "RGB");
    kanalberechnung("gr", f, "gb", f, "this", _calculation, "G", "RGB");
    channel_delete("gr");
    channel_delete("gb");

    kanalberechnung("blue", f, "red", f, _source, calc_1, "br", "RGB");
    kanalberechnung("blue", f, "grain", f, _source, calc_1, "bg", "RGB");
    kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
    channel_delete("br");
    channel_delete("bg");

    kanalberechnung("R", f, "G", f, "this", _calculation, "RG", "RGB");
    kanalberechnung("RG", f, "B", f, "this", _calculation, "saturation", "RGB");

    // kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
    // kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");

    channel_delete("R");
    channel_delete("G");
    channel_delete("B");
    channel_delete("RG");
}