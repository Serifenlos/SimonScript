/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] view 2vertical</name>
<about>view | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/view.jsx";


if (app.documents.length >= 2) {
    anordung_2vertical();
    anordnung_zoom(-2);
} else {
    alert("zu wenig Bilder\nfür diese Ansicht")
}