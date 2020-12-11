function getSibilings(){
    theSlIDX = getSelectedLayersIdx();
    var sibilings = [];
    var parents = [];
    for(a in theSlIDX){
      parents.push(getParentIDXfor(theSlIDX[a]));
    }
    parents = eliminateDuplicates(parents);
    for(l in parents){
      parent = parents[l];
      count  = getLayersNb();
      var fin = 0;
      if(parent == 0){ i = count }else{i = parent-1};
      if(!hasBackground()){fin = 1}
      x = 0;
      y = 0;
      r = 0;
      for(i; i>=fin; i--){
          ref = new ActionReference();
          ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
          var desc = executeActionGet(ref);
          var layerName = desc.getString(charIDToTypeID( 'Nm  ' ));
          var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
          ls = typeIDToStringID(ls);
          sibilings.push(i);
          /* alert(layerName +" _ "+ r+ " - " + i); */
          if(i == theSlIDX[l]){
            /* alert("remove: " + i); */
            sibilings.pop(1);
          }
          if(r != 0 && i != theSlIDX[l]){
            /* alert("remove: " + i); */
            sibilings.pop(1);
          }
          if(ls == "layerSectionStart"){
            x++;
          }
          if(ls == "layerSectionEnd"){
            y++;
              if(r == 0)
              {
                break;
              }
          }
          r = x - y;
      }
    }
    return sibilings;
  }