if (app.documents.length > 0) {
    doc = app.activeDocument;
    docs = app.documents;
    f = false;
    t = true;
    debug = false; /* Wenn debug auf 'false' steht, wird das Skript in einem einzigen Protokoll-Schritt ausgeführt. */
}

function cTID(s) {
    return app.charIDToTypeID(s)
};

function sTID(s) {
    return app.stringIDToTypeID(s)
};




/* SAVE + SET PREFERENCES ************************/

function prefSave() {
    startDisplayDialogs = app.displayDialogs;
    startRulerUnits = app.preferences.rulerUnits;
}

function prefSet(_dialog, _units) {
    if (!_dialog) {
        alert("check prefSet");
        _dialog = DialogModes.NO;
    }
    if (!_units) {
        alert("check prefSet");
        _units = Units.MM;
    }
    app.displayDialogs = _dialog;
    app.preferences.rulerUnits = _units;
}

function prefReset() {
    app.preferences.rulerunits = startRulerUnits;
    if (startDisplayDialogs == DialogModes.ERROR) {
        startDisplayDialogs = DialogModes.NO;
    }
    app.displayDialogs = startDisplayDialogs;
};


/* TODO würde gerne einen anderen Namen haben */
function resetImage() {
    /* zurück zur letzten Version */
    executeAction(sTID('revert'), undefined, DialogModes.NO);
    emptyProtocoll();
};

function emptyProtocoll() {
    var desc17393 = new ActionDescriptor();
    desc17393.putEnumerated(cTID('null'), cTID('PrgI'), cTID('Al  '));
    executeAction(cTID('Prge'), desc17393, DialogModes.NO);

    var hs = app.activeDocument.historyStates;
    for (var a = hs.length - 1; a >= 0; --a) {
        if (hs[a].snapshot) {
            app.activeDocument.activeHistoryState = hs[a];
            deleteHistory();
        }
    }
};

function deleteHistory() {
    var desc20 = new ActionDescriptor();
    var ref23 = new ActionReference();
    ref23.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
    desc20.putReference(charIDToTypeID('null'), ref23);
    executeAction(charIDToTypeID('Dlt '), desc20, DialogModes.NO);
};



/* DEBUGGING ****************************/
function time_start() {
    start = new Date().getTime();
}

function time_stop(_time_start) {
    var stop = new Date().getTime();
    var elapsed = (stop - _time_start) / 1000;
    var msg = ("Done (" + Number(elapsed).toFixed(3) + " secs).");
    alert(msg);
}

function logger(_log_function) {
    if (debug) {
        time_start()
    };
    var filepath = "~/Desktop/SimonScript.log";
    var write_file = File(filepath);
    if (!write_file.exists) {
        write_file = new File(filepath);
    }

    var today = new Date();
    var date = ('0' + today.getDate()).slice(-2) + "." + ('0' + (today.getMonth() + 1)).slice(-2) + "." + today.getFullYear();
    var time = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
    var dateTime = date + " - " + time;

    /* Neuste Ziele oben*/
    /*  var read_file = File(filepath);
        read_file.open("r", undefined, undefined);
        if (read_file !== "") {
          var oldText = read_file.read();
          read_file.close();
        }

        write_file = File(filepath);
        write_file.open("w", undefined, undefined);
        write_file.writeln(_log);
        write_file.writeln("-----------------------");
        if (oldText != "") {
          write_file.writeln(oldText);
        }
        write_file.close(); */

    /* Neuste Zeile unten - Performance?? */
    var log_file = File(filepath);
    log_file.open('a', undefined, undefined);
    if (log_file !== '') {
        log_file.writeln("-----------------------");
        log_file.writeln(dateTime);
        log_file.writeln("Doc: '" + doc.name + "'");
        log_file.writeln("Function: '" + _log_function + "'");
        log_file.writeln("");
        log_file.close();
    }
    if (debug) {
        time_stop(start)
    }
}


function undoSteps(_steps) {
    for (var i = 0; i < _steps; i++) {
        executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
    };
};


/* LAYER *********************************/


