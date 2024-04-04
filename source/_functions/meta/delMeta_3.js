function delMeta_3(_key_array) {
    editXMP_3();

    //TODO check if _key_array ist array or string

    for (var i = 0; i < _key_array.length; i++) {
        // deleteProperty
        if (xmpMeta.doesPropertyExist(nsURI, _key_array[i])) {
            xmpMeta.deleteProperty(nsURI, _key_array[i]);
        }
    }

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
}



// function delMeta_3(_key) {
//     editXMP_3();

//     // deleteProperty
//     if (xmpMeta.doesPropertyExist(nsURI, _key)) {
//         xmpMeta.deleteProperty(nsURI, _key);
//     }

//     // Fix the xmpMeta
//     app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
// }