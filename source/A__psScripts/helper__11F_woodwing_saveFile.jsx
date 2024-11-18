/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] 11F-woodwing saveFile</name>
<about>save RGB.psd + copy.jpg | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "./functions/basic.jsx";
//@include "./functions/meta.jsx";
//@include "./functions/save.jsx";
//@include "./functions/utils.jsx";
//@include "./functions/layer.jsx";
//@include "./functions/ready.jsx";


//@include "./assets/json2.js"
var jsonFilePath = "~/.ss_settings.json";
var jsonData = loadJSON(jsonFilePath);
const RZ_qualityJPG = jsonValue("RZ_qualityJPG"); //TODO kommt noch nicht in PS an



if (getMeta_3("isWoodwing")) var isWoodwing = Boolean(getMeta_3("isWoodwing"));
if (getMeta_3("arbeitsdatei_RGB")) var arbeitsdatei_RGB = getMeta_3("arbeitsdatei_RGB");
if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
if (getMeta_3("woodwing_imageID")) var woodwing_imageID = getMeta_3("woodwing_imageID");
if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");
var doc = app.activeDocument;
var startLayer = layer_selectedIDX_get();
var start_closedSets = [];

if (isWoodwing) {
    
    /* v2 */
    // BridgeTalkMessage_openDocID(idDocName, woodwing_file);
    // closeDoc(woodwing_file);
    // doc.suspendHistory("save Arbeitsdatei + Woodwing", "save_ArbeitWood_RGB()");

    /* v3 */
    BridgeTalkMessage_checkOutImage(idDocName, woodwing_imageID);
    // doc.suspendHistory("save Arbeitsdatei + Woodwing", "save_ArbeitWood_RGB()");
    
    try {
        if (app.activeDocument.layerSets.getByName("Freisteller")) {
            if (hasLayerMask("Freisteller")) {
                // app.activeDocument.suspendHistory("getClosedSets", "var start_closedSets = getClosedSets()");
                // undoSteps(1);
                // historyState_deleteSteps(1);
                var start_closedSets = getClosedSets();
                var startMaskVisibility = getMaskVisibility_bySelector("Freisteller");
                // var startMaskVisibility_helper = getMaskVisibility_bySelector("Freisteller helper")


                if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
                if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
                replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
                replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");

                app.activeDocument.suspendHistory('Freisteller: 2 Ebenen', 'freisteller_reduce2layers()');
                saveMultiformat(new File(woodwing_RGB), "psd", t, null, f, t);
                undoSteps(1);
                replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
                replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");

                // saveMultiformat(new File(arbeitsdatei_RGB), "psd", f, null, t, t);

                setMaskVisibility_bySelector(startMaskVisibility, "Freisteller");
                // setMaskVisibility_bySelector(startMaskVisibility_helper, "Freisteller helper")


                // app.activeDocument.suspendHistory("toogleOpenCloseSet_byIDX_byArray+", "toogleOpenCloseSet_byIDX_byArray(start_closedSets)");
                // undoSteps(1);
                // historyState_deleteSteps(1);

            }
        }
    } catch (e) {
        try {
            saveMultiformat(new File(woodwing_RGB), "jpg", t, RZ_qualityJPG, f, f);    
        } catch (error) {
            alert("ERROR beim Speichern der Woodwingdatei: \n" + error);
        }
    }


    

    
    for (var i = 0; i < start_closedSets.length; i++) {
        // if (isSetOpened2(start_closedSets[i])) {
            app.activeDocument.suspendHistory("toogleOpenCloseSet_byIDX", "toogleOpenCloseSet_byIDX_inner(start_closedSets[i])");
        // }
    }

    
    layer_selectedIDX_set(startLayer);
    saveMultiformat(new File(arbeitsdatei_RGB), "psd", f, null, t, t);


    BridgeTalkMessage_checkInImage(idDocName, woodwing_imageID);
    
    /* v2 */
    // function BridgeTalkMessage_openDocID(_idDocName, _woodwing_file) {
    //     var bt = new BridgeTalk();
    //     bt.target = 'indesign';
    //     bt.body = runID.toSource() + "('" + _idDocName + "','" + _woodwing_file + "');";
    //     bt.onResult = function (resObj) { }
    //     bt.send(10);
    // }

    /* v3 */
    function BridgeTalkMessage_checkOutImage(_idDocName, _woodwing_imageID) {
        var bt = new BridgeTalk();
        bt.target = 'indesign';
        bt.body = runID_checkOutImage.toSource() + "('" + _idDocName + "','" + _woodwing_imageID + "');";
        bt.onResult = function (resObj) { }
        bt.send(10);
    }

    /* v3 */
    function BridgeTalkMessage_checkInImage(_idDocName, _woodwing_imageID) {
        var bt = new BridgeTalk();
        bt.target = 'indesign';
        bt.body = runID_checkInImage.toSource() + "('" + _idDocName + "','" + _woodwing_imageID + "');";
        bt.onResult = function (resObj) { }
        bt.send(10);
    }



    function closeDoc(_file) {
        try {
            /* _file.close(SaveOptions.DONOTSAVECHANGES); */
            app.documents.getByName(decodeURI(_file)).close(SaveOptions.DONOTSAVECHANGES);
        }
        catch (e) {
            // alert(e);
        }
    }
}



