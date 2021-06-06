/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] softproof2meta</name>
<about>softproof2meta | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/





var r = new ActionReference();
var d = new ActionDescriptor();
r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
d.putReference(stringIDToTypeID("target"), r);
var d2 = executeAction(stringIDToTypeID("proofSetup"), d, DialogModes.NO);

proofArray = [];

proofProfil = d2.getString(stringIDToTypeID("profile"));
proofIntent = typeIDToStringID(d2.getEnumerationValue(stringIDToTypeID("intent")));
proofTK = d2.getBoolean(stringIDToTypeID("mapBlack"));

proofArray.push(proofProfil, proofIntent, proofTK);


if (ExternalObject.AdobeXMPScript == undefined) {
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
}
xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
customPrefix = "proofsetup:";
XMPMeta.registerNamespace(customNamespace, customPrefix);

// setProperty
xmpMeta.setProperty(customNamespace, "proof_profil", proofArray[0]);
xmpMeta.setProperty(customNamespace, "proof_intent", proofArray[1]);
xmpMeta.setProperty(customNamespace, "proof_tk", proofArray[2]);

// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();

// alert("huch");
// return true;