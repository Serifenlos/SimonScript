# BASIC.jsx

## application

### _a

<button class="btn" data-clipboard-text=""></button>
{: .btn_p }

??? " "
    ``` js linenums="1"
    if (app.documents.length > 0) {
        doc = app.activeDocument;
        docs = app.documents;
    }
    f = false;
    t = true;
    debug = false; /* Wenn debug auf 'false' steht, wird das Skript in einem einzigen Protokoll-Schritt ausgeführt. */
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/_a.js)

### emptyProtocoll
***action***
das Protokoll komplett zurücksetzten und den Arbeitsspeicher wieder freigeben. Kann nicht rückgängig gemacht werden.

<button class="btn" data-clipboard-text="emptyProtocoll();"></button>
{: .btn_p }

??? "emptyProtocoll();"
    ``` js linenums="1"
    function emptyProtocoll() {
        var desc17393 = new ActionDescriptor();
        desc17393.putEnumerated(cTID('null'), cTID('PrgI'), cTID('Al  '));
        executeAction(cTID('Prge'), desc17393, DialogModes.NO);
    
        var hs = app.activeDocument.historyStates;
        for (var a = hs.length - 1; a >= 0; --a) {
            if (hs[a].snapshot) {
                app.activeDocument.activeHistoryState = hs[a];
                deleteHistory();
            }
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/emptyProtocoll.js)

### deleteHistory
***action***

<button class="btn" data-clipboard-text="deleteHistory();"></button>
{: .btn_p }

??? "deleteHistory();"
    ``` js linenums="1"
    function deleteHistory() {
        var desc20 = new ActionDescriptor();
        var ref23 = new ActionReference();
        ref23.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
        desc20.putReference(charIDToTypeID('null'), ref23);
        executeAction(charIDToTypeID('Dlt '), desc20, DialogModes.NO);
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/deleteHistory.js)

### prefSave
***action***
store the dialog- and unit-settings in variables ==warum nicht alle Prefs speichern und später zurückstellen?==

<button class="btn" data-clipboard-text="prefSave();"></button>
{: .btn_p }

??? "prefSave();"
    ``` js linenums="1"
    function prefSave() {
        startDisplayDialogs = app.displayDialogs;
        startRulerUnits = app.preferences.rulerUnits;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/prefSave.js)

### prefSet
***action***
set the dialog- and unit-settings ==TODO hätte ja gerne eine einfachere Syntax mit translate-function==

<button class="btn" data-clipboard-text="prefSet(_dialog, _units);"></button>
{: .btn_p }

??? "prefSet(_dialog, _units);"
    ``` js linenums="1"
    function prefSet(_dialog, _units) {
        if (!_dialog) {
            alert("check prefSet");
            _dialog = DialogModes.NO;
        }
        if (!_units) {
            alert("check prefSet");
            _units = Units.MM;
        }
        app.displayDialogs = _dialog;
        app.preferences.rulerUnits = _units;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/prefSet.js)

???+ a
    ```js
    prefSet(DialogModes.NO, Units.MM);
    ```
    
    ??? b
        * _dialog `DialogModes.NO` `DialogModes.ALL`
        * _units `Units.CM` `Units.INCHES` `Units.MM` `Units.PERCENT` `Units.PICAS` `Units.PIXELS` `Units.POINTS`

### prefReset
***action***
reset the dialog- and unit-settings to the previous state

<button class="btn" data-clipboard-text="prefReset();"></button>
{: .btn_p }

??? "prefReset();"
    ``` js linenums="1"
    function prefReset() {
        app.preferences.rulerUnits = startRulerUnits;
        if (startDisplayDialogs == DialogModes.ERROR) {
            startDisplayDialogs = DialogModes.NO;
        }
        app.displayDialogs = startDisplayDialogs;
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/prefReset.js)

### startScriptFile

<button class="btn" data-clipboard-text="startScriptFile(_scriptName, _dialogModes);"></button>
{: .btn_p }

??? "startScriptFile(_scriptName, _dialogModes);"
    ``` js linenums="1"
    function startScriptFile(_scriptName, _dialogModes) {
        var d = new ActionDescriptor();
        d.putString(sTID("javaScriptName"), _scriptName);
        executeAction(sTID('AdobeScriptAutomation Scripts'), d, _dialogModes);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/startScriptFile.js)

### copy

<button class="btn" data-clipboard-text="copy();"></button>
{: .btn_p }

??? "copy();"
    ``` js linenums="1"
    // Apfel c
    function copy() {
        executeAction(cTID("copy"), undefined, DialogModes.NO);
    }
    
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/copy.js)

### paste_into

<button class="btn" data-clipboard-text="paste_into();"></button>
{: .btn_p }

??? "paste_into();"
    ``` js linenums="1"
    // Apfel v
    function paste_into() {
        var descriptor = new ActionDescriptor();
    
        descriptor.putEnumerated(c2t("AntA"), s2t("antiAliasType"), s2t("antiAliasNone"));
        executeAction(s2t("pasteInto"), descriptor, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/paste_into.js)

### app_getForegroundColor

<button class="btn" data-clipboard-text="app_getForegroundColor();"></button>
{: .btn_p }

??? "app_getForegroundColor();"
    ``` js linenums="1"
    function app_getForegroundColor() {
        var colors_foreground = [];
        var color = app.foregroundColor;
        colors_foreground.push(Math.round(color.rgb.red));
        colors_foreground.push(Math.round(color.rgb.green));
        colors_foreground.push(Math.round(color.rgb.blue));
        return colors_foreground;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/app_getForegroundColor.js)

## document

### undoSteps
***action***
schrittweise 

<button class="btn" data-clipboard-text="undoSteps(_steps);"></button>
{: .btn_p }

??? "undoSteps(_steps);"
    ``` js linenums="1"
    function undoSteps(_steps) {
        for (var i = 0; i < _steps; i++) {
            executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
        };
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/undoSteps.js)

???+ a
    ```js
    undoSteps(2);
    ```

### resetImage
***action***
zurück zur letzten Version ==TODO würde gerne einen anderen Namen haben==

<button class="btn" data-clipboard-text="resetImage();"></button>
{: .btn_p }

??? "resetImage();"
    ``` js linenums="1"
    function resetImage() {
        executeAction(sTID('revert'), undefined, DialogModes.NO);
        emptyProtocoll();
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/resetImage.js)

## debugging
### time_start
***action***

<button class="btn" data-clipboard-text="time_start();"></button>
{: .btn_p }

??? "time_start();"
    ``` js linenums="1"
    function time_start() {
        start = new Date().getTime();
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/time_start.js)

### time_stop
***action***

<button class="btn" data-clipboard-text="time_stop(_time_start);"></button>
{: .btn_p }

??? "time_stop(_time_start);"
    ``` js linenums="1"
    function time_stop(_time_start) {
        var stop = new Date().getTime();
        var elapsed = (stop - _time_start) / 1000;
        var msg = ("Done (" + Number(elapsed).toFixed(3) + " secs).");
        alert(msg);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/time_stop.js)

### logger
***action***

<button class="btn" data-clipboard-text="logger(_log_fn);"></button>
{: .btn_p }

