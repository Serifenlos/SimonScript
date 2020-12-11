/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] Startschuss</name>
<about>Photoshop-Script to start every retouch | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
if(app.documents.length<=0)alert("Fehler\nÖffne zunächst ein Bild!");else{function run(){try{function e(){return!(1!=getLayersNb()||!hasBackground())}if(doc.activeLayer.kind!=LayerKind.NORMAL||getLayersNb()>=2||e()){
// if ((doc.activeLayer.kind != LayerKind.NORMAL) || (getLayersNb() >= 2) || ((getLayersNb() == 1) && (hasBackground()))) {
// alert("hier");
var s=0;
// alert(getActiveLayerIndex());
if(dialog_chooseLayer(),1===s)return!1;doc.suspendHistory("Startschuss","startschuss();")}else{if(1==debug)
// var x = "0"; // Was ist das?
return void startschuss();
// alert("dort");
doc.suspendHistory("Startschuss","startschuss();")}}catch(e){logger(arguments.callee.name),alert("Error: "+arguments.callee.name)}}
//@include "functions/basic.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/LUT-dodge.jsx";
//@include "functions/LUT-burn.jsx";
//@include "functions/dialog.jsx";
//@include "functions/ready.jsx";
// Wenn debug auf 'false' steht, wird das Skript in einem einzigen Protokoll-Schritt ausgeführt.
// const debug = true;
// debug = false;
run()}