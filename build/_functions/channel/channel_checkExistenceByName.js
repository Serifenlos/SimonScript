function channel_checkExistenceByName(n){for(var e=doc.channels,a=!1,c=0;c<e.length;c++){var r=e[c];if(r.name==n&&r.kind==ChannelType.MASKEDAREA){a=!0;break}}return a}