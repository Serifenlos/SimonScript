/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] ScriptListener ON</name>
<about>ScriptListener ON | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

/* ON */
var listenerID = stringIDToTypeID("AdobeScriptListener ScriptListener");
var keyLogID = charIDToTypeID('Log ');
var d = new ActionDescriptor;
d.putBoolean(keyLogID, true);
executeAction(listenerID, d, DialogModes.NO);