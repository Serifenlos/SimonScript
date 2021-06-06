function startScriptFile(_scriptName, _dialogModes) {
    var d = new ActionDescriptor();
    d.putString(sTID("javaScriptName"), _scriptName);
    executeAction(sTID('AdobeScriptAutomation Scripts'), d, _dialogModes);
}