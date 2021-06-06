function setMeta(e,t,a){
// prepare XMPMeta
return null==ExternalObject.AdobeXMPScript&&(ExternalObject.AdobeXMPScript=new ExternalObject("lib:AdobeXMPScript")),xmpMeta=new XMPMeta(app.activeDocument.xmpMetadata.rawData),customNamespace="http://ns.simonadrian.de/proofsetup/1.0",customPrefix="proofsetup:",XMPMeta.registerNamespace(customNamespace,customPrefix),
// setProperty
xmpMeta.setProperty(customNamespace,"proof_profil",e),xmpMeta.setProperty(customNamespace,"proof_intent",t),xmpMeta.setProperty(customNamespace,"proof_tk",a),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize(),e}function foo(e){return 2*e}function bar(){return 42}module.exports={foo:foo,bar:bar,setMeta:setMeta};