function getMeta_3(_key) {
    editXMP_3();
    
    try {
        if (app.documents.length != 0) {
            if (xmpMeta.doesPropertyExist(nsURI, _key)) {
                var value = xmpMeta.getProperty(nsURI, _key);
            }
        }
    } catch (error) {
        if (debug) alert("ERROR - getMeta_3 - doesPropertyExist: " + error)
    }

    if (typeof value !== 'undefined') {
        return value;
    }
}