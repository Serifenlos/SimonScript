// @include "functions/loopFiles.jsx";



/*//// OPTIONS ////*/
/*=================================================================================*/
var Rasterweite = 70;
var minAufloesung = 300;
var Suffix_RGB = "__RGB";
var option_convert_8bit = true;

// var mainFolder = "/Users/simon/Arbeit/11Freunde/_Cloud/Buch/";
// var subFolder = "RGB";

// var mainFolder = "/Users/simon/Arbeit/11Freunde/223/";
var mainFolder = "/Users/simon/Documents/Simon/_scriptsAliase/";
var subFolder = "TestBilder";


var papier = 0; 
/*0 = nix,
    1 = SCpaper
    2 = ISOcoated_v2_300%
    3 = PSOuncoated
    4 = MFCPaper
    5 = ISOcoated_v2
 */
/*=================================================================================*/


if (!app.selection.length > 0) {
    alert ("Wähle das zubearbeitende Bild aus");
    exit();
}


//// VARIABLES ////
/*=================================================================================*/
var myDoc, myDocPath, myLivePath, myFolder, myFile, myImage, ZielAufloesung, hScale, vScale, hPPI, vPPI, myImage, myImagePath, myImageFile, myNewImageFile, myNewPath, unter300

var myDoc = app.activeDocument;
//var myDocPath = myDoc.filePath;  // TODO wenn noch nie gespeichert dann Abbruch // wirklich nötig? 
var myLivePath = myDoc.filePath;
var myFolder = new Folder(myLivePath);

var myFile = app.selection[0];
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

var myFolder = new Folder(mainFolder + subFolder);
if (!myFolder.exists) myFolder.create();

var myNewPath =  myFolder + "/" + myNewImageFile + Suffix_RGB + ".tif";
/*=================================================================================*/

/***********************************************************************************/
run_ID();
/***********************************************************************************/



//// FUNCTIONS ////
/*=================================================================================*/
function run_ID(){

    if (new RegExp("__RGB").test(myNewImageFile)) {
        alert("Das Bild ist schon vorbereitet");
        exit();
    }

    if(myFile.isValid == false) {
        alert ("Wähle das zubearbeitende Bild aus");
        exit();
    }
    
    

    if (hPPI < minAufloesung) {
        var myDialog = new Window ("dialog", "unter " + minAufloesung + "dpi");
        var stxt = myDialog.add ("group");
        stxt.add ("statictext", undefined, "Das Bild hat nur " + hPPI + " dpi");
    
        var myButtonGroup = myDialog.add ("group");
        var ok = myButtonGroup.add ("button", undefined, "weiter");
        var cancel = myButtonGroup.add ("button", undefined, "stopp");
          
        ok.onClick = function() {
            interpolieren = 1;
            myDialog.close();
        }
        cancel.onClick = function() {
            interpolieren = 0;
            myDialog.close();
            return;
        }
         
        myDialog.show();

    }
    else {
        OpenImage();
        // Relink(myLink, myNewPath);
        // UpdateAllOutdatedLinks();
    }

    if (interpolieren == 1) {
        // OpenImage();
        // Relink(myLink, myNewPath);
        // UpdateAllOutdatedLinks();
        }
}

/*=================================================================================*/
function OpenImage(){

    try{
        if(myFile.isValid == true && myFile.constructor.name == "Rectangle") {
 //           myLink = myFile.graphics[0].itemLink;
        }
    }
    catch (e){
        alert ("Wähle das zubearbeitende Bild aus");
        exit();
     }

    CreateBridgeTalkMessage();
    // dev__bt();
}

/*=================================================================================*/
function CreateBridgeTalkMessage() {
    var bt = new BridgeTalk();
    bt.target = "photoshop-140";
    // bt.body = ResaveInPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + "," + papier + ");";
    bt.body = dev__bt2.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + "," + papier + ");";
    bt.onResult = function(resObj) {}
    bt.send(100);
}

function dev__bt() {
   ding = "dong";
    var currentPath = (new File($.fileName)).path // retrieve the current script path
    var scriptToLoad = new File(currentPath + "/functions/dev__bt.jsx") // the script to load
    try {
        if (!scriptToLoad.exists) {
            throw new Error("script not found!");
        }
        scriptToLoad.open("r"); // read only
        var message = scriptToLoad.read();
        scriptToLoad.close()
    } catch (error) {
        alert("Error parsing the file: " + error.description);
    }
    var bt = new BridgeTalk();
    bt.target = "photoshop";
    bt.body = message;
    bt.send();
}

function dev__bt2() {
    alert("dong")
}