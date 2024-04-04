function dialog_createDialog(o,t){var a=new Window("dialog",o);a.add("group").add("statictext",void 0,t);for(var r=a.add("group"),d=Array.prototype.slice.call(arguments,2),n=0
// Hole die restlichen Argumente als Array von Schaltflächen
;n<d.length;n++){var i=d[n];r.add("button",void 0,i).onClick=function(o){return function(){a.close(o)}}(n)}return a}