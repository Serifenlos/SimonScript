function dodgeburn_toggle() {
    try {
        var thisLayer = doc.activeLayer;
        var thisLayerIDX = getActiveLayerIndex();

        if (thisLayer.kind == LayerKind.COLORLOOKUP) {
            if (/burn/i.test(thisLayer.name)) {
                selectLayer("up", 1);
                if (!/dodge/i.test(doc.activeLayer.name)) {
                    gotoLayer(thisLayerIDX);
                    selectLayer("down", 1);
                    if (!/dodge/i.test(doc.activeLayer.name)) {
                        gotoLayer(thisLayerIDX);
                    }
                }

            } else if (/dodge/i.test(thisLayer.name)) {
                selectLayer("down", 1);
                if (!/burn/i.test(doc.activeLayer.name)) {
                    gotoLayer(thisLayerIDX);
                    selectLayer("up", 1);
                    if (!/burn/i.test(doc.activeLayer.name)) {
                        gotoLayer(thisLayerIDX);
                    }
                }
            }
        }

    } catch (e) {}
}