function createLayer(_name, _type, _mode, _color, _opacity, _mask, _clip, _autoLevel) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putClass(sTID("adjustmentLayer"));
        d.putReference(sTID("null"), r);
        var d2 = new ActionDescriptor();
        d2.putString(sTID("name"), _name);
        d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
        d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
        d2.putBoolean(sTID('group'), _clip);
        if (_type == "levels" && _autoLevel) {
            var d3 = new ActionDescriptor();
            d3.putEnumerated(sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault'));
            var l = new ActionList();
            var d4 = new ActionDescriptor();
            var r2 = new ActionReference();
            r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('composite'));
            d4.putReference(sTID('channel'), r2);
            d4.putBoolean(sTID('auto'), true);
            l.putObject(sTID('levelsAdjustment'), d4);
            d3.putList(sTID('adjustment'), l);
            d2.putObject(sTID("type"), sTID(_type), d3);
        } else {
            d2.putClass(sTID("type"), sTID(_type));
        }
        d.putObject(sTID("using"), sTID("adjustmentLayer"), d2);
        executeAction(sTID("make"), d, DialogModes.NO);

        if (_mask == "invert") {
            executeAction(sTID('invert'), undefined, DialogModes.NO);
            return;
        } else if (_mask == "none") {
            deleteMask();
            return;
        } else if (_mask == "black" || _mask == "white" || _mask == "gray") {
            fill(_mask, "normal", 100);
            return;
        }

    } catch (err) {
        logger(arguments.callee.name);
    }
}


function createColorLayer(_name, _mode, _color, _opacity, _mask, _red, _green, _blue) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putClass(sTID("contentLayer"));
        d.putReference(sTID("null"), r);
        var d2 = new ActionDescriptor();
        d2.putString(sTID("name"), _name);
        d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
        d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
        var d3 = new ActionDescriptor();
        var d4 = new ActionDescriptor();
        d4.putDouble(sTID("red"), _red);
        d4.putDouble(sTID("green"), _green);
        d4.putDouble(sTID("blue"), _blue);
        d3.putObject(sTID("color"), sTID("RGBColor"), d4);
        d2.putObject(sTID("type"), sTID("solidColorLayer"), d3);
        d.putObject(sTID("using"), sTID("contentLayer"), d2);
        executeAction(sTID("make"), d, DialogModes.NO);
        gotoMask();

        if (_mask == "invert") {
            executeAction(sTID('invert'), undefined, DialogModes.NO);
            return;
        } else if (_mask == "none") {
            deleteMask();
            return;
        } else if (_mask == "black" || _mask == "white" || _mask == "gray") {
            fill(_mask, "normal", 100);
            return;
        }

    } catch (err) {
        logger(arguments.callee.name);
    }
}

/* TODO toogle Mask/RGB-Layer //  bisher nur im CreateColorLayer verwendet */
function gotoMask() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('channel'), sTID('channel'), sTID('mask'));
    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    executeAction(sTID('select'), d, DialogModes.NO);
}

function gotoFill() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('channel'), sTID('channel'), sTID('RGB'));
    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    executeAction(sTID('select'), d, DialogModes.NO);
}


/* TODO */
/* _direction für  */
/* ElementPlacement.INSIDE */
/* ElementPlacement.PLACEATBEGINNING */
/* ElementPlacement.PLACEATEND */

/* moveLayer("Weiss", "Original", "down");*/
function moveLayer(_objectLayer, _aimLayer, _direction) {
    gotoLayer(_objectLayer);
    var ref_1 = app.activeDocument.activeLayer;
    gotoLayer(_aimLayer);
    var ref_2 = app.activeDocument.activeLayer;
    if (_direction == "up") {
        var direction = ElementPlacement.PLACEBEFORE
    } else if (_direction == "down") {
        var direction = ElementPlacement.PLACEAFTER
    };
    ref_1.move(ref_2, direction);
}