function runID(_idDocName, _woodwing_file) {

    try {
        if (focusOpenedFile(_idDocName)) {
            var woodwing_file = app.activeDocument.links.itemByName(_woodwing_file);
            woodwing_file.editOriginal();
        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) {
        /* alert(e); */
    }

    return;


    function focusOpenedFile(_fileName) {
        var fileIsOpen = false;
        for (var j = 0; j < app.documents.length; j++) {
            if (app.documents[j].name.indexOf(_fileName) !== -1) {
                fileIsOpen = true;
                app.activeDocument = app.documents[j];
                break;
            }
        }
        return fileIsOpen;
    }
}





/* ################################################### */
function runID_checkOutImage(_idDocName, _woodwing_imageID) {
    try {
        if (focusOpenedFile(_idDocName)) {
            var managedImages_array = get_managedImages_array();
            var managedImage_index = get_managedImage_index(managedImages_array, _woodwing_imageID)

            app.activeDocument.managedImages[managedImage_index].checkOut();

        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) { /* alert("runID_1: " + e) */ }

    function get_managedImages_array() {
        var managedImages_array = []
        try {
            var managedImages = app.activeDocument.managedImages;
            for (var i = 0; i < managedImages.length; i++) {
                var managedImage = managedImages[i];
                var metaData_ID = managedImage.entMetaData.get("Core_ID");
                managedImages_array.push(metaData_ID);
            }
            return managedImages_array;

        } catch (e) { alert(e) }
    }

    function get_managedImage_index(_managedImages_array, _woodwing_imageID) {
        try {
            var managedImage_index = -1;
            for (var j = 0; i < _managedImages_array.length; j++) {
                if (_managedImages_array[j] === _woodwing_imageID) {
                    managedImage_index = j;
                    break;
                }
            }
            return managedImage_index;


        } catch (e) { alert(e) }
    }

    function focusOpenedFile(_fileName) {
        var fileIsOpen = false;
        for (var j = 0; j < app.documents.length; j++) {
            if (app.documents[j].name.indexOf(_fileName) !== -1) {
                fileIsOpen = true;
                app.activeDocument = app.documents[j];
                break;
            }
        }
        return fileIsOpen;
    }
}

/* ################################################### */
function runID_checkInImage(_idDocName, _woodwing_imageID) {
    try {
        if (focusOpenedFile(_idDocName)) {
            var managedImages_array = get_managedImages_array();
            var managedImage_index = get_managedImage_index(managedImages_array, _woodwing_imageID);

            app.activeDocument.managedImages[managedImage_index].pageItem[0].placeObject(managedImages_array[managedImage_index]);
            app.activeDocument.managedImages[managedImage_index].checkIn();

        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) { /* alert("runID_1: " + e) */ }

    function get_managedImages_array() {
        var managedImages_array = []
        try {
            var managedImages = app.activeDocument.managedImages;
            for (var i = 0; i < managedImages.length; i++) {
                var managedImage = managedImages[i];
                var metaData_ID = managedImage.entMetaData.get("Core_ID");
                managedImages_array.push(metaData_ID);
            }
            return managedImages_array;

        } catch (e) { alert(e) }
    }

    function get_managedImage_index(_managedImages_array, _woodwing_imageID) {
        try {
            var managedImage_index = -1;
            for (var j = 0; i < _managedImages_array.length; j++) {
                if (_managedImages_array[j] === _woodwing_imageID) {
                    managedImage_index = j;
                    break;
                }
            }
            return managedImage_index;


        } catch (e) { alert(e) }
    }

    function focusOpenedFile(_fileName) {
        var fileIsOpen = false;
        for (var j = 0; j < app.documents.length; j++) {
            if (app.documents[j].name.indexOf(_fileName) !== -1) {
                fileIsOpen = true;
                app.activeDocument = app.documents[j];
                break;
            }
        }
        return fileIsOpen;
    }
}




function save_ArbeitWood_RGB() {
    try {
        saveMultiformat(new File(woodwing_RGB), "jpg", t, RZ_qualityJPG, f, f);
    } catch (e) { "Error 2: " + alert(e) }

    try {
        saveMultiformat(new File(arbeitsdatei_RGB), "psd", f, null, t, t);
    } catch (e) { "Error 3: " + alert(e) }

}



function isFileOpen(_fileName) {
    var fileIsOpen = false;
    for (var j = 0; j < app.documents.length; j++) {
        if (app.documents[j].name == _fileName) {
            fileIsOpen = true;
            break;
        }
    }
    return fileIsOpen;
}


