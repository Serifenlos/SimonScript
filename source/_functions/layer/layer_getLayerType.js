function layer_getLayerType(_input) {
    // const kAnySheet = 0;
    // const kPixelSheet = 1;
    // const kAdjustmentSheet = 2;
    // const kTextSheet = 3;
    // const kVectorSheet = 4;
    // const kSmartObjectSheet = 5;
    // const kVideoSheet = 6;
    // const kLayerGroupSheet = 7;
    // const k3DSheet = 8;
    // const kGradientSheet = 9;
    // const kPatternSheet = 10;
    // const kSolidColorSheet = 11;
    // const kBackgroundSheet = 12;
    // const kHiddenSectionBounder = 13;

    var activeLayerType;
    var r = new ActionReference();
    r.putProperty(s2t("property"), s2t("layerKind"));

    // Prüfe, ob der Input eine Zahl ist
    if (typeof _input === "number") {
        r.putIndex(s2t("layer"), _input);
    }
    // Prüfe, ob der Input ein String ist
    else if (typeof _input === "string") {
        // Existiert der Layer?
        $.writeln(""); //unnütz aber nötig sonst Terser-Fehler
        if (layer_checkExistence(_input)) {
            r.putName(s2t("layer"), _input);
        } else {
            r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
        }
    }
    // Prüfe, ob der Input nicht definiert ist
    else if (typeof _input === "undefined") {
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    }
    // Hole den Layer-Typ
    activeLayerType = executeActionGet(r).getInteger(s2t("layerKind"));

    return activeLayerType;
}
