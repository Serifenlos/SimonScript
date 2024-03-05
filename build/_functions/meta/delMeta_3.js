function delMeta_3(e){editXMP_3(),
// deleteProperty
xmpMeta.doesPropertyExist(ns_ss,e)&&xmpMeta.deleteProperty(ns_ss,e),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize()}