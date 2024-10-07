const{entrypoints:entrypoints}=require("uxp"),os=require("os"),fs=require("fs");
// const { log } = require("console");
entrypoints.setup({panels:{vanilla:{show({node:e}={}){}}}});
// Erhalten Sie den Pfad zum Home-Verzeichnis
const homeDir=os.homedir(),filePath=homeDir+"/.ss_settings.json",encoding={encoding:"utf-8"},inputField=document.getElementsByClassName("input");
// Button-Events
document.querySelector("#buttonOpenSettings").addEventListener("click",(async e=>{await read_json(),document.querySelector("#ss_setting_dialog").setAttribute("open")})),document.querySelector("#buttonOK").addEventListener("click",(async e=>{await write_json(),document.querySelector("#ss_setting_dialog").removeAttribute("open")})),document.querySelector("#buttonCancel").addEventListener("click",(async e=>{document.querySelector("#ss_setting_dialog").removeAttribute("open")}));
// setzte die ID als Label
for(var i=0;i<inputField.length;i++){let e=document.createElement("sp-label");e.textContent=inputField[i].id,"SP-RADIO-GROUP"!==inputField[i].tagName&&e.setAttribute("slot","label"),inputField[i].insertAdjacentElement("afterbegin",e)}async function write_json(){for(var e=[],t=0;t<inputField.length;t++){var i=inputField[t].id;
// var value = inputField[i].value;
for(const l of inputField[t].children)if("SP-CHECKBOX"===l.tagName){console.log(l.tagName),console.log(l.checked);var n=l.checked;inputField[t].dataset.init=!1,null!=i&&null!=n&&e.push({[i]:n})}if("checkbox"===inputField[t].getAttribute("type"));else n=inputField[t].value;null!=i&&null!=n&&e.push({[i]:n})}var l=JSON.stringify(e);try{await fs.writeFile(filePath,l,encoding)}catch(e){console.log(e)}}async function read_json(){try{await fs.open(filePath,"a+");var e=await fs.readFile(filePath,encoding);""===e.trim()&&(
// Datei ist leer, initialisiere mit leeren JSON-Array
e="[]",await fs.writeFile(filePath,e,encoding)),
// try {
// } catch (e) {
//   console.log("jsonError: " + e);
//   // let jsonArray = JSON.parse([]);
// }
// console.log(jsonArray);
// console.log(jsonArray.length);
// console.log(jsonArray[0]);
JSON.parse(e).forEach((e=>{for(let i in e)if(e.hasOwnProperty(i)){console.log(`Key: ${i}, Value: ${e[i]}`);var t=document.getElementById(i);
// if (element.tagName !==  "SP-RADIO-GROUP" || element.tagName !==  "SP-FIELD-GROUP") {
//   element.value = obj[key];
// } else {
//   // element.querySelector('sp-radio[value="' + obj[key] + '"]').checked = true;
//   element.querySelector('>*[value="' + obj[key] + '"]').checked = true;
// }
"SP-RADIO-GROUP"===t.tagName?(console.log("SP-RADIO-GROUP: "+t.id),t.querySelector('sp-radio[value="'+e[i]+'"]').checked=!0):"SP-FIELD-GROUP"===t.tagName?(console.log("SP-FIELD-GROUP: "+t.id),console.log("typeof: "+typeof e[i]+" und "+e[i]),t.querySelector("sp-checkbox").checked=e[i],console.log("check: "+t.querySelector("sp-checkbox").checked)):(console.log("obj[key]: "+e[i]),t.value=e[i])}}));for(var t=0;t<inputField.length;t++)if(console.log("HIER id: "+inputField[t].id),!inputField[t].value||inputField[t].dataset.init){
// inputField[i].value = inputField[i].dataset.default;
if(console.log("HIER data-default: "+inputField[t].dataset.default),"SP-RADIO-GROUP"===inputField[t].tagName)
// console.log("SP-RADIO-GROUP: " + element.id);
inputField[t].querySelector('sp-radio[value="'+inputField[t].dataset.default+'"]').checked=!0;else if("SP-FIELD-GROUP"===inputField[t].tagName){
// console.log("SP-FIELD-GROUP: " + element.id);
// inputField[i].querySelector('sp-checkbox').checked = true;
var i="true"===String(inputField[t].dataset.default).toLowerCase();console.log("typeof2222: "+typeof inputField[t].dataset.default+" und "+inputField[t].dataset.default),console.log("typeof3333: "+typeof i+" und "+i),console.log("init: "+inputField[t].dataset.init);var n=inputField[t].querySelector("sp-checkbox");inputField[t].dataset.init&&(console.log("ding"),n.checked=i);
// if (child == null) {
//   console.log("check!!");
//   child.checked = string2boolan;
// }
}else"SP-SLIDER"===inputField[t].tagName?inputField[t].value=string2number(inputField[t].dataset.default):inputField[t].value=inputField[t].dataset.default;"init"in inputField[t].dataset&&(console.log("data init change: "+inputField[t].dataset.init),inputField[t].dataset.init=!1,console.log("data init changed: "+inputField[t].dataset.init+" bei "+inputField[t].id))}
// console.log("default: " + inputField[i].dataset.default);
// console.log("value: " + inputField[i].value);
// console.log("id: " + inputField[i].id);
// for (var i = 0; i < jsonArray.length; i++) {
//   var id = inputField[i].id;
//   var value = inputField[i].value;
//   data.push({[id]: value});
// }
}catch(e){console.log(e);
// alert("Error read the json: " + e);
}}function string2boolan(e){return"true"===String(e).toLowerCase()}function string2number(e){return Number(e)}
// https://stackoverflow.com/a/469362
// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(e,t){["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach((function(i){e.addEventListener(i,(function(){t(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.value=this.oldValue,console.log("Only digits and '.' are allowed")):this.value=""}))}))}setInputFilter(document.getElementById("ZielAufloesung"),(function(e){return/^\d*\.?\d*$/.test(e);// Allow digits and '.' only, using a RegExp.
}),"Only digits and '.' are allowed");