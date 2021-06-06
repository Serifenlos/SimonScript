function isSelectionActive() {
    var layerRef = doc.selection;
    try      {return (layerRef.bounds) ? true : false;}
    catch(e) {return false;}
}

