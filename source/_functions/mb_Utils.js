function cTID(s){return charIDToTypeID(s)};
function sTID(s){return stringIDToTypeID(s)};


// @codekit-prepend "./utils/getActiveLayerIndex.js";
// @codekit-prepend "./utils/closeGroup.js";

// @codekit-prepend "./utils/ungroup.js";
// @codekit-prepend "./utils/addLayer.js";
// @codekit-prepend "./utils/isVisible.js";
// @codekit-prepend "./utils/isVisibleIDX.js";
// @codekit-prepend "./utils/makeVisible.js";
// @codekit-prepend "./utils/hide.js";
// @codekit-prepend "./utils/hasLayerMask.js";
// @codekit-prepend "./utils/deselectPath.js";
// @codekit-prepend "./utils/duplicateLayerMaskAsAlpha.js";
// @codekit-prepend "./utils/setBackTheLayerMask.js";
// @codekit-prepend "./utils/getMaskDensity.js";

// @codekit-prepend "./utils/getMaskFeather.js";
// @codekit-prepend "./utils/isLayerMaskEnabled.js";
// @codekit-prepend "./utils/isLayerMaskLinked.js";
// @codekit-prepend "./utils/setMaskDensityTo.js";
// @codekit-prepend "./utils/setMaskFeatherTo.js";
// @codekit-prepend "./utils/setMaskEnabled.js";
// @codekit-prepend "./utils/setMaskLinked.js";
// @codekit-prepend "./utils/isLayerFXVisible.js";
// @codekit-prepend "./utils/copyLayerStyle.js";
// @codekit-prepend "./utils/pasteLayerStyle.js";
// @codekit-prepend "./utils/hasVectorMask.js";
// @codekit-prepend "./utils/getVectorMaskDensity.js";
// @codekit-prepend "./utils/getVectorMaskFeather.js";

/*function isVectorMaskEnabled() {
   var m_Ref01 = new ActionReference();

   m_Ref01.putEnumerated( cTID( "Lyr " ), cTID( "Ordn" ), cTID( "Trgt" ));
   var m_Dsc01= executeActionGet( m_Ref01 );
   if(m_Dsc01.hasKey( 967 )){
      alert("VE");
   }
   return m_Dsc01.getBoolean( 967 );
}

function isVectorMaskLinked() {
   var m_Ref01 = new ActionReference();
   m_Ref01.putEnumerated( sTID( "layer" ), cTID( "Ordn" ), cTID( "Trgt" ));
   var m_Dsc01= executeActionGet( m_Ref01 );
  if(m_Dsc01.hasKey( 968 )){
      alert("VE");
   }
   return m_Dsc01.getBoolean( 968 );
}*/

// @codekit-prepend "./utils/setVectorMaskDensityTo.js";
// @codekit-prepend "./utils/setVectorMaskFeatherTo.js";



/*function setVectorMaskEnabled(foo){
  
  var idsetd = charIDToTypeID( "setd" );
      var desc27 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref14 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref14.putEnumerated( idLyr, idOrdn, idTrgt );
      desc27.putReference( idnull, ref14 );
      var idT = charIDToTypeID( "T   " );
          var desc28 = new ActionDescriptor();
          var idUsrM = charIDToTypeID( "vectorMaskEnabled" );
          desc28.putBoolean( idUsrM, foo );
      var idLyr = charIDToTypeID( "Lyr " );
      desc27.putObject( idT, idLyr, desc28 );
  executeAction( idsetd, desc27, DialogModes.NO );
}

function setVectorMaskLinked(foo){
    var idsetd = charIDToTypeID( "setd" );
      var desc31 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref16 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref16.putEnumerated( idLyr, idOrdn, idTrgt );
      desc31.putReference( idnull, ref16 );
      var idT = charIDToTypeID( "T   " );
          var desc32 = new ActionDescriptor();
          var idUsrs = charIDToTypeID( "vectorMaskLinked" );
          desc32.putBoolean( idUsrs, foo );
      var idLyr = charIDToTypeID( "Lyr " );
      desc31.putObject( idT, idLyr, desc32 );
  executeAction( idsetd, desc31, DialogModes.NO );
}
*/

