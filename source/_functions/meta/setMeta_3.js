function setMeta_3(_key, _value) {
    editXMP_3();

    // deleteProperty
    if (xmpMeta.doesPropertyExist(nsURI, _key)) {
        xmpMeta.deleteProperty(nsURI, _key);
    }

    // setProperty
    xmpMeta.setProperty(nsURI, _key, _value);

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
}