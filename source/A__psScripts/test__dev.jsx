//@include "functions/basic.jsx";
//@include "functions/pref.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/LUT-dodge.jsx";
//@include "functions/LUT-burn.jsx";
//@include "functions/dialog.jsx";
//@include "functions/ready.jsx";
//@include "functions/view.jsx";



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

// function checkTrans2() {
//     prefSave();
//     var transp = true;

//     /* Kanalberechnung */
//     var s2t = function(s) {return app.stringIDToTypeID(s);};

//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var r = new ActionReference();
//     var r2 = new ActionReference();
//     var r3 = new ActionReference();

//     r.putProperty(s2t("channel"), s2t("selection"));
//     d.putReference(s2t("null"), r);
//     r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
//     r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
//     d2.putReference(s2t("to"), r2);
//     r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
//     r3.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
//     d2.putReference(s2t("source2"), r3);
//     d.putObject(s2t("to"), s2t("calculation"), d2);

//     try {
//         executeAction(s2t("set"), d, DialogModes.NO);
//         activeDocument.selection.invert();
//         try {
//             activeDocument.selection.bounds;
//         } catch (e) {
//             transp = false;
//         }

//     } catch (e) {
//         transp = false;
//     }
//     prefReset();
//     activeDocument.selection.deselect();
// /*     if (transp) alert("Has transparency");
//     else alert("No transparency"); */

//     if(transp) {return true}
//     else {return false}
// }

// doc.suspendHistory("Transparent Check", "checkTrans2()");

// if(checkTransparency()) {
//     alert("Has transparency")
// } else {
//     alert("no transparency")
// }

// undoSteps(1)





// doc.suspendHistory("Transparent Check", "checkTrans2()");

// if(checkTransparency()) {
//     alert("Has transparency")
// } else {
//     alert("no transparency")
// }
// undoSteps(1)


// transformLayer("r", 50);

// var s2t = function (s) {
// 	return app.stringIDToTypeID(s);
// };

// var descriptor = new ActionDescriptor();
// var descriptor2 = new ActionDescriptor();

// descriptor.putEnumerated( s2t( "freeTransformCenterState" ), s2t( "quadCenterState" ), s2t( "QCSCorner3" ));
// descriptor2.putUnitDouble( s2t( "horizontal" ), s2t( "pixelsUnit" ), 0.000000 );
// descriptor2.putUnitDouble( s2t( "vertical" ), s2t( "pixelsUnit" ), 0.000000 );
// descriptor.putObject( s2t( "offset" ), s2t( "offset" ), descriptor2 );
// descriptor.putUnitDouble( s2t( "width" ), s2t( "percentUnit" ), 49.922561 );
// descriptor.putUnitDouble( s2t( "height" ), s2t( "percentUnit" ), 49.922561 );
// executeAction( s2t( "transform" ), descriptor, DialogModes.NO );


// function undoSteps(_steps) {
//     for (var i = 0; i < _steps; i++) {
//         executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
//     };
// };


// setZoom(100);
// zoom100();
// set_doc_position(50, 50);


// alert(doc.bitsPerChannel);
// alert("get " + getBitDepth());





// setZoom(50);
// zoom100();
// set_doc_position(50, 50);


// alert(doc.bitsPerChannel);
// alert("get " + getBitDepth());





// setZoom(100)
// set_doc_position(50, 50)
// 1,0,0,1,-59.5,-59.5

// set_doc_position(100, 0)
// 1,0,0,1,0,0

// set_doc_position(350, 50)

var ruler_viewInfo = 19;
var ruler_viewTransform = 0;
if(!rulersVisibility()) {
    var ruler_viewInfo = 0;
    var ruler_viewTransform = 9.5;
}
var scrollbar = 16;
var overlap = 100;


var ref = new ActionReference();
ref.putProperty(stringIDToTypeID("property"),stringIDToTypeID("viewInfo"));
ref.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));
var desc = executeActionGet(ref);

var bounds = desc.getObjectValue(stringIDToTypeID('viewInfo')).getObjectValue(stringIDToTypeID('activeView')).getObjectValue(stringIDToTypeID('globalBounds'));

var left = bounds.getDouble(stringIDToTypeID('left'));
var right = bounds.getDouble(stringIDToTypeID('right'))
var top = bounds.getDouble(stringIDToTypeID('top'))
var bottom = bounds.getDouble(stringIDToTypeID('bottom'))