??? "logger(_log_fn);"
    ``` js linenums="1"
    function logger(_log_fn) {
        if (debug) {
            time_start()
        };
        var filepath = "~/Desktop/SimonScript.log";
        var write_file = File(filepath);
        if (!write_file.exists) {
            write_file = new File(filepath);
        }
    
        var today = new Date();
        var date = ('0' + today.getDate()).slice(-2) + "." + ('0' + (today.getMonth() + 1)).slice(-2) + "." + today.getFullYear();
        var time = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
        var dateTime = date + " - " + time;
    
        /* Neuste Ziele oben*/
        /*  var read_file = File(filepath);
            read_file.open("r", undefined, undefined);
            if (read_file !== "") {
              var oldText = read_file.read();
              read_file.close();
            }
    
            write_file = File(filepath);
            write_file.open("w", undefined, undefined);
            write_file.writeln(_log);
            write_file.writeln("-----------------------");
            if (oldText != "") {
              write_file.writeln(oldText);
            }
            write_file.close(); */
    
        /* Neuste Zeile unten - Performance?? */
        var log_file = File(filepath);
        log_file.open('a', undefined, undefined);
        if (log_file !== '') {
            log_file.writeln("-----------------------");
            log_file.writeln(dateTime);
            log_file.writeln("Doc: '" + doc.name + "'");
            log_file.writeln("Function: '" + _log_fn + "'");
            log_file.writeln("");
            log_file.close();
        }
        if (debug) {
            time_stop(start)
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/logger.js)

## Layer
### createLayer
***action***
==TODO umbenennen createAdjustmentLayer oder createLayer_adjustment== erstelle eine Einstellebene

<button class="btn" data-clipboard-text="createLayer(_name, _type, _mode, _color, _opacity, _mask, _clip, _autoLevel);"></button>
{: .btn_p }

??? "createLayer(_name, _type, _mode, _color, _opacity, _mask, _clip, _autoLevel);"
    ``` js linenums="1"
    function createLayer(_name, _type, _mode, _color, _opacity, _mask, _clip, _autoLevel) {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putClass(sTID("adjustmentLayer"));
            d.putReference(sTID("null"), r);
            var d2 = new ActionDescriptor();
            d2.putString(sTID("name"), _name);
            d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
            d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
            d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
            d2.putBoolean(sTID('group'), _clip);
            if (_type == "levels" && _autoLevel) {
                var d3 = new ActionDescriptor();
                d3.putEnumerated(sTID('presetKind'), sTID('presetKindType'), sTID('presetKindDefault'));
                var l = new ActionList();
                var d4 = new ActionDescriptor();
                var r2 = new ActionReference();
                r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('composite'));
                d4.putReference(sTID('channel'), r2);
                d4.putBoolean(sTID('auto'), true);
                l.putObject(sTID('levelsAdjustment'), d4);
                d3.putList(sTID('adjustment'), l);
                d2.putObject(sTID("type"), sTID(_type), d3);
            } else {
                d2.putClass(sTID("type"), sTID(_type));
            }
            d.putObject(sTID("using"), sTID("adjustmentLayer"), d2);
            executeAction(sTID("make"), d, DialogModes.NO);
    
            if (_mask == "invert") {
                executeAction(sTID('invert'), undefined, DialogModes.NO);
                return;
            } else if (_mask == "none") {
                deleteMask();
                return;
            } else if (_mask == "black" || _mask == "white" || _mask == "gray") {
                fill(_mask, "normal", 100);
                return;
            }
    
        } catch (err) {
            logger(arguments.callee.name);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/createLayer.js)

???+ a
    ```js
    createLayer("AutoTonwert", "levels", "normal", "gray", 80, "black", f,f);
    ```

    ??? b
        * _name `string`
        * _type `solidColorLayer` `gradientLayer` `patternLayer` // `brightnessEvent` `levels` `curves` `exposure` `vibrance` `hueSaturation` `colorBalance` `blackAndWhite` `photoFilter` `channelMixer` `colorLookup` // `invert` `posterization` `thresholdClassEvent` `gradientMapClass` `selectiveColor`
        * _mode 
        * _color
        * _opacity `0-100`
        * _mask `none` `invert` `black` `white` `gray`
        * _clip `boolean`
        * _autoLevels `boolean` *only with _type=levels*
    

### createColorLayer
***action***
erstelle eine Farbfläche

<button class="btn" data-clipboard-text="createColorLayer(_name, _mode, _color, _opacity, _mask, _red, _green, _blue);"></button>
{: .btn_p }

