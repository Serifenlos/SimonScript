function getStartIDXfor( idx ){
    xx = false;
    var count  = getLayersNb();
  
     currINDEX = idx;
      var i = currINDEX;
      var nb = 0;
      var x = 0;
      var y = 0;
      var r = 0;
      /* alert(i + " count: "+count); */
     for(i; i <= count ; i++){
          ref = new ActionReference();
          ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
          var desc = executeActionGet(ref);
          var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
          var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
          var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
          ls = typeIDToStringID(ls);
          var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
          /* alert(ls +" _ "+ r + " i_ "+ i + " name_ "+layerName); */
          if(ls == "layerSectionEnd"){x++};
          if(ls == "layerSectionStart")
            {
              y++;
            }
          r = x - y;
          if(r == 0 && ls == "layerSectionStart")
          {
            nb = i;
            break;
          }
  
        }
      return nb;
  }