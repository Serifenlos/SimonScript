/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[ss] open Image in PS</name>
<about>open Image or Freisteller in PS  | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>SimonScript</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
/* TODO 
    - öffne andere Links (Text) in den Original-Programmen

*/
if(!app.selection.length>0)alert("Wähle das zubearbeitende Bild aus");else for(var i=0;i<app.selection.length;i++){var imageFile_frei_string,selection=app.selection[i];
// to get the object handler
// $.writeln(selection);
// ist der interne Rahmen vom Bild gewählt
if(selection instanceof Image&&selection.parent.graphics.length>0)var image=selection.parent.graphics[0].itemLink;else if((selection instanceof Rectangle||selection instanceof Oval||selection instanceof Polygon)&&selection.graphics.length>0){
// if (!selection instanceof TextFrame && selection.graphics.length > 0) {
image=selection.graphics[0].itemLink;$.writeln(image)}if(void 0!==image){var imagePath=image.filePath,imageFile=new File(imagePath),frei="-frei",checkName=new RegExp(frei);if(checkName.test(imageFile)){var string_imageFile_frei=imageFile.toString().replace(frei,""),imageFile_frei=new File(string_imageFile_frei);if(imageFile_frei.exists)imageFile=string_imageFile_frei}BridgeTalkMessage_openDoc(imageFile)}else alert("evtl. kein Bild\n Shift + Ente\nOriginal bearbeiten")}function BridgeTalkMessage_openDoc(e){var i=new BridgeTalk;i.target="photoshop",i.body=runPS.toSource()+"('"+e+"');",i.send(5)}function runPS(e){app.open(new File(e)),app.bringToFront()}