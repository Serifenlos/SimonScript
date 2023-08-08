function workingProfile_set(_modus, _profile) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putProperty(s2t("property"), s2t("colorSettings"));
    r.putEnumerated(s2t("application"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putString(s2t("working" + _modus + ""), _profile);
    d.putObject(s2t("to"), s2t("colorSettings"), d2);
    try {
        executeAction(s2t("set"), d, DialogModes.NO);
    } catch (e) {
        alert("kann Arbeitsfarbraum nicht ändern")
    }
}