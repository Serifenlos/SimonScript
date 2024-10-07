///////// HIER /////////// AUSGECHALTET WEGEN DEM NEUES MACBOOK - und noch kein UXP
// $.evalFile("/Users/simon/Library/Application\ Support/Adobe/UXP/PluginsStorage/PHSP/22/Developer/2bcdb900/PluginData/alchemist-AM-Hack.jsx");
///////// HIER /////////
//include "/Users/simon/Arbeit/__temp/json2.js";
//@include "./assets/json2.js";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-maskPreview_v2.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/selection.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/channel.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/neural_depthmap.jsx";
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
var r=hasBackground()?0:1;layer_checkExistence(r);)r++;moveLayer("helper__depthMask_image",parseInt(r-1),"up"),gotoLayer("helper__depthMask_image")}else{for(layer_checkExistence(layer_getIDXbyString("Original")[0])?
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
function quick_farbbereich(e,r,a,t,n){selection_deselect(),gotoFill(),select_Farbbereich(e),
// createLayer(_farbe, "curves", "normal", "gray", 100, "xx", f,f);
createColorLayer(r,"multiply","none",0,"xx",a,t,n),gotoFill()}
// quick_farbbereich("radius", "red", 255, 0, 0)
// quick_farbbereich("yellows", "yellow", 255,255,0)
// quick_farbbereich("graininess", "green", 0,255,0)
// quick_farbbereich("cyans", "cyan", 0,255,255)
// quick_farbbereich("blues", "blue", 0,0,255)
// quick_farbbereich("magenta", "magenta", 255,0,255)
// channel_setSaturationXX('merged', 'lighten')
function channel_setSaturationXX(e,r){var a="difference";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",f,"grain",f,e,a,"rg","RGB"),kanalberechnung("red",f,"blue",f,e,a,"rb","RGB"),kanalberechnung("rg",f,"rb",f,"this",r,"R","RGB"),
// channel_delete("rg");
// channel_delete("rb");
// kanalberechnung("grain", f, "red", f, _source, calc_1, "gr", "RGB");
kanalberechnung("grain",f,"blue",f,e,a,"gb","RGB"),kanalberechnung("rg",f,"gb",f,"this",r,"G","RGB"),
// channel_delete("gr");
// channel_delete("gb");
// kanalberechnung("blue", f, "red", f, _source, calc_1, "br", "RGB");
// kanalberechnung("blue", f, "grain", f, _source, calc_1, "bg", "RGB");
kanalberechnung("rb",f,"gb",f,"this",r,"B","RGB"),
// channel_delete("br");
// channel_delete("bg");
kanalberechnung("R",f,"G",f,"this",r,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",r,"saturation","RGB")}
// channel_setSaturation_2('merged', 'lighten')
// channel_setSaturation_2('merged', 'multiply')
function channel_setSaturation_2(e,r){var a="subtract";
// var _calculation = "lighten";
// var _calculation = "screen";
// channel_select("RGB", false);
kanalberechnung("red",t,"grain",t,e,a,"rg","RGB"),kanalberechnung("red",t,"blue",t,e,a,"rb","RGB"),kanalberechnung("rg",f,"rb",f,"this",r,"R","RGB"),
// channel_delete("rg");
// channel_delete("rb");
kanalberechnung("grain",t,"red",t,e,a,"gr","RGB"),kanalberechnung("grain",t,"blue",t,e,a,"gb","RGB"),kanalberechnung("gr",f,"gb",f,"this",r,"G","RGB"),
// channel_delete("gr");
// channel_delete("gb");
kanalberechnung("blue",t,"red",t,e,a,"br","RGB"),kanalberechnung("blue",t,"grain",t,e,a,"bg","RGB"),kanalberechnung("br",f,"bg",f,"this",r,"B","RGB"),
// channel_delete("br");
// channel_delete("bg");
kanalberechnung("R",f,"G",f,"this",r,"RG","RGB"),kanalberechnung("RG",f,"B",f,"this",r,"saturation","RGB")}
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
function run(){setMeta_2("startID",layer_selectedID_get()),createLayer("AutoTonwert","levels","normal","gray",80,"black",f,f),layer_selectedID_set(getMeta_2("startID")),delMeta_2("startID")}function RemoveAlphaChannels(){if(0!=app.documents.length){for(var e=app.activeDocument.channels,r=[],a=0;a<e.length;a++){(t=e[a]).kind!=ChannelType.COMPONENT&&r.push(t)}for(;r.length;){var t;(t=r.pop()).remove()}}}
// run()
// doc.suspendHistory("channel2image", "channel2image('(RG 60 sub) (GR 60 sub) darken', 'channel2image')"); 
// check('merged', 'darken', 'subtract');
// check('merged', 'lighten', 'difference');
// check2('merged', 'lighten', 'subtract');
// gotoLayer(0)
// check3('merged');
// gotoLayer(0)
// check4('merged');
// gotoLayer(0)
// check5('merged');
// gotoLayer(0)
// check6('merged');
// Ebenen kopieren (Apfel J)
function layer_copyLayers_v2(){executeAction(sTID("copyToLayer"),void 0,DialogModes.NO)}
// layer_copyLayers()
// =======================================================
// layer_duplicateLayer(false, "dong");
function layer_duplicateLayer(e,r){var a=new ActionDescriptor,t=new ActionReference;if("number"==typeof e)
// get by Index
t.putIndex(s2t("layer"),e);else if("string"==typeof e)if(layer_checkExistence(e))
// get by Layername
t.putName(s2t("layer"),e);else{
// get by Layername via Regex // first hit
var n=layer_getIDXbyString(e);t.putIndex(s2t("layer"),n[0])}else
// get activeLayer
t.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum"));a.putReference(s2t("null"),t),a.putString(s2t("name"),r),executeAction(s2t("duplicate"),a,DialogModes.NO)}function layer_count(){function e(e){var r=new ActionReference;return r.putProperty(charIDToTypeID("Prpr"),stringIDToTypeID("layerSection")),r.putIndex(charIDToTypeID("Lyr "),e),typeIDToStringID(executeActionGet(r).getEnumerationValue(stringIDToTypeID("layerSection")))}var r,a=((r=new ActionReference).putProperty(charIDToTypeID("Prpr"),charIDToTypeID("NmbL")),r.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),executeActionGet(r).getInteger(charIDToTypeID("NmbL"))),t=a;if(activeDocument.layers[activeDocument.layers.length-1].isBackgroundLayer){var n=0;
//comment out line below to exclude background from count
t++}else n=1;for(;n<a;n++){"layerSectionEnd"==e(n)&&t--;
//if(temp == '"layerSectionStart") res--;//uncomment to count just artLayers
}return t}
// alert(layer_count())
//*************************************
//*************************************
//*************************************
// namederfunktion()
function namederfunktion(){
// =======================================================
const e=workingProfile_get("Gray"),r=doc.colorProfileName;alert(e),alert(r),gamma_L=["eciRGB v2","eciRGB v2 ICCv4"],gamma_18=["sRGB IEC61966-2.1","ProPhoto RGB","Display P3","image P3","Apple RGB","ColorMatch RGB"],gamma_22=["Adobe RGB (1998)","BestRGB","Beta RGB","DonRGB4.icm","MaxRGB","Russell RGB"],array_contains(gamma_18,r)?(alert("Gamma 1.8"),"Gray Gamma 1.8"!=e&&(alert("change it"),workingProfile_set("Gray","Gray Gamma 1.8"),alert("gechanged: "+workingProfile_get("Gray")))):array_contains(gamma_22,r)?(alert("Gamma 2.2"),"Gray Gamma 2.2"!=e&&(alert("change it"),workingProfile_set("Gray","Gray Gamma 2.2"),alert("gechanged: "+workingProfile_get("Gray")))):array_contains(gamma_L,r)?(alert("Gamma L"),workingProfile_set("Gray","Gray-elle-V4-labl.icc"),alert("gechanged: "+workingProfile_get("Gray"))):alert("Vorsicht\nDie Helligkeitsverteilung könnte fehlerhaft sein.\nfehlende Info zum Gamma von '"+r+"'"),e!=workingProfile_get("Gray")&&workingProfile_set("Gray",e)}
//*************************************
//*************************************
//*************************************
// mask_farbmaske_viaSaturation("[helper] Farbmaske", 30)
function mask_farbmaske_viaSaturation(_folder,_toleranz){if(!layer_checkExistence(_folder)){
// move to TOP
with(createGroup(_folder,"passThrough","none",100,f),activeDocument)activeLayer.move(layers[0],ElementPlacement.PLACEBEFORE);createLayer("Farbe auswählen","hueSaturation","difference","none",100,"none",f,f),createLayer("invert + gradation","curves","normal","none",100,"none",f,f),adjustLayer_curves_set(0,255,255,0),createLayer("Maske Preview","colorLookup","normal","none",100,"none",f,f),LUT_maske_preview(),gotoLayer("Farbe auswählen");
// get Farben
var color1=app_getColor("hsb","vordergrund"),color2=app_getColor("hsb","hintergrund");
// validiere Farben
if(0!=color1[1]&&0!=color1[2]||0==color2[1]||0==color2[2]){if(0==color1[1]||0==color1[2])var color1=[0,100,100]}else var color1=color2;if(0==color2[1]||0==color2[2])var color2=color1;
// sortiere Farben
var colors=[color1,color2];colors.sort((function(e,r){return e[0]-r[0]}));var color1=colors[0],color2=colors[1];adjustLayer_sat_set(1,adjustHue(color1[0],-_toleranz),color1[0],color2[0],adjustHue(color2[0],_toleranz),f,f,100),app_simulateKeyPress_alt3()}}
// function adjustHue(hue, amount) {
//     return (hue + amount + 360) % 360;
// }
// function adjustLayer_sat_set(_range, _beginRamp, _beginSustain, _endSustain, _endRamp, _hue, _saturation, _lightness) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var d3 = new ActionDescriptor();
//     var l = new ActionList();
//     var r = new ActionReference();
//     var _hue = _hue ? _hue : 0;
//     var _saturation = _saturation ? _saturation : 0;
//     var _lightness = _lightness ? _lightness : 0;
//     r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
//     d.putReference(s2t("null"), r);
//     d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
//     d3.putInteger(s2t("localRange"), _range); // red=1 || yellow=2 …
//     d3.putInteger(s2t("beginRamp"), _beginRamp);
//     d3.putInteger(s2t("beginSustain"), _beginSustain);
//     d3.putInteger(s2t("endSustain"), _endSustain);
//     d3.putInteger(s2t("endRamp"), _endRamp);
//     d3.putInteger(s2t("hue"), _hue);
//     d3.putInteger(s2t("saturation"), _saturation);
//     d3.putInteger(s2t("lightness"), _lightness);
//     l.putObject(s2t("hueSatAdjustmentV2"), d3);
//     d2.putList(s2t("adjustment"), l);
//     d.putObject(s2t("to"), s2t("hueSaturation"), d2);
//     executeAction(s2t("set"), d, DialogModes.NO);
// }
// function adjustLayer_curves_set(horizontal, vertical, horizontal2, vertical2) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var d3 = new ActionDescriptor();
//     var d4 = new ActionDescriptor();
//     var d5 = new ActionDescriptor();
//     var l = new ActionList();
//     var l2 = new ActionList();
//     var r = new ActionReference();
//     var r2 = new ActionReference();
//     r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
//     d.putReference(s2t("null"), r);
//     d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
//     r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
//     d3.putReference(s2t("channel"), r2);
//     d4.putDouble(s2t("horizontal"), horizontal);
//     d4.putDouble(s2t("vertical"), vertical);
//     l2.putObject(s2t("paint"), d4);
//     d5.putDouble(s2t("horizontal"), horizontal2);
//     d5.putDouble(s2t("vertical"), vertical2);
//     l2.putObject(s2t("paint"), d5);
//     d3.putList(s2t("curve"), l2);
//     l.putObject(s2t("curvesAdjustment"), d3);
//     d2.putList(s2t("adjustment"), l);
//     d.putObject(s2t("to"), s2t("curves"), d2);
//     executeAction(s2t("set"), d, DialogModes.NO);
// }
// function app_getColor(_model, _fokus) {
//     var colors = [];
//     if (_fokus == "vordergrund" || _fokus == "foreground") {
//         var color = app.foregroundColor;
//     } else {
//         var color = app.backgroundColor;
//     }
//     if (_model == "rgb") {
//         var model = color.rgb;
//         colors.push(Math.round(model.red));
//         colors.push(Math.round(model.green));
//         colors.push(Math.round(model.blue));
//     } else {
//         if (_model == "hsb" || _model == "hsl") {
//             var model = color.hsb;
//             colors.push(Math.round(model.hue));
//             colors.push(Math.round(model.saturation));
//             colors.push(Math.round(model.brightness));
//         }
//     }
//     return colors;
// }
// "screen"
// "colorDodge"
// "difference"
// "lighten"
// "darken"
// "subtract"
// "add"
function adjustLayer_sat_get(){var e=new ActionReference;return e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),executeActionGet(e).getInteger(stringIDToTypeID("visible"))}function writeln(e){try{return $.writeln(e+": "+e)}catch(e){}}
//gigapixel
// executeAction(sTID('913d412a-534a-5224-a25d-213434343434'), undefined, DialogModes.ALL);
//photoAI
// executeAction(sTID('a40009fc-f5fc-4a09-86ec-5a0ed56c5668'), undefined, DialogModes.ALL);
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
// BEGIN Startschuss2 for Woodwing
//////////////////////////////////
// OPTIMIZED
// TYPICAL
// HIGH_QUALITY
// DEFAULT_VALUE
/////////////////////////////
/////////////////////////////
/////////////////////////////
//// Einordnen in SimonScript 
function isFileOpen(e){for(var r=!1,a=0;a<app.documents.length;a++)
// if (app.documents[i].name == _fileName) {
if(-1!==app.documents[j].name.indexOf(e)){r=!0;break}return r}
// if (isFileOpen("_OA_0086__RZ__RGB.psd")) {
//     alert("Die Datei ist geöffnet.");
// } else {
//     alert("Die Datei ist nicht geöffnet.");
// }
/////////////////////////////
/////////////////////////////
/////////////////////////////
//*************************************************************
//******************* Freisteller in Woodwing *****************
//*************************************************************
// if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
// if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
// replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
// replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");
// app.activeDocument.suspendHistory('Freisteller: 2 Ebenen', 'freisteller_reduce2layers()');
// saveMultiformat(new File("/Users/adrians/Arbeit/__temp/imago1043022766h__RGB+.psd"), "psd", t, null, f, t);
// undoSteps(1);
/* 
    Schreibe einen Loop um die Ordner zu checken ob sie offen sind und speichere es im Array

    $.writeln(isSetOpened1(app.activeDocument.activeLayer))

    isSetOpened2( grIDX );
    $.writeln(isSetOpened2(getActiveLayerIndex()))
*/
// function getClosedSets() {
//     var closedSets_array = [];
//     var i = 1;
//     while (layer_checkExistence(i)) {
//         if (isLayerSet(i)) {
//             if (!isSetOpened2(i)) {
//                 $.writeln(i);
//                 closedSets_array.push(i);
//             }
//         }
//         i++;
//     }
//     return closedSets_array;
// }
// toogleOpenCloseSet_byIDX_byArray(getClosedSets());
// // $.writeln(layer_selectedIDX_get());
// var start_closedSets = [5,25];
// // app.activeDocument.suspendHistory("toogleOpenCloseSet_byIDX_byArray", "toogleOpenCloseSet_byIDX_byArray(start_closedSets)");
// // $.writeln(app.activeDocument.suspendHistory("ding", "isSetOpened2(25)"))
// // undoSteps(1);
// // historyState_deleteSteps(1);
// var start_closedSetsx = isSetOpened2(25);
// undoSteps(4);
// historyState_deleteSteps(4);
// $.writeln(start_closedSetsx);
// =======================================================
// function historyState_delete() {
//     var d = new ActionDescriptor();
//     var r = new ActionReference();
//     r.putEnumerated(s2t("historyState"), s2t("ordinal"), s2t("last"));
//     d.putReference(s2t("null"), r);
//     executeAction(s2t("delete"), d, DialogModes.NO);
// }
// BEGIN deFreisteller QUICK
// deFrei();
function deFrei(){
//@include "./assets/json2.js"
loadJSON("~/.ss_settings.json");const e=jsonValue("RZ_qualityJPG");//TODO kommt noch nicht in PS an
try{if(app.activeDocument.layerSets.getByName("Freisteller")){var r=layer_selectedID_get();try{var a=!1;if(getMeta_3("isWoodwing"))a=Boolean(getMeta_3("isWoodwing"));
// DELETE the layers
try{gotoLayer("Freisteller"),ungroup(),gotoLayer("Freisteller helper"),deleteActiveLayer()}catch(e){}if(a){if(getMeta_3("woodwing_RGB"))var n=getMeta_3("woodwing_RGB");if(getMeta_3("woodwing_file"))var o=getMeta_3("woodwing_file");if(getMeta_3("idDocName"))var i=getMeta_3("idDocName");BridgeTalkMessage_openDocID(i,o,!1),replaceMeta_3_suffix("woodwing_file","psd","jpg"),replaceMeta_3_suffix("woodwing_RGB","psd","jpg"),saveMultiformat(new File(n),"jpg",t,e,f,f)}else{
// DELETE the file
var c=new Folder(doc.path),l=GetFileNameOnly(doc.name),s=/(?:\.([^.]+))?$/.exec(doc.name)[1],g=new File(c+"/"+l+"-frei."+s);g.exists&&g.remove()}}catch(e){alert(e)}layer_selectedID_set(r)}}catch(e){return alert("Abbruch!\nkeine Ebene names 'Freisteller' gefunden\n"+e),!1}}function BridgeTalkMessage_openDocID(e,r,a){var t=new BridgeTalk;t.target="indesign",t.body=runID.toSource()+"('"+e+"','"+r+"','"+a+"');",t.onResult=function(e){},t.send(10)}function runID(e,r,a){try{if(function(e){for(var r=!1,a=0;a<app.documents.length;a++)if(-1!==app.documents[a].name.indexOf(e)){r=!0,app.activeDocument=app.documents[a];break}return r}(e))app.activeDocument.links.itemByName(r).editOriginal();else alert("kein Focus auf der Datei?")}catch(e){
/* if (_ssDebug) { alert("runID: " + e); } */}return" "}
// =======================================================
// canvasSize(true, 5.6664);
function canvasSize(e,r){var a=new ActionDescriptor;a.putBoolean(s2t("relative"),e),a.putUnitDouble(s2t("height"),s2t("distanceUnit"),r),a.putEnumerated(s2t("vertical"),s2t("verticalLocation"),s2t("bottomEnum")),executeAction(s2t("canvasSize"),a,DialogModes.NO)}
// $.writeln("mm2pt: " + mm2pt(20));
// $.writeln("cm2pt: " + cm2pt(2));
var enlargeCanvas_mm=[0,0,2.967,0],enlargeCanvas_pt=[0,0,8.40951201110995,0],outer_width_mm=152.333,outer_height_mm=89.958,inner_width_mm=168.032,inner_height_mm=112.021,outer_width_pt=431.811023622047,outer_height_pt=255,inner_width_pt=476.31,inner_height_pt=317.539892359025;//mm
// setSize_pt("width", inner_width_pt);
// function setSize_pt(_side, _size) {
//     var d = new ActionDescriptor();
//     d.putUnitDouble(sTID(_side), sTID('distanceUnit'), _size);
//     executeAction(sTID('imageSize'), d, DialogModes.NO);
// }
// resizeCanvas(enlargeCanvas_mm[3], enlargeCanvas_mm[0], Units.MM, AnchorPosition.BOTTOMRIGHT)
// resizeCanvas(enlargeCanvas_pt[3], enlargeCanvas_pt[0], Units.POINTS, AnchorPosition.BOTTOMRIGHT);
// resizeCanvas(enlargeCanvas_pt[1], enlargeCanvas_pt[2], Units.POINTS, AnchorPosition.TOPLEFT);
function resizeCanvas(e,r,a,t){
// doc.resizeCanvas(10, undefined, AnchorPosition.BOTTOMRIGHT)
startRulerUnits=app.preferences.rulerUnits,app.preferences.rulerUnits=a;var n=doc.width.value,o=doc.height.value,i=n+e,c=o+r;$.writeln("docWidth: "+n),$.writeln("docHeight: "+o),$.writeln("canvasWidth: "+i),$.writeln("canvasHeight: "+c),doc.resizeCanvas(i,c,t),app.preferences.rulerUnits=startRulerUnits}
// BOTTOMCENTER
// BOTTOMLEFT
// BOTTOMRIGHT
// MIDDLECENTER
// MIDDLELEFT
// MIDDLERIGHT
// TOPCENTER
// TOPLEFT
// TOPRIGHT
//*************************************************************
//******************* 3D *****************
//*************************************************************
// gotoLayer(0);
// nameLayer("Schatten");
// selectLayers("selectAllLayers");
// selectLayerBySelector("Schatten", "remove");
// mergeLayers();
// nameLayer("frei");
// saveMultiformat(new File("/Users/adrians/Arbeit/11Freunde/271/rück/jpeg_check/3D/check.psd"), "psd", true, null, false, true);
// alert("ding");
// resetImage();
// =======================================================
// var idselect = stringIDToTypeID("select");
// var desc3 = new ActionDescriptor();
// var idnull = stringIDToTypeID("null");
// var ref1 = new ActionReference();
// var idrotateTool = stringIDToTypeID("rotateTool");
// ref1.putClass(idrotateTool);
// desc3.putReference(idnull, ref1);
// var iddontRecord = stringIDToTypeID("dontRecord");
// desc3.putBoolean(iddontRecord, true);
// var idforceNotify = stringIDToTypeID("forceNotify");
// desc3.putBoolean(idforceNotify, true);
// executeAction(idselect, desc3, DialogModes.NO);
function RemoveAlphaChannels(){if(0!=app.documents.length){for(var e=app.activeDocument.channels,r=[],a=0;a<e.length;a++){(t=e[a]).kind!=ChannelType.COMPONENT&&r.push(t)}for(;r.length;){var t;(t=r.pop()).remove()}}}function channel_checkExistenceByName(e){for(var r=doc.channels,a=!1,t=0;t<r.length;t++){var n=r[t];if(n.name==e&&n.kind==ChannelType.MASKEDAREA){a=!0;break}}return a}function channel_deleteX(e){for(;channel_checkExistenceByName(e);)channel_delete(e)}$.writeln("1: "+channel_checkExistenceByName("rg")),$.writeln("2: "+channel_checkExistenceByName("rgdff")),channel_deleteX("rg");