function getFristLayerSetChildVisible(){
    xx = false;
     var ref = new ActionReference();
     ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
     var count = executeActionGet(ref).getInteger(charIDToTypeID('Cnt '));
    var parId = executeActionGet(ref).getInteger(stringIDToTypeID( 'layerID' ));
     var Names=[];
      var x = 0;
      var y = 0;
      var r = 0;
     currINDEX = getActiveLayerIndex();
      var i = currINDEX;
     for(i; i > 0 ; i--){
          ref = new ActionReference();
          ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
          var desc = executeActionGet(ref);
          var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
          var Id = desc.getInteger(stringIDToTypeID( 'layerID' ));
          var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
          ls = typeIDToStringID(ls);
          var vis = desc.getInteger(stringIDToTypeID( 'visible' ));
          /* alert(layerName+": _ :"+vis); */
  /*        if(desc.hasKey(stringIDToTypeID("visible")))
          {
            alert(desc.getType(stringIDToTypeID("visible")));
          };*/
          if(ls == "layerSectionStart"){x++};
          if(vis == 1 && Id!=parId && r!=0){
            var theOBj = {id:Id, lname:layerName, idx:i};
            xx =true; 
            Names.push(theOBj); 
            break;
          }
  /*      if(layerName.match(/^<\/Layer group/) ) */
          var find = new RegExp("^<\/Layer group");
          if (layerName.match(find)) { 
            y ++;
            r = x - y;
            if(r == 0 && ls == "layerSectionEnd"){break};
            continue
          }
        }
      return Names;
  }