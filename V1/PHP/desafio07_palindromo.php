<?php
function palindromo($string): int
{
    if ($string == strrev($string)) {
        return 1;
    }
    return 0;
}



function main(): void
{
    echo palindromo("radar") == 1 ? "true" : "false";
    echo "\n";
    echo palindromo("palindromo") == 1 ? "true" : "false";
    echo "\n";
    echo palindromo("ana") == 1 ? "true" : "false";
}

main();
