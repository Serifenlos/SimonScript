function adjustLayer_sat_eyedropper() {
    var d = new ActionDescriptor();
    var r = new ActionReference();

    r.putClass(s2t("eyedropper2Tool"));
    d.putReference(s2t("null"), r);
    try {
        executeAction(s2t("select"), d, DialogModes.NO);
        // return;
    }
    catch (e) {
        alert("Error: " + e)
    }
}