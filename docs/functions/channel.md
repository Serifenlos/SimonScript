### channel2mask

<button class="btn" data-clipboard-text="channel2mask(_channel_name, _mask_name);"></button>
{: .btn_p }

??? "channel2mask(_channel_name, _mask_name);"
    ``` js linenums="1"
    function channel2mask(_channel_name, _mask_name) {
        var i = 1;
        while (layer_checkExistence(layer_getIDXbyString(_mask_name + " " + i)[0])) {
            i++
        }
        createGroup(_mask_name + " " + i, "passThrough", "none", 100, f);
    
        createMask();
    
        channel_select(_channel_name, false)
        select_all();
        copy();
        channel_select("mask", true);
        paste_into();
        channel_select("RGB", false);
        selection_deselect();
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/channel2mask.js)

### channel2selection

<button class="btn" data-clipboard-text="channel2selection(_channel_name);"></button>
{: .btn_p }

??? "channel2selection(_channel_name);"
    ``` js linenums="1"
    function channel2selection(_channel_name) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
    
        r.putProperty(s2t("channel"), s2t("selection"));
        d.putReference(s2t("null"), r);
        r2.putName(s2t("channel"), _channel_name);
        d.putReference(s2t("to"), r2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/channel2selection.js)

### channel_delete

<button class="btn" data-clipboard-text="channel_delete(_name);"></button>
{: .btn_p }

