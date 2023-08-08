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
var n=hasBackground()?0:1;layer_checkExistence(n);)n++;moveLayer("helper__depthMask_image",parseInt(n-1),"up"),gotoLayer("helper__depthMask_image")}else{for(layer_checkExistence(layer_getIDXbyString("Original")[0])?
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
function channel_setSaturation_check(e,n){var r="difference";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",f,"grain",f,e,r,"1","RGB"),kanalberechnung("red",f,"blue",f,e,r,"2","RGB"),kanalberechnung("1",f,"2",f,"this",n,"R","RGB"),channel_delete("1"),channel_delete("2"),kanalberechnung("grain",f,"red",f,e,r,"1","RGB"),kanalberechnung("grain",f,"blue",f,e,r,"2","RGB"),kanalberechnung("1",f,"2",f,"this",n,"G","RGB"),channel_delete("1"),channel_delete("2"),kanalberechnung("blue",f,"red",f,e,r,"1","RGB"),kanalberechnung("blue",f,"grain",f,e,r,"2","RGB"),kanalberechnung("1",f,"2",f,"this",n,"B","RGB"),channel_delete("1"),channel_delete("2"),kanalberechnung("R",f,"G",f,"this",n,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",n,"saturation","RGB"),
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
// select_Farbbereich("outOfGamut"); // outOfGamut
// select_Farbbereich("radius"); // red
function select_Farbbereich__helper(){
// ======================================================= out of Gamut
var e=stringIDToTypeID("colorRange"),n=new ActionDescriptor,r=stringIDToTypeID("colors"),t=(r=stringIDToTypeID("colors"),stringIDToTypeID("outOfGamut"));n.putEnumerated(r,r,t);var o=stringIDToTypeID("colorModel");n.putInteger(o,0),executeAction(e,n,DialogModes.NO);
// ======================================================= red
e=stringIDToTypeID("colorRange");var a=new ActionDescriptor,i=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("radius"));a.putEnumerated(r,r,i);o=stringIDToTypeID("colorModel");a.putInteger(o,0),executeAction(e,a,DialogModes.NO);
// ======================================================= yellow
e=stringIDToTypeID("colorRange");var l=new ActionDescriptor,g=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("yellows"));l.putEnumerated(r,r,g);o=stringIDToTypeID("colorModel");l.putInteger(o,0),executeAction(e,l,DialogModes.NO);
// ======================================================= green
e=stringIDToTypeID("colorRange");var c=new ActionDescriptor,s=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("graininess"));c.putEnumerated(r,r,s);o=stringIDToTypeID("colorModel");c.putInteger(o,0),executeAction(e,c,DialogModes.NO);
// ======================================================= cyan
e=stringIDToTypeID("colorRange");var u=new ActionDescriptor,D=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("cyans"));u.putEnumerated(r,r,D);o=stringIDToTypeID("colorModel");u.putInteger(o,0),executeAction(e,u,DialogModes.NO);
// ======================================================= blue
e=stringIDToTypeID("colorRange");var I=new ActionDescriptor,p=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("blues"));I.putEnumerated(r,r,p);o=stringIDToTypeID("colorModel");I.putInteger(o,0),executeAction(e,I,DialogModes.NO);
// ======================================================= magenta
e=stringIDToTypeID("colorRange");var T=new ActionDescriptor,f=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("magenta"));T.putEnumerated(r,r,f);o=stringIDToTypeID("colorModel");T.putInteger(o,0),executeAction(e,T,DialogModes.NO);
// ======================================================= hightlights
e=stringIDToTypeID("colorRange");var h=new ActionDescriptor,b=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("highlights"));h.putEnumerated(r,r,b);var d=stringIDToTypeID("highlightsFuzziness");h.putInteger(d,20);var y=stringIDToTypeID("highlightsLowerLimit");h.putInteger(y,190);o=stringIDToTypeID("colorModel");h.putInteger(o,0),executeAction(e,h,DialogModes.NO);
// ======================================================= midtones
e=stringIDToTypeID("colorRange");var _=new ActionDescriptor,k=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("midtones"));_.putEnumerated(r,r,k);var R=stringIDToTypeID("midtonesFuzziness");_.putInteger(R,40);var G=stringIDToTypeID("midtonesLowerLimit");_.putInteger(G,105);var B=stringIDToTypeID("midtonesUpperLimit");_.putInteger(B,150);o=stringIDToTypeID("colorModel");_.putInteger(o,0),executeAction(e,_,DialogModes.NO);
// ======================================================= shadow
e=stringIDToTypeID("colorRange");var m=new ActionDescriptor,M=(r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors"),stringIDToTypeID("shadows"));m.putEnumerated(r,r,M);var v=stringIDToTypeID("shadowsFuzziness");m.putInteger(v,20);var A=stringIDToTypeID("shadowsUpperLimit");m.putInteger(A,65);o=stringIDToTypeID("colorModel");m.putInteger(o,0),executeAction(e,m,DialogModes.NO);
// ======================================================= Haut
e=stringIDToTypeID("colorRange");var L=new ActionDescriptor,w=stringIDToTypeID("fuzziness");L.putInteger(w,39);r=stringIDToTypeID("colors"),r=stringIDToTypeID("colors");var O=stringIDToTypeID("skinTone");L.putEnumerated(r,r,O);o=stringIDToTypeID("colorModel");L.putInteger(o,0),executeAction(e,L,DialogModes.NO)}
// function workingProfile_get(_modus) {
//     // _modus = RGB || CMYK || Gray || Spot
//     var r = new ActionReference();
//     r.putProperty(s2t("property"), s2t("colorSettings"));
//     r.putEnumerated(s2t("application"), s2t("ordinal"), s2t("targetEnum"));
//     return executeActionGet(r).getObjectValue(s2t("colorSettings")).getString(s2t("working" + _modus + ""));
// };
// function workingProfile_set(_modus, _profile) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var r = new ActionReference();
//     r.putProperty(s2t("property"), s2t("colorSettings"));
//     r.putEnumerated(s2t("application"), s2t("ordinal"), s2t("targetEnum"));
//     d.putReference(s2t("null"), r);
//     d2.putString(s2t("working" + _modus + ""), _profile);
//     d.putObject(s2t("to"), s2t("colorSettings"), d2);
//     try {
//         executeAction(s2t("set"), d, DialogModes.NO);
//     } catch (e) {
//         alert("kann Arbeitsfarbraum nicht ändern")
//     }
// }
// alert(workingProfile_get("Spot"));
// workingProfile_set("Spot", "Dot Gain 15%");
// alert(workingProfile_get("Spot"));
// function getMeta__Softproof() {
//     editXMP();
//     var proof_profil, proof_intent, proof_tk;
//     const softproof = [];
//     if (xmpMeta.doesPropertyExist(customNamespace, "proof_profil")) {
//         var proof_profil = xmpMeta.getProperty(customNamespace, "proof_profil");
//     }
//     if (xmpMeta.doesPropertyExist(customNamespace, "proof_intent")) {
//         var proof_intent = xmpMeta.getProperty(customNamespace, "proof_intent");
//     }
//     if (xmpMeta.doesPropertyExist(customNamespace, "proof_tk")) {
//         var proof_tk = xmpMeta.getProperty(customNamespace, "proof_tk");
//     }
//     softproof.push(proof_profil, proof_intent, proof_tk);
//     return softproof;
// }
// function compare_string(_string1, _string2) {
//     if(_string1 != _string2) {
//         return false;
//     } else {
//         return true;
//     }
// }
function select_outOfGamut__XX(){const e=getMeta_softproof()[0],n=n("CMYK");void 0!==e?(n!=e&&workingProfile_set("CMYK",e),select_Farbbereich("outOfGamut"),n!=e&&workingProfile_set("CMYK",n)):alert("kein Softproof eingestellt")}
// alert(workingProfile_get("CMYK"));
// alert(getMeta__Softproof_profile());
// workingProfile_set("CMYK", getMeta__Softproof_profile());
// alert(workingProfile_get("CMYK"));
//  workingProfile_set("RGB", "Dot Gain 15%");
// doc.suspendHistory("Mask2Image", "mask2image('Mask2Image')");
function select_outOfGamut(e,n){
// _get = 'Selection' || 'Folder'
var r=layer_selectedIDX_get();cancel=!1;const t=getMeta_softproof()[0],o=workingProfile_get("CMYK");void 0!==t?(o!=t&&workingProfile_set("CMYK",t),gotoFill(),selection_loop((function(){select_Farbbereich("outOfGamut")})),o!=t&&workingProfile_set("CMYK",o),cancel||("Selection"==n?layer_selectedIDX_set(r):(gotoLayer(r[r.length-1]),selection2mask(e)))):alert("kein Softproof eingestellt")}
// select_outOfGamut("outOfGamut", "Folder")
// mask_outOfGamut("outOfGamut", "Selection")
//*************************************
//*************************************
//*************************************
// outOfGamut outOfGamut
// radius red
// yellows yellow
// graininess green
// cyans cyan
// blues blue
// magenta magenta
function quick_farbbereich(e,n,r,t,o){selection_deselect(),gotoFill(),select_Farbbereich(e),
// createLayer(_farbe, "curves", "normal", "gray", 100, "xx", f,f);
createColorLayer(n,"multiply","none",0,"xx",r,t,o),gotoFill()}
// quick_farbbereich("radius", "red", 255, 0, 0)
// quick_farbbereich("yellows", "yellow", 255,255,0)
// quick_farbbereich("graininess", "green", 0,255,0)
// quick_farbbereich("cyans", "cyan", 0,255,255)
// quick_farbbereich("blues", "blue", 0,0,255)
// quick_farbbereich("magenta", "magenta", 255,0,255)
// channel_setSaturationXX('merged', 'lighten')
function channel_setSaturationXX(e,n){var r="difference";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",f,"grain",f,e,r,"rg","RGB"),kanalberechnung("red",f,"blue",f,e,r,"rb","RGB"),kanalberechnung("rg",f,"rb",f,"this",n,"R","RGB"),
// channel_delete("rg");
// channel_delete("rb");
// kanalberechnung("grain", f, "red", f, _source, calc_1, "gr", "RGB");
kanalberechnung("grain",f,"blue",f,e,r,"gb","RGB"),kanalberechnung("rg",f,"gb",f,"this",n,"G","RGB"),
// channel_delete("gr");
// channel_delete("gb");
// kanalberechnung("blue", f, "red", f, _source, calc_1, "br", "RGB");
// kanalberechnung("blue", f, "grain", f, _source, calc_1, "bg", "RGB");
kanalberechnung("rb",f,"gb",f,"this",n,"B","RGB"),
// channel_delete("br");
// channel_delete("bg");
kanalberechnung("R",f,"G",f,"this",n,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",n,"saturation","RGB")}
// channel_setSaturation_2('merged', 'lighten')
// channel_setSaturation_2('merged', 'multiply')
function channel_setSaturation_2(e,n){var r="subtract";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",t,"grain",t,e,r,"rg","RGB"),kanalberechnung("red",t,"blue",t,e,r,"rb","RGB"),kanalberechnung("rg",f,"rb",f,"this",n,"R","RGB"),
// channel_delete("rg");
// channel_delete("rb");
kanalberechnung("grain",t,"red",t,e,r,"gr","RGB"),kanalberechnung("grain",t,"blue",t,e,r,"gb","RGB"),kanalberechnung("gr",f,"gb",f,"this",n,"G","RGB"),
// channel_delete("gr");
// channel_delete("gb");
kanalberechnung("blue",t,"red",t,e,r,"br","RGB"),kanalberechnung("blue",t,"grain",t,e,r,"bg","RGB"),kanalberechnung("br",f,"bg",f,"this",n,"B","RGB"),
// channel_delete("br");
// channel_delete("bg");
kanalberechnung("R",f,"G",f,"this",n,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",n,"saturation","RGB")}function channel_setSaturation_3(e,n){var r="subtract";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",t,"grain",t,e,r,"rg","RGB"),kanalberechnung("red",t,"blue",t,e,r,"rb","RGB"),
// channel_delete("rg");
// channel_delete("rb");
kanalberechnung("grain",t,"red",t,e,r,"gr","RGB"),kanalberechnung("grain",t,"blue",t,e,r,"gb","RGB"),
// channel_delete("gr");
// channel_delete("gb");
kanalberechnung("blue",t,"red",t,e,r,"br","RGB"),kanalberechnung("blue",t,"grain",t,e,r,"bg","RGB"),kanalberechnung("rg",f,"rb",f,"this",n,"R","RGB"),kanalberechnung("br",f,"bg",f,"this",n,"B","RGB"),kanalberechnung("gb",f,"gr",f,"this",n,"G","RGB"),kanalberechnung("gb",f,"gr",f,"this",r,"C","RGB"),kanalberechnung("br",f,"bg",f,"this",r,"M","RGB"),kanalberechnung("rg",f,"rb",f,"this",r,"Y","RGB")}function quick_farbfelder(e,n,r,t){selection_deselect(),gotoFill(),channel2selection(e),
// createLayer(_farbe, "curves", "normal", "gray", 100, "xx", f,f);
createColorLayer(e,"multiply","none",0,"xx",n,r,t),gotoFill()}$.evalFile("/Users/simon/Library/Application Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx"),channel_setSaturation_3("merged","darken"),quick_farbfelder("R",255,0,0),quick_farbfelder("Y",255,255,0),quick_farbfelder("G",0,255,0),quick_farbfelder("C",0,255,255),quick_farbfelder("B",0,0,255),quick_farbfelder("M",255,0,255);
// quick_farbbereich("radius", "red", 255, 0, 0)
// quick_farbbereich("yellows", "yellow", 255,255,0)
// quick_farbbereich("graininess", "green", 0,255,0)
// quick_farbbereich("cyans", "cyan", 0,255,255)
// quick_farbbereich("blues", "blue", 0,0,255)
// quick_farbbereich("magenta", "magenta", 255,0,255)