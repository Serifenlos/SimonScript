function workingProfile_set(t,e){var n=new ActionDescriptor,r=new ActionDescriptor,o=new ActionReference;o.putProperty(s2t("property"),s2t("colorSettings")),o.putEnumerated(s2t("application"),s2t("ordinal"),s2t("targetEnum")),n.putReference(s2t("null"),o),r.putString(s2t("working"+t),e),n.putObject(s2t("to"),s2t("colorSettings"),r);try{executeAction(s2t("set"),n,DialogModes.NO)}catch(t){alert("kann Arbeitsfarbraum nicht ändern")}}