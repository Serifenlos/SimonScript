function select_layer(){var e=new ActionDescriptor,t=new ActionReference,n=new ActionReference;t.putProperty(s2t("channel"),s2t("selection")),e.putReference(s2t("null"),t),n.putEnumerated(s2t("channel"),s2t("channel"),s2t("transparencyEnum")),e.putReference(s2t("to"),n),executeAction(s2t("set"),e,DialogModes.NO)}