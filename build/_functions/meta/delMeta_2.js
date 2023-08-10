function delMeta_2(e){editXMP_2(),
// deleteProperty
xmpMeta.doesPropertyExist(customNamespace2,e)&&xmpMeta.deleteProperty(customNamespace2,e),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize()}