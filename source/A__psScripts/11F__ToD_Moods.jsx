//@include "../../build/A__psScripts/functions/basic.jsx";
//@include "../../build/A__psScripts/functions/pref.jsx";
//@include "../../build/A__psScripts/functions/utils.jsx";
//@include "../../build/A__psScripts/functions/LUT-dodge.jsx";
//@include "../../build/A__psScripts/functions/LUT-burn.jsx";
//@include "../../build/A__psScripts/functions/dialog.jsx";
//@include "../../build/A__psScripts/functions/ready.jsx";
//@include "../../build/A__psScripts/functions/view.jsx";
//@include "../../build/A__psScripts/functions/layer.jsx";
//@include "../../build/A__psScripts/functions/save.jsx";
//@include "../../build/A__psScripts/functions/loopFiles.jsx";
//@include "../../build/A__psScripts/functions/meta.jsx";



// color2csv()
function color2csv() {
    var Colour = app.foregroundColor;
    var H = Colour.hsb.hue.toFixed(2);
    var S = Colour.hsb.saturation.toFixed(2);
    var B = Colour.hsb.brightness.toFixed(2);
    var hsb = [H, S, B]

    var filepath = "/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/ToD_farben.csv";
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
const french_navy = [240.00, 25.45, 21.57, "french_navy", 0]
const fresh_green = [110.76, 43.91, 58.04, "fresh_green", 0]
const geyser_green = [151.66, 16.59, 85.10, "geyser_green", 0]
const glazed_green = [184.13, 44.62, 25.49, "glazed_green", 0]
const golden_yellow = [52.34, 78.01, 94.51, "golden_yellow", 0]
const hay_yellow = [54.22, 77.58, 68.23, "hay_yellow", 0]
const india_ink_grey = [230.54, 21.11, 35.29, "india_ink_grey", 0]
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



// motiv_call = [front_Main, front_Varination, back_Name, back_Variation]
// Motiv Sets
const motiv__11_Kasten = ["11-Kasten_orange", "11-Kasten_weiss", false, false];
const motiv__11F_innen_doppelpunkt = ["11F-innen_doppelpunkt_schwarz", "11F-innen_doppelpunkt_weiss", false, false];
const motiv__11F_innen = ["11F-innen_schwarz", "11F-innen_weiss", false, false];
const motiv__11F_Logo_beidseitig = ["11F-Logo_beidseitig-vorne_schwarz", "11F-Logo_beidseitig-vorne_weiss", "11F-Logo_beidseitig-hinten_schwarz", "11F-Logo_beidseitig-hinten_weiss", ];
const motiv__11F_Logo = ["11F-Logo_schwarz", "11F-Logo_weiss", false, false];
const motiv__Auswärtsfans = ["Auswärtsfans_schwarz", "Auswärtsfans_weiss", false, false];
const motiv__Brehme = ["Brehme_schwarz", "Brehme_weiss", false, false];
const motiv__BrigadeHS = ["BrigadeHS_vorne", false, "BrigadeHS-hinten_schwarz", "BrigadeHS-hinten_weiss"];
const motiv__Fussball_ist_bunt = ["Fussball-ist-bunt_schwarz", "Fussball-ist-bunt_weiss", false, false];
const motiv__IKAUZ = ["IKAUZ_weiss", false, false, false];
const motiv__Nöhler = ["Nöhler", false, false, false];
const motiv__blanko = ["blanko", false, "blanko", false];

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
]



const farbe = [lava_grey, anthracite, stem_green, tangerine, caramel, wooden_heather, melon_code]
// const farbe = [wooden_heather]
// const farbe = [lava_grey]


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
}


function loopMotive() {
    protocol_delSnapshop();
    layer_selectByColor("orange");
    for (var g = 0; g < motive.length; g++) {
        doc.suspendHistory('ToD ' + motive[g], 'ToD_motivChange("' + motive[g] + '")');
        protocol_createSnapshot('ToD ' + motive[g], "mergeLayersNew");
    };
};

function ToD_motivChange(_file) {
    var file_Motiv_X = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/" + _file + ".psd");
    smartObject_placeFile(file_Motiv_X);
};


var collection = [
    [
        ["Spinner"],
        // spinner__color,
        // [white, canyon_pink],
        // [white],
        [natural_raw, heather_grey],
        // [white, natural_raw, black, caramel, ochre, fresh_green, stem_green, teal_monstera, serene_blue, royal_blue, french_navy, burgundy, cotton_pink, bright_red, heather_grey, black_heather_blue, heather_cranberry],
        [motiv__blanko, motiv__11_Kasten]
        // [motiv__11_Kasten, motiv__11F_innen_doppelpunkt]
        // [motiv__11_Kasten, motiv__11F_innen_doppelpunkt, motiv__Fussball_ist_bunt]
        // [motiv__11_Kasten, motiv__11F_innen_doppelpunkt, motiv__11F_innen, motiv__11F_Logo_beidseitig, motiv__11F_Logo, motiv__Auswärtsfans, motiv__Brehme, motiv__BrigadeHS, motiv__Fussball_ist_bunt, motiv__IKAUZ, motiv__Nöhler]
    ],
    [
        ["Sparker"],
        [white, dark_heather_grey, heather_grey, burgundy],
        [motiv__IKAUZ, motiv__Auswärtsfans]
    ]
]


// motiv__11_Kasten, motiv__11F_innen_doppelpunkt, motiv__11F_innen, motiv__11F_Logo_beidseitig, motiv__11F_Logo, motiv__Auswärtsfans, motiv__Brehme, motiv__BrigadeHS, motiv__Fussball_ist_bunt, motiv__IKAUZ, motiv__Nöhler

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





