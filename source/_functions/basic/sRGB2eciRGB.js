function sRGB2eciRGB() {
    var getProfile = doc.colorProfileName;
    var find = new RegExp("^sRGB|Apple RGB|ColorMatch RGB");
    if (getProfile.match(find)) {
        doc.convertProfile("eciRGB v2 ICCv4", Intent.RELATIVECOLORIMETRIC, true, false);
    }
}