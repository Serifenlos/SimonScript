function channel_setSaturation_singleColors(_source, _calculation) {
    var calc_1 = "subtract";

    // channel_select("RGB", false);
    kanalberechnung("red", t, "grain", t, _source, calc_1, "rg", "RGB");
    kanalberechnung("red", t, "blue", t, _source, calc_1, "rb", "RGB");
    kanalberechnung("grain", t, "red", t, _source, calc_1, "gr", "RGB");
    kanalberechnung("grain", t, "blue", t, _source, calc_1, "gb", "RGB");
    kanalberechnung("blue", t, "red", t, _source, calc_1, "br", "RGB");
    kanalberechnung("blue", t, "grain", t, _source, calc_1, "bg", "RGB");

    kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
    kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
    kanalberechnung("gb", f, "gr", f, "this", _calculation, "G", "RGB");

    kanalberechnung("gb", f, "gr", f, "this", calc_1, "C", "RGB");
    kanalberechnung("br", f, "bg", f, "this", calc_1, "M", "RGB");
    kanalberechnung("rg", f, "rb", f, "this", calc_1, "Y", "RGB");

    kanalberechnung("R", f, "Y", f, "this", _calculation, "RY", "RGB");
    kanalberechnung("Y", f, "G", f, "this", _calculation, "YG", "RGB");
    kanalberechnung("G", f, "C", f, "this", _calculation, "GC", "RGB");
    kanalberechnung("C", f, "B", f, "this", _calculation, "CB", "RGB");
    kanalberechnung("B", f, "M", f, "this", _calculation, "BM", "RGB");
}