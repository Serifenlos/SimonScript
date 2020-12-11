function makeVisByIndex(idx, visible) {
    if (visible == true) {
      var toExec = charIDToTypeID('Shw ')
    }
    else {
      var toExec = charIDToTypeID('Hd  ')
    }
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putIndex(charIDToTypeID('Lyr '), idx);
    desc.putReference(charIDToTypeID('null'), ref);
    executeAction(toExec, desc, DialogModes.NO);
  }