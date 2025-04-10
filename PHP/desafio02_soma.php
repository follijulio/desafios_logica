<?php

function soma($numero1, $numero2): int
{
    return $numero1 + $numero2;
}
function main()
{
    echo soma(10, 5);
    echo "\n";

    echo soma(-2, 3);
    echo "\n";
    echo soma(100, 200);
}


main();
