function saveFile_old(e){var t=new File(outputFolder+"/"+thisFileName+"__mockup");if("TIF"==_outputFileFormat)tiffSaveOptions=new TiffSaveOptions,tiffSaveOptions.embedColorProfile=!0,tiffSaveOptions.alphaChannels=!1,tiffSaveOptions.layers=!1,tiffSaveOptions.byteOrder=ByteOrder.IBM,tiffSaveOptions.annotations=!1,tiffSaveOptions.transparency=!0,tiffSaveOptions.imageCompression=TIFFEncoding.TIFFLZW,app.activeDocument.saveAs(t,tiffSaveOptions,!0,Extension.LOWERCASE);else if("JPG"==_outputFileFormat){var s=new JPEGSaveOptions;s.quality=9,s.embedColorProfile=!0,
// jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
//other options///////////////////////////
//jpgSaveOptions.formatOptions = FormatOptions.PROGRESSIVE;
s.formatOptions=FormatOptions.OPTIMIZEDBASELINE,s.formatOptions==FormatOptions.PROGRESSIVE&&(s.scans=3),
// jpgSaveOptions.matte = MatteType.NONE;
s.matte=MatteType.WHITE,app.activeDocument.saveAs(t,s,!0,Extension.LOWERCASE)}}function saveFile_TIF(){saveOptions=new TiffSaveOptions,saveOptions.embedColorProfile=!0,saveOptions.alphaChannels=!1,saveOptions.layers=!1,saveOptions.byteOrder=ByteOrder.IBM,saveOptions.annotations=!1,saveOptions.transparency=!0,saveOptions.imageCompression=TIFFEncoding.TIFFLZW,saveFile(saveOptions)}
// function saveFile_JPG(_quality, _embedColorProfile, _formatOptions, _matte) {
//     saveOptions = new JPEGSaveOptions();
//     saveOptions.quality = _quality;
//     saveOptions.embedColorProfile = _embedColorProfile;
//     // saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
//     //saveOptions.formatOptions = FormatOptions.PROGRESSIVE;
//     saveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
//     if (saveOptions.formatOptions == FormatOptions.PROGRESSIVE) {
//         saveOptions.scans = 3
//     };
//     // saveOptions.matte = MatteType.NONE;
//     saveOptions.matte = MatteType.WHITE;
//     saveFile(saveOptions);
// }
function saveFile_JPG(e,t,s,i){saveOptions=new JPEGSaveOptions,saveOptions.quality=e,saveOptions.embedColorProfile=t,
// saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
//saveOptions.formatOptions = FormatOptions.PROGRESSIVE;
saveOptions.formatOptions=FormatOptions.OPTIMIZEDBASELINE,saveOptions.formatOptions==FormatOptions.PROGRESSIVE&&(saveOptions.scans=3),
// saveOptions.matte = MatteType.NONE;
saveOptions.matte=MatteType.WHITE,saveFile(saveOptions)}function saveFile(e){doc.saveAs(newFilePath,e,!0,Extension.LOWERCASE)}
// saveFile_JPG(12, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE")