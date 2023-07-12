/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F BW] Plattenmontage</name>
<about>Bilderwelt auf die Platten | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
var run_all=!0,run_3x2quer=!1,run_3x2hoch=!1,run_4x3quer=!1,run_4x3hoch=!1,run_1x1=!1,run_DinAquer=!1,run_DinAhoch=!1,run_pano=!0,outputFileFormat="JPG",outputResize=2400,outputDesination="web",doCrop=!0;function cTID(e){return app.charIDToTypeID(e)}function sTID(e){return app.stringIDToTypeID(e)}prefSave(),prefSet(),inputFolder=Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");var fileList=inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i),masterFolder=new Folder("/Users/simon/Arbeit/11Freunde/Bilderwelt/Moods_MAIN/MASTER");
// var masterFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Shop/2019-09/RGB/MASTER");
// var masterFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Shop/2019-09/RGB/MASTER_maximal");
masterFolder.exists||errorExit("kein Master-Folder!");var tempFolder=new Folder(masterFolder+"/.temp");
// var tempFolder = new Folder("~/11F <-> Simon/Shop/2019-09/material/_test");
tempFolder.exists||tempFolder.create();
// var outputFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Shop/2019-09/material/_output");
// var outputFolder = new Folder("~/11F <-> Simon/Shop/2019-09/material/_output");
// var outputFolder = new Folder("~/Desktop/Simon/Plattenmontage/test_output");
// var outputFolder = new Folder("~/Arbeit/11Freunde/_Cloud/Bilderwelt/Plattenmontage+");
// var outputFolder = new Folder("/Volumes/homes/pixoprint/11F_BW_2021-03__moods");
var outputFolder=new Folder("/Users/simon/Arbeit/11Freunde/Bilderwelt/Moods_MAIN/Mood_Output");if(outputFolder.exists||outputFolder.create(),run_all||run_3x2quer)for(var i=0;i<fileList.length;i++){if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__45x30/g)){/* 3x2 */
var doc_file=new File(thisFile);if(app.open(doc_file),(doc=app.activeDocument).width>doc.height){/* QUER */
var docFileName_decode=decodeURI(doc_file.name);app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES),format="3x2",seitenverhältnis="quer",originalName=thisFileName.replace("__45x30","").replace("__RGB",""),createBlanko(),placeTemp(doc_file,0,0,100,100,0);var spezial="";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Acryl","detail",temp_1),processItem("Acryl","full",temp_1),processItem("Alu","detail",temp_1),processItem("Alu","full",temp_1),processItem("FineArt","detail",temp_1),processItem("Leinwand","detail",temp_1),processItem("Leinwand","full",temp_1),processItem("Poster","detail",temp_1)}}closeAll()}if(run_all||run_3x2hoch)for(i=0;i<fileList.length;i++){if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__45x30/g)){/* 3x2 */
doc_file=new File(thisFile);if(app.open(doc_file),(doc=app.activeDocument).width<doc.height){/* HOCH */
docFileName_decode=decodeURI(doc_file.name);app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES),format="3x2",seitenverhältnis="hoch",originalName=thisFileName.replace("__45x30","").replace("__RGB",""),
// 90cw
createBlanko(),placeTemp(doc_file,0,0,150,150,90);spezial="_90cw";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),
// links
createBlanko(),placeTemp(doc_file,-1476,0,100,100,0);spezial="_links";saveTempFile(temp_2=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Acryl","detail",temp_1),processItem("Acryl","full",temp_2),processItem("Alu","detail",temp_1),processItem("Alu","full",temp_2),processItem("FineArt","detail",temp_1),processItem("Leinwand","detail",temp_1),processItem("Leinwand","full",temp_2),processItem("Poster","detail",temp_1)}}closeAll()}if(run_all||run_4x3quer)for(i=0;i<fileList.length;i++){if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__40x30/g)){/* 4x3 */
doc_file=new File(thisFile);if(app.open(doc_file),(doc=app.activeDocument).width>doc.height){/* QUER */
docFileName_decode=decodeURI(doc_file.name);app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES),format="4x3",seitenverhältnis="quer",originalName=thisFileName.replace("__40x30","").replace("__RGB",""),
// links
createBlanko(),placeTemp(doc_file,-296,0,100,100,0);spezial="_links";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),
// rechts
createBlanko(),placeTemp(doc_file,297,0,100,100,0);spezial="_rechts";saveTempFile(temp_2=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Acryl","detail",temp_1),processItem("Acryl","full",temp_1),processItem("Alu","detail",temp_1),processItem("Alu","full",temp_1),processItem("FineArt","detail",temp_2),processItem("Leinwand","detail",temp_1),processItem("Leinwand","full",temp_1),processItem("Poster","detail",temp_2)}}closeAll()}if(run_all||run_4x3hoch)for(i=0;i<fileList.length;i++){if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__40x30/g)){/* 4x3 */
doc_file=new File(thisFile);if(app.open(doc_file),(doc=app.activeDocument).width<doc.height){/* HOCH */
docFileName_decode=decodeURI(doc_file.name);app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES),format="4x3",seitenverhältnis="hoch",originalName=thisFileName.replace("__40x30","").replace("__RGB",""),
// links
createBlanko(),placeTemp(doc_file,-1328,0,100,100,0);spezial="_links";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),
// 90cw-rechts
createBlanko(),placeTemp(doc_file,296.5,0,133.333333,133.333333,90);spezial="_90cw-rechts";saveTempFile(temp_2=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),
// 90cw-links
createBlanko(),placeTemp(doc_file,-294.5,0,133.333333,133.333333,90);spezial="_90cw-links";saveTempFile(temp_3=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Acryl","detail",temp_3),processItem("Acryl","full",temp_1),processItem("Alu","detail",temp_3),processItem("Alu","full",temp_1),processItem("FineArt","detail",temp_2),processItem("Leinwand","detail",temp_3),processItem("Leinwand","full",temp_1),processItem("Poster","detail",temp_2)}}closeAll()}if(run_all||run_1x1)for(i=0;i<fileList.length;i++){if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__40x40/g)){/* 1x1 */
doc_file=new File(thisFile);format="1x1",seitenverhältnis="",originalName=thisFileName.replace("__40x40","").replace("__RGB",""),
// links
createBlanko(),placeTemp(doc_file,-886,0,100,100,0);spezial="_links";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),
// rechts
createBlanko(),placeTemp(doc_file,885.5,0,100,100,0);spezial="_rechts";saveTempFile(temp_2=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Acryl","detail",temp_1),processItem("Acryl","full",temp_1),processItem("Alu","detail",temp_1),processItem("Alu","full",temp_1),processItem("FineArt","detail",temp_2),processItem("Leinwand","detail",temp_1),processItem("Leinwand","full",temp_1),processItem("Poster","detail",temp_2)}closeAll()}if(run_all||run_DinAquer)for(i=0;i<fileList.length;i++){if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__A3/g)){/* DinA */
doc_file=new File(thisFile);if(app.open(doc_file),(doc=app.activeDocument).width>doc.height){/* QUER */
docFileName_decode=decodeURI(doc_file.name);app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES),format="DinA",seitenverhältnis="quer",originalName=thisFileName.replace("__A3","").replace("__RGB",""),
// links
createBlanko(),placeTemp(doc_file,177,-18,101,101,0);spezial="_links";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Poster","detail",temp_1)}}closeAll()}if(run_all||run_DinAhoch)for(i=0;i<fileList.length;i++){if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__A3/g)){/* DinA */
var doc;doc_file=new File(thisFile);if(app.open(doc_file),(doc=app.activeDocument).width<doc.height){/* HOCH */
docFileName_decode=decodeURI(doc_file.name);app.documents.getByName(docFileName_decode).close(SaveOptions.DONOTSAVECHANGES),format="DinA",seitenverhältnis="hoch",originalName=thisFileName.replace("__A3","").replace("__RGB",""),
// 90cw-links
createBlanko(),
// placeTemp(doc_file, 153, 0, 101, 101, 90);
placeTemp(doc_file,153.5,0,141.44,141.44,90);spezial="_90cw-links";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Poster","detail",temp_1)}}closeAll()}if(run_all||run_pano)for(i=0;i<fileList.length;i++){var thisFile,thisFileName;if((thisFileName=GetFileNameOnly((thisFile=fileList[i]).name)).match(/__62x25/g)){/* PANO */
doc_file=new File(thisFile);format="Pano",seitenverhältnis="",originalName=thisFileName.replace("__62x25","").replace("__RGB",""),
// links
createBlanko(),placeTemp(doc_file,1770.961854,0,166.65,166.65,0);var temp_1;spezial="_links";saveTempFile(temp_1=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),
// rechts
createBlanko(),placeTemp(doc_file,-1770.961854,0,166.65,166.65,0);var temp_2;spezial="_rechts";saveTempFile(temp_2=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),
// unten
createBlanko(),placeTemp(doc_file,0,709,100,100,0);var temp_3;spezial="_unten";saveTempFile(temp_3=new File(tempFolder+"/"+format+"-"+seitenverhältnis+spezial)),app.documents.getByName("blanko").close(SaveOptions.DONOTSAVECHANGES),processItem("Acryl","detail",temp_1),processItem("Acryl","full",temp_3),processItem("Alu","detail",temp_1),processItem("Alu","full",temp_3),processItem("FineArt","detail",temp_2),processItem("Leinwand","detail",temp_1),processItem("Leinwand","full",temp_3),processItem("Poster","detail",temp_2)}closeAll()}
///////////////////////////////////////////////////////
//// FUNCTIONS ////////////////////////////////////////
///////////////////////////////////////////////////////
//// global //////////////////////////////////////////
function prefSave(){startDisplayDialogs=app.displayDialogs,startRulerUnits=app.preferences.rulerUnits}function prefSet(){app.displayDialogs=DialogModes.NO,app.preferences.rulerUnits=Units.PIXELS}function prefReset(){app.preferences.rulerUnits=startRulerUnits,app.displayDialogs=startDisplayDialogs}function emptyProtocoll(){var e=new ActionDescriptor;e.putEnumerated(cTID("null"),cTID("PrgI"),cTID("Al  ")),executeAction(cTID("Prge"),e,DialogModes.NO);for(var t=app.activeDocument.historyStates,i=t.length-1;i>=0;--i)t[i].snapshot&&(app.activeDocument.activeHistoryState=t[i],deleteHistory())}function deleteHistory(){var e=new ActionDescriptor,t=new ActionReference;t.putProperty(charIDToTypeID("HstS"),charIDToTypeID("CrnH")),e.putReference(charIDToTypeID("null"),t),executeAction(charIDToTypeID("Dlt "),e,DialogModes.NO)}
//// fileList /////////////////////////////////////////
function GetFileNameOnly(e){var t=e.lastIndexOf(".");return(-1==t?e:e.substr(0,t)).replace(/^(\d{3}(-|_{2}))(.+)/g,"$3")}
// just kopiert
function sort_pages(e){alert(e[0]),e[0]=e[0].replace(/(.*)(__40x30|__45x30|__40x40|__62x25)(\,)/gm,"$2$1$3"),alert(e[0]);var t=e.sort(sortnum).join("\r")+"\r";
// str = str.replace(/(.*)(__40x30|__45x30|__40x40|__62x25)(\,)/gm, "$2$1$3");
return alert(t),t=(t=(t=t.replace(/([^\r]+\r)(\1)+/g,"$1")).replace(/\r$/,"")).split("\r")}function sortnum(e,t){return e>t}function sort_sizes(e){e.replace(/(.*)(__40x30|__45x30|__40x40|__62x25)(.*)/g,"$2$1$3")}
//// Plattenmontage ////////////////////////////////////
function placeTemp(e,t,i,l,o,n){var a=new ActionDescriptor;a.putInteger(cTID("Idnt"),4),a.putPath(cTID("null"),e),a.putEnumerated(cTID("FTcs"),cTID("QCSt"),sTID("QCSAverage"));var r=new ActionDescriptor;r.putUnitDouble(cTID("Hrzn"),cTID("#Pxl"),t),r.putUnitDouble(cTID("Vrtc"),cTID("#Pxl"),i),a.putObject(cTID("Ofst"),cTID("Ofst"),r),a.putUnitDouble(cTID("Wdth"),cTID("#Prc"),l),a.putUnitDouble(cTID("Hght"),cTID("#Prc"),o),a.putUnitDouble(cTID("Angl"),cTID("#Ang"),n),executeAction(cTID("Plc "),a,DialogModes.NO)}function createBlanko(){app.documents.add(5315,3543,300,"blanko",NewDocumentMode.RGB,DocumentFill.TRANSPARENT,1,BitsPerChannelType.EIGHT,"Adobe RGB (1998)")}function saveTempFile(e){var t=new File(e);tiffSaveOptions=new TiffSaveOptions,tiffSaveOptions.embedColorProfile=!0,tiffSaveOptions.alphaChannels=!1,tiffSaveOptions.layers=!1,tiffSaveOptions.byteOrder=ByteOrder.IBM,tiffSaveOptions.annotations=!1,tiffSaveOptions.transparency=!0,tiffSaveOptions.imageCompression=TIFFEncoding.TIFFLZW,app.activeDocument.saveAs(t,tiffSaveOptions,!0,Extension.LOWERCASE)}function closeAll(){for(;app.documents.length;)app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)}function gotoLayer(e){var t=new ActionDescriptor,i=new ActionReference;i.putName(cTID("Lyr "),e),t.putReference(cTID("null"),i),t.putBoolean(cTID("MkVs"),!1);var l=new ActionList;l.putInteger(42),t.putList(cTID("LyrI"),l),executeAction(cTID("slct"),t,DialogModes.NO)}function placeItem(e){gotoLayer("BILD");var t=new ActionDescriptor;t.putPath(cTID("null"),new File(e)),executeAction(sTID("placedLayerReplaceContents"),t,DialogModes.NO)}function savePlattenmontage(e,t,i,l){var o=new File(outputFolder+"/"+e+"__"+t+"-"+i);if("TIF"==l)tiffSaveOptions=new TiffSaveOptions,tiffSaveOptions.embedColorProfile=!0,tiffSaveOptions.alphaChannels=!1,tiffSaveOptions.layers=!1,tiffSaveOptions.byteOrder=ByteOrder.IBM,tiffSaveOptions.annotations=!1,tiffSaveOptions.transparency=!0,tiffSaveOptions.imageCompression=TIFFEncoding.TIFFLZW,app.activeDocument.saveAs(o,tiffSaveOptions,!0,Extension.LOWERCASE);else if("JPG"==l){var n=new JPEGSaveOptions;n.quality=9,n.embedColorProfile=!0,
// jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
//other options///////////////////////////
//jpgSaveOptions.formatOptions = FormatOptions.PROGRESSIVE;
n.formatOptions=FormatOptions.OPTIMIZEDBASELINE,n.formatOptions==FormatOptions.PROGRESSIVE&&(n.scans=3),
// jpgSaveOptions.matte = MatteType.NONE;
n.matte=MatteType.WHITE,app.activeDocument.saveAs(o,n,!0,Extension.LOWERCASE)}}function activePlatte(e,t,i,l){return new File(masterFolder+"/"+e+seitenverhältnis+"_"+i+"_"+l+"__MASTER.tif")}function changeMaterial(e){if("Acryl"==e)var t="DHA";if("Alu"==e)t="AKF";if("FineArt"==e)t="FAP";if("Leinwand"==e)t="LWD";if("Poster"==e)t="POS";return t}function processItem(e,t,i){
// var material = _material;
// var ansicht = _ansicht;
var l=activePlatte(format,seitenverhältnis,e,t);open(l),placeItem(i+".tif");var o=app.documents.getByName(l.name);(o.flatten(),doCrop)&&this["crop_"+(format+seitenverhältnis+"_"+e+"_"+t)](o);"print"!=outputDesination&&o.resizeImage(outputResize,void 0,72,ResampleMethod.PRESERVEDETAILS,void 0),
// alert("material: " + changeMaterial(_material));
savePlattenmontage(originalName,changeMaterial(e),t,outputFileFormat),emptyProtocoll()}
// https://regex101.com/r/vT4CLl/1/
// https://regex101.com/r/vT4CLl/2
function crop_AcyrlAlu_detail(e){
// __doc.crop([1441.810617, 844.591156, 5250.590516, 3383.777755], 0.000000);
e.crop([1441,714,5250,3253.333333],0)}function crop_Leinwand_detail(e){e.crop([1435.431606,650.440175,5242.605214,3188.555914],0)}function crop_FineartPoster_detail(e){e.crop([4,86.372444,5801.519432,3951.385399],0)}
//// 3x2 quer ////////////////////////////////////
function crop_3x2quer_Acryl_detail(e){crop_AcyrlAlu_detail(e)}function crop_3x2quer_Acryl_full(e){e.crop([263,0,6965,4468],0)}function crop_3x2quer_Alu_detail(e){crop_AcyrlAlu_detail(e)}function crop_3x2quer_Alu_full(e){e.crop([233.5,0,6935.5,4468],0)}function crop_3x2quer_FineArt_detail(e){crop_FineartPoster_detail(e)}function crop_3x2quer_Leinwand_detail(e){crop_Leinwand_detail(e)}function crop_3x2quer_Leinwand_full(e){e.crop([210,0,6912,4468],0)}function crop_3x2quer_Poster_detail(e){crop_FineartPoster_detail(e)}
//// 3x2 hoch ////////////////////////////////////
function crop_3x2hoch_Acryl_detail(e){crop_AcyrlAlu_detail(e)}function crop_3x2hoch_Acryl_full(e){e.crop([907,0,7609,4468],0)}function crop_3x2hoch_Alu_detail(e){crop_AcyrlAlu_detail(e)}function crop_3x2hoch_Alu_full(e){e.crop([924.5,0,7626.5,4468],0)}function crop_3x2hoch_FineArt_detail(e){crop_FineartPoster_detail(e)}function crop_3x2hoch_Leinwand_detail(e){crop_Leinwand_detail(e)}function crop_3x2hoch_Leinwand_full(e){e.crop([972,0,7674,4468],0)}function crop_3x2hoch_Poster_detail(e){crop_FineartPoster_detail(e)}
//// 4x3 quer ////////////////////////////////////
function crop_4x3quer_Acryl_detail(e){crop_AcyrlAlu_detail(e)}function crop_4x3quer_Acryl_full(e){e.crop([44.5,0,6746.5,4468],0)}function crop_4x3quer_Alu_detail(e){crop_AcyrlAlu_detail(e)}function crop_4x3quer_Alu_full(e){e.crop([27,0,6729,4468],0)}function crop_4x3quer_FineArt_detail(e){crop_FineartPoster_detail(e)}function crop_4x3quer_Leinwand_detail(e){crop_Leinwand_detail(e)}function crop_4x3quer_Leinwand_full(e){e.crop([27,0,6729,4468],0)}function crop_4x3quer_Poster_detail(e){crop_FineartPoster_detail(e)}
//// 4x3 hoch ////////////////////////////////////
function crop_4x3hoch_Acryl_detail(e){crop_AcyrlAlu_detail(e)}function crop_4x3hoch_Acryl_full(e){e.crop([794.5,0,7496.5,4468],0)}function crop_4x3hoch_Alu_detail(e){crop_AcyrlAlu_detail(e)}function crop_4x3hoch_Alu_full(e){e.crop([789,0,7491,4468],0)}function crop_4x3hoch_FineArt_detail(e){crop_FineartPoster_detail(e)}function crop_4x3hoch_Leinwand_detail(e){crop_Leinwand_detail(e)}function crop_4x3hoch_Leinwand_full(e){e.crop([865.5,0,7567.5,4468],0)}function crop_4x3hoch_Poster_detail(e){crop_FineartPoster_detail(e)}
//// 1x1 ////////////////////////////////////
function crop_1x1_Acryl_detail(e){crop_AcyrlAlu_detail(e)}function crop_1x1_Acryl_full(e){e.crop([416.5,0,7118.5,4468],0)}function crop_1x1_Alu_detail(e){crop_AcyrlAlu_detail(e)}function crop_1x1_Alu_full(e){e.crop([434.5,0,7136.5,4468],0)}function crop_1x1_FineArt_detail(e){e.crop([182.748276,43.74209,5970.22439,3897.459419],0)}function crop_1x1_Leinwand_detail(e){crop_Leinwand_detail(e)}function crop_1x1_Leinwand_full(e){e.crop([499.5,0,7201.5,4468],0)}function crop_1x1_Poster_detail(e){e.crop([182.748276,43.74209,5970.22439,3897.459419],0)}
//// DinA ////////////////////////////////////
function crop_DinAquer_Poster_detail(e){e.crop([4,125,6100,4189],0)}function crop_DinAhoch_Poster_detail(e){e.crop([4,127.050718,6100.123778,4191.133237],0)}
//// Pano ////////////////////////////////////
function crop_Pano_Acryl_detail(e){crop_AcyrlAlu_detail(e)}function crop_Pano_Acryl_full(e){e.crop([493.342209,1242.361125,6586.58681,4468],0)}function crop_Pano_Alu_detail(e){crop_AcyrlAlu_detail(e)}function crop_Pano_Alu_full(e){e.crop([493.342209,1242.361125,6586.58681,4468],0)}function crop_Pano_FineArt_detail(e){crop_FineartPoster_detail(e)}function crop_Pano_Leinwand_detail(e){crop_Leinwand_detail(e)}function crop_Pano_Leinwand_full(e){e.crop([493.342209,1242.361125,6586.58681,4468],0)}function crop_Pano_Poster_detail(e){crop_FineartPoster_detail(e)}prefReset();