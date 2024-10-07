### getActiveLayerIndex
***number*** ==Layer/Group?==

<button class="btn" data-clipboard-text="getActiveLayerIndex();"></button>
{: .btn_p }

??? "getActiveLayerIndex();"
    ``` js linenums="1"
    function getActiveLayerIndex() {
        var ref = new ActionReference();
        ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" ));
        ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );
        return hasBackground() ? executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-1 : executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ));
    };
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getActiveLayerIndex.js)

### closeGroup
***action*** 

<button class="btn" data-clipboard-text="closeGroup(layerSet);"></button>
{: .btn_p }

??? "closeGroup(layerSet);"
    ``` js linenums="1"
    function closeGroup(layerSet) {
        var mb_Locked = isLocked();
        var mb_visible = isVisible();
    
        var m_Name = layerSet.name;
        var m_Opacity = layerSet.opacity;
        var m_BlendMode = layerSet.blendMode;
        var m_LinkedLayers = layerSet.linkedLayers;
        var currINDEX = getActiveLayerIndex();
        var currINDEX1 = getActiveLayerIndex();
        if (!hasBackground()) {
            currINDEX1 = currINDEX1 - 1
        };
        var mb_color = getColor();
        try {
            var m_bHasMask = hasLayerMask();
        } catch (err) {}
        try {
            var mb_HasVMask = hasVectorMask();
        } catch (err) {}
    
    
    
        var mb_color = getColor();
        var mb_hasFx = false;
    
        try {
            copyLayerStyle();
            mb_hasFx = true;
        } catch (err) {};
        if (mb_Locked == true) {
            unlock()
        };
        if (mb_visible == false) {
            makeVisible()
        };
        if (m_bHasMask) {
            try {
                deselectPath()
            } catch (err) {};
    
            var mb_MaskEnabled = isLayerMaskEnabled();
            duplicateLayerMaskAsAlpha();
            try {
                var mb_MaskDens = getMaskDensity();
                var mb_MaskFeather = getMaskFeather();
            } catch (err) {}
            var mb_MaskLinked = isLayerMaskLinked();
        }
        if (mb_HasVMask) {
            var mb_VDens = getVectorMaskDensity();
            var mb_VFeather = getVectorMaskFeather();
            duplicateVectorMask();
        }
    
        if (layerSet.layers.length <= 1) {
            addTempLayerSetIn(currINDEX1);
            makeActiveByIndex(currINDEX + 2, false);
            ungroup();
            groupSelected(m_Name);
            makeActiveByIndex(currINDEX + 2, false);
            deleteTempLayerSetbyIdx(currSetIDX + 1);
        } else {
            makeActiveByIndex(currSetIDX, false);
            ungroup();
            groupSelected(m_Name);
        }
    
        var m_Closed = activeDocument.activeLayer;
        m_Closed.opacity = m_Opacity;
        m_Closed.blendMode = m_BlendMode;
    
        for (x in m_LinkedLayers) {
            if (m_LinkedLayers[x].typename == "LayerSet") {
                activeDocument.activeLayer.link(m_LinkedLayers[x]);
            }
        }
    
        if (mb_hasFx) pasteLayerStyle();
        if (m_bHasMask) {
            setBackTheLayerMask();
            try {
                setMaskDensityTo(Math.round((mb_MaskDens * 100) / 255));
                setMaskFeatherTo(mb_MaskFeather);
            } catch (err) {}
    
            setMaskLinked(mb_MaskLinked);
            setMaskEnabled(mb_MaskEnabled);
        };
    
    
        if (mb_HasVMask) {
            recreateVectorMask();
            setVectorMaskDensityTo(Math.round((mb_VDens * 100) / 255));
            setVectorMaskFeatherTo(mb_VFeather);
        };
        setColorTo(mb_color);
        if (mb_Locked == true) {
            lock()
        };
        if (mb_visible == false) {
            hide()
        };
        return m_Closed;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/closeGroup.js)

### ungroup
***action*** ungroup selected group

<button class="btn" data-clipboard-text="ungroup();"></button>
{: .btn_p }

??? "ungroup();"
    ``` js linenums="1"
    function ungroup() {
        var m_Dsc01 = new ActionDescriptor();
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ) );
        m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
        
        try {
           executeAction( sTID( "ungroupLayersEvent" ), m_Dsc01, DialogModes.NO );
        } catch(e) {}
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/ungroup.js)

### addLayer
***action*** add new LayerSet/empty group

<button class="btn" data-clipboard-text="addLayer();"></button>
{: .btn_p }

??? "addLayer();"
    ``` js linenums="1"
    function addLayer() {
        var m_ActiveLayer          =    activeDocument.activeLayer;
        var m_NewLayer             =    activeDocument.layerSets.add();
        m_NewLayer.move(m_ActiveLayer, ElementPlacement.PLACEBEFORE);
        
        return m_NewLayer;
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/addLayer.js)

### isVisible
***boolean*** return state of Visibility of Layer/Group

<button class="btn" data-clipboard-text="isVisible();"></button>
{: .btn_p }

??? "isVisible();"
    ``` js linenums="1"
    function isVisible(){
        var m_Ref01 = new ActionReference();
         m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
         var m_Dsc01= executeActionGet( m_Ref01 );
         return m_Dsc01.getBoolean(sTID('visible'));
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isVisible.js)

### isVisibleIDX 

<button class="btn" data-clipboard-text="isVisibleIDX(idx);"></button>
{: .btn_p }

??? "isVisibleIDX(idx);"
    ``` js linenums="1"
    function isVisibleIDX(idx){
        var m_Ref01 = new ActionReference();
         /* m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" )); */
         m_Ref01.putIndex( sTID( "layer" ), idx);
         var m_Dsc01= executeActionGet( m_Ref01 );
         return m_Dsc01.getBoolean(sTID('visible'));
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isVisibleIDX.js)

### makeVisible
***action*** show Layer/Group

<button class="btn" data-clipboard-text="makeVisible();"></button>
{: .btn_p }

??? "makeVisible();"
    ``` js linenums="1"
    // function makeVisible() {
    //     var idShw = charIDToTypeID("Shw ");
    //     var desc808 = new ActionDescriptor();
    //     var idnull = charIDToTypeID("null");
    //     var list11 = new ActionList();
    //     var ref647 = new ActionReference();
    //     var idLyr = charIDToTypeID("Lyr ");
    //     var idOrdn = charIDToTypeID("Ordn");
    //     var idTrgt = charIDToTypeID("Trgt");
    //     ref647.putEnumerated(idLyr, idOrdn, idTrgt);
    //     list11.putReference(ref647);
    //     desc808.putList(idnull, list11);
    //     executeAction(idShw, desc808, DialogModes.NO);
    // }
    
    
    function makeVisible(_input) {
        try {
            var d = new ActionDescriptor();
            var l = new ActionList();
            var r = new ActionReference();
            if (typeof _input == "number") {
                // show by Index
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input == "string") {
                if (layer_checkExistence(_input)) {
                    // show by Layername
                    r.putName(s2t('layer'), _input);
                } else {
                    // show by Layername via Regex // first hit
                    r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                }
                // } else if (typeof _input == "boolean" || typeof _input == 'undefined') {
            } else if (typeof _input === "undefined") {
                // show activeLayer
                r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            }
            l.putReference(r);
            d.putList(c2t("null"), l);
            executeAction(s2t("show"), d, DialogModes.NO)
        } catch (e) {}
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/makeVisible.js)

### hide
***action*** hide Layer/Group

<button class="btn" data-clipboard-text="hide();"></button>
{: .btn_p }

??? "hide();"
    ``` js linenums="1"
    // function hide() {
    //     var idHd = charIDToTypeID("Hd  ");
    //     var desc809 = new ActionDescriptor();
    //     var idnull = charIDToTypeID("null");
    //     var list12 = new ActionList();
    //     var ref648 = new ActionReference();
    //     var idLyr = charIDToTypeID("Lyr ");
    //     var idOrdn = charIDToTypeID("Ordn");
    //     var idTrgt = charIDToTypeID("Trgt");
    //     ref648.putEnumerated(idLyr, idOrdn, idTrgt);
    //     list12.putReference(ref648);
    //     desc809.putList(idnull, list12);
    //     executeAction(idHd, desc809, DialogModes.NO);
    // }
    
    // function hide() {
    //     var d = new ActionDescriptor();
    //     var l = new ActionList();
    //     var rl = new ActionReference();
    //     rl.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    //     l.putReference(rl);
    //     d.putList(c2t("null"), l);
    //     executeAction(s2t("hide"), d, DialogModes.NO);
    // }
    
    function hide(_input) {
        try {
            var d = new ActionDescriptor();
            var l = new ActionList();
            var r = new ActionReference();
            if (typeof _input == "number") {
                // hide by Index
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input == "string") {
                if (layer_checkExistence(_input)) {
                    // hide by Layername
                    r.putName(s2t('layer'), _input);
                } else {
                    // hide by Layername via Regex // first hit
                    r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                }
                // } else if (typeof _input == "boolean" || typeof _input == 'undefined') {
            } else if (typeof _input === "undefined") {
                // hide activeLayer
                r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            }
            l.putReference(r);
            d.putList(c2t("null"), l);
            executeAction(s2t("hide"), d, DialogModes.NO)
        } catch (e) {}
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/hide.js)

### hasLayerMask
***boolean*** return if Layer/Group has a mask

<button class="btn" data-clipboard-text="hasLayerMask();"></button>
{: .btn_p }

??? "hasLayerMask();"
    ``` js linenums="1"
    function hasLayerMask(_input) {
        // var m_Ref01 = new ActionReference();
        // m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        // var m_Dsc01= executeActionGet( m_Ref01 );
        // return m_Dsc01.hasKey(cTID('Usrs'));
    
    
        var r = new ActionReference();
    
        if (typeof _input == "number") {
            // by Index
            r.putIndex(s2t("layer"), _input);
        } else if (typeof _input == "string") {
            if (layer_checkExistence(_input)) {
                //  by Layername
                r.putName(s2t('layer'), _input);
            } else {
                // by Layername via Regex // first hit
                r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
            }
        } else if (typeof _input === "undefined") {
            // activeLayer
            r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        }
    
        var d = executeActionGet(r);
        return d.hasKey(cTID('Usrs'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/hasLayerMask.js)

### deselectPath
***action*** deselect all Paths

<button class="btn" data-clipboard-text="deselectPath();"></button>
{: .btn_p }

??? "deselectPath();"
    ``` js linenums="1"
    function deselectPath(){
        var desc = new ActionDescriptor();
            var ref = new ActionReference();
            ref.putClass( cTID( "Path" ) );
        desc.putReference( cTID( "null" ), ref );
    executeAction( cTID( "Dslc" ), desc, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/deselectPath.js)

### duplicateLayerMaskAsAlpha
***action*** create a Alpha-Channel based on LayerMask and name it **mbTemp_alpha** ==uniquify the name? on multiple use all the channels have the same name==

<button class="btn" data-clipboard-text="duplicateLayerMaskAsAlpha();"></button>
{: .btn_p }

??? "duplicateLayerMaskAsAlpha();"
    ``` js linenums="1"
    function duplicateLayerMaskAsAlpha(){
    
        selectLayerMask();
        /* ======================================= mask visible */
          var desc = new ActionDescriptor();
          var ref = new ActionReference();
          ref.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
          desc.putReference( cTID( "null" ), ref );
          desc.putBoolean( cTID( "MkVs" ), true );
          executeAction( cTID( "slct" ), desc, DialogModes.NO );
      
          /* =======================================================select All */
          var idsetd = charIDToTypeID( "setd" );
              var desc565 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var ref478 = new ActionReference();
                  var idChnl = charIDToTypeID( "Chnl" );
                  var idfsel = charIDToTypeID( "fsel" );
                  ref478.putProperty( idChnl, idfsel );
              desc565.putReference( idnull, ref478 );
              var idT = charIDToTypeID( "T   " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idAl = charIDToTypeID( "Al  " );
              desc565.putEnumerated( idT, idOrdn, idAl );
          executeAction( idsetd, desc565, DialogModes.NO );
      
          /* ======================================================= copy */
          var idcopy = charIDToTypeID( "copy" );
          executeAction( idcopy, undefined, DialogModes.NO );
          /* ======================================================= make alpha */
          var idMk = charIDToTypeID( "Mk  " );
              var desc567 = new ActionDescriptor();
              var idNw = charIDToTypeID( "Nw  " );
                  var desc568 = new ActionDescriptor();
                  var idClrI = charIDToTypeID( "ClrI" );
                  var idMskI = charIDToTypeID( "MskI" );
                  var idMskA = charIDToTypeID( "MskA" );
                  desc568.putEnumerated( idClrI, idMskI, idMskA );
                  var idClr = charIDToTypeID( "Clr " );
                      var desc569 = new ActionDescriptor();
                      var idRd = charIDToTypeID( "Rd  " );
                      desc569.putDouble( idRd, 255.000000 );
                      var idGrn = charIDToTypeID( "Grn " );
                      desc569.putDouble( idGrn, 0.000000 );
                      var idBl = charIDToTypeID( "Bl  " );
                      desc569.putDouble( idBl, 0.000000 );
                  var idRGBC = charIDToTypeID( "RGBC" );
                  desc568.putObject( idClr, idRGBC, desc569 );
                  var idOpct = charIDToTypeID( "Opct" );
                  desc568.putInteger( idOpct, 50 );
              var idChnl = charIDToTypeID( "Chnl" );
              desc567.putObject( idNw, idChnl, desc568 );
          executeAction( idMk, desc567, DialogModes.NO );
      
          /* =======================================================select All */
          var idsetd = charIDToTypeID( "setd" );
              var desc570 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var ref480 = new ActionReference();
                  var idChnl = charIDToTypeID( "Chnl" );
                  var idfsel = charIDToTypeID( "fsel" );
                  ref480.putProperty( idChnl, idfsel );
              desc570.putReference( idnull, ref480 );
              var idT = charIDToTypeID( "T   " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idAl = charIDToTypeID( "Al  " );
              desc570.putEnumerated( idT, idOrdn, idAl );
          executeAction( idsetd, desc570, DialogModes.NO );
      
          /* =======================================================paste */
          var idpast = charIDToTypeID( "past" );
              var desc571 = new ActionDescriptor();
              var idAntA = charIDToTypeID( "AntA" );
              var idAnnt = charIDToTypeID( "Annt" );
              var idAnno = charIDToTypeID( "Anno" );
              desc571.putEnumerated( idAntA, idAnnt, idAnno );
          executeAction( idpast, desc571, DialogModes.NO );
      
          /* =======================================================deselect */
          var idsetd = charIDToTypeID( "setd" );
              var desc572 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var ref481 = new ActionReference();
                  var idChnl = charIDToTypeID( "Chnl" );
                  var idfsel = charIDToTypeID( "fsel" );
                  ref481.putProperty( idChnl, idfsel );
              desc572.putReference( idnull, ref481 );
              var idT = charIDToTypeID( "T   " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idNone = charIDToTypeID( "None" );
              desc572.putEnumerated( idT, idOrdn, idNone );
          executeAction( idsetd, desc572, DialogModes.NO );
      
          /* =======================================================rename */
            var desc = new ActionDescriptor();
                var ref = new ActionReference();
                ref.putEnumerated( cTID( "Chnl" ), cTID( "Ordn" ), cTID( "Trgt" ) );
            desc.putReference( cTID( "null" ), ref );
                var desc2 = new ActionDescriptor();
                desc2.putString( cTID( "Nm  " ), "mbTemp_alpha" );
            desc.putObject( cTID( "T   " ), cTID( "Chnl" ), desc2 );
        executeAction( cTID( "setd" ), desc, DialogModes.NO );
        /* =======================================================select RGB */
            var desc291 = new ActionDescriptor();
                var ref255 = new ActionReference();
                ref255.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "RGB " ) );
            desc291.putReference( cTID( "null" ), ref255 );
            desc291.putBoolean( cTID( "MkVs" ), false );
        executeAction( cTID( "slct" ), desc291, DialogModes.NO );
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/duplicateLayerMaskAsAlpha.js)

### setBackTheLayerMask
***action*** create a LayerMask based on the Alpha-Channel named **mbTemp_alpha**

<button class="btn" data-clipboard-text="setBackTheLayerMask();"></button>
{: .btn_p }

??? "setBackTheLayerMask();"
    ``` js linenums="1"
    function setBackTheLayerMask(){
        /* =======================================================make mask */
        var idMk = charIDToTypeID( "Mk  " );
            var desc320 = new ActionDescriptor();
            var idNw = charIDToTypeID( "Nw  " );
            var idChnl = charIDToTypeID( "Chnl" );
            desc320.putClass( idNw, idChnl );
            var idAt = charIDToTypeID( "At  " );
                var ref282 = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idMsk = charIDToTypeID( "Msk " );
                ref282.putEnumerated( idChnl, idChnl, idMsk );
            desc320.putReference( idAt, ref282 );
            var idUsng = charIDToTypeID( "Usng" );
            var idUsrM = charIDToTypeID( "UsrM" );
            var idRvlA = charIDToTypeID( "RvlA" );
            desc320.putEnumerated( idUsng, idUsrM, idRvlA );
        executeAction( idMk, desc320, DialogModes.NO );
    
        /* ======================================================= */
      var idslct = cTID( "slct" );
          var desc304 = new ActionDescriptor();
          var idnull = cTID( "null" );
              var ref268 = new ActionReference();
              var idChnl = cTID( "Chnl" );
              ref268.putName( idChnl, "mbTemp_alpha" );
          desc304.putReference( idnull, ref268 );
      executeAction( idslct, desc304, DialogModes.NO );
    
      /* ======================================================= */
      var idsetd = cTID( "setd" );
          var desc305 = new ActionDescriptor();
          var idnull = cTID( "null" );
              var ref269 = new ActionReference();
              var idChnl = cTID( "Chnl" );
              var idfsel = cTID( "fsel" );
              ref269.putProperty( idChnl, idfsel );
          desc305.putReference( idnull, ref269 );
          var idT = cTID( "T   " );
          var idOrdn = cTID( "Ordn" );
          var idAl = cTID( "Al  " );
          desc305.putEnumerated( idT, idOrdn, idAl );
      executeAction( idsetd, desc305, DialogModes.NO );
    
      /* ======================================================= */
      var idcopy = cTID( "copy" );
      executeAction( idcopy, undefined, DialogModes.NO );
      /* ======================================================= */
      selectLayerMask();
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
        desc.putReference( cTID( "null" ), ref );
        desc.putBoolean( cTID( "MkVs" ), true );
        executeAction( cTID( "slct" ), desc, DialogModes.NO );
    
        /* ======================================================= */
      var idPstI = charIDToTypeID( "PstI" );
          var desc326 = new ActionDescriptor();
          var idAntA = charIDToTypeID( "AntA" );
          var idAnnt = charIDToTypeID( "Annt" );
          var idAnno = charIDToTypeID( "Anno" );
          desc326.putEnumerated( idAntA, idAnnt, idAnno );
      executeAction( idPstI, desc326, DialogModes.NO );
        /* =======================================================select RGB */
          var desc291 = new ActionDescriptor();
              var ref255 = new ActionReference();
              ref255.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "RGB " ) );
          desc291.putReference( cTID( "null" ), ref255 );
          desc291.putBoolean( cTID( "MkVs" ), false );
      executeAction( cTID( "slct" ), desc291, DialogModes.NO );
    
      /* ======================================================= */
      var idsetd = charIDToTypeID( "setd" );
          var desc387 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref346 = new ActionReference();
              var idChnl = charIDToTypeID( "Chnl" );
              var idfsel = charIDToTypeID( "fsel" );
              ref346.putProperty( idChnl, idfsel );
          desc387.putReference( idnull, ref346 );
          var idT = charIDToTypeID( "T   " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idNone = charIDToTypeID( "None" );
          desc387.putEnumerated( idT, idOrdn, idNone );
      executeAction( idsetd, desc387, DialogModes.NO );
          /* ======================================================= */
            var desc = new ActionDescriptor();
                var ref = new ActionReference();
                ref.putName( charIDToTypeID( "Chnl" ), "mbTemp_alpha" );
            desc.putReference( charIDToTypeID( "null" ), ref );
        executeAction( charIDToTypeID( "Dlt " ), desc, DialogModes.NO );  
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setBackTheLayerMask.js)

### getMaskDensity
***number 0-255*** returns Density of Layer/Group-Mask in 0-255 ==warum 0-255 ?== ==TODO                                                  isSetOpened1                                       

<button class="btn" data-clipboard-text="getMaskDensity();"></button>
{: .btn_p }

??? "getMaskDensity();"
    ``` js linenums="1"
    function getMaskDensity() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getUnitDoubleValue(sTID('userMaskDensity'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getMaskDensity.js)

### getMaskFeather
***number px*** return Feather of Layer/Group-Mask in px ==TODO                                                  isSetOpened1                                       

<button class="btn" data-clipboard-text="getMaskFeather();"></button>
{: .btn_p }

??? "getMaskFeather();"
    ``` js linenums="1"
    function getMaskFeather() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getUnitDoubleValue(sTID('userMaskFeather'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getMaskFeather.js)

### isLayerMaskEnabled
***boolean*** is Layer/Group-Mask active? ==ToDo wirft einen Fehler wenn es keine Maske gibt==

<button class="btn" data-clipboard-text="isLayerMaskEnabled();"></button>
{: .btn_p }

??? "isLayerMaskEnabled();"
    ``` js linenums="1"
    function isLayerMaskEnabled() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getBoolean(cTID('UsrM'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isLayerMaskEnabled.js)

### isLayerMaskLinked
***boolean*** is Layer/Group-Mask linked?  ==ToDo wirft einen Fehler wenn es keine Maske gibt==

<button class="btn" data-clipboard-text="isLayerMaskLinked();"></button>
{: .btn_p }

??? "isLayerMaskLinked();"
    ``` js linenums="1"
    function isLayerMaskLinked() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getBoolean(cTID('Usrs'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isLayerMaskLinked.js)

### setMaskDensityTo
***action*** set density in percent

<button class="btn" data-clipboard-text="setMaskDensityTo(_dens);"></button>
{: .btn_p }

??? "setMaskDensityTo(_dens);"
    ``` js linenums="1"
    function setMaskDensityTo(_dens){
    //     var idsetd = charIDToTypeID( "setd" );
    //       var desc21 = new ActionDescriptor();
    //       var idnull = charIDToTypeID( "null" );
    //           var ref11 = new ActionReference();
    //           var idLyr = charIDToTypeID( "Lyr " );
    //           var idOrdn = charIDToTypeID( "Ordn" );
    //           var idTrgt = charIDToTypeID( "Trgt" );
    //           ref11.putEnumerated( idLyr, idOrdn, idTrgt );
    //       desc21.putReference( idnull, ref11 );
    //       var idT = charIDToTypeID( "T   " );
    //           var desc22 = new ActionDescriptor();
    //           var iduserMaskDensity = stringIDToTypeID( "userMaskDensity" );
    //           var idPrc = charIDToTypeID( "#Prc" );
    //           desc22.putUnitDouble( iduserMaskDensity, idPrc, dens );
    //       var idLyr = charIDToTypeID( "Lyr " );
    //       desc21.putObject( idT, idLyr, desc22 );
    //   executeAction( idsetd, desc21, DialogModes.NO );
    
        var d = new ActionDescriptor();
        var d2 = new ActionDescriptor();
        var r = new ActionReference();
    
        r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
        d.putReference(c2t("null"), r);
        d2.putUnitDouble(s2t("userMaskDensity"), s2t("percentUnit"), _dens);
        d.putObject(s2t("to"), s2t("layer"), d2);
        executeAction(s2t("set"), d, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setMaskDensityTo.js)

### setMaskFeatherTo
***action*** set feather in pixel

<button class="btn" data-clipboard-text="setMaskFeatherTo(_feath);"></button>
{: .btn_p }

??? "setMaskFeatherTo(_feath);"
    ``` js linenums="1"
    function setMaskFeatherTo(_feath){
        var idsetd = charIDToTypeID( "setd" );
          var desc21 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref11 = new ActionReference();
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref11.putEnumerated( idLyr, idOrdn, idTrgt );
          desc21.putReference( idnull, ref11 );
          var idT = charIDToTypeID( "T   " );
              var desc22 = new ActionDescriptor();
              var iduserMaskDensity = stringIDToTypeID( "userMaskFeather" );
              var idPrc = charIDToTypeID( "#Prc" );
              desc22.putUnitDouble( iduserMaskDensity, idPrc, _feath );
          var idLyr = charIDToTypeID( "Lyr " );
          desc21.putObject( idT, idLyr, desc22 );
      executeAction( idsetd, desc21, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setMaskFeatherTo.js)

### setMaskEnabled
==Was macht die Funktion, ausser Errors zu produzieren==

<button class="btn" data-clipboard-text="setMaskEnabled(foo);"></button>
{: .btn_p }

??? "setMaskEnabled(foo);"
    ``` js linenums="1"
    function setMaskEnabled(foo){
        var idsetd = charIDToTypeID( "setd" );
            var desc27 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref14 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref14.putEnumerated( idLyr, idOrdn, idTrgt );
            desc27.putReference( idnull, ref14 );
            var idT = charIDToTypeID( "T   " );
                var desc28 = new ActionDescriptor();
                var idUsrM = charIDToTypeID( "UsrM" );
                desc28.putBoolean( idUsrM, foo );
            var idLyr = charIDToTypeID( "Lyr " );
            desc27.putObject( idT, idLyr, desc28 );
        executeAction( idsetd, desc27, DialogModes.NO );
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setMaskEnabled.js)

### setMaskLinked
==Was macht die Funktion, ausser Errors zu produzieren==

<button class="btn" data-clipboard-text="setMaskLinked(foo);"></button>
{: .btn_p }

??? "setMaskLinked(foo);"
    ``` js linenums="1"
    function setMaskLinked(foo){
        var idsetd = charIDToTypeID( "setd" );
          var desc31 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref16 = new ActionReference();
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref16.putEnumerated( idLyr, idOrdn, idTrgt );
          desc31.putReference( idnull, ref16 );
          var idT = charIDToTypeID( "T   " );
              var desc32 = new ActionDescriptor();
              var idUsrs = charIDToTypeID( "Usrs" );
              desc32.putBoolean( idUsrs, foo );
          var idLyr = charIDToTypeID( "Lyr " );
          desc31.putObject( idT, idLyr, desc32 );
      executeAction( idsetd, desc31, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setMaskLinked.js)

### isLayerFXVisible
***boolean*** 

<button class="btn" data-clipboard-text="isLayerFXVisible();"></button>
{: .btn_p }

??? "isLayerFXVisible();"
    ``` js linenums="1"
    function isLayerFXVisible() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getBoolean(cTID('lfxv'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isLayerFXVisible.js)

### copyLayerStyle
***action*** 

<button class="btn" data-clipboard-text="copyLayerStyle();"></button>
{: .btn_p }

??? "copyLayerStyle();"
    ``` js linenums="1"
    function copyLayerStyle(){
        var idCpFX = charIDToTypeID( "CpFX" );
        executeAction( idCpFX, undefined, DialogModes.NO );
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/copyLayerStyle.js)

### pasteLayerStyle
***action*** 

<button class="btn" data-clipboard-text="pasteLayerStyle();"></button>
{: .btn_p }

??? "pasteLayerStyle();"
    ``` js linenums="1"
    function pasteLayerStyle() {
        var idPaFX = charIDToTypeID("PaFX");
        var desc240 = new ActionDescriptor();
        var idallowPasteFXOnLayerSet = stringIDToTypeID("allowPasteFXOnLayerSet");
        desc240.putBoolean(idallowPasteFXOnLayerSet, true);
        executeAction(idPaFX, desc240, DialogModes.NO);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/pasteLayerStyle.js)

### hasVectorMask
***boolean*** 

<button class="btn" data-clipboard-text="hasVectorMask();"></button>
{: .btn_p }

??? "hasVectorMask();"
    ``` js linenums="1"
    function hasVectorMask() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getBoolean(sTID('hasVectorMask'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/hasVectorMask.js)

### getVectorMaskDensity
***number (0-255)*** 

<button class="btn" data-clipboard-text="getVectorMaskDensity();"></button>
{: .btn_p }

??? "getVectorMaskDensity();"
    ``` js linenums="1"
    function getVectorMaskDensity() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getInteger(sTID('vectorMaskDensity'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getVectorMaskDensity.js)

### getVectorMaskFeather
***number (Pixel)*** 

<button class="btn" data-clipboard-text="getVectorMaskFeather();"></button>
{: .btn_p }

??? "getVectorMaskFeather();"
    ``` js linenums="1"
    function getVectorMaskFeather() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        return m_Dsc01.getUnitDoubleValue(sTID('vectorMaskFeather'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getVectorMaskFeather.js)

### isVectorMaskEnabled
==auskommentiert==

<button class="btn" data-clipboard-text="isVectorMaskEnabled();"></button>
{: .btn_p }

??? "isVectorMaskEnabled();"
    ``` js linenums="1"
    function isVectorMaskEnabled() {
        var m_Ref01 = new ActionReference();
     
        m_Ref01.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        if(m_Dsc01.hasKey( 967 )){
           alert("VE");
        }
        return m_Dsc01.getBoolean( 967 );
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isVectorMaskEnabled.js)

### isVectorMaskLinked
==auskommentiert==

<button class="btn" data-clipboard-text="isVectorMaskLinked();"></button>
{: .btn_p }

??? "isVectorMaskLinked();"
    ``` js linenums="1"
    function isVectorMaskLinked() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
       if(m_Dsc01.hasKey( 968 )){
           alert("VE");
        }
        return m_Dsc01.getBoolean( 968 );
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isVectorMaskLinked.js)

### setVectorMaskDensityTo
***action*** set density in percent

<button class="btn" data-clipboard-text="setVectorMaskDensityTo(dens);"></button>
{: .btn_p }

??? "setVectorMaskDensityTo(dens);"
    ``` js linenums="1"
    function setVectorMaskDensityTo(dens){
        var idsetd = charIDToTypeID( "setd" );
          var desc21 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref11 = new ActionReference();
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref11.putEnumerated( idLyr, idOrdn, idTrgt );
          desc21.putReference( idnull, ref11 );
          var idT = charIDToTypeID( "T   " );
              var desc22 = new ActionDescriptor();
              var iduserMaskDensity = stringIDToTypeID( "vectorMaskDensity" );
              var idPrc = charIDToTypeID( "#Prc" );
              desc22.putUnitDouble( iduserMaskDensity, idPrc, dens );
          var idLyr = charIDToTypeID( "Lyr " );
          desc21.putObject( idT, idLyr, desc22 );
      executeAction( idsetd, desc21, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setVectorMaskDensityTo.js)

### setVectorMaskFeatherTo
***action*** set feather in pixel

<button class="btn" data-clipboard-text="setVectorMaskFeatherTo(feath);"></button>
{: .btn_p }

??? "setVectorMaskFeatherTo(feath);"
    ``` js linenums="1"
    function setVectorMaskFeatherTo(feath){
        var idsetd = charIDToTypeID( "setd" );
          var desc21 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref11 = new ActionReference();
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref11.putEnumerated( idLyr, idOrdn, idTrgt );
          desc21.putReference( idnull, ref11 );
          var idT = charIDToTypeID( "T   " );
              var desc22 = new ActionDescriptor();
              var iduserMaskDensity = stringIDToTypeID( "vectorMaskFeather" );
              var idPrc = charIDToTypeID( "#Prc" );
              desc22.putUnitDouble( iduserMaskDensity, idPrc, feath );
          var idLyr = charIDToTypeID( "Lyr " );
          desc21.putObject( idT, idLyr, desc22 );
      executeAction( idsetd, desc21, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setVectorMaskFeatherTo.js)

### setVectorMaskEnabled
==auskommentiert==

<button class="btn" data-clipboard-text="setVectorMaskEnabled(foo);"></button>
{: .btn_p }

??? "setVectorMaskEnabled(foo);"
    ``` js linenums="1"
    function setVectorMaskEnabled(foo){
        var idsetd = charIDToTypeID( "setd" );
            var desc27 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref14 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref14.putEnumerated( idLyr, idOrdn, idTrgt );
            desc27.putReference( idnull, ref14 );
            var idT = charIDToTypeID( "T   " );
                var desc28 = new ActionDescriptor();
                var idUsrM = charIDToTypeID( "vectorMaskEnabled" );
                desc28.putBoolean( idUsrM, foo );
            var idLyr = charIDToTypeID( "Lyr " );
            desc27.putObject( idT, idLyr, desc28 );
        executeAction( idsetd, desc27, DialogModes.NO );
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setVectorMaskEnabled.js)

### setVectorMaskLinked
==auskommentiert==

<button class="btn" data-clipboard-text="setVectorMaskLinked(foo);"></button>
{: .btn_p }

??? "setVectorMaskLinked(foo);"
    ``` js linenums="1"
    function setVectorMaskLinked(foo){
        var idsetd = charIDToTypeID( "setd" );
          var desc31 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref16 = new ActionReference();
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref16.putEnumerated( idLyr, idOrdn, idTrgt );
          desc31.putReference( idnull, ref16 );
          var idT = charIDToTypeID( "T   " );
              var desc32 = new ActionDescriptor();
              var idUsrs = charIDToTypeID( "vectorMaskLinked" );
              desc32.putBoolean( idUsrs, foo );
          var idLyr = charIDToTypeID( "Lyr " );
          desc31.putObject( idT, idLyr, desc32 );
      executeAction( idsetd, desc31, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setVectorMaskLinked.js)

### isLocked
***boolean*** check if the Layer/Group is totally locked

<button class="btn" data-clipboard-text="isLocked();"></button>
{: .btn_p }

??? "isLocked();"
    ``` js linenums="1"
    function isLocked() {
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
        var m_Dsc01= executeActionGet( m_Ref01 );
        a = m_Dsc01.getObjectValue(sTID('layerLocking'));
        return a.getBoolean(sTID('protectAll'));
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isLocked.js)

### unlock
***action*** unlock even specific locking methods

<button class="btn" data-clipboard-text="unlock();"></button>
{: .btn_p }

??? "unlock();"
    ``` js linenums="1"
    function unlock(){
        var idsetd = charIDToTypeID( "setd" );
          var desc316 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref252 = new ActionReference();
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref252.putEnumerated( idLyr, idOrdn, idTrgt );
          desc316.putReference( idnull, ref252 );
          var idT = charIDToTypeID( "T   " );
              var desc317 = new ActionDescriptor();
              var idlayerLocking = stringIDToTypeID( "layerLocking" );
                  var desc318 = new ActionDescriptor();
                  var idprotectNone = stringIDToTypeID( "protectNone" );
                  desc318.putBoolean( idprotectNone, true );
              var idlayerLocking = stringIDToTypeID( "layerLocking" );
              desc317.putObject( idlayerLocking, idlayerLocking, desc318 );
          var idLyr = charIDToTypeID( "Lyr " );
          desc316.putObject( idT, idLyr, desc317 );
      executeAction( idsetd, desc316, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/unlock.js)

### lock
***action*** totally lock Layer/Group

<button class="btn" data-clipboard-text="lock();"></button>
{: .btn_p }

??? "lock();"
    ``` js linenums="1"
    function lock(){
        var idsetd = charIDToTypeID( "setd" );
            var desc319 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref253 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref253.putEnumerated( idLyr, idOrdn, idTrgt );
            desc319.putReference( idnull, ref253 );
            var idT = charIDToTypeID( "T   " );
                var desc320 = new ActionDescriptor();
                var idlayerLocking = stringIDToTypeID( "layerLocking" );
                    var desc321 = new ActionDescriptor();
                    var idprotectAll = stringIDToTypeID( "protectAll" );
                    desc321.putBoolean( idprotectAll, true );
                var idlayerLocking = stringIDToTypeID( "layerLocking" );
                desc320.putObject( idlayerLocking, idlayerLocking, desc321 );
            var idLyr = charIDToTypeID( "Lyr " );
            desc319.putObject( idT, idLyr, desc320 );
        executeAction( idsetd, desc319, DialogModes.NO );
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/lock.js)

### getColor
***string*** get Color of the Layer/Group 

<button class="btn" data-clipboard-text="getColor();"></button>
{: .btn_p }

??? "getColor();"
    ``` js linenums="1"
    function getColor(){
        var m_Ref01 = new ActionReference();
       m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
       var m_Dsc01= executeActionGet( m_Ref01 );
       a = m_Dsc01.getEnumerationValue(cTID("Clr "));
       return typeIDToCharID( a ); 
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getColor.js)

### setColorTo
***action*** color the Layer/Group in the panel 

<button class="btn" data-clipboard-text="setColorTo(col);"></button>
{: .btn_p }

??? "setColorTo(col);"
    ``` js linenums="1"
    function setColorTo(col){
        var idsetd = charIDToTypeID( "setd" );
          var desc33 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref17 = new ActionReference();
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref17.putEnumerated( idLyr, idOrdn, idTrgt );
          desc33.putReference( idnull, ref17 );
          var idT = charIDToTypeID( "T   " );
              var desc34 = new ActionDescriptor();
              var idClr = charIDToTypeID( "Clr " );
              var idClr = charIDToTypeID( "Clr " );
              var idNone = charIDToTypeID( col );
              desc34.putEnumerated( idClr, idClr, idNone );
          var idLyr = charIDToTypeID( "Lyr " );
          desc33.putObject( idT, idLyr, desc34 );
      executeAction( idsetd, desc33, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/setColorTo.js)

* col `None` <code>Rd  </code> <code>Orng</code> <code>Ylw </code> <code>Grn </code> <code>Bl  </code> <code>Vlt </code> <code>Gry </code>

### activateLayerMask
***action*** 

<button class="btn" data-clipboard-text="activateLayerMask();"></button>
{: .btn_p }

??? "activateLayerMask();"
    ``` js linenums="1"
    function activateLayerMask() {
        var m_Dsc01 = new ActionDescriptor();
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
        m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
        
        try {
           executeAction( cTID( "slct" ), m_Dsc01, DialogModes.NO );
        } catch(e) {
           var m_TmpAlpha = new TemporaryAlpha();
           
           maskFromSelection();
           activateLayerMask();
           
           m_TmpAlpha.consume();
        }
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/activateLayerMask.js)

### deleteMask
***action*** works only when the LayerMask is selected

<button class="btn" data-clipboard-text="deleteMask(makeSelection);"></button>
{: .btn_p }

??? "deleteMask(makeSelection);"
    ``` js linenums="1"
    function deleteMask(makeSelection) {
        if(makeSelection) {
           loadSelectionOfMask();
        }
        
        var m_Dsc01 = new ActionDescriptor();
        var m_Ref01 = new ActionReference();
        m_Ref01.putEnumerated( cTID( "Chnl" ), cTID( "Ordn" ), cTID( "Trgt" ) );
        m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
        
        try {
           executeAction( cTID( "Dlt " ), m_Dsc01, DialogModes.NO );
        } catch(e) {}
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/deleteMask.js)

### selectLayerMask
***action*** 

<button class="btn" data-clipboard-text="selectLayerMask();"></button>
{: .btn_p }

??? "selectLayerMask();"
    ``` js linenums="1"
    function selectLayerMask() {
        var m_Dsc01 = new ActionDescriptor();
        var m_Ref01 = new ActionReference();
     
        m_Ref01.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        m_Dsc01.putReference(cTID("null"), m_Ref01);
        m_Dsc01.putBoolean(cTID("MkVs"), false );
     
        try {
           executeAction(cTID("slct"), m_Dsc01, DialogModes.NO );
        } catch(e) {}
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/selectLayerMask.js)

### loadSelectionOfMask
***action*** 

<button class="btn" data-clipboard-text="loadSelectionOfMask();"></button>
{: .btn_p }

??? "loadSelectionOfMask();"
    ``` js linenums="1"
    function loadSelectionOfMask() {
       const workingProfile_get_init = workingProfile_get("Gray");
       const docProfile = doc.colorProfileName;
    
       gamma_L = [
          "eciRGB v2",
          "eciRGB v2 ICCv4"
       ]
    
       gamma_18 = [
          "sRGB IEC61966-2.1",
          "ProPhoto RGB",
          "Display P3",
          "image P3",
          "Apple RGB",
          "ColorMatch RGB"
    
       ]
    
       gamma_22 = [
          "Adobe RGB (1998)",
          "BestRGB",
          "Beta RGB",
          "DonRGB4.icm",
          "MaxRGB",
          "Russell RGB"
    
       ]
    
    
    
       if (array_contains(gamma_18, docProfile)) {
          if (workingProfile_get_init != "Gray Gamma 1.8") {
             workingProfile_set("Gray", "Gray Gamma 1.8");
          }
       }
    
       if (array_contains(gamma_22, docProfile)) {
          if (workingProfile_get_init != "Gray Gamma 2.2") {
             workingProfile_set("Gray", "Gray Gamma 2.2");
          }
       }
    
       if (array_contains(gamma_L, docProfile)) {
          workingProfile_set("Gray", "Gray-elle-V4-labl.icc");
       }
    
       if (!array_contains(gamma_18, docProfile) && !array_contains(gamma_22, docProfile) && !array_contains(gamma_L, docProfile)) {
          alert("Vorsicht\nDie Helligkeitsverteilung könnte fehlerhaft sein.\nfehlende Info zum Gamma von '" + docProfile + "'")
       }
    
       selectLayerMask();
    
       var m_Dsc01 = new ActionDescriptor();
       var m_Ref01 = new ActionReference();
       m_Ref01.putProperty(cTID("Chnl"), cTID("fsel"));
       m_Dsc01.putReference(cTID("null"), m_Ref01);
       var m_Ref02 = new ActionReference();
       m_Ref02.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
       m_Dsc01.putReference(cTID("T   "), m_Ref02);
    
       try {
          executeAction(cTID("setd"), m_Dsc01, DialogModes.NO);
       } catch (e) { }
    
       if (workingProfile_get_init != workingProfile_get("Gray")) {
          workingProfile_set("Gray", workingProfile_get_init);
       }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/loadSelectionOfMask.js)

### maskFromSelection
***action*** 

<button class="btn" data-clipboard-text="maskFromSelection();"></button>
{: .btn_p }

??? "maskFromSelection();"
    ``` js linenums="1"
    function maskFromSelection() {
        if(!hasLayerMask()) {
           var m_Dsc01 = new ActionDescriptor();
           m_Dsc01.putClass( cTID( "Nw  " ), cTID( "Chnl" ) );
           var m_Ref01 = new ActionReference();
           m_Ref01.putEnumerated( cTID( "Chnl" ), cTID( "Chnl" ), cTID( "Msk " ) );
           m_Dsc01.putReference( cTID( "At  " ), m_Ref01 );
           m_Dsc01.putEnumerated( cTID( "Usng" ), cTID( "UsrM" ), cTID( "RvlS" ) );
           
           try {
              executeAction( cTID( "Mk  " ), m_Dsc01, DialogModes.NO );
           } catch(e) {
              activeDocument.selection.selectAll();
              maskFromSelection();
           }
        } else {
           if(confirm("Delete existing mask?", true, "Warning")) {
              activateLayerMask();
              deleteMask();
           }
        }
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/maskFromSelection.js)

### duplicateVectorMask
***action*** duplicate VektorMask and name it "mbTemp_path"

<button class="btn" data-clipboard-text="duplicateVectorMask();"></button>
{: .btn_p }

??? "duplicateVectorMask();"
    ``` js linenums="1"
    function duplicateVectorMask(){
    
        var idslct = charIDToTypeID( "slct" );
            var desc43 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref48 = new ActionReference();
                var idPath = charIDToTypeID( "Path" );
                var idPath = charIDToTypeID( "Path" );
                var idvectorMask = stringIDToTypeID( "vectorMask" );
                ref48.putEnumerated( idPath, idPath, idvectorMask );
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref48.putEnumerated( idLyr, idOrdn, idTrgt );
            desc43.putReference( idnull, ref48 );
        executeAction( idslct, desc43, DialogModes.NO );
    
      var idMk = charIDToTypeID( "Mk  " );
          var desc18 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var ref17 = new ActionReference();
              var idPath = charIDToTypeID( "Path" );
              ref17.putClass( idPath );
          desc18.putReference( idnull, ref17 );
          var idFrom = charIDToTypeID( "From" );
              var ref18 = new ActionReference();
              var idPath = charIDToTypeID( "Path" );
              var idPath = charIDToTypeID( "Path" );
              var idvectorMask = stringIDToTypeID( "vectorMask" );
              ref18.putEnumerated( idPath, idPath, idvectorMask );
              var idLyr = charIDToTypeID( "Lyr " );
              var idOrdn = charIDToTypeID( "Ordn" );
              var idTrgt = charIDToTypeID( "Trgt" );
              ref18.putEnumerated( idLyr, idOrdn, idTrgt );
          desc18.putReference( idFrom, ref18 );
      executeAction( idMk, desc18, DialogModes.NO );
    
      var idRnm = charIDToTypeID( "Rnm " );
            var desc49 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref54 = new ActionReference();
                var idPath = charIDToTypeID( "Path" );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref54.putEnumerated( idPath, idOrdn, idTrgt );
            desc49.putReference( idnull, ref54 );
            var idT = charIDToTypeID( "T   " );
            desc49.putString( idT, "mbTemp_path" );
        executeAction( idRnm, desc49, DialogModes.NO );
    
        var idDslc = charIDToTypeID( "Dslc" );
        var desc474 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref413 = new ActionReference();
            var idPath = charIDToTypeID( "Path" );
            ref413.putClass( idPath );
        desc474.putReference( idnull, ref413 );
    executeAction( idDslc, desc474, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/duplicateVectorMask.js)

### recreateVectorMask
***action*** get path called "mbTemp_path", create VektorMask on Layer/Group and delete "mbTemp_path"

<button class="btn" data-clipboard-text="recreateVectorMask();"></button>
{: .btn_p }

??? "recreateVectorMask();"
    ``` js linenums="1"
    function recreateVectorMask(){
        /* ======================================================= */
          var idslct = charIDToTypeID( "slct" );
              var desc110 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var ref119 = new ActionReference();
                  var idPath = charIDToTypeID( "Path" );
                  ref119.putName( idPath, "mbTemp_path" );
              desc110.putReference( idnull, ref119 );
          executeAction( idslct, desc110, DialogModes.NO );
      
          /* ======================================================= */
          var idMk = charIDToTypeID( "Mk  " );
              var desc111 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var ref120 = new ActionReference();
                  var idPath = charIDToTypeID( "Path" );
                  ref120.putClass( idPath );
              desc111.putReference( idnull, ref120 );
              var idAt = charIDToTypeID( "At  " );
                  var ref121 = new ActionReference();
                  var idPath = charIDToTypeID( "Path" );
                  var idPath = charIDToTypeID( "Path" );
                  var idvectorMask = stringIDToTypeID( "vectorMask" );
                  ref121.putEnumerated( idPath, idPath, idvectorMask );
              desc111.putReference( idAt, ref121 );
              var idUsng = charIDToTypeID( "Usng" );
                  var ref122 = new ActionReference();
                  var idPath = charIDToTypeID( "Path" );
                  var idOrdn = charIDToTypeID( "Ordn" );
                  var idTrgt = charIDToTypeID( "Trgt" );
                  ref122.putEnumerated( idPath, idOrdn, idTrgt );
              desc111.putReference( idUsng, ref122 );
          executeAction( idMk, desc111, DialogModes.NO );
          /* ======================================================= */
              var desc = new ActionDescriptor();
                  var ref = new ActionReference();
                  ref.putName( charIDToTypeID( "Path" ), "mbTemp_path" );
              desc.putReference( charIDToTypeID( "null" ), ref );
          executeAction( charIDToTypeID( "Dlt " ), desc, DialogModes.NO );  
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/recreateVectorMask.js)

### groupSelected
***action*** group active Layer/Group and name it

<button class="btn" data-clipboard-text="groupSelected(name);"></button>
{: .btn_p }

??? "groupSelected(name);"
    ``` js linenums="1"
    function groupSelected(name) {
        var m_Dsc01 = new ActionDescriptor();
        var m_Ref01 = new ActionReference();
        m_Ref01.putClass( sTID( "layerSection" ) );
        m_Dsc01.putReference(  cTID( "null" ), m_Ref01 );
        var m_Ref02 = new ActionReference();
        m_Ref02.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ) );
        m_Dsc01.putReference( cTID( "From" ), m_Ref02 );
        var m_Dsc02 = new ActionDescriptor();
        m_Dsc02.putString( cTID( "Nm  " ), name);
        m_Dsc01.putObject( cTID( "Usng" ), sTID( "layerSection" ), m_Dsc02 );
        executeAction( cTID( "Mk  " ), m_Dsc01, DialogModes.NO );
        
        return activeDocument.activeLayer;
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/groupSelected.js)

### addToSelection
***action*** add Layer/Group to active Selection

<button class="btn" data-clipboard-text="addToSelection(layerName);"></button>
{: .btn_p }

??? "addToSelection(layerName);"
    ``` js linenums="1"
    function addToSelection(layerName) {
        var m_Dsc01 = new ActionDescriptor();
        var m_Ref01 = new ActionReference();
        m_Ref01.putName( cTID( "Lyr " ), layerName );
        m_Dsc01.putReference( cTID( "null" ), m_Ref01 );
        m_Dsc01.putEnumerated( sTID( "selectionModifier" ), sTID( "selectionModifierType" ), sTID( "addToSelection" ) );
        m_Dsc01.putBoolean( cTID( "MkVs" ), false );
        
        try {
           executeAction( cTID( "slct" ), m_Dsc01, DialogModes.NO );
        } catch(e) {}
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/addToSelection.js)

### TemporaryAlpha
***action*** create selection into Alpha-Channel and activate it

<button class="btn" data-clipboard-text="TemporaryAlpha();"></button>
{: .btn_p }

??? "TemporaryAlpha();"
    ``` js linenums="1"
    function TemporaryAlpha() {
        activeDocument.selection.store((this.alpha = activeDocument.channels.add()));
        activeDocument.selection.deselect();
        
        this.consume = function() {
           activeDocument.selection.load(this.alpha);
           this.alpha.remove();
        }
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/TemporaryAlpha.js)

### makeActiveByIndex

<button class="btn" data-clipboard-text="makeActiveByIndex( idx, visible );"></button>
{: .btn_p }

??? "makeActiveByIndex( idx, visible );"
    ``` js linenums="1"
    function makeActiveByIndex( idx, visible ){
        if( idx.constructor != Array ) idx = [ idx ];
        for( var i = 0; i < idx.length; i++ ){
             var desc = new ActionDescriptor();
             var ref = new ActionReference();
             ref.putIndex(charIDToTypeID( 'Lyr ' ), idx[i]);
             desc.putReference( charIDToTypeID( 'null' ), ref );
             if( i > 0 ) {
                  var idselectionModifier = stringIDToTypeID( 'selectionModifier' );
                  var idselectionModifierType = stringIDToTypeID( 'selectionModifierType' );
                  var idaddToSelection = stringIDToTypeID( 'addToSelection' );
                  desc.putEnumerated( idselectionModifier, idselectionModifierType, idaddToSelection );
             }
             desc.putBoolean( charIDToTypeID( 'MkVs' ), visible );
             executeAction( charIDToTypeID( 'slct' ), desc, DialogModes.NO );
        }     
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/makeActiveByIndex.js)

### deleteActiveLayer

<button class="btn" data-clipboard-text="deleteActiveLayer();"></button>
{: .btn_p }

??? "deleteActiveLayer();"
    ``` js linenums="1"
    function deleteActiveLayer(){
        var idDlt = charIDToTypeID( "Dlt " );
            var desc752 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref529 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref529.putEnumerated( idLyr, idOrdn, idTrgt );
            desc752.putReference( idnull, ref529 );
        executeAction( idDlt, desc752, DialogModes.NO );
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/deleteActiveLayer.js)

### isLayerSet

<button class="btn" data-clipboard-text="isLayerSet( idx );"></button>
{: .btn_p }

??? "isLayerSet( idx );"
    ``` js linenums="1"
    function isLayerSet( idx ) {
        var propName = stringIDToTypeID( 'layerSection' );
        var ref = new ActionReference(); 
        ref.putProperty( charIDToTypeID( "Prpr" ) , propName);
        ref.putIndex( charIDToTypeID ( "Lyr " ), idx );
        var desc =  executeActionGet( ref );
        var type = desc.getEnumerationValue( propName );
        var res = typeIDToStringID( type ); 
        return res == 'layerSectionStart' ? true:false;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isLayerSet.js)

### openGroup1

<button class="btn" data-clipboard-text="openGroup1(theGroup);"></button>
{: .btn_p }

??? "openGroup1(theGroup);"
    ``` js linenums="1"
    function openGroup1(theGroup) {
       
        currSetIDX= getActiveLayerIndex();
        if(isLayerSet( currSetIDX ))
        {
         getNamesPlusIDsOfLayerSet();
       }
       makeActiveByIndex(currSetIDX, false);
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/openGroup1.js)

### openGroup1byIDX

<button class="btn" data-clipboard-text="openGroup1byIDX(idx);"></button>
{: .btn_p }

??? "openGroup1byIDX(idx);"
    ``` js linenums="1"
    function openGroup1byIDX(idx) {
        if (isLayerSet(idx)) {
            getNamesPlusIDsOfLayerSet();
        }
        makeActiveByIndex(idx, false);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/openGroup1byIDX.js)

### getNamesPlusIDsOfLayerSet
==geht das? die Formatierung ist kommisch==

<button class="btn" data-clipboard-text="getNamesPlusIDsOfLayerSet();"></button>
{: .btn_p }

??? "getNamesPlusIDsOfLayerSet();"
    ``` js linenums="1"
    function getNamesPlusIDsOfLayerSet(){
        var ref = new ActionReference();
        ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        var count = executeActionGet(ref).getInteger(charIDToTypeID('Cnt '));
       var parId = executeActionGet(ref).getInteger(stringIDToTypeID( 'layerID' ));
        var Names=[];
        var x = 0;
        var y = 0;
        var r = 0;
        currINDEX = getActiveLayerIndex();
         var i = currINDEX;
        for(i; i > 0 ; i--){
             ref = new ActionReference();
             ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
             var desc = executeActionGet(ref);
             var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
             var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
             var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
             ls = typeIDToStringID(ls);
             /* alert(layerName+": _ :"+ls); */
             if(ls == "layerSectionStart"){x++};
     /*        if (layerName.match(/^<\/Layer group/)) { */
             var find = new RegExp("^<\/Layer group");
             if (layerName.match(find)) { 
               y ++;
               r = x - y;
               if(r == 0 && ls == "layerSectionEnd"){break};
               continue
             };
             if(ls == "layerSectionContent"){makeActiveByIndex(i,false);break};
             var layerType = typeIDToStringID(desc.getEnumerationValue( stringIDToTypeID( 'layerSection' )));
             var isLayerSet =( layerType == 'layerSectionContent') ? false:true;
     Names.push([[Id],[layerName],[isLayerSet]]);
        };
     return Names;
     }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getNamesPlusIDsOfLayerSet.js)

### getLayersNb

<button class="btn" data-clipboard-text="getLayersNb();"></button>
{: .btn_p }

??? "getLayersNb();"
    ``` js linenums="1"
    /* function to find out if the number of layers in the document */
    function getLayersNb() {
        var ref = new ActionReference();
        ref.putProperty( charIDToTypeID( 'Prpr' ), stringIDToTypeID('numberOfLayers') );
        ref.putEnumerated( charIDToTypeID( "Dcmn" ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
        var desc = executeActionGet(ref);
        var numberOfLayers = desc.getInteger(stringIDToTypeID('numberOfLayers'));
        return numberOfLayers;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getLayersNb.js)

### toogleOpenCloseSet

<button class="btn" data-clipboard-text="toogleOpenCloseSet();"></button>
{: .btn_p }

??? "toogleOpenCloseSet();"
    ``` js linenums="1"
    function toogleOpenCloseSet() {
        app.activeDocument.suspendHistory("toogleOpenCloseSet", "toogleOpenCloseSet_inner()");
    }
    
    
    function toogleOpenCloseSet_inner() {
        myALayerIDX = getActiveLayerIndex();
        myGroupP = app.activeDocument.activeLayer;
        if (!isLayerSet(myALayerIDX)) {
            myGroupP = app.activeDocument.activeLayer.parent;
            try {
                app.activeDocument.activeLayer = myGroupP
            } catch (err) {
                return
            };
            if (getNbOfChilds() > 1) {
                if (myGroupP.typename != "Document") {
                    if (isSetOpened1(myGroupP)) {
                        closeGroup(myGroupP)
                    } else {
                        openGroup1(myGroupP)
                    };
                }
            }
        } else {
            if (getNbOfChilds() > 1) {
                if (isSetOpened1(myGroupP)) {
                    closeGroup(myGroupP)
                } else {
                    openGroup1(myGroupP)
                };
            }
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/toogleOpenCloseSet.js)

### getFristLayerSetChildVisible

<button class="btn" data-clipboard-text="getFristLayerSetChildVisible();"></button>
{: .btn_p }

??? "getFristLayerSetChildVisible();"
    ``` js linenums="1"
    function getFristLayerSetChildVisible(){
        xx = false;
         var ref = new ActionReference();
         ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
         var count = executeActionGet(ref).getInteger(charIDToTypeID('Cnt '));
        var parId = executeActionGet(ref).getInteger(stringIDToTypeID( 'layerID' ));
         var Names=[];
          var x = 0;
          var y = 0;
          var r = 0;
         currINDEX = getActiveLayerIndex();
          var i = currINDEX;
         for(i; i > 0 ; i--){
              ref = new ActionReference();
              ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
              var desc = executeActionGet(ref);
              var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
              var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
              var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
              ls = typeIDToStringID(ls);
              var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
              /* alert(layerName+": _ :"+vis); */
      /*        if(desc.hasKey(stringIDToTypeID("visible")))
              {
                alert(desc.getType(stringIDToTypeID("visible")));
              };*/
              if(ls == "layerSectionStart"){x++};
              if(vis == 1 && Id!=parId && r!=0){
                var theOBj = {id:Id, lname:layerName, idx:i};
                xx =true; 
                Names.push(theOBj); 
                break;
              }
      /*      if(layerName.match(/^<\/Layer group/) ) */
              var find = new RegExp("^<\/Layer group");
              if (layerName.match(find)) { 
                y ++;
                r = x - y;
                if(r == 0 && ls == "layerSectionEnd"){break};
                continue
              }
            }
          return Names;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getFristLayerSetChildVisible.js)

### getLastChildIdx

<button class="btn" data-clipboard-text="getLastChildIdx();"></button>
{: .btn_p }

??? "getLastChildIdx();"
    ``` js linenums="1"
    function getLastChildIdx(){
        xx = false;
         var ref = new ActionReference();
         ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
         var count = executeActionGet(ref).getInteger(charIDToTypeID('Cnt '));
        var parId = executeActionGet(ref).getInteger(stringIDToTypeID( 'layerID' ));
         currINDEX = getActiveLayerIndex();
          var i = currINDEX;
          var x = 0;
          var y = 0;
          var r = 0;
          var lastChIdx = 0;
         for(i; i > 0 ; i--){
              ref = new ActionReference();
              ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
              var desc = executeActionGet(ref);
              var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
              var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
              var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
              ls = typeIDToStringID(ls);
              var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
              if(ls == "layerSectionStart"){x++};
      /*      if(layerName.match(/^<\/Layer group/)) {*/
              var find = new RegExp("^<\/Layer group");
              if (layerName.match(find)) { 
                y ++;
                r = x - y;
                if(r == 0 && ls == "layerSectionEnd")
                {
                  lastChIdx = i;
                  break;
                };
              }
              /* alert(x+" _ "+y+" _ "+r+" _ "+layerName); */
            }
          return lastChIdx;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getLastChildIdx.js)

### getNbOfChilds

<button class="btn" data-clipboard-text="getNbOfChilds();"></button>
{: .btn_p }

??? "getNbOfChilds();"
    ``` js linenums="1"
    function getNbOfChilds(){
        xx = false;
         var ref = new ActionReference();
         ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
         var count = executeActionGet(ref).getInteger(charIDToTypeID('Cnt '));
        var parId = executeActionGet(ref).getInteger(stringIDToTypeID( 'layerID' ));
         currINDEX = getActiveLayerIndex();
          var i = currINDEX;
          var nb = 0;
          var x = 0;
          var y = 0;
          var r = 0;
         for(i; i > 0 ; i--){
              ref = new ActionReference();
              ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
              var desc = executeActionGet(ref);
              var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
              var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
              var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
              ls = typeIDToStringID(ls);
              var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
              if(ls == "layerSectionStart"){x++};
      /*      if(layerName.match(/^<\/Layer group/)) {*/
              var find = new RegExp("^<\/Layer group");
              if (layerName.match(find)) { 
                y ++;
                r = x - y;
                if(r == 0 && ls == "layerSectionEnd")
                {
                  break
                };
                continue
              }
              nb++;
            }
          return nb;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getNbOfChilds.js)

### isSetOpened2

<button class="btn" data-clipboard-text="isSetOpened2( grIDX );"></button>
{: .btn_p }

??? "isSetOpened2( grIDX );"
    ``` js linenums="1"
    function isSetOpened2( grIDX ){
    
        makeActiveByIndex(grIDX,false);
        mb_Locked = isLocked();
        mb_visible = isVisible();
        if(mb_Locked == true){unlock()};
      
        xx = true;
        currSetIDX = getActiveLayerIndex();
        currSetIDX1 = getActiveLayerIndex();
        if(!hasBackground()){currSetIDX1 = currSetIDX1-1};
        addTempLayerSetIn(currSetIDX1);
        var fIdx = getActiveLayerIndex();
        makeActiveByIndex(currSetIDX+2, false);
        if(fIdx == getActiveLayerIndex())
        {
          xx = false;
        }
        deleteTempLayerSetbyIdx(currSetIDX+1);
        if(mb_Locked == true){lock()};
        if(mb_visible == false){hide()};
        return xx;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isSetOpened2.js)

### addTempLayerSetIn
==idxx ?==

<button class="btn" data-clipboard-text="addTempLayerSetIn(idxx);"></button>
{: .btn_p }

??? "addTempLayerSetIn(idxx);"
    ``` js linenums="1"
    function addTempLayerSetIn(idxx){
        /* ======================================================= */
        var idMk = charIDToTypeID( "Mk  " );
            var desc58 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref63 = new ActionReference();
                var idlayerSection = stringIDToTypeID( "layerSection" );
                ref63.putClass( idlayerSection );
            desc58.putReference( idnull, ref63 );
        executeAction( idMk, desc58, DialogModes.NO );
        /* =======================================================rename */
        var idsetd = charIDToTypeID( "setd" );
            var desc202 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref209 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref209.putEnumerated( idLyr, idOrdn, idTrgt );
            desc202.putReference( idnull, ref209 );
            var idT = charIDToTypeID( "T   " );
                var desc203 = new ActionDescriptor();
                var idNm = charIDToTypeID( "Nm  " );
                desc203.putString( idNm, "mb-dummy tempTestLayerSetOpen_Closed" );
            var idLyr = charIDToTypeID( "Lyr " );
            desc202.putObject( idT, idLyr, desc203 );
        executeAction( idsetd, desc202, DialogModes.NO );
        /* =======================================================move */
        var idmove = charIDToTypeID( "move" );
            var desc59 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var ref64 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                var idOrdn = charIDToTypeID( "Ordn" );
                var idTrgt = charIDToTypeID( "Trgt" );
                ref64.putEnumerated( idLyr, idOrdn, idTrgt );
            desc59.putReference( idnull, ref64 );
            var idT = charIDToTypeID( "T   " );
                var ref65 = new ActionReference();
                var idLyr = charIDToTypeID( "Lyr " );
                ref65.putIndex( idLyr, idxx );
            desc59.putReference( idT, ref65 );
            var idAdjs = charIDToTypeID( "Adjs" );
            desc59.putBoolean( idAdjs, false );
            var idVrsn = charIDToTypeID( "Vrsn" );
            desc59.putInteger( idVrsn, 5 );
        executeAction( idmove, desc59, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/addTempLayerSetIn.js)

### deleteTempLayerSetbyIdx

<button class="btn" data-clipboard-text="deleteTempLayerSetbyIdx(idxx);"></button>
{: .btn_p }

??? "deleteTempLayerSetbyIdx(idxx);"
    ``` js linenums="1"
    function deleteTempLayerSetbyIdx(idxx){
        /* ======================================================= */
        var idDlt = charIDToTypeID( "Dlt " );
            var desc = new ActionDescriptor();
                var ref = new ActionReference();
                ref.putIndex(charIDToTypeID( 'Lyr ' ), idxx);
                /* ref.putIdentifier(charIDToTypeID( 'Lyr ' ), idxx); */
                desc.putReference( charIDToTypeID( 'null' ), ref );
        executeAction( idDlt, desc, DialogModes.NO );
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/deleteTempLayerSetbyIdx.js)

### myselectNext

<button class="btn" data-clipboard-text="myselectNext();"></button>
{: .btn_p }

??? "myselectNext();"
    ``` js linenums="1"
    function myselectNext() {
        currINDEX = getActiveLayerIndex();
        lastSetIdx = 0;
        lastLayer = 0;
        testIDX = 1;
        if(hasBackground()){lastLayer = -1;testIDX = 0};
        if(isLayerSet(currINDEX))
          {
            if(getNbOfChilds() > 1)
            {
              if(!isSetOpened2(currINDEX))
              {
                lastSetIdx = getLastChildIdx();
                currINDEX = lastSetIdx;
              }
            }else{currINDEX = currINDEX-1}
          }
        nextIndex = currINDEX - 1;
        if(nextIndex <= lastLayer){nextIndex = getLayersNb()};
      /*  if(getLayerName(nextIndex).match(/^<\/Layer group/)){ */
        var find = new RegExp("^<\/Layer group");
        if(getLayerName(nextIndex).match(find)) {
          bb=nextIndex-1;
          for(bb; bb>0; bb--) {
      /*      if(getLayerName(bb).match(/^<\/Layer group/)){ */
            var find = new RegExp("^<\/Layer group");
            if(getLayerName(bb).match(find)){
              nextIndex --;
            }else{break}
          }
        }
        try{makeActiveByIndex(nextIndex,false)}catch(err){};
        if(currINDEX != testIDX)
        {
          if(getActiveLayerIndex() == getLayersNb()){
            try{makeActiveByIndex(nextIndex-1,false)}catch(err){};
          }
        }
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/myselectNext.js)

### addNext

<button class="btn" data-clipboard-text="addNext();"></button>
{: .btn_p }

??? "addNext();"
    ``` js linenums="1"
    function addNext(){
        theCurrentSelectionIDX = getSelectedLayersIdx();
        makeActiveByIndex(theCurrentSelectionIDX[0], false);
        myselectNext();
        theCurrentSelectionIDX.push(getActiveLayerIndex());
        makeActiveByIndex(theCurrentSelectionIDX,false);
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/addNext.js)

### isEndOfSet

<button class="btn" data-clipboard-text="isEndOfSet(idx);"></button>
{: .btn_p }

??? "isEndOfSet(idx);"
    ``` js linenums="1"
    function isEndOfSet(idx){
        xx = false;
        ref = new ActionReference();
        ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
        var desc = executeActionGet(ref);
        var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
        var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
        var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
        ls = typeIDToStringID(ls);
        var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
      /*if(layerName.match(/^<\/Layer group/)) {*/
        var find = new RegExp("^<\/Layer group");
        if (layerName.match(find)) {      
          if(ls == "layerSectionEnd")
          {
            xx = true;
          }
        }
        return xx;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/isEndOfSet.js)

### getStartIDXfor

<button class="btn" data-clipboard-text="getStartIDXfor( idx );"></button>
{: .btn_p }

??? "getStartIDXfor( idx );"
    ``` js linenums="1"
    function getStartIDXfor( idx ){
        xx = false;
        var count  = getLayersNb();
      
         currINDEX = idx;
          var i = currINDEX;
          var nb = 0;
          var x = 0;
          var y = 0;
          var r = 0;
          /* alert(i + " count: "+count); */
         for(i; i <= count ; i++){
              ref = new ActionReference();
              ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
              var desc = executeActionGet(ref);
              var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
              var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
              var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
              ls = typeIDToStringID(ls);
              var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
              /* alert(ls +" _ "+ r + " i_ "+ i + " name_ "+layerName); */
              if(ls == "layerSectionEnd"){x++};
              if(ls == "layerSectionStart")
                {
                  y++;
                }
              r = x - y;
              if(r == 0 && ls == "layerSectionStart")
              {
                nb = i;
                break;
              }
      
            }
          return nb;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getStartIDXfor.js)

### myselectPrevious

<button class="btn" data-clipboard-text="myselectPrevious();"></button>
{: .btn_p }

??? "myselectPrevious();"
    ``` js linenums="1"
    function myselectPrevious() {
        nbL =  getLayersNb();
        currINDEX = getActiveLayerIndex();
        lastSetIdx = 0;
        lastLayer = 1;
        if(hasBackground()){lastLayer = 0};
        if(currINDEX == nbL)
        {
          nextIndex = lastLayer;
        }else{ nextIndex = currINDEX + 1}
        b = getLayersNb();
        for(aa=0;aa<b;aa++)
        {
          if(isEndOfSet(nextIndex)){
            parentIDX  = getStartIDXfor( nextIndex );
            if(!isSetOpened2(parentIDX)){
              nextIndex = parentIDX;
            }else{nextIndex ++};
          }else{break}
        }
        try{makeActiveByIndex(nextIndex,false)}catch(err){};
        if(getActiveLayerIndex() == getLayersNb()){
          nextIndex ++;
          try{makeActiveByIndex(nextIndex,false)}catch(err){};
        }
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/myselectPrevious.js)

### addPrevious

<button class="btn" data-clipboard-text="addPrevious();"></button>
{: .btn_p }

??? "addPrevious();"
    ``` js linenums="1"
    function addPrevious(){
        theCurrentSelectionIDX = getSelectedLayersIdx();
        makeActiveByIndex(theCurrentSelectionIDX[theCurrentSelectionIDX.length-1], false);
        myselectPrevious();
        theCurrentSelectionIDX.push(getActiveLayerIndex());
        makeActiveByIndex(theCurrentSelectionIDX,false);
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/addPrevious.js)

### myselectNextFor

<button class="btn" data-clipboard-text="myselectNextFor(times);"></button>
{: .btn_p }

??? "myselectNextFor(times);"
    ``` js linenums="1"
    function myselectNextFor(times){
        for(i=0;i<times;i++){
          myselectNext();
        }
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/myselectNextFor.js)

### getVisible

<button class="btn" data-clipboard-text="getVisible();"></button>
{: .btn_p }

??? "getVisible();"
    ``` js linenums="1"
    // function getVisible() {
    //     var ref = new ActionReference();
    //     ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    //     var vis = executeActionGet(ref).getInteger(stringIDToTypeID('visible'));
    //     return vis;
    // }
    
    // get Visibility by IDX, name or activeLayer
    function getVisible(_input) {
        try {
            var r = new ActionReference();
            if (typeof _input == "number") {
                r.putIndex(s2t("layer"), _input);
            } else if (typeof _input == "string") {
                if (layer_checkExistence(_input)) {
                    r.putName(s2t('layer'), _input);
                } else {
                    r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                }
            } else if (typeof _input === 'undefined') {
                r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
            }
            var vis = executeActionGet(r).getInteger(s2t('visible'));
            return vis;
        } catch (e) {}
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getVisible.js)

### getVisibleforIDX

<button class="btn" data-clipboard-text="getVisibleforIDX(idx);"></button>
{: .btn_p }

??? "getVisibleforIDX(idx);"
    ``` js linenums="1"
    function getVisibleforIDX(idx){
        var ref = new ActionReference();
         ref.putIndex( charIDToTypeID('Lyr '), idx );
         var vis = executeActionGet(ref).getInteger(stringIDToTypeID('visible'));
         return vis;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getVisibleforIDX.js)

### toogleVisibility

<button class="btn" data-clipboard-text="toogleVisibility();"></button>
{: .btn_p }

??? "toogleVisibility();"
    ``` js linenums="1"
    // function toogleVisibility(){
    //     if(getVisible()){
    //           var desc = new ActionDescriptor();
    //               var list2 = new ActionList();
    //                   var ref = new ActionReference();
    //                   ref.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
    //               list2.putReference( ref );
    //           desc.putList( charIDToTypeID( "null" ), list2 );
    //       executeAction( charIDToTypeID( "Hd  " ), desc, DialogModes.NO );
    //     }else{
    //         var desc = new ActionDescriptor();
    //             var list2 = new ActionList();
    //                 var ref = new ActionReference();
    //                 ref.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
    //             list2.putReference( ref );
    //         desc.putList( charIDToTypeID( "null" ), list2 );
    //     executeAction( charIDToTypeID( "Shw " ), desc, DialogModes.NO );
    //     }
    //   }
    
    // toogle by IDX, name or activeLayer
    function toogleVisibility(_input) {
        try {
            var d = new ActionDescriptor();
            var l = new ActionList();
            var r = new ActionReference();
    
            if (getVisible(_input)) {
                if (typeof _input == "number") {
                    r.putIndex(s2t("layer"), _input);
                } else if (typeof _input == "string") {
                    if (layer_checkExistence(_input)) {
                        r.putName(s2t('layer'), _input);
                    } else {
                        r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                    }
                } else if (typeof _input === 'undefined') {
                    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
                }
                l.putReference(r);
                d.putList(c2t("null"), l);
                executeAction(s2t("hide"), d, DialogModes.NO);
            } else {
                if (typeof _input == "number") {
                    r.putIndex(s2t("layer"), _input);
                } else if (typeof _input == "string") {
                    if (layer_checkExistence(_input)) {
                        r.putName(s2t('layer'), _input);
                    } else {
                        r.putIndex(s2t("layer"), layer_getIDXbyString(_input)[0]);
                    }
                } else if (typeof _input === 'undefined') {
                    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
                }
                l.putReference(r);
                d.putList(c2t("null"), l);
                executeAction(s2t("show"), d, DialogModes.NO);
            }
        } catch (e) {
            alert("Error by toogleVisibility: " + e)
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/toogleVisibility.js)

### showOnlyThis

<button class="btn" data-clipboard-text="showOnlyThis();"></button>
{: .btn_p }

??? "showOnlyThis();"
    ``` js linenums="1"
    function showOnlyThis(){
    
        selectionIDX = getSelectedLayersIdx();
        setBack = false;
      /*  try{
              var desc1 = app.getCustomOptions('ac4cd600-d8f5-11e2-a28f-0800200c9a66');
              theInitialVisibility= eval(desc1.getString(0));
              app.eraseCustomOptions('ac4cd600-d8f5-11e2-a28f-0800200c9a66');
              setBack = true;
          }catch(err){
              theObj = {};
              for(j=0;j<selectionIDX.length;j++){
                eval("theObj.idx"+selectionIDX[j]+"="+selectionIDX[j]);
                eval("theObj.vis"+selectionIDX[j]+"="+getVisibleforIDX(selectionIDX[j]));
              }
              var desc2 = new ActionDescriptor();
                desc2.putString(0, theObj.toSource());
              app.putCustomOptions('ac4cd600-d8f5-11e2-a28f-0800200c9a66', desc2, true );
          }*/
        /* if(selectionIDX.length > 1) */
        /* { */
          var toDeselect = 0;
          for(i=0;i<selectionIDX.length;i++)/*adding the hidden parents */
            {
              theParents = loopParentsIDXfor(selectionIDX[i]);
              for(par in theParents){
                if(!isVisibleIDX(theParents[par])){
                  toDeselect ++;
                  selectionIDX.push(theParents[par]);
                }
              }
            }
            /* makeActiveByIndex(selectionIDX,false); */
        if(selectionIDX.length > 1)
        {
            /* ======================================================= */
          var idShw = charIDToTypeID( "Shw " );
              var desc95 = new ActionDescriptor();
              var idnull = charIDToTypeID( "null" );
                  var list3 = new ActionList();
                      var ref18 = new ActionReference();
                      var idLyr = charIDToTypeID( "Lyr " );
                      var idOrdn = charIDToTypeID( "Ordn" );
                      var idTrgt = charIDToTypeID( "Trgt" );
                      ref18.putEnumerated( idLyr, idOrdn, idTrgt );
                  list3.putReference( ref18 );
              desc95.putList( idnull, list3 );
              var idTglO = charIDToTypeID( "TglO" );
              desc95.putBoolean( idTglO, true );
          executeAction( idShw, desc95, DialogModes.NO );
          if(setBack == false){
            for(i=0;i<selectionIDX.length;i++)
            {
              makeVisByIndex( selectionIDX[i], true );
            }
      /*      for(i =selectionIDX.length-1;i>=0;i--){
              if(toDeselect != 0){
                removeFromSel(selectionIDX[i]);
                toDeselect --;
              }else{break};
            }*/
          }else{
            for(a=0;a<selectionIDX.length;a++){
            }
          }
            
        }else{
          /* ======================================================= */
            var idShw = charIDToTypeID( "Shw " );
                var desc95 = new ActionDescriptor();
                var idnull = charIDToTypeID( "null" );
                    var list3 = new ActionList();
                        var ref18 = new ActionReference();
                        var idLyr = charIDToTypeID( "Lyr " );
                        var idOrdn = charIDToTypeID( "Ordn" );
                        var idTrgt = charIDToTypeID( "Trgt" );
                        ref18.putEnumerated( idLyr, idOrdn, idTrgt );
                    list3.putReference( ref18 );
                desc95.putList( idnull, list3 );
                var idTglO = charIDToTypeID( "TglO" );
                desc95.putBoolean( idTglO, true );
            executeAction( idShw, desc95, DialogModes.NO );
        }
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/showOnlyThis.js)

### removeFromSel

<button class="btn" data-clipboard-text="removeFromSel(idx);"></button>
{: .btn_p }

??? "removeFromSel(idx);"
    ``` js linenums="1"
    function removeFromSel(idx){
        var desc419 = new ActionDescriptor();
            var ref161 = new ActionReference();
            ref161.putIndex( charIDToTypeID( "Lyr " ), idx );
        desc419.putReference( charIDToTypeID( "null" ), ref161 );
        desc419.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "removeFromSelection" ) );
        var idMkVs = charIDToTypeID( "MkVs" );
        desc419.putBoolean( idMkVs, false );
    executeAction( charIDToTypeID( "slct" ), desc419, DialogModes.NO );
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/removeFromSel.js)

### makeVisByIndex

<button class="btn" data-clipboard-text="makeVisByIndex(idx, visible);"></button>
{: .btn_p }

??? "makeVisByIndex(idx, visible);"
    ``` js linenums="1"
    function makeVisByIndex(idx, visible) {
        if (visible == true) {
          var toExec = charIDToTypeID('Shw ')
        }
        else {
          var toExec = charIDToTypeID('Hd  ')
        }
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putIndex(charIDToTypeID('Lyr '), idx);
        desc.putReference(charIDToTypeID('null'), ref);
        executeAction(toExec, desc, DialogModes.NO);
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/makeVisByIndex.js)

### getSelectedLayersIdx

<button class="btn" data-clipboard-text="getSelectedLayersIdx();"></button>
{: .btn_p }

??? "getSelectedLayersIdx();"
    ``` js linenums="1"
    function getSelectedLayersIdx(){
        var selectedLayers = new Array;
        var ref = new ActionReference();
        ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        var desc = executeActionGet(ref);
        var add = 1;
        if(hasBackground()){add = 0}
        if( desc.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){
             desc = desc.getList( stringIDToTypeID( 'targetLayers' ));
             var c = desc.count;
             var selectedLayers = new Array();
             for(var i=0;i<c;i++){
                  selectedLayers.push(  (desc.getReference( i ).getIndex())+add);
             }
        }else{
             var ref = new ActionReference(); 
             ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'ItmI' )); 
             ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
             srs = hasBackground()?executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' ))-1:executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' ));
             selectedLayers.push( srs);
        }
        return selectedLayers;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getSelectedLayersIdx.js)

### selectParent

<button class="btn" data-clipboard-text="selectParent();"></button>
{: .btn_p }

??? "selectParent();"
    ``` js linenums="1"
    function selectParent(){
        try{app.activeDocument.activeLayer = app.activeDocument.activeLayer.parent}catch(err){};
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/selectParent.js)

### getParentIDXfor

<button class="btn" data-clipboard-text="getParentIDXfor(idx);"></button>
{: .btn_p }

??? "getParentIDXfor(idx);"
    ``` js linenums="1"
    function getParentIDXfor(idx){
        xx = false;
        var count  = getLayersNb();
         currINDEX = idx;
          var i = currINDEX;
          var nb = 0;
          var x = 1;
          var y = 0;
          try{if(isLayerSet(idx)){y = -1}}catch(err){return};
          var r = 0;
         for(i; i <= count ; i++){
              ref = new ActionReference();
              ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
              var desc = executeActionGet(ref);
              var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
              var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
              var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
              ls = typeIDToStringID(ls);
              var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
              if(ls == "layerSectionEnd"){x++};
              if(ls == "layerSectionStart")
                {
                  y++;
                }
              r = x - y;
              /* alert(ls +" _ "+x+"-"+y+"="+r+ " idx_ "+ i + " name_ "+layerName); */
              if(r == 0 && ls == "layerSectionStart")
              {
                nb = i;
                break;
              }
      
            }
          return nb;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getParentIDXfor.js)

### loopParentsIDXfor

<button class="btn" data-clipboard-text="loopParentsIDXfor(idx);"></button>
{: .btn_p }

??? "loopParentsIDXfor(idx);"
    ``` js linenums="1"
    function loopParentsIDXfor(idx){
        var parents = new Array();
        var count  = getLayersNb();
        var pidx = getParentIDXfor(idx);
        for(k=0;k<count;k++){
          /* alert(pidx+" - "+getParentIDXfor(pidx)+" - "+k); */
          if(pidx != 0){
            parents.push(pidx);
          }else{break}
          pidx = getParentIDXfor(pidx);
        }
        /* alert(parents); */
        return parents;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/loopParentsIDXfor.js)

### hasBackground

<button class="btn" data-clipboard-text="hasBackground();"></button>
{: .btn_p }

??? "hasBackground();"
    ``` js linenums="1"
    function hasBackground(){
        var res = undefined;
        try{
            var ref = new ActionReference();
            ref.putProperty( cTID("Prpr") , cTID("Nm  ")); 
            ref.putIndex( cTID("Lyr "), 0 );
            executeActionGet(ref).getString(cTID("Nm  ") ); 
            res = true;
        }catch(e){ res = false}
        return res;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/hasBackground.js)

### getLayerName

<button class="btn" data-clipboard-text="getLayerName(idx);"></button>
{: .btn_p }

??? "getLayerName(idx);"
    ``` js linenums="1"
    function getLayerName(idx){
        var m_Ref01 = new ActionReference();
            m_Ref01.putIndex( cTID( "Lyr " ), idx);
         var m_Dsc01= executeActionGet( m_Ref01 );
         return m_Dsc01.getString(charIDToTypeID( 'Nm  ' ));
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getLayerName.js)

### getSibilings

<button class="btn" data-clipboard-text="getSibilings();"></button>
{: .btn_p }

??? "getSibilings();"
    ``` js linenums="1"
    function getSibilings(){
        theSlIDX = getSelectedLayersIdx();
        var sibilings = [];
        var parents = [];
        for(a in theSlIDX){
          parents.push(getParentIDXfor(theSlIDX[a]));
        }
        parents = eliminateDuplicates(parents);
        for(l in parents){
          parent = parents[l];
          count  = getLayersNb();
          var fin = 0;
          if(parent == 0){ i = count }else{i = parent-1};
          if(!hasBackground()){fin = 1}
          x = 0;
          y = 0;
          r = 0;
          for(i; i>=fin; i--){
              ref = new ActionReference();
              ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
              var desc = executeActionGet(ref);
              var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
              var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
              ls = typeIDToStringID(ls);
              sibilings.push(i);
              /* alert(layerName +" _ "+ r+ " - " + i); */
              if(i == theSlIDX[l]){
                /* alert("remove: " + i); */
                sibilings.pop(1);
              }
              if(r != 0 && i != theSlIDX[l]){
                /* alert("remove: " + i); */
                sibilings.pop(1);
              }
              if(ls == "layerSectionStart"){
                x++;
              }
              if(ls == "layerSectionEnd"){
                y++;
                  if(r == 0)
                  {
                    break;
                  }
              }
              r = x - y;
          }
        }
        return sibilings;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getSibilings.js)

### getSibilings1

<button class="btn" data-clipboard-text="getSibilings1();"></button>
{: .btn_p }

??? "getSibilings1();"
    ``` js linenums="1"
    function getSibilings1(){
        theSlIDX = getSelectedLayersIdx();
        var sibilings = [];
        var parents = [];
        count  = getLayersNb();
        var fin = 0;
        var i=count;
        tempSibilings = {};
        if(!hasBackground()){fin = 1}
        x = 0;
        y = 0;
        r = 0;
        parent = [0];
        oldParent = 0;
        whatSibilingsMatterO = {};
        var myStrA = [];
        sibilings = [];
          for(i; i>=fin; i--){
              
              ref = new ActionReference();
              ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
              var desc = executeActionGet(ref);
              /* var layerName = desc.getString(charIDToTypeID( 'Nm  ' )); */
              var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
              ls = typeIDToStringID(ls);
              
              cparent = parent[parent.length -1].toString();
      
              if(tempSibilings[cparent] == undefined){
                    myStrA = [];
                  }else{
                    myStrA = tempSibilings[cparent];
                  }
              
              myStrA.push(i);
              tempSibilings[cparent] = myStrA;
              
              if(ls == "layerSectionStart"){
                  parent.push(i);
              }
              if(ls == "layerSectionEnd"){
                parent.pop(1);
              }
              
              if(i == theSlIDX[theSlIDX.length-1]){/*if is the selected one */
                theSlIDX.pop(1);
                whatSibilingsMatterO[cparent] = cparent;    
                tss1 = tempSibilings[cparent];
                tss1.pop(1);/*remove current */
                tempSibilings[cparent] = tss1;
              }
      
          }
          for(c in whatSibilingsMatterO){
            /* alert(c+" : "+tempSibilings[whatSibilingsMatterO[c]]); */
            sibilings = sibilings.concat(tempSibilings[whatSibilingsMatterO[c]]);
          }
        return sibilings;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getSibilings1.js)

### addSibilings

<button class="btn" data-clipboard-text="addSibilings();"></button>
{: .btn_p }

??? "addSibilings();"
    ``` js linenums="1"
    function addSibilings(){
        theSelIDX1 = getSelectedLayersIdx();
        theSibilings  = getSibilings1();
        var MBAll = theSelIDX1.concat(theSibilings);
        makeActiveByIndex(MBAll, false);
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/addSibilings.js)

### selectOnlySibilings

<button class="btn" data-clipboard-text="selectOnlySibilings();"></button>
{: .btn_p }

??? "selectOnlySibilings();"
    ``` js linenums="1"
    function selectOnlySibilings(){
        theSibilings  = getSibilings1();
        try{makeActiveByIndex(theSibilings, false)}catch(err){};
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/selectOnlySibilings.js)

### getParentIndex1

<button class="btn" data-clipboard-text="getParentIndex1(idx);"></button>
{: .btn_p }

??? "getParentIndex1(idx);"
    ``` js linenums="1"
    function getParentIndex1(idx){
        ref = new ActionReference();
        ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
        var desc = executeActionGet(ref);
        if(desc.hasKey(stringIDToTypeID("targetEnum"))){
          alert("parentIDX");
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/getParentIndex1.js)

### eliminateDuplicates

<button class="btn" data-clipboard-text="eliminateDuplicates(arr);"></button>
{: .btn_p }

??? "eliminateDuplicates(arr);"
    ``` js linenums="1"
    function eliminateDuplicates(arr) {
        var i,
        len=arr.length,
        out=[],
        obj={};
      
        for (i=0;i<len;i++) {
          obj[arr[i]]=0;
        }
        for (i in obj) {
          out.push(i);
        }
        return out;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/eliminateDuplicates.js)

### eliminateTheSame

<button class="btn" data-clipboard-text="eliminateTheSame(arr1, arr2);"></button>
{: .btn_p }

??? "eliminateTheSame(arr1, arr2);"
    ``` js linenums="1"
    function eliminateTheSame(arr1, arr2) {
        var i,
        len1=arr1.length,
        len2=arr2.length,
        out=[],
        obj={};
        for (i=0;i<len1;i++) {
          out.push(arr1[i]);
          for(j=0;j<len2;j++){
            /* alert(arr1[i] +" - "+arr2[j]); */
            if(arr1[i] == arr2[j]){
              /* alert("brek"); */
              out.pop(1);
              break;
            }
          }
          /* alert(out); */
        }
        return out;
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/eliminateTheSame.js)

### testSelectMultiple

<button class="btn" data-clipboard-text="testSelectMultiple(arr);"></button>
{: .btn_p }

??? "testSelectMultiple(arr);"
    ``` js linenums="1"
    function testSelectMultiple(arr){
    
        makeActiveByIndex([arr[0],arr[1]], false);
        var refQ = new ActionReference();
        refQ.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        var descQ = executeActionGet(refQ);
        if( descQ.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){
          alert("targetLayers");
        }
      alert("startSelMult");
    
        var desc = new ActionDescriptor();
            var ref = new ActionReference();
              ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
            var list = new ActionList();
        /*     for(i=0;i<arr.length;i++){
                   eval("var ref"+i+" = new ActionReference()");
                   eval("ref"+i+".putIndex(charIDToTypeID( 'Lyr ' ), "+arr[i]+")");
                   eval("list.putReference(ref"+i+")");
                 }
           desc.putList(stringIDToTypeID( 'targetLayers' ), list); */
    executeAction( charIDToTypeID( "setd" ), desc, DialogModes.NO );
    
      alert("endSelMult");
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/utils/testSelectMultiple.js)

???+ a
    ```js
    testSelectMultiple([1,3,5,7]);
    ```

    !!! warning show "not documented functions"
    - isSetOpened1
