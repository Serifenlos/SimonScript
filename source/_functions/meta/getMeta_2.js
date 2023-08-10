function getMeta_2(_key) {
    editXMP_2();

    if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
        var value = xmpMeta.getProperty(customNamespace2, _key);
    }

    if (typeof value !== 'undefined') {
        return value;
    }
}