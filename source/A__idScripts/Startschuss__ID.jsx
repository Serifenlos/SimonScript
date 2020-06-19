#target indesign

/*//// OPTIONS ////*/
/*=================================================================================*/
var Rasterweite = 70;
var minAufloesung = 300;
var Suffix_RGB = "__RGB";
var option_convert_8bit = true;

// var mainFolder = "/Users/simon/Arbeit/11Freunde/_Cloud/Buch/";
// var subFolder = "RGB";

var mainFolder = "/Users/simon/Arbeit/__temp/";
var subFolder = "RGB";


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
var myDocPath = myDoc.filePath;
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
//    if (hScale.toFixed(1) != vScale.toFixed(1)) {
//        alert ("Das Bild ist verzerrt eingesetzt - Abbruch");
//        return;
//    }


//~ alert(myFolder);
//~ return;


//    if (hPPI != vPPI) {
//        alert ("Das Bild ist verzerrt eingesetzt - Abbruch");
//        exit();
//   }

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
        Relink(myLink, myNewPath);
        UpdateAllOutdatedLinks();
    }

    if (interpolieren == 1) {
        OpenImage();
        Relink(myLink, myNewPath);
        UpdateAllOutdatedLinks();
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

    // CreateBridgeTalkMessage();
    // testBT_1();
    testBT_2();
}
// #include "function/test.jsx";
/*=================================================================================*/
function CreateBridgeTalkMessage() {
    var bt = new BridgeTalk();
    bt.target = "photoshop-140";
    // bt.body = ResaveInPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + "," + papier + ");";
    // bt.body = ResaveInPS(myImagePath,myNewPath,hScale,vScale,ZielAufloesung,minAufloesung,hPPI,option_convert_8bit,papier);
    // check that the target app is installed
    // var targetApp = BridgeTalk.getSpecifier( "photoshop-140");
    // bt.body = hier("hallox");
    bt.body = ResaveInPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + "," + papier + ");";
    bt.onResult = function(resObj) {}
    bt.send(100);
}

function hier(_what) {
    alert(_what);
}

// function CreateBridgeTalkMessage() {
//     var bt = new BridgeTalk();
//     bt.target = "photoshop-140";
//     bt.body = ResaveInPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + "," + papier + ");";
//     bt.onResult = function(resObj) {}
//     bt.send(100);
// }

function testBT_1() {
    // check that the target app is installed
    var targetApp = BridgeTalk.getSpecifier("photoshop-140");

    if (targetApp) {
        // construct a message object
        var bt = new BridgeTalk();
        var fileName = "what";
        // the message is intended for Adobe Bridge CS4
        bt.target = targetApp;
        var myScript = ("var ftn = " + psRemote.toSource() + "; ftn(" + fileName.toSource() + ");");
        //    var myScript = ("var ftn = " + psRemote.toSource() + "; var ftn = " + fileName.toSource() + ";");
        bt.body = myScript;

        // the script to evaluate is contained in a string in the "body" property


        // define result handler callback
        bt.onResult = function () {
            alert("zurück")
        } //fn defined elsewhere

        // send the message asynchronously
        bt.send(8);
    }
}


function psRemote(fileName) {
    alert("ding");
    alert(fileName);
    /*    #include "\/Users\/simon\/Library\/Preferences\/Adobe\ InDesign\/Version\ 15.0\/de_DE\/Scripts\/Scripts\ Panel\/functions\/test.jsx";*/
    alert("dong");
    /*    hier();*/
}

function testBT_2() {
    var currentPath = (new File($.fileName)).path // retrieve the current script path
    var scriptToLoad = new File(currentPath + "/functions/test.jsx") // the script to load
    alert(currentPath)
    try {
        if (!scriptToLoad.exists) {
            throw new Error("script not found!");
        }
        scriptToLoad.open("r"); // read only
        var message = scriptToLoad.read();
        scriptToLoad.close();
    } catch (error) {
        alert("Error parsing the file: " + error.description);
    }

    var bt = new BridgeTalk();
    bt.target = "photoshop";
    bt.body = message;
    bt.send();
}

// function testBT_3() {
//     var bridgeFun = function () {
//         $.writeln('Greetings from Bridge');
//         return true;
//     }
//     var bt = new BridgeTalk()
//     bt.target = 'bridge';
//     bt.body = "var bridgeFun = " + bridgeFun.toSource() + "; bridgeFun();";
//     bt.onResult = function (btObj) {
//         return $.writeln('BridgeTalk result: ' + btObj.body);
//     };
//     bt.send(31);



//     The.toSource() method returns a string representing the source code
//     for the
//     function.So the message body(bt.body) is:

//         var bridgeFun = (function () {
//             $.writeln('Greetings from Bridge');
//             return true;
//         });
//     bridgeFun();
// }




