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
saveFolder = "~/Desktop/Output_web";
Suffix_RZ = "__WEB";
saveFormat = "jpg" // tif, jpg, psd
/****************************************************/


/* SHAME ********************************************/
// besser "if 8bit, then…"
function bit(_bit) { 
  var id1000 = charIDToTypeID("CnvM");
  var desc1000 = new ActionDescriptor();
  var id2000 = charIDToTypeID("Dpth");
  desc1000.putInteger(id2000, _bit);
  executeAction(id1000, desc1000, DialogModes.NO);
};
/****************************************************/

function info(){
  alert("Web-Output für 11Freunde \n  - ErklärText"
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
      
      // alert("file: " + files[b] + "\nfolder: " + folders[a]);
      var thisFile = files[b];
      var doc_file = new File(thisFile);
      app.open(doc_file);

      //@include "functions/basic.jsx";
      //@include "functions/mb_Utils.jsx";
      //@include "functions/meta.jsx";

      prefSave()
      prefSet(DialogModes.NO, Units.PIXELS)

      try {
        app.activeDocument.layers.getByName('Original');
        gotoLayer("Original");
        SmartObject_edit();
        var width = app.activeDocument.width;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc.resizeImage(width, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
      } catch (e) {}

      prefReset();
      try{clearAllGuides()}catch(e){}
      try{delMeta()}catch(e){}
      try{bit(8)}catch(e){}


      var docName = GetFileNameOnly(doc.name);
      if (docName.match(/_frei/g) || docName.match(/-frei/g)) {
        try{selectAllLayers()}catch(e){};
        try{mergeLayers()}catch(e){};
        try{nameLayer("Freisteller")}catch(e){};
        doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
        setDpi(72);
        saveRZ(saveFolder, prefix, "tif");
      }
      else {
        try{doc.flatten()}catch(e){};
        doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
        setDpi(72);
        saveRZ(saveFolder, prefix, "jpg");
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

