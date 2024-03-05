function editXMP_3(_namespace, _prefix) {
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    }
    xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
    ns_ss = _namespace ? ns_ss : "http://ns.simonadrian.de/simonscript/1.0/";
    ns_ssPrefix = _prefix ? ns_ssPrefix : "ss:";
    XMPMeta.registerNamespace(ns_ss, ns_ssPrefix);
}