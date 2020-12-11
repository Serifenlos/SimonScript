function TemporaryAlpha() {
    activeDocument.selection.store((this.alpha = activeDocument.channels.add()));
    activeDocument.selection.deselect();
    
    this.consume = function() {
       activeDocument.selection.load(this.alpha);
       this.alpha.remove();
    }
 }