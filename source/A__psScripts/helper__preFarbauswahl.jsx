/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] preFarbauswahl</name>
<about>preparing Farbauswahl | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "./functions/basic.jsx";

try {
    gotoFill();
} catch (e) {
    alert(e);
}

app_setColor(0, 0, 0, "foregroundColor");
app_setColor(0, 0, 100, "backgroundColor");
app_setTool("eyedropperTool");