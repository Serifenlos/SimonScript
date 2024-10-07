function freisteller_button() {
    var startLayer = layer_selectedIDX_get();
    start_closedSets = [];
    var isWoodwing = false;
    var ssDebug = false;
    if (getMeta_3("isWoodwing")) var isWoodwing = Boolean(getMeta_3("isWoodwing"));
    
    try {
        if (app.activeDocument.layerSets.getByName("Freisteller")) {
            try {
                if (!isWoodwing) {
                    /* var docPath = app.activeDocument.path; */
                    app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
                    app.activeDocument.save();
                } else {
                    alert("ist schon als Freisteller angelegt");
                }
            } catch (e) {
                alert(e)
            };
        }
    } catch (e) {
        app.activeDocument.suspendHistory('Freisteller-Gruppe', 'freisteller_createGroup()');
        try {
            if (!isWoodwing) {
                /* var docPath = app.activeDocument.path; */
                app.activeDocument.suspendHistory('Freisteller SaveRGB', 'freisteller_saveRGB()');
                app.activeDocument.save();
            } else {

                app.activeDocument.suspendHistory("getClosedSets", "var start_closedSets = getClosedSets()");
                // undoSteps(1);
                // historyState_deleteSteps(1);

                if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
                if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");

                // if (getMeta_3("arbeitsdatei_RGB")) var arbeitsdatei_RGB = getMeta_3("arbeitsdatei_RGB");
                // if (getMeta_3("woodwing_imageID")) var woodwing_imageID = getMeta_3("woodwing_imageID");
                if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");

                BridgeTalkMessage_openDocID(idDocName, woodwing_file, ssDebug);

                replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
                replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");
                app.activeDocument.suspendHistory('Freisteller: 2 Ebenen', 'freisteller_reduce2layers()');
                saveMultiformat(new File(woodwing_RGB), "psd", t, null, f, t);
                undoSteps(1);
                replaceMeta_3_suffix("woodwing_file", "jpg", "psd");
                replaceMeta_3_suffix("woodwing_RGB", "jpg", "psd");

                
            }
        } catch (e) {};
    }
    app.activeDocument.suspendHistory("toogleOpenCloseSet_byArray_loop", "toogleOpenCloseSet_byArray_loop(start_closedSets)");
    layer_selectedIDX_set(startLayer);
}

function toogleOpenCloseSet_byArray_loop(_array) {
    for (var i = 0; i < _array.length; i++) {
        try {
            gotoLayer(_array[i]);
            myALayerIDX = getActiveLayerIndex();
            myGroupP = app.activeDocument.activeLayer;
            if (!isLayerSet(myALayerIDX)) {
                myGroupP = app.activeDocument.activeLayer.parent;
                try {
                    app.activeDocument.activeLayer = myGroupP
                } catch (err) {
                    return
                };
                if (getNbOfChilds() > 1) {
                    if (myGroupP.typename != "Document") {
                        if (isSetOpened1(myGroupP)) {
                            closeGroup(myGroupP)
                        } else {
                            openGroup1(myGroupP)
                        };
                    }
                }
            } else {
                if (getNbOfChilds() > 1) {
                    if (isSetOpened1(myGroupP)) {
                        closeGroup(myGroupP)
                    } else {
                        openGroup1(myGroupP)
                    };
                }
            }
        } catch (e) { alert("toogleOpenCloseSet_byArray_loop: " + e) }
    }
}


function closeDoc(_file) {
    try {
        app.documents.getByName(decodeURI(_file)).close(SaveOptions.DONOTSAVECHANGES);
    }
    catch (e) { if (ssDebug) { alert("closeDoc: " + _file + " :--: " + e) } }
}


function BridgeTalkMessage_openDocID(_idDocName, _woodwing_file, _ssDebug) {
    var bt = new BridgeTalk();
    bt.target = 'indesign';
    bt.body = runID.toSource() + "('" + _idDocName + "','" + _woodwing_file + "','" + _ssDebug + "');";
    bt.onResult = function (resObj) { }
    bt.send(10);
}

function runID(_idDocName, _woodwing_file, _ssDebug) {
    try {
        if (focusOpenedFile(_idDocName)) {
            var woodwing_file = app.activeDocument.links.itemByName(_woodwing_file);
            woodwing_file.editOriginal();
        } else {
            alert("kein Focus auf der Datei?");
        }
    } catch (e) {
        /* if (_ssDebug) { alert("runID: " + e); } */
    }

    return " ";


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