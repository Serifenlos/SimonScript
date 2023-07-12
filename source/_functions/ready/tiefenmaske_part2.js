function tiefenmakse_part2(_merge) {
    nameLayer("layer__depthMask_map");
    select_luminance();

    layer_delete();
    gotoLayer("helper__depthMask_image");
    layer_delete();
    createGroup("Tiefe", "passThrough", "none", 100, f);

    maskFromSelection();

    if (layer_checkExistence(layer_getIDXbyString("Dodge & Burn △◊▽")[0])) {
        moveLayer("Tiefe", "Dodge & Burn △◊▽", "up");
    }
    
    gotoLayer("Tiefe");
    
}