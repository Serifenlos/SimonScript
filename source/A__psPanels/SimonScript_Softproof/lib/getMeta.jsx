function editXMP() {

}


function getMeta() {
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    }
    xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
    customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
    customPrefix = "proofsetup:";
    XMPMeta.registerNamespace(customNamespace, customPrefix);

    getProofArray = [];

    getProofProfil = xmpMeta.getProperty(customNamespace, "proof_profil");
    getProofIntent = xmpMeta.getProperty(customNamespace, "proof_intent");
    getProofTK = xmpMeta.getProperty(customNamespace, "proof_tk");

    getProofArray.push(getProofProfil, getProofIntent, getProofTK);

    return getProofArray;
}