??? "createColorLayer(_name, _mode, _color, _opacity, _mask, _red, _green, _blue);"
    ``` js linenums="1"
    function createColorLayer(_name, _mode, _color, _opacity, _mask, _red, _green, _blue) {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putClass(sTID("contentLayer"));
            d.putReference(sTID("null"), r);
            var d2 = new ActionDescriptor();
            d2.putString(sTID("name"), _name);
            d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
            d2.putEnumerated(sTID("mode"), sTID("blendMode"), sTID(_mode));
            d2.putEnumerated(sTID("color"), sTID("color"), sTID(_color));
            var d3 = new ActionDescriptor();
            var d4 = new ActionDescriptor();
            d4.putDouble(sTID("red"), _red);
            d4.putDouble(sTID("green"), _green);
            d4.putDouble(sTID("blue"), _blue);
            d3.putObject(sTID("color"), sTID("RGBColor"), d4);
            d2.putObject(sTID("type"), sTID("solidColorLayer"), d3);
            d.putObject(sTID("using"), sTID("contentLayer"), d2);
            executeAction(sTID("make"), d, DialogModes.NO);
            gotoMask();
    
            if (_mask == "invert") {
                executeAction(sTID('invert'), undefined, DialogModes.NO);
                return;
            } else if (_mask == "none") {
                deleteMask();
                return;
            } else if (_mask == "black" || _mask == "white" || _mask == "gray") {
                fill(_mask, "normal", 100);
                return;
            }
    
        } catch (err) {
            logger(arguments.callee.name);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/createColorLayer.js)

???+ a
    ```js
    createColorLayer("Weiss", "normal", "gray", 100, "none", 255, 255, 255);
    ```

    ??? b
        * _name `string`
        * _mode
        * _color
        * _opacity `0-100`
        * _mask `none` `invert` `black` `white` `gray`
        * _red `0-255`
        * _green `0-255`
        * _blue `0-255`
    

### createMask

<button class="btn" data-clipboard-text="createMask();"></button>
{: .btn_p }

??? "createMask();"
    ``` js linenums="1"
    function createMask() {
        var descriptor = new ActionDescriptor();
        var reference = new ActionReference();
    
        descriptor.putClass(s2t("new"), s2t("channel"));
        reference.putEnumerated(s2t("channel"), s2t("channel"), s2t("mask"));
        descriptor.putReference(s2t("at"), reference);
        descriptor.putEnumerated(s2t("using"), c2t("UsrM"), s2t("revealAll"));
        executeAction(s2t("make"), descriptor, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/createMask.js)

### gotoMask
***action***
==TODO toogle Mask/RGB-Layer //  bisher nur im CreateColorLayer verwendet==

<button class="btn" data-clipboard-text="gotoMask();"></button>
{: .btn_p }

??? "gotoMask();"
    ``` js linenums="1"
    function gotoMask() {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('channel'), sTID('channel'), sTID('mask'));
        d.putReference(sTID('null'), r);
        d.putBoolean(sTID('makeVisible'), false);
        executeAction(sTID('select'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/gotoMask.js)

### gotoFill
***action***

<button class="btn" data-clipboard-text="gotoFill();"></button>
{: .btn_p }

??? "gotoFill();"
    ``` js linenums="1"
    function gotoFill() {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('channel'), sTID('channel'), sTID('RGB'));
        d.putReference(sTID('null'), r);
        d.putBoolean(sTID('makeVisible'), false);
        executeAction(sTID('select'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/gotoFill.js)

### invert

<button class="btn" data-clipboard-text="invert();"></button>
{: .btn_p }

??? "invert();"
    ``` js linenums="1"
    // Apfel i
    function invert() {
        executeAction(s2t("invert"), undefined, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/invert.js)

### moveLayer
***action***
==TODO _direction für ElementPlacement.INSIDE, ElementPlacement.PLACEATBEGINNING, ElementPlacement.PLACEATEND==

<button class="btn" data-clipboard-text="moveLayer(_objectLayer, _aimLayer, _direction);"></button>
{: .btn_p }

??? "moveLayer(_objectLayer, _aimLayer, _direction);"
    ``` js linenums="1"
    function moveLayer(_objectLayer, _aimLayer, _direction) {
        gotoLayer(_objectLayer);
        var ref_1 = app.activeDocument.activeLayer;
        gotoLayer(_aimLayer);
        var ref_2 = app.activeDocument.activeLayer;
        if (_direction == "up") {
            var direction = ElementPlacement.PLACEBEFORE
        }
        if (_direction == "down") {
            var direction = ElementPlacement.PLACEAFTER
        }
        if (_direction == "inside") {
            var direction = ElementPlacement.INSIDE;
        }
        if (_direction == "PlaceAtBeginning") {
            var direction = ElementPlacement.PLACEATBEGINNING;
        }
        if (_direction == "PlaceAtEnd") {
            var direction = ElementPlacement.PLACEATEND;
        }
        ref_1.move(ref_2, direction);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/moveLayer.js)

???+ a
    ```js
    moveLayer("Weiss", "Original", "down");
    ```
    
    ??? b
        * _objectLayer `string`
        * _aimLayer `string`
        * _direction `up` `down`

### moveLayer3
***action***

<button class="btn" data-clipboard-text="moveLayer3(_direction, _steps);"></button>
{: .btn_p }

??? "moveLayer3(_direction, _steps);"
    ``` js linenums="1"
    function moveLayer3(_direction, _steps) {
        if (_direction == "up") {
            _direction = "next"
        }
        if (_direction == "down") {
            _direction = "previous"
        }
        if (_direction == "top") {
            _direction = "front"
        }
        if (_direction == "bottom") {
            _direction = "back"
        }
        for (var i = 0; i < _steps; i++) {
            var d = new ActionDescriptor();
            var r = new ActionReference();
            var r2 = new ActionReference();
            r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
            d.putReference(sTID('null'), r);
            r2.putEnumerated(sTID('layer'), sTID('ordinal'), sTID(_direction));
            d.putReference(sTID('to'), r2);
            executeAction(sTID('move'), d, DialogModes.NO);
        };
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/moveLayer3.js)

???+ a
    ```js
    moveLayer3("up", 3);
    ```
    
    ??? b
        * _direction `up` = `next` `down` = `previous` `top` = `front` `bottom` = `back`
        * _steps `number`

### deleteMask
***action***

<button class="btn" data-clipboard-text="deleteMask();"></button>
{: .btn_p }

??? "deleteMask();"
    ``` js linenums="1"
    function deleteMask() {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putEnumerated(sTID('channel'), sTID('channel'), sTID('mask'));
            d.putReference(sTID('null'), r);
            executeAction(sTID('delete'), d, DialogModes.NO);
        } catch (err) {
            logger(arguments.callee.name);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/deleteMask.js)

### createGroup
***action***

<button class="btn" data-clipboard-text="createGroup(_name, _mode, _color, _opacity, _groupSelection);"></button>
{: .btn_p }

??? "createGroup(_name, _mode, _color, _opacity, _groupSelection);"
    ``` js linenums="1"
    function createGroup(_name, _mode, _color, _opacity, _groupSelection) {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putClass(sTID('layerSection'));
            d.putReference(sTID('null'), r);
            if (_groupSelection) {
                var r2 = new ActionReference();
                r2.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
                d.putReference(sTID('from'), r2);
            }
            var d2 = new ActionDescriptor();
            d2.putString(sTID('name'), _name);
            d2.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
            d2.putEnumerated(sTID('color'), sTID('color'), sTID(_color));
            d2.putEnumerated(sTID('mode'), sTID('blendMode'), sTID(_mode));
            d.putObject(sTID('using'), sTID('layerSection'), d2);
            d.putInteger(sTID('layerSectionStart'), 351);
            d.putInteger(sTID('layerSectionEnd'), 352);
            d.putString(sTID('name'), "Gruppe 3");
            executeAction(sTID('make'), d, DialogModes.NO);
        } catch (err) {
            logger(arguments.callee.name);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/createGroup.js)

???+ a
    ```js
    createGroup("Einstellungen", "passThrough", "none", 100, t);
    ```
    
    ??? b
        * _name `string`
        * _mode `passThrough`
        * _color `none`
        * _opacity `number` `0-100`
        * _groupSelection `boolean`

### fill

<button class="btn" data-clipboard-text="fill(_content, _mode, _opacity, _h, _s, _b);"></button>
{: .btn_p }

??? "fill(_content, _mode, _opacity, _h, _s, _b);"
    ``` js linenums="1"
    function fill(_content, _mode, _opacity, _h, _s, _b) {
        try {
            var d = new ActionDescriptor();
            d.putEnumerated(sTID('using'), sTID('fillContents'), sTID(_content));
    
            if (_content == "color") {
                var d2 = new ActionDescriptor();
                d2.putUnitDouble(sTID('hue'), sTID('angleUnit'), _h);
                d2.putDouble(sTID('saturation'), _s);
                d2.putDouble(sTID('brightness'), _b);
                d.putObject(sTID('color'), sTID('HSBColorClass'), d2);
            }
    
            d.putUnitDouble(sTID('opacity'), sTID('percentUnit'), _opacity);
            d.putEnumerated(sTID('mode'), sTID('blendMode'), sTID(_mode));
            executeAction(sTID('fill'), d, DialogModes.NO);
        } catch (err) {
            logger(arguments.callee.name);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/fill.js)

???+ a
    ```js
    fill("black", "normal", 100);
    fill("color", "multiply", 50, 240,50,50);
    ```
    
    ??? b
        * _content
        * _mode
        * _opacity
        * _h
        * _s
        * _b

### smartObject

<button class="btn" data-clipboard-text="smartObject();"></button>
{: .btn_p }

??? "smartObject();"
    ``` js linenums="1"
    function smartObject() {
        try {
            executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
        } catch (err) {
            logger(arguments.callee.name);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/smartObject.js)

### rasterSmartObject

<button class="btn" data-clipboard-text="rasterSmartObject();"></button>
{: .btn_p }

??? "rasterSmartObject();"
    ``` js linenums="1"
    function rasterSmartObject() {
        try {
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
            d.putReference(sTID('null'), r);
            executeAction(sTID('rasterizeLayer'), d, DialogModes.NO);
        } catch (err) {
            logger(arguments.callee.name);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/rasterSmartObject.js)

### nameLayer

<button class="btn" data-clipboard-text="nameLayer(_name);"></button>
{: .btn_p }

??? "nameLayer(_name);"
    ``` js linenums="1"
    function nameLayer(_name) {
        try {
            app.activeDocument.activeLayer.name = _name;
        } catch (err) {
            logger(arguments.callee.name)
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/nameLayer.js)

* _name

### dublicate

<button class="btn" data-clipboard-text="dublicate(_name);"></button>
{: .btn_p }

??? "dublicate(_name);"
    ``` js linenums="1"
    function dublicate(_name) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        d.putString(sTID('name'), _name);
        d.putInteger(sTID('version'), 5);
        executeAction(sTID('duplicate'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/dublicate.js)

* _name

### selectLayerUp
TODO ist das noch in Verwendung, oder kann das weg

<button class="btn" data-clipboard-text="selectLayerUp();"></button>
{: .btn_p }

??? "selectLayerUp();"
    ``` js linenums="1"
    function selectLayerUp() {
        var desc150 = new ActionDescriptor();
        var ref118 = new ActionReference();
        ref118.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('forwardEnum'));
        desc150.putReference(sTID('null'), ref118);
        desc150.putBoolean(sTID('makeVisible'), false);
        var list65 = new ActionList();
        list65.putInteger(108);
        desc150.putList(sTID('layerID'), list65);
        executeAction(sTID('select'), desc150, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/selectLayerUp.js)

### selectLayer

<button class="btn" data-clipboard-text="selectLayer(_direction, _times);"></button>
{: .btn_p }

??? "selectLayer(_direction, _times);"
    ``` js linenums="1"
    function selectLayer(_direction, _times) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        if (_direction != "down") {
            r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('forwardEnum'));
        } else {
            r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('backwardEnum'));
        }
    
        d.putReference(sTID('null'), r);
        d.putBoolean(sTID('makeVisible'), false);
        var i = 0;
        for (i = 1; i <= _times; i += 1) {
            executeAction(sTID('select'), d, DialogModes.NO);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/selectLayer.js)

* _direction
* _times

### selectAll
TODO mit unterer Funktion ersetzt

<button class="btn" data-clipboard-text="selectAll();"></button>
{: .btn_p }

??? "selectAll();"
    ``` js linenums="1"
    function selectAll() {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        executeAction(sTID('selectAllLayers'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/selectAll.js)

### selectLayers 

<button class="btn" data-clipboard-text="selectLayers(_all_or_nothing);"></button>
{: .btn_p }

??? "selectLayers(_all_or_nothing);"
    ``` js linenums="1"
    function selectLayers(_all_or_nothing) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        try {
            executeAction(sTID(_all_or_nothing), d, DialogModes.NO);
        } catch (e) { }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/selectLayers.js)

???+ a
    ```js
    selectLayers("selectAllLayers");
    ```
    
    ??? b
        * _all_or_nothing `selectNoLayers` `selectAllLayers`

### hasBackground

<button class="btn" data-clipboard-text="hasBackground();"></button>
{: .btn_p }

??? "hasBackground();"
    ``` js linenums="1"
    function hasBackground() {
        var ref = new ActionReference();
        ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Bckg"));
        ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Back"));
        var desc = executeActionGet(ref);
        var res = desc.getBoolean(charIDToTypeID("Bckg"));
        return res;
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/hasBackground.js)

### clearAllGuides

<button class="btn" data-clipboard-text="clearAllGuides();"></button>
{: .btn_p }

??? "clearAllGuides();"
    ``` js linenums="1"
    function clearAllGuides() {
        executeAction(sTID('clearAllGuides'), undefined, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/clearAllGuides.js)

### gotoLayer

<button class="btn" data-clipboard-text="gotoLayer(_input);"></button>
{: .btn_p }

??? "gotoLayer(_input);"
    ``` js linenums="1"
    function gotoLayer(_input) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
    
        if (typeof _input == "number") {
            r.putIndex(charIDToTypeID('Lyr '), _input);
        } else if (typeof _input == "string") {
            r.putName(sTID('layer'), _input);
        }
    
        d.putReference(sTID('null'), r);
        d.putBoolean(sTID('makeVisible'), false);
        executeAction(sTID('select'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/gotoLayer.js)

???+ a
    ```js
    gotoLayer("Original");
    ```
    
    ??? b
        * _input `number` `string` *idx oder LayerName*

## Adjustment Layer

### adjustLayer_levels_autoLevels

<button class="btn" data-clipboard-text="adjustLayer_levels_autoLevels(_algorithmus, _autoNeutrals);"></button>
{: .btn_p }

??? "adjustLayer_levels_autoLevels(_algorithmus, _autoNeutrals);"
    ``` js linenums="1"
    function adjustLayer_levels_autoLevels(_algorithmus, _autoNeutrals) {
    
        /* reset levels */
        adjustLayer_levels_edit(null);
    
        /* set autoLevels option */
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var d3 = new ActionDescriptor();
        var l = new ActionList();
        var r = new ActionReference();
        var r2 = new ActionReference();
    
        r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(s2t("null"), r);
        r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
        d3.putReference(s2t("channel"), r2);
        if (_algorithmus == "autoContrast") {
            d3.putBoolean(s2t("autoContrast"), true);
        }
        if (_algorithmus == "auto") {
            d3.putBoolean(s2t("auto"), true);
        }
        if (_algorithmus == "autoBlackWhite") {
            d3.putBoolean(s2t("autoBlackWhite"), true);
        }
        if (_algorithmus == "autoMachineLearning") {
            d3.putBoolean(s2t("autoMachineLearning"), true);
            d3.putBoolean(s2t("autoFaces"), true);
        }
    
        if (_autoNeutrals) {
            d3.putBoolean(s2t("autoNeutrals"), _autoNeutrals);
        }
    
        l.putObject(s2t("levelsAdjustment"), d3);
        d2.putList(s2t("adjustment"), l);
        d.putObject(s2t("to"), s2t("levels"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/adjustLayer_levels_autoLevels.js)

???+ a
    ```js
    adjustLayer_levels_autoLevels("autoContrast", t)
    ```
    
    ??? b
        * _algorithmus `autoContrast` `auto` `autoBlackWhite` `autoMachineLearning`

### adjustLayer_levels_autoLevels_wrapper

<button class="btn" data-clipboard-text="adjustLayer_levels_autoLevels_wrapper(__algorithmus, __autoNeutrals);"></button>
{: .btn_p }

??? "adjustLayer_levels_autoLevels_wrapper(__algorithmus, __autoNeutrals);"
    ``` js linenums="1"
    function adjustLayer_levels_autoLevels_wrapper(__algorithmus, __autoNeutrals) {
        var startLayer = layer_selectedIDX_get();
    
        if (doc.activeLayer.kind == "LayerKind.LEVELS") {
            // alert("ding")
            makeVisible();
    
        } else if (layer_checkExistence("AutoTonwert")) {
            gotoLayer("AutoTonwert");
            makeVisible();
    
        }
        else {
            alert("keine TonWert-Ebene ausgewählt bzw vorbereitet")
        }
    
        adjustLayer_levels_autoLevels(__algorithmus, __autoNeutrals)
        layer_selectedIDX_set(startLayer);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/adjustLayer_levels_autoLevels_wrapper.js)

### adjustLayer_levels_edit

<button class="btn" data-clipboard-text="adjustLayer_levels_edit(_setRGB_dark, _setRGB_light, _maxRGB_dark, _maxRGB_light, _gammaRGB,  _setRED_dark, _setRGB_light, _maxRED_dark, _maxRED_light, _gammaRED, _setGREEN_dark, _setGREEN_light, _maxGREEN_dark, _maxGREEN_light, _gammaGREEN, _setBLUE_dark, _setBLUE_light, _maxBLUE_dark, _maxBLUE_light, _gammaBLUE);"></button>
{: .btn_p }

??? "adjustLayer_levels_edit(_setRGB_dark, _setRGB_light, _maxRGB_dark, _maxRGB_light, _gammaRGB,  _setRED_dark, _setRGB_light, _maxRED_dark, _maxRED_light, _gammaRED, _setGREEN_dark, _setGREEN_light, _maxGREEN_dark, _maxGREEN_light, _gammaGREEN, _setBLUE_dark, _setBLUE_light, _maxBLUE_dark, _maxBLUE_light, _gammaBLUE);"
    ``` js linenums="1"
    function adjustLayer_levels_edit(_setRGB_dark, _setRGB_light, _maxRGB_dark, _maxRGB_light, _gammaRGB,  _setRED_dark, _setRGB_light, _maxRED_dark, _maxRED_light, _gammaRED, _setGREEN_dark, _setGREEN_light, _maxGREEN_dark, _maxGREEN_light, _gammaGREEN, _setBLUE_dark, _setBLUE_light, _maxBLUE_dark, _maxBLUE_light, _gammaBLUE) {
    
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var d3 = new ActionDescriptor();
        var d4 = new ActionDescriptor();
        var d5 = new ActionDescriptor();
        var d6 = new ActionDescriptor();
        var l = new ActionList();
        var l2 = new ActionList();
        var l3 = new ActionList();
        var l4 = new ActionList();
        var l5 = new ActionList();
        var l6 = new ActionList();
        var l7 = new ActionList();
        var l8 = new ActionList();
        var l9 = new ActionList();
        var r = new ActionReference();
        var r2 = new ActionReference();
        var r3 = new ActionReference();
        var r4 = new ActionReference();
        var r5 = new ActionReference();
    
        if(_setRGB_dark == null) {_setRGB_dark = 0}
        if(_setRGB_light == null) {_setRGB_light = 255}
        if(_maxRGB_dark == null) {_maxRGB_dark = 0}
        if(_maxRGB_light == null) {_maxRGB_light = 255}
        if(_gammaRGB == null) {_gammaRGB = 1}
    
        if(_setRED_dark == null) {_setRED_dark = 0}
        if(_setRGB_light == null) {_setRGB_light = 255}
        if(_maxRED_dark == null) {_maxRED_dark = 0}
        if(_maxRED_light == null) {_maxRED_light = 255}
        if(_gammaRED == null) {_gammaRED = 1}
    
        if(_setGREEN_dark == null) {_setGREEN_dark = 0}
        if(_setGREEN_light == null) {_setGREEN_light = 255}
        if(_maxGREEN_dark == null) {_maxGREEN_dark = 0}
        if(_maxGREEN_light == null) {_maxGREEN_light = 255}
        if(_gammaGREEN == null) {_gammaGREEN = 1}
    
        if(_setBLUE_dark == null) {_setBLUE_dark = 0}
        if(_setBLUE_light == null) {_setBLUE_light = 255}
        if(_maxBLUE_dark == null) {_maxBLUE_dark = 0}
        if(_maxBLUE_light == null) {_maxBLUE_light = 255}
        if(_gammaBLUE == null) {_gammaBLUE = 1}
    
    
        r.putEnumerated(s2t("adjustmentLayer"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(s2t("null"), r);
        d2.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindDefault"));
        r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
        d3.putReference(s2t("channel"), r2);
        l2.putInteger(_setRGB_dark);
        l2.putInteger(_setRGB_light);
        d3.putList(s2t("input"), l2);
        d3.putDouble(s2t("gamma"), _gammaRGB);
        l3.putInteger(_maxRGB_dark);
        l3.putInteger(_maxRGB_light);
        d3.putList(s2t("output"), l3);
        l.putObject(s2t("levelsAdjustment"), d3);
        r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("red"));
        d4.putReference(s2t("channel"), r3);
        l4.putInteger(_setRED_dark);
        l4.putInteger(_setRGB_light);
        d4.putList(s2t("input"), l4);
        d4.putDouble(s2t("gamma"), _gammaRED);
        l5.putInteger(_maxRED_dark);
        l5.putInteger(_maxRED_light);
        d4.putList(s2t("output"), l5);
        l.putObject(s2t("levelsAdjustment"), d4);
        r4.putEnumerated(s2t("channel"), s2t("channel"), s2t("grain"));
        d5.putReference(s2t("channel"), r4);
        l6.putInteger(_setGREEN_dark);
        l6.putInteger(_setGREEN_light);
        d5.putList(s2t("input"), l6);
        d5.putDouble(s2t("gamma"), _gammaGREEN);
        l7.putInteger(_maxGREEN_dark);
        l7.putInteger(_maxGREEN_light);
        d5.putList(s2t("output"), l7);
        l.putObject(s2t("levelsAdjustment"), d5);
        r5.putEnumerated(s2t("channel"), s2t("channel"), s2t("blue"));
        d6.putReference(s2t("channel"), r5);
        l8.putInteger(_setBLUE_dark);
        l8.putInteger(_setBLUE_light);
        d6.putList(s2t("input"), l8);
        d6.putDouble(s2t("gamma"), _gammaBLUE);
        l9.putInteger(_maxBLUE_dark);
        l9.putInteger(_maxBLUE_light);
        d6.putList(s2t("output"), l9);
        l.putObject(s2t("levelsAdjustment"), d6);
        d2.putList(s2t("adjustment"), l);
        d.putObject(s2t("to"), s2t("levels"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/adjustLayer_levels_edit.js)

???+ a
    ```js
    adjustLayer_levels_edit(0, 255, 0, 255, 1,  0, 255, 0, 255, 1,  0, 255, 0, 255, 1,  0, 255, 0, 255, 1);
    adjustLayer_levels_edit(null);
    ```
    
    ??? b
        * with arguments
        * no argument ot null to reset

## Image 
### SmartObject_edit

<button class="btn" data-clipboard-text="SmartObject_edit();"></button>
{: .btn_p }

??? "SmartObject_edit();"
    ``` js linenums="1"
    function SmartObject_edit() {
        var d = new ActionDescriptor();
        executeAction(sTID('placedLayerEditContents'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/SmartObject_edit.js)

### SmartOject_placeItem

<button class="btn" data-clipboard-text="SmartOject_placeItem(_item);"></button>
{: .btn_p }

??? "SmartOject_placeItem(_item);"
    ``` js linenums="1"
    function SmartOject_placeItem(_item) {
        var d = new ActionDescriptor();
        d.putPath(cTID('null'), new File(_item));
        executeAction(sTID('placedLayerReplaceContents'), d, DialogModes.NO);
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/SmartOject_placeItem.js)

### getBitDepth
***returns 8, 6 or 32***

<button class="btn" data-clipboard-text="getBitDepth();"></button>
{: .btn_p }

??? "getBitDepth();"
    ``` js linenums="1"
    function getBitDepth() {
        if (doc.bitsPerChannel == "BitsPerChannelType.EIGHT") {
            var bit = 8;
        } else if (doc.bitsPerChannel == BitsPerChannelType.SIXTEEN) {
            var bit = 16;
        } else if (doc.bitsPerChannel == BitsPerChannelType.THIRTYTWO) {
            var bit = 32;
        } else {
            return false;
        }
        return bit;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/getBitDepth.js)

### setBitDepth

<button class="btn" data-clipboard-text="setBitDepth(_bitdepth);"></button>
{: .btn_p }

??? "setBitDepth(_bitdepth);"
    ``` js linenums="1"
    function setBitDepth(_bitdepth) {
        var id1 = charIDToTypeID("CnvM");
        var desc1 = new ActionDescriptor();
        var id2 = charIDToTypeID("Dpth");
        desc1.putInteger(id2, _bitdepth);
        executeAction(id1, desc1, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/setBitDepth.js)

* _bitdepth

### img_resize
==TODO irritierender Name // Vorschläge?==

<button class="btn" data-clipboard-text="img_resize(_ziel_longSite, _max_resolution);"></button>
{: .btn_p }

??? "img_resize(_ziel_longSite, _max_resolution);"
    ``` js linenums="1"
    function img_resize(_ziel_longSite, _max_resolution) {
        prefSave();
        prefSet(DialogModes.NO, Units.MM);
    
        if (doc.width > doc.height) {
            var d = new ActionDescriptor();
            d.putUnitDouble(sTID('width'), sTID('distanceUnit'), cm2pt(_ziel_longSite));
            executeAction(sTID('imageSize'), d, DialogModes.NO);
        } else {
            var d = new ActionDescriptor();
            d.putUnitDouble(sTID('height'), sTID('distanceUnit'), cm2pt(_ziel_longSite));
            executeAction(sTID('imageSize'), d, DialogModes.NO);
        }
    
        if (doc.resolution > _max_resolution && _max_resolution) {
            doc.resizeImage(undefined, undefined, _max_resolution, ResampleMethod.PRESERVEDETAILS, 0);
        }
    
        prefReset();
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/img_resize.js)

???+ a
    ```js
    img_resize(10, 300);
    img_resize(10, null);
    ```
    
    ??? b
        * _ziel_longSite
        * _max_resolution

### setMegaPixel

<button class="btn" data-clipboard-text="setMegaPixel(_setMegaPixel);"></button>
{: .btn_p }

??? "setMegaPixel(_setMegaPixel);"
    ``` js linenums="1"
    function setMegaPixel(_setMegaPixel) {
        prefSave();
        prefSet(DialogModes.NO, Units.PIXELS);
    
        var w = doc.width;
        var h = doc.height;
        var getPixel = w * h;
        var setPixel = _setMegaPixel * 1000000;
        var faktor = setPixel / getPixel;
    
        if (setPixel < getPixel) {
            if (w >= h) {
                var w_neu = w * Math.sqrt(faktor);
                doc.resizeImage(w_neu, undefined, undefined, ResampleMethod.PRESERVEDETAILS, 0);
            } else {
                var h_neu = Math.round(h * Math.sqrt(faktor));
                doc.resizeImage(undefined, h_neu, undefined, ResampleMethod.PRESERVEDETAILS, 0);
            }
        }
    
        prefReset();
        return "";
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/setMegaPixel.js)

???+ a
    ```js
    setMegaPixel(8)
    ```
    
    ??? b
        * _setMegaPixel `number`

### getScale

<button class="btn" data-clipboard-text="getScale(_setMegaPixel);"></button>
{: .btn_p }

??? "getScale(_setMegaPixel);"
    ``` js linenums="1"
    function getScale(_setMegaPixel) {
        var w = doc.width;
        var h = doc.height;
        var getPixel = w * h;
        var setPixel = _setMegaPixel * 1000000;
        var faktor = setPixel / getPixel;
    
        return Math.sqrt(faktor);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/getScale.js)

???+ a
    ```js
    getScale(8);
    ```
    
    ??? b
        * _setMegaPixel `number`

### cm2pt
Convert cm to Point, imageSize needs Points

<button class="btn" data-clipboard-text="cm2pt(cm);"></button>
{: .btn_p }

??? "cm2pt(cm);"
    ``` js linenums="1"
    function cm2pt(cm) {
        return cm * 28.3464566929;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/cm2pt.js)

### mm2pt

<button class="btn" data-clipboard-text="mm2pt(mm);"></button>
{: .btn_p }

??? "mm2pt(mm);"
    ``` js linenums="1"
    function mm2pt(mm) {
        return mm * 0.283464566929;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/mm2pt.js)

### setDpi

<button class="btn" data-clipboard-text="setDpi(_dpi);"></button>
{: .btn_p }

??? "setDpi(_dpi);"
    ``` js linenums="1"
    function setDpi(_dpi) {
        var d = new ActionDescriptor();
        d.putUnitDouble(sTID('resolution'), sTID('densityUnit'), _dpi);
        executeAction(sTID('imageSize'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/setDpi.js)

???+ a
    ```js
    setDpi(355.6)
    ```
    
    ??? b
        * _dpi `number`

### setSize

<button class="btn" data-clipboard-text="setSize(_side, _size);"></button>
{: .btn_p }

??? "setSize(_side, _size);"
    ``` js linenums="1"
    function setSize(_side, _size) {
        var d = new ActionDescriptor();
        d.putUnitDouble(sTID(_side), sTID('distanceUnit'), mm2pt(_size));
        executeAction(sTID('imageSize'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/setSize.js)

???+ a
    ```js
    setSize("width", 100);
    ```
    
    ??? b
        * _side `width` `height`
        * _size `number`

## Color
### noProfile

<button class="btn" data-clipboard-text="noProfile();"></button>
{: .btn_p }

??? "noProfile();"
    ``` js linenums="1"
    function noProfile() {
        if (doc.colorProfileType == ColorProfile.NONE) {
            try {
                app.bringToFront();
                var d = new ActionDescriptor();
                var r = new ActionReference();
                r.putEnumerated(sTID("document"), sTID("ordinal"), sTID("targetEnum"));
                d.putReference(sTID("null"), r);
                d.putBoolean(sTID("manage"), true);
                executeAction(sTID("assignProfile"), d, DialogModes.ALL);
            } catch (e) {}
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/noProfile.js)

### assignProfile

<button class="btn" data-clipboard-text="assignProfile(_profile);"></button>
{: .btn_p }

??? "assignProfile(_profile);"
    ``` js linenums="1"
    function assignProfile(_profile) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('document'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        d.putString(sTID('profile'), _profile);
        executeAction(sTID('assignProfile'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/assignProfile.js)

* _profile `string`

### gray2rgb

<button class="btn" data-clipboard-text="gray2rgb();"></button>
{: .btn_p }

??? "gray2rgb();"
    ``` js linenums="1"
    function gray2rgb() {
        if (doc.mode == DocumentMode.GRAYSCALE) {
            doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/gray2rgb.js)

### cmyk2rgb

<button class="btn" data-clipboard-text="cmyk2rgb();"></button>
{: .btn_p }

??? "cmyk2rgb();"
    ``` js linenums="1"
    function cmyk2rgb() {
        if (doc.mode == DocumentMode.CMYK) {
            doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/cmyk2rgb.js)

### sRGB2eciRGB

<button class="btn" data-clipboard-text="sRGB2eciRGB();"></button>
{: .btn_p }

??? "sRGB2eciRGB();"
    ``` js linenums="1"
    function sRGB2eciRGB() {
        var getProfile = doc.colorProfileName;
        var find = new RegExp("^sRGB|Apple RGB|ColorMatch RGB");
        if (getProfile.match(find)) {
            doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
        }
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/sRGB2eciRGB.js)

### indexcolor2rgb

<button class="btn" data-clipboard-text="indexcolor2rgb();"></button>
{: .btn_p }

??? "indexcolor2rgb();"
    ``` js linenums="1"
    function indexcolor2rgb() {
        if (doc.mode == DocumentMode.INDEXEDCOLOR) {
            doc.changeMode(ChangeMode.RGB)
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/indexcolor2rgb.js)

## WEB-Output
### GetFileNameOnly

<button class="btn" data-clipboard-text="GetFileNameOnly(myFileName);"></button>
{: .btn_p }

??? "GetFileNameOnly(myFileName);"
    ``` js linenums="1"
    function GetFileNameOnly(myFileName) {
        var myString = "";
        var myResult = myFileName.lastIndexOf(".");
        if (myResult == -1) {
            myString = myFileName;
        } else {
            myString = myFileName.substr(0, myResult);
        }
        return myString;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/GetFileNameOnly.js)

### replace__RGB_RZ

<button class="btn" data-clipboard-text="replace__RGB_RZ(_replace);"></button>
{: .btn_p }

??? "replace__RGB_RZ(_replace);"
    ``` js linenums="1"
    function replace__RGB_RZ(_replace) {
        var RGBname = GetFileNameOnly(doc.name);
        var RZname = RGBname.replace(/(__RGB.*)$/g, _replace).replace(/(__RZ.*)$/g, _replace);
    
        var checkName = new RegExp(_replace, 'g');
        if (!RZname.match(checkName)) {
            var RZname = RZname + _replace;
        }
        return RZname;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/replace__RGB_RZ.js)

### saveRZ

<button class="btn" data-clipboard-text="saveRZ(_saveFolder, _prefix, _saveFormat, _replace);"></button>
{: .btn_p }

??? "saveRZ(_saveFolder, _prefix, _saveFormat, _replace);"
    ``` js linenums="1"
    function saveRZ(_saveFolder, _prefix, _saveFormat, _replace) {
    
        var saveFolder = new Folder(_saveFolder);
        if (!saveFolder.exists) saveFolder.create();
    
        var saveName = replace__RGB_RZ(_replace);
        var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
        var saveFile = File(savePath);
    
        while (saveFile.exists) {
            var saveName = saveName + "+";
            var savePath = saveFolder + "/" + _prefix + saveName + "." + _saveFormat;
            var saveFile = File(savePath);
        }
    
    
        if (_saveFormat == "tif") {
            var saveOptions = new TiffSaveOptions();
            saveOptions.alphaChannels = true;
            saveOptions.byteOrder = ByteOrder.IBM;
            saveOptions.embedColorProfile = true;
            saveOptions.imageCompression = TIFFEncoding.TIFFLZW;
            saveOptions.layers = true;
            saveOptions.spotColors = false;
            saveOptions.transparency = true;
            saveOptions.annotations = false;
    
        } else if (_saveFormat == "jpg") {
            var saveOptions = new JPEGSaveOptions();
            saveOptions.embedColorProfile = true;
            saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
            saveOptions.matte = MatteType.WHITE;
            saveOptions.quality = 11;
    
        } else if (_saveFormat == "psd") {
            var saveOptions = new PhotoshopSaveOptions();
            saveOptions.alphaChannels = false;
            saveOptions.annotations = false;
            saveOptions.embedColorProfile = true;
            saveOptions.layers = true;
            saveOptions.spotColors = false;
        }
    
        doc.saveAs(new File(savePath), saveOptions, false, Extension.LOWERCASE);
        return;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/saveRZ.js)

### selectAllLayers

<button class="btn" data-clipboard-text="selectAllLayers();"></button>
{: .btn_p }

??? "selectAllLayers();"
    ``` js linenums="1"
    function selectAllLayers() {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
        d.putReference(sTID('null'), r);
        executeAction(sTID('selectAllLayers'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/selectAllLayers.js)

### mergeLayers

<button class="btn" data-clipboard-text="mergeLayers();"></button>
{: .btn_p }

??? "mergeLayers();"
    ``` js linenums="1"
    function mergeLayers() {
        var d = new ActionDescriptor();
        executeAction(sTID('mergeLayersNew'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/mergeLayers.js)

### flattenImage

<button class="btn" data-clipboard-text="flattenImage();"></button>
{: .btn_p }

??? "flattenImage();"
    ``` js linenums="1"
    function flattenImage() {
        executeAction(charIDToTypeID("FltI"), undefined, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/flattenImage.js)

### blendif

<button class="btn" data-clipboard-text="blendif(_blackMin, _blackMax, _whiteMin, _whiteMax);"></button>
{: .btn_p }

??? "blendif(_blackMin, _blackMax, _whiteMin, _whiteMax);"
    ``` js linenums="1"
    // function blendif(_blackMin, _blackMax, _whiteMin, _whiteMax) {
    //     var d = new ActionDescriptor();
    //     var r = new ActionReference();
    //     r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    //     d.putReference(sTID('null'), r);
    //     var d2 = new ActionDescriptor();
    //     var l = new ActionList();
    //     var d3 = new ActionDescriptor();
    //     var r2 = new ActionReference();
    //     r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('gray'));
    //     d3.putReference(sTID('channel'), r2);
    //     d3.putInteger(sTID('srcBlackMin'), 0);
    //     d3.putInteger(sTID('srcBlackMax'), 0);
    //     d3.putInteger(sTID('srcWhiteMin'), 255);
    //     d3.putInteger(sTID('srcWhiteMax'), 255);
    //     d3.putInteger(sTID('destBlackMin'), _blackMin);
    //     d3.putInteger(sTID('destBlackMax'), _blackMax);
    //     d3.putInteger(sTID('destWhiteMin'), _whiteMin);
    //     d3.putInteger(sTID('desaturate'), _whiteMax);
    //     l.putObject(sTID('blendRange'), d3);
    //     d2.putList(sTID('blendRange'), l);
    //     var d4 = new ActionDescriptor();
    //     d4.putUnitDouble(sTID('scale'), sTID('percentUnit'), 100.000000);
    //     d2.putObject(sTID('layerEffects'), sTID('layerEffects'), d4);
    //     d.putObject(sTID('to'), sTID('layer'), d2);
    //     executeAction(sTID('set'), d, DialogModes.NO);
    // }
    
    function blendif(_idx, _blackMin, _blackMax, _whiteMin, _whiteMax) {
        var d = new ActionDescriptor();
        var r = new ActionReference();
        if (!isNaN(_idx)) {
            r.putIndex(s2t("layer"), _idx)
        } else {
            r.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'))
        }
        d.putReference(sTID('null'), r);
    
        var d2 = new ActionDescriptor();
        var l = new ActionList();
        var d3 = new ActionDescriptor();
        var r2 = new ActionReference();
        r2.putEnumerated(sTID('channel'), sTID('channel'), sTID('gray'));
        d3.putReference(sTID('channel'), r2);
        d3.putInteger(sTID('srcBlackMin'), 0);
        d3.putInteger(sTID('srcBlackMax'), 0);
        d3.putInteger(sTID('srcWhiteMin'), 255);
        d3.putInteger(sTID('srcWhiteMax'), 255);
        d3.putInteger(sTID('destBlackMin'), _blackMin);
        d3.putInteger(sTID('destBlackMax'), _blackMax);
        d3.putInteger(sTID('destWhiteMin'), _whiteMin);
        d3.putInteger(sTID('desaturate'), _whiteMax);
        l.putObject(sTID('blendRange'), d3);
        d2.putList(sTID('blendRange'), l);
        d.putObject(sTID('to'), sTID('layer'), d2);
        executeAction(sTID('set'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/blendif.js)

* _blackMin
* _blackMax
* _whiteMin
* _whiteMax

### checkTransparency

<button class="btn" data-clipboard-text="checkTransparency();"></button>
{: .btn_p }

??? "checkTransparency();"
    ``` js linenums="1"
    function checkTransparency() {
        doc.suspendHistory("Transparent Check", "checkTransparency_inner()");
        undoSteps(1);
    
        if (transp) {return true} 
        else {return false}
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/checkTransparency.js)

### checkTransparency_inner

<button class="btn" data-clipboard-text="checkTransparency_inner();"></button>
{: .btn_p }

??? "checkTransparency_inner();"
    ``` js linenums="1"
    function checkTransparency_inner() {
        prefSave();
        transp = true;
    
        var s2t = function (s) {return app.stringIDToTypeID(s);};
    
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
        var r2 = new ActionReference();
        var r3 = new ActionReference();
    
        r.putProperty(s2t("channel"), s2t("selection"));
        d.putReference(s2t("null"), r);
        r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
        r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
        d2.putReference(s2t("to"), r2);
        r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
        r3.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
        d2.putReference(s2t("source2"), r3);
        d.putObject(s2t("to"), s2t("calculation"), d2);
    
        try {
            executeAction(s2t("set"), d, DialogModes.NO);
            activeDocument.selection.invert();
            try {
                activeDocument.selection.bounds;
            } catch (e) {
                transp = false;
            }
    
        } catch (e) {
            transp = false;
        }
        prefReset();
        activeDocument.selection.deselect();
    
        return transp;
    
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/checkTransparency_inner.js)

### transformLayer

<button class="btn" data-clipboard-text="transformLayer(_position, _scale);"></button>
{: .btn_p }

??? "transformLayer(_position, _scale);"
    ``` js linenums="1"
    function transformLayer(_position, _scale) {
        var d = new ActionDescriptor();
    
        if (_position == "center" || _position == "c") {
            var _positionTranslate = "QCSAverage";}
        if (_position == "topleft" || _position == "tl" || _position == "↖") {
            var _positionTranslate = "QCSCorner0";}
        if (_position == "top" || _position == "t" || _position == "↑") {
            var _positionTranslate = "QCSSide0";}
        if (_position == "topright" || _position == "tr" || _position == "↗") {
            var _positionTranslate = "QCSCorner1";}
        if (_position == "right" || _position == "r" || _position == "→") {
            var _positionTranslate = "QCSSide1";}
        if (_position == "bottomright" || _position == "br" || _position == "↘") {
            var _positionTranslate = "QCSCorner2";}
        if (_position == "bottom" || _position == "b" || _position == "↓") {
            var _positionTranslate = "QCSSide2";}
        if (_position == "bottomleft" || _position == "bl" || _position == "↙") {
            var _positionTranslate = "QCSCorner3";}
        if (_position == "left" || _position == "l" || _position == "←") {
            var _positionTranslate = "QCSSide3";}
    
        d.putEnumerated(sTID('freeTransformCenterState'), sTID('quadCenterState'), sTID(_positionTranslate));
        var d2 = new ActionDescriptor();
        d2.putUnitDouble(sTID('horizontal'), sTID('pixelsUnit'), 0);
        d2.putUnitDouble(sTID('vertical'), sTID('pixelsUnit'), 0);
        d.putObject(sTID('offset'), sTID('offset'), d2);
        d.putUnitDouble(sTID('width'), sTID('percentUnit'), _scale);
        d.putUnitDouble(sTID('height'), sTID('percentUnit'), _scale);
        executeAction(sTID('transform'), d, DialogModes.NO);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/transformLayer.js)

### smartObjectTransparencyIssue

<button class="btn" data-clipboard-text="smartObjectTransparencyIssue();"></button>
{: .btn_p }

??? "smartObjectTransparencyIssue();"
    ``` js linenums="1"
    function smartObjectTransparencyIssue() {
        var temp = doc.activeLayer.name;
        gotoLayer("Original");
    
        
        tempRulerUnits = app.preferences.rulerUnits;
        app.preferences.rulerUnits = Units.PIXELS;
        
    
        if (doc.activeLayer.kind == "LayerKind.SMARTOBJECT") {
            if (doc.width < doc.height) {
                var transformLayerScale = (doc.width + 2) * 100 / doc.width;
            } else {
                var transformLayerScale = (doc.height + 2) * 100 / doc.height;
            }
            alert(transformLayerScale);
            transformLayer("center", transformLayerScale);
        }
    
        gotoLayer("vorher Ebene");
        if (doc.width < doc.height) {
            var transformLayerScale = (doc.width + 2) * 100 / doc.width;
        } else {
            var transformLayerScale = (doc.height + 2) * 100 / doc.height;
        }
        transformLayer("center", transformLayerScale);
        app.preferences.rulerunits = tempRulerUnits;
        
    
        gotoLayer(temp);
        var temp = "";
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/smartObjectTransparencyIssue.js)

### isSelectionActive

<button class="btn" data-clipboard-text="isSelectionActive();"></button>
{: .btn_p }

??? "isSelectionActive();"
    ``` js linenums="1"
    function isSelectionActive() {
        var layerRef = doc.selection;
        try      {return (layerRef.bounds) ? true : false;}
        catch(e) {return false;}
    }
    
    
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/isSelectionActive.js)

## shortener

### c2t

<button class="btn" data-clipboard-text="c2t(s);"></button>
{: .btn_p }

??? "c2t(s);"
    ``` js linenums="1"
    // CleanSL
    function c2t(s) {
        return app.charIDToTypeID(s);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/_c2t.js)

### cTID

<button class="btn" data-clipboard-text="cTID(s);"></button>
{: .btn_p }

??? "cTID(s);"
    ``` js linenums="1"
    // xtools
    function cTID(s) {
        return app.charIDToTypeID(s)
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/_cTID.js)

### s2t

<button class="btn" data-clipboard-text="s2t(s);"></button>
{: .btn_p }

??? "s2t(s);"
    ``` js linenums="1"
    // CleanSL
    function s2t(s) {
        return app.stringIDToTypeID(s);
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/_s2t.js)

### sTID

<button class="btn" data-clipboard-text="sTID(s);"></button>
{: .btn_p }

??? "sTID(s);"
    ``` js linenums="1"
    // xtools
    function sTID(s) {
        return app.stringIDToTypeID(s)
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/_sTID.js)

### t2s

<button class="btn" data-clipboard-text="t2s(s);"></button>
{: .btn_p }

??? "t2s(s);"
    ``` js linenums="1"
    // CleanSL
    function t2s(s) {
        return app.typeIDToStringID(s)
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/basic/_t2s.js)

!!! warning show "not documented functions"
    - adjustHue
     - adjustLayer_curves_set
     - adjustLayer_sat_set
     - app_getColor
     - arrayCorrect
     - gotoLayer_byID
     - workingProfile_get
     - workingProfile_set
