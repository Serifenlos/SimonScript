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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMask.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMaskDens.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMaskFeather.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/fixMask_loop.js)

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
            var layer_width = app.activeDocument.activeLayer.bounds[2] - app.activeDocument.activeLayer.bounds[0];
            var layer_height = app.activeDocument.activeLayer.bounds[3] - app.activeDocument.activeLayer.bounds[1];
            var doc_layer_width = parseFloat(app.activeDocument.width / layer_width * _transformX);
            var doc_layer_height = parseFloat(app.activeDocument.height / layer_height * _transformY);
            // alert(doc_layer_width + " " + doc_layer_height)
            if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
    	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}
    
        } else if(_unit == "%_layer") {
            var layer_width = app.activeDocument.activeLayer.bounds[2] - app.activeDocument.activeLayer.bounds[0];
            var layer_height = app.activeDocument.activeLayer.bounds[3] - app.activeDocument.activeLayer.bounds[1];
            var doc_layer_width = parseFloat(layer_width / app.activeDocument.width * _transformX * 10);
            var doc_layer_height = parseFloat(layer_height / app.activeDocument.height * _transformY * 10);
            // alert(doc_layer_width + " " + doc_layer_height);
            if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
    	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}
    
        } else if(_unit == "px") {
            var doc_layer_width =  parseFloat(_transformX / app.activeDocument.width * 100);
            var doc_layer_height = parseFloat(_transformY / app.activeDocument.height * 100);
            // alert(doc_layer_width + " " + doc_layer_height)
            if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
    	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}
        }
    
    	if((_transformX || _transformY) && (_linked)) {d.putBoolean( s2t( "linked" ), _linked );}
    
    	d.putEnumerated( s2t( "interfaceIconFrameDimmed" ), s2t( "interpolationType" ), s2t( "bicubic" ));
    	executeAction( s2t( "transform" ), d, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_transform.js)

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
select Layer by Name or IDX

<button class="btn" data-clipboard-text="selectLayerBySelector(_selector, _add);"></button>
{: .btn_p }

??? "selectLayerBySelector(_selector, _add);"
    ``` js linenums="1"
    function selectLayerBySelector(_selector, _add) {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();
    
            if (_add == "remove" || !_add) {var addX = "removeFromSelection"} else {var addX = "addToSelection"}
            if (isNaN(_selector)) {r.putName(s2t("layer"), _selector)}
            else {r.putIndex(s2t("layer"), _selector)}
            d.putReference(s2t("null"), r);
            d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
            d.putBoolean(s2t("makeVisible"), false);
            executeAction(s2t("select"), d, DialogModes.NO);
        } catch (e) {}
    }
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/selectLayerBySelector.js)

???+ a
    ```js
    selectLayerBySelector("Original", "remove");
    ```
    
    ??? b
        * _selector `LayerName` `IDX`
        * _add `add` `remove`

### selectLayerByID
select Layer by ID

<button class="btn" data-clipboard-text="selectLayerByID(_id, _add);"></button>
{: .btn_p }

??? "selectLayerByID(_id, _add);"
    ``` js linenums="1"
    function selectLayerByID(_id, _add) {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();
    
            if (_add == "remove" || !_add) {
                var addX = "removeFromSelection"
            } else {
                var addX = "addToSelection"
            }
            r.putIdentifier(s2t("layer"), _id)
            d.putReference(s2t("null"), r);
            d.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t(addX));
            d.putBoolean(s2t("makeVisible"), false);
            executeAction(s2t("select"), d, DialogModes.NO);
        } catch (e) {
            // alert("error selectLayerByID: " + e)
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/selectLayerByID.js)

???+ a
    ```js
    selectLayerByID(1, "add");
    ```
    
    ??? b
        * _id `number`
        * _add `add` `remove`

### getMaskVisibility

<button class="btn" data-clipboard-text="getMaskVisibility();"></button>
{: .btn_p }

