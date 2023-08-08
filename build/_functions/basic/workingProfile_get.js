function workingProfile_get(t){
// _modus = RGB || CMYK || Gray || Spot
var e=new ActionReference;return e.putProperty(s2t("property"),s2t("colorSettings")),e.putEnumerated(s2t("application"),s2t("ordinal"),s2t("targetEnum")),executeActionGet(e).getObjectValue(s2t("colorSettings")).getString(s2t("working"+t))}