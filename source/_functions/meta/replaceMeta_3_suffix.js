function replaceMeta_3_suffix(_key, _suffix_old, _suffix_new) {
    var value = getMeta_3(_key);
    if (value) {
        value = value.toString();
        if (value.substring(value.length - 4) === "." + _suffix_old) {
            value = value.replace("." + _suffix_old, "." + _suffix_new);
            setMeta_3(_key, value);
        }
    }
}