function editXMP_2(_namespace, _prefix) {
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    }
    xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
    customNamespace2 = _namespace ? customNamespace2 : "http://ns.simonadrian.de/1.0";
    customPrefix2 = _prefix ? customPrefix2 : "simonscript:";
    XMPMeta.registerNamespace(customNamespace2, customPrefix2);
}