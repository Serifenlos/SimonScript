//// ZOOM ////
function fitScreen(){runMenuItem(cTID("FtOn"))}// FIT TO SCREEN
function zoomOut(){runMenuItem(cTID("ZmOt"))}// ZOOM -
function zoomIn(){runMenuItem(cTID("ZmIn"))}// ZOOM +
function apfel0(){runMenuItem(cTID("ActP"))}// ACTUAL PIXEL
function zoom100(){runMenuItem(cTID("ActP"))}// ACTUAL PIXEL
function zoomOutSteps(e){for(var n=0;n<e;n++)app.runMenuItem(charIDToTypeID("ZmOt"))}function standardmodus(){runMenuItem(sTID("screenModeStandard"))}function vollbildmodus_menu(){runMenuItem(sTID("screenModeFullScreenWithMenubar"))}function vollbildmodus(){runMenuItem(sTID("screenModeFullScreen"))}function anordung_kachel(){runMenuItem(cTID("Tile"))}function anordung_1(){runMenuItem(sTID("consolidateAllTabs"))}function anordung_2vertical(){runMenuItem(sTID("2upVertical"))}function anordung_2horizontal(){runMenuItem(sTID("2upHorizontal"))}function anordung_3(){runMenuItem(sTID("3upStacked"))}function anordung_3vertical(){runMenuItem(sTID("3upVertical"))}function anordung_3horizontal(){runMenuItem(sTID("3upHorizontal"))}function anordung_4(){runMenuItem(sTID("4upTile"))}function anordung_6(){runMenuItem(sTID("6upTile"))}cTID=function(e){return app.charIDToTypeID(e)},sTID=function(e){return app.stringIDToTypeID(e)};
/*
http://www.ps-scripts.com/viewtopic.php?f=77&t=40407&sid=7fa52b610449dfd7e44702dc0baa5215#p168999

zoomIn();
zoomOut();
setZoomLevel(100);
*/
var zoomLevels=[5,6.25,8.33,12.5,16.67,25,33.33,50,66.67,100,150,200,300,400,800,1600,3200];
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
function getZoomLevel(){var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("zoom")),e.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));var n=executeActionGet(e);return Number(100*n.getDouble(stringIDToTypeID("zoom"))).toFixed(1)}function setDocResolution(e){var n=new ActionDescriptor;n.putUnitDouble(charIDToTypeID("Rslt"),charIDToTypeID("#Rsl"),e),executeAction(charIDToTypeID("ImgS"),n,DialogModes.NO)}function setZoomLevel(e){e<1&&(e=1);var n=new ActionReference;n.putProperty(stringIDToTypeID("property"),stringIDToTypeID("unitsPrefs")),n.putEnumerated(charIDToTypeID("capp"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));executeActionGet(n).getObjectValue(stringIDToTypeID("unitsPrefs")).getUnitDoubleValue(stringIDToTypeID("newDocPresetScreenResolution")),activeDocument.resolution;app.activeDocument.suspendHistory("zoomHelper","zoomHelper()"),executeAction(charIDToTypeID("undo"),void 0,DialogModes.NO)}