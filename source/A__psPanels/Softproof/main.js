// const { entrypoints } = require("uxp");

//   showAlert = () => {
//     alert("This is an alert message");
//   }

//   entrypoints.setup({
//     commands: {
//       showAlert,
//     },
//     panels: {
//       vanilla: {
//         show(node ) {
//         }
//       }
//     }
//   });

// function showLayerNames() {
//     const app = require("photoshop").app;
//     const allLayers = app.activeDocument.layers;
//     const allLayerNames = allLayers.map(layer => layer.name);
//     const sortedNames = allLayerNames.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
//     document.getElementById("layers").innerHTML = `
//       <ul>${
//         sortedNames.map(name => `<li>${name}</li>`).join("")
//       }</ul>`;
// }

// document.getElementById("btnPopulate").addEventListener("click", showLayerNames);


const nsURI = "http://ns.simonadrian.de/simonscript/1.0/";
const ns = "ss";
const profil = "proof_profil";
const intent = "proof_intent";
const tk = "proof_tk";
const group = "proof_group";

const proofinfo = document.getElementById("proofinfo");


// attach event listeners for tabs
Array.from(document.querySelectorAll(".sp-tab")).forEach(theTab => {
  theTab.onclick = () => {
    localStorage.setItem("currentTab", theTab.getAttribute("id"));
    Array.from(document.querySelectorAll(".sp-tab")).forEach(aTab => {
      if (aTab.getAttribute("id") === theTab.getAttribute("id")) {
        aTab.classList.add("selected");
      } else {
        aTab.classList.remove("selected");
      }
    });
    Array.from(document.querySelectorAll(".sp-tab-page")).forEach(tabPage => {
      if (tabPage.getAttribute("id").startsWith(theTab.getAttribute("id"))) {
        tabPage.classList.add("visible");
      } else {
        tabPage.classList.remove("visible");
      }
    });
  }
});



const buttons = document.querySelectorAll("sp-radio:not(.noSoftproof)");
const noSoftproofs = document.querySelectorAll("sp-radio.noSoftproof");

for (const button of buttons) {
  button.addEventListener('click', async function (event) {
    const app = require("photoshop").app;
    if (app.documents.length != 0) {
    //   showAlert("Please open at least one document.");
    //   return;
    // }
    // else {

    
    
    var c, e;
    for(c = 0; c < buttons.length; c++ ) {                          // uncheck all other radios
      buttons[c].checked = false;
    }
    this.checked = true;

    for(e = 0; e < noSoftproofs.length; e++ ) {                          // uncheck all noSoftproof-Radios
      noSoftproofs[e].checked = false;
    }


    let dataProofProfil = this.getAttribute('data-proofProfil');
    let dataProofIntent = this.getAttribute('data-proofIntent');
    let dataproofTK = this.getAttribute('data-proofTK');
    let dataproofTK_Boolean = (dataproofTK === 'true');               // convert data-arttibut to boolean
    let dataProofGroup = this.getAttribute('data-proofGroup');


    // await setSoftproof(dataProofProfil, dataProofIntent, dataproofTK_Boolean);
    // await setMeta(dataProofProfil, dataProofIntent, dataproofTK, dataProofGroup);       // loadScript("[panel] softproof2meta");
    // await setUI();
  }
  });
}




for (const noSoftproof of noSoftproofs) {
  noSoftproof.addEventListener('click', async function () {
    const app = require("photoshop").app;
    if (app.documents.length != 0) {
    // console.log(noSoftproof);

    // await toggleProofColors();
    // await delMeta();
    // await setUI();


    }
  })
}



async function showAlert(message) {
  // the "async" is required here because we're doing an "await" for the showAlert function
  const app = require('photoshop').app;
  await app.showAlert(message);
}

async function setSoftproof(_profil, _intent, _mapBlack) {
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay(
    [{
      "_obj": "proofSetup",
      "profile": _profil,
      "intent": {
        "_enum": "intent",
        "_value": _intent
      },
      "mapBlack": _mapBlack,
      "_options": {
        "dialogOptions": "dontDisplay"
      }
    }], {
      "synchronousExecution": false,
      "modalBehavior": "fail"
    });
}

async function getSoftProof() {
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay(
  [
    {
        "_obj": "proofSetup",
        "_target": [
          {
              "_ref": "application",
              "_enum": "ordinal",
              "_value": "targetEnum"
          }
        ],
        "_options": {
          "dialogOptions": "silent"
        }
    }
  ],{
    "synchronousExecution": false,
    "modalBehavior": "fail"
  });
  return result[0];
}

async function toggleProofColors() {
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay(
    [{
      "_obj": "select",
      "_target": [{
        "_ref": "menuItemClass",
        "_enum": "menuItemType",
        "_value": "toggleProofColors"
      }],
      "_options": {
        "dialogOptions": "dontDisplay"
      }
    }], {
      "synchronousExecution": false,
      "modalBehavior": "fail"
    });
}

// async function loadScript(_name) {
//   const batchPlay = require("photoshop").action.batchPlay;
//   const result = await batchPlay(
//       [{
//           "_obj": "AdobeScriptAutomation Scripts",
//           "javaScriptName": _name,
//           "javaScriptMessage": "undefined",
//           "_isCommand": true,
//           "_options": {
//               "dialogOptions": "dontDisplay"
//           }
//       }], {
//           "synchronousExecution": false,
//           "modalBehavior": "fail"
//       });
//       // menuCommand(2982);menuCommand(2986);menuCommand(2986);
// }

async function setXMPMetaData(xmp) {
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay(
    [{
      _obj: 'set',
      _target: [{
        _ref: 'property',
        _property: 'XMPMetadataAsUTF8'
      }, {
        _ref: 'document',
        _enum: 'ordinal',
        _value: 'targetEnum'
      }],
      to: {
        _obj: 'document',
        XMPMetadataAsUTF8: xmp
      }
    }], {
      "synchronousExecution": true,
      "modalBehavior": "fail"
    }
  );
}

async function getXMPMetaData() {
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay([{
    _obj: 'get',
    _target: [{
        _property: 'XMPMetadataAsUTF8'
      },
      {
        _ref: 'document',
        _enum: 'ordinal',
        _value: 'targetEnum'
      },
    ]
  }], {
    "synchronousExecution": false,
    "modalBehavior": "fail"
  })
  return result[0].XMPMetadataAsUTF8;
}

showAlert("ding");