function select_haut(_merge, _kind, _get) {
	// _merge = true || false
	// _kind = 'Haut' || 'nicht Haut'
	// _get = 'Selection' || 'Folder'

	var startIDXs = layer_selectedIDX_get();
	cancel = false;

	if (_merge) {
		layer_mergeVisible(_merge);
	} else {

		if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT" || doc.activeLayer.kind == "LayerKind.NORMAL") {

			layer_copyLayers(); //Ebenen kopieren (Apfel J)
			if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
				rasterSmartObject();
			}
			if (layer_selectedIDX_get().length > 1) {
				layer_mergeLayers(); //auf eine Ebene reduzieren (Apfel E)
			}
		} else {
			alert("Abruch\n Eine Haut-Makse von dieser Ebene kann nicht erstellt werden.");
			return;
		}
	}

	nameLayer("helper__hautMask_image");

	// move to TOP
	var i = hasBackground() ? 0 : 1;
	while (layer_checkExistence(i)) {
		i++;
	};
	moveLayer("helper__hautMask_image", parseInt(i - 1), "up");
	gotoLayer("helper__hautMask_image");
	// }

	selection_loop(function () {
		executeAction(sTID('a6e0kl2a-95ce-32d3-bd6b-93ma23632k91'), undefined, DialogModes.ALL);
	});


	select_layer();
	gotoLayer("helper__hautMask_image");
	layer_delete();


	if (!cancel) {
		if (_get == "Selection") {
			layer_selectedIDX_set(startIDXs);
			if (_kind == "nicht Haut") {
				select_invert();
			}
		} else {
			gotoLayer(startIDXs[startIDXs.length - 1])
			selection2mask(_kind);
            setMaskFeatherTo(6);    //weiche Maske
			if (_kind == "nicht Haut") {
				gotoMask();
				invert();
				gotoFill();
			}
		}
	}
}