function mask_setSaturation_singleColors(__foldername) {

    function quick_farbfelder(_channel_name, _r, _g, _b) {
        selection_deselect();
        gotoFill();
        channel2selection(_channel_name);
        createColorLayer(_channel_name, "multiply", "none", 100, "xx", _r, _g, _b);
        gotoFill();
    }

    channel_setSaturation_singleColors('merged', 'darken');

    createGroup(__foldername, "passThrough", "none", 100, f);
    createColorLayer("Weiss", "normal", "none", 100, "none", 255, 255, 255);
    quick_farbfelder("RM", 255, 0, 127);
    quick_farbfelder("M", 255, 0, 255);
    quick_farbfelder("BM", 127, 0, 255);
    quick_farbfelder("B", 0, 0, 255);
    quick_farbfelder("CB", 0, 127, 255);
    quick_farbfelder("C", 0, 255, 255);
    quick_farbfelder("GC", 0, 255, 127);
    quick_farbfelder("G", 0, 255, 0);
    quick_farbfelder("YG", 127, 255, 0);
    quick_farbfelder("Y", 255, 255, 0);
    quick_farbfelder("RY", 255, 127, 0);
    quick_farbfelder("R", 255, 0, 0);

    createLayer("Maske Preview", "colorLookup", "normal", "none", 100, "none", f, f);
    LUT_maske_preview();
    createLayer("Maske Gradation", "curves", "normal", "none", 100, "none", f, f); 


    channel_delete("rg");
    channel_delete("rb");
    channel_delete("gr");
    channel_delete("gb");
    channel_delete("br");
    channel_delete("bg");

    channel_delete("R");
    channel_delete("G");
    channel_delete("B");
    channel_delete("C");
    channel_delete("M");
    channel_delete("Y");

    channel_delete("RY");
    channel_delete("YG");
    channel_delete("GC");
    channel_delete("CB");
    channel_delete("BM");
    channel_delete("RM");
}