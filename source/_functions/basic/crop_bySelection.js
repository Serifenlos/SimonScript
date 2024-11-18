function crop_bySelection() {
	var descriptor = new ActionDescriptor();

	descriptor.putBoolean( s2t( "delete" ), true );
	executeAction( s2t( "crop" ), descriptor, DialogModes.NO );
}