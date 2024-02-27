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
if(getMeta_2("isWoodwing"))var isWoodwing=getMeta_2("isWoodwing");if(getMeta_2("woodwing_imageFile_RGB"))var woodwing_imageFile_RGB=getMeta_2("woodwing_imageFile_RGB");if(getMeta_2("imageFile_copyRGB"))var imageFile_copyRGB=getMeta_2("imageFile_copyRGB");
// $.writeln("isWoodwing: " + getMeta_2("isWoodwing"));
// $.writeln("woodwing_imageFile_RGB: " + getMeta_2("woodwing_imageFile_RGB"));
// $.writeln("imageFile_copyRGB: " + getMeta_2("imageFile_copyRGB"));
// alert("isWoodwing: " + getMeta_2("isWoodwing"));
// alert("woodwing_imageFile_RGB: " + getMeta_2("woodwing_imageFile_RGB"));
// alert("imageFile_copyRGB: " + getMeta_2("imageFile_copyRGB"));
function saveJPG(e,t,i,o,a,s){var n=new ActionDescriptor,g=new ActionDescriptor;g.putInteger(s2t("extendedQuality"),e),g.putInteger(s2t("scans"),t),g.putEnumerated(s2t("matteColor"),s2t("matteColor"),s2t("none")),n.putObject(s2t("as"),s2t("JPEG"),g),n.putPath(s2t("in"),i),
/* d.putInteger(s2t("documentID"), 65); */
n.putBoolean(s2t("copy"),o),n.putBoolean(s2t("lowerCase"),a),n.putBoolean(s2t("embedProfiles"),s),n.putEnumerated(s2t("saveStage"),s2t("saveStageType"),s2t("saveBegin")),executeAction(s2t("save"),n,DialogModes.NO)}(isWoodwing="true"===String(isWoodwing).toLowerCase())&&(
/*     $.writeln("isWoodwing: " + isWoodwing);
    $.writeln("woodwing_imageFile_RGB: " + woodwing_imageFile_RGB);
    $.writeln("imageFile_copyRGB: " + imageFile_copyRGB); */
saveJPG(2,3,new File(imageFile_copyRGB),t,t,t),saveFile_PSD(new File(woodwing_imageFile_RGB),f,t,f,t,t,f));