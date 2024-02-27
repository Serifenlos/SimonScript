function cmyk2rgb() {
    if (doc.mode == DocumentMode.CMYK) {
        doc.convertProfile("eciRGB v2 ICCv4", Intent.RELATIVECOLORIMETRIC, true, false);
    }
};