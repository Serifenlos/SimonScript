function setMeta_2(e,t){editXMP_2(),
// deleteProperty
xmpMeta.doesPropertyExist(customNamespace2,e)&&xmpMeta.deleteProperty(customNamespace2,e),
// setProperty
xmpMeta.setProperty(customNamespace2,e,t),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize()}