/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Web-Output</name>
<about>Web-Output | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


/* OPTIONS ******************************************/
saveFolder = "~/Desktop/Bilder FERTIG";
saveFolder_WEB = "~/Desktop/Bilder WEB";

suffix_RZ = "__FERTIG";
suffix_WEB = "__WEB";
maximalMegaPixel = 8;
/****************************************************/


function info() {
    alert("Web-Output für 11Freunde\n - Auswahl des Überordner (alle Unterordner werden auch verarbeitet)\n - auf dem Schreibtisch werden zwei Ordner erstellt 'Bilder FERTIG' und 'Bilder WEB'\n - in 'Bilder FERTIG' werden die fertig bearbeiteten Bilder in der ursprünglichen Größe abgelegt\n - in 'Bilder WEB' liegen die bearbeiteten Bilder in maximal "+maximalMegaPixel+" MegaPixel, um die Datenmenge zum Webseiten-Upload zu reduzieren\n\n Bedingungen\n - die originale Bildquelle liegt im Smart-Objekt mit dem Namen 'Original'\n - dem Dateinamen wird zur besseren Sortierbarkeit der Name seines Ordners vorangestellt"
        // - wenn die Original-Bilder in Original-Größe im SmartObject liegen, wird das Script die Größe zurück rechnen\n
        // - wenn kein SmartObject mit dem Namen Original
    )
}


// thanks for prozess all subfolders
// https://community.adobe.com/t5/photoshop/copy-several-jpg-in-several-psd/m-p/10992549#M315938

run();

function run() {
    info();
    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        if (files.length < 1) continue;

        for (var b in files) {
            var prefix = "";
            if (topLevel != folders[a]) {
                var prefix = folders[a].name + "__";
            }

            var thisFile = files[b];
            var doc_file = new File(thisFile);
            app.open(doc_file);

            /* INCLUDE ******************************************/
                //@include "functions/basic.jsx";
                //@include "functions/mb_Utils.jsx";
                //@include "functions/meta.jsx";
                //@include "functions/save.jsx";
                //@include "functions/loopFiles.jsx";
            /****************************************************/

            prefSave();
            prefSet(DialogModes.NO, Units.PIXELS);


            try {
                gotoLayer("Original");
                SmartObject_edit();
                var width = app.activeDocument.width;
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                doc.resizeImage(width, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
            } catch (e) {}

            function setSaveName(_saveFolder, _prefix, _saveFormat) {
                var saveFolder = new Folder(_saveFolder);
                if (!saveFolder.exists) saveFolder.create();

                var saveName = replace__RGB_RZ(suffix_WEB);
                var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
                var saveFile = File(savePath);

                while (saveFile.exists) {
                    var saveName = saveName + "+";
                    var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
                    var saveFile = File(savePath);
                }
                return _prefix + saveName;
            }

            function helperScale(_setMegaPixel) {
                if(getScale(_setMegaPixel)<=1){
                return getScale(_setMegaPixel) * 100;
              } else {
                return 100;
              }
            }

            try{clearAllGuides()}catch(e){}
            try{delMeta()}catch(e){}
            try{if(getBitDepth(!8)){setBitDepth(8)}}catch(e){}


            /* TODO png und gif fehlt noch in SaveForWeb() */
            SaveForWeb("JPEG", saveFolder_WEB, setSaveName(saveFolder_WEB, prefix, "jpg"),helperScale(maximalMegaPixel), f, t, t, t, 255, 255, 255, "Meta_ck", 66, t, f, 0);

            prefReset();

            /* TODO bin nicht ganz mit saveRZ() einverstanden, ist für die globale Anwednung einwenig beschränkt. Versuche in save.jsx alles zu vereinen, irgendwann */
            var docName = GetFileNameOnly(doc.name);
            if (docName.match(/_frei/g) || docName.match(/-frei/g)) {
                try{selectAllLayers()}catch(e){};
                try{mergeLayers()}catch(e){};
                try{nameLayer("Freisteller")}catch(e){};
                doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
                setDpi(72);
                saveRZ(saveFolder, prefix, "tif", suffix_RZ);
            } else {
                try {doc.flatten()}catch(e){};
                doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
                setDpi(72);
                saveRZ(saveFolder, prefix, "jpg", suffix_RZ);
            }
            doc.close(SaveOptions.DONOTSAVECHANGES);
        }
    }

    function FindAllFolders(srcFolderStr, destArray) {
        var fileFolderArray = Folder(srcFolderStr).getFiles();
        for (var i = 0; i < fileFolderArray.length; i++) {
            var fileFoldObj = fileFolderArray[i];
            if (fileFoldObj instanceof File) {} else {
                destArray.push(Folder(fileFoldObj));
                FindAllFolders(fileFoldObj.toString(), destArray);
            }
        }
        return destArray;
    };
};