# LAYER.jsx

### fixMask

<button class="btn" data-clipboard-text="fixMask(_idx, _width_faktor);"></button>
{: .btn_p }

??? "fixMask(_idx, _width_faktor);"
    ``` js linenums="1"
    function fixMask(_idx, _width_faktor) {
        try {
            var r = new ActionReference();
            r.putIndex(sTID("layer"), _idx);
            var e = executeActionGet(r);
            var feather = e.getUnitDoubleValue(sTID('userMaskFeather'));
            var dens = e.getUnitDoubleValue(sTID('userMaskDensity'));
            if (feather > 0) {
                gotoLayer(_idx);
                gotoMask();
                setMaskFeatherTo(0);
                fixMaskFeather(feather * _width_faktor);
            }
            if (dens < 255) {
                gotoLayer(_idx);
                gotoMask();
                setMaskDensityTo(100);
                fixMaskDens((dens - 255) * -1);
            }
            return true;
        } catch(e) {return false;}
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMask.js)

### fixMaskDens

<button class="btn" data-clipboard-text="fixMaskDens(_dens);"></button>
{: .btn_p }

??? "fixMaskDens(_dens);"
    ``` js linenums="1"
    function fixMaskDens(_dens) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var l = new ActionList();
        var l2 = new ActionList();
        var r = new ActionReference();
    
        d.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
        r.putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
        d2.putReference(s2t("channel"), r);
        l2.putInteger(_dens);
        l2.putInteger(255);
        d2.putList(s2t("output"), l2);
        l.putObject(s2t("levelsAdjustment"), d2);
        d.putList(s2t("adjustment"), l);
        executeAction(s2t("levels"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMaskDens.js)

### fixMaskFeather

<button class="btn" data-clipboard-text="fixMaskFeather(_feather);"></button>
{: .btn_p }

??? "fixMaskFeather(_feather);"
    ``` js linenums="1"
    function fixMaskFeather(_feather) {
        var d = new ActionDescriptor();
        d.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _feather);
        executeAction(s2t("gaussianBlur"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMaskFeather.js)

### fixMask_loop

<button class="btn" data-clipboard-text="fixMaskLoop(__width_faktor);"></button>
{: .btn_p }

??? "fixMaskLoop(__width_faktor);"
    ``` js linenums="1"
    function fixMaskLoop(__width_faktor) {
        var startLayer = getActiveLayerIndex();
        var i = 1;
        while (fixMask(i,__width_faktor)) {
            i++;
        };
        gotoLayer(startLayer);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMask_loop.js)

### layer_transform
==TODO lieber "_relation" statt "_unit"==

<button class="btn" data-clipboard-text="layer_transform(_point, _moveX, _moveY, _transformX, _transformY, _unit, _linked);"></button>
{: .btn_p }

??? "layer_transform(_point, _moveX, _moveY, _transformX, _transformY, _unit, _linked);"
    ``` js linenums="1"
    function layer_transform(_point, _moveX, _moveY, _transformX, _transformY, _unit, _linked) {
    	var d = new ActionDescriptor();
    	var d2 = new ActionDescriptor();
    	var r = new ActionReference();
    
        // alert("point " + _point + "\nmoveX " + _moveX + "\nmoveY " + _moveY + "\ntransformX " + _transformX + "\ntransformY " + _transformY + "\nunit " + _unit + "\nlinked " + _linked)
    
    
        // die Positionierung ist leider buggy, oder??
        if(_point == "topleft") {var _pointX = "QCSCorner0"}
    	else if(_point == "topcenter") {var _pointX = "QCSSide0"}
    	else if(_point == "topright") {var _pointX = "QCSCorner1"}
    	else if(_point == "midleft") {var _pointX = "QCSSide3"}
    	else if(_point == "midcenter") {var _pointX = "QCSAverage"}
    	else if(_point == "midright") {var _pointX = "QCSSide1"}
    	else if(_point == "bottomleft") {var _pointX = "QCSCorner3"}
    	else if(_point == "bottomcenter") {var _pointX = "QCSSide2"}
    	else if(_point == "bottomright") {var _pointX = "QCSCorner2"}
        else {var _pointX = "QCSCorner0"}
    
    	r.putEnumerated( s2t( "layer" ), s2t( "ordinal" ), s2t( "targetEnum" ));
    	d.putReference( s2t( "null" ), r );
    	d.putEnumerated( s2t( "freeTransformCenterState" ), s2t( "quadCenterState" ), s2t(_pointX));
    	d2.putUnitDouble( s2t( "horizontal" ), s2t( "pixelsUnit" ), _moveX );
    	d2.putUnitDouble( s2t( "vertical" ), s2t( "pixelsUnit" ), _moveY );
    	d.putObject( s2t( "offset" ), s2t( "offset" ), d2 );
    
        if(_unit == "%_canvas") {
            var layer_width = doc.activeLayer.bounds[2] - doc.activeLayer.bounds[0];
            var layer_height = doc.activeLayer.bounds[3] - doc.activeLayer.bounds[1];
            var doc_layer_width = parseFloat(doc.width / layer_width * _transformX);
            var doc_layer_height = parseFloat(doc.height / layer_height * _transformY);
            // alert(doc_layer_width + " " + doc_layer_height)
            if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
    	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}
    
        } else if(_unit == "%_layer") {
            var layer_width = doc.activeLayer.bounds[2] - doc.activeLayer.bounds[0];
            var layer_height = doc.activeLayer.bounds[3] - doc.activeLayer.bounds[1];
            var doc_layer_width = parseFloat(layer_width / doc.width * _transformX * 10);
            var doc_layer_height = parseFloat(layer_height / doc.height * _transformY * 10);
            // alert(doc_layer_width + " " + doc_layer_height);
            if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
    	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}
    
        } else if(_unit == "px") {
            var doc_layer_width =  parseFloat(_transformX / doc.width * 100);
            var doc_layer_height = parseFloat(_transformY / doc.height * 100);
            // alert(doc_layer_width + " " + doc_layer_height)
            if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
    	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}
        }
    
    	if((_transformX || _transformY) && (_linked)) {d.putBoolean( s2t( "linked" ), _linked );}
    
    	d.putEnumerated( s2t( "interfaceIconFrameDimmed" ), s2t( "interpolationType" ), s2t( "bicubic" ));
    	executeAction( s2t( "transform" ), d, DialogModes.NO );
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_transform.js)

???+ a
    ```js
    var r = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;
    layer_transform("topleft", (doc.activeLayer.bounds[0] * -1), (doc.activeLayer.bounds[1] * -1), 100, 100, "%_canvas", t);
    app.preferences.rulerUnits = r;  
    ```
    
    ??? b
        * _point `topleft` `topcenter` `topright` `midleft` `midcenter` `midright` `bottomleft` `bottomcenter` `bottomright`
        * _moveX 
        * _moveY
        * _transformX `number` 
        * _transformY `number` 
        * _unit `%_canvas` `%_layer` `px`
        * _linked `hab keinen Effekt beobachtet`

### selectLayerBySelector
select Layer by Name ==TODO by IDX==

<button class="btn" data-clipboard-text="selectLayerBySelector(_selector, _add);"></button>
{: .btn_p }

??? "selectLayerBySelector(_selector, _add);"
    ``` js linenums="1"
    function selectLayerBySelector(_selector, _add) {  //TODO select by IDX
        try {
            var d = new ActionDescriptor();
            // var list = new ActionList();
            var r = new ActionReference();
    
            if (_add == "remove" || !_add) {var addX = "removeFromSelection"} else {var addX = "addToSelection"}
            r.putName(s2t("layer"), _selector);
            d.putReference(s2t("null"), r);
            d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
            d.putBoolean(s2t("makeVisible"), false);
            // list.putInteger( 65 );
            // list.putInteger( 66 );
            // d.putList( s2t( "layerID" ), list );
            executeAction(s2t("select"), d, DialogModes.NO);
        } catch (e) {}
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/layer/selectLayerBySelector.js)

!!! warning show "not documented functions"
    - check
     - getMaskVisibility
     - setLayerOpacity
     - setMaskVisibility