// alert("l " + left + "\nr " + right  + "\nt " + top  + "\nb " + bottom );
var view_w = right - left - ruler_viewInfo - scrollbar;
var view_h = bottom - top - ruler_viewInfo - scrollbar;

// alert("\nbreite " + view_w + "\nhöhe " + view_h)

// l 41
// r 1236
// t 100
// b 1199

// breite 1195   //mit Ruler und Scrollbar
// höhe 1099     //mit Ruler und Scrollbar
// breite 1160
// höhe 1064

var ref = new ActionReference();
ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("viewTransform"));
ref.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
var list = executeActionGet(ref).getList(stringIDToTypeID('viewTransform'));
var matrix = [list.getDouble(0), list.getDouble(1), list.getDouble(2), list.getDouble(3), list.getDouble(4), list.getDouble(5)];

var x_zoom = list.getDouble(0);
var weissNicht1 = list.getDouble(1)
var weissNicht2 = list.getDouble(2)
var y_zoom = list.getDouble(3);
var x_position = list.getDouble(4);
var y_position = list.getDouble(5);



var x_pos = (list.getDouble(4) / list.getDouble(0)) - ruler_viewTransform;
var y_pos = (list.getDouble(5) / list.getDouble(3)) - ruler_viewTransform;

// alert(matrix)

// alert("\nx_zoom " + x_zoom + "\ny_zoom " + y_zoom + "\nx_position " + x_position + "\ny_position " + y_position)
// alert("\nx_pos " + x_pos + "\ny_pos " + y_pos)




function scroll_right() {
    set_doc_position(-(x_pos + view_w - overlap), -y_pos)
}

function scroll_down() {
    set_doc_position(-x_pos, -(y_pos + view_h - overlap))
}

function scroll_left() {
    set_doc_position(-(x_pos - view_w + overlap), -y_pos)
}

function scroll_up() {
    set_doc_position(-x_pos, -(y_pos - view_h + overlap))
}

// scroll_right()
// scroll_left()
// scroll_up()
// scroll_down()

// scrollPage("right");
// alert(rulersVisibility())




// alert(app.displayDialogs)
// alert(app.preferences.rulerUnits)
// alert(app.preferences.beepWhenDone)

// rulerUnits_prefSave();
// alert("start " + startRulerUnits);
// rulerUnits_prefSet(Units.CM);
// alert("jetzt " + app.preferences.rulerUnits);
// rulerUnits_prefSet(startRulerUnits);
// alert("jetzt " + app.preferences.rulerUnits);

// if (doc.mode == DocumentMode.INDEXEDCOLOR) {
//         // doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
//         alert("index")
//     }
//     else{alert("noIndex")}


var idtransform = stringIDToTypeID( "transform" );
    var desc2 = new ActionDescriptor();
    var idnull = stringIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idlayer = stringIDToTypeID( "layer" );
        var idordinal = stringIDToTypeID( "ordinal" );
        var idtargetEnum = stringIDToTypeID( "targetEnum" );
        ref1.putEnumerated( idlayer, idordinal, idtargetEnum );
    desc2.putReference( idnull, ref1 );
    var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
    var idquadCenterState = stringIDToTypeID( "quadCenterState" );
    var idQCSCornerzero = stringIDToTypeID( "QCSCorner0" );
    desc2.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSCornerzero );
    var idoffset = stringIDToTypeID( "offset" );
        var desc3 = new ActionDescriptor();
        var idhorizontal = stringIDToTypeID( "horizontal" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc3.putUnitDouble( idhorizontal, idpixelsUnit, -408.000000 );
        var idvertical = stringIDToTypeID( "vertical" );
        var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
        desc3.putUnitDouble( idvertical, idpixelsUnit, 244.000000 );
    var idoffset = stringIDToTypeID( "offset" );
    desc2.putObject( idoffset, idoffset, desc3 );
    var idlinked = stringIDToTypeID( "linked" );
    desc2.putBoolean( idlinked, true );
    var idinterfaceIconFrameDimmed = stringIDToTypeID( "interfaceIconFrameDimmed" );
    var idinterpolationType = stringIDToTypeID( "interpolationType" );
    var idbicubicSharper = stringIDToTypeID( "bicubicSharper" );
    desc2.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubicSharper );
executeAction( idtransform, desc2, DialogModes.NO );