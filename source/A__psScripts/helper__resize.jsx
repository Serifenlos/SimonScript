/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[helper] resize</name>
<about>resize Original | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>helper</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/utils.jsx";
//@include "functions/layer.jsx";

// prefSave();
// prefSet(DialogModes.NO, Units.PIXELS);

// try {
//     try {gotoLayer("Original")}
//     catch(e) {alert("keine Ebene ‘Original‘ gefunden")}

//     if (doc.activeLayer.kind != "LayerKind.SMARTOBJECT") {
//         alert("Ebene ‘Original‘ ist kein SmartObjekt");
//     }

//     SmartObject_edit();
//     var width = app.activeDocument.width;
//     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//     doc.resizeImage(width, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
// }
// catch(e) {}

// prefReset();



resize();
fitScreen();

function resize() {
    prefSave();
    prefSet(DialogModes.NO, Units.PIXELS);

    try {
        try {
            gotoLayer("Original")
        } catch (e) {
            alert("keine Ebene ‘Original‘ gefunden")
        }

        if (doc.activeLayer.kind != "LayerKind.SMARTOBJECT") {
            alert("Ebene ‘Original‘ ist kein SmartObjekt");
        }


        var width_old = app.activeDocument.width;
        SmartObject_edit();
        var width_new = app.activeDocument.width;
        var width_faktor = width_new / width_old;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        doc.resizeImage(width_new, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);

        maskFix_all2();
        // getSmartFilterArray();

        
        var i = 1;
        while (layer_checkExistence(i)) {
            // fixMask(i, 1);

            gotoLayer(i)

            try {
                var filterArray = getSmartFilterArray();
            } catch (e) {
                var filterArray = [];
            };

            for (var fa = 0; fa < filterArray.length; fa++) {
                if (filterArray[fa][1] == "adaptCorrect") {
                    try {
                        adjust_filter_TiefenLichter(width_faktor, filterArray[fa][0] + 1, filterArray[fa][5], filterArray[fa][6], filterArray[fa][7], filterArray[fa][8], filterArray[fa][9], filterArray[fa][10], filterArray[fa][11], filterArray[fa][12], filterArray[fa][16], filterArray[fa][17], filterArray[fa][18], filterArray[fa][19], filterArray[fa][20], filterArray[fa][21], filterArray[fa][22], filterArray[fa][23], filterArray[fa][24], filterArray[fa][25], filterArray[fa][26], filterArray[fa][27], filterArray[fa][28], filterArray[fa][29], filterArray[fa][30], filterArray[fa][31]);
                    } catch (e) { }
                }
            };

            i++;
        };


        // fixMaskLoop(width_faktor);
        
        function maskFix_all2() {
            try {
                var i = 1;
                while (layer_checkExistence(i)) {
                    fixMask(i, 1);
                    i++;
                };
            } catch (e) {
                alert("error " + e)
            }
        }
        fitScreen();


    } catch (e) {}

    prefReset();
};




//// FIX SMART FILTER

////// based on code by michael l hale //////
//// https://www.ps-scripts.com/viewtopic.php?p=40586#p40586
//// https://www.ps-scripts.com/viewtopic.php?p=152399#p152399

function getSmartFilterArray() {
    var ref = new ActionReference();
    ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("smartObject"));
    ref.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
    var smartObjectDesc = executeActionGet(ref).getObjectValue(stringIDToTypeID("smartObject"));
    var filtersList = smartObjectDesc.getList(stringIDToTypeID("filterFX"));
    filterArray = [];

    for (var idx = 0; idx < filtersList.count; idx++) {
        var smartFilter = filtersList.getObjectValue(idx);
        var filter = smartFilter.getObjectValue(stringIDToTypeID("filter"));
        var filterID = typeIDToStringID(smartFilter.getObjectType(stringIDToTypeID("filter")));
        filterArray_inner = [];
        filterArray_inner.push(idx, filterID);

        for (var j = 0; j < filter.count; j++) {
            getSmartFilterValues(filter, j)

            try {
                if (filter.getObjectValue(filter.getKey(j))) {
                    var filter2 = typeIDToStringID(filter.getKey(j));
                    var filter2 = filter.getObjectValue(stringIDToTypeID(filter2));

                    for (var k = 0; k < filter2.count; k++) {
                        getSmartFilterValues(filter2, k)
                    }
                }
            } catch (e) {}
        }
        filterArray.push(filterArray_inner);
    }
}

