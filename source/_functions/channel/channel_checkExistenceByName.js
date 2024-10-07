function channel_checkExistenceByName(_name) {
    var channels = app.activeDocument.channels;
    var check = false;
    for (var i = 0; i < channels.length; i++) {
        var channel = channels[i];
        if (channel.name == _name && channel.kind == ChannelType.MASKEDAREA) {
            var check = true;
            break;
        }
    }
    return check;
}