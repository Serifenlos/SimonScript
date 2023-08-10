function arrayCorrect(_array) {
    if (typeof Array.isArray != "function") {
        Array.isArray = function (arr) {
            return arr != undefined && arr.constructor == Array
        }
    }

    if (!Array.isArray(_array)) {
        var arr2str = _array.toString();
        var _array = [];
        var _array = arr2str.split(',');
    }
    return _array;
}