// Include the JSON helper
//@include "./assets/json2.js"
// Include the descriptor-info module
//@include "../_assets/descriptor-info.jsx"
// ActionDescriptor example
var ref=new ActionReference;
// ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
ref.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));var desc=executeActionGet(ref),descFlags={reference:!1,extended:!0,maxRawLimit:1e4,maxXMPLimit:1e5,saveToFile:"~/Desktop/descriptor-info.json"},descObject=descriptorInfo.getProperties(desc,descFlags);
// Optional