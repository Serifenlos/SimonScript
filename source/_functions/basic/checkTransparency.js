function checkTransparency() {
    doc.suspendHistory("Transparent Check", "checkTransparency_inner()");
    undoSteps(1);

    if (transp) {return true} 
    else {return false}
}