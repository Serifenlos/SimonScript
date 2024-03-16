function delMeta_3(_key) {
    editXMP_3();

    // deleteProperty
    if (xmpMeta.doesPropertyExist(nsURI, _key)) {
        xmpMeta.deleteProperty(nsURI, _key);
    }

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
}