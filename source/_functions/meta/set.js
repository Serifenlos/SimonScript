function set(){
    var d = new ActionDescriptor();
    d.putString(stringIDToTypeID("profile"), "PSO MFC Paper (ECI)");
    d.putEnumerated(stringIDToTypeID("intent"), stringIDToTypeID("intent"), stringIDToTypeID("colorimetric"));
    d.putBoolean(stringIDToTypeID("mapBlack"), false);
  
    // alert
    alert(d.getString(stringIDToTypeID("profile")) + "\n" + typeIDToStringID(d.getEnumerationValue(s2t("intent"))) + "\n" + d.getBoolean(stringIDToTypeID("mapBlack")));
  
    executeAction(stringIDToTypeID("proofSetup"), d, DialogModes.NO);
  };