function loopParentsIDXfor(idx){
    var parents = new Array();
    var count  = getLayersNb();
    var pidx = getParentIDXfor(idx);
    for(k=0;k<count;k++){
      /* alert(pidx+" - "+getParentIDXfor(pidx)+" - "+k); */
      if(pidx != 0){
        parents.push(pidx);
      }else{break}
      pidx = getParentIDXfor(pidx);
    }
    /* alert(parents); */
    return parents;
  }