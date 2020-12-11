function dodgeburn() {
    createGroup("Dodge & Burn", "passThrough", "gray", 100, f);
    createLayer("Burn", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn();
    createLayer("Dodge", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge();
}