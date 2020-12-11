function isEndOfSet(idx){
    xx = false;
    ref = new ActionReference();
    ref.putIndex( charIDToTypeID( 'Lyr ' ), idx );
    var desc = executeActionGet(ref);
    var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
    var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
    var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
    ls = typeIDToStringID(ls);
    var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
  /*if(layerName.match(/^<\/Layer group/)) {*/
    var find = new RegExp("^<\/Layer group");
    if (layerName.match(find)) {      
      if(ls == "layerSectionEnd")
      {
        xx = true;
      }
    }
    return xx;
  }