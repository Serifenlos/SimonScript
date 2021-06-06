function saveFile(_saveOptions) {
	doc.saveAs(newFilePath, _saveOptions, true, Extension.LOWERCASE);
}