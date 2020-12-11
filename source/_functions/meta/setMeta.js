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