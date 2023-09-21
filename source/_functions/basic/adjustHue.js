function adjustHue(hue, amount) {
    return (hue + amount + 360) % 360;
}