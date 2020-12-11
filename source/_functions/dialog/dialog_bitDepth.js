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