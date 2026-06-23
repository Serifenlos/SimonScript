/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[dev] setMeta2Keyword</name>
<about>setMeta2Keyword | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

/*{{TIMESTAMP}}*/


const debug = true;

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


function getMeta_3(_key) {
    editXMP_3();

    try {
        if (app.documents.length != 0) {
            if (xmpMeta.doesPropertyExist(nsURI, _key)) {
                var value = xmpMeta.getProperty(nsURI, _key);
            }
        }
    } catch (error) {
        if (debug) alert("ERROR - getMeta_3 - doesPropertyExist: " + error)
    }

    if (typeof value !== 'undefined') {
        return value;
    }
}



try {
	keywordsArray = app.activeDocument.info.keywords;
	keywordsArray.push(getMeta_3("idDocName"));
	keywordsArray.push(getMeta_3("studioAusgabe"));
	keywordsArray.push(getMeta_3("studioPublikation"));
	app.activeDocument.info.keywords = keywordsArray;
} catch (e) {
	if (debug) alert("ERROR set keyword: \n" + e);
}
