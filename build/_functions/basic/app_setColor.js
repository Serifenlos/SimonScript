function app_setColor(t,e,o,s){var n=new ActionDescriptor,r=new ActionDescriptor,u=new ActionReference;u.putProperty(s2t("color"),s2t(s)),n.putReference(s2t("null"),u),r.putUnitDouble(s2t("hue"),s2t("angleUnit"),t),r.putDouble(s2t("saturation"),e),r.putDouble(s2t("brightness"),o),n.putObject(s2t("to"),s2t("HSBColorClass"),r),n.putString(s2t("source"),"photoshopPicker"),executeAction(s2t("set"),n,DialogModes.NO)}
// Apfel+D
// app_setColor(0, 0, 0, "foregroundColor");
// app_setColor(0, 0, 100, "backgroundColor");