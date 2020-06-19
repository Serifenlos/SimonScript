function saveFile_old(_format) {
    var newFileName = new File(outputFolder + "/" + thisFileName + "__mockup");

    if (_outputFileFormat == "TIF") {
        tiffSaveOptions = new TiffSaveOptions();
        tiffSaveOptions.embedColorProfile = true;
        tiffSaveOptions.alphaChannels = false;
        tiffSaveOptions.layers = false;
        tiffSaveOptions.byteOrder = ByteOrder.IBM;
        tiffSaveOptions.annotations = false;
        tiffSaveOptions.transparency = true;
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        app.activeDocument.saveAs(newFileName, tiffSaveOptions, true, Extension.LOWERCASE);

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
        app.activeDocument.saveAs(newFileName, jpgSaveOptions, true, Extension.LOWERCASE);
    }
}

function saveFile_TIF() {
    saveOptions = new TiffSaveOptions();
    saveOptions.embedColorProfile = true;
    saveOptions.alphaChannels = false;
    saveOptions.layers = false;
    saveOptions.byteOrder = ByteOrder.IBM;
    saveOptions.annotations = false;
    saveOptions.transparency = true;
    saveOptions.imageCompression = TIFFEncoding.TIFFLZW;

    saveFile(saveOptions);
}



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


function saveFile_JPG(_quality, _embedColorProfile, _formatOptions, _matte) {
    saveOptions = new JPEGSaveOptions();
    saveOptions.quality = _quality;
    saveOptions.embedColorProfile = _embedColorProfile;
    // saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    //saveOptions.formatOptions = FormatOptions.PROGRESSIVE;
    saveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
    if (saveOptions.formatOptions == FormatOptions.PROGRESSIVE) {
        saveOptions.scans = 3
    };
    // saveOptions.matte = MatteType.NONE;
    saveOptions.matte = MatteType.WHITE;

    saveFile(saveOptions);
}

function saveFile(_saveOptions) {
    doc.saveAs(newFilePath, _saveOptions, true, Extension.LOWERCASE);
}

// saveFile_JPG(12, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE")