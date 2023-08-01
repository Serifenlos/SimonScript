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
function tiefenmakse_part1(e){layer_selectedIDX_get();if(e||layer_selectedIDX_get().length>1){e?layer_mergeVisible(e):(layer_copyLayers(),//Ebenen kopieren (Apfel J)
layer_mergeLayers()),nameLayer("helper__depthMask_image");for(
// move to TOP
var o=hasBackground()?0:1;layer_checkExistence(o);)o++;moveLayer("helper__depthMask_image",parseInt(o-1),"up"),gotoLayer("helper__depthMask_image")}else{for(layer_checkExistence(layer_getIDXbyString("Original")[0])?
// alert("Ori existiert")
gotoLayer("Original"):gotoLayer(layer_selectedIDX_get()[layer_selectedIDX_get().length-1]);doc.activeLayer.kind!=LayerKind.NORMAL;)gotoLayer(getActiveLayerIndex()-1);doc.activeLayer.kind!=LayerKind.SmartObject&&(executeAction(sTID("copyToLayer"),void 0,DialogModes.NO),nameLayer("helper__depthMask_image"))}}
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
function channel_setSaturation_check(e,o){var r="difference";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",f,"grain",f,e,r,"1","RGB"),kanalberechnung("red",f,"blue",f,e,r,"2","RGB"),kanalberechnung("1",f,"2",f,"this",o,"R","RGB"),channel_delete("1"),channel_delete("2"),kanalberechnung("grain",f,"red",f,e,r,"1","RGB"),kanalberechnung("grain",f,"blue",f,e,r,"2","RGB"),kanalberechnung("1",f,"2",f,"this",o,"G","RGB"),channel_delete("1"),channel_delete("2"),kanalberechnung("blue",f,"red",f,e,r,"1","RGB"),kanalberechnung("blue",f,"grain",f,e,r,"2","RGB"),kanalberechnung("1",f,"2",f,"this",o,"B","RGB"),channel_delete("1"),channel_delete("2"),kanalberechnung("R",f,"G",f,"this",o,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",o,"saturation","RGB"),
// kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
// kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");
channel_delete("R"),channel_delete("G"),channel_delete("B"),channel_delete("RG")}
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
// outOfGamut
// select_Farbbereich("radius"); // red
function select_Farbbereich__helper(){
// ======================================================= out of Gamut
var e=stringIDToTypeID("colorRange"),o=new ActionDescriptor,r=stringIDToTypeID("colors"),t=(r=stringIDToTypeID("colors"),stringIDToTypeID("outOfGamut"));o.putEnumerated(r,r,t);var n=stringIDToTypeID("colorModel");o.putInteger(n,0),executeAction(e,o,DialogModes.NO);
// ======================================================= red
e=stringIDToTypeID("colorRange");var i=new ActionDescriptor,s=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("radius"));i.putEnumerated(r,r,s);n=stringIDToTypeID("colorModel");i.putInteger(n,0),executeAction(e,i,DialogModes.NO);
// ======================================================= yellow
e=stringIDToTypeID("colorRange");var a=new ActionDescriptor,D=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("yellows"));a.putEnumerated(r,r,D);n=stringIDToTypeID("colorModel");a.putInteger(n,0),executeAction(e,a,DialogModes.NO);
// ======================================================= green
e=stringIDToTypeID("colorRange");var g=new ActionDescriptor,I=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("graininess"));g.putEnumerated(r,r,I);n=stringIDToTypeID("colorModel");g.putInteger(n,0),executeAction(e,g,DialogModes.NO);
// ======================================================= cyan
e=stringIDToTypeID("colorRange");var c=new ActionDescriptor,l=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("cyans"));c.putEnumerated(r,r,l);n=stringIDToTypeID("colorModel");c.putInteger(n,0),executeAction(e,c,DialogModes.NO);
// ======================================================= blue
e=stringIDToTypeID("colorRange");var T=new ActionDescriptor,p=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("blues"));T.putEnumerated(r,r,p);n=stringIDToTypeID("colorModel");T.putInteger(n,0),executeAction(e,T,DialogModes.NO);
// ======================================================= magenta
e=stringIDToTypeID("colorRange");var y=new ActionDescriptor,u=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("magenta"));y.putEnumerated(r,r,u);n=stringIDToTypeID("colorModel");y.putInteger(n,0),executeAction(e,y,DialogModes.NO);
// ======================================================= hightlights
e=stringIDToTypeID("colorRange");var d=new ActionDescriptor,h=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("highlights"));d.putEnumerated(r,r,h);var _=stringIDToTypeID("highlightsFuzziness");d.putInteger(_,20);var m=stringIDToTypeID("highlightsLowerLimit");d.putInteger(m,190);n=stringIDToTypeID("colorModel");d.putInteger(n,0),executeAction(e,d,DialogModes.NO);
// ======================================================= midtones
e=stringIDToTypeID("colorRange");var f=new ActionDescriptor,v=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("midtones"));f.putEnumerated(r,r,v);var M=stringIDToTypeID("midtonesFuzziness");f.putInteger(M,40);var R=stringIDToTypeID("midtonesLowerLimit");f.putInteger(R,105);var A=stringIDToTypeID("midtonesUpperLimit");f.putInteger(A,150);n=stringIDToTypeID("colorModel");f.putInteger(n,0),executeAction(e,f,DialogModes.NO);
// ======================================================= shadow
e=stringIDToTypeID("colorRange");var b=new ActionDescriptor,k=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("shadows"));b.putEnumerated(r,r,k);var L=stringIDToTypeID("shadowsFuzziness");b.putInteger(L,20);var G=stringIDToTypeID("shadowsUpperLimit");b.putInteger(G,65);n=stringIDToTypeID("colorModel");b.putInteger(n,0),executeAction(e,b,DialogModes.NO);
// ======================================================= Haut
e=stringIDToTypeID("colorRange");var O=new ActionDescriptor,w=stringIDToTypeID("fuzziness");O.putInteger(w,39);r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors");var x=stringIDToTypeID("skinTone");O.putEnumerated(r,r,x);n=stringIDToTypeID("colorModel");O.putInteger(n,0),executeAction(e,O,DialogModes.NO)}
// alert(app.colorSettings)
$.evalFile("/Users/simon/Library/Application Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx"),select_Farbbereich("outOfGamut");