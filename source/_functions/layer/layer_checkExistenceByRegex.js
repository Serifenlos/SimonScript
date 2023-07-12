function layer_checkExistenceByRegex(_input) {
    if (layer_getIDXbyString(_input).length !== 0) {
        return true;
    } else {
        return false;
    }
}