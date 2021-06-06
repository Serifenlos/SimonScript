# Snippets

## Loop

### Loop through opened docs

```js
function loopOpenDocs() {
    var firstDoc = app.activeDocument;
    for (var i = 0; i < app.documents.length; i++) {
        app.activeDocument = app.documents[i];
        var doc = app.activeDocument;

        try {
            /* PUT CODE HERE */
                
        } catch(e) {}
    };
    app.activeDocument = firstDoc;
}

```

### Loop through selected folder with subfolder

```js
function run() {
    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        // files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        files = folders[a].getFiles(/.+\.(tif|psd)$/i);
        if (files.length < 1) continue;

        for (var b in files) {
            var thisFile = files[b];
            var doc_file = new File(thisFile);
            app.open(doc_file);
            var doc = app.activeDocument;

            try {
                /* PUT CODE HERE */

            } catch(e) {}
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
```

### Loop through selected folder

```js
if (app.documents.length == 0) {
    inputFolder = Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet\nDie ausgespielten Dateien werden im Unterorder 'output' abgelegt");
    var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|psb|bmp|gif|png|)$/i);

    var outputFolder = new Folder(inputFolder + "/output");
    if (!outputFolder.exists) {
        outputFolder.create()
    };

    for (var j = 0; j < fileList.length; j++) {
        var thisFile = fileList[j];
        var doc_file = new File(thisFile);
        app.open(doc_file);
        var doc = app.activeDocument;

        try {
            /* PUT CODE HERE */

        } catch(e) {}
        doc.close(SaveOptions.DONOTSAVECHANGES);
    }
} else {
    alert("Abruch\nschließe bitte vorerst alle Dokumente!");
}
```

### In Brigde ausgewählte
==TODO==

## Tools

### getTool & setTool
*https://stackoverflow.com/a/29110173*

```js
if (getTool() == 'paintbrushTool') {
    setTool('eraserTool');
} else {
    setTool('paintbrushTool');
}

// https://forums.adobe.com/thread/579195
function getTool(){  
    var ref = new ActionReference();   
    ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
    var cTool = typeIDToStringID(executeActionGet(ref).getEnumerationType(stringIDToTypeID('tool')));  
    return cTool;  
}

// https://www.ps-scripts.com/viewtopic.php?f=68&t=11342&p=152772
function setTool(tool) {
    var desc9 = new ActionDescriptor();
    var ref7 = new ActionReference();
    ref7.putClass( app.stringIDToTypeID(tool) );
    desc9.putReference( app.charIDToTypeID('null'), ref7 );
    executeAction( app.charIDToTypeID('slct'), desc9, DialogModes.NO );
}
// Tool names (use quoted strings, e.g. 'moveTool')
// moveTool
// marqueeRectTool
// marqueeEllipTool
// marqueeSingleRowTool
// marqueeSingleColumnTool
// lassoTool
// polySelTool
// magneticLassoTool
// quickSelectTool
// magicWandTool
// cropTool
// sliceTool
// sliceSelectTool
// spotHealingBrushTool
// magicStampTool
// patchSelection
// redEyeTool
// paintbrushTool
// pencilTool
// colorReplacementBrushTool
// cloneStampTool
// patternStampTool
// historyBrushTool
// artBrushTool
// eraserTool
// backgroundEraserTool
// magicEraserTool
// gradientTool
// bucketTool
// blurTool
// sharpenTool
// smudgeTool
// dodgeTool
// burnInTool
// saturationTool
// penTool
// freeformPenTool
// addKnotTool
// deleteKnotTool
// convertKnotTool
// typeCreateOrEditTool
// typeVerticalCreateOrEditTool
// typeCreateMaskTool
// typeVerticalCreateMaskTool
// pathComponentSelectTool
// directSelectTool
// rectangleTool
// roundedRectangleTool
// ellipseTool
// polygonTool
// lineTool
// customShapeTool
// textAnnotTool
// soundAnnotTool
// eyedropperTool
// colorSamplerTool
// rulerTool
// handTool
// zoomTool
```

