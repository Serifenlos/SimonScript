function select_haut(e,a,t){
// _merge = true || false
// _kind = 'Haut' || 'nicht Haut'
// _get = 'Selection' || 'Folder'
var r=layer_selectedIDX_get();if(cancel=!1,e)layer_mergeVisible(e);else{if("LayerKind.SMARTOBJECT"!=doc.activeLayer.kind&&"LayerKind.NORMAL"!=doc.activeLayer.kind)return void alert("Abruch\n Eine Haut-Makse von dieser Ebene kann nicht erstellt werden.");layer_copyLayers(),//Ebenen kopieren (Apfel J)
"LayerKind.SMARTOBJECT"==doc.activeLayer.kind&&rasterSmartObject(),layer_selectedIDX_get().length>1&&layer_mergeLayers()}nameLayer("helper__hautMask_image");for(
// move to TOP
var l=hasBackground()?0:1;layer_checkExistence(l);)l++;moveLayer("helper__hautMask_image",parseInt(l-1),"up"),gotoLayer("helper__hautMask_image"),
// }
selection_loop((function(){executeAction(sTID("a6e0kl2a-95ce-32d3-bd6b-93ma23632k91"),void 0,DialogModes.ALL)})),select_layer(),gotoLayer("helper__hautMask_image"),layer_delete(),cancel||("Selection"==t?(layer_selectedIDX_set(r),"nicht Haut"==a&&select_invert()):(gotoLayer(r[r.length-1]),selection2mask(a),"nicht Haut"==a&&(gotoMask(),invert(),gotoFill())))}