function getSmartFilterValues(theDesc, theNumber) {
    var array = filterArray_inner;
    var x = theDesc.getKey(theNumber);
    if (!t2s(x)) {
        var key = x
    } else {
        var key = t2s(x)
    }
    switch (theDesc.getType(theDesc.getKey(theNumber))) {
        case DescValueType.BOOLEANTYPE:
            var value = theDesc.getBoolean(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.CLASSTYPE:
            var value = theDesc.getClass(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.DOUBLETYPE:
            var value = theDesc.getDouble(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.ENUMERATEDTYPE:
            var enumType = typeIDToStringID(theDesc.getEnumerationType(theDesc.getKey(theNumber)));
            var value = typeIDToStringID(theDesc.getEnumerationValue(theDesc.getKey(theNumber)));
            array.push(key, enumType, value);
            break;
        case DescValueType.INTEGERTYPE:
            var value = theDesc.getInteger(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.LISTTYPE:
            var value = theDesc.getList(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.OBJECTTYPE:
            var classID = typeIDToStringID(theDesc.getObjectType(theDesc.getKey(theNumber)));
            var value = theDesc.getObjectValue(theDesc.getKey(theNumber));
            array.push(key, classID, value);
            break;
        case DescValueType.REFERENCETYPE:
            var value = theDesc.getReference(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.STRINGTYPE:
            var value = theDesc.getString(theDesc.getKey(theNumber));
            array.push(key, value);
            break;
        case DescValueType.UNITDOUBLE:
            var unitID = typeIDToStringID(theDesc.getUnitDoubleType(theDesc.getKey(theNumber)));
            var value = theDesc.getUnitDoubleValue(theDesc.getKey(theNumber));
            array.push(key, unitID, value);
            break;
        default:
            break;
    };
};


function adjust_filter_TiefenLichter(_faktor, _filterID, _s_key_amount, _s_unit_amount, _s_value_amount, _s_key_width, _s_unit_width, _s_value_width, _s_key_radius, _s_value_radius, _h_key_amount, _h_unit_amount, _h_value_amount, _h_key_width, _h_unit_width, _h_value_width, _h_key_radius, _h_value_radius, blackClip_key, blackClip_value, whiteClip_key, whiteClip_value, center_key, center_value, colorCorrection_key, colorCorrection_value) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterID);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d3.putReference(s2t("null"), r);
    d.putUnitDouble(s2t(_s_key_amount), s2t(_s_unit_amount), _s_value_amount);
    d.putUnitDouble(s2t(_s_key_width), s2t(_s_unit_width), _s_value_width);
    d.putInteger(s2t(_s_key_radius), Math.round(_s_value_radius * _faktor));
    d5.putObject(s2t("shadowMode"), s2t("adaptCorrectTones"), d);
    d2.putUnitDouble(s2t(_h_key_amount), s2t(_h_unit_amount), _h_value_amount);
    d2.putUnitDouble(s2t(_h_key_width), s2t(_h_unit_width), _h_value_width);
    d2.putInteger(s2t(_h_key_radius), Math.round(_h_value_radius * _faktor));
    d5.putObject(s2t("highlightMode"), s2t("adaptCorrectTones"), d2);
    d5.putDouble(s2t(blackClip_key), blackClip_value);
    d5.putDouble(s2t(whiteClip_key), whiteClip_value);
    d5.putInteger(s2t(center_key), center_value);
    d5.putInteger(s2t(colorCorrection_key), colorCorrection_value);
    d4.putObject(s2t("filter"), s2t("adaptCorrect"), d5);
    d3.putObject(s2t("filterFX"), s2t("filterFX"), d4);
    executeAction(s2t("set"), d3, DialogModes.NO);
}
