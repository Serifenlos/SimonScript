function getLastChildIdx(){
    xx = false;
     var ref = new ActionReference();
     ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
     var count = executeActionGet(ref).getInteger(charIDToTypeID('Cnt '));
    var parId = executeActionGet(ref).getInteger(stringIDToTypeID( 'layerID' ));
     currINDEX = getActiveLayerIndex();
      var i = currINDEX;
      var x = 0;
      var y = 0;
      var r = 0;
      var lastChIdx = 0;
     for(i; i > 0 ; i--){
          ref = new ActionReference();
          ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
          var desc = executeActionGet(ref);
          var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
          var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
          var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
          ls = typeIDToStringID(ls);
          var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
          if(ls == "layerSectionStart"){x++};
  /*      if(layerName.match(/^<\/Layer group/)) {*/
          var find = new RegExp("^<\/Layer group");
          if (layerName.match(find)) { 
            y ++;
            r = x - y;
            if(r == 0 && ls == "layerSectionEnd")
            {
              lastChIdx = i;
              break;
            };
          }
          /* alert(x+" _ "+y+" _ "+r+" _ "+layerName); */
        }
      return lastChIdx;
  }