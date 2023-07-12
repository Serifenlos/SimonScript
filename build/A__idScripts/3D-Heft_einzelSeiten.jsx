// enable double clicking from the 
// Macintosh Finder or the Windows Explorer
// #target indesign
/* VARIBALES*/
//~ var master = new File("/Volumes/grafik/Fach_Grafik/11F_3D-Heft/Master/3D__11F-innen__MASTER.tif");
/* DIALOG*/
var a_dialog=app.dialogs.add({name:"3D-Heft",canCancel:!1}),min_width_left=50,min_width_right=250,heft1="11Freunde",heft2="noSports",heft3="Chronik",heft4="Buch-innen_17x24",heft5="Buch-innen_21x28";with(a_dialog)with(dialogColumns.add())with(borderPanels.add()){with(dialogColumns.add())staticTexts.add({staticLabel:"Heft:",minWidth:min_width_left});with(dialogColumns.add()){var heft=radiobuttonGroups.add();with(heft)radiobuttonControls.add({staticLabel:heft1,checkedState:!0,minWidth:min_width_right}),radiobuttonControls.add({staticLabel:heft2,checkedState:!1,minWidth:min_width_right}),radiobuttonControls.add({staticLabel:heft3,checkedState:!1,minWidth:min_width_right}),radiobuttonControls.add({staticLabel:heft4,checkedState:!1,minWidth:min_width_right}),radiobuttonControls.add({staticLabel:heft5,checkedState:!1,minWidth:min_width_right})}}if(0==a_dialog.show())a_dialog.destroy();else if(0==heft.selectedButton)var heft=heft1,master=new File("/Users/simon/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__11F-innen__MASTER_v5_flach.tif");
//~             var master = new File("/Volumes/grafik/Fach_Grafik/11F_3D-Heft/Master/3D__11F-innen__MASTER.tif");
else if(1==heft.selectedButton)var heft=heft2,master=new File("/Volumes/grafik/Fach_Grafik/11F_3D-Heft/Master/3D__noSports-innen__MASTER.tif");else if(2==heft.selectedButton)var heft=heft3,master=new File("/Users/simon/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__Chronik-innen__MASTER_flach.tif");else if(3==heft.selectedButton)var heft=heft4,master=new File("/Users/simon/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__Buch-innen_17x24__MASTER.psd");else if(4==heft.selectedButton)var heft=heft5,master=new File("/Users/simon/Arbeit/11Freunde/3D/11F_3D-Heft/Master/3D__Buch-innen_21x28__MASTER.psd");
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
function errorExit(e){alert(e),exit()}function closeAll(){for(;app.documents.length>0;)app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)}
/*/// ENDE  Einzelseiten JPG-Export ///*/
//// FUNCTIONS ////
/* sort files alphabetically */function sort_pages(e){var t=e.sort(sortnum).join("\r")+"\r";return t=(t=(t=t.replace(/([^\r]+\r)(\1)+/g,"$1")).replace(/\r$/,"")).split("\r")}function sortnum(e,t){return e>t}function GetFileNameOnly(e){var t=e.lastIndexOf(".");
// var myString = myString.replace(/^(\d{3}(-|_{2}))(.+)/g, "$3");
return-1==t?e:e.substr(0,t)}function getPageNumber(e){var t=e.lastIndexOf(".");-1==t||e.substr(0,t);var i=e.replace(/^(\d{3})(-|_{2})(.+)/g,"$1");
//~     alert("rightPageNumber: " + rightPageNumber);
return("000"+(i-1)).slice(-3)+"-"+i}
/*/// START Liste der Einzelseiten ///*/
Folder_single=Folder.selectDialog("Bitte wähle den Ordner der EinzelSeiten aus");
//~ var Folder_single = new Folder(outputFolder + "/einzelSeiten");
var Folder_3D=new Folder(Folder_single+"/3D");Folder_3D.exists||Folder_3D.create();var fileList=Folder_single.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);sort_pages(fileList);
// SCHLEIFE //
for(var thisSite="",thisFileName="",thisPageNumber="",i=0;i<fileList.length;i++){var thisFile=fileList[i];if(i+1&1){// ODD
var thisSite="links";id2ps_placeItem()}else{// EVEN
var thisSite="rechts",thisFileName=GetFileNameOnly(thisFile.name);
//~         var thisPageNumber = getPageNumber(thisFile.name);
id2ps_placeItem()}}function id2ps_placeItem(){var e=new BridgeTalk;e.target="photoshop-160",e.body=runPS.toSource()+"("+Folder_3D.toSource()+","+master.toSource()+","+thisFile.toSource()+","+thisSite.toSource()+","+thisFileName.toSource()+","+thisPageNumber.toSource()+");",e.onError=function(e){alert("Error: "+e.body)},e.onResult=function(e){},e.send(100)}function id2ps_schatten(){var e=new BridgeTalk;e.target="photoshop-160",e.body=runPS_schatten.toSource()+"("+Folder_3D.toSource()+","+master.toSource()+");",e.onError=function(e){alert("Error: "+e.body)},e.onResult=function(e){},e.send(100)}
/////////////////////////////////////////////////// PS
function runPS(e,t,i,n,r,o){function a(e){return app.charIDToTypeID(e)}function s(){var e=new ActionDescriptor,t=new ActionReference;t.putProperty(charIDToTypeID("HstS"),charIDToTypeID("CrnH")),e.putReference(charIDToTypeID("null"),t),executeAction(charIDToTypeID("Dlt "),e,DialogModes.NO)}function l(e,t){
/*choose Layer*/
var i=new ActionDescriptor,n=new ActionReference;n.putName(a("Lyr "),e),i.putReference(a("null"),n),i.putBoolean(a("MkVs"),!1),executeAction(a("slct"),i,DialogModes.NO);
/* ======================================================= */
var r=stringIDToTypeID("placedLayerEditContents"),o=new ActionDescriptor;executeAction(r,o,DialogModes.NO);
/* ======================================================= */
var s=stringIDToTypeID("placedLayerReplaceContents"),l=new ActionDescriptor,c=charIDToTypeID("null");l.putPath(c,new File(t)),executeAction(s,l,DialogModes.NO);
/* ======================================================= */
var p=charIDToTypeID("save");executeAction(p,void 0,DialogModes.NO);
/* ======================================================= */
var f=stringIDToTypeID("updatePlacedLayer");executeAction(f,void 0,DialogModes.NO);
/* ======================================================= */
var d=charIDToTypeID("Cls ");executeAction(d,void 0,DialogModes.NO)}startDisplayDialogs=app.displayDialogs,startRulerUnits=app.preferences.rulerUnits,app.displayDialogs=DialogModes.NO,app.preferences.rulerUnits=Units.MM,app.bringToFront(),app.open(t),"links"==n?l("links",i):(l("rechts",i),function(t){var i=new File(e+"/"+t);tiffSaveOptions=new TiffSaveOptions,tiffSaveOptions.embedColorProfile=!0,tiffSaveOptions.alphaChannels=!1,tiffSaveOptions.layers=!1,tiffSaveOptions.byteOrder=ByteOrder.IBM,tiffSaveOptions.annotations=!1,tiffSaveOptions.transparency=!0,tiffSaveOptions.imageCompression=TIFFEncoding.TIFFLZW,app.activeDocument.saveAs(i,tiffSaveOptions,!0,Extension.LOWERCASE)}(r)),function(){var e=new ActionDescriptor;e.putEnumerated(a("null"),a("PrgI"),a("Al  ")),executeAction(a("Prge"),e,DialogModes.NO);for(var t=app.activeDocument.historyStates,i=t.length-1;i>=0;--i)t[i].snapshot&&(app.activeDocument.activeHistoryState=t[i],s())}(),app.preferences.rulerUnits=startRulerUnits,app.displayDialogs=startDisplayDialogs}function runPS_schatten(e,t){function i(e){return app.charIDToTypeID(e)}startDisplayDialogs=app.displayDialogs,startRulerUnits=app.preferences.rulerUnits,app.displayDialogs=DialogModes.NO,app.preferences.rulerUnits=Units.MM,app.open(t),function(){var t=new ActionDescriptor,n=new ActionList,r=new ActionReference;r.putName(i("Lyr "),"Magazin"),
/*         ref10.putName( cTID('Lyr '), "doppelseite" );
                ref10.putName( cTID('Lyr '), "Reflection" ); */
n.putReference(r),t.putList(i("null"),n),executeAction(i("Hd  "),t,DialogModes.NO);var o=new ActionDescriptor,a=new ActionList,s=new ActionReference;s.putProperty(i("Lyr "),i("Bckg")),a.putReference(s),o.putList(i("null"),a),executeAction(i("Shw "),o,DialogModes.NO);var l=new File(e+"/_Schatten__11F-innen");tiffSaveOptions=new TiffSaveOptions,tiffSaveOptions.embedColorProfile=!0,tiffSaveOptions.alphaChannels=!1,tiffSaveOptions.layers=!1,tiffSaveOptions.byteOrder=ByteOrder.IBM,tiffSaveOptions.annotations=!1,tiffSaveOptions.transparency=!1,tiffSaveOptions.imageCompression=TIFFEncoding.TIFFLZW,app.activeDocument.saveAs(l,tiffSaveOptions,!0,Extension.LOWERCASE)}(),function(){for(;documents.length>0;)activeDocument.close(SaveOptions.DONOTSAVECHANGES)}(),app.preferences.rulerUnits=startRulerUnits,app.displayDialogs=startDisplayDialogs}id2ps_schatten();