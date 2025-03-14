﻿// enable double clicking from the 
// Macintosh Finder or the Windows Explorer
// #target indesign


/* VARIBALES*/
//~ var master = new File("/Volumes/grafik/Fach_Grafik/11F_3D-Heft/Master/3D__11F-innen__MASTER.tif");

/* DIALOG*/
var a_dialog = app.dialogs.add({
    name: "3D-Heft",
    canCancel: false
});
var min_width_left = 50;
var min_width_right = 250;

var heft1 = "11Freunde";
var heft2 = "noSports";
var heft3 = "Chronik";
var heft4 = "Buch-innen_17x24";
var heft5 = "Buch-innen_21x28";
var heft6 = "Beileger_19x26";

with(a_dialog) {
    with(dialogColumns.add()) {

        with(borderPanels.add()) {
            with(dialogColumns.add()) {
                staticTexts.add({
                    staticLabel: "Heft:",
                    minWidth: min_width_left
                });
            }
            with(dialogColumns.add()) {
                var heft = radiobuttonGroups.add();
                with(heft) {
                    radiobuttonControls.add({
                        staticLabel: heft1,
                        checkedState: true,
                        minWidth: min_width_right
                    });
                    radiobuttonControls.add({
                        staticLabel: heft2,
                        checkedState: false,
                        minWidth: min_width_right
                    });
                    radiobuttonControls.add({
                        staticLabel: heft3,
                        checkedState: false,
                        minWidth: min_width_right
                    });
                    radiobuttonControls.add({
                        staticLabel: heft4,
                        checkedState: false,
                        minWidth: min_width_right
                    });
                    radiobuttonControls.add({
                        staticLabel: heft5,
                        checkedState: false,
                        minWidth: min_width_right
                    });
                    radiobuttonControls.add({
                        staticLabel: heft6,
                        checkedState: false,
                        minWidth: min_width_right
                    });
                }
            }
        }

    }
}
if (a_dialog.show() == false) {
    a_dialog.destroy();
} else {
    if (heft.selectedButton == 0) {
        var heft = heft1;
        //~             var master = new File("/Volumes/grafik/Fach_Grafik/11F_3D-Heft/Master/3D__11F-innen__MASTER.tif");
        var master = new File("~/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__11F-innen__MASTER_v5_flach.tif");

    } else if (heft.selectedButton == 1) {
        var heft = heft2;
        var master = new File("~/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__noSports-innen__MASTER.tif");
    } else if (heft.selectedButton == 2) {
        var heft = heft3;
        var master = new File("~/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__Chronik-innen__MASTER_flach.tif");
    } else if (heft.selectedButton == 3) {
        var heft = heft4;
        var master = new File("~/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__Buch-innen_17x24__MASTER.psd");
    } else if (heft.selectedButton == 4) {
        var heft = heft5;
        var master = new File("~/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__Buch-innen_21x28__MASTER.psd");
    } else if (heft.selectedButton == 5) {
        var heft = heft6;
        var master = new File("~/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__190x260-innen__MASTER.psd");
    }
}





//~ if ( app.books.length < 1 ) {
//~     errorExit( 'Fehler\rMindestens ein InDesign-Buch muß geöffnet sein.' );
//~     };

//~ if ( app.documents.length > 0 ) {
//~     errorExit( 'Fehler\rBitte vorher alle InDesign-Dokumente schließen.' );
//~     };




//~ outputFolder = Folder.selectDialog("Bitte wähle den Ordner der Rücklaufdaten aus");

//~ var Folder_single = new Folder(outputFolder + "/einzelSeiten");
//~ var Folder_3D = new Folder(outputFolder + "/3D");

//~ if (!Folder_single.exists) {
//~ 	Folder_single.create()
//~ };
//~ if (!Folder_3D.exists) {
//~ 	Folder_3D.create()
//~ };


//~ for ( var b = 0; b < app.books.length; b++ ) {
//~     doBook( app.books[b]);
//~     };


//~ function doBook( aBook )   {  
//~     for ( var i = 0; i < aBook.bookContents.length; i++ )   
//~         doDoc ( aBook.bookContents[i] );
//~ };

//~ function doDoc ( aDoc )  {   
//~     app.scriptPreferences.userInteractionLevel = UserInteractionLevels.neverInteract;  
//~     try {  
//~         var myDoc = app.open( File( aDoc.fullName ) );   
//~         
//~ ////////////
//~ if (app.documents.length != 0) {  
//~          var myDoc = app.activeDocument;  
//~          var myBaseName = GetFileNameOnly(myDoc.name);
//~          if (myBaseName != null) MakeJPEGfile();  
//~     }  
//~     else {    
//~          alert("Please open a document and try again.");    
//~     }   
//~       
//~     function MakeJPEGfile() {   
//~          for(var myCounter = 0; myCounter < myDoc.pages.length; myCounter++) {  
//~               if (myDoc.pages.item(myCounter).appliedSection.name != "") {  
//~                    myDoc.pages.item(myCounter).appliedSection.name = "";  
//~               }  
//~               var myPageNumber = myDoc.pages.item(myCounter).name;
//~               app.jpegExportPreferences.jpegColorSpace = JpegColorSpaceEnum.RGB;
//~               app.jpegExportPreferences.jpegRenderingStyle = JPEGOptionsFormat.BASELINE_ENCODING
//~               app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.maximum; // low medium high maximum  
//~               app.jpegExportPreferences.exportResolution = 300;
//~               app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.exportRange;  
//~               app.jpegExportPreferences.pageString = myPageNumber;
//~               app.jpegExportPreferences.exportingSpread = false;
//~               app.jpegExportPreferences.antiAlias = true;
//~               app.jpegExportPreferences.useDocumentBleeds = false;
//~               app.jpegExportPreferences.embedColorProfile = true;
//~               app.jpegExportPreferences.simulateOverprint = true;
//~               

//~             var myPageNumber = ("000" + myPageNumber).slice(-3);    // min 3 digits
//~                 
//~               var myFilePath = Folder_single + "/" + myPageNumber + "__" + myBaseName + ".jpg";  
//~               var myFile = new File(myFilePath);  
//~               myDoc.exportFile(ExportFormat.jpg, myFile, false);  
//~          }  
//~     }
//~       
//~     function GetFileNameOnly(myFileName) {  
//~          var myString = "";  
//~          var myResult = myFileName.lastIndexOf(".");  
//~          if (myResult == -1) {  
//~               myString = myFileName;  
//~          }  
//~          else {  
//~               myString = myFileName.substr(0, myResult);  
//~          }
//~         //
//~         var myString = myString.replace(/^(\d{2,3})(-|_)(\d{2,3})(-|_)(.*)/g, "$5");        // cut the leading page-numbers and hyphens // get the blank title
//~          return myString;  
//~     }


//~     function FormatNumberLength(num, length) {
//~         var r = "" + num;
//~         while (r.length < length) {
//~             r = "0" + r;
//~         }
//~         return r;
//~     }


//~     ///////////
//~     myDoc.close();  

//~     }  
//~     catch (e)  {  
//~         alert( aDoc.fullName + '\r' + e );  
//~     }
//~     app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;  
//~ }  

function errorExit(aMessage) {
    alert(aMessage);
    exit();
}



function closeAll() {
    while (app.documents.length > 0) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}

/*/// ENDE  Einzelseiten JPG-Export ///*/


//// FUNCTIONS ////
/* sort files alphabetically */
function sort_pages(array) {
    var str = array.sort(sortnum).join('\r') + '\r';
    str = str.replace(/([^\r]+\r)(\1)+/g, '$1');
    str = str.replace(/\r$/, '');
    str = str.split('\r');
    return str
}

function sortnum(a, b) {
    return a > b
}

function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    // var myString = myString.replace(/^(\d{3}(-|_{2}))(.+)/g, "$3");
    return myString
};

function getPageNumber(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    var rightPageNumber = myFileName.replace(/^(\d{3})(-|_{2})(.+)/g, "$1");
    //~     alert("rightPageNumber: " + rightPageNumber);
    var leftPageNumber = rightPageNumber - 1;
    var leftPageNumber = ("000" + leftPageNumber).slice(-3);
    var myString = (leftPageNumber + "-" + rightPageNumber);
    return myString
};



