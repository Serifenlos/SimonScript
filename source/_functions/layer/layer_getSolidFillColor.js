function layer_getSolidFillColor() {
    var colors_layer = [];
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    var desc = executeActionGet(r)
    var adjList = desc.getList(s2t('adjustment'));
    var adjDesc = adjList.getObjectValue(0);
    var colorDesc = adjDesc.getObjectValue(s2t('color'));
    colors_layer.push(Math.round(colorDesc.getDouble(s2t('red'))));
    colors_layer.push(Math.round(colorDesc.getDouble(s2t('green'))));
    colors_layer.push(Math.round(colorDesc.getDouble(s2t('blue'))));
    return colors_layer;
}