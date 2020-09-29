/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[ss] Startschuss ID</name>
<about>um die Bildbearbeitung vorzubereiten | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>SimonScript</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/



function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    var myString = myString.replace(/^(\d{3}(-|_{2}))(.+)/g, "$3");
    return myString
};

 


/*//// OPTIONS ////*/
/*=================================================================================*/
var Rasterweite = 70;
var minAufloesung = 300;
var Suffix_RGB = "__RGB";
var option_convert_8bit = true;

// var mainFolder = "/Users/simon/Arbeit/11Freunde/_Cloud/Buch/";
// var subFolder = "RGB";

var mainFolder = "/Users/simon/Arbeit/11Freunde/Legenden2_BVB/";
// var mainFolder = "/Users/simon/Arbeit/11Freunde/227/";
var subFolder = "RGB";



if (!app.selection.length > 0) {
    alert("Wähle das zubearbeitende Bild aus");
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

/*TODO ob tif oder psd // hier muss variabl */
var myNewPath = myFolder + "/" + myNewImageFile + Suffix_RGB + ".psd";
/*=================================================================================*/

/***********************************************************************************/
run_ID();
/***********************************************************************************/



//// FUNCTIONS ////
/*=================================================================================*/
function run_ID() {

    if (new RegExp("__RGB").test(myNewImageFile)) {
        alert("Das Bild ist schon vorbereitet");
        exit();
    }

    if (myFile.isValid == false) {
        alert("Wähle das zubearbeitende Bild aus");
        exit();
    }



    if (hPPI < minAufloesung) {
        // if (hPPI == minAufloesung) {
        var myDialog = new Window("dialog", "unter " + minAufloesung + "dpi");
        var stxt = myDialog.add("group");
        stxt.add("statictext", undefined, "Das Bild hat nur " + hPPI + " dpi");

        var myButtonGroup = myDialog.add("group");
        var ok = myButtonGroup.add("button", undefined, "weiter");
        var cancel = myButtonGroup.add("button", undefined, "stopp");

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

    } else {
        OpenImage();
        Relink(myLink, myNewPath);
        // UpdateAllOutdatedLinks();
    }

    if (interpolieren == 1) {
        OpenImage();
        Relink(myLink, myNewPath);
        // UpdateAllOutdatedLinks();
    }
}

/*=================================================================================*/
function Relink(myLink, myNewPath) {
    var newFile = new File(myNewPath);
    if (newFile.exists) {
        var originalLinkFile = new File(myLink.filePath);
        myLink.relink(newFile);
        try {
            if (myLink.status == LinkStatus.linkOutOfDate) {
                myLink.update();
            }
        } catch (err) {}
    }
}
/*=================================================================================*/
function UpdateAllOutdatedLinks() {
    for (var myCounter = myDoc.links.length - 1; myCounter >= 0; myCounter--) {
        var myLink = myDoc.links[myCounter];
        if (myLink.status == LinkStatus.linkOutOfDate) {
            myLink.update();
        }
    }
}

/*=================================================================================*/
function OpenImage() {
    try {
        if (myFile.isValid == true && myFile.constructor.name == "Rectangle") {
            //           myLink = myFile.graphics[0].itemLink;
        }
    } catch (e) {
        alert("Wähle das zubearbeitende Bild aus");
        exit();
    }

    CreateBridgeTalkMessage();
}

/*=================================================================================*/
function CreateBridgeTalkMessage() {
    var bt = new BridgeTalk();
    bt.target = "photoshop-140";
    // bt.body = ResaveInPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + "," + papier + ");";
    bt.body = runPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + ");";
    bt.onResult = function(resObj) {}
    bt.send(100);
}



function runPS(myImagePath, myNewPath, hScale, vScale, ZielAufloesung, minAufloesung, hPPI, option_convert_8bit) {
    function cTID(e){return app.charIDToTypeID(e)}function sTID(e){return app.stringIDToTypeID(e)}
    /* SAVE + SET PREFERENCES ************************/
    function prefSave(){startDisplayDialogs=app.displayDialogs,startRulerUnits=app.preferences.rulerUnits}function prefSet(e,t){e||(alert("check prefSet"),e=DialogModes.NO),t||(alert("check prefSet"),t=Units.MM),app.displayDialogs=e,app.preferences.rulerUnits=t}function prefReset(){app.preferences.rulerunits=startRulerUnits,startDisplayDialogs==DialogModes.ERROR&&(startDisplayDialogs=DialogModes.NO),app.displayDialogs=startDisplayDialogs}
    /* TODO würde gerne einen anderen Namen haben */
    function resetImage(){
    /* zurück zur letzten Version */
    executeAction(sTID("revert"),void 0,DialogModes.NO),emptyProtocoll()}function emptyProtocoll(){var e=new ActionDescriptor;e.putEnumerated(cTID("null"),cTID("PrgI"),cTID("Al  ")),executeAction(cTID("Prge"),e,DialogModes.NO);for(var t=app.activeDocument.historyStates,n=t.length-1;n>=0;--n)t[n].snapshot&&(app.activeDocument.activeHistoryState=t[n],deleteHistory())}function deleteHistory(){var e=new ActionDescriptor,t=new ActionReference;t.putProperty(charIDToTypeID("HstS"),charIDToTypeID("CrnH")),e.putReference(charIDToTypeID("null"),t),executeAction(charIDToTypeID("Dlt "),e,DialogModes.NO)}
    /* DEBUGGING ****************************/
    function time_start(){start=(new Date).getTime()}function time_stop(e){var t=(new Date).getTime(),n="Done ("+Number((t-e)/1e3).toFixed(3)+" secs).";alert(n)}function logger(e){debug&&time_start();var t="~/Desktop/SimonScript.log",n=File(t);n.exists||(n=new File(t));var r=new Date,o=("0"+r.getDate()).slice(-2)+"."+("0"+(r.getMonth()+1)).slice(-2)+"."+r.getFullYear()+" - "+(("0"+r.getHours()).slice(-2)+":"+("0"+r.getMinutes()).slice(-2)+":"+("0"+r.getSeconds()).slice(-2)),i=File(t);i.open("a",void 0,void 0),""!==i&&(i.writeln("-----------------------"),i.writeln(o),i.writeln("Doc: '"+doc.name+"'"),i.writeln("Function: '"+e+"'"),i.writeln(""),i.close()),debug&&time_stop(start)}function undoSteps(e){for(var t=0;t<e;t++)executeAction(charIDToTypeID("undo"),void 0,DialogModes.NO)}
    /* LAYER *********************************/
    function createLayer(e,t,n,r,o,i,c,s){try{var a=new ActionDescriptor,l=new ActionReference;l.putClass(sTID("adjustmentLayer")),a.putReference(sTID("null"),l);var D=new ActionDescriptor;if(D.putString(sTID("name"),e),D.putUnitDouble(sTID("opacity"),sTID("percentUnit"),o),D.putEnumerated(sTID("mode"),sTID("blendMode"),sTID(n)),D.putEnumerated(sTID("color"),sTID("color"),sTID(r)),D.putBoolean(sTID("group"),c),"levels"==t&&s){var u=new ActionDescriptor;u.putEnumerated(sTID("presetKind"),sTID("presetKindType"),sTID("presetKindDefault"));var p=new ActionList,I=new ActionDescriptor,T=new ActionReference;T.putEnumerated(sTID("channel"),sTID("channel"),sTID("composite")),I.putReference(sTID("channel"),T),I.putBoolean(sTID("auto"),!0),p.putObject(sTID("levelsAdjustment"),I),u.putList(sTID("adjustment"),p),D.putObject(sTID("type"),sTID(t),u)}else D.putClass(sTID("type"),sTID(t));if(a.putObject(sTID("using"),sTID("adjustmentLayer"),D),executeAction(sTID("make"),a,DialogModes.NO),"invert"==i)return void executeAction(sTID("invert"),void 0,DialogModes.NO);if("none"==i)return void deleteMask();if("black"==i||"white"==i||"gray"==i)return void fill(i,"normal",100)}catch(e){logger(arguments.callee.name)}}function createColorLayer(e,t,n,r,o,i,c,s){try{var a=new ActionDescriptor,l=new ActionReference;l.putClass(sTID("contentLayer")),a.putReference(sTID("null"),l);var D=new ActionDescriptor;D.putString(sTID("name"),e),D.putUnitDouble(sTID("opacity"),sTID("percentUnit"),r),D.putEnumerated(sTID("mode"),sTID("blendMode"),sTID(t)),D.putEnumerated(sTID("color"),sTID("color"),sTID(n));var u=new ActionDescriptor,p=new ActionDescriptor;if(p.putDouble(sTID("red"),i),p.putDouble(sTID("green"),c),p.putDouble(sTID("blue"),s),u.putObject(sTID("color"),sTID("RGBColor"),p),D.putObject(sTID("type"),sTID("solidColorLayer"),u),a.putObject(sTID("using"),sTID("contentLayer"),D),executeAction(sTID("make"),a,DialogModes.NO),gotoMask(),"invert"==o)return void executeAction(sTID("invert"),void 0,DialogModes.NO);if("none"==o)return void deleteMask();if("black"==o||"white"==o||"gray"==o)return void fill(o,"normal",100)}catch(e){logger(arguments.callee.name)}}
    /* TODO toogle Mask/RGB-Layer //  bisher nur im CreateColorLayer verwendet */function gotoMask(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("channel"),sTID("channel"),sTID("mask")),e.putReference(sTID("null"),t),e.putBoolean(sTID("makeVisible"),!1),executeAction(sTID("select"),e,DialogModes.NO)}function gotoFill(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("channel"),sTID("channel"),sTID("RGB")),e.putReference(sTID("null"),t),e.putBoolean(sTID("makeVisible"),!1),executeAction(sTID("select"),e,DialogModes.NO)}
    /* TODO */
    /* _direction für  */
    /* ElementPlacement.INSIDE */
    /* ElementPlacement.PLACEATBEGINNING */
    /* ElementPlacement.PLACEATEND */
    /* moveLayer("Weiss", "Original", "down");*/function moveLayer(e,t,n){gotoLayer(e);var r=app.activeDocument.activeLayer;gotoLayer(t);var o=app.activeDocument.activeLayer;if("up"==n)var i=ElementPlacement.PLACEBEFORE;else if("down"==n)i=ElementPlacement.PLACEAFTER;r.move(o,i)}
    /* up   down     top   bottom */
    /* next previous front back */function moveLayer3(e,t){"up"==e&&(e="next"),"down"==e&&(e="previous"),"top"==e&&(e="front"),"bottom"==e&&(e="back");for(var n=0;n<t;n++){var r=new ActionDescriptor,o=new ActionReference,i=new ActionReference;o.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),r.putReference(sTID("null"),o),i.putEnumerated(sTID("layer"),sTID("ordinal"),sTID(e)),r.putReference(sTID("to"),i),executeAction(sTID("move"),r,DialogModes.NO)}}function deleteMask(){try{var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("channel"),sTID("channel"),sTID("mask")),e.putReference(sTID("null"),t),executeAction(sTID("delete"),e,DialogModes.NO)}catch(e){logger(arguments.callee.name)}}function createGroup(e,t,n,r,o){try{var i=new ActionDescriptor,c=new ActionReference;if(c.putClass(sTID("layerSection")),i.putReference(sTID("null"),c),o){var s=new ActionReference;s.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),i.putReference(sTID("from"),s)}var a=new ActionDescriptor;a.putString(sTID("name"),e),a.putUnitDouble(sTID("opacity"),sTID("percentUnit"),r),a.putEnumerated(sTID("color"),sTID("color"),sTID(n)),a.putEnumerated(sTID("mode"),sTID("blendMode"),sTID(t)),i.putObject(sTID("using"),sTID("layerSection"),a),i.putInteger(sTID("layerSectionStart"),351),i.putInteger(sTID("layerSectionEnd"),352),i.putString(sTID("name"),"Gruppe 3"),executeAction(sTID("make"),i,DialogModes.NO)}catch(e){logger(arguments.callee.name)}}
    /*
    fill("black", "normal", 100)
    fill("color", "multiply", 50, 240,50,50)
    */function fill(e,t,n,r,o,i){try{var c=new ActionDescriptor;if(c.putEnumerated(sTID("using"),sTID("fillContents"),sTID(e)),"color"==e){var s=new ActionDescriptor;s.putUnitDouble(sTID("hue"),sTID("angleUnit"),r),s.putDouble(sTID("saturation"),o),s.putDouble(sTID("brightness"),i),c.putObject(sTID("color"),sTID("HSBColorClass"),s)}c.putUnitDouble(sTID("opacity"),sTID("percentUnit"),n),c.putEnumerated(sTID("mode"),sTID("blendMode"),sTID(t)),executeAction(sTID("fill"),c,DialogModes.NO)}catch(e){logger(arguments.callee.name)}}function smartObject(){try{executeAction(stringIDToTypeID("newPlacedLayer"),void 0,DialogModes.NO)}catch(e){logger(arguments.callee.name)}}function rasterSmartObject(){try{var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),e.putReference(sTID("null"),t),executeAction(sTID("rasterizeLayer"),e,DialogModes.NO)}catch(e){logger(arguments.callee.name)}}function nameLayer(e){try{doc.activeLayer.name=e}catch(e){logger(arguments.callee.name)}}function dublicate(e){var t=new ActionDescriptor,n=new ActionReference;n.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),t.putReference(sTID("null"),n),t.putString(sTID("name"),e),t.putInteger(sTID("version"),5),executeAction(sTID("duplicate"),t,DialogModes.NO)}
    /* TODO ist das noch in Verwendung, oder kann das weg */function selectLayerUp(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("forwardEnum")),e.putReference(sTID("null"),t),e.putBoolean(sTID("makeVisible"),!1);var n=new ActionList;n.putInteger(108),e.putList(sTID("layerID"),n),executeAction(sTID("select"),e,DialogModes.NO)}function selectLayer(e,t){var n=new ActionDescriptor,r=new ActionReference;"down"!=e?r.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("forwardEnum")):r.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("backwardEnum")),n.putReference(sTID("null"),r),n.putBoolean(sTID("makeVisible"),!1);var o=0;for(o=1;o<=t;o+=1)executeAction(sTID("select"),n,DialogModes.NO)}
    /* TODO mit unterer Funktion ersetzt */function selectAll(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),e.putReference(sTID("null"),t),executeAction(sTID("selectAllLayers"),e,DialogModes.NO)}
    /* selectNoLayers OR selectAllLayers */function selectLayers(e){var t=new ActionDescriptor,n=new ActionReference;n.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),t.putReference(sTID("null"),n),executeAction(sTID(e),t,DialogModes.NO)}function hasBackground(){var e=new ActionReference;return e.putProperty(charIDToTypeID("Prpr"),charIDToTypeID("Bckg")),e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Back")),executeActionGet(e).getBoolean(charIDToTypeID("Bckg"))}function clearAllGuides(){executeAction(sTID("clearAllGuides"),void 0,DialogModes.NO)}
    /* egal ob Idx oder LayerName */function gotoLayer(e){var t=new ActionDescriptor,n=new ActionReference;"number"==typeof e?n.putIndex(charIDToTypeID("Lyr "),e):"string"==typeof e&&n.putName(sTID("layer"),e),t.putReference(sTID("null"),n),t.putBoolean(sTID("makeVisible"),!1),executeAction(sTID("select"),t,DialogModes.NO)}
    /** IMAGE *******************************/function SmartObject_edit(){var e=new ActionDescriptor;executeAction(sTID("placedLayerEditContents"),e,DialogModes.NO)}function SmartOject_placeItem(e){var t=new ActionDescriptor;t.putPath(cTID("null"),new File(e)),executeAction(sTID("placedLayerReplaceContents"),t,DialogModes.NO)}function getBitDepth(){var e=doc.bitsPerChannel;return e===BitsPerChannelType.EIGHT?8:e===BitsPerChannelType.SIXTEEN?16:e===BitsPerChannelType.THIRTYTWO&&32}
    /* setBitDepth(8); */function setBitDepth(e){var t=charIDToTypeID("CnvM"),n=new ActionDescriptor,r=charIDToTypeID("Dpth");n.putInteger(r,e),executeAction(t,n,DialogModes.NO)}
    /* TODO irritierender Name // Vorschläge? */
    /* img_resize(10, 300) */
    /* img_resize(10, null) */function img_resize(e,t){var n;(prefSave(),prefSet(DialogModes.NO,Units.MM),doc.width>doc.height)?((n=new ActionDescriptor).putUnitDouble(sTID("width"),sTID("distanceUnit"),cm2pt(e)),executeAction(sTID("imageSize"),n,DialogModes.NO)):((n=new ActionDescriptor).putUnitDouble(sTID("height"),sTID("distanceUnit"),cm2pt(e)),executeAction(sTID("imageSize"),n,DialogModes.NO));doc.resolution>t&&t&&doc.resizeImage(void 0,void 0,t,ResampleMethod.PRESERVEDETAILS,0),prefReset()}
    /* setMegaPixel(8) */function setMegaPixel(e){prefSave(),prefSet(DialogModes.NO,Units.PIXELS);var t=doc.width,n=doc.height,r=t*n,o=1e6*e,i=o/r;if(o<r)if(t>=n){var c=t*Math.sqrt(i);doc.resizeImage(c,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0)}else{var s=Math.round(n*Math.sqrt(i));doc.resizeImage(void 0,s,void 0,ResampleMethod.PRESERVEDETAILS,0)}return prefReset(),""}
    /* getScale(8) */function getScale(e){
    /*     prefSave();
            prefSet(DialogModes.NO, Units.PIXELS); */
    var t=1e6*e/(doc.width*doc.height);
    /*     if (setPixel < getPixel) {
                if (w >= h) {
                    var w_neu = w * Math.sqrt(faktor);
                    doc.resizeImage(w_neu, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
                } else {
                    var h_neu = Math.round(h * Math.sqrt(faktor));
                    doc.resizeImage(undefined, h_neu, undefined, ResampleMethod.PRESERVEDETAILS, 0);
                }
            } */
    /* prefReset(); */
    return Math.sqrt(t)}
    /* Convert cm to Point, imageSize need Points */function cm2pt(e){return 28.3464566929*e}function mm2pt(e){return.283464566929*e}function setDpi(e){var t=new ActionDescriptor;t.putUnitDouble(sTID("resolution"),sTID("densityUnit"),e),executeAction(sTID("imageSize"),t,DialogModes.NO)}
    /* setSize("width", 100) */function setSize(e,t){var n=new ActionDescriptor;n.putUnitDouble(sTID(e),sTID("distanceUnit"),mm2pt(t)),executeAction(sTID("imageSize"),n,DialogModes.NO)}
    /* COLOR ****************************/function noProfile(){if(doc.colorProfileType==ColorProfile.NONE)try{app.bringToFront();var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("document"),sTID("ordinal"),sTID("targetEnum")),e.putReference(sTID("null"),t),e.putBoolean(sTID("manage"),!0),executeAction(sTID("assignProfile"),e,DialogModes.ALL)}catch(e){}}function assignProfile(e){var t=new ActionDescriptor,n=new ActionReference;n.putEnumerated(sTID("document"),sTID("ordinal"),sTID("targetEnum")),t.putReference(sTID("null"),n),t.putString(sTID("profile"),e),executeAction(sTID("assignProfile"),t,DialogModes.NO)}
    /* TODO !! Geht Besser ! ****************************/function gray2rgb(){doc.mode==DocumentMode.GRAYSCALE&&doc.convertProfile("eciRGB v2",Intent.RELATIVECOLORIMETRIC,!0,!1)}function cmyk2rgb(){doc.mode==DocumentMode.CMYK&&doc.convertProfile("eciRGB v2",Intent.RELATIVECOLORIMETRIC,!0,!1)}function sRGB2eciRGB(){var e=doc.colorProfileName,t=new RegExp("^sRGB");e.match(t)&&doc.convertProfile("eciRGB v2",Intent.RELATIVECOLORIMETRIC,!0,!1)}
    /* WEB-Output ****************************/function GetFileNameOnly(e){var t=e.lastIndexOf(".");return-1==t?e:e.substr(0,t)}function replace__RGB_RZ(e){var t=GetFileNameOnly(doc.name).replace(/(__RGB.*)$/g,e).replace(/(__RZ.*)$/g,e),n=new RegExp(e,"g");if(!t.match(n))t=t+e;return t}function saveRZ(e,t,n,r){
    /* Location + Name */
    var o=new Folder(e);o.exists||o.create();for(var i=o+"/"+t+(s=replace__RGB_RZ(r))+"."+n,c=File(i);c.exists;){var s;i=o+"/"+t+(s=s+"+")+"."+n,c=File(i)}if("tif"==n)(a=new TiffSaveOptions).alphaChannels=!0,a.byteOrder=ByteOrder.IBM,a.embedColorProfile=!0,a.imageCompression=TIFFEncoding.TIFFLZW,a.layers=!0,a.spotColors=!1,a.transparency=!0,a.annotations=!1;else if("jpg"==n){(a=new JPEGSaveOptions).embedColorProfile=!0,a.formatOptions=FormatOptions.STANDARDBASELINE,a.matte=MatteType.WHITE,a.quality=11}else if("psd"==n){var a;(a=new PhotoshopSaveOptions).alphaChannels=!1,a.annotations=!1,a.embedColorProfile=!0,a.layers=!0,a.spotColors=!1}doc.saveAs(new File(i),a,!1,Extension.LOWERCASE)}
    /*=================================================================================*/function selectAllLayers(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),e.putReference(sTID("null"),t),executeAction(sTID("selectAllLayers"),e,DialogModes.NO)}function mergeLayers(){var e=new ActionDescriptor;executeAction(sTID("mergeLayersNew"),e,DialogModes.NO)}function blendif(e,t,n,r){var o=new ActionDescriptor,i=new ActionReference;i.putEnumerated(sTID("layer"),sTID("ordinal"),sTID("targetEnum")),o.putReference(sTID("null"),i);var c=new ActionDescriptor,s=new ActionList,a=new ActionDescriptor,l=new ActionReference;l.putEnumerated(sTID("channel"),sTID("channel"),sTID("gray")),a.putReference(sTID("channel"),l),a.putInteger(sTID("srcBlackMin"),0),a.putInteger(sTID("srcBlackMax"),0),a.putInteger(sTID("srcWhiteMin"),255),a.putInteger(sTID("srcWhiteMax"),255),a.putInteger(sTID("destBlackMin"),e),a.putInteger(sTID("destBlackMax"),t),a.putInteger(sTID("destWhiteMin"),n),a.putInteger(sTID("desaturate"),r),s.putObject(sTID("blendRange"),a),c.putList(sTID("blendRange"),s);var D=new ActionDescriptor;D.putUnitDouble(sTID("scale"),sTID("percentUnit"),100),c.putObject(sTID("layerEffects"),sTID("layerEffects"),D),o.putObject(sTID("to"),sTID("layer"),c),executeAction(sTID("set"),o,DialogModes.NO)}function checkTransparency(){
    /*     if (transp) alert("Has transparency");
            else alert("No transparency"); */
    return doc.suspendHistory("Transparent Check","checkTransparency_inner()"),undoSteps(1),!!transp}function checkTransparency_inner(){prefSave(),transp=!0;
    /* Kanalberechnung */
    var e=function(e){return app.stringIDToTypeID(e)},t=new ActionDescriptor,n=new ActionDescriptor,r=new ActionReference,o=new ActionReference,i=new ActionReference;r.putProperty(e("channel"),e("selection")),t.putReference(e("null"),r),o.putEnumerated(e("channel"),e("channel"),e("transparencyEnum")),o.putEnumerated(e("layer"),e("ordinal"),e("merged")),n.putReference(e("to"),o),i.putEnumerated(e("channel"),e("channel"),e("transparencyEnum")),i.putEnumerated(e("layer"),e("ordinal"),e("merged")),n.putReference(e("source2"),i),t.putObject(e("to"),e("calculation"),n);try{executeAction(e("set"),t,DialogModes.NO),activeDocument.selection.invert();try{activeDocument.selection.bounds}catch(e){transp=!1}}catch(e){transp=!1}return prefReset(),activeDocument.selection.deselect(),transp}function transformLayer(e,t){var n=new ActionDescriptor;if("center"==e||"c"==e)var r="QCSAverage";if("topleft"==e||"tl"==e||"↖"==e)r="QCSCorner0";if("top"==e||"t"==e||"↑"==e)r="QCSSide0";if("topright"==e||"tr"==e||"↗"==e)r="QCSCorner1";if("right"==e||"r"==e||"→"==e)r="QCSSide1";if("bottomright"==e||"br"==e||"↘"==e)r="QCSCorner2";if("bottom"==e||"b"==e||"↓"==e)r="QCSSide2";if("bottomleft"==e||"bl"==e||"↙"==e)r="QCSCorner3";if("left"==e||"l"==e||"←"==e)r="QCSSide3";n.putEnumerated(sTID("freeTransformCenterState"),sTID("quadCenterState"),sTID(r));var o=new ActionDescriptor;o.putUnitDouble(sTID("horizontal"),sTID("pixelsUnit"),0),o.putUnitDouble(sTID("vertical"),sTID("pixelsUnit"),0),n.putObject(sTID("offset"),sTID("offset"),o),n.putUnitDouble(sTID("width"),sTID("percentUnit"),t),n.putUnitDouble(sTID("height"),sTID("percentUnit"),t),executeAction(sTID("transform"),n,DialogModes.NO)}function smartObjectTransparencyIssue(){var e=doc.activeLayer.name;if(gotoLayer("Original"),tempRulerUnits=app.preferences.rulerUnits,app.preferences.rulerUnits=Units.PIXELS,"LayerKind.SMARTOBJECT"==doc.activeLayer.kind){if(doc.width<doc.height)var t=100*(doc.width+2)/doc.width;else t=100*(doc.height+2)/doc.height;alert(t),transformLayer("center",t)}if(gotoLayer("vorher Ebene"),doc.width<doc.height)t=100*(doc.width+2)/doc.width;else t=100*(doc.height+2)/doc.height;transformLayer("center",t),app.preferences.rulerunits=tempRulerUnits,gotoLayer(e);e=""}app.documents.length>0&&(doc=app.activeDocument,docs=app.documents,f=!1,t=!0,debug=!1);
    /*
        <javascriptresource>
          <name>BCM> Utils...</name>
          <category>BCM</category>
        </javascriptresource>
        */
        /* http://ps-scripts.com/bb/viewtopic.php?f=9&t=3235 */
        function getActiveLayerIndex(){var e=new ActionReference;return e.putProperty(charIDToTypeID("Prpr"),charIDToTypeID("ItmI")),e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),hasBackground()?executeActionGet(e).getInteger(charIDToTypeID("ItmI"))-1:executeActionGet(e).getInteger(charIDToTypeID("ItmI"))}function cTID(e){return charIDToTypeID(e)}function sTID(e){return stringIDToTypeID(e)}
        /* ============================= */
        /* The main function */
        function closeGroup(e){var t=isLocked(),r=isVisible(),n=e.name,c=e.opacity,o=e.blendMode,a=e.linkedLayers,D=getActiveLayerIndex(),I=getActiveLayerIndex();hasBackground()||(I-=1);var i=getColor();try{/* is try for ccs3 */
        var T=hasLayerMask()}catch(e){}try{/* is try for ccs3 */
        var p=hasVectorMask()}catch(e){}i=getColor();var u=!1;try{copyLayerStyle(),u=!0}catch(e){}if(1==t&&unlock(),0==r&&makeVisible(),T){try{deselectPath()}catch(e){}
        /* throw("err"); */
        var y=isLayerMaskEnabled();duplicateLayerMaskAsAlpha();try{/* for cs3 */
        var s=getMaskDensity(),l=getMaskFeather()}catch(e){}var h=isLayerMaskLinked()}if(p){var g=getVectorMaskDensity(),d=getVectorMaskFeather();duplicateVectorMask()}e.layers.length<=1?(addTempLayerSetIn(I),makeActiveByIndex(D+2,!1),ungroup(),groupSelected(n),makeActiveByIndex(D+2,!1),deleteTempLayerSetbyIdx(currSetIDX+1)):(makeActiveByIndex(currSetIDX,!1),ungroup(),groupSelected(n));var A=activeDocument.activeLayer;for(x in A.opacity=c,A.blendMode=o,a)"LayerSet"==a[x].typename&&activeDocument.activeLayer.link(a[x]);if(u&&pasteLayerStyle(),T){setBackTheLayerMask();try{setMaskDensityTo(Math.round(100*s/255)),setMaskFeatherTo(l)}catch(e){}setMaskLinked(h),setMaskEnabled(y)}return p&&(recreateVectorMask(),setVectorMaskDensityTo(Math.round(100*g/255)),setVectorMaskFeatherTo(d)),setColorTo(i),1==t&&lock(),0==r&&hide(),A}
        /* ============================= */
        /* Below are all necessary subroutines for the main function to work */function ungroup(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(cTID("Lyr "),cTID("Ordn"),cTID("Trgt")),e.putReference(cTID("null"),t);try{executeAction(sTID("ungroupLayersEvent"),e,DialogModes.NO)}catch(e){}}function addLayer(){var e=activeDocument.activeLayer,t=activeDocument.layerSets.add();return t.move(e,ElementPlacement.PLACEBEFORE),t}function isVisible(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getBoolean(sTID("visible"))}function isVisibleIDX(e){var t=new ActionReference;
        /* m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" )); */return t.putIndex(sTID("layer"),e),executeActionGet(t).getBoolean(sTID("visible"))}function makeVisible(){
        /* ======================================================= */
        var e=charIDToTypeID("Shw "),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionList,c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),n.putReference(c),t.putList(r,n),executeAction(e,t,DialogModes.NO)}function hide(){var e=charIDToTypeID("Hd  "),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionList,c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),n.putReference(c),t.putList(r,n),executeAction(e,t,DialogModes.NO)}function hasLayerMask(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).hasKey(cTID("Usrs"))}function deselectPath(){var e=new ActionDescriptor,t=new ActionReference;t.putClass(cTID("Path")),e.putReference(cTID("null"),t),executeAction(cTID("Dslc"),e,DialogModes.NO)}function duplicateLayerMaskAsAlpha(){selectLayerMask();
        /* ======================================= mask visible */
        var e=new ActionDescriptor;(C=new ActionReference).putEnumerated(cTID("Chnl"),cTID("Chnl"),cTID("Msk ")),e.putReference(cTID("null"),C),e.putBoolean(cTID("MkVs"),!0),executeAction(cTID("slct"),e,DialogModes.NO);
        /* =======================================================select All */
        var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Chnl"),a=charIDToTypeID("fsel");c.putProperty(o,a),r.putReference(n,c);var D=charIDToTypeID("T   "),I=charIDToTypeID("Ordn"),i=charIDToTypeID("Al  ");r.putEnumerated(D,I,i),executeAction(t,r,DialogModes.NO);
        /* ======================================================= copy */
        var T=charIDToTypeID("copy");executeAction(T,void 0,DialogModes.NO);
        /* ======================================================= make alpha */
        var p=charIDToTypeID("Mk  "),u=new ActionDescriptor,y=charIDToTypeID("Nw  "),s=new ActionDescriptor,l=charIDToTypeID("ClrI"),h=charIDToTypeID("MskI"),g=charIDToTypeID("MskA");s.putEnumerated(l,h,g);var d=charIDToTypeID("Clr "),A=new ActionDescriptor,f=charIDToTypeID("Rd  ");A.putDouble(f,255);var v=charIDToTypeID("Grn ");A.putDouble(v,0);var x=charIDToTypeID("Bl  ");A.putDouble(x,0);var m=charIDToTypeID("RGBC");s.putObject(d,m,A);var L=charIDToTypeID("Opct");s.putInteger(L,50);o=charIDToTypeID("Chnl");u.putObject(y,o,s),executeAction(p,u,DialogModes.NO);
        /* =======================================================select All */
        t=charIDToTypeID("setd");var S=new ActionDescriptor,w=(n=charIDToTypeID("null"),new ActionReference);o=charIDToTypeID("Chnl"),a=charIDToTypeID("fsel");w.putProperty(o,a),S.putReference(n,w);D=charIDToTypeID("T   "),I=charIDToTypeID("Ordn"),i=charIDToTypeID("Al  ");S.putEnumerated(D,I,i),executeAction(t,S,DialogModes.NO);
        /* =======================================================paste */
        var k=charIDToTypeID("past"),R=new ActionDescriptor,M=charIDToTypeID("AntA"),O=charIDToTypeID("Annt"),b=charIDToTypeID("Anno");R.putEnumerated(M,O,b),executeAction(k,R,DialogModes.NO);
        /* =======================================================deselect */
        t=charIDToTypeID("setd");var E=new ActionDescriptor,N=(n=charIDToTypeID("null"),new ActionReference);o=charIDToTypeID("Chnl"),a=charIDToTypeID("fsel");N.putProperty(o,a),E.putReference(n,N);D=charIDToTypeID("T   "),I=charIDToTypeID("Ordn");var X=charIDToTypeID("None");E.putEnumerated(D,I,X),executeAction(t,E,DialogModes.NO);
        /* =======================================================rename */
        var C;e=new ActionDescriptor;(C=new ActionReference).putEnumerated(cTID("Chnl"),cTID("Ordn"),cTID("Trgt")),e.putReference(cTID("null"),C);var P=new ActionDescriptor;P.putString(cTID("Nm  "),"mbTemp_alpha"),e.putObject(cTID("T   "),cTID("Chnl"),P),executeAction(cTID("setd"),e,DialogModes.NO);
        /* =======================================================select RGB */
        var B=new ActionDescriptor,G=new ActionReference;G.putEnumerated(cTID("Chnl"),cTID("Chnl"),cTID("RGB ")),B.putReference(cTID("null"),G),B.putBoolean(cTID("MkVs"),!1),executeAction(cTID("slct"),B,DialogModes.NO)}function setBackTheLayerMask(){
        /* =======================================================make mask */
        var e=charIDToTypeID("Mk  "),t=new ActionDescriptor,r=charIDToTypeID("Nw  "),n=charIDToTypeID("Chnl");t.putClass(r,n);var c=charIDToTypeID("At  "),o=new ActionReference,a=(n=charIDToTypeID("Chnl"),n=charIDToTypeID("Chnl"),charIDToTypeID("Msk "));o.putEnumerated(n,n,a),t.putReference(c,o);var D=charIDToTypeID("Usng"),I=charIDToTypeID("UsrM"),i=charIDToTypeID("RvlA");t.putEnumerated(D,I,i),executeAction(e,t,DialogModes.NO);
        /* ======================================================= */
        var T=cTID("slct"),p=new ActionDescriptor,u=cTID("null"),y=new ActionReference;n=cTID("Chnl");y.putName(n,"mbTemp_alpha"),p.putReference(u,y),executeAction(T,p,DialogModes.NO);
        /* ======================================================= */
        var s=cTID("setd"),l=new ActionDescriptor,h=(u=cTID("null"),new ActionReference),g=(n=cTID("Chnl"),cTID("fsel"));h.putProperty(n,g),l.putReference(u,h);var d=cTID("T   "),A=cTID("Ordn"),f=cTID("Al  ");l.putEnumerated(d,A,f),executeAction(s,l,DialogModes.NO);
        /* ======================================================= */
        var v=cTID("copy");executeAction(v,void 0,DialogModes.NO),
        /* ======================================================= */
        selectLayerMask();var x=new ActionDescriptor;(N=new ActionReference).putEnumerated(cTID("Chnl"),cTID("Chnl"),cTID("Msk ")),x.putReference(cTID("null"),N),x.putBoolean(cTID("MkVs"),!0),executeAction(cTID("slct"),x,DialogModes.NO);
        /* ======================================================= */
        var m=charIDToTypeID("PstI"),L=new ActionDescriptor,S=charIDToTypeID("AntA"),w=charIDToTypeID("Annt"),k=charIDToTypeID("Anno");L.putEnumerated(S,w,k),executeAction(m,L,DialogModes.NO);
        /* =======================================================select RGB */
        var R=new ActionDescriptor,M=new ActionReference;M.putEnumerated(cTID("Chnl"),cTID("Chnl"),cTID("RGB ")),R.putReference(cTID("null"),M),R.putBoolean(cTID("MkVs"),!1),executeAction(cTID("slct"),R,DialogModes.NO);
        /* ======================================================= */
        s=charIDToTypeID("setd");var O=new ActionDescriptor,b=(u=charIDToTypeID("null"),new ActionReference);n=charIDToTypeID("Chnl"),g=charIDToTypeID("fsel");b.putProperty(n,g),O.putReference(u,b);d=charIDToTypeID("T   "),A=charIDToTypeID("Ordn");var E=charIDToTypeID("None");O.putEnumerated(d,A,E),executeAction(s,O,DialogModes.NO);
        /* ======================================================= */
        var N;x=new ActionDescriptor;(N=new ActionReference).putName(charIDToTypeID("Chnl"),"mbTemp_alpha"),x.putReference(charIDToTypeID("null"),N),executeAction(charIDToTypeID("Dlt "),x,DialogModes.NO)}function getMaskDensity(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getUnitDoubleValue(sTID("userMaskDensity"))}function getMaskFeather(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getUnitDoubleValue(sTID("userMaskFeather"))}function isLayerMaskEnabled(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getBoolean(cTID("UsrM"))}function isLayerMaskLinked(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getBoolean(cTID("Usrs"))}function setMaskDensityTo(e){var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),r.putReference(n,c);var I=charIDToTypeID("T   "),i=new ActionDescriptor,T=stringIDToTypeID("userMaskDensity"),p=charIDToTypeID("#Prc");i.putUnitDouble(T,p,e);o=charIDToTypeID("Lyr ");r.putObject(I,o,i),executeAction(t,r,DialogModes.NO)}function setMaskFeatherTo(e){var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),r.putReference(n,c);var I=charIDToTypeID("T   "),i=new ActionDescriptor,T=stringIDToTypeID("userMaskFeather"),p=charIDToTypeID("#Prc");i.putUnitDouble(T,p,e);o=charIDToTypeID("Lyr ");r.putObject(I,o,i),executeAction(t,r,DialogModes.NO)}function setMaskEnabled(e){
        /* ======================================================= */
        var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),r.putReference(n,c);var I=charIDToTypeID("T   "),i=new ActionDescriptor,T=charIDToTypeID("UsrM");i.putBoolean(T,e);o=charIDToTypeID("Lyr ");r.putObject(I,o,i),executeAction(t,r,DialogModes.NO)}function setMaskLinked(e){var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),r.putReference(n,c);var I=charIDToTypeID("T   "),i=new ActionDescriptor,T=charIDToTypeID("Usrs");i.putBoolean(T,e);o=charIDToTypeID("Lyr ");r.putObject(I,o,i),executeAction(t,r,DialogModes.NO)}function isLayerFXVisible(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getBoolean(cTID("lfxv"))}function copyLayerStyle(){
        /* ======================================================= */
        var e=charIDToTypeID("CpFX");executeAction(e,void 0,DialogModes.NO)}function pasteLayerStyle(){
        /* ======================================================= */
        var e=charIDToTypeID("PaFX"),t=new ActionDescriptor,r=stringIDToTypeID("allowPasteFXOnLayerSet");t.putBoolean(r,!0),executeAction(e,t,DialogModes.NO)}function hasVectorMask(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getBoolean(sTID("hasVectorMask"))}function getVectorMaskDensity(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getInteger(sTID("vectorMaskDensity"))}function getVectorMaskFeather(){var e=new ActionReference;return e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt")),executeActionGet(e).getUnitDoubleValue(sTID("vectorMaskFeather"))}
        /*function isVectorMaskEnabled() {
           var m_Ref01 = new ActionReference();
        
           m_Ref01.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ));
           var m_Dsc01= executeActionGet( m_Ref01 );
           if(m_Dsc01.hasKey( 967 )){
              alert("VE");
           }
           return m_Dsc01.getBoolean( 967 );
        }
        
        function isVectorMaskLinked() {
           var m_Ref01 = new ActionReference();
           m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
           var m_Dsc01= executeActionGet( m_Ref01 );
          if(m_Dsc01.hasKey( 968 )){
              alert("VE");
           }
           return m_Dsc01.getBoolean( 968 );
        }*/function setVectorMaskDensityTo(e){var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),r.putReference(n,c);var I=charIDToTypeID("T   "),i=new ActionDescriptor,T=stringIDToTypeID("vectorMaskDensity"),p=charIDToTypeID("#Prc");i.putUnitDouble(T,p,e);o=charIDToTypeID("Lyr ");r.putObject(I,o,i),executeAction(t,r,DialogModes.NO)}function setVectorMaskFeatherTo(e){var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),r.putReference(n,c);var I=charIDToTypeID("T   "),i=new ActionDescriptor,T=stringIDToTypeID("vectorMaskFeather"),p=charIDToTypeID("#Prc");i.putUnitDouble(T,p,e);o=charIDToTypeID("Lyr ");r.putObject(I,o,i),executeAction(t,r,DialogModes.NO)}
        /*function setVectorMaskEnabled(foo){
          
          var idsetd = charIDToTypeID( "setd" );
              var desc27 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var ref14 = new ActionReference();
                  var idLyr = charIDToTypeID( "Lyr " );
                  var idOrdn = charIDToTypeID( "Ordn" );
                  var idTrgt = charIDToTypeID( "Trgt" );
                  ref14.putEnumerated( idLyr, idOrdn, idTrgt );
              desc27.putReference( idnull, ref14 );
              var idT = charIDToTypeID( "T   " );
                  var desc28 = new ActionDescriptor();
                  var idUsrM = charIDToTypeID( "vectorMaskEnabled" );
                  desc28.putBoolean( idUsrM, foo );
              var idLyr = charIDToTypeID( "Lyr " );
              desc27.putObject( idT, idLyr, desc28 );
          executeAction( idsetd, desc27, DialogModes.NO );
        }
        
        function setVectorMaskLinked(foo){
            var idsetd = charIDToTypeID( "setd" );
              var desc31 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var ref16 = new ActionReference();
                  var idLyr = charIDToTypeID( "Lyr " );
                  var idOrdn = charIDToTypeID( "Ordn" );
                  var idTrgt = charIDToTypeID( "Trgt" );
                  ref16.putEnumerated( idLyr, idOrdn, idTrgt );
              desc31.putReference( idnull, ref16 );
              var idT = charIDToTypeID( "T   " );
                  var desc32 = new ActionDescriptor();
                  var idUsrs = charIDToTypeID( "vectorMaskLinked" );
                  desc32.putBoolean( idUsrs, foo );
              var idLyr = charIDToTypeID( "Lyr " );
              desc31.putObject( idT, idLyr, desc32 );
          executeAction( idsetd, desc31, DialogModes.NO );
        }
        */function isLocked(){var e=new ActionReference;e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt"));var t=executeActionGet(e);return a=t.getObjectValue(sTID("layerLocking")),a.getBoolean(sTID("protectAll"))}function unlock(){var e=charIDToTypeID("setd"),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionReference,c=charIDToTypeID("Lyr "),o=charIDToTypeID("Ordn"),a=charIDToTypeID("Trgt");n.putEnumerated(c,o,a),t.putReference(r,n);var D=charIDToTypeID("T   "),I=new ActionDescriptor,i=stringIDToTypeID("layerLocking"),T=new ActionDescriptor,p=stringIDToTypeID("protectNone");T.putBoolean(p,!0);i=stringIDToTypeID("layerLocking");I.putObject(i,i,T);c=charIDToTypeID("Lyr ");t.putObject(D,c,I),executeAction(e,t,DialogModes.NO)}function lock(){var e=charIDToTypeID("setd"),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionReference,c=charIDToTypeID("Lyr "),o=charIDToTypeID("Ordn"),a=charIDToTypeID("Trgt");n.putEnumerated(c,o,a),t.putReference(r,n);var D=charIDToTypeID("T   "),I=new ActionDescriptor,i=stringIDToTypeID("layerLocking"),T=new ActionDescriptor,p=stringIDToTypeID("protectAll");T.putBoolean(p,!0);i=stringIDToTypeID("layerLocking");I.putObject(i,i,T);c=charIDToTypeID("Lyr ");t.putObject(D,c,I),executeAction(e,t,DialogModes.NO)}function getColor(){var e=new ActionReference;e.putEnumerated(sTID("layer"),cTID("Ordn"),cTID("Trgt"));var t=executeActionGet(e);return a=t.getEnumerationValue(cTID("Clr ")),typeIDToCharID(a)}function setColorTo(e){var t=charIDToTypeID("setd"),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=charIDToTypeID("Lyr "),a=charIDToTypeID("Ordn"),D=charIDToTypeID("Trgt");c.putEnumerated(o,a,D),r.putReference(n,c);var I=charIDToTypeID("T   "),i=new ActionDescriptor,T=charIDToTypeID("Clr "),p=(T=charIDToTypeID("Clr "),charIDToTypeID(e));i.putEnumerated(T,T,p);o=charIDToTypeID("Lyr ");r.putObject(I,o,i),executeAction(t,r,DialogModes.NO)}function activateLayerMask(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(cTID("Chnl"),cTID("Chnl"),cTID("Msk ")),e.putReference(cTID("null"),t);try{executeAction(cTID("slct"),e,DialogModes.NO)}catch(e){var r=new TemporaryAlpha;maskFromSelection(),activateLayerMask(),r.consume()}}function deleteMask(e){e&&loadSelectionOfMask();var t=new ActionDescriptor,r=new ActionReference;r.putEnumerated(cTID("Chnl"),cTID("Ordn"),cTID("Trgt")),t.putReference(cTID("null"),r);try{executeAction(cTID("Dlt "),t,DialogModes.NO)}catch(e){}}function selectLayerMask(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(cTID("Chnl"),cTID("Chnl"),cTID("Msk ")),e.putReference(cTID("null"),t),e.putBoolean(cTID("MkVs"),!1);try{executeAction(cTID("slct"),e,DialogModes.NO)}catch(e){}}function loadSelectionOfMask(){selectLayerMask();var e=new ActionDescriptor,t=new ActionReference;t.putProperty(cTID("Chnl"),cTID("fsel")),e.putReference(cTID("null"),t);var r=new ActionReference;r.putEnumerated(cTID("Chnl"),cTID("Ordn"),cTID("Trgt")),e.putReference(cTID("T   "),r);try{executeAction(cTID("setd"),e,DialogModes.NO)}catch(e){}}function maskFromSelection(){if(hasLayerMask())confirm("Delete existing mask?",!0,"Warning")&&(activateLayerMask(),deleteMask());else{var e=new ActionDescriptor;e.putClass(cTID("Nw  "),cTID("Chnl"));var t=new ActionReference;t.putEnumerated(cTID("Chnl"),cTID("Chnl"),cTID("Msk ")),e.putReference(cTID("At  "),t),e.putEnumerated(cTID("Usng"),cTID("UsrM"),cTID("RvlS"));try{executeAction(cTID("Mk  "),e,DialogModes.NO)}catch(e){activeDocument.selection.selectAll(),maskFromSelection()}}}function duplicateVectorMask(){
        /* ======================================================= */
        var e=charIDToTypeID("slct"),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionReference,c=charIDToTypeID("Path"),o=(c=charIDToTypeID("Path"),stringIDToTypeID("vectorMask"));n.putEnumerated(c,c,o);var a=charIDToTypeID("Lyr "),D=charIDToTypeID("Ordn"),I=charIDToTypeID("Trgt");n.putEnumerated(a,D,I),t.putReference(r,n),executeAction(e,t,DialogModes.NO);
        /* ======================================================= */
        var i=charIDToTypeID("Mk  "),T=new ActionDescriptor,p=(r=charIDToTypeID("null"),new ActionReference);c=charIDToTypeID("Path");p.putClass(c),T.putReference(r,p);var u=charIDToTypeID("From"),y=new ActionReference;c=charIDToTypeID("Path"),c=charIDToTypeID("Path"),o=stringIDToTypeID("vectorMask");y.putEnumerated(c,c,o);a=charIDToTypeID("Lyr "),D=charIDToTypeID("Ordn"),I=charIDToTypeID("Trgt");y.putEnumerated(a,D,I),T.putReference(u,y),executeAction(i,T,DialogModes.NO);
        /* ======================================================= */
        var s=charIDToTypeID("Rnm "),l=new ActionDescriptor,h=(r=charIDToTypeID("null"),new ActionReference);c=charIDToTypeID("Path"),D=charIDToTypeID("Ordn"),I=charIDToTypeID("Trgt");h.putEnumerated(c,D,I),l.putReference(r,h);var g=charIDToTypeID("T   ");l.putString(g,"mbTemp_path"),executeAction(s,l,DialogModes.NO);
        /* ======================================================= */
        var d=charIDToTypeID("Dslc"),A=new ActionDescriptor,f=(r=charIDToTypeID("null"),new ActionReference);c=charIDToTypeID("Path");f.putClass(c),A.putReference(r,f),executeAction(d,A,DialogModes.NO)}function recreateVectorMask(){
        /* ======================================================= */
        var e=charIDToTypeID("slct"),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionReference,c=charIDToTypeID("Path");n.putName(c,"mbTemp_path"),t.putReference(r,n),executeAction(e,t,DialogModes.NO);
        /* ======================================================= */
        var o=charIDToTypeID("Mk  "),a=new ActionDescriptor,D=(r=charIDToTypeID("null"),new ActionReference);c=charIDToTypeID("Path");D.putClass(c),a.putReference(r,D);var I=charIDToTypeID("At  "),i=new ActionReference,T=(c=charIDToTypeID("Path"),c=charIDToTypeID("Path"),stringIDToTypeID("vectorMask"));i.putEnumerated(c,c,T),a.putReference(I,i);var p=charIDToTypeID("Usng"),u=new ActionReference,y=(c=charIDToTypeID("Path"),charIDToTypeID("Ordn")),s=charIDToTypeID("Trgt");u.putEnumerated(c,y,s),a.putReference(p,u),executeAction(o,a,DialogModes.NO);
        /* ======================================================= */
        var l=new ActionDescriptor,h=new ActionReference;h.putName(charIDToTypeID("Path"),"mbTemp_path"),l.putReference(charIDToTypeID("null"),h),executeAction(charIDToTypeID("Dlt "),l,DialogModes.NO)}function groupSelected(e){var t=new ActionDescriptor,r=new ActionReference;r.putClass(sTID("layerSection")),t.putReference(cTID("null"),r);var n=new ActionReference;n.putEnumerated(cTID("Lyr "),cTID("Ordn"),cTID("Trgt")),t.putReference(cTID("From"),n);var c=new ActionDescriptor;return c.putString(cTID("Nm  "),e),t.putObject(cTID("Usng"),sTID("layerSection"),c),executeAction(cTID("Mk  "),t,DialogModes.NO),activeDocument.activeLayer}function addToSelection(e){var t=new ActionDescriptor,r=new ActionReference;r.putName(cTID("Lyr "),e),t.putReference(cTID("null"),r),t.putEnumerated(sTID("selectionModifier"),sTID("selectionModifierType"),sTID("addToSelection")),t.putBoolean(cTID("MkVs"),!1);try{executeAction(cTID("slct"),t,DialogModes.NO)}catch(e){}}function TemporaryAlpha(){activeDocument.selection.store(this.alpha=activeDocument.channels.add()),activeDocument.selection.deselect(),this.consume=function(){activeDocument.selection.load(this.alpha),this.alpha.remove()}}function makeActiveByIndex(e,t){e.constructor!=Array&&(e=[e]);for(var r=0;r<e.length;r++){var n=new ActionDescriptor,c=new ActionReference;if(c.putIndex(charIDToTypeID("Lyr "),e[r]),n.putReference(charIDToTypeID("null"),c),r>0){var o=stringIDToTypeID("selectionModifier"),a=stringIDToTypeID("selectionModifierType"),D=stringIDToTypeID("addToSelection");n.putEnumerated(o,a,D)}n.putBoolean(charIDToTypeID("MkVs"),t),executeAction(charIDToTypeID("slct"),n,DialogModes.NO)}}function deleteActiveLayer(){
        /* ======================================================= */
        var e=charIDToTypeID("Dlt "),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionReference,c=charIDToTypeID("Lyr "),o=charIDToTypeID("Ordn"),a=charIDToTypeID("Trgt");n.putEnumerated(c,o,a),t.putReference(r,n),executeAction(e,t,DialogModes.NO)}function isLayerSet(e){var t=stringIDToTypeID("layerSection"),r=new ActionReference;r.putProperty(charIDToTypeID("Prpr"),t),r.putIndex(charIDToTypeID("Lyr "),e);var n=executeActionGet(r).getEnumerationValue(t);return"layerSectionStart"==typeIDToStringID(n)}function openGroup1(e){currSetIDX=getActiveLayerIndex(),isLayerSet(currSetIDX)&&getNamesPlusIDsOfLayerSet(),makeActiveByIndex(currSetIDX,!1)}function openGroup1byIDX(e){
        /* currSetIDX= getActiveLayerIndex(); */
        isLayerSet(e)&&getNamesPlusIDsOfLayerSet(),makeActiveByIndex(e,!1)}function getNamesPlusIDsOfLayerSet(){var e=new ActionReference;e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));executeActionGet(e).getInteger(charIDToTypeID("Cnt ")),executeActionGet(e).getInteger(stringIDToTypeID("layerID"));var t=[],r=0,n=0;currINDEX=getActiveLayerIndex();for(var c=currINDEX;c>0;c--){(e=new ActionReference).putIndex(charIDToTypeID("Lyr "),c);var o=executeActionGet(e),a=o.getString(charIDToTypeID("Nm  ")),D=o.getInteger(stringIDToTypeID("layerID")),I=o.getEnumerationValue(stringIDToTypeID("layerSection"));
        /* alert(layerName+": _ :"+ls); */
        "layerSectionStart"==(I=typeIDToStringID(I))&&r++;
        /*        if (layerName.match(/^<\/Layer group/)) { */
        var i=new RegExp("^</Layer group");if(a.match(i)){if(0==r-++n&&"layerSectionEnd"==I)break}else{if("layerSectionContent"==I){makeActiveByIndex(c,!1);break}var T="layerSectionContent"!=typeIDToStringID(o.getEnumerationValue(stringIDToTypeID("layerSection")));t.push([[D],[a],[T]])}}return t}function getLayersNb(){var e=new ActionReference;return e.putProperty(charIDToTypeID("Prpr"),stringIDToTypeID("numberOfLayers")),e.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),executeActionGet(e).getInteger(stringIDToTypeID("numberOfLayers"))}function toogleOpenCloseSet(){if(myALayerIDX=getActiveLayerIndex(),myGroupP=app.activeDocument.activeLayer,isLayerSet(myALayerIDX))getNbOfChilds()>1&&(isSetOpened1(myGroupP)?closeGroup(myGroupP):openGroup1(myGroupP));else{myGroupP=app.activeDocument.activeLayer.parent;try{app.activeDocument.activeLayer=myGroupP}catch(e){return}getNbOfChilds()>1&&"Document"!=myGroupP.typename&&(isSetOpened1(myGroupP)?closeGroup(myGroupP):openGroup1(myGroupP))}}function getFristLayerSetChildVisible(){xx=!1;var e=new ActionReference;e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));executeActionGet(e).getInteger(charIDToTypeID("Cnt "));var t=executeActionGet(e).getInteger(stringIDToTypeID("layerID")),r=[],n=0,c=0,o=0;currINDEX=getActiveLayerIndex();for(var a=currINDEX;a>0;a--){(e=new ActionReference).putIndex(charIDToTypeID("Lyr "),a);var D=executeActionGet(e),I=D.getString(charIDToTypeID("Nm  ")),i=D.getInteger(stringIDToTypeID("layerID")),T=D.getEnumerationValue(stringIDToTypeID("layerSection"));if(
        /* alert(layerName+": _ :"+vis); */
        /*        if(desc.hasKey(stringIDToTypeID("visible")))
                {
                  alert(desc.getType(stringIDToTypeID("visible")));
                };*/
        "layerSectionStart"==(T=typeIDToStringID(T))&&n++,1==D.getInteger(stringIDToTypeID("visible"))&&i!=t&&0!=o){var p={id:i,lname:I,idx:a};xx=!0,r.push(p);break}
        /*      if(layerName.match(/^<\/Layer group/) ) */var u=new RegExp("^</Layer group");if(I.match(u)){if(0==(o=n-++c)&&"layerSectionEnd"==T)break}else;}return r}function getLastChildIdx(){xx=!1;var e=new ActionReference;e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));executeActionGet(e).getInteger(charIDToTypeID("Cnt ")),executeActionGet(e).getInteger(stringIDToTypeID("layerID"));currINDEX=getActiveLayerIndex();for(var t=currINDEX,r=0,n=0,c=0;t>0;t--){(e=new ActionReference).putIndex(charIDToTypeID("Lyr "),t);var o=executeActionGet(e),a=o.getString(charIDToTypeID("Nm  ")),D=(o.getInteger(stringIDToTypeID("layerID")),o.getEnumerationValue(stringIDToTypeID("layerSection")));D=typeIDToStringID(D);o.getInteger(stringIDToTypeID("visible"));"layerSectionStart"==D&&r++;
        /*      if(layerName.match(/^<\/Layer group/)) {*/
        var I=new RegExp("^</Layer group");if(a.match(I)&&0==r-++n&&"layerSectionEnd"==D){c=t;break}
        /* alert(x+" _ "+y+" _ "+r+" _ "+layerName); */}return c}function getNbOfChilds(){xx=!1;var e=new ActionReference;e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));executeActionGet(e).getInteger(charIDToTypeID("Cnt ")),executeActionGet(e).getInteger(stringIDToTypeID("layerID"));currINDEX=getActiveLayerIndex();for(var t=currINDEX,r=0,n=0,c=0;t>0;t--){(e=new ActionReference).putIndex(charIDToTypeID("Lyr "),t);var o=executeActionGet(e),a=o.getString(charIDToTypeID("Nm  ")),D=(o.getInteger(stringIDToTypeID("layerID")),o.getEnumerationValue(stringIDToTypeID("layerSection")));D=typeIDToStringID(D);o.getInteger(stringIDToTypeID("visible"));"layerSectionStart"==D&&n++;
        /*      if(layerName.match(/^<\/Layer group/)) {*/
        var I=new RegExp("^</Layer group");if(a.match(I)){if(0==n-++c&&"layerSectionEnd"==D)break}else r++}return r}function isSetOpened1(e){app.activeDocument.activeLayer=e,mb_Locked=isLocked(),mb_visible=isVisible(),1==mb_Locked&&unlock(),xx=!0,currSetIDX=getActiveLayerIndex(),currSetIDX1=getActiveLayerIndex(),hasBackground()||(currSetIDX1-=1),addTempLayerSetIn(currSetIDX1);var t=getActiveLayerIndex();return makeActiveByIndex(currSetIDX+2,!1),t==getActiveLayerIndex()&&(xx=!1),deleteTempLayerSetbyIdx(currSetIDX+1),1==mb_Locked&&lock(),0==mb_visible&&hide(),xx}function isSetOpened2(e){makeActiveByIndex(e,!1),mb_Locked=isLocked(),mb_visible=isVisible(),1==mb_Locked&&unlock(),xx=!0,currSetIDX=getActiveLayerIndex(),currSetIDX1=getActiveLayerIndex(),hasBackground()||(currSetIDX1-=1),addTempLayerSetIn(currSetIDX1);var t=getActiveLayerIndex();return makeActiveByIndex(currSetIDX+2,!1),t==getActiveLayerIndex()&&(xx=!1),deleteTempLayerSetbyIdx(currSetIDX+1),1==mb_Locked&&lock(),0==mb_visible&&hide(),xx}function addTempLayerSetIn(e){
        /* ======================================================= */
        var t=charIDToTypeID("Mk  "),r=new ActionDescriptor,n=charIDToTypeID("null"),c=new ActionReference,o=stringIDToTypeID("layerSection");c.putClass(o),r.putReference(n,c),executeAction(t,r,DialogModes.NO);
        /* =======================================================rename */
        var a=charIDToTypeID("setd"),D=new ActionDescriptor,I=(n=charIDToTypeID("null"),new ActionReference),i=charIDToTypeID("Lyr "),T=charIDToTypeID("Ordn"),p=charIDToTypeID("Trgt");I.putEnumerated(i,T,p),D.putReference(n,I);var u=charIDToTypeID("T   "),y=new ActionDescriptor,s=charIDToTypeID("Nm  ");y.putString(s,"mb-dummy tempTestLayerSetOpen_Closed");i=charIDToTypeID("Lyr ");D.putObject(u,i,y),executeAction(a,D,DialogModes.NO);
        /* =======================================================move */
        var l=charIDToTypeID("move"),h=new ActionDescriptor,g=(n=charIDToTypeID("null"),new ActionReference);i=charIDToTypeID("Lyr "),T=charIDToTypeID("Ordn"),p=charIDToTypeID("Trgt");g.putEnumerated(i,T,p),h.putReference(n,g);u=charIDToTypeID("T   ");var d=new ActionReference;i=charIDToTypeID("Lyr ");d.putIndex(i,e),h.putReference(u,d);var A=charIDToTypeID("Adjs");h.putBoolean(A,!1);var f=charIDToTypeID("Vrsn");h.putInteger(f,5),executeAction(l,h,DialogModes.NO)}function deleteTempLayerSetbyIdx(e){
        /* ======================================================= */
        var t=charIDToTypeID("Dlt "),r=new ActionDescriptor,n=new ActionReference;n.putIndex(charIDToTypeID("Lyr "),e),
        /* ref.putIdentifier(charIDToTypeID( 'Lyr ' ), idxx); */
        r.putReference(charIDToTypeID("null"),n),executeAction(t,r,DialogModes.NO)}function myselectNext(){currINDEX=getActiveLayerIndex(),lastSetIdx=0,lastLayer=0,testIDX=1,hasBackground()&&(lastLayer=-1,testIDX=0),isLayerSet(currINDEX)&&(getNbOfChilds()>1?isSetOpened2(currINDEX)||(lastSetIdx=getLastChildIdx(),currINDEX=lastSetIdx):currINDEX-=1),nextIndex=currINDEX-1,nextIndex<=lastLayer&&(nextIndex=getLayersNb());
        /*  if(getLayerName(nextIndex).match(/^<\/Layer group/)){ */
        var e=new RegExp("^</Layer group");if(getLayerName(nextIndex).match(e))for(bb=nextIndex-1,bb;bb>0;bb--){
        /*      if(getLayerName(bb).match(/^<\/Layer group/)){ */
        e=new RegExp("^</Layer group");if(!getLayerName(bb).match(e))break;nextIndex--}try{makeActiveByIndex(nextIndex,!1)}catch(e){}if(currINDEX!=testIDX&&getActiveLayerIndex()==getLayersNb())try{makeActiveByIndex(nextIndex-1,!1)}catch(e){}}function addNext(){theCurrentSelectionIDX=getSelectedLayersIdx(),makeActiveByIndex(theCurrentSelectionIDX[0],!1),myselectNext(),theCurrentSelectionIDX.push(getActiveLayerIndex()),makeActiveByIndex(theCurrentSelectionIDX,!1)}function isEndOfSet(e){xx=!1,ref=new ActionReference,ref.putIndex(charIDToTypeID("Lyr "),e);var t=executeActionGet(ref),r=t.getString(charIDToTypeID("Nm  ")),n=(t.getInteger(stringIDToTypeID("layerID")),t.getEnumerationValue(stringIDToTypeID("layerSection")));n=typeIDToStringID(n);t.getInteger(stringIDToTypeID("visible"));
        /*if(layerName.match(/^<\/Layer group/)) {*/var c=new RegExp("^</Layer group");return r.match(c)&&"layerSectionEnd"==n&&(xx=!0),xx}function getStartIDXfor(e){xx=!1;var t=getLayersNb();currINDEX=e;
        /* alert(i + " count: "+count); */
        for(var r=currINDEX,n=0,c=0,o=0;r<=t;r++){ref=new ActionReference,ref.putIndex(charIDToTypeID("Lyr "),r);var a=executeActionGet(ref),D=(a.getString(charIDToTypeID("Nm  ")),a.getInteger(stringIDToTypeID("layerID")),a.getEnumerationValue(stringIDToTypeID("layerSection")));D=typeIDToStringID(D);a.getInteger(stringIDToTypeID("visible"));
        /* alert(ls +" _ "+ r + " i_ "+ i + " name_ "+layerName); */if("layerSectionEnd"==D&&c++,"layerSectionStart"==D&&o++,0==c-o&&"layerSectionStart"==D){n=r;break}}return n}function myselectPrevious(){for(nbL=getLayersNb(),currINDEX=getActiveLayerIndex(),lastSetIdx=0,lastLayer=1,hasBackground()&&(lastLayer=0),currINDEX==nbL?nextIndex=lastLayer:nextIndex=currINDEX+1,b=getLayersNb(),aa=0;aa<b&&isEndOfSet(nextIndex);aa++)parentIDX=getStartIDXfor(nextIndex),isSetOpened2(parentIDX)?nextIndex++:nextIndex=parentIDX;try{makeActiveByIndex(nextIndex,!1)}catch(e){}if(getActiveLayerIndex()==getLayersNb()){nextIndex++;try{makeActiveByIndex(nextIndex,!1)}catch(e){}}}function addPrevious(){theCurrentSelectionIDX=getSelectedLayersIdx(),makeActiveByIndex(theCurrentSelectionIDX[theCurrentSelectionIDX.length-1],!1),myselectPrevious(),theCurrentSelectionIDX.push(getActiveLayerIndex()),makeActiveByIndex(theCurrentSelectionIDX,!1)}function myselectNextFor(e){for(i=0;i<e;i++)myselectNext()}function getVisible(){var e=new ActionReference;return e.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),executeActionGet(e).getInteger(stringIDToTypeID("visible"))}function getVisibleforIDX(e){var t=new ActionReference;return t.putIndex(charIDToTypeID("Lyr "),e),executeActionGet(t).getInteger(stringIDToTypeID("visible"))}function toogleVisibility(){if(getVisible()){var e=new ActionDescriptor,t=new ActionList;(r=new ActionReference).putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),t.putReference(r),e.putList(charIDToTypeID("null"),t),executeAction(charIDToTypeID("Hd  "),e,DialogModes.NO)}else{var r;e=new ActionDescriptor,t=new ActionList;(r=new ActionReference).putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),t.putReference(r),e.putList(charIDToTypeID("null"),t),executeAction(charIDToTypeID("Shw "),e,DialogModes.NO)}}function showOnlyThis(){selectionIDX=getSelectedLayersIdx(),setBack=!1;for(i=0;i<selectionIDX.length;i++)for(par in theParents=loopParentsIDXfor(selectionIDX[i]),theParents)isVisibleIDX(theParents[par])||(selectionIDX.push(theParents[par]));
        /* makeActiveByIndex(selectionIDX,false); */if(selectionIDX.length>1){
        /* ======================================================= */
        var e=charIDToTypeID("Shw "),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionList,c=new ActionReference,o=charIDToTypeID("Lyr "),D=charIDToTypeID("Ordn"),I=charIDToTypeID("Trgt");c.putEnumerated(o,D,I),n.putReference(c),t.putList(r,n);var T=charIDToTypeID("TglO");if(t.putBoolean(T,!0),executeAction(e,t,DialogModes.NO),0==setBack)for(i=0;i<selectionIDX.length;i++)makeVisByIndex(selectionIDX[i],!0);
        /*      for(i =selectionIDX.length-1;i>=0;i--){
                if(toDeselect != 0){
                  removeFromSel(selectionIDX[i]);
                  toDeselect --;
                }else{break};
              }*/else for(a=0;a<selectionIDX.length;a++);}else{
        /* ======================================================= */
        e=charIDToTypeID("Shw "),t=new ActionDescriptor,r=charIDToTypeID("null"),n=new ActionList,c=new ActionReference,o=charIDToTypeID("Lyr "),D=charIDToTypeID("Ordn"),I=charIDToTypeID("Trgt");c.putEnumerated(o,D,I),n.putReference(c),t.putList(r,n);T=charIDToTypeID("TglO");t.putBoolean(T,!0),executeAction(e,t,DialogModes.NO)}}function removeFromSel(e){var t=new ActionDescriptor,r=new ActionReference;r.putIndex(charIDToTypeID("Lyr "),e),t.putReference(charIDToTypeID("null"),r),t.putEnumerated(stringIDToTypeID("selectionModifier"),stringIDToTypeID("selectionModifierType"),stringIDToTypeID("removeFromSelection"));var n=charIDToTypeID("MkVs");t.putBoolean(n,!1),executeAction(charIDToTypeID("slct"),t,DialogModes.NO)}function makeVisByIndex(e,t){if(1==t)var r=charIDToTypeID("Shw ");else r=charIDToTypeID("Hd  ");var n=new ActionDescriptor,c=new ActionReference;c.putIndex(charIDToTypeID("Lyr "),e),n.putReference(charIDToTypeID("null"),c),executeAction(r,n,DialogModes.NO)}function getSelectedLayersIdx(){var e=new Array;(t=new ActionReference).putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));var t,r=executeActionGet(t),n=1;if(hasBackground()&&(n=0),r.hasKey(stringIDToTypeID("targetLayers")))for(var c=(r=r.getList(stringIDToTypeID("targetLayers"))).count,o=(e=new Array,0);o<c;o++)e.push(r.getReference(o).getIndex()+n);else(t=new ActionReference).putProperty(charIDToTypeID("Prpr"),charIDToTypeID("ItmI")),t.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),srs=hasBackground()?executeActionGet(t).getInteger(charIDToTypeID("ItmI"))-1:executeActionGet(t).getInteger(charIDToTypeID("ItmI")),e.push(srs);return e}function selectParent(){try{app.activeDocument.activeLayer=app.activeDocument.activeLayer.parent}catch(e){}}function getParentIDXfor(e){xx=!1;var t=getLayersNb();currINDEX=e;var r=currINDEX,n=0,c=1,o=0;try{isLayerSet(e)&&(o=-1)}catch(e){return}for(;r<=t;r++){ref=new ActionReference,ref.putIndex(charIDToTypeID("Lyr "),r);var a=executeActionGet(ref),D=(a.getString(charIDToTypeID("Nm  ")),a.getInteger(stringIDToTypeID("layerID")),a.getEnumerationValue(stringIDToTypeID("layerSection")));D=typeIDToStringID(D);a.getInteger(stringIDToTypeID("visible"));
        /* alert(ls +" _ "+x+"-"+y+"="+r+ " idx_ "+ i + " name_ "+layerName); */
        if("layerSectionEnd"==D&&c++,"layerSectionStart"==D&&o++,0==c-o&&"layerSectionStart"==D){n=r;break}}return n}function loopParentsIDXfor(e){var t=new Array,r=getLayersNb(),n=getParentIDXfor(e);for(k=0;k<r&&0!=n;k++)t.push(n),n=getParentIDXfor(n);
        /* alert(parents); */return t}function hasBackground(){var e=void 0;try{var t=new ActionReference;t.putProperty(cTID("Prpr"),cTID("Nm  ")),t.putIndex(cTID("Lyr "),0),executeActionGet(t).getString(cTID("Nm  ")),e=!0}catch(t){e=!1}return e}function getLayerName(e){var t=new ActionReference;return t.putIndex(cTID("Lyr "),e),executeActionGet(t).getString(charIDToTypeID("Nm  "))}function getSibilings(){theSlIDX=getSelectedLayersIdx();var e=[],t=[];for(a in theSlIDX)t.push(getParentIDXfor(theSlIDX[a]));for(l in t=eliminateDuplicates(t)){parent=t[l],count=getLayersNb();var n=0;for(0==parent?i=count:i=parent-1,hasBackground()||(n=1),x=0,y=0,r=0,i;i>=n;i--){ref=new ActionReference,ref.putIndex(charIDToTypeID("Lyr "),i);var c=executeActionGet(ref),o=(c.getString(charIDToTypeID("Nm  ")),c.getEnumerationValue(stringIDToTypeID("layerSection")));if(o=typeIDToStringID(o),e.push(i),
        /* alert(layerName +" _ "+ r+ " - " + i); */
        i==theSlIDX[l]&&
        /* alert("remove: " + i); */
        e.pop(1),0!=r&&i!=theSlIDX[l]&&
        /* alert("remove: " + i); */
        e.pop(1),"layerSectionStart"==o&&x++,"layerSectionEnd"==o&&(y++,0==r))break;r=x-y}}return e}function getSibilings1(){theSlIDX=getSelectedLayersIdx();var e=[];count=getLayersNb();var t=0,n=count;tempSibilings={},hasBackground()||(t=1),x=0,y=0,r=0,parent=[0],oldParent=0,whatSibilingsMatterO={};var o=[];for(e=[];n>=t;n--){ref=new ActionReference,ref.putIndex(charIDToTypeID("Lyr "),n);var a=executeActionGet(ref).getEnumerationValue(stringIDToTypeID("layerSection"));
        /* var layerName = desc.getString(charIDToTypeID( 'Nm  ' )); */a=typeIDToStringID(a),cparent=parent[parent.length-1].toString(),(o=null==tempSibilings[cparent]?[]:tempSibilings[cparent]).push(n),tempSibilings[cparent]=o,"layerSectionStart"==a&&parent.push(n),"layerSectionEnd"==a&&parent.pop(1),n==theSlIDX[theSlIDX.length-1]&&(/*if is the selected one */
        theSlIDX.pop(1),whatSibilingsMatterO[cparent]=cparent,tss1=tempSibilings[cparent],tss1.pop(1),/*remove current */
        tempSibilings[cparent]=tss1)}for(c in whatSibilingsMatterO)
        /* alert(c+" : "+tempSibilings[whatSibilingsMatterO[c]]); */
        e=e.concat(tempSibilings[whatSibilingsMatterO[c]]);return e}function addSibilings(){theSelIDX1=getSelectedLayersIdx(),theSibilings=getSibilings1(),makeActiveByIndex(theSelIDX1.concat(theSibilings),!1)}function selectOnlySibilings(){
        /*first aproach */
        theSibilings=getSibilings1();try{makeActiveByIndex(theSibilings,!1)}catch(e){}}function getParentIndex1(e){ref=new ActionReference,ref.putIndex(charIDToTypeID("Lyr "),e),executeActionGet(ref).hasKey(stringIDToTypeID("targetEnum"))&&alert("parentIDX")}function eliminateDuplicates(e){var t,r=e.length,n=[],c={};for(t=0;t<r;t++)c[e[t]]=0;for(t in c)n.push(t);return n}function eliminateTheSame(e,t){var r,n=e.length,c=t.length,o=[];for(r=0;r<n;r++)for(o.push(e[r]),j=0;j<c;j++)
        /* alert(arr1[i] +" - "+arr2[j]); */
        if(e[r]==t[j]){
        /* alert("brek"); */
        o.pop(1);break}
        /* alert(out); */return o}function testSelectMultiple(e){makeActiveByIndex([e[0],e[1]],!1);var t=new ActionReference;t.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),executeActionGet(t).hasKey(stringIDToTypeID("targetLayers"))&&alert("targetLayers"),alert("startSelMult");
        /* ======================================================= */
        var r=new ActionDescriptor;(new ActionReference).putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));new ActionList;
        /*     for(i=0;i<arr.length;i++){
                       eval("var ref"+i+" = new ActionReference()");
                       eval("ref"+i+".putIndex(charIDToTypeID( 'Lyr ' ), "+arr[i]+")");
                       eval("list.putReference(ref"+i+")");
                     }
               desc.putList(stringIDToTypeID( 'targetLayers' ), list); */executeAction(charIDToTypeID("setd"),r,DialogModes.NO),alert("endSelMult")}
        /* testSelectMultiple([1,3,5,7]); */
    /* TODO wird überflüssig wenn das Panel auch die basic bekommt */
            function fitScreen(){runMenuItem(cTID("FtOn"))}/* FIT TO SCREEN */
            function zoomOut(){runMenuItem(cTID("ZmOt"))}/* ZOOM - */
            function zoomIn(){runMenuItem(cTID("ZmIn"))}/* ZOOM + */
            function apfel0(){runMenuItem(cTID("ActP"))}/* ACTUAL PIXEL */
            function zoom100(){runMenuItem(cTID("ActP"))}/* ACTUAL PIXEL */
            function zoomOutSteps(e){for(var n=0;n<e;n++)app.runMenuItem(charIDToTypeID("ZmOt"))}function standardmodus(){runMenuItem(sTID("screenModeStandard"))}function vollbildmodus_menu(){runMenuItem(sTID("screenModeFullScreenWithMenubar"))}function vollbildmodus(){runMenuItem(sTID("screenModeFullScreen"))}function anordung_kachel(){runMenuItem(cTID("Tile"))}function anordung_1(){runMenuItem(sTID("consolidateAllTabs"))}function anordung_2vertical(){runMenuItem(sTID("2upVertical"))}function anordung_2horizontal(){runMenuItem(sTID("2upHorizontal"))}function anordung_3(){runMenuItem(sTID("3upStacked"))}function anordung_3vertical(){runMenuItem(sTID("3upVertical"))}function anordung_3horizontal(){runMenuItem(sTID("3upHorizontal"))}function anordung_4(){runMenuItem(sTID("4upTile"))}function anordung_6(){runMenuItem(sTID("6upTile"))}cTID=function(e){return app.charIDToTypeID(e)},sTID=function(e){return app.stringIDToTypeID(e)};
            /*
            http://www.ps-scripts.com/viewtopic.php?f=77&t=40407&sid=7fa52b610449dfd7e44702dc0baa5215#p168999
            
            zoomIn();
            zoomOut();
            setZoomLevel(100);
            */
            var zoomLevels=[5,6.25,8.33,12.5,16.67,25,33.33,50,66.67,100,150,200,300,400,800,1600,3200];
            /*
            // function zoomIn(){
            //     var zoomLevel = getZoomLevel();
            //     for(var z in zoomLevels){
            //         if(Number(zoomLevels[z]) > Number(zoomLevel)){
            //             setZoomLevel(zoomLevels[z]);
            //             break;
            //         }
            //     }
            // };
            
            // function zoomOut(){
            //     var zoomLevel = getZoomLevel();
            //     for(var z in zoomLevels){
            //         if(Number(zoomLevels[z]) >= Number(zoomLevel)){
            //             setZoomLevel(zoomLevels[z - 1]);
            //             break;
            //         }
            //     }
            // };
            
            // function zoomOutSteps(steps){
            //     var zoomLevel = getZoomLevel();
            //     for(var z in zoomLevels){
            //         if(Number(zoomLevels[z]) >= Number(zoomLevel)){
            //             setZoomLevel(zoomLevels[z - steps]);
            //             break;
            //         }
            //     }
            // };
            */function getZoomLevel(){var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("zoom")),e.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));var n=executeActionGet(e);return Number(100*n.getDouble(stringIDToTypeID("zoom"))).toFixed(1)}function setDocResolution(e){var n=new ActionDescriptor;n.putUnitDouble(charIDToTypeID("Rslt"),charIDToTypeID("#Rsl"),e),executeAction(charIDToTypeID("ImgS"),n,DialogModes.NO)}function setZoomLevel(e){e<1&&(e=1);var n=new ActionReference;n.putProperty(stringIDToTypeID("property"),stringIDToTypeID("unitsPrefs")),n.putEnumerated(charIDToTypeID("capp"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));executeActionGet(n).getObjectValue(stringIDToTypeID("unitsPrefs")).getUnitDoubleValue(stringIDToTypeID("newDocPresetScreenResolution")),activeDocument.resolution;app.activeDocument.suspendHistory("zoomHelper","zoomHelper()"),executeAction(charIDToTypeID("undo"),void 0,DialogModes.NO)}
    function startschuss(){
                /* Wozu braucht ich das nochmal? */
                /* Layer Weiss + Group vorher mit moveLayer3("bottom", 1);  ?? */
                /* moveLayer("Weiss", "HG", "down"); moveLayer("vorher", "Weiss", "down"); */
                if(debug&&time_start(),noProfile(),gray2rgb(),cmyk2rgb(),sRGB2eciRGB(),getBitDepth(!1)&&setBitDepth(8),"undefined"!=typeof myPsDoc&&setSize("width",myPsDoc.width.value*hScale/10),hasBackground()&&0!=getActiveLayerIndex()){var e=doc.activeLayer.name;gotoLayer(0),nameLayer("HG"),gotoLayer(e);e=""}nameLayer("Original"),smartObject(),createGroup("vorher","passThrough","none",100,t),dublicate("nachher"),gotoLayer("vorher"),selectLayer("down",1),nameLayer("vorher Ebene"),rasterSmartObject(),toogleOpenCloseSet(),selectLayer("up",1),createColorLayer("Weiss","normal","none",100,"none",255,255,255),moveLayer("Weiss","Original","down"),createGroup("Einstellungen","passThrough","none",100),createLayer("AutoTonwert","levels","normal","gray",100,"none",f,t),toogleVisibility(),createLayer("Gradation neutral","curves","normal","gray",100,"none",f,f),selectLayer("up",1),createLayer("Selektive Farbe","selectiveColor","normal","violet",100,"",f,f),createLayer("Sättigung Farbe","hueSaturation","normal","blue",100,"",f,f),createLayer("Sättigung Luminanz","hueSaturation","luminosity","green",100,"",f,f),createLayer("Farbe in Balance","colorBalance","normal","yellowColor",100,"",f,f),createLayer("Gradation Kontrast","curves","normal","orange",100,"",f,f),createLayer("Dynamik","vibrance","normal","red",100,"",f,f),gotoLayer("Gradation neutral"),debug&&time_stop(start)}function DodgeBurn_highlow(e){createGroup("Tiefen","passThrough","gray",100,f),
                /* createLayer("Burn ▼", "colorLookup", "normal", "gray", 100, "black", f, f); */
                /* createLayer("Burn █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f); */
                createLayer("Burn ▽","colorLookup","normal","gray",100,"black",f,f),LUT_burn(),blendif(0,0,0,255),
                /* createLayer("Dodge ▼", "colorLookup", "normal", "gray", 100, "black", f, f); */
                /* createLayer("Dodge █▅▂", "colorLookup", "normal", "gray", 100, "black", f, f); */
                createLayer("Dodge ▽","colorLookup","normal","gray",100,"black",f,f),LUT_dodge(),blendif(0,0,0,255),selectParent(),createGroup("Dodge & Burn △▽","passThrough","gray",100,t),
                /* createLayer("Burn ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
                /* createLayer("Burn ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
                createLayer("Burn △","colorLookup","normal","gray",100,"black",f,f),LUT_burn(),blendif(0,255,255,255),createGroup("Lichter","passThrough","gray",100,t),
                /* createLayer("Dodge ▲", "colorLookup", "normal", "gray", 100, "black", f, f); */
                /* createLayer("Dodge ▂▅█", "colorLookup", "normal", "gray", 100, "black", f, f); */
                createLayer("Dodge △","colorLookup","normal","gray",100,"black",f,f),LUT_dodge(),blendif(0,255,255,255),selectParent(),selectParent(),e&&toogleOpenCloseSet()}function dodge(){createLayer("Dodge","colorLookup","normal","gray",100,"black",f,f),LUT_dodge()}function burn(){createLayer("Burn","colorLookup","normal","gray",100,"black",f,f),LUT_burn()}function dodgeburn(){createGroup("Dodge & Burn","passThrough","gray",100,f),createLayer("Burn","colorLookup","normal","gray",100,"black",f,f),LUT_burn(),createLayer("Dodge","colorLookup","normal","gray",100,"black",f,f),LUT_dodge()}
    function dialog_chooseLayer(){var e=doc.activeLayer.name,n=new Window("dialog"),o=n.add("button",void 0,"Sichtbarkeit",{name:"ein/aus"}),a=n.add("button",void 0,"rauf",{name:"rauf"}),t=n.add("button",void 0,"alle",{name:"alle"}),i=n.add("button",void 0,"runter",{name:"runter"}),c=n.add("button",void 0,"reset",{name:"reset"}),d=n.add("button",void 0,"Abbruch",{name:"Abbruch"}),l=n.add("button",void 0,"RUN",{name:"run"});o.onClick=function(){toogleVisibility()},a.onClick=function(){selectLayer("up",1)},i.onClick=function(){selectLayer("down",1)},t.onClick=function(){hasBackground()&&(gotoLayer(0),nameLayer("HG")),selectLayers("selectAllLayers")},c.onClick=function(){selectLayers("selectNoLayers"),gotoLayer(e)},d.onClick=function(){cancel=1,n.close()},l.onClick=function(){n.close()},n.show()}
    /* function saveFile_old(_format) {
                            var newFileName = new File(outputFolder + "/" + thisFileName + "__mockup");
                        
                            if (_outputFileFormat == "TIF") {
                                tiffSaveOptions = new TiffSaveOptions();
                                tiffSaveOptions.embedColorProfile = true;
                                tiffSaveOptions.alphaChannels = false;
                                tiffSaveOptions.layers = false;
                                tiffSaveOptions.byteOrder = ByteOrder.IBM;
                                tiffSaveOptions.annotations = false;
                                tiffSaveOptions.transparency = true;
                                tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
                                app.activeDocument.saveAs(newFileName, tiffSaveOptions, true, Extension.LOWERCASE);
                        
                            } else if (_outputFileFormat == "JPG") {
                                var jpgSaveOptions = new JPEGSaveOptions();
                                jpgSaveOptions.quality = 9;
                                jpgSaveOptions.embedColorProfile = true;
                                // jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
                                //other options///////////////////////////
                                //jpgSaveOptions.formatOptions = FormatOptions.PROGRESSIVE;
                                jpgSaveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
                                if (jpgSaveOptions.formatOptions == FormatOptions.PROGRESSIVE) {
                                    jpgSaveOptions.scans = 3
                                };
                                // jpgSaveOptions.matte = MatteType.NONE;
                                jpgSaveOptions.matte = MatteType.WHITE;
                                app.activeDocument.saveAs(newFileName, jpgSaveOptions, true, Extension.LOWERCASE);
                            }
                        } */
                        function saveFile_TIF(){saveOptions=new TiffSaveOptions,saveOptions.embedColorProfile=!0,saveOptions.alphaChannels=!1,saveOptions.layers=!1,saveOptions.byteOrder=ByteOrder.IBM,saveOptions.annotations=!1,saveOptions.transparency=!0,saveOptions.imageCompression=TIFFEncoding.TIFFLZW,saveFile(saveOptions)}
                        /* saveFile_PSD(new File(myNewPath),f,t,f,t,t,f,"WasIstTypename"); */function saveFile_PSD(t,e,n,o,p,a,u){saveOptions=new PhotoshopSaveOptions,saveOptions.alphaChannels=n,saveOptions.annotations=o,saveOptions.embedColorProfile=p,saveOptions.layers=a,saveOptions.spotColors=u,doc.saveAs(t,saveOptions,e,Extension.LOWERCASE)}
                        /* saveFile_JPG(12, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE") */function saveFile_JPG(t,e,n,o){saveOptions=new JPEGSaveOptions,saveOptions.quality=t,saveOptions.embedColorProfile=e,
                        /* saveOptions.formatOptions = FormatOptions.STANDARDBASELINE; */
                        /* saveOptions.formatOptions = FormatOptions.PROGRESSIVE; */
                        saveOptions.formatOptions=FormatOptions.OPTIMIZEDBASELINE,saveOptions.formatOptions==FormatOptions.PROGRESSIVE&&(saveOptions.scans=3),
                        /* saveOptions.matte = MatteType.NONE; */
                        saveOptions.matte=MatteType.WHITE,saveFile(saveOptions)}function saveFile(t){doc.saveAs(newFilePath,t,!0,Extension.LOWERCASE)}
                        /* SAVE FOR WEB */
                        /* SaveForWeb("JPEG", "/Users/simon/Arbeit/__temp", "Grau+Farbverlauf_HG+++", f, f, f, t, t, 255, 255, 255,"Meta_ck", 66, t,t, 0) */function SaveForWeb(t,e,n,o,p,a,u,r,c,i,s,l,S,C,T,O){var m=function(t){return app.charIDToTypeID(t)},E=function(t){return app.stringIDToTypeID(t)},d=new ActionDescriptor,v=new ActionDescriptor,D=new ActionDescriptor,I=new ActionDescriptor,h=new ActionDescriptor,A=new ActionDescriptor,B=new ActionDescriptor,b=new ActionDescriptor,g=new ActionDescriptor,N=new ActionDescriptor,f=new ActionDescriptor,w=new ActionDescriptor,M=new ActionDescriptor,P=new ActionDescriptor,F=new ActionDescriptor,j=new ActionDescriptor,R=new ActionDescriptor,W=new ActionList,y=new ActionList;v.putEnumerated(m("Op  "),m("SWOp"),m("OpSa")),v.putBoolean(m("DIDr"),!0),v.putPath(E("in"),new File(e)),function(t,e){if("JPEG"==t||"JPG"==t)var n="jpg";else if("PNG8"==t||"PN24"==t)n="png";
                        /* TODO gif + webm */var o=e+"."+n;v.putString(m("ovFN"),o)}(t,n),v.putEnumerated(E("format"),m("IRFm"),E(t)),/* "JPEG" // "PNG8" // "PN24" */
                        v.putBoolean(E("interfaceIconFrameDimmed"),p),/* true interlace (gefunden bei PNG24, obwohl das Feld auch bei anderen Format existiert // auch bei PNG8) */
                        /* just for JPEG */
                        "JPEG"==t?(v.putInteger(E("quality"),S),/* Qualität */
                        v.putInteger(m("QChS"),0),v.putInteger(m("QCUI"),0),v.putBoolean(m("QChT"),!1),v.putBoolean(m("QChV"),!1),v.putBoolean(E("optimized"),C),/* true OR false = optimiert */
                        T?/* 1 = NO progressive // 3 = YES progressive */
                        v.putInteger(m("Pass"),3):v.putInteger(m("Pass"),1),v.putDouble(E("blur"),O)):(t="PNG8")?(v.putEnumerated(m("RedA"),m("IRRd"),m("Prcp")),/* "c2t('Prcp')" -> Perzeptiv // "c2t('Sltv')" -> Selektiv // s2t("adaptive") -> Adaptiv // c2t("web") -> Restriktiv */
                        v.putBoolean(m("RChT"),!1),v.putBoolean(m("RChV"),!1),v.putBoolean(m("AuRd"),!1),/* true für Automatische Farbanzahl (funktioniert nur bei restriktiver Farbauswahl) */
                        v.putInteger(m("NCol"),256),/* Anzahl der Farben  */
                        v.putInteger(m("DChS"),0),v.putInteger(m("DCUI"),0),v.putBoolean(m("DChT"),!1),v.putBoolean(m("DChV"),!1),v.putInteger(m("WebS"),0),/* zB 62 // Prozentwert Webausrichtung */
                        v.putEnumerated(m("TDth"),m("IRDt"),E("none")),/* Transparenz-Dither // "none" -> kein Transparent-Dither // "diffusion" -> Transparent-Diffusion // "pattern" -> Transparent-Muster // "BNoi" -> Transparent-Rauschen */
                        v.putInteger(m("TDtA"),100),/* zb 74 // Prozentwert Dither-Stärke */
                        v.putBoolean(E("transparency"),!0),/* Transparenz */
                        v.putEnumerated(E("dither"),m("IRDt"),E("none")),/* Dither // "none" -> kein Dither // "diffusion" // "pattern" // "BNoi" */
                        v.putInteger(E("ditherAmount"),100)):"PN24"==t&&v.putBoolean(E("transparency"),!0),v.putBoolean(m("Mtt "),r),/* Matte HG true OR false */
                        v.putBoolean(m("EICC"),u),/* true or false Farbprofil einbetten oder nicht */
                        v.putInteger(m("MttR"),c),/* MatteColor R */
                        v.putInteger(m("MttG"),i),/* MatteColor G */
                        v.putInteger(m("MttB"),s),/* MatteColor B */
                        o&&(/* enter a percent value OR false */
                        v.putUnitDouble(m("HScl"),E("percentUnit"),o),/* horizonalScale */
                        v.putUnitDouble(m("VScl"),E("percentUnit"),o)),v.putBoolean(m("SHTM"),!1),v.putBoolean(m("SImg"),!0),v.putEnumerated(m("SWsl"),m("STsl"),m("SLAl")),a?/* "CHsR" in sRGB konvertieren // "CHDc" nicht */
                        v.putEnumerated(m("SWch"),m("STch"),m("CHsR")):v.putEnumerated(m("SWch"),m("STch"),m("CHDc")),
                        /*	d2.putEnumerated(c2t("SWmd"), c2t("STmd"), c2t("MDNn")); //"MDNn" ohne Metadaten // "MDCp" Copyright // "MDCC" Copyright und Kontaktinfos // "MDAx" Alle außer Kamera-Info // "MDAl" Alles */
                        function(t){/*"MDNn" ohne Metadaten // "MDCp" Copyright // "MDCC" Copyright und Kontaktinfos // "MDAx" Alle außer Kamera-Info // "MDAl" Alles */
                        if("Meta_no"==t)var e="MDNn";else if("Meta_Copyright"==t||"Meta_c"==t)e="MDCp";else if("Meta_CopyrightKontakt"==t||"Meta_ck"==t)e="MDCC";else if("Meta_all_noKameraInfo"==t||"Meta_all_no"==t)e="MDAx";else if("Meta_all"==t)e="MDAl";else e="MDNn";v.putEnumerated(m("SWmd"),m("STmd"),m(e))}(l),v.putBoolean(m("ohXH"),!1),v.putBoolean(m("ohIC"),!0),v.putBoolean(m("ohAA"),!0),v.putBoolean(m("ohQA"),!0),v.putBoolean(m("ohCA"),!1),v.putBoolean(m("ohIZ"),!0),v.putEnumerated(m("ohTC"),m("SToc"),m("OC03")),v.putEnumerated(m("ohAC"),m("SToc"),m("OC03")),v.putInteger(m("ohIn"),-1),v.putEnumerated(m("ohLE"),m("STle"),m("LE03")),v.putEnumerated(m("ohEn"),m("STen"),m("EN00")),v.putBoolean(m("olCS"),!1),v.putEnumerated(m("olEC"),m("STst"),m("ST00")),v.putEnumerated(m("olWH"),m("STwh"),m("WH01")),v.putEnumerated(m("olSV"),m("STsp"),m("SP04")),v.putEnumerated(m("olSH"),m("STsp"),m("SP04")),D.putEnumerated(m("ncTp"),m("STnc"),m("NC00")),W.putObject(m("SCnc"),D),I.putEnumerated(m("ncTp"),m("STnc"),m("NC19")),W.putObject(m("SCnc"),I),h.putEnumerated(m("ncTp"),m("STnc"),m("NC28")),W.putObject(m("SCnc"),h),A.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),W.putObject(m("SCnc"),A),B.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),W.putObject(m("SCnc"),B),b.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),W.putObject(m("SCnc"),b),v.putList(m("olNC"),W),v.putBoolean(m("obIA"),!1),v.putString(m("obIP"),""),v.putEnumerated(m("obCS"),m("STcs"),m("CS01")),g.putEnumerated(m("ncTp"),m("STnc"),m("NC01")),y.putObject(m("SCnc"),g),N.putEnumerated(m("ncTp"),m("STnc"),m("NC20")),y.putObject(m("SCnc"),N),f.putEnumerated(m("ncTp"),m("STnc"),m("NC02")),y.putObject(m("SCnc"),f),w.putEnumerated(m("ncTp"),m("STnc"),m("NC19")),y.putObject(m("SCnc"),w),M.putEnumerated(m("ncTp"),m("STnc"),m("NC06")),y.putObject(m("SCnc"),M),P.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),y.putObject(m("SCnc"),P),F.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),y.putObject(m("SCnc"),F),j.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),y.putObject(m("SCnc"),j),R.putEnumerated(m("ncTp"),m("STnc"),m("NC22")),y.putObject(m("SCnc"),R),v.putList(m("ovNC"),y),v.putBoolean(m("ovCM"),!1),v.putBoolean(m("ovCW"),!1),v.putBoolean(m("ovCU"),!0),v.putBoolean(m("ovSF"),!0),v.putBoolean(m("ovCB"),!0),v.putString(m("ovSN"),"images"),d.putObject(E("using"),E("SaveForWeb"),v),executeAction(E("export"),d,DialogModes.NO)}

    try {
        prefSave();
        prefSet(DialogModes.NO, Units.MM);

        var myPsDoc = app.open(new File(myImagePath));
        var doc = app.activeDocument;
        var cancel = 0;

        /* if (doc.activeLayer.kind != LayerKind.NORMAL) { */
        if ((doc.activeLayer.kind != LayerKind.NORMAL) || (getLayersNb() >= 2) || (getLayersNb() == 1) && (hasBackground())) {
            dialog_chooseLayer();
            if (cancel === 1) {
                return false;
            }
        }
        if(debug) {
            startschuss();
        }
        else{
            doc.suspendHistory("Startschuss", "startschuss()");
        }
        
        startschuss_Rest();

    } catch (e) {
        logger(arguments.callee.name);
        alert("Error 1");
    }


    /*     function startschuss() {
            if (debug) {time_start()};

            noProfile();
            gray2rgb();
            cmyk2rgb();
            sRGB2eciRGB();
            if(getBitDepth(!8)){setBitDepth(8)}

            setSize("width", myPsDoc.width.value * hScale / 10);


            if (hasBackground() && getActiveLayerIndex() != 0) {
                var temp = doc.activeLayer.name;
                gotoLayer(0);
                nameLayer("HG");
                gotoLayer(temp);
                var temp = "";
            }

            nameLayer("Original");
            smartObject();
            createGroup("vorher", "passThrough", "none", 100, t);
            dublicate("nachher");
            gotoLayer("vorher");
            selectLayer("down", 1);
            nameLayer("vorher Ebene");
            rasterSmartObject();
            toogleOpenCloseSet();
            selectLayer("up", 1);
            createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
            moveLayer("Weiss", "Original", "down");

            createGroup("Einstellungen", "passThrough", "none", 100);
            createLayer("AutoTonwert", "levels", "normal", "gray", 100, "none", f, t);
            toogleVisibility();
            createLayer("Gradation neutral", "curves", "normal", "gray", 100, "none", f, f);

            selectLayer("up", 1);
            createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100, "", f, f);
            createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100, "", f, f);
            createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100, "", f, f);
            createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100, "", f, f);
            createLayer("Gradation Kontrast", "curves", "normal", "orange", 100, "", f, f);
            createLayer("Dynamik", "vibrance", "normal", "red", 100, "", f, f);
            gotoLayer("Gradation neutral");

            if (debug) {time_stop(start)};
        } */









    function startschuss_Rest() {

        /*//// BILDGRÖSSE ////*/
        if (hPPI < minAufloesung) {
            myPsDoc.resizeImage(undefined, undefined, minAufloesung, ResampleMethod.PRESERVEDETAILS);
        } else if (hPPI > ZielAufloesung) {
            myPsDoc.resizeImage(undefined, undefined, ZielAufloesung, ResampleMethod.PRESERVEDETAILS);
        } else {
            /* TODO better use setDpi(_dpi) ? oder muss hier uberhaupt etwas geschehen ? */
            myPsDoc.resizeImage(undefined, undefined, hPPI, ResampleMethod.NONE);
        }

        /* smartObjectTransparencyIssue(); */
        fitScreen();
        zoomOut();
        saveFile_PSD(new File(myNewPath), f, t, f, t, t, f);
        prefReset();
    }
}