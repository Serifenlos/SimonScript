function interpolation_PS(e,t,i){try{e<t?
/* alert("hoch rechnen: hPPI: " + _horizontalPPI + "; minAuflösung: " + _minAufloesung); */
app.activeDocument.resizeImage(void 0,void 0,t,ResampleMethod.PRESERVEDETAILS):e>i?
/* alert("runter rechnen: hPPI: " + _horizontalPPI + "; ZielAufloesung: " + _ZielAufloesung); */
app.activeDocument.resizeImage(void 0,void 0,i,ResampleMethod.PRESERVEDETAILS):
/* alert("wedernoch rechnen: hPPI: " + _horizontalPPI + "; ZielAufloesung: " + _ZielAufloesung + "; minAuflösung: " + _minAufloesung); */
/* myPsDoc.resizeImage(undefined, undefined, _horizontalPPI, ResampleMethod.NONE); */
setDpi(e)}catch(e){alert(e)}}