function getSelectedLayersIdx(){
    var selectedLayers = new Array;
    var ref = new ActionReference();
    ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    var desc = executeActionGet(ref);
    var add = 1;
    if(hasBackground()){add = 0}
    if( desc.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){
         desc = desc.getList( stringIDToTypeID( 'targetLayers' ));
         var c = desc.count;
         var selectedLayers = new Array();
         for(var i=0;i<c;i++){
              selectedLayers.push(  (desc.getReference( i ).getIndex())+add);
         }
    }else{
         var ref = new ActionReference(); 
         ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'ItmI' )); 
         ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
         srs = hasBackground()?executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' ))-1:executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' ));
         selectedLayers.push( srs);
    }
    return selectedLayers;
}