function toogleOpenCloseSet() {
    app.activeDocument.suspendHistory("toogleOpenCloseSet", "toogleOpenCloseSet_inner()");
}


function toogleOpenCloseSet_inner() {
    myALayerIDX = getActiveLayerIndex();
    myGroupP = app.activeDocument.activeLayer;
    if (!isLayerSet(myALayerIDX)) {
        myGroupP = app.activeDocument.activeLayer.parent;
        try {
            app.activeDocument.activeLayer = myGroupP
        } catch (err) {
            return
        };
        if (getNbOfChilds() > 1) {
            if (myGroupP.typename != "Document") {
                if (isSetOpened1(myGroupP)) {
                    closeGroup(myGroupP)
                } else {
                    openGroup1(myGroupP)
                };
            }
        }
    } else {
        if (getNbOfChilds() > 1) {
            if (isSetOpened1(myGroupP)) {
                closeGroup(myGroupP)
            } else {
                openGroup1(myGroupP)
            };
        }
    }
}