/*=================================================================================*/
function ResaveInPS(myImagePath, myNewPath, hScale, vScale, ZielAufloesung, minAufloesung, hPPI, option_convert_8bit, papier) {
    
    try {
        app.displayDialogs = DialogModes.NO;
        var myPsDoc = app.open(new File(myImagePath));



/*hier();*/
        
    check_PS();
    /* Wenn debug auf 'false' steht, wird das Skript in einem einzigen Protokoll-Schritt ausgeführt. */
    const debug = false;


        if (debug) {
            check_PS();
            run_PS();
        }
        else {
            check_PS();
            app.activeDocument.suspendHistory('Startschuss', 'run_PS();');
            }



    function run_PS() {
        prefSave ();
        prefSet ();
        translate ();
        gray2rgb ();
        cmyk2rgb ();
        noProfile ();
        
        if (option_convert_8bit) {
            var id1000 = charIDToTypeID( "CnvM" );
            var desc1000 = new ActionDescriptor();
            var id2000 = charIDToTypeID( "Dpth" );
            desc1000.putInteger( id2000, 8 );
            executeAction( id1000, desc1000, DialogModes.NO );
        };   

/*        nameOriginal ("Original");
        adjustShadowsHighlights();
        adjustWhiteBackground ("WEISS", normal, keine);
        createFolder ("Einstellungen");
    
        adjustAutotone ("AutoTonwert", normal, grau);
        deleteMask();
        adjustGradation("Gradation neutral", normal, grau);
        deleteMask();
        neutralizerDodgeBurn ("neutralizer", luminanz, grau, "Abwedeln/Nachbelichten", ineinanderkopieren, grau);
    
        adjustSelectiveColor ("Selektive Farbe", normal, violett);
        adjustSaturation ("Sättigung Farbe", normal, blau);
        adjustSaturation ("Sättigung Luminanz", luminanz, gruen);
        adjustBalance ("Farbe in Balance", normal, gelb);
        adjustGradation("Gradation Kontrast", normal, orange);
        adjustBrightContrast ("Hell + Kontrast", normal, rot);
        adjustVibrance ("Dynamik", normal, orange);*/
        alert("ding");

/* */   smartObject();
    nameLayer("Original");

    createGroup("Einstellungen","passThrough","none",100);
    createLayer("AutoTonwert", "levels", "normal", "gray", 100,false,true);
    deleteMask();
    createLayer("Gradation neutral", "curves", "normal", "gray", 100,false,false);
    deleteMask();
    /*     createGroup("Dodge & Burn","passThrough","gray",100);
    LUT_burn();
    LUT_dodge();
    selectLayerUp();
toogleOpenCloseSet();
    selectLayerUp(); */
    createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100,false,false);
    createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100,false,false);
    createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100,false,false);
    createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100,false,false);
    createLayer("Gradation Kontrast", "curves", "normal", "orange", 100,false,false);
    createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100,false,false);
    createLayer("Dynamik", "vibrance", "normal", "orange", 100,false,false);
        alert("dong");

        prefReset ();
    };

/* BASIC BEGIN ***********************************/



function cTID(s) {return app.charIDToTypeID(s)};
function sTID(s) {return app.stringIDToTypeID(s)};

/* saving/restoring preferences */
function prefSave() {
    startDisplayDialogs = app.displayDialogs;
    startRulerUnits = app.preferences.rulerUnits;
}
function prefSet() {
    app.displayDialogs = DialogModes.NO;
    app.preferences.rulerUnits = Units.CM;
}
function prefReset (){
    app.preferences.rulerunits = startRulerUnits;
    if (startDisplayDialogs == DialogModes.ERROR) {
        startDisplayDialogs = DialogModes.NO;
    }
    app.displayDialogs = startDisplayDialogs;
};

function createLayer(_name, _type, _mode, _color, _opacity, _clip, _autoLevel) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putClass(sTID("adjustmentLayer"));
    d.putReference(sTID("null"), r);
    var d2 = new ActionDescriptor();
    d2.putString(sTID("name"), _name);
    d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
    d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
    d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
    d2.putBoolean(sTID('group'), _clip);
    if(_type == "levels" && _autoLevel) {
        var d3 = new ActionDescriptor();
        d3.putEnumerated(sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault'));
        var l = new ActionList();
        var d4 = new ActionDescriptor();
        var r2 = new ActionReference();
        r2.putEnumerated(sTID('channel'),sTID('channel'),sTID('composite'));
        d4.putReference(sTID('channel'),r2);
        d4.putBoolean(sTID('auto'),true);
        l.putObject(sTID('levelsAdjustment'),d4);
        d3.putList(sTID('adjustment'),l);
        d2.putObject(sTID("type"), sTID(_type), d3);
    }
    else {
        d2.putClass(sTID("type"), sTID(_type));
    }
    d.putObject(sTID("using"), sTID("adjustmentLayer"), d2);
    executeAction(sTID("make"), d,DialogModes.NO);
}

