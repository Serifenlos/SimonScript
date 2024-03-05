function setMeta_3(e,t){editXMP_3(),
// deleteProperty
xmpMeta.doesPropertyExist(ns_ss,e)&&xmpMeta.deleteProperty(ns_ss,e),
// setProperty
xmpMeta.setProperty(ns_ss,e,t),
// Fix the xmpMeta
app.activeDocument.xmpMetadata.rawData=xmpMeta.serialize()}