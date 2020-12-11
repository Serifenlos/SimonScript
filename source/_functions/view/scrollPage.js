function scrollPage(_direction) {
    var ruler_viewInfo = 19;
    var ruler_viewTransform = 0;
    if (!rulersVisibility()) {
        var ruler_viewInfo = 0;
        var ruler_viewTransform = 9.5;
    }
    var scrollbar = 16;
    var overlap = 100;
    var outer_border = 50;


    var r1 = new ActionReference();
    r1.putProperty(stringIDToTypeID("property"), stringIDToTypeID("viewInfo"));
    r1.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
    var desc = executeActionGet(r1);
    var bounds = desc.getObjectValue(stringIDToTypeID('viewInfo')).getObjectValue(stringIDToTypeID('activeView')).getObjectValue(stringIDToTypeID('globalBounds'));

    var left = bounds.getDouble(stringIDToTypeID('left'));
    var right = bounds.getDouble(stringIDToTypeID('right'));
    var top = bounds.getDouble(stringIDToTypeID('top'));
    var bottom = bounds.getDouble(stringIDToTypeID('bottom'));

    var view_w = right - left - ruler_viewInfo - scrollbar;
    var view_h = bottom - top - ruler_viewInfo - scrollbar;


    var r2 = new ActionReference();
    r2.putProperty(stringIDToTypeID("property"), stringIDToTypeID("viewTransform"));
    r2.putEnumerated(stringIDToTypeID("document"), stringIDToTypeID("ordinal"), stringIDToTypeID("targetEnum"));
    var list = executeActionGet(r2).getList(stringIDToTypeID('viewTransform'));

    var x_pos = (list.getDouble(4) / list.getDouble(0)) - ruler_viewTransform;
    var y_pos = (list.getDouble(5) / list.getDouble(3)) - ruler_viewTransform;

    rulerUnits_prefSave();
    rulerUnits_prefSet(Units.PIXELS);
    var img_h = parseInt((app.activeDocument.height / list.getDouble(0)) - ruler_viewTransform);
    var img_w = parseInt((app.activeDocument.width / list.getDouble(3)) - ruler_viewTransform);
    rulerUnits_prefSet(startRulerUnits);
    

    
    if (_direction == "up") {
        var y_new = -(y_pos - view_h + overlap);
        if (y_new > outer_border) {y_new = outer_border;};
        set_doc_position(-x_pos, y_new);
    }
    // in der Grenze fehlt noch die Scrollbar
    else if (_direction == "down") {
        var y_new = -(y_pos + view_h - overlap);
        var grenze = img_h - view_h + outer_border;
        if(y_new < -grenze) {
            var y_new = -grenze
        }
        set_doc_position(-x_pos, y_new);
    }

    // in der Grenze fehlt noch die Scrollbar
    else if (_direction == "right") {
        var x_new = -(x_pos + view_w - overlap);
        var grenze = img_w - view_w + outer_border;

        if(x_new < -grenze) {
            var x_new = -grenze
        }
        set_doc_position(x_new, -y_pos);
    }

    else if (_direction == "left") {
        x_new = -(x_pos - view_w + overlap);
        if (x_new > outer_border) {x_new = outer_border;};
        set_doc_position(x_new, -y_pos);
    }

    return;
}