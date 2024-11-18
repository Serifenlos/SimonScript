// @codekit-prepend '../../_assets/ss_settings.js';

// const app = require("photoshop").app;
const { core, app } = require("photoshop");
const { batchPlay } = require("photoshop").action;
const { executeAsModal } = require("photoshop").core;



const docDepth = document.getElementById("docDepth");

async function init() {
    await ui_depth();
}
init();

// fix bug: loose focus
function menuCommand(id) {
    require('photoshop').core.performMenuCommand({
        commandID: id,
        kcanDispatchWhileModal: true,
        _isCommand: false
    });
}
// menuCommand(2982);menuCommand(2986);menuCommand(2986);




async function creatAdjustmentLayer(_type, _name) {
    core.executeAsModal(() => {
        const result = batchPlay(
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
                    },
                    // Wenn _name definiert ist, wird "name": _name hinzugefügt, sonst wird ein leeres Objekt hinzugefügt
                    ...(_name ? { "name": _name } : {})
                },
                "_isCommand": true,
                "_options": {
                    "dialogOptions": "dontDisplay"
                }
            }], {
            "synchronousExecution": false,
            "modalBehavior": "fail"
        });
    });
}

async function adjustLayer_curves_edit(_eins, _zwei, _drei, _vier) {
    core.executeAsModal(() => {
        const result = batchPlay(
            [
                {
                    _obj: "set",
                    _target: [
                        {
                            _ref: "adjustmentLayer",
                            _enum: "ordinal",
                            _value: "targetEnum"
                        }
                    ],
                    to: {
                        _obj: "curves",
                        presetKind: {
                            _enum: "presetKindType",
                            _value: "presetKindCustom"
                        },
                        adjustment: [
                            {
                                _obj: "curvesAdjustment",
                                channel: {
                                    _ref: "channel",
                                    _enum: "channel",
                                    _value: "composite"
                                },
                                curve: [
                                    {
                                        _obj: "paint",
                                        horizontal: _eins,
                                        vertical: _zwei
                                    },
                                    {
                                        _obj: "paint",
                                        horizontal: _drei,
                                        vertical: _vier
                                    }
                                ]
                            }
                        ]
                    },
                    _options: {
                        dialogOptions: "dontDisplay"
                    }
                }
            ],
            {}
        );
    });
}


async function creatAdjustmentLayer_2(_type, _name, _schnittmaske, _color) {
    core.executeAsModal(() => {
        const result = batchPlay(
            [
                {
                    _obj: "make",
                    _target: [
                        {
                            _ref: "adjustmentLayer"
                        }
                    ],
                    using: {
                        _obj: "adjustmentLayer",
                        // name: "Tiefen aufhellen",
                        // color: {
                        //     _enum: "color",
                        //     _value: "gray"
                        // },
                        group: _schnittmaske,
                        type: {
                            _obj: _type,
                            presetKind: {
                                _enum: "presetKindType",
                                _value: "presetKindDefault"
                            }
                        },
                        ...(_name ? { "name": _name } : {}),
                        ...(_color ? { color: { _enum: "color", _value: _color } } : {})
                    },
                    _options: {
                        dialogOptions: "dontDisplay"
                    }
                }
            ],
            {}
        );
    });
}


