function setMaskVisibility_bySelector(e,t){var s=new ActionDescriptor,i=new ActionDescriptor,r=new ActionReference;if(0==e||"hide"==e)var n=!1;else if(1==e||"show"==e)n=!0;else if("toggle"==e||"X"==e)if(getMaskVisibility())n=!1;else n=!0;try{"number"==typeof t&&r.putIndex(s2t("layer"),t),"string"==typeof t&&(layer_checkExistence(t)?r.putName(s2t("layer"),t):r.putIndex(s2t("layer"),layer_getIDXbyString(t)[0])),void 0===t&&r.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),s.putReference(s2t("null"),r),i.putBoolean(s2t("userMaskEnabled"),n),s.putObject(s2t("to"),s2t("layer"),i),executeAction(s2t("set"),s,DialogModes.NO)}catch(e){alert(e)}}