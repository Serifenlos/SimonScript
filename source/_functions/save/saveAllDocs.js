function saveAllDocs() {
	if (app.documents.length > 0) {
		var theFirst = app.activeDocument;
		var theDocs = app.documents;

		function prefSave() {startDisplayDialogs = app.displayDialogs;};
		function prefSet() {app.displayDialogs = DialogModes.NO;};
		function prefReset() {app.displayDialogs = startDisplayDialogs;};

		for (var m = 0; m < theDocs.length; m++) {
			var theDoc = theDocs[m];
			app.activeDocument = theDoc;
			// getting the name and location;  
			var docName = theDoc.name;
			// thanks to xbytor for the regexp;  
			if (docName.indexOf(".") != -1) {
				var basename = docName.match(/(.*)\.[^\.]+$/)[1]
			} else {
				var basename = docName
			};
			// getting the location, if unsaved alert;  
			try {
				var docPath = theDoc.path;
				// save the file if unsaved;  
				if (theDoc.saved == false) {
					prefSave();
					prefSet();
					theDoc.save();
					prefReset();
				}
			}
			// alert if file has not been never saved yet;
			catch (e) {
				alert('noch nie gespeichert')
			};
		};
		app.activeDocument = theFirst;
	};
}