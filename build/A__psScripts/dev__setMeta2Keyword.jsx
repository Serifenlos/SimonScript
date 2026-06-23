/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[dev] setMeta2Keyword</name>
<about>setMeta2Keyword | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
/** last edited on 20.05.2025 11:53 **/
const debug=!0;function editXMP_3(e,t){null==ExternalObject.AdobeXMPScript&&(ExternalObject.AdobeXMPScript=new ExternalObject("lib:AdobeXMPScript"));try{0!=app.documents.length&&(xmpMeta=new XMPMeta(app.activeDocument.xmpMetadata.rawData))}catch(e){alert("ERROR - editXMP_3 - xmpMeta: "+e)}nsURI=e?nsURI:"http://ns.simonadrian.de/simonscript/1.0/",nsPrefix=t?nsPrefix:"ss:",""!==XMPMeta.getNamespacePrefix(nsURI)&&void 0!==XMPMeta.getNamespacePrefix(nsURI)||XMPMeta.registerNamespace(nsURI,nsPrefix)}function getMeta_3(e){editXMP_3();try{if(0!=app.documents.length&&xmpMeta.doesPropertyExist(nsURI,e))var t=xmpMeta.getProperty(nsURI,e)}catch(e){alert("ERROR - getMeta_3 - doesPropertyExist: "+e)}if(void 0!==t)return t}try{keywordsArray=app.activeDocument.info.keywords,keywordsArray.push(getMeta_3("idDocName")),keywordsArray.push(getMeta_3("studioAusgabe")),keywordsArray.push(getMeta_3("studioPublikation")),app.activeDocument.info.keywords=keywordsArray}catch(e){alert("ERROR set keyword: \n"+e)}