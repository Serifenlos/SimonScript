/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[dev] dev_11Fwandbildmoods</name>
<about>test__dev_11Fwandbildmoods | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
function layer_selectNoLayers(){var e=new ActionDescriptor,t=new ActionReference;t.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),e.putReference(s2t("null"),t),executeAction(s2t("selectNoLayers"),e,DialogModes.NO)}
// $.writeln(layer_selectedIDX_get());
// selectLayerBySelector("hoch", t);
// app.runMenuItem(stringIDToTypeID('selectNoLayers'));
// var idxmm = layer_getIDXbyString("hoch");
// $.writeln("idxmm");
// makeVisByIndex(idxmm, f);
// layer_selectNoLayers();
// selectLayerBySelector("panorama", t);
// nameLayer("Schatten");
// layer_selectNoLayers();
// selectLayerBySelector("quadrat", t);
// nameLayer("vorlage_quadrat");
// layer_selectNoLayers();
// selectLayerBySelector("quer", t);
// nameLayer("vorlage_quer");
// layer_selectNoLayers();
// hide();
// layer_selectNoLayers();
// selectLayerBySelector("MOOD", t);
// loopOpenDocs();
function loopOpenDocs(){for(var e=app.activeDocument,r=0;r<app.documents.length;r++){app.activeDocument=app.documents[r];app.activeDocument;try{layer_selectNoLayers(),selectLayerBySelector("Vorlage",t),nameLayer("vorlage"),layer_selectNoLayers(),selectLayerBySelector("MOOD",t)}catch(e){}}app.activeDocument=e}
/** Bilderwelt Korrektur Rahmendicke **/
// bw_KorrekturRahmendicke_run(1.6);
function bw_KorrekturRahmendicke_run(e){doc.suspendHistory("Rahmendicke "+e,"bw_KorrekturRahmendicke("+e+");")}
// doc.suspendHistory('Rahmendicke 1.3', 'bw_KorrekturRahmendicke(1.3);')
function bw_KorrekturRahmendicke(e){var t=100*e,r=100/e;bw_transform_ContentAwareScale(0,0,t,t,!0,!0,!0,100),bw_transform_free(0,0,r,r,!0)}function bw_transform_ContentAwareScale(e,t,r,o,n,a,i,s){var l=new ActionDescriptor,c=new ActionDescriptor,p=new ActionReference;p.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),l.putReference(s2t("null"),p),l.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSCorner3")),c.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),e),c.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),t),l.putObject(s2t("offset"),s2t("offset"),c),l.putUnitDouble(s2t("width"),s2t("percentUnit"),r),l.putUnitDouble(s2t("height"),s2t("percentUnit"),o),l.putBoolean(s2t("linked"),n),l.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),l.putBoolean(s2t("contentAware"),i),l.putDouble(s2t("amount"),s),executeAction(s2t("transform"),l,DialogModes.NO)}function bw_transform_free(e,t,r,o,n){var a=new ActionDescriptor,i=new ActionDescriptor,s=new ActionReference;s.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),a.putReference(s2t("null"),s),a.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSCorner3")),i.putUnitDouble(s2t("horizontal"),s2t("distanceUnit"),e),i.putUnitDouble(s2t("vertical"),s2t("distanceUnit"),t),a.putObject(s2t("offset"),s2t("offset"),i),a.putUnitDouble(s2t("width"),s2t("percentUnit"),r),a.putUnitDouble(s2t("height"),s2t("percentUnit"),o),a.putBoolean(s2t("linked"),n),a.putEnumerated(s2t("interfaceIconFrameDimmed"),s2t("interpolationType"),s2t("bicubic")),executeAction(s2t("transform"),a,DialogModes.NO)}
/** **/
/** Loop through LayerSets **/
// var theLayers = collectLayers(app.activeDocument.activeLayer, []);
// $.writeln(theLayers);
////// function collect all layers //////
function collectLayers(e,r){if(!r)r=new Array;for(var o=e.layers.length-1;o>=0;o--){var n=e.layers[o];
// theLayer.name = theParent.name + "_" + m;
// apply the function to layersets;
"ArtLayer"==n.typename||(r=collectLayers(n,r),
// this line includes the layer groups;
// allLayers.push(theLayer.id);
// if (theLayer.typename == "LayerSet") {
// allLayers.push(theLayer.itemIndex);
// }
thisLayerIDX=n.itemIndex,makeVisByIndex(thisLayerIDX,!0),
// alert("stop");
SaveForWeb("JPEG","/Users/simon/Arbeit/__temp","Grau+Farbverlauf_HG+++"+thisLayerIDX,f,f,f,t,t,255,255,255,"Meta_ck",66,t,t,0),makeVisByIndex(thisLayerIDX,!1))}return r}
/** **/
/** Loop through Children to find the SearchString **/
// $.writeln(layer_findChild(doc.activeLayer, "Motiv"))
function layer_findChild(e,t){for(var r=e.layers.length-1;r>=0;r--){var o=e.layers[r];if("ArtLayer"==o.typename&&o.name==t){thisLayerIDX=o.itemIndex;break}}return thisLayerIDX}
/** **/
/** Loop through LayerSets **/
// var theLayers = layer_loopChilden(doc.activeLayer, []);
// $.writeln(theLayers);
function layer_loopChilden(e,r,o,n,a,i,s,l){if(!r)r=new Array;for(var c=e.layers.length-1;c>=0;c--){var p=e.layers[c];"ArtLayer"==p.typename||(r=layer_loopChilden(p,r),thisLayerIDX=p.itemIndex,makeVisByIndex(thisLayerIDX,!0),SaveForWeb("JPEG",n,a+"__"+i+"__"+p.name+"__"+o+"__"+s,l,f,f,t,t,255,255,255,"Meta_no",66,t,t,0),makeVisByIndex(thisLayerIDX,!1))}return r}
/** **/
/** get Scale **/
function bw_scale(e){return parseFloat(e/app.activeDocument.width*100)}
/** **/
/** das Herz **/function processMood(e,t,r,o,n,a,i){var s=new File(moodsFolder+a+".psd");app.activeDocument=app.documents.getByName(decodeURI(s.name));var l=bw_scale(i);if(""!=t)var c=e+"_"+t;else c=e;gotoLayer(c),makeVisible(),gotoLayer(layer_findChild(app.activeDocument.activeLayer,"Motiv")),SmartOject_placeItem(r),gotoLayer(c),layer_loopChilden(app.activeDocument.activeLayer,[],e,o,n,a,t,l),resetImage()}
/** **/function closeAll(){for(;app.documents.length;)app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)}var run_all=!0,run_3x2=!1,run_4x3=!1,run_1x1=!1,run_DinAquer=!1,run_DinAhoch=!1,run_pano=!1;const outputWidth=2400,moodsFolder="/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Moods/",outputFolder=new Folder("/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/OUTPUT++"),moods=["mood01","mood02"]
/** von 1 – bis 2298 **/,fileList_start=1,fileList_end=1;
/****/
/**************/
/*************************/
// run();
/*************************/
/**************/
/****/
//ings sind es 2298 files ??
function run(){time_start(),prefSave(),prefSet(DialogModes.NO,Units.PIXELS),inputFolder=Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");
// var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
// $.writeln("1: "+fileList.length);
var e=inputFolder.getFiles(/.*(__45x30|__40x30|__40x40|__100x40).*\.(jpg|tif|psd|bmp|gif|png|)$/i);if($.writeln("fileList.length: "+e.length),1>e.length)var t=e.length;else t=1;$.writeln("fileList_length: "+t);for(var r=0;r<moods.length;r++){var o=new File(moodsFolder+moods[r]+".psd");app.open(o)}outputFolder.exists||outputFolder.create();
// for (var i = 0; i < fileList.length; i++) {
for(var n=0;n<t;n++){var a=e[n],i=GetFileNameOnly(a.name);if((run_all||run_3x2)&&i.match(/__45x30/g)){var s="2x3",l=new File(a);app.open(l);var c=app.activeDocument;if(originalName=decodeURI(i.replace("__45x30","").replace("__RGB","")),c.width>c.height)var p="quer";else p="hoch";var u=decodeURI(l.name);app.documents.getByName(u).close(SaveOptions.DONOTSAVECHANGES);for(r=0;r<moods.length;r++)processMood(s,p,l,outputFolder,originalName,moods[r],2400)}if((run_all||run_4x3)&&i.match(/__40x30/g)){s="4x3",l=new File(a);app.open(l);c=app.activeDocument;if(originalName=decodeURI(i.replace("__40x30","").replace("__RGB","")),c.width>c.height)p="quer";else p="hoch";u=decodeURI(l.name);app.documents.getByName(u).close(SaveOptions.DONOTSAVECHANGES);for(r=0;r<moods.length;r++)processMood(s,p,l,outputFolder,originalName,moods[r],2400)}if((run_all||run_1x1)&&i.match(/__40x40/g)){s="Quadrat",l=new File(a);app.open(l);c=app.activeDocument;originalName=decodeURI(i.replace("__40x40","").replace("__RGB",""));p="",u=decodeURI(l.name);app.documents.getByName(u).close(SaveOptions.DONOTSAVECHANGES);for(r=0;r<moods.length;r++)processMood(s,p,l,outputFolder,originalName,moods[r],2400)}if((run_all||run_pano)&&i.match(/__100x40/g)){s="Panorama",l=new File(a);app.open(l);c=app.activeDocument;originalName=decodeURI(i.replace("__100x40","").replace("__RGB",""));p="",u=decodeURI(l.name);app.documents.getByName(u).close(SaveOptions.DONOTSAVECHANGES);for(r=0;r<moods.length;r++)processMood(s,p,l,outputFolder,originalName,moods[r],2400)}}emptyProtocoll(),closeAll(),prefReset(),time_stop(start)}
// hide();
// function hide() {
// 	var s2t = function (s) {
// 		return app.stringIDToTypeID(s);
// 	};
// 	var descriptor = new ActionDescriptor();
// 	var list = new ActionList();
// 	var reference = new ActionReference();
// 	reference.putIndex( s2t( "gradientFill" ), 1 );
// 	reference.putName( s2t( "layer" ), "Motiv" );
// 	list.putReference( reference );
// 	descriptor.putList( s2t( "null" ), list );
// 	executeAction( s2t( "hide" ), descriptor, DialogModes.NO );
// }