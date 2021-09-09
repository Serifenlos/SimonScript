// function hide() {
//     var idHd = charIDToTypeID("Hd  ");
//     var desc809 = new ActionDescriptor();
//     var idnull = charIDToTypeID("null");
//     var list12 = new ActionList();
//     var ref648 = new ActionReference();
//     var idLyr = charIDToTypeID("Lyr ");
//     var idOrdn = charIDToTypeID("Ordn");
//     var idTrgt = charIDToTypeID("Trgt");
//     ref648.putEnumerated(idLyr, idOrdn, idTrgt);
//     list12.putReference(ref648);
//     desc809.putList(idnull, list12);
//     executeAction(idHd, desc809, DialogModes.NO);
// }

// hide();
function hide() {
    var d = new ActionDescriptor();
    var l = new ActionList();
    var rl = new ActionReference();
    rl.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    l.putReference(rl);
    d.putList(c2t("null"), l);
    executeAction(s2t("hide"), d, DialogModes.NO);
}