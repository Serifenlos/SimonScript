const nsURI = "http://ns.simonadrian.de/simonscript/1.0/";
const ns = "ss";

const nsURI_old = "http://ns.simonadrian.de/proofsetup/1.0";

const proofinfo = document.getElementById("proofinfo");

const { core, app } = require("photoshop");
const { batchPlay } = require("photoshop").action;
const { executeAsModal } = require("photoshop").core;
const { XMPMeta, XMPConst } = require("uxp").xmp;
const bp = require("photoshop").action.batchPlay;

// document.getElementById("checkButton").addEventListener("click", checkFunction);

// async function checkFunction() {
//   console.log(XMPMeta.dumpNamespaces());
//   // const { XMPMeta, XMPConst } = require("uxp").xmp;
//   // const bp = require("photoshop").action.batchPlay;
//   // try {await XMPMeta.deleteNamespace(nsURI_old)} catch(e){console.log(e);}
//   // console.log(XMPMeta.dumpNamespaces());
// }



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

// Click a button
for (const button of buttons) {
  button.addEventListener('click', async function (event) {
    // const app = require("photoshop").app;
    if (app.documents.length != 0) {

      var c, e;
      for (c = 0; c < buttons.length; c++) {                          // uncheck all other radios
        buttons[c].checked = false;
      }
      this.checked = true;

      for (e = 0; e < noSoftproofs.length; e++) {                          // uncheck all noSoftproof-Radios
        noSoftproofs[e].checked = false;
      }

      let dataProofProfil = this.getAttribute('data-proofProfil');
      let dataProofIntent = this.getAttribute('data-proofIntent');
      let dataproofTK = Boolean(this.getAttribute('data-proofTK'));
      let dataProofGroup = this.getAttribute('data-proofGroup');

      console.log("button clicked \n\
      dataProofProfil: " + dataProofProfil + "\n\
      dataProofIntent: " + dataProofIntent + "\n\
      dataproofTK: " + dataproofTK + "\n\
      dataProofGroup: " + dataProofGroup);


      try {
        await setMeta(dataProofProfil, dataProofIntent, dataproofTK, dataProofGroup);       // loadScript("[panel] softproof2meta");
        await core.executeAsModal(() => {
          setSoftproof(dataProofProfil, dataProofIntent, dataproofTK)
        });
        await setUI();
      } catch (e) {
        console.log(e);
      }
    }
  });
}

// Click no Softproof
for (const noSoftproof of noSoftproofs) {
  noSoftproof.addEventListener('click', async function () {
    // const { executeAsModal } = require("photoshop").core;
    // const { batchPlay } = require("photoshop").action;
    // const app = require("photoshop").app;
    if (app.documents.length != 0) {

      var xmpData = await getDocumentXMP();
      let xmp = new XMPMeta(xmpData);

      if (xmp.doesPropertyExist(nsURI, "softproofProfil") && xmp.doesPropertyExist(nsURI, "softproofIntent") && xmp.doesPropertyExist(nsURI, "softproofTK") && xmp.doesPropertyExist(nsURI, "softprooGroup")) {

        try {
          await delMeta();
        } catch (e) { console.log(e) }

        try {
          await executeAsModal(toggleProofColors);
        } catch (e) { console.log(e) }

        try {
          await setUI();
        } catch (e) { console.log(e) }

      }

      console.log("button clicked - sp-radio.noSoftproof");
    }
  })
}


async function showAlert(message) {
  // the "async" is required here because we're doing an "await" for the showAlert function
  const app = require('photoshop').app;
  await app.showAlert(message);
}

async function isSoftProof() {

  var xmpData = await getDocumentXMP();
  let xmp = new XMPMeta(xmpData);

  try {
    if (xmp.doesPropertyExist(nsURI, "softproofProfil") && xmp.doesPropertyExist(nsURI, "softproofIntent") && xmp.doesPropertyExist(nsURI, "softproofTK") && xmp.doesPropertyExist(nsURI, "softprooGroup")) {
      var isSoftProof = true;
    } else {
      var isSoftProof = false;
    }
  } catch (e) { var isSoftProof = false; }
  return isSoftProof;
}

