/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] softproof2meta get</name>
<about>softproof2meta get | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
getMeta_panel();
function getMeta_panel() {
getProofArray = [];

if (ExternalObject.AdobeXMPScript == undefined) {
    ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
}
xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
customPrefix = "proofsetup:";
XMPMeta.registerNamespace(customNamespace, customPrefix);



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



getProofArray.push(proof_profil, proof_intent, proof_tk);

return getProofArray;
}