// @codekit-prepend "./utils/isLocked.js";
// @codekit-prepend "./utils/unlock.js";
// @codekit-prepend "./utils/lock.js";
// @codekit-prepend "./utils/getColor.js";
// @codekit-prepend "./utils/setColorTo.js";
// @codekit-prepend "./utils/activateLayerMask.js";
// @codekit-prepend "./utils/deleteMask.js";
// @codekit-prepend "./utils/selectLayerMask.js";
// @codekit-prepend "./utils/loadSelectionOfMask.js";
// @codekit-prepend "./utils/maskFromSelection.js";
// @codekit-prepend "./utils/duplicateVectorMask.js";
// @codekit-prepend "./utils/recreateVectorMask.js";
// @codekit-prepend "./utils/groupSelected.js";
// @codekit-prepend "./utils/addToSelection.js";
// @codekit-prepend "./utils/TemporaryAlpha.js";
// @codekit-prepend "./utils/makeActiveByIndex.js";
// @codekit-prepend "./utils/deleteActiveLayer.js";
// @codekit-prepend "./utils/isLayerSet.js";
// @codekit-prepend "./utils/openGroup1.js";
// @codekit-prepend "./utils/openGroup1byIDX.js";
// @codekit-prepend "./utils/getNamesPlusIDsOfLayerSet.js";
// @codekit-prepend "./utils/getLayersNb.js";
// @codekit-prepend "./utils/toogleOpenCloseSet.js";
// @codekit-prepend "./utils/getFristLayerSetChildVisible.js";
// @codekit-prepend "./utils/getLastChildIdx.js";
// @codekit-prepend "./utils/getNbOfChilds.js";
// @codekit-prepend "./utils/isSetOpened1.js";
// @codekit-prepend "./utils/isSetOpened2.js";
// @codekit-prepend "./utils/addTempLayerSetIn.js";
// @codekit-prepend "./utils/deleteTempLayerSetbyIdx.js";
// @codekit-prepend "./utils/myselectNext.js";
// @codekit-prepend "./utils/addNext.js";
// @codekit-prepend "./utils/isEndOfSet.js";
// @codekit-prepend "./utils/getStartIDXfor.js";
// @codekit-prepend "./utils/myselectPrevious.js";
// @codekit-prepend "./utils/addPrevious.js";
// @codekit-prepend "./utils/myselectNextFor.js";
// @codekit-prepend "./utils/getVisible.js";
// @codekit-prepend "./utils/getVisibleforIDX.js";
// @codekit-prepend "./utils/toogleVisibility.js";
// @codekit-prepend "./utils/showOnlyThis.js";
// @codekit-prepend "./utils/removeFromSel.js";
// @codekit-prepend "./utils/makeVisByIndex.js";
// @codekit-prepend "./utils/getSelectedLayersIdx.js";
// @codekit-prepend "./utils/selectParent.js";
// @codekit-prepend "./utils/getParentIDXfor.js";
// @codekit-prepend "./utils/loopParentsIDXfor.js";
// @codekit-prepend "./utils/hasBackground.js";
// @codekit-prepend "./utils/getLayerName.js";
// @codekit-prepend "./utils/getSibilings.js";
// @codekit-prepend "./utils/getSibilings1.js";
// @codekit-prepend "./utils/addSibilings.js";
// @codekit-prepend "./utils/selectOnlySibilings.js";
// @codekit-prepend "./utils/getParentIndex1.js";
// @codekit-prepend "./utils/eliminateDuplicates.js";
// @codekit-prepend "./utils/eliminateTheSame.js";
// @codekit-prepend "./utils/testSelectMultiple.js";