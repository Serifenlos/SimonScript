function saveRZ(_saveFolder, _prefix, _saveFormat, _replace) {

    var saveFolder = new Folder(_saveFolder);
    if (!saveFolder.exists) saveFolder.create();

    var saveName = replace__RGB_RZ(_replace);
    var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
    var saveFile = File(savePath);

    while (saveFile.exists) {
        var saveName = saveName + "+";
        var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
        var saveFile = File(savePath);
    }


    if (_saveFormat == "tif") {
        var saveOptions = new TiffSaveOptions();
        saveOptions.alphaChannels = true;
        saveOptions.byteOrder = ByteOrder.IBM;
        saveOptions.embedColorProfile = true;
        saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        saveOptions.layers = true;
        saveOptions.spotColors = false;
        saveOptions.transparency = true;
        saveOptions.annotations = false;

    } else if (_saveFormat == "jpg") {
        var saveOptions = new JPEGSaveOptions();
        saveOptions.embedColorProfile = true;
        saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        saveOptions.matte = MatteType.WHITE;
        saveOptions.quality = 11;

    } else if (_saveFormat == "psd") {
        var saveOptions = new PhotoshopSaveOptions();
        saveOptions.alphaChannels = false;
        saveOptions.annotations = false;
        saveOptions.embedColorProfile = true;
        saveOptions.layers = true;
        saveOptions.spotColors = false;
    }

    doc.saveAs(new File(savePath), saveOptions, false, Extension.LOWERCASE);
    return;
}