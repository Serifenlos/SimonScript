function replace__RGB_RZ(_replace) {
    var RGBname = GetFileNameOnly(doc.name);
    var RZname = RGBname.replace(/(__RGB.*)$/g, _replace).replace(/(__RZ.*)$/g, _replace).replace(/(__WEB.*)$/g, _replace);

    var checkName = new RegExp(_replace, 'g');
    if (!RZname.match(checkName)) {
        var RZname = RZname + _replace;
    }
    return RZname;
}