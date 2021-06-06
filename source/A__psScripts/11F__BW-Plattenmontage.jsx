/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F BW] Plattenmontage</name>
<about>Bilderwelt auf die Platten | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/



var run_all = true;
var run_3x2quer = false;
var run_3x2hoch = false;
var run_4x3quer = false;
var run_4x3hoch = false;
var run_1x1 = false;
var run_DinAquer = false;
var run_DinAhoch = false;
var run_pano = true;

var outputFileFormat = "JPG";  // "JPG" oder "TIF"
var outputResize = 2400;
var outputDesination = "web"   // "web" oder "print"
var doCrop = true;



function cTID(s) { return app.charIDToTypeID(s); };
function sTID(s) { return app.stringIDToTypeID(s); };

prefSave();
prefSet();


inputFolder = Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");
var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);

var masterFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Shop/2019-09/RGB/MASTER");
// var masterFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Shop/2019-09/RGB/MASTER_maximal");
// var masterFolder = new Folder("~/11F <-> Simon/Shop/2019-09/RGB/MASTER");

if (!masterFolder.exists) { errorExit("kein Master-Folder!") };

var tempFolder = new Folder(masterFolder + "/.temp");
// var tempFolder = new Folder("~/11F <-> Simon/Shop/2019-09/material/_test");
if (!tempFolder.exists) { tempFolder.create() };

// var outputFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Shop/2019-09/material/_output");
// var outputFolder = new Folder("~/11F <-> Simon/Shop/2019-09/material/_output");
// var outputFolder = new Folder("~/Desktop/Simon/Plattenmontage/test_output");
// var outputFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Bilderwelt/Plattenmontage+");
var outputFolder = new Folder("/Volumes/homes/pixoprint/11F_BW_2021-03__moods");
if (!outputFolder.exists) { outputFolder.create() };

if (run_all || run_3x2quer) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__45x30/g)) {           /* 3x2 */
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            if (doc.width > doc.height) {               /* QUER */
                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);
                format = "3x2";
                seitenverhältnis = "quer";
                originalName = thisFileName.replace("__45x30", "").replace("__RGB", "");

                createBlanko();
                placeTemp(doc_file, 0, 0, 100, 100, 0);
                var spezial = "";
                var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_1);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                processItem("Acryl", "detail", temp_1);
                processItem("Acryl", "full", temp_1);
                processItem("Alu", "detail", temp_1);
                processItem("Alu", "full", temp_1);
                processItem("FineArt", "detail", temp_1);
                processItem("Leinwand", "detail", temp_1);
                processItem("Leinwand", "full", temp_1);
                processItem("Poster", "detail", temp_1);

            }
        }
        closeAll();
    }
}


if (run_all || run_3x2hoch) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__45x30/g)) {       /* 3x2 */
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            if (doc.width < doc.height) {           /* HOCH */
                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);
                format = "3x2";
                seitenverhältnis = "hoch";
                originalName = thisFileName.replace("__45x30", '').replace("__RGB", "");

                // 90cw
                createBlanko();
                placeTemp(doc_file, 0, 0, 150, 150, 90);
                var spezial = "_90cw"
                var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_1);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                // links
                createBlanko();
                placeTemp(doc_file, -1476, 0, 100, 100, 0);
                var spezial = "_links"
                var temp_2 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_2);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                processItem("Acryl", "detail", temp_1);
                processItem("Acryl", "full", temp_2);
                processItem("Alu", "detail", temp_1);
                processItem("Alu", "full", temp_2);
                processItem("FineArt", "detail", temp_1);
                processItem("Leinwand", "detail", temp_1);
                processItem("Leinwand", "full", temp_2);
                processItem("Poster", "detail", temp_1);

            }
        }
        closeAll();
    }
}


if (run_all || run_4x3quer) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__40x30/g)) {       /* 4x3 */
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            if (doc.width > doc.height) {           /* QUER */
                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);
                format = "4x3";
                seitenverhältnis = "quer";
                originalName = thisFileName.replace("__40x30", '').replace("__RGB", "");

                // links
                createBlanko();
                placeTemp(doc_file, -296, 0, 100, 100, 0);
                var spezial = "_links";
                var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_1);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                // rechts
                createBlanko();
                placeTemp(doc_file, 297, 0, 100, 100, 0);
                var spezial = "_rechts";
                var temp_2 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_2);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                processItem("Acryl", "detail", temp_1);
                processItem("Acryl", "full", temp_1);
                processItem("Alu", "detail", temp_1);
                processItem("Alu", "full", temp_1);
                processItem("FineArt", "detail", temp_2);
                processItem("Leinwand", "detail", temp_1);
                processItem("Leinwand", "full", temp_1);
                processItem("Poster", "detail", temp_2);

            }
        }
        closeAll();
    }
}

