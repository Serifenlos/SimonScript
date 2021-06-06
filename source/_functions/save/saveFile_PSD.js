function saveFile_PSD(_FilePath, _asCopy, _alphaChannels, _annotations, _embedColorProfile, _layers, _spotColors) {
	saveOptions = new PhotoshopSaveOptions();
	saveOptions.alphaChannels = _alphaChannels;
	saveOptions.annotations = _annotations;
	saveOptions.embedColorProfile = _embedColorProfile;
	saveOptions.layers = _layers;
	saveOptions.spotColors = _spotColors;

	doc.saveAs(_FilePath, saveOptions, _asCopy, Extension.LOWERCASE);
}