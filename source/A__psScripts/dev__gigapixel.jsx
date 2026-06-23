/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[dev] gigapixel check</name>
<about>gigapixel check | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

/*{{TIMESTAMP}}*/

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

try {
    // Gigapixel AI
    // executeAction(sTID('1E822513-BC4D-4CF2-B1FE-80505B509928'), undefined, DialogModes.ALL);

    // Gigapixel
    executeAction(sTID('09802e65-9ea9-467d-a4d5-363457bb7c93'), undefined, DialogModes.ALL);
    
} catch (error) {
    alert(error);
}