async function setSoftproof(_profil, _intent, _mapBlack) {
  // const batchPlay = require("photoshop").action.batchPlay;
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
    // "synchronousExecution": false,
    // "modalBehavior": "fail"
  });
}

async function getSoftProof() {
  try {
    // const { executeAsModal } = require("photoshop").core;
    // const { batchPlay } = require("photoshop").action;

    async function getSoftProof_inner() {
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
        ],
        {}
      );
      return [result[0].profile, result[0].intent._value, result[0].mapBlack]
    }

    var proofSetup = await executeAsModal(getSoftProof_inner);
    return proofSetup;

  } catch (e) { }
}

async function toggleProofColors() {
  // const batchPlay = require("photoshop").action.batchPlay;
  // const { batchPlay } = require("photoshop").action;
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
    }], {});
}

/*--*/

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

/*--*/

// Batchplay commands to get and set XMP
// const { XMPMeta, XMPConst } = require("uxp").xmp;
// const bp = require("photoshop").action.batchPlay;

const getDocumentXMP = async () => {
  return bp(
    [
      {
        _obj: "get",
        _target: {
          _ref: [
            { _property: "XMPMetadataAsUTF8" },
            { _ref: "document", _enum: "ordinal", _value: "targetEnum" },
          ],
        },
      },
    ],
    { synchronousExecution: true }
  )[0].XMPMetadataAsUTF8;
};

const psCore = require("photoshop").core;
const setDocumentXMP = async (xmpString) => {
  try {
    await psCore.executeAsModal(
      async () =>
        await bp(
          [
            {
              _obj: "set",
              _target: [
                { _property: "XMPMetadataAsUTF8" },
                { _ref: "document", _enum: "ordinal", _value: "targetEnum" },
              ],
              to: {
                _obj: "XMPMetadataAsUTF8",
                XMPMetadataAsUTF8: xmpString,
              },
            },
          ],
          { synchronousExecution: false }
        ),
      { commandName: "Setting XMP..." }
    );
  } catch (error) {
    console.error(error);
  }
};


async function setMeta(_softproofProfil, _softproofIntent, _softproofTK, _softprooGroup) {
  var xmpData = await getDocumentXMP();
  let xmp = new XMPMeta(xmpData);

  console.log("setMeta \n\
  _softproofProfil: " + _softproofProfil + "\n\
  _softproofIntent: " + _softproofIntent + "\n\
  _softproofTK: " + _softproofTK + "\n\
  _softprooGroup: " + _softprooGroup);

  if (XMPMeta.getNamespacePrefix(nsURI) === "" || typeof XMPMeta.getNamespacePrefix(nsURI) === 'undefined') {
    XMPMeta.registerNamespace(nsURI, ns);
  }

  try { xmp.setProperty(nsURI, "softproofProfil", _softproofProfil); } catch (e) { console.log(e); }
  try { xmp.setProperty(nsURI, "softproofIntent", _softproofIntent); } catch (e) { console.log(e); }
  try { xmp.setProperty(nsURI, "softproofTK", Boolean(_softproofTK)); } catch (e) { console.log(e); }
  try {
    if (_softprooGroup != null) {
      xmp.setProperty(nsURI, "softprooGroup", _softprooGroup);
    } else { xmp.setProperty(nsURI, "softprooGroup", "undefined"); }
  } catch (e) { console.log(e); }

  await setDocumentXMP(xmp.serialize());
}


