function LUT_maske_preview_v2() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(sTID('adjustmentLayer'), sTID('ordinal'), sTID('targetEnum'));
    d.putReference(sTID('null'), r);
    var d2 = new ActionDescriptor();
    d2.putEnumerated(sTID('lookupType'), sTID('colorLookupType'), sTID('3DLUT'));
    d2.putString(sTID('name'), "Maske preview v2");
    d2.putEnumerated(sTID('LUTFormat'), sTID('LUTFormatType'), sTID('LUTFormatCUBE'));

    // d2.putString(sTID('LUT3DFileName'), "[A] farbmaske_preview.cube");
    d.putObject(sTID('to'), sTID('colorLookup'), d2);
    executeAction(sTID('set'), d, DialogModes.NO);
}