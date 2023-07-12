function selection_loop(selection_calc) {
    var startIDX;

    function loopNext() {
        var currentIDX = getActiveLayerIndex();

        try {
            selection_calc();
        } catch (e) {
            if (currentIDX === startIDX) {
                alert("keine geeignete Ebene gefunden");
                cancel = true;
                return;
            }

            // select_nextLayer('down');
            select_nextLayer_simple('down', f);
            loopNext();
        }
    }

    try {
        selection_calc();
    } catch (e) {

        startIDX = getActiveLayerIndex();
        // select_nextLayer('down');
        select_nextLayer_simple('down', f);
        loopNext();
    }
}