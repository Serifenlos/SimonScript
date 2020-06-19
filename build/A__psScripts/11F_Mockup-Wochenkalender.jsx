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
_outputFileFormat="JPG",inputFolder=Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");var fileList=inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i),master=File.openDialog("Bitte wähle die Master-Datei aus");
// var f = File.openDialog ('Select File...');
// var master = new File("/Users/simon/Arbeit/11Freunde/11F_Wochenkalender\ Ordner/Mockup/11F_Wochenkalender2021__Mockup-Master.psd");
app.open(master),gotoLayer("BILD");var outputFolder=new Folder(inputFolder+"/output");outputFolder.exists||outputFolder.create();for(var i=0;i<fileList.length;i++){var thisFile=fileList[i],thisFileName=GetFileNameOnly(thisFile.name);SmartOject_placeItem(thisFile),saveFile(),emptyProtocoll()}function saveFile(){var e=new File(outputFolder+"/"+thisFileName+"__mockup");if("TIF"==_outputFileFormat)tiffSaveOptions=new TiffSaveOptions,tiffSaveOptions.embedColorProfile=!0,tiffSaveOptions.alphaChannels=!1,tiffSaveOptions.layers=!1,tiffSaveOptions.byteOrder=ByteOrder.IBM,tiffSaveOptions.annotations=!1,tiffSaveOptions.transparency=!0,tiffSaveOptions.imageCompression=TIFFEncoding.TIFFLZW,app.activeDocument.saveAs(e,tiffSaveOptions,!0,Extension.LOWERCASE);else if("JPG"==_outputFileFormat){var t=new JPEGSaveOptions;t.quality=9,t.embedColorProfile=!0,
// jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
//other options///////////////////////////
//jpgSaveOptions.formatOptions = FormatOptions.PROGRESSIVE;
t.formatOptions=FormatOptions.OPTIMIZEDBASELINE,t.formatOptions==FormatOptions.PROGRESSIVE&&(t.scans=3),
// jpgSaveOptions.matte = MatteType.NONE;
t.matte=MatteType.WHITE,app.activeDocument.saveAs(e,t,!0,Extension.LOWERCASE)}}app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);