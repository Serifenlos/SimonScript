import {
  DOMParser,
  XMLSerializer
} from '../../_assets/node_modules/xmldom'


const nsURI = "http://ns.simonadrian.de/proofsetup/1.0";
const ns = "proofsetup";
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

// fix bug: loose focus
function menuCommand(id) {
  require('photoshop').core.performMenuCommand({
      commandID: id,
      kcanDispatchWhileModal: true,
      _isCommand: false
  });
}
// menuCommand(2982);menuCommand(2986);menuCommand(2986);







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

    // let dataProofProfil = `${event.target.getAttribute('data-proofProfil')}`;
    // let dataProofIntent = `${event.target.getAttribute('data-proofIntent')}`;
    // let dataproofTK = `${event.target.getAttribute('data-proofTK')}`;
    let dataProofProfil = this.getAttribute('data-proofProfil');
    let dataProofIntent = this.getAttribute('data-proofIntent');
    let dataproofTK = this.getAttribute('data-proofTK');
    let dataproofTK_Boolean = (dataproofTK === 'true');               // convert data-arttibut to boolean
    let dataProofGroup = this.getAttribute('data-proofGroup');


    await setSoftproof(dataProofProfil, dataProofIntent, dataproofTK_Boolean);
    await setMeta(dataProofProfil, dataProofIntent, dataproofTK, dataProofGroup);       // loadScript("[panel] softproof2meta");
    await setUI();
    // proofinfo.innerHTML = dataProofProfil + " – " + dataProofIntent;

    // var f = document.getElementsByClassName("sp-tab");
    // var g;
    // for (g = 0; g < f.length; g++) {
    //   f[g].classList.remove("active");
    // }
    
    // var thisTab = this.parentElement.parentElement.getAttribute('id').replace("-page", "");
    // document.getElementById(thisTab).classList.add("active");

    // // showAlert(setMeta(dataProofProfil, dataProofIntent, dataproofTK))
    
    // var a = document.getElementsByClassName("noSoftproof");
    // var b;
    // for (b = 0; b < a.length; b++) {
    //   a[b].classList.remove("checked");
    // }
    // menuCommand(2982);menuCommand(2986);menuCommand(2986);
  }
  });
}


