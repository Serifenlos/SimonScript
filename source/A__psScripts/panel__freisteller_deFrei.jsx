/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] Freisteller zurücknehmen</name>
<about>deFrei | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "functions/basic.jsx";
//@include "functions/utils.jsx";
//@include "functions/layer.jsx";
//@include "functions/save.jsx";
//@include "functions/ready.jsx";
//@include "functions/meta.jsx";


//@include "./assets/json2.js"
var jsonFilePath = "~/.ss_settings.json";
var jsonData = loadJSON(jsonFilePath);
const RZ_qualityJPG = jsonValue("RZ_qualityJPG"); //TODO kommt noch nicht in PS an

freisteller_deFrei();