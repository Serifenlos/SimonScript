function startschuss() {
    smartObject();
    nameLayer("Original");

    createGroup("Einstellungen","passThrough","none",100)
    createLayer("AutoTonwert", "levels", "normal", "gray", 100,f,t)
    toogleVisibility();
    deleteMask()
    createLayer("Gradation neutral", "curves", "normal", "gray", 100,f,f)
    deleteMask()

    DodgeBurn_highlow(t)
    selectLayerUp()
    createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100,f,f)
    createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100,f,f)
    createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100,f,f)
    createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100,f,f)
    createLayer("Gradation Kontrast", "curves", "normal", "orange", 100,f,f)
    createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100,f,f)
    createLayer("Dynamik", "vibrance", "normal", "orange", 100,f,f)


// createColorLayer("normal", "WEISS", "none", 25levels5, 255, 0);
// deleteMask();

// noProfile();
}

function DodgeBurn_highlow(_collapseAll) {
    createGroup("Tiefen", "passThrough", "gray", 100, f)
    // createLayer("Burn ▼", "colorLookup", "normal", "gray", 100, "black", f, f);
    // createLayer("Burn █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f);
    createLayer("Burn ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn()
    blendif(0,0,0,255)
    // createLayer("Dodge ▼", "colorLookup", "normal", "gray", 100, "black", f, f);
    // createLayer("Dodge █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f);
    createLayer("Dodge ▽", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge()
    blendif(0,0,0,255)
    selectParent()
    createGroup("Dodge & Burn △▽", "passThrough", "gray", 100, t);
    // createLayer("Burn ▲", "colorLookup", "normal", "gray", 100, "black", f, f);
    // createLayer("Burn ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f);
    createLayer("Burn △", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn()
    blendif(0,255,255,255)
    createGroup("Lichter", "passThrough", "gray", 100, t)
    // createLayer("Dodge ▲", "colorLookup", "normal", "gray", 100, "black", f, f);
    // createLayer("Dodge ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f);
    createLayer("Dodge △", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge()
    blendif(0,255,255,255)
    selectParent()
    selectParent()
    if(_collapseAll) {
        toogleOpenCloseSet()
    }
}

function dodge() {
    createLayer("Dodge", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge();
}

function burn() {
    createLayer("Burn", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn();
}

function dodgeburn() {
    createGroup("Dodge & Burn", "passThrough", "gray", 100, f);
    createLayer("Burn", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_burn();
    createLayer("Dodge", "colorLookup", "normal", "gray", 100, "black", f, f);
    LUT_dodge();
}