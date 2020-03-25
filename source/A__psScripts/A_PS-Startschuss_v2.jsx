/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[GitDev] Startschuss</name>
<about>Photoshop-Script to start every retouch | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>GitHub dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";


// #target photoshop
// Wenn debug auf 'false' steht, wird das Skript in einem einzigen Protokoll-Schritt ausgeführt.
const debug = false;

checkDoc ()
if (app.documents.length > 0) {
    if (debug) {
        run()
    }
    else {
        app.activeDocument.suspendHistory('Startschuss', 'run();')
    }
}

function run() {
    prefSave ()
    prefSet ()
    translate()
    gray2rgb ()
    cmyk2rgb ()
    noProfile ()
    nameOriginal ("Original")
//~     adjustShadowsHighlights()
    adjustWhiteBackground ("WEISS", normal, keine)
//~     deleteMask()
    createFolder ("Einstellungen")
    
    adjustAutotone ("AutoTonwert", normal, grau)
    deleteMask()
    adjustGradation("Gradation neutral", normal, grau)
    deleteMask()
    //~ simpleDodgeBurn ("Dodge & Burn", luminanz, grau)
    neutralizerDodgeBurn ("neutralizer", luminanz, grau, "Abwedeln/Nachbelichten", ineinanderkopieren, grau)
    
    adjustSelectiveColor ("Selektive Farbe", normal, violett)
    adjustSaturation ("Sättigung Farbe", normal, blau)
    adjustSaturation ("Sättigung Luminanz", luminanz, gruen)
    adjustBalance ("Farbe in Balance", normal, gelb)
    adjustGradation("Gradation Kontrast", normal, orange)
    adjustBrightContrast ("Hell + Kontrast", normal, rot)
    adjustVibrance ("Dynamik", normal, orange)

    prefReset ()
    ansicht()

}
// FUNCTIONS


function checkDoc (){
    // if selected Layer is a PixelLayer?
    if (app.documents.length <= 0) {
        alert("Öffne zunächst ein Bild! - Abbruch");
        return;}
    if (app.activeDocument.activeLayer.kind == (LayerKind.LEVELS || LayerKind.CURVES || LayerKind.TEXT || LayerKind.SOLIDFILL || LayerKind.GRADIENTFILL || LayerKind.PATTERNFILL || LayerKind.COLORBALANCE || LayerKind.BRIGHTNESSCONTRAST || LayerKind.HUESATURATION || LayerKind.SELECTIVECOLOR || LayerKind.CHANNELMIXER || LayerKind.GRADIENTMAP || LayerKind.INVERSION || LayerKind.THRESHOLD || LayerKind.POSTERIZE || LayerKind.SMARTOBJECT || LayerKind.PHOTOFILTER || LayerKind.EXPOSURE || LayerKind.LAYER3D || LayerKind.VIDEO || LayerKind.BLACKANDWHITE || LayerKind.VIBRANCE)) {
        alert("Wähle eine Pixel-Ebene aus! - Abbruch");
        return;}
    else {
        doc = app.activeDocument}
}
function translate () {
    // FARBEN =================================================================================== //
    keine = "None"
    rot = "Rd  "
    orange = "Orng"
    gelb = "Ylw "
    gruen = "Grn "
    blau = "Bl  "
    violett = "Vlt "
    grau = "Gry "

    // BLENDMODI ================================================================================ //
    normal = "Nrml"                         // NORMAL          Normal
    sprenkeln = "Dslv"                      // DISSOLVE        Sprenkeln
    //--------------------------------------------------------------------------------------------//
    abdunkeln = "Drkn"                      // DARKEN          Abdunkeln
    multiplizieren = "Mltp"                 // MULTIPLY        Multiplizieren
    farbig_nachbelichten = "CBrn"           // COLORBURN       Farbig nachbelichten
    linear_nachbelichten = "linearBurn"     // LINEARBURN      Linear nachbelichten
    dunklere_farbe = "darkerColor"
    //--------------------------------------------------------------------------------------------//
    aufhellen = "Lghn"                      // LIGHTEN         Aufhellen
    negativ_multiplizieren = "Scrn"         // SCREEN          Negativ multiplizieren
    farbig_abwedeln = "CDdg"                // COLORDODGE      Farbig abwedeln
    linear_abwedeln = "linearDodge"         // LINEARDODGE     Linear abwedeln
    linear_abwedeln = "lighterColor"        // hellere Farbe
    //--------------------------------------------------------------------------------------------//
    ineinanderkopieren = "Ovrl"             // OVERLAY         Ineinanderkopieren
    weiches_licht = "SftL"                  // SOFTLIGHT       Weiches Licht
    hartes_licht = "HrdL"                   // HARDLIGHT       Hartes Licht
    strahlendes_licht = "vividLight"        // VIVIDLIGHT      Strahlendes Licht
    lineares_licht = "linearLight"          // LINEARLIGHT     Lineares Licht
    lichtpunkte = "pinLight"                // PINLIGHT        Lichtpunkte
    hart_mischen = "hardMix"                // HARDMIX         Hart mischen
    //--------------------------------------------------------------------------------------------//
    differenz = "Dfrn"                      // DIFFERENCE      Differenz
    ausschluss = "Xclu"                     // EXCLUSION       Ausschluss
    subtrahieren = "blendSubtraction"       // SUBTRACT        Subtrahieren
    dividieren = "blendDivide"              // DIVIDE          Dividieren
    //--------------------------------------------------------------------------------------------//
    farbton = "H   "                        // HUE             Farbton
    sättigung = "Strt"                      // SATURATION      Sättigung
    farbe = "Clr "                          // COLORBLEND      Farbe
    luminanz = "Lmns"                       // LUMINOSITY      Luminanz

}
function gray2rgb (){
    if (activeDocument.mode == DocumentMode.GRAYSCALE)  {
        app.activeDocument.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false)
    }
}
function cmyk2rgb (){
    if (activeDocument.mode == DocumentMode.CMYK)  {
        app.activeDocument.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false)
    }
}


