function setMeta_2(_key, _value) {
    editXMP_2();

    // deleteProperty
    if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
        xmpMeta.deleteProperty(customNamespace2, _key);
    }

    // setProperty
    xmpMeta.setProperty(customNamespace2, _key, _value);

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
}