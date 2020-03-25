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

smartObject();
nameLayer("Original");

createGroup("Einstellungen")

createLayer("levels", "normal", "AutoTonwert", "gray", true)
deleteMask()
createLayer("curves", "normal", "Gradation neutral", "gray")
deleteMask()
createGroup("Dodge & Burn")
createLayer("colorLookup", "normal", "Burn", "gray")
createLayer("colorLookup", "normal", "Dodge", "gray")
selectLayerUp()
selectLayerUp()
createLayer("selectiveColor", "normal", "Selektive Farbe", "violet")
createLayer("hueSaturation", "normal", "Sättigung Farbe", "blue")
createLayer("hueSaturation", "luminosity", "Sättigung Luminanz", "green")
createLayer("colorBalance", "normal", "Farbe in Balance", "yellowColor")
createLayer("curves", "normal", "Gradation Kontrast", "orange")
createLayer("brightnessEvent", "normal", "Hell + Kontrast", "red")
createLayer("vibrance", "normal", "Dynamik", "orange")

// createLayer("colorLookup", "normal", "Burn", "gray")






// createColorLayer("normal", "WEISS", "none", 25levels5, 255, 0);
// deleteMask();

// noProfile();



// curves
// selectiveColor
// hueSaturation
// colorBalance
// brightnessEvent
// vibrance