if (run_all || run_4x3hoch) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__40x30/g)) {       /* 4x3 */
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            if (doc.width < doc.height) {           /* HOCH */
                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);
                format = "4x3";
                seitenverhältnis = "hoch";
                originalName = thisFileName.replace("__40x30", '').replace("__RGB", "");

                // links
                createBlanko();
                placeTemp(doc_file, -1328, 0, 100, 100, 0);
                var spezial = "_links";
                var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_1);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                // 90cw-rechts
                createBlanko();
                placeTemp(doc_file, 296.5, 0, 133.333333, 133.333333, 90);
                var spezial = "_90cw-rechts";
                var temp_2 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_2);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                // 90cw-links
                createBlanko();
                placeTemp(doc_file, -294.5, 0, 133.333333, 133.333333, 90);
                var spezial = "_90cw-links";
                var temp_3 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_3);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                processItem("Acryl", "detail", temp_3);
                processItem("Acryl", "full", temp_1);
                processItem("Alu", "detail", temp_3);
                processItem("Alu", "full", temp_1);
                processItem("FineArt", "detail", temp_2);
                processItem("Leinwand", "detail", temp_3);
                processItem("Leinwand", "full", temp_1);
                processItem("Poster", "detail", temp_2);

            }
        }
        closeAll();
    }
}

if (run_all || run_1x1) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__40x40/g)) {       /* 1x1 */
            var doc_file = new File(thisFile);

            format = "1x1";
            seitenverhältnis = "";
            originalName = thisFileName.replace("__40x40", '').replace("__RGB", "");

            // links
            createBlanko();
            placeTemp(doc_file, -886, 0, 100, 100, 0);
            var spezial = "_links";
            var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
            saveTempFile(temp_1);
            app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

            // rechts
            createBlanko();
            placeTemp(doc_file, 885.5, 0, 100, 100, 0);
            var spezial = "_rechts";
            var temp_2 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
            saveTempFile(temp_2);
            app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);


            processItem("Acryl", "detail", temp_1);
            processItem("Acryl", "full", temp_1);
            processItem("Alu", "detail", temp_1);
            processItem("Alu", "full", temp_1);
            processItem("FineArt", "detail", temp_2);
            processItem("Leinwand", "detail", temp_1);
            processItem("Leinwand", "full", temp_1);
            processItem("Poster", "detail", temp_2);

        }
        closeAll();
    }
}

if (run_all || run_DinAquer) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__A3/g)) {       /* DinA */
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            if (doc.width > doc.height) {           /* QUER */
                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);
                format = "DinA";
                seitenverhältnis = "quer";
                originalName = thisFileName.replace("__A3", '').replace("__RGB", "");

                // links
                createBlanko();
                placeTemp(doc_file, 177, -18, 101, 101, 0);
                var spezial = "_links";
                var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_1);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                processItem("Poster", "detail", temp_1);

            }
        }
        closeAll();
    }
}

if (run_all || run_DinAhoch) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__A3/g)) {       /* DinA */
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            if (doc.width < doc.height) {           /* HOCH */
                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);
                format = "DinA";
                seitenverhältnis = "hoch";
                originalName = thisFileName.replace("__A3", '').replace("__RGB", "");

                // 90cw-links
                createBlanko();
                // placeTemp(doc_file, 153, 0, 101, 101, 90);
                placeTemp(doc_file, 153.5, 0, 141.44, 141.44, 90);
                var spezial = "_90cw-links";
                var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
                saveTempFile(temp_1);
                app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

                processItem("Poster", "detail", temp_1);

            }
        }
        closeAll();
    }
}

