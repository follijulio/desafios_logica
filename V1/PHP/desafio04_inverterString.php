<?php

function inverter($string): string
{
    return strrev($string);
}


function main()
{
    echo inverter("PHP");
    echo "\n";
    echo inverter("código");
    echo "\n";                   
    echo inverter("12345");
}

main();
