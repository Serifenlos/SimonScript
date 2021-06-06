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
        menuCommand(2982);menuCommand(2986);menuCommand(2986);
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
        menuCommand(2982);menuCommand(2986);menuCommand(2986);
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
        menuCommand(2982);menuCommand(2986);menuCommand(2986);
}
document.getElementById("bunt").addEventListener("click", function () {
    doAction("A fängt an.", "[A] bunt ALL");
});
document.getElementById("unbunt").addEventListener("click", function () {
    doAction("A fängt an.", "[A] unbunt ALL");
});
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
        menuCommand(2982);menuCommand(2986);menuCommand(2986);
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
        menuCommand(2982);menuCommand(2986);menuCommand(2986);
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
document.getElementById("db_hochtief").addEventListener("click", function () {
    loadScript("[A] Dodge & Burn △▽")
});


document.getElementById("saveall").addEventListener("click", function () {
    loadScript("[panel] saveAllDocs")
});
document.getElementById("freisteller").addEventListener("click", function () {
    loadScript("[panel] Freisteller")
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


document.getElementById("A_kachel").addEventListener("click", function () {
    loadScript("[panel] view Kachel")
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
    loadScript("[panel] view MatchAll")
});
