function anordung_1(){runMenuItem(sTID("consolidateAllTabs"))}function anordung_2horizontal(){runMenuItem(sTID("2upHorizontal"))}function anordung_2vertical(){runMenuItem(sTID("2upVertical"))}function anordung_3(){runMenuItem(sTID("3upStacked"))}function anordung_3horizontal(){runMenuItem(sTID("3upHorizontal"))}function anordung_3vertical(){runMenuItem(sTID("3upVertical"))}function anordung_4(){runMenuItem(sTID("4upTile"))}function anordung_6(){runMenuItem(sTID("6upTile"))}function anordung_kachel(){runMenuItem(cTID("Tile"))}function anordnung_zoom(e){if(app.documents.length>0){for(var t=app.activeDocument,o=app.documents,n=0;n<o.length;n++){var r=o[n];app.activeDocument=r;try{fitScreen(),0!=e&&zoomSteps(e)}catch(e){alert("Error")}}app.activeDocument=t}}function apfel0(){runMenuItem(cTID("ActP"))}// https://community.adobe.com/t5/photoshop-ecosystem-discussions/alert-togglepalettes/m-p/10683352#M271446
function app_panelsVisible(){try{var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("panelList")),e.putEnumerated(stringIDToTypeID("application"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));for(var t=executeActionGet(e).getList(stringIDToTypeID("panelList")),o=!1,n=0;n<t.count;n++){var r=t.getObjectValue(n),i=r.getString(stringIDToTypeID("ID"));
// skip some panels if shift+tab was pressed
if("panelid.static.toolbar"!=i&&("panelid.static.options"!=i&&"panelid.static.blrb"!=i&&r.getBoolean(stringIDToTypeID("visible")))){o=!0;break}// skip tool panel
}return o}catch(e){throw e}}function fitScreen(){runMenuItem(cTID("FtOn"))}function getZoomLevel(){var e=new ActionReference;e.putProperty(stringIDToTypeID("property"),stringIDToTypeID("zoom")),e.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));var t=executeActionGet(e);return Number(100*t.getDouble(stringIDToTypeID("zoom"))).toFixed(2)}function rulersVisibility(){var e=new ActionReference;return e.putProperty(charIDToTypeID("Prpr"),stringIDToTypeID("rulersVisibility")),e.putEnumerated(charIDToTypeID("Dcmn"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt")),executeActionGet(e).getBoolean(stringIDToTypeID("rulersVisibility"))}function scrollPage(e){var t=19,o=0;if(!rulersVisibility())t=0,o=9.5;var n=100,r=50,i=new ActionReference;i.putProperty(stringIDToTypeID("property"),stringIDToTypeID("viewInfo")),i.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));var D=executeActionGet(i).getObjectValue(stringIDToTypeID("viewInfo")).getObjectValue(stringIDToTypeID("activeView")).getObjectValue(stringIDToTypeID("globalBounds")),u=D.getDouble(stringIDToTypeID("left")),I=D.getDouble(stringIDToTypeID("right")),p=D.getDouble(stringIDToTypeID("top")),T=I-u-t-16,s=D.getDouble(stringIDToTypeID("bottom"))-p-t-16,c=new ActionReference;c.putProperty(stringIDToTypeID("property"),stringIDToTypeID("viewTransform")),c.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));var a=executeActionGet(c).getList(stringIDToTypeID("viewTransform")),l=a.getDouble(4)/a.getDouble(0)-o,g=a.getDouble(5)/a.getDouble(3)-o;rulerUnits_prefSave(),rulerUnits_prefSet(Units.PIXELS);var y=parseInt(app.activeDocument.height/a.getDouble(0)-o),m=parseInt(app.activeDocument.width/a.getDouble(3)-o);if(rulerUnits_prefSet(startRulerUnits),"up"==e)(f=-(g-s+n))>r&&(f=r),set_doc_position(-l,f);else if("down"==e){if((f=-(g+s-n))<-(v=y-s+r))var f=-v;set_doc_position(-l,f)}
// in der Grenze fehlt noch die Scrollbar
else if("right"==e){var v;if((d=-(l+T-n))<-(v=m-T+r))var d=-v;set_doc_position(d,-g)}else"left"==e&&((d=-(l-T+n))>r&&(d=r),set_doc_position(d,-g))}function setDocResolution(e){var t=new ActionDescriptor;t.putUnitDouble(charIDToTypeID("Rslt"),charIDToTypeID("#Rsl"),e),executeAction(charIDToTypeID("ImgS"),t,DialogModes.NO)}function setZoom(e){try{e||(e=100);var t=new ActionDescriptor,o=new ActionReference;o.putProperty(stringIDToTypeID("property"),stringIDToTypeID("zoom")),o.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum")),t.putReference(stringIDToTypeID("null"),o);var n=new ActionDescriptor;n.putDouble(stringIDToTypeID("zoom"),e/100),t.putObject(stringIDToTypeID("to"),stringIDToTypeID("zoom"),n),executeAction(stringIDToTypeID("set"),t,DialogModes.NO)}catch(e){throw e}}function setZoomLevel(e){e<1&&(e=1);var t=new ActionReference;t.putProperty(stringIDToTypeID("property"),stringIDToTypeID("unitsPrefs")),t.putEnumerated(charIDToTypeID("capp"),charIDToTypeID("Ordn"),charIDToTypeID("Trgt"));executeActionGet(t).getObjectValue(stringIDToTypeID("unitsPrefs")).getUnitDoubleValue(stringIDToTypeID("newDocPresetScreenResolution")),activeDocument.resolution;app.activeDocument.suspendHistory("zoomHelper","zoomHelper()"),executeAction(charIDToTypeID("undo"),void 0,DialogModes.NO)}function set_doc_position(e,t){try{(r=new ActionReference).putProperty(stringIDToTypeID("property"),stringIDToTypeID("viewInfo")),r.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));var o=executeActionGet(r).getObjectValue(stringIDToTypeID("viewInfo")).getObjectValue(stringIDToTypeID("activeView")).getObjectValue(stringIDToTypeID("globalBounds")),n=new Array;n[0]=o.getUnitDoubleValue(stringIDToTypeID("left")),n[1]=o.getUnitDoubleValue(stringIDToTypeID("top")),n[2]=o.getUnitDoubleValue(stringIDToTypeID("right")),n[3]=o.getUnitDoubleValue(stringIDToTypeID("bottom"));e=(n[2]-n[0])/2-e- -1.5,t=(n[3]-n[1])/2-t- -1.5;var r,i=new ActionDescriptor;(r=new ActionReference).putProperty(stringIDToTypeID("property"),stringIDToTypeID("center")),r.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum")),i.putReference(stringIDToTypeID("null"),r);var D=new ActionDescriptor;D.putUnitDouble(stringIDToTypeID("horizontal"),stringIDToTypeID("distanceUnit"),e),D.putUnitDouble(stringIDToTypeID("vertical"),stringIDToTypeID("distanceUnit"),t),i.putObject(stringIDToTypeID("to"),stringIDToTypeID("center"),D),executeAction(stringIDToTypeID("set"),i,DialogModes.NO)}catch(e){throw e}}function standardmodus(){runMenuItem(sTID("screenModeStandard"))}function vollbildmodus(){runMenuItem(sTID("screenModeFullScreen"))}function vollbildmodus_menu(){runMenuItem(sTID("screenModeFullScreenWithMenubar"))}function zoom100(){runMenuItem(cTID("ActP"))}function zoomIn(){runMenuItem(cTID("ZmIn"))}function zoomIn_zoomLevels(){var e=getZoomLevel();for(var t in zoomLevels)if(Number(zoomLevels[t])>Number(e)){setZoomLevel(zoomLevels[t]);break}}function zoomOut(){runMenuItem(cTID("ZmOt"))}function zoomOutSteps(e){for(var t=0;t<e;t++)app.runMenuItem(charIDToTypeID("ZmOt"))}function zoomOutSteps_zoomLevels(e){var t=getZoomLevel();for(var o in zoomLevels)if(Number(zoomLevels[o])>=Number(t)){setZoomLevel(zoomLevels[o-e]);break}}function zoomOut_zoomLevels(){var e=getZoomLevel();for(var t in zoomLevels)if(Number(zoomLevels[t])>=Number(e)){setZoomLevel(zoomLevels[t-1]);break}}function zoomSteps(e){var t=[.1,.2,.3,.4,.5,.7,1,1.5,2,3,4,5,6.25,8.33,12.5,16.67,25,33.33,50,66.67,100,150,200,300,400,500,600,700,800,1200,1600,3200,6400,12800],o=getZoomLevel();e*=-1;for(var n in t)if(Number(t[n])>=Number(o)){void 0!==t[n-e]&&setZoom(t[n-e]);break}}