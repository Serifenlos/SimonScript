$.evalFile("/Users/simon/Library/Application\ Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx");

// include "../../build/A__psScripts/functions/basic.jsx";
// include "../../build/A__psScripts/functions/pref.jsx";
// include "../../build/A__psScripts/functions/utils.jsx";
// include "../../build/A__psScripts/functions/LUT-dodge.jsx";
// include "../../build/A__psScripts/functions/LUT-burn.jsx";
// include "../../build/A__psScripts/functions/dialog.jsx";
// include "../../build/A__psScripts/functions/ready.jsx";
// include "../../build/A__psScripts/functions/view.jsx";
// include "../../build/A__psScripts/functions/layer.jsx";
// include "../../build/A__psScripts/functions/save.jsx";
// include "../../build/A__psScripts/functions/loopFiles.jsx";
// include "../../build/A__psScripts/functions/meta.jsx";

//include "/Users/simon/Arbeit/__temp/json2.js";


//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/selection.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/channel.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/neural_depthmap.jsx";









//Command Option Shift E
// function mergeVisible() {
//     var idmergeVisible = stringIDToTypeID("mergeVisible");
//     var desc4 = new ActionDescriptor();
//     var idduplicate = stringIDToTypeID("duplicate");
//     desc4.putBoolean(idduplicate, true);
//     executeAction(idmergeVisible, desc4, DialogModes.NO);
// }




// function mergeVisible(duplicate) {
//     var d = new ActionDescriptor();
//     d.putBoolean(s2t("duplicate"), duplicate);
//     executeAction(s2t("mergeVisible"), d, DialogModes.NO);
// }






// doc.suspendHistory("TiefenMaske Teil1", "tiefenmakse_part1(true)");

// mergeVisible(true);
// run(false);

function tiefenmakse_part1(_merge) {
    var startIDXs = layer_selectedIDX_get();

    if (_merge || layer_selectedIDX_get().length > 1) {
        if (_merge) {
            layer_mergeVisible(_merge);
        } else {
            layer_copyLayers(); //Ebenen kopieren (Apfel J)
            layer_mergeLayers(); //auf eine Ebene reduzieren (Apfel E)
        }

        nameLayer("helper__depthMask_image");

        // move to TOP
        var i = hasBackground() ? 0 : 1;
        while (layer_checkExistence(i)) {
            i++;
        };
        moveLayer("helper__depthMask_image", parseInt(i - 1), "up");
        gotoLayer("helper__depthMask_image");

    } else {
        if (layer_checkExistence(layer_getIDXbyString("Original")[0])) {
            // alert("Ori existiert")
            gotoLayer("Original");
        } else {
            gotoLayer(layer_selectedIDX_get()[layer_selectedIDX_get().length - 1])
        }

        while (doc.activeLayer.kind != LayerKind.NORMAL) {
            gotoLayer(getActiveLayerIndex() - 1)
        };

        if (doc.activeLayer.kind != LayerKind.SmartObject) {
            executeAction(sTID('copyToLayer'), undefined, DialogModes.NO);
            nameLayer("helper__depthMask_image");
        }
    }
}


// TODO in die functions
// Apfel + Alt + 2
// function select_luminance() {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     var r2 = new ActionReference();

//     r.putProperty(s2t("channel"), s2t("selection"));
//     d.putReference(s2t("null"), r);
//     r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
//     d.putReference(s2t("to"), r2);
//     executeAction(s2t("set"), d, DialogModes.NO);
// }

// function layer_delete() {
//     var d = new ActionDescriptor();
//     // var l = new ActionList();
//     var r = new ActionReference();

//     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
//     d.putReference(s2t("null"), r);
//     // l.putInteger(20);
//     // d.putList(s2t("layerID"), l);
//     executeAction(s2t("delete"), d, DialogModes.NO);
// }







// alert("alert vom test_dev")
// nameLayer("layer__depthMask_map");
// select_luminance();

// layer_delete();
// gotoLayer("helper__depthMask_image");
// layer_delete();
// createGroup("Tiefe", "passThrough", "none", 100, f); 

