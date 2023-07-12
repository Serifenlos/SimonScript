/* OPTIONS *************/
format=["jpg","psd","tif"];var selector_RGB="__RGB",selector_RZ="__RZ",selector_frei="-frei"
/*  TODO 
    
*/,folder_RZ=Folder.selectDialog("Wo liegen die RZ-Bilder?\n Unterordner werden nicht ausgewertet"),links=app.activeDocument.allGraphics;for(i=links.length-1;i>=0;i--){var link_RGB=links[i].itemLink,regexTest=new RegExp(selector_RGB);
// if (/.*(__RGB).*/.test(link_RGB.name)) {
// alert(regexTest);
// alert(link_RGB.name);
if(regexTest.test(link_RGB.name)){var prefix=suffix="",regexPrefix=new RegExp("(.*)("+selector_RGB+")(.*)","g"),regexFrei=(prefix=link_RGB.name.replace(regexPrefix,"$1"),new RegExp(selector_frei));if(regexFrei.test(link_RGB.name))
// var suffix = GetFileNameOnly(link_RGB.name).replace(/(.*)(__RGB)(.*)/, "$3");
var regexSuffix=new RegExp("(.*)("+selector_RGB+")(.*)","g"),suffix=GetFileNameOnly(link_RGB.name).replace(regexSuffix,"$3");function setLink_RZ(e){return new File(folder_RZ+"/"+prefix+selector_RZ+suffix+"."+e)}for(j=0;j<format.length;j++)if(setLink_RZ(format[j]).exists){link_RGB.relink(setLink_RZ(format[j]));try{link_RGB.status==LinkStatus.linkOutOfDate&&link_RGB.update()}catch(e){}}}}function GetFileNameOnly(e){var r=e.lastIndexOf(".");return-1==r?e:e.substr(0,r)}alert("alle RZs verknüpft");