function gotoLayer_bySelector(e){var t=new ActionDescriptor,n=new ActionReference;"number"==typeof e?n.putIndex(s2t("layer"),e):"string"==typeof e&&(layer_checkExistence(e)?n.putName(s2t("layer"),e):n.putIndex(s2t("layer"),layer_getIDXbyString(e)[0])),t.putReference(sTID("null"),n),t.putBoolean(sTID("makeVisible"),!1),executeAction(sTID("select"),t,DialogModes.NO)}