/* up   down     top   bottom */
/* next previous front back */
function moveLayer3(_direction, _steps) {
    if (_direction == "up") {
        _direction = "next"
    }
    if (_direction == "down") {
        _direction = "previous"
    }
    if (_direction == "top") {
        _direction = "front"
    }
    if (_direction == "bottom") {
        _direction = "back"
    }
    for (var i = 0; i < _steps; i++) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        r2.putEnumerated(sTID('layer'), sTID('ordinal'), sTID(_direction));
        d.putReference(sTID('to'), r2);
        executeAction(sTID('move'), d, DialogModes.NO);
    };
}


function deleteMask() {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('channel'), sTID('channel'), sTID('mask'));
        d.putReference(sTID('null'), r);
        executeAction(sTID('delete'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}



function createGroup(_name, _mode, _color, _opacity, _groupSelection) {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putClass(sTID('layerSection'));
        d.putReference(sTID('null'), r);
        if (_groupSelection) {
            var r2 = new ActionReference();
            r2.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
            d.putReference(sTID('from'), r2);
        }
        var d2 = new ActionDescriptor();
        d2.putString(sTID('name'), _name);
        d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d2.putEnumerated(sTID('color'), sTID('color'), sTID(_color));
        d2.putEnumerated(sTID('mode'), sTID('blendMode'), sTID(_mode));
        d.putObject(sTID('using'), sTID('layerSection'), d2);
        d.putInteger(sTID('layerSectionStart'), 351);
        d.putInteger(sTID('layerSectionEnd'), 352);
        d.putString(sTID('name'), "Gruppe 3");
        executeAction(sTID('make'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}

/*
fill("black", "normal", 100)
fill("color", "multiply", 50, 240,50,50)
*/
function fill(_content, _mode, _opacity, _h, _s, _b) {
    try {
        var d = new ActionDescriptor();
        d.putEnumerated(sTID('using'), sTID('fillContents'), sTID(_content));

        if (_content == "color") {
            var d2 = new ActionDescriptor();
            d2.putUnitDouble(sTID('hue'), sTID('angleUnit'), _h);
            d2.putDouble(sTID('saturation'), _s);
            d2.putDouble(sTID('brightness'), _b);
            d.putObject(sTID('color'), sTID('HSBColorClass'), d2);
        }

        d.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
        d.putEnumerated(sTID('mode'), sTID('blendMode'), sTID(_mode));
        executeAction(sTID('fill'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}

function smartObject() {
    try {
        executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}

function rasterSmartObject() {
    try {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        executeAction(sTID('rasterizeLayer'), d, DialogModes.NO);
    } catch (err) {
        logger(arguments.callee.name);
    }
}

function nameLayer(_name) {
    try {
        doc.activeLayer.name = _name;
    } catch (err) {
        logger(arguments.callee.name)
    }
}


function dublicate(_name) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    d.putString(sTID('name'), _name);
    d.putInteger(sTID('version'), 5);
    executeAction(sTID('duplicate'), d, DialogModes.NO);
}

/* TODO ist das noch in Verwendung, oder kann das weg */
function selectLayerUp() {
    var desc150 = new ActionDescriptor();
    var ref118 = new ActionReference();
    ref118.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('forwardEnum'));
    desc150.putReference(sTID('null'), ref118);
    desc150.putBoolean(sTID('makeVisible'), false);
    var list65 = new ActionList();
    list65.putInteger(108);
    desc150.putList(sTID('layerID'), list65);
    executeAction(sTID('select'), desc150, DialogModes.NO);
}

function selectLayer(_direction, _times) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    if (_direction != "down") {
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('forwardEnum'));
    } else {
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('backwardEnum'));
    }

    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    var i = 0;
    for (i = 1; i <= _times; i += 1) {
        executeAction(sTID('select'), d, DialogModes.NO);
    }
}
/* TODO mit unterer Funktion ersetzt */
function selectAll() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    executeAction(sTID('selectAllLayers'), d, DialogModes.NO);
}

/* selectNoLayers OR selectAllLayers */
function selectLayers(_all_or_nothing) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    executeAction(sTID(_all_or_nothing), d, DialogModes.NO);
}

function hasBackground() {
    var ref = new ActionReference();
    ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Bckg"));
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Back"));
    var desc = executeActionGet(ref);
    var res = desc.getBoolean(charIDToTypeID("Bckg"));
    return res;
};

