/* function isLayerFXVisible() {
    var m_Ref01 = new ActionReference();
    m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
    var m_Dsc01= executeActionGet( m_Ref01 );
    return m_Dsc01.getBoolean(cTID('lfxv'));
 }
 */



function isLayerFXVisible(_input) {
    var r = new ActionReference();

    if (typeof _input == "number") {                // by Index
        r.putIndex(s2t("layer"), _input);
    }

    if (typeof _input == "string") {
        if (layer_checkExistence(_input)) {         // by Layername
            r.putName(s2t('layer'), _input);
        } else {                                    // by Layername via Regex // first hit
            r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
        }
    }

    if (typeof _input === "undefined") {            // by activeLayer
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    }

    try {
        return executeActionGet(r).getBoolean(s2t("layerFXVisible"));    
    } catch (e) {
        if (debug) alert("ERROR - gotoLayer_bySelector: \n" + e)
    }
   
}