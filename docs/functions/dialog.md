### dialog_chooseLayer
part of Startschuss

<button class="btn" data-clipboard-text="dialog_chooseLayer();"></button>
{: .btn_p }

??? "dialog_chooseLayer();"
    ``` js linenums="1"
    function  dialog_chooseLayer() {
        var saveLayer = doc.activeLayer.name;
        var w = new Window("dialog");
        var visibility_button = w.add("button", undefined, "Sichtbarkeit", {name: "ein/aus"});
        var selectUp_button = w.add("button", undefined, "rauf", {name: "rauf"});
        var selectAll_button = w.add("button", undefined, "alle", {name: "alle"});
        var selectDown_button = w.add("button", undefined, "runter", {name: "runter"});
        var reset_button = w.add("button", undefined, "reset", {name: "reset"});
        var cancel_button = w.add("button", undefined, "Abbruch", {name: "Abbruch"});
        var ok_button = w.add("button", undefined, "RUN", {name: "run"});
        visibility_button.onClick = function() {
            toogleVisibility();
        }
        selectUp_button.onClick = function() {
            selectLayer("up", 1);
        }
        selectDown_button.onClick = function() {
            selectLayer("down", 1);
        }
        selectAll_button.onClick = function() {
            if (hasBackground()) {
                gotoLayer(0);
                nameLayer("HG");
            }
            selectLayers("selectAllLayers");
        }
        reset_button.onClick = function() {
            selectLayers("selectNoLayers");
            gotoLayer(saveLayer);
        }
        cancel_button.onClick = function() {
            cancel = 1;
            w.close();
        }
        ok_button.onClick = function() {
            w.close();
        }
    
        w.show();
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/dialog/dialog_chooseLayer.js)


### dialog_bitDepth

<button class="btn" data-clipboard-text="dialog_bitdepth();"></button>
{: .btn_p }

??? "dialog_bitdepth();"
    ``` js linenums="1"
    function dialog_bitdepth() {
        var dialog_bit = new Window("dialog", "Auf 8bit oder weiter?");
        var stxt = dialog_bit.add("group");
        stxt.add("statictext", undefined, "Das Bild hat " + getBitDepth() + "bit.");
    
        var myButtonGroup = dialog_bit.add("group");
        var bit8 = myButtonGroup.add("button", undefined, "8bit");
        var weiter = myButtonGroup.add("button", undefined, "weiter");
    
        bit8.onClick = function () {
            setBitDepth(8);
            dialog_bit.close();
        }
        weiter.onClick = function () {
            dialog_bit.close();
        }
    
        dialog_bit.show();
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/dialog/dialog_bitDepth.js)
