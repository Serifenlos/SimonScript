/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F BW] Wandbild Moods</name>
<about>Wandbild Moods | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
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
/**************/
/****************************/
/*******************************************/
/********************************************************/
/* FUNCTIONS ********************************************************/
/********************************************************/
/*******************************************/
/****************************/
/**************/
// Randomize array
function shuffle(e){const o=e.length;for(var n=0;n<o;n++){var r=Math.floor((e.length-n)*Math.random()),a=e.splice(r,1);e.push(a)}return e}
//https://www.eehelp.com/question/how-to-loop-through-the-layers-of-the-children-of-a-group-with-jsx/
/** Loop through Children to find the SearchString **/
// $.writeln(layer_findChild(doc.activeLayer, "Motiv"))
function layer_findChild(e,o){for(var n=e.layers.length-1;n>=0;n--){var r=e.layers[n];if("ArtLayer"==r.typename&&r.name==o){thisLayerIDX=r.itemIndex;break}}return thisLayerIDX}
/** **/
/** Loop through LayerSets **/
// var theLayers = layer_loopChilden(doc.activeLayer, []);
// $.writeln(theLayers);
function layer_loopChilden(e,o,n,r,a,l,d,m){
// var theNumber = _parent.layers.length - 1;
// for (var m = theNumber; m >= 0; m--) {
//     var theLayer = _parent.layers[m];
//     if (theLayer.typename == "LayerSet") {
//         thisLayerIDX = theLayer.itemIndex;
//         makeVisByIndex(thisLayerIDX, true);
//         SaveForWeb("JPEG", _outputFolder, _originalName + "__" + _mood + "__" + theLayer.name + "__" + _format + "__" + _seitenverhältnis, _scale, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
//         makeVisByIndex(thisLayerIDX, false);
//     }
// };
// for (var m = theNumber; m >= 0; m--) {
for(var i=0;i<1;i++){$.writeln("processRahmen: "+[l[i]]);var s=e.layers[l[i]];if("LayerSet"==s.typename){thisLayerIDX=s.itemIndex,makeVisByIndex(thisLayerIDX,!0),$.writeln("poster: "+m),1==[l[i]]&&(layerFX__toggle(d,"innerShadow",1,"hide"),m&&(layerFX__toggle(getParentIDXfor(getParentIDXfor(thisLayerIDX)),"dropShadow",1,"hide"),layerFX__toggle(getParentIDXfor(getParentIDXfor(thisLayerIDX)),"dropShadow",2,"hide"),layerFX__toggle(getParentIDXfor(getParentIDXfor(thisLayerIDX)),"dropShadow",3,"show"))),SaveForWeb("JPEG",o,n+"___"+r+"-"+s.name,a,f,f,t,t,255,255,255,"Meta_no",66,t,t,0),
// SaveForWeb("JPEG", _outputFolder, _mood + "__rahmen" + [__randomRahmen[rahmen]] + "__" + theLayer.name + "__" + _originalName, _scale, f, f, t, t, 255, 255, 255, "Meta_no", 66, t, t, 0);
makeVisByIndex(thisLayerIDX,!1);
// nimmt das benutzte Value vom Array
var h=l.indexOf(l[i]);l.splice(h,1)}}}
/** **/
/** get Scale **/
function bw_scale(e){return parseFloat(e/app.activeDocument.width*100)}
/** **/
/** das Herz **/function processMood(e,o,n,r,a,t,l,d,m){$.writeln("processMood: "+t);var i=new File(moodsFolder+t+".psd");app.activeDocument=app.documents.getByName(decodeURI(i.name));var s=bw_scale(l);if(""!=o)var h=e+"_"+o;else h=e;gotoLayer(h),makeVisible(),gotoLayer(layer_findChild(app.activeDocument.activeLayer,"Motiv"));var _=getActiveLayerIndex();SmartOject_placeItem(n),gotoLayer(h),layer_loopChilden(app.activeDocument.activeLayer,r,a,t,s,d,_,m),resetImage()}
/** **/function closeAll(){for(;app.documents.length;)app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)}
/****/
/**************/
/*************************/
/* OPTIONS *************************/
/*************************/
/**************/
/****/Array.prototype.indexOf=function(e){for(var o=0,n=this.length;o<n;o++)if(this[o]===e)return o;return-1};var run_all=!0,run_3x2=!1,run_4x3=!1,run_1x1=!1,run_A4=!1,run_pano=!1;const outputWidth=2400,moodsFolder="/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Moods/",outputFolder=new Folder("/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/OUTPUT"),moods=["mood01","mood02","mood03","mood04","mood05","mood06","mood07","mood08","mood09","mood10","mood11","mood12","mood13"],Bilderwelt_Anzahl_Mood=5,Poster_Anzahl_Mood=3,Bilderwelt_Anzahl_Rahmen=[1,1,1,2],Poster_Anzahl_Rahmen=[1,1,0,1],fileList_start=1,fileList_end=330;
/*************************/
/**************/
/****/
function run(){time_start(),prefSave(),prefSet(DialogModes.NO,Units.PIXELS),inputFolder=Folder.selectDialog("Bitte wähle den Input-Ordner aus\n Unterordner werden nicht ausgewertet");for(
// var fileList = inputFolder.getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
// var fileList = inputFolder.getFiles(/^(?!\.).*(__45x30|__40x30|__40x40|__100x40|__A4).*\.(jpg|tif|psd|bmp|gif|png|)$/im);
// var fileList = inputFolder.getFiles(/^[^.].*(__45x30|__40x30|__40x40|__100x40|__A4).*\.(jpg|tif|psd|bmp|gif|png|)$/im);
// var fileList = inputFolder.getFiles(/^([^\.]).*(__45x30|__40x30|__40x40|__100x40|__A4).*\.(jpg|tif|psd|bmp|gif|png|)$/im);
var e=inputFolder.getFiles(/.+(__45x30|__40x30|__40x40|__100x40|__A4).*\.(?:gif|jpe?g|[ew]mf|eps|tiff?|psd|pdf|bmp|png)$/i),o=[],n=0
/* Clean the list of hidden files */;n<e.length;n++)e[n].hidden||o.push(e[n]);e=o;$.writeln("fileList.length: "+e.length)
/* write list of all files */;for(var r=0;r<e.length;r++)bw_log(decodeURI(e[r].name));if(bw_log("---\nfileList.length: "+e.length+"\n"),330>e.length)var a=e.length;else a=330;for(var t=0;t<moods.length;t++){var l=new File(moodsFolder+moods[t]+".psd");app.open(l)}outputFolder.exists||outputFolder.create();
// for (var i = 0; i < fileList.length; i++) {
for(var d=0;d<a;d++){var m=e[d],i=GetFileNameOnly(m.name);if(i.match(/^Pos_/gi)){var s=!0;$.writeln("ist Poster: "+i)}else{s=!1;$.writeln("kein Poster: "+i)}if(s){var h=randomNumber(1,moods.length,[],3,!1);$.writeln("randomMoods: "+h),randomRahmen=randomNumber(1,1,[],Poster_Anzahl_Rahmen[0],!1),// rahmenlos 
randomRahmen=randomNumber(2,5,randomRahmen,Poster_Anzahl_Rahmen[1],!1),// Passepartout
randomRahmen=randomNumber(6,9,randomRahmen,Poster_Anzahl_Rahmen[2],!1),// Schattenfuge
randomRahmen=randomNumber(1,5,randomRahmen,Poster_Anzahl_Rahmen[3],!1)}else{h=randomNumber(1,moods.length,[],5,!1);$.writeln("randomMoods: "+h),randomRahmen=randomNumber(1,1,[],Bilderwelt_Anzahl_Rahmen[0],!1),// rahmenlos 
randomRahmen=randomNumber(2,5,randomRahmen,Bilderwelt_Anzahl_Rahmen[1],!1),// Passepartout
randomRahmen=randomNumber(6,9,randomRahmen,Bilderwelt_Anzahl_Rahmen[2],!1),// Schattenfuge
randomRahmen=randomNumber(1,9,randomRahmen,Bilderwelt_Anzahl_Rahmen[3],!1)}if(randomRahmen=shuffle(randomRahmen),$.writeln("randomRahmen: "+randomRahmen),(run_all||run_3x2)&&i.match(/__45x30/g)){var _="2x3",p=new File(m);app.open(p);var u=app.activeDocument;if(originalName=decodeURI(i.replace("__45x30","").replace("__RGB","")),u.width>u.height)var c="quer";else c="hoch";var g=decodeURI(p.name);app.documents.getByName(g).close(SaveOptions.DONOTSAVECHANGES);
// for (var mood = 0; mood < moods.length; mood++) {
//     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
// }
for(t=0;t<h.length;t++)randomRahmen.length>0&&processMood(_,c,p,outputFolder,originalName,moods[h[t]-1],2400,randomRahmen,s)}if((run_all||run_4x3)&&i.match(/__40x30/g)){_="4x3",p=new File(m);app.open(p);u=app.activeDocument;if(originalName=decodeURI(i.replace("__40x30","").replace("__RGB","")),u.width>u.height)c="quer";else c="hoch";g=decodeURI(p.name);app.documents.getByName(g).close(SaveOptions.DONOTSAVECHANGES);
// for (var mood = 0; mood < moods.length; mood++) {
//     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
// }
for(t=0;t<h.length;t++)randomRahmen.length>0&&processMood(_,c,p,outputFolder,originalName,moods[h[t]-1],2400,randomRahmen,s)}if((run_all||run_1x1)&&i.match(/__40x40/g)){_="Quadrat",p=new File(m);originalName=decodeURI(i.replace("__40x40","").replace("__RGB",""));
// for (var mood = 0; mood < moods.length; mood++) {
//     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
// }
for(c="",t=0;t<h.length;t++)randomRahmen.length>0&&processMood(_,c,p,outputFolder,originalName,moods[h[t]-1],2400,randomRahmen,s)}if((run_all||run_pano)&&i.match(/__100x40/g)){_="Panorama",p=new File(m);originalName=decodeURI(i.replace("__100x40","").replace("__RGB",""));
// for (var mood = 0; mood < moods.length; mood++) {
//     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
// }
for(c="",t=0;t<h.length;t++)randomRahmen.length>0&&processMood(_,c,p,outputFolder,originalName,moods[h[t]-1],2400,randomRahmen,s)}if((run_all||run_A4)&&i.match(/__A4/g)){_="DinA",p=new File(m);app.open(p);u=app.activeDocument;if(originalName=decodeURI(i.replace("__A4","").replace("__RGB","")),u.width>u.height)c="quer";else c="hoch";g=decodeURI(p.name);app.documents.getByName(g).close(SaveOptions.DONOTSAVECHANGES);
// for (var mood = 0; mood < moods.length; mood++) {
//     processMood(format, seitenverhältnis, doc_file, outputFolder, originalName, moods[mood], outputWidth)
// }
for(t=0;t<h.length;t++)randomRahmen.length>0&&processMood(_,c,p,outputFolder,originalName,moods[h[t]-1],2400,randomRahmen,s)}}
// emptyProtocoll();
// closeAll();
prefReset(),time_stop(start)}function randomNumber(e,o,n,r,a){for(var t=0;t<r;){var l=Math.floor(Math.random()*(o-e+1))+e;-1!=n.indexOf(l)?randomNumber(e,o,n):(n.push(l),a&&n.sort((function(e,o){return e-o})),t++)}return n}
// $.writeln(randomNumber(1, 13, [], 2));
// $.writeln("5: "+array.indexOf(5))
// $.writeln("4: "+array.indexOf(4))
function bw_log(e){var o="/Users/simon/Arbeit/11Freunde/Bilderwelt_Moods/Bilderwelt_Moods.log",n=File(o);n.exists||(n=new File(o));var r=File(o);r.open("a",void 0,void 0),r.encoding="UTF8",""!==r&&(
// log_file.writeln("-----------------------");
r.writeln(e),
// log_file.writeln("");
r.close())}
// =======================================================
// dropShadow, innerShadow
// "hide" or "show"
// layerFX__toggle(176, "innerShadow", 1, "hide");
function layerFX__toggle(e,o,n,r){var a=new ActionDescriptor,t=new ActionList,l=new ActionReference;l.putIndex(s2t(o),n),l.putIndex(sTID("layer"),e),
// r.putName(s2t("layer"), "Motiv");  // select by Name
t.putReference(l),a.putList(s2t("null"),t),executeAction(s2t(r),a,DialogModes.NO)}
// =======================================================
// ich will 178 (Motiv mit Schlagschatten)
// bin auf RL 175
// $.writeln(getActiveLayerIndex());
// $.writeln(getParentIDXfor(getParentIDXfor(175)))
/****/
/**************/
/*************************/
run();