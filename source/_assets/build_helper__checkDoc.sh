#!/bin/zsh

project=/Users/simon/Arbeit/GitHub/SimonScript
folder=$project/source/_functions

for file in $project/docs/kit_helper/*; do
    kit=${file##*/}
    checkDoc=()
    checkFiles=()
    check=()


    if  [[ "$kit" == *functions__* ]] ; then
        
        path=../../source/_functions
        b=$(grep -Eo "$path.*\.js" $file)               # get link to functions from helper.kit
        b=($b)                                          # make array
        for i in ${b[@]}; do
            i=$(sed -e "s|$path\/.*\/\(.*\)\.js|\1|g" <<< $i)       # substring element
            checkDoc+=($i)                              # make array
        done


        paket_folder=$(sed -e "s|functions__\(.*\)\.kit|\1|g" <<< $kit)
        if [ -d "$folder/$paket_folder" ]; then             # loop im Functions-Ordner
            for single in $folder/$paket_folder/*; do       # get funktions from the physical filenames

                if  [[ $single != *XXX* ]] ; then           # schliesse die Dateien mit XXX im Dateinamen aus
                    single=$(basename $single)
                    single=${single//\.js/}                 # get just filename
                    checkFiles+=($single)                   # make array
                fi
            done
        fi
    fi


    if [[ ! -z ${checkFiles[@]} ]]; then
        # for del in "${checkDoc[@]}"; do                       # vergliche die beide
        #     checkFiles=( ${checkFiles[@]/$del/} )
        # done

        for target in "${checkDoc[@]}"; do                  # vergliche die beide
            for j in "${!checkFiles[@]}"; do
                if [[ ${checkFiles[j]} = $target ]]; then
                unset 'checkFiles[j]'                       # lösche die exakt gleichen Elemente
                fi
            done
        done

        
        for checkit in ${checkFiles[@]}; do                 # create list
            if [[ $checkit =~ [a-zA-Z0-9_] ]]; then         # just elements witch match any word character
                check+=("    - "$checkit"\n")
            fi
        done

        if [[ ! -z ${check[@]} ]]                           # set class "show" or "hide" to the Admonition
        then
            class="show"
        else 
            class="hide"
        fi

        # echo $kit
        # echo ${check[*]}
        # echo ${#check[*]}
        # echo $class
        # echo "-------------"

 
        perl -00pi -e "s/(!!! warning.*(\n*.*)*)/!!! warning $class \"not documented functions\"\n${check[*]}/g" $project/docs/kit_helper/$kit
    fi
done