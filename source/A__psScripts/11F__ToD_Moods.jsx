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

//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/basic.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/pref.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/utils.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-dodge.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/LUT-burn.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/dialog.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/ready.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/view.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/layer.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/save.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/loopFiles.jsx";
//@include "/Users/adrians/Arbeit/GitHub/SimonScript/build/A__psScripts/functions/meta.jsx";


// color2csv()
function color2csv() {
    var Colour = app.foregroundColor;
    var H = Colour.hsb.hue.toFixed(2);
    var S = Colour.hsb.saturation.toFixed(2);
    var B = Colour.hsb.brightness.toFixed(2);
    var hsb = [H, S, B]

    var filepath = "/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/_Orga/ToD_farben.csv";
    var write_file = File(filepath);
    if (!write_file.exists) {
        write_file = new File(filepath);
    }
    var log_file = File(filepath);
    log_file.open('a', undefined, undefined);
    if (log_file !== '') {
        log_file.writeln(hsb);
    }
}


// color_name = [h, s, b, "color_name", heather or not]
// Whites
const natural_raw = [44.12, 13.82, 96.47, "natural_raw", 0]
const vintage_white = [34.27, 2.95, 92.94, "vintage_white", 0]
const white = [0.00, 0.00, 96.47, "white", 0]


// Color
const anthracite = [0.00, 0.00, 34.90, "anthracite", 0]
const atlantic_blue = [197.47, 41.80, 74.12, "atlantic_blue", 0]
const azur = [217.40, 47.82, 63.14, "azur", 0]
const black = [0.00, 0.00, 19.22, "black", 0]
const bottle_green = [137.36, 15.38, 34.14, "bottle_green", 0]
const bright_blue = [217.40, 47.82, 63.14, "bright_blue", 0]
const bright_orange = [24.66, 80.72, 87.45, "bright_orange", 0]
const bright_red = [357.39, 81.17, 66.67, "bright_red", 0]
const british_khaki = [45.00, 38.10, 32.94, "british_khaki", 0]
const burgundy = [351.65, 41.86, 33.72, "burgundy", 0]
const camel = [32.83, 32.51, 63.92, "camel", 0]
const candy_pink = [18.73, 6.53, 96.08, "candy_pink", 0]
const canyon_pink = [353.45, 26.70, 80.78, "canyon_pink", 0]
const caramel = [20.25, 55.17, 56.86, "caramel", 0]
const caribbean_blue = [173.34, 12.85, 82.35, "caribbean_blue", 0]
const carmine_red = [357.11, 57.87, 84.70, "carmine_red", 0]
const cotton_pink = [343.64, 20.71, 92.75, "cotton_pink", 0]
const deep_chocolate = [0.00, 20.36, 21.18, "deep_chocolate", 0]
const desert_dust = [32.51, 13.30, 71.88, "desert_dust", 0]
const dusty_mint = [129.67, 17.41, 69.80, "dusty_mint", 0]
const french_navy = [240.00, 25.45, 21.57, "french_navy", 0]
const fresh_green = [110.76, 43.91, 58.04, "fresh_green", 0]
const geyser_green = [151.66, 16.59, 85.10, "geyser_green", 0]
const glazed_green = [184.13, 44.62, 25.49, "glazed_green", 0]
const golden_yellow = [52.34, 78.01, 94.51, "golden_yellow", 0]
const hay_yellow = [54.22, 77.58, 68.23, "hay_yellow", 0]
const india_ink_grey = [230.54, 21.11, 35.29, "india_ink_grey", 0]
const jojoba = [47.56, 37.27, 86.27, "jojoba", 0]
const khaki = [60.00, 10.74, 34.55, "khaki", 0]
const lava_grey = [233.33, 13.95, 50.59, "lava_grey", 0]
const lavender_dawn = [257.99, 20.83, 75.29, "lavender_dawn", 0]
const light_khaki = [64.27, 10.77, 50.98, "light_khaki", 0]
const lilac_petal = [330.21, 12.98, 60.71, "lilac_petal", 0]
const majorelle_blue = [222.15, 70.47, 41.18, "majorelle_blue", 0]
const mauve = [339.42, 37.23, 73.72, "mauve", 0]
const melon_code = [22.08, 75.46, 84.70, "melon_code", 0]
const moss_green = [62.37, 62.81, 47.45, "moss_green", 0]
const mushroom = [24.44, 45.50, 69.80, "mushroom", 0]
const ocean_depth = [195.52, 50.43, 45.10, "ocean_depth", 0]
const ochre = [38.06, 74.03, 70.98, "ochre", 0]
const pink_punch = [336.21, 59.04, 73.72, "pink_punch", 0]
const plum = [261.61, 25.78, 38.04, "plum", 0]
const raspberry = [335.29, 59.65, 67.06, "raspberry", 0]
const red = [350.10, 63.64, 56.08, "red", 0]
const roasted_orange = [29.55, 76.14, 69.02, "roasted_orange", 0]
const rose_clay = [13.47, 43.55, 88.24, "rose_clay", 0]
const royal_blue = [229.20, 68.02, 57.65, "royal_blue", 0]
const sage = [50.90, 16.75, 77.26, "sage", 0]
const scale_green = [70.51, 63.72, 84.31, "scale_green", 0]
const serene_blue = [239.00, 9.15, 77.88, "serene_blue", 0]
const sky_blue = [215.75, 21.96, 83.92, "sky_blue", 0]
const spectra_yellow = [40.95, 65.19, 89.02, "spectra_yellow", 0]
const stargazer = [215.55, 25.72, 41.18, "stargazer", 0]
const stem_green = [67.15, 13.55, 94.91, "stem_green", 0]
const sunset_orange = [10.13, 37.20, 81.18, "sunset_orange", 0]
const tangerine = [6.10, 82.71, 83.92, "tangerine", 0]
const teal_monstera = [168.45, 17.93, 56.86, "teal_monstera", 0]
const varsity_green = [153.19, 41.96, 43.92, "varsity_green", 0]


// essential heathers
const cream_heather_grey = [19.95, 1.30, 90.19, "cream_heather_grey", 1]
const cream_heather_pink = [10.01, 8.04, 87.84, "cream_heather_pink", 1]
const dark_heather_blue = [222.85, 22.82, 36.08, "dark_heather_blue", 1]
const dark_heather_grey = [0.00, 0.00, 22.35, "dark_heather_grey", 1]
const dark_heather_indigo = [226.82, 33.33, 48.24, "dark_heather_indigo", 1]
const heather_grey = [0.00, 0.00, 82.75, "heather_grey", 1]
const heather_ice_blue = [202.50, 7.92, 79.21, "heather_ice_blue", 1]
const heather_sand = [31.30, 25.56, 70.59, "heather_sand", 1]
const mid_heather_blue = [220.79, 32.25, 60.78, "mid_heather_blue", 1]
const mid_heather_green = [143.58, 17.72, 61.96, "mid_heather_green", 1]
const mid_heather_grey = [251.96, 2.75, 71.37, "mid_heather_grey", 1]
const mid_heather_khaki = [64.02, 14.57, 40.39, "mid_heather_khaki", 1]


// special heathers
const black_heather_blue = [224.44, 36.99, 28.63, "black_heather_blue", 1]
const black_heather_orange = [20.29, 76.40, 69.80, "black_heather_orange", 1]
const dark_heather_denim = [212.98, 29.41, 26.67, "dark_heather_denim", 1]
const ecru_neppy_mandarine = [31.99, 6.33, 92.94, "ecru_neppy_mandarine", 1]
const heather_cranberry = [355.77, 34.30, 81.18, "heather_cranberry", 1]
const heather_eucalyptus = [187.75, 20.94, 58.04, "heather_eucalyptus", 1]
const heather_grape_red = [339.99, 26.86, 26.28, "heather_grape_red", 1]
const heather_neppy_burgundy = [355.24, 74.81, 52.94, "heather_neppy_burgundy", 1]
const heather_neppy_lemon_grass = [52.36, 65.08, 66.28, "heather_neppy_lemon_grass", 1]
const heather_neppy_pink = [25.86, 24.68, 92.16, "heather_neppy_pink", 1]
const heather_snow_mid_blue = [230.67, 41.66, 42.35, "heather_snow_mid_blue", 1]
const mid_heather_red = [358.40, 41.66, 70.59, "mid_heather_red", 1]
const slub_heather_grey = [220.05, 1.74, 67.45, "slub_heather_grey", 1]
const wooden_heather = [34.29, 11.54, 71.37, "wooden_heather", 1]


