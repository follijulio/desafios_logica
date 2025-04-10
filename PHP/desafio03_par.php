<?php
function ehpar($numero): int
{
    if ($numero % 2 == 0 || $numero == 0) {
        return 1;
    }

    return 0;
}




function main()
{
    echo ehpar(4) == 1 ? 'true' : "false";
    echo "\n";
    echo ehpar(7) == 1 ? 'true' : "false";
    echo "\n";
    echo ehpar(0) == 1 ? 'true' : "false";
}


main();
