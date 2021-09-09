function layer_getIDXbyString(_string) {
    var i = 1;
    var layerIDX_array = [];
    while (layer_checkExistence(i)) {
        try {
            var regex = new RegExp(_string, 'g');
            if (layer_getName(i).match(regex)) {
                layerIDX_array.push(i)
            }
        } catch (e) {}
        i++;
    };
    return layerIDX_array;
}