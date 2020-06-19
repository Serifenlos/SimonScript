function s2t(s) { return app.stringIDToTypeID(s) }
function c2t(c) { return app.charIDToTypeID(c) }
function t2s(t) { return app.typeIDToStringID(t) }



function getZoomLevel(){
    var ref = new ActionReference();
    ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('zoom'));
    ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
    var desc = executeActionGet(ref);
    // alert(desc.getDouble(stringIDToTypeID('zoom')));
    // alert(Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(1));
    return Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(1);
};

// getZoomLevel();


function set(){
  var d = new ActionDescriptor();
  d.putString(stringIDToTypeID("profile"), "PSO MFC Paper (ECI)");
  d.putEnumerated(stringIDToTypeID("intent"), stringIDToTypeID("intent"), stringIDToTypeID("colorimetric"));
  d.putBoolean(stringIDToTypeID("mapBlack"), false);

  // alert
  alert(d.getString(stringIDToTypeID("profile")) + "\n" + typeIDToStringID(d.getEnumerationValue(s2t("intent"))) + "\n" + d.getBoolean(stringIDToTypeID("mapBlack")));

  executeAction(stringIDToTypeID("proofSetup"), d, DialogModes.NO);
};
// set();



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
// getSoftProof();


// nur die Funktion // bereit zum Umbau // aber wie?
function toggleProofColors () {
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(s2t('menuItemClass'), s2t('menuItemType'), s2t("toggleProofColors"));
    desc1.putReference(s2t('null'), ref1);
    executeAction(s2t('select'), desc1, DialogModes.NO);
}
// toggleProofColors();

function toggleProofColors2 () {
  // executeAction(s2t('toggleProofColors'), null, DialogModes.No);
    // var ra = new ActionReference();
    // var da = new ActionDescriptor();
    // ra.putEnumerated(s2t("menuItemClass"), s2t("menuItemType"), s2t("toggleProofColors"));
    // da.putReference(s2t("null"), ra);
    // var da2 = executeAction(s2t("select"), da, DialogModes.NO);
    // alert(da2)

    // var r1 = new ActionReference();
    // var d1 = new ActionDescriptor();
    // r1.putEnumerated(s2t("menuItemClass"), s2t("menuItemType"), s2t("toggleProofColors"));
    // d1.putReference(s2t("null"), r1);
    // var d2 = executeActionGet( s2t("select"), d1, DialogModes.NO );
    // alert(d2)

    // app.runMenuItem (app.stringIDToTypeID ("toggleProofColors"));

}
toggleProofColors2();


function editXMP() {
  if (ExternalObject.AdobeXMPScript == undefined) {ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');}
  xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
  customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
  customPrefix = "proofsetup:";
  XMPMeta.registerNamespace(customNamespace, customPrefix);
}

function setMeta() {
  getSoftProof();
  editXMP();

  // setProperty
  xmpMeta.setProperty(customNamespace, "proof_profil", proofProfil);
  xmpMeta.setProperty(customNamespace, "proof_intent", proofIntent);
  xmpMeta.setProperty(customNamespace, "proof_tk", proofTK);

  // Fix the xmpMeta
  app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
  // $.writeln(xmpMeta.serialize());

}
// setMeta();

function delMeta() {
  editXMP();

  // deleteProperty
  xmpMeta.deleteProperty(customNamespace, "proof_profil");
  xmpMeta.deleteProperty(customNamespace, "proof_intent");
  xmpMeta.deleteProperty(customNamespace, "proof_tk");

  // Fix the xmpMeta
  app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
  // $.writeln(xmpMeta.serialize());

}
// delMeta();

function getMeta() {
  editXMP();
  if (xmpMeta.doesPropertyExist(customNamespace, "proof_profil")) {
    var proof_profil = xmpMeta.getProperty(customNamespace, "proof_profil");
    // $.writeln(proof_profil.value);
  }
    if (xmpMeta.doesPropertyExist(customNamespace, "proof_intent")) {
    var proof_intent = xmpMeta.getProperty(customNamespace, "proof_intent");
    // $.writeln(proof_intent.value);
  }
    if (xmpMeta.doesPropertyExist(customNamespace, "proof_tk")) {
    var proof_tk = xmpMeta.getProperty(customNamespace, "proof_tk");
    // $.writeln(proof_tk.value);
  }
}

// setMeta();
// delMeta();
// getMeta();



// $.writeln(XMPMeta.dumpNamespaces());
// alert(XMPMeta.dumpNamespaces())


