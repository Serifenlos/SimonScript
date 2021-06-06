/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] softproof2meta delete</name>
<about>softproof2meta delete | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
null==ExternalObject.AdobeXMPScript&&(ExternalObject.AdobeXMPScript=new ExternalObject("lib:AdobeXMPScript")),xmpMeta=new XMPMeta(app.activeDocument.xmpMetadata.rawData),customNamespace="http://ns.simonadrian.de/proofsetup/1.0",customPrefix="proofsetup:",XMPMeta.registerNamespace(customNamespace,customPrefix),
// deleteProperty
xmpMeta.deleteProperty(customNamespace,"proof_profil"),xmpMeta.deleteProperty(customNamespace,"proof_intent"),xmpMeta.deleteProperty(customNamespace,"proof_tk"),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize();
// $.writeln(xmpMeta.serialize());