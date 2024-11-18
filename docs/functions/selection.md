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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_all.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_invert.js)

### select_luminance
cmd alt 2

<button class="btn" data-clipboard-text="select_luminance();"></button>
{: .btn_p }

??? "select_luminance();"
    ``` js linenums="1"
    function select_luminance() {
        const workingProfile_get_init = workingProfile_get("Gray");
        const docProfile = doc.colorProfileName;
        // alert(workingProfile_get_init);
        // alert(docProfile);
    
        gamma_L = [
            "eciRGB v2",
            "eciRGB v2 ICCv4"
        ]
    
        gamma_18 = [
            "sRGB IEC61966-2.1",
            "ProPhoto RGB",
            "Display P3",
            "image P3",
            "Apple RGB",
            "ColorMatch RGB"
    
        ]
    
        gamma_22 = [
            "Adobe RGB (1998)",
            "BestRGB",
            "Beta RGB",
            "DonRGB4.icm",
            "MaxRGB",
            "Russell RGB"
    
        ]
    
    
    
        if (array_contains(gamma_18, docProfile)) {
            // alert("Gamma 1.8");
            if (workingProfile_get_init != "Gray Gamma 1.8") {
                // alert("change it");
                workingProfile_set("Gray", "Gray Gamma 1.8");
                // alert("gechanged: " + workingProfile_get("Gray"));
            }
        }
    
        if (array_contains(gamma_22, docProfile)) {
            // alert("Gamma 2.2");
            if (workingProfile_get_init != "Gray Gamma 2.2") {
                // alert("change it");
                workingProfile_set("Gray", "Gray Gamma 2.2");
                // alert("gechanged: " + workingProfile_get("Gray"));
            }
        }
    
        if (array_contains(gamma_L, docProfile)) {
            // alert("Gamma L");
            workingProfile_set("Gray", "Gray-elle-V4-labl.icc");
            // alert("gechanged: " + workingProfile_get("Gray"));
        }
    
        if (!array_contains(gamma_18, docProfile) && !array_contains(gamma_22, docProfile) && !array_contains(gamma_L, docProfile)) {
            alert("Vorsicht\nDie Helligkeitsverteilung könnte fehlerhaft sein.\nfehlende Info zum Gamma von '" + docProfile + "'")
        }
    
    
    
        //select_luminance 
        var d = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
        r.putProperty(s2t("channel"), s2t("selection"));
        d.putReference(s2t("null"), r);
        r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
        d.putReference(s2t("to"), r2);
        executeAction(s2t("set"), d, DialogModes.NO);
    
    
        if (workingProfile_get_init != workingProfile_get("Gray")) {
            // alert("to change back: " + workingProfile_get("Gray") + " to " + workingProfile_get_init);
            workingProfile_set("Gray", workingProfile_get_init);
            // alert("changed back: " + workingProfile_get("Gray"));
        }
    }
    
    
    
    
    
    
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_luminance.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_motiv.js)

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
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_saturation.js)

???+ a
    ```js
    select_saturation("bunt", "lighten", "merged", "folder");
    ```

    ??? b
        * _kind `bunt` `unbunt`
        * _calulation `lighten` `screen` …
        * _source `merge` `LayerName` `this`
        * _get `selection` `folder`

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_sky.js)

???+ a
    ```js
    select_sky(false);
    ```

    ??? b
        * _sampleAllLayers `true` `false`

### select_Farbbereich

<button class="btn" data-clipboard-text="select_Farbbereich(_bereich);"></button>
{: .btn_p }

??? "select_Farbbereich(_bereich);"
    ``` js linenums="1"
    function select_Farbbereich(_bereich) {
        var d = new ActionDescriptor();
    
        d.putEnumerated(s2t("colors"), s2t("colors"), s2t(_bereich));
        d.putInteger(s2t("colorModel"), 0);
        executeAction(s2t("colorRange"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_Farbbereich.js)

???+ a
    ```js
    select_Farbbereich("outOfGamut");
    ```

    ??? b
        * outOfGamut `outOfGamut`
        * radius `red`
        * yellows ` yellow`
        * graininess `green`
        * cyans `cyan`
        * blues `blue`
        * magenta `magenta`

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/selection2mask.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/selection_check.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/selection_deselect.js)

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

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/selection_loop.js)

