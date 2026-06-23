function makeSnapshot(_name) {
	var d = new ActionDescriptor();
	var r = new ActionReference();
	var r2 = new ActionReference();

	r.putClass( s2t( "snapshotClass" ));
	d.putReference( s2t( "null" ), r );
	r2.putProperty( s2t( "historyState" ), s2t( "currentHistoryState" ));
	d.putReference( s2t( "from" ), r2 );
	d.putString( s2t( "name" ), _name );
	d.putEnumerated( s2t( "using" ), s2t( "historyState" ), s2t( "fullDocument" ));
	executeAction( s2t( "make" ), d, DialogModes.NO );
}