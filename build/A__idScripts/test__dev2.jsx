function checkOut(e){app.activeDocument.managedImages[e].checkOut()}function checkIn(e){
// app.activeDocument.managedImages[index].create();
app.activeDocument.managedImages[e].pageItem[0].placeObject("65297"),
// app.activeDocument.selection[0].graphics[0].itemLink.update();
// app.activeDocument.managedImages[index].pageItem[0].replaceEnterpriseImage("65297");
// app.activeDocument.managedImages[index].pageItem[0].elvisPlace("65297");
app.activeDocument.managedImages[e].checkIn()}
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
function testDossier(){var e=app.activeDocument,n=decodeURI(e.name),t=e.entWorkflow.defaultDossier;$.writeln(n),$.writeln(e.entWorkflow.defaultDossier),$.writeln(n),t?$.writeln("idDocDossier: yes"):$.writeln("idDocDossier: no");var i=function(e){var n="",t=e.lastIndexOf(".");n=-1==t?e:e.substr(0,t);return n}(decodeURI(n));$.writeln(i);i=i.replace(/^(.+)((-|_)\d{3})$/g,"$1");$.writeln(i)}
//////////////////////////////////////////////////////////////////////////////
// focusOpenedFile2("24270_FMLUI")
function focusOpenedFile2(e){for(var n=!1,t=0;t<app.documents.length;t++)if(-1!==app.documents[t].name.indexOf(e)){n=!0,app.activeDocument=app.documents[t];break}return n}
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
var _woodwing_file="IMG_20240120_122621",woodwing_file=app.activeDocument.links.itemByName(_woodwing_file);woodwing_file.editOriginal();
//////////////////////////////////////////////////////////////////////////////