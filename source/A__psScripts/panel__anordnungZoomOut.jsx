/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] view ZoomOut</name>
<about>view | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/view.jsx";

if (app.documents.length > 0) {
    var theFirst = app.activeDocument;
    var theDocs = app.documents;

    for (var m = 0; m < theDocs.length; m++) {
        var theDoc = theDocs[m];
        app.activeDocument = theDoc;

        try {
            zoomOut();
        } catch (e) {
            alert('Error')
        };
    };
    app.activeDocument = theFirst;
};