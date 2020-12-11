function zoomSteps(_steps) {
    var zoomLevels=[.1, .2, .3, .4, .5, .7, 1, 1.5, 2, 3, 4, 5, 6.25, 8.33, 12.5, 16.67, 25, 33.33, 50, 66.67, 100, 150, 200, 300, 400, 500, 600, 700, 800, 1200, 1600, 3200, 6400, 12800];
    var zoomLevel = getZoomLevel();
    var _steps = _steps * -1;
    for(var z in zoomLevels){
        if(Number(zoomLevels[z]) >= Number(zoomLevel)){
            if (typeof zoomLevels[z - _steps] !== "undefined") {
                setZoom(zoomLevels[z - _steps]);
            }
            break;
        }
    }
};