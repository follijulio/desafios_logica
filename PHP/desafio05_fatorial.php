<?php

function fatorial($n): int
{

    $valor = $n;
    for ($i = $n - 1; $i > 0; $i--) {
        $valor *= $i;
    }
    return $valor > 0 ? $valor : 1;
}

function main(): void
{
    echo fatorial(5);
    echo "\n";
    echo fatorial(0); 
    echo "\n";
    echo fatorial(3); 

}
main();
