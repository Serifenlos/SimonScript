function getBitDepth() {
    if (doc.bitsPerChannel == "BitsPerChannelType.EIGHT") {
        var bit = 8;
    } else if (doc.bitsPerChannel == BitsPerChannelType.SIXTEEN) {
        var bit = 16;
    } else if (doc.bitsPerChannel == BitsPerChannelType.THIRTYTWO) {
        var bit = 32;
    } else {
        return false;
    }
    return bit;
}