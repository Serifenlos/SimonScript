/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] maskFeatherFix_all</name>
<about>convert maskFeather with Gausscher Weichzeichner | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "./functions/basic.jsx";
//@include "./functions/utils.jsx";
//@include "./functions/layer.jsx";


if (app.documents.length > 0) {
    doc.suspendHistory('Script: maskFix_all', 'maskFix_all();')
}

function maskFix_all() {
    try {
        var i = 1;
        while (layer_checkExistence(i)) {
            fixMask(i, 1);
            i++;
        };
    } catch (e) {
        alert("error " + e)
    }
}