<?php

function somaDigitos(array $array): int
{
    return array_reduce($array, function ($carry, $item) {
        return $carry + $item;
    }, 0);
}

function main(): void
{
    echo somaDigitos([1, 2, 3, 4]);
}

main();
