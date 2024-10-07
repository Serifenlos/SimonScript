const{entrypoints:entrypoints}=require("uxp");function savefunction(){for(var e=document.querySelectorAll(".checks"),t={},n=0;n<e.length;n++)e[n].checked&&(t[e[n].id]=e[n].value);localStorage.setItem("checked_boxes",JSON.stringify(t)),console.log(t)}function restoreCheckboxes(){var e=document.querySelectorAll(".checks"),t=localStorage.getItem("checked_boxes");if(t)// <-- parse string to object
for(t=JSON.parse(t),i=0;i<e.length;i++)t.hasOwnProperty(e[i].id)&&(e[i].checked=!0)}
// if (localStorage.getItem("RGB") === "true") {
//   convertsRGBcheckbox.checked = true;
// } else {
//   convertsRGBcheckbox.checked = false;
// }
// convertsRGBcheckbox.checked = localStorage.getItem("RGB") === "true" ? true : null;
// import functions
entrypoints.setup({panels:{showPanel:{show({node:e}={}){}}}}),restoreCheckboxes(),document.querySelector("#salvar").addEventListener("click",(async e=>{savefunction()}));const{getSettings:getSettings,createSettingsFile:createSettingsFile,setWorkingFolder:setWorkingFolder}=require("/lib/settings"),{exportActiveDocument:exportActiveDocument}=require("/lib/export"),label=document.querySelector("#labelWorkingFolder"),btnDefine=document.querySelector("#btnDefine"),btnSave=document.querySelector("#btnSave"),init=async()=>{const e=await getSettings()?await getSettings():await createSettingsFile({workingFolder:{}},"settings");label.innerHTML=e.workingFolder.path,
// listeners
btnDefine.addEventListener("click",setWorkingFolder),btnSave.addEventListener("click",exportActiveDocument)};init();