function getClosedSets() {
    var closedSets_array = [];
    var i = 1;
    while (layer_checkExistence(i)) {
        if (isLayerSet(i)) {
            if (!isSetOpened2(i)) {
                closedSets_array.push(i);
            }
        }
        i++;
    }
    return closedSets_array;
}