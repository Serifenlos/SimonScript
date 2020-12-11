//@include "functions/basic.jsx";
//@include "functions/pref.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/LUT-dodge.jsx";
//@include "functions/LUT-burn.jsx";
//@include "functions/dialog.jsx";
//@include "functions/ready.jsx";
//@include "functions/view.jsx";
// doc.suspendHistory('Startschuss', 'startschuss()')
// curves
// selectiveColor
// hueSaturation
// colorBalance
// brightnessEvent
// vibrance
// analyse();
// doc.suspendHistory('Startschuss', 'startschuss()')
// startschuss()
// alert(getSelectedLayersIdx())
// alert(getSibilings())
// alert(getSibilings1())
// alert(isVisibleIDX(6))
// alert(getActiveLayerIndex())
// alert(getLayerName(5))
// makeVisByIndex(7,true)
function startschuss_old(){
/* alert(debug) */
debug&&time_start(),nameLayer("vorher Ebene"),createGroup("vorher","passThrough","none",100,t),
/* toogleOpenCloseSet(); */
dublicate("nachher"),gotoLayer("vorher"),toogleOpenCloseSet(),gotoLayer("nachher"),selectLayer("down",1),
/* // selectLayer("down",1); */
/* // myselectNext(); */
nameLayer("Orginal"),smartObject(),createGroup("Einstellungen","passThrough","none",100),createLayer("AutoTonwert","levels","normal","gray",100,"none",f,t),toogleVisibility(),createLayer("Gradation neutral","curves","normal","gray",100,"none",f,f),DodgeBurn_highlow(t),selectLayer("up",1),createLayer("Selektive Farbe","selectiveColor","normal","violet",100,"",f,f),createLayer("Sättigung Farbe","hueSaturation","normal","blue",100,"",f,f),createLayer("Sättigung Luminanz","hueSaturation","luminosity","green",100,"",f,f),createLayer("Farbe in Balance","colorBalance","normal","yellowColor",100,"",f,f),createLayer("Gradation Kontrast","curves","normal","orange",100,"",f,f),
/* createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100, "", f,f); */
/* createLayer("Dynamik", "vibrance", "normal", "orange", 100, "", f,f); */
createLayer("Dynamik","vibrance","normal","red",100,"",f,f),gotoLayer("Gradation neutral"),debug&&time_stop(start)}function analyse(){time_start(),time_stop(start)}function dialog_chooseLayer(){var e=new Window("dialog"),t=e.add("button",void 0,"rauf"),r=e.add("button",void 0,"alle"),o=e.add("button",void 0,"runter"),n=e.add("button",void 0,"OK");t.onClick=function(){selectLayer("up",1)},o.onClick=function(){selectLayer("down",1)},r.onClick=function(){hasBackground()&&(gotoLayer(0),nameLayer("HG")),selectAll()},n.onClick=function(){doc.suspendHistory("Startschuss","startschuss()"),
// startschuss()
e.close()},e.show()}
// if (doc.activeLayer.kind != LayerKind.NORMAL) {
//     dialog_chooseLayer();
// } else {
//     // doc.suspendHistory('Startschuss', 'startschuss()');
//     alert("geht");
// }
function startschuss(){time_start(),hasBackground()&&(gotoLayer(0),nameLayer("HG")),smartObject(),nameLayer("Original"),createGroup("vorher","passThrough","none",100,t),dublicate("nachher"),gotoLayer("vorher"),selectLayer("down",1),nameLayer("vorher Ebene"),rasterSmartObject(),toogleOpenCloseSet(),selectLayer("up",1),createColorLayer("Weiss","normal","none",100,"none",255,255,255),moveLayer("Weiss","Original","down"),createGroup("Einstellungen","passThrough","none",100),createLayer("AutoTonwert","levels","normal","gray",100,"none",f,t),toogleVisibility(),createLayer("Gradation neutral","curves","normal","gray",100,"none",f,f),DodgeBurn_highlow(t),selectLayer("up",1),createLayer("Selektive Farbe","selectiveColor","normal","violet",100,"",f,f),createLayer("Sättigung Farbe","hueSaturation","normal","blue",100,"",f,f),createLayer("Sättigung Luminanz","hueSaturation","luminosity","green",100,"",f,f),createLayer("Farbe in Balance","colorBalance","normal","yellowColor",100,"",f,f),createLayer("Gradation Kontrast","curves","normal","orange",100,"",f,f),
// createLayer("Hell + Kontrast", "brightnessEvent", "normal", "red", 100, "", f,f);
// createLayer("Dynamik", "vibrance", "normal", "orange", 100, "", f,f);
createLayer("Dynamik","vibrance","normal","red",100,"",f,f),gotoLayer("Gradation neutral"),time_stop(start)}
/* TODO
_direction für 
ElementPlacement.INSIDE
ElementPlacement.PLACEATBEGINNING
ElementPlacement.PLACEATEND
*/function moveLayer2(e,t,r){gotoLayer(e);var o=app.activeDocument.activeLayer;gotoLayer(t);var n=app.activeDocument.activeLayer;if("before"==r||"up"==r)var i=ElementPlacement.PLACEBEFORE;else if("after"==r||"down"==r)i=ElementPlacement.PLACEAFTER;else if("top"==r||"beginning"==r)i=ElementPlacement.PLACEATBEGINNING;else if("bottom"==r||"end"==r)i=ElementPlacement.PLACEATEND;o.move(n,i)}
// funktioniert nicht
// moveLayer2("Ebene 1", "Ebene 3", "top")
// bt2();
function bt2(){var e=new BridgeTalk,t=BridgeTalk.getSpecifier("photoshop");e.target=t,e.body="var f="+function(){var e=Window.find("palette","Toggle visiblity");if(e)e.show();else{var t=new Window("palette");t.text="Toggle visiblity",t.orientation="column",t.alignChildren=["center","center"],t.spacing=10,t.margins=16;var r=t.add("panel",void 0,"Panel");r.add("button",void 0,"Toggle",{name:"Toggle"}).onClick=function(){app.activeDocument.activeLayer.visible=!app.activeDocument.activeLayer.visible},r.add("button",void 0,"Exit",{name:"Exit"}).onClick=function(){t.close()},t.show()}}.toSource()+";f();",e.send()}function checkTrans(){var e=!0,t=new ActionDescriptor,r=new ActionReference;r.putProperty(charIDToTypeID("Chnl"),charIDToTypeID("fsel")),t.putReference(charIDToTypeID("null"),r);var o=new ActionReference;o.putEnumerated(charIDToTypeID("Chnl"),charIDToTypeID("Chnl"),charIDToTypeID("Trsp")),o.putEnumerated(charIDToTypeID("Lyr "),charIDToTypeID("Ordn"),charIDToTypeID("Mrgd")),t.putReference(charIDToTypeID("T   "),o);try{executeAction(charIDToTypeID("setd"),t,DialogModes.NO),activeDocument.selection.invert();try{activeDocument.selection.bounds}catch(t){e=!1}}catch(t){e=!1}
// activeDocument.selection.deselect();
e?alert("Has transparency"):alert("No transparency")}
// checkTrans();
// function checkTrans2() {
//     prefSave();
//     var transp = true;
//     /* Kanalberechnung */
//     var s2t = function(s) {return app.stringIDToTypeID(s);};
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     var r = new ActionReference();
//     var r2 = new ActionReference();
//     var r3 = new ActionReference();
//     r.putProperty(s2t("channel"), s2t("selection"));
//     d.putReference(s2t("null"), r);
//     r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
//     r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
//     d2.putReference(s2t("to"), r2);
//     r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
//     r3.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
//     d2.putReference(s2t("source2"), r3);
//     d.putObject(s2t("to"), s2t("calculation"), d2);
//     try {
//         executeAction(s2t("set"), d, DialogModes.NO);
//         activeDocument.selection.invert();
//         try {
//             activeDocument.selection.bounds;
//         } catch (e) {
//             transp = false;
//         }
//     } catch (e) {
//         transp = false;
//     }
//     prefReset();
//     activeDocument.selection.deselect();
// /*     if (transp) alert("Has transparency");
//     else alert("No transparency"); */
//     if(transp) {return true}
//     else {return false}
// }
// doc.suspendHistory("Transparent Check", "checkTrans2()");
// if(checkTransparency()) {
//     alert("Has transparency")
// } else {
//     alert("no transparency")
// }
// undoSteps(1)
// doc.suspendHistory("Transparent Check", "checkTrans2()");
// if(checkTransparency()) {
//     alert("Has transparency")
// } else {
//     alert("no transparency")
// }
// undoSteps(1)
// transformLayer("r", 50);
// var s2t = function (s) {
// 	return app.stringIDToTypeID(s);
// };
// var descriptor = new ActionDescriptor();
// var descriptor2 = new ActionDescriptor();
// descriptor.putEnumerated( s2t( "freeTransformCenterState" ), s2t( "quadCenterState" ), s2t( "QCSCorner3" ));
// descriptor2.putUnitDouble( s2t( "horizontal" ), s2t( "pixelsUnit" ), 0.000000 );
// descriptor2.putUnitDouble( s2t( "vertical" ), s2t( "pixelsUnit" ), 0.000000 );
// descriptor.putObject( s2t( "offset" ), s2t( "offset" ), descriptor2 );
// descriptor.putUnitDouble( s2t( "width" ), s2t( "percentUnit" ), 49.922561 );
// descriptor.putUnitDouble( s2t( "height" ), s2t( "percentUnit" ), 49.922561 );
// executeAction( s2t( "transform" ), descriptor, DialogModes.NO );
// function undoSteps(_steps) {
//     for (var i = 0; i < _steps; i++) {
//         executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
//     };
// };
// setZoom(100);
// zoom100();
// set_doc_position(50, 50);
// alert(doc.bitsPerChannel);
// alert("get " + getBitDepth());
// setZoom(50);
// zoom100();
// set_doc_position(50, 50);
// alert(doc.bitsPerChannel);
// alert("get " + getBitDepth());
// setZoom(100)
// set_doc_position(50, 50)
// 1,0,0,1,-59.5,-59.5
// set_doc_position(100, 0)
// 1,0,0,1,0,0
// set_doc_position(350, 50)
var ruler_viewInfo=19,ruler_viewTransform=0;if(!rulersVisibility())ruler_viewInfo=0,ruler_viewTransform=9.5;var scrollbar=16,overlap=100;(ref=new ActionReference).putProperty(stringIDToTypeID("property"),stringIDToTypeID("viewInfo")),ref.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));var ref,desc=executeActionGet(ref),bounds=desc.getObjectValue(stringIDToTypeID("viewInfo")).getObjectValue(stringIDToTypeID("activeView")).getObjectValue(stringIDToTypeID("globalBounds")),left=bounds.getDouble(stringIDToTypeID("left")),right=bounds.getDouble(stringIDToTypeID("right")),top=bounds.getDouble(stringIDToTypeID("top")),bottom=bounds.getDouble(stringIDToTypeID("bottom")),view_w=right-left-ruler_viewInfo-scrollbar,view_h=bottom-top-ruler_viewInfo-scrollbar;(ref=new ActionReference).putProperty(stringIDToTypeID("property"),stringIDToTypeID("viewTransform")),ref.putEnumerated(stringIDToTypeID("document"),stringIDToTypeID("ordinal"),stringIDToTypeID("targetEnum"));var list=executeActionGet(ref).getList(stringIDToTypeID("viewTransform")),matrix=[list.getDouble(0),list.getDouble(1),list.getDouble(2),list.getDouble(3),list.getDouble(4),list.getDouble(5)],x_zoom=list.getDouble(0),weissNicht1=list.getDouble(1),weissNicht2=list.getDouble(2),y_zoom=list.getDouble(3),x_position=list.getDouble(4),y_position=list.getDouble(5),x_pos=list.getDouble(4)/list.getDouble(0)-ruler_viewTransform,y_pos=list.getDouble(5)/list.getDouble(3)-ruler_viewTransform;
// alert(matrix)
// alert("\nx_zoom " + x_zoom + "\ny_zoom " + y_zoom + "\nx_position " + x_position + "\ny_position " + y_position)
// alert("\nx_pos " + x_pos + "\ny_pos " + y_pos)
function scroll_right(){set_doc_position(-(x_pos+view_w-overlap),-y_pos)}function scroll_down(){set_doc_position(-x_pos,-(y_pos+view_h-overlap))}function scroll_left(){set_doc_position(-(x_pos-view_w+overlap),-y_pos)}function scroll_up(){set_doc_position(-x_pos,-(y_pos-view_h+overlap))}
// scroll_right()
// scroll_left()
// scroll_up()
// scroll_down()
// scrollPage("right");
// alert(rulersVisibility())
// alert(app.displayDialogs)
// alert(app.preferences.rulerUnits)
// alert(app.preferences.beepWhenDone)
// rulerUnits_prefSave();
// alert("start " + startRulerUnits);
// rulerUnits_prefSet(Units.CM);
// alert("jetzt " + app.preferences.rulerUnits);
// rulerUnits_prefSet(startRulerUnits);
// alert("jetzt " + app.preferences.rulerUnits);
// if (doc.mode == DocumentMode.INDEXEDCOLOR) {
//         // doc.convertProfile("eciRGB v2", Intent.RELATIVECOLORIMETRIC, true, false);
//         alert("index")
//     }
//     else{alert("noIndex")}
var idtransform=stringIDToTypeID("transform"),desc2=new ActionDescriptor,idnull=stringIDToTypeID("null"),ref1=new ActionReference,idlayer=stringIDToTypeID("layer"),idordinal=stringIDToTypeID("ordinal"),idtargetEnum=stringIDToTypeID("targetEnum");ref1.putEnumerated(idlayer,idordinal,idtargetEnum),desc2.putReference(idnull,ref1);var idfreeTransformCenterState=stringIDToTypeID("freeTransformCenterState"),idquadCenterState=stringIDToTypeID("quadCenterState"),idQCSCornerzero=stringIDToTypeID("QCSCorner0");desc2.putEnumerated(idfreeTransformCenterState,idquadCenterState,idQCSCornerzero);var idoffset=stringIDToTypeID("offset"),desc3=new ActionDescriptor,idhorizontal=stringIDToTypeID("horizontal"),idpixelsUnit=stringIDToTypeID("pixelsUnit");desc3.putUnitDouble(idhorizontal,idpixelsUnit,-408);var idvertical=stringIDToTypeID("vertical");idpixelsUnit=stringIDToTypeID("pixelsUnit");desc3.putUnitDouble(idvertical,idpixelsUnit,244);idoffset=stringIDToTypeID("offset");desc2.putObject(idoffset,idoffset,desc3);var idlinked=stringIDToTypeID("linked");desc2.putBoolean(idlinked,!0);var idinterfaceIconFrameDimmed=stringIDToTypeID("interfaceIconFrameDimmed"),idinterpolationType=stringIDToTypeID("interpolationType"),idbicubicSharper=stringIDToTypeID("bicubicSharper");desc2.putEnumerated(idinterfaceIconFrameDimmed,idinterpolationType,idbicubicSharper),executeAction(idtransform,desc2,DialogModes.NO);