# BASIC.jsx

For full documentation visit [mkdocs.org](https://www.mkdocs.org).


## application

### emptyProtocoll
das Protokoll komplett zurücksetzten und den Arbeitsspeicher wieder freigeben. Kann nicht rückgängig gemacht werden.
```function 
emptyProtocoll();
``` 

### deleteHistory
```function 
deleteHistory();
``` 

### prefSave
store the dialog- and unit-settings in variables ==warum nicht alle Prefs speichern und später zurückstellen?==
```function 
prefSave();
``` 

### prefSet
set the dialog- and unit-settings ==TODO hätte ja gerne eine einfachere Syntax mit translate-function==
```function 
prefSet(_dialog, _units);
``` 
``` javascript
prefSet(DialogModes.NO, Units.MM);
```

* _dialog `DialogModes.NO` `DialogModes.ALL`
* _units `Units.CM` `Units.INCHES` `Units.MM` `Units.PERCENT` `Units.PICAS` `Units.PIXELS` `Units.POINTS`


### prefReset
reset the dialog- and unit-settings to the previous state
```function 
prefReset();
``` 

## document

### undoSteps
schrittweise 

```javascript 
undoSteps(2);
```

??? "undoSteps(_steps)"
    ``` js linenums="1"
    function undoSteps(_steps) {
        for (var i = 0; i < _steps; i++) {
            executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
        };
    };
    ```

### resetImage
*TODO würde gerne einen anderen Namen haben*
```function 
resetImage();
``` 

## debugging
### time_start
```function 
time_start();
``` 

### time_stop
```function 
time_stop(_time_start);
``` 

### logger
```function 
logger(_log_function);
``` 



## Layer
### createLayer
==TODO umbenennen createAdjustmentLayer oder createLayer_adjustment== erstelle eine Einstellebene
```function
createLayer(_name, _type, _mode, _color, _opacity, _mask, _clip, _autoLevel);
```
``` js
createLayer("AutoTonwert", "levels", "normal", "gray", 80, "black", f,f);
```

* _name `string`
* _type `solidColorLayer` `gradientLayer` `patternLayer` // `brightnessEvent` `levels` `curves` `exposure` `vibrance` `hueSaturation` `colorBalance` `blackAndWhite` `photoFilter` `channelMixer` `colorLookup` // `invert` `posterization` `thresholdClassEvent` `gradientMapClass` `selectiveColor`
* _mode 
* _color
* _opacity `0-100`
* _mask `none` `invert` `black` `white` `gray`
* _clip `boolean`
* _autoLevels `boolean` *only with _type=levels*

### createColorLayer
erstelle eine Farbfläche
```function
createColorLayer(_name, _mode, _color, _opacity, _mask, _red, _green, _blue);
```
```js
createColorLayer("Weiss", "normal", "gray", 100, "none", 255, 255, 255);
```

* _name `string`
* _mode
* _color
* _opacity `0-100`
* _mask `none` `invert` `black` `white` `gray`
* _red `0-255`
* _green `0-255`
* _blue `0-255`

### gotoMask
```function
gotoMask();
```
### gotoFill
```function
gotoFill();
```

### moveLayer
```function
moveLayer(_objectLayer, _aimLayer, _direction)
```
```javascript
moveLayer("Weiss", "Original", "down");
```

* _objectLayer `string`
* _aimLayer `string`
* _direction `up` `down`

### moveLayer3
```function
moveLayer3(_direction,_steps)
```
```javascript
moveLayer3("up", 3);
```

* _direction `up` `down` `top` `bottom`
* _steps `number`

### deleteMask
```function
deleteMask()
```

### createGroup
```function
createGroup(_name, _mode, _color, _opacity, _groupSelection)
```
```javascript
createGroup("Einstellungen", "passThrough", "none", 100);
```

* _name `string`
* _mode `passThrough`
* _color `none`
* _opacity `number` `0-100`
* _groupSelection `boolean`

### fill
```function
fill(_content, _mode, _opacity, _h, _s, _b)
```
```javascript
fill("black", "normal", 100);
fill("color", "multiply", 50, 240,50,50);
```

* _content
* _mode
* _opacity
* _h
* _s
* _b

### smartObject
```function
smartObject()
```

### rasterSmartObject
```function
rasterSmartObject()
```

### nameLayer
```function
nameLayer(_name)
```
```javascript

```
* _name

### dublicate
```function
dublicate(_name) 
```
```javascript

```
* _name

### selectLayerUp
TODO ist das noch in Verwendung, oder kann das weg
```function
selectLayerUp()
```

### selectLayer
```function
selectLayer(_direction, _times)
```
```javascript

```
* _direction
* _times

### selectAll
TODO mit unterer Funktion ersetzt
```function
selectAll()
```
```javascript

```

### selectLayers 
```function
selectLayers(_all_or_nothing)
```
```javascript
selectLayers(selectAllLayers);
```

* _all_or_nothing `selectNoLayers` `selectAllLayers`

### hasBackground
```function
hasBackground()
```

### clearAllGuides
```function
clearAllGuides()
```

### gotoLayer
```function
gotoLayer(_input)
```
```javascript
gotoLayer("Original");
```

* _input `number` `string` *idx oder LayerName*

## Image 
### SmartObject_edit
```function
SmartObject_edit()
```
```javascript

```

### SmartOject_placeItem
```function
SmartOject_placeItem(_item)
```
```javascript

```

### getBitDepth
returns 8, 6 or 32
```function
getBitDepth()
```

### setBitDepth
```function
setBitDepth(_bitdepth)
```
```javascript

```
* _bitdepth

### img_resize
TODO irritierender Name // Vorschläge?
```function
img_resize(_ziel_longSite, _max_resolution)
```
```javascript
img_resize(10, 300);
img_resize(10, null);
```

* _ziel_longSite
* _max_resolution



### setMegaPixel
```function
setMegaPixel(_setMegaPixel)
```
```javascript
setMegaPixel(8)
```

* _setMegaPixel `number`

### getScale
```function
getScale(_setMegaPixel)
```
```javascript
getScale(8);
```

* _setMegaPixel `number`

### cm2pt
Convert cm to Point, imageSize needs Points
```function
cm2pt(cm)
```

### mm2pt
```function
mm2pt(mm)
```


### setDpi
```function
setDpi(_dpi)
```
```javascript
setDpi(355.6)
```

* _dpi `number`

### setSize
```function
setSize(_side, _size)
```
```javascript
setSize("width", 100);
```

* _side `width` `height`
* _size `number`


## Color
### noProfile
```function
noProfile()
```

### assignProfile
```function
assignProfile(_profile)
```
```javascript

```

* _profile `string`


### gray2rgb
```function
gray2rgb()
```

### cmyk2rgb
```function
cmyk2rgb()
```

### sRGB2eciRGB
```function
sRGB2eciRGB()
```

## WEB-Output
### GetFileNameOnly
```function
GetFileNameOnly(myFileName)
```
```javascript

```

### replace__RGB_RZ
```function
replace__RGB_RZ(_replace)
```
```javascript

```

### saveRZ
```function
saveRZ(_saveFolder, _prefix, _saveFormat, _replace)
```
```javascript

```

### selectAllLayers
```function
selectAllLayers()
```
```javascript

```

### mergeLayers
```function
mergeLayers()
```
```javascript

```

### blendif
```function
blendif(_blackMin, _blackMax, _whiteMin, _whiteMax)
```
```javascript

```

* _blackMin
* _blackMax
* _whiteMin
* _whiteMax


<!--
Blanko Eintrag

### 
```function

```
```javascript

```

-->

<!--
regex option –> List
find
(.+?)(?:,?\s|$)

replace
* $1\n

-->

