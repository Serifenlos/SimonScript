/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[GitDev] test_dev</name>
<about>test_dev | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>GitHub dev</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/

//@include "functions/basic.jsx";
//@include "functions/mb_Utils.jsx";



// executeAction( sTID('inverse'), undefined, DialogModes.NO );
// fill("black", "normal", 100);
// unselect();
// toogleVisibility();
// gotoLayer(getActiveLayerIndex() + 1);
// toogleVisibility();
// gotoMask();
// nameLayer("Gegner " + doc.activeLayer.name);

// emptyProtocoll();

// function unselect() {
//     var desc44 = new ActionDescriptor();
//     var ref29 = new ActionReference();
//     ref29.putProperty( sTID('channel'), sTID('selection') );
//     desc44.putReference( sTID('null'), ref29 );
//     desc44.putEnumerated( sTID('to'), sTID('ordinal'), sTID('none') );
//     executeAction( sTID('set'), desc44, DialogModes.NO );
// }

move2raus();

function move2raus() {
    var desc1992 = new ActionDescriptor();
    var ref1301 = new ActionReference();
    ref1301.putEnumerated(sTID('layer'), sTID('ordinal'), sTID('targetEnum'));
    desc1992.putReference(sTID('null'), ref1301);
    var ref1302 = new ActionReference();
    ref1302.putIndex(sTID('layer'), 21);
    desc1992.putReference(sTID('to'), ref1302);
    desc1992.putBoolean(sTID('adjustment'), false);
    desc1992.putInteger(sTID('version'), 5);
    var list249 = new ActionList();
    list249.putInteger(103);
    desc1992.putList(sTID('layerID'), list249);
    executeAction(sTID('move'), desc1992, DialogModes.NO);
}

/* !  Comment */