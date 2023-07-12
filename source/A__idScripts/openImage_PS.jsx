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




if (!app.selection.length > 0) {
    alert("Wähle das zubearbeitende Bild aus");

} else {
    for (var i = 0; i < app.selection.length; i++) {

        var image, imageFile_frei_string, imageFile, imagePath;
        var selection = app.selection[i];

        // to get the object handler
        // $.writeln(selection);


        // ist der interne Rahmen vom Bild gewählt
        if (selection instanceof Image && selection.parent.graphics.length > 0) {
            var image = selection.parent.graphics[0].itemLink;
        }

        // ist der äussere Rahmen vom Bild gewählt
        else if ((selection instanceof Rectangle || selection instanceof Oval || selection instanceof Polygon) && selection.graphics.length > 0) {
        // if (!selection instanceof TextFrame && selection.graphics.length > 0) {
            var image = selection.graphics[0].itemLink;
            $.writeln(image)
        }
        else {
            // um alle anderen im Original-Programm zu öffnen braucht man den Link der Selection und dann wird einfach… Aber ich weiß nicht woher den Link bekommen.
            // link.editOriginal();

        } 


        if (typeof image !== 'undefined') {
            var imagePath = image.filePath;
            var imageFile = new File(imagePath);

            var frei = "-frei";
            var checkName = new RegExp(frei);
            if (checkName.test(imageFile)) {
                var string_imageFile_frei = imageFile.toString().replace(frei, "");
                var imageFile_frei = new File(string_imageFile_frei);

                if (imageFile_frei.exists) {
                    var imageFile = string_imageFile_frei;
                }
            }

            BridgeTalkMessage_openDoc(imageFile);
        } else {
            alert("evtl. kein Bild\n Shift + Ente\nOriginal bearbeiten")
        }
    }
}


function BridgeTalkMessage_openDoc(_imageFile) {
    var bt = new BridgeTalk();
    bt.target = 'photoshop';
    bt.body = runPS.toSource() + "('" + _imageFile + "');";
    bt.send(5);
}


function runPS(__imageFile) {
    app.open(new File(__imageFile));
    app.bringToFront();
}