async function getMeta() {
  console.log("start getMeta");
  var xmpData = await getDocumentXMP();
  let xmp = new XMPMeta(xmpData);

  if (xmp.doesPropertyExist(nsURI, "softproofProfil") && xmp.doesPropertyExist(nsURI, "softproofIntent") && xmp.doesPropertyExist(nsURI, "softproofTK") && xmp.doesPropertyExist(nsURI, "softprooGroup")) {
    var metaProofProfil = xmp.getProperty(nsURI, "softproofProfil").value;
    var metaProofIntent = xmp.getProperty(nsURI, "softproofIntent").value;
    var metaProofTK = Boolean(xmp.getProperty(nsURI, "softproofTK").value);
    var metaProofGroup = xmp.getProperty(nsURI, "softprooGroup").value;

    console.log("von getMeta: \n\
    metaProofProfil: " + metaProofProfil + "\n\
    metaProofIntent: " + metaProofIntent + "\n\
    metaProofTK: " + metaProofTK + "\n\
    metaProofGroup: " + metaProofGroup);



    // proofinfo.innerHTML = metaProofProfil + " – " + metaProofIntent;


    // var j;
    // for (j = 0; j < buttons.length; j++) {                          // uncheck all other radios
    //   buttons[j].checked = false;
    // }

    // document.querySelectorAll('sp-radio[data-proofProfil="' + metaProofProfil + '"][data-proofIntent="' + metaProofIntent + '"][data-proofTK="' + metaProofTK + '"]')[0].checked = true;
    // console.log("getMeta-> " + metaProofProfil + " - " + metaProofIntent + " - " + metaProofTK + " - " + metaProofGroup);




  } else {
    // // showAlert("nix da")
    // var element = document.getElementById("proofinfo");
    // element.innerHTML = "no Softproof";

    // var k;
    // for (k = 0; k < buttons.length; k++) {                          // uncheck all other radios
    //   buttons[k].checked = false;
    // }
    // document.querySelectorAll('sp-radio')[0].checked = true;
    console.log("no Softproof");
  }
  console.log("end getMeta");
}


async function delMeta() {

  var xmpData = await getDocumentXMP();
  let xmp = new XMPMeta(xmpData);

  // console.log("\
  // _softproofProfil: " + _softproofProfil + "\n\
  // _softproofIntent: " + _softproofIntent + "\n\
  // _softproofTK: " + _softproofTK + "\n\
  // _softprooGroup: " + _softprooGroup);

  xmp.deleteProperty(nsURI, "softproofProfil");
  xmp.deleteProperty(nsURI, "softproofIntent");
  xmp.deleteProperty(nsURI, "softproofTK");
  xmp.deleteProperty(nsURI, "softprooGroup");

  await setDocumentXMP(xmp.serialize());
}




async function setUI() {
  var xmpData = await getDocumentXMP();
  let xmp = new XMPMeta(xmpData);

  if (xmp.doesPropertyExist(nsURI, "softproofProfil") && xmp.doesPropertyExist(nsURI, "softproofIntent") && xmp.doesPropertyExist(nsURI, "softproofTK") && xmp.doesPropertyExist(nsURI, "softprooGroup")) {

    var metaProofProfil = xmp.getProperty(nsURI, "softproofProfil").value;
    var metaProofIntent = xmp.getProperty(nsURI, "softproofIntent").value;
    var metaProofTK = Boolean(xmp.getProperty(nsURI, "softproofTK").value);
    var metaProofGroup = xmp.getProperty(nsURI, "softprooGroup").value;

    proofinfo.innerHTML = metaProofProfil + " – " + metaProofIntent;

    console.log("von setUI: \n\
      metaProofProfil: " + metaProofProfil + "\n\
      metaProofIntent: " + metaProofIntent + "\n\
      metaProofTK: " + metaProofTK + "\n\
      metaProofGroup: " + metaProofGroup);

    var j;
    for (j = 0; j < buttons.length; j++) {                          // uncheck all other radios
      buttons[j].checked = false;
    }
    try { document.querySelectorAll('sp-radio[data-proofProfil="' + metaProofProfil + '"][data-proofIntent="' + metaProofIntent + '"][data-proofTK="' + metaProofTK + '"]')[0].checked = true }
    catch (e) { console.log(e) }

    var f = document.getElementsByClassName("sp-tab");              // uncheck all tabs
    var g;
    for (g = 0; g < f.length; g++) {
      f[g].classList.remove("active", "selected");
    }
    try { document.getElementById(metaProofGroup + "-tab").classList.add("active", "selected") } // check spezific tab
    catch (e) { console.log(e) }

    var f = document.getElementsByClassName("sp-tab-page");         // uncheck all tab-pages
    var g;
    for (g = 0; g < f.length; g++) {
      f[g].classList.remove("active", "visible");
    }
    try { document.getElementById(metaProofGroup + "-tab-page").classList.add("active", "visible") } // check spezific tab-page
    catch (e) { console.log(e) }
    // console.log("setUI-> " + metaProofProfil + " - " + metaProofIntent + " - " + metaProofTK + " - " + metaProofGroup);


    await core.executeAsModal(() => {
      setSoftproof(metaProofProfil, metaProofIntent, metaProofTK)  // set SoftProof
    });
    console.log("ding - kommt von setUI");
  }


  // IF NO METAPROOF-TAG FOUND ############################# 
  else {
    await setUI_noSoftproof();

    console.log("no Softproof - kommt von setUI");
  }

}


