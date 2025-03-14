const { entrypoints } = require("uxp");

// showAlert = () => {
//   alert("This is an alert message");
// }

entrypoints.setup({
  // commands: {
  //   showAlert,
  // },
  panels: {
    vanilla: {
      show(node) {
      }
    }
  }
});



// const {XMPMeta, XMPConst} = require("uxp").xmp;
// let xmp = new XMPMeta();
// xmp.setProperty(XMPConst.NS_XMP, "CreatorTool", "My Script" );
// let xmpStr = xmp.serialize(); // Serialize the XMP packet to XML

// // Retrieve property
// let prop = xmp.getProperty(XMPConst.NS_XMP, "CreatorTool");
// console.log(`namespace: ${prop.namespace}, property path + name: ${prop.path}, value: ${prop.value}`);


const nsURI = "http://ns.simonadrian.de/proofsetup/1.0";
const ns = "proofsetup";
const profil = "proof_profil";
const intent = "proof_intent";
const tk = "proof_tk";
const group = "proof_group";



// Batchplay commands to get and set XMP
const { XMPMeta, XMPConst } = require("uxp").xmp;
const bp = require("photoshop").action.batchPlay;

const getDocumentXMP = () => {
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



function modifyXMP(xmp, meta) {

  /*
    XMPMetaObj.getProperty(schemaNS, propName[, valueType]);
    XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType]);
    XMPMetaObj.deleteProperty(schemaNS, propName);
  
    meta.doesPropertyExist(XMPConst.NS_XMP, "Name")
    XMPMetaObj.doesPropertyExist(schemaNS, propName)
  
    XMPMeta.registerNamespace(namespaceURI, suggestedPrefix);
    XMPMeta.deleteNamespace(namespaceURI);
    XMPMeta.getNamespaceURI(namespacePrefix);
    XMPMeta.getNamespacePrefix(namespaceURI);
    XMPMeta.dumpNamespaces();
  
  */

  // console.log(meta.dumpNamespaces());
  // console.log(meta.getNamespaceURI("simonscript"));
  // console.log(XMPMeta.getNamespaceURI("proofsetup"));

  // XMPMeta.deleteNamespace("http://ns.simonadrian.de/uxp/1.0/");
  // xmp.deleteNamespace("http://ns.simonadrian.de/simonscript/1.0/");

  /*  try {
      const NS_SS = "http://ns.simonadrian.de/simonscript/1.0/";
      // meta.registerNamespace(NS_SS, "ss")
      // xmp.setProperty(NS_SS, "ding", "dong");
  
      // xmp.deleteProperty(NS_SS, "ding");
      // meta.deleteNamespace(NS_SS);
      // meta.deleteNamespace("http://ns.simonadrian.de/uxp/1.0/", "ss");
      xmp.getNamespacePrefix(NS_SS);
    } catch (e) {
      alert(e);
    }
    console.log(meta.dumpNamespaces());*/

  const nsURI = "http://ns.simonadrian.de/simonscript/1.0/";
  var ns_ssPrefix = "ss";
  // try {
  //   var NS_ssPrefix = meta.getNamespacePrefix(NS_ss);
  //   console.log("1");
  // } catch(e) {
  //   var NS_ssPrefix = meta.registerNamespace(NS_ss, NS_ssPrefix);
  //   console.log("2");
  // }

  if (meta.getNamespacePrefix(nsURI) === "" || typeof meta.getNamespacePrefix(nsURI) === 'undefined') {
    var ns_ssPrefix = meta.registerNamespace(nsURI, ns_ssPrefix);
    console.log("1");
  } else {
    var ns_ssPrefix = meta.getNamespacePrefix(nsURI);
    console.log("2");
  }

  console.log("ns_ssPrefix: " + ns_ssPrefix);
  console.log(meta.getNamespacePrefix(nsURI));
  xmp.setProperty(nsURI, "ding2", "dong2");
  console.log(meta.dumpNamespaces());






  // xmp.registerNamespace("ding", "prefix");
  // console.log(xmp.dumpObject());
  // console.log("ding");

  // proofsetup:proof_profil

  //  xmp.appendArrayItem(XMPConst.NS_DC, "title", "Simon", 0, XMPConst.ARRAY_IS_ORDERED);
  //  xmp.appendArrayItem(XMPConst.NS_DC, "title", "Adrian", 1, XMPConst.ARRAY_IS_ORDERED);
  //  xmp.appendArrayItem(XMPConst.NS_DC, "title", "fantasique", 2, XMPConst.ARRAY_IS_ORDERED);
  //  xmp.appendArrayItem(XMPConst.NS_DC, "Creator", "Sample Creator Value", 0, XMPConst.ARRAY_IS_ORDERED);
  //  xmp.appendArrayItem(XMPConst.NS_DC, "description", "Set description Here", 0, XMPConst.ARRAY_IS_ALTERNATIVE);
  //  xmp.setProperty(XMPConst.NS_XMP, "Rating", "4"); // Rating Number
  //  xmp.setProperty(XMPConst.NS_PHOTOSHOP, "AuthorsPosition", "Sample Author Position");
  //  xmp.setProperty(XMPConst.NS_PHOTOSHOP, "CaptionWriter", "Sample Caption Writer");



  // xmp.setProperty(XMPConst.NS_PHOTOSHOP, "ProofProfil", "ISOcoated_v2");
  return xmp;
}


// Finde das Element mit dem Namespace "xmlns:photoshop"
// const photoshopElement = xmlDoc.querySelector("rdf\\:Description photoshop\\:ColorMode");

// // Hole den Inhalt des Elements
// const photoshopContent = photoshopElement.textContent;

// console.log("Inhalt von xmlns:photoshop:", photoshopContent);




// Fetch XMP Form Current Document. Invoke this function only once, if you invoke twice in the document then an error will be thrown
function updateXMP() {
  let xmpData = getDocumentXMP();
  let meta = new XMPMeta(xmpData);
  meta = modifyXMP(meta);
  setDocumentXMP(meta.serialize());
}

function getXML() {
  let xmpData = getDocumentXMP();
  let xml = new XMPMeta(xmpData);
  console.log(xmpData);


  //  let meta = new XMPMeta(xmpData);
  //  meta = modifyXMP(meta);
  //  setDocumentXMP(meta.serialize());
}

function setXML() {
  var xmpData = getDocumentXMP();
  //  console.log(xmpData);
  let meta = new XMPMeta(xmpData);
  //  console.log(XMPConst);
  //  console.log(XMPMeta.dumpNamespaces());

  meta = modifyXMP(meta, XMPMeta);
  setDocumentXMP(meta.serialize());
}

// Create a button in HTML and invoke function updateXMP() as shown below
// document.getElementById("get").addEventListener("click", getXML);
// document.getElementById("set").addEventListener("click", setXML);


document.getElementById("reload").addEventListener("click", getXML_2);


async function getXML_2() {
  let xmpData = getDocumentXMP();
  let xml = new XMPMeta(xmpData);
  // console.log(XMPMeta.dumpNamespaces());
  // console.log(xmpData);

  var nsURI = "http://ns.simonadrian.de/simonscript/1.0/";

  getMeta_woodwing(nsURI, xml, "isWoodwing");
  getMeta_woodwing(nsURI, xml, "arbeitsdatei_RGB");
  getMeta_woodwing(nsURI, xml, "woodwing_RGB");
  getMeta_woodwing(nsURI, xml, "woodwing_file");
  getMeta_woodwing(nsURI, xml, "woodwing_imageID");
  getMeta_woodwing(nsURI, xml, "idDocName");
  getMeta_woodwing(nsURI, xml, "assetsID");
  getMeta_woodwing(nsURI, xml, "studioPublikation");
  getMeta_woodwing(nsURI, xml, "studioAusgabe");
  getMeta_woodwing(nsURI, xml, "softproofProfil");
  getMeta_woodwing(nsURI, xml, "softproofIntent");
  getMeta_woodwing(nsURI, xml, "softproofTK");
  getMeta_woodwing(nsURI, xml, "softproofGroup");
}




function getMeta_woodwing(_ns, _xml, _property) {
  var value = _xml.doesPropertyExist(_ns, _property) ? _xml.getProperty(_ns, _property).value : "";
  document.getElementById(_property).value = value;
}

document.getElementById("save").addEventListener("click", setXML_2);





function setXML_2() {
  var xmpData = getDocumentXMP();
  //  console.log(xmpData);
  let meta = new XMPMeta(xmpData);
  var nsURI = "http://ns.simonadrian.de/simonscript/1.0/";

  //  console.log(XMPConst);
  //  console.log(meta);
  //  console.log(XMPMeta.dumpNamespaces());
  // console.log(getMeta_woodwing(nsURI, meta, "woodwing_imageID"));

  meta = modifyXMP_2(meta, XMPMeta);
  setDocumentXMP(meta.serialize());
}



function modifyXMP_2(xmp, meta) {
  const nsURI = "http://ns.simonadrian.de/simonscript/1.0/";
  var ns_ssPrefix = "ss";


  if (meta.getNamespacePrefix(nsURI) === "" || typeof meta.getNamespacePrefix(nsURI) === 'undefined') {
    var ns_ssPrefix = meta.registerNamespace(nsURI, ns_ssPrefix);
    console.log("1");
  } else {
    var ns_ssPrefix = meta.getNamespacePrefix(nsURI);
    console.log("2");
  }

  console.log("ns_ssPrefix: " + ns_ssPrefix);
  console.log("meta.getNamespacePrefix(nsURI): " + meta.getNamespacePrefix(nsURI));
  // console.log(meta.dumpNamespaces());

  // xmp.setProperty(nsURI, "ding2", "dong2");

  // xmp.setProperty(nsURI, "isWoodwing", document.getElementById("isWoodwing").value);
  xmp.setProperty(nsURI, "arbeitsdatei_RGB", document.getElementById("arbeitsdatei_RGB").value);
  xmp.setProperty(nsURI, "woodwing_RGB", document.getElementById("woodwing_RGB").value);
  xmp.setProperty(nsURI, "woodwing_file", document.getElementById("woodwing_file").value);
  xmp.setProperty(nsURI, "woodwing_imageID", document.getElementById("woodwing_imageID").value);

  xmp.setProperty(nsURI, "idDocName", document.getElementById("idDocName").value);
  xmp.setProperty(nsURI, "assetsID", document.getElementById("assetsID").value);

  xmp.setProperty(nsURI, "studioPublikation", document.getElementById("studioPublikation").value);
  xmp.setProperty(nsURI, "studioAusgabe", document.getElementById("studioAusgabe").value);

  return xmp;
}




function check_NS(_input) {
  var nsURI = "http://ns.simonadrian.de/simonscript/1.0/";
  var NS_SSprefix = "ss";

  var NS_exsists = false;
  if (_input.getNamespacePrefix(nsURI) === "" || typeof _input.getNamespacePrefix(nsURI) === 'undefined') {
    var NS_SSprefix = _input.registerNamespace(nsURI, NS_SSprefix);
    console.log("1");
  } else {
    var NS_SSprefix = _input.getNamespacePrefix(nsURI);
    console.log("2");
  }

  // console.log("NS_SSprefix: " + NS_SSprefix);
  // console.log(meta.getNamespacePrefix(NS_SS));
  // xmp.setProperty(NS_SS, "ding2", "dong2");
  // console.log(meta.dumpNamespaces());

}

var listener = async function () {
  await getXML_2();
}

require('photoshop').action.addNotificationListener([
  { event: "open" },
  { event: "select" },
  { event: "layersFiltered" }       // switch Doc  
], listener);
