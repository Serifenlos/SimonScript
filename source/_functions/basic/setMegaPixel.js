function setMegaPixel(_setMegaPixel) {
    prefSave();
    prefSet(DialogModes.NO, Units.PIXELS);

    var w = doc.width;
    var h = doc.height;
    var getPixel = w * h;
    var setPixel = _setMegaPixel * 1000000;
    var faktor = setPixel / getPixel;

    if (setPixel < getPixel) {
        if (w >= h) {
            var w_neu = w * Math.sqrt(faktor);
            doc.resizeImage(w_neu, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
        } else {
            var h_neu = Math.round(h * Math.sqrt(faktor));
            doc.resizeImage(undefined, h_neu, undefined, ResampleMethod.PRESERVEDETAILS, 0);
        }
    }

    prefReset();
    return "";
}