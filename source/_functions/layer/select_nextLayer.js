function select_nextLayer(_direction) {

    // Select Next Layer (invisible or not).jsx
// https://gist.github.com/joonaspaakko/048c9b58ccbb6e6f44c894bf4ce30b68

// select_nextLayer('down');

// _direction (↑): "up" or "above"
// _direction (↓): "down" or "below"



    var doc = app.activeDocument;
    // Doc duplication is necessary because while the History panel can record visibility change, but for some reason it doesn't do that when the visibility command comes from a script... (AFAIK)
    var tempDoc = doc.duplicate();
    var layer1 = tempDoc.activeLayer;

    // Turn background layer into a normal layer
    var lastLayer = tempDoc.layers[tempDoc.layers.length - 1];


    var layer1ID = activeLayerID();
    tempDoc.activeLayer = lastLayer;
    var bgLayerExists = lastLayer.isBackgroundLayer;
    if (bgLayerExists) {
        lastLayer.isBackgroundLayer = false;
    }
    try {
        selectLayerByID(layer1ID);
    } catch (e) { }

    // Select all layers
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    d.putReference(cTID('null'), r);
    executeAction(sTID('selectAllLayers'), d, DialogModes.NO);

    // Make active layers visible
    var d2 = new ActionDescriptor();
    var l2 = new ActionList();
    var r2 = new ActionReference();
    r2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    l2.putReference(r2);
    d2.putList(cTID('null'), l2);
    executeAction(cTID('Shw '), d2, DialogModes.NO);

    // Reselect the starting layer
    if (bgLayerExists) {
        lastLayer.isBackgroundLayer = true;
    }
    selectLayerByID(layer1ID);
    // Select next layer
    try {
        snl(_direction);
    } catch (e) { }
    // Store the layer
    var nextLayer = activeLayerID();
    tempDoc.close(SaveOptions.DONOTSAVECHANGES);
    // Try to select the next layer using its ID
    try {
        selectLayerByID(nextLayer);
    }
    // If it fails, well assume it did so because it was a background layer... and use another method for selecting that.
    catch (e) {
        var d3 = new ActionDescriptor();
        // var l3 = new ActionList();
        var r3 = new ActionReference();

        r3.putName(cTID('Lyr '), "Background");
        d3.putReference(cTID('null'), r3);
        // d3.putBoolean(cTID('MkVs'), false);
        // l3.putInteger(1);
        // d3.putList(cTID('LyrI'), l3);
        executeAction(cTID('slct'), d3, DialogModes.NO);
    }

    function snl(_direction) {

        var select;
        if (_direction == 'up' || _direction == 'above') {
            select = cTID('Frwr');
        } else if (_direction == 'down' || _direction == 'below') {
            select = cTID('Bckw');
        }

        var d = new ActionDescriptor();
        // var l = new ActionList();
        var r = new ActionReference();

        r.putEnumerated(cTID('Lyr '), cTID('Ordn'), select);
        d.putReference(cTID('null'), r);
        // d.putBoolean(cTID('MkVs'), false);
        // l.putInteger(5);
        // d.putList(cTID('LyrI'), l);
        executeAction(cTID('slct'), d, DialogModes.NO);
    }

    function activeLayerID() {
        var r = new ActionReference();

        r.putProperty(s2t("property"), s2t("layerID"));
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        return executeActionGet(r).getInteger(s2t("layerID"));
    }

    function selectLayerByID(id, add) {
        var d = new ActionDescriptor();
        var r = new ActionReference();

        add = (add == undefined) ? add = false : add;
        r.putIdentifier(cTID('Lyr '), id);
        d.putReference(cTID('null'), r);
        if (add) {
            d.putEnumerated(sTID('selectionModifier'), sTID('selectionModifierType'), sTID('addToSelection'));
        }
        d.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), d, DialogModes.NO);
    }
}