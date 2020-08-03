/* function saveFile_old(_format) {
    var newFileName = new File(outputFolder + "/" + thisFileName + "__mockup");

    if (_outputFileFormat == "TIF") {
        tiffSaveOptions = new TiffSaveOptions();
        tiffSaveOptions.embedColorProfile = true;
        tiffSaveOptions.alphaChannels = false;
        tiffSaveOptions.layers = false;
        tiffSaveOptions.byteOrder = ByteOrder.IBM;
        tiffSaveOptions.annotations = false;
        tiffSaveOptions.transparency = true;
        tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
        app.activeDocument.saveAs(newFileName, tiffSaveOptions, true, Extension.LOWERCASE);

    } else if (_outputFileFormat == "JPG") {
        var jpgSaveOptions = new JPEGSaveOptions();
        jpgSaveOptions.quality = 9;
        jpgSaveOptions.embedColorProfile = true;
        // jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        //other options///////////////////////////
        //jpgSaveOptions.formatOptions = FormatOptions.PROGRESSIVE;
        jpgSaveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
        if (jpgSaveOptions.formatOptions == FormatOptions.PROGRESSIVE) {
            jpgSaveOptions.scans = 3
        };
        // jpgSaveOptions.matte = MatteType.NONE;
        jpgSaveOptions.matte = MatteType.WHITE;
        app.activeDocument.saveAs(newFileName, jpgSaveOptions, true, Extension.LOWERCASE);
    }
} */
function saveFile_TIF(){saveOptions=new TiffSaveOptions,saveOptions.embedColorProfile=!0,saveOptions.alphaChannels=!1,saveOptions.layers=!1,saveOptions.byteOrder=ByteOrder.IBM,saveOptions.annotations=!1,saveOptions.transparency=!0,saveOptions.imageCompression=TIFFEncoding.TIFFLZW,saveFile(saveOptions)}
/* saveFile_PSD(new File(myNewPath),f,t,f,t,t,f,"WasIstTypename"); */function saveFile_PSD(t,e,n,o,p,a,u){saveOptions=new PhotoshopSaveOptions,saveOptions.alphaChannels=n,saveOptions.annotations=o,saveOptions.embedColorProfile=p,saveOptions.layers=a,saveOptions.spotColors=u,doc.saveAs(t,saveOptions,e,Extension.LOWERCASE)}
/* saveFile_JPG(12, true, "FormatOptions.OPTIMIZEDBASELINE", "MatteType.NONE") */function saveFile_JPG(t,e,n,o){saveOptions=new JPEGSaveOptions,saveOptions.quality=t,saveOptions.embedColorProfile=e,
/* saveOptions.formatOptions = FormatOptions.STANDARDBASELINE; */
/* saveOptions.formatOptions = FormatOptions.PROGRESSIVE; */
saveOptions.formatOptions=FormatOptions.OPTIMIZEDBASELINE,saveOptions.formatOptions==FormatOptions.PROGRESSIVE&&(saveOptions.scans=3),
/* saveOptions.matte = MatteType.NONE; */
saveOptions.matte=MatteType.WHITE,saveFile(saveOptions)}function saveFile(t){doc.saveAs(newFilePath,t,!0,Extension.LOWERCASE)}
/*// SAVE FOR WEB ///*/
/* SaveForWeb("JPEG", "/Users/simon/Arbeit/__temp", "Grau+Farbverlauf_HG+++", f, f, f, t, t, 255, 255, 255,"Meta_ck", 66, t,t, 0) */function SaveForWeb(t,e,n,o,p,a,u,r,c,i,s,l,S,C,T,O){var m=function(t){return app.charIDToTypeID(t)},E=function(t){return app.stringIDToTypeID(t)},d=new ActionDescriptor,v=new ActionDescriptor,D=new ActionDescriptor,I=new ActionDescriptor,h=new ActionDescriptor,A=new ActionDescriptor,B=new ActionDescriptor,b=new ActionDescriptor,g=new ActionDescriptor,N=new ActionDescriptor,f=new ActionDescriptor,w=new ActionDescriptor,M=new ActionDescriptor,P=new ActionDescriptor,F=new ActionDescriptor,j=new ActionDescriptor,R=new ActionDescriptor,W=new ActionList,y=new ActionList;v.putEnumerated(m("Op  "),m("SWOp"),m("OpSa")),v.putBoolean(m("DIDr"),!0),v.putPath(E("in"),new File(e)),function(t,e){if("JPEG"==t||"JPG"==t)var n="jpg";else if("PNG8"==t||"PN24"==t)n="png";
/* TODO gif + webm */var o=e+"."+n;v.putString(m("ovFN"),o)}(t,n),v.putEnumerated(E("format"),m("IRFm"),E(t)),/* "JPEG" // "PNG8" // "PN24" */
v.putBoolean(E("interfaceIconFrameDimmed"),p),/* true interlace (gefunden bei PNG24, obwohl das Feld auch bei anderen Format existiert // auch bei PNG8) */
/* just for JPEG */
"JPEG"==t?(v.putInteger(E("quality"),S),/* Qualität */
v.putInteger(m("QChS"),0),v.putInteger(m("QCUI"),0),v.putBoolean(m("QChT"),!1),v.putBoolean(m("QChV"),!1),v.putBoolean(E("optimized"),C),/* true OR false = optimiert */
T?/* 1 = NO progressive // 3 = YES progressive */
v.putInteger(m("Pass"),3):v.putInteger(m("Pass"),1),v.putDouble(E("blur"),O)):(t="PNG8")?(v.putEnumerated(m("RedA"),m("IRRd"),m("Prcp")),/* "c2t('Prcp')" -> Perzeptiv // "c2t('Sltv')" -> Selektiv // s2t("adaptive") -> Adaptiv // c2t("web") -> Restriktiv */
v.putBoolean(m("RChT"),!1),v.putBoolean(m("RChV"),!1),v.putBoolean(m("AuRd"),!1),/* true für Automatische Farbanzahl (funktioniert nur bei restriktiver Farbauswahl) */
v.putInteger(m("NCol"),256),/* Anzahl der Farben  */
v.putInteger(m("DChS"),0),v.putInteger(m("DCUI"),0),v.putBoolean(m("DChT"),!1),v.putBoolean(m("DChV"),!1),v.putInteger(m("WebS"),0),/* zB 62 // Prozentwert Webausrichtung */
v.putEnumerated(m("TDth"),m("IRDt"),E("none")),/* Transparenz-Dither // "none" -> kein Transparent-Dither // "diffusion" -> Transparent-Diffusion // "pattern" -> Transparent-Muster // "BNoi" -> Transparent-Rauschen */
v.putInteger(m("TDtA"),100),/* zb 74 // Prozentwert Dither-Stärke */
v.putBoolean(E("transparency"),!0),/* Transparenz */
v.putEnumerated(E("dither"),m("IRDt"),E("none")),/* Dither // "none" -> kein Dither // "diffusion" // "pattern" // "BNoi" */
v.putInteger(E("ditherAmount"),100)):"PN24"==t&&v.putBoolean(E("transparency"),!0),v.putBoolean(m("Mtt "),r),/* Matte HG true OR false */
v.putBoolean(m("EICC"),u),/* true or false Farbprofil einbetten oder nicht */
v.putInteger(m("MttR"),c),/* MatteColor R */
v.putInteger(m("MttG"),i),/* MatteColor G */
v.putInteger(m("MttB"),s),/* MatteColor B */
o&&(/* enter a percent value OR false */
v.putUnitDouble(m("HScl"),E("percentUnit"),o),/* horizonalScale */
v.putUnitDouble(m("VScl"),E("percentUnit"),o)),v.putBoolean(m("SHTM"),!1),v.putBoolean(m("SImg"),!0),v.putEnumerated(m("SWsl"),m("STsl"),m("SLAl")),a?/* "CHsR" in sRGB konvertieren // "CHDc" nicht */
v.putEnumerated(m("SWch"),m("STch"),m("CHsR")):v.putEnumerated(m("SWch"),m("STch"),m("CHDc")),
/*	d2.putEnumerated(c2t("SWmd"), c2t("STmd"), c2t("MDNn")); //"MDNn" ohne Metadaten // "MDCp" Copyright // "MDCC" Copyright und Kontaktinfos // "MDAx" Alle außer Kamera-Info // "MDAl" Alles */
function(t){/*"MDNn" ohne Metadaten // "MDCp" Copyright // "MDCC" Copyright und Kontaktinfos // "MDAx" Alle außer Kamera-Info // "MDAl" Alles */
if("Meta_no"==t)var e="MDNn";else if("Meta_Copyright"==t||"Meta_c"==t)e="MDCp";else if("Meta_CopyrightKontakt"==t||"Meta_ck"==t)e="MDCC";else if("Meta_all_noKameraInfo"==t||"Meta_all_no"==t)e="MDAx";else if("Meta_all"==t)e="MDAl";else e="MDNn";v.putEnumerated(m("SWmd"),m("STmd"),m(e))}(l),v.putBoolean(m("ohXH"),!1),v.putBoolean(m("ohIC"),!0),v.putBoolean(m("ohAA"),!0),v.putBoolean(m("ohQA"),!0),v.putBoolean(m("ohCA"),!1),v.putBoolean(m("ohIZ"),!0),v.putEnumerated(m("ohTC"),m("SToc"),m("OC03")),v.putEnumerated(m("ohAC"),m("SToc"),m("OC03")),v.putInteger(m("ohIn"),-1),v.putEnumerated(m("ohLE"),m("STle"),m("LE03")),v.putEnumerated(m("ohEn"),m("STen"),m("EN00")),v.putBoolean(m("olCS"),!1),v.putEnumerated(m("olEC"),m("STst"),m("ST00")),v.putEnumerated(m("olWH"),m("STwh"),m("WH01")),v.putEnumerated(m("olSV"),m("STsp"),m("SP04")),v.putEnumerated(m("olSH"),m("STsp"),m("SP04")),D.putEnumerated(m("ncTp"),m("STnc"),m("NC00")),W.putObject(m("SCnc"),D),I.putEnumerated(m("ncTp"),m("STnc"),m("NC19")),W.putObject(m("SCnc"),I),h.putEnumerated(m("ncTp"),m("STnc"),m("NC28")),W.putObject(m("SCnc"),h),A.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),W.putObject(m("SCnc"),A),B.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),W.putObject(m("SCnc"),B),b.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),W.putObject(m("SCnc"),b),v.putList(m("olNC"),W),v.putBoolean(m("obIA"),!1),v.putString(m("obIP"),""),v.putEnumerated(m("obCS"),m("STcs"),m("CS01")),g.putEnumerated(m("ncTp"),m("STnc"),m("NC01")),y.putObject(m("SCnc"),g),N.putEnumerated(m("ncTp"),m("STnc"),m("NC20")),y.putObject(m("SCnc"),N),f.putEnumerated(m("ncTp"),m("STnc"),m("NC02")),y.putObject(m("SCnc"),f),w.putEnumerated(m("ncTp"),m("STnc"),m("NC19")),y.putObject(m("SCnc"),w),M.putEnumerated(m("ncTp"),m("STnc"),m("NC06")),y.putObject(m("SCnc"),M),P.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),y.putObject(m("SCnc"),P),F.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),y.putObject(m("SCnc"),F),j.putEnumerated(m("ncTp"),m("STnc"),m("NC24")),y.putObject(m("SCnc"),j),R.putEnumerated(m("ncTp"),m("STnc"),m("NC22")),y.putObject(m("SCnc"),R),v.putList(m("ovNC"),y),v.putBoolean(m("ovCM"),!1),v.putBoolean(m("ovCW"),!1),v.putBoolean(m("ovCU"),!0),v.putBoolean(m("ovSF"),!0),v.putBoolean(m("ovCB"),!0),v.putString(m("ovSN"),"images"),d.putObject(E("using"),E("SaveForWeb"),v),executeAction(E("export"),d,DialogModes.NO)}