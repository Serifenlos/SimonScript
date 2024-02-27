/** Optionen  **************************************************************/
// var Rasterweite = 70;
const ZielAufloesung_dpi=355.6,minAufloesung=300,Suffix_RGB="__RGB";
// no / here, escape \
getRubrik_array=[["(\\w{1,3}[-,_]\\w{1,3}_11F_\\d{3}_)(.*)(.indd)","$2"],["(\\w{1,3}[-,_]\\w{1,3}_11F_BUCH_J11_)(.*)(.indd)","$2"],["(\\w{1,3}[-,_]\\w{1,3}_11F_SPEZIAL-EM_)(.*)(.indd)","$2"],// xxx-xxx_11F_SPEZIAL-EM_
["(\\w{1,3}[-,_]\\w{1,3}_11F_Legenden_SGE_)(.*)(.indd)","$2"],["(\\w{1,3}[-,_]\\w{1,3}_11F_Chronik_2023_)(.*)(.indd)","$2"],["(\\w{1,3}[-,_]\\w{1,3}_11F_FMLUI_2022_)(.*)(.indd)","$2"],// xxx_xxx_11F_FMLUI_2022_
["(\\w{1,3}[-,_]\\w{1,3}_11F_Planer_Gruppe_)(.*)(.indd)","$2"]];var mainFolder="/Users/adrians/Arbeit/__temp",subFolder="RGB",ww_mainFolder="~/WoodWingStudio.noindex/InDesign/",check_trailingSlash=/\/$/;function startschuss(){if(!app.selection.length>0)alert("Wähle das zubearbeitende Bild aus");else{
// Loop für mehrere Bilder
for(var e=0;e<app.selection.length;e++){
/** Variablen  **************************************************************/
var i=app.activeDocument.filePath,n=new Folder(i);
// Kann doch raus ??
// noch relevant ?
if(app.selection[e]instanceof Image&&app.selection[e].parent.graphics.length>0)var a=app.selection[e].parent;else a=app.selection[e];var t=a.images[0];imageLink=a.graphics[0].itemLink;try{if(imageLink.wwoi)var r=!0}catch(e){r=!1}t.horizontalScale,t.verticalScale;var o=t.effectivePpi[0];t.effectivePpi[1],t=imageLink.parent;// was ist das?
if(r)l=imageLink.elvisFilePath;else var l=imageLink.filePath;var s=new File(l),c=GetFileNameOnly(s.name);if(void 0!==getRubrik(getRubrik_array))var d=getRubrik(getRubrik_array);else d="";(n=new Folder(mainFolder+subFolder+d)).exists||n.create()
/*TODO ob tif oder psd // hier muss variabl */;var p=n+"/"+c+"__RGB.psd";
/** run Main-function **************************************************************/run_ID(c,a,o,imageLink,p,r)}$.writeln("image: "+t),$.writeln("hPPI: "+o),$.writeln("new_imagePath: "+p),$.writeln("imageName_original: "+c),$.writeln("imagePath: "+l),$.writeln("imageFile: "+s)}}
//// FUNCTIONS ////
/*=================================================================================*/function GetFileNameOnly(e){var i=e.lastIndexOf(".");
// var myString = myString.replace(/^(\d{3}(-|_{2}))(.+)/g, "$3");  //scheidet die erste Seitenzahl ab. Es ist ein Spezialfall, gehört woanders hin
return-1==i?e:e.substr(0,i)}function getRubrik(e){try{var i=decodeURI(app.activeDocument.fullName.name);for(j=0;j<e.length;j++){var n=new RegExp(e[j][0],"g");if(i.match(n))return indd_rubrik=i.replace(n,e[j][1]),"/"+indd_rubrik}}catch(e){}}function run_ID(e,i,n,a,t,r){if(checkRGBFile(e))if(checkValidFile(i)){
// PS=1 , GigaPixel=1, Photo AI=2, stopp=3
var o=chooseInterpolationMethod(n);3!=o&&
// openAndRelinkImage(interpolieren, _imageLink, _isWoodwing);
OpenImage(o,a,t,r)}else alert("Wähle das zubearbeitende Bild aus")}function checkRGBFile(e){return new RegExp("__RGB").test(e)&&createDialog("schon vorbereitet?","ist das bild schon vorbereitet?","weiter","stopp").show()?0:1}function checkValidFile(e){return e.isValid}function chooseInterpolationMethod(e){if(e<minAufloesung)return createDialog("unter "+minAufloesung+"dpi","Das Bild hat nur "+e+" dpi","PS","GigaPixel","Photo AI","stopp").show();
// return 1;
}function createDialog(e,i){var n=new Window("dialog",e);n.add("group").add("statictext",void 0,i);for(var a=n.add("group"),t=Array.prototype.slice.call(arguments,2),r=0
// Hole die restlichen Argumente als Array von Schaltflächen
;r<t.length;r++){var o=t[r];a.add("button",void 0,o).onClick=function(e){return function(){n.close(e)}}(r)}return n}
/*=================================================================================*/function OpenImage(e,i,n,a){try{1==i.isValid&&i.constructor.name}catch(e){alert("Wähle das zubearbeitende Bild aus");
// return;
}try{i.editOriginal(),BridgeTalk_processDoc(e,i,n,a,ww_mainFolder)}catch(e){alert(e)}}
// function CreateBridgeTalkMessage(__interpolMethod) {
//     var bt = new BridgeTalk();
//     bt.target = "photoshop"; //call for cc2020 -> "photoshop-140" //cc2021 -> "photoshop-150"
//     // bt.body = ResaveInPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + "," + option_convert_8bit + "," + papier + ");";
//     bt.body = runPS.toSource() + "('" + myImagePath + "','" + myNewPath + "'," + hScale + "," + vScale + "," + ZielAufloesung + "," + minAufloesung + "," + hPPI + ",'" + __interpolMethod + "');";
//     bt.onResult = function(resObj) {}
//     bt.send(100);
// }
function BridgeTalk_processDoc(e,i,n,a,t){$.writeln("__interpolationMethod: "+e),$.writeln("____imageLink.name2: "+i.name);var r=i.name,o=new BridgeTalk;o.target="photoshop",o.body=runPS.toSource()+"('"+i+"','"+e+"','"+r+"','"+n+"','"+a+"','"+t+"');",o.send(5)}function runPS(e,i,n,a,r,o){app.documents.length>0&&(l=app.activeDocument,docs=app.documents),f=!1,t=!0,debug=!1;r="true"===r;
/*alert("__interpolationMethod: " + _interpolationMethod);
    alert("_____imageLink: " + _imageLink);
    alert("isWoodwing: " + _isWoodwing);
    alert("_imageLink.name3: " + _imageName);
    alert("ww_mainFolder: " + ww_mainFolder);
    alert("new_imagePath: " + new_imagePath);*/app.bringToFront();var l=app.documents.getByName(n);if(l)if(app.activeDocument=l,r)alert("wird Woodwing gespeichert");else{alert("wird konventioall gespeichert");try{!function(e,i,n,a,t,r,o){saveOptions=new PhotoshopSaveOptions,saveOptions.alphaChannels=n,saveOptions.annotations=a,saveOptions.embedColorProfile=t,saveOptions.layers=r,saveOptions.spotColors=o,l.saveAs(e,saveOptions,i,Extension.LOWERCASE)}(new File(a),f,t,f,t,t,f)}catch(e){alert(e)}}else alert("Kann das Bild nicht öffnen - Abbruch!")}// Prüft, ob der String mit "/" endet
check_trailingSlash.test(mainFolder)||(mainFolder+="/"),startschuss();