function clearAllGuides() {
    executeAction(sTID('clearAllGuides'), undefined, DialogModes.NO);
}

/* egal ob Idx oder LayerName */
function gotoLayer(_input) {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    if (typeof _input == "number") {
        r.putIndex(charIDToTypeID('Lyr '), _input);
    } else if (typeof _input == "string") {
        r.putName(sTID('layer'), _input);
    }

    d.putReference(sTID('null'), r);
    d.putBoolean(sTID('makeVisible'), false);
    executeAction(sTID('select'), d, DialogModes.NO);
}


/** IMAGE *******************************/

function SmartObject_edit() {
    var d = new ActionDescriptor();
    executeAction(sTID('placedLayerEditContents'), d, DialogModes.NO);
}

function SmartOject_placeItem(_item) {
    var d = new ActionDescriptor();
    d.putPath(cTID('null'), new File(_item));
    executeAction(sTID('placedLayerReplaceContents'), d, DialogModes.NO);
};


function getBitDepth() {
    var bitDepth = doc.bitsPerChannel;

    if (bitDepth === BitsPerChannelType.EIGHT) {
        return 8;
    } else if (bitDepth === BitsPerChannelType.SIXTEEN) {
        return 16;
    } else if (bitDepth === BitsPerChannelType.THIRTYTWO) {
        return 32;
    } else {
        return false;
    }
}

/* setBitDepth(8); */
function setBitDepth(_bitdepth) {
    var id1 = charIDToTypeID("CnvM");
    var desc1 = new ActionDescriptor();
    var id2 = charIDToTypeID("Dpth");
    desc1.putInteger(id2, _bitdepth);
    executeAction(id1, desc1, DialogModes.NO);
}


/* TODO irritierender Name // Vorschläge? */
/* img_resize(10, 300) */
/* img_resize(10, null) */
function img_resize(_ziel_longSite, _max_resolution) {
    prefSave();
    prefSet(DialogModes.NO, Units.MM);

    if (doc.width > doc.height) {
        var d = new ActionDescriptor();
        d.putUnitDouble(sTID('width'), sTID('distanceUnit'), cm2pt(_ziel_longSite));
        executeAction(sTID('imageSize'), d, DialogModes.NO);
    } else {
        var d = new ActionDescriptor();
        d.putUnitDouble(sTID('height'), sTID('distanceUnit'), cm2pt(_ziel_longSite));
        executeAction(sTID('imageSize'), d, DialogModes.NO);
    }

    if (doc.resolution > _max_resolution && _max_resolution) {
        doc.resizeImage(undefined, undefined, _max_resolution, ResampleMethod.PRESERVEDETAILS, 0);
    }

    prefReset();
}


