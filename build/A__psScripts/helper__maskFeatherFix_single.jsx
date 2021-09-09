/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] maskFeatherFix_single</name>
<about>convert maskFeather with Gausscher Weichzeichner | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "./functions/basic.jsx";
//@include "./functions/utils.jsx";
//@include "./functions/layer.jsx";
function maskFix_single(){try{fixMask(getActiveLayerIndex(),1)}catch(e){alert("error "+e)}}app.documents.length>0&&doc.suspendHistory("Script: maskFix_single","maskFix_single();");