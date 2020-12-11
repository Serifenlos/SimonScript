function noProfile() {
    if (doc.colorProfileType == ColorProfile.NONE) {
        try {
            app.bringToFront();
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putEnumerated(sTID("document"), sTID("ordinal"), sTID("targetEnum"));
            d.putReference(sTID("null"), r);
            d.putBoolean(sTID("manage"), true);
            executeAction(sTID("assignProfile"), d, DialogModes.ALL);
        } catch (e) {}
    }
}