if (run_all || run_pano) {
    for (var i = 0; i < fileList.length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (thisFileName.match(/__62x25/g)) {       /* PANO */
            var doc_file = new File(thisFile);

            format = "Pano";
            seitenverhältnis = "";
            originalName = thisFileName.replace("__62x25", '').replace("__RGB", "");

            // links
            createBlanko();
            placeTemp(doc_file, 1770.961854, 0, 166.65, 166.65, 0);
            var spezial = "_links";
            var temp_1 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
            saveTempFile(temp_1);
            app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

            // rechts
            createBlanko();
            placeTemp(doc_file, -1770.961854, 0, 166.65, 166.65, 0);
            var spezial = "_rechts";
            var temp_2 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
            saveTempFile(temp_2);
            app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);

            // unten
            createBlanko();
            placeTemp(doc_file, 0, 709, 100, 100, 0);
            var spezial = "_unten";
            var temp_3 = new File(tempFolder + "/" + format + "-" + seitenverhältnis + spezial);
            saveTempFile(temp_3);
            app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES);


            processItem("Acryl", "detail", temp_1);
            processItem("Acryl", "full", temp_3);
            processItem("Alu", "detail", temp_1);
            processItem("Alu", "full", temp_3);
            processItem("FineArt", "detail", temp_2);
            processItem("Leinwand", "detail", temp_1);
            processItem("Leinwand", "full", temp_3);
            processItem("Poster", "detail", temp_2);

        }
        closeAll();
    }
}

prefReset();

///////////////////////////////////////////////////////
//// FUNCTIONS ////////////////////////////////////////
///////////////////////////////////////////////////////


//// global //////////////////////////////////////////

function prefSave() {
    startDisplayDialogs = app.displayDialogs;
    startRulerUnits = app.preferences.rulerUnits;
}
function prefSet() {
    app.displayDialogs = DialogModes.NO;
    app.preferences.rulerUnits = Units.PIXELS;
}
function prefReset() {
    app.preferences.rulerUnits = startRulerUnits;
    app.displayDialogs = startDisplayDialogs;
}

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
}


function deleteHistory() {
    var desc20 = new ActionDescriptor();
    var ref23 = new ActionReference();
    ref23.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
    desc20.putReference(charIDToTypeID('null'), ref23);
    executeAction(charIDToTypeID('Dlt '), desc20, DialogModes.NO);
};



//// fileList /////////////////////////////////////////

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

// just kopiert
function sort_pages(array) {
    alert(array[0]);
    array[0] = array[0].replace(/(.*)(__40x30|__45x30|__40x40|__62x25)(\,)/gm, "$2$1$3");
    alert(array[0]);
    var str = array.sort(sortnum).join('\r') + '\r';

    // str = str.replace(/(.*)(__40x30|__45x30|__40x40|__62x25)(\,)/gm, "$2$1$3");
    alert(str);
    str = str.replace(/([^\r]+\r)(\1)+/g, '$1');
    str = str.replace(/\r$/, '');
    str = str.split('\r');
    return str
}

function sortnum(a, b) {
    return a > b
}

function sort_sizes(array) {
    var rightPageNumber = array.replace(/(.*)(__40x30|__45x30|__40x40|__62x25)(.*)/g, "$2$1$3");
}



//// Plattenmontage ////////////////////////////////////

function placeTemp(image, offset_horizontal, offset_vertical, width, height, angle) {
    var desc23 = new ActionDescriptor();
    desc23.putInteger(cTID('Idnt'), 4);
    desc23.putPath(cTID('null'), image);
    desc23.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID('QCSAverage'));
    var desc24 = new ActionDescriptor();
    desc24.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), offset_horizontal);
    desc24.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), offset_vertical);
    desc23.putObject(cTID('Ofst'), cTID('Ofst'), desc24);
    desc23.putUnitDouble(cTID('Wdth'), cTID('#Prc'), width);
    desc23.putUnitDouble(cTID('Hght'), cTID('#Prc'), height);
    desc23.putUnitDouble(cTID('Angl'), cTID('#Ang'), angle);
    executeAction(cTID('Plc '), desc23, DialogModes.NO);
};

function createBlanko() {
    app.documents.add(5315, 3543, 300, "blanko", NewDocumentMode.RGB, DocumentFill.TRANSPARENT, 1.0, BitsPerChannelType.EIGHT, "Adobe RGB (1998)")
};

function saveTempFile(_tempFile) {
    var tempFile = new File(_tempFile);

    tiffSaveOptions = new TiffSaveOptions();
    tiffSaveOptions.embedColorProfile = true;
    tiffSaveOptions.alphaChannels = false;
    tiffSaveOptions.layers = false;
    tiffSaveOptions.byteOrder = ByteOrder.IBM;
    tiffSaveOptions.annotations = false;
    tiffSaveOptions.transparency = true;
    tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
    app.activeDocument.saveAs(tempFile, tiffSaveOptions, true, Extension.LOWERCASE)
}

function closeAll() {
    while (app.documents.length) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}


