/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] ScriptListener OFF</name>
<about>ScriptListener OFF | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
/* OFF */
var listenerID=stringIDToTypeID("AdobeScriptListener ScriptListener"),keyLogID=charIDToTypeID("Log "),d=new ActionDescriptor;d.putBoolean(keyLogID,!1),executeAction(listenerID,d,DialogModes.NO);