/*/// START Liste der Einzelseiten ///*/

Folder_single = Folder.selectDialog("Bitte wähle den Ordner der EinzelSeiten aus");

//~ var Folder_single = new Folder(outputFolder + "/einzelSeiten");
var Folder_3D = new Folder(Folder_single + "/3D");
if (!Folder_3D.exists) {
    Folder_3D.create()
};

var fileList = Folder_single.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
sort_pages(fileList);

var thisSite = "";
var thisFileName = "";
var thisPageNumber = "";

// SCHLEIFE //
for (var i = 0; i < fileList.length; i++) {

    var thisFile = fileList[i];

    if ((i + 1) & 1) { // ODD
        var thisSite = 'links';
        id2ps_placeItem();
    } else { // EVEN
        var thisSite = 'rechts';
        var thisFileName = GetFileNameOnly(thisFile.name);
        //~         var thisPageNumber = getPageNumber(thisFile.name);
        id2ps_placeItem();
    }
}

id2ps_schatten();


function id2ps_placeItem() {
    var bt = new BridgeTalk();
    bt.target = "photoshop";
    bt.body = runPS.toSource() + "(" + Folder_3D.toSource() + "," + master.toSource() + "," + thisFile.toSource() + "," + thisSite.toSource() + "," + thisFileName.toSource() + "," + thisPageNumber.toSource() + ");";

    bt.onError = function(e) {
        alert("Error: " + e.body);
    }
    bt.onResult = function(resObj) {};
    bt.send(100);
}

function id2ps_schatten() {
    var bt = new BridgeTalk();
    bt.target = "photoshop";
    bt.body = runPS_schatten.toSource() + "(" + Folder_3D.toSource() + "," + master.toSource() + ");";

    bt.onError = function(e) {
        alert("Error: " + e.body);
    }
    bt.onResult = function(resObj) {};
    bt.send(100);
}



/////////////////////////////////////////////////// PS