???+ a
    ```js
    selection_loop(function() {channel_setSaturation(_source, _calculation)});
    ```

### mask2image

<button class="btn" data-clipboard-text="mask2image(_name);"></button>
{: .btn_p }

??? "mask2image(_name);"
    ``` js linenums="1"
    function mask2image(_name) {
        if (layer_selectedIDX_get().length === 1 && hasLayerMask()) {
            var name_sorce = layer_getName(getActiveLayerIndex());
            gotoMask();
            loadSelectionOfMask();
            select_invert();
            layer_create(_name + " (" + name_sorce + ")", 100, true, "normal");
            fill("black", "normal", 100);
            selection_deselect();
        } else {
            alert("Abbruch!\nwähle genau eine Ebene mit Maske aus");
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/mask2image.js)

???+ a
    ```js
    doc.suspendHistory("Mask2Image", "mask2image("Mask2Image")");
    ```

### select_outOfGamut

<button class="btn" data-clipboard-text="select_outOfGamut(_kind, _get);"></button>
{: .btn_p }

??? "select_outOfGamut(_kind, _get);"
    ``` js linenums="1"
    function select_outOfGamut(_kind, _get) {
        // _get = 'Selection' || 'Folder'
    
        var startIDXs = layer_selectedIDX_get();
        cancel = false;
    
        const getMet_softproof_profile = getMeta_softproof()[0];
        const workingProfile_get1 = workingProfile_get("CMYK");
    
        if (typeof getMet_softproof_profile !== 'undefined') {
            if (workingProfile_get1 != getMet_softproof_profile) {
                workingProfile_set("CMYK", getMet_softproof_profile);
            }
    
            gotoFill();
            selection_loop(function () {
                select_Farbbereich("outOfGamut")
            });
    
            if (workingProfile_get1 != getMet_softproof_profile) {
                workingProfile_set("CMYK", workingProfile_get1);
            }
    
            if (!cancel) {
                if (_get == "Selection") {
                    layer_selectedIDX_set(startIDXs);
                } else {
                    gotoLayer(startIDXs[startIDXs.length - 1])
                    selection2mask(_kind);
                }
            }
    
        } else {
            alert("kein Softproof eingestellt")
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_outOfGamut.js)

### vectorMask2seletion

<button class="btn" data-clipboard-text="vectorMask2seletion();"></button>
{: .btn_p }

??? "vectorMask2seletion();"
    ``` js linenums="1"
    function vectorMask2seletion() {
    	var d = new ActionDescriptor();
    	var r = new ActionReference();
    	var r2 = new ActionReference();
    
    	r.putProperty(s2t("channel"), s2t("selection"));
    	d.putReference(s2t("null"), r);
    	r2.putEnumerated(s2t("path"), s2t("path"), s2t("vectorMask"));
    	r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    	d.putReference(s2t("to"), r2);
    	executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/vectorMask2seletion.js)

### select_haut

<button class="btn" data-clipboard-text="select_haut(_merge, _kind, _get);"></button>
{: .btn_p }

??? "select_haut(_merge, _kind, _get);"
    ``` js linenums="1"
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
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_haut.js)

### select_layer

<button class="btn" data-clipboard-text="select_layer();"></button>
{: .btn_p }

??? "select_layer();"
    ``` js linenums="1"
    function select_layer() {
    	var d = new ActionDescriptor();
    	var r = new ActionReference();
    	var r2 = new ActionReference();
    
    	r.putProperty(s2t("channel"), s2t("selection"));
    	d.putReference(s2t("null"), r);
    	r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    	d.putReference(s2t("to"), r2);
    	executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/selection/select_layer.js)

    
!!! warning hide "not documented functions"
