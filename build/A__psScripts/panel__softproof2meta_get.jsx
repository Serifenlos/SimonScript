/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] softproof2meta get</name>
<about>softproof2meta get | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
function getMeta_panel(){if(getProofArray=[],null==ExternalObject.AdobeXMPScript&&(ExternalObject.AdobeXMPScript=new ExternalObject("lib:AdobeXMPScript")),xmpMeta=new XMPMeta(app.activeDocument.xmpMetadata.rawData),customNamespace="http://ns.simonadrian.de/proofsetup/1.0",customPrefix="proofsetup:",XMPMeta.registerNamespace(customNamespace,customPrefix),xmpMeta.doesPropertyExist(customNamespace,"proof_profil"))var e=xmpMeta.getProperty(customNamespace,"proof_profil");
// $.writeln(proof_profil.value);
if(xmpMeta.doesPropertyExist(customNamespace,"proof_intent"))var t=xmpMeta.getProperty(customNamespace,"proof_intent");
// $.writeln(proof_intent.value);
if(xmpMeta.doesPropertyExist(customNamespace,"proof_tk"))var a=xmpMeta.getProperty(customNamespace,"proof_tk");
// $.writeln(proof_tk.value);
return getProofArray.push(e,t,a),getProofArray}getMeta_panel();