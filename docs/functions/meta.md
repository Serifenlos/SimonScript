### set
==TODO delete this==

<button class="btn" data-clipboard-text="set();"></button>
{: .btn_p }

??? "set();"
    ``` js linenums="1"
    function set(){
        var d = new ActionDescriptor();
        d.putString(stringIDToTypeID("profile"), "PSO MFC Paper (ECI)");
        d.putEnumerated(stringIDToTypeID("intent"), stringIDToTypeID("intent"), stringIDToTypeID("colorimetric"));
        d.putBoolean(stringIDToTypeID("mapBlack"), false);
      
        // alert
        alert(d.getString(stringIDToTypeID("profile")) + "\n" + typeIDToStringID(d.getEnumerationValue(s2t("intent"))) + "\n" + d.getBoolean(stringIDToTypeID("mapBlack")));
      
        executeAction(stringIDToTypeID("proofSetup"), d, DialogModes.NO);
      };
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/set.js)

### editXMP_2
universal

<button class="btn" data-clipboard-text="editXMP_2(_namespace, _prefix);"></button>
{: .btn_p }

??? "editXMP_2(_namespace, _prefix);"
    ``` js linenums="1"
    function editXMP_2(_namespace, _prefix) {
        if (ExternalObject.AdobeXMPScript == undefined) {
            ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
        }
        xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
        customNamespace2 = _namespace ? customNamespace2 : "http://ns.simonadrian.de/1.0";
        customPrefix2 = _prefix ? customPrefix2 : "simonscript:";
        XMPMeta.registerNamespace(customNamespace2, customPrefix2);
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/editXMP_2.js)

### getMeta_2
universal

<button class="btn" data-clipboard-text="getMeta_2(_key);"></button>
{: .btn_p }

??? "getMeta_2(_key);"
    ``` js linenums="1"
    function getMeta_2(_key) {
        editXMP_2();
    
        if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
            var value = xmpMeta.getProperty(customNamespace2, _key);
        }
    
        if (typeof value !== 'undefined') {
            return value;
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/getMeta_2.js)

### setMeta_2
universal

<button class="btn" data-clipboard-text="setMeta_2(_key, _value);"></button>
{: .btn_p }

??? "setMeta_2(_key, _value);"
    ``` js linenums="1"
    function setMeta_2(_key, _value) {
        editXMP_2();
    
        // deleteProperty
        if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
            xmpMeta.deleteProperty(customNamespace2, _key);
        }
    
        // setProperty
        xmpMeta.setProperty(customNamespace2, _key, _value);
    
        // Fix the xmpMeta
        app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/setMeta_2.js)

### delMeta_2
universal

<button class="btn" data-clipboard-text="delMeta_2(_key);"></button>
{: .btn_p }

??? "delMeta_2(_key);"
    ``` js linenums="1"
    function delMeta_2(_key) {
        editXMP_2();
    
        // deleteProperty
        if (xmpMeta.doesPropertyExist(customNamespace2, _key)) {
            xmpMeta.deleteProperty(customNamespace2, _key);
        }
    
        // Fix the xmpMeta
        app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/delMeta_2.js)

### getSoftProof

<button class="btn" data-clipboard-text="getSoftProof();"></button>
{: .btn_p }

??? "getSoftProof();"
    ``` js linenums="1"
    // need to check Softproof-Ansicht. Erst wenn "an" dann weiter…
    function getSoftProof() {
        var r = new ActionReference();
        var d = new ActionDescriptor();
        r.putEnumerated(stringIDToTypeID("application"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
        d.putReference(stringIDToTypeID("target"), r);
        var d2 = executeAction(stringIDToTypeID("proofSetup"), d, DialogModes.NO);
      
        if (d2.getString(stringIDToTypeID("profile"))) {
          proofProfil = d2.getString(stringIDToTypeID("profile"));
        }
      
        if (typeIDToStringID(d2.getEnumerationValue(s2t("intent")))) {
          proofIntent = typeIDToStringID(d2.getEnumerationValue(s2t("intent")));
          // alert("ding")
        }
      
        if (d2.getBoolean(stringIDToTypeID("mapBlack"))) {
          proofTK = d2.getBoolean(stringIDToTypeID("mapBlack"));
          // alert("bing")
        }
      
        // alert(d2.getString(stringIDToTypeID("profile")) + "\n" + typeIDToStringID(d2.getEnumerationValue(s2t("intent"))) + "\n" + d2.getBoolean(stringIDToTypeID("mapBlack")));
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/getSoftProof.js)

### editXMP

<button class="btn" data-clipboard-text="editXMP();"></button>
{: .btn_p }

??? "editXMP();"
    ``` js linenums="1"
    function editXMP() {
        if (ExternalObject.AdobeXMPScript == undefined) {ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');}
        xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
        customNamespace = "http://ns.simonadrian.de/proofsetup/1.0";
        customPrefix = "proofsetup:";
        XMPMeta.registerNamespace(customNamespace, customPrefix);
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/editXMP.js)

### setMeta

<button class="btn" data-clipboard-text="setMeta();"></button>
{: .btn_p }

??? "setMeta();"
    ``` js linenums="1"
    function setMeta() {
      getSoftProof();
      editXMP();
    
      // setProperty
      xmpMeta.setProperty(customNamespace, "proof_profil", proofProfil);
      xmpMeta.setProperty(customNamespace, "proof_intent", proofIntent);
      xmpMeta.setProperty(customNamespace, "proof_tk", proofTK);
    
      // Fix the xmpMeta
      app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
      // $.writeln(xmpMeta.serialize());
    
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/setMeta.js)

### delMeta

<button class="btn" data-clipboard-text="delMeta();"></button>
{: .btn_p }

??? "delMeta();"
    ``` js linenums="1"
    function delMeta() {
        editXMP();
      
        // deleteProperty
        xmpMeta.deleteProperty(customNamespace, "proof_profil");
        xmpMeta.deleteProperty(customNamespace, "proof_intent");
        xmpMeta.deleteProperty(customNamespace, "proof_tk");
      
        // Fix the xmpMeta
        app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
        // $.writeln(xmpMeta.serialize());
      
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/delMeta.js)

### getMeta

<button class="btn" data-clipboard-text="getMeta();"></button>
{: .btn_p }

??? "getMeta();"
    ``` js linenums="1"
    function getMeta() {
        editXMP();
        if (xmpMeta.doesPropertyExist(customNamespace, "proof_profil")) {
          var proof_profil = xmpMeta.getProperty(customNamespace, "proof_profil");
          // $.writeln(proof_profil.value);
        }
          if (xmpMeta.doesPropertyExist(customNamespace, "proof_intent")) {
          var proof_intent = xmpMeta.getProperty(customNamespace, "proof_intent");
          // $.writeln(proof_intent.value);
        }
          if (xmpMeta.doesPropertyExist(customNamespace, "proof_tk")) {
          var proof_tk = xmpMeta.getProperty(customNamespace, "proof_tk");
          // $.writeln(proof_tk.value);
        }
      }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/getMeta.js)

### getMeta_softproof
***array***

<button class="btn" data-clipboard-text="getMeta_softproof();"></button>
{: .btn_p }

??? "getMeta_softproof();"
    ``` js linenums="1"
    function getMeta_softproof() {
        const softproof = [];
        softproof.push(getMeta_3("softproofProfil"), getMeta_3("softproofIntent"), getMeta_3("softproofTK"));
    
        return softproof;
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/getMeta_softproof.js)

### delMeta_3

<button class="btn" data-clipboard-text="delMeta_3(_key);"></button>
{: .btn_p }

??? "delMeta_3(_key);"
    ``` js linenums="1"
    function delMeta_3(_key_array) {
        editXMP_3();
    
        //TODO check if _key_array ist array or string
    
        for (var i = 0; i < _key_array.length; i++) {
            // deleteProperty
            if (xmpMeta.doesPropertyExist(nsURI, _key_array[i])) {
                xmpMeta.deleteProperty(nsURI, _key_array[i]);
            }
        }
    
        // Fix the xmpMeta
        app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
    }
    
    
    
    // function delMeta_3(_key) {
    //     editXMP_3();
    
    //     // deleteProperty
    //     if (xmpMeta.doesPropertyExist(nsURI, _key)) {
    //         xmpMeta.deleteProperty(nsURI, _key);
    //     }
    
    //     // Fix the xmpMeta
    //     app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
    // }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/delMeta_3.js)

### editXMP_3

<button class="btn" data-clipboard-text="editXMP_3(_namespace, _prefix);"></button>
{: .btn_p }

??? "editXMP_3(_namespace, _prefix);"
    ``` js linenums="1"
    function editXMP_3(_namespace, _prefix) {
        if (ExternalObject.AdobeXMPScript == undefined) {
            ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
        }
        xmpMeta = new XMPMeta(app.activeDocument.xmpMetadata.rawData);
        nsURI = _namespace ? nsURI : "http://ns.simonadrian.de/simonscript/1.0/";
        nsPrefix = _prefix ? nsPrefix : "ss:";
        if (XMPMeta.getNamespacePrefix(nsURI) === "" || typeof XMPMeta.getNamespacePrefix(nsURI) === 'undefined') {
            XMPMeta.registerNamespace(nsURI, nsPrefix);
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/editXMP_3.js)

### getMeta_3

<button class="btn" data-clipboard-text="getMeta_3(_key);"></button>
{: .btn_p }

??? "getMeta_3(_key);"
    ``` js linenums="1"
    function getMeta_3(_key) {
        editXMP_3();
    
        if (xmpMeta.doesPropertyExist(nsURI, _key)) {
            var value = xmpMeta.getProperty(nsURI, _key);
        }
    
        if (typeof value !== 'undefined') {
            return value;
        }
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/getMeta_3.js)

### setMeta_3

<button class="btn" data-clipboard-text="setMeta_3(_key, _value);"></button>
{: .btn_p }

??? "setMeta_3(_key, _value);"
    ``` js linenums="1"
    function setMeta_3(_key, _value) {
        editXMP_3();
    
        // deleteProperty
        if (xmpMeta.doesPropertyExist(nsURI, _key)) {
            xmpMeta.deleteProperty(nsURI, _key);
        }
    
        // setProperty
        xmpMeta.setProperty(nsURI, _key, _value);
    
        // Fix the xmpMeta
        app.activeDocument.xmpMetadata.rawData = xmpMeta.serialize();
    }
    ```

[](file:///Users/adrians/Arbeit/GitHub/SimonScript/source/_functions/meta/setMeta_3.js)

!!! warning hide "not documented functions"
