function nameLayer(_name) {
    try {
        doc.activeLayer.name = _name;
    } catch (err) {
        logger(arguments.callee.name)
    }
}