function createColorLayer(_mode, _name, _color, _red, _green, _blue) {
    var desc92 = new ActionDescriptor();
    var ref38 = new ActionReference();
    ref38.putClass(sTID("contentLayer"));
    desc92.putReference(sTID("null"), ref38);
    var desc93 = new ActionDescriptor();
    desc93.putString(sTID("name"), _name);
    desc93.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
    desc93.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
    var desc94 = new ActionDescriptor();
    var desc95 = new ActionDescriptor();
    desc95.putDouble(sTID("red"), _red);
    desc95.putDouble(sTID("green"), _green);
    desc95.putDouble(sTID("blue"), _blue);
    desc94.putObject(sTID("color"), sTID("RGBColor"), desc95);
    desc93.putObject(sTID("type"), sTID("solidColorLayer"), desc94);
    desc92.putObject(sTID("using"), sTID("contentLayer"), desc93);
    executeAction(sTID("make"), desc92, DialogModes.NO);
}


function deleteMask(){
    try{
        var desc17 = new ActionDescriptor();
        var ref13 = new ActionReference();
        ref13.putEnumerated( sTID('channel'), sTID('channel'), sTID('mask') );
        desc17.putReference( sTID('null'), ref13 );
        executeAction( sTID('delete'), desc17, DialogModes.NO );
    }
    catch(e){}
}


function noProfile() {     /* if image has no profile -> assign a Profile */
    if (doc.colorProfileType == ColorProfile.NONE)  {
        try{
            var desc3 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated( sTID("document"), sTID("ordinal"), sTID("targetEnum") );
            desc3.putReference( sTID("null"), ref1 );
            desc3.putBoolean( sTID("manage"), true );
            executeAction( sTID("assignProfile"), desc3, DialogModes.ALL );
        }
        catch(e) {}  
    }
}



function createGroup(_name, _mode, _color, _opacity) {
    var desc154 = new ActionDescriptor();
    var ref132 = new ActionReference();
    ref132.putClass(sTID('layerSection'));
    desc154.putReference(sTID('null'), ref132);
    var desc155 = new ActionDescriptor();
    desc155.putString(sTID('name'), _name);
    desc155.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
    desc155.putEnumerated(sTID('color'), sTID('color'), sTID(_color));
    desc155.putEnumerated(sTID('mode'), sTID('blendMode'), sTID(_mode));
    desc154.putObject(sTID('using'), sTID('layerSection'), desc155);
    desc154.putInteger(sTID('layerSectionStart'), 351);
    desc154.putInteger(sTID('layerSectionEnd'), 352);
    desc154.putString(sTID('name'), "Gruppe 3");
    executeAction(sTID('make'), desc154, DialogModes.NO);
}

function smartObject() {
    executeAction(stringIDToTypeID("newPlacedLayer"),undefined,DialogModes.NO);
}

function nameLayer(_name) {
    app.activeDocument.activeLayer.name = _name
}

function selectLayerUp() {
    var desc150 = new ActionDescriptor();
        var ref118 = new ActionReference();
        ref118.putEnumerated( sTID('layer'), sTID('ordinal'), sTID('forwardEnum') );
    desc150.putReference( sTID('null'), ref118 );
    desc150.putBoolean( sTID('makeVisible'), false );
        var list65 = new ActionList();
        list65.putInteger( 108 );
    desc150.putList( sTID('layerID'), list65 );
    executeAction( sTID('select'), desc150, DialogModes.NO );
}

/* BASIC END ***********************************/