/* setMegaPixel(8) */
function setMegaPixel(_setMegaPixel) {
    prefSave();
    prefSet(DialogModes.NO, Units.PIXELS);

    var w = doc.width;
    var h = doc.height;
    var getPixel = w * h;
    var setPixel = _setMegaPixel * 1000000;
    var faktor = setPixel / getPixel;

    if (setPixel < getPixel) {
        if (w >= h) {
            var w_neu = w * Math.sqrt(faktor);
            doc.resizeImage(w_neu, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
        } else {
            var h_neu = Math.round(h * Math.sqrt(faktor));
            doc.resizeImage(undefined, h_neu, undefined, ResampleMethod.PRESERVEDETAILS, 0);
        }
    }

    prefReset();
    return "";
}

/* getScale(8) */
function getScale(_setMegaPixel) {
    /*     prefSave();
        prefSet(DialogModes.NO, Units.PIXELS); */

    var w = doc.width;
    var h = doc.height;
    var getPixel = w * h;
    var setPixel = _setMegaPixel * 1000000;
    var faktor = setPixel / getPixel;

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
    return Math.sqrt(faktor);
}

/* Convert cm to Point, imageSize need Points */
function cm2pt(cm) {
    return cm * 28.3464566929;
}

function mm2pt(mm) {
    return mm * 0.283464566929;
}


function setDpi(_dpi) {
    var d = new ActionDescriptor();
    d.putUnitDouble(sTID('resolution'), sTID('densityUnit'), _dpi);
    executeAction(sTID('imageSize'), d, DialogModes.NO);
}

/* setSize("width", 100) */
function setSize(_side, _size) {
    var d = new ActionDescriptor();
    d.putUnitDouble(sTID(_side), sTID('distanceUnit'), mm2pt(_size));
    executeAction(sTID('imageSize'), d, DialogModes.NO);
}

/* COLOR ****************************/
function noProfile() {
    if (doc.colorProfileType == ColorProfile.NONE) {
        try {
            app.bringToFront();
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putEnumerated(sTID("document"), sTID("ordinal"), sTID("targetEnum"));
            d.putReference(sTID("null"), r);
            d.putBoolean(sTID("manage"), true);
            executeAction(sTID("assignProfile"), d, DialogModes.ALL);
        } catch (e) {}
    }
}

function assignProfile(_profile) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('document'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    d.putString(sTID('profile'), _profile);
    executeAction(sTID('assignProfile'), d, DialogModes.NO);
}

/* TODO !! Geht Besser ! ****************************/
function gray2rgb() {
    if (doc.mode == DocumentMode.GRAYSCALE) {
        doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
};

function cmyk2rgb() {
    if (doc.mode == DocumentMode.CMYK) {
        doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
};

function sRGB2eciRGB() {
    var getProfile = doc.colorProfileName;
    var find = new RegExp("^sRGB");
    if (getProfile.match(find)) {
        doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
    }
}



/* WEB-Output ****************************/
function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    return myString;
}


function replace__RGB_RZ(_replace) {
    var RGBname = GetFileNameOnly(doc.name);
    var RZname = RGBname.replace(/(__RGB.*)$/g, _replace).replace(/(__RZ.*)$/g, _replace);

    var checkName = new RegExp(_replace, 'g');
    if (!RZname.match(checkName)) {
        var RZname = RZname + _replace;
    }
    return RZname;
}

function saveRZ(_saveFolder, _prefix, _saveFormat, _replace) {
    /* Location + Name */
    var saveFolder = new Folder(_saveFolder);
    if (!saveFolder.exists) saveFolder.create();

    var saveName = replace__RGB_RZ(_replace);
    var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
    var saveFile = File(savePath);

    while (saveFile.exists) {
        var saveName = saveName + "+";
        var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
        var saveFile = File(savePath);
    }


    if (_saveFormat == "tif") {
        var saveOptions = new TiffSaveOptions();
        saveOptions.alphaChannels = true;
        saveOptions.byteOrder = ByteOrder.IBM;
        saveOptions.embedColorProfile = true;
        saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        saveOptions.layers = true;
        saveOptions.spotColors = false;
        saveOptions.transparency = true;
        saveOptions.annotations = false;

    } else if (_saveFormat == "jpg") {
        var saveOptions = new JPEGSaveOptions();
        saveOptions.embedColorProfile = true;
        saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        saveOptions.matte = MatteType.WHITE;
        saveOptions.quality = 11;

    } else if (_saveFormat == "psd") {
        var saveOptions = new PhotoshopSaveOptions();
        saveOptions.alphaChannels = false;
        saveOptions.annotations = false;
        saveOptions.embedColorProfile = true;
        saveOptions.layers = true;
        saveOptions.spotColors = false;
    }

    doc.saveAs(new File(savePath), saveOptions, false, Extension.LOWERCASE);
    return;
}
/*=================================================================================*/



function selectAllLayers() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    executeAction(sTID('selectAllLayers'), d, DialogModes.NO);
}

function mergeLayers() {
    var d = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), d, DialogModes.NO);
}



