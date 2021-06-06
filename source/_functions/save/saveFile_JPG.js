function saveFile_JPG(_quality, _embedColorProfile, _formatOptions, _matte) {
	saveOptions = new JPEGSaveOptions();
	saveOptions.quality = _quality;
	saveOptions.embedColorProfile = _embedColorProfile;
	/* saveOptions.formatOptions = FormatOptions.STANDARDBASELINE; */
	/* saveOptions.formatOptions = FormatOptions.PROGRESSIVE; */
	saveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
	if (saveOptions.formatOptions == FormatOptions.PROGRESSIVE) {
		saveOptions.scans = 3
	};
	/* saveOptions.matte = MatteType.NONE; */
	saveOptions.matte = MatteType.WHITE;

	saveFile(saveOptions);
}