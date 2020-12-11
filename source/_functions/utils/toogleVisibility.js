function toogleVisibility(){
    if(getVisible()){
          var desc = new ActionDescriptor();
              var list2 = new ActionList();
                  var ref = new ActionReference();
                  ref.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
              list2.putReference( ref );
          desc.putList( charIDToTypeID( "null" ), list2 );
      executeAction( charIDToTypeID( "Hd  " ), desc, DialogModes.NO );
    }else{
        var desc = new ActionDescriptor();
            var list2 = new ActionList();
                var ref = new ActionReference();
                ref.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
            list2.putReference( ref );
        desc.putList( charIDToTypeID( "null" ), list2 );
    executeAction( charIDToTypeID( "Shw " ), desc, DialogModes.NO );
    }
  }