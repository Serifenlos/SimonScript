function eliminateTheSame(arr1, arr2) {
    var i,
    len1=arr1.length,
    len2=arr2.length,
    out=[],
    obj={};
    for (i=0;i<len1;i++) {
      out.push(arr1[i]);
      for(j=0;j<len2;j++){
        /* alert(arr1[i] +" - "+arr2[j]); */
        if(arr1[i] == arr2[j]){
          /* alert("brek"); */
          out.pop(1);
          break;
        }
      }
      /* alert(out); */
    }
    return out;
  }