function sRGB2eciRGB() {
    var getProfile = doc.colorProfileName;
    var find = new RegExp("^sRGB");
    if (getProfile.match(find)) {
        doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
}