??? "getMaskVisibility();"
    ``` js linenums="1"
    function getMaskVisibility() {
        var r = new ActionReference();
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        return executeActionGet(r).getBoolean(s2t("userMaskEnabled"));
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/getMaskVisibility.js)

### setLayerOpacity

<button class="btn" data-clipboard-text="setLayerOpacity(_opacity);"></button>
{: .btn_p }

??? "setLayerOpacity(_opacity);"
    ``` js linenums="1"
    function setLayerOpacity(_opacity) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(s2t("null"), r);
        d2.putUnitDouble(s2t("opacity"), s2t("percentUnit"), _opacity);
        d.putObject(s2t("to"), s2t("layer"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/setLayerOpacity.js)

### setMaskVisibility

<button class="btn" data-clipboard-text="setMaskVisibility(_set);"></button>
{: .btn_p }

??? "setMaskVisibility(_set);"
    ``` js linenums="1"
    function setMaskVisibility(_set) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
    
        if (_set == false || _set == "hide") {
            var _setX = false
        } else if (_set == true || _set == "show") {
            var _setX = true
        } else if (_set == "toggle" || _set == "X") {
            if (getMaskVisibility()) {
                var _setX = false
            } else {
                var _setX = true
            }
        }
    
        try {
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            d.putReference(s2t("null"), r);
            d2.putBoolean(s2t("userMaskEnabled"), _setX);
            d.putObject(s2t("to"), s2t("layer"), d2);
            executeAction(s2t("set"), d, DialogModes.NO);
        } catch (e) {}
    }
    
    // setMaskVisibility(true)
    // setMaskVisibility(false)
    // setMaskVisibility("toggle");
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/setMaskVisibility.js)

### checkExistence

<button class="btn" data-clipboard-text="layer_checkExistence(_idx);"></button>
{: .btn_p }

??? "layer_checkExistence(_idx);"
    ``` js linenums="1"
    // function layer_checkExistence(_idx) {
    //     try {
    //         var r = new ActionReference();
    //         r.putProperty(s2t("property"), s2t("itemIndex"));
    //         r.putIndex(s2t("layer"), _idx);
    //         var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
    // }
    
    // check by IDX or name
    function layer_checkExistence(_input) {
        try {
            var r = new ActionReference();
            r.putProperty(s2t("property"), s2t("itemIndex"));
            if (typeof _input == "number") {
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input == "string") {
                r.putName(s2t('layer'), _input);
            }
            var getLayerIDX = executeActionGet(r).getInteger(s2t("itemIndex"));
            return true;
        } catch (e) {
            return false;
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_checkExistence.js)

### getIDXbyString

<button class="btn" data-clipboard-text="layer_getIDXbyString(_string);"></button>
{: .btn_p }

??? "layer_getIDXbyString(_string);"
    ``` js linenums="1"
    function layer_getIDXbyString(_string) {
        var i = 1;
        var layerIDX_array = [];
        while (layer_checkExistence(i)) {
            try {
                var regex = new RegExp(_string, 'g');
                if (layer_getName(i).match(regex)) {
                    layerIDX_array.push(i)
                }
            } catch (e) {}
            i++;
        };
        return layerIDX_array;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_getIDXbyString.js)

### getName

<button class="btn" data-clipboard-text="layer_getName(_idx);"></button>
{: .btn_p }

??? "layer_getName(_idx);"
    ``` js linenums="1"
    function layer_getName(_idx) {
        try {
            var ref = new ActionReference();
            ref.putIndex(charIDToTypeID("Lyr "), _idx);
            var layerDesc = executeActionGet(ref);
            var theName = layerDesc.getString(stringIDToTypeID("name"));
            return theName;
        } catch (e) {
            return e;
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_getName.js)

### solidColorHSB_change

<button class="btn" data-clipboard-text="layer_solidColorHSB_change(_h, _s, _b);"></button>
{: .btn_p }

??? "layer_solidColorHSB_change(_h, _s, _b);"
    ``` js linenums="1"
    function layer_solidColorHSB_change(_h, _s, _b) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var d3 = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putEnumerated(s2t("contentLayer"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(s2t("null"), r);
    
        d3.putUnitDouble(s2t('hue'), s2t('angleUnit'), _h);
        d3.putDouble(s2t('saturation'), _s);
        d3.putDouble(s2t('brightness'), _b);
        d2.putObject(s2t('color'), s2t('HSBColorClass'), d3);
    
        d.putObject(s2t("to"), s2t("solidColorLayer"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_solidColorHSB_change.js)

### layer_selectedIDX_get
***array***
get array of selected Layers by IDX

<button class="btn" data-clipboard-text="layer_selectedIDX_get();"></button>
{: .btn_p }

??? "layer_selectedIDX_get();"
    ``` js linenums="1"
    function layer_selectedIDX_get() {
        var selectedLayers = [];
        var ref = new ActionReference();
        ref.putEnumerated(stringIDToTypeID('document'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'));
        var desc = executeActionGet(ref);
        if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
            desc = desc.getList(stringIDToTypeID('targetLayers'));
            for (var i = 0, c = desc.count; i < c; i++) {
                hasBackground() ? selectedLayers.push(desc.getReference(i).getIndex()) : selectedLayers.push(desc.getReference(i).getIndex() + 1);
            }
        }
        return selectedLayers;
    };
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_selectedIDX_get.js)

### layer_selectedID_get
***array***
get Array of selected Layers by ID

<button class="btn" data-clipboard-text="layer_selectedID_get();"></button>
{: .btn_p }

??? "layer_selectedID_get();"
    ``` js linenums="1"
    function layer_selectedID_get() {
        var selectedLayers = [];
        var ref = new ActionReference();
        ref.putEnumerated(stringIDToTypeID('document'), stringIDToTypeID('ordinal'), stringIDToTypeID('targetEnum'));
        var desc = executeActionGet(ref);
        if (desc.hasKey(stringIDToTypeID('targetLayers'))) {
            desc = desc.getList(stringIDToTypeID('targetLayers'));
            for (var i = 0, c = desc.count; i < c; i++) {
                ref2 = new ActionReference();
                hasBackground() ? ref2.putIndex(s2t('layer'), desc.getReference(i).getIndex()) : ref2.putIndex(s2t('layer'), desc.getReference(i).getIndex() + 1);
                desc2 = executeActionGet(ref2);
                selectedLayers.push(desc2.getInteger(stringIDToTypeID("layerID")));
            }
        }
        return selectedLayers;
    };
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_selectedID_get.js)

### layer_selectedIDX_set
***action***
select Layers by Array of IDX

<button class="btn" data-clipboard-text="layer_selectedIDX_set(_array);"></button>
{: .btn_p }

??? "layer_selectedIDX_set(_array);"
    ``` js linenums="1"
    function layer_selectedIDX_set(_array) {
        try {
            selectLayers("selectNoLayers");
            if (_array.length > 0) {
                for (var j = 0; j < _array.length; j++) {
                    selectLayerBySelector(_array[j], t);
                }
            }
        } catch (e) {
            selectLayers("selectNoLayers");
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_selectedIDX_set.js)

???+ a
    ```js
    layer_selectedIDX_set(startLayer);
    ```

### layer_selectedID_set
***action***
select Layers by Array of ID

<button class="btn" data-clipboard-text="layer_selectedID_set(_array);"></button>
{: .btn_p }

??? "layer_selectedID_set(_array);"
    ``` js linenums="1"
    function layer_selectedID_set(_array) {
        selectLayers("selectNoLayers");
    
        try {var _array = arrayCorrect(_array)}
        catch(e) {}
    
        try {
            if (_array.length > 0) {
                for (var j = 0; j < _array.length; j++) {
                    selectLayerByID(_array[j], t);
                }
            }
        } catch (e) {
            alert("error layer_selectedID_set: " + e)
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_selectedID_set.js)

???+ a
    ```js
    layer_selectedID_set(getMeta_2("startID"));
    ```

### layer_getSolidFillColor

<button class="btn" data-clipboard-text="layer_getSolidFillColor();"></button>
{: .btn_p }

??? "layer_getSolidFillColor();"
    ``` js linenums="1"
    function layer_getSolidFillColor() {
        var colors_layer = [];
        var r = new ActionReference();
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        var desc = executeActionGet(r)
        var adjList = desc.getList(s2t('adjustment'));
        var adjDesc = adjList.getObjectValue(0);
        var colorDesc = adjDesc.getObjectValue(s2t('color'));
        colors_layer.push(Math.round(colorDesc.getDouble(s2t('red'))));
        colors_layer.push(Math.round(colorDesc.getDouble(s2t('green'))));
        colors_layer.push(Math.round(colorDesc.getDouble(s2t('blue'))));
        return colors_layer;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_getSolidFillColor.js)

### checkTiefenLichter_create

<button class="btn" data-clipboard-text="checkTiefenLichter_create(__value);"></button>
{: .btn_p }

??? "checkTiefenLichter_create(__value);"
    ``` js linenums="1"
    function checkTiefenLichter_create(__value) {
        var startLayer = getLayerName(getActiveLayerIndex());
        createGroup("check " + __value + "", "passThrough", "none", 100, f);
        createColorLayer("Tiefen_check", "normal", "none", 100, "none", 0, 0, 255);
        blendif("current", 0, 0, 0 + __value, 0 + __value);
        createColorLayer("Lichter_check", "normal", "none", 100, "none", 255, 0, 0);
        blendif("current", 255 - __value, 255 - __value, 255, 255)
        gotoLayer("check " + __value + "");
        toogleOpenCloseSet();
        // hide();
        if (layer_checkExistence("nachher")) {
            moveLayer("check " + __value + "", "nachher", "up");
            gotoLayer("check " + __value + "");
            moveLayer3("down", 1);
        } else {
            // move to TOP
            var i = hasBackground() ? 0 : 1;
            while (layer_checkExistence(i)) {
                i++;
            };
            moveLayer("check " + __value + "", parseInt(i - 1), "up");
        }
        gotoLayer(startLayer);
    }
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/checkTiefenLichter_create.js)

### checkTiefenLichter_create_button

<button class="btn" data-clipboard-text="checkTiefenLichter_create_button(_value);"></button>
{: .btn_p }

??? "checkTiefenLichter_create_button(_value);"
    ``` js linenums="1"
    function checkTiefenLichter_create_button(_value) {
        try {
            if (!layer_checkExistenceByRegex("check ")) {
                try {
                    doc.suspendHistory("Create checkTiefenLichter", "checkTiefenLichter_create(" + _value + ")")
                } catch (e) {
                    alert("Error1:" + e)
                };
            } else {
                toogleVisibility("check ")
            }
        } catch (e) {
            alert("Error2:" + e)
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/checkTiefenLichter_create_button.js)

### checkTiefenLichter_edit

<button class="btn" data-clipboard-text="checkTiefenLichter_edit(_real, __value);"></button>
{: .btn_p }

??? "checkTiefenLichter_edit(_real, __value);"
    ``` js linenums="1"
    function checkTiefenLichter_edit(_real, __value) {
        blendif_check_steps = [];
        blendif_check_value = [];
        layer_blendif_edit(_real, layer_getIDXbyString("Tiefen_check")[0], 0, __value);
        layer_blendif_edit(_real, layer_getIDXbyString("Lichter_check")[0], -1 * (__value), 0);
    
        if (_real) {
            // sort to get the lowest value //to name the groupe
            blendif_check_steps.sort(function(a, b) {
                return a - b
            });
            layer_renameByIDX(layer_getIDXbyString("check ")[0], "check " + blendif_check_steps[0]);
        } else {
            if (__value >= 0) {
                // sort to get the highest value //for the protocol
                blendif_check_value.sort(function(a, b) {
                    return b - a
                });
            } else {
                // sort to get the lowest value
                blendif_check_value.sort(function(a, b) {
                    return a - b
                });
            }
        }
        return blendif_check_value[0];
    }
    
    // function getLayerNameByIndex( idx ) { 
    //     var ref = new ActionReference(); 
    //     ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'Nm  ' )); 
    //     ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
    //     return executeActionGet(ref).getString(charIDToTypeID( 'Nm  ' ));; 
    // }
    
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/checkTiefenLichter_edit.js)

### checkTiefenLichter_edit_button

<button class="btn" data-clipboard-text="checkTiefenLichter_edit_button(_value);"></button>
{: .btn_p }

??? "checkTiefenLichter_edit_button(_value);"
    ``` js linenums="1"
    function checkTiefenLichter_edit_button(_value) {
        try {
            if (layer_checkExistenceByRegex("check")) {
                try {
                    var _value = parseInt(check_lastProtocolStep()) + _value;
                    // if (check_lastProtocolStep() != 0) {
                    //     undoSteps(1); 
                    // }
    
                    doc.suspendHistory("TiefenLichter Check " + checkTiefenLichter_protocol(checkTiefenLichter_edit(false, _value)) + checkTiefenLichter_edit(false, _value) + " ", "checkTiefenLichter_edit(true, " + _value + ");")
                } catch (e) {
                    alert("Error1:" + e)
                };
            }
        } catch (e) {
            alert("Error2:" + e)
        }
    }
    
    
    var checkTiefenLichter_protocol = function(n) {
        if(n >>> 0 === parseFloat(n)) {
            return "+";
        } else {
            return "";
        }
    }
    
    var check_lastProtocolStep = function() {
        var hsLength = doc.historyStates.length;
        var lastProtocolStep = doc.historyStates[hsLength - 1].name
        var find = new RegExp("^TiefenLichter Check ");
        if (lastProtocolStep.match(find)) {
            var ckeckTiefenLichter_last = parseInt(lastProtocolStep.replace(/(TiefenLichter Check )([-+]\d)/g, "$2"));
            // TODO hier hüpft der GruppenName
            // der undoStep muss tiefer vergraben werden
            undoSteps(1); 
            return ckeckTiefenLichter_last;
        } else {
            return 0;
        }
    }
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/checkTiefenLichter_edit_button.js)

### layer_blendif_edit

<button class="btn" data-clipboard-text="layer_blendif_edit(__real, _idx, _lights, _shadows);"></button>
{: .btn_p }

??? "layer_blendif_edit(__real, _idx, _lights, _shadows);"
    ``` js linenums="1"
    function layer_blendif_edit(__real, _idx, _lights, _shadows) {
        var __shadows = layer_blendif_get(_idx)[2] + _shadows;
        var __lights = layer_blendif_get(_idx)[0] + _lights;
    
        var i = 0;
        if (__shadows < 0) {
            var i = 1;
            while (__shadows + i < 0) {
                i++;
            }
            var __shadows = __shadows + i;
        }
    
        var j = 0;
        if (__lights > 255) {
            var j = 1;
            while (__lights - j > 255) {
                j++;
            }
            var __lights = __lights - j;
        }
        // alert("tiefen->" + __shadows + " lichter->" + __lights)
        if (__real) {
            blendif(
                _idx,
                __lights,
                __lights,
                __shadows,
                __shadows
            )
            blendif_check_steps.push(0 + __shadows);
            blendif_check_steps.push(255 - __lights);
        }
    
        blendif_check_value.push(_shadows + i);
        blendif_check_value.push(-1 * (_lights - j));
        return;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_blendif_edit.js)

### layer_blendif_get

<button class="btn" data-clipboard-text="layer_blendif_get(_idx);"></button>
{: .btn_p }

??? "layer_blendif_get(_idx);"
    ``` js linenums="1"
    // https://community.adobe.com/t5/photoshop-ecosystem-discussions/find-out-if-any-blending-options-are-applied-to-a-layer/m-p/11201734#M338629
    function layer_blendif_get(_idx) {
        try {
            var r = new ActionReference();
            var d = new ActionDescriptor();
            var array = [];
    
            r.putProperty(s2t("property"), s2t("json"));
            if (!isNaN(_idx)) {
                r.putIndex(s2t("layer"), _idx)
            } else {
                r.putEnumerated(s2t('layer'), s2t('ordinal'), s2t('targetEnum'))
            }
            d.putReference(s2t("null"), r);
            eval("var json=" + executeAction(s2t("get"), d, DialogModes.NO).getString(s2t("json")));
    
            //TODO oh my god - wie bekomme ich die Anzahl der Parents in den Call ??
            //TODO und warum kommt der json-Output misformatiert ??
    
            var parents = loopParentsIDXfor(_idx).length;
            if (parents == 0) {
                var call = json.layers[0]
            } else if (parents == 1) {
                var call = json.layers[0].layers[0]
            } else if (parents == 2) {
                var call = json.layers[0].layers[0].layers[0]
            } else if (parents == 3) {
                var call = json.layers[0].layers[0].layers[0].layers[0]
            } else if (parents == 4) {
                var call = json.layers[0].layers[0].layers[0].layers[0].layers[0]
            } else if (parents == 5) {
                var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
            } else if (parents == 6) {
                var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
            } else if (parents == 7) {
                var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
            } else if (parents == 8) {
                var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
            } else if (parents == 9) {
                var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
            } else if (parents == 10) {
                var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
            }
    
            if (call.blendOptions.blendRange) {
                // $.writeln(json.layers[0].layers[0].layers[0].blendOptions.blendRange.toSource());
                // $.writeln(call.blendOptions.blendRange.toSource())
                var data = call.blendOptions.blendRange.toSource();
                var data = data.replace(/^\[\(/g, "").replace(/\)\]$/g, ""); // umschliesende Klammern wegnehmen [(…)]
                var data = data.replace(/([a-zA-Z]+)/g, "\"$1\"") // key goes string
                var data = data.replace(/\"\"gray\"\"/g, "\"gray\"") // doppelte Anführungszeichen bei gray
                // $.writeln(data)
    
                var data = JSON.parse(data)
    
                for (var i in data) {
    
                    if (i == "destBlackMin" || i == "destBlackMax" || i == "destWhiteMin" || i == "desaturate") {
                        array.push(data[i]);
                    }
                }
                return array
    
            } else {
                // $.writeln("no blendOptions found");
            }
        } catch (e) {
            alert(e)
        }
    }
    
    
    /////////////////
    // das funzt nicht wirklich // irgendwie ein Cache dazwischen // lahm 
    // und jeglicher Umabau geht auch nicht, daher der Weg über json
    /////////////////
    
    // https://community.adobe.com/t5/photoshop-ecosystem-discussions/how-to-assess-blend-if-settings-with-javascript/m-p/1915972#M446383
    // function test_blendif_get() {
    //     // gotoLayer("Gradation neutral")
    //     //@include "/Applications/B-Programme/Grafik/xtools22/xlib/Styles.js"
    
    //     var blendIf = {};
    //     var doc = app.activeDocument;
    //     var layer = doc.activeLayer;
    //     var desc = Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0);
    //     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0))
    //     // alert("2 " + desc)
    //     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')))
    
    //     blendIf.channel = typeIDToStringID(desc.getReference(stringIDToTypeID('channel')).getEnumeratedValue());
    //     blendIf.srcBlackMin = desc.getInteger(stringIDToTypeID('srcBlackMin')); // 'This Layer' in dialog
    //     blendIf.srcBlackMax = desc.getInteger(stringIDToTypeID('srcBlackMax'));
    //     blendIf.srcWhiteMin = desc.getInteger(stringIDToTypeID('srcWhiteMin'));
    //     blendIf.srcWhiteMax = desc.getInteger(stringIDToTypeID('srcWhiteMax'));
    //     blendIf.destBlackMin = desc.getInteger(stringIDToTypeID('destBlackMin')); // 'Underlaying Layer' in dialog
    //     blendIf.destBlackMax = desc.getInteger(stringIDToTypeID('destBlackMax'));
    //     blendIf.destWhiteMin = desc.getInteger(stringIDToTypeID('destWhiteMin'));
    //     blendIf.destWhiteMax = desc.getInteger(stringIDToTypeID('desaturate'));
    
    //     // alert(blendIf.destWhiteMin)
    //     $.writeln(blendIf.destBlackMin)
    //     $.writeln(blendIf.destBlackMax)
    //     $.writeln(blendIf.destWhiteMin)
    //     $.writeln(blendIf.destWhiteMax)
    //     alert(blendIf.destBlackMin + "," + blendIf.destBlackMax + "," + blendIf.destWhiteMin + "," + blendIf.destWhiteMax)
    // }
    
    
    // function test_blendif_get2(_idx) {
    //     try {
    //         // var d1 = new ActionDescriptor();
    //         var r = new ActionReference();
    //         // var d1 = new ActionDescriptor();
    //         // var d2 = new ActionDescriptor();
    //         // var d3 = new ActionDescriptor();
    //         // AR points to the Active Layer
    //         r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    
    //         // r.putIndex(sTID("layer"), _idx);
    //         d1 = executeActionGet(r);
    //         d1.putReference(sTID('null'), r);
    //         d2 = d1.getObjectValue(s2t("blendOptions"))
    //         // d2 = d1.getList(s2t("blendRange"))
    //         // // d1.putObject(sTID('blendOptions'), sTID('blendOptions'), 99);
    //         // if(d1.hasKey(stringIDToTypeID('blendOptions'))) {
    //         //     alert("ja")
    //         // } else {
    //         //     alert("nenin")
    //         // }
    //         // d2 = d1.getObjectValue(s2t('blendOptions'))
    //         // d3 = d2.getList(s2t("blendRange"))
    
    
    //         alert("2 " + d2)
    
    
    
    
    
    //     } catch (e) {
    //         alert(e)
    //     }
    
    
    //     // return;
    // }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_blendif_get.js)

### layer_checkExistenceByRegex

<button class="btn" data-clipboard-text="layer_checkExistenceByRegex(_input);"></button>
{: .btn_p }

??? "layer_checkExistenceByRegex(_input);"
    ``` js linenums="1"
    function layer_checkExistenceByRegex(_input) {
        if (layer_getIDXbyString(_input).length !== 0) {
            return true;
        } else {
            return false;
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_checkExistenceByRegex.js)

### layer_copyLayers

<button class="btn" data-clipboard-text="layer_copyLayers();"></button>
{: .btn_p }

??? "layer_copyLayers();"
    ``` js linenums="1"
    // Ebenen kopieren (Apfel J)
    function layer_copyLayers() {
        executeAction(sTID('copyToLayer'), undefined, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_copyLayers.js)

### layer_delete

<button class="btn" data-clipboard-text="layer_delete();"></button>
{: .btn_p }

??? "layer_delete();"
    ``` js linenums="1"
    // function layer_delete(_input) {
    //     var d = new ActionDescriptor();
    //     // var l = new ActionList();
    //     var r = new ActionReference();
    
    //     try {
    //         if (typeof _input == "number") {
    //             r.putIndex(s2t("layer"), _input);
    //         } else {
    //             if (typeof _input == "string") {
    //                 if (layer_checkExistence(_input)) {
    //                     r.putName(s2t('layer'), _input);
    //                 } else {
    //                     r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
    //                 }
    //             } else {
    //                 if (typeof _input === "undefined") {
    //                     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    //                 }
    //             }
    //         }
    //     } catch (e) {
    //         alert("nix zu löschen")
    //     }
    // }
    
    
    // if (typeof _input == "number") {
    //     // delete by Index
    //     r.putIndex(s2t("layer"), _input);
    // } else if (typeof _input == "string") {
    //     if (layer_checkExistence(_input)) {
    //         // delete by Layername
    //         r.putName(s2t('layer'), _input);
    //     } else {
    //         // delete by Layername via Regex // first hit
    //         r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
    //     }
    // } else if (typeof _input === "undefined") {
    //     // delete activeLayer
    //     r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    // }
    
    // d.putReference(s2t("null"), r);
    // executeAction(s2t("delete"), d, DialogModes.NO);
    
    
    function layer_delete(_input) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        try {
            if (typeof _input === "number") {
                // delete by Index
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input === "string") {
                if (layer_checkExistence(_input)) {
                    // delete by Layername
                    r.putName(s2t("layer"), _input);
                } else {
                    // delete by Layername via Regex // first hit
                    var idxArray = layer_getIDXbyString(_input);
                    r.putIndex(s2t("layer"), idxArray[0]);
                }
            } else if (typeof _input === "undefined") {
                // delete activeLayer
                r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            }
            d.putReference(s2t("null"), r);
            executeAction(s2t("delete"), d, DialogModes.NO);
        } catch (error) {
            alert("nix zu löschen");
        }
    }
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_delete.js)

### layer_getIDXbyName

<button class="btn" data-clipboard-text="layer_getIDXbyName(_name);"></button>
{: .btn_p }

??? "layer_getIDXbyName(_name);"
    ``` js linenums="1"
    function layer_getIDXbyName(_name) {
        var r = new ActionReference();
        r.putProperty(s2t("property"), s2t("itemIndex"));
        r.putName(s2t('layer'), _name);
        return hasBackground() ? executeActionGet(r).getInteger(s2t("itemIndex")) - 1 : executeActionGet(r).getInteger(s2t("itemIndex"));
    };
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_getIDXbyName.js)

### layer_mergeLayers

<button class="btn" data-clipboard-text="layer_mergeLayers();"></button>
{: .btn_p }

??? "layer_mergeLayers();"
    ``` js linenums="1"
    // auf eine Ebene reduzieren (Apfel E)
    function layer_mergeLayers() {
        var d = new ActionDescriptor();
        executeAction(s2t("mergeLayersNew"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_mergeLayers.js)

### layer_mergeVisible

<button class="btn" data-clipboard-text="layer_mergeVisible(_duplicate);"></button>
{: .btn_p }

??? "layer_mergeVisible(_duplicate);"
    ``` js linenums="1"
    // Command Option Shift E
    function layer_mergeVisible(_duplicate) {
        var d = new ActionDescriptor();
        d.putBoolean(s2t("duplicate"), _duplicate);
        executeAction(s2t("mergeVisible"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_mergeVisible.js)

### layer_renameByIDX

<button class="btn" data-clipboard-text="layer_renameByIDX(_idx, _name);"></button>
{: .btn_p }

??? "layer_renameByIDX(_idx, _name);"
    ``` js linenums="1"
    function layer_renameByIDX(_idx, _name) {
        if (_idx == 0) return;
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putIndex(s2t('layer'), _idx);
        d.putReference(s2t('null'), r);
        var d2 = new ActionDescriptor();
        d2.putString(s2t('name'), _name);
        d.putObject(s2t('to'), s2t('layer'), d2);
        executeAction(s2t('set'), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_renameByIDX.js)

### select_nextLayer

<button class="btn" data-clipboard-text="select_nextLayer(_direction);"></button>
{: .btn_p }

??? "select_nextLayer(_direction);"
    ``` js linenums="1"
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
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/select_nextLayer.js)

### select_nextLayer_simple

<button class="btn" data-clipboard-text="select_nextLayer_simple(_direction, _makeVisible);"></button>
{: .btn_p }

??? "select_nextLayer_simple(_direction, _makeVisible);"
    ``` js linenums="1"
    function select_nextLayer_simple(_direction, _makeVisible) {
        // _makeVisible = true -> klappt zugeklappte Ordner auf und wartet dort rein -> default false
        
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        var __direction;
        if (_direction == 'up' || _direction == 'above') {
            __direction = s2t("forwardEnum");
        } else if (_direction == 'down' || _direction == 'below') {
            __direction = s2t("backwardEnum");
        }
    
        r.putEnumerated(s2t("layer"), s2t("ordinal"), __direction);
        d.putReference(s2t("null"), r);
        _makeVisible = (_makeVisible == undefined) ? _makeVisible = false : _makeVisible;
        d.putBoolean(s2t("makeVisible"), _makeVisible);
        executeAction(s2t("select"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/select_nextLayer_simple.js)

### layer_create

<button class="btn" data-clipboard-text="layer_create(_name, _opacity, _fillWhite, _blendMode);"></button>
{: .btn_p }

??? "layer_create(_name, _opacity, _fillWhite, _blendMode);"
    ``` js linenums="1"
    function layer_create(_name, _opacity, _fillWhite, _blendMode) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
    
        //create Layer with multiply blendMode for the option to fill it
        r.putClass(s2t("layer"));
        d.putReference(s2t("null"), r);
        d2.putString(s2t("name"), _name);
        d2.putUnitDouble(s2t("opacity"), s2t("percentUnit"), _opacity);
        d2.putEnumerated(s2t("mode"), s2t("blendMode"), s2t("multiply"));
        d2.putBoolean(s2t("fillNeutral"), _fillWhite);
        d.putObject(s2t("using"), s2t("layer"), d2);
        executeAction(s2t("make"), d, DialogModes.NO);
    
        //reset the blendMode
        var d3 = new ActionDescriptor();
        var d4 = new ActionDescriptor();
        var r2 = new ActionReference();
        r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        d3.putReference(s2t("null"), r2);
        d4.putEnumerated(s2t("mode"), s2t("blendMode"), s2t(_blendMode));
        d3.putObject(s2t("to"), s2t("layer"), d4);
        executeAction(s2t("set"), d3, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/layer/layer_create.js)

???+ a
    ```js
    layer_create("LayerName", 100, false, "screen");
    ```

    ??? b
        * _name `string`
        * _opacity `number`
        * _fillWhite `boolean`
        * _blendMode `normal` `…`

!!! warning hide "not documented functions"
