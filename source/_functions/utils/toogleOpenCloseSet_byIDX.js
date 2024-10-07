function toogleOpenCloseSet_byIDX(_idx) {
    try {
        toogleOpenCloseSet_byIDX_inner(_idx);
        // if (isSetOpened2(_idx)){
        //     alert("ist noch offen")
        //     toogleOpenCloseSet_byIDX_inner(_idx);
        // } else {
        //     alert(_idx + " geschlossen?")
        // }
        // app.activeDocument.suspendHistory("toogleOpenCloseSet", "toogleOpenCloseSet_byIDX_inner(_idx)");
    } catch (e) { alert("toogleOpenCloseSet_byIDX: " + e) }
}

function toogleOpenCloseSet_byIDX_inner(_idx) {
    try {
        gotoLayer(_idx);
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
    } catch (e) { alert("toogleOpenCloseSet_byIDX_inner: " + e) }
}