// Textil Sets
const spinner__color = [white, black, canyon_pink, heather_grey]
const mini_cruiser__color = [white, natural_raw, black, caramel, ochre, fresh_green, stem_green, teal_monstera, serene_blue, royal_blue, french_navy, burgundy, cotton_pink, bright_red, heather_grey, black_heather_blue, heather_cranberry]
const mini_changer__color = [white, natural_raw, black, caramel, ochre, varsity_green, british_khaki, teal_monstera, serene_blue, royal_blue, french_navy, raspberry, lilac_petal, bright_orange, bright_red, heather_grey, cream_heather_pink]
const cruiser__color = [white, natural_raw, black, desert_dust, deep_chocolate, caramel, mushroom, ochre, hay_yellow, varsity_green, glazed_green, moss_green, british_khaki, sage, stem_green, teal_monstera, serene_blue, sky_blue, bright_blue, royal_blue, majorelle_blue, india_ink_grey, french_navy, carmine_red, burgundy, lilac_petal, mauve, candy_pink, cotton_pink, canyon_pink, rose_clay, melon_code, tangerine, bright_red, sunset_orange, scale_green, roasted_orange, dark_heather_grey, mid_heather_grey, heather_grey, mid_heather_khaki, mid_heather_green, mid_heather_red, wooden_heather, heather_snow_mid_blue, black_heather_blue, heather_neppy_burgundy]
const changer__color = [white, natural_raw, black, camel, deep_chocolate, caramel, mushroom, ochre, golden_yellow, hay_yellow, varsity_green, bottle_green, moss_green, british_khaki, stem_green, teal_monstera, serene_blue, sky_blue, majorelle_blue, india_ink_grey, lava_grey, french_navy, burgundy, lavender_dawn, lilac_petal, mauve, cotton_pink, canyon_pink, tangerine, bright_red, roasted_orange, heather_grey, mid_heather_khaki, mid_heather_green, dark_heather_blue, heather_neppy_lemon_grass, heather_neppy_burgundy]
const trigger__color = [black, anthracite, light_khaki, caribbean_blue, french_navy, pink_punch, red, burgundy, lavender_dawn, candy_pink, dark_heather_grey, heather_grey, cream_heather_grey, heather_sand, mid_heather_khaki, mid_heather_blue, mid_heather_red, cream_heather_pink, heather_eucalyptus, black_heather_blue, heather_grape_red]
const mini_creator__color = [white, natural_raw, black, anthracite, caramel, ochre, golden_yellow, geyser_green, fresh_green, sage, stem_green, caribbean_blue, teal_monstera, ocean_depth, serene_blue, sky_blue, bright_blue, azur, royal_blue, majorelle_blue, french_navy, raspberry, pink_punch, carmine_red, red, burgundy, lavender_dawn, lilac_petal, mauve, candy_pink, cotton_pink, rose_clay, melon_code, bright_orange, tangerine, dark_heather_grey, heather_grey, cream_heather_grey, mid_heather_green, heather_ice_blue, mid_heather_blue, mid_heather_red, cream_heather_pink, black_heather_blue]
const sparker__color = [white, natural_raw, black, desert_dust, camel, deep_chocolate, british_khaki, sage, royal_blue, lava_grey, french_navy, burgundy, bright_red, heather_grey, slub_heather_grey, black_heather_blue, dark_heather_denim]
const fuser__color = [white, natural_raw, black, caramel, stem_green, serene_blue, french_navy, red, burgundy, lilac_petal, rose_clay, dark_heather_grey, heather_grey]
const expresser__color = [white, vintage_white, natural_raw, black, anthracite, deep_chocolate, caramel, ochre, spectra_yellow, golden_yellow, hay_yellow, geyser_green, fresh_green, varsity_green, glazed_green, british_khaki, sage, caribbean_blue, ocean_depth, stargazer, sky_blue, bright_blue, azur, royal_blue, majorelle_blue, lava_grey, french_navy, raspberry, pink_punch, carmine_red, red, burgundy, plum, lavender_dawn, mauve, candy_pink, cotton_pink, canyon_pink, rose_clay, melon_code, bright_orange, roasted_orange, dark_heather_grey, mid_heather_grey, heather_grey, cream_heather_grey, heather_sand, mid_heather_khaki, mid_heather_green, mid_heather_blue, cream_heather_pink, wooden_heather, heather_neppy_lemon_grass, heather_snow_mid_blue, black_heather_blue, dark_heather_denim, heather_cranberry, heather_neppy_burgundy, heather_grape_red, ecru_neppy_mandarine, heather_neppy_pink, black_heather_orange]




// motiv_call = [front_Motiv, back_Motiv]
// Motiv Sets
const motiv__11F_Logo_schwarz = ["11FREUNDE_Logo_(Druck_SCHWARZ)", "blanko"];
const motiv__11F_Logo_weiss = ["11FREUNDE_Logo_(Druck_WEISS)", "blanko"];

const motiv__11_Kasten_orange = ["11Kasten_Logo_(Druck_ORANGE)", "blanko"];
const motiv__11_Kasten_weiss = ["11Kasten_Logo_(Druck_WEISS)", "blanko"];
const motiv__11_Kasten_schwarz = ["11Kasten_Logo_(Druck_SCHWARZ)", "blanko"];

const motiv__Auswartsfans_schwarz = ["Auswärtsfans_(Druck_SchwarzRot)", "blanko"];
const motiv__Auswartsfans_weiss = ["Auswärtsfans_(Druck_WeißRot)", "blanko"];

const motiv__Fussball_ist_bunt_schwarz = ["Fußball_ist_bunt_(Druck_Schwarz)", "blanko"];
const motiv__Fussball_ist_bunt_weiss = ["Fußball_ist_bunt_(Druck_WEISS)", "blanko"];

const motiv__11F_Logo_beidseitig_schwarz = ["FREUNDE_im_Rücken_(Druck_SCHWARZ)_vorne", "FREUNDE_im_Rücken_(Druck_SCHWARZ)_hinten"];
const motiv__11F_Logo_beidseitig_weiss = ["FREUNDE_im_Rücken_(Druck_WEISS)_vorne", "FREUNDE_im_Rücken_(Druck_WEISS)_hinten"];

const motiv__11F_innen_schwarz = ["11FREUNDINNEN_(Druck_SCHWARZ)", "blanko"];
const motiv__11F_innen_weiss = ["11FREUNDINNEN_(Druck_WEISS)", "blanko"];

const motiv__11F_innen_doppelpunkt_schwarz = ["11FREUND_doppelpunkt_INNEN_(Druck_SCHWARZ)", "blanko"];
const motiv__11F_innen_doppelpunkt_weiss = ["11FREUND_doppelpunkt_INNEN_(Druck_WEISS)", "blanko"];

const motiv__Nohler = ["NÖHLER", "blanko"];

const motiv__BrigadeHS = ["Referees_Welcome_vorne", "Referees_Welcome_hinten"];

const motiv__Brehme_schwarz = ["Scheisse_am_Fuß_(Druck_SCHWARZ)", "blanko"];
const motiv__Brehme_weiss = ["Scheisse_am_Fuß_(Druck_WEISS)", "blanko"];

const motiv_HoG_AD10S = ["HoG_AD10S", "blanko"];
const motiv_HoG_Black_Lives_Matter = ["HoG_Black_Lives_Matter", "blanko"];
const motiv_HoG_Black_Power = ["HoG_Black_Power", "blanko"];
const motiv_HoG_Der_Grantler = ["HoG_Der_Grantler", "blanko"];
const motiv_HoG_Granate_von_Giesing = ["HoG_Granate_von_Giesing", "blanko"];
const motiv_HoG_Kap = ["HoG_Kap", "blanko"];
const motiv_HoG_Lorant_auf_Lunge = ["HoG_Lorant_auf_Lunge", "blanko"];
const motiv_HoG_Meister_Marschall = ["HoG_Meister_Marschall", "blanko"];
const motiv_HoG_Stumpen_Rudi = ["HoG_Stumpen_Rudi", "blanko"];
const motiv_HoG_Tennis_Punk = ["HoG_Tennis_Punk", "blanko"];
const motiv_HoG_Zaubermaus = ["HoG_Zaubermaus", "blanko"];


// const motiv__IKAUZ = ["IKAUZ_weiss", false];

const motiv__blanko = ["blanko", "blanko"];

const motiv_Clash_11F_Hoodie_grau = ["Clash_11Freunde_Hoodie_grau_vorne", "Clash_11Freunde_Hoodie_grau_hinten"];
const motiv_Clash_11F_Hoodie_schwarz = ["Clash_11Freunde_Hoodie_schwarz_vorne", "Clash_11Freunde_Hoodie_schwarz_hinten"];
const motiv_Clash_11F_Shirt_grau = ["Clash_11Freunde_Shirt_grau_vorne", "blanko"];
const motiv_Clash_11F_Shirt_schwarz = ["Clash_11Freunde_Shirt_schwarz_vorne", "blanko"];

const motiv_Clash_Gladbach_Hoodie = ["Clash_Gladbach_Hoodie_vorne", "Clash_Gladbach_Hoodie_hinten"];
const motiv_Clash_Gladbach_Shirt = ["Clash_Gladbach_Shirt_vorne", "blanko"];

const motiv_Clash_Dortmund_Hoodie = ["Clash_Dortmund_Hoodie_vorne", "Clash_Dortmund_Hoodie_hinten"];
const motiv_Clash_Dortmund_Shirt = ["Clash_Dortmund_Shirt_vorne", "blanko"];

const motiv_FootballBloodyHell_weiss = ["Football_Bloody_Hell_(Druck_WEISS)", "blanko"];
const motiv_FootballBloodyHell_schwarz = ["Football_Bloody_Hell_(Druck_SCHWARZ)", "blanko"];

const motiv_HoG_Peace_french_navy = ["blanko", "HoG_WM_PEACE_(textil_french_navy)"];
const motiv_HoG_Peace_grau = ["blanko", "HoG_WM_PEACE_(textil_grau)"];
const motiv_HoG_Peace_royal_blue = ["blanko", "HoG_WM_PEACE_(textil_royal_blue)"];

const motiv_11F_ZK_TShirt1 = ["11F_ZK_TShirt1_vorne", "blanko"];
const motiv_11F_ZK_TShirt2 = ["11F_ZK_TShirt2_vorne", "11F_ZK_TShirt2_hinten"];
const motiv_11F_ZK_TShirt3 = ["11F_ZK_TShirt3_vorne", "blanko"];
const motiv_11F_ZK_TShirt4 = ["11F_ZK_TShirt4_vorne", "11F_ZK_TShirt4_hinten"];


var motive = [
    "11-Kasten_orange",
    "11-Kasten_weiss",
    "11F-innen_doppelpunkt_schwarz",
    "11F-innen_doppelpunkt_weiss",
    "11F-innen_schwarz",
    "11F-innen_weiss",
    "11F-Logo_beidseitig-hinten_schwarz",
    "11F-Logo_beidseitig-hinten_weiss",
    "11F-Logo_beidseitig-vorne_schwarz",
    "11F-Logo_beidseitig-vorne_weiss",
    "11F-Logo_schwarz",
    "11F-Logo_weiss",
    "Auswärtsfans_schwarz",
    "Auswärtsfans_weiss",
    "Brehme_schwarz",
    "Brehme_weiss",
    "BrigadeHS_vorne",
    "BrigadeHS-hinten_schwarz",
    "BrigadeHS-hinten_weiss",
    "Fussball-ist-bunt_schwarz",
    "Fussball-ist-bunt_weiss",
    "IKAUZ_weiss",
    "Nöhler",
    "blanko"
];

