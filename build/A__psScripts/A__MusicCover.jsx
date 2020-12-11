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
if(prefSave(),prefSet(DialogModes.NO,Units.PIXELS),doc.width>=doc.height)var richtmass=doc.width,richtmass_wer="breit";else richtmass=doc.height,richtmass_wer="hoch";richtmass>800&&("breit"==richtmass_wer?doc.resizeImage(800,void 0,72,ResampleMethod.PRESERVEDETAILS,0):doc.resizeImage(void 0,800,72,ResampleMethod.PRESERVEDETAILS,0)),prefReset(),assignProfile("DonRGB4.icm"),doc.convertProfile("sRGB IEC61966-2.1",Intent.RELATIVECOLORIMETRIC,!0,!1);
// Tiefen Lichter=======================================================
var idadaptCorrect=stringIDToTypeID("adaptCorrect"),desc47=new ActionDescriptor,idsdwM=charIDToTypeID("sdwM"),desc48=new ActionDescriptor,idAmnt=charIDToTypeID("Amnt"),idPrc=charIDToTypeID("#Prc");desc48.putUnitDouble(idAmnt,idPrc,0);var idWdth=charIDToTypeID("Wdth");idPrc=charIDToTypeID("#Prc");desc48.putUnitDouble(idWdth,idPrc,50);var idRds=charIDToTypeID("Rds ");desc48.putInteger(idRds,30);var idadaptCorrectTones=stringIDToTypeID("adaptCorrectTones");desc47.putObject(idsdwM,idadaptCorrectTones,desc48);var idhglM=charIDToTypeID("hglM"),desc49=new ActionDescriptor;idAmnt=charIDToTypeID("Amnt"),idPrc=charIDToTypeID("#Prc");desc49.putUnitDouble(idAmnt,idPrc,5);idWdth=charIDToTypeID("Wdth"),idPrc=charIDToTypeID("#Prc");desc49.putUnitDouble(idWdth,idPrc,50);idRds=charIDToTypeID("Rds ");desc49.putInteger(idRds,30);idadaptCorrectTones=stringIDToTypeID("adaptCorrectTones");desc47.putObject(idhglM,idadaptCorrectTones,desc49);var idBlcC=charIDToTypeID("BlcC");desc47.putDouble(idBlcC,0);var idWhtC=charIDToTypeID("WhtC");desc47.putDouble(idWhtC,0);var idCntr=charIDToTypeID("Cntr");desc47.putInteger(idCntr,0);var idClrC=charIDToTypeID("ClrC");desc47.putInteger(idClrC,25),executeAction(idadaptCorrect,desc47,DialogModes.NO);
// USM =======================================================
var idUnsM=charIDToTypeID("UnsM"),desc66=new ActionDescriptor;idAmnt=charIDToTypeID("Amnt"),idPrc=charIDToTypeID("#Prc");desc66.putUnitDouble(idAmnt,idPrc,65);idRds=charIDToTypeID("Rds ");var idPxl=charIDToTypeID("#Pxl");desc66.putUnitDouble(idRds,idPxl,.9);var idThsh=charIDToTypeID("Thsh");desc66.putInteger(idThsh,2),executeAction(idUnsM,desc66,DialogModes.NO);
// HG reduzieren=======================================================
var idFltI=charIDToTypeID("FltI");function setSaveName2(e,r,d){var t=new Folder(e);t.exists||t.create();for(var c=t+"/"+(o=r)+"."+d,i=File(c);i.exists;){var o;c=t+"/"+(o=o+"+")+"."+d,i=File(c)}return o}executeAction(idFltI,void 0,DialogModes.NO);var saveFolder="/Users/simon/Arbeit/__temp/MusikCover";SaveForWeb("JPEG",saveFolder,setSaveName2(saveFolder,"cover","jpg"),f,f,f,t,t,255,255,255,"Meta_no",66,t,t,0);