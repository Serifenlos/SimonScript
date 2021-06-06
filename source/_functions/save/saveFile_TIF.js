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