function loopFarben() {
    protocol_delSnapshop();
    for (var a = 0; a < farbe.length; a++) {
        doc.suspendHistory('ToD ' + farbe[a][3], 'ToD_colorLayer(' + a + ')');
        protocol_createSnapshot('ToD ' + farbe[a][3], "mergeLayersNew");
        // protocol_createSnapshot2('ToD ' + farbe[a][3])
    }
};

function ToD_colorLayer(a) {
    gotoLayer("heather_texture");
    if (farbe[a][4] == 0) {
        hide()
    } else {
        makeVisible()
    }
    for (var b = 0; b < layer_getIDXbyString("Farbe").length; b++) {
        gotoLayer(layer_getIDXbyString("Farbe")[b])
        layer_solidColorHSB_change(farbe[a][0], farbe[a][1], farbe[a][2]);
        nameLayer(layer_getName(getActiveLayerIndex()).replace(/\[.*\]/g, "[" + farbe[a][3] + "]"));

        var name_base = GetFileNameOnly(doc.name).replace(/(__RGB)/g, "")
        gotoLayer(name_base + "__grau");
        ToD_curves_shirt_modify(0, farbe[a][2] * 0.62, 128, 128, 192, 192, 255, 255);
    };
};

function loopMotive() {
    protocol_delSnapshop();
    layer_selectByColor("orange");
    for (var g = 0; g < motive.length; g++) {
        doc.suspendHistory('ToD ' + motive[g], 'ToD_motivChange("' + motive[g] + '")');
        protocol_createSnapshot('ToD ' + motive[g], "mergeLayersNew");
    };
};

function ToD_motivChange(_file) {
    var file_Motiv_X = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/" + _file + ".psd");
    smartObject_placeFile(file_Motiv_X);
};


// REAL COLLECTION

var collection = [
    //// 11F Logo
    [
        ["T_Shirt"],
        [black, rose_clay],
        [motiv__11F_Logo_weiss]
    ],
    [
        ["T_Shirt"],
        [white, heather_grey],
        [motiv__11F_Logo_schwarz]
    ],
    [
        ["Shirtkleid"],
        [white, heather_grey],
        [motiv__11F_Logo_schwarz]
    ],
    [
        ["Shirtkleid"],
        [black],
        [motiv__11F_Logo_weiss]
    ],
    [
        ["Frauen_Shirt"],
        [caramel],
        [motiv__11F_Logo_schwarz]
    ],
    [
        ["Frauen_Shirt"],
        [dark_heather_grey, sky_blue, cream_heather_grey],
        [motiv__11F_Logo_weiss]
    ],
    //// 11 Kasten
    [
        ["Hoodie"],
        [natural_raw, white],
        [motiv__11_Kasten_orange]
    ],
    [
        ["T_Shirt"],
        [black, rose_clay, heather_grey],
        [motiv__11_Kasten_weiss]
    ],
    [
        ["T_Shirt"],
        [white],
        [motiv__11_Kasten_orange]
    ],
    [
        ["Sweatshirt"],
        [black, camel, black_heather_blue, french_navy, heather_grey, lava_grey],
        [motiv__11_Kasten_weiss]
    ],
    [
        ["Kinder_Shirt"],
        [white],
        [motiv__11_Kasten_orange]
    ],
    [
        ["Kinder_Shirt"],
        [black, burgundy, geyser_green, ocean_depth, tangerine],
        [motiv__11_Kasten_weiss]
    ],
    [
        ["Kinder_Sweatshirt"],
        [natural_raw],
        [motiv__11_Kasten_orange]
    ],
    [
        ["Kinder_Sweatshirt"],
        [bright_red, varsity_green, ochre],
        [motiv__11_Kasten_weiss]
    ],
    //// Auswährtsfans
    [
        ["T_Shirt"],
        [white],
        [motiv__Auswartsfans_schwarz]
    ],
    [
        ["T_Shirt"],
        [black],
        [motiv__Auswartsfans_weiss]
    ],
    [
        ["Frauen_Shirt"],
        [white],
        [motiv__Auswartsfans_schwarz]
    ],
    [
        ["Frauen_Shirt"],
        [black],
        [motiv__Auswartsfans_weiss]
    ],
    [
        ["Shirtkleid"],
        [white],
        [motiv__Auswartsfans_schwarz]
    ],
    [
        ["Shirtkleid"],
        [black],
        [motiv__Auswartsfans_weiss]
    ],
    [
        ["Frauen_Hoodie"],
        [cream_heather_grey],
        [motiv__Auswartsfans_schwarz]
    ],
    [
        ["Frauen_Hoodie"],
        [black],
        [motiv__Auswartsfans_weiss]
    ],
    [
        ["Hoodie"],
        [white],
        [motiv__Auswartsfans_schwarz]
    ],
    [
        ["Hoodie"],
        [black],
        [motiv__Auswartsfans_weiss]
    ],
    [
        ["Sweatshirt"],
        [white],
        [motiv__Auswartsfans_schwarz]
    ],
    [
        ["Sweatshirt"],
        [black],
        [motiv__Auswartsfans_weiss]
    ],
    //// Clash 11Freunde
    [
        ["Hoodie"],
        [black],
        [motiv_Clash_11F_Hoodie_schwarz]
    ],
    [
        ["Hoodie"],
        [heather_grey],
        [motiv_Clash_11F_Hoodie_grau]
    ],
    [
        ["T_Shirt"],
        [black],
        [motiv_Clash_11F_Shirt_schwarz]
    ],
    [
        ["T_Shirt"],
        [heather_grey],
        [motiv_Clash_11F_Shirt_grau]
    ],


    //// Clash Gladbach
    [
        ["Hoodie"],
        [black],
        [motiv_Clash_Gladbach_Hoodie]
    ],
    [
        ["T_Shirt"],
        [black],
        [motiv_Clash_Gladbach_Shirt]
    ],

    //// Clash Dortmund
    [
        ["Hoodie"],
        [heather_grey],
        [motiv_Clash_Dortmund_Hoodie]
    ],
    [
        ["T_Shirt"],
        [heather_grey],
        [motiv_Clash_Dortmund_Shirt]
    ],

    //// Fussball ist bunt
    [
        ["T_Shirt"],
        [black],
        [motiv__Fussball_ist_bunt_weiss]
    ],
    [
        ["T_Shirt"],
        [white, heather_grey],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["Baby_Body"],
        [white],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["Sweatshirt"],
        [french_navy, lava_grey],
        [motiv__Fussball_ist_bunt_weiss]
    ],
    [
        ["Sweatshirt"],
        [heather_grey],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["Frauen_Shirt"],
        [cream_heather_grey, white],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["Frauen_Shirt"],
        [black, caramel, sky_blue],
        [motiv__Fussball_ist_bunt_weiss]
    ],
    [
        ["Hoodie"],
        [heather_grey, white, carmine_red],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["Hoodie"],
        [black, bright_blue, desert_dust, glazed_green, india_ink_grey],
        [motiv__Fussball_ist_bunt_weiss]
    ],
    [
        ["Kinder_Sweatshirt"], // textil hat keine Fotos
        [natural_raw],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["Kinder_Sweatshirt"], // textil hat keine Fotos
        [black, bright_orange, varsity_green],
        [motiv__Fussball_ist_bunt_weiss]
    ],
    //// Freunde im Rücken
    [
        ["Hoodie"],
        [natural_raw, heather_grey, ochre],
        [motiv__11F_Logo_beidseitig_schwarz]
    ],
    [
        ["Hoodie"],
        [bright_blue, burgundy, carmine_red, glazed_green, india_ink_grey],
        [motiv__11F_Logo_beidseitig_weiss]
    ],
    [
        ["Frauen_Hoodie"],
        [heather_sand],
        [motiv__11F_Logo_beidseitig_schwarz]
    ],
    [
        ["Frauen_Hoodie"],
        [caribbean_blue, black, heather_grey],
        [motiv__11F_Logo_beidseitig_weiss]
    ],
    //// Nöhler
    [
        ["Kinder_Shirt"],
        [black],
        [motiv__Nohler]
    ],
    [
        ["Kinder_Hoodie"],
        [black],
        [motiv__Nohler]
    ],
    [
        ["Kinder_Sweatshirt"],
        [black],
        [motiv__Nohler]
    ],
    //// 11Freundinnen
    [
        ["T_Shirt"],
        [white, heather_grey],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["T_Shirt"],
        [black, rose_clay],
        [motiv__11F_innen_weiss]
    ],
    [
        ["Sweatshirt"],
        [camel, heather_grey],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["Sweatshirt"],
        [black, french_navy, lava_grey],
        [motiv__11F_innen_weiss]
    ],
    [
        ["Hoodie"],
        [heather_grey, bright_red, desert_dust, natural_raw, ochre, white],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["Hoodie"],
        [black, bright_blue, burgundy, carmine_red, dark_heather_grey, glazed_green, india_ink_grey],
        [motiv__11F_innen_weiss]
    ],
    [
        ["Shirtkleid"],
        [white, heather_grey],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["Shirtkleid"],
        [black],
        [motiv__11F_innen_weiss]
    ],
    [
        ["Frauen_Shirt"],
        [caramel, heather_grey, cream_heather_grey, white, sky_blue],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["Frauen_Shirt"],
        [black, dark_heather_grey],
        [motiv__11F_innen_weiss]
    ],
    [
        ["Frauen_Hoodie"],
        [caribbean_blue, cream_heather_grey, heather_grey, heather_sand],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["Frauen_Hoodie"],
        [black, dark_heather_grey],
        [motiv__11F_innen_weiss]
    ],
    //// 11Freundinnen Doppelpunkt
    [
        ["Sweatshirt"],
        [camel, heather_grey],
        [motiv__11F_innen_doppelpunkt_schwarz]
    ],
    [
        ["Sweatshirt"],
        [black, french_navy, lava_grey, caramel],
        [motiv__11F_innen_doppelpunkt_weiss]
    ],
    [
        ["Hoodie"],
        [heather_grey, desert_dust, natural_raw],
        [motiv__11F_innen_doppelpunkt_schwarz]
    ],
    [
        ["Hoodie"],
        [burgundy],
        [motiv__11F_innen_doppelpunkt_weiss]
    ],
    [
        ["Shirtkleid"],
        [white, heather_grey],
        [motiv__11F_innen_doppelpunkt_schwarz]
    ],
    [
        ["Shirtkleid"],
        [black],
        [motiv__11F_innen_doppelpunkt_weiss]
    ],
    [
        ["Frauen_Hoodie"],
        [heather_sand, heather_grey, caribbean_blue, cream_heather_grey],
        [motiv__11F_innen_doppelpunkt_schwarz]
    ],
    [
        ["Frauen_Hoodie"],
        [black, dark_heather_grey],
        [motiv__11F_innen_doppelpunkt_weiss]
    ],
    //// 11Freundinnen Doppelpunkt
    [
        ["Sweatshirt"],
        [black],
        [motiv__BrigadeHS]
    ],
    [
        ["Hoodie"],
        [black],
        [motiv__BrigadeHS]
    ],
    [
        ["T_Shirt"],
        [black],
        [motiv__BrigadeHS]
    ],
    [
        ["Shirtkleid"],
        [black],
        [motiv__BrigadeHS]
    ],
    [
        ["Frauen_Shirt"],
        [black],
        [motiv__BrigadeHS]
    ],
    [
        ["Frauen_Hoodie"],
        [black],
        [motiv__BrigadeHS]
    ],
    //// Brehme
    [
        ["T_Shirt"],
        [white, heather_grey, rose_clay],
        [motiv__Brehme_schwarz]
    ],
    [
        ["T_Shirt"],
        [black],
        [motiv__Brehme_weiss]
    ],
    [
        ["Sweatshirt"],
        [camel, heather_grey, lava_grey, white, caramel],
        [motiv__Brehme_schwarz]
    ],
    [
        ["Sweatshirt"],
        [black, dark_heather_blue, french_navy],
        [motiv__Brehme_weiss]
    ],
    [
        ["Hoodie"],
        [bright_blue, bright_red, desert_dust, heather_grey, natural_raw, ochre, white],
        [motiv__Brehme_schwarz]
    ],
    [
        ["Hoodie"],
        [black, burgundy, dark_heather_grey, glazed_green, india_ink_grey],
        [motiv__Brehme_weiss]
    ]
]




