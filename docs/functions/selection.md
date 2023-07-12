### select_all
cmd a

<button class="btn" data-clipboard-text="select_all();"></button>
{: .btn_p }

??? "select_all();"
    ``` js linenums="1"
    function select_all() {
        var descriptor = new ActionDescriptor();
        var reference = new ActionReference();
    
        reference.putProperty(s2t("channel"), s2t("selection"));
        descriptor.putReference(s2t("null"), reference);
        descriptor.putEnumerated(s2t("to"), s2t("ordinal"), s2t("allEnum"));
        executeAction(s2t("set"), descriptor, DialogModes.NO);
    }
    
    // Apfel a
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/select_all.js)

### select_invert
cmd i  
oder activeDocument.selection.deselect();

<button class="btn" data-clipboard-text="select_invert();"></button>
{: .btn_p }

??? "select_invert();"
    ``` js linenums="1"
    function select_invert() {
        executeAction(s2t("inverse"), undefined, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/select_invert.js)

### select_luminance
cmd alt 2

<button class="btn" data-clipboard-text="select_luminance();"></button>
{: .btn_p }

??? "select_luminance();"
    ``` js linenums="1"
    function select_luminance() {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
    
        r.putProperty(s2t("channel"), s2t("selection"));
        d.putReference(s2t("null"), r);
        r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
        d.putReference(s2t("to"), r2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/select_luminance.js)

### select_motiv

<button class="btn" data-clipboard-text="select_motiv();"></button>
{: .btn_p }

??? "select_motiv();"
    ``` js linenums="1"
    function select_motiv() {
        var d = new ActionDescriptor();
    
        d.putBoolean(s2t("sampleAllLayers"), true);
        executeAction(s2t("autoCutout"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/select_motiv.js)

### select_saturation

<button class="btn" data-clipboard-text="select_saturation(_kind, _calculation, _source, _get);"></button>
{: .btn_p }

??? "select_saturation(_kind, _calculation, _source, _get);"
    ``` js linenums="1"
    function select_saturation(_kind, _calculation, _source, _get) {
        var startIDXs = layer_selectedIDX_get();
        cancel = false;
    
        selection_loop(function () { channel_setSaturation(_source, _calculation) });
    
        if (!cancel) {
            if (_get == "selection") {
                layer_selectedIDX_set(startIDXs);
                channel2selection("saturation");
                if (_kind == "unbunt") {
                    select_invert();
                }
                channel_delete("saturation");
            } else {
                gotoLayer(startIDXs[startIDXs.length - 1])
                channel2mask("saturation", _kind);
                if (_kind == "unbunt") {
                    gotoMask();
                    invert();
                    gotoFill();
                }
                channel_delete("saturation");
            }
        }
    }
    
    // _kind = 'bunt' || 'unbunt'
    // _calulation = 'lighten' || 'screen' || …
    // _source = 'merge' || 'LayerName' || ‘this‘
    // _get = 'selection' || 'folder'
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/select_saturation.js)

### select_sky

<button class="btn" data-clipboard-text="select_sky(_sampleAllLayers);"></button>
{: .btn_p }

??? "select_sky(_sampleAllLayers);"
    ``` js linenums="1"
    function select_sky(_sampleAllLayers) {
        var d = new ActionDescriptor();
    
        d.putBoolean(s2t("sampleAllLayers"), _sampleAllLayers);
        executeAction(s2t("selectSky"), d, DialogModes.NO);
    }
    
    
    // select_sky(false);
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/select_sky.js)

### selection2mask

<button class="btn" data-clipboard-text="selection2mask(_mask_name);"></button>
{: .btn_p }

??? "selection2mask(_mask_name);"
    ``` js linenums="1"
    function selection2mask(_mask_name) {
        var i = 1;
        while (layer_checkExistence(layer_getIDXbyString(_mask_name + " " + i)[0])) {
            i++
        }
        createGroup(_mask_name + " " + i, "passThrough", "none", 100, f);
        maskFromSelection();
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/selection2mask.js)

### selection_check

<button class="btn" data-clipboard-text="selection_check();"></button>
{: .btn_p }

??? "selection_check();"
    ``` js linenums="1"
    function selection_check() {
        var has_selection = true;
    
        try {
            activeDocument.selection.bounds;
        } catch (e) {
            var has_selection = false;
        }
        return has_selection;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/selection_check.js)

### selection_deselect
cmd d

<button class="btn" data-clipboard-text="selection_deselect();"></button>
{: .btn_p }

??? "selection_deselect();"
    ``` js linenums="1"
    function selection_deselect() {
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putProperty(s2t("channel"), s2t("selection"));
        d.putReference(s2t("null"), r);
        d.putEnumerated(s2t("to"), s2t("ordinal"), s2t("none"));
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/selection_deselect.js)

### selection_loop
* für die Selection-Scripts
* sucht eine Ebene, wo die spezifische Selection erlaubt ist.
* und stoppt wenn’s einmal durchlief und keine geeignete Ebene gefunden wurde
* Beispiel siehe select_saturation.js

<button class="btn" data-clipboard-text="selection_loop(selection_calc);"></button>
{: .btn_p }

??? "selection_loop(selection_calc);"
    ``` js linenums="1"
    function selection_loop(selection_calc) {
        var startIDX;
    
        function loopNext() {
            var currentIDX = getActiveLayerIndex();
    
            try {
                selection_calc();
            } catch (e) {
                if (currentIDX === startIDX) {
                    alert("keine geeignete Ebene gefunden");
                    cancel = true;
                    return;
                }
    
                // select_nextLayer('down');
                select_nextLayer_simple('down', f);
                loopNext();
            }
        }
    
        try {
            selection_calc();
        } catch (e) {
    
            startIDX = getActiveLayerIndex();
            // select_nextLayer('down');
            select_nextLayer_simple('down', f);
            loopNext();
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/selection/selection_loop.js)

!!! warning hide "not documented functions"
