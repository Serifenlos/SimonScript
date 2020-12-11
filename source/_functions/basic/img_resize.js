function img_resize(_ziel_longSite, _max_resolution) {
    prefSave();
    prefSet(DialogModes.NO, Units.MM);

    if (doc.width > doc.height) {
        var d = new ActionDescriptor();
        d.putUnitDouble(sTID('width'), sTID('distanceUnit'), cm2pt(_ziel_longSite));
        executeAction(sTID('imageSize'), d, DialogModes.NO);
    } else {
        var d = new ActionDescriptor();
        d.putUnitDouble(sTID('height'), sTID('distanceUnit'), cm2pt(_ziel_longSite));
        executeAction(sTID('imageSize'), d, DialogModes.NO);
    }

    if (doc.resolution > _max_resolution && _max_resolution) {
        doc.resizeImage(undefined, undefined, _max_resolution, ResampleMethod.PRESERVEDETAILS, 0);
    }

    prefReset();
}