/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] maskFeatherFix_all</name>
<about>convert maskFeather with Gausscher Weichzeichner | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "./functions/basic.jsx";
//@include "./functions/utils.jsx";
//@include "./functions/layer.jsx";
function maskFix_all(){try{for(var a=1;layer_checkExistence(a);)fixMask(a,1),a++}catch(a){alert("error "+a)}}app.documents.length>0&&doc.suspendHistory("Script: maskFix_all","maskFix_all();");