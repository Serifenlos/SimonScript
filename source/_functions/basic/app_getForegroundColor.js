function app_getForegroundColor() {
    var colors_foreground = [];
    var color = app.foregroundColor;
    colors_foreground.push(Math.round(color.rgb.red));
    colors_foreground.push(Math.round(color.rgb.green));
    colors_foreground.push(Math.round(color.rgb.blue));
    return colors_foreground;
}