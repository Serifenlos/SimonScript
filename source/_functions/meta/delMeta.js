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