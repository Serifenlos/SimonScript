// https://community.adobe.com/t5/photoshop-ecosystem-discussions/alert-togglepalettes/m-p/10683352#M271446
function app_panelsVisible() {
    try {
        var r = new ActionReference();
        r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("panelList"));
        r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));

        var list = executeActionGet(r).getList(stringIDToTypeID("panelList"));

        var viz = false;

        for (var i = 0; i < list.count; i++) {
            var obj = list.getObjectValue(i);

            var id = obj.getString(stringIDToTypeID("ID"));

            // skip some panels if shift+tab was pressed

            if (id == "panelid.static.toolbar") continue; // skip tool panel
            if (id == "panelid.static.options") continue; // skip options panel
            if (id == "panelid.static.blrb") continue; // what is panelid.static.blrb ??


            if (obj.getBoolean(stringIDToTypeID("visible"))) {
                viz = true;
                break;
            }
        }

        return viz;
    } catch (e) {
        throw (e);
    }
}