function nameOriginal (_nameLayer) {
    var idnewPlacedLayer = stringIDToTypeID( "newPlacedLayer" )
    executeAction( idnewPlacedLayer, undefined, DialogModes.NO )
    doc.activeLayer.name = _nameLayer    
}
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
function AutoTon_long (_nameLayer, _color) {
var idMk = charIDToTypeID( "Mk  " );
    var desc253 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref205 = new ActionReference();
        var idAdjL = charIDToTypeID( "AdjL" );
        ref205.putClass( idAdjL );
    desc253.putReference( idnull, ref205 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc254 = new ActionDescriptor();
        var idNm = charIDToTypeID( "Nm  " );
        desc254.putString( idNm, _nameLayer );
        var idClr = charIDToTypeID( "Clr " );
        var idClr = charIDToTypeID( "Clr " );
        var idGry = charIDToTypeID( _color );
        desc254.putEnumerated( idClr, idClr, idGry );
        var idType = charIDToTypeID( "Type" );
            var desc255 = new ActionDescriptor();
            var idpresetKind = stringIDToTypeID( "presetKind" );
            var idpresetKindType = stringIDToTypeID( "presetKindType" );
            var idpresetKindDefault = stringIDToTypeID( "presetKindDefault" );
            desc255.putEnumerated( idpresetKind, idpresetKindType, idpresetKindDefault );
            
            var idAdjs = charIDToTypeID( "Adjs" );
                var list82 = new ActionList();
                    var desc191 = new ActionDescriptor();
                    var idChnl = charIDToTypeID( "Chnl" );
                        var ref157 = new ActionReference();
                        var idChnl = charIDToTypeID( "Chnl" );
                        var idChnl = charIDToTypeID( "Chnl" );
                        var idCmps = charIDToTypeID( "Cmps" );
                        ref157.putEnumerated( idChnl, idChnl, idCmps );
                    desc191.putReference( idChnl, ref157 );
                    var idAuto = charIDToTypeID( "Auto" );
                    desc191.putBoolean( idAuto, true );
                var idLvlA = charIDToTypeID( "LvlA" );
                list82.putObject( idLvlA, desc191 );
            desc255.putList( idAdjs, list82 );
            
        var idLvls = charIDToTypeID( "Lvls" );
        desc254.putObject( idType, idLvls, desc255 );
    var idAdjL = charIDToTypeID( "AdjL" );
    desc253.putObject( idUsng, idAdjL, desc254 );
executeAction( idMk, desc253, DialogModes.NO );
}

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
    }


function simpleDodgeBurn(_nameLayer, _mode, _color) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    var desc57 = new ActionDescriptor();
        var ref49 = new ActionReference();
        ref49.putClass( cTID('Lyr ') );
    desc57.putReference( cTID('null'), ref49 );
        var desc58 = new ActionDescriptor();
        desc58.putString( cTID('Nm  '), _nameLayer );
        desc58.putEnumerated( cTID('Md  '), cTID('BlnM'), cTID(_mode) );
        desc58.putBoolean( cTID('FlNt'), true );
        desc58.putEnumerated( cTID('Clr '), cTID('Clr '), cTID(_color) );
    desc57.putObject( cTID('Usng'), cTID('Lyr '), desc58 );
    executeAction( cTID('Mk  '), desc57, DialogModes.NO );
};
function neutralizerDodgeBurn(_nameLayer1, _mode1, _color1, _nameLayer2, _mode2, _color2) {
  function cTID(s) { return app.charIDToTypeID(s); };
  function sTID(s) { return app.stringIDToTypeID(s); };

    // Black-White Layer set to luminace with no influence
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

    deleteMask()

    // midtone Gray set to overlay
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

function deleteMask(){
    function cTID(s) { return app.charIDToTypeID(s); };
    function sTID(s) { return app.stringIDToTypeID(s); };
    var d=new ActionDescriptor();
    var r=new ActionReference();
    r.putEnumerated(cTID('Chnl'),cTID('Ordn'),cTID('Trgt'));
    d.putReference(cTID('null'),r);
    executeAction(cTID('Dlt '),d,DialogModes.NO);
}
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
    function cTID(s) {return app.charIDToTypeID(s);};
    function sTID(s) {return app.stringIDToTypeID(s);};

    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), _nameLayer);
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID(_mode));
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID(_color));
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault'));
    desc3.putBoolean(cTID('Clrz'), false);
    desc2.putObject(cTID('Type'), cTID('HStr'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, DialogModes.NO);
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

    // weisse Füllebene
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

    // in den Hintergrund schieben
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Back'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('move'), desc1, DialogModes.NO);

    // Maske auswählen
    var desc130 = new ActionDescriptor();
    var ref75 = new ActionReference();
    ref75.putEnumerated( cTID('Chnl'), cTID('Chnl'), cTID('Msk ') );
    desc130.putReference( cTID('null'), ref75 );
    desc130.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc130, DialogModes.NO );

    // Maske löschen
    var desc131 = new ActionDescriptor();
    var ref76 = new ActionReference();
    ref76.putEnumerated( cTID('Chnl'), cTID('Ordn'), cTID('Trgt') );
    desc131.putReference( cTID('null'), ref76 );
    executeAction( cTID('Dlt '), desc131, DialogModes.NO );

    // zur darüber liegenden Ebene wechseln
    var desc142 = new ActionDescriptor();
    var ref88 = new ActionReference();
    ref88.putEnumerated( cTID('Lyr '), cTID('Ordn'), cTID('Frwr') );
    desc142.putReference( cTID('null'), ref88 );
    desc142.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc142, DialogModes.NO );
};

function ansicht() {
    function cTID(s) { return app.charIDToTypeID(s); };
    function sTID(s) { return app.stringIDToTypeID(s); };

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
    
    /* Ebene "Gradation neutral" auswählen */
    var desc3 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putName( cTID('Lyr '), "Gradation neutral" );
    desc3.putReference( cTID('null'), ref3 );
    desc3.putBoolean( cTID('MkVs'), false );
    executeAction( cTID('slct'), desc3, DialogModes.NO );

};
