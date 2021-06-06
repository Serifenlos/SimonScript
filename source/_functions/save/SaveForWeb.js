function SaveForWeb(_format, _path, _filename, _scale, _interlace, _convert2sRGB, _embedICC, _matte, _matteR, _matteG, _matteB, _embedMeta, _jpgQquality, _jpgOptimized, _jpgProgressive, _jpgBlur) {

	// var c2t = function (s) {
	// 	return app.charIDToTypeID(s);
	// };
	// var s2t = function (s) {
	// 	return app.stringIDToTypeID(s);
	// };

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



	d2.putEnumerated(c2t("Op  "), c2t("SWOp"), c2t("OpSa"));
	d2.putBoolean(c2t("DIDr"), true);
	d2.putPath(s2t("in"), new File(_path));

	function SaveForWeb_helperFilename(_format, _filename) {
		if (_format == "JPEG" || _format == "JPG") {
			var extension = "jpg"
		} else if (_format == "PNG8" || _format == "PN24") {
			var extension = "png"
		}
		/* TODO gif + webm */
		var name = _filename + "." + extension;
		return d2.putString(c2t("ovFN"), name);
	}
	SaveForWeb_helperFilename(_format, _filename)

	d2.putEnumerated(s2t("format"), c2t("IRFm"), s2t(_format)); /* "JPEG" // "PNG8" // "PN24" */
	d2.putBoolean(s2t("interfaceIconFrameDimmed"), _interlace); /* true interlace (gefunden bei PNG24, obwohl das Feld auch bei anderen Format existiert // auch bei PNG8) */

	/* just for JPEG */
	if (_format == "JPEG") {
		d2.putInteger(s2t("quality"), _jpgQquality); /* Qualität */
		d2.putInteger(c2t("QChS"), 0);
		d2.putInteger(c2t("QCUI"), 0);
		d2.putBoolean(c2t("QChT"), false);
		d2.putBoolean(c2t("QChV"), false);
		d2.putBoolean(s2t("optimized"), _jpgOptimized); /* true OR false = optimiert */
		if (_jpgProgressive) {
			/* 1 = NO progressive // 3 = YES progressive */
			d2.putInteger(c2t("Pass"), 3);
		} else {
			d2.putInteger(c2t("Pass"), 1);
		}
		d2.putDouble(s2t("blur"), _jpgBlur); /* weichzeichnen */

	}

	/* just fpr PNG8 */
	else if (_format = "PNG8") {
		d2.putEnumerated(c2t("RedA"), c2t("IRRd"), c2t("Prcp")); /* "c2t('Prcp')" -> Perzeptiv // "c2t('Sltv')" -> Selektiv // s2t("adaptive") -> Adaptiv // c2t("web") -> Restriktiv */
		d2.putBoolean(c2t("RChT"), false);
		d2.putBoolean(c2t("RChV"), false);
		d2.putBoolean(c2t("AuRd"), false); /* true für Automatische Farbanzahl (funktioniert nur bei restriktiver Farbauswahl) */
		d2.putInteger(c2t("NCol"), 256); /* Anzahl der Farben  */
		d2.putInteger(c2t("DChS"), 0);
		d2.putInteger(c2t("DCUI"), 0);
		d2.putBoolean(c2t("DChT"), false);
		d2.putBoolean(c2t("DChV"), false);
		d2.putInteger(c2t("WebS"), 0); /* zB 62 // Prozentwert Webausrichtung */
		d2.putEnumerated(c2t("TDth"), c2t("IRDt"), s2t("none")); /* Transparenz-Dither // "none" -> kein Transparent-Dither // "diffusion" -> Transparent-Diffusion // "pattern" -> Transparent-Muster // "BNoi" -> Transparent-Rauschen */
		d2.putInteger(c2t("TDtA"), 100); /* zb 74 // Prozentwert Dither-Stärke */
		d2.putBoolean(s2t("transparency"), true); /* Transparenz */
		d2.putEnumerated(s2t("dither"), c2t("IRDt"), s2t("none")); /* Dither // "none" -> kein Dither // "diffusion" // "pattern" // "BNoi" */
		d2.putInteger(s2t("ditherAmount"), 100); /* zB 56 // Prozentwert Dither */
	}

	/*just for PN24 */
	else if (_format == "PN24") {
		d2.putBoolean(s2t("transparency"), true); /* Transparenz */
	}



	d2.putBoolean(c2t("Mtt "), _matte); /* Matte HG true OR false */
	d2.putBoolean(c2t("EICC"), _embedICC); /* true or false Farbprofil einbetten oder nicht */
	d2.putInteger(c2t("MttR"), _matteR); /* MatteColor R */
	d2.putInteger(c2t("MttG"), _matteG); /* MatteColor G */
	d2.putInteger(c2t("MttB"), _matteB); /* MatteColor B */

	if (_scale) {
		/* enter a percent value OR false */
		d2.putUnitDouble(c2t("HScl"), s2t("percentUnit"), _scale); /* horizonalScale */
		d2.putUnitDouble(c2t("VScl"), s2t("percentUnit"), _scale); /* verticalScale */
	}

	d2.putBoolean(c2t("SHTM"), false);
	d2.putBoolean(c2t("SImg"), true);
	d2.putEnumerated(c2t("SWsl"), c2t("STsl"), c2t("SLAl"));

	if (_convert2sRGB) {
		/* "CHsR" in sRGB konvertieren // "CHDc" nicht */
		d2.putEnumerated(c2t("SWch"), c2t("STch"), c2t("CHsR"));
	} else {
		d2.putEnumerated(c2t("SWch"), c2t("STch"), c2t("CHDc"))
	};

	/*	d2.putEnumerated(c2t("SWmd"), c2t("STmd"), c2t("MDNn")); //"MDNn" ohne Metadaten // "MDCp" Copyright // "MDCC" Copyright und Kontaktinfos // "MDAx" Alle außer Kamera-Info // "MDAl" Alles */
	SaveForWeb_helperMeta(_embedMeta);

	function SaveForWeb_helperMeta(_embedMeta) {
		/*"MDNn" ohne Metadaten // "MDCp" Copyright // "MDCC" Copyright und Kontaktinfos // "MDAx" Alle außer Kamera-Info // "MDAl" Alles */
		if (_embedMeta == "Meta_no") {
			var _embedMeta_ph = "MDNn"
		} else if (_embedMeta == "Meta_Copyright" || _embedMeta == "Meta_c") {
			var _embedMeta_ph = "MDCp"
		} else if (_embedMeta == "Meta_CopyrightKontakt" || _embedMeta == "Meta_ck") {
			var _embedMeta_ph = "MDCC"
		} else if (_embedMeta == "Meta_all_noKameraInfo" || _embedMeta == "Meta_all_no") {
			var _embedMeta_ph = "MDAx"
		} else if (_embedMeta == "Meta_all") {
			var _embedMeta_ph = "MDAl"
		} else {
			var _embedMeta_ph = "MDNn"
		}
		return d2.putEnumerated(c2t("SWmd"), c2t("STmd"), c2t(_embedMeta_ph));
	}

	d2.putBoolean(c2t("ohXH"), false);
	d2.putBoolean(c2t("ohIC"), true);
	d2.putBoolean(c2t("ohAA"), true);
	d2.putBoolean(c2t("ohQA"), true);
	d2.putBoolean(c2t("ohCA"), false);
	d2.putBoolean(c2t("ohIZ"), true);
	d2.putEnumerated(c2t("ohTC"), c2t("SToc"), c2t("OC03"));
	d2.putEnumerated(c2t("ohAC"), c2t("SToc"), c2t("OC03"));
	d2.putInteger(c2t("ohIn"), -1);
	d2.putEnumerated(c2t("ohLE"), c2t("STle"), c2t("LE03"));
	d2.putEnumerated(c2t("ohEn"), c2t("STen"), c2t("EN00"));
	d2.putBoolean(c2t("olCS"), false);
	d2.putEnumerated(c2t("olEC"), c2t("STst"), c2t("ST00"));
	d2.putEnumerated(c2t("olWH"), c2t("STwh"), c2t("WH01"));
	d2.putEnumerated(c2t("olSV"), c2t("STsp"), c2t("SP04"));
	d2.putEnumerated(c2t("olSH"), c2t("STsp"), c2t("SP04"));
	d3.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC00"));
	l.putObject(c2t("SCnc"), d3);
	d4.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC19"));
	l.putObject(c2t("SCnc"), d4);
	d5.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC28"));
	l.putObject(c2t("SCnc"), d5);
	d6.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC24"));
	l.putObject(c2t("SCnc"), d6);
	d7.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC24"));
	l.putObject(c2t("SCnc"), d7);
	d8.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC24"));
	l.putObject(c2t("SCnc"), d8);
	d2.putList(c2t("olNC"), l);
	d2.putBoolean(c2t("obIA"), false);
	d2.putString(c2t("obIP"), "");
	d2.putEnumerated(c2t("obCS"), c2t("STcs"), c2t("CS01"));
	d9.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC01"));
	l2.putObject(c2t("SCnc"), d9);
	d10.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC20"));
	l2.putObject(c2t("SCnc"), d10);
	d11.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC02"));
	l2.putObject(c2t("SCnc"), d11);
	d12.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC19"));
	l2.putObject(c2t("SCnc"), d12);
	d13.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC06"));
	l2.putObject(c2t("SCnc"), d13);
	d14.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC24"));
	l2.putObject(c2t("SCnc"), d14);
	d15.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC24"));
	l2.putObject(c2t("SCnc"), d15);
	d16.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC24"));
	l2.putObject(c2t("SCnc"), d16);
	d17.putEnumerated(c2t("ncTp"), c2t("STnc"), c2t("NC22"));
	l2.putObject(c2t("SCnc"), d17);
	d2.putList(c2t("ovNC"), l2);
	d2.putBoolean(c2t("ovCM"), false);
	d2.putBoolean(c2t("ovCW"), false);
	d2.putBoolean(c2t("ovCU"), true);
	d2.putBoolean(c2t("ovSF"), true);
	d2.putBoolean(c2t("ovCB"), true);
	d2.putString(c2t("ovSN"), "images");
	d.putObject(s2t("using"), s2t("SaveForWeb"), d2);
	executeAction(s2t("export"), d, DialogModes.NO);
}