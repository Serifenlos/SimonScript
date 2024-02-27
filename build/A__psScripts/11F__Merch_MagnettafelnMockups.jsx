/*!
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] Merch Magnettafel Mockups</name>
<about>Magnettafel Mockups | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
/**************/
/****************************/
/*******************************************/
/********************************************************/
/* FUNCTIONS ********************************************************/
/********************************************************/
/*******************************************/
/****************************/
/**************/
/****/
/**************/
/*************************/
/* OPTIONS *************************/
/*************************/
/**************/
/****/
const moodsFolder="/Users/adrians/Arbeit/11Freunde/Merch/Magnettafel/Moods/",outputFolder=new Folder("/Users/adrians/Arbeit/11Freunde/Merch/Magnettafel/OUTPUT"),moods=["mood01","mood02","mood03","mood04","mood05","mood06","mood07","mood08","mood09","mood10","mood11","mood12","mood13","mood14","mood15","mood16","mood17","mood18","mood19","mood20","mood21","mood22","mood23","mood24","mood25","mood26","mood27","mood28","mood29"]
/** von 1 – bis 1508 **/
/* 0 stoppt den loop */,fileList_start=1,fileList_end=9999,web_px=2400;
/*************************/
/**************/
/****/
function run(){time_start(),prefSave(),prefSet(DialogModes.NO,Units.PIXELS),inputFolder=Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");
// var fileList = inputFolder.getFiles(/.*\.pdf$/i);
// var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|pdf)$/i);
var e=inputFolder.getFiles(/.+(__70x50|__50x70).*\.(?:gif|jpe?g|[ew]mf|eps|tiff?|psd|pdf|bmp|png|pdf)$/i);outputFolder.exists||outputFolder.create();var t=new Folder(outputFolder+"/PRINT_freisteller"),o=new Folder(outputFolder+"/PRINT_hintergrund"),r=new Folder(outputFolder+"/WEB_hintergrund"),a=new Folder(outputFolder+"/WEB_weiss");if(t.exists||t.create(),o.exists||o.create(),r.exists||r.create(),a.exists||a.create(),9999>e.length)var s=e.length;else s=9999;try{for(var i=0;i<moods.length;i++){var l=new File(moodsFolder+moods[i]+".psd");app.open(l),doc=app.activeDocument,new File(t+"/_"+moods[i]+"__schatten.psd").exists||layer_checkExistence("FREISTELLER")&&(image_cut(),save__print_schatten(t,moods[i]),resetImage());for(var n=0;n<s;n++){var d=e[n],_=GetFileNameOnly(d.name),c="quer",m=new RegExp("_hoch");if(_.match(m))c="hoch";"string"!=typeof d&&(thisFile_string=d.toString());var g=thisFile_string.replace(/70x50/g,"40x30"),p=_.replace(/__70x50|__50x70/g,"").replace(/_hoch|_quer/g,"");if(new File(g).exists||(g="quer"==c?new File("~/Arbeit/11Freunde/Merch/Magnettafel/platzhalter/30x40_quer_error.jpg"):new File("~/Arbeit/11Freunde/Merch/Magnettafel/platzhalter/30x40_hoch_error.jpg")),$.writeln("thisFileName: "+_),$.writeln("thisFile_40x30: "+g),layer_checkExistence("Magnet,gross,"+c)||layer_checkExistence("Magnet,klein,"+c)){layer_checkExistence("Magnet,gross,"+c)&&(gotoLayer("Magnet,gross,"+c),SmartOject_placeItem(d)),layer_checkExistence("Magnet,klein,"+c)&&(gotoLayer("Magnet,klein,"+c),SmartOject_placeItem(g)),newFilePath=new File(o+"/"+p+"__"+moods[i]+".jpg"),saveFile_JPG(11,!0,"FormatOptions.OPTIMIZEDBASELINE","MatteType.NONE"),image_cut();var u=100*parseFloat(2400/longside());save__web_HG(r,p,moods[i],u),layer_checkExistence("FREISTELLER")&&(save__print_freisteller(t,p,moods[i]),save__web_weiss(a,p,moods[i],u))}resetImage()}resetImage()}}catch(e){alert(e)}
// emptyProtocoll();
// closeAll();
prefReset(),time_stop(start)}function save__print_freisteller(e,o,r){var a=layer_selectedIDX_get(),s=null;if(gotoLayer("FREISTELLER"),hasLayerMask()){var i=getMaskVisibility();setMaskVisibility(!0);var l=layer_getIDXbyName("SCHATTEN");s=isVisibleIDX(l);makeVisByIndex(l,!1),savePSD_v2(new File(e+"/"+o+"__"+r),t,t,t,f),
// setMaskVisibility(false);
null!=s&&makeVisByIndex(l,s),setMaskVisibility(i)}layer_selectedIDX_set(a)}function save__print_schatten(e,o){var r=layer_selectedIDX_get();gotoLayer("FREISTELLER"),hide(),gotoLayer("SCHATTEN"),makeVisible(),savePSD_v2(new File(e+"/_"+o+"__schatten"),t,t,t,f),gotoLayer("FREISTELLER"),makeVisible(),gotoLayer("SCHATTEN"),hide(),layer_selectedIDX_set(r)}function save__web_HG(e,o,r,a){SaveForWeb("JPEG",e,o+"__"+r,a,f,f,t,t,255,255,255,"Meta_no",66,t,t,0)}function save__web_weiss(e,o,r,a){var s=layer_selectedIDX_get(),i=null;if(gotoLayer("FREISTELLER"),hasLayerMask()){var l=getMaskVisibility();setMaskVisibility(!0);var n=layer_getIDXbyName("SCHATTEN");i=isVisibleIDX(n);makeVisByIndex(n,!0),gotoLayer("SCHATTEN"),makeVisible(),SaveForWeb("JPEG",e,o+"__"+r,a,f,f,t,t,255,255,255,"Meta_no",66,t,t,0),gotoLayer("FREISTELLER"),setMaskVisibility(!1),null!=i&&makeVisByIndex(n,i),gotoLayer("SCHATTEN"),hide(),gotoLayer("FREISTELLER"),setMaskVisibility(l)}layer_selectedIDX_set(s)}function image_cut(){var e=layer_selectedIDX_get();try{gotoLayer("cut"),loadSelectionOfMask(),activeDocument.selection.invert(),tassen_crop(!0),activeDocument.selection.deselect()}catch(e){}layer_selectedIDX_set(e)}function tassen_crop(e){var t=new ActionDescriptor;t.putBoolean(s2t("delete"),e),executeAction(s2t("crop"),t,DialogModes.NO)}function longside(){var e=app.activeDocument;return e.width>e.height?e.width:e.height}
/****/
/**************/
/*************************/
run();