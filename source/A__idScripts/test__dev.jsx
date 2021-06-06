
function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    // var myString = myString.replace(/^(\d{3}(-|_{2}))(.+)/g, "$3");
    return myString
};


/** Optionen  **************************************************************/
var Rasterweite = 70;
var minAufloesung = 300;
var Suffix_RGB = "__RGB";

// no / here, escape \
getRubrik_array = [
    ["(\\w{1,3}-\\w{1,3}_11F_\\d{3}_)(.*)(\.indd)", "$2"],
    ["(\\w{1,3}-\\w{1,3}_11F_BUCH_J11_)(.*)(\.indd)", "$2"]
];


// var mainFolder = "/Users/simon/Arbeit/11Freunde/234/";
var mainFolder = "/Users/simon/Arbeit/11Freunde/Buch_Jahrhundertelf/";
var subFolder = "RGB";


if (!app.selection.length > 0) {
    alert("Wähle das zubearbeitende Bild aus");
    exit();
}

for (var i = 0; i < app.selection.length; i++) {

    /** Variablen  **************************************************************/
    var myDoc, myDocPath, myLivePath, myFolder, myFile, myImage, ZielAufloesung, hScale, vScale, hPPI, vPPI, myImage, myImagePath, myImageFile, myNewImageFile, myNewPath, unter300, indd_rubrik

    var myDoc = app.activeDocument;
    //var myDocPath = myDoc.filePath;  // TODO wenn noch nie gespeichert dann Abbruch // wirklich nötig? 
    var myLivePath = myDoc.filePath;
    var myFolder = new Folder(myLivePath);

    var myFile = app.selection[i];
    var myImage = myFile.images[0];
    myLink = myFile.graphics[0].itemLink;

    var ZielAufloesung = Rasterweite * 2.54 * 2;
    var hScale = myImage.horizontalScale;
    var vScale = myImage.verticalScale;
    var hPPI = myImage.effectivePpi[0];
    var vPPI = myImage.effectivePpi[1];
    var interpolieren = 0;

    var myImage = myLink.parent;
    var myImagePath = myLink.filePath;
    var myImageFile = new File(myImagePath);
    var myNewImageFile = GetFileNameOnly(myImageFile.name);
    var indd_rubrik = "";

    if (typeof getRubrik(getRubrik_array) !== 'undefined') {
        var indd_rubrik = getRubrik(getRubrik_array);
    }
    else {var indd_rubrik = ""}

    var myFolder = new Folder(mainFolder + subFolder + indd_rubrik);
    if (!myFolder.exists) myFolder.create();

    /*TODO ob tif oder psd // hier muss variabl */
    var myNewPath = myFolder + "/" + myNewImageFile + Suffix_RGB + ".psd";
    alert(myNewPath)
    /** run Main-function **************************************************************/
    // run_ID();
}


function getRubrik(_array) {
    try {
        var indd_docname = app.activeDocument.fullName.name;
        for (j = 0; j < _array.length; j++) {
            var regex = new RegExp(_array[j][0], 'g');

            if (indd_docname.match(regex)) {
                indd_rubrik = indd_docname.replace(regex, _array[j][1]);
                return "/" + indd_rubrik;
            }
        }
    } catch(e){}
}