function layer_create(t,e,n,s){var r=new ActionDescriptor,o=new ActionDescriptor,c=new ActionReference;
//create Layer with multiply blendMode for the option to fill it
c.putClass(s2t("layer")),r.putReference(s2t("null"),c),o.putString(s2t("name"),t),o.putUnitDouble(s2t("opacity"),s2t("percentUnit"),e),o.putEnumerated(s2t("mode"),s2t("blendMode"),s2t("multiply")),o.putBoolean(s2t("fillNeutral"),n),r.putObject(s2t("using"),s2t("layer"),o),executeAction(s2t("make"),r,DialogModes.NO);
//reset the blendMode
var u=new ActionDescriptor,i=new ActionDescriptor,l=new ActionReference;l.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),u.putReference(s2t("null"),l),i.putEnumerated(s2t("mode"),s2t("blendMode"),s2t(s)),u.putObject(s2t("to"),s2t("layer"),i),executeAction(s2t("set"),u,DialogModes.NO)}