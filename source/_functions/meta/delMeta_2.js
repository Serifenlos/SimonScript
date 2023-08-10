function delMeta_2(_key) {
    editXMP_2();

    // deleteProperty
    if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
        xmpMeta.deleteProperty(customNamespace2, _key);
    }

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
}