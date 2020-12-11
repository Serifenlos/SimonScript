function emptyProtocoll() {
    var desc17393 = new ActionDescriptor();
    desc17393.putEnumerated(cTID('null'), cTID('PrgI'), cTID('Al  '));
    executeAction(cTID('Prge'), desc17393, DialogModes.NO);

    var hs = app.activeDocument.historyStates;
    for (var a = hs.length - 1; a >= 0; --a) {
        if (hs[a].snapshot) {
            app.activeDocument.activeHistoryState = hs[a];
            deleteHistory();
        }
    }
};