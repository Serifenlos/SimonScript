function select_luminance() {
    const workingProfile_get_init = workingProfile_get("Gray");
    const docProfile = doc.colorProfileName;
    // alert(workingProfile_get_init);
    // alert(docProfile);

    gamma_L = [
        "eciRGB v2",
        "eciRGB v2 ICCv4"
    ]

    gamma_18 = [
        "sRGB IEC61966-2.1",
        "ProPhoto RGB",
        "Display P3",
        "image P3",
        "Apple RGB",
        "ColorMatch RGB"

    ]

    gamma_22 = [
        "Adobe RGB (1998)",
        "BestRGB",
        "Beta RGB",
        "DonRGB4.icm",
        "MaxRGB",
        "Russell RGB"

    ]



    if (array_contains(gamma_18, docProfile)) {
        // alert("Gamma 1.8");
        if (workingProfile_get_init != "Gray Gamma 1.8") {
            // alert("change it");
            workingProfile_set("Gray", "Gray Gamma 1.8");
            // alert("gechanged: " + workingProfile_get("Gray"));
        }
    }

    if (array_contains(gamma_22, docProfile)) {
        // alert("Gamma 2.2");
        if (workingProfile_get_init != "Gray Gamma 2.2") {
            // alert("change it");
            workingProfile_set("Gray", "Gray Gamma 2.2");
            // alert("gechanged: " + workingProfile_get("Gray"));
        }
    }

    if (array_contains(gamma_L, docProfile)) {
        // alert("Gamma L");
        workingProfile_set("Gray", "Gray-elle-V4-labl.icc");
        // alert("gechanged: " + workingProfile_get("Gray"));
    }

    if (!array_contains(gamma_18, docProfile) && !array_contains(gamma_22, docProfile) && !array_contains(gamma_L, docProfile)) {
        alert("Vorsicht\nDie Helligkeitsverteilung könnte fehlerhaft sein.\nfehlende Info zum Gamma von '" + docProfile + "'")
    }



    //select_luminance 
    var d = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("RGB"));
    d.putReference(s2t("to"), r2);
    executeAction(s2t("set"), d, DialogModes.NO);


    if (workingProfile_get_init != workingProfile_get("Gray")) {
        // alert("to change back: " + workingProfile_get("Gray") + " to " + workingProfile_get_init);
        workingProfile_set("Gray", workingProfile_get_init);
        // alert("changed back: " + workingProfile_get("Gray"));
    }
}