function check_PS(){
    /* if selected Layer is a PixelLayer? */
    if (app.documents.length <= 0) {
        alert("Öffne zunächst ein Bild! - Abbruch");
        return;}
    if (app.activeDocument.activeLayer.kind == (LayerKind.LEVELS || LayerKind.CURVES || LayerKind.TEXT || LayerKind.SOLIDFILL || LayerKind.GRADIENTFILL || LayerKind.PATTERNFILL || LayerKind.COLORBALANCE || LayerKind.BRIGHTNESSCONTRAST || LayerKind.HUESATURATION || LayerKind.SELECTIVECOLOR || LayerKind.CHANNELMIXER || LayerKind.GRADIENTMAP || LayerKind.INVERSION || LayerKind.THRESHOLD || LayerKind.POSTERIZE || LayerKind.SMARTOBJECT || LayerKind.PHOTOFILTER || LayerKind.EXPOSURE || LayerKind.LAYER3D || LayerKind.VIDEO || LayerKind.BLACKANDWHITE || LayerKind.VIBRANCE)) {
        alert("Wähle eine Pixel-Ebene aus! - Abbruch");
        return;}
};
function prefSave (){
    startDisplayDialogs = app.displayDialogs;
    startRulerUnits = app.preferences.rulerUnits;
};
function prefSet (){
    app.displayDialogs = DialogModes.NO;
    app.preferences.rulerUnits = Units.MM;
};
function prefReset (){
    app.preferences.rulerunits = startRulerUnits;
    if (startDisplayDialogs == DialogModes.ERROR) {
        startDisplayDialogs = DialogModes.NO;
    }
    app.displayDialogs = startDisplayDialogs;
};
function translate () {
    /* FARBEN =================================================================================== */
    keine = "None";
    rot = "Rd  ";
    orange = "Orng";
    gelb = "Ylw ";
    gruen = "Grn ";
    blau = "Bl  ";
    violett = "Vlt ";
    grau = "Gry ";

    /* BLENDMODI ================================================================================ */
    normal = "Nrml";                         /* NORMAL          Normal */
    sprenkeln = "Dslv";                      /* DISSOLVE        Sprenkeln */
    /*--------------------------------------------------------------------------------------------*/
    abdunkeln = "Drkn";                      /* DARKEN          Abdunkeln */
    multiplizieren = "Mltp";                 /* MULTIPLY        Multiplizieren */
    farbig_nachbelichten = "CBrn";           /* COLORBURN       Farbig nachbelichten */
    linear_nachbelichten = "linearBurn";     /* LINEARBURN      Linear nachbelichten */
    dunklere_farbe = "darkerColor";
    /*--------------------------------------------------------------------------------------------*/
    aufhellen = "Lghn";                      /* LIGHTEN         Aufhellen */
    negativ_multiplizieren = "Scrn";         /* SCREEN          Negativ multiplizieren */
    farbig_abwedeln = "CDdg";                /* COLORDODGE      Farbig abwedeln */
    linear_abwedeln = "linearDodge";         /* LINEARDODGE     Linear abwedeln */
    linear_abwedeln = "lighterColor";        /* hellere Farbe */
    /*--------------------------------------------------------------------------------------------*/
    ineinanderkopieren = "Ovrl";             /* OVERLAY         Ineinanderkopieren */
    weiches_licht = "SftL";                  /* SOFTLIGHT       Weiches Licht */
    hartes_licht = "HrdL";                   /* HARDLIGHT       Hartes Licht */
    strahlendes_licht = "vividLight";        /* VIVIDLIGHT      Strahlendes Licht */
    lineares_licht = "linearLight";          /* LINEARLIGHT     Lineares Licht */
    lichtpunkte = "pinLight";                /* PINLIGHT        Lichtpunkte */
    hart_mischen = "hardMix";                /* HARDMIX         Hart mischen */
    /*--------------------------------------------------------------------------------------------*/
    differenz = "Dfrn";                      /* DIFFERENCE      Differenz */
    ausschluss = "Xclu";                     /* EXCLUSION       Ausschluss */
    subtrahieren = "blendSubtraction";       /* SUBTRACT        Subtrahieren */
    dividieren = "blendDivide";              /* DIVIDE          Dividieren */
    /*--------------------------------------------------------------------------------------------*/
    farbton = "H   ";                        /* HUE             Farbton */
    sättigung = "Strt";                      /* SATURATION      Sättigung */
    farbe = "Clr ";                          /* COLORBLEND      Farbe */
    luminanz = "Lmns";                       /* LUMINOSITY      Luminanz */

}
function gray2rgb (){
    if (activeDocument.mode == DocumentMode.GRAYSCALE)  {
        app.activeDocument.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
};
function cmyk2rgb (){
    if (activeDocument.mode == DocumentMode.CMYK)  {
        app.activeDocument.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
};
function noProfile (){
    /* if image has no profile -> assign a RGB-Profile */
    if (activeDocument.colorProfileType == ColorProfile.NONE)  {
        try{
            BridgeTalk.bringToFront ("photoshop-140");
            function cTID(s) { return app.charIDToTypeID(s); };
            function sTID(s) { return app.stringIDToTypeID(s); };

            var desc3 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated( cTID('Dcmn'), cTID('Ordn'), cTID('Trgt') );
            desc3.putReference( cTID('null'), ref1 );
            desc3.putBoolean( sTID('manage'), true );
            executeAction( sTID('assignProfile'), desc3, DialogModes.ALL );
        }
        catch (e){}  
    }
};
function nameOriginal (_nameLayer) {
    var idnewPlacedLayer = stringIDToTypeID( "newPlacedLayer" );
    executeAction( idnewPlacedLayer, undefined, DialogModes.NO );
    app.activeDocument.activeLayer.name = _nameLayer;
};
function adjustShadowsHighlights() {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc158 = new ActionDescriptor();
        var desc159 = new ActionDescriptor();
        desc159.putUnitDouble( cTID('Amnt'), cTID('#Prc'), 0.000000 );
        desc159.putUnitDouble( cTID('Wdth'), cTID('#Prc'), 50.000000 );
        desc159.putInteger( cTID('Rds '), 30 );
    desc158.putObject( cTID('sdwM'), sTID('adaptCorrectTones'), desc159 );
        var desc160 = new ActionDescriptor();
        desc160.putUnitDouble( cTID('Amnt'), cTID('#Prc'), 0.000000 );
        desc160.putUnitDouble( cTID('Wdth'), cTID('#Prc'), 50.000000 );
        desc160.putInteger( cTID('Rds '), 30 );
    desc158.putObject( cTID('hglM'), sTID('adaptCorrectTones'), desc160 );
    desc158.putDouble( cTID('BlcC'), 0.000000 );
    desc158.putDouble( cTID('WhtC'), 0.000000 );
    desc158.putInteger( cTID('Cntr'), 0 );
    desc158.putInteger( cTID('ClrC'), 20 );
    executeAction( sTID('adaptCorrect'), desc158, DialogModes.NO );
};
function adjustWhiteBackground(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    /* weisse Füllebene */
    var desc92 = new ActionDescriptor();
        var ref38 = new ActionReference();
        ref38.putClass( sTID('contentLayer') );
    desc92.putReference( cTID('null'), ref38 );
        var desc93 = new ActionDescriptor();
        desc93.putString( cTID('Nm  '), _nameLayer );
        desc93.putEnumerated( cTID('Md  '), cTID('BlnM'), cTID(_mode) );
        desc93.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
            var desc94 = new ActionDescriptor();
                var desc95 = new ActionDescriptor();
                desc95.putDouble( cTID('Rd  '), 255.000000 );
                desc95.putDouble( cTID('Grn '), 255.000000 );
                desc95.putDouble( cTID('Bl  '), 255.000000 );
            desc94.putObject( cTID('Clr '), cTID('RGBC'), desc95 );
        desc93.putObject( cTID('Type'), sTID('solidColorLayer'), desc94 );
    desc92.putObject( cTID('Usng'), sTID('contentLayer'), desc93 );
    executeAction( cTID('Mk  '), desc92, DialogModes.NO );

    /* in den Hintergrund schieben */
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Back'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('move'), desc1, DialogModes.NO);

    /* Maske auswählen */
    var desc130 = new ActionDescriptor();
    var ref75 = new ActionReference();
    ref75.putEnumerated( cTID('Chnl'), cTID('Chnl'), cTID('Msk ') );
    desc130.putReference( cTID('null'), ref75 );
    desc130.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc130, DialogModes.NO );

    /* Maske löschen */
    var desc131 = new ActionDescriptor();
    var ref76 = new ActionReference();
    ref76.putEnumerated( cTID('Chnl'), cTID('Ordn'), cTID('Trgt') );
    desc131.putReference( cTID('null'), ref76 );
    executeAction( cTID('Dlt '), desc131, DialogModes.NO );

    /* zur darüber liegenden Ebene wechseln */
    var desc142 = new ActionDescriptor();
    var ref88 = new ActionReference();
    ref88.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Frwr') );
    desc142.putReference( cTID('null'), ref88 );
    desc142.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc142, DialogModes.NO );
};
function createFolder(_foldername) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc35 = new ActionDescriptor();
        var ref28 = new ActionReference();
        ref28.putClass( sTID('layerSection') );
    desc35.putReference( cTID('null'), ref28 );
        var desc36 = new ActionDescriptor();
        desc36.putString( cTID('Nm  '), _foldername );
    desc35.putObject( cTID('Usng'), sTID('layerSection'), desc36 );
    executeAction( cTID('Mk  '), desc35, DialogModes.NO );
};
function adjustAutotone (_nameLayer,_mode,_color) {
    function cTID(s) { return app.charIDToTypeID(s); };
    function sTID(s) { return app.stringIDToTypeID(s); };

    var desc310 = new ActionDescriptor();
    var ref244 = new ActionReference();
    ref244.putClass( cTID('AdjL') );
    desc310.putReference( cTID('null'), ref244 );
        var desc311 = new ActionDescriptor();
        desc311.putString(cTID('Nm  '),_nameLayer);
        desc311.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID(_mode));
        desc311.putEnumerated(cTID('Clr '),cTID('Clr '),cTID(_color));
            var desc312 = new ActionDescriptor();
            desc312.putEnumerated( sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault') );

                var list120 = new ActionList();
                var desc315 = new ActionDescriptor();
                var ref246 = new ActionReference();
                ref246.putEnumerated( cTID('Chnl'), cTID('Chnl'), cTID('Cmps') );
                desc315.putReference( cTID('Chnl'), ref246 );
                desc315.putBoolean( cTID('Auto'), true );
                list120.putObject( cTID('LvlA'), desc315 );
                desc312.putList( cTID('Adjs'), list120 );

            desc311.putObject( cTID('Type'), cTID('Lvls'), desc312 );
        desc310.putObject( cTID('Usng'), cTID('AdjL'), desc311 );
    executeAction( cTID('Mk  '), desc310, DialogModes.NO );
};
function deleteMask() {
    function cTID(s) { return app.charIDToTypeID(s); };
    function sTID(s) { return app.stringIDToTypeID(s); };
    var d=new ActionDescriptor();
    var r=new ActionReference();
    r.putEnumerated(cTID('Chnl'),cTID('Ordn'),cTID('Trgt'));
    d.putReference(cTID('null'),r);
    executeAction(cTID('Dlt '),d,DialogModes.NO);
};
function adjustGradation(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };
    var desc50 = new ActionDescriptor();
        var ref43 = new ActionReference();
        ref43.putClass( cTID('AdjL') );
    desc50.putReference( cTID('null'), ref43 );
        var desc51 = new ActionDescriptor();
        desc51.putString( cTID('Nm  '), _nameLayer );
        desc51.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID(_mode));
        desc51.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
            var desc52 = new ActionDescriptor();
            desc52.putEnumerated( sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault') );
        desc51.putObject( cTID('Type'), cTID('Crvs'), desc52 );
    desc50.putObject( cTID('Usng'), cTID('AdjL'), desc51 );
    executeAction( cTID('Mk  '), desc50, DialogModes.NO );
};
function neutralizerDodgeBurn(_nameLayer1, _mode1, _color1, _nameLayer2, _mode2, _color2) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    /* Black-White Layer set to luminace with no influence */
    var desc82 = new ActionDescriptor();
        var ref63 = new ActionReference();
        ref63.putClass( cTID('AdjL') );
    desc82.putReference( cTID('null'), ref63 );
        var desc83 = new ActionDescriptor();
        desc83.putString( cTID('Nm  '), _nameLayer1 );
        desc83.putEnumerated( cTID('Md  '), cTID('BlnM'), cTID(_mode1) );
        desc83.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color1) );
            var desc84 = new ActionDescriptor();
            desc84.putEnumerated( sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault') );
            desc84.putInteger( cTID('Rd  '), 30 );
            desc84.putInteger( cTID('Yllw'), 89 );
            desc84.putInteger( cTID('Grn '), 59 );
            desc84.putInteger( cTID('Cyn '), 70 );
            desc84.putInteger( cTID('Bl  '), 11 );
            desc84.putInteger( cTID('Mgnt'), 41 );
            desc84.putBoolean( sTID('useTint'), false );
                var desc85 = new ActionDescriptor();
                desc85.putDouble( cTID('Rd  '), 127 );
                desc85.putDouble( cTID('Grn '), 127 );
                desc85.putDouble( cTID('Bl  '), 127 );
            desc84.putObject( sTID('tintColor'), cTID('RGBC'), desc85 );
        desc83.putObject( cTID('Type'), cTID('BanW'), desc84 );
    desc82.putObject( cTID('Usng'), cTID('AdjL'), desc83 );
    executeAction( cTID('Mk  '), desc82, DialogModes.NO );

    deleteMask();

    /* midtone Gray set to overlay */
    var desc91 = new ActionDescriptor();
        var ref68 = new ActionReference();
        ref68.putClass( cTID('Lyr ') );
    desc91.putReference( cTID('null'), ref68 );
        var desc92 = new ActionDescriptor();
        desc92.putString( cTID('Nm  '), _nameLayer2 );
        desc92.putEnumerated( cTID('Md  '), cTID('BlnM'), cTID(_mode2) );
        desc92.putBoolean( cTID('Grup'), true );
        desc92.putBoolean( cTID('FlNt'), true );
        desc92.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color2) );
    desc91.putObject( cTID('Usng'), cTID('Lyr '), desc92 );
    executeAction( cTID('Mk  '), desc91, DialogModes.NO );
};




