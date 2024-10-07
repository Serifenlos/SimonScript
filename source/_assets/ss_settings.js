const { entrypoints } = require("uxp");

const os = require('os');
const fs = require("fs");
// const { log } = require("console");

entrypoints.setup({
    panels: {
        vanilla: {
            show({ node } = {}) { }
        }
    }
});

// Erhalten Sie den Pfad zum Home-Verzeichnis
const homeDir = os.homedir();
const filePath = homeDir + "/.ss_settings.json";
const encoding = { encoding: "utf-8" };

const inputField = document.getElementsByClassName('input');



// Button-Events
document.querySelector("#buttonOpenSettings").addEventListener("click", async evt => {
    await read_json();
    document.querySelector('#ss_setting_dialog').setAttribute('open');
})

document.querySelector("#buttonOK").addEventListener("click", async evt => {
    await write_json();
    document.querySelector('#ss_setting_dialog').removeAttribute('open');
})

document.querySelector("#buttonCancel").addEventListener("click", async evt => {
    document.querySelector('#ss_setting_dialog').removeAttribute('open');
})


// setzte die ID als Label
for (var i = 0; i < inputField.length; i++) {
    let id2label = document.createElement('sp-label');
    id2label.textContent = inputField[i].id;
    if (inputField[i].tagName !== "SP-RADIO-GROUP") { id2label.setAttribute('slot', 'label') }
    inputField[i].insertAdjacentElement('afterbegin', id2label);
    // inputField[i].parentNode.insertBefore(id2label, inputField[i]);
}


async function write_json() {
    var data = [];

    for (var i = 0; i < inputField.length; i++) {
        var id = inputField[i].id;
        // var value = inputField[i].value;

        for (const child of inputField[i].children) {
            if (child.tagName === "SP-CHECKBOX") {
                console.log(child.tagName);
                console.log(child.checked);
                var value = child.checked;
                inputField[i].dataset.init = false;
                if (id != null && value != null) {
                    data.push({ [id]: value });
                }
            }
        }


        if (inputField[i].getAttribute("type") === "checkbox") {
            // var value = inputField[i].checked;
        } else {
            var value = inputField[i].value;
        }

        if (id != null && value != null) {
            data.push({ [id]: value });
        }
    }


    var json = JSON.stringify(data);

    try {
        await fs.writeFile(filePath, json, encoding);

    } catch (e) {

        console.log(e);
    }
}


async function read_json() {
    try {
        const fd = await fs.open(filePath, "a+");

        var json = await fs.readFile(filePath, encoding);

        if (json.trim() === "") {
            // Datei ist leer, initialisiere mit leeren JSON-Array
            json = "[]";
            await fs.writeFile(filePath, json, encoding);
        }

        let jsonArray = JSON.parse(json);

        // try {

        // } catch (e) {
        //   console.log("jsonError: " + e);
        //   // let jsonArray = JSON.parse([]);
        // }

        // console.log(jsonArray);
        // console.log(jsonArray.length);
        // console.log(jsonArray[0]);

        jsonArray.forEach(obj => {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    console.log(`Key: ${key}, Value: ${obj[key]}`);

                    var element = document.getElementById(key);
                    // if (element.tagName !==  "SP-RADIO-GROUP" || element.tagName !==  "SP-FIELD-GROUP") {
                    //   element.value = obj[key];

                    // } else {
                    //   // element.querySelector('sp-radio[value="' + obj[key] + '"]').checked = true;
                    //   element.querySelector('>*[value="' + obj[key] + '"]').checked = true;
                    // }

                    if (element.tagName === "SP-RADIO-GROUP") {
                        console.log("SP-RADIO-GROUP: " + element.id);
                        element.querySelector('sp-radio[value="' + obj[key] + '"]').checked = true;

                    } else if (element.tagName === "SP-FIELD-GROUP") {
                        console.log("SP-FIELD-GROUP: " + element.id);
                        console.log("typeof: " + typeof obj[key] + " und " + obj[key]);

                        element.querySelector('sp-checkbox').checked = obj[key];
                        console.log("check: " + element.querySelector('sp-checkbox').checked);


                    } else {
                        console.log("obj[key]: " + obj[key]);
                        element.value = obj[key];
                    }


                }
            }
        });



        for (var i = 0; i < inputField.length; i++) {

            console.log("HIER id: " + inputField[i].id);

            if (!inputField[i].value || inputField[i].dataset.init) {
                console.log("HIER data-default: " + inputField[i].dataset.default);




                // inputField[i].value = inputField[i].dataset.default;



                if (inputField[i].tagName === "SP-RADIO-GROUP") {
                    // console.log("SP-RADIO-GROUP: " + element.id);
                    inputField[i].querySelector('sp-radio[value="' + inputField[i].dataset.default + '"]').checked = true;

                } else if (inputField[i].tagName === "SP-FIELD-GROUP") {
                    // console.log("SP-FIELD-GROUP: " + element.id);
                    // inputField[i].querySelector('sp-checkbox').checked = true;
                    var string2boolan = (String(inputField[i].dataset.default).toLowerCase() === 'true');

                    console.log("typeof2222: " + typeof inputField[i].dataset.default + " und " + inputField[i].dataset.default);
                    console.log("typeof3333: " + typeof string2boolan + " und " + string2boolan);
                    console.log("init: " + inputField[i].dataset.init);

                    var child = inputField[i].querySelector('sp-checkbox');

                    if (inputField[i].dataset.init) {
                        console.log("ding");
                        child.checked = string2boolan;
                    }

                    // if (child == null) {
                    //   console.log("check!!");

                    //   child.checked = string2boolan;
                    // }

                } else if (inputField[i].tagName === "SP-SLIDER") {
                    inputField[i].value = string2number(inputField[i].dataset.default);

                } else {
                    inputField[i].value = inputField[i].dataset.default;
                }

                if ("init" in inputField[i].dataset) {
                    console.log("data init change: " + inputField[i].dataset.init);
                    inputField[i].dataset.init = false;
                    console.log("data init changed: " + inputField[i].dataset.init + " bei " + inputField[i].id);
                }
            }



            // console.log("default: " + inputField[i].dataset.default);
            // console.log("value: " + inputField[i].value);
            // console.log("id: " + inputField[i].id);
        }



        // for (var i = 0; i < jsonArray.length; i++) {
        //   var id = inputField[i].id;
        //   var value = inputField[i].value;
        //   data.push({[id]: value});

        // }



    } catch (e) {

        console.log(e);
        // alert("Error read the json: " + e);
    }
}

function string2boolan(string) {
    return (String(string).toLowerCase() === 'true');
}

function string2number(string) {
    return Number(string)
}












// https://stackoverflow.com/a/469362
// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;

            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                console.log("Only digits and '.' are allowed")
                // this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);

            } else {
                this.value = "";
            }
        });
    });
}


setInputFilter(document.getElementById("ZielAufloesung"), function (value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp.
}, "Only digits and '.' are allowed");