//include "/Users/simon/Arbeit/__temp/json2.js";
//@include "./assets/json2.js";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview.jsx";
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
var a=hasBackground()?0:1;layer_checkExistence(a);)a++;moveLayer("helper__depthMask_image",parseInt(a-1),"up"),gotoLayer("helper__depthMask_image")}else{for(layer_checkExistence(layer_getIDXbyString("Original")[0])?
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
function quick_farbbereich(e,a,r,n,t){selection_deselect(),gotoFill(),select_Farbbereich(e),
// createLayer(_farbe, "curves", "normal", "gray", 100, "xx", f,f);
createColorLayer(a,"multiply","none",0,"xx",r,n,t),gotoFill()}
// quick_farbbereich("radius", "red", 255, 0, 0)
// quick_farbbereich("yellows", "yellow", 255,255,0)
// quick_farbbereich("graininess", "green", 0,255,0)
// quick_farbbereich("cyans", "cyan", 0,255,255)
// quick_farbbereich("blues", "blue", 0,0,255)
// quick_farbbereich("magenta", "magenta", 255,0,255)
// channel_setSaturationXX('merged', 'lighten')
function channel_setSaturationXX(e,a){var r="difference";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",f,"grain",f,e,r,"rg","RGB"),kanalberechnung("red",f,"blue",f,e,r,"rb","RGB"),kanalberechnung("rg",f,"rb",f,"this",a,"R","RGB"),
// channel_delete("rg");
// channel_delete("rb");
// kanalberechnung("grain", f, "red", f, _source, calc_1, "gr", "RGB");
kanalberechnung("grain",f,"blue",f,e,r,"gb","RGB"),kanalberechnung("rg",f,"gb",f,"this",a,"G","RGB"),
// channel_delete("gr");
// channel_delete("gb");
// kanalberechnung("blue", f, "red", f, _source, calc_1, "br", "RGB");
// kanalberechnung("blue", f, "grain", f, _source, calc_1, "bg", "RGB");
kanalberechnung("rb",f,"gb",f,"this",a,"B","RGB"),
// channel_delete("br");
// channel_delete("bg");
kanalberechnung("R",f,"G",f,"this",a,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",a,"saturation","RGB")}
// channel_setSaturation_2('merged', 'lighten')
// channel_setSaturation_2('merged', 'multiply')
function channel_setSaturation_2(e,a){var r="subtract";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",t,"grain",t,e,r,"rg","RGB"),kanalberechnung("red",t,"blue",t,e,r,"rb","RGB"),kanalberechnung("rg",f,"rb",f,"this",a,"R","RGB"),
// channel_delete("rg");
// channel_delete("rb");
kanalberechnung("grain",t,"red",t,e,r,"gr","RGB"),kanalberechnung("grain",t,"blue",t,e,r,"gb","RGB"),kanalberechnung("gr",f,"gb",f,"this",a,"G","RGB"),
// channel_delete("gr");
// channel_delete("gb");
kanalberechnung("blue",t,"red",t,e,r,"br","RGB"),kanalberechnung("blue",t,"grain",t,e,r,"bg","RGB"),kanalberechnung("br",f,"bg",f,"this",a,"B","RGB"),
// channel_delete("br");
// channel_delete("bg");
kanalberechnung("R",f,"G",f,"this",a,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",a,"saturation","RGB")}
// channel_setSaturation_3('merged', 'darken');
// function channel_setSaturation_singleColors(_source, _calculation) {
//     var calc_1 = "subtract";
//     // channel_select("RGB", false);
//     kanalberechnung("red", t, "grain", t, _source, calc_1, "rg", "RGB");
//     kanalberechnung("red", t, "blue", t, _source, calc_1, "rb", "RGB");
//     kanalberechnung("grain", t, "red", t, _source, calc_1, "gr", "RGB");
//     kanalberechnung("grain", t, "blue", t, _source, calc_1, "gb", "RGB");
//     kanalberechnung("blue", t, "red", t, _source, calc_1, "br", "RGB");
//     kanalberechnung("blue", t, "grain", t, _source, calc_1, "bg", "RGB");
//     kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
//     kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
//     kanalberechnung("gb", f, "gr", f, "this", _calculation, "G", "RGB");
//     kanalberechnung("gb", f, "gr", f, "this", calc_1, "C", "RGB");
//     kanalberechnung("br", f, "bg", f, "this", calc_1, "M", "RGB");
//     kanalberechnung("rg", f, "rb", f, "this", calc_1, "Y", "RGB");
//     kanalberechnung("R", f, "Y", f, "this", _calculation, "RY", "RGB");
//     kanalberechnung("Y", f, "G", f, "this", _calculation, "YG", "RGB");
//     kanalberechnung("G", f, "C", f, "this", _calculation, "GC", "RGB");
//     kanalberechnung("C", f, "B", f, "this", _calculation, "CB", "RGB");
//     kanalberechnung("B", f, "M", f, "this", _calculation, "BM", "RGB");
// }
// function mask_setSaturation_singleColors(__foldername) {
//     function quick_farbfelder(_channel_name, _r, _g, _b) {
//         selection_deselect();
//         gotoFill();
//         channel2selection(_channel_name);
//         createColorLayer(_channel_name, "multiply", "none", 100, "xx", _r, _g, _b);
//         gotoFill();
//     }
//     channel_setSaturation_singleColors('merged', 'darken');
//     createGroup(__foldername, "passThrough", "none", 100, f);
//     createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
//     quick_farbfelder("M", 255, 0, 255);
//     quick_farbfelder("BM", 127, 0, 255);
//     quick_farbfelder("B", 0, 0, 255);
//     quick_farbfelder("CB", 0, 127, 255);
//     quick_farbfelder("C", 0, 255, 255);
//     quick_farbfelder("GC", 0, 255, 127);
//     quick_farbfelder("G", 0, 255, 0);
//     quick_farbfelder("YG", 127, 255, 0);
//     quick_farbfelder("Y", 255, 255, 0);
//     quick_farbfelder("RY", 255, 127, 0);
//     quick_farbfelder("R", 255, 0, 0);
//     channel_delete("rg");
//     channel_delete("rb");
//     channel_delete("gr");
//     channel_delete("gb");
//     channel_delete("br");
//     channel_delete("bg");
//     channel_delete("R");
//     channel_delete("G");
//     channel_delete("B");
//     channel_delete("C");
//     channel_delete("M");
//     channel_delete("Y");
//     channel_delete("RY");
//     channel_delete("YG");
//     channel_delete("GC");
//     channel_delete("CB");
//     channel_delete("BM");
// }
// doc.suspendHistory("mask_buntFarben", "mask_buntFarben()");
// doc.suspendHistory("[helper] Buntfarben", "mask_setSaturation_singleColors_create('[helper] Buntfarben')");
// quick_farbbereich("radius", "red", 255, 0, 0)
// quick_farbbereich("yellows", "yellow", 255,255,0)
// quick_farbbereich("graininess", "green", 0,255,0)
// quick_farbbereich("cyans", "cyan", 0,255,255)
// quick_farbbereich("blues", "blue", 0,0,255)
// quick_farbbereich("magenta", "magenta", 255,0,255)
// function mask_setSaturation_singleColors_create(_foldername) {
//     if (!layer_checkExistence(_foldername)) {
//         var startLayer = layer_selectedIDX_get();
//         mask_setSaturation_singleColors(_foldername);
//         gotoLayer(_foldername);
//         toogleOpenCloseSet();
//         hide(_foldername);
//         if (layer_checkExistence("nachher")) {
//             moveLayer(_foldername, "nachher", "up");
//             gotoLayer(_foldername);
//             moveLayer3("down", 1);
//         } else {
//             // move to TOP
//             var i = hasBackground() ? 0 : 1;
//             while (layer_checkExistence(i)) {
//                 i++;
//             };
//             moveLayer(_foldername, parseInt(i - 1), "up");
//         }
//         layer_selectedIDX_set(startLayer);
//     } else {
//         layer_delete(_foldername);
//     }
// }
// function editXMP_2(_namespace, _prefix) {
//     if (ExternalObject.AdobeXMPScript == undefined) {
//         ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
//     }
//     xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
//     customNamespace2 = _namespace ? customNamespace2 : "http://ns.simonadrian.de/1.0";
//     customPrefix2 = _prefix ? customPrefix2 : "simonscript:";
//     XMPMeta.registerNamespace(customNamespace2, customPrefix2);
// }
// function setMeta_2(_key, _value) {
//     editXMP_2();
//     // deleteProperty
//     if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
//         xmpMeta.deleteProperty(customNamespace2, _key);
//     }
//     // setProperty
//     xmpMeta.setProperty(customNamespace2, _key, _value);
//     // Fix the xmpMeta
//     app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
// }
// function getMeta_2(_key) {
//     editXMP_2();
//     if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
//         var value = xmpMeta.getProperty(customNamespace2, _key);
//     }
//     if (typeof value !== 'undefined') {
//         return value;
//     }
// }
// function delMeta_2(_key) {
//     editXMP_2();
//     // deleteProperty
//     if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
//         xmpMeta.deleteProperty(customNamespace2, _key);
//     }
//     // Fix the xmpMeta
//     app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
// }
function run(){setMeta_2("startID",layer_selectedID_get()),createLayer("AutoTonwert","levels","normal","gray",80,"black",f,f),layer_selectedID_set(getMeta_2("startID")),delMeta_2("startID")}
// layer_selectedID_set(3)
// alert("check: " + layer_selectedID_get())
function gotoLayer2(e){var a=new ActionDescriptor,r=new ActionReference;r.putIdentifier(s2t("layer"),e),
// if (typeof _input == "number") {
//     r.putIndex(s2t('layer'), _input);
// } else if (typeof _input == "string") {
//     r.putName(s2t('layer'), _input);
// }
a.putReference(sTID("null"),r),a.putBoolean(sTID("makeVisible"),!1),executeAction(sTID("select"),a,DialogModes.NO)}
// function layer_selectedID_get() {
//     var selectedLayers = [];
//     var ref = new ActionReference();
//     ref.putEnumerated(stringIDToTypeID('document'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'));
//     var desc = executeActionGet(ref);
//     if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
//         desc = desc.getList(stringIDToTypeID('targetLayers'));
//         for (var i = 0, c = desc.count; i < c; i++) {
//             ref2 = new ActionReference();
//             hasBackground() ? ref2.putIndex(s2t('layer'), desc.getReference(i).getIndex()) : ref2.putIndex(s2t('layer'), desc.getReference(i).getIndex() + 1);
//             desc2 = executeActionGet(ref2);
//             selectedLayers.push(desc2.getInteger(stringIDToTypeID("layerID")));
//         }
//     }
//     return selectedLayers;
// };
// function layer_selectedID_set(_array) {
//     selectLayers("selectNoLayers");
//     try {
//         var _array = arrayCorrect(_array)
//     } catch (e) {}
//     try {
//         if (_array.length > 0) {
//             for (var j = 0; j < _array.length; j++) {
//                 selectLayerByID(_array[j], t);
//             }
//         }
//     } catch (e) {
//         alert("error layer_selectedID_set: " + e)
//     }
// }
function writeln(e){return $.writeln(e+": "+e)}
// function selectLayerByID(_id, _add) {
//     try {
//         var d = new ActionDescriptor();
//         var r = new ActionReference();
//         if (_add == "remove" || !_add) {
//             var addX = "removeFromSelection"
//         } else {
//             var addX = "addToSelection"
//         }
//         r.putIdentifier(s2t("layer"), _id)
//         d.putReference(s2t("null"), r);
//         d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
//         d.putBoolean(s2t("makeVisible"), false);
//         executeAction(s2t("select"), d, DialogModes.NO);
//     } catch (e) {
//         // alert("error selectLayerByID: " + e)
//     }
// }
// function arrayCorrect(_array) {
//     if (typeof Array.isArray != "function") {
//         Array.isArray = function(arr) {
//             return arr != undefined && arr.constructor == Array
//         }
//     }
//     if (!Array.isArray(_array)) {
//         var arr2str = _array.toString();
//         var _array = [];
//         var _array = arr2str.split(',');
//     }
//     return _array;
// }
$.evalFile("/Users/simon/Library/Application Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx"),run();