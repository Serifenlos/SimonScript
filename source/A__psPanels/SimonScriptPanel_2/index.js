const executeAsModal = require('photoshop').core.executeAsModal;
const batchPlay = require("photoshop").action.batchPlay;

async function menuItem(_name) {
  let result;
  let psAction = require("photoshop").action;

  let command = [
      {
          "_obj": "select",
          "_target": [{
              "_enum": "menuItemType",
              "_ref": "menuItemClass",
              "_value": _name
          }]
      }
  ];
  result = await psAction.batchPlay(command, {});
}


document.getElementById("A_kachel").addEventListener("click", async () => {
    console.clear();
    // console.log("v3");



    await executeAsModal(  () => { menuItem("tile")}, {});
    // await executeAsModal( () => {menuItem("fitOnScreen")}, {});

        const app = require("photoshop").app;
    var theFirst, theDocs;
    // if (app.documents.length > 0) {
        // console.clear();
        console.log("app.documents.length " + app.documents.length)
        var theFirst = app.activeDocument;
        // console.log(theFirst);
        var theDocs = app.documents;

        for (var m = 0; m < theDocs.length; m++) {
            // const app = require("photoshop").app;
            // console.log("m " + m)
            // var theDoc = theDocs[m];
            // app.activeDocument = theDocs[m];

            // app.activeDocument = app.documents[m];
            // try {
            //   await executeAsModal( async () => {await app.activeDocument = app.documents[m]}, {});
            // } catch(e) {console.log("e "+e);}

            // await executeAsModal( changeDoc(m), {});
            async function changeDoc(_m) {
              const app = require("photoshop").app;
              console.log("doc[m] "+app.documents[_m].name);
              app.activeDocument = app.documents[_m];
            }
            await executeAsModal( () => { changeDoc(m)}, {});


            // console.log("doc[m] "+app.documents[m]);

            try {
              // await executeAsModal( () => { menuItem("fitOnScreen");menuItem("zoomOut")}, {});
              await executeAsModal( () => { menuItem("fitOnScreen")}, {});
              await executeAsModal( () => { menuItem("zoomOut")}, {});
                // console.log("sucess");
            } catch (e) {
                console.log("error " + e)
                // alert('Error');
            };
        };
        await executeAsModal( () => { changeDoc(0)}, {});
        // app.activeDocument = theFirst;
    // };

});