function run(x) {
    farbe2 = "q"
    motiv2 = "q"

    var folders = [];
    var topLevel = Folder.selectDialog("Wähle den obersten Ordner aus. \nDie Unterordner werden auch mitverarbeitet.");
    if (topLevel == null) return;
    folders = FindAllFolders(topLevel, folders);
    folders.unshift(topLevel);

    for (var a in folders) {
        files = [];
        // files = folders[a].getFiles(/.+\.(jpg|tif|psd|bmp|gif|png|)$/i);
        files = folders[a].getFiles(/.+\RGB.psd$/i);
        if (files.length < 1) continue;

        for (var b in files) {
            var thisFile = files[b];
            var doc_file = new File(thisFile);
            $.writeln(decodeURIComponent(thisFile));

            try {

                for (var a = 0; a < x.length; a++) {
                    $.writeln(a + " - " + x[a]);

                    for (var b = 0; b < x[a].length; b++) {

                        if (x[a][0].length == 1) {
                            if (array_contains(meta_getKeywords(thisFile), x[a][0][0])) {
                                app.open(doc_file);
                            }
                        }

                        //TODO hinten vorne unterscheiden 
                        //     heather einschalten
                        //     doc schliessen
                        //     emptyProtocoll richitg?
                        //     blanko noch einbauen


                        // if (documents.length != 0) {
                        try {
                            for (var c = 0; c < x[a][b].length; c++) {
                                // $.writeln(a + "-" + b + "-" + c + " - " + x[a][b][c])
                                var name_base = GetFileNameOnly(app.activeDocument.name).replace(/(__RGB)/g, "")

                                for (var d = 0; d < x[a][2][c].length; d++) {
                                    // $.writeln(a + "-" + b + "-" + c + "-" + d + " - " + x[a][b][c][d] + " - Motiv");

                                    if (x[a][2][c][d]) {
                                        $.writeln(array_contains(meta_getKeywords(thisFile), "vorne") + " " + d);
                                        $.writeln(array_contains(meta_getKeywords(thisFile), "hinten") + " " + d)
                                        if ((array_contains(meta_getKeywords(thisFile), "vorne") && d <= 1) || (array_contains(meta_getKeywords(thisFile), "hinten") && d >= 2)) {


                                            for (g = 0; g < x[a][1].length; g++) {
                                                motiv2 = x[a][2][c][d];
                                                farbe2 = x[a][1][g][3];

                                                var export_path = "~/Arbeit/11Freunde/TextilOnDemand/Test/test2/output";
                                                var export_name = x[a][0][0] + "__" + motiv2 + "__" + farbe2 + "__(" + name_base + ")";
                                                var export_file = new File(export_path + "/" + export_name + ".jpg");
                                                if (!export_file.exists) {

                                                    layer_selectByColor("orange");
                                                    var file_Motiv_X = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/" + x[a][2][c][d] + ".psd");
                                                    smartObject_placeFile(file_Motiv_X);

                                                    // $.writeln(motiv2)

                                                    // $.writeln("length " + g + " farbe " + x[a][1][g][3]);
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
                                                    ToD_curves_shirt_modify(0, x[a][1][g][2] * 0.62, 128, 128, 192, 192, 255, 255);



                                                    // $.writeln(name_base + "<->" + motiv2 + "<->" + farbe2)

                                                    // if (motiv2 != "q" && farbe2 != "q") {
                                                    //     if (motiv2) {
                                                    SaveForWeb("JPEG", export_path, export_name, f, f, f, t, t, 255, 255, 255, "Meta_ck", 66, t, t, 0);
                                                    $.writeln("saved " + export_name)
                                                    //     } else {
                                                    //         $.writeln("motiv ist false")
                                                    //     }
                                                    // } else {
                                                    //     $.writeln("qqqqqqqq found")
                                                    // }
                                                } else {
                                                    $.writeln("export_file existiet bereits")
                                                }
                                            }
                                            emptyProtocoll();
                                        }
                                    }
                                }
                            }
                        } catch (e) {}
                        // }
                        // } else {
                        //     alert("bitte alle Dateine schliessen, dann nochmal starten");
                        //     return;
                        // }
                    }
                    // break;
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
    alert("done")
}




run(collection);
// alert("ding")
// loopMotive();
// ToD_exportMotive();
// loopFarben();
// createRGB();

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
                var file_heather = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Heather_Textur/heather_texture.jpg");
                var file_heather_breit = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Heather_Textur/heather_texture_breit.jpg");
                var file_Motiv = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/11-Kasten_orange.psd");
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
                        var path_of_path_docs = "/Users/simon/Arbeit/11Freunde/TextilOnDemand/_Orga/Pfad/"
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
    gotoLayer(_layer);
    loadSelectionOfMask();
    var MaskBound_b = [];
    var MaskBound_b = app.activeDocument.selection.bounds;
    MaskBound_x = MaskBound_y = MaskBound_w = MaskBound_h = "";
    MaskBound_x = Math.floor(MaskBound_b[0].value);
    MaskBound_y = Math.floor(MaskBound_b[1].value);
    MaskBound_w = Math.ceil(MaskBound_b[2].value - MaskBound_b[0].value);
    MaskBound_h = Math.ceil(MaskBound_b[3].value - MaskBound_b[1].value);
    app.activeDocument.selection.deselect();
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
}

// =======================================================
function array_contains(_array, _value) {
    for (var c = 0; c < _array.length; c++) {
        if (_array[c] === _value) {
            return true;
        }
    }
    return false;
}

// =======================================================
function ToD_exportMotive() {
    var _motive_MAIN = new File("/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/_motive_MAIN.psd");
    app.open(_motive_MAIN);
    var i = 1;
    var saveFolder = "/Users/simon/Arbeit/11Freunde/TextilOnDemand/mood_Motive/";
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