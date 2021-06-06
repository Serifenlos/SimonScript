function anordnung_zoom(_zoomSteps) {
    if (app.documents.length > 0) {
        var theFirst = app.activeDocument;
        var theDocs = app.documents;

        for (var m = 0; m < theDocs.length; m++) {
            var theDoc = theDocs[m];
            app.activeDocument = theDoc;

            try {
                fitScreen();
                zoomSteps(_zoomSteps);
            } catch (e) {
                alert('Error')
            };
        };
        app.activeDocument = theFirst;
    };
}
