function getParentIDXfor(idx){
    xx = false;
    var count  = getLayersNb();
     currINDEX = idx;
      var i = currINDEX;
      var nb = 0;
      var x = 1;
      var y = 0;
      try{if(isLayerSet(idx)){y = -1}}catch(err){return};
      var r = 0;
     for(i; i <= count ; i++){
          ref = new ActionReference();
          ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
          var desc = executeActionGet(ref);
          var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
          var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
          var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
          ls = typeIDToStringID(ls);
          var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
          if(ls == "layerSectionEnd"){x++};
          if(ls == "layerSectionStart")
            {
              y++;
            }
          r = x - y;
          /* alert(ls +" _ "+x+"-"+y+"="+r+ " idx_ "+ i + " name_ "+layerName); */
          if(r == 0 && ls == "layerSectionStart")
          {
            nb = i;
            break;
          }
  
        }
      return nb;
  }