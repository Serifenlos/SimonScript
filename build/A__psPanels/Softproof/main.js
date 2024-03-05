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
const nsURI="http://ns.simonadrian.de/simonscript/1.0/",ns="ss",profil="proof_profil",intent="proof_intent",tk="proof_tk",group="proof_group",proofinfo=document.getElementById("proofinfo");
// attach event listeners for tabs
Array.from(document.querySelectorAll(".sp-tab")).forEach((t=>{t.onclick=()=>{localStorage.setItem("currentTab",t.getAttribute("id")),Array.from(document.querySelectorAll(".sp-tab")).forEach((o=>{o.getAttribute("id")===t.getAttribute("id")?o.classList.add("selected"):o.classList.remove("selected")})),Array.from(document.querySelectorAll(".sp-tab-page")).forEach((o=>{o.getAttribute("id").startsWith(t.getAttribute("id"))?o.classList.add("visible"):o.classList.remove("visible")}))}}));const buttons=document.querySelectorAll("sp-radio:not(.noSoftproof)"),noSoftproofs=document.querySelectorAll("sp-radio.noSoftproof");for(const t of buttons)t.addEventListener("click",(async function(t){if(0!=require("photoshop").app.documents.length){
//   showAlert("Please open at least one document.");
//   return;
// }
// else {
var o,e;for(o=0;o<buttons.length;o++)// uncheck all other radios
buttons[o].checked=!1;for(this.checked=!0,e=0;e<noSoftproofs.length;e++)// uncheck all noSoftproof-Radios
noSoftproofs[e].checked=!1;this.getAttribute("data-proofProfil"),this.getAttribute("data-proofIntent"),this.getAttribute("data-proofTK"),this.getAttribute("data-proofGroup")}}));for(const t of noSoftproofs)t.addEventListener("click",(async function(){require("photoshop").app.documents.length}));async function showAlert(t){
// the "async" is required here because we're doing an "await" for the showAlert function
const o=require("photoshop").app;await o.showAlert(t)}async function setSoftproof(t,o,e){const r=require("photoshop").action.batchPlay;await r([{_obj:"proofSetup",profile:t,intent:{_enum:"intent",_value:o},mapBlack:e,_options:{dialogOptions:"dontDisplay"}}],{synchronousExecution:!1,modalBehavior:"fail"})}async function getSoftProof(){const t=require("photoshop").action.batchPlay;return(await t([{_obj:"proofSetup",_target:[{_ref:"application",_enum:"ordinal",_value:"targetEnum"}],_options:{dialogOptions:"silent"}}],{synchronousExecution:!1,modalBehavior:"fail"}))[0]}async function toggleProofColors(){const t=require("photoshop").action.batchPlay;await t([{_obj:"select",_target:[{_ref:"menuItemClass",_enum:"menuItemType",_value:"toggleProofColors"}],_options:{dialogOptions:"dontDisplay"}}],{synchronousExecution:!1,modalBehavior:"fail"})}
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
async function setXMPMetaData(t){const o=require("photoshop").action.batchPlay;await o([{_obj:"set",_target:[{_ref:"property",_property:"XMPMetadataAsUTF8"},{_ref:"document",_enum:"ordinal",_value:"targetEnum"}],to:{_obj:"document",XMPMetadataAsUTF8:t}}],{synchronousExecution:!0,modalBehavior:"fail"})}async function getXMPMetaData(){const t=require("photoshop").action.batchPlay;return(await t([{_obj:"get",_target:[{_property:"XMPMetadataAsUTF8"},{_ref:"document",_enum:"ordinal",_value:"targetEnum"}]}],{synchronousExecution:!1,modalBehavior:"fail"}))[0].XMPMetadataAsUTF8}showAlert("ding");