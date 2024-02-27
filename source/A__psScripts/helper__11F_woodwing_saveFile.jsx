/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] 11F-woodwing saveFile</name>
<about>save RGB.psd + copy.jpg | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "./functions/basic.jsx";
//@include "./functions/meta.jsx";
//@include "./functions/save.jsx";



if (getMeta_2("isWoodwing")) var isWoodwing = getMeta_2("isWoodwing");
if (getMeta_2("woodwing_imageFile_RGB")) var woodwing_imageFile_RGB = getMeta_2("woodwing_imageFile_RGB");
if (getMeta_2("imageFile_copyRGB")) var imageFile_copyRGB = getMeta_2("imageFile_copyRGB");

// $.writeln("isWoodwing: " + getMeta_2("isWoodwing"));
// $.writeln("woodwing_imageFile_RGB: " + getMeta_2("woodwing_imageFile_RGB"));
// $.writeln("imageFile_copyRGB: " + getMeta_2("imageFile_copyRGB"));

// alert("isWoodwing: " + getMeta_2("isWoodwing"));
// alert("woodwing_imageFile_RGB: " + getMeta_2("woodwing_imageFile_RGB"));
// alert("imageFile_copyRGB: " + getMeta_2("imageFile_copyRGB"));






function saveJPG(_quality, _scans, _file, _asCopy, _lowerCase, _embedProfiles) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();

    d2.putInteger(s2t("extendedQuality"), _quality);
    d2.putInteger(s2t("scans"), _scans);
    d2.putEnumerated(s2t("matteColor"), s2t("matteColor"), s2t("none"));
    d.putObject(s2t("as"), s2t("JPEG"), d2);
    d.putPath(s2t("in"), _file);
    /* d.putInteger(s2t("documentID"), 65); */
    d.putBoolean(s2t("copy"), _asCopy);
    d.putBoolean(s2t("lowerCase"), _lowerCase);
    d.putBoolean(s2t("embedProfiles"), _embedProfiles);
    d.putEnumerated(s2t("saveStage"), s2t("saveStageType"), s2t("saveBegin"));
    executeAction(s2t("save"), d, DialogModes.NO);
}

var isWoodwing = (String(isWoodwing).toLowerCase() === 'true');

if (isWoodwing) {
/*     $.writeln("isWoodwing: " + isWoodwing);
    $.writeln("woodwing_imageFile_RGB: " + woodwing_imageFile_RGB);
    $.writeln("imageFile_copyRGB: " + imageFile_copyRGB); */
    saveJPG(2, 3, new File(imageFile_copyRGB), t, t, t);
    saveFile_PSD(new File(woodwing_imageFile_RGB), f, t, f, t, t, f);

}