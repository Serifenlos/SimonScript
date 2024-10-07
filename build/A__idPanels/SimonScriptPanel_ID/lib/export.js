// imports
const{app:app,core:core}=require("photoshop"),batchPlay=require("photoshop").action.batchPlay,fs=require("uxp").storage.localFileSystem,findOrCreateFolder=async(e,t)=>{const a=(await e.getEntries()).filter((e=>e.isFolder)).find((e=>e.name===t));if(a)return a;return await e.createFolder(t)},saveFile=async(e,t,a)=>{
// define the batchplay save as action descriptor dynamically
let o,i;switch(e.flatten(),a){case"tiff":o={_obj:"TIFF",byteOrder:{_enum:"platform",_value:"IBMPC"},LZWCompression:!0},i="TIFF_FILE";break;case"jpeg":o={_obj:"JPEG",extendedQuality:12,matteColor:{_enum:"matteColor",_value:"none"}},i="JPEG_FILE"}const r=await t.createFile(i,{overwrite:!0}),n=await fs.createSessionToken(r);
// batchplay save
await core.executeAsModal((async()=>{await batchPlay([{_obj:"save",as:o,in:{_path:n,_kind:"local"},documentID:e._id,lowerCase:!0,saveStage:{_enum:"saveStageType",_value:"saveBegin"},_options:{dialogOptions:"dontDisplay"}}],{})}))},exportActiveDocument=async()=>{const e=app.activeDocument,t=await getSettings(),a=await fs.getEntryForPersistentToken(t.workingFolder.token),o=await findOrCreateFolder(a,e.title),i=["tiff","jpeg"];
// get the settings file and get the persistent token for the working folder
// scaffold export folders and save files
for(const t of i){const a=await findOrCreateFolder(o,t);await saveFile(e,a,t)}};module.exports={exportActiveDocument:exportActiveDocument};