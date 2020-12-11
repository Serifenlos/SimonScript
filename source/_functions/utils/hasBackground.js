function hasBackground(){
    var res = undefined;
    try{
        var ref = new ActionReference();
        ref.putProperty( cTID("Prpr") , cTID("Nm  ")); 
        ref.putIndex( cTID("Lyr "), 0 );
        executeActionGet(ref).getString(cTID("Nm  ") ); 
        res = true;
    }catch(e){ res = false}
    return res;
}