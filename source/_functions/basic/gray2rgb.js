function gray2rgb() {
    if (doc.mode == DocumentMode.GRAYSCALE) {
        doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
};