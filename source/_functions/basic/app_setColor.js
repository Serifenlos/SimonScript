function app_setColor(_h, _s, _b, _focus) {
	var d = new ActionDescriptor();
	var d2 = new ActionDescriptor();
	var r = new ActionReference();

	r.putProperty( s2t( "color" ), s2t( _focus ));
	d.putReference( s2t( "null" ), r );
	d2.putUnitDouble( s2t( "hue" ), s2t( "angleUnit" ), _h );
	d2.putDouble( s2t( "saturation" ), _s );
	d2.putDouble( s2t( "brightness" ), _b );
	d.putObject( s2t( "to" ), s2t( "HSBColorClass" ), d2 );
	d.putString( s2t( "source" ), "photoshopPicker" );
	executeAction( s2t( "set" ), d, DialogModes.NO );
}

// Apfel+D
// app_setColor(0, 0, 0, "foregroundColor");
// app_setColor(0, 0, 100, "backgroundColor");
