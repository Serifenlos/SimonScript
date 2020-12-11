// need to check Softproof-Ansicht. Erst wenn "an" dann weiter…
function getSoftProof() {
    var r = new ActionReference();
    var d = new ActionDescriptor();
    r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
    d.putReference(stringIDToTypeID("target"), r);
    var d2 = executeAction(stringIDToTypeID("proofSetup"), d, DialogModes.NO);
  
    if (d2.getString(stringIDToTypeID("profile"))) {
      proofProfil = d2.getString(stringIDToTypeID("profile"));
    }
  
    if (typeIDToStringID(d2.getEnumerationValue(s2t("intent")))) {
      proofIntent = typeIDToStringID(d2.getEnumerationValue(s2t("intent")));
      // alert("ding")
    }
  
    if (d2.getBoolean(stringIDToTypeID("mapBlack"))) {
      proofTK = d2.getBoolean(stringIDToTypeID("mapBlack"));
      // alert("bing")
    }
  
    // alert(d2.getString(stringIDToTypeID("profile")) + "\n" + typeIDToStringID(d2.getEnumerationValue(s2t("intent"))) + "\n" + d2.getBoolean(stringIDToTypeID("mapBlack")));
  }