function checkTiefenLichter_edit_button(_value) {
    try {
        if (layer_checkExistenceByRegex("check")) {
            try {
                var _value = parseInt(check_lastProtocolStep()) + _value;
                // if (check_lastProtocolStep() != 0) {
                //     undoSteps(1); 
                // }

                doc.suspendHistory("TiefenLichter Check " + checkTiefenLichter_protocol(checkTiefenLichter_edit(false, _value)) + checkTiefenLichter_edit(false, _value) + " ", "checkTiefenLichter_edit(true, " + _value + ");")
            } catch (e) {
                alert("Error1:" + e)
            };
        }
    } catch (e) {
        alert("Error2:" + e)
    }
}


var checkTiefenLichter_protocol = function(n) {
    if(n >>> 0 === parseFloat(n)) {
        return "+";
    } else {
        return "";
    }
}

var check_lastProtocolStep = function() {
    var hsLength = doc.historyStates.length;
    var lastProtocolStep = doc.historyStates[hsLength - 1].name
    var find = new RegExp("^TiefenLichter Check ");
    if (lastProtocolStep.match(find)) {
        var ckeckTiefenLichter_last = parseInt(lastProtocolStep.replace(/(TiefenLichter Check )([-+]\d)/g, "$2"));
        // TODO hier hüpft der GruppenName
        // der undoStep muss tiefer vergraben werden
        undoSteps(1); 
        return ckeckTiefenLichter_last;
    } else {
        return 0;
    }
}