??? "channel_delete(_name);"
    ``` js linenums="1"
    function channel_delete(_name) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putName(s2t("channel"), _name);
        d.putReference(s2t("null"), r);
        executeAction(s2t("delete"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_delete.js)

### channel_name

<button class="btn" data-clipboard-text="channel_name(_name);"></button>
{: .btn_p }

??? "channel_name(_name);"
    ``` js linenums="1"
    function channel_name(_name) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putEnumerated(s2t("channel"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(s2t("null"), r);
        d2.putString(s2t("name"), _name);
        d.putObject(s2t("to"), s2t("channel"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_name.js)

### channel_select

<button class="btn" data-clipboard-text="channel_select(_name, _makeVisible);"></button>
{: .btn_p }

??? "channel_select(_name, _makeVisible);"
    ``` js linenums="1"
    function channel_select(_name, _makeVisible) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        if (_name) {
            if (_name == "red" || _name == "grain" || _name == "blue" || _name == "RGB" || _name == "mask" || _name == "cyan" || _name == "magenta" || _name == "yellow" || _name == "black" || _name == "CMYK" || _name == "lightness" || _name == "a" || _name == "b" || _name == "lab") {
                r.putEnumerated(s2t("channel"), s2t("channel"), s2t(_name));
            } else {
                r.putName(s2t("channel"), _name);
            }
    
            d.putReference(s2t("null"), r);
            d.putBoolean(s2t("makeVisible"), _makeVisible);
            executeAction(s2t("select"), d, DialogModes.NO);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_select.js)

### channel_setSaturation

<button class="btn" data-clipboard-text="channel_setSaturation(_source, _calculation);"></button>
{: .btn_p }

??? "channel_setSaturation(_source, _calculation);"
    ``` js linenums="1"
    function channel_setSaturation(_source, _calculation) {
    
        var calc_1 = "difference";
        // var _calculation = "lighten";
        // var _calculation = "screen";
    
        // channel_select("RGB", false);
        kanalberechnung("red", f, "grain", f, _source, calc_1, "rg", "RGB");
    
        kanalberechnung("red", f, "blue", f, _source, calc_1, "rb", "RGB");
        kanalberechnung("rg", f, "rb", f, "this", _calculation, "R", "RGB");
        channel_delete("rg");
        channel_delete("rb");
    
        kanalberechnung("grain", f, "red", f, _source, calc_1, "gr", "RGB");
        kanalberechnung("grain", f, "blue", f, _source, calc_1, "gb", "RGB");
        kanalberechnung("gr", f, "gb", f, "this", _calculation, "G", "RGB");
        channel_delete("gr");
        channel_delete("gb");
    
        kanalberechnung("blue", f, "red", f, _source, calc_1, "br", "RGB");
        kanalberechnung("blue", f, "grain", f, _source, calc_1, "bg", "RGB");
        kanalberechnung("br", f, "bg", f, "this", _calculation, "B", "RGB");
        channel_delete("br");
        channel_delete("bg");
    
        kanalberechnung("R", f, "G", f, "this", _calculation, "RG", "RGB");
        kanalberechnung("RG", f, "B", f, "this", _calculation, "saturation", "RGB");
    
        // kanalberechnung("R", f, "G", f, "this", "screen", "RG", "RGB");
        // kanalberechnung("RG", f, "B", f, "this", "screen", "bunt", "RGB");
    
        channel_delete("R");
        channel_delete("G");
        channel_delete("B");
        channel_delete("RG");
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/channel_setSaturation.js)

### kanalberechnung

<button class="btn" data-clipboard-text="kanalberechnung(_c1, _c1_invert, _c2, _c2_invert, _layer, _calculation, _name, _select);"></button>
{: .btn_p }

??? "kanalberechnung(_c1, _c1_invert, _c2, _c2_invert, _layer, _calculation, _name, _select);"
    ``` js linenums="1"
    function kanalberechnung(_c1, _c1_invert, _c2, _c2_invert, _layer, _calculation, _name, _select) {
    
        // kanalberechnung("red", f, "grain", f, "merged", "difference", "1", "RGB");
        // kanalberechnung("red", f, "grain", f, "Original", "difference", "2", "RGB");
        // kanalberechnung("1", "2", "this", "lighten", "R", "RGB");
        
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var d5 = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
        var r4 = new ActionReference();
    
    
        d.putClass(s2t("new"), s2t("channel"));
        if (_c1 == "red" || _c1 == "grain" || _c1 == "blue" || _c1 == "gray") {
            r.putEnumerated(s2t("channel"), s2t("channel"), s2t(_c1));
        } else {
            r.putName(s2t("channel"), _c1);
        }
    
        if (_layer == "merged") {
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
        } else if (_layer != "this") {
            r.putName(s2t("layer"), _layer);
        }
        d2.putReference(s2t("to"), r);
        d2.putBoolean(s2t("invert"), _c1_invert);
        d2.putEnumerated(s2t("calculation"), s2t("calculationType"), s2t(_calculation));
    
        if (_c2 == "red" || _c2 == "grain" || _c2 == "blue" || _c2 == "gray") {
            r2.putEnumerated(s2t("channel"), s2t("channel"), s2t(_c2));
        } else {
            r2.putName(s2t("channel"), _c2);
        }
    
    
        if (_layer == "merged") {
            r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
        } else if (_layer != "this") {
            r2.putName(s2t("layer"), _layer);
        }
        d2.putReference(s2t("source2"), r2);
        d2.putBoolean(s2t("invertSource2"), _c2_invert);
        d.putObject(s2t("using"), s2t("calculation"), d2);
        executeAction(s2t("make"), d, DialogModes.NO);
    
        channel_name(_name);
        channel_select(_select, false);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/kanalberechnung.js)

### channel2image

<button class="btn" data-clipboard-text="channel2image(_channel_name, _layer_name);"></button>
{: .btn_p }

??? "channel2image(_channel_name, _layer_name);"
    ``` js linenums="1"
    function channel2image(_channel_name, _layer_name) {
        layer_create(_layer_name + " (" + _channel_name + ")", 100, false, "normal");
        bildberechnung(_channel_name, "normal", f, f);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/channel2image.js)

???+ a
    ```js
    doc.suspendHistory("channel2image", "channel2image('Alpha 1', 'channel2image')");
    ```

    ??? b
        * _channel_name `string`
        * _layer_name `string`

### bildberechnung

<button class="btn" data-clipboard-text="bildberechnung(_channel_name, _blendmode, _invert, _preserveTransparency);"></button>
{: .btn_p }

??? "bildberechnung(_channel_name, _blendmode, _invert, _preserveTransparency);"
    ``` js linenums="1"
    function bildberechnung(_channel_name, _blendmode, _invert, _preserveTransparency) {
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putName(s2t("channel"), _channel_name);
        d2.putReference(s2t("to"), r);
        d2.putBoolean(s2t("invert"), _invert);
        d2.putEnumerated(s2t("calculation"), s2t("calculationType"), s2t(_blendmode));
        d2.putBoolean(s2t("preserveTransparency"), _preserveTransparency);
        d.putObject(s2t("with"), s2t("calculation"), d2);
        try {executeAction(s2t("applyImageEvent"), d, DialogModes.NO)}
        catch(e) {}
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/channel/bildberechnung.js)

???+ a
    ```js
    bildberechnung('Alpha 1', "normal", f, f);
    ```

    ??? b
        * _channel_name `string`
        * _blendmode `string`
        * _invert `boolean`
        * _preserveTransparency `boolean`

!!! warning show "not documented functions"
    - channel_setSaturation_singleColors
     - mask_setSaturation_singleColors
     - mask_setSaturation_singleColors_create
