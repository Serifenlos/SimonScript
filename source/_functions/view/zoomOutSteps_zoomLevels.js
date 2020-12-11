function zoomOutSteps_zoomLevels(steps){
    var zoomLevel = getZoomLevel();
    for(var z in zoomLevels){
        if(Number(zoomLevels[z]) >= Number(zoomLevel)){
            setZoomLevel(zoomLevels[z - steps]);
            break;
        }
    }
};