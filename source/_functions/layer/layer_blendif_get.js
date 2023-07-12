// https://community.adobe.com/t5/photoshop-ecosystem-discussions/find-out-if-any-blending-options-are-applied-to-a-layer/m-p/11201734#M338629
function layer_blendif_get(_idx) {
    try {
        var r = new ActionReference();
        var d = new ActionDescriptor();
        var array = [];

        r.putProperty(s2t("property"), s2t("json"));
        if (!isNaN(_idx)) {
            r.putIndex(s2t("layer"), _idx)
        } else {
            r.putEnumerated(s2t('layer'), s2t('ordinal'), s2t('targetEnum'))
        }
        d.putReference(s2t("null"), r);
        eval("var json=" + executeAction(s2t("get"), d, DialogModes.NO).getString(s2t("json")));

        //TODO oh my god - wie bekomme ich die Anzahl der Parents in den Call ??
        //TODO und warum kommt der json-Output misformatiert ??

        var parents = loopParentsIDXfor(_idx).length;
        if (parents == 0) {
            var call = json.layers[0]
        } else if (parents == 1) {
            var call = json.layers[0].layers[0]
        } else if (parents == 2) {
            var call = json.layers[0].layers[0].layers[0]
        } else if (parents == 3) {
            var call = json.layers[0].layers[0].layers[0].layers[0]
        } else if (parents == 4) {
            var call = json.layers[0].layers[0].layers[0].layers[0].layers[0]
        } else if (parents == 5) {
            var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
        } else if (parents == 6) {
            var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
        } else if (parents == 7) {
            var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
        } else if (parents == 8) {
            var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
        } else if (parents == 9) {
            var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
        } else if (parents == 10) {
            var call = json.layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0].layers[0]
        }

        if (call.blendOptions.blendRange) {
            // $.writeln(json.layers[0].layers[0].layers[0].blendOptions.blendRange.toSource());
            // $.writeln(call.blendOptions.blendRange.toSource())
            var data = call.blendOptions.blendRange.toSource();
            var data = data.replace(/^\[\(/g, "").replace(/\)\]$/g, ""); // umschliesende Klammern wegnehmen [(…)]
            var data = data.replace(/([a-zA-Z]+)/g, "\"$1\"") // key goes string
            var data = data.replace(/\"\"gray\"\"/g, "\"gray\"") // doppelte Anführungszeichen bei gray
            // $.writeln(data)

            var data = JSON.parse(data)

            for (var i in data) {

                if (i == "destBlackMin" || i == "destBlackMax" || i == "destWhiteMin" || i == "desaturate") {
                    array.push(data[i]);
                }
            }
            return array

        } else {
            // $.writeln("no blendOptions found");
        }
    } catch (e) {
        alert(e)
    }
}


/////////////////
// das funzt nicht wirklich // irgendwie ein Cache dazwischen // lahm 
// und jeglicher Umabau geht auch nicht, daher der Weg über json
/////////////////

// https://community.adobe.com/t5/photoshop-ecosystem-discussions/how-to-assess-blend-if-settings-with-javascript/m-p/1915972#M446383
// function test_blendif_get() {
//     // gotoLayer("Gradation neutral")
//     //@include "/Applications/B-Programme/Grafik/xtools22/xlib/Styles.js"

//     var blendIf = {};
//     var doc = app.activeDocument;
//     var layer = doc.activeLayer;
//     var desc = Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0);
//     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')).getList(stringIDToTypeID('blendRange')).getObjectValue(0))
//     // alert("2 " + desc)
//     // alert(Styles.getLayerStyleDescriptor(doc, layer, true).getObjectValue(stringIDToTypeID('blendOptions')))

//     blendIf.channel = typeIDToStringID(desc.getReference(stringIDToTypeID('channel')).getEnumeratedValue());
//     blendIf.srcBlackMin = desc.getInteger(stringIDToTypeID('srcBlackMin')); // 'This Layer' in dialog
//     blendIf.srcBlackMax = desc.getInteger(stringIDToTypeID('srcBlackMax'));
//     blendIf.srcWhiteMin = desc.getInteger(stringIDToTypeID('srcWhiteMin'));
//     blendIf.srcWhiteMax = desc.getInteger(stringIDToTypeID('srcWhiteMax'));
//     blendIf.destBlackMin = desc.getInteger(stringIDToTypeID('destBlackMin')); // 'Underlaying Layer' in dialog
//     blendIf.destBlackMax = desc.getInteger(stringIDToTypeID('destBlackMax'));
//     blendIf.destWhiteMin = desc.getInteger(stringIDToTypeID('destWhiteMin'));
//     blendIf.destWhiteMax = desc.getInteger(stringIDToTypeID('desaturate'));

//     // alert(blendIf.destWhiteMin)
//     $.writeln(blendIf.destBlackMin)
//     $.writeln(blendIf.destBlackMax)
//     $.writeln(blendIf.destWhiteMin)
//     $.writeln(blendIf.destWhiteMax)
//     alert(blendIf.destBlackMin + "," + blendIf.destBlackMax + "," + blendIf.destWhiteMin + "," + blendIf.destWhiteMax)
// }


// function test_blendif_get2(_idx) {
//     try {
//         // var d1 = new ActionDescriptor();
//         var r = new ActionReference();
//         // var d1 = new ActionDescriptor();
//         // var d2 = new ActionDescriptor();
//         // var d3 = new ActionDescriptor();
//         // AR points to the Active Layer
//         r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));

//         // r.putIndex(sTID("layer"), _idx);
//         d1 = executeActionGet(r);
//         d1.putReference(sTID('null'), r);
//         d2 = d1.getObjectValue(s2t("blendOptions"))
//         // d2 = d1.getList(s2t("blendRange"))
//         // // d1.putObject(sTID('blendOptions'), sTID('blendOptions'), 99);
//         // if(d1.hasKey(stringIDToTypeID('blendOptions'))) {
//         //     alert("ja")
//         // } else {
//         //     alert("nenin")
//         // }
//         // d2 = d1.getObjectValue(s2t('blendOptions'))
//         // d3 = d2.getList(s2t("blendRange"))


//         alert("2 " + d2)





//     } catch (e) {
//         alert(e)
//     }


//     // return;
// }