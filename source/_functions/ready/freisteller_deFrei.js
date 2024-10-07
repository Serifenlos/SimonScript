function freisteller_deFrei() {

    try {
        if (app.activeDocument.layerSets.getByName("Freisteller")) {
            var startLayerID = layer_selectedID_get();

            try {
                var ssDebug = false;
                var isWoodwing = false;
                if (getMeta_3("isWoodwing")) var isWoodwing = Boolean(getMeta_3("isWoodwing"));

                // DELETE the layers
                try {
                    gotoLayer("Freisteller");
                    ungroup();
                    gotoLayer("Freisteller helper");
                    deleteActiveLayer();
                } catch (e) { }

                if (!isWoodwing) {
                    // DELETE the file
                    var docPath = new Folder(doc.path);
                    var docNameOnly = GetFileNameOnly(doc.name);
                    var docFileExtension_re = /(?:\.([^.]+))?$/;
                    var docFileExtension = docFileExtension_re.exec(doc.name)[1];
                    var docFile_frei = new File(docPath + "/" + docNameOnly + "-frei." + docFileExtension);
                    if (docFile_frei.exists) {
                        docFile_frei.remove();
                    }
                } else {
                    if (getMeta_3("woodwing_RGB")) var woodwing_RGB = getMeta_3("woodwing_RGB");
                    if (getMeta_3("woodwing_file")) var woodwing_file = getMeta_3("woodwing_file");
                    if (getMeta_3("idDocName")) var idDocName = getMeta_3("idDocName");
                    BridgeTalkMessage_openDocID(idDocName, woodwing_file, ssDebug);
                    replaceMeta_3_suffix("woodwing_file", "psd", "jpg");
                    replaceMeta_3_suffix("woodwing_RGB", "psd", "jpg");

                    saveMultiformat(new File(woodwing_RGB), "jpg", t, RZ_qualityJPG, f, f);
                }

            }
            catch (e) { alert(e) }

            layer_selectedID_set(startLayerID);
        }
    }
    catch (e) {
        alert("Abbruch!\nkeine Ebene names 'Freisteller' gefunden\n" + e);
        return false;
    }
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