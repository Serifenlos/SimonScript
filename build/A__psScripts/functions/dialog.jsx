function dialog_chooseLayer(){var e=doc.activeLayer.name,n=new Window("dialog"),o=n.add("button",void 0,"Sichtbarkeit",{name:"ein/aus"}),a=n.add("button",void 0,"rauf",{name:"rauf"}),t=n.add("button",void 0,"alle",{name:"alle"}),i=n.add("button",void 0,"runter",{name:"runter"}),c=n.add("button",void 0,"reset",{name:"reset"}),d=n.add("button",void 0,"Abbruch",{name:"Abbruch"}),l=n.add("button",void 0,"RUN",{name:"run"});o.onClick=function(){toogleVisibility()},a.onClick=function(){selectLayer("up",1)},i.onClick=function(){selectLayer("down",1)},t.onClick=function(){hasBackground()&&(gotoLayer(0),nameLayer("HG")),selectLayers("selectAllLayers")},c.onClick=function(){selectLayers("selectNoLayers"),gotoLayer(e)},d.onClick=function(){cancel=1,n.close()},l.onClick=function(){n.close()},n.show()}