function runPS(Folder_3D, master, thisFile, thisSite, thisFileName, thisPageNumber) {
        function cTID(s) {
        return app.charIDToTypeID(s);
    };

    function sTID(s) {
        return app.stringIDToTypeID(s);
    };

    function prefSave() {
        startDisplayDialogs = app.displayDialogs;
        startRulerUnits = app.preferences.rulerUnits;
    };

    function prefSet() {
        app.displayDialogs = DialogModes.NO;
        app.preferences.rulerUnits = Units.MM;
    };

    function prefReset() {
        app.preferences.rulerUnits = startRulerUnits;
        app.displayDialogs = startDisplayDialogs;
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
            };
        };
    }

    function deleteHistory() {
        var desc20 = new ActionDescriptor();
        var ref23 = new ActionReference();
        ref23.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
        desc20.putReference(charIDToTypeID('null'), ref23);
        executeAction(charIDToTypeID('Dlt '), desc20, DialogModes.NO);
    };

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
    };

    function selectLayers(_all_or_nothing) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        try {
            executeAction(sTID(_all_or_nothing), d, DialogModes.NO);
        } catch (e) { }
    };

    function selectLayerBySelector(_selector, _add) {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();

            if (_add == "remove" || !_add) { var addX = "removeFromSelection" } else { var addX = "addToSelection" }
            if (isNaN(_selector)) { r.putName(sTID("layer"), _selector) }
            else { r.putIndex(sTID("layer"), _selector) }
            d.putReference(sTID("null"), r);
            d.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID(addX));
            d.putBoolean(sTID("makeVisible"), false);
            executeAction(sTID("select"), d, DialogModes.NO);
        } catch (e) { }
    };

    function mergeLayers() {
        var d = new ActionDescriptor();
        executeAction(sTID('mergeLayersNew'), d, DialogModes.NO);
    };

    function nameLayer(_name) {
        app.activeDocument.activeLayer.name = _name;
    };

    function resetImage() {
        executeAction(sTID('revert'), undefined, DialogModes.NO);
        emptyProtocoll();
    };


    function placeItem(thisSite, thisFile) {

        /*choose Layer*/
        var desc3 = new ActionDescriptor();
        var ref2 = new ActionReference();
        ref2.putName(cTID('Lyr '), thisSite);
        desc3.putReference(cTID('null'), ref2);
        desc3.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), desc3, DialogModes.NO);

        /* ======================================================= */
        var idplacedLayerEditContents = stringIDToTypeID("placedLayerEditContents");
        var desc25511 = new ActionDescriptor();
        executeAction(idplacedLayerEditContents, desc25511, DialogModes.NO);

        /* ======================================================= */
        var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
        var desc25512 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        desc25512.putPath(idnull, new File(thisFile));
        executeAction(idplacedLayerReplaceContents, desc25512, DialogModes.NO);

        /* ======================================================= */
        var idsave = charIDToTypeID("save");
        executeAction(idsave, undefined, DialogModes.NO);

        /* ======================================================= */
        var idupdatePlacedLayer = stringIDToTypeID("updatePlacedLayer");
        executeAction(idupdatePlacedLayer, undefined, DialogModes.NO);

        /* ======================================================= */
        var idCls = charIDToTypeID("Cls ");
        executeAction(idCls, undefined, DialogModes.NO);
    }

    function saveCopy(thisFileName) {
        var OutputFile = new File(Folder_3D + "/" + thisFileName);
        tiffSaveOptions = new TiffSaveOptions();
        tiffSaveOptions.embedColorProfile = true;
        tiffSaveOptions.alphaChannels = false;
        tiffSaveOptions.layers = false;
        tiffSaveOptions.byteOrder = ByteOrder.IBM;
        tiffSaveOptions.annotations = false;
        tiffSaveOptions.transparency = true;
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        app.activeDocument.saveAs(OutputFile, tiffSaveOptions, true, Extension.LOWERCASE)
    }

    function saveMultiformat(_file, _saveFormat, _asCopy, _qualityJPG, _alphaChannels, _withLayers) {
        if (_saveFormat == "tif") {
            var saveOptions = new TiffSaveOptions();
            saveOptions.alphaChannels = _alphaChannels;
            saveOptions.byteOrder = ByteOrder.IBM;
            saveOptions.embedColorProfile = true;
            saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
            saveOptions.layers = _withLayers;
            saveOptions.spotColors = false;
            saveOptions.transparency = true;
            saveOptions.annotations = false;

        } else if (_saveFormat == "jpg") {
            var saveOptions = new JPEGSaveOptions();
            saveOptions.embedColorProfile = true;
            saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
            saveOptions.matte = MatteType.WHITE;
            saveOptions.quality = _qualityJPG;

        } else if (_saveFormat == "psd") {
            var saveOptions = new PhotoshopSaveOptions();
            saveOptions.alphaChannels = _alphaChannels;
            saveOptions.annotations = false;
            saveOptions.embedColorProfile = true;
            saveOptions.layers = _withLayers;
            saveOptions.spotColors = false;
        }
        saveFile_v2(_file, saveOptions, _asCopy);
    }
    function saveFile_v2(_file, _saveOptions, _asCopy) {
        app.activeDocument.saveAs(_file, _saveOptions, _asCopy, Extension.LOWERCASE);
    }
    function makeVisible(_input) {
        try {
            var d = new ActionDescriptor();
            var l = new ActionList();
            var r = new ActionReference();
            if (typeof _input == "number") {
                r.putIndex(stringIDToTypeID("layer"), _input);
            } else if (typeof _input == "string") {
                if (layer_checkExistence(_input)) {
                    r.putName(stringIDToTypeID('layer'), _input);
                } else {
                    r.putIndex(stringIDToTypeID("layer"), layer_getIDXbyString(_input)[0]);
                }
            } else if (typeof _input === "undefined") {
                r.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
            }
            l.putReference(r);
            d.putList(charIDToTypeID("null"), l);
            executeAction(stringIDToTypeID("show"), d, DialogModes.NO);
        } catch (e) {
            alert("error makeVisible: " + e);
        }
    }
    function flattenImage() {
        executeAction(charIDToTypeID("FltI"), undefined, DialogModes.NO);
    }
    function layer_checkExistence(_input) {
        try {
            var r = new ActionReference();
            r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("itemIndex"));
            if (typeof _input == "number") {
                r.putIndex(stringIDToTypeID("layer"), _input);
            } else if (typeof _input == "string") {
                r.putName(stringIDToTypeID('layer'), _input);
            }
            var getLayerIDX = executeActionGet(r).getInteger(stringIDToTypeID("itemIndex"));
            return true;
        } catch (e) {
            alert("error layer_checkExistence: " + e);
            return false;
        }
    }
    function layer_getIDXbyString(_string) {
        var i = 1;
        var layerIDX_array = [];
        while (layer_checkExistence(i)) {
            try {
                var regex = new RegExp(_string, 'g');
                if (layer_getName(i).match(regex)) {
                    layerIDX_array.push(i)
                }
            } catch (e) {
                alert("error layer_getIDXbyString: " + e);
            }
            i++;
        };
        return layerIDX_array;
    }


    prefSave();
    prefSet();
    /* app.bringToFront(); */
    app.open(master);

    if (thisSite == "links") {
        placeItem("links", thisFile);
    } else {
        placeItem("rechts", thisFile);
        try{
            
            selectLayers("selectAllLayers");
            selectLayerBySelector("Schatten", "remove");
            mergeLayers();
            nameLayer("frei");
            /* makeVisible("Schatten"); */
            saveMultiformat(new File(Folder_3D + "/" + thisFileName), "psd", true, null, false, true);

            /* makeVisible("Schatten");
            flattenImage();
            saveMultiformat(new File(Folder_3D + "/" + thisFileName), "jpg", true, 11, false, false); */

            resetImage();
        }
        catch(e){alert(e)}
        
    };

    emptyProtocoll();
    prefReset();

}




