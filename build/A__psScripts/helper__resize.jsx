/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] resize</name>
<about>resize Original | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "functions/basic.jsx";
prefSave(),prefSet(DialogModes.NO,Units.PIXELS);try{try{gotoLayer("Original")}catch(e){alert("keine Ebene ‘Original‘ gefunden")}"LayerKind.SMARTOBJECT"!=doc.activeLayer.kind&&alert("Ebene ‘Original‘ ist kein SmartObjekt"),SmartObject_edit();var width=app.activeDocument.width;app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),doc.resizeImage(width,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0)}catch(e){}prefReset();