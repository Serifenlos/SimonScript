function getMeta_softproof() {
    const softproof = [];
    softproof.push(getMeta_3("softproofProfil"), getMeta_3("softproofIntent"), getMeta_3("softproofTK"));

    return softproof;
}