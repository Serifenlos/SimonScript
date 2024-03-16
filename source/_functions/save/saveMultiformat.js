function saveMultiformat(_file, _saveFormat, _asCopy, _qualityJPG, _alphaChannels, _withLayers) {
    if (_saveFormat == "tif") {
        var saveOptions = new TiffSaveOptions();
        saveOptions.alphaChannels = _alphaChannels;
        saveOptions.byteOrder = ByteOrder.IBM;
        saveOptions.embedColorProfile = true;
        saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        saveOptions.layers = _withLayers;
        saveOptions.spotColors = false;
        saveOptions.transparency = true;
        saveOptions.annotations = false;

    } else if (_saveFormat == "jpg") {
        var saveOptions = new JPEGSaveOptions();
        saveOptions.embedColorProfile = true;
        saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        saveOptions.matte = MatteType.WHITE;
        saveOptions.quality = _qualityJPG;

    } else if (_saveFormat == "psd") {
        var saveOptions = new PhotoshopSaveOptions();
        saveOptions.alphaChannels = _alphaChannels;
        saveOptions.annotations = false;
        saveOptions.embedColorProfile = true;
        saveOptions.layers = _withLayers;
        saveOptions.spotColors = false;
    }
    saveFile_v2(_file, saveOptions, _asCopy);
}