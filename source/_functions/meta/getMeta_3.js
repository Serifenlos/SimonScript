function getMeta_3(_key) {
    editXMP_3();

    if (xmpMeta.doesPropertyExist(ns_ss, _key)) {
        var value = xmpMeta.getProperty(ns_ss, _key);
    }

    if (typeof value !== 'undefined') {
        return value;
    }
}