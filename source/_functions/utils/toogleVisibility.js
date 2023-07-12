// function toogleVisibility(){
//     if(getVisible()){
//           var desc = new ActionDescriptor();
//               var list2 = new ActionList();
//                   var ref = new ActionReference();
//                   ref.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
//               list2.putReference( ref );
//           desc.putList( charIDToTypeID( "null" ), list2 );
//       executeAction( charIDToTypeID( "Hd  " ), desc, DialogModes.NO );
//     }else{
//         var desc = new ActionDescriptor();
//             var list2 = new ActionList();
//                 var ref = new ActionReference();
//                 ref.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
//             list2.putReference( ref );
//         desc.putList( charIDToTypeID( "null" ), list2 );
//     executeAction( charIDToTypeID( "Shw " ), desc, DialogModes.NO );
//     }
//   }

// toogle by IDX, name or activeLayer
function toogleVisibility(_input) {
    try {
        var d = new ActionDescriptor();
        var l = new ActionList();
        var r = new ActionReference();

        if (getVisible(_input)) {
            if (typeof _input == "number") {
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input == "string") {
                if (layer_checkExistence(_input)) {
                    r.putName(s2t('layer'), _input);
                } else {
                    r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                }
            } else if (typeof _input === 'undefined') {
                r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            }
            l.putReference(r);
            d.putList(c2t("null"), l);
            executeAction(s2t("hide"), d, DialogModes.NO);
        } else {
            if (typeof _input == "number") {
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input == "string") {
                if (layer_checkExistence(_input)) {
                    r.putName(s2t('layer'), _input);
                } else {
                    r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                }
            } else if (typeof _input === 'undefined') {
                r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            }
            l.putReference(r);
            d.putList(c2t("null"), l);
            executeAction(s2t("show"), d, DialogModes.NO);
        }
    } catch (e) {
        alert("Error by toogleVisibility: " + e)
    }
}