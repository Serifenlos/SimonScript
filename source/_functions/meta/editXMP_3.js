function editXMP_3(_namespace, _prefix) {
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    }
    xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
    nsURI = _namespace ? nsURI : "http://ns.simonadrian.de/simonscript/1.0/";
    nsPrefix = _prefix ? nsPrefix : "ss:";
    if (XMPMeta.getNamespacePrefix(nsURI) === "" || typeof XMPMeta.getNamespacePrefix(nsURI) === 'undefined') {
        XMPMeta.registerNamespace(nsURI, nsPrefix);
    }
}