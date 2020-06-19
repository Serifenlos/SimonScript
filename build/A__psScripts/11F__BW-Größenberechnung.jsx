/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F BW] Größenberechnung</name>
<about>Bilderwelt Größenberechnung | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
// @include "functions/basic.jsx";
// @include "functions/loopFiles.jsx";
// @include "functions/save.jsx";
if(0==app.documents.length){inputFolder=Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet\nDie ausgespielten Dateien werden im Unterorder 'output' abgelegt");var fileList=inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i),outputFolder=new Folder(inputFolder+"/output");outputFolder.exists||outputFolder.create();for(var j=0;j<fileList.length;j++){var thisFile=fileList[j],thisFileName=GetFileNameOnly(thisFile.name),doc_file=new File(thisFile);app.open(doc_file);var doc=app.activeDocument;process_BW(thisFile),doc.close(SaveOptions.DONOTSAVECHANGES)}}else alert("Abruch\nschließe bitte vorerst alle Dokumente!");
///////////////////////*////////////////////
function process_BW(e){var i=doc.width,t=doc.height;if(i>t)
// alert("breit")
var l=(i/t).toFixed(2);else
// alert("hoch")
l=(t/i).toFixed(2);if(l>=1.48&&l<=1.52)for(var s=[180,150,120,90,75,60,45],o=get_longSite(),a=0;a<s.length;a++){if((f=parseFloat(s[a]))<=parseFloat(o)){if(img_resize(f,300),180==f)var r="180x120";else if(150==f)r="150x100";else if(120==f)r="120x80";else if(90==f)r="90x60";else if(75==f)r="75x50";else if(60==f)r="60x40";else if(45==f)r="45x30";newFilePath=new File(outputFolder+"/"+thisFileName+"__"+r),saveFile_JPG(12,!0,"FormatOptions.OPTIMIZEDBASELINE","MatteType.NONE")}resetImage()}else if(l>=1.31&&l<=1.35)for(s=[180,160,120,100,80,60,40],o=get_longSite(),a=0;a<s.length;a++){if((f=parseFloat(s[a]))<=parseFloat(o)){if(img_resize(f,300),180==f)r="180x135";else if(160==f)r="160x120";else if(120==f)r="120x90";else if(100==f)r="100x75";else if(80==f)r="80x60";else if(60==f)r="60x45";else if(40==f)r="40x30";newFilePath=new File(outputFolder+"/"+thisFileName+"__"+r),saveFile_JPG(12,!0,"FormatOptions.OPTIMIZEDBASELINE","MatteType.NONE")}resetImage()}else if(l>=.98&&l<=1.02)for(s=[140,120,100,80,60,50,40],o=get_longSite(),a=0;a<s.length;a++){if((f=parseFloat(s[a]))<=parseFloat(o)){if(img_resize(f,300),140==f)r="140x140";else if(120==f)r="120x120";else if(100==f)r="100x100";else if(80==f)r="80x80";else if(60==f)r="60x60";else if(50==f)r="50x50";else if(40==f)r="40x40";newFilePath=new File(outputFolder+"/"+thisFileName+"__"+r),saveFile_JPG(12,!0,"FormatOptions.OPTIMIZEDBASELINE","MatteType.NONE")}resetImage()}else if(l>=2.48&&l<=2.52)for(s=[250,225,200,175,150,125,100],o=get_longSite(),a=0;a<s.length;a++){var f;if((f=parseFloat(s[a]))<=parseFloat(o)){if(img_resize(f,300),250==f)r="250x100";else if(225==f)r="225x90";else if(200==f)r="200x80";else if(175==f)r="175x70";else if(150==f)r="150x60";else if(125==f)r="125x50";else if(100==f)r="100x40";newFilePath=new File(outputFolder+"/"+thisFileName+"__"+r),saveFile_JPG(12,!0,"FormatOptions.OPTIMIZEDBASELINE","MatteType.NONE")}resetImage()}}function get_longSite(){prefSave(),prefSet(DialogModes.NO,Units.CM);var e=doc.width,i=doc.height;if(e>i)var t=e;else t=i;return prefReset(),parseFloat(t).toFixed(0)}