// maskFromSelection();


// moveLayer("Tiefe", "Dodge & Burn △◊▽", "up"); 

// alert(doc.activeLayer.id);




// alert(layer_selectedID_get());

// TODO bunt und unbunt varibale machen // in die function übernehmen 

//*************************************
//*************************************


// select_nextLayer('down');
// select_nextLayer_simple('down', f);
// select_motiv();

// doc.suspendHistory("Auswahl Bunt", "select_saturation('bunt', 'lighten', 'merged', 'folder')");





// function select_saturation(_kind, _calculation, _source, _get) {
//     var startIDXs = layer_selectedIDX_get();
//     cancel = false;

//     selection_loop(function() {channel_setSaturation(_source, _calculation)});

//     if (!cancel) {
//         if (_get == "selection") {
//             layer_selectedIDX_set(startIDXs);
//             channel2selection("saturation");
//             if (_kind == "unbunt") {
//                 select_invert();
//             }
//             channel_delete("saturation");
//         } else {
//             gotoLayer(startIDXs[startIDXs.length - 1])
//             channel2mask("saturation", _kind);
//             if (_kind == "unbunt") {
//                 gotoMask();
//                 invert();
//                 gotoFill();
//             }
//             channel_delete("saturation");
//         }
//     }
// }




// _kind = 'bunt' || 'unbunt'
// _calulation = 'lighten' || 'screen' || …
// _source = 'merge' || 'LayerName' || ‘this‘
// _get = 'selection' || 'folder'

// channel_setSaturation_check('merge', 'lighten');
// kanalberechnung("red", f, "grain", f, 'merge', "difference", "1", "RGB");

function channel_setSaturation_check(_source, _calculation) {

    var calc_1 = "difference";
    // var _calculation = "lighten";
    // var _calculation = "screen";

    // channel_select("RGB", false);
    kanalberechnung("red", f, "grain", f, _source, calc_1, "1", "RGB");

    kanalberechnung("red", f, "blue", f, _source, calc_1, "2", "RGB");
    kanalberechnung("1", f, "2", f, "this", _calculation, "R", "RGB");
    channel_delete("1");
    channel_delete("2");

    kanalberechnung("grain", f, "red", f, _source, calc_1, "1", "RGB");
    kanalberechnung("grain", f, "blue", f, _source, calc_1, "2", "RGB");
    kanalberechnung("1", f, "2", f, "this", _calculation, "G", "RGB");
    channel_delete("1");
    channel_delete("2");

    kanalberechnung("blue", f, "red", f, _source, calc_1, "1", "RGB");
    kanalberechnung("blue", f, "grain", f, _source, calc_1, "2", "RGB");
    kanalberechnung("1", f, "2", f, "this", _calculation, "B", "RGB");
    channel_delete("1");
    channel_delete("2");

    kanalberechnung("R", f, "G", f, "this", _calculation, "RG", "RGB");
    kanalberechnung("RG", f, "B", f, "this", _calculation, "saturation", "RGB");

    // kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
    // kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");

    channel_delete("R");
    channel_delete("G");
    channel_delete("B");
    channel_delete("RG");
}




// _makeVisible = true -> klappt zugeklappte Ordner auf und wartet dort rein
// function select_nextLayer_simple(_direction, _makeVisible) {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();

//     var __direction;
//     if (_direction == 'up' || _direction == 'above') {
//         __direction = s2t("forwardEnum");
//     } else if (_direction == 'down' || _direction == 'below') {
//         __direction = s2t("backwardEnum");
//     }

//     r.putEnumerated(s2t("layer"), s2t("ordinal"), __direction);
//     d.putReference(s2t("null"), r);
//     _makeVisible = (_makeVisible == undefined) ? _makeVisible = false : _makeVisible;
//     d.putBoolean(s2t("makeVisible"), _makeVisible);
//     executeAction(s2t("select"), d, DialogModes.NO);
// }


//*************************************
//*************************************
//*************************************


