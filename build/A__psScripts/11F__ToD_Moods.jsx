/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>[11F] TextilOnDemand Moods</name>
<about>ToD | By Simon Adrian | http://www.SimonAdrian.de</about>
<category>11Freunde</category>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
// include "../../build/A__psScripts/functions/basic.jsx";
// include "../../build/A__psScripts/functions/pref.jsx";
// include "../../build/A__psScripts/functions/utils.jsx";
// include "../../build/A__psScripts/functions/LUT-dodge.jsx";
// include "../../build/A__psScripts/functions/LUT-burn.jsx";
// include "../../build/A__psScripts/functions/dialog.jsx";
// include "../../build/A__psScripts/functions/ready.jsx";
// include "../../build/A__psScripts/functions/view.jsx";
// include "../../build/A__psScripts/functions/layer.jsx";
// include "../../build/A__psScripts/functions/save.jsx";
// include "../../build/A__psScripts/functions/loopFiles.jsx";
// include "../../build/A__psScripts/functions/meta.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/simon/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";
// color2csv()
function color2csv(){var e=app.foregroundColor,t=[e.hsb.hue.toFixed(2),e.hsb.saturation.toFixed(2),e.hsb.brightness.toFixed(2)],r="/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/ToD_farben.csv",a=File(r);a.exists||(a=new File(r));var n=File(r);n.open("a",void 0,void 0),""!==n&&n.writeln(t)}
// color_name = [h, s, b, "color_name", heather or not]
// Whites
const natural_raw=[44.12,13.82,96.47,"natural_raw",0],vintage_white=[34.27,2.95,92.94,"vintage_white",0],white=[0,0,96.47,"white",0],anthracite=[0,0,34.9,"anthracite",0],atlantic_blue=[197.47,41.8,74.12,"atlantic_blue",0],azur=[217.4,47.82,63.14,"azur",0],black=[0,0,19.22,"black",0],bottle_green=[137.36,15.38,34.14,"bottle_green",0],bright_blue=[217.4,47.82,63.14,"bright_blue",0],bright_orange=[24.66,80.72,87.45,"bright_orange",0],bright_red=[357.39,81.17,66.67,"bright_red",0],british_khaki=[45,38.1,32.94,"british_khaki",0],burgundy=[351.65,41.86,33.72,"burgundy",0],camel=[32.83,32.51,63.92,"camel",0],candy_pink=[18.73,6.53,96.08,"candy_pink",0],canyon_pink=[353.45,26.7,80.78,"canyon_pink",0],caramel=[20.25,55.17,56.86,"caramel",0],caribbean_blue=[173.34,12.85,82.35,"caribbean_blue",0],carmine_red=[357.11,57.87,84.7,"carmine_red",0],cotton_pink=[343.64,20.71,92.75,"cotton_pink",0],deep_chocolate=[0,20.36,21.18,"deep_chocolate",0],desert_dust=[32.51,13.3,71.88,"desert_dust",0],dusty_mint=[129.67,17.41,69.8,"dusty_mint",0],french_navy=[240,25.45,21.57,"french_navy",0],fresh_green=[110.76,43.91,58.04,"fresh_green",0],geyser_green=[151.66,16.59,85.1,"geyser_green",0],glazed_green=[184.13,44.62,25.49,"glazed_green",0],golden_yellow=[52.34,78.01,94.51,"golden_yellow",0],hay_yellow=[54.22,77.58,68.23,"hay_yellow",0],india_ink_grey=[230.54,21.11,35.29,"india_ink_grey",0],jojoba=[47.56,37.27,86.27,"jojoba",0],khaki=[60,10.74,34.55,"khaki",0],lava_grey=[233.33,13.95,50.59,"lava_grey",0],lavender_dawn=[257.99,20.83,75.29,"lavender_dawn",0],light_khaki=[64.27,10.77,50.98,"light_khaki",0],lilac_petal=[330.21,12.98,60.71,"lilac_petal",0],majorelle_blue=[222.15,70.47,41.18,"majorelle_blue",0],mauve=[339.42,37.23,73.72,"mauve",0],melon_code=[22.08,75.46,84.7,"melon_code",0],moss_green=[62.37,62.81,47.45,"moss_green",0],mushroom=[24.44,45.5,69.8,"mushroom",0],ocean_depth=[195.52,50.43,45.1,"ocean_depth",0],ochre=[38.06,74.03,70.98,"ochre",0],pink_punch=[336.21,59.04,73.72,"pink_punch",0],plum=[261.61,25.78,38.04,"plum",0],raspberry=[335.29,59.65,67.06,"raspberry",0],red=[350.1,63.64,56.08,"red",0],roasted_orange=[29.55,76.14,69.02,"roasted_orange",0],rose_clay=[13.47,43.55,88.24,"rose_clay",0],royal_blue=[229.2,68.02,57.65,"royal_blue",0],sage=[50.9,16.75,77.26,"sage",0],scale_green=[70.51,63.72,84.31,"scale_green",0],serene_blue=[239,9.15,77.88,"serene_blue",0],sky_blue=[215.75,21.96,83.92,"sky_blue",0],spectra_yellow=[40.95,65.19,89.02,"spectra_yellow",0],stargazer=[215.55,25.72,41.18,"stargazer",0],stem_green=[67.15,13.55,94.91,"stem_green",0],sunset_orange=[10.13,37.2,81.18,"sunset_orange",0],tangerine=[6.1,82.71,83.92,"tangerine",0],teal_monstera=[168.45,17.93,56.86,"teal_monstera",0],varsity_green=[153.19,41.96,43.92,"varsity_green",0],cream_heather_grey=[19.95,1.3,90.19,"cream_heather_grey",1],cream_heather_pink=[10.01,8.04,87.84,"cream_heather_pink",1],dark_heather_blue=[222.85,22.82,36.08,"dark_heather_blue",1],dark_heather_grey=[0,0,22.35,"dark_heather_grey",1],dark_heather_indigo=[226.82,33.33,48.24,"dark_heather_indigo",1],heather_grey=[0,0,82.75,"heather_grey",1],heather_ice_blue=[202.5,7.92,79.21,"heather_ice_blue",1],heather_sand=[31.3,25.56,70.59,"heather_sand",1],mid_heather_blue=[220.79,32.25,60.78,"mid_heather_blue",1],mid_heather_green=[143.58,17.72,61.96,"mid_heather_green",1],mid_heather_grey=[251.96,2.75,71.37,"mid_heather_grey",1],mid_heather_khaki=[64.02,14.57,40.39,"mid_heather_khaki",1],black_heather_blue=[224.44,36.99,28.63,"black_heather_blue",1],black_heather_orange=[20.29,76.4,69.8,"black_heather_orange",1],dark_heather_denim=[212.98,29.41,26.67,"dark_heather_denim",1],ecru_neppy_mandarine=[31.99,6.33,92.94,"ecru_neppy_mandarine",1],heather_cranberry=[355.77,34.3,81.18,"heather_cranberry",1],heather_eucalyptus=[187.75,20.94,58.04,"heather_eucalyptus",1],heather_grape_red=[339.99,26.86,26.28,"heather_grape_red",1],heather_neppy_burgundy=[355.24,74.81,52.94,"heather_neppy_burgundy",1],heather_neppy_lemon_grass=[52.36,65.08,66.28,"heather_neppy_lemon_grass",1],heather_neppy_pink=[25.86,24.68,92.16,"heather_neppy_pink",1],heather_snow_mid_blue=[230.67,41.66,42.35,"heather_snow_mid_blue",1],mid_heather_red=[358.4,41.66,70.59,"mid_heather_red",1],slub_heather_grey=[220.05,1.74,67.45,"slub_heather_grey",1],wooden_heather=[34.29,11.54,71.37,"wooden_heather",1],spinner__color=[white,black,canyon_pink,heather_grey],mini_cruiser__color=[white,natural_raw,black,caramel,ochre,fresh_green,stem_green,teal_monstera,serene_blue,royal_blue,french_navy,burgundy,cotton_pink,bright_red,heather_grey,black_heather_blue,heather_cranberry],mini_changer__color=[white,natural_raw,black,caramel,ochre,varsity_green,british_khaki,teal_monstera,serene_blue,royal_blue,french_navy,raspberry,lilac_petal,bright_orange,bright_red,heather_grey,cream_heather_pink],cruiser__color=[white,natural_raw,black,desert_dust,deep_chocolate,caramel,mushroom,ochre,hay_yellow,varsity_green,glazed_green,moss_green,british_khaki,sage,stem_green,teal_monstera,serene_blue,sky_blue,bright_blue,royal_blue,majorelle_blue,india_ink_grey,french_navy,carmine_red,burgundy,lilac_petal,mauve,candy_pink,cotton_pink,canyon_pink,rose_clay,melon_code,tangerine,bright_red,sunset_orange,scale_green,roasted_orange,dark_heather_grey,mid_heather_grey,heather_grey,mid_heather_khaki,mid_heather_green,mid_heather_red,wooden_heather,heather_snow_mid_blue,black_heather_blue,heather_neppy_burgundy],changer__color=[white,natural_raw,black,camel,deep_chocolate,caramel,mushroom,ochre,golden_yellow,hay_yellow,varsity_green,bottle_green,moss_green,british_khaki,stem_green,teal_monstera,serene_blue,sky_blue,majorelle_blue,india_ink_grey,lava_grey,french_navy,burgundy,lavender_dawn,lilac_petal,mauve,cotton_pink,canyon_pink,tangerine,bright_red,roasted_orange,heather_grey,mid_heather_khaki,mid_heather_green,dark_heather_blue,heather_neppy_lemon_grass,heather_neppy_burgundy],trigger__color=[black,anthracite,light_khaki,caribbean_blue,french_navy,pink_punch,red,burgundy,lavender_dawn,candy_pink,dark_heather_grey,heather_grey,cream_heather_grey,heather_sand,mid_heather_khaki,mid_heather_blue,mid_heather_red,cream_heather_pink,heather_eucalyptus,black_heather_blue,heather_grape_red],mini_creator__color=[white,natural_raw,black,anthracite,caramel,ochre,golden_yellow,geyser_green,fresh_green,sage,stem_green,caribbean_blue,teal_monstera,ocean_depth,serene_blue,sky_blue,bright_blue,azur,royal_blue,majorelle_blue,french_navy,raspberry,pink_punch,carmine_red,red,burgundy,lavender_dawn,lilac_petal,mauve,candy_pink,cotton_pink,rose_clay,melon_code,bright_orange,tangerine,dark_heather_grey,heather_grey,cream_heather_grey,mid_heather_green,heather_ice_blue,mid_heather_blue,mid_heather_red,cream_heather_pink,black_heather_blue],sparker__color=[white,natural_raw,black,desert_dust,camel,deep_chocolate,british_khaki,sage,royal_blue,lava_grey,french_navy,burgundy,bright_red,heather_grey,slub_heather_grey,black_heather_blue,dark_heather_denim],fuser__color=[white,natural_raw,black,caramel,stem_green,serene_blue,french_navy,red,burgundy,lilac_petal,rose_clay,dark_heather_grey,heather_grey],expresser__color=[white,vintage_white,natural_raw,black,anthracite,deep_chocolate,caramel,ochre,spectra_yellow,golden_yellow,hay_yellow,geyser_green,fresh_green,varsity_green,glazed_green,british_khaki,sage,caribbean_blue,ocean_depth,stargazer,sky_blue,bright_blue,azur,royal_blue,majorelle_blue,lava_grey,french_navy,raspberry,pink_punch,carmine_red,red,burgundy,plum,lavender_dawn,mauve,candy_pink,cotton_pink,canyon_pink,rose_clay,melon_code,bright_orange,roasted_orange,dark_heather_grey,mid_heather_grey,heather_grey,cream_heather_grey,heather_sand,mid_heather_khaki,mid_heather_green,mid_heather_blue,cream_heather_pink,wooden_heather,heather_neppy_lemon_grass,heather_snow_mid_blue,black_heather_blue,dark_heather_denim,heather_cranberry,heather_neppy_burgundy,heather_grape_red,ecru_neppy_mandarine,heather_neppy_pink,black_heather_orange],motiv__11F_Logo_schwarz=["11FREUNDE_Logo_(Druck_SCHWARZ)","blanko"],motiv__11F_Logo_weiss=["11FREUNDE_Logo_(Druck_WEISS)","blanko"],motiv__11_Kasten_orange=["11Kasten_Logo_(Druck_ORANGE)","blanko"],motiv__11_Kasten_weiss=["11Kasten_Logo_(Druck_WEISS)","blanko"],motiv__11_Kasten_schwarz=["11Kasten_Logo_(Druck_SCHWARZ)","blanko"],motiv__Auswartsfans_schwarz=["Auswärtsfans_(Druck_SchwarzRot)","blanko"],motiv__Auswartsfans_weiss=["Auswärtsfans_(Druck_WeißRot)","blanko"],motiv__Fussball_ist_bunt_schwarz=["Fußball_ist_bunt_(Druck_Schwarz)","blanko"],motiv__Fussball_ist_bunt_weiss=["Fußball_ist_bunt_(Druck_WEISS)","blanko"],motiv__11F_Logo_beidseitig_schwarz=["FREUNDE_im_Rücken_(Druck_SCHWARZ)_vorne","FREUNDE_im_Rücken_(Druck_SCHWARZ)_hinten"],motiv__11F_Logo_beidseitig_weiss=["FREUNDE_im_Rücken_(Druck_WEISS)_vorne","FREUNDE_im_Rücken_(Druck_WEISS)_hinten"],motiv__11F_innen_schwarz=["11FREUNDINNEN_(Druck_SCHWARZ)","blanko"],motiv__11F_innen_weiss=["11FREUNDINNEN_(Druck_WEISS)","blanko"],motiv__11F_innen_doppelpunkt_schwarz=["11FREUND_doppelpunkt_INNEN_(Druck_SCHWARZ)","blanko"],motiv__11F_innen_doppelpunkt_weiss=["11FREUND_doppelpunkt_INNEN_(Druck_WEISS)","blanko"],motiv__Nohler=["NÖHLER","blanko"],motiv__BrigadeHS=["Referees_Welcome_vorne","Referees_Welcome_hinten"],motiv__Brehme_schwarz=["Scheisse_am_Fuß_(Druck_SCHWARZ)","blanko"],motiv__Brehme_weiss=["Scheisse_am_Fuß_(Druck_WEISS)","blanko"],motiv_HoG_AD10S=["HoG_AD10S","blanko"],motiv_HoG_Black_Lives_Matter=["HoG_Black_Lives_Matter","blanko"],motiv_HoG_Black_Power=["HoG_Black_Power","blanko"],motiv_HoG_Der_Grantler=["HoG_Der_Grantler","blanko"],motiv_HoG_Granate_von_Giesing=["HoG_Granate_von_Giesing","blanko"],motiv_HoG_Kap=["HoG_Kap","blanko"],motiv_HoG_Lorant_auf_Lunge=["HoG_Lorant_auf_Lunge","blanko"],motiv_HoG_Meister_Marschall=["HoG_Meister_Marschall","blanko"],motiv_HoG_Stumpen_Rudi=["HoG_Stumpen_Rudi","blanko"],motiv_HoG_Tennis_Punk=["HoG_Tennis_Punk","blanko"],motiv_HoG_Zaubermaus=["HoG_Zaubermaus","blanko"],motiv__blanko=["blanko","blanko"],motiv_Clash_11F_Hoodie_grau=["Clash_11Freunde_Hoodie_grau_vorne","Clash_11Freunde_Hoodie_grau_hinten"],motiv_Clash_11F_Hoodie_schwarz=["Clash_11Freunde_Hoodie_schwarz_vorne","Clash_11Freunde_Hoodie_schwarz_hinten"],motiv_Clash_11F_Shirt_grau=["Clash_11Freunde_Shirt_grau_vorne","blanko"],motiv_Clash_11F_Shirt_schwarz=["Clash_11Freunde_Shirt_schwarz_vorne","blanko"],motiv_Clash_Gladbach_Hoodie=["Clash_Gladbach_Hoodie_vorne","Clash_Gladbach_Hoodie_hinten"],motiv_Clash_Gladbach_Shirt=["Clash_Gladbach_Shirt_vorne","blanko"],motiv_Clash_Dortmund_Hoodie=["Clash_Dortmund_Hoodie_vorne","Clash_Dortmund_Hoodie_hinten"],motiv_Clash_Dortmund_Shirt=["Clash_Dortmund_Shirt_vorne","blanko"],motiv_FootballBloodyHell_weiss=["Football_Bloody_Hell_(Druck_WEISS)","blanko"],motiv_FootballBloodyHell_schwarz=["Football_Bloody_Hell_(Druck_SCHWARZ)","blanko"],motiv_HoG_Peace_french_navy=["blanko","HoG_WM_PEACE_(textil_french_navy)"],motiv_HoG_Peace_grau=["blanko","HoG_WM_PEACE_(textil_grau)"],motiv_HoG_Peace_royal_blue=["blanko","HoG_WM_PEACE_(textil_royal_blue)"];var motive=["11-Kasten_orange","11-Kasten_weiss","11F-innen_doppelpunkt_schwarz","11F-innen_doppelpunkt_weiss","11F-innen_schwarz","11F-innen_weiss","11F-Logo_beidseitig-hinten_schwarz","11F-Logo_beidseitig-hinten_weiss","11F-Logo_beidseitig-vorne_schwarz","11F-Logo_beidseitig-vorne_weiss","11F-Logo_schwarz","11F-Logo_weiss","Auswärtsfans_schwarz","Auswärtsfans_weiss","Brehme_schwarz","Brehme_weiss","BrigadeHS_vorne","BrigadeHS-hinten_schwarz","BrigadeHS-hinten_weiss","Fussball-ist-bunt_schwarz","Fussball-ist-bunt_weiss","IKAUZ_weiss","Nöhler","blanko"];function loopFarben(){protocol_delSnapshop();for(var e=0;e<farbe.length;e++)doc.suspendHistory("ToD "+farbe[e][3],"ToD_colorLayer("+e+")"),protocol_createSnapshot("ToD "+farbe[e][3],"mergeLayersNew")}function ToD_colorLayer(e){gotoLayer("heather_texture"),0==farbe[e][4]?hide():makeVisible();for(var t=0;t<layer_getIDXbyString("Farbe").length;t++){gotoLayer(layer_getIDXbyString("Farbe")[t]),layer_solidColorHSB_change(farbe[e][0],farbe[e][1],farbe[e][2]),nameLayer(layer_getName(getActiveLayerIndex()).replace(/\[.*\]/g,"["+farbe[e][3]+"]"));var r=GetFileNameOnly(doc.name).replace(/(__RGB)/g,"");gotoLayer(r+"__grau"),ToD_curves_shirt_modify(0,.62*farbe[e][2],128,128,192,192,255,255)}}function loopMotive(){protocol_delSnapshop(),layer_selectByColor("orange");for(var e=0;e<motive.length;e++)doc.suspendHistory("ToD "+motive[e],'ToD_motivChange("'+motive[e]+'")'),protocol_createSnapshot("ToD "+motive[e],"mergeLayersNew")}function ToD_motivChange(e){smartObject_placeFile(new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/"+e+".psd"))}
// REAL COLLECTION
var collection=[
//// 11F Logo
[["T_Shirt"],[black,rose_clay],[motiv__11F_Logo_weiss]],[["T_Shirt"],[white,heather_grey],[motiv__11F_Logo_schwarz]],[["Shirtkleid"],[white,heather_grey],[motiv__11F_Logo_schwarz]],[["Shirtkleid"],[black],[motiv__11F_Logo_weiss]],[["Frauen_Shirt"],[caramel],[motiv__11F_Logo_schwarz]],[["Frauen_Shirt"],[dark_heather_grey,sky_blue,cream_heather_grey],[motiv__11F_Logo_weiss]],
//// 11 Kasten
[["Hoodie"],[natural_raw,white],[motiv__11_Kasten_orange]],[["T_Shirt"],[black,rose_clay,heather_grey],[motiv__11_Kasten_weiss]],[["T_Shirt"],[white],[motiv__11_Kasten_orange]],[["Sweatshirt"],[black,camel,black_heather_blue,french_navy,heather_grey,lava_grey],[motiv__11_Kasten_weiss]],[["Kinder_Shirt"],[white],[motiv__11_Kasten_orange]],[["Kinder_Shirt"],[black,burgundy,geyser_green,ocean_depth,tangerine],[motiv__11_Kasten_weiss]],[["Kinder_Sweatshirt"],[natural_raw],[motiv__11_Kasten_orange]],[["Kinder_Sweatshirt"],[bright_red,varsity_green,ochre],[motiv__11_Kasten_weiss]],
//// Auswährtsfans
[["T_Shirt"],[white],[motiv__Auswartsfans_schwarz]],[["T_Shirt"],[black],[motiv__Auswartsfans_weiss]],[["Frauen_Shirt"],[white],[motiv__Auswartsfans_schwarz]],[["Frauen_Shirt"],[black],[motiv__Auswartsfans_weiss]],[["Shirtkleid"],[white],[motiv__Auswartsfans_schwarz]],[["Shirtkleid"],[black],[motiv__Auswartsfans_weiss]],[["Frauen_Hoodie"],[cream_heather_grey],[motiv__Auswartsfans_schwarz]],[["Frauen_Hoodie"],[black],[motiv__Auswartsfans_weiss]],[["Hoodie"],[white],[motiv__Auswartsfans_schwarz]],[["Hoodie"],[black],[motiv__Auswartsfans_weiss]],[["Sweatshirt"],[white],[motiv__Auswartsfans_schwarz]],[["Sweatshirt"],[black],[motiv__Auswartsfans_weiss]],
//// Clash 11Freunde
[["Hoodie"],[black],[motiv_Clash_11F_Hoodie_schwarz]],[["Hoodie"],[heather_grey],[motiv_Clash_11F_Hoodie_grau]],[["T_Shirt"],[black],[motiv_Clash_11F_Shirt_schwarz]],[["T_Shirt"],[heather_grey],[motiv_Clash_11F_Shirt_grau]],
//// Clash Gladbach
[["Hoodie"],[black],[motiv_Clash_Gladbach_Hoodie]],[["T_Shirt"],[black],[motiv_Clash_Gladbach_Shirt]],
//// Clash Dortmund
[["Hoodie"],[heather_grey],[motiv_Clash_Dortmund_Hoodie]],[["T_Shirt"],[heather_grey],[motiv_Clash_Dortmund_Shirt]],
//// Fussball ist bunt
[["T_Shirt"],[black],[motiv__Fussball_ist_bunt_weiss]],[["T_Shirt"],[white,heather_grey],[motiv__Fussball_ist_bunt_schwarz]],[["Baby_Body"],[white],[motiv__Fussball_ist_bunt_schwarz]],[["Sweatshirt"],[french_navy,lava_grey],[motiv__Fussball_ist_bunt_weiss]],[["Sweatshirt"],[heather_grey],[motiv__Fussball_ist_bunt_schwarz]],[["Frauen_Shirt"],[cream_heather_grey,white],[motiv__Fussball_ist_bunt_schwarz]],[["Frauen_Shirt"],[black,caramel,sky_blue],[motiv__Fussball_ist_bunt_weiss]],[["Hoodie"],[heather_grey,white,carmine_red],[motiv__Fussball_ist_bunt_schwarz]],[["Hoodie"],[black,bright_blue,desert_dust,glazed_green,india_ink_grey],[motiv__Fussball_ist_bunt_weiss]],[["Kinder_Sweatshirt"],// textil hat keine Fotos
[natural_raw],[motiv__Fussball_ist_bunt_schwarz]],[["Kinder_Sweatshirt"],// textil hat keine Fotos
[black,bright_orange,varsity_green],[motiv__Fussball_ist_bunt_weiss]],
//// Freunde im Rücken
[["Hoodie"],[natural_raw,heather_grey,ochre],[motiv__11F_Logo_beidseitig_schwarz]],[["Hoodie"],[bright_blue,burgundy,carmine_red,glazed_green,india_ink_grey],[motiv__11F_Logo_beidseitig_weiss]],[["Frauen_Hoodie"],[heather_sand],[motiv__11F_Logo_beidseitig_schwarz]],[["Frauen_Hoodie"],[caribbean_blue,black,heather_grey],[motiv__11F_Logo_beidseitig_weiss]],
//// Nöhler
[["Kinder_Shirt"],[black],[motiv__Nohler]],[["Kinder_Hoodie"],[black],[motiv__Nohler]],[["Kinder_Sweatshirt"],[black],[motiv__Nohler]],
//// 11Freundinnen
[["T_Shirt"],[white,heather_grey],[motiv__11F_innen_schwarz]],[["T_Shirt"],[black,rose_clay],[motiv__11F_innen_weiss]],[["Sweatshirt"],[camel,heather_grey],[motiv__11F_innen_schwarz]],[["Sweatshirt"],[black,french_navy,lava_grey],[motiv__11F_innen_weiss]],[["Hoodie"],[heather_grey,bright_red,desert_dust,natural_raw,ochre,white],[motiv__11F_innen_schwarz]],[["Hoodie"],[black,bright_blue,burgundy,carmine_red,dark_heather_grey,glazed_green,india_ink_grey],[motiv__11F_innen_weiss]],[["Shirtkleid"],[white,heather_grey],[motiv__11F_innen_schwarz]],[["Shirtkleid"],[black],[motiv__11F_innen_weiss]],[["Frauen_Shirt"],[caramel,heather_grey,cream_heather_grey,white,sky_blue],[motiv__11F_innen_schwarz]],[["Frauen_Shirt"],[black,dark_heather_grey],[motiv__11F_innen_weiss]],[["Frauen_Hoodie"],[caribbean_blue,cream_heather_grey,heather_grey,heather_sand],[motiv__11F_innen_schwarz]],[["Frauen_Hoodie"],[black,dark_heather_grey],[motiv__11F_innen_weiss]],
//// 11Freundinnen Doppelpunkt
[["Sweatshirt"],[camel,heather_grey],[motiv__11F_innen_doppelpunkt_schwarz]],[["Sweatshirt"],[black,french_navy,lava_grey,caramel],[motiv__11F_innen_doppelpunkt_weiss]],[["Hoodie"],[heather_grey,desert_dust,natural_raw],[motiv__11F_innen_doppelpunkt_schwarz]],[["Hoodie"],[burgundy],[motiv__11F_innen_doppelpunkt_weiss]],[["Shirtkleid"],[white,heather_grey],[motiv__11F_innen_doppelpunkt_schwarz]],[["Shirtkleid"],[black],[motiv__11F_innen_doppelpunkt_weiss]],[["Frauen_Hoodie"],[heather_sand,heather_grey,caribbean_blue,cream_heather_grey],[motiv__11F_innen_doppelpunkt_schwarz]],[["Frauen_Hoodie"],[black,dark_heather_grey],[motiv__11F_innen_doppelpunkt_weiss]],
//// 11Freundinnen Doppelpunkt
[["Sweatshirt"],[black],[motiv__BrigadeHS]],[["Hoodie"],[black],[motiv__BrigadeHS]],[["T_Shirt"],[black],[motiv__BrigadeHS]],[["Shirtkleid"],[black],[motiv__BrigadeHS]],[["Frauen_Shirt"],[black],[motiv__BrigadeHS]],[["Frauen_Hoodie"],[black],[motiv__BrigadeHS]],
//// Brehme
[["T_Shirt"],[white,heather_grey,rose_clay],[motiv__Brehme_schwarz]],[["T_Shirt"],[black],[motiv__Brehme_weiss]],[["Sweatshirt"],[camel,heather_grey,lava_grey,white,caramel],[motiv__Brehme_schwarz]],[["Sweatshirt"],[black,dark_heather_blue,french_navy],[motiv__Brehme_weiss]],[["Hoodie"],[bright_blue,bright_red,desert_dust,heather_grey,natural_raw,ochre,white],[motiv__Brehme_schwarz]],[["Hoodie"],[black,burgundy,dark_heather_grey,glazed_green,india_ink_grey],[motiv__Brehme_weiss]]];
// Collection 2022-11
// TEST COLLECTION
// var collection = [
//     [
//         ["Baby_Body"],
//         [white],
//         [motiv__Fussball_ist_bunt_schwarz]
//     ]
// ]
// var Keys = ["Baby_Body"];
// meta_setKeywords(thisFile, Keys)
// var Keys = ["keyword1", "keyword2", "keyword3"];
// var file = File(Folder.desktop + "/zz.jpg");
// if (file.exists) setKeywords(file, Keys);
function schnell(){
// if (array_contains(meta_getKeywords(doc.fullName), "Hoodie")) {
// app.open(doc_file);
// var doc = app.activeDocument;
// alert(app.activeDocument.fullName)
// layer_selectByColor("orange");
// if (array_contains(meta_getKeywords(doc.fullName), "vorne")) {
//     var motiv = "Clash_11Freunde_Hoodie_grau_vorne";
// } else {
//     var motiv = "Clash_11Freunde_Hoodie_grau_hinten";
// }
// // var motiv = "Clash_11Freunde_Hoodie_grau_vorne";
//     var motiv = "blanko";
//     var file_Motiv_X = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/" + motiv + ".psd");
//     smartObject_placeFile(file_Motiv_X);
//     var farbe = black;
//     // gotoLayer("heather_texture");
//     if (farbe[4] == 0) {
//         hide("heather_texture")
//     } else {
//         makeVisible("heather_texture")
//     }
//     for (var b = 0; b < layer_getIDXbyString("Farbe").length; b++) {
//         gotoLayer(layer_getIDXbyString("Farbe")[b])
//         layer_solidColorHSB_change(farbe[0], farbe[1], farbe[2]);
//         nameLayer(layer_getName(getActiveLayerIndex()).replace(/\[.*\]/g, "[" + farbe[3] + "]"));
//     };
//     var name_base = GetFileNameOnly(doc.name).replace(/(__RGB)/g, "");
//     gotoLayer(name_base + "__grau");
//     var schatten_korr = farbe[2] - 80;
//     if (schatten_korr >= 0) {
//         schatten_korr = schatten_korr * 1;
//     } else {
//         schatten_korr = 0;
//     }
//     ToD_curves_shirt_modify(0, schatten_korr, 128, 128, 192, 192, 255, 255);
//     // ToD_curves_shirt_modify(0, farbe[2] * 0.62, 128, 128, 192, 192, 255, 255);
//     layer_selectByColor("orange");
//     // doc.save();
//     // doc.close(SaveOptions.SAVECHANGES);
//     // }
gotoLayer("heather_texture"),makeVisible(),
// var heather_texture= new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Heather_Textur/heather_texture_v2.jpg");
smartObject_placeFile(new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Heather_Textur/heather_texture_v2.jpg")),nameLayer("heather_texture");
// layer_getMaskBounds("Textil");
// gotoLayer("heather_texture");
// var r = app.preferences.rulerUnits;
// app.preferences.rulerUnits = Units.PIXELS;
// var bounds = layer_getMaskBounds("Textil");
// ToD_transform(parseFloat(bounds[0]), parseFloat(bounds[1]), parseFloat(bounds[2]), parseFloat(bounds[3]));
// // alert(layer_getMaskBounds("Textil"))
// $.writeln("Bounds " + bounds)
// app.preferences.rulerUnits = r;
// =======================================================
var e=stringIDToTypeID("transform"),t=new ActionDescriptor,r=stringIDToTypeID("freeTransformCenterState"),a=stringIDToTypeID("quadCenterState"),n=stringIDToTypeID("QCSAverage");t.putEnumerated(r,a,n);var o=stringIDToTypeID("offset"),_=new ActionDescriptor,i=stringIDToTypeID("horizontal"),s=stringIDToTypeID("pixelsUnit");_.putUnitDouble(i,s,0);var l=stringIDToTypeID("vertical");s=stringIDToTypeID("pixelsUnit");_.putUnitDouble(l,s,0);o=stringIDToTypeID("offset");t.putObject(o,o,_),executeAction(e,t,DialogModes.ALL),hide("heather_texture"),layer_selectByColor("orange"),doc.close(SaveOptions.SAVECHANGES)}function correctRGB(){var e=[],t=Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");if(null!=t)for(var r in e=function e(t,r){for(var a=Folder(t).getFiles(),n=0;n<a.length;n++){var o=a[n];o instanceof File||(r.push(Folder(o)),e(o.toString(),r))}return r}(t,e),e.unshift(t),e)if(files=[],
// files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
files=e[r].getFiles(/.+\.(tif|psd)$/i),!(files.length<1))for(var a in files){var n=files[a],o=new File(n);try{
// Motiv auf 86% Deckkraft ????
// oder hab ich das mit der Graditionskurve geregelt ????
// fixMask(layer_getIDXbyString("Maske")[0], 1);
// moveLayer("heather_texture", "Farbecheck [init]", "up");
// hide("heather_texture");
// hide("Farbecheck [init]");
// layer_selectByColor("orange");
// if (array_contains(meta_getKeywords(thisFile), "Hoodie") && array_contains(meta_getKeywords(thisFile), "vorne")) {
if(!array_contains(meta_getKeywords(n),"Frauen_Hoodie")){app.open(o);var _=app.activeDocument;layer_selectByColor("orange");
// if (array_contains(meta_getKeywords(thisFile), "vorne")) {
//     var motiv = "Clash_11Freunde_Hoodie_grau_vorne";
// } else {
//     var motiv = "Clash_11Freunde_Hoodie_grau_hinten";
// }
// var motiv = "Clash_11Freunde_Hoodie_grau_hinten";
// var file_Motiv_X = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/" + motiv + ".psd");
// smartObject_placeFile(file_Motiv_X);
var i=white;0==i[4]?hide("heather_texture"):makeVisible("heather_texture");for(var s=0;s<layer_getIDXbyString("Farbe").length;s++)gotoLayer(layer_getIDXbyString("Farbe")[s]),layer_solidColorHSB_change(i[0],i[1],i[2]),nameLayer(layer_getName(getActiveLayerIndex()).replace(/\[.*\]/g,"["+i[3]+"]"));var l=GetFileNameOnly(app.activeDocument.name).replace(/(__RGB)/g,"");gotoLayer(layer_getIDXbyString(l+"__grau")[0]);
// ToD_curves_shirt_modify(0, farbe[2] * 0.62, 128, 128, 192, 192, 255, 255);
// ToD_curves_shirt_modify(0, 0, 128, 128, 192, 192, 255, 255);
var c=i[2]-80;c>=0?c*=1:c=0,ToD_curves_shirt_modify(0,c,128,128,192,192,255,255),layer_selectByColor("orange"),_.close(SaveOptions.SAVECHANGES)}}catch(e){$.writeln("Error: "+e)}}}
// motiv__11_Kasten, motiv__11F_innen_doppelpunkt, motiv__11F_innen, motiv__11F_Logo_beidseitig, motiv__11F_Logo, motiv__Auswärtsfans, motiv__Brehme, motiv__BrigadeHS, motiv__Fussball_ist_bunt, motiv__IKAUZ, motiv__Nohler
// ~/Arbeit/11Freunde/TextilOnDemand/Test/test2/1_4A1A0038__RGB.psd
// 00 - Spinner
// 0100 - 0
// 0101 - 0
// 0102 - 96.47
// 0103 - white
// 0104 - 0
// 0110 - 0
// 0111 - 0
// 0112 - 19.22
// 0113 - black
// 0114 - 0
// 0200 - 11-Kasten_orange
// 0201 - 11-Kasten_weiss
// 0202 - false
// 0203 - false
// 0210 - 11F-innen_doppelpunkt_schwarz
// 0211 - 11F-innen_doppelpunkt_weiss
// 0212 - false
// 0213 - false
// 10 - Fuser
// 1100 - 0
// 1101 - 0
// 1102 - 22.35
// 1103 - dark_heather_grey
// 1104 - 1
// 1110 - 0
// 1111 - 0
// 1112 - 82.75
// 1113 - heather_grey
// 1114 - 1
// 1200 - IKAUZ_weiss
// 1201 - false
// 1202 - false
// 1203 - false
// 1210 - Brehme_schwarz
// 1211 - Brehme_weiss
// 1212 - false
// 1213 - false
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// correctRGB();
// schnell();
// color2csv()
// loopMotive();
// ToD_exportMotive();
// loopFarben();
// createRGB();
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
function run(e){var r,a,n,o,_,i=[],s=Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");if(null!=s){for(var l in(i=FindAllFolders(s,i)).unshift(s),time_start(),$.writeln("Start: "+start),i)if(files=[],
// files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
files=i[l].getFiles(/.+\RGB.psd$/i),!(files.length<1))for(var c in files){var u=files[c],h=new File(u);
// $.writeln("GET " + decodeURIComponent(thisFile));
try{for(l=0;l<e.length;l++){
// $.writeln(a + " - " + x[a]);
for(c=0;c<e[l].length;c++){1==e[l][0].length&&array_contains(meta_getKeywords(u),e[l][0][0])&&app.open(h);
// if (documents.length != 0) {
try{for(var p=0;p<e[l][c].length;p++)
// $.writeln("PROCESS " + name_base)
for(
// $.writeln(a + "-" + b + "-" + c + " - " + x[a][b][c])
var d=GetFileNameOnly(app.activeDocument.name).replace(/(__RGB)/g,""),m=0;m<e[l][2][p].length;m++)
// $.writeln(a + "-" + b + "-" + c + "-" + d + " - " + x[a][b][c][d] + " - Motiv");
if(e[l][2][p][m]&&(array_contains(meta_getKeywords(u),"vorne")&&m<=0||array_contains(meta_getKeywords(u),"hinten")&&m>=1)){for(g=0;g<e[l][1].length;g++){var b="";if(array_contains(meta_getKeywords(u),"vorne")&&m<=0)b="__vorne";else if(array_contains(meta_getKeywords(u),"hinten")&&m>=1)b="__hinten";_=e[l][0][0],a=e[l][2][p][m].replace("_vorne","").replace("_hinten",""),void 0!==(n=e[l][2][p][0])&&("blanko"==n&&(n=e[l][2][p][1]),o=n.replace(/(.*)(_\(.*\))/g,"$1").replace("_vorne","").replace("_hinten","").replace("_Hoodie","").replace("_Shirt","").replace("_schwarz","").replace("_grau","")),motivFarbe=n.replace("_vorne","").replace("_hinten",""),e[l][1][g][3],
// $.writeln(rohling + " -- " + motiv2 + " -- " + motiv_main + " -- " + motivFarbe + " -- " + motivDruck + " -- " + farbe2)
r=e[l][1][g][3];var y="~/Arbeit/11Freunde/TextilOnDemand/Output",v=new Folder(y+"/"+o+"/"+_+"__"+motivFarbe);
// var export_path = new Folder(export_path + "/" + x[0][3][0] + "/" + x[0][3][1]);
v.exists||v.create();
// alert(export_path)
// var export_name = x[a][0][0] + "__" + motiv2 + "__" + farbe2 + "__(" + name_base + ")";
// var export_name = x[0][3][1] + "__" + farbe2 + "__(" + name_base.replace(" ", "_") + ")";
var w=_+"__"+r+b+"__"+a+"__("+d.replace(" ","_")+")";if(!new File(v+"/"+w+".jpg").exists){layer_selectByColor("orange"),smartObject_placeFile(new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/"+e[l][2][p][m]+".psd"));for(var k=0;k<layer_getIDXbyString("Farbe").length;k++)gotoLayer(layer_getIDXbyString("Farbe")[k]),layer_solidColorHSB_change(e[l][1][g][0],e[l][1][g][1],e[l][1][g][2]);gotoLayer("heather_texture"),0==e[l][1][g][4]?hide():makeVisible(),gotoLayer(d+"__grau");
// ToD_curves_shirt_modify(0, x[a][1][g][2] * 0.62, 128, 128, 192, 192, 255, 255);
var D=e[l][1][g][2]-80;D>=0?D*=1:D=0,ToD_curves_shirt_modify(0,D,128,128,192,192,255,255),SaveForWeb("JPEG",v,w,f,f,f,t,t,255,255,255,"Meta_all_noKameraInfo",66,t,t,0),$.writeln("saved "+decodeURIComponent(v)+"/"+w);try{
// var export_path_web = export_path.replace("Output", "Output_Web");
// $.writeln("webpath "+export_path_web)
// var export_path_web = new Folder(export_path_web);
var F=new Folder(y+"_Web/"+o+"/"+_+"__"+motivFarbe);F.exists||F.create(),SaveForWeb("JPEG",F,w,50,f,f,t,t,255,255,255,"Meta_all_noKameraInfo",66,t,t,0),$.writeln("saved WEB "+decodeURIComponent(F)+"/"+w)}catch(k){
// $.writeln("Error: " + e);
}}}emptyProtocoll()}}catch(k){
// alert(e)
}}try{0!=documents.length&&app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)}catch(k){alert("error2 "+k)}}}catch(k){alert("error "+k)}}
// $.writeln("Ende: " + time_stop(start))
var A=((new Date).getTime()-start)/1e3,S="Done ("+Number(A).toFixed(3)+" secs).";$.writeln(S)}}function createRGB(){var e=[],r=Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");if(null!=r)for(var a in(e=FindAllFolders(r,e)).unshift(r),e)if(files=[],files=e[a].getFiles(/.+\.dng$/i),!(files.length<1))for(var n in files){var o=files[n],_=new File(o);try{var i=decodeURIComponent(GetFileNameOnly(_.name)),s=_.path,l=new File(s+"/"+i+"__mood.jpg"),c=new File(s+"/"+i+"__grau.jpg"),u=new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Heather_Textur/heather_texture.jpg"),h=new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Heather_Textur/heather_texture_breit.jpg"),p=new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/11-Kasten_orange.psd"),d=new File(s+"/"+i+"__map.psd"),g=new Folder(s.replace(/(DNG\/Shooting%20Sortierung)/g,"RGB"));g.exists||g.create();var m=new File(g+"/"+i+"__RGB.psd");
// See if the file exists
if(d.exists||(app.open(c),gaussianBlur(10),savePSD_v2(d,f,t,t,f),app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)),l.exists&&c.exists&&d.exists&&!m.exists)
// if (file_mood.exists && file_grau.exists && file_map.exists) {
// get Keywords
// meta_getKeywords(thisFile);
// try {
//     alert(array_contains(meta_getKeywords(thisFile), "Fuser"))
// } catch (e) {
//     alert("error " + e)
// }
try{
// var name_base = GetFileNameOnly(doc_file.name);
// var doc_path = doc_file.path;
// doc_create(name_base + "__RGB", 1075.2, 1612.8, 300, 8); // 4480x6720px @300dpi
// doc_create(name_base + "__RGB", 4480, 6720, 300, 8); // 4480x6720px @300dpi
doc_create(i+"__RGB","RGB","Adobe RGB (1998)","px",4480,6720,300,8),app.activeDocument.info.keywords=meta_getKeywords(o),smartObject(),smartObject_placeFile(l),smartObject_ConvertToLinked(l),revealAll(),trim(!0,!0,!0,!0);app.activeDocument;app.activeDocument.artLayers.add(),createGroup_ToD("Textil"),gotoLayer("Ebene 1"),smartObject(),smartObject_placeFile(c),smartObject_ConvertToLinked(c),layer_duplicate(i+"__grau_struktur",100,"linearLight","none",!1,!0),brightnessEvent(0,-50),highPass(10),gotoLayer(i+"__grau"),gaussianBlur(10),createColorLayer("Farbe [init]","overlay","green",100,"none",214,55,37),ToD_farbcheck_selection(1403,2396,3247,4240,!0),createColorLayer("Farbecheck [init]","normal","red",100,!1,214,55,37),app.activeDocument.artLayers.add(),smartObject(),layer_setBlendMode("softLight"),app.activeDocument.width>app.activeDocument.height?(smartObject_placeFile(h),app.activeDocument.activeLayer.name="heather_texture"):smartObject_placeFile(u),moveLayer("heather_texture","Farbecheck [init]","up");
// OPEN path jpg
var b="/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Pfad/";open(new File(b+i+".jpg")),path2selection("Path 1"),selection2mask(),selectOpenDoc(-1),kanalberechnung_ToD(i+".jpg"),gotoLayer("Textil"),selection2mask(),smartBrushWorkspace(0,0,1.2,0,44,!0,!1,!1,!1,!1,100),
// smartBrushWorkspace(smartBrushRadius, smartBrushSmooth, smartBrushFeather, smartBrushContrast, smartBrushShiftEdge, sampleAllLayers, smartBrushUseSmartRadius, smartBrushUseDeepMatte, autoTrimap, smartBrushDecontaminate, smartBrushDeconAmount)
open(new File(b+i+".jpg")),app.activeDocument.close(SaveOptions.DONOTSAVECHANGES),
// transform heather to textil-size
layer_getMaskBounds("Textil"),gotoLayer("heather_texture");var y=app.preferences.rulerUnits;app.preferences.rulerUnits=Units.PIXELS,ToD_transform(parseFloat(MaskBound_x),parseFloat(MaskBound_y),parseFloat(MaskBound_w),parseFloat(MaskBound_h)),app.preferences.rulerUnits=y,hide(),createGroup_ToD("Maske"),layer_createMask(),ToD_createLayer("Motiv",100,layer_getIDXbyString("heather_texture")+1),smartObject(),smartObject_placeFile(p),layer_setColorLabel("orange"),ToD_transform_percent(0,1800,45,45),
// setLayerOpacity(86);
gaussianBlur(.5),filter_displace(60,30,d,!1),ToD_curves_schatten(0,12,255,243),ToD_filterFX_setting(3,100,"luminosity"),gotoLayer(i+"__grau"),layer_duplicate(i+"__schatten",100,"multiply","none",!1,!0),moveLayer(i+"__schatten","Maske","PlaceAtBeginning"),gotoLayer(i+"__schatten"),layer_ClippingLayer("clip"),ToD_curves_schatten(0,0,128,255),gotoLayer(i+"__grau"),ToD_curves_shirt_create(0,0,128,128,192,192,255,255),layer_selectByColor("orange"),savePSD_v2(m,f,t,t,t)}catch(e){alert("error "+e)}}catch(e){alert("error "+e)}}}function FindAllFolders(e,t){for(var r=Folder(e).getFiles(),a=0;a<r.length;a++){var n=r[a];n instanceof File||(t.push(Folder(n)),FindAllFolders(n.toString(),t))}return t}
/*********************************/
/* FUNCTIONS *********************/
/*********************************/
// =======================================================
function smartObject_placeFile(e){var t=new ActionDescriptor;t.putPath(s2t("null"),e),executeAction(s2t("placedLayerReplaceContents"),t,DialogModes.NO)}
// =======================================================
function smartObject_ConvertToLinked(e){var t=new ActionDescriptor,r=new ActionReference;r.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),t.putReference(s2t("null"),r),t.putPath(s2t("using"),new File(e)),executeAction(s2t("placedLayerConvertToLinked"),t,DialogModes.NO)}
// =======================================================
function doc_create(e,t,r,a,n,o,_,i){var s=new ActionDescriptor,l=new ActionDescriptor,c=new ActionList;//autoPromoteBackgroundLayer
if(l.putString(s2t("name"),e),l.putBoolean(s2t("artboard"),!1),//artboard
l.putBoolean(s2t("autoPromoteBackgroundLayer"),!1),"RGB"==t)var u="RGBColorMode";if("CMYK"==t)u="CMYKColorMode";if("grau"==t)u="grayscaleMode";if("bitmap"==t)u="bitmapMode";if("Lab"==t)u="labColorMode";var h=2.54;if("px"==a)var p=72*n/_,d=72*o/_;if("mm"==a)p=n/h*72/10,d=o/h*72/10;if("cm"==a)p=n/h*72,d=o/h*72;if("inch"==a)p=72*n,d=72*o;l.putClass(s2t("mode"),s2t(u)),l.putUnitDouble(s2t("width"),s2t("distanceUnit"),p),l.putUnitDouble(s2t("height"),s2t("distanceUnit"),d),l.putUnitDouble(s2t("resolution"),s2t("densityUnit"),_),l.putDouble(s2t("pixelScaleFactor"),1),//pixelScaleFactor
l.putEnumerated(s2t("fill"),s2t("fill"),s2t("transparency")),l.putInteger(s2t("depth"),i),l.putString(s2t("profile"),r),l.putList(s2t("guides"),c),s.putObject(s2t("new"),s2t("document"),l),executeAction(s2t("make"),s,DialogModes.NO)}
// =======================================================
function gaussianBlur(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("radius"),s2t("pixelsUnit"),e),executeAction(s2t("gaussianBlur"),t,DialogModes.NO)}
// =======================================================
function brightnessEvent(e,t){var r=new ActionDescriptor;r.putInteger(s2t("brightness"),e),r.putInteger(s2t("center"),t),executeAction(s2t("brightnessEvent"),r,DialogModes.NO)}
// =======================================================
function highPass(e){var t=new ActionDescriptor;t.putUnitDouble(s2t("radius"),s2t("pixelsUnit"),e),executeAction(s2t("highPass"),t,DialogModes.NO)}
// =======================================================
function layer_duplicate(e,t,r,a,n,o){var _=new ActionDescriptor,i=new ActionDescriptor;i.putString(s2t("name"),e),i.putEnumerated(s2t("mode"),s2t("blendMode"),s2t(r)),i.putUnitDouble(s2t("opacity"),s2t("percentUnit"),t),i.putBoolean(s2t("group"),n),i.putEnumerated(s2t("color"),s2t("color"),s2t(a)),_.putObject(s2t("new"),s2t("layer"),i),_.putEnumerated(s2t("using"),s2t("areaSelector"),s2t("selectionEnum")),_.putBoolean(s2t("copy"),o),executeAction(s2t("make"),_,DialogModes.NO)}
// =======================================================
function path2selection(e){var t=new ActionDescriptor,r=new ActionReference,a=new ActionReference;r.putProperty(s2t("channel"),s2t("selection")),t.putReference(s2t("null"),r),a.putName(s2t("path"),e),t.putReference(s2t("to"),a),executeAction(s2t("set"),t,DialogModes.NO)}
// =======================================================
function selection2mask(){var e=new ActionDescriptor,t=new ActionReference;e.putClass(s2t("new"),s2t("channel")),t.putEnumerated(s2t("channel"),s2t("channel"),s2t("mask")),e.putReference(s2t("at"),t),e.putEnumerated(s2t("using"),s2t("userMaskEnabled"),s2t("revealSelection")),executeAction(s2t("make"),e,DialogModes.NO)}
// =======================================================
function selectOpenDoc(e){var t=new ActionDescriptor,r=new ActionReference;r.putOffset(s2t("document"),e),t.putReference(s2t("null"),r),t.putInteger(s2t("documentID"),689),executeAction(s2t("select"),t,DialogModes.NO)}
// =======================================================
function kanalberechnung_ToD(e){var t=new ActionDescriptor,r=new ActionDescriptor,a=new ActionReference,n=new ActionReference,o=new ActionReference;a.putProperty(s2t("channel"),s2t("selection")),t.putReference(s2t("null"),a),n.putEnumerated(s2t("channel"),s2t("channel"),s2t("transparencyEnum")),n.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("merged")),n.putName(s2t("document"),e),r.putReference(s2t("to"),n),o.putEnumerated(s2t("channel"),s2t("channel"),s2t("transparencyEnum")),o.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("merged")),o.putName(s2t("document"),e),r.putReference(s2t("source2"),o),t.putObject(s2t("to"),s2t("calculation"),r),executeAction(s2t("set"),t,DialogModes.NO)}
// =======================================================
function createGroup_ToD(e){var t=new ActionDescriptor,r=new ActionDescriptor,a=new ActionReference,n=new ActionReference;a.putClass(s2t("layerSection")),t.putReference(s2t("null"),a),n.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),t.putReference(s2t("from"),n),r.putString(s2t("name"),e),t.putObject(s2t("using"),s2t("layerSection"),r),executeAction(s2t("make"),t,DialogModes.NO)}
// =======================================================
// function saveFile_PSD_ToD(in2) {
//     var d = new ActionDescriptor();
//     var d2 = new ActionDescriptor();
//     d2.putBoolean(s2t("maximizeCompatibility"), true);
//     d.putObject(s2t("as"), s2t("photoshop35Format"), d2);
//     d.putPath(s2t("in"), in2);
//     d.putInteger(s2t("documentID"), 1340);
//     d.putBoolean(s2t("lowerCase"), true);
//     d.putEnumerated(s2t("saveStage"), s2t("saveStageType"), s2t("saveBegin"));
//     executeAction(s2t("save"), d, DialogModes.NO);
// }
// =======================================================
function smartBrushWorkspace(e,t,r,a,n,o,_,i,s,l,c){var u=new ActionDescriptor;u.putEnumerated(s2t("presetKind"),s2t("presetKindType"),s2t("presetKindCustom")),u.putInteger(s2t("smartBrushRadius"),e),u.putInteger(s2t("smartBrushSmooth"),t),u.putUnitDouble(s2t("smartBrushFeather"),s2t("pixelsUnit"),r),u.putUnitDouble(s2t("smartBrushContrast"),s2t("percentUnit"),a),u.putUnitDouble(s2t("smartBrushShiftEdge"),s2t("percentUnit"),n),u.putBoolean(s2t("sampleAllLayers"),o),u.putBoolean(s2t("smartBrushUseSmartRadius"),_),u.putBoolean(s2t("smartBrushUseDeepMatte"),i),u.putBoolean(s2t("autoTrimap"),s),u.putBoolean(s2t("smartBrushDecontaminate"),l),u.putUnitDouble(s2t("smartBrushDeconAmount"),s2t("percentUnit"),c),u.putEnumerated(s2t("refineEdgeOutput"),s2t("refineEdgeOutput"),s2t("selectionOutputToUserMask")),executeAction(s2t("smartBrushWorkspace"),u,DialogModes.NO)}
// =======================================================
function ToD_farbcheck_selection(e,t,r,a,n){var o=new ActionDescriptor,_=new ActionDescriptor,i=new ActionReference;i.putProperty(s2t("channel"),s2t("selection")),o.putReference(s2t("null"),i),_.putUnitDouble(s2t("top"),s2t("pixelsUnit"),e),_.putUnitDouble(s2t("left"),s2t("pixelsUnit"),t),_.putUnitDouble(s2t("bottom"),s2t("pixelsUnit"),r),_.putUnitDouble(s2t("right"),s2t("pixelsUnit"),a),o.putObject(s2t("to"),s2t("ellipse"),_),o.putBoolean(s2t("antiAlias"),n),executeAction(s2t("set"),o,DialogModes.NO)}
// =======================================================
function revealAll(){var e=new ActionDescriptor;executeAction(s2t("revealAll"),e,DialogModes.NO)}
// =======================================================
function trim(e,t,r,a){var n=new ActionDescriptor;n.putEnumerated(s2t("trimBasedOn"),s2t("trimBasedOn"),s2t("transparency")),n.putBoolean(s2t("top"),e),n.putBoolean(s2t("bottom"),t),n.putBoolean(s2t("left"),r),n.putBoolean(s2t("right"),a),executeAction(s2t("trim"),n,DialogModes.NO)}
// =======================================================
function layer_setBlendMode(e){var t=new ActionDescriptor,r=new ActionDescriptor,a=new ActionReference;a.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),t.putReference(s2t("null"),a),r.putEnumerated(s2t("mode"),s2t("blendMode"),s2t(e)),t.putObject(s2t("to"),s2t("layer"),r),executeAction(s2t("set"),t,DialogModes.NO)}
// =======================================================
function layer_getMaskBounds(e){var t=layer_selectedIDX_get();gotoLayer(e),loadSelectionOfMask();var r=app.activeDocument.selection.bounds,a=[];return MaskBound_x=MaskBound_y=MaskBound_w=MaskBound_h="",MaskBound_x=Math.floor(r[0].value),MaskBound_y=Math.floor(r[1].value),MaskBound_w=Math.ceil(r[2].value-r[0].value),MaskBound_h=Math.ceil(r[3].value-r[1].value),a.push(MaskBound_x,MaskBound_y,MaskBound_w,MaskBound_h),app.activeDocument.selection.deselect(),layer_selectedIDX_set(t),a}
// =======================================================
function ToD_transform(e,t,r,a){var n=new ActionDescriptor,o=new ActionDescriptor;n.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSCorner0")),o.putUnitDouble(s2t("horizontal"),s2t("pixelsUnit"),e),o.putUnitDouble(s2t("vertical"),s2t("pixelsUnit"),t),n.putObject(s2t("offset"),s2t("offset"),o);var _=parseFloat(r/app.activeDocument.width*100),i=parseFloat(a/app.activeDocument.height*100);$.writeln("width2 "+_),$.writeln("height2 "+i),n.putUnitDouble(s2t("width"),s2t("percentUnit"),_),n.putUnitDouble(s2t("height"),s2t("percentUnit"),i),executeAction(s2t("transform"),n,DialogModes.NO)}
// =======================================================
function layer_createMask(){var e=new ActionDescriptor,t=new ActionReference;e.putClass(s2t("new"),s2t("channel")),t.putEnumerated(s2t("channel"),s2t("channel"),s2t("mask")),e.putReference(s2t("at"),t),e.putEnumerated(s2t("using"),s2t("userMaskEnabled"),s2t("revealAll")),executeAction(s2t("make"),e,DialogModes.NO)}
// =======================================================
/* _what "fullDocument" "mergeLayersNew" "currentLayer" */function protocol_createSnapshot(e,t){var r=new ActionDescriptor,a=new ActionReference,n=new ActionReference;a.putClass(s2t("snapshotClass")),r.putReference(s2t("null"),a),n.putProperty(s2t("historyState"),s2t("currentHistoryState")),r.putReference(s2t("from"),n),r.putString(s2t("name"),e),r.putEnumerated(s2t("using"),s2t("historyState"),s2t(t)),executeAction(s2t("make"),r,DialogModes.NO)}
// =======================================================
function protocol_delSnapshop(){if(app.documents.length>0)try{var e=app.activeDocument,t=e.historyStates;
// myDocument.layerComps.removeAll();
for(m=t.length-1;m>=1;m--)1==t[m].snapshot&&(
// $.writeln(m)
e.activeHistoryState=t[m],delHist())}catch(e){}}function delHist(){var e=new ActionDescriptor,t=new ActionReference;
// r.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
// d.putReference(charIDToTypeID('null'), r);
// executeAction(charIDToTypeID('Dlt '), d, DialogModes.NO);
t.putProperty(s2t("historyState"),s2t("currentHistoryState")),e.putReference(s2t("null"),t),executeAction(s2t("delete"),e,DialogModes.NO)}
// =======================================================
function meta_getKeywords(e){ExternalObject.AdobeXMPScript||(ExternalObject.AdobeXMPScript=new ExternalObject("lib:AdobeXMPScript"));var t=new XMPFile(e.fsName,XMPConst.UNKNOWN,XMPConst.OPEN_FOR_READ).getXMP();if(t.doesPropertyExist(XMPConst.NS_DC,"subject")){for(var r=t.iterator(XMPConst.ITERATOR_JUST_LEAFNODES,XMPConst.NS_DC,"subject"),a=[];;){var n=r.next();if(!n)break;a.push(decodeURIComponent(escape(n.value)))}return a}}
// =======================================================
// https://community.adobe.com/t5/bridge-discussions/script-to-add-keywords-in-bridge-based-on-the-filename/m-p/8577169#M20977
function meta_setKeywords(e,t){ExternalObject.AdobeXMPScript||(ExternalObject.AdobeXMPScript=new ExternalObject("lib:AdobeXMPScript"));var r=new XMPFile(File(e).fsName,XMPConst.UNKNOWN,XMPConst.OPEN_FOR_UPDATE),a=r.getXMP();for(var n in t)a.appendArrayItem(XMPConst.NS_DC,"subject",t,0,XMPConst.PROP_IS_ARRAY);r.canPutXMP(a)&&r.putXMP(a),r.closeFile(XMPConst.CLOSE_UPDATE_SAFELY)}
// =======================================================
function array_contains(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}
// =======================================================
function ToD_exportMotive(){var e=new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/_motive_MAIN.psd");app.open(e);for(var r=1;layer_checkExistence(r);){selectLayers("selectAllLayers"),hide(),makeVisByIndex(r,t);var a="/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/export/"+layer_getName(r)+".psd";savePSD_v2(new File(a),t,t,t,f),r++}app.documents.getByName("_motive_MAIN.psd").close(SaveOptions.DONOTSAVECHANGES)}
// =======================================================
function ToD_createLayer(e,t,r){var a=new ActionDescriptor,n=new ActionDescriptor,o=new ActionReference;o.putClass(s2t("layer")),a.putReference(s2t("null"),o),n.putString(s2t("name"),e),n.putUnitDouble(s2t("opacity"),s2t("percentUnit"),t),n.putEnumerated(s2t("color"),s2t("color"),s2t("grain")),a.putObject(s2t("using"),s2t("layer"),n),a.putInteger(s2t("layerID"),r),executeAction(s2t("make"),a,DialogModes.NO)}
// =======================================================
function ToD_transform_percent(e,t,r,a){var n=new ActionDescriptor,o=new ActionDescriptor;n.putEnumerated(s2t("freeTransformCenterState"),s2t("quadCenterState"),s2t("QCSAverage")),o.putUnitDouble(s2t("horizontal"),s2t("pixelsUnit"),e),o.putUnitDouble(s2t("vertical"),s2t("pixelsUnit"),t),n.putObject(s2t("offset"),s2t("offset"),o),n.putUnitDouble(s2t("width"),s2t("percentUnit"),r),n.putUnitDouble(s2t("height"),s2t("percentUnit"),a),executeAction(s2t("transform"),n,DialogModes.NO)}function filter_displace(e,t,r,a){var n=new ActionDescriptor;n.putInteger(s2t("horizontalScale"),e),n.putInteger(s2t("verticalScale"),t),n.putEnumerated(s2t("displacementMap"),s2t("displacementMap"),s2t("stretchToFit")),n.putEnumerated(s2t("undefinedArea"),s2t("undefinedArea"),s2t("repeatEdgePixels")),n.putPath(s2t("displaceFile"),r),n.putBoolean(c2t("EmbF"),a),executeAction(s2t("displace"),n,DialogModes.NO)}function layer_setColorLabel(e){var t=new ActionDescriptor,r=new ActionDescriptor,a=new ActionReference;a.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),t.putReference(s2t("null"),a),r.putEnumerated(s2t("color"),s2t("color"),s2t(e)),t.putObject(s2t("to"),s2t("layer"),r),executeAction(s2t("set"),t,DialogModes.NO)}
// =======================================================
function layer_selectByColor(e){selectLayers("selectNoLayers");for(var r=1;layer_checkExistence(r);){try{layer_getColorByIDX(r)===e&&selectLayerBySelector(r,t)}catch(e){}r++}}
// =======================================================
function layer_getColorByIDX(e){var t=new ActionReference;t.putIndex(sTID("layer"),e);var r=executeActionGet(t);
// return typeIDToCharID(a);        //returns charID    "Orng"
return a=r.getEnumerationValue(cTID("Clr ")),t2s(a);//returns stringID  "orange"
}
// =======================================================
/* "toggle", "clip", "unclip" */function layer_ClippingLayer(e){var t=new ActionDescriptor,r=new ActionDescriptor,a=new ActionReference;a.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum"));r=executeActionGet(a);try{"clip"==e?(t.putReference(s2t("null"),a),executeAction(s2t("groupEvent"),t,DialogModes.NO)):"unclip"==e||r.hasKey(charIDToTypeID("Grup"))&&r.getBoolean(charIDToTypeID("Grup"))?(t.putReference(s2t("null"),a),executeAction(s2t("ungroup"),t,DialogModes.NO)):(t.putReference(s2t("null"),a),executeAction(s2t("groupEvent"),t,DialogModes.NO))}catch(e){}}
// =======================================================
// ToD_curves_schatten(0, 0, 128, 255);
function ToD_curves_schatten(e,t,r,a){var n=new ActionDescriptor,o=new ActionDescriptor,_=new ActionDescriptor,i=new ActionDescriptor,s=new ActionList,l=new ActionList,c=new ActionReference;n.putEnumerated(s2t("presetKind"),s2t("presetKindType"),s2t("presetKindCustom")),c.putEnumerated(s2t("channel"),s2t("channel"),s2t("composite")),o.putReference(s2t("channel"),c),_.putDouble(s2t("horizontal"),e),_.putDouble(s2t("vertical"),t),l.putObject(s2t("paint"),_),i.putDouble(s2t("horizontal"),r),i.putDouble(s2t("vertical"),a),l.putObject(s2t("paint"),i),o.putList(s2t("curve"),l),s.putObject(s2t("curvesAdjustment"),o),n.putList(s2t("adjustment"),s),executeAction(s2t("curves"),n,DialogModes.NO)}
// =======================================================
function ToD_filterFX_setting(e,t,r){var a=new ActionDescriptor,n=new ActionDescriptor,o=new ActionDescriptor,_=new ActionReference;_.putIndex(s2t("filterFX"),e),_.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),a.putReference(s2t("null"),_),o.putUnitDouble(s2t("opacity"),s2t("percentUnit"),t),o.putEnumerated(s2t("mode"),s2t("blendMode"),s2t(r)),n.putObject(s2t("blendOptions"),s2t("blendOptions"),o),a.putObject(s2t("filterFX"),s2t("filterFX"),n),executeAction(s2t("set"),a,DialogModes.NO)}
// ToD_curves_shirt_create(0, 0, 128, 128, 192, 192, 255, 255);
// ToD_curves_shirt_modify(0, 0, 128, 128, 192, 192, 255, 255);
function ToD_curves_shirt_create(e,t,r,a,n,o,_,i){var s=new ActionDescriptor,l=new ActionDescriptor,c=new ActionDescriptor,u=new ActionDescriptor,h=new ActionDescriptor,p=new ActionDescriptor,d=new ActionList,g=new ActionList,m=new ActionReference;s.putEnumerated(s2t("presetKind"),s2t("presetKindType"),s2t("presetKindCustom")),m.putEnumerated(s2t("channel"),s2t("channel"),s2t("composite")),l.putReference(s2t("channel"),m),c.putDouble(s2t("horizontal"),e),c.putDouble(s2t("vertical"),t),g.putObject(s2t("paint"),c),u.putDouble(s2t("horizontal"),r),u.putDouble(s2t("vertical"),a),g.putObject(s2t("paint"),u),h.putDouble(s2t("horizontal"),n),h.putDouble(s2t("vertical"),o),g.putObject(s2t("paint"),h),p.putDouble(s2t("horizontal"),_),p.putDouble(s2t("vertical"),i),g.putObject(s2t("paint"),p),l.putList(s2t("curve"),g),d.putObject(s2t("curvesAdjustment"),l),s.putList(s2t("adjustment"),d),executeAction(s2t("curves"),s,DialogModes.NO)}function ToD_curves_shirt_modify(e,t,r,a,n,o,_,i){var s=new ActionDescriptor,l=new ActionDescriptor,c=new ActionDescriptor,u=new ActionDescriptor,h=new ActionDescriptor,p=new ActionDescriptor,d=new ActionDescriptor,g=new ActionDescriptor,m=new ActionList,b=new ActionList,y=new ActionReference,v=new ActionReference;y.putIndex(s2t("filterFX"),2),y.putEnumerated(s2t("layer"),s2t("ordinal"),s2t("targetEnum")),s.putReference(s2t("null"),y),c.putEnumerated(s2t("presetKind"),s2t("presetKindType"),s2t("presetKindCustom")),v.putEnumerated(s2t("channel"),s2t("channel"),s2t("composite")),u.putReference(s2t("channel"),v),h.putDouble(s2t("horizontal"),e),h.putDouble(s2t("vertical"),t),b.putObject(s2t("paint"),h),p.putDouble(s2t("horizontal"),r),p.putDouble(s2t("vertical"),a),b.putObject(s2t("paint"),p),d.putDouble(s2t("horizontal"),n),d.putDouble(s2t("vertical"),o),b.putObject(s2t("paint"),d),g.putDouble(s2t("horizontal"),_),g.putDouble(s2t("vertical"),i),b.putObject(s2t("paint"),g),u.putList(s2t("curve"),b),m.putObject(s2t("curvesAdjustment"),u),c.putList(s2t("adjustment"),m),l.putObject(s2t("filter"),s2t("curves"),c),s.putObject(s2t("filterFX"),s2t("filterFX"),l),executeAction(s2t("set"),s,DialogModes.NO)}
// selection2path(1, "Textil");
function selection2path(e,t){
// selection2path
var r=new ActionDescriptor,a=new ActionReference,n=new ActionReference;a.putClass(s2t("path")),r.putReference(s2t("null"),a),n.putProperty(s2t("selectionClass"),s2t("selection")),r.putReference(s2t("from"),n),r.putUnitDouble(s2t("tolerance"),s2t("pixelsUnit"),e),executeAction(s2t("make"),r,DialogModes.NO);
// select workpath
var o=new ActionDescriptor,_=new ActionReference;_.putProperty(s2t("path"),s2t("workPath")),o.putReference(s2t("null"),_),executeAction(s2t("select"),o,DialogModes.NO);
// rename path
var i=new ActionDescriptor,s=new ActionReference,l=new ActionReference;s.putClass(s2t("path")),i.putReference(s2t("null"),s),l.putProperty(s2t("path"),s2t("workPath")),i.putReference(s2t("from"),l),i.putString(s2t("name"),t),executeAction(s2t("make"),i,DialogModes.NO)}run(collection=[[["T_Shirt"],[dusty_mint,red,burgundy],[motiv__11F_Logo_weiss]],[["T_Shirt"],[jojoba,stem_green],[motiv__11F_Logo_schwarz]],[["T_Shirt"],[dusty_mint,red,burgundy],[motiv__11_Kasten_weiss]],[["T_Shirt"],[jojoba,stem_green],[motiv__11_Kasten_schwarz]],[["T_Shirt"],[dusty_mint,red,burgundy],[motiv__Fussball_ist_bunt_weiss]],[["T_Shirt"],[jojoba,stem_green],[motiv__Fussball_ist_bunt_schwarz]],[["T_Shirt"],[dusty_mint,red,burgundy],[motiv__11F_innen_weiss]],[["T_Shirt"],[jojoba,stem_green],[motiv__11F_innen_schwarz]],[["T_Shirt"],[dusty_mint,red,burgundy],[motiv__11F_innen_doppelpunkt_weiss]],[["T_Shirt"],[jojoba,stem_green],[motiv__11F_innen_doppelpunkt_schwarz]],[["T_Shirt"],[french_navy],[motiv_HoG_Peace_french_navy]],[["T_Shirt"],[heather_grey],[motiv_HoG_Peace_grau]],[["Hoodie"],[atlantic_blue,bright_red,glazed_green,burgundy,deep_chocolate],[motiv__11F_Logo_weiss]],[["Hoodie"],[melon_code,natural_raw],[motiv__11F_Logo_schwarz]],[["Hoodie"],[atlantic_blue,bright_red,glazed_green,burgundy,deep_chocolate],[motiv__11_Kasten_weiss]],[["Hoodie"],[melon_code,natural_raw],[motiv__11_Kasten_schwarz]],[["Hoodie"],[atlantic_blue,bright_red,glazed_green,burgundy,deep_chocolate],[motiv__Fussball_ist_bunt_weiss]],[["Hoodie"],[melon_code,natural_raw],[motiv__Fussball_ist_bunt_schwarz]],[["Hoodie"],[atlantic_blue,bright_red,glazed_green,burgundy,deep_chocolate],[motiv__11F_innen_weiss]],[["Hoodie"],[melon_code,natural_raw],[motiv__11F_innen_schwarz]],[["Hoodie"],[atlantic_blue,bright_red,glazed_green,burgundy,deep_chocolate],[motiv__11F_innen_doppelpunkt_weiss]],[["Hoodie"],[melon_code,natural_raw],[motiv__11F_innen_doppelpunkt_schwarz]],[["Hoodie"],[royal_blue],[motiv_HoG_Peace_royal_blue]],[["Hoodie"],[heather_grey],[motiv_HoG_Peace_grau]],[["Hoodie"],[french_navy],[motiv_HoG_Peace_french_navy]]]);