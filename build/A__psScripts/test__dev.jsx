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
    /* alert(debug) */
    if (debug) {
        time_start();
    }


    nameLayer("vorher Ebene");
    createGroup("vorher", "passThrough", "none", 100, t);
    /* toogleOpenCloseSet(); */
    dublicate("nachher");
    gotoLayer("vorher");
    toogleOpenCloseSet();
    gotoLayer("nachher");
    selectLayer("down", 1);
    /* // selectLayer("down",1); */
    /* // myselectNext(); */
    nameLayer("Orginal");
    smartObject();


    createGroup("Einstellungen", "passThrough", "none", 100);
    createLayer("AutoTonwert", "levels", "normal", "gray", 100, "none", f, t);
    toogleVisibility();
    createLayer("Gradation neutral", "curves", "normal", "gray", 100, "none", f, f);

    DodgeBurn_highlow(t);
    selectLayer("up", 1);
    createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100, "", f, f);
    createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100, "", f, f);
    createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100, "", f, f);
    createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100, "", f, f);
    createLayer("Gradation Kontrast", "curves", "normal", "orange", 100, "", f, f);
    /* createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100, "", f,f); */
    /* createLayer("Dynamik", "vibrance", "normal", "orange", 100, "", f,f); */
    createLayer("Dynamik", "vibrance", "normal", "red", 100, "", f, f);
    gotoLayer("Gradation neutral");
    if (debug) {
        time_stop(start);
    }
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
    selectUp_button.onClick = function() {
        selectLayer("up", 1);
    }
    selectDown_button.onClick = function() {
        selectLayer("down", 1);
    }
    selectAll_button.onClick = function() {
        if (hasBackground()) {
            gotoLayer(0);
            nameLayer("HG");
        }
        selectAll();
    }
    ok_button.onClick = function() {
        doc.suspendHistory('Startschuss', 'startschuss()');
        // startschuss()
        w.close();
    }
    w.show();
}

// if (doc.activeLayer.kind != LayerKind.NORMAL) {
//     dialog_chooseLayer();
// } else {
//     // doc.suspendHistory('Startschuss', 'startschuss()');
//     alert("geht");
// }

function startschuss() {
    time_start();

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

    createGroup("Einstellungen", "passThrough", "none", 100);
    createLayer("AutoTonwert", "levels", "normal", "gray", 100, "none", f, t);
    toogleVisibility();
    createLayer("Gradation neutral", "curves", "normal", "gray", 100, "none", f, f);

    DodgeBurn_highlow(t);
    selectLayer("up", 1);
    createLayer("Selektive Farbe", "selectiveColor", "normal", "violet", 100, "", f, f);
    createLayer("Sättigung Farbe", "hueSaturation", "normal", "blue", 100, "", f, f);
    createLayer("Sättigung Luminanz", "hueSaturation", "luminosity", "green", 100, "", f, f);
    createLayer("Farbe in Balance", "colorBalance", "normal", "yellowColor", 100, "", f, f);
    createLayer("Gradation Kontrast", "curves", "normal", "orange", 100, "", f, f);
    // createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100, "", f,f);
    // createLayer("Dynamik", "vibrance", "normal", "orange", 100, "", f,f);
    createLayer("Dynamik", "vibrance", "normal", "red", 100, "", f, f);
    gotoLayer("Gradation neutral");

    time_stop(start);

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
    if (_direction == "before" || _direction == "up") {
        var direction = ElementPlacement.PLACEBEFORE
    } else if (_direction == "after" || _direction == "down") {
        var direction = ElementPlacement.PLACEAFTER
    } else if (_direction == "top" || _direction == "beginning") {
        var direction = ElementPlacement.PLACEATBEGINNING
    } else if (_direction == "bottom" || _direction == "end") {
        var direction = ElementPlacement.PLACEATEND
    }
    ref_1.move(ref_2, direction);
}


// funktioniert nicht
// moveLayer2("Ebene 1", "Ebene 3", "top")

// bt2();

function bt2() {
    var bt = new BridgeTalk();
    var ph = BridgeTalk.getSpecifier('photoshop');
    var buildWindow = function() {
        var z = Window.find('palette', 'Toggle visiblity');
        if (z) {
            z.show();
            return;
        }

        var dialog = new Window("palette");
        dialog.text = "Toggle visiblity";

        dialog.orientation = "column";
        dialog.alignChildren = ["center", "center"];
        dialog.spacing = 10;
        dialog.margins = 16;
        var panel = dialog.add('panel', undefined, 'Panel');
        var toggleButton = panel.add('button', undefined, 'Toggle', {
            name: 'Toggle'
        });

        toggleButton.onClick = function() {
            app.activeDocument.activeLayer.visible = !app.activeDocument.activeLayer.visible;
        };

        var exitButton = panel.add('button', undefined, 'Exit', {
            name: 'Exit'
        });

        exitButton.onClick = function() {
            dialog.close();
        }

        dialog.show();
    }
    bt.target = ph;
    bt.body = "var f=" + buildWindow.toSource() + ";f();";
    bt.send();
}

