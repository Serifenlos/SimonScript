function layer_transform(_point, _moveX, _moveY, _transformX, _transformY, _unit, _linked) {
	var d = new ActionDescriptor();
	var d2 = new ActionDescriptor();
	var r = new ActionReference();

    // alert("point " + _point + "\nmoveX " + _moveX + "\nmoveY " + _moveY + "\ntransformX " + _transformX + "\ntransformY " + _transformY + "\nunit " + _unit + "\nlinked " + _linked)


    // die Positionierung ist leider buggy, oder??
    if(_point == "topleft") {var _pointX = "QCSCorner0"}
	else if(_point == "topcenter") {var _pointX = "QCSSide0"}
	else if(_point == "topright") {var _pointX = "QCSCorner1"}
	else if(_point == "midleft") {var _pointX = "QCSSide3"}
	else if(_point == "midcenter") {var _pointX = "QCSAverage"}
	else if(_point == "midright") {var _pointX = "QCSSide1"}
	else if(_point == "bottomleft") {var _pointX = "QCSCorner3"}
	else if(_point == "bottomcenter") {var _pointX = "QCSSide2"}
	else if(_point == "bottomright") {var _pointX = "QCSCorner2"}
    else {var _pointX = "QCSCorner0"}

	r.putEnumerated( s2t( "layer" ), s2t( "ordinal" ), s2t( "targetEnum" ));
	d.putReference( s2t( "null" ), r );
	d.putEnumerated( s2t( "freeTransformCenterState" ), s2t( "quadCenterState" ), s2t(_pointX));
	d2.putUnitDouble( s2t( "horizontal" ), s2t( "pixelsUnit" ), _moveX );
	d2.putUnitDouble( s2t( "vertical" ), s2t( "pixelsUnit" ), _moveY );
	d.putObject( s2t( "offset" ), s2t( "offset" ), d2 );

    if(_unit == "%_canvas") {
        var layer_width = app.activeDocument.activeLayer.bounds[2] - app.activeDocument.activeLayer.bounds[0];
        var layer_height = app.activeDocument.activeLayer.bounds[3] - app.activeDocument.activeLayer.bounds[1];
        var doc_layer_width = parseFloat(app.activeDocument.width / layer_width * _transformX);
        var doc_layer_height = parseFloat(app.activeDocument.height / layer_height * _transformY);
        // alert(doc_layer_width + " " + doc_layer_height)
        if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}

    } else if(_unit == "%_layer") {
        var layer_width = app.activeDocument.activeLayer.bounds[2] - app.activeDocument.activeLayer.bounds[0];
        var layer_height = app.activeDocument.activeLayer.bounds[3] - app.activeDocument.activeLayer.bounds[1];
        var doc_layer_width = parseFloat(layer_width / app.activeDocument.width * _transformX * 10);
        var doc_layer_height = parseFloat(layer_height / app.activeDocument.height * _transformY * 10);
        // alert(doc_layer_width + " " + doc_layer_height);
        if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}

    } else if(_unit == "px") {
        var doc_layer_width =  parseFloat(_transformX / app.activeDocument.width * 100);
        var doc_layer_height = parseFloat(_transformY / app.activeDocument.height * 100);
        // alert(doc_layer_width + " " + doc_layer_height)
        if(_transformX) {d.putUnitDouble(s2t("width"),s2t("percentUnit"), doc_layer_width)}
	    if(_transformY) {d.putUnitDouble(s2t("height"),s2t("percentUnit"), doc_layer_height)}
    }

	if((_transformX || _transformY) && (_linked)) {d.putBoolean( s2t( "linked" ), _linked );}

	d.putEnumerated( s2t( "interfaceIconFrameDimmed" ), s2t( "interpolationType" ), s2t( "bicubic" ));
	executeAction( s2t( "transform" ), d, DialogModes.NO );
}