function runPS_schatten(Folder_3D, master) {
    function cTID(s) {
        return app.charIDToTypeID(s);
    };

    function sTID(s) {
        return app.stringIDToTypeID(s);
    };

    function prefSave() {
        startDisplayDialogs = app.displayDialogs;
        startRulerUnits = app.preferences.rulerUnits;
    };

    function prefSet() {
        app.displayDialogs = DialogModes.NO;
        app.preferences.rulerUnits = Units.MM;
    };

    function prefReset() {
        app.preferences.rulerUnits = startRulerUnits;
        app.displayDialogs = startDisplayDialogs;
    };

    function schatten() {
        var desc13 = new ActionDescriptor();
        var list5 = new ActionList();
        var ref10 = new ActionReference();
        ref10.putName(cTID('Lyr '), "Magazin");
        /*         ref10.putName( cTID('Lyr '), "doppelseite" );
                ref10.putName( cTID('Lyr '), "Reflection" ); */
        list5.putReference(ref10);
        desc13.putList(cTID('null'), list5);
        executeAction(cTID('Hd  '), desc13, DialogModes.NO);

        var desc14 = new ActionDescriptor();
        var list6 = new ActionList();
        var ref11 = new ActionReference();
        /* ref11.putProperty(cTID('Lyr '), cTID('Bckg')); */
        ref11.putName(cTID('Lyr '), "Schatten");
        list6.putReference(ref11);
        desc14.putList(cTID('null'), list6);
        executeAction(cTID('Shw '), desc14, DialogModes.NO);

        var OutputFile = new File(Folder_3D + "/_Schatten__11F-innen");
        tiffSaveOptions = new TiffSaveOptions();
        tiffSaveOptions.embedColorProfile = true;
        tiffSaveOptions.alphaChannels = false;
        tiffSaveOptions.layers = false;
        tiffSaveOptions.byteOrder = ByteOrder.IBM;
        tiffSaveOptions.annotations = false;
        tiffSaveOptions.transparency = false;
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        app.activeDocument.saveAs(OutputFile, tiffSaveOptions, true, Extension.LOWERCASE)
    };

    function closeAllDocuments() {
        while (documents.length > 0) {
            activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
    }


    prefSave();
    prefSet();

    app.open(master);
    schatten();
    closeAllDocuments();

    prefReset();
}