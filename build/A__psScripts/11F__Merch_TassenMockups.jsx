/*!
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Merch Tassen Mockups</name>
<about>Tassen Mockups | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
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


// codekit-prepend "../_functions/_basic.js"


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



const moodsFolder = "/Users/simon/Arbeit/11Freunde/Merch/Tassen_Mockups/Moods/";
const outputFolder = new Folder("/Users/simon/Arbeit/11Freunde/Merch/Tassen_Mockups/OUTPUT");

const moods = [
    'mood01',
    'mood02',
    'mood03',
    'mood04',
    'mood05',
    'mood06',
    // 'mood01_schwarzeTasse',
    // 'mood02_schwarzeTasse',
    // 'mood03_schwarzeTasse',
    // 'mood04_schwarzeTasse',
    // 'mood05_schwarzeTasse',
    // 'mood06_schwarzeTasse'
]


/** von 1 – bis 1508 **/
/* 0 stoppt den loop */
const fileList_start = 1;
const fileList_end = 999;

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
    var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|pdf)$/i);

    if (fileList_start != 0 && fileList_end != 0) {

        if (!outputFolder.exists) {
            outputFolder.create()
        };

        var Folder_print_freisteller = new Folder(outputFolder + "/PRINT_freisteller");
        var Folder_print_holz = new Folder(outputFolder + "/PRINT_holz");
        var Folder_web_holz = new Folder(outputFolder + "/WEB_holz");
        var Folder_web_weiss = new Folder(outputFolder + "/WEB_weiss");


        if (!Folder_print_freisteller.exists) {
            Folder_print_freisteller.create()
        };
        if (!Folder_print_holz.exists) {
            Folder_print_holz.create()
        };


        if (!Folder_web_holz.exists) {
            Folder_web_holz.create()
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
                var moodFile = new File(moodsFolder + moods[mood] + ".psd")
                app.open(moodFile);
                doc = app.activeDocument;

                tassen_cut_web();
                save__print_schatten(Folder_print_freisteller, moods[mood]);
                resetImage();

                for (var i = fileList_start - 1; i < fileList_length; i++) {
                    var thisFile = fileList[i];
                    var thisFileName = GetFileNameOnly(thisFile.name);

                    if (layer_checkExistence("MOTIV vorne")) {
                        gotoLayer("MOTIV vorne");
                        SmartObject_edit();
                        gotoLayer("MOTIV_inner");
                        SmartOject_placeItem(thisFile);
                        executeAction(charIDToTypeID("save"), undefined, DialogModes.NO);
                        executeAction(charIDToTypeID("Cls "), undefined, DialogModes.NO);

                    }

                    if (layer_checkExistence("MOTIV hinten")) {
                        gotoLayer("MOTIV hinten");
                        SmartObject_edit();
                        gotoLayer("MOTIV_inner");
                        SmartOject_placeItem(thisFile);
                        executeAction(charIDToTypeID("save"), undefined, DialogModes.NO);
                        executeAction(charIDToTypeID("Cls "), undefined, DialogModes.NO);
                    }

                    newFilePath = new File(Folder_print_holz + "/" + thisFileName + "__" + moods[mood] + ".jpg");
                    saveFile_JPG(11, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE");

                    tassen_cut_web();



                    save__print_freisteller(Folder_print_freisteller, thisFileName, moods[mood]);



                    var scale_faktor = parseFloat(web_px / longside()) * 100;

                    save__web_holz(Folder_web_holz, thisFileName, moods[mood], scale_faktor);
                    save__web_weiss(Folder_web_weiss, thisFileName, moods[mood], scale_faktor);

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
    gotoLayer("Freisteller");
    if (hasLayerMask()) {
        var startMaskVisibility = getMaskVisibility();
        setMaskVisibility(true);

        if (getLayerName(1) == "Freisteller helper") { //TODO was wenn ich den helper dupliziert habe //hier brauchts einen anderen Checker
            var startVisibilityHelper = isVisibleIDX(1);
            makeVisByIndex(1, false);
        }
        var docNameCopy = _folder + "/" + _thisFileName + "__" + _mood;
        savePSD_v2(new File(docNameCopy), t, t, t, f);

        setMaskVisibility(false);
        if (startVisibilityHelper != null) {
            makeVisByIndex(1, startVisibilityHelper);
        }

        setMaskVisibility(startMaskVisibility);
    }
    layer_selectedIDX_set(startLayer);
}

function save__print_schatten(_folder, _mood) {
    var startLayer = layer_selectedIDX_get();
    gotoLayer("Freisteller");
    hide();
    gotoLayer("Schatten");
    makeVisible();
    gotoLayer("Freisteller helper");
    makeVisible();
    var docNameCopy = _folder + "/_" + _mood + "__schatten";
    savePSD_v2(new File(docNameCopy), t, t, t, f);
    gotoLayer("Freisteller");
    makeVisible();
    gotoLayer("Schatten");
    hide();
    gotoLayer("Freisteller helper");
    hide();
    layer_selectedIDX_set(startLayer);
}

function save__web_holz(_folder, _thisFileName, _mood, _scale_faktor) {
    SaveForWeb("JPEG", _folder, _thisFileName + "__" + _mood, _scale_faktor, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);

}

function save__web_weiss(_folder, _thisFileName, _mood, _scale_faktor) {
    var startLayer, startVisibilityHelper, startMaskVisibility, docNameCopy;
    var startLayer = layer_selectedIDX_get();
    var startVisibilityHelper = null;
    gotoLayer("Freisteller");
    if (hasLayerMask()) {
        var startMaskVisibility = getMaskVisibility();
        setMaskVisibility(true);

        if (getLayerName(1) == "Freisteller helper") { //TODO was wenn ich den helper dupliziert habe //hier brauchts einen anderen Checker
            var startVisibilityHelper = isVisibleIDX(1);
            makeVisByIndex(1, true);
        }
        gotoLayer("Schatten");
        makeVisible();


        SaveForWeb("JPEG", _folder, _thisFileName + "__" + _mood, _scale_faktor, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
        gotoLayer("Freisteller");
        setMaskVisibility(false);
        if (startVisibilityHelper != null) {
            makeVisByIndex(1, startVisibilityHelper);
        }
        gotoLayer("Schatten");
        hide();
        gotoLayer("Freisteller");
        setMaskVisibility(startMaskVisibility);
    }
    layer_selectedIDX_set(startLayer);

}





function tassen_cut_web() {
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