function blendif(_blackMin, _blackMax, _whiteMin, _whiteMax) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    var d2 = new ActionDescriptor();
    var l = new ActionList();
    var d3 = new ActionDescriptor();
    var r2 = new ActionReference();
    r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('gray'));
    d3.putReference(sTID('channel'), r2);
    d3.putInteger(sTID('srcBlackMin'), 0);
    d3.putInteger(sTID('srcBlackMax'), 0);
    d3.putInteger(sTID('srcWhiteMin'), 255);
    d3.putInteger(sTID('srcWhiteMax'), 255);
    d3.putInteger(sTID('destBlackMin'), _blackMin);
    d3.putInteger(sTID('destBlackMax'), _blackMax);
    d3.putInteger(sTID('destWhiteMin'), _whiteMin);
    d3.putInteger(sTID('desaturate'), _whiteMax);
    l.putObject(sTID('blendRange'), d3);
    d2.putList(sTID('blendRange'), l);
    var d4 = new ActionDescriptor();
    d4.putUnitDouble(sTID('scale'), sTID('percentUnit'), 100.000000);
    d2.putObject(sTID('layerEffects'), sTID('layerEffects'), d4);
    d.putObject(sTID('to'), sTID('layer'), d2);
    executeAction(sTID('set'), d, DialogModes.NO);
}

function checkTransparency() {



    /*     if (transp) alert("Has transparency");
        else alert("No transparency"); */

        doc.suspendHistory("Transparent Check", "checkTransparency_inner()");
        undoSteps(1);

    if (transp) {return true} 
    else {return false}
}

function checkTransparency_inner() {
    prefSave();
    transp = true;

    /* Kanalberechnung */
    var s2t = function (s) {return app.stringIDToTypeID(s);};

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

    return transp;

}




function transformLayer(_position, _scale) {
    var d = new ActionDescriptor();

    if (_position == "center" || _position == "c") {
        var _positionTranslate = "QCSAverage";}
    if (_position == "topleft" || _position == "tl" || _position == "↖") {
        var _positionTranslate = "QCSCorner0";}
    if (_position == "top" || _position == "t" || _position == "↑") {
        var _positionTranslate = "QCSSide0";}
    if (_position == "topright" || _position == "tr" || _position == "↗") {
        var _positionTranslate = "QCSCorner1";}
    if (_position == "right" || _position == "r" || _position == "→") {
        var _positionTranslate = "QCSSide1";}
    if (_position == "bottomright" || _position == "br" || _position == "↘") {
        var _positionTranslate = "QCSCorner2";}
    if (_position == "bottom" || _position == "b" || _position == "↓") {
        var _positionTranslate = "QCSSide2";}
    if (_position == "bottomleft" || _position == "bl" || _position == "↙") {
        var _positionTranslate = "QCSCorner3";}
    if (_position == "left" || _position == "l" || _position == "←") {
        var _positionTranslate = "QCSSide3";}

    d.putEnumerated(sTID('freeTransformCenterState'), sTID('quadCenterState'), sTID(_positionTranslate));
    var d2 = new ActionDescriptor();
    d2.putUnitDouble(sTID('horizontal'), sTID('pixelsUnit'), 0);
    d2.putUnitDouble(sTID('vertical'), sTID('pixelsUnit'), 0);
    d.putObject(sTID('offset'), sTID('offset'), d2);
    d.putUnitDouble(sTID('width'), sTID('percentUnit'), _scale);
    d.putUnitDouble(sTID('height'), sTID('percentUnit'), _scale);
    executeAction(sTID('transform'), d, DialogModes.NO);
}




  

function smartObjectTransparencyIssue() {
    var temp = doc.activeLayer.name;
    gotoLayer("Original");

    
    tempRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;
    

    if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
        if (doc.width < doc.height) {
            var transformLayerScale = (doc.width + 2) * 100 / doc.width;
        } else {
            var transformLayerScale = (doc.height + 2) * 100 / doc.height;
        }
        alert(transformLayerScale);
        transformLayer("center", transformLayerScale);
    }

    gotoLayer("vorher Ebene");
    if (doc.width < doc.height) {
        var transformLayerScale = (doc.width + 2) * 100 / doc.width;
    } else {
        var transformLayerScale = (doc.height + 2) * 100 / doc.height;
    }
    transformLayer("center", transformLayerScale);
    app.preferences.rulerunits = tempRulerUnits;
    

    gotoLayer(temp);
    var temp = "";
}