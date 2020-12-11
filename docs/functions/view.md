

# VIEW

## Zoom

### fitScreen

<button class="btn" data-clipboard-text="fitScreen();"></button>
{: .btn_p }

??? "fitScreen();"
    ``` js linenums="1"
    function fitScreen() {
        runMenuItem(cTID("FtOn"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/fitScreen.js)


### zoomOut

<button class="btn" data-clipboard-text="zoomOut();"></button>
{: .btn_p }

??? "zoomOut();"
    ``` js linenums="1"
    function zoomOut() {
        runMenuItem(cTID("ZmOt"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoomOut.js)


### zoomIn

<button class="btn" data-clipboard-text="zoomIn();"></button>
{: .btn_p }

??? "zoomIn();"
    ``` js linenums="1"
    function zoomIn() {
        runMenuItem(cTID("ZmIn"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoomIn.js)


### apfel0
hier stimmt was nicht, gleiche Funktion wie zoom100()

<button class="btn" data-clipboard-text="apfel0();"></button>
{: .btn_p }

??? "apfel0();"
    ``` js linenums="1"
    function apfel0() {
        runMenuItem(cTID("ActP"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/apfel0.js)


### zoom100

<button class="btn" data-clipboard-text="zoom100();"></button>
{: .btn_p }

??? "zoom100();"
    ``` js linenums="1"
    function zoom100() {
        runMenuItem(cTID("ActP"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoom100.js)


### zoomOutSteps

<button class="btn" data-clipboard-text="zoomOutSteps(_steps);"></button>
{: .btn_p }

??? "zoomOutSteps(_steps);"
    ``` js linenums="1"
    function zoomOutSteps(_steps) {
        for (var i = 0; i < _steps; i++) {
            app.runMenuItem(charIDToTypeID('ZmOt'));
        };
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoomOutSteps.js)

* _steps `number`

### getZoomLevel

<button class="btn" data-clipboard-text="getZoomLevel();"></button>
{: .btn_p }

??? "getZoomLevel();"
    ``` js linenums="1"
    function getZoomLevel(){
        var ref = new ActionReference();
        ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('zoom'));
        ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
        var desc = executeActionGet(ref);
        return Number(desc.getDouble(stringIDToTypeID('zoom'))*100).toFixed(2);
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/getZoomLevel.js)


### setDocResolution
==Ist doch auch iregndwo anders?==

<button class="btn" data-clipboard-text="setDocResolution(dpi);"></button>
{: .btn_p }

??? "setDocResolution(dpi);"
    ``` js linenums="1"
    function setDocResolution(dpi){
        var desc = new ActionDescriptor();
        desc.putUnitDouble( charIDToTypeID( "Rslt" ), charIDToTypeID( "#Rsl" ), dpi );
        executeAction( charIDToTypeID( "ImgS" ), desc, DialogModes.NO );
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/setDocResolution.js)

* dpi `number`

### setZoomLevel

<button class="btn" data-clipboard-text="setZoomLevel(zoom);"></button>
{: .btn_p }

??? "setZoomLevel(zoom);"
    ``` js linenums="1"
    function setZoomLevel(zoom) {
        if(zoom < 1 ) zoom = 1;
        var ref = new ActionReference();
        ref.putProperty( stringIDToTypeID('property'), stringIDToTypeID('unitsPrefs'));
        ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
        var getScrRes = executeActionGet(ref).getObjectValue(stringIDToTypeID('unitsPrefs')).getUnitDoubleValue(stringIDToTypeID('newDocPresetScreenResolution'))/72;
        var docRes = activeDocument.resolution;
    
        app.activeDocument.suspendHistory('zoomHelper', 'zoomHelper()');
        function zoomHelper() {
            setDocResolution(getScrRes/(zoom/100))
            runMenuItem(stringIDToTypeID( 'printSize' ));
            setDocResolution(docRes);
        }
        executeAction( charIDToTypeID('undo'), undefined, DialogModes.NO );
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/setZoomLevel.js)

* zomm `number` ==glaube ich==


## Ansichten

### standardmodus

<button class="btn" data-clipboard-text="standardmodus();"></button>
{: .btn_p }

??? "standardmodus();"
    ``` js linenums="1"
    function standardmodus() {
        runMenuItem(sTID("screenModeStandard"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/standardmodus.js)


### vollbildmodus_menu

<button class="btn" data-clipboard-text="vollbildmodus_menu();"></button>
{: .btn_p }

??? "vollbildmodus_menu();"
    ``` js linenums="1"
    function vollbildmodus_menu() {
        runMenuItem(sTID("screenModeFullScreenWithMenubar"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/vollbildmodus_menu.js)


### vollbildmodus

<button class="btn" data-clipboard-text="vollbildmodus();"></button>
{: .btn_p }

??? "vollbildmodus();"
    ``` js linenums="1"
    function vollbildmodus() {
        runMenuItem(sTID("screenModeFullScreen"))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/vollbildmodus.js)


### anordung_kachel

<button class="btn" data-clipboard-text="anordung_kachel();"></button>
{: .btn_p }

??? "anordung_kachel();"
    ``` js linenums="1"
    function anordung_kachel() {
        runMenuItem(cTID('Tile'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_kachel.js)


### anordung_1

<button class="btn" data-clipboard-text="anordung_1();"></button>
{: .btn_p }

??? "anordung_1();"
    ``` js linenums="1"
    function anordung_1() {
        runMenuItem(sTID('consolidateAllTabs'));
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_1.js)


### anordung_2vertical

<button class="btn" data-clipboard-text="anordung_2vertical();"></button>
{: .btn_p }

??? "anordung_2vertical();"
    ``` js linenums="1"
    function anordung_2vertical() {
        runMenuItem(sTID('2upVertical'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_2vertical.js)


### anordung_2horizontal

<button class="btn" data-clipboard-text="anordung_2horizontal();"></button>
{: .btn_p }

??? "anordung_2horizontal();"
    ``` js linenums="1"
    function anordung_2horizontal() {
        runMenuItem(sTID('2upHorizontal'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_2horizontal.js)


### anordung_3

<button class="btn" data-clipboard-text="anordung_3();"></button>
{: .btn_p }

??? "anordung_3();"
    ``` js linenums="1"
    function anordung_3() {
        runMenuItem(sTID('3upStacked'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_3.js)


### anordung_3vertical

<button class="btn" data-clipboard-text="anordung_3vertical();"></button>
{: .btn_p }

??? "anordung_3vertical();"
    ``` js linenums="1"
    function anordung_3vertical() {
        runMenuItem(sTID('3upVertical'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_3vertical.js)


### anordung_3horizontal

<button class="btn" data-clipboard-text="anordung_3horizontal();"></button>
{: .btn_p }

??? "anordung_3horizontal();"
    ``` js linenums="1"
    function anordung_3horizontal() {
        runMenuItem(sTID('3upHorizontal'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_3horizontal.js)


### anordung_4

<button class="btn" data-clipboard-text="anordung_4();"></button>
{: .btn_p }

??? "anordung_4();"
    ``` js linenums="1"
    function anordung_4() {
        runMenuItem(sTID('4upTile'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_4.js)


### anordung_6

<button class="btn" data-clipboard-text="anordung_6();"></button>
{: .btn_p }

??? "anordung_6();"
    ``` js linenums="1"
    function anordung_6() {
        runMenuItem(sTID('6upTile'))
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/anordung_6.js)




### zoomIn + zoomOut + zoomOutSteps
==this is is old way. Needs to prozess the "print size" – so it’s not acceptable. But the zoomLevel-Steps are a great idea==
thanks http://www.ps-scripts.com/viewtopic.php?f=77&t=40407&sid=7fa52b610449dfd7e44702dc0baa5215#p168999

```
var zoomLevels=[5, 6.25, 8.33, 12.5, 16.67, 25, 33.33, 50, 66.67, 100, 150, 200, 300, 400, 800, 1600, 3200];
```


<button class="btn" data-clipboard-text="zoomIn_zoomLevels();"></button>
{: .btn_p }

??? "zoomIn_zoomLevels();"
    ``` js linenums="1"
    function zoomIn_zoomLevels(){
        var zoomLevel = getZoomLevel();
        for(var z in zoomLevels){
            if(Number(zoomLevels[z]) > Number(zoomLevel)){
                setZoomLevel(zoomLevels[z]);
                break;
            }
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoomIn_zoomLevels.js)


<button class="btn" data-clipboard-text="zoomOut_zoomLevels();"></button>
{: .btn_p }

??? "zoomOut_zoomLevels();"
    ``` js linenums="1"
    function zoomOut_zoomLevels(){
        var zoomLevel = getZoomLevel();
        for(var z in zoomLevels){
            if(Number(zoomLevels[z]) >= Number(zoomLevel)){
                setZoomLevel(zoomLevels[z - 1]);
                break;
            }
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoomOut_zoomLevels.js)


<button class="btn" data-clipboard-text="zoomOutSteps_zoomLevels(steps);"></button>
{: .btn_p }

??? "zoomOutSteps_zoomLevels(steps);"
    ``` js linenums="1"
    function zoomOutSteps_zoomLevels(steps){
        var zoomLevel = getZoomLevel();
        for(var z in zoomLevels){
            if(Number(zoomLevels[z]) >= Number(zoomLevel)){
                setZoomLevel(zoomLevels[z - steps]);
                break;
            }
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoomOutSteps_zoomLevels.js)


### setZoom 
Thanks: https://community.adobe.com/t5/photoshop/scripting-for-zoom-and-scroll-in-cc2018/m-p/10048762#M191468

<button class="btn" data-clipboard-text="setZoom(_zoom);"></button>
{: .btn_p }

??? "setZoom(_zoom);"
    ``` js linenums="1"
    function setZoom(_zoom) {
        try {
            if (!_zoom) _zoom = 100;
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("zoom"));
            r.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
            d.putReference(stringIDToTypeID("null"), r);
            var d1 = new ActionDescriptor();
            d1.putDouble(stringIDToTypeID("zoom"), _zoom / 100);
            d.putObject(stringIDToTypeID("to"), stringIDToTypeID("zoom"), d1);
            executeAction(stringIDToTypeID("set"), d, DialogModes.NO);
        } catch(e) {throw(e);}
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/setZoom.js)

```js
setZoom(100)
```

### set_doc_position

<button class="btn" data-clipboard-text="set_doc_position(x, y);"></button>
{: .btn_p }

??? "set_doc_position(x, y);"
    ``` js linenums="1"
    function set_doc_position(x, y) {
        try {
            var r = new ActionReference();
            r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("viewInfo"));
            r.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
            var bounds = executeActionGet(r).getObjectValue(stringIDToTypeID("viewInfo")).getObjectValue(stringIDToTypeID("activeView")).getObjectValue(stringIDToTypeID("globalBounds"));
            var b = new Array();
            b[0] = bounds.getUnitDoubleValue(stringIDToTypeID("left"));
            b[1] = bounds.getUnitDoubleValue(stringIDToTypeID("top"));
            b[2] = bounds.getUnitDoubleValue(stringIDToTypeID("right"));
            b[3] = bounds.getUnitDoubleValue(stringIDToTypeID("bottom"));
    
            var dx = -1.5;
            var dy = -1.5;
    
            x = (b[2] - b[0]) / 2 - x - dx;
            y = (b[3] - b[1]) / 2 - y - dy;
    
            var d = new ActionDescriptor();
            var r = new ActionReference();
            r.putProperty(stringIDToTypeID("property"), stringIDToTypeID("center"));
            r.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
            d.putReference(stringIDToTypeID("null"), r);
    
            var d1 = new ActionDescriptor();
    
            d1.putUnitDouble(stringIDToTypeID("horizontal"), stringIDToTypeID("distanceUnit"), x);
            d1.putUnitDouble(stringIDToTypeID("vertical"), stringIDToTypeID("distanceUnit"), y);
    
            d.putObject(stringIDToTypeID("to"), stringIDToTypeID("center"), d1);
            executeAction(stringIDToTypeID("set"), d, DialogModes.NO);
        } catch(e) {throw(e);};
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/set_doc_position.js)

```js
set_doc_position(50, 50)
```

### zoomSteps

<button class="btn" data-clipboard-text="zoomSteps(_steps);"></button>
{: .btn_p }

??? "zoomSteps(_steps);"
    ``` js linenums="1"
    function zoomSteps(_steps) {
        var zoomLevels=[.1, .2, .3, .4, .5, .7, 1, 1.5, 2, 3, 4, 5, 6.25, 8.33, 12.5, 16.67, 25, 33.33, 50, 66.67, 100, 150, 200, 300, 400, 500, 600, 700, 800, 1200, 1600, 3200, 6400, 12800];
        var zoomLevel = getZoomLevel();
        var _steps = _steps * -1;
        for(var z in zoomLevels){
            if(Number(zoomLevels[z]) >= Number(zoomLevel)){
                if (typeof zoomLevels[z - _steps] !== "undefined") {
                    setZoom(zoomLevels[z - _steps]);
                }
                break;
            }
        }
    };
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/zoomSteps.js)


???+ a
    ```js
    zoomSteps(2)
    ```
    
    ??? b
        * _steps `number` positiv ZoomIn / Bigger
        * _steps `number` negativ zoomOut / Smaller

### scrollPage

<button class="btn" data-clipboard-text="scrollPage(_direction);"></button>
{: .btn_p }

??? "scrollPage(_direction);"
    ``` js linenums="1"
    function scrollPage(_direction) {
        var ruler_viewInfo = 19;
        var ruler_viewTransform = 0;
        if (!rulersVisibility()) {
            var ruler_viewInfo = 0;
            var ruler_viewTransform = 9.5;
        }
        var scrollbar = 16;
        var overlap = 100;
        var outer_border = 50;
    
    
        var r1 = new ActionReference();
        r1.putProperty(stringIDToTypeID("property"), stringIDToTypeID("viewInfo"));
        r1.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        var desc = executeActionGet(r1);
        var bounds = desc.getObjectValue(stringIDToTypeID('viewInfo')).getObjectValue(stringIDToTypeID('activeView')).getObjectValue(stringIDToTypeID('globalBounds'));
    
        var left = bounds.getDouble(stringIDToTypeID('left'));
        var right = bounds.getDouble(stringIDToTypeID('right'));
        var top = bounds.getDouble(stringIDToTypeID('top'));
        var bottom = bounds.getDouble(stringIDToTypeID('bottom'));
    
        var view_w = right - left - ruler_viewInfo - scrollbar;
        var view_h = bottom - top - ruler_viewInfo - scrollbar;
    
    
        var r2 = new ActionReference();
        r2.putProperty(stringIDToTypeID("property"), stringIDToTypeID("viewTransform"));
        r2.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        var list = executeActionGet(r2).getList(stringIDToTypeID('viewTransform'));
    
        var x_pos = (list.getDouble(4) / list.getDouble(0)) - ruler_viewTransform;
        var y_pos = (list.getDouble(5) / list.getDouble(3)) - ruler_viewTransform;
    
        rulerUnits_prefSave();
        rulerUnits_prefSet(Units.PIXELS);
        var img_h = parseInt((app.activeDocument.height / list.getDouble(0)) - ruler_viewTransform);
        var img_w = parseInt((app.activeDocument.width / list.getDouble(3)) - ruler_viewTransform);
        rulerUnits_prefSet(startRulerUnits);
        
    
        
        if (_direction == "up") {
            var y_new = -(y_pos - view_h + overlap);
            if (y_new > outer_border) {y_new = outer_border;};
            set_doc_position(-x_pos, y_new);
        }
        // in der Grenze fehlt noch die Scrollbar
        else if (_direction == "down") {
            var y_new = -(y_pos + view_h - overlap);
            var grenze = img_h - view_h + outer_border;
            if(y_new < -grenze) {
                var y_new = -grenze
            }
            set_doc_position(-x_pos, y_new);
        }
    
        // in der Grenze fehlt noch die Scrollbar
        else if (_direction == "right") {
            var x_new = -(x_pos + view_w - overlap);
            var grenze = img_w - view_w + outer_border;
    
            if(x_new < -grenze) {
                var x_new = -grenze
            }
            set_doc_position(x_new, -y_pos);
        }
    
        else if (_direction == "left") {
            x_new = -(x_pos - view_w + overlap);
            if (x_new > outer_border) {x_new = outer_border;};
            set_doc_position(x_new, -y_pos);
        }
    
        return;
    }
    ```

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/view/scrollPage.js)

???+ a
    ```js
    scrollPage("down")
    ```
    
    ??? b
        * _direction `up` `down` `left` `right`
        * Shortcut via Alfred
        * up ++alt+w++
        * down ++alt+y++
        * left ++alt+a++
        * right ++alt+s++