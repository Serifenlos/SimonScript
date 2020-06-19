/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Mockup Wochenkalender</name>
<about>Mockup des Wochenkalenders | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

// @include "functions/basic.jsx";
// @include "functions/loopFiles.jsx";

_outputFileFormat = "JPG";


inputFolder = Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");
var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);

// var f = File.openDialog ('Select File...');

var master = File.openDialog("Bitte wähle die Master-Datei aus")
// var master = new File("/Users/simon/Arbeit/11Freunde/11F_Wochenkalender\ Ordner/Mockup/11F_Wochenkalender2021__Mockup-Master.psd");
app.open(master);
gotoLayer("BILD");

var outputFolder = new Folder(inputFolder + "/output");
if (!outputFolder.exists) { outputFolder.create() };


for (var i = 0; i < fileList.length; i++) {
    var thisFile = fileList[i];
    var thisFileName = GetFileNameOnly(thisFile.name);

    SmartOject_placeItem(thisFile);
    saveFile();
    emptyProtocoll();

}

 app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);



function saveFile() {
    var itemFile = new File(outputFolder + "/" + thisFileName + "__mockup");

    if (_outputFileFormat == "TIF") {
        tiffSaveOptions = new TiffSaveOptions();
        tiffSaveOptions.embedColorProfile = true;
        tiffSaveOptions.alphaChannels = false;
        tiffSaveOptions.layers = false;
        tiffSaveOptions.byteOrder = ByteOrder.IBM;
        tiffSaveOptions.annotations = false;
        tiffSaveOptions.transparency = true;
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        app.activeDocument.saveAs(itemFile, tiffSaveOptions, true, Extension.LOWERCASE);

    } else if (_outputFileFormat == "JPG") {
        var jpgSaveOptions = new JPEGSaveOptions();
        jpgSaveOptions.quality = 9;
        jpgSaveOptions.embedColorProfile = true;
        // jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        //other options///////////////////////////
        //jpgSaveOptions.formatOptions = FormatOptions.PROGRESSIVE;
        jpgSaveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
        if (jpgSaveOptions.formatOptions == FormatOptions.PROGRESSIVE) {
            jpgSaveOptions.scans = 3
        };
        // jpgSaveOptions.matte = MatteType.NONE;
        jpgSaveOptions.matte = MatteType.WHITE;
        app.activeDocument.saveAs(itemFile, jpgSaveOptions, true, Extension.LOWERCASE);
    }
}
