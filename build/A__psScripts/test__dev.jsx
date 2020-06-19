//@include "functions/basic.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/LUT-dodge.jsx";
//@include "functions/LUT-burn.jsx";
//@include "functions/ready.jsx";



// doc.suspendHistory('Startschuss', 'startschuss()')


// curves
// selectiveColor
// hueSaturation
// colorBalance
// brightnessEvent
// vibrance


// analyse();

// doc.suspendHistory('Startschuss', 'startschuss()')
// startschuss()

// alert(getSelectedLayersIdx())
// alert(getSibilings())
// alert(getSibilings1())
// alert(isVisibleIDX(6))
// alert(getActiveLayerIndex())
// alert(getLayerName(5))
// makeVisByIndex(7,true)

function startschuss_old() {
    // alert(debug)
    if(debug){time_start()}
    

    nameLayer("vorher Ebene")
    createGroup("vorher", "passThrough", "none", 100, t)
    // toogleOpenCloseSet()
    dublicate("nachher")
    gotoLayer("vorher")
    toogleOpenCloseSet()
    gotoLayer("nachher")
    selectLayer("down",1)
    // // selectLayer("down",1)
    // // myselectNext()
    nameLayer("Orginal")
    smartObject();


    createGroup("Einstellungen", "passThrough", "none", 100)
    createLayer("AutoTonwert", "levels", "normal", "gray", 100, "none", f, t)
    toogleVisibility();
    createLayer("Gradation neutral", "curves", "normal", "gray", 100, "none", f, f)

    DodgeBurn_highlow(t)
    selectLayer("up",1)
    createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100, "", f, f)
    createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100, "", f, f)
    createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100, "", f, f)
    createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100, "", f, f)
    createLayer("Gradation Kontrast", "curves", "normal", "orange", 100, "", f, f)
    // createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100, "", f,f)
    // createLayer("Dynamik", "vibrance", "normal", "orange", 100, "", f,f)
    createLayer("Dynamik", "vibrance", "normal", "red", 100, "", f, f)
    gotoLayer("Gradation neutral")
    if(debug){time_stop(start)}
}

function analyse() {
    time_start()
    

    time_stop(start)
}

function dialog_chooseLayer() {
    var w = new Window("dialog");
    var selectUp_button = w.add("button", undefined, "rauf");
    var selectAll_button = w.add("button", undefined, "alle");
    var selectDown_button = w.add("button", undefined, "runter");
    var ok_button = w.add("button", undefined, "OK");
    selectUp_button.onClick = function () {
        selectLayer("up", 1);
    }
    selectDown_button.onClick = function () {
        selectLayer("down", 1);
    }
    selectAll_button.onClick = function () {
        if (hasBackground()) {
            gotoLayer(0);
            nameLayer("HG");
        }
        selectAll();
    }
    ok_button.onClick = function () {
        doc.suspendHistory('Startschuss', 'startschuss()');
        // startschuss()
        w.close();
    }
    w.show();
}

if (doc.activeLayer.kind != LayerKind.NORMAL) {
    dialog_chooseLayer();
}
else {
    doc.suspendHistory('Startschuss', 'startschuss()');
}

function startschuss() {
    time_start()

    if (hasBackground()) {
        gotoLayer(0);
        nameLayer("HG");
    }

    smartObject();
    nameLayer("Original");
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

    createGroup("Einstellungen", "passThrough", "none", 100)
    createLayer("AutoTonwert", "levels", "normal", "gray", 100, "none", f, t)
    toogleVisibility();
    createLayer("Gradation neutral", "curves", "normal", "gray", 100, "none", f, f)

    DodgeBurn_highlow(t)
    selectLayer("up", 1)
    createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100, "", f, f)
    createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100, "", f, f)
    createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100, "", f, f)
    createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100, "", f, f)
    createLayer("Gradation Kontrast", "curves", "normal", "orange", 100, "", f, f)
    // createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100, "", f,f)
    // createLayer("Dynamik", "vibrance", "normal", "orange", 100, "", f,f)
    createLayer("Dynamik", "vibrance", "normal", "red", 100, "", f, f)
    gotoLayer("Gradation neutral")

    time_stop(start)

}


/* TODO
_direction für 
ElementPlacement.INSIDE
ElementPlacement.PLACEATBEGINNING
ElementPlacement.PLACEATEND
*/
function moveLayer2(_objectLayer, _aimLayer, _direction) {
    gotoLayer(_objectLayer);
    var ref_1 = app.activeDocument.activeLayer;
    gotoLayer(_aimLayer);
    var ref_2 = app.activeDocument.activeLayer;
    if(_direction == "before" || _direction == "up") {var direction = ElementPlacement.PLACEBEFORE}
    else if (_direction == "after" || _direction == "down") {var direction = ElementPlacement.PLACEAFTER}
    else if (_direction == "top" || _direction == "beginning") {var direction = ElementPlacement.PLACEATBEGINNING}
    else if (_direction == "bottom" || _direction == "end") {var direction = ElementPlacement.PLACEATEND}
    ref_1.move(ref_2, direction);
}


// funktioniert nicht
// moveLayer2("Ebene 1", "Ebene 3", "top")