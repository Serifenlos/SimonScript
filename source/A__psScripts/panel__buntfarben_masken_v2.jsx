/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] Farbmaske v2</name>
<about>Farbmaske v2 | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/


//@include "functions/basic.jsx";
//@include "functions/meta.jsx";
//@include "functions/utils.jsx";
//@include "functions/layer.jsx";
//@include "functions/ready.jsx";
//@include "functions/selection.jsx";
//@include "functions/channel.jsx";
//@include "functions/LUT-maskPreview.jsx";

if (!layer_checkExistence('[helper] Farbmaske')) {
    doc.suspendHistory("[helper] Farbmaske preview", "mask_setSaturation_singleColors_create('[helper] Farbmaske', 'v2')");
} else {
    doc.suspendHistory("[helper] Farbmaske Selection", "mask_setSaturation_singleColors_create('[helper] Farbmaske')");
}
