const { entrypoints } = require("uxp");

entrypoints.setup({
 
  panels: {
    showPanel: {
      show({node} = {}) {}
    }
  }
});



restoreCheckboxes();
document.querySelector("#salvar").addEventListener("click", async evt => {
  savefunction()
})

function savefunction() {
  var checkboxes = document.querySelectorAll('.checks');
  var checked = {};
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked[checkboxes[i].id] = checkboxes[i].value;
    }
  }
  localStorage.setItem('checked_boxes', JSON.stringify(checked));
  console.log(checked);
}

function restoreCheckboxes() {
  var checkbox = document.querySelectorAll('.checks');
  var checkboxStates = localStorage.getItem('checked_boxes');
  if (checkboxStates) {
    checkboxStates = JSON.parse(checkboxStates); // <-- parse string to object
    for (i = 0; i < checkbox.length; i++) {
      if (checkboxStates.hasOwnProperty(checkbox[i].id)) {
        checkbox[i].checked = true;
      }
    }
  }
}


// if (localStorage.getItem("RGB") === "true") {
//   convertsRGBcheckbox.checked = true;
// } else {
//   convertsRGBcheckbox.checked = false;
// }

// convertsRGBcheckbox.checked = localStorage.getItem("RGB") === "true" ? true : null;





// import functions
const {
  getSettings,
  createSettingsFile,
  setWorkingFolder,
} = require("/lib/settings");
const { exportActiveDocument } = require("/lib/export");

// ui elements
const label = document.querySelector("#labelWorkingFolder");
const btnDefine = document.querySelector("#btnDefine");
const btnSave = document.querySelector("#btnSave");

const init = async () => {
  const settings = (await getSettings())
    ? await getSettings()
    : await createSettingsFile({ workingFolder: {} }, `settings`);

  label.innerHTML = settings.workingFolder.path;

  // listeners
  btnDefine.addEventListener("click", setWorkingFolder);
  btnSave.addEventListener("click", exportActiveDocument);
};

init();