function adjustSelectiveColor(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc2 = new ActionDescriptor();
        var ref2 = new ActionReference();
        ref2.putClass( cTID('AdjL') );
    desc2.putReference( cTID('null'), ref2 );
        var desc3 = new ActionDescriptor();
        desc3.putString( cTID('Nm  '), _nameLayer );
        desc3.putEnumerated(cTID('Md  '),cTID('BlnM'),cTID(_mode));
        desc3.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
            var desc4 = new ActionDescriptor();
            desc4.putEnumerated( sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault') );
        desc3.putObject( cTID('Type'), cTID('SlcC'), desc4 );
    desc2.putObject( cTID('Usng'), cTID('AdjL'), desc3 );
    executeAction( cTID('Mk  '), desc2, DialogModes.NO );
};
function adjustSaturation(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass( cTID('AdjL') );
    desc1.putReference( cTID('null'), ref1 );
        var desc2 = new ActionDescriptor();
        desc2.putString( cTID('Nm  '), _nameLayer );
        desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID(_mode));
        desc2.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
            var desc3 = new ActionDescriptor();
            desc3.putEnumerated( sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault') );
            desc3.putBoolean( cTID('Clrz'), false );
        desc2.putObject( cTID('Type'), cTID('HStr'), desc3 );
    desc1.putObject( cTID('Usng'), cTID('AdjL'), desc2 );
    executeAction( cTID('Mk  '), desc1, DialogModes.NO );
};
function adjustBalance(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc127 = new ActionDescriptor();
        var ref87 = new ActionReference();
        ref87.putClass( cTID('AdjL') );
    desc127.putReference( cTID('null'), ref87 );
        var desc128 = new ActionDescriptor();
        desc128.putString( cTID('Nm  '), _nameLayer );
        desc128.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID(_mode));
        desc128.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
            var desc129 = new ActionDescriptor();
                var list1 = new ActionList();
                list1.putInteger( 0 );
                list1.putInteger( 0 );
                list1.putInteger( 0 );
            desc129.putList( cTID('ShdL'), list1 );
                var list2 = new ActionList();
                list2.putInteger( 0 );
                list2.putInteger( 0 );
                list2.putInteger( 0 );
            desc129.putList( cTID('MdtL'), list2 );
                var list3 = new ActionList();
                list3.putInteger( 0 );
                list3.putInteger( 0 );
                list3.putInteger( 0 );
            desc129.putList( cTID('HghL'), list3 );
            desc129.putBoolean( cTID('PrsL'), true );
        desc128.putObject( cTID('Type'), cTID('ClrB'), desc129 );
    desc127.putObject( cTID('Usng'), cTID('AdjL'), desc128 );
    executeAction( cTID('Mk  '), desc127, DialogModes.NO );
};
function adjustBrightContrast(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc136 = new ActionDescriptor();
        var ref94 = new ActionReference();
        ref94.putClass( cTID('AdjL') );
    desc136.putReference( cTID('null'), ref94 );
        var desc137 = new ActionDescriptor();
        desc137.putString( cTID('Nm  '), _nameLayer );
        desc137.putEnumerated( cTID('Md  '), cTID('BlnM'), cTID(_mode) );
        desc137.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
            var desc138 = new ActionDescriptor();
            desc138.putBoolean( sTID('useLegacy'), false );
        desc137.putObject( cTID('Type'), cTID('BrgC'), desc138 );
    desc136.putObject( cTID('Usng'), cTID('AdjL'), desc137 );
    executeAction( cTID('Mk  '), desc136, DialogModes.NO );
};
function adjustVibrance(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc140 = new ActionDescriptor();
        var ref96 = new ActionReference();
        ref96.putClass( cTID('AdjL') );
    desc140.putReference( cTID('null'), ref96 );
        var desc141 = new ActionDescriptor();
        desc141.putString( cTID('Nm  '), _nameLayer );
        desc141.putEnumerated( cTID('Md  '), cTID('BlnM'), cTID(_mode) );
        desc141.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
        desc141.putClass( cTID('Type'), sTID('vibrance') );
    desc140.putObject( cTID('Usng'), cTID('AdjL'), desc141 );
    executeAction( cTID('Mk  '), desc140, DialogModes.NO );
};



