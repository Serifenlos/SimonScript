function copypaste_LayerFX(_sourceLayer, _aimLayer) {
	var startLayer_copypaste_LayerFX = layer_selectedIDX_get();
	if (isLayerFXVisible(_sourceLayer)) {
		gotoLayer_bySelector(_sourceLayer);
		copyLayerStyle();
		gotoLayer_bySelector(_aimLayer)
		pasteLayerStyle();
	}
	layer_selectedIDX_set(startLayer_copypaste_LayerFX); 
}