// Collection 2022-11
var collection = [
    [
        ["T_Shirt"],
        [dusty_mint, red, burgundy],
        [motiv__11F_Logo_weiss]
    ],
    [
        ["T_Shirt"],
        [jojoba, stem_green],
        [motiv__11F_Logo_schwarz]
    ],
    [
        ["T_Shirt"],
        [dusty_mint, red, burgundy],
        [motiv__11_Kasten_weiss]
    ],
    [
        ["T_Shirt"],
        [jojoba, stem_green],
        [motiv__11_Kasten_schwarz]
    ],
    [
        ["T_Shirt"],
        [dusty_mint, red, burgundy],
        [motiv__Fussball_ist_bunt_weiss]
    ],
    [
        ["T_Shirt"],
        [jojoba, stem_green],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["T_Shirt"],
        [dusty_mint, red, burgundy],
        [motiv__11F_innen_weiss]
    ],
    [
        ["T_Shirt"],
        [jojoba, stem_green],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["T_Shirt"],
        [dusty_mint, red, burgundy],
        [motiv__11F_innen_doppelpunkt_weiss]
    ],
    [
        ["T_Shirt"],
        [jojoba, stem_green],
        [motiv__11F_innen_doppelpunkt_schwarz]
    ],
    [
        ["T_Shirt"],
        [french_navy],
        [motiv_HoG_Peace_french_navy]
    ],
    [
        ["T_Shirt"],
        [heather_grey],
        [motiv_HoG_Peace_grau]
    ],




    [
        ["Hoodie"],
        [atlantic_blue, bright_red, glazed_green, burgundy, deep_chocolate],
        [motiv__11F_Logo_weiss]
    ],
    [
        ["Hoodie"],
        [melon_code, natural_raw],
        [motiv__11F_Logo_schwarz]
    ],
    [
        ["Hoodie"],
        [atlantic_blue, bright_red, glazed_green, burgundy, deep_chocolate],
        [motiv__11_Kasten_weiss]
    ],
    [
        ["Hoodie"],
        [melon_code, natural_raw],
        [motiv__11_Kasten_schwarz]
    ],
    [
        ["Hoodie"],
        [atlantic_blue, bright_red, glazed_green, burgundy, deep_chocolate],
        [motiv__Fussball_ist_bunt_weiss]
    ],
    [
        ["Hoodie"],
        [melon_code, natural_raw],
        [motiv__Fussball_ist_bunt_schwarz]
    ],
    [
        ["Hoodie"],
        [atlantic_blue, bright_red, glazed_green, burgundy, deep_chocolate],
        [motiv__11F_innen_weiss]
    ],
    [
        ["Hoodie"],
        [melon_code, natural_raw],
        [motiv__11F_innen_schwarz]
    ],
    [
        ["Hoodie"],
        [atlantic_blue, bright_red, glazed_green, burgundy, deep_chocolate],
        [motiv__11F_innen_doppelpunkt_weiss]
    ],
    [
        ["Hoodie"],
        [melon_code, natural_raw],
        [motiv__11F_innen_doppelpunkt_schwarz]
    ],
    [
        ["Hoodie"],
        [royal_blue],
        [motiv_HoG_Peace_royal_blue]
    ],
    [
        ["Hoodie"],
        [heather_grey],
        [motiv_HoG_Peace_grau]
    ],
    [
        ["Hoodie"],
        [french_navy],
        [motiv_HoG_Peace_french_navy]
    ],
]


// 11F_ZK_TShirts
var collection = [
    [
        ["T_Shirt"],
        [white],
        [motiv_11F_ZK_TShirt1]
    ]
]




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

function schnell() {
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
    //     var file_Motiv_X = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/" + motiv + ".psd");
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

    gotoLayer("heather_texture")
    makeVisible();
    // var heather_texture= new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/_Orga/Heather_Textur/heather_texture_v2.jpg");
    smartObject_placeFile(new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/_Orga/Heather_Textur/heather_texture_v2.jpg"));
    nameLayer("heather_texture");


    // =======================================================
    var idtransform = stringIDToTypeID("transform");
    var desc4 = new ActionDescriptor();
    var idfreeTransformCenterState = stringIDToTypeID("freeTransformCenterState");
    var idquadCenterState = stringIDToTypeID("quadCenterState");
    var idQCSAverage = stringIDToTypeID("QCSAverage");
    desc4.putEnumerated(idfreeTransformCenterState, idquadCenterState, idQCSAverage);
    var idoffset = stringIDToTypeID("offset");
    var desc5 = new ActionDescriptor();
    var idhorizontal = stringIDToTypeID("horizontal");
    var idpixelsUnit = stringIDToTypeID("pixelsUnit");
    desc5.putUnitDouble(idhorizontal, idpixelsUnit, 0.000000);
    var idvertical = stringIDToTypeID("vertical");
    var idpixelsUnit = stringIDToTypeID("pixelsUnit");
    desc5.putUnitDouble(idvertical, idpixelsUnit, 0.000000);
    var idoffset = stringIDToTypeID("offset");
    desc4.putObject(idoffset, idoffset, desc5);
    executeAction(idtransform, desc4, DialogModes.ALL);

    hide("heather_texture");
    layer_selectByColor("orange");
    doc.close(SaveOptions.SAVECHANGES);

}





function correctRGB() {
    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        // files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        files = folders[a].getFiles(/.+\.(tif|psd)$/i);
        if (files.length < 1) continue;

        for (var b in files) {
            var thisFile = files[b];
            var doc_file = new File(thisFile);


            try {



                // Motiv auf 86% Deckkraft ????
                // oder hab ich das mit der Graditionskurve geregelt ????


                // fixMask(layer_getIDXbyString("Maske")[0], 1);
                // moveLayer("heather_texture", "Farbecheck [init]", "up");
                // hide("heather_texture");
                // hide("Farbecheck [init]");
                // layer_selectByColor("orange");

                // if (array_contains(meta_getKeywords(thisFile), "Hoodie") && array_contains(meta_getKeywords(thisFile), "vorne")) {
                if (!array_contains(meta_getKeywords(thisFile), "Frauen_Hoodie")) {
                    app.open(doc_file);
                    var doc = app.activeDocument;


                    layer_selectByColor("orange");
                    // if (array_contains(meta_getKeywords(thisFile), "vorne")) {
                    //     var motiv = "Clash_11Freunde_Hoodie_grau_vorne";
                    // } else {
                    //     var motiv = "Clash_11Freunde_Hoodie_grau_hinten";
                    // }
                    // var motiv = "Clash_11Freunde_Hoodie_grau_hinten";
                    // var file_Motiv_X = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/" + motiv + ".psd");
                    // smartObject_placeFile(file_Motiv_X);

                    var farbe = white;
                    if (farbe[4] == 0) {
                        hide("heather_texture")
                    } else {
                        makeVisible("heather_texture")
                    }

                    for (var c = 0; c < layer_getIDXbyString("Farbe").length; c++) {
                        gotoLayer(layer_getIDXbyString("Farbe")[c])
                        layer_solidColorHSB_change(farbe[0], farbe[1], farbe[2]);
                        nameLayer(layer_getName(getActiveLayerIndex()).replace(/\[.*\]/g, "[" + farbe[3] + "]"));
                    };

                    var name_base = GetFileNameOnly(app.activeDocument.name).replace(/(__RGB)/g, "")
                    gotoLayer(layer_getIDXbyString(name_base + "__grau")[0]);
                    // ToD_curves_shirt_modify(0, farbe[2] * 0.62, 128, 128, 192, 192, 255, 255);
                    // ToD_curves_shirt_modify(0, 0, 128, 128, 192, 192, 255, 255);
                    var schatten_korr = farbe[2] - 80;
                    if (schatten_korr >= 0) {
                        schatten_korr = schatten_korr * 1;
                    } else {
                        schatten_korr = 0;
                    }
                    ToD_curves_shirt_modify(0, schatten_korr, 128, 128, 192, 192, 255, 255);

                    layer_selectByColor("orange");
                    doc.close(SaveOptions.SAVECHANGES);
                }
            } catch (e) {
                $.writeln("Error: " + e)
            }
        }
    }

    function FindAllFolders(srcFolderStr, destArray) {
        var fileFolderArray = Folder(srcFolderStr).getFiles();
        for (var i = 0; i < fileFolderArray.length; i++) {
            var fileFoldObj = fileFolderArray[i];
            if (fileFoldObj instanceof File) {} else {
                destArray.push(Folder(fileFoldObj));
                FindAllFolders(fileFoldObj.toString(), destArray);
            }
        }
        return destArray;
    };
}

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


