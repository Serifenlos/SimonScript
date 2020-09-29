
/* TODO wird überflüssig wenn das Panel auch die basic bekommt */
cTID = function(s) {return app.charIDToTypeID(s);};
sTID = function(s) {return app.stringIDToTypeID(s);};


function fitScreen() {runMenuItem(cTID("FtOn"))};   /* FIT TO SCREEN */
function zoomOut() {runMenuItem(cTID("ZmOt"))};     /* ZOOM - */
function zoomIn() {runMenuItem(cTID("ZmIn"))};      /* ZOOM + */
function apfel0() {runMenuItem(cTID("ActP"))};      /* ACTUAL PIXEL */
function zoom100() {runMenuItem(cTID("ActP"))};      /* ACTUAL PIXEL */

function zoomOutSteps(_steps) {
    for (var i = 0; i < _steps; i++) {
        app.runMenuItem(charIDToTypeID('ZmOt'));
    };
};

function standardmodus() {runMenuItem(sTID("screenModeStandard"))};
function vollbildmodus_menu() {runMenuItem(sTID("screenModeFullScreenWithMenubar"))};
function vollbildmodus() {runMenuItem(sTID("screenModeFullScreen"))};

function anordung_kachel() {runMenuItem(cTID('Tile'))};
function anordung_1() {runMenuItem(sTID('consolidateAllTabs'))};
function anordung_2vertical() {runMenuItem(sTID('2upVertical'))};
function anordung_2horizontal() {runMenuItem(sTID('2upHorizontal'))};
function anordung_3() {runMenuItem(sTID('3upStacked'))};
function anordung_3vertical() {runMenuItem(sTID('3upVertical'))};
function anordung_3horizontal() {runMenuItem(sTID('3upHorizontal'))};
function anordung_4() {runMenuItem(sTID('4upTile'))};
function anordung_6() {runMenuItem(sTID('6upTile'))};





/*
http://www.ps-scripts.com/viewtopic.php?f=77&t=40407&sid=7fa52b610449dfd7e44702dc0baa5215#p168999

zoomIn();
zoomOut();
setZoomLevel(100);
*/

var zoomLevels=[5, 6.25, 8.33, 12.5, 16.67, 25, 33.33, 50, 66.67, 100, 150, 200, 300, 400, 800, 1600, 3200];

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
*/

function getZoomLevel(){
    var ref = new ActionReference();
    ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('zoom'));
    ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
    var desc = executeActionGet(ref);
    return Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(1);
};

function setDocResolution(dpi){
    var desc = new ActionDescriptor();
    desc.putUnitDouble( charIDToTypeID( "Rslt" ), charIDToTypeID( "#Rsl" ), dpi );
    executeAction( charIDToTypeID( "ImgS" ), desc, DialogModes.NO );
}

function setZoomLevel(zoom) {
    if(zoom < 1 ) zoom = 1;
    var ref = new ActionReference();
    ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('unitsPrefs'));
    ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
    var getScrRes = executeActionGet(ref).getObjectValue(stringIDToTypeID('unitsPrefs')).getUnitDoubleValue(stringIDToTypeID('newDocPresetScreenResolution'))/72;
    var docRes = activeDocument.resolution;

    app.activeDocument.suspendHistory('zoomHelper', 'zoomHelper()');
    function zoomHelper() {
        setDocResolution(getScrRes/(zoom/100))
        runMenuItem(stringIDToTypeID( 'printSize' ))
        setDocResolution(docRes);
    }
    executeAction( charIDToTypeID('undo'), undefined, DialogModes.NO );
};

/*
// function apfel_0() {
//   function step1(enabled, withDialog) {
//     if (enabled != undefined && !enabled)
//       return;
//     var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
//     var desc1 = new ActionDescriptor();
//     var ref1 = new ActionReference();
//     ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('FtOn'));
//     desc1.putReference(cTID('null'), ref1);
//     executeAction(sTID('select'), desc1, dialogMode);
//   };
//   step1();
// };

// function apfel_0() {
//   app.runMenuItem(charIDToTypeID("FtOn"));
// };

// function Ansicht_kachel_helper() {
//   function step1(enabled, withDialog) {
//     if (enabled != undefined && !enabled)
//       return;
//     var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
//     var desc1 = new ActionDescriptor();
//     var ref1 = new ActionReference();
//     ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('Tile'));
//     desc1.putReference(cTID('null'), ref1);
//     executeAction(sTID('select'), desc1, dialogMode);
//   };
//   step1();
// };


// function Ansicht_einzel_helper() {
//   function step1(enabled, withDialog) {
//     if (enabled != undefined && !enabled)
//       return;
//     var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
//     var desc1 = new ActionDescriptor();
//     var ref1 = new ActionReference();
//     ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), sTID("consolidateAllTabs"));
//     desc1.putReference(cTID('null'), ref1);
//     executeAction(sTID('select'), desc1, dialogMode);
//   };
//   step1();
// };


// function Ansicht_zwei_helper() {
//   function step1(enabled, withDialog) {
//     if (enabled != undefined && !enabled)
//       return;
//     var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
//     var desc1 = new ActionDescriptor();
//     var ref1 = new ActionReference();
//     ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), sTID("2upVertical"));
//     desc1.putReference(cTID('null'), ref1);
//     executeAction(sTID('select'), desc1, dialogMode);
//   };
//   step1();
// };
*/