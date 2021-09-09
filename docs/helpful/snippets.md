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



### some functions from Micheal L. Hale
*https://community.adobe.com/t5/photoshop-ecosystem-discussions/ps3-script-to-batch-rename-layers/m-p/1102323#M283521*

```js
// Try this. Just select the layers you want 'copy' removed from and run this script.

if( app.documents.length > 0 ){
app.activeDocument.suspendHistory('Rename selected layers','removeCopyFromSelectedLayersNames()');
}
function removeCopyFromLayerName(){
     if( getSelectedLayersIdx().length > 1 ){
          var selectedLayers = getSelectedLayersIdx();
          makeActiveByIndex( selectedLayers[0], false );
     }
   var startLoop = Number( !hasBackground() );
   var endLoop = getNumberOfLayer() + 1; 
   for( var l = startLoop;l < endLoop; l++){
        while( !isValidActiveLayer( l ) ) {
            l++;
        }
          var oldName =  getLayerNameByIndex( l );
          var newName = oldName.replace(/\scopy\s?\d*$/i,'');
          putLayerNameByIndex( l, newName )
     }
     if( selectedLayers != undefined ) makeActiveByIndex( selectedLayers, false );
}

function removeCopyFromSelectedLayersNames(){
     var selectedLayers = getSelectedLayersIdx();
     for( var l = 0;l < selectedLayers.length; l++){
          var oldName =  getLayerNameByIndex( selectedLayers[ l ] );
          var newName = oldName.replace(/\scopy.*$/i,'');
          makeActiveByIndex( selectedLayers[ l ], false );
          putLayerNameByIndex( selectedLayers[ l ], newName )
     }
     makeActiveByIndex( selectedLayers, false );
}

function getNumberOfLayer(){ 
var ref = new ActionReference(); 
ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') ); 
var desc = executeActionGet(ref); 
var numberOfLayer = desc.getInteger(charIDToTypeID('NmbL')); 
return numberOfLayer; 
}
function getLayerNameByIndex( idx ) { 
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'Nm  ' )); 
    ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
    return executeActionGet(ref).getString(charIDToTypeID( 'Nm  ' ));; 
}

function putLayerNameByIndex( idx, name ) {
     if( idx == 0 ) return;
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
    desc.putReference( charIDToTypeID('null'), ref );
        var nameDesc = new ActionDescriptor();
        nameDesc.putString( charIDToTypeID('Nm  '), name );
    desc.putObject( charIDToTypeID('T   '), charIDToTypeID('Lyr '), nameDesc );
    executeAction( charIDToTypeID('setd'), desc, DialogModes.NO );
}

function getActiveLayerIndex() {
     var ref = new ActionReference();
     ref.putProperty( 1349677170 , 1232366921 );
     ref.putEnumerated( 1283027488, 1332896878, 1416783732 );
     var res = executeActionGet(ref).getInteger( 1232366921 )
                                                       - Number( hasBackground() );
     return res;   
}

function isValidActiveLayer( idx ) {
     var propName = stringIDToTypeID( 'layerSection' );
     var ref = new ActionReference(); 
     ref.putProperty( 1349677170 , propName);
     ref.putIndex( 1283027488, idx );
     var desc =  executeActionGet( ref );
     var type = desc.getEnumerationValue( propName );
     var res = typeIDToStringID( type ); 
     return res == 'layerSectionEnd' ? false:true;
}

function hasBackground(){
    var res = undefined;
    try{
        var ref = new ActionReference();
        ref.putProperty( 1349677170 , 1315774496); 
        ref.putIndex( 1283027488, 0 );
        executeActionGet(ref).getString(1315774496 );; 
        res = true;
    }catch(e){ res = false}
    return res;
}

function getSelectedLayersIdx(){
     var selectedLayers = new Array;
     var ref = new ActionReference();
     ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
     var desc = executeActionGet(ref);
     if( desc.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){
          desc = desc.getList( stringIDToTypeID( 'targetLayers' ));
          var c = desc.count 
          var selectedLayers = new Array();
          for(var i=0;i<c;i++){
               selectedLayers.push(  desc.getReference( i ).getIndex());
          }
     }else{
          var ref = new ActionReference(); 
          ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'ItmI' )); 
          ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
          selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' )));
     }
     return selectedLayers;
}

function makeActiveByIndex( idx, visible ){
     if( idx.constructor != Array ) idx = [ idx ];
     for( var i = 0; i < idx.length; i++ ){
          var desc = new ActionDescriptor();
          var ref = new ActionReference();
          ref.putIndex(charIDToTypeID( 'Lyr ' ), idx)
          desc.putReference( charIDToTypeID( 'null' ), ref );
          if( i > 0 ) {
               var idselectionModifier = stringIDToTypeID( 'selectionModifier' );
               var idselectionModifierType = stringIDToTypeID( 'selectionModifierType' );
               var idaddToSelection = stringIDToTypeID( 'addToSelection' );
               desc.putEnumerated( idselectionModifier, idselectionModifierType, idaddToSelection );
          }
          desc.putBoolean( charIDToTypeID( 'MkVs' ), visible );
          executeAction( charIDToTypeID( 'slct' ), desc, DialogModes.NO );
     }     
}
```