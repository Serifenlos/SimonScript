function text2Clipboard(_text) {
    var d = new ActionDescriptor();
    d.putString(stringIDToTypeID("textData"), _text);
    executeAction(stringIDToTypeID("textToClipboard"), d, DialogModes.NO);
}