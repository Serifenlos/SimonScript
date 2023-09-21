const app = require("photoshop").app;

// fix bug: loose focus
function menuCommand(id) {
    require('photoshop').core.performMenuCommand({
        commandID: id,
        kcanDispatchWhileModal: true,
        _isCommand: false
    });
}
// menuCommand(2982);menuCommand(2986);menuCommand(2986);








async function creatAdjustmentLayer(_type) {

    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
        [{
            "_obj": "make",
            "_target": [{
                "_ref": "adjustmentLayer"
            }],
            "using": {
                "_obj": "adjustmentLayer",
                // "name": "dong",
                "type": {
                    "_obj": _type,
                    "shadowLevels": [0, 0, 0],
                    "midtoneLevels": [0, 0, 0],
                    "highlightLevels": [0, 0, 0],
                    "preserveLuminosity": true,
                    "presetKind": {
                        "_enum": "presetKindType",
                        "_value": "presetKindDefault"
                    }
                }
            },
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

document.getElementById("curves").addEventListener("click", function () {
    creatAdjustmentLayer("curves");
});
document.getElementById("levels").addEventListener("click", function () {
    creatAdjustmentLayer("levels");
});
document.getElementById("brightnessEvent").addEventListener("click", function () {
    creatAdjustmentLayer("brightnessEvent");
});
document.getElementById("selectiveColor").addEventListener("click", function () {
    creatAdjustmentLayer("selectiveColor");
});
document.getElementById("colorBalance").addEventListener("click", function () {
    creatAdjustmentLayer("colorBalance");
});
document.getElementById("hueSaturation").addEventListener("click", function () {
    creatAdjustmentLayer("hueSaturation");
});
document.getElementById("blackAndWhite").addEventListener("click", function () {
    creatAdjustmentLayer("blackAndWhite");
});
document.getElementById("vibrance").addEventListener("click", function () {
    creatAdjustmentLayer("vibrance");
});




async function createGrau() {
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
        [{
            "_obj": "make",
            "_target": [{
                "_ref": "layer"
            }],
            "using": {
                "_obj": "layer",
                "name": "Abwedeln/Nachbelichten",
                "mode": {
                    "_enum": "blendMode",
                    "_value": "overlay"
                },
                "fillNeutral": true
            },
            "layerID": 37,
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
document.getElementById("grau").addEventListener("click", function () {
    createGrau();
});

async function doAction(_set, _action) {
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
        [{
            "_obj": "play",
            "_target": [{
                "_ref": "action",
                "_name": _action
            },
            {
                "_ref": "actionSet",
                "_name": _set
            }
            ],
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
// document.getElementById("bunt_old").addEventListener("click", function() {
//     doAction("A fängt an.", "[A] bunt ALL");
// });
// document.getElementById("unbunt_old").addEventListener("click", function() {
//     doAction("A fängt an.", "[A] unbunt ALL");
// });
document.getElementById("hochpass").addEventListener("click", function () {
    doAction("A fängt an.", "[A] Highpass_Sharpening");
});
document.getElementById("mirco").addEventListener("click", function () {
    doAction("A fängt an.", "[A] microKontrast");
});


async function saft() {
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
        [{
            "_obj": "set",
            "_target": [{
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }],
            "to": {
                "_obj": "layer",
                "mode": {
                    "_enum": "blendMode",
                    "_value": "softLight"
                },
                "blendRange": [{
                    "_obj": "blendRange",
                    "channel": {
                        "_ref": "channel",
                        "_enum": "channel",
                        "_value": "gray"
                    },
                    "srcBlackMin": 0,
                    "srcBlackMax": 0,
                    "srcWhiteMin": 255,
                    "srcWhiteMax": 255,
                    "destBlackMin": 0,
                    "destBlackMax": 255,
                    "destWhiteMin": 255,
                    "desaturate": 255
                }],
                "layerEffects": {
                    "_obj": "layerEffects",
                    "scale": {
                        "_unit": "percentUnit",
                        "_value": 100
                    }
                }
            },
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
document.getElementById("saft").addEventListener("click", function () {
    saft();
});


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

document.getElementById("dodge").addEventListener("click", function () {
    loadScript("[A] Dodge")
});
document.getElementById("burn").addEventListener("click", function () {
    loadScript("[A] Burn")
});
document.getElementById("db").addEventListener("click", function () {
    loadScript("[A] Dodge & Burn")
});
document.getElementById("db_mid").addEventListener("click", function () {
    loadScript("[A] Dodge & Burn ⬨")
});
document.getElementById("db_hochmidtief").addEventListener("click", function () {
    loadScript("[A] Dodge & Burn △⬨▽");
});
// document.getElementById("db_hochtief").addEventListener("click", function () {
//     loadScript("[A] Dodge & Burn △▽");
// });

document.getElementById("autoLevel").addEventListener("click", function (event) {
    if (event.shiftKey) {
        loadScript("[panel] autoLevel1: autoContrast");
    } else if (event.altKey) {
        loadScript("[panel] autoLevel3: autoBlackWhite");
    } else if (event.metaKey) {
        loadScript("[panel] autoLevel4: autoMachineLearning");
    } else {
        loadScript("[panel] autoLevel2: auto");
    }
});

// document.getElementById("autoLevel1").addEventListener("click", function () {
//     loadScript("[panel] autoLevel1: autoContrast");
// });
// document.getElementById("autoLevel1+").addEventListener("click", function () {
//     loadScript("[panel] autoLevel1+: autoContrast +autoNeutrals");
// });
// document.getElementById("autoLevel2").addEventListener("click", function () {
//     loadScript("[panel] autoLevel2: auto");
// });
// document.getElementById("autoLevel2+").addEventListener("click", function () {
//     loadScript("[panel] autoLevel2+: auto +autoNeutrals");
// });
// document.getElementById("autoLevel3").addEventListener("click", function () {
//     loadScript("[panel] autoLevel3: autoBlackWhite");
// });
// document.getElementById("autoLevel3+").addEventListener("click", function () {
//     loadScript("[panel] autoLevel3+: autoBlackWhite +autoNeutrals");
// });
// document.getElementById("autoLevel4").addEventListener("click", function () {
//     loadScript("[panel] autoLevel4: autoMachineLearning");
// });



document.getElementById("saveall").addEventListener("click", function () {
    loadScript("[panel] saveAllDocs")
});
document.getElementById("freisteller").addEventListener("click", function () {
    loadScript("[panel] Freisteller");
});
document.getElementById("freistellerHG").addEventListener("click", function () {
    loadScript("[panel] FreistellerHG");
});
document.getElementById("layerExpand").addEventListener("click", function () {
    loadScript("[panel] LayerExpand")
});
document.getElementById("itunes").addEventListener("click", function () {
    loadScript("[A] Cover für iTunes")
});



document.getElementById("ScriptListenerON").addEventListener("click", function () {
    loadScript("[helper] ScriptListener ON")
});
document.getElementById("ScriptListenerOFF").addEventListener("click", function () {
    loadScript("[helper] ScriptListener OFF")
});
document.getElementById("startLastLogEntry").addEventListener("click", function () {
    loadScript("LastLogEntry")
});
document.getElementById("startCleanSL").addEventListener("click", function () {
    loadScript("Clean SL")
});
document.getElementById("mask2image").addEventListener("click", function () {
    loadScript("[panel] mask2image")
});


document.getElementById("A_kachel").addEventListener("click", async function () {
    loadScript("[panel] view Kachel");

    // await menuItem("tile");

    // const app = require("photoshop").app;
    // var theFirst, theDocs;
    // if (app.documents.length > 0) {
    //     console.clear();
    //     console.log("app.documents.length " + app.documents.length)
    //     var theFirst = app.activeDocument;
    //     console.log(theFirst);
    //     var theDocs = app.documents;

    //     for (var m = 0; m < theDocs.length; m++) {
    //         const app = require("photoshop").app;
    //         console.log("m " + m)
    //         // var theDoc = theDocs[m];
    //         // app.activeDocument = theDocs[m];
    //         app.activeDocument = app.documents[m];
    //         console.log(app.documents[m]);

    //         try {
    //             await menuItem("fitOnScreen");
    //             await menuItem("zoomOut");
    //             console.log("sucess");
    //         } catch (e) {
    //             console.log("error " + e)
    //             // alert('Error');
    //         };
    //     };
    //     app.activeDocument = theFirst;
    // };
});


document.getElementById("A_1").addEventListener("click", function () {
    loadScript("[panel] view 1")
});
document.getElementById("A_2vertical").addEventListener("click", function () {
    loadScript("[panel] view 2vertical")
});
document.getElementById("A_2horizontal").addEventListener("click", function () {
    loadScript("[panel] view 2horizontal")
});
document.getElementById("A_3").addEventListener("click", function () {
    loadScript("[panel] view 3")
});
document.getElementById("A_3vertical").addEventListener("click", function () {
    loadScript("[panel] view 3vertical")
});
document.getElementById("A_3horizontal").addEventListener("click", function () {
    loadScript("[panel] view 3horizontal")
});
document.getElementById("A_4").addEventListener("click", function () {
    loadScript("[panel] view 4")
});
document.getElementById("A_6").addEventListener("click", function () {
    loadScript("[panel] view 6")
});
document.getElementById("A_zoomout").addEventListener("click", function () {
    loadScript("[panel] view ZoomOut")
});
document.getElementById("A_zoomin").addEventListener("click", function () {
    loadScript("[panel] view ZoomIn")
});
document.getElementById("A_allesAngleichen").addEventListener("click", function () {
    loadScript("[panel] view MatchAll");
});

// document.getElementById("checkTL_minus").addEventListener("click", function () {
//     loadScript("[panel] checkTiefenLichter edit-");
// });
document.getElementById("checkTL_minus").addEventListener("click", function (event) {
    if (event.shiftKey) {
        loadScript("[panel] checkTiefenLichter edit--");
    } else {
        loadScript("[panel] checkTiefenLichter edit-");
    }
});
document.getElementById("checkTL_create").addEventListener("click", function () {
    loadScript("[panel] checkTiefenLichter create");
});
// document.getElementById("checkTL_plus").addEventListener("click", function () {
//     loadScript("[panel] checkTiefenLichter edit+");
// });
document.getElementById("checkTL_plus").addEventListener("click", function (event) {
    if (event.shiftKey) {
        loadScript("[panel] checkTiefenLichter edit++");
    } else {
        loadScript("[panel] checkTiefenLichter edit+");
    }
});






async function menuItem(_name) {

    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
        [{
            "_obj": "select",
            "_target": [{
                "_enum": "menuItemType",
                "_ref": "menuItemClass",
                "_value": _name
            }]
        }], {
        "synchronousExecution": false,
        "modalBehavior": "fail"
    });

};



document.getElementById("depthMask").addEventListener("click", function (event) {
    if (!event.altKey && event.shiftKey) {
        loadScript("[panel] Tiefenmaske merged tiefe selection");
    } else if (event.altKey && !event.shiftKey) {
        loadScript("[panel] Tiefenmaske this tiefe folder");
    } else if (event.altKey && event.shiftKey) {
        loadScript("[panel] Tiefenmaske this tiefe selection");
    } else {
        loadScript("[panel] Tiefenmaske merged tiefe folder");
    }
});






document.getElementById("bunt").addEventListener("click", function (event) {
    if (!event.altKey && event.shiftKey) {
        loadScript("[panel] Select Bunt Selection");
    } else if (event.altKey && !event.shiftKey) {
        loadScript("[panel] Select This Bunt FolderMask");
    } else if (event.altKey && event.shiftKey) {
        loadScript("[panel] Select This Bunt Selection");
    } else {
        loadScript("[panel] Select Bunt FolderMask");
    }
});


// document.getElementById("farbmaske").addEventListener("click", function (event) {
//     loadScript("[panel] Farbmaske v1");
// });

document.getElementById("farbmaske").addEventListener("click", function (event) {
    if (event.shiftKey) {
        loadScript("[panel] Farbmaske v2");
    } else if (event.altKey) {
        loadScript("[panel] Farbmaske v3");
    } else {
        loadScript("[panel] Farbmaske v1");
    }
});



document.getElementById("unbunt").addEventListener("click", function (event) {
    if (!event.altKey && event.shiftKey) {
        loadScript("[panel] Select Unbunt Selection");
    } else if (event.altKey && !event.shiftKey) {
        loadScript("[panel] Select This Unbunt FolderMask");
    } else if (event.altKey && event.shiftKey) {
        loadScript("[panel] Select This Unbunt Selection");
    } else {
        loadScript("[panel] Select Unbunt FolderMask");
    }
});



document.getElementById("motivMask").addEventListener("click", function (event) {
    if (!event.altKey && event.shiftKey) {
        loadScript("[panel] Select Motiv Selection");
    } else if (event.altKey && !event.shiftKey) {
        loadScript("[panel] Select nicht-Motiv Folder");
    } else if (event.altKey && event.shiftKey) {
        loadScript("[panel] Select nicht-Motiv Selection");
    } else {
        loadScript("[panel] Select Motiv Folder");
    }
});


document.getElementById("skyMask").addEventListener("click", function (event) {
    if (!event.altKey && event.shiftKey) {
        loadScript("[panel] Select Himmel Selection");
    } else if (event.altKey && !event.shiftKey) {
        loadScript("[panel] Select Himmel-nicht Folder");
    } else if (event.altKey && event.shiftKey) {
        loadScript("[panel] Select Himmel-nicht Selection");
    } else {
        loadScript("[panel] Select Himmel Folder");
    }
});

document.getElementById("outOfGamut").addEventListener("click", function (event) {
    if (event.shiftKey) {
        loadScript("[panel] Select ouOfGamut Selection");
    } else {
        loadScript("[panel] Select ouOfGamut Folder");
    }
});



// async function showAlert(message) {
//     // the "async" is required here because we're doing an "await" for the showAlert function
//     const app = require('photoshop').app;
//     await app.showAlert(message);
// }

async function temp() {
    // const docProfile = app.activeDocument.colorProfileName;
    // app.showAlert(docProfile);


}


async function myDepth() {
    const result = await batchPlay(
        [{
            "_obj": "get",
            "_target": [{
                "_property": "depth"
            },
            {
                "_ref": "document",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
            ],
            "_options": {
                "dialogOptions": "dontDisplay"
            }
        }], {
        "synchronousExecution": false,
        "modalBehavior": "fail"
    });

    var documentDepth = result[0].depth;
    app.showAlert(`The Document is in ${documentDepth.toString()} bits`);
}

async function colorSettings() {
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
        [{
            "_obj": "set",
            "_target": [
                {
                    "_property": "colorSettings",
                    "_ref": "property"
                },
                {
                    "_ref": "application"
                }
            ],
            "to": {
                "_obj": "colorSettings",
                "askMismatchPasting": false
            }
        }], {
        "synchronousExecution": false,
        "modalBehavior": "fail"
    });

    app.showAlert(result);
}



var listener2 = async function () {
    // await myDepth();
    await colorSettings();
    // showAlert("ding");
}
require('photoshop').action.addNotificationListener([
    { event: "open" },
    // {event: "select"},
    { event: "layersFiltered" }       // switch Doc  
], listener2);


/*



// const app = require('photoshop').app;
const fs = require('uxp').storage.localFileSystem;

const onSelect = (_, descriptor) => {
    if (descriptor._target?.[0]._ref === "layer" && descriptor._target?.[0]._name === "Farbe maskieren") {
        // -> The layer with name "Test Layer 1" was selected
        // alert("yess")
        simulateKeyPress();
        // try {
        // var appleScript = 'tell application "System Events" to keystroke "3" using {option down}';
        // await app.system('osascript -e \'' + appleScript + '\'');
        // } catch(e) {alert(e)}
    }
}

// require("photoshop").action.addNotificationListener(['select'], onSelect);
// simulateKeyPress();

async function simulateKeyPress(event) {
    // alert("yes");
    try {
        alert("yes");
        // const app = require('photoshop').app;
        // var appleScript = 'tell application "System Events" to keystroke "3" using {option down}';
        // var result = require("photoshop").system('osascript -e \'' + appleScript + '\'');

        
        // var bat = new File("/Users/simon/Documents/Simon/_scriptsAliase/TestBilder/simulateKeyPress_alt3.scpt");
        // bat.execute();

        // var appleScript = new File('simulateKeyPress_alt3.app');
        // if (appleScript.exists) {
        //     appleScript.execute(); //dauert zu lang, wird von der nächsten function überholt
        // }

        const appleScriptFile = await fs.getFileForPath('/Users/simon/Documents/Simon/_scriptsAliase/TestBilder/simulateKeyPress_alt3.scpt');
        await appleScriptFile.execute();

    } catch (e) { alert(e) }
}



// const app = require('photoshop');

var layerSelectionListener = async function (event) {
    // if (event.type === "layer") {
        var selectedLayerName = await require("photoshop").activeDocument.activeLayer.name;
        // if (selectedLayerName === "Farbe maskieren") {
            // try{
            // var appleScript = 'tell application "System Events" to keystroke "3" using {option down}';
            // await app.system.evalAppleScript(appleScript);
            // } catch(e) {alert(e)}
            alert("yes");
        // }
    // }
};

// Listener hinzufügen
require("photoshop").action.addNotificationListener(['select'], onSelect);


*/




/*
const onSelect = async (_, descriptor) => {
    if (descriptor._target?.[0]._ref === "layer" && descriptor._target?.[0]._name === "Farbe maskieren") {
        // -> The layer with name "Test Layer 1" was selected
        alert("yess")
        // simulateKeyPress();
        // await runModalFunction();

    }
}


// Listener hinzufügen
require("photoshop").action.addNotificationListener(['select'], onSelect);



// Events recognized as notifiers are not re-playable in most of the cases. There is high chance that generated code won't work.

const { executeAsModal } = require("photoshop").core;
const { batchPlay } = require("photoshop").action;

async function actionCommands() {
    const result = await batchPlay(
        [
            {
                _obj: "hostFocusChanged",
                active: true,
                _options: {
                    dialogOptions: "dontDisplay"
                }
            }
        ],
        {}
    );
}

async function runModalFunction() {
    await executeAsModal(actionCommands, { "commandName": "Action Commands" });
}

*/
