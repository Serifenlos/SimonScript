function layer_getLayerType(e){
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
var t=new ActionReference;t.putProperty(s2t("property"),s2t("layerKind"));try{"number"==typeof e?t.putIndex(s2t("layer"),e):"string"==typeof e?layer_checkExistence(e)?t.putName(s2t("layer"),e):t.putIndex(s2t("layer"),layer_getIDXbyString(e)[0]):void 0===e&&t.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum"));var r=executeActionGet(t).getInteger(s2t("layerKind"))}catch(e){debug&&alert("ERROR - layer_getLayerType: \n"+e)}return r}