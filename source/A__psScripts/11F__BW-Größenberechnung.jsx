/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F BW] Größenberechnung</name>
<about>Bilderwelt Größenberechnung | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

// @include "functions/basic.jsx";
// @include "functions/loopFiles.jsx";
// @include "functions/save.jsx";



if (app.documents.length == 0) {
    inputFolder = Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet\nDie ausgespielten Dateien werden im Unterorder 'output' abgelegt");
    var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|psb|bmp|gif|png|)$/i);

    var outputFolder = new Folder(inputFolder + "/output");
    if (!outputFolder.exists) {
        outputFolder.create()
    };


    for (var j = 0; j < fileList.length; j++) {
        var thisFile = fileList[j];
        var thisFileName = GetFileNameOnly(thisFile.name);
        var thisFileName = thisFileName.replace(/(__RGB.*)$/g,'');

        var doc_file = new File(thisFile);
        app.open(doc_file);
        var doc = app.activeDocument;

        process_BW(thisFile);

        doc.close(SaveOptions.DONOTSAVECHANGES);

    }
} else {
    alert("Abruch\nschließe bitte vorerst alle Dokumente!");
}



///////////////////////*////////////////////


function process_BW(_file) {
    
    var w = doc.width;
    var h = doc.height;
    var toleranz = 2;

    if(w > h){
        // alert("breit")
        var ratio = (w/h).toFixed(toleranz);
    }
    else {
        // alert("hoch")
        var ratio = (h/w).toFixed(toleranz);
    }
    

    if (ratio >= 1.48 && ratio <= 1.52) {

        var sizes = [180, 150, 120, 90, 75, 60, 45, 30];
        var longSite = get_longSite();

        for (var i = 0; i < sizes.length; i++) {
            flattenImage();
            try{if(getBitDepth(!8)){setBitDepth(8)}}catch(e){};
            clearAllGuides();
            var soll = parseFloat(sizes[i]);
            var ist = parseFloat(longSite);

            if(soll <= ist) {
                img_resize(soll, 300);
                if      (soll == 180){var maße = "180x120"}
                else if (soll == 150){var maße = "150x100"}
                else if (soll == 120){var maße =  "120x80"}
                else if (soll ==  90){var maße =   "90x60"}
                else if (soll ==  75){var maße =   "75x50"}
                else if (soll ==  60){var maße =   "60x40"}
                else if (soll ==  45){var maße =   "45x30"}
                else if (soll ==  30){var maße =   "30x20"}
                newFilePath = new File(outputFolder + "/" + thisFileName + "__" + maße);
                saveFile_JPG(11, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE");
            }
            resetImage();
        }
    }

    else if (ratio >= 1.31 && ratio <= 1.35) {

        var sizes = [180, 160, 120, 100, 80, 60, 40];
        var longSite = get_longSite();

        for (var i = 0; i < sizes.length; i++) {
            flattenImage();
            try{if(getBitDepth(!8)){setBitDepth(8)}}catch(e){};
            clearAllGuides();
            var soll = parseFloat(sizes[i]);
            var ist = parseFloat(longSite);

            if(soll <= ist) {
                img_resize(soll, 300);
                if      (soll == 180){var maße = "180x135"}
                else if (soll == 160){var maße = "160x120"}
                else if (soll == 120){var maße =  "120x90"}
                else if (soll == 100){var maße =  "100x75"}
                else if (soll ==  80){var maße =   "80x60"}
                else if (soll ==  60){var maße =   "60x45"}
                else if (soll ==  40){var maße =   "40x30"}
                newFilePath = new File(outputFolder + "/" + thisFileName + "__" + maße);
                saveFile_JPG(11, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE");
            } 
            resetImage();
        }
    }

    else if (ratio >= 0.98 && ratio <= 1.02) {
        var sizes = [140, 120, 100, 80, 60, 50, 40];
        var longSite = get_longSite();

        for (var i = 0; i < sizes.length; i++) {
            flattenImage();
            try{if(getBitDepth(!8)){setBitDepth(8)}}catch(e){};
            clearAllGuides();
            var soll = parseFloat(sizes[i]);
            var ist = parseFloat(longSite);

            if(soll <= ist) {
                img_resize(soll, 300);
                if      (soll == 140){var maße = "140x140"}
                else if (soll == 120){var maße = "120x120"}
                else if (soll == 100){var maße = "100x100"}
                else if (soll ==  80){var maße =   "80x80"}
                else if (soll ==  60){var maße =   "60x60"}
                else if (soll ==  50){var maße =   "50x50"}
                else if (soll ==  40){var maße =   "40x40"}
                newFilePath = new File(outputFolder + "/" + thisFileName + "__" + maße);
                saveFile_JPG(11, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE");
            } 
            resetImage();
        }
    }

    else if (ratio >= 2.48 && ratio <= 2.52) {
        var sizes = [250, 225, 200, 175, 150, 125, 100, 62.5];
        var longSite = get_longSite();

        for (var i = 0; i < sizes.length; i++) {
            flattenImage();
            try{if(getBitDepth(!8)){setBitDepth(8)}}catch(e){};
            clearAllGuides();
            var soll = parseFloat(sizes[i]);
            var ist = parseFloat(longSite);

            if(soll <= ist) {
                img_resize(soll, 300);
                if      (soll == 250){var maße = "250x100"}
                else if (soll == 225){var maße =  "225x90"}
                else if (soll == 200){var maße =  "200x80"}
                else if (soll == 175){var maße =  "175x70"}
                else if (soll == 150){var maße =  "150x60"}
                else if (soll == 125){var maße =  "125x50"}
                else if (soll == 100){var maße =  "100x40"}
                else if (soll == 62.5){var maße =  "62x25"}
                newFilePath = new File(outputFolder + "/" + thisFileName + "__" + maße);
                saveFile_JPG(11, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE");
            } 
            resetImage();
        }
    }

    else if (ratio >= 1.40 && ratio <= 1.44) {
        var sizes = [118.9, 84.1, 59.4, 42, 29.7];
        var longSite = get_longSite();

        for (var i = 0; i < sizes.length; i++) {
            flattenImage();
            try{if(getBitDepth(!8)){setBitDepth(8)}}catch(e){};
            clearAllGuides();
            var soll = parseFloat(sizes[i]);
            var ist = parseFloat(longSite);

            if(soll <= ist) {
                img_resize(soll, 300);
                if      (soll == 118.9){var maße = "A0"}
                else if (soll == 84.1){var maße =  "A1"}
                else if (soll == 59.4){var maße =  "A2"}
                else if (soll == 42){var maße =  "A3"}
                else if (soll == 29.7){var maße =  "A4"}
                newFilePath = new File(outputFolder + "/" + thisFileName + "__" + maße);
                saveFile_JPG(11, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE");
            } 
            resetImage();
        }
    }
}


function get_longSite() {
    prefSave();
    prefSet(DialogModes.NO, Units.CM);
    var w = doc.width;
    var h = doc.height;
    if(w>h){var longSite = w}
    else{var longSite = h}
    prefReset();
    return parseFloat(longSite).toFixed(0);
}

