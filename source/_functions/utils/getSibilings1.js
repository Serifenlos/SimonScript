function getSibilings1(){
    theSlIDX = getSelectedLayersIdx();
    var sibilings = [];
    var parents = [];
    count  = getLayersNb();
    var fin = 0;
    var i=count;
    tempSibilings = {};
    if(!hasBackground()){fin = 1}
    x = 0;
    y = 0;
    r = 0;
    parent = [0];
    oldParent = 0;
    whatSibilingsMatterO = {};
    var myStrA = [];
    sibilings = [];
      for(i; i>=fin; i--){
          
          ref = new ActionReference();
          ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
          var desc = executeActionGet(ref);
          /* var layerName = desc.getString(charIDToTypeID( 'Nm  ' )); */
          var ls = desc.getEnumerationValue(stringIDToTypeID("layerSection"));
          ls = typeIDToStringID(ls);
          
          cparent = parent[parent.length -1].toString();
  
          if(tempSibilings[cparent] == undefined){
                myStrA = [];
              }else{
                myStrA = tempSibilings[cparent];
              }
          
          myStrA.push(i);
          tempSibilings[cparent] = myStrA;
          
          if(ls == "layerSectionStart"){
              parent.push(i);
          }
          if(ls == "layerSectionEnd"){
            parent.pop(1);
          }
          
          if(i == theSlIDX[theSlIDX.length-1]){/*if is the selected one */
            theSlIDX.pop(1);
            whatSibilingsMatterO[cparent] = cparent;    
            tss1 = tempSibilings[cparent];
            tss1.pop(1);/*remove current */
            tempSibilings[cparent] = tss1;
          }
  
      }
      for(c in whatSibilingsMatterO){
        /* alert(c+" : "+tempSibilings[whatSibilingsMatterO[c]]); */
        sibilings = sibilings.concat(tempSibilings[whatSibilingsMatterO[c]]);
      }
    return sibilings;
  }