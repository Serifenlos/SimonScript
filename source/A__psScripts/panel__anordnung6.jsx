/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] view 6</name>
<about>view | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/view.jsx";


if (app.documents.length >= 6) {
    anordung_6();
    anordnung_zoom(0);
} else {
    alert("zu wenig Bilder\nfür diese Ansicht")
}