/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] view 3horizontal</name>
<about>view | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/view.jsx";


if (app.documents.length >= 3) {
    anordung_3horizontal();
    anordnung_zoom(0);
} else {
    alert("zu wenig Bilder\nfür diese Ansicht")
}