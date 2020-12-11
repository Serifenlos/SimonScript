function showOnlyThis(){

    selectionIDX = getSelectedLayersIdx();
    setBack = false;
  /*  try{
          var desc1 = app.getCustomOptions('ac4cd600-d8f5-11e2-a28f-0800200c9a66');
          theInitialVisibility= eval(desc1.getString(0));
          app.eraseCustomOptions('ac4cd600-d8f5-11e2-a28f-0800200c9a66');
          setBack = true;
      }catch(err){
          theObj = {};
          for(j=0;j<selectionIDX.length;j++){
            eval("theObj.idx"+selectionIDX[j]+"="+selectionIDX[j]);
            eval("theObj.vis"+selectionIDX[j]+"="+getVisibleforIDX(selectionIDX[j]));
          }
          var desc2 = new ActionDescriptor();
            desc2.putString(0, theObj.toSource());
          app.putCustomOptions('ac4cd600-d8f5-11e2-a28f-0800200c9a66', desc2, true );
      }*/
    /* if(selectionIDX.length > 1) */
    /* { */
      var toDeselect = 0;
      for(i=0;i<selectionIDX.length;i++)/*adding the hidden parents */
        {
          theParents = loopParentsIDXfor(selectionIDX[i]);
          for(par in theParents){
            if(!isVisibleIDX(theParents[par])){
              toDeselect ++;
              selectionIDX.push(theParents[par]);
            }
          }
        }
        /* makeActiveByIndex(selectionIDX,false); */
    if(selectionIDX.length > 1)
    {
        /* ======================================================= */
      var idShw = charIDToTypeID( "Shw " );
          var desc95 = new ActionDescriptor();
          var idnull = charIDToTypeID( "null" );
              var list3 = new ActionList();
                  var ref18 = new ActionReference();
                  var idLyr = charIDToTypeID( "Lyr " );
                  var idOrdn = charIDToTypeID( "Ordn" );
                  var idTrgt = charIDToTypeID( "Trgt" );
                  ref18.putEnumerated( idLyr, idOrdn, idTrgt );
              list3.putReference( ref18 );
          desc95.putList( idnull, list3 );
          var idTglO = charIDToTypeID( "TglO" );
          desc95.putBoolean( idTglO, true );
      executeAction( idShw, desc95, DialogModes.NO );
      if(setBack == false){
        for(i=0;i<selectionIDX.length;i++)
        {
          makeVisByIndex( selectionIDX[i], true );
        }
  /*      for(i =selectionIDX.length-1;i>=0;i--){
          if(toDeselect != 0){
            removeFromSel(selectionIDX[i]);
            toDeselect --;
          }else{break};
        }*/
      }else{
        for(a=0;a<selectionIDX.length;a++){
        }
      }
        
    }else{
      /* ======================================================= */
        var idShw = charIDToTypeID( "Shw " );
            var desc95 = new ActionDescriptor();
            var idnull = charIDToTypeID( "null" );
                var list3 = new ActionList();
                    var ref18 = new ActionReference();
                    var idLyr = charIDToTypeID( "Lyr " );
                    var idOrdn = charIDToTypeID( "Ordn" );
                    var idTrgt = charIDToTypeID( "Trgt" );
                    ref18.putEnumerated( idLyr, idOrdn, idTrgt );
                list3.putReference( ref18 );
            desc95.putList( idnull, list3 );
            var idTglO = charIDToTypeID( "TglO" );
            desc95.putBoolean( idTglO, true );
        executeAction( idShw, desc95, DialogModes.NO );
    }
  }