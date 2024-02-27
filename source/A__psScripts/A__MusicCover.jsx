/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[A] Cover für iTunes</name>
<about>Cover für iTunes vorbereiten | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>A fängt an.</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/save.jsx";


prefSave();
prefSet(DialogModes.NO, Units.PIXELS);

if (doc.width >= doc.height) {
    var richtmass = doc.width;
    var richtmass_wer = "breit";
    }
else {
    var richtmass = doc.height;
    var richtmass_wer = "hoch";
    }


if (richtmass > 800) {
    if (richtmass_wer == "breit") {
        doc.resizeImage(800, undefined, 72, ResampleMethod.PRESERVEDETAILS, 0);
    }
    else {
        doc.resizeImage(undefined, 800, 72, ResampleMethod.PRESERVEDETAILS, 0);
    }
}

prefReset();

assignProfile("DonRGB4.icm");
doc.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);


// Tiefen Lichter=======================================================
var idadaptCorrect = stringIDToTypeID( "adaptCorrect" );
    var desc47 = new ActionDescriptor();
    var idsdwM = charIDToTypeID( "sdwM" );
        var desc48 = new ActionDescriptor();
        var idAmnt = charIDToTypeID( "Amnt" );
        var idPrc = charIDToTypeID( "#Prc" );
        desc48.putUnitDouble( idAmnt, idPrc, 0.000000 );
        var idWdth = charIDToTypeID( "Wdth" );
        var idPrc = charIDToTypeID( "#Prc" );
        desc48.putUnitDouble( idWdth, idPrc, 50.000000 );
        var idRds = charIDToTypeID( "Rds " );
        desc48.putInteger( idRds, 30 );
    var idadaptCorrectTones = stringIDToTypeID( "adaptCorrectTones" );
    desc47.putObject( idsdwM, idadaptCorrectTones, desc48 );
    var idhglM = charIDToTypeID( "hglM" );
        var desc49 = new ActionDescriptor();
        var idAmnt = charIDToTypeID( "Amnt" );
        var idPrc = charIDToTypeID( "#Prc" );
        desc49.putUnitDouble( idAmnt, idPrc, 5.000000 );
        var idWdth = charIDToTypeID( "Wdth" );
        var idPrc = charIDToTypeID( "#Prc" );
        desc49.putUnitDouble( idWdth, idPrc, 50.000000 );
        var idRds = charIDToTypeID( "Rds " );
        desc49.putInteger( idRds, 30 );
    var idadaptCorrectTones = stringIDToTypeID( "adaptCorrectTones" );
    desc47.putObject( idhglM, idadaptCorrectTones, desc49 );
    var idBlcC = charIDToTypeID( "BlcC" );
    desc47.putDouble( idBlcC, 0.000000 );
    var idWhtC = charIDToTypeID( "WhtC" );
    desc47.putDouble( idWhtC, 0.000000 );
    var idCntr = charIDToTypeID( "Cntr" );
    desc47.putInteger( idCntr, 0 );
    var idClrC = charIDToTypeID( "ClrC" );
    desc47.putInteger( idClrC, 25 );
executeAction( idadaptCorrect, desc47, DialogModes.NO );

// USM =======================================================
var idUnsM = charIDToTypeID( "UnsM" );
    var desc66 = new ActionDescriptor();
    var idAmnt = charIDToTypeID( "Amnt" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc66.putUnitDouble( idAmnt, idPrc, 65.000000 );
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc66.putUnitDouble( idRds, idPxl, 0.900000 );
    var idThsh = charIDToTypeID( "Thsh" );
    desc66.putInteger( idThsh, 2 );
executeAction( idUnsM, desc66, DialogModes.NO );

// HG reduzieren=======================================================
var idFltI = charIDToTypeID( "FltI" );
executeAction( idFltI, undefined, DialogModes.NO );





function setSaveName2(_saveFolder, _name, _saveFormat) {
    var saveFolder = new Folder(_saveFolder);
    if (!saveFolder.exists) saveFolder.create();

    var saveName = _name;
    var savePath = saveFolder + "/" + saveName + "." + _saveFormat;
    var saveFile = File(savePath);

    while (saveFile.exists) {
        var saveName = saveName + "+";
        var savePath = saveFolder + "/" + saveName + "." + _saveFormat;
        var saveFile = File(savePath);
    }
    return saveName;
}

var saveFolder = "~/Arbeit/__temp/MusikCover";

SaveForWeb("JPEG", saveFolder, setSaveName2(saveFolder, "cover", "jpg"), f, f, f, t, t, 255, 255, 255,"Meta_no", 66, t,t, 0)
