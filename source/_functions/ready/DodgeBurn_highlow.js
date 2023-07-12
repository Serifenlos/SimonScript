function DodgeBurn_highlow(_collapseAll) {
    createGroup("Tiefen", "passThrough", "gray", 100, f);
    /* createLayer("Burn ▼", "colorLookup", "normal", "gray", 100, "black", f, f); */
    /* createLayer("Burn █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f); */
    createLayer("Burn ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn();
    blendif("current", 0, 0, 0, 255);
    /* createLayer("Dodge ▼", "colorLookup", "normal", "gray", 100, "black", f, f); */
    /* createLayer("Dodge █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f); */
    createLayer("Dodge ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge();
    blendif("current", 0, 0, 0, 255);
    selectParent();
    createGroup("Dodge & Burn △▽", "passThrough", "gray", 100, t);
    /* createLayer("Burn ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
    /* createLayer("Burn ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
    createLayer("Burn △", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn();
    blendif("current", 0, 255, 255, 255);
    createGroup("Lichter", "passThrough", "gray", 100, t);
    /* createLayer("Dodge ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
    /* createLayer("Dodge ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
    createLayer("Dodge △", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge();
    blendif("current", 0, 255, 255, 255);
    selectParent();
    selectParent();
    if (_collapseAll) {
        toogleOpenCloseSet();
    }
}