function zoomIn_zoomLevels(){
    var zoomLevel = getZoomLevel();
    for(var z in zoomLevels){
        if(Number(zoomLevels[z]) > Number(zoomLevel)){
            setZoomLevel(zoomLevels[z]);
            break;
        }
    }
};