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

/** Variablen  **************************************************************/

//@include "./assets/json2.js"
var jsonFilePath = "~/ss_var.json";
var jsonData = loadJSON(jsonFilePath);


// Funktion zum Laden und Parsen der JSON-Datei
function loadJSON(filePath) {
    var file = new File(filePath);
    var content;

    if (file.exists) {
        file.open("r");
        content = file.read();
        file.close();

        // Parse JSON-Inhalt
        try {
            return JSON.parse(content);
        } catch (e) {
            alert("Fehler beim Parsen der JSON-Datei:\n" + e);
            return null;
        }
    } else {
        alert("Die JSON-Datei konnte nicht gefunden werden.");
        return null;
    }
}

/** Optionen  **************************************************************/
const ZielAufloesung = jsonData.ZielAufloesung;
const minAufloesung = jsonData.minAufloesung;
const suffixRGB = jsonData.suffixRGB;

var mainFolder = jsonData.mainFolder;
var subFolder = jsonData.subFolder;
var woodwing_mainFolder = jsonData.woodwing_mainFolder;

var check_trailingSlash = /\/$/; // Prüft, ob der String mit "/" endet
if (!check_trailingSlash.test(mainFolder)) {
    mainFolder += "/"; // Fügt "/" am Ende hinzu, wenn es nicht vorhanden ist
}





if (!app.selection.length > 0) {
    alert("Wähle das zubearbeitende Bild aus");

} else {

    var idDoc = app.activeDocument;
    var idDocName = GetFileNameOnly(decodeURI(idDoc.name));
    

    for (var i = 0; i < app.selection.length; i++) {
        var selection, image, imageLink, isWoodwing, woodwing_imageID, imagePath, imageFile, imageName_init, docFolder


        // Weiche: interne oder äussere Rahmen des Bildes gewählt
        if (app.selection[i] instanceof Image && app.selection[i].parent.graphics.length > 0) {
            var selection = app.selection[i].parent;
        } else {
            var selection = app.selection[i];
        }


        var image = selection.images[0];
        var imageLink = selection.graphics[0].itemLink;


        try {
            if (imageLink.wwoi) {
                var isWoodwing = true;
                var woodwing_imageID = imageLink.wwoi;
                var idDocName = idDocName.replace(/^(.+)((-|_)\d{3})$/gm, "$1");
            }
        } catch (e) {
            var isWoodwing = false;
        }


        if (typeof imageLink !== 'undefined') {

            if (!isWoodwing) {
                var imagePath = imageLink.filePath;
            } else {
                var imagePath = imageLink.elvisFilePath;
            }

            var imageFile = new File(imagePath);
            var imageName = decodeURI(imageLink.name);
            var imageName_init = GetFileNameOnly(imageName);


            var docFolder = new Folder(mainFolder + subFolder);

            // var frei = "-frei";
            // var checkName = new RegExp(frei);
            // if (checkName.test(imageFile)) {
            //     var string_imageFile_frei = imageFile.toString().replace(frei, "");
            //     var imageFile_frei = new File(string_imageFile_frei);

            //     if (imageFile_frei.exists) {
            //         var imageFile = string_imageFile_frei;
            //     }
            // }

            try {
                if(isWoodwing) {
                    imageLink.editOriginal();
                }
                BridgeTalkMessage_openDoc(docFolder, idDocName, imageFile, imageName, imageName_init, suffixRGB, isWoodwing, woodwing_mainFolder, woodwing_imageID);

            } catch (e) {
                alert(e)
            }


        } else {
            alert("evtl. kein Bild\n Shift + Ente\nOriginal bearbeiten")
        }
    }
}

/*// FUNCTIONS //*/
/*=================================================================================*/
function GetFileNameOnly(_fileName) {
    var myString = "";
    var myResult = _fileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = _fileName;
    } else {
        myString = _fileName.substr(0, myResult);
    }
    return myString;
}




function BridgeTalkMessage_openDoc(_docFolder, _idDocName, _imageFile, _imageName, _imageName_init, _suffixRGB, _isWoodwing, _woodwing_mainFolder, _woodwing_imageID) {
/*     $.writeln("_docFolder:" + _docFolder);
    $.writeln("_idDocName:" + _idDocName);
    $.writeln("_imageName_init:" + _imageName_init);
    $.writeln("_suffixRGB:" + _suffixRGB);
    $.writeln("_isWoodwing:" + _isWoodwing);
    $.writeln("_woodwing_mainFolder:" + _woodwing_mainFolder);
    $.writeln("_woodwing_imageID:" + _woodwing_imageID);
    $.writeln("_imageName:" + _imageName); */

    var bt = new BridgeTalk();
    bt.target = 'photoshop';
    bt.body = runPS.toSource() + "('" + _docFolder + "','" + _idDocName + "','" + _imageFile + "','" + _imageName + "','" + _imageName_init + "','" + _suffixRGB + "','" + _isWoodwing + "','" + _woodwing_mainFolder + "','" + _woodwing_imageID + "');";
    bt.send(5);
}


function runPS(_docFolder, _idDocName, _imageFile, _imageName, _imageName_init, _suffixRGB, _isWoodwing, _woodwing_mainFolder, _woodwing_imageID) {
    app.bringToFront();
    var _isWoodwing = (_isWoodwing === 'true');
   /*  var imageName_init = GetFileNameOnly(decodeURI(_imageName)); */
    /*     alert("_docFolder:" + _docFolder);
        alert("_idDocName:" + _idDocName);
        alert("_imageName_init:" + _imageName_init);
        alert("_suffixRGB:" + _suffixRGB);
        alert("_isWoodwing:" + _isWoodwing);
        alert("_woodwing_mainFolder:" + _woodwing_mainFolder);
        alert("_woodwing_imageID:" + _woodwing_imageID); */
        
    var imageFolder_RGB = new Folder(_docFolder + "/" + _idDocName);
    var imageFile_RGB = new File(decodeURI(imageFolder_RGB + "/" + _imageName_init + _suffixRGB + ".psd"));

    /* var imageFile_RGB = new File(imageFile_RGB); */
    if (!imageFile_RGB.exists) {
        return;
    }
    
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* HIER BIN ICH STEHEN GEBLIEBEN: WENN RGB NICHT EXISTIERT: ABBRUCH */
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    if (!_isWoodwing) {
        app.open(new File(_imageFile));
    } else {
        if (isFileOpen(_imageName)) {
            app.documents.getByName(_imageName).close(SaveOptions.DONOTSAVECHANGES);
        }
        app.open(imageFile_RGB);
    }


    function isFileOpen(_fileName) {
        var fileIsOpen = false;
        for (var j = 0; j < app.documents.length; j++) {
            if (app.documents[j].name == _fileName) {
                fileIsOpen = true;
                break;
            }
        }
        return fileIsOpen;
    }
};



