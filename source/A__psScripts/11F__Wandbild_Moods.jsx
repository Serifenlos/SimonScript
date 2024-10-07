/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F BW] Wandbild Moods</name>
<about>Wandbild Moods | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";



/**************/
/****************************/
/*******************************************/
/********************************************************/
/* FUNCTIONS ********************************************************/
/********************************************************/
/*******************************************/
/****************************/
/**************/

Array.prototype.indexOf = function(item) {
    var index = 0,
        length = this.length;
    for (; index < length; index++) {
        if (this[index] === item)
            return index;
    }
    return -1;
};

// Randomize array
function shuffle(_array) {
    const length = _array.length;

    for (var start = 0; start < length; start++) {
        var randomPosition = Math.floor((_array.length - start) * Math.random());
        var randomItem = _array.splice(randomPosition, 1);
        _array.push(randomItem);
    }

    return _array;
}








//https://www.eehelp.com/question/how-to-loop-through-the-layers-of-the-children-of-a-group-with-jsx/

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

function layer_loopChilden(_parent, _outputFolder, _originalName, _mood, _scale, __randomRahmen, _motivIDX, __poster) {

    // var theNumber = _parent.layers.length - 1;
    // for (var m = theNumber; m >= 0; m--) {
    //     var theLayer = _parent.layers[m];

    //     if (theLayer.typename == "LayerSet") {
    //         thisLayerIDX = theLayer.itemIndex;
    //         makeVisByIndex(thisLayerIDX, true);

    //         SaveForWeb("JPEG", _outputFolder, _originalName + "__" + _mood + "__" + theLayer.name + "__" + _format + "__" + _seitenverhältnis, _scale, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
    //         makeVisByIndex(thisLayerIDX, false);
    //     }
    // };

    // for (var m = theNumber; m >= 0; m--) {
    for (var rahmen = 0; rahmen < 1; rahmen++) {
        $.writeln("processRahmen: " + [__randomRahmen[rahmen]]);
        var theLayer = _parent.layers[__randomRahmen[rahmen]];

        if (theLayer.typename == "LayerSet") {
            thisLayerIDX = theLayer.itemIndex;
            makeVisByIndex(thisLayerIDX, true);
            $.writeln("poster: " + __poster);

            if ([__randomRahmen[rahmen]] == 1) {
                layerFX__toggle(_motivIDX, "innerShadow", 1, "hide");

                if (__poster) {
                    layerFX__toggle(getParentIDXfor(getParentIDXfor(thisLayerIDX)), "dropShadow", 1, "hide");
                    layerFX__toggle(getParentIDXfor(getParentIDXfor(thisLayerIDX)), "dropShadow", 2, "hide");
                    layerFX__toggle(getParentIDXfor(getParentIDXfor(thisLayerIDX)), "dropShadow", 3, "show");
                }
            }


            SaveForWeb("JPEG", _outputFolder, _originalName + "___" + _mood + "-" + theLayer.name, _scale, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
            // SaveForWeb("JPEG", _outputFolder, _mood + "__rahmen" + [__randomRahmen[rahmen]] + "__" + theLayer.name + "__" + _originalName, _scale, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
            makeVisByIndex(thisLayerIDX, false);

            // nimmt das benutzte Value vom Array
            var index = __randomRahmen.indexOf(__randomRahmen[rahmen]);
            __randomRahmen.splice(index, 1);
        }
    };

    return;
};
/** **/


/** get Scale **/
function bw_scale(_newWidth) {
    return parseFloat(_newWidth / app.activeDocument.width * 100);
}
/** **/


/** das Herz **/
function processMood(_format, _seitenverhältnis, _doc_file, _outputFolder, _originalName, _mood, _outputWidth, _randomRahmen, _poster) {
    $.writeln("processMood: " + _mood);
    var moodFile = new File(moodsFolder + _mood + ".psd");
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
    var motivIDX = getActiveLayerIndex();
    SmartOject_placeItem(_doc_file);
    gotoLayer(layerSet);
    layer_loopChilden(app.activeDocument.activeLayer, _outputFolder, _originalName, _mood, scale, _randomRahmen, motivIDX, _poster);
    resetImage();
}
/** **/


function closeAll() {
    while (app.documents.length) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}



/****/
/**************/
/*************************/
/* OPTIONS *************************/
/*************************/
/**************/
/****/

var run_all = true;
var run_3x2 = false;
var run_4x3 = false;
var run_1x1 = false;
var run_A4 = false;
var run_pano = false;

const outputWidth = 2400;
// /Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/
// /Volumes/Archiv LOTUS/11Freunde_Auslagerung/Bilderwelt_Moods/Moods
// const moodsFolder = "/Users/adrians/Arbeit/11Freunde/Bilderwelt_Moods/Moods/";
// const outputFolder = new Folder("/Users/adrians/Arbeit/11Freunde/Bilderwelt_Moods/OUTPUT");
const moodsFolder = "/Volumes/Archiv LOTUS/11Freunde_Auslagerung/Bilderwelt_Moods/MAIN/";
const outputFolder = new Folder("/Users/adrians/Arbeit/11Freunde/Bilderwelt/_OUTPUT/Moods");
if (!outputFolder.exists) { outputFolder.create() };



const moods = [
    'mood01',
    'mood02',
    'mood03',
    'mood04',
    'mood05',
    'mood06',
    'mood07',
    'mood08',
    'mood09',
    'mood10',
    'mood11',
    'mood12',
    'mood13',
]

const Bilderwelt_Anzahl_Mood = 5;
const Poster_Anzahl_Mood = 3;
// const Bilderwelt_Anzahl_Mood = 9;
// const Poster_Anzahl_Mood = 6;

// [rahmenlos, Passepartout, Schattenfuge, beliebig]
const Bilderwelt_Anzahl_Rahmen = [1, 1, 1, 2];
const Poster_Anzahl_Rahmen = [1, 1, 0, 1];
// const Bilderwelt_Anzahl_Rahmen = [1, 1, 1, 6];
// const Poster_Anzahl_Rahmen = [1, 1, 0, 3];

/** von 1 – bis 1508 **/
/* 0 stoppt den loop */
const fileList_start = 1; //1352
const fileList_end = 330;





/****/
/**************/
/*************************/
run();
/*************************/
/**************/
/****/

function run() {
    time_start();
    prefSave();
    prefSet(DialogModes.NO, Units.PIXELS);

    inputFolder = Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");
    // var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
    // var fileList = inputFolder.getFiles(/^(?!\.).*(__45x30|__40x30|__40x40|__100x40|__A4).*\.(jpg|tif|psd|bmp|gif|png|)$/im);
    // var fileList = inputFolder.getFiles(/^[^.].*(__45x30|__40x30|__40x40|__100x40|__A4).*\.(jpg|tif|psd|bmp|gif|png|)$/im);
    // var fileList = inputFolder.getFiles(/^([^\.]).*(__45x30|__40x30|__40x40|__100x40|__A4).*\.(jpg|tif|psd|bmp|gif|png|)$/im);
    var fileList = inputFolder.getFiles(/.+(__45x30|__40x30|__40x40|__100x40|__A4).*\.(?:gif|jpe?g|[ew]mf|eps|tiff?|psd|pdf|bmp|png)$/i);



    /* Clean the list of hidden files */
    var fileList2 = [];
    for (var fileList_clean = 0; fileList_clean < fileList.length; fileList_clean++) {
        if (fileList[fileList_clean].hidden) continue;
        fileList2.push(fileList[fileList_clean]);
    }
    var fileList = fileList2;
    $.writeln("fileList.length: " + fileList.length)


    /* write list of all files */
    for (var fileList_temp = 0; fileList_temp < fileList.length; fileList_temp++) {
        bw_log(decodeURI(fileList[fileList_temp].name));
    }
    bw_log("---\nfileList.length: " + fileList.length + "\n");


    if (fileList_start != 0 && fileList_end != 0) {

        if (fileList_end > fileList.length) {
            var fileList_length = fileList.length;
        } else {
            var fileList_length = fileList_end;
        }

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


            if (thisFileName.match(/^Pos_/ig)) {
                var poster = true;
                $.writeln("ist Poster: " + thisFileName)
            } else {
                var poster = false;
                $.writeln("kein Poster: " + thisFileName)
            }

            if (poster) {
                var randomMoods = randomNumber(1, moods.length, [], Poster_Anzahl_Mood, false);
                $.writeln("randomMoods: " + randomMoods);

                randomRahmen = randomNumber(1, 1, [], Poster_Anzahl_Rahmen[0], false); // rahmenlos 
                randomRahmen = randomNumber(2, 5, randomRahmen, Poster_Anzahl_Rahmen[1], false); // Passepartout
                randomRahmen = randomNumber(6, 9, randomRahmen, Poster_Anzahl_Rahmen[2], false); // Schattenfuge
                randomRahmen = randomNumber(1, 5, randomRahmen, Poster_Anzahl_Rahmen[3], false); // beliebig
            } else {
                var randomMoods = randomNumber(1, moods.length, [], Bilderwelt_Anzahl_Mood, false);
                $.writeln("randomMoods: " + randomMoods);

                randomRahmen = randomNumber(1, 1, [], Bilderwelt_Anzahl_Rahmen[0], false); // rahmenlos 
                randomRahmen = randomNumber(2, 5, randomRahmen, Bilderwelt_Anzahl_Rahmen[1], false); // Passepartout
                randomRahmen = randomNumber(6, 9, randomRahmen, Bilderwelt_Anzahl_Rahmen[2], false); // Schattenfuge
                randomRahmen = randomNumber(1, 9, randomRahmen, Bilderwelt_Anzahl_Rahmen[3], false); // beliebig
            }

            randomRahmen = shuffle(randomRahmen);
            $.writeln("randomRahmen: " + randomRahmen);


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

                    // for (var mood = 0; mood < moods.length; mood++) {
                    //     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                    // }


                    for (var mood = 0; mood < randomMoods.length; mood++) {
                        if (randomRahmen.length > 0) {
                            processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[(randomMoods[mood] - 1)], outputWidth, randomRahmen, poster)
                        }
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

                    // for (var mood = 0; mood < moods.length; mood++) {
                    //     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                    // }

                    for (var mood = 0; mood < randomMoods.length; mood++) {
                        if (randomRahmen.length > 0) {
                            processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[(randomMoods[mood] - 1)], outputWidth, randomRahmen, poster)
                        }
                    }
                }
            }

            if (run_all || run_1x1) {
                if (thisFileName.match(/__40x40/g)) {
                    var format = "Quadrat";
                    var doc_file = new File(thisFile);
                    originalName = decodeURI(thisFileName.replace("__40x40", "").replace("__RGB", ""));
                    var seitenverhältnis = "";

                    // for (var mood = 0; mood < moods.length; mood++) {
                    //     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                    // }
                    for (var mood = 0; mood < randomMoods.length; mood++) {
                        if (randomRahmen.length > 0) {
                            processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[(randomMoods[mood] - 1)], outputWidth, randomRahmen, poster)
                        }
                    }
                }
            }

            if (run_all || run_pano) {
                if (thisFileName.match(/__100x40/g)) {
                    var format = "Panorama";
                    var doc_file = new File(thisFile);
                    originalName = decodeURI(thisFileName.replace("__100x40", "").replace("__RGB", ""));
                    var seitenverhältnis = "";

                    // for (var mood = 0; mood < moods.length; mood++) {
                    //     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                    // }
                    for (var mood = 0; mood < randomMoods.length; mood++) {
                        if (randomRahmen.length > 0) {
                            processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[(randomMoods[mood] - 1)], outputWidth, randomRahmen, poster)
                        }
                    }
                }
            }

            if (run_all || run_A4) {
                if (thisFileName.match(/__A4/g)) {
                    var format = "DinA";
                    var doc_file = new File(thisFile);
                    app.open(doc_file);
                    var doc = app.activeDocument;
                    originalName = decodeURI(thisFileName.replace("__A4", "").replace("__RGB", ""));

                    if (doc.width > doc.height) {
                        var seitenverhältnis = "quer";
                    } else {
                        var seitenverhältnis = "hoch";
                    }

                    var docFileName_decode = decodeURI(doc_file.name);
                    app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES);

                    // for (var mood = 0; mood < moods.length; mood++) {
                    //     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
                    // }
                    for (var mood = 0; mood < randomMoods.length; mood++) {
                        if (randomRahmen.length > 0) {
                            processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[(randomMoods[mood] - 1)], outputWidth, randomRahmen, poster)
                        }
                    }
                }
            }
        }
    }
    // emptyProtocoll();
    // closeAll();
    prefReset();
    time_stop(start);
}



