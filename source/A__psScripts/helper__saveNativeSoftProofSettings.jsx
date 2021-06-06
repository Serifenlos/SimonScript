
function editXMP() {
  if (ExternalObject.AdobeXMPScript == undefined) {ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');}
  xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
  customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
  customPrefix = "proofsetup:";
  XMPMeta.registerNamespace(customNamespace, customPrefix);
}


function setMeta_nativeSoftProof() {
    var r = new ActionReference();
    var d = new ActionDescriptor();
    r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
    d.putReference(stringIDToTypeID("target"), r);
    var d2 = executeAction(stringIDToTypeID("proofSetup"), d, DialogModes.NO);

    var proofProfil = d2.getString(stringIDToTypeID("profile"));
    var proofIntent = typeIDToStringID(d2.getEnumerationValue(stringIDToTypeID("intent")));
    var proofTK = d2.getBoolean(stringIDToTypeID("mapBlack"));

    editXMP();

    // setProperty
    xmpMeta.setProperty(customNamespace, "proof_profil", proofProfil);
    xmpMeta.setProperty(customNamespace, "proof_intent", proofIntent);
    xmpMeta.setProperty(customNamespace, "proof_tk", proofTK);

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
    // $.writeln(xmpMeta.serialize());

}

setMeta_nativeSoftProof();
