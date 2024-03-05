function delMeta_3(_key) {
    editXMP_3();

    // deleteProperty
    if (xmpMeta.doesPropertyExist(ns_ss, _key)) {
        xmpMeta.deleteProperty(ns_ss, _key);
    }

    // Fix the xmpMeta
    app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
}