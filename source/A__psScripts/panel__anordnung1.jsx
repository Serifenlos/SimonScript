/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] view 1</name>
<about>view | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/view.jsx";



if (app.documents.length >= 1) {
    anordung_1();
    anordnung_zoom(-1);
} else {
    alert("zu wenig Bilder\nfür diese Ansicht")
}