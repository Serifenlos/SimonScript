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