/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] view ZoomIn</name>
<about>view | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "functions/basic.jsx";
//@include "functions/view.jsx";
if(app.documents.length>0){for(var theFirst=app.activeDocument,theDocs=app.documents,m=0;m<theDocs.length;m++){var theDoc=theDocs[m];app.activeDocument=theDoc;try{zoomIn()}catch(t){alert("Error")}}app.activeDocument=theFirst}