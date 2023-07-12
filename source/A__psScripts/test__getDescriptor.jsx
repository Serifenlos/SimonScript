// Include the JSON helper
//@include "./assets/json2.js"
// Include the descriptor-info module
//@include "../_assets/descriptor-info.jsx"

// ActionDescriptor example
var ref = new ActionReference();
// ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
var desc = executeActionGet(ref);

// Optional
var descFlags = {
	reference : false,
	extended : true,
	maxRawLimit : 10000,
	maxXMPLimit : 100000,
	saveToFile: '~/Desktop/descriptor-info.json'
};

// Retrieve its properties by running the getProperties function, passing the ActionDescriptor as a param
var descObject = descriptorInfo.getProperties( desc, descFlags );