async function setUI_noSoftproof() {
  var element = document.getElementById("proofinfo");
  element.innerHTML = "no Softproof";

  var k;
  for (k = 0; k < buttons.length; k++) {                          // uncheck all other radios
    buttons[k].checked = false;
  }
  document.querySelectorAll('sp-radio')[0].checked = true;

  var d;
  for (d = 0; d < noSoftproofs.length; d++) {                          // check all noSoftproof-Radios
    noSoftproofs[d].checked = true;
    noSoftproofs[d].classList.add("checked");
  }


  var f = document.getElementsByClassName("sp-tab");
  var g;
  for (g = 0; g < f.length; g++) {
    f[g].classList.remove("active");
  }

  var f = document.getElementsByClassName("sp-tab-page");
  var g;
  for (g = 0; g < f.length; g++) {
    f[g].classList.remove("active");
  }
}

async function convert_old2new() {
  var xmpData = await getDocumentXMP();
  let xmp = new XMPMeta(xmpData);

  try {

    if (xmp.doesPropertyExist(nsURI_old, "proof_profil") && xmp.doesPropertyExist(nsURI_old, "proof_intent") && xmp.doesPropertyExist(nsURI_old, "proof_tk") && xmp.doesPropertyExist(nsURI_old, "proof_group")) {
      console.log("convert old2new");

      var metaProofProfil = xmp.getProperty(nsURI_old, "proof_profil").value;
      var metaProofIntent = xmp.getProperty(nsURI_old, "proof_intent").value;
      var metaProofTK = Boolean(xmp.getProperty(nsURI_old, "proof_tk").value);
      var metaProofGroup = xmp.getProperty(nsURI_old, "proof_group").value;


      console.log("convert_old2new \n\
    metaProofProfil: " + metaProofProfil + "\n\
    metaProofIntent: " + metaProofIntent + "\n\
    metaProofTK: " + metaProofTK + "\n\
    metaProofGroup: " + metaProofGroup);

      xmp.deleteProperty(nsURI_old, "proof_profil");
      xmp.deleteProperty(nsURI_old, "proof_intent");
      xmp.deleteProperty(nsURI_old, "proof_tk");
      xmp.deleteProperty(nsURI_old, "proof_group");

      

      await setDocumentXMP(xmp.serialize());
      await setMeta(metaProofProfil, metaProofIntent, metaProofTK, metaProofGroup);
    }
  } catch (e) {
    console.log("nix zum Konvertieren: " + e);
  }
  // console.log(XMPMeta.dumpNamespaces());
}





var listener_setSoftProof = async function () {
  await convert_old2new();
  await setUI();
}
require('photoshop').action.addNotificationListener([
  { event: "open" },
  // {event: "select"},
  { event: "layersFiltered" }       // switch Doc  
], listener_setSoftProof);



var listener_proofSetup = async function () {
  try {
    var getProofSetup = await getSoftProof()
    if (getProofSetup != null) {
      await setMeta(getProofSetup[0], getProofSetup[1], getProofSetup[2], undefined);
      await setUI();
    }
  } catch (e) { console.log(e); }
}
require('photoshop').action.addNotificationListener([
  { event: "proofSetup" }
], listener_proofSetup);


// var listener4 = function () {
//   console.log("all");
// }
// require('photoshop').action.addNotificationListener([
//   {event: "all"}
// ], listener4);


var listener_reset = async function () {
  await setUI_noSoftproof();
}
require('photoshop').action.addNotificationListener([
  { event: "close" }
], listener_reset);




