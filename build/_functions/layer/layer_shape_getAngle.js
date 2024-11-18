function layer_shape_getAngle(t){
//TODO ich würde gerne hier einen Weg finden diekte mit der input-Ebene zu sprechen, ohne sie vorerst zu aktivieren
if(4==layer_getLayerType(t)){var e=layer_selectedIDX_get();gotoLayer_bySelector(t);var a=new ActionReference;a.putEnumerated(s2t("path"),s2t("ordinal"),s2t("targetEnum"));
// Iteriere über die Pfad-Komponenten, um die Punkte zu extrahieren
for(var r=executeActionGet(a).getObjectValue(s2t("pathContents")).getList(s2t("pathComponents")),n=[],s=0
// Pfaddaten erhalten
;s<r.count;s++)for(var o=r.getObjectValue(s).getList(s2t("subpathListKey")),u=0;u<o.count;u++)
// Extrahiere die Ankerpunkte
for(var l=o.getObjectValue(u).getList(s2t("points")),c=0;c<l.count;c++){var g=l.getObjectValue(c).getObjectValue(s2t("anchor")),i=g.getUnitDoubleValue(s2t("horizontal")),y=g.getUnitDoubleValue(s2t("vertical"));n.push({x:i,y:y})}
// Ankerpunkte extrahieren und anzeigen
// for (var i = 0; i < anchorPoints.length; i++) {
// 	$.writeln("Anchor Point " + (i + 1) + ": X = " + anchorPoints[i].x + ", Y = " + anchorPoints[i].y);
// }
// return anchorPoints;
// Bestimmung über zwei Punkte (obenlinks + obenrechts)
var h=n[1].x-n[0].x,p=(n[1].y-n[0].y)/h,b=Math.atan(p)*(180/Math.PI);
// Ausgabe des Wertes
return layer_selectedIDX_set(e),b}return!1}