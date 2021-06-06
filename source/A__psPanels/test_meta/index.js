// import { DOMParser } from '../../_assets/node_modules/xmldom'
// import { XMLSerializer } from '../../_assets/node_modules/xmldom'
import {
  DOMParser,
  XMLSerializer
} from '../../_assets/node_modules/xmldom'
// import xmldom from '../../_assets/node_modules/xmldom'

// const { DOMParser } = require('xmldom')

// const doc = new DOMParser().parseFromString(
//   '<xml xmlns="a" xmlns:c="./lite">\n' +
//   '\t<child>test</child>\n' +
//   '\t<child></child>\n' +
//   '\t<child/>\n' +
//   '</xml>',
//   'text/xml'
// )
// doc.documentElement.setAttribute('x', 'y')
// doc.documentElement.setAttributeNS('./lite', 'c:x', 'y3')
// console.info(doc)

// const nsAttr = doc.documentElement.getAttributeNS('./lite', 'x')
// console.info(nsAttr)


// const dom = new DOMParser()
// const xmlSerializer = new DOMParser()
// const domParser = new DOMParser()





async function showAlert(message) {
  // the "async" is required here because we're doing an "await" for the showAlert function
  const app = require('photoshop').app;
  await app.showAlert(message);
}

// document.getElementById("btn_setMeta").addEventListener("click", setMeta2);
document.getElementById("btn_setMeta").addEventListener("click", function () {
  setMeta("PSO MFC Paper (ECI)", "image", "true")
});
document.getElementById("btn_getMeta").addEventListener("click", getMeta);
document.getElementById("btn_delMeta").addEventListener("click", delMeta);



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

async function setMeta(_setProofProfil, _setProofIntent, _setProofTK) {
  const xmpString = await getXMPMetaData();
  const doc = await new DOMParser().parseFromString(xmpString, 'text/xml');

  var nsURI = "http://ns.simonadrian.de/proofsetup/1.0";
  var ns = "proofsetup";
  var profil = "proof_profil";
  var intent = "proof_intent";
  var tk = "proof_tk";

  if (!doc.documentElement.getElementsByTagName("rdf:Description")[0].hasAttribute("xmlns:" + ns + "")) {
    doc.documentElement.getElementsByTagName("rdf:Description")[0].setAttribute("xmlns:" + ns + "", nsURI);
  }

  var docElem = doc.documentElement;

  if (doc.getElementsByTagName(ns + ":" + profil).length != 0) {
    var old_proofProfil = doc.getElementsByTagName(ns + ":" + profil)[0];
    var new_proofProfil = doc.createElement(ns + ":" + profil);
    new_proofProfil.textContent = _setProofProfil;
    docElem.replaceChild(new_proofProfil, old_proofProfil);

  } else {
    var new_proofProfil = doc.createElement(ns + ":" + profil);
    new_proofProfil.textContent = "hich";
    doc.getElementsByTagName("rdf:Description")[0].appendChild(new_proofProfil);
  }


  if (doc.getElementsByTagName(ns + ":" + intent).length != 0) {
    var old_proofIntent = doc.getElementsByTagName(ns + ":" + intent)[0];
    var new_proofIntent = doc.createElement(ns + ":" + intent);
    new_proofIntent.textContent = _setProofIntent;
    docElem.replaceChild(new_proofIntent, old_proofIntent);

  } else {
    var new_proofIntent = doc.createElement(ns + ":" + intent);
    new_proofIntent.textContent = "sdfsdf";
    doc.getElementsByTagName("rdf:Description")[0].appendChild(new_proofIntent);
  }


  if (doc.getElementsByTagName(ns + ":" + tk).length != 0) {
    var old_proofTK = doc.getElementsByTagName(ns + ":" + tk)[0];
    var new_proofTK = doc.createElement(ns + ":" + tk);
    new_proofTK.textContent = _setProofTK;
    docElem.replaceChild(new_proofTK, old_proofTK);

  } else {
    var new_proofTK = doc.createElement(ns + ":" + tk);
    new_proofTK.textContent = "xxx";
    doc.getElementsByTagName("rdf:Description")[0].appendChild(new_proofTK);
  }


  const serialized = await new XMLSerializer().serializeToString(doc);
  // console.log(serialized);
  await setXMPMetaData(serialized);
  console.log("setMeta!");
}




async function getMeta() {
  const xmpString = await getXMPMetaData();
  const doc = await new DOMParser().parseFromString(xmpString, 'text/xml');
  // console.log(doc);
  console.log("getMeta!");
  // console.log(xmpString);

  // const node = doc.getElementsByTagNameNS(namespace, key)[0];
  // const node = doc.documentElement.getAttributeNS(_namespace, _key)[0];
  const proof_profil = doc.getElementsByTagName("proofsetup:proof_profil")[0].childNodes[0].nodeValue;
  const proof_intent = doc.getElementsByTagName("proofsetup:proof_intent")[0].childNodes[0].nodeValue;
  const proof_tk = doc.getElementsByTagName("proofsetup:proof_tk")[0].childNodes[0].nodeValue;

  console.log(proof_profil);
  console.log(proof_intent);
  console.log(proof_tk);

  showAlert(proof_profil + "\n " + proof_intent + "\n " + proof_tk)

}

async function delMeta() {
  const xmpString = await getXMPMetaData();
  const doc = await new DOMParser().parseFromString(xmpString, 'text/xml');
  var ns = "proofsetup";
  var profil = "proof_profil";
  var intent = "proof_intent";
  var tk = "proof_tk";

  try {
    doc.getElementsByTagName("rdf:Description")[0].removeAttribute("xmlns:" + ns + "");
  } catch (e) {}

  try {
    var profilElem = doc.getElementsByTagName(ns + ":" + profil)[0];
    doc.documentElement.removeChild(profilElem);
  } catch (e) {}

  try {
    var intentElem = doc.getElementsByTagName(ns + ":" + intent)[0];
    doc.documentElement.removeChild(intentElem);
  } catch (e) {}

  try {
    var tkElem = doc.getElementsByTagName(ns + ":" + tk)[0];
    doc.documentElement.removeChild(tkElem);
  } catch (e) {}

  const serialized = await new XMLSerializer().serializeToString(doc);
  await setXMPMetaData(serialized);
}



// customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
// customPrefix = "proofsetup:";
// getProofProfil = xmpMeta.getProperty(customNamespace, "proof_profil");
// getProofIntent = xmpMeta.getProperty(customNamespace, "proof_intent");
// getProofTK = xmpMeta.getProperty(customNamespace, "proof_tk");




function setLayerMetadata(key, value, namespace) {
  const xmpString = getLayerXMPMetaData()
  const xmlDoc = xmpString ? domParser.parseFromString(xmpString, 'text/xml') : dom.createDocument(namespace, key, null)
  const node = namespace ? xmlDoc.getElementsByTagNameNS(namespace, key)[0] || xmlDoc.createElementNS(namespace, key) :
    xmlDoc.getElementsByTagName(key)[0] || xmlDoc.createElement(key)
  node.textContent = value
  xmlDoc.appendChild(node)
  setLayerXMPMetaData(xmlSerializer.serializeToString(xmlDoc))
}