
function s2t(s) { return app.stringIDToTypeID(s) }
function c2t(c) { return app.charIDToTypeID(c) }
function t2s(t) { return app.typeIDToStringID(t) }


// ist doch im view.js, warum hiernochmal?
function getZoomLevel(){
    var ref = new ActionReference();
    ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('zoom'));
    ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
    var desc = executeActionGet(ref);
    // alert(desc.getDouble(stringIDToTypeID('zoom')));
    // alert(Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(1));
    return Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(1);
};


// @codekit-prepend "./meta/set.js";
// @codekit-prepend "./meta/getSoftProof.js";


// nur die Funktion // bereit zum Umbau // aber wie?
function toggleProofColors () {
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(s2t('menuItemClass'), s2t('menuItemType'), s2t("toggleProofColors"));
    desc1.putReference(s2t('null'), ref1);
    executeAction(s2t('select'), desc1, DialogModes.NO);
}
// toggleProofColors();

function toggleProofColors2 () {
  // executeAction(s2t('toggleProofColors'), null, DialogModes.No);
    // var ra = new ActionReference();
    // var da = new ActionDescriptor();
    // ra.putEnumerated(s2t("menuItemClass"), s2t("menuItemType"), s2t("toggleProofColors"));
    // da.putReference(s2t("null"), ra);
    // var da2 = executeAction(s2t("select"), da, DialogModes.NO);
    // alert(da2)

    // var r1 = new ActionReference();
    // var d1 = new ActionDescriptor();
    // r1.putEnumerated(s2t("menuItemClass"), s2t("menuItemType"), s2t("toggleProofColors"));
    // d1.putReference(s2t("null"), r1);
    // var d2 = executeActionGet( s2t("select"), d1, DialogModes.NO );
    // alert(d2)

    // app.runMenuItem (app.stringIDToTypeID ("toggleProofColors"));

}
// toggleProofColors2();



// @codekit-prepend "./meta/editXMP.js";
// @codekit-prepend "./meta/setMeta.js";
// @codekit-prepend "./meta/delMeta.js";
// @codekit-prepend "./meta/getMeta.js";




// setMeta();
// delMeta();
// getMeta();



// $.writeln(XMPMeta.dumpNamespaces());
// alert(XMPMeta.dumpNamespaces())


