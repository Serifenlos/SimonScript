/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[panel] LayerExpand</name>
<about>Expand actice Layer to docSize | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>panel</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
//@include "functions/basic.jsx";
//@include "functions/utils.jsx";
//@include "functions/layer.jsx";
//@include "functions/save.jsx";
//@include "functions/ready.jsx";
var r=app.preferences.rulerUnits;app.preferences.rulerUnits=Units.PIXELS,layer_transform("topleft",-1*doc.activeLayer.bounds[0],-1*doc.activeLayer.bounds[1],100,100,"%_canvas",t),app.preferences.rulerUnits=r;