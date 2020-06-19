//@include "functions/basic.jsx";
//@include "functions/mb_Utils.jsx";
//@include "functions/LUT-dodge.jsx";
//@include "functions/LUT-burn.jsx";
//@include "functions/ready.jsx";





setMegaPixel(5)







// SaveForWeb(true, new File( "/Users/simon/Arbeit/11Freunde/224/OnlineBildr+" ), "Barthel___H9A5758__WEB+.jpg", false, 80, 0, 0, false, false, true, 1, 0, true, true, 255, 255, 255, 34.829241, 34.825964, false, true, false, true, true, true, false, true, -1, false, false, "", false, false, true, true, true, "images");
function SaveForWeb(DIDr, in2, ovFN, interfaceIconFrameDimmed, quality, QChS, QCUI, QChT, QChV, optimized, Pass, blur, Mtt, EICC, MttR, MttG, MttB, HScl, VScl, SHTM, SImg, ohXH, ohIC, ohAA, ohQA, ohCA, ohIZ, ohIn, olCS, obIA, obIP, ovCM, ovCW, ovCU, ovSF, ovCB, ovSN) {
	var c2t = function (s) {
		return app.charIDToTypeID(s);
	};

	var s2t = function (s) {
		return app.stringIDToTypeID(s);
	};

	var d = new ActionDescriptor();
	var d2 = new ActionDescriptor();
	var d3 = new ActionDescriptor();
	var d4 = new ActionDescriptor();
	var d5 = new ActionDescriptor();
	var d6 = new ActionDescriptor();
	var d7 = new ActionDescriptor();
	var d8 = new ActionDescriptor();
	var d9 = new ActionDescriptor();
	var d10 = new ActionDescriptor();
	var d11 = new ActionDescriptor();
	var d12 = new ActionDescriptor();
	var d13 = new ActionDescriptor();
	var d14 = new ActionDescriptor();
	var d15 = new ActionDescriptor();
	var d16 = new ActionDescriptor();
	var d17 = new ActionDescriptor();
	var l = new ActionList();
	var l2 = new ActionList();

	d12.putEnumerated( c2t( "Op  " ), c2t( "SWOp" ), c2t( "OpSa" ));
	d12.putBoolean( c2t( "DIDr" ), DIDr );
	d12.putPath( s2t( "in" ), in2 );
	d12.putString( c2t( "ovFN" ), ovFN );
	d12.putEnumerated( s2t( "format" ), c2t( "IRFm" ), s2t( "JPEG" ));
	d12.putBoolean( s2t( "interfaceIconFrameDimmed" ), interfaceIconFrameDimmed );
	d12.putInteger( s2t( "quality" ), quality );
	d12.putInteger( c2t( "QChS" ), QChS );
	d12.putInteger( c2t( "QCUI" ), QCUI );
	d12.putBoolean( c2t( "QChT" ), QChT );
	d12.putBoolean( c2t( "QChV" ), QChV );
	d12.putBoolean( s2t( "optimized" ), optimized );
	d12.putInteger( c2t( "Pass" ), Pass );
	d12.putDouble( s2t( "blur" ), blur );
	d12.putBoolean( c2t( "Mtt " ), Mtt );
	d12.putBoolean( c2t( "EICC" ), EICC );
	d12.putInteger( c2t( "MttR" ), MttR );
	d12.putInteger( c2t( "MttG" ), MttG );
	d12.putInteger( c2t( "MttB" ), MttB );
	d12.putUnitDouble( c2t( "HScl" ), s2t( "percentUnit" ), HScl );
	d12.putUnitDouble( c2t( "VScl" ), s2t( "percentUnit" ), VScl );
	d12.putBoolean( c2t( "SHTM" ), SHTM );
	d12.putBoolean( c2t( "SImg" ), SImg );
	d12.putEnumerated( c2t( "SWsl" ), c2t( "STsl" ), c2t( "SLAl" ));
	d12.putEnumerated( c2t( "SWch" ), c2t( "STch" ), c2t( "CHDc" ));
	d12.putEnumerated( c2t( "SWmd" ), c2t( "STmd" ), c2t( "MDCp" ));
	d12.putBoolean( c2t( "ohXH" ), ohXH );
	d12.putBoolean( c2t( "ohIC" ), ohIC );
	d12.putBoolean( c2t( "ohAA" ), ohAA );
	d12.putBoolean( c2t( "ohQA" ), ohQA );
	d12.putBoolean( c2t( "ohCA" ), ohCA );
	d12.putBoolean( c2t( "ohIZ" ), ohIZ );
	d12.putEnumerated( c2t( "ohTC" ), c2t( "SToc" ), c2t( "OC03" ));
	d12.putEnumerated( c2t( "ohAC" ), c2t( "SToc" ), c2t( "OC03" ));
	d12.putInteger( c2t( "ohIn" ), ohIn );
	d12.putEnumerated( c2t( "ohLE" ), c2t( "STle" ), c2t( "LE03" ));
	d12.putEnumerated( c2t( "ohEn" ), c2t( "STen" ), c2t( "EN00" ));
	d12.putBoolean( c2t( "olCS" ), olCS );
	d12.putEnumerated( c2t( "olEC" ), c2t( "STst" ), c2t( "ST00" ));
	d12.putEnumerated( c2t( "olWH" ), c2t( "STwh" ), c2t( "WH01" ));
	d12.putEnumerated( c2t( "olSV" ), c2t( "STsp" ), c2t( "SP04" ));
	d12.putEnumerated( c2t( "olSH" ), c2t( "STsp" ), c2t( "SP04" ));
	d13.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC00" ));
	l.putObject( c2t( "SCnc" ), d13 );
	d14.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC19" ));
	l.putObject( c2t( "SCnc" ), d14 );
	d15.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC28" ));
	l.putObject( c2t( "SCnc" ), d15 );
	d16.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC24" ));
	l.putObject( c2t( "SCnc" ), d16 );
	d17.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC24" ));
	l.putObject( c2t( "SCnc" ), d17 );
	d.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC24" ));
	l.putObject( c2t( "SCnc" ), d );
	d12.putList( c2t( "olNC" ), l );
	d12.putBoolean( c2t( "obIA" ), obIA );
	d12.putString( c2t( "obIP" ), obIP );
	d12.putEnumerated( c2t( "obCS" ), c2t( "STcs" ), c2t( "CS01" ));
	d2.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC01" ));
	l2.putObject( c2t( "SCnc" ), d2 );
	d3.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC20" ));
	l2.putObject( c2t( "SCnc" ), d3 );
	d4.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC02" ));
	l2.putObject( c2t( "SCnc" ), d4 );
	d5.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC19" ));
	l2.putObject( c2t( "SCnc" ), d5 );
	d6.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC06" ));
	l2.putObject( c2t( "SCnc" ), d6 );
	d7.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC24" ));
	l2.putObject( c2t( "SCnc" ), d7 );
	d8.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC24" ));
	l2.putObject( c2t( "SCnc" ), d8 );
	d9.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC24" ));
	l2.putObject( c2t( "SCnc" ), d9 );
	d10.putEnumerated( c2t( "ncTp" ), c2t( "STnc" ), c2t( "NC22" ));
	l2.putObject( c2t( "SCnc" ), d10 );
	d12.putList( c2t( "ovNC" ), l2 );
	d12.putBoolean( c2t( "ovCM" ), ovCM );
	d12.putBoolean( c2t( "ovCW" ), ovCW );
	d12.putBoolean( c2t( "ovCU" ), ovCU );
	d12.putBoolean( c2t( "ovSF" ), ovSF );
	d12.putBoolean( c2t( "ovCB" ), ovCB );
	d12.putString( c2t( "ovSN" ), ovSN );
	d11.putObject( s2t( "using" ), s2t( "SaveForWeb" ), d12 );
	executeAction( s2t( "export" ), d11, DialogModes.NO );
}