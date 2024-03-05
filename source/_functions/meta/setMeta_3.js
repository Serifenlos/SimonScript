function setMeta_3(_key, _value) {
    editXMP_3();

    // deleteProperty
    if (xmpMeta.doesPropertyExist(ns_ss, _key)) {
        xmpMeta.deleteProperty(ns_ss, _key);
    }

    // setProperty
    xmpMeta.setProperty(ns_ss, _key, _value);

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
}