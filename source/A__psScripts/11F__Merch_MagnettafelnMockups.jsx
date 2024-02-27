/*!
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Merch Magnettafel Mockups</name>
<about>Magnettafel Mockups | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/



//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
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



/****/
/**************/
/*************************/
/* OPTIONS *************************/
/*************************/
/**************/
/****/



const moodsFolder = "/Users/adrians/Arbeit/11Freunde/Merch/Magnettafel/Moods/";
const outputFolder = new Folder("/Users/adrians/Arbeit/11Freunde/Merch/Magnettafel/OUTPUT");

const moods = [
    "mood01",
    "mood02",
    "mood03",
    "mood04",
    "mood05",
    "mood06",
    "mood07",
    "mood08",
    "mood09",
    "mood10",
    "mood11",
    "mood12",
    "mood13",
    "mood14",
    "mood15",
    "mood16",
    "mood17",
    "mood18",
    "mood19",
    "mood20",
    "mood21",
    "mood22",
    "mood23",
    "mood24",
    "mood25",
    "mood26",
    "mood27",
    "mood28",
    "mood29"
]


/** von 1 – bis 1508 **/
/* 0 stoppt den loop */
const fileList_start = 1;
const fileList_end = 9999;

const web_px = 2400;





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
    // var fileList = inputFolder.getFiles(/.*\.pdf$/i);
    // var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|pdf)$/i);
    var fileList = inputFolder.getFiles(/.+(__70x50|__50x70).*\.(?:gif|jpe?g|[ew]mf|eps|tiff?|psd|pdf|bmp|png|pdf)$/i);

    if (fileList_start != 0 && fileList_end != 0) {

        if (!outputFolder.exists) {
            outputFolder.create()
        };

        var Folder_print_freisteller = new Folder(outputFolder + "/PRINT_freisteller");
        var Folder_print_HG = new Folder(outputFolder + "/PRINT_hintergrund");
        var Folder_web_HG = new Folder(outputFolder + "/WEB_hintergrund");
        var Folder_web_weiss = new Folder(outputFolder + "/WEB_weiss");


        if (!Folder_print_freisteller.exists) {
            Folder_print_freisteller.create()
        };
        if (!Folder_print_HG.exists) {
            Folder_print_HG.create()
        };


        if (!Folder_web_HG.exists) {
            Folder_web_HG.create()
        };
        if (!Folder_web_weiss.exists) {
            Folder_web_weiss.create()
        };


        if (fileList_end > fileList.length) {
            var fileList_length = fileList.length;
        } else {
            var fileList_length = fileList_end;
        }
        try {
            for (var mood = 0; mood < moods.length; mood++) {
                var moodFile = new File(moodsFolder + moods[mood] + ".psd");
                app.open(moodFile);
                doc = app.activeDocument;


                var file_schatten = new File(Folder_print_freisteller + "/_" + moods[mood] + "__schatten.psd");
                if (!file_schatten.exists) {
                    if (layer_checkExistence("FREISTELLER")) {
                        image_cut();
                        save__print_schatten(Folder_print_freisteller, moods[mood]);
                        resetImage();
                    }
                }


                for (var i = fileList_start - 1; i < fileList_length; i++) {
                    var thisFile = fileList[i];
                    var thisFileName = GetFileNameOnly(thisFile.name);


                    var direction = "quer";
                    var find_direction = new RegExp("_hoch");
                    if (thisFileName.match(find_direction)) {
                        var direction = "hoch";
                    };



                    if (typeof thisFile !== 'string') {
                        thisFile_string = thisFile.toString();
                    }

                    var thisFile_40x30 = thisFile_string.replace(/70x50/g, "40x30");
                    var thisFileName_just = thisFileName.replace(/__70x50|__50x70/g, "").replace(/_hoch|_quer/g, "");

                    var check_40x30 = new File(thisFile_40x30);
                    if (!check_40x30.exists) {
                        if (direction == "quer") {
                            thisFile_40x30 = new File("~/Arbeit/11Freunde/Merch/Magnettafel/platzhalter/30x40_quer_error.jpg");
                        } else {
                            thisFile_40x30 = new File("~/Arbeit/11Freunde/Merch/Magnettafel/platzhalter/30x40_hoch_error.jpg");
                        }
                    }

                    $.writeln("thisFileName: " + thisFileName);
                    $.writeln("thisFile_40x30: " + thisFile_40x30);


                    if (layer_checkExistence("Magnet,gross," + direction) || layer_checkExistence("Magnet,klein," + direction)) {

                        if (layer_checkExistence("Magnet,gross," + direction)) {
                            gotoLayer("Magnet,gross," + direction);
                            SmartOject_placeItem(thisFile);
                        }
                        if (layer_checkExistence("Magnet,klein," + direction)) {
                            gotoLayer("Magnet,klein," + direction);
                            SmartOject_placeItem(thisFile_40x30);
                        }

                        newFilePath = new File(Folder_print_HG + "/" + thisFileName_just + "__" + moods[mood] + ".jpg");
                        saveFile_JPG(11, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE");

                        image_cut();
                        var scale_faktor = parseFloat(web_px / longside()) * 100;
                        save__web_HG(Folder_web_HG, thisFileName_just, moods[mood], scale_faktor);

                        if (layer_checkExistence("FREISTELLER")) {
                            save__print_freisteller(Folder_print_freisteller, thisFileName_just, moods[mood]);
                            save__web_weiss(Folder_web_weiss, thisFileName_just, moods[mood], scale_faktor);
                        }

                    }



                    resetImage();
                }

                resetImage();
            }
        } catch (e) {
            alert(e)
        }
    }

    // emptyProtocoll();
    // closeAll();
    prefReset();
    time_stop(start);
}

