<?php

function somaDigitos($valor): int
{
    $soma = 0;
    $valor = strval($valor);
    $valor = str_split($valor);
    $soma = 0;
    foreach ($valor as $value) {
        $soma += $value;
    }
    return $soma;
}
function main(): void
{
    $valor = 222;

    echo $soma = somaDigitos($valor);
}

main();