run(collection);
// correctRGB();
// schnell();

// color2csv()
// loopMotive();
// ToD_exportMotive();
// loopFarben();
// createRGB();

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


function run(x) {
    var farbe2, motiv2, motiv_main, motivDruck, rohling;

    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);
    time_start();
    $.writeln("Start: " + start)

    for (var a in folders) {
        files = [];
        // files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        files = folders[a].getFiles(/.+\RGB.psd$/i);
        if (files.length < 1) continue;

        for (var b in files) {
            var thisFile = files[b];
            var doc_file = new File(thisFile);
            // $.writeln("GET " + decodeURIComponent(thisFile));

            try {

                for (var a = 0; a < x.length; a++) {
                    // $.writeln(a + " - " + x[a]);

                    for (var b = 0; b < x[a].length; b++) {

                        if (x[a][0].length == 1) {
                            if (array_contains(meta_getKeywords(thisFile), x[a][0][0])) {
                                app.open(doc_file);
                            }
                        }

                        // if (documents.length != 0) {
                        try {
                            for (var c = 0; c < x[a][b].length; c++) {
                                // $.writeln(a + "-" + b + "-" + c + " - " + x[a][b][c])
                                var name_base = GetFileNameOnly(app.activeDocument.name).replace(/(__RGB)/g, "")
                                $.writeln("PROCESS " + name_base)

                                for (var d = 0; d < x[a][2][c].length; d++) {
                                    // $.writeln(a + "-" + b + "-" + c + "-" + d + " - " + x[a][b][c][d] + " - Motiv");

                                    if (x[a][2][c][d]) {
                                        // $.writeln(array_contains(meta_getKeywords(thisFile), "vorne") + " " + d);
                                        // $.writeln(array_contains(meta_getKeywords(thisFile), "hinten") + " " + d)
                                        if ((array_contains(meta_getKeywords(thisFile), "vorne") && d <= 0) || (array_contains(meta_getKeywords(thisFile), "hinten") && d >= 1)) {


                                            for (g = 0; g < x[a][1].length; g++) {
                                                var direction = "";
                                                if (array_contains(meta_getKeywords(thisFile), "vorne") && d <= 0) {
                                                    var direction = "__vorne"
                                                } else if (array_contains(meta_getKeywords(thisFile), "hinten") && d >= 1) {
                                                    var direction = "__hinten"
                                                }
                                                rohling = x[a][0][0];
                                                motiv2 = x[a][2][c][d].replace("_vorne", "").replace("_hinten", "");
                                                motiv_main = x[a][2][c][0];
                                                if (typeof motiv_main !== 'undefined') {
                                                    if (motiv_main == "blanko") {
                                                        motiv_main = x[a][2][c][1];
                                                    }
                                                    motivDruck = motiv_main.replace(/(.*)(_\(.*\))/g, "$1").replace("_vorne", "").replace("_hinten", "").replace("_Hoodie", "").replace("_Shirt", "").replace("_schwarz", "").replace("_grau", "");
                                                }
                                                motivFarbe = motiv_main.replace("_vorne", "").replace("_hinten", "");
                                                farbe2 = x[a][1][g][3];
                                                $.writeln(rohling + " -- " + motiv2 + " -- " + motiv_main + " -- " + motivFarbe + " -- " + motivDruck + " -- " + farbe2)


                                                farbe2 = x[a][1][g][3];

                                                var export_path = "~/Arbeit/11Freunde/TextilOnDemand/Output";

                                                // var export_path = new Folder(export_path + "/" + x[0][3][0] + "/" + x[0][3][1]);
                                                var export_path_print = new Folder(export_path + "/" + motivDruck + "/" + rohling + "__" + motivFarbe);
                                                if (!export_path_print.exists) export_path_print.create();
                                                // alert(export_path)

                                                // var export_name = x[a][0][0] + "__" + motiv2 + "__" + farbe2 + "__(" + name_base + ")";
                                                // var export_name = x[0][3][1] + "__" + farbe2 + "__(" + name_base.replace(" ", "_") + ")";
                                                var export_name = rohling + "__" + farbe2 + direction + "__" + motiv2 + "__(" + name_base.replace(" ", "_") + ")";

                                                var export_file = new File(export_path_print + "/" + export_name + ".jpg");
                                                $.writeln("export_file: " + export_file);
                                                if (!export_file.exists) {

                                                    layer_selectByColor("orange");

                                                    var file_Motiv_X = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/" + x[a][2][c][d] + ".psd");
                                                    smartObject_placeFile(file_Motiv_X);

                                                    for (var e = 0; e < layer_getIDXbyString("Farbe").length; e++) {
                                                        gotoLayer(layer_getIDXbyString("Farbe")[e])
                                                        layer_solidColorHSB_change(x[a][1][g][0], x[a][1][g][1], x[a][1][g][2]);
                                                    }
                                                    gotoLayer("heather_texture");
                                                    if (x[a][1][g][4] == 0) {
                                                        hide()
                                                    } else {
                                                        makeVisible()
                                                    }
                                                    gotoLayer(name_base + "__grau");
                                                    // ToD_curves_shirt_modify(0, x[a][1][g][2] * 0.62, 128, 128, 192, 192, 255, 255);
                                                    var schatten_korr = x[a][1][g][2] - 80;
                                                    if (schatten_korr >= 0) {
                                                        schatten_korr = schatten_korr * 1;
                                                    } else {
                                                        schatten_korr = 0;
                                                    }
                                                    ToD_curves_shirt_modify(0, schatten_korr, 128, 128, 192, 192, 255, 255);


                                                    SaveForWeb("JPEG", export_path_print, export_name, f, f, f, t, t, 255, 255, 255, "Meta_all_noKameraInfo", 66, t, t, 0);
                                                    $.writeln("saved " + decodeURIComponent(export_path_print) + "/" + export_name)

                                                    try {
                                                        // var export_path_web = export_path.replace("Output", "Output_Web");
                                                        // $.writeln("webpath "+export_path_web)
                                                        // var export_path_web = new Folder(export_path_web);

                                                        var export_path_web = new Folder(export_path + "_Web" + "/" + motivDruck + "/" + rohling + "__" + motivFarbe);
                                                        if (!export_path_web.exists) export_path_web.create();
                                                        SaveForWeb("JPEG", export_path_web, export_name, 50, f, f, t, t, 255, 255, 255, "Meta_all_noKameraInfo", 66, t, t, 0);
                                                        $.writeln("saved WEB " + decodeURIComponent(export_path_web) + "/" + export_name)
                                                    } catch (e) {
                                                        $.writeln("Error: " + e);
                                                    }



                                                } else {
                                                    $.writeln("export_file existiet bereits")
                                                }
                                            }
                                            emptyProtocoll();
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            $.writeln("Error_1: " + e);
                        }
                    }
                    try {
                        if (documents.length != 0) {
                            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                        }
                    } catch (e) {
                        alert("error2 " + e)
                    }
                }
            } catch (e) {
                alert("error " + e)
            }
        }
    }
    // $.writeln("Ende: " + time_stop(start))
    var stop = new Date().getTime();
    var elapsed = (stop - start) / 1000;
    var msg = ("Done (" + Number(elapsed).toFixed(3) + " secs).");
    $.writeln(msg);

}






function createRGB() {
    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        files = folders[a].getFiles(/.+\.dng$/i);
        if (files.length < 1) continue;

        for (var b in files) {
            var thisFile = files[b];
            var doc_file = new File(thisFile);

            try {
                var name_base = decodeURIComponent(GetFileNameOnly(doc_file.name));
                var doc_path = doc_file.path;

                var file_mood = new File(doc_path + "/" + name_base + "__mood.jpg");
                var file_grau = new File(doc_path + "/" + name_base + "__grau.jpg");
                var file_heather = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/_Orga/Heather_Textur/heather_texture.jpg");
                var file_heather_breit = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/_Orga/Heather_Textur/heather_texture_breit.jpg");
                var file_Motiv = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/11-Kasten_orange.psd");
                var file_map = new File(doc_path + "/" + name_base + "__map.psd");
                var saveFolder = new Folder(doc_path.replace(/(DNG\/Shooting%20Sortierung)/g, "RGB"));
                if (!saveFolder.exists) saveFolder.create();
                var file_RGB = new File(saveFolder + "/" + name_base + "__RGB.psd");

                if (!file_map.exists) {
                    app.open(file_grau);
                    gaussianBlur(10);
                    savePSD_v2(file_map, f, t, t, f);
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                }


                // See if the file exists
                if (file_mood.exists && file_grau.exists && file_map.exists && !file_RGB.exists) {
                    // if (file_mood.exists && file_grau.exists && file_map.exists) {

                    // get Keywords
                    // meta_getKeywords(thisFile);


                    // try {
                    //     alert(array_contains(meta_getKeywords(thisFile), "Fuser"))
                    // } catch (e) {
                    //     alert("error " + e)
                    // }

                    try {
                        // var name_base = GetFileNameOnly(doc_file.name);
                        // var doc_path = doc_file.path;
                        // doc_create(name_base + "__RGB", 1075.2, 1612.8, 300, 8); // 4480x6720px @300dpi
                        // doc_create(name_base + "__RGB", 4480, 6720, 300, 8); // 4480x6720px @300dpi
                        doc_create(name_base + "__RGB", "RGB", "Adobe RGB (1998)", "px", 4480, 6720, 300, 8);

                        app.activeDocument.info.keywords = meta_getKeywords(thisFile);


                        smartObject();
                        smartObject_placeFile(file_mood);
                        smartObject_ConvertToLinked(file_mood);
                        revealAll();
                        trim(true, true, true, true);
                        var doc = app.activeDocument;
                        app.activeDocument.artLayers.add();
                        createGroup_ToD("Textil");
                        gotoLayer("Ebene 1");

                        smartObject();
                        smartObject_placeFile(file_grau);
                        smartObject_ConvertToLinked(file_grau);

                        layer_duplicate(name_base + "__grau_struktur", 100, "linearLight", "none", false, true);
                        brightnessEvent(0, -50);
                        highPass(10);

                        gotoLayer(name_base + "__grau");
                        gaussianBlur(10);


                        createColorLayer("Farbe [init]", "overlay", "green", 100, "none", 214, 55, 37);
                        ToD_farbcheck_selection(1403, 2396, 3247, 4240, true);
                        createColorLayer("Farbecheck [init]", "normal", "red", 100, false, 214, 55, 37);

                        app.activeDocument.artLayers.add();
                        smartObject();
                        layer_setBlendMode("softLight");
                        if (app.activeDocument.width > app.activeDocument.height) {
                            smartObject_placeFile(file_heather_breit);
                            app.activeDocument.activeLayer.name = "heather_texture";
                        } else {
                            smartObject_placeFile(file_heather);
                        }
                        moveLayer("heather_texture", "Farbecheck [init]", "up");



                        // OPEN path jpg
                        var path_of_path_docs = "/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/_Orga/Pfad/"
                        open(new File(path_of_path_docs + name_base + ".jpg"));

                        path2selection("Path 1");
                        selection2mask();

                        selectOpenDoc(-1);
                        kanalberechnung_ToD(name_base + ".jpg");
                        gotoLayer("Textil");
                        selection2mask();
                        smartBrushWorkspace(0, 0, 1.2, 0, 44, true, false, false, false, false, 100);
                        // smartBrushWorkspace(smartBrushRadius, smartBrushSmooth, smartBrushFeather, smartBrushContrast, smartBrushShiftEdge, sampleAllLayers, smartBrushUseSmartRadius, smartBrushUseDeepMatte, autoTrimap, smartBrushDecontaminate, smartBrushDeconAmount)


                        open(new File(path_of_path_docs + name_base + ".jpg"));
                        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

                        // transform heather to textil-size
                        layer_getMaskBounds("Textil");
                        gotoLayer("heather_texture");
                        var r = app.preferences.rulerUnits;
                        app.preferences.rulerUnits = Units.PIXELS;
                        ToD_transform(parseFloat(MaskBound_x), parseFloat(MaskBound_y), parseFloat(MaskBound_w), parseFloat(MaskBound_h));
                        app.preferences.rulerUnits = r;
                        hide();
                        createGroup_ToD("Maske");
                        layer_createMask();


                        ToD_createLayer("Motiv", 100, layer_getIDXbyString("heather_texture") + 1);
                        smartObject();
                        smartObject_placeFile(file_Motiv);
                        layer_setColorLabel("orange");
                        ToD_transform_percent(0, 1800, 45, 45);
                        // setLayerOpacity(86);
                        gaussianBlur(0.5);
                        filter_displace(60, 30, file_map, false);
                        ToD_curves_schatten(0, 12, 255, 243);
                        ToD_filterFX_setting(3, 100, "luminosity");

                        gotoLayer(name_base + "__grau");
                        layer_duplicate(name_base + "__schatten", 100, "multiply", "none", false, true);
                        moveLayer(name_base + "__schatten", "Maske", "PlaceAtBeginning");
                        gotoLayer(name_base + "__schatten");
                        layer_ClippingLayer("clip");
                        ToD_curves_schatten(0, 0, 128, 255);

                        gotoLayer(name_base + "__grau");
                        ToD_curves_shirt_create(0, 0, 128, 128, 192, 192, 255, 255);

                        layer_selectByColor("orange");

                        savePSD_v2(file_RGB, f, t, t, t);
                        // app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

                    } catch (e) {
                        alert("error " + e)
                    }
                }
            } catch (e) {
                alert("error " + e)
            }
        }
    }


};

function FindAllFolders(srcFolderStr, destArray) {
    var fileFolderArray = Folder(srcFolderStr).getFiles();
    for (var i = 0; i < fileFolderArray.length; i++) {
        var fileFoldObj = fileFolderArray[i];
        if (fileFoldObj instanceof File) {} else {
            destArray.push(Folder(fileFoldObj));
            FindAllFolders(fileFoldObj.toString(), destArray);
        }
    }
    return destArray;
};


/*********************************/
/* FUNCTIONS *********************/
/*********************************/


// =======================================================
function smartObject_placeFile(_file) {
    var d = new ActionDescriptor();
    d.putPath(s2t("null"), _file);
    executeAction(s2t("placedLayerReplaceContents"), d, DialogModes.NO);
}

// =======================================================
function smartObject_ConvertToLinked(_file) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d.putPath(s2t("using"), new File(_file));
    executeAction(s2t("placedLayerConvertToLinked"), d, DialogModes.NO);
}

// =======================================================
function doc_create(_name, _mode, _profile, _unit, _width, _height, _resolution, _depth) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var l = new ActionList();
    d2.putString(s2t("name"), _name);
    d2.putBoolean(s2t("artboard"), false); //artboard
    d2.putBoolean(s2t("autoPromoteBackgroundLayer"), false); //autoPromoteBackgroundLayer

    if (_mode == "RGB") {
        var modeX = "RGBColorMode";
    }
    if (_mode == "CMYK") {
        var modeX = "CMYKColorMode";
    }
    if (_mode == "grau") {
        var modeX = "grayscaleMode";
    }
    if (_mode == "bitmap") {
        var modeX = "bitmapMode";
    }
    if (_mode == "Lab") {
        var modeX = "labColorMode";
    }


    var inch = 2.54;
    if (_unit == "px") {
        var widthX = _width * 72 / _resolution;
        var heightX = _height * 72 / _resolution;
    }
    if (_unit == "mm") {
        var widthX = _width / inch * 72 / 10;
        var heightX = _height / inch * 72 / 10;
    }
    if (_unit == "cm") {
        var widthX = _width / inch * 72;
        var heightX = _height / inch * 72;
    }
    if (_unit == "inch") {
        var widthX = _width * 72;
        var heightX = _height * 72;
    }

    d2.putClass(s2t("mode"), s2t(modeX));
    d2.putUnitDouble(s2t("width"), s2t("distanceUnit"), widthX);
    d2.putUnitDouble(s2t("height"), s2t("distanceUnit"), heightX);
    d2.putUnitDouble(s2t("resolution"), s2t("densityUnit"), _resolution);
    d2.putDouble(s2t("pixelScaleFactor"), 1); //pixelScaleFactor
    d2.putEnumerated(s2t("fill"), s2t("fill"), s2t("transparency"));
    d2.putInteger(s2t("depth"), _depth);
    d2.putString(s2t("profile"), _profile);
    d2.putList(s2t("guides"), l);
    d.putObject(s2t("new"), s2t("document"), d2);
    executeAction(s2t("make"), d, DialogModes.NO);
}

