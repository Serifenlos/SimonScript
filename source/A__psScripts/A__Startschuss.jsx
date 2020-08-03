/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[GitDev] Startschuss_v3</name>
<about>Photoshop-Script to start every retouch | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>GitHub dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

if (app.documents.length <= 0) {
    alert("Fehler\nÖffne zunächst ein Bild!");
} else {
    //@include "functions/basic.jsx";
    //@include "functions/mb_Utils.jsx";
    //@include "functions/LUT-dodge.jsx";
    //@include "functions/LUT-burn.jsx";
    //@include "functions/dialog.jsx";
    //@include "functions/ready.jsx";


    // Wenn debug auf 'false' steht, wird das Skript in einem einzigen Protokoll-Schritt ausgeführt.
    // const debug = true;

    // debug = false;


    run();

    function run() {
        try {
            
            function check() {
                if((getLayersNb() == 1) && (hasBackground())) {return true} else {return false}
            }

            if ((doc.activeLayer.kind != LayerKind.NORMAL) || (getLayersNb() >= 2) || (check())) {
            // if ((doc.activeLayer.kind != LayerKind.NORMAL) || (getLayersNb() >= 2) || ((getLayersNb() == 1) && (hasBackground()))) {
                // alert("hier");
                var cancel = 0;
                dialog_chooseLayer();
                // alert(getActiveLayerIndex());
                if (cancel === 1) {
                    return false;
                }
                else {
                    doc.suspendHistory('Startschuss', 'startschuss();')
                }
            } else if (debug == true) {
                // var x = "0"; // Was ist das?
                startschuss();
                return;
            } else {
                // alert("dort");
                doc.suspendHistory('Startschuss', 'startschuss();')
            }
        } catch (e) {
            logger(arguments.callee.name);
            alert("Error: " + arguments.callee.name);
        }
    }
}