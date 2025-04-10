<?php

function contarVogais($string): int
{
    $lowString = strtolower($string);
    $vogais = ["a", 'e', 'i',  'o', 'u'];
    $contador = 0;
    for ($i = 0; $i < strlen($lowString); $i++) {
        if (in_array($lowString[$i], $vogais)) {
            $contador++;
        }
    }
    return $contador;
}


function main(): void
{
    echo contarVogais("php");
    echo "\n";
    echo contarVogais("código aberto");
    echo "\n";
    echo contarVogais("AEIOUaeiou");

}

main();
