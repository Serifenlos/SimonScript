/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[GitDev] Startschuss_v3</name>
<about>Photoshop-Script to start every retouch | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>GitHub dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "functions/basic.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/LUT-dodge.jsx";
//@include "functions/LUT-burn.jsx";
// Wenn debug auf 'false' steht, wird das Skript in einem einzigen Protokoll-Schritt ausgeführt.
// const debug = true;
// debug = false;
function startschuss(){smartObject(),nameLayer("Original"),createGroup("Einstellungen","passThrough","none",100),createLayer("AutoTonwert","levels","normal","gray",100,"none",f,t),toogleVisibility(),createLayer("Gradation neutral","curves","normal","gray",100,"",f,f),deleteMask(),createGroup("Dodge & Burn","passThrough","gray",100),LUT_burn(),LUT_dodge(),selectLayerUp(),toogleOpenCloseSet(),selectLayerUp(),createLayer("Selektive Farbe","selectiveColor","normal","violet",100,"",f,f),createLayer("Sättigung Farbe","hueSaturation","normal","blue",100,"",f,f),createLayer("Sättigung Luminanz","hueSaturation","luminosity","green",100,"",f,f),createLayer("Farbe in Balance","colorBalance","normal","yellowColor",100,"",f,f),createLayer("Gradation Kontrast","curves","normal","orange",100,"",f,f),createLayer("Hell + Kontrast","brightnessEvent","normal","red",100,"",f,f),createLayer("Dynamik","vibrance","normal","orange",100,"",f,f)}function run(){if(docs.length<=0)alert("Fehler\nÖffne zunächst ein Bild!");else if(doc.activeLayer.kind==LayerKind.NORMAL)if(1!=debug)doc.suspendHistory("Startschuss","startschuss();");else{startschuss()}else alert("Fehler\nWähle eine Pixel-Ebene aus!")}run();