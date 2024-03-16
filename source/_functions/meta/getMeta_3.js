function getMeta_3(_key) {
    editXMP_3();

    if (xmpMeta.doesPropertyExist(nsURI, _key)) {
        var value = xmpMeta.getProperty(nsURI, _key);
    }

    if (typeof value !== 'undefined') {
        return value;
    }
}