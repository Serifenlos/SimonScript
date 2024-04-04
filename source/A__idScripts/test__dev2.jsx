

function checkOut(index) {
    app.activeDocument.managedImages[index].checkOut()
}

function checkIn(index) {
    // app.activeDocument.managedImages[index].create();
    app.activeDocument.managedImages[index].pageItem[0].placeObject("65297");
    // app.activeDocument.selection[0].graphics[0].itemLink.update();
    // app.activeDocument.managedImages[index].pageItem[0].replaceEnterpriseImage("65297");
    // app.activeDocument.managedImages[index].pageItem[0].elvisPlace("65297");
    app.activeDocument.managedImages[index].checkIn();
}

// checkOut(1);
// checkIn(1);



//////////////////////////////////////////////////////////////////////////////

// var image = app.selection[0].images[0];
// var imageLink = app.selection[0].graphics[0].itemLink;
// var imagePath = imageLink.elvisFilePath
// var imageFile = new File(imagePath);


// alert("all done")
//////////////////////////////////////////////////////////////////////////////
// testDossier();

function testDossier() {
    var idDoc = app.activeDocument;
    var idDocName = decodeURI(idDoc.name);
    var idDocDossier = idDoc.entWorkflow.defaultDossier;

    $.writeln(idDocName);
    $.writeln(idDoc.entWorkflow.defaultDossier);
    $.writeln(idDocName);

    if (idDocDossier) {
        $.writeln("idDocDossier: yes")
    } else {
        $.writeln("idDocDossier: no")
    }


    var idDocName_only = GetFileNameOnly(decodeURI(idDocName));
    $.writeln(idDocName_only);
    var idDocName_only = idDocName_only.replace(/^(.+)((-|_)\d{3})$/g, "$1");
    $.writeln(idDocName_only);

    function GetFileNameOnly(_fileName) {
        var myString = "";
        var myResult = _fileName.lastIndexOf(".");
        if (myResult == -1) {
            myString = _fileName;
        } else {
            myString = _fileName.substr(0, myResult);
        }
        return myString
    }
}

//////////////////////////////////////////////////////////////////////////////

// focusOpenedFile2("24270_FMLUI")

function focusOpenedFile2(_fileName) {
    var fileIsOpen = false;
    for (var j = 0; j < app.documents.length; j++) {
        if (app.documents[j].name.indexOf(_fileName) !== -1) {
            fileIsOpen = true;
            app.activeDocument = app.documents[j];
            break;
        }
    }
    return fileIsOpen;
}



// function getDocsArray() {
//     var array = [];
//     for (var j = 0; j < app.documents.length; j++) {
//         array.push(app.documents[j].name);
//     }
//     return array;
// }

// var docsArray = getDocsArray()
// $.writeln(docsArray)

// // $.writeln(docsArray.includes("24270_FMLUI-102.indd"));
// $.writeln(array_contains(docsArray, "24270_FMLUI"));

// function array_contains(_array, _value) {
//     for (var c = 0; c < _array.length; c++) {
//         if (_array[c].indexOf(_value) !== -1) {
//             return true;
//         }
//     }
//     return false;
// };


// function array_contains(_array, _value) {
//     if (_array[c].indexOf(_value) !== -1) {
//         return true;
//     }
//     return false;
// };



//////////////////////////////////////////////////////////////////////////////

var _woodwing_file = "IMG_20240120_122621";

var woodwing_file = app.activeDocument.links.itemByName(_woodwing_file);
woodwing_file.editOriginal();


//////////////////////////////////////////////////////////////////////////////