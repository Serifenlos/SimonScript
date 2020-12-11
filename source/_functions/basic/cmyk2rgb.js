function cmyk2rgb() {
    if (doc.mode == DocumentMode.CMYK) {
        doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
};