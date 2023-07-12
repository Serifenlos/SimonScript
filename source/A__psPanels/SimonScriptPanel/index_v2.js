document.getElementById("A_kachel").addEventListener("click", async function() {
    console.log("dingdong");
    const batchPlay = require("photoshop").action.batchPlay;

    async function fitScreen() {
        let result;
        let psAction = require("photoshop").action;
    
        let command = [
            // Ganzes Bild (Menübefehl) Auswahl 
            {"_obj":"select","_target":[{"_enum":"menuItemType","_ref":"menuItemClass","_value":"fitOnScreen"}]}
            // {"_obj":"select","_target":[{"_enum":"menuItemType","_ref":"menuItemClass","_value":"tile"}]}
        ];
        result = await psAction.batchPlay(command, {});
    }
    
    async function runModalFunction() {
        await require("photoshop").core.executeAsModal(fitScreen, {"commandName": "Action Commands"});
    }
    
    await runModalFunction();
    
});