document.getElementById("curves").addEventListener("click", async function () {
    await creatAdjustmentLayer_2("curves", undefined, false, undefined);
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
document.getElementById("blackAndWhite").addEventListener("click", function (event) {
    if (event.shiftKey) {
        // creatAdjustmentLayer("blackAndWhite", "neutral");
        neutralize("neutral", false);
        layer_blendMode("luminosity");
    } else {
        creatAdjustmentLayer("blackAndWhite");
    }
});
document.getElementById("vibrance").addEventListener("click", function () {
    creatAdjustmentLayer("vibrance");
});



async function neutralize(_name, _mask = true) {
    core.executeAsModal(() => {
        const result = batchPlay(
            [{
                _obj: "make",
                _target: [
                    {
                        _ref: "adjustmentLayer"
                    }
                ],
                using: {
                    _obj: "adjustmentLayer",
                    type: {
                        _obj: "blackAndWhite",
                        presetKind: {
                            _enum: "presetKindType",
                            _value: "presetKindDefault"
                        },
                        red: 30,
                        yellow: 89,
                        grain: 59,
                        cyan: 70,
                        blue: 11,
                        magenta: 41,
                        useTint: false,
                        tintColor: {
                            _obj: "RGBColor",
                            red: 225.00045776367188,
                            grain: 211.00067138671875,
                            blue: 179.00115966796875
                        }
                    },
                    ...(_name ? { "name": _name } : {})
                },
                _options: {
                    dialogOptions: "dontDisplay"
                }
            }],
            {}
        );

        if (!_mask) {
            batchPlay(
                [{
                    _obj: 'delete',
                    _target: [{ _ref: 'channel', _enum: 'channel', _value: 'mask' }]
                }],
                { synchronousExecution: true }
            );
        }
    });
}


async function layer_blendMode(_blendMode) {
    core.executeAsModal(() => {
        const result = batchPlay(
            [
                {
                    _obj: "set",
                    _target: [
                        {
                            _ref: "layer",
                            _enum: "ordinal",
                            _value: "targetEnum"
                        }
                    ],
                    to: {
                        _obj: "layer",
                        mode: {
                            _enum: "blendMode",
                            _value: _blendMode
                        }
                    },
                    _options: {
                        dialogOptions: "dontDisplay"
                    }
                }
            ],
            {}
        );
    });
}




document.getElementById("docDepth").addEventListener("click", async function () {
    if (await getDepth() === 8) {
        await setDepth(16);
        docDepth.innerHTML = "8bit";
    } else if (await getDepth() === 16) {
        await setDepth(8);
        docDepth.innerHTML = "16bit";
    }
});

async function createGrau() {
    core.executeAsModal(() => {
        const result = batchPlay(
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
    });
}

document.getElementById("grau").addEventListener("click", function () {
    createGrau();
});

async function doAction(_set, _action) {
    core.executeAsModal(() => {
        const result = batchPlay(
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
    });
}

document.getElementById("hochpass").addEventListener("click", function () {
    doAction("A fängt an.", "[A] Highpass_Sharpening");
});
document.getElementById("mirco").addEventListener("click", function () {
    doAction("A fängt an.", "[A] microKontrast");
});


async function saft() {
    core.executeAsModal(() => {
        const result = batchPlay(
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
    });
}

async function neg_multiplizieren() {
    core.executeAsModal(() => {
        const result = batchPlay(
            [{
                _obj: "set",
                _target: [
                    {
                        _ref: "layer",
                        _enum: "ordinal",
                        _value: "targetEnum"
                    }
                ],
                to: {
                    _obj: "layer",
                    mode: {
                        _enum: "blendMode",
                        _value: "screen"
                    },
                    blendRange: [
                        {
                            _obj: "blendRange",
                            channel: {
                                _ref: "channel",
                                _enum: "channel",
                                _value: "gray"
                            },
                            srcBlackMin: 0,
                            srcBlackMax: 0,
                            srcWhiteMin: 255,
                            srcWhiteMax: 255,
                            destBlackMin: 0,
                            destBlackMax: 0,
                            destWhiteMin: 0,
                            desaturate: 255
                        }
                    ],
                    layerEffects: {
                        _obj: "layerEffects",
                        scale: {
                            _unit: "percentUnit",
                            _value: 100
                        }
                    }
                },
                _options: {
                    dialogOptions: "dontDisplay"
                }
            }],
            {}
        );
    });
}


async function set_layerstyle(_blendMode, _black_min, _black_max, _white_min, _white_max) {
    core.executeAsModal(() => {
        const result = batchPlay(
            [{
                _obj: "set",
                _target: [
                    {
                        _ref: "layer",
                        _enum: "ordinal",
                        _value: "targetEnum"
                    }
                ],
                to: {
                    _obj: "layer",
                    mode: {
                        _enum: "blendMode",
                        _value: _blendMode
                    },
                    blendRange: [
                        {
                            _obj: "blendRange",
                            channel: {
                                _ref: "channel",
                                _enum: "channel",
                                _value: "gray"
                            },
                            srcBlackMin: 0,
                            srcBlackMax: 0,
                            srcWhiteMin: 255,
                            srcWhiteMax: 255,
                            destBlackMin: _black_min,
                            destBlackMax: _black_max,
                            destWhiteMin: _white_min,
                            desaturate: _white_max
                        }
                    ],
                    layerEffects: {
                        _obj: "layerEffects",
                        scale: {
                            _unit: "percentUnit",
                            _value: 100
                        }
                    }
                },
                _options: {
                    dialogOptions: "dontDisplay"
                }
            }],
            {}
        );
    });
}

document.getElementById("saft").addEventListener("click", function (event) {
    if (event.shiftKey) {
        set_layerstyle("screen", 0, 0, 0, 255);
    } else if (event.altKey) {
        set_layerstyle("multiply", 0, 255, 255, 255);
    } else {
        saft();
    }
});


document.getElementById("dimmen").addEventListener("click", async function () {
    await neutralize("neutral", false);
    await layer_blendMode("luminosity");
    await creatAdjustmentLayer_2("curves", "Tiefen aufhellen", true, "gray");
    await set_layerstyle("screen", 0, 0, 0, 255);
    await adjustLayer_curves_edit(0, 0, 255, 0)
    await creatAdjustmentLayer_2("curves", "Lichter abdunkeln", true, "gray");
    await set_layerstyle("multiply", 0, 255, 255, 255);
    await adjustLayer_curves_edit(0, 255, 255, 255)

});



// // https://kawano-shuji.com/justdiary/2021/11/02/photoshop-uxp-2022-executeasmodal/
// const createLayers = async() =>{
//     const myEmptyLayer = await app.activeDocument.createLayer();
//     const myLayer = await app.activeDocument.createLayer({name:"myLayer",opacity:80,mode:"colorDodge"});
//     return {myEmptyLayer ,myLayer };
//     // const a1 = await neutralize("neutral", false);
//     // const a2 = await layer_blendMode("luminosity");
//     // const a3 = await creatAdjustmentLayer_2("curves", "Tiefen aufhellen", true, "gray");
//     // const a4 = await set_layerstyle("screen", 0, 0, 0, 255);
//     // const a5 = await adjustLayer_curves_edit(0, 0, 255, 0)
//     // const a6 = await creatAdjustmentLayer_2("curves", "Lichter abdunkeln", true, "gray");
//     // const a7 = await set_layerstyle("multiply", 0, 255, 255, 255);
//     // const a8 = await adjustLayer_curves_edit(0, 255, 255, 255);
//     // return {a1,a2,a3,a4,a5,a6,a7,a8};

// }

// const historyStateSample = async executionControl =>{
//     try{
//         const hostControl = executionControl.hostControl;//hostControlオブジェクト
//         const documentID = app.activeDocument.id;//documentのidを取得
        
//         const suspensionID = await hostControl.suspendHistory({//suspend history
//             "documentID":documentID,
//             "name":"create my layer"
//         });//document idとヒストリーに表示される名前を渡す
//         const { myEmptyLayer } = await createLayers();
//         // const { a1,a2,a3,a4,a5,a6,a7,a8 } = await createLayers();
//         console.log(suspensionID);
//         await hostControl.resumeHistory(suspensionID);//resume history　ここまでの処理を一つのhistoryに登録
//         // await app.activeDocument.duplicateLayers([myEmptyLayer]);//レイヤーを複製。ここだけ通常通りhistoryに登録される。
//     }catch(e){
//         console.log(e);
//     }
// }

// document.getElementById("dimmen").addEventListener("click", async function () {
//     console.log("ding");
//     try {
//         await core.executeAsModal(historyStateSample);    
//     } catch (e) {
//         console.log(e);
        
//     }
//     console.log("dong");
// });




document.getElementById("SilverFX").addEventListener("click", async function () {    
    async function actionCommands() {
       const result = await batchPlay([
             {
                _obj: "com.dxo.nik6.sep.ps",
                _options: {
                    dialogOptions: "display" // Das Plugin soll angezeigt werden
                }
             }
          ],
          {
             synchronousExecution: false,
             modalBehavior: "execute" // Ermöglicht Interaktion
          }
       );
    }
    
    async function runModalFunction() {
       await executeAsModal(actionCommands, {"commandName": "Action Commands"});
    }
    
    await runModalFunction();
});


document.getElementById("ColorFX").addEventListener("click", async function () {    
    async function actionCommands() {
       const result = await batchPlay([
             {
                _obj: 'com.dxo.nik6.cep.ps',
                _options: {
                    dialogOptions: "display" // Das Plugin soll angezeigt werden
                }
             }
          ],
          {
             synchronousExecution: false,
             modalBehavior: "execute" // Ermöglicht Interaktion
          }
       );
    }
    
    async function runModalFunction() {
       await executeAsModal(actionCommands, {"commandName": "Action Commands"});
    }
    
    await runModalFunction();
});











async function loadScript(_name) {
    core.executeAsModal(() => {
        const result = batchPlay(
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
    });
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
    if (event.altKey && event.shiftKey) {
        autoLevelMenu();   
    }
    else if (event.shiftKey) {
        loadScript("[panel] autoLevel1: autoContrast");
    } else if (event.altKey) {
        loadScript("[panel] autoLevel3: autoBlackWhite");
    } else if (event.metaKey) {
        loadScript("[panel] autoLevel4: autoMachineLearning");
    }  else {
        loadScript("[panel] autoLevel2: auto");
    }
});



async function autoLevelMenu() {
    core.executeAsModal(() => {
        const result = batchPlay(
            [{
                _obj: "select",
                _target: [
                    {
                        _enum: "menuItemType",
                        _ref: "menuItemClass",
                        _value: "adjustmentAutoOptions"
                    }
                ],
                _options: {
                    dialogOptions: "display" // Das Plugin soll angezeigt werden
                }
            }],
            {
                synchronousExecution: false,
                modalBehavior: "execute" // Ermöglicht Interaktion
             }
        );
    });
}




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

document.getElementById("checkTL_plus").addEventListener("click", function (event) {
    if (event.shiftKey) {
        loadScript("[panel] checkTiefenLichter edit++");
    } else {
        loadScript("[panel] checkTiefenLichter edit+");
    }
});





async function menuItem(_name) {
    core.executeAsModal(() => {
        const result = batchPlay(
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

document.getElementById("hautmaske").addEventListener("click", function (event) {
    if (!event.altKey && event.shiftKey) {
        loadScript("[panel] Select Haut merged haut selection");
    } else if (event.altKey && !event.shiftKey) {
        loadScript("[panel] Select Haut merged nicht-haut folder");
    } else if (event.altKey && event.shiftKey) {
        loadScript("[panel] Select Haut merged nicht-haut selection");
    } else {
        loadScript("[panel] Select Haut merged haut folder");
    }
});


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


// document.getElementById("check").addEventListener("click", async function () {

// });


async function getDepth() {
    let command = [{
        _obj: "get",
        _target: [{
            _property: "depth"
        },
        {
            _ref: "document",
            _enum: "ordinal",
            _value: "targetEnum"
        }]
    }]
    let bitDepth = (await batchPlay(command, {}))?.[0]?.depth;
    return bitDepth;
}


async function setDepth(bitDepth) {
    await core.executeAsModal(async () => {
        const result = await batchPlay([{
            _obj: "convertMode",
            depth: bitDepth,
            merge: false,
            _options: {
                dialogOptions: "dontDisplay"
            }
        }],
            {}
        );
    });
}


async function colorSettings() {
    core.executeAsModal(() => {
        const batchPlay = require("photoshop").action.batchPlay;
        const result = batchPlay(
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
    });

}


async function ui_depth() {
    if (await getDepth() === 8) {
        docDepth.innerHTML = "16bit";
    } else if (await getDepth() === 16) {
        docDepth.innerHTML = "8bit";
    }
    return;
}

var ui_depth_listener = async function () {
    await ui_depth();
}

require('photoshop').action.addNotificationListener([
    { event: "open" },
    { event: "convertMode" },
    // {event: "select"},
    { event: "layersFiltered" }       // switch Doc  
], ui_depth_listener);








// var listener_close = function () {
//     if (app.documents.length == 0) {
//         // app.showAlert("noDoc"); 
//         // console.log("noDoc");
        
//     } else {
//         // app.showAlert("someDoc");
//         // console.log("someDoc");
//     }
// }

// require('photoshop').action.addNotificationListener([
//     { event: "close" }
// ], listener_close);




// var listener2 = async function () {
//     // await colorSettings();
//     // showAlert("ding");
// }


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
