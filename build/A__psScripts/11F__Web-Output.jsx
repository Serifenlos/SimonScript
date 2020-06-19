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
// tif, jpg, psd
/****************************************************/
/* SHAME ********************************************/
// besser "if 8bit, then…"
function bit(e){var t=charIDToTypeID("CnvM"),r=new ActionDescriptor,a=charIDToTypeID("Dpth");r.putInteger(a,e),executeAction(t,r,DialogModes.NO)}
/****************************************************/
function info(){alert("Web-Output für 11Freunde \n  - ErklärText")}
// thanks for prozess all subfolders
// https://community.adobe.com/t5/photoshop/copy-several-jpg-in-several-psd/m-p/10992549#M315938
function run(){info();var e=[],t=Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");if(null!=t)for(var r in(e=function e(t,r){for(var a=Folder(t).getFiles(),i=0;i<a.length;i++){var n=a[i];n instanceof File||(r.push(Folder(n)),e(n.toString(),r))}return r}(t,e)).unshift(t),e)if(files=[],files=e[r].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i),!(files.length<1))for(var a in files){var i="";if(t!=e[r])i=e[r].name+"__";
// alert("file: " + files[b] + "\nfolder: " + folders[a]);
var n=files[a],o=new File(n);app.open(o),
//@include "functions/basic.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/meta.jsx";
prefSave(),prefSet(DialogModes.NO,Units.PIXELS);try{app.activeDocument.layers.getByName("Original"),gotoLayer("Original"),SmartObject_edit();var c=app.activeDocument.width;app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),doc.resizeImage(c,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0)}catch(e){}prefReset();try{clearAllGuides()}catch(e){}try{delMeta()}catch(e){}try{bit(8)}catch(e){}var l=GetFileNameOnly(doc.name);if(l.match(/_frei/g)||l.match(/-frei/g)){try{selectAllLayers()}catch(e){}try{mergeLayers()}catch(e){}try{nameLayer("Freisteller")}catch(e){}doc.convertProfile("sRGB IEC61966-2.1",Intent.RELATIVECOLORIMETRIC,!0,!1),setDpi(72),saveRZ(saveFolder,i,"tif")}else{try{doc.flatten()}catch(e){}doc.convertProfile("sRGB IEC61966-2.1",Intent.RELATIVECOLORIMETRIC,!0,!1),setDpi(72),saveRZ(saveFolder,i,"jpg")}doc.close(SaveOptions.DONOTSAVECHANGES)}}saveFolder="~/Desktop/Output_web",Suffix_RZ="__WEB",saveFormat="jpg",run();