function randomNumber(_min, _max, _array, _steps, _sort) {
    var step = 0;
    for (; step < _steps;) {
        var random = Math.floor(Math.random() * (_max - _min + 1)) + _min;

        if (_array.indexOf(random) != -1) {
            randomNumber(_min, _max, _array);
        } else {
            _array.push(random);
            if (_sort) {
                _array.sort(function(a, b) {
                    return a - b
                });
            }
            step++;
        }
    }
    return _array;
}



// $.writeln(randomNumber(1, 13, [], 2));

// $.writeln("5: "+array.indexOf(5))
// $.writeln("4: "+array.indexOf(4))


function bw_log(_log) {
    var filepath = "/Users/adrians/Arbeit/11Freunde/Bilderwelt_Moods/Bilderwelt_Moods.log";
    var write_file = File(filepath);
    if (!write_file.exists) {
        write_file = new File(filepath);
    }

    var log_file = File(filepath);
    log_file.open('a', undefined, undefined);
    log_file.encoding = "UTF8";
    if (log_file !== '') {
        // log_file.writeln("-----------------------");
        log_file.writeln(_log);
        // log_file.writeln("");
        log_file.close();
    }
}



// =======================================================
// dropShadow, innerShadow
// "hide" or "show"

// layerFX__toggle(176, "innerShadow", 1, "hide");

function layerFX__toggle(_idx, _layerFX_kind, _layerFX_id, _state) {
    var d = new ActionDescriptor();
    var l = new ActionList();
    var r = new ActionReference();

    r.putIndex(s2t(_layerFX_kind), _layerFX_id);
    r.putIndex(sTID("layer"), _idx);
    // r.putName(s2t("layer"), "Motiv");  // select by Name
    l.putReference(r);
    d.putList(s2t("null"), l);
    executeAction(s2t(_state), d, DialogModes.NO);
}

// =======================================================

// ich will 178 (Motiv mit Schlagschatten)
// bin auf RL 175
// $.writeln(getActiveLayerIndex());
// $.writeln(getParentIDXfor(getParentIDXfor(175)))