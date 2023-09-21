function mask_farbmaske_viaSaturation(_folder, _toleranz) {
    createGroup(_folder, "passThrough", "none", 100, f);
    // move to TOP
    with (activeDocument) activeLayer.move(layers[0], ElementPlacement.PLACEBEFORE)

    createLayer("Farbe maskieren", "hueSaturation", "difference", "none", 100, "none", f, f);
    createLayer("invert + gradation", "curves", "normal", "none", 100, "none", f, f);
    adjustLayer_curves_set(0, 255, 255, 0);

    createLayer("Maske Preview", "colorLookup", "normal", "none", 100, "none", f, f);
    LUT_maske_preview();

    gotoLayer("Farbe maskieren");


    // get Farben
    var color1 = app_getColor("hsb", "vordergrund");
    var color2 = app_getColor("hsb", "hintergrund");


    // validiere Farben
    if ((color1[1] == 0 || color1[2] == 0) && (color2[1] != 0 && color2[2] != 0)) {
        var color1 = color2;
    } else {
        if (color1[1] == 0 || color1[2] == 0) {
            var color1 = [0, 100, 100];
        }
    }

    if (color2[1] == 0 || color2[2] == 0) {
        var color2 = color1;
    }

    // sortiere Farben
    var colors = [color1, color2];
    colors.sort(function (a, b) {
        return a[0] - b[0];
    });
    var color1 = colors[0];
    var color2 = colors[1];


    adjustLayer_sat_set(1, adjustHue(color1[0], -_toleranz), color1[0], color2[0], adjustHue(color2[0], _toleranz), f, f, 100);

    app_simulateKeyPress_alt3();
    // app.bringToFront();
    // adjustLayer_sat_eyedropper();
    
}