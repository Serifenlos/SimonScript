#!/bin/sh

project=/Users/simon/Arbeit/GitHub/SimonScript
folder=$project/source/_functions

#project=/Users/simon/Arbeit/__temp
#folder=$project/_functions


for paket in $folder/*; do                                  # loop alles im Ordner, nicht rekursiv
    
    if [ -f "$paket" ]; then                                # wenn es eine Datei ist
        paket_file=$(basename ${paket%%.*})                 # nur Dateinamen, ohne den Pfad und ohne Endung        
        paket_folder=${paket_file#_}                        # ohne führenden Unterstrich

        if [ -d "$folder/$paket_folder" ]; then             # loop im Functions-Ordner

            if [ -f "$folder/$paket_file.js" ]; then
                rm $folder/$paket_file.js              # entferne die alte Paket-Datei
            fi

            for single in $folder/$paket_folder/*; do       # get die einzelen Funktionen

                if  [[ "$single" != *XXX* ]] ; then           # schliesse die Dateien mit XXX im Dateinamen aus
                    single=$(basename "$single")
                    echo "// @codekit-prepend './$paket_folder/"$single"';" >> $folder/$paket_file.js        # fülle die neue Paket-Datei
                fi

            done
        fi
    fi
done


# osascript $project/source/_assets/build_helper__processFunctionsPaket.scpt
# osascript $project/source/_assets/build_helper__refreshCodekitProject.scpt

osascript -e "tell application \"CodeKit\" to refresh project containing path \"/Users/simon/Arbeit/GitHub/SimonScript\""