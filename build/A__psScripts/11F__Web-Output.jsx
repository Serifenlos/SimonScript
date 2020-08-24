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
/****************************************************/
function info(){alert("Web-Output für 11Freunde\n - Auswahl des Überordner (alle Unterordner werden auch verarbeitet)\n - auf dem Schreibtisch werden zwei Ordner erstellt 'Bilder FERTIG' und 'Bilder WEB'\n - in 'Bilder FERTIG' werden die fertig bearbeiteten Bilder in der ursprünglichen Größe abgelegt\n - in 'Bilder WEB' liegen die bearbeiteten Bilder in maximal "+maximalMegaPixel+" MegaPixel, um die Datenmenge zum Webseiten-Upload zu reduzieren\n\n Bedingungen\n - die originale Bildquelle liegt im Smart-Objekt mit dem Namen 'Original'\n - dem Dateinamen wird zur besseren Sortierbarkeit der Name seines Ordners vorangestellt")}
// thanks for prozess all subfolders
// https://community.adobe.com/t5/photoshop/copy-several-jpg-in-several-psd/m-p/10992549#M315938
function run(){info();var e,r=[],i=Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");if(null!=i)for(var a in(r=function e(r,i){for(var t=Folder(r).getFiles(),a=0;a<t.length;a++){var n=t[a];n instanceof File||(i.push(Folder(n)),e(n.toString(),i))}return i}(i,r)).unshift(i),r)if(files=[],files=r[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i),!(files.length<1))for(var n in files){var l="";if(i!=r[a])l=r[a].name+"__";var s=files[n],d=new File(s);app.open(d),
/* INCLUDE ******************************************/
//@include "functions/basic.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/meta.jsx";
//@include "functions/save.jsx";
//@include "functions/loopFiles.jsx";
/****************************************************/
prefSave(),prefSet(DialogModes.NO,Units.PIXELS);try{gotoLayer("Original"),SmartObject_edit();var o=app.activeDocument.width;app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),doc.resizeImage(o,void 0,void 0,ResampleMethod.PRESERVEDETAILS,0)}catch(e){}function c(e,r,i){var t=new Folder(e);t.exists||t.create();for(var a=t+"/"+r+(l=replace__RGB_RZ(suffix_WEB))+"."+i,n=File(a);n.exists;){var l;a=t+"/"+r+(l=l+"+")+"."+i,n=File(a)}return decodeURIComponent(r)+l}try{clearAllGuides()}catch(e){}try{delMeta()}catch(e){}try{getBitDepth(!1)&&setBitDepth(8)}catch(e){}
/* TODO png und gif fehlt noch in SaveForWeb() */SaveForWeb("JPEG",saveFolder_WEB,c(saveFolder_WEB,l,"jpg"),(e=maximalMegaPixel,getScale(e)<=1?100*getScale(e):100),f,t,t,t,255,255,255,"Meta_ck",66,t,f,0),prefReset();
/* TODO bin nicht ganz mit saveRZ() einverstanden, ist für die globale Anwednung einwenig beschränkt. Versuche in save.jsx alles zu vereinen, irgendwann */
var g=GetFileNameOnly(doc.name);if(g.match(/_frei/g)||g.match(/-frei/g)){try{selectAllLayers()}catch(e){}try{mergeLayers()}catch(e){}try{nameLayer("Freisteller")}catch(e){}doc.convertProfile("sRGB IEC61966-2.1",Intent.RELATIVECOLORIMETRIC,!0,!1),setDpi(72),saveRZ(saveFolder,l,"tif",suffix_RZ)}else{try{doc.flatten()}catch(e){}doc.convertProfile("sRGB IEC61966-2.1",Intent.RELATIVECOLORIMETRIC,!0,!1),setDpi(72),saveRZ(saveFolder,l,"jpg",suffix_RZ)}doc.close(SaveOptions.DONOTSAVECHANGES)}}saveFolder="~/Desktop/Bilder FERTIG",saveFolder_WEB="~/Desktop/Bilder WEB",suffix_RZ="__FERTIG",suffix_WEB="__WEB",maximalMegaPixel=8,run();