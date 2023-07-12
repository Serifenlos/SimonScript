/* OPTIONS *************/
format = ["jpg", "psd", "tif"];

var selector_RGB = "__RGB";
var selector_RZ = "__RZ";
var selector_frei = "-frei"

/*  TODO 
    
*/


var folder_RZ = Folder.selectDialog("Wo liegen die RZ-Bilder?\n Unterordner werden nicht ausgewertet");
// var folder_RZ = "~/Arbeit/_RZ"

var links = app.activeDocument.allGraphics;
for (i = links.length - 1; i >= 0; i--) {
    var link_RGB = links[i].itemLink;

    // if (/.*(__RGB).*/.test(link_RGB.name)) {
    var regexTest = new RegExp(selector_RGB);
    // alert(regexTest);
    // alert(link_RGB.name);
    if (regexTest.test(link_RGB.name)) {

        var prefix, suffix;
        var prefix = suffix = "";

        // var prefix = link_RGB.name.replace(/(.*)(__RGB)(.*)/, "$1");
        var regexPrefix = new RegExp("(.*)(" + selector_RGB + ")(.*)", "g");
        var prefix = link_RGB.name.replace(regexPrefix, "$1");

        // if (/.*(-frei).*/.test(link_RGB.name)) {
        var regexFrei = new RegExp(selector_frei);
        if (regexFrei.test(link_RGB.name)) {
            // var suffix = GetFileNameOnly(link_RGB.name).replace(/(.*)(__RGB)(.*)/, "$3");
            var regexSuffix = new RegExp("(.*)(" + selector_RGB + ")(.*)", "g");
            var suffix = GetFileNameOnly(link_RGB.name).replace(regexSuffix, "$3");
        }

        function setLink_RZ(_format) {
            var link_RZ = new File(folder_RZ + "/" + prefix + selector_RZ + suffix + "." + _format);
            return link_RZ;
        }

        for (j = 0; j < format.length; j++) {
            if (setLink_RZ(format[j]).exists) {
                link_RGB.relink(setLink_RZ(format[j]));
                try {
                    if (link_RGB.status == LinkStatus.linkOutOfDate) {
                        link_RGB.update();
                    }
                } catch (err) {}
            }
        }
    }
}
alert("alle RZs verknüpft")



function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    return myString
};