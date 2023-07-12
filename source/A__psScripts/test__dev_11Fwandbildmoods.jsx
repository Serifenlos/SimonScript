/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[dev] dev_11Fwandbildmoods</name>
<about>test__dev_11Fwandbildmoods | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";


function layer_selectNoLayers() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    executeAction(s2t("selectNoLayers"), d, DialogModes.NO);
}


// $.writeln(layer_selectedIDX_get());

// selectLayerBySelector("hoch", t);


// app.runMenuItem(stringIDToTypeID('selectNoLayers'));

// var idxmm = layer_getIDXbyString("hoch");
// $.writeln("idxmm");
// makeVisByIndex(idxmm, f);


// layer_selectNoLayers();
// selectLayerBySelector("panorama", t);
// nameLayer("Schatten");
// layer_selectNoLayers();
// selectLayerBySelector("quadrat", t);
// nameLayer("vorlage_quadrat");
// layer_selectNoLayers();
// selectLayerBySelector("quer", t);
// nameLayer("vorlage_quer");
// layer_selectNoLayers();
// hide();
// layer_selectNoLayers();
// selectLayerBySelector("MOOD", t);




// loopOpenDocs();

function loopOpenDocs() {
    var firstDoc = app.activeDocument;
    for (var i = 0; i < app.documents.length; i++) {
        app.activeDocument = app.documents[i];
        var doc = app.activeDocument;

        try {
            layer_selectNoLayers();
            selectLayerBySelector("Vorlage", t);
            nameLayer("vorlage");
            layer_selectNoLayers();
            selectLayerBySelector("MOOD", t);


        } catch (e) {}
    };
    app.activeDocument = firstDoc;
}





/** Bilderwelt Korrektur Rahmendicke **/
// bw_KorrekturRahmendicke_run(1.6);

function bw_KorrekturRahmendicke_run(_factor) {
    doc.suspendHistory('Rahmendicke ' + _factor + '', 'bw_KorrekturRahmendicke(' + _factor + ');')
}
// doc.suspendHistory('Rahmendicke 1.3', 'bw_KorrekturRahmendicke(1.3);')

function bw_KorrekturRahmendicke(_factor) {
    var transform_ContentAwareScale_factor = 100 * _factor;
    var transform_free_factor = 100 / _factor;
    bw_transform_ContentAwareScale(0, 0, transform_ContentAwareScale_factor, transform_ContentAwareScale_factor, true, true, true, 100);
    bw_transform_free(0, 0, transform_free_factor, transform_free_factor, true);
}

function bw_transform_ContentAwareScale(horizontal, vertical, width, height, linked, copy, contentAware, amount) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
    d2.putUnitDouble(s2t("horizontal"), s2t("distanceUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("distanceUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    d.putUnitDouble(s2t("width"), s2t("percentUnit"), width);
    d.putUnitDouble(s2t("height"), s2t("percentUnit"), height);
    d.putBoolean(s2t("linked"), linked);
    d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
    d.putBoolean(s2t("contentAware"), contentAware);
    d.putDouble(s2t("amount"), amount);
    executeAction(s2t("transform"), d, DialogModes.NO);
}

function bw_transform_free(horizontal, vertical, width, height, linked) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner3"));
    d2.putUnitDouble(s2t("horizontal"), s2t("distanceUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("distanceUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    d.putUnitDouble(s2t("width"), s2t("percentUnit"), width);
    d.putUnitDouble(s2t("height"), s2t("percentUnit"), height);
    d.putBoolean(s2t("linked"), linked);
    d.putEnumerated(s2t("interfaceIconFrameDimmed"), s2t("interpolationType"), s2t("bicubic"));
    executeAction(s2t("transform"), d, DialogModes.NO);
}
/** **/



/** Loop through LayerSets **/

// var theLayers = collectLayers(app.activeDocument.activeLayer, []);
// $.writeln(theLayers);

////// function collect all layers //////
function collectLayers(theParent, allLayers) {
    if (!allLayers) {
        var allLayers = new Array
    } else {};
    var theNumber = theParent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = theParent.layers[m];
        // theLayer.name = theParent.name + "_" + m;
        // apply the function to layersets;
        if (theLayer.typename == "ArtLayer") {
            // allLayers.push(theLayer.name)
        } else {
            allLayers = (collectLayers(theLayer, allLayers))
            // this line includes the layer groups;
            // allLayers.push(theLayer.id);
            // if (theLayer.typename == "LayerSet") {
            // allLayers.push(theLayer.itemIndex);
            // }
            thisLayerIDX = theLayer.itemIndex;
            makeVisByIndex(thisLayerIDX, true);
            // alert("stop");
            SaveForWeb("JPEG", "/Users/simon/Arbeit/__temp", "Grau+Farbverlauf_HG+++" + thisLayerIDX + "", f, f, f, t, t, 255, 255, 255, "Meta_ck", 66, t, t, 0);
            makeVisByIndex(thisLayerIDX, false);
        }
    };

    return allLayers
};
/** **/



/** Loop through Children to find the SearchString **/
// $.writeln(layer_findChild(doc.activeLayer, "Motiv"))

function layer_findChild(_parent, _sreachString) {
    var theNumber = _parent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = _parent.layers[m];
        if (theLayer.typename == "ArtLayer" && theLayer.name == _sreachString) {
            thisLayerIDX = theLayer.itemIndex;
            break;
        }
    };
    return thisLayerIDX;
};
/** **/




