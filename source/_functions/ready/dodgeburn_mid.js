function dodgeburn_mid() {
    createGroup("Dodge & Burn ⬨", "passThrough", "gray", 100, f);
    createLayer("Burn ⬨", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn();
    blendif("current", 20, 202, 109, 240);
    createLayer("Dodge ⬨", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge();
    blendif("current", 20, 202, 109, 240);
}