for (const noSoftproof of noSoftproofs) {
  noSoftproof.addEventListener('click', async function () {
    const app = require("photoshop").app;
    if (app.documents.length != 0) {
    // console.log(noSoftproof);
    await toggleProofColors();
    await delMeta();
    await setUI();

    // if (!this.classList.contains("checked")) {
    //   await toggleProofColors();
    //   // loadScript("[panel] softproof2meta delete")
    //   await delMeta();
      
    //   var element = document.getElementById("proofinfo");
    //   element.innerHTML = "no Softproof";
    //   this.classList.add("checked");

    //   var d;
    //   for(d=0; d<noSoftproofs.length; d++ ) {                          // check all noSoftproof-Radios
    //     noSoftproofs[d].checked = true;
    //     noSoftproofs[d].classList.add("checked");
    //   }

    //   var h = document.getElementsByClassName("sp-tab");
    //   var i;
    //   for (i = 0; i < h.length; i++) {
    //     h[i].classList.remove("active");
    //   }
    //   await setUI_del();
    // }
    // else {
    //   console.log("noSoftproof found");
    // }
    // menuCommand(2982);menuCommand(2986);menuCommand(2986);
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

async function loadScript(_name) {
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay(
      [{
          "_obj": "AdobeScriptAutomation Scripts",
          "javaScriptName": _name,
          "javaScriptMessage": "undefined",
          "_isCommand": true,
          "_options": {
              "dialogOptions": "dontDisplay"
          }
      }], {
          "synchronousExecution": false,
          "modalBehavior": "fail"
      });
      // menuCommand(2982);menuCommand(2986);menuCommand(2986);
}

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


// setSoftproof(dataProofProfil, dataProofIntent, dataproofTK)

async function setMeta(_setProofProfil, _setProofIntent, _setProofTK, _setProofGroup) {
  const xmpString = await getXMPMetaData();
  const doc = await new DOMParser().parseFromString(xmpString, 'text/xml');

  if (!doc.documentElement.getElementsByTagName("rdf:Description")[0].hasAttribute("xmlns:" + ns + "")) {
    doc.documentElement.getElementsByTagName("rdf:Description")[0].setAttribute("xmlns:" + ns + "", nsURI);
  }

  var docElem = doc.documentElement;

  if (doc.getElementsByTagName(ns+":"+profil).length != 0) {
    var old_proofProfil = doc.getElementsByTagName(ns+":"+profil)[0];
    var new_proofProfil = doc.createElement(ns+":"+profil);
    new_proofProfil.textContent = _setProofProfil;
    docElem.replaceChild(new_proofProfil, old_proofProfil);

  } else {
    var new_proofProfil = doc.createElement(ns+":"+profil);
    new_proofProfil.textContent = _setProofProfil;
    doc.getElementsByTagName("rdf:Description")[0].appendChild(new_proofProfil);
  }

  if (doc.getElementsByTagName(ns+":"+intent).length != 0) {
    var old_proofIntent = doc.getElementsByTagName(ns+":"+intent)[0];
    var new_proofIntent = doc.createElement(ns+":"+intent);
    new_proofIntent.textContent = _setProofIntent;
    docElem.replaceChild(new_proofIntent, old_proofIntent);

  } else {
    var new_proofIntent = doc.createElement(ns+":"+intent);
    new_proofIntent.textContent = _setProofIntent;
    doc.getElementsByTagName("rdf:Description")[0].appendChild(new_proofIntent);
  }

  if (doc.getElementsByTagName(ns+":"+tk).length != 0) {
    var old_proofTK = doc.getElementsByTagName(ns+":"+tk)[0];
    var new_proofTK = doc.createElement(ns+":"+tk);
    new_proofTK.textContent = _setProofTK;
    docElem.replaceChild(new_proofTK, old_proofTK);

  } else {
    var new_proofTK = doc.createElement(ns+":"+tk);
    new_proofTK.textContent = _setProofTK;
    doc.getElementsByTagName("rdf:Description")[0].appendChild(new_proofTK);
  }
  
  if (doc.getElementsByTagName(ns+":"+group).length != 0) {
    var old_proofGroup = doc.getElementsByTagName(ns+":"+group)[0];
    var new_proofGroup = doc.createElement(ns+":"+group);
    new_proofGroup.textContent = _setProofGroup;
    docElem.replaceChild(new_proofGroup, old_proofGroup);

  } else {
    var new_proofGroup = doc.createElement(ns+":"+group);
    new_proofGroup.textContent = _setProofGroup;
    doc.getElementsByTagName("rdf:Description")[0].appendChild(new_proofGroup);
  }



  const serialized = await new XMLSerializer().serializeToString(doc);
  // console.log(serialized);
  await setXMPMetaData(serialized);
  // console.log("setMeta!");
  // await getMeta();
  // await setUI();
}


async function getMeta() {
  console.log("start getMeta");
  const xmpString = await getXMPMetaData();
  const doc = await new DOMParser().parseFromString(xmpString, 'text/xml');

  // console.log("getMeta! start");

  if ((doc.getElementsByTagName(ns + ":" + profil).length != 0) && (doc.getElementsByTagName(ns + ":" + intent).length != 0) && (doc.getElementsByTagName(ns + ":" + tk).length != 0)) {
    var metaProofProfil = doc.getElementsByTagName(ns + ":" + profil)[0].childNodes[0].nodeValue;
    var metaProofIntent = doc.getElementsByTagName(ns + ":" + intent)[0].childNodes[0].nodeValue;
    var metaProofTK = doc.getElementsByTagName(ns + ":" + tk)[0].childNodes[0].nodeValue;
    var metaProofGroup = "";
    if (doc.getElementsByTagName(ns + ":" + group).length != 0) {
      var metaProofGroup = doc.getElementsByTagName(ns + ":" + group)[0].childNodes[0].nodeValue; 
    } 
    
    proofinfo.innerHTML = metaProofProfil + " – " + metaProofIntent;


    var j;
    for(j = 0; j < buttons.length; j++ ) {                          // uncheck all other radios
      buttons[j].checked = false;
    }

    document.querySelectorAll('sp-radio[data-proofProfil="'+metaProofProfil+'"][data-proofIntent="'+metaProofIntent+'"][data-proofTK="'+metaProofTK+'"]')[0].checked = true;
    console.log("getMeta-> " + metaProofProfil +" - "+ metaProofIntent +" - "+ metaProofTK +" - "+ metaProofGroup);
    // for(e = 0; e < noSoftproofs.length; e++ ) {                          // uncheck all noSoftproof-Radios
    //   noSoftproofs[e].checked = false;
    // }


    // console.log(metaProofProfil);
    // console.log(metaProofIntent);
    // console.log(metaProofTK);
    // console.log("end getMeta if true");
  

  } else {
    // showAlert("nix da")
    var element = document.getElementById("proofinfo");
    element.innerHTML = "no Softproof";

    var k;
    for(k = 0; k < buttons.length; k++ ) {                          // uncheck all other radios
      buttons[k].checked = false;
    }
    document.querySelectorAll('sp-radio')[0].checked = true;
    console.log("no Softproof");
  }
  console.log("end getMeta");
}


async function delMeta() {
  const xmpString = await getXMPMetaData();
  const doc = await new DOMParser().parseFromString(xmpString, 'text/xml');

  try {
    doc.getElementsByTagName("rdf:Description")[0].removeAttribute("xmlns:" + ns + "");
  } catch (e) {console.log("Error " + e)}

  try {
    var profilElem = doc.getElementsByTagName(ns + ":" + profil);
    doc.documentElement.removeChild(profilElem);
  } catch (e) {console.log("Error " + e + profilElem)}

  try {
    var intentElem = doc.getElementsByTagName(ns + ":" + intent);
    doc.documentElement.removeChild(intentElem);
  } catch (e) {console.log("Error " + e)}

  try {
    var tkElem = doc.getElementsByTagName(ns + ":" + tk);
    doc.documentElement.removeChild(tkElem);
  } catch (e) {console.log("Error " + e)}

  try {
    var groupElem = doc.getElementsByTagName(ns + ":" + group);
    doc.documentElement.removeChild(groupElem);
  } catch (e) {console.log("Error " + e)}

  const serialized = await new XMLSerializer().serializeToString(doc);
  await setXMPMetaData(serialized);
}




async function setUI() {
  // console.log("setUI start");
  const xmpString = await getXMPMetaData();
  const doc = await new DOMParser().parseFromString(xmpString, 'text/xml');

  // IF METAPROOF-TAG FOUND ###############################
  if ((doc.getElementsByTagName(ns + ":" + profil).length != 0) && (doc.getElementsByTagName(ns + ":" + intent).length != 0) && (doc.getElementsByTagName(ns + ":" + tk).length != 0)) {
    var metaProofProfil = doc.getElementsByTagName(ns + ":" + profil)[0].childNodes[0].nodeValue;
    var metaProofIntent = doc.getElementsByTagName(ns + ":" + intent)[0].childNodes[0].nodeValue;
    var metaProofTK = doc.getElementsByTagName(ns + ":" + tk)[0].childNodes[0].nodeValue;
    var metaProofGroup = "";
    if (doc.getElementsByTagName(ns + ":" + group).length != 0) {
      var metaProofGroup = doc.getElementsByTagName(ns + ":" + group)[0].childNodes[0].nodeValue; 
    } 
    
    proofinfo.innerHTML = metaProofProfil + " – " + metaProofIntent;


    var j;
    for(j = 0; j < buttons.length; j++ ) {                          // uncheck all other radios
      buttons[j].checked = false;
    }
    try {document.querySelectorAll('sp-radio[data-proofProfil="'+metaProofProfil+'"][data-proofIntent="'+metaProofIntent+'"][data-proofTK="'+metaProofTK+'"]')[0].checked = true}
    catch(e){}

    var f = document.getElementsByClassName("sp-tab");              // uncheck all tabs
    var g;
    for (g = 0; g < f.length; g++) {
      f[g].classList.remove("active", "selected");
    }
    try{document.getElementById(metaProofGroup+"-tab").classList.add("active", "selected")} // check spezific tab
    catch(e){}

    var f = document.getElementsByClassName("sp-tab-page");         // uncheck all tab-pages
    var g;
    for (g = 0; g < f.length; g++) {
      f[g].classList.remove("active", "visible");
    }
    try {document.getElementById(metaProofGroup+"-tab-page").classList.add("active", "visible")} // check spezific tab-page
    catch(e){}
    // console.log("setUI-> " + metaProofProfil +" - "+ metaProofIntent +" - "+ metaProofTK +" - "+ metaProofGroup);


    var metaProofTK_Boolean = (metaProofTK === 'true');               // convert metaProofTK to boolean
    await setSoftproof(metaProofProfil, metaProofIntent, metaProofTK_Boolean)  // set SoftProof

  } 

  // IF NO METAPROOF-TAG FOUND ############################# 
  else {
    await setUI_noSoftproof();

    // console.log("no Softproof");
  }

  // console.log("setUI end");
}


async function setUI_noSoftproof() {
  var element = document.getElementById("proofinfo");
  element.innerHTML = "no Softproof";

  var k;
  for(k = 0; k < buttons.length; k++ ) {                          // uncheck all other radios
    buttons[k].checked = false;
  }
  document.querySelectorAll('sp-radio')[0].checked = true;

  var d;
  for(d=0; d<noSoftproofs.length; d++ ) {                          // check all noSoftproof-Radios
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





// var listener = function ding() {
//   // showAlert("dingAlert")
//   // console.log("ding");
//   getMeta()
// }
// require('photoshop').action.addNotificationListener([
//   // {event: "select"},
//   // {event: "open"},
//   {event: "layersFiltered"}       // switch Doc  
// ], listener);


var listener2 = async function() {
  await setUI();
}
require('photoshop').action.addNotificationListener([
  {event: "open"},
  // {event: "select"},
  {event: "layersFiltered"}       // switch Doc  
], listener2);




var listener3 = async function() {
  var getProofSetup = await getSoftProof();
  // console.log(getProofSetup.profile);
  // console.log(getProofSetup.intent._value);
  // console.log(getProofSetup.mapBlack);
  await setMeta(getProofSetup.profile, getProofSetup.intent._value, getProofSetup.mapBlack, undefined);
  await setUI();

}
require('photoshop').action.addNotificationListener([
  {event: "proofSetup"}
], listener3);


// var listener4 = function ding4() {
//   console.log("all");
// }
// require('photoshop').action.addNotificationListener([
//   {event: "all"}
// ], listener4);


var listener5 = async function() {
  await setUI_noSoftproof();
}
require('photoshop').action.addNotificationListener([
  {event: "close"}
], listener5);