function getMeta_softproof() {
    editXMP();
    var proof_profil, proof_intent, proof_tk;
    const softproof = [];

    if (xmpMeta.doesPropertyExist(customNamespace, "proof_profil")) {
        var proof_profil = xmpMeta.getProperty(customNamespace, "proof_profil");
    }
    if (xmpMeta.doesPropertyExist(customNamespace, "proof_intent")) {
        var proof_intent = xmpMeta.getProperty(customNamespace, "proof_intent");
    }
    if (xmpMeta.doesPropertyExist(customNamespace, "proof_tk")) {
        var proof_tk = xmpMeta.getProperty(customNamespace, "proof_tk");
    }

    softproof.push(proof_profil, proof_intent, proof_tk);

    return softproof;
}