function nameLayer(_name) {
    try {
        app.activeDocument.activeLayer.name = _name;
    } catch (err) {
        logger(arguments.callee.name)
    }
}