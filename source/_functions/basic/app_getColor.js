function app_getColor(_model, _fokus) {
    var colors = [];

    if (_fokus == "vordergrund" || _fokus == "foreground") {
        var color = app.foregroundColor;
    } else {
        var color = app.backgroundColor;
    }

    if (_model == "rgb") {
        var model = color.rgb;
        colors.push(Math.round(model.red));
        colors.push(Math.round(model.green));
        colors.push(Math.round(model.blue));
    } else {
        if (_model == "hsb" || _model == "hsl") {
            var model = color.hsb;
            colors.push(Math.round(model.hue));
            colors.push(Math.round(model.saturation));
            colors.push(Math.round(model.brightness));
        }
    }

    return colors;
}