function gotoLayer(_layer) {
    var desc148 = new ActionDescriptor();
    var ref23 = new ActionReference();
    ref23.putName(cTID('Lyr '), _layer);
    desc148.putReference(cTID('null'), ref23);
    desc148.putBoolean(cTID('MkVs'), false);
    var list3 = new ActionList();
    list3.putInteger(42);
    desc148.putList(cTID('LyrI'), list3);
    executeAction(cTID('slct'), desc148, DialogModes.NO);
};

function placeItem(_item) {
    gotoLayer("BILD");
    var desc154 = new ActionDescriptor();
    desc154.putPath(cTID('null'), new File(_item));
    executeAction(sTID('placedLayerReplaceContents'), desc154, DialogModes.NO);
};


function savePlattenmontage(_originalName, _material, _ansicht, _outputFileFormat) {
    var itemFile = new File(outputFolder + "/" + _originalName + "__" + _material + "-" + _ansicht);

    if (_outputFileFormat == "TIF") {
        tiffSaveOptions = new TiffSaveOptions();
        tiffSaveOptions.embedColorProfile = true;
        tiffSaveOptions.alphaChannels = false;
        tiffSaveOptions.layers = false;
        tiffSaveOptions.byteOrder = ByteOrder.IBM;
        tiffSaveOptions.annotations = false;
        tiffSaveOptions.transparency = true;
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        app.activeDocument.saveAs(itemFile, tiffSaveOptions, true, Extension.LOWERCASE);

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
        app.activeDocument.saveAs(itemFile, jpgSaveOptions, true, Extension.LOWERCASE);
    }
}

function activePlatte(_format, _seitenverhältnis, _material, _ansicht) {
    return new File(masterFolder + "/" + _format + seitenverhältnis + "_" + _material + "_" + _ansicht + "__MASTER.tif");
}


function changeMaterial(__material) {
    if (__material == "Acryl") {
        var material = "DHA";
    }
    if (__material == "Alu") {
        var material = "AKF";
    }
    if (__material == "FineArt") {
        var material = "FAP";
    }
    if (__material == "Leinwand") {
        var material = "LWD";
    }
    if (__material == "Poster") {
        var material = "POS";
    }
    return material;
}


function processItem(_material, _ansicht, _tempFile) {
    // var material = _material;
    // var ansicht = _ansicht;
    var Platte = activePlatte(format, seitenverhältnis, _material, _ansicht);
    open(Platte);
    placeItem(_tempFile + ".tif");
    var PlatteName = app.documents.getByName(Platte.name);
    PlatteName.flatten();
    if (doCrop) {
        var crop_this = format + seitenverhältnis + "_" + _material + "_" + _ansicht;
        this['crop_' + crop_this](PlatteName);
    }
    if (outputDesination != "print") {
        PlatteName.resizeImage(outputResize, undefined, 72, ResampleMethod.PRESERVEDETAILS, undefined)
    }

    // alert("material: " + changeMaterial(_material));
    savePlattenmontage(originalName, changeMaterial(_material), _ansicht, outputFileFormat);
    emptyProtocoll();
}

// https://regex101.com/r/vT4CLl/1/
// https://regex101.com/r/vT4CLl/2

function crop_AcyrlAlu_detail(__doc) {
    // __doc.crop([1441.810617, 844.591156, 5250.590516, 3383.777755], 0.000000);
    __doc.crop([1441.000000, 714.000000, 5250.000000, 3253.333333], 0.000000);
}

function crop_Leinwand_detail(__doc) {
    __doc.crop([1435.431606, 650.440175, 5242.605214, 3188.555914], 0.000000);
}

function crop_FineartPoster_detail(__doc) {
    __doc.crop([4.000000, 86.372444, 5801.519432, 3951.385399], 0.000000);
}


//// 3x2 quer ////////////////////////////////////
function crop_3x2quer_Acryl_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_3x2quer_Acryl_full(_doc) {
    _doc.crop([263.000000, 0.000000, 6965.000000, 4468.000000], 0.000000);
}
function crop_3x2quer_Alu_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_3x2quer_Alu_full(_doc) {
    _doc.crop([233.500000, 0.000000, 6935.500000, 4468.000000], 0.000000);
}
function crop_3x2quer_FineArt_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}
function crop_3x2quer_Leinwand_detail(_doc) {
    crop_Leinwand_detail(_doc);
}
function crop_3x2quer_Leinwand_full(_doc) {
    _doc.crop([210.000000, 0.000000, 6912.000000, 4468.000000], 0.000000);
}
function crop_3x2quer_Poster_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}


