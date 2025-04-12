<?php

function primo(int $n): string
{
    if ($n < 2) {
        return "false";
    }
    
    for ($i = 3; $i <= $n - 1; $i++) {
        if ($i % 2 == 0) {
            return "false";
        }
    }
    return "true";
}

function main(): void
{
    echo primo(3);
}
main();
