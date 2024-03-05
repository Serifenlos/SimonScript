function interpolation_PS(_horizontalPPI, _minAufloesung, _ZielAufloesung) {
    try {
        if (_horizontalPPI < _minAufloesung) {
            /* alert("hoch rechnen: hPPI: " + _horizontalPPI + "; minAuflösung: " + _minAufloesung); */
            app.activeDocument.resizeImage(undefined, undefined, _minAufloesung, ResampleMethod.PRESERVEDETAILS);
        } else if (_horizontalPPI > _ZielAufloesung) {
            /* alert("runter rechnen: hPPI: " + _horizontalPPI + "; ZielAufloesung: " + _ZielAufloesung); */
            app.activeDocument.resizeImage(undefined, undefined, _ZielAufloesung, ResampleMethod.PRESERVEDETAILS);
        } else {
            /* alert("wedernoch rechnen: hPPI: " + _horizontalPPI + "; ZielAufloesung: " + _ZielAufloesung + "; minAuflösung: " + _minAufloesung); */
            /* myPsDoc.resizeImage(undefined, undefined, _horizontalPPI, ResampleMethod.NONE); */
            setDpi(_horizontalPPI);
        }
    } catch (e) { alert(e) }
}