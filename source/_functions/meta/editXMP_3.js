function editXMP_3(_namespace, _prefix) {
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    }

    try {
        if (app.documents.length != 0) {
            xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
        }
    } catch (error) {
        if (debug) alert("ERROR - editXMP_3 - xmpMeta: " + error);
    }

    nsURI = _namespace ? nsURI : "http://ns.simonadrian.de/simonscript/1.0/";
    nsPrefix = _prefix ? nsPrefix : "ss:";

    if (XMPMeta.getNamespacePrefix(nsURI) === "" || typeof XMPMeta.getNamespacePrefix(nsURI) === 'undefined') {
        XMPMeta.registerNamespace(nsURI, nsPrefix);
    }
}