/** Loop through LayerSets **/

// var theLayers = layer_loopChilden(doc.activeLayer, []);
// $.writeln(theLayers);

function layer_loopChilden(_parent, allLayers, _format, _outputFolder, _originalName, _mood, _seitenverhältnis, _scale) {
    if (!allLayers) {
        var allLayers = new Array
    } else {};
    var theNumber = _parent.layers.length - 1;
    for (var m = theNumber; m >= 0; m--) {
        var theLayer = _parent.layers[m];

        if (theLayer.typename == "ArtLayer") {
            // allLayers.push(theLayer.name)
        } else {
            allLayers = (layer_loopChilden(theLayer, allLayers))

            thisLayerIDX = theLayer.itemIndex;
            makeVisByIndex(thisLayerIDX, true);

            SaveForWeb("JPEG", _outputFolder, _originalName + "__" + _mood + "__" + theLayer.name + "__" + _format + "__" + _seitenverhältnis, _scale, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
            makeVisByIndex(thisLayerIDX, false);
        }
    };

    return allLayers
};
/** **/


/** get Scale **/
function bw_scale(_newWidth) {
    return parseFloat(_newWidth / app.activeDocument.width * 100);
}
/** **/


/** das Herz **/
function processMood(_format, _seitenverhältnis, _doc_file, _outputFolder, _originalName, _mood, _outputWidth) {
    var moodFile = new File(moodsFolder + _mood + ".psd")
    app.activeDocument = app.documents.getByName(decodeURI(moodFile.name));
    var scale = bw_scale(_outputWidth);

    if (_seitenverhältnis != "") {
        var layerSet = _format + "_" + _seitenverhältnis;
    } else {
        var layerSet = _format;
    }


    gotoLayer(layerSet);
    makeVisible();
    gotoLayer(layer_findChild(app.activeDocument.activeLayer, "Motiv"));
    SmartOject_placeItem(_doc_file);
    gotoLayer(layerSet);
    layer_loopChilden(app.activeDocument.activeLayer, [], _format, _outputFolder, _originalName, _mood, _seitenverhältnis, scale);
    resetImage();
}
/** **/


function closeAll() {
    while (app.documents.length) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}





var run_all = true;
var run_3x2 = false;
var run_4x3 = false;
var run_1x1 = false;
var run_DinAquer = false;
var run_DinAhoch = false;
var run_pano = false;

const outputWidth = 2400;

const moodsFolder = "/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Moods/";
const outputFolder = new Folder("/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/OUTPUT++");

const moods = [
    'mood01',
    'mood02',
    // 'mood03',
    // 'mood04',
    // 'mood05',
    // 'mood06',
    // 'mood07',
    // 'mood08',
    // 'mood09',
    // 'mood10',
    // 'mood11',
    // 'mood12',
    // 'mood13',
]


/** von 1 – bis 2298 **/
const fileList_start = 1;
const fileList_end = 1;



/****/
/**************/
/*************************/
// run();
/*************************/
/**************/
/****/


//ings sind es 2298 files ??

function run() {
    time_start();

    prefSave();
    prefSet(DialogModes.NO, Units.PIXELS);


    inputFolder = Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");
    // var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
    // $.writeln("1: "+fileList.length);
    var fileList = inputFolder.getFiles(/.*(__45x30|__40x30|__40x40|__100x40).*\.(jpg|tif|psd|bmp|gif|png|)$/i);
    $.writeln("fileList.length: " + fileList.length);

    if (fileList_end > fileList.length) {
        var fileList_length = fileList.length;
    } else {
        var fileList_length = fileList_end;
    }
    $.writeln("fileList_length: " + fileList_length);


    for (var mood = 0; mood < moods.length; mood++) {
        var moodFile = new File(moodsFolder + moods[mood] + ".psd")
        app.open(moodFile);
    }


    if (!outputFolder.exists) {
        outputFolder.create()
    };


    // for (var i = 0; i < fileList.length; i++) {
    for (var i = fileList_start - 1; i < fileList_length; i++) {
        var thisFile = fileList[i];
        var thisFileName = GetFileNameOnly(thisFile.name);

        if (run_all || run_3x2) {
            if (thisFileName.match(/__45x30/g)) {
                var format = "2x3";
                var doc_file = new File(thisFile);
                app.open(doc_file);
                var doc = app.activeDocument;
                originalName = decodeURI(thisFileName.replace("__45x30", "").replace("__RGB", ""));

                if (doc.width > doc.height) {
                    var seitenverhältnis = "quer";
                } else {
                    var seitenverhältnis = "hoch";
                }

                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);

                for (var mood = 0; mood < moods.length; mood++) {
                    processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                }
            }
        }

        if (run_all || run_4x3) {
            if (thisFileName.match(/__40x30/g)) {
                var format = "4x3";
                var doc_file = new File(thisFile);
                app.open(doc_file);
                var doc = app.activeDocument;
                originalName = decodeURI(thisFileName.replace("__40x30", "").replace("__RGB", ""));

                if (doc.width > doc.height) {
                    var seitenverhältnis = "quer";
                } else {
                    var seitenverhältnis = "hoch";
                }

                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);

                for (var mood = 0; mood < moods.length; mood++) {
                    processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                }
            }
        }

        if (run_all || run_1x1) {
            if (thisFileName.match(/__40x40/g)) {
                var format = "Quadrat";
                var doc_file = new File(thisFile);
                app.open(doc_file);
                var doc = app.activeDocument;
                originalName = decodeURI(thisFileName.replace("__40x40", "").replace("__RGB", ""));

                var seitenverhältnis = "";

                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);

                for (var mood = 0; mood < moods.length; mood++) {
                    processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                }
            }
        }

        if (run_all || run_pano) {
            if (thisFileName.match(/__100x40/g)) {
                var format = "Panorama";
                var doc_file = new File(thisFile);
                app.open(doc_file);
                var doc = app.activeDocument;
                originalName = decodeURI(thisFileName.replace("__100x40", "").replace("__RGB", ""));

                var seitenverhältnis = "";

                var docFileName_decode = decodeURI(doc_file.name);
                app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);

                for (var mood = 0; mood < moods.length; mood++) {
                    processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                }
            }
        }


    }

    emptyProtocoll();
    closeAll();
    prefReset();
    time_stop(start);
}



// hide();
// function hide() {
// 	var s2t = function (s) {
// 		return app.stringIDToTypeID(s);
// 	};

// 	var descriptor = new ActionDescriptor();
// 	var list = new ActionList();
// 	var reference = new ActionReference();

// 	reference.putIndex( s2t( "gradientFill" ), 1 );
// 	reference.putName( s2t( "layer" ), "Motiv" );
// 	list.putReference( reference );
// 	descriptor.putList( s2t( "null" ), list );
// 	executeAction( s2t( "hide" ), descriptor, DialogModes.NO );
// }