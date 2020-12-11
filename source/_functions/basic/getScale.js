function getScale(_setMegaPixel) {
    var w = doc.width;
    var h = doc.height;
    var getPixel = w * h;
    var setPixel = _setMegaPixel * 1000000;
    var faktor = setPixel / getPixel;

    return Math.sqrt(faktor);
}