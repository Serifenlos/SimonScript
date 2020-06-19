function s2t(e){return app.stringIDToTypeID(e)}function c2t(e){return app.charIDToTypeID(e)}function t2s(e){return app.typeIDToStringID(e)}function getZoomLevel(){var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("zoom")),e.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));var t=executeActionGet(e);
// alert(desc.getDouble(stringIDToTypeID('zoom')));
// alert(Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(1));
return Number(100*t.getDouble(stringIDToTypeID("zoom"))).toFixed(1)}
// getZoomLevel();
function set(){var e=new ActionDescriptor;e.putString(stringIDToTypeID("profile"),"PSO MFC Paper (ECI)"),e.putEnumerated(stringIDToTypeID("intent"),stringIDToTypeID("intent"),stringIDToTypeID("colorimetric")),e.putBoolean(stringIDToTypeID("mapBlack"),!1),
// alert
alert(e.getString(stringIDToTypeID("profile"))+"\n"+typeIDToStringID(e.getEnumerationValue(s2t("intent")))+"\n"+e.getBoolean(stringIDToTypeID("mapBlack"))),executeAction(stringIDToTypeID("proofSetup"),e,DialogModes.NO)}
// set();
// need to check Softproof-Ansicht. Erst wenn "an" dann weiter…
function getSoftProof(){var e=new ActionReference,t=new ActionDescriptor;e.putEnumerated(stringIDToTypeID("application"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum")),t.putReference(stringIDToTypeID("target"),e);var o=executeAction(stringIDToTypeID("proofSetup"),t,DialogModes.NO);o.getString(stringIDToTypeID("profile"))&&(proofProfil=o.getString(stringIDToTypeID("profile"))),typeIDToStringID(o.getEnumerationValue(s2t("intent")))&&(proofIntent=typeIDToStringID(o.getEnumerationValue(s2t("intent")))),o.getBoolean(stringIDToTypeID("mapBlack"))&&(proofTK=o.getBoolean(stringIDToTypeID("mapBlack")))}
// getSoftProof();
// nur die Funktion // bereit zum Umbau // aber wie?
function toggleProofColors(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(s2t("menuItemClass"),s2t("menuItemType"),s2t("toggleProofColors")),e.putReference(s2t("null"),t),executeAction(s2t("select"),e,DialogModes.NO)}
// toggleProofColors();
function toggleProofColors2(){
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
}function editXMP(){null==ExternalObject.AdobeXMPScript&&(ExternalObject.AdobeXMPScript=new ExternalObject("lib:AdobeXMPScript")),xmpMeta=new XMPMeta(app.activeDocument.xmpMetadata.rawData),customNamespace="http://ns.simonadrian.de/proofsetup/1.0",customPrefix="proofsetup:",XMPMeta.registerNamespace(customNamespace,customPrefix)}function setMeta(){getSoftProof(),editXMP(),
// setProperty
xmpMeta.setProperty(customNamespace,"proof_profil",proofProfil),xmpMeta.setProperty(customNamespace,"proof_intent",proofIntent),xmpMeta.setProperty(customNamespace,"proof_tk",proofTK),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize()}
// setMeta();
function delMeta(){editXMP(),
// deleteProperty
xmpMeta.deleteProperty(customNamespace,"proof_profil"),xmpMeta.deleteProperty(customNamespace,"proof_intent"),xmpMeta.deleteProperty(customNamespace,"proof_tk"),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize()}
// delMeta();
function getMeta(){if(editXMP(),xmpMeta.doesPropertyExist(customNamespace,"proof_profil"))xmpMeta.getProperty(customNamespace,"proof_profil");
// $.writeln(proof_profil.value);
if(xmpMeta.doesPropertyExist(customNamespace,"proof_intent"))xmpMeta.getProperty(customNamespace,"proof_intent");
// $.writeln(proof_intent.value);
if(xmpMeta.doesPropertyExist(customNamespace,"proof_tk"))xmpMeta.getProperty(customNamespace,"proof_tk");
// $.writeln(proof_tk.value);
}
// setMeta();
// delMeta();
// getMeta();
// $.writeln(XMPMeta.dumpNamespaces());
// alert(XMPMeta.dumpNamespaces())
toggleProofColors2();