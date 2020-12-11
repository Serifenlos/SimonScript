function editXMP() {
    if (ExternalObject.AdobeXMPScript == undefined) {ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');}
    xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
    customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
    customPrefix = "proofsetup:";
    XMPMeta.registerNamespace(customNamespace, customPrefix);
  }