function checkTrans() {
    var transp = true;
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));
    d.putReference(charIDToTypeID("null"), r);
    var r2 = new ActionReference();
    r2.putEnumerated(charIDToTypeID("Chnl"), charIDToTypeID("Chnl"), charIDToTypeID("Trsp"));
    r2.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Mrgd"));
    d.putReference(charIDToTypeID("T   "), r2);
    try {
        executeAction(charIDToTypeID("setd"), d, DialogModes.NO);
        activeDocument.selection.invert();
        try {
            activeDocument.selection.bounds;
        } catch (e) {
            transp = false;
        }

    } catch (e) {
        transp = false;
    }
    // activeDocument.selection.deselect();
    if (transp) alert("Has transparency");
    else alert("No transparency");
}


// checkTrans();

function checkTrans2() {
    prefSave();
    // prefSet(DialogModes.NO, Units.PIXELS);
    var transp = true;

    // Kanalberechnung
    var s2t = function(s) {
        return app.stringIDToTypeID(s);
    };

    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    var r3 = new ActionReference();

    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    d2.putReference(s2t("to"), r2);
    r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    r3.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    d2.putReference(s2t("source2"), r3);
    d.putObject(s2t("to"), s2t("calculation"), d2);

    try {
        executeAction(s2t("set"), d, DialogModes.NO);
        activeDocument.selection.invert();
        try {
            activeDocument.selection.bounds;
        } catch (e) {
            transp = false;
        }

    } catch (e) {
        transp = false;
    }
    prefReset();
    activeDocument.selection.deselect();
    if (transp) alert("Has transparency");
    else alert("No transparency");



}

doc.suspendHistory("Transparent Check", "checkTrans2()");
undoSteps(1)



var temp = doc.activeLayer.name;
gotoLayer("Original");
// alert(doc.width + " " + doc.height)
if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
    if (doc.width < doc.height) {
        var transformLayerScale = (doc.width + 2) * 100 / doc.width;
    } else {
        var transformLayerScale = (doc.height + 2) * 100 / doc.height;
    }
    transformLayer("center", transformLayerScale);
}

gotoLayer("vorher Ebene");
// alert(doc.width + " " + doc.height)
if (doc.width < doc.height) {
    var transformLayerScale = (doc.width + 2) * 100 / doc.width;
} else {
    var transformLayerScale = (doc.height + 2) * 100 / doc.height;
}
transformLayer("center", transformLayerScale);


gotoLayer(temp);
var temp = "";

doc.suspendHistory("Transparent Check", "checkTrans2()");
undoSteps(1)



function transformLayer(_position, _scale) {
    var d = new ActionDescriptor();
    if (_position == "center") {
        _position = 'QCSAverage';
    } else if (_position == "topleft" || _position == "tl" || _position == "↖") {
        _position = 'QCSCorner0';
    } else if (_position == "top" || _position == "t" || _position == "↑") {
        _position = 'QCSSide0';
    } else if (_position == "topright" || _position == "tr" || _position == "↗") {
        _position = 'QCSCorner1';
    } else if (_position == "right" || _position == "r" || _position == "→") {
        _position = 'QCSSide1';
    } else if (_position == "bottomright" || _position == "br" || _position == "↘") {
        _position = 'QCSCorner2';
    } else if (_position == "bottom" || _position == "b" || _position == "↓") {
        _position = 'QCSSide2';
    } else if (_position == _position == "bottomleft" || _position == "bl" || _position == "↙") {
        _position = 'QCSCorner3';
    } else if (_position == "left" || _position == "l" || _position == "←") {
        _position = 'QCSSide3';
    }

    d.putEnumerated(sTID('freeTransformCenterState'), sTID('quadCenterState'), sTID(_position));
    var d2 = new ActionDescriptor();
    d2.putUnitDouble(sTID('horizontal'), sTID('pixelsUnit'), 0.000000);
    d2.putUnitDouble(sTID('vertical'), sTID('pixelsUnit'), 0.000000);
    d.putObject(sTID('offset'), sTID('offset'), d2);
    d.putUnitDouble(sTID('width'), sTID('percentUnit'), _scale);
    d.putUnitDouble(sTID('height'), sTID('percentUnit'), _scale);
    executeAction(sTID('transform'), d, DialogModes.NO);
}


// function undoSteps(_steps) {
//     for (var i = 0; i < _steps; i++) {
//         executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
//     };
// };