function createLayer(_name, _type, _mode, _color, _opacity, _clip, _autoLevel) {
    function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putClass(sTID("adjustmentLayer"));
    d.putReference(sTID("null"), r);
    var d2 = new ActionDescriptor();
    d2.putString(sTID("name"), _name);
    d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
    d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
    d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
    d2.putBoolean(sTID('group'), _clip);
    if(_type == "levels" && _autoLevel) {
        var d3 = new ActionDescriptor();
        d3.putEnumerated(sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault'));
        var l = new ActionList();
        var d4 = new ActionDescriptor();
        var r2 = new ActionReference();
        r2.putEnumerated(sTID('channel'),sTID('channel'),sTID('composite'));
        d4.putReference(sTID('channel'),r2);
        d4.putBoolean(sTID('auto'),true);
        l.putObject(sTID('levelsAdjustment'),d4);
        d3.putList(sTID('adjustment'),l);
        d2.putObject(sTID("type"), sTID(_type), d3);
    }
    else {
        d2.putClass(sTID("type"), sTID(_type));
    }
    d.putObject(sTID("using"), sTID("adjustmentLayer"), d2);
    executeAction(sTID("make"), d,DialogModes.NO);
}

function ansicht() {
    function cTID(s) { return app.charIDToTypeID(s); };
    function sTID(s) { return app.stringIDToTypeID(s); };

    /* max Ansicht */
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('FtOn'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('select'), desc1, DialogModes.NO );
    /* einmal rauszoomen */    
    var desc2 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('ZmOt'));
    desc2.putReference(cTID('null'), ref2);
    executeAction(sTID('select'), desc2, DialogModes.NO );

    /* Ebene "AutoTonwert" auswählen */
    var desc3 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putName( cTID('Lyr '), "AutoTonwert" );
    desc3.putReference( cTID('null'), ref3 );
    desc3.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc3, DialogModes.NO );

    /* Ebene ausblenden */
    var desc4 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref4 = new ActionReference();
    ref4.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
    list1.putReference( ref4 );
    desc4.putList( cTID('null'), list1 );
    executeAction( cTID('Hd  '), desc4, DialogModes.NO );    
    
    /* SoftProof */
    
    BridgeTalk.bringToFront ("photoshop-130");
    
    if (papier != 0) {
    
    if (papier == 1) {
        var scriptFile = "/Applications/Adobe\ Photoshop\ CC\ 2018/Presets/Scripts/A/A_saveSoftproof_ID_SCpaper.jsx";

        }
    else if (papier == 2) {
        var scriptFile = "/Applications/Adobe\ Photoshop\ CC\ 2018/Presets/Scripts/A/A_saveSoftproof_ID_ISOcoated300.jsx";
        }
    else if (papier == 3) {
        var scriptFile = "/Applications/Adobe\ Photoshop\ CC\ 2018/Presets/Scripts/A/A_saveSoftproof_ID_PSOuncoated.jsx";
        }
    else if (papier == 4) {
        var scriptFile = "/Applications/Adobe\ Photoshop\ CC\ 2018/Presets/Scripts/A/A_saveSoftproof_ID_PSO_MFCPaper.jsx";
        }
    else if (papier == 5) {
        var scriptFile = "/Applications/Adobe\ Photoshop\ CC\ 2019/Presets/Scripts/A/A_saveSoftproof_ID_ISOcoated_v2.jsx";
        }
    
    var f = new File(scriptFile);
    if (f.exists) {
        $.evalFile(f, 300000);
    };

    }
};




        /*//// BILDGRÖSSE ////*/
        /* Speichern der aktuell eingestellten Einheiten */
        var storedUnits = app.preferences.rulerUnits;
        /* Umstellen der Einheiten auf Pixel*/
        app.preferences.rulerUnits = Units.MM;
        
        if (hPPI < minAufloesung) {
            myPsDoc.resizeImage(myPsDoc.width.value * hScale / 100, myPsDoc.height.value * vScale / 100, minAufloesung, ResampleMethod.BICUBIC);
        }
        else {
            if (hPPI > ZielAufloesung) {
                myPsDoc.resizeImage(myPsDoc.width.value * hScale / 100, myPsDoc.height.value * vScale / 100, ZielAufloesung, ResampleMethod.BICUBIC);
            }
            else {
                myPsDoc.resizeImage(null, null, hPPI, ResampleMethod.NONE);
            }
        }
        /* Umstellen der Einheiten auf die zuvor gespeicherten Einstellungen */
        app.preferences.rulerUnits = storedUnits;
        
        /* Ansicht einstellen */
        ansicht();
        
        /*//// SAVE AS TIFF ////*/
        var myTiffSaveOptions  = new TiffSaveOptions();
        myTiffSaveOptions.alphaChannels = true;
        myTiffSaveOptions.byteOrder = ByteOrder.IBM;
        myTiffSaveOptions.embedColorProfile = true;
        myTiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        myTiffSaveOptions.layers = true;
        myTiffSaveOptions.spotColors = false;
        myTiffSaveOptions.transparency = true;
        myTiffSaveOptions.annotations = false;
        myPsDoc.saveAs(new File(myNewPath), myTiffSaveOptions);
                
        /*myPsDoc.close(SaveOptions.DONOTSAVECHANGES);*/
        app.displayDialogs = DialogModes.ALL;
    }
    catch (err) {
        try {app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);}
         catch (err) {}
    }
}

/*=================================================================================*/
function Relink(myLink, myNewPath){
    var newFile = new File (myNewPath);
    if (newFile.exists) {
        var originalLinkFile = new File(myLink.filePath);
        myLink.relink(newFile);
        try { 
            var myLink = myLink.update();
        }
        catch(err) {}
    }
}
/*=================================================================================*/
function UpdateAllOutdatedLinks() {
    for (var myCounter = myDoc.links.length-1; myCounter >= 0; myCounter--) {
        var myLink = myDoc.links[myCounter];
        if (myLink.status == LinkStatus.linkOutOfDate) {
            myLink.update();
        }
    }
}
/*=================================================================================*/
function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    }
    else {
        myString = myFileName.substr(0, myResult);
    }
    return myString;
}

