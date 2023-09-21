function array_contains(_array, _value) {
    for (var c = 0; c < _array.length; c++) {
        if (_array[c] === _value) {
            return true;
        }
    }
    return false;
};