function dialog_chooseLayer() {
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