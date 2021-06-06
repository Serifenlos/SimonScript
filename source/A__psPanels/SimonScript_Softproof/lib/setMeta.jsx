function setMeta(_profil, _intent, _tk) {

    // prepare XMPMeta
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    }
    xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
    customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
    customPrefix = "proofsetup:";
    XMPMeta.registerNamespace(customNamespace, customPrefix);

    // setProperty
    xmpMeta.setProperty(customNamespace, "proof_profil", _profil);
    xmpMeta.setProperty(customNamespace, "proof_intent", _intent);
    xmpMeta.setProperty(customNamespace, "proof_tk", _tk);

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();

    return _profil;
}




function foo(someNumber) {
    return(someNumber * 2);
}

function bar() {
    return(42);
}
module.exports = {
    foo,
    bar,
    setMeta
}
