<?php
function maior(array $array)
{

    $maior = 0;
    for ($i = 0; $i < count($array); $i++) {
        if ($array[$i] > $maior || $i == 0) {
            $maior = $array[$i];
        }
    }
    return $maior;
}

function main(): void
{

    $maior = maior(array(2, 3, 4, 5, 67, 8, 6, 10));
    echo $maior;
}

main();
