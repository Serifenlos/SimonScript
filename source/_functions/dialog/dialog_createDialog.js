function dialog_createDialog(_title, _message) {
    var dialog = new Window("dialog", _title);
    var stxt = dialog.add("group");
    stxt.add("statictext", undefined, _message);
    var buttonGroup = dialog.add("group");

    // Hole die restlichen Argumente als Array von Schaltflächen
    var buttons = Array.prototype.slice.call(arguments, 2);

    for (var index = 0; index < buttons.length; index++) {
        var button = buttons[index];
        var btn = buttonGroup.add("button", undefined, button);
        btn.onClick = (function (index) {
            return function () {
                dialog.close(index);
            }
        })(index);
    }
    return dialog;
}