function selection_check() {
    var has_selection = true;

    try {
        activeDocument.selection.bounds;
    } catch (e) {
        var has_selection = false;
    }
    return has_selection;
}