function save__print_freisteller(_folder, _thisFileName, _mood) {

    var startLayer, startVisibilityHelper, startMaskVisibility, docNameCopy;
    var startLayer = layer_selectedIDX_get();
    var startVisibilityHelper = null;
    gotoLayer("FREISTELLER");
    if (hasLayerMask()) {
        var startMaskVisibility = getMaskVisibility();
        setMaskVisibility(true);

        var schattenIDX = layer_getIDXbyName("SCHATTEN");

        var startVisibilityHelper = isVisibleIDX(schattenIDX);
        makeVisByIndex(schattenIDX, false);

        var docNameCopy = _folder + "/" + _thisFileName + "__" + _mood;
        savePSD_v2(new File(docNameCopy), t, t, t, f);

        // setMaskVisibility(false);
        if (startVisibilityHelper != null) {
            makeVisByIndex(schattenIDX, startVisibilityHelper);
        }

        setMaskVisibility(startMaskVisibility);
    }
    layer_selectedIDX_set(startLayer);
}

function save__print_schatten(_folder, _mood) {
    var startLayer = layer_selectedIDX_get();
    gotoLayer("FREISTELLER");
    hide();
    gotoLayer("SCHATTEN");
    makeVisible();
    var docNameCopy = _folder + "/_" + _mood + "__schatten";
    savePSD_v2(new File(docNameCopy), t, t, t, f);
    gotoLayer("FREISTELLER");
    makeVisible();
    gotoLayer("SCHATTEN");
    hide();
    layer_selectedIDX_set(startLayer);
}

function save__web_HG(_folder, _thisFileName, _mood, _scale_faktor) {
    SaveForWeb("JPEG", _folder, _thisFileName + "__" + _mood, _scale_faktor, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);

}

function save__web_weiss(_folder, _thisFileName, _mood, _scale_faktor) {
    var startLayer, startVisibilityHelper, startMaskVisibility, docNameCopy;
    var startLayer = layer_selectedIDX_get();
    var startVisibilityHelper = null;
    gotoLayer("FREISTELLER");
    if (hasLayerMask()) {
        var startMaskVisibility = getMaskVisibility();
        setMaskVisibility(true);

        var schattenIDX = layer_getIDXbyName("SCHATTEN");
        var startVisibilityHelper = isVisibleIDX(schattenIDX);
        makeVisByIndex(schattenIDX, true);

        gotoLayer("SCHATTEN");
        makeVisible();

        SaveForWeb("JPEG", _folder, _thisFileName + "__" + _mood, _scale_faktor, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
        gotoLayer("FREISTELLER");
        setMaskVisibility(false);
        if (startVisibilityHelper != null) {
            makeVisByIndex(schattenIDX, startVisibilityHelper);
        }
        gotoLayer("SCHATTEN");
        hide();
        gotoLayer("FREISTELLER");
        setMaskVisibility(startMaskVisibility);
    }
    layer_selectedIDX_set(startLayer);

}





function image_cut() {
    var startLayer = layer_selectedIDX_get();
    try {
        gotoLayer("cut");
        loadSelectionOfMask();
        activeDocument.selection.invert();
        tassen_crop(true);
        activeDocument.selection.deselect();
    } catch (e) {}
    layer_selectedIDX_set(startLayer);
}


function tassen_crop(delete2) {
    var d = new ActionDescriptor();
    d.putBoolean(s2t("delete"), delete2);
    executeAction(s2t("crop"), d, DialogModes.NO);
}

function longside() {
    var doc = app.activeDocument;
    if (doc.width > doc.height) {
        return doc.width;
    } else {
        return doc.height;
    }
}