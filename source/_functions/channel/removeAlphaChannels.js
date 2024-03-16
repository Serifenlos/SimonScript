function RemoveAlphaChannels() {
    var channels = doc.channels;
    var alphas = [];
    for (var i = 0; i < channels.length; i++) {
        var channel = channels[i];
        if (channel.kind == ChannelType.COMPONENT) {
            continue;
        }
        alphas.push(channel);
    }
    while (alphas.length) {
        var channel = alphas.pop();
        channel.remove();
    }
};