select_Farbbereich("outOfGamut"); // outOfGamut
// select_Farbbereich("radius"); // red



function select_Farbbereich__helper() {
    // ======================================================= out of Gamut
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc2 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idoutOfGamut = stringIDToTypeID("outOfGamut");
    desc2.putEnumerated(idcolors, idcolors, idoutOfGamut);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc2.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc2, DialogModes.NO);

    // ======================================================= red
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc4 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idradius = stringIDToTypeID("radius");
    desc4.putEnumerated(idcolors, idcolors, idradius);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc4.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc4, DialogModes.NO);



    // ======================================================= yellow
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc8 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idyellows = stringIDToTypeID("yellows");
    desc8.putEnumerated(idcolors, idcolors, idyellows);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc8.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc8, DialogModes.NO);

    // ======================================================= green
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc10 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idgraininess = stringIDToTypeID("graininess");
    desc10.putEnumerated(idcolors, idcolors, idgraininess);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc10.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc10, DialogModes.NO);


    // ======================================================= cyan
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc12 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idcyans = stringIDToTypeID("cyans");
    desc12.putEnumerated(idcolors, idcolors, idcyans);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc12.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc12, DialogModes.NO);



    // ======================================================= blue
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc14 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idblues = stringIDToTypeID("blues");
    desc14.putEnumerated(idcolors, idcolors, idblues);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc14.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc14, DialogModes.NO);



    // ======================================================= magenta
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc18 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idmagenta = stringIDToTypeID("magenta");
    desc18.putEnumerated(idcolors, idcolors, idmagenta);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc18.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc18, DialogModes.NO);





    // ======================================================= hightlights
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc20 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idhighlights = stringIDToTypeID("highlights");
    desc20.putEnumerated(idcolors, idcolors, idhighlights);
    var idhighlightsFuzziness = stringIDToTypeID("highlightsFuzziness");
    desc20.putInteger(idhighlightsFuzziness, 20);
    var idhighlightsLowerLimit = stringIDToTypeID("highlightsLowerLimit");
    desc20.putInteger(idhighlightsLowerLimit, 190);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc20.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc20, DialogModes.NO);




    // ======================================================= midtones
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc24 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idmidtones = stringIDToTypeID("midtones");
    desc24.putEnumerated(idcolors, idcolors, idmidtones);
    var idmidtonesFuzziness = stringIDToTypeID("midtonesFuzziness");
    desc24.putInteger(idmidtonesFuzziness, 40);
    var idmidtonesLowerLimit = stringIDToTypeID("midtonesLowerLimit");
    desc24.putInteger(idmidtonesLowerLimit, 105);
    var idmidtonesUpperLimit = stringIDToTypeID("midtonesUpperLimit");
    desc24.putInteger(idmidtonesUpperLimit, 150);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc24.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc24, DialogModes.NO);



    // ======================================================= shadow
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc28 = new ActionDescriptor();
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idshadows = stringIDToTypeID("shadows");
    desc28.putEnumerated(idcolors, idcolors, idshadows);
    var idshadowsFuzziness = stringIDToTypeID("shadowsFuzziness");
    desc28.putInteger(idshadowsFuzziness, 20);
    var idshadowsUpperLimit = stringIDToTypeID("shadowsUpperLimit");
    desc28.putInteger(idshadowsUpperLimit, 65);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc28.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc28, DialogModes.NO);



    // ======================================================= Haut
    var idcolorRange = stringIDToTypeID("colorRange");
    var desc32 = new ActionDescriptor();
    var idfuzziness = stringIDToTypeID("fuzziness");
    desc32.putInteger(idfuzziness, 39);
    var idcolors = stringIDToTypeID("colors");
    var idcolors = stringIDToTypeID("colors");
    var idskinTone = stringIDToTypeID("skinTone");
    desc32.putEnumerated(idcolors, idcolors, idskinTone);
    var idcolorModel = stringIDToTypeID("colorModel");
    desc32.putInteger(idcolorModel, 0);
    executeAction(idcolorRange, desc32, DialogModes.NO);

}








// alert(app.colorSettings)