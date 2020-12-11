function selectParent(){
    try{app.activeDocument.activeLayer = app.activeDocument.activeLayer.parent}catch(err){};
  }