// =======================================================
function gaussianBlur(_radius) {
    var d = new ActionDescriptor();
    d.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _radius);
    executeAction(s2t("gaussianBlur"), d, DialogModes.NO);
}

// =======================================================
function brightnessEvent(_brightness, _center) {
    var d = new ActionDescriptor();
    d.putInteger(s2t("brightness"), _brightness);
    d.putInteger(s2t("center"), _center);
    executeAction(s2t("brightnessEvent"), d, DialogModes.NO);
}

// =======================================================
function highPass(_radius) {
    var d = new ActionDescriptor();
    d.putUnitDouble(s2t("radius"), s2t("pixelsUnit"), _radius);
    executeAction(s2t("highPass"), d, DialogModes.NO);
}

// =======================================================
function layer_duplicate(_name, _opacity, _blendMode, _color, _clip, _copy) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    d2.putString(s2t("name"), _name);
    d2.putEnumerated(s2t("mode"), s2t("blendMode"), s2t(_blendMode));
    d2.putUnitDouble(s2t("opacity"), s2t("percentUnit"), _opacity);
    d2.putBoolean(s2t("group"), _clip);
    d2.putEnumerated(s2t("color"), s2t("color"), s2t(_color));
    d.putObject(s2t("new"), s2t("layer"), d2);
    d.putEnumerated(s2t("using"), s2t("areaSelector"), s2t("selectionEnum"));
    d.putBoolean(s2t("copy"), _copy);
    executeAction(s2t("make"), d, DialogModes.NO);
}

// =======================================================
function path2selection(_pathName) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    r2.putName(s2t("path"), _pathName);
    d.putReference(s2t("to"), r2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

// =======================================================
function selection2mask() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    d.putClass(s2t("new"), s2t("channel"));
    r.putEnumerated(s2t("channel"), s2t("channel"), s2t("mask"));
    d.putReference(s2t("at"), r);
    d.putEnumerated(s2t("using"), s2t("userMaskEnabled"), s2t("revealSelection"));
    executeAction(s2t("make"), d, DialogModes.NO);
}

// =======================================================
function selectOpenDoc(_ref) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putOffset(s2t("document"), _ref);
    d.putReference(s2t("null"), r);
    d.putInteger(s2t("documentID"), 689);
    executeAction(s2t("select"), d, DialogModes.NO);
}

// =======================================================
function kanalberechnung_ToD(_file) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    var r3 = new ActionReference();
    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    r2.putName(s2t("document"), _file);
    d2.putReference(s2t("to"), r2);
    r3.putEnumerated(s2t("channel"), s2t("channel"), s2t("transparencyEnum"));
    r3.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("merged"));
    r3.putName(s2t("document"), _file);
    d2.putReference(s2t("source2"), r3);
    d.putObject(s2t("to"), s2t("calculation"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

// =======================================================
function createGroup_ToD(name2) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    r.putClass(s2t("layerSection"));
    d.putReference(s2t("null"), r);
    r2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("from"), r2);
    d2.putString(s2t("name"), name2);
    d.putObject(s2t("using"), s2t("layerSection"), d2);
    executeAction(s2t("make"), d, DialogModes.NO);
}

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
function smartBrushWorkspace(smartBrushRadius, smartBrushSmooth, smartBrushFeather, smartBrushContrast, smartBrushShiftEdge, sampleAllLayers, smartBrushUseSmartRadius, smartBrushUseDeepMatte, autoTrimap, smartBrushDecontaminate, smartBrushDeconAmount) {
    var d = new ActionDescriptor();
    d.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    d.putInteger(s2t("smartBrushRadius"), smartBrushRadius);
    d.putInteger(s2t("smartBrushSmooth"), smartBrushSmooth);
    d.putUnitDouble(s2t("smartBrushFeather"), s2t("pixelsUnit"), smartBrushFeather);
    d.putUnitDouble(s2t("smartBrushContrast"), s2t("percentUnit"), smartBrushContrast);
    d.putUnitDouble(s2t("smartBrushShiftEdge"), s2t("percentUnit"), smartBrushShiftEdge);
    d.putBoolean(s2t("sampleAllLayers"), sampleAllLayers);
    d.putBoolean(s2t("smartBrushUseSmartRadius"), smartBrushUseSmartRadius);
    d.putBoolean(s2t("smartBrushUseDeepMatte"), smartBrushUseDeepMatte);
    d.putBoolean(s2t("autoTrimap"), autoTrimap);
    d.putBoolean(s2t("smartBrushDecontaminate"), smartBrushDecontaminate);
    d.putUnitDouble(s2t("smartBrushDeconAmount"), s2t("percentUnit"), smartBrushDeconAmount);
    d.putEnumerated(s2t("refineEdgeOutput"), s2t("refineEdgeOutput"), s2t("selectionOutputToUserMask"));
    executeAction(s2t("smartBrushWorkspace"), d, DialogModes.NO);
}

// =======================================================
function ToD_farbcheck_selection(top, left, bottom, right, antiAlias) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    r.putProperty(s2t("channel"), s2t("selection"));
    d.putReference(s2t("null"), r);
    d2.putUnitDouble(s2t("top"), s2t("pixelsUnit"), top);
    d2.putUnitDouble(s2t("left"), s2t("pixelsUnit"), left);
    d2.putUnitDouble(s2t("bottom"), s2t("pixelsUnit"), bottom);
    d2.putUnitDouble(s2t("right"), s2t("pixelsUnit"), right);
    d.putObject(s2t("to"), s2t("ellipse"), d2);
    d.putBoolean(s2t("antiAlias"), antiAlias);
    executeAction(s2t("set"), d, DialogModes.NO);
}

// =======================================================
function revealAll() {
    var d = new ActionDescriptor();
    executeAction(s2t("revealAll"), d, DialogModes.NO);
}

// =======================================================
function trim(top, bottom, left, right) {
    var d = new ActionDescriptor();
    d.putEnumerated(s2t("trimBasedOn"), s2t("trimBasedOn"), s2t("transparency"));
    d.putBoolean(s2t("top"), top);
    d.putBoolean(s2t("bottom"), bottom);
    d.putBoolean(s2t("left"), left);
    d.putBoolean(s2t("right"), right);
    executeAction(s2t("trim"), d, DialogModes.NO);
}


// =======================================================
function layer_setBlendMode(_blendMode) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putEnumerated(s2t("mode"), s2t("blendMode"), s2t(_blendMode));
    d.putObject(s2t("to"), s2t("layer"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

// =======================================================
function layer_getMaskBounds(_layer) {
    var startLayer = layer_selectedIDX_get();
    gotoLayer(_layer);
    loadSelectionOfMask();
    var MaskBound_b = [];
    var MaskBound_b = app.activeDocument.selection.bounds;
    var MaskBound_get = [];
    MaskBound_x = MaskBound_y = MaskBound_w = MaskBound_h = "";
    MaskBound_x = Math.floor(MaskBound_b[0].value);
    MaskBound_y = Math.floor(MaskBound_b[1].value);
    MaskBound_w = Math.ceil(MaskBound_b[2].value - MaskBound_b[0].value);
    MaskBound_h = Math.ceil(MaskBound_b[3].value - MaskBound_b[1].value);
    MaskBound_get.push(MaskBound_x, MaskBound_y, MaskBound_w, MaskBound_h);
    app.activeDocument.selection.deselect();
    layer_selectedIDX_set(startLayer);
    return MaskBound_get;
}


// =======================================================
function ToD_transform(horizontal, vertical, width, height) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSCorner0"));
    d2.putUnitDouble(s2t("horizontal"), s2t("pixelsUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("pixelsUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    var width2 = parseFloat(width / app.activeDocument.width * 100);
    var height2 = parseFloat(height / app.activeDocument.height * 100);
    $.writeln("width2 " + width2)
    $.writeln("height2 " + height2)
    d.putUnitDouble(s2t("width"), s2t("percentUnit"), width2);
    d.putUnitDouble(s2t("height"), s2t("percentUnit"), height2);
    executeAction(s2t("transform"), d, DialogModes.NO);
}

// =======================================================
function layer_createMask() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    d.putClass(s2t("new"), s2t("channel"));
    r.putEnumerated(s2t("channel"), s2t("channel"), s2t("mask"));
    d.putReference(s2t("at"), r);
    d.putEnumerated(s2t("using"), s2t("userMaskEnabled"), s2t("revealAll"));
    executeAction(s2t("make"), d, DialogModes.NO);
}


// =======================================================
/* _what "fullDocument" "mergeLayersNew" "currentLayer" */
function protocol_createSnapshot(_name, _what) {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    var r2 = new ActionReference();
    r.putClass(s2t("snapshotClass"));
    d.putReference(s2t("null"), r);
    r2.putProperty(s2t("historyState"), s2t("currentHistoryState"));
    d.putReference(s2t("from"), r2);
    d.putString(s2t("name"), _name);
    d.putEnumerated(s2t("using"), s2t("historyState"), s2t(_what));
    executeAction(s2t("make"), d, DialogModes.NO);
}


// =======================================================
function protocol_delSnapshop() {
    if (app.documents.length > 0) {
        try {
            var myDocument = app.activeDocument;
            // myDocument.layerComps.removeAll();
            var theStates = myDocument.historyStates;
            for (m = theStates.length - 1; m >= 1; m--) {
                if (theStates[m].snapshot == true) {
                    // $.writeln(m)
                    myDocument.activeHistoryState = theStates[m];
                    delHist();
                }
            };
        } catch (e) {}
    }
};

function delHist() {
    var d = new ActionDescriptor();
    var r = new ActionReference();
    // r.putProperty(charIDToTypeID('HstS'), charIDToTypeID('CrnH'));
    // d.putReference(charIDToTypeID('null'), r);
    // executeAction(charIDToTypeID('Dlt '), d, DialogModes.NO);

    r.putProperty(s2t('historyState'), s2t('currentHistoryState'));
    d.putReference(s2t('null'), r);
    executeAction(s2t('delete'), d, DialogModes.NO);
};


// =======================================================
function meta_getKeywords(_file) {
    if (!ExternalObject.AdobeXMPScript) ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript')
    var xmpFile = new XMPFile(_file.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_READ),
        xmp = xmpFile.getXMP();
    if (xmp.doesPropertyExist(XMPConst.NS_DC, 'subject')) {
        var i = xmp.iterator(XMPConst.ITERATOR_JUST_LEAFNODES, XMPConst.NS_DC, 'subject'),
            output = [];
        while (true) {
            var subject = i.next();
            if (subject) {
                output.push(decodeURIComponent(escape(subject.value)))
            } else {
                break;
            }
        }
        return output;
    }
};

// =======================================================
// https://community.adobe.com/t5/bridge-discussions/script-to-add-keywords-in-bridge-based-on-the-filename/m-p/8577169#M20977
function meta_setKeywords(file, Keys) {
    if (!ExternalObject.AdobeXMPScript) ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
    var xmpf = new XMPFile(File(file).fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE);
    var xmp = xmpf.getXMP();
    for (var s in Keys) {
        xmp.appendArrayItem(XMPConst.NS_DC, "subject", Keys, 0, XMPConst.PROP_IS_ARRAY);
    }
    if (xmpf.canPutXMP(xmp)) {
        xmpf.putXMP(xmp);
    }
    xmpf.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
};

// =======================================================
function array_contains(_array, _value) {
    for (var c = 0; c < _array.length; c++) {
        if (_array[c] === _value) {
            return true;
        }
    }
    return false;
};

// =======================================================
function ToD_exportMotive() {
    // var _motive_MAIN = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/_motive_MAIN.psd");
    var _motive_MAIN = new File("/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/_motive_MAIN.psd");
    app.open(_motive_MAIN);
    var i = 1;
    var saveFolder = "/Volumes/Archiv\ LOTUS/11Freunde_Auslagerung/TextilOnDemand/mood_Motive/export/";
    while (layer_checkExistence(i)) {
        selectLayers("selectAllLayers");
        hide();
        makeVisByIndex(i, t);
        var saveFile = saveFolder + layer_getName(i) + ".psd";
        savePSD_v2(new File(saveFile), t, t, t, f);
        i++;
    };
    app.documents.getByName("_motive_MAIN.psd").close(SaveOptions.DONOTSAVECHANGES);
}

// =======================================================
function ToD_createLayer(name2, opacity, layerID) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();

    r.putClass(s2t("layer"));
    d.putReference(s2t("null"), r);
    d2.putString(s2t("name"), name2);
    d2.putUnitDouble(s2t("opacity"), s2t("percentUnit"), opacity);
    d2.putEnumerated(s2t("color"), s2t("color"), s2t("grain"));
    d.putObject(s2t("using"), s2t("layer"), d2);
    d.putInteger(s2t("layerID"), layerID);
    executeAction(s2t("make"), d, DialogModes.NO);
}

// =======================================================
function ToD_transform_percent(horizontal, vertical, width, height) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    d.putEnumerated(s2t("freeTransformCenterState"), s2t("quadCenterState"), s2t("QCSAverage"));
    d2.putUnitDouble(s2t("horizontal"), s2t("pixelsUnit"), horizontal);
    d2.putUnitDouble(s2t("vertical"), s2t("pixelsUnit"), vertical);
    d.putObject(s2t("offset"), s2t("offset"), d2);
    d.putUnitDouble(s2t("width"), s2t("percentUnit"), width);
    d.putUnitDouble(s2t("height"), s2t("percentUnit"), height);
    executeAction(s2t("transform"), d, DialogModes.NO);
}

function filter_displace(_horizontalScale, _verticalScale, _displaceFile, _embedFile) {
    var d = new ActionDescriptor();
    d.putInteger(s2t("horizontalScale"), _horizontalScale);
    d.putInteger(s2t("verticalScale"), _verticalScale);
    d.putEnumerated(s2t("displacementMap"), s2t("displacementMap"), s2t("stretchToFit"));
    d.putEnumerated(s2t("undefinedArea"), s2t("undefinedArea"), s2t("repeatEdgePixels"));
    d.putPath(s2t("displaceFile"), _displaceFile);
    d.putBoolean(c2t("EmbF"), _embedFile);
    executeAction(s2t("displace"), d, DialogModes.NO);
}

function layer_setColorLabel(_color) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d2.putEnumerated(s2t("color"), s2t("color"), s2t(_color));
    d.putObject(s2t("to"), s2t("layer"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}

// =======================================================
function layer_selectByColor(_color) {
    selectLayers("selectNoLayers");
    var i = 1;
    while (layer_checkExistence(i)) {
        try {
            if (layer_getColorByIDX(i) === _color) {
                selectLayerBySelector(i, t);
            }
        } catch (e) {}
        i++;
    };
}

// =======================================================
function layer_getColorByIDX(_idx) {
    var m_Ref01 = new ActionReference();
    m_Ref01.putIndex(sTID("layer"), _idx);
    var m_Dsc01 = executeActionGet(m_Ref01);
    a = m_Dsc01.getEnumerationValue(cTID("Clr "));
    // return typeIDToCharID(a);        //returns charID    "Orng"
    return t2s(a); //returns stringID  "orange"
}

// =======================================================
/* "toggle", "clip", "unclip" */
function layer_ClippingLayer(_option) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var r = new ActionReference();
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    var d2 = executeActionGet(r);
    try {
        if (_option == "clip") {
            d.putReference(s2t("null"), r);
            executeAction(s2t("groupEvent"), d, DialogModes.NO);
        } else if (_option == "unclip") {
            d.putReference(s2t("null"), r);
            executeAction(s2t("ungroup"), d, DialogModes.NO);
        } else {
            if (d2.hasKey(charIDToTypeID('Grup')) && d2.getBoolean(charIDToTypeID('Grup'))) {
                d.putReference(s2t("null"), r);
                executeAction(s2t("ungroup"), d, DialogModes.NO);
            } else {
                d.putReference(s2t("null"), r);
                executeAction(s2t("groupEvent"), d, DialogModes.NO);
            }
        }
    } catch (e) {
        "error " + e
    }
}

// =======================================================
// ToD_curves_schatten(0, 0, 128, 255);
function ToD_curves_schatten(horizontal, vertical, horizontal2, vertical2) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var l = new ActionList();
    var l2 = new ActionList();
    var r = new ActionReference();

    d.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    r.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    d2.putReference(s2t("channel"), r);
    d3.putDouble(s2t("horizontal"), horizontal);
    d3.putDouble(s2t("vertical"), vertical);
    l2.putObject(s2t("paint"), d3);
    d4.putDouble(s2t("horizontal"), horizontal2);
    d4.putDouble(s2t("vertical"), vertical2);
    l2.putObject(s2t("paint"), d4);
    d2.putList(s2t("curve"), l2);
    l.putObject(s2t("curvesAdjustment"), d2);
    d.putList(s2t("adjustment"), l);
    executeAction(s2t("curves"), d, DialogModes.NO);
}

// =======================================================
function ToD_filterFX_setting(_filterIDX, _opacity, _blendMode) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var r = new ActionReference();

    r.putIndex(s2t("filterFX"), _filterIDX);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putUnitDouble(s2t("opacity"), s2t("percentUnit"), _opacity);
    d3.putEnumerated(s2t("mode"), s2t("blendMode"), s2t(_blendMode));
    d2.putObject(s2t("blendOptions"), s2t("blendOptions"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}




// ToD_curves_shirt_create(0, 0, 128, 128, 192, 192, 255, 255);
// ToD_curves_shirt_modify(0, 0, 128, 128, 192, 192, 255, 255);


function ToD_curves_shirt_create(horizontal, vertical, horizontal2, vertical2, horizontal3, vertical3, horizontal4, vertical4) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var d6 = new ActionDescriptor();
    var l = new ActionList();
    var l2 = new ActionList();
    var r = new ActionReference();

    d.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    r.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    d2.putReference(s2t("channel"), r);
    d3.putDouble(s2t("horizontal"), horizontal);
    d3.putDouble(s2t("vertical"), vertical);
    l2.putObject(s2t("paint"), d3);
    d4.putDouble(s2t("horizontal"), horizontal2);
    d4.putDouble(s2t("vertical"), vertical2);
    l2.putObject(s2t("paint"), d4);
    d5.putDouble(s2t("horizontal"), horizontal3);
    d5.putDouble(s2t("vertical"), vertical3);
    l2.putObject(s2t("paint"), d5);
    d6.putDouble(s2t("horizontal"), horizontal4);
    d6.putDouble(s2t("vertical"), vertical4);
    l2.putObject(s2t("paint"), d6);
    d2.putList(s2t("curve"), l2);
    l.putObject(s2t("curvesAdjustment"), d2);
    d.putList(s2t("adjustment"), l);
    executeAction(s2t("curves"), d, DialogModes.NO);
}


function ToD_curves_shirt_modify(horizontal, vertical, horizontal2, vertical2, horizontal3, vertical3, horizontal4, vertical4) {
    var d = new ActionDescriptor();
    var d2 = new ActionDescriptor();
    var d3 = new ActionDescriptor();
    var d4 = new ActionDescriptor();
    var d5 = new ActionDescriptor();
    var d6 = new ActionDescriptor();
    var d7 = new ActionDescriptor();
    var d8 = new ActionDescriptor();
    var l = new ActionList();
    var l2 = new ActionList();
    var r = new ActionReference();
    var r2 = new ActionReference();

    r.putIndex(s2t("filterFX"), 2);
    r.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    d.putReference(s2t("null"), r);
    d3.putEnumerated(s2t("presetKind"), s2t("presetKindType"), s2t("presetKindCustom"));
    r2.putEnumerated(s2t("channel"), s2t("channel"), s2t("composite"));
    d4.putReference(s2t("channel"), r2);
    d5.putDouble(s2t("horizontal"), horizontal);
    d5.putDouble(s2t("vertical"), vertical);
    l2.putObject(s2t("paint"), d5);
    d6.putDouble(s2t("horizontal"), horizontal2);
    d6.putDouble(s2t("vertical"), vertical2);
    l2.putObject(s2t("paint"), d6);
    d7.putDouble(s2t("horizontal"), horizontal3);
    d7.putDouble(s2t("vertical"), vertical3);
    l2.putObject(s2t("paint"), d7);
    d8.putDouble(s2t("horizontal"), horizontal4);
    d8.putDouble(s2t("vertical"), vertical4);
    l2.putObject(s2t("paint"), d8);
    d4.putList(s2t("curve"), l2);
    l.putObject(s2t("curvesAdjustment"), d4);
    d3.putList(s2t("adjustment"), l);
    d2.putObject(s2t("filter"), s2t("curves"), d3);
    d.putObject(s2t("filterFX"), s2t("filterFX"), d2);
    executeAction(s2t("set"), d, DialogModes.NO);
}




// selection2path(1, "Textil");
function selection2path(_tolerance, _name) {
    // selection2path
    var descriptor = new ActionDescriptor();
    var reference = new ActionReference();
    var reference2 = new ActionReference();
    reference.putClass(s2t("path"));
    descriptor.putReference(s2t("null"), reference);
    reference2.putProperty(s2t("selectionClass"), s2t("selection"));
    descriptor.putReference(s2t("from"), reference2);
    descriptor.putUnitDouble(s2t("tolerance"), s2t("pixelsUnit"), _tolerance);
    executeAction(s2t("make"), descriptor, DialogModes.NO);

    // select workpath
    var descriptor2 = new ActionDescriptor();
    var reference3 = new ActionReference();
    reference3.putProperty(s2t("path"), s2t("workPath"));
    descriptor2.putReference(s2t("null"), reference3);
    executeAction(s2t("select"), descriptor2, DialogModes.NO);

    // rename path
    var descriptor3 = new ActionDescriptor();
    var reference4 = new ActionReference();
    var reference5 = new ActionReference();
    reference4.putClass(s2t("path"));
    descriptor3.putReference(s2t("null"), reference4);
    reference5.putProperty(s2t("path"), s2t("workPath"));
    descriptor3.putReference(s2t("from"), reference5);
    descriptor3.putString(s2t("name"), _name);
    executeAction(s2t("make"), descriptor3, DialogModes.NO);
}