#!/bin/sh

# project=/Users/simon/Arbeit/GitHub/SimonScript
# count=1
# for file in $project/docs/functions_helper/*; do
#     kit=${file##*/}
#     until [ "$(perl -0777 -ne '/{{([^}]*)}}/ && print $1,"\n";' $project/docs/functions_helper/$kit)" = "" ] || [ ! $count -lt 1000 ]
#     do
#         #echo $count
#         count=`expr $count + 1`
#         g=$(perl -0777 -ne '/{{([^}]*)}}/ && print $1,"\n";' $project/docs/functions_helper/$kit)
#         #d=$(awk '1;/\(/{exit}' $project/source/_functions/$g > $project/docs/assets/.temp.txt)
#         #e=$(gsed "s|.*function\s*\([^{]*\).*|\1|; s|[ \t]*$||" $project/docs/assets/.temp.txt)
#         e=$(perl -0777 -pe "s|\n| |; s,.*function\s*([A-z0-9]+?\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))\s*\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\}|\{)*\})*\}(\n*.*)*,\2\1," $project/source/_functions/$g)
#         gsed -i "s|{{$g}}|\n<button class='btn' data-clipboard-text='$e\;'></button>\n{\: \.btn_p }\n\n\?\?\? '$e\;'\n    \`\`\` js linenums='1'\n\    <\!-- \@import '..\/..\/source\/_functions\/$g' --\>\n    \`\`\`\n\n\[\]\(file\:\/\/$project\/source\/_functions\/$g)\n|g; s|'|\"|g" $project/docs/functions_helper/$kit
#     done
# done

# project=/Users/simon/Arbeit/GitHub/SimonScript
# count=1
# for file in $project/docs/kit_helper/*; do
#     kit=${file##*/}
#     until [ "$(perl -0777 -ne '/{\{([^}]*)}}/ && print $1,"\n";' $project/docs/kit_helper/$kit)" = "" ] || [ ! $count -lt 1000 ]
#     do
#         #echo $count
#         count=`expr $count + 1`
#         g=$(perl -0777 -ne '/{\{([^}]*)}}/ && print $1,"\n";' $project/docs/kit_helper/$kit)
#         #d=$(awk '1;/\(/{exit}' $project/source/_functions/$g > $project/docs/assets/.temp.txt)
#         #e=$(gsed "s|.*function\s*\([^{]*\).*|\1|; s|[ \t]*$||" $project/docs/assets/.temp.txt)
#         e=$(perl -0777 -pe "s|\n| |; s,.*function\s*([A-z0-9]+?\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))\s*\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\}|\{)*\})*\}(\n*.*)*,\2\1," $project/source/_functions/$g)
#         gsed -i "s|{{$g}}|\n<button class='btn' data-clipboard-text='$e\;'></button>\n{\: \.btn_p }\n\n\?\?\? '$e\;'\n    \`\`\` js linenums='1'\n\    <\!-- \@import '..\/..\/source\/_functions\/$g' --\>\n    \`\`\`\n\n\[\]\(file\:\/\/$project\/source\/_functions\/$g)\n|g; s|'|\"|g" $project/docs/kit_helper/$kit
#     done
# done


project=~/Arbeit/GitHub/SimonScript
count=1
for file in $project/docs/kit_helper/*; do
    kit=${file##*/}
    folder=${kit##*__}
    folder=${folder%%.kit}
    until [ "$(perl -0777 -ne '/{\{([^}]*)}}/ && print $1,"\n";' $project/docs/kit_helper/$kit)" = "" ] || [ ! $count -lt 1000 ]
    do
        # echo $count
        # echo $folder
        count=`expr $count + 1`
        g=$(perl -0777 -ne '/{\{([^}]*)}}/ && print $1,"\n";' $project/docs/kit_helper/$kit)
        e=$(perl -0777 -pe "s|\n| |; s,.*function\s*([A-z0-9]+?\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))\s*\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\}|\{)*\})*\}(\n*.*)*,\2\1," $project/source/_functions/$folder/$g.js)
        
        # echo $g
        # echo $e
        gsed -i "s|{{$g}}|\n### $g\n\n<button class='btn' data-clipboard-text='$e\;'></button>\n{\: \.btn_p }\n\n\?\?\? '$e\;'\n    \`\`\` js linenums='1'\n\    <\!-- \@import '..\/..\/source\/_functions\/$folder\/$g.js' --\>\n    \`\`\`\n\n\[\]\(file\:\/\/$project\/source\/_functions\/$folder\/$g.js)\n|g; s|'|\"|g" $project/docs/kit_helper/$kit

    done
done




