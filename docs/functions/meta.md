### set

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/meta/set.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/meta/getSoftProof.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/meta/editXMP.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/meta/setMeta.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/meta/delMeta.js)

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

[](file:///Users/simon/Arbeit/GitHub/SimonScript/source/_functions/meta/getMeta.js)

!!! warning hide "not documented functions"