function checkTiefenLichter_create_button(_value) {
    try {
        if (!layer_checkExistenceByRegex("check ")) {
            try {
                doc.suspendHistory("Create checkTiefenLichter", "checkTiefenLichter_create(" + _value + ")")
            } catch (e) {
                alert("Error1:" + e)
            };
        } else {
            toogleVisibility("check ")
        }
    } catch (e) {
        alert("Error2:" + e)
    }
}