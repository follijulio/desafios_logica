<?php

function multiplicaArray(array $array): float
{
    $multiplicacao = 0;

    for ($i = 0; $i < count($array); $i++) {
        if ($i == 0) {
            $multiplicacao = $array[$i];
        }

        $multiplicacao *= $array[$i];
    }
    return $multiplicacao;
}


function main(): void
{
    echo multiplicaArray(array(1, 2, 3, 4));
}




main();