//// 3x2 hoch ////////////////////////////////////
function crop_3x2hoch_Acryl_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_3x2hoch_Acryl_full(_doc) {
    _doc.crop([907.000000, 0.000000, 7609.000000, 4468.000000], 0.000000);
}
function crop_3x2hoch_Alu_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_3x2hoch_Alu_full(_doc) {
    _doc.crop([924.500000, 0.000000, 7626.500000, 4468.000000], 0.000000);
}
function crop_3x2hoch_FineArt_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}
function crop_3x2hoch_Leinwand_detail(_doc) {
    crop_Leinwand_detail(_doc);
}
function crop_3x2hoch_Leinwand_full(_doc) {
    _doc.crop([972.000000, 0.000000, 7674.000000, 4468.000000], 0.000000);
}
function crop_3x2hoch_Poster_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}

//// 4x3 quer ////////////////////////////////////
function crop_4x3quer_Acryl_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_4x3quer_Acryl_full(_doc) {
    _doc.crop([44.500000, 0.000000, 6746.500000, 4468.000000], 0.000000);
}
function crop_4x3quer_Alu_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_4x3quer_Alu_full(_doc) {
    _doc.crop([27.000000, 0.000000, 6729.000000, 4468.000000], 0.000000);
}
function crop_4x3quer_FineArt_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}
function crop_4x3quer_Leinwand_detail(_doc) {
    crop_Leinwand_detail(_doc);
}
function crop_4x3quer_Leinwand_full(_doc) {
    _doc.crop([27.000000, 0.000000, 6729.000000, 4468.000000], 0.000000);
}
function crop_4x3quer_Poster_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}


//// 4x3 hoch ////////////////////////////////////
function crop_4x3hoch_Acryl_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_4x3hoch_Acryl_full(_doc) {
    _doc.crop([794.500000, 0.000000, 7496.500000, 4468.000000], 0.000000);
}
function crop_4x3hoch_Alu_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_4x3hoch_Alu_full(_doc) {
    _doc.crop([789.000000, 0.000000, 7491.000000, 4468.000000], 0.000000);
}
function crop_4x3hoch_FineArt_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}
function crop_4x3hoch_Leinwand_detail(_doc) {
    crop_Leinwand_detail(_doc);
}
function crop_4x3hoch_Leinwand_full(_doc) {
    _doc.crop([865.500000, 0.000000, 7567.500000, 4468.000000], 0.000000);
}
function crop_4x3hoch_Poster_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}


//// 1x1 ////////////////////////////////////
function crop_1x1_Acryl_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_1x1_Acryl_full(_doc) {
    _doc.crop([416.500000, 0.000000, 7118.500000, 4468.000000], 0.000000);
}
function crop_1x1_Alu_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_1x1_Alu_full(_doc) {
    _doc.crop([434.500000, 0.000000, 7136.500000, 4468.000000], 0.000000);
}
function crop_1x1_FineArt_detail(_doc) {
    _doc.crop([182.748276, 43.742090, 5970.224390, 3897.459419], 0.000000);
}
function crop_1x1_Leinwand_detail(_doc) {
    crop_Leinwand_detail(_doc);
}
function crop_1x1_Leinwand_full(_doc) {
    _doc.crop([499.500000, 0.000000, 7201.500000, 4468.000000], 0.000000);
}
function crop_1x1_Poster_detail(_doc) {
    _doc.crop([182.748276, 43.742090, 5970.224390, 3897.459419], 0.000000);
}

//// DinA ////////////////////////////////////
function crop_DinAquer_Poster_detail(_doc) {
    _doc.crop([4.000000, 125.000000, 6100.000000, 4189.000000], 0.000000);
}

function crop_DinAhoch_Poster_detail(_doc) {
    _doc.crop([4.000000, 127.050718, 6100.123778, 4191.133237], 0.000000);
}

//// Pano ////////////////////////////////////
function crop_Pano_Acryl_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_Pano_Acryl_full(_doc) {
    _doc.crop([493.342209, 1242.361125, 6586.586810, 4468.000000], 0.000000);
}
function crop_Pano_Alu_detail(_doc) {
    crop_AcyrlAlu_detail(_doc);
}
function crop_Pano_Alu_full(_doc) {
    _doc.crop([493.342209, 1242.361125, 6586.586810, 4468.000000], 0.000000);
}
function crop_Pano_FineArt_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}
function crop_Pano_Leinwand_detail(_doc) {
    crop_Leinwand_detail(_doc);
}
function crop_Pano_Leinwand_full(_doc) {
    _doc.crop([493.342209, 1242.361125, 6586.586810, 4468.000000], 0.000000);
}
function crop_Pano_Poster